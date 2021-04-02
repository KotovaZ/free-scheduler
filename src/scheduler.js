import React from "react";
import moment from "moment";
import ResourceRow from "./resourceRow";
import Resource from "./resource";

export default function Scheduler(props) {
  let res = initResources(props.resources);
  const [sections, setSections] = React.useState([]);
  const [resources, setResources] = React.useState(res);

  function initResources() {
    return props.resources.map(function (res) {
      return new ResourceData(res)
    });
  }

  function ResourceData(res) {
    Object.assign(this, res)
    this.setRef = (ref) => {
      this.ref = ref;
    }
    this.base = <Resource key={`${res.id}`} {...res} setRef={this.setRef} config={props.config.resource} />;
    return this;
  }

  React.useEffect(() => {
    const steps = Math.ceil((props.config.end - props.config.start) / props.config.interval);
    let result = [];
    let startPoint = props.config.start.getTime();
    for (let i = 0; i < steps; i++) {
      result.push([new Date(startPoint + props.config.interval * i), new Date(startPoint + props.config.interval * (i + 1))]);
    }
    setSections(result);
  }, [props.config.end, props.config.start]);

  React.useEffect(() => {
    let res = initResources(props.resources);
    setResources(res);
  }, [props.resources]);

  const header = () => {
    return sections.map((section, i) => {
      return (
        <div key={`column_${i}`} className="sc-cell">
          <span>{moment(section[0]).format("DD.MM HH:mm").replace(" ", "\n")}</span>
        </div>
      );
    });
  };

  const body = () => {
    return resources.map((resource) => {
      return (
        <ResourceRow
          key={`rr)${resource.id}`}
          resource={resource}
          events={props.events.filter(
            (event) => event.resourceId === resource.id
          )}
          sections={sections}
          config={props.config}
        />
      );
    });
  };

  const resourceList = () => {
    return resources.map((resource) => resource.base);
  };

  return (
    <div className="sc">
      <div className="sc-table">
        <div className="sc-row sc-header sticky-y">
          <div className="sc-cell sc-resource" style={{ minWidth: props.config.resource.width }}>
            <span>{props.config.resource.title}</span>
          </div>
          {header()}
        </div>
        <div className="sc-body">
          <div className="sc-resources sticky-x">{resourceList()}</div>
          <div className="sc-events">{body()}</div>
        </div>
      </div>
    </div>
  );
}

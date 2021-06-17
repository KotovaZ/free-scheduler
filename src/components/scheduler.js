import React from "react";
import moment from "moment";
import Config from "../config";
import ResourceRow from "./resourceRow";
import Resource from "./resource";

export default function Scheduler(props) {
  const ScheduleConfig = new Config(props.config);
  const [config, setConfig] = React.useState(ScheduleConfig);
  const [cellWidth, setCellWidth] = React.useState(config.cellWidth);

  let res = initResources(props.resources);
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
    this.base = <Resource key={`${res.id}`} {...res} setRef={this.setRef} config={config.resource} />;
    return this;
  }

  React.useEffect(() => {
    setConfig(new Config(props.config));
  }, [props.config]);

  React.useEffect(() => {
    let res = initResources(props.resources);
    setResources(res);
  }, [props.resources]);

  React.useEffect(() => {
    setCellWidth(config.cellWidth);
  }, [config]);

  const header = () => {
    return config.timeLine.sections
      .map((section, i) => {
        return (
          <div key={`column_${i}`} className="sc-cell" style={{ minWidth: `${cellWidth}px` }}>
            {config.showDayName && 
              <div className="sc-subcell top sc-caption">{moment(section[0]).locale("ru").format('ddd')}</div>}
            <span>{moment(section[0]).format(config.dateFormat).replace(" ", "\n")}</span>
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
          sections={config.timeLine.sections}
          config={config}
          cellWidth={cellWidth}
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
          <div className="sc-cell sc-resource" style={{ minWidth: `${config.resource.width}px` }}>
            <span>{config.resource.title}</span>
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

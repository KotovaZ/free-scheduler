import React from "react";
import moment from "moment";
import ResourceRow from "./resourceRow";
import Resource from "./resource";
import "./sass/scheduler.sass";

export default function Scheduler(props) {
  const [marks, setMarks] = React.useState([]);
  const [resources, setResources] = React.useState(
    initResources(props.resources)
  );
  const interval = 3600000;

  function initResources(resources) {
    return resources.map(function (res) {
      res.ref = React.useRef();
      res.base = <Resource key={`${res.id}`} {...res} ref={res.ref} />;
      res.setHeight = function (height) {
        this.height = height;
      };
      return res;
    });
  }

  React.useEffect(() => {
    const steps = Math.ceil((props.config.end - props.config.start) / 3600000);
    let result = [];
    let startPoint = props.config.start.getTime();
    for (let i = 0; i < steps; i++) {
      result.push(new Date(startPoint + interval * i));
    }
    setMarks(result);
  }, [props.config.end, props.config.start]);

  const header = () => {
    return marks.map((mark, i) => {
      return (
        <div key={`column_${i}`} className="sc-cell">
          <span>{moment(mark).format("DD.MM HH:mm").replace(" ", "\n")}</span>
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
          marks={marks}
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
        <div className="sc-timeline">
          <div className="sc-row sc-header sticky-y">
            <div className="sc-cell sc-resource">
              <span>Пользователь</span>
            </div>
            {header()}
          </div>
          <div className="sc-body">
            <div className="sc-resources sticky-x">{resourceList()}</div>
            <div className="sc-events">{body()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Event from "./event";
import EventsManager from "../eventsManager";
import ResourceCells from "./resourceCells";

export default function ResourceRow(props) {
  let eventsManager = new EventsManager(props.events, props.resource, props.config)

  return (
    <div
      className="sc-row"
      data-resource={props.resource.id}
      key={`rr_${props.resource.id}`}
      style={{ height: `${props.resource.view.height}px` }}
    >
      <ResourceCells items={props.sections} resource={props.resource} config={eventsManager.config} cellWidth={props.cellWidth} />

      {
        eventsManager.events
        .filter(event => event.timeCrossing > 0)
        .map((event) => {
          return <Event key={`event_${event.id}`} {...event} />;
        })
      }
    </div>
  );
}
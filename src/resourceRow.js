import React from "react";
import moment from "moment";
import Event from "./event";
import ResourceCells from "./resourceCells";

export default function ResourceRow(props) {
  checkCollisions(props.events, props.resource, props.config);

  return (
    <div
      className="sc-row"
      data-resource={props.resource.id}
      key={`rr_${props.resource.id}`}
      style={{ height: `${props.resource.view.height}px` }}
    >
      <ResourceCells items={props.sections} resource={props.resource} config={props.config}/>

      {props.events.sort(sortEvents).map((event) => {
        return <Event key={`event_${event.id}`} {...event} />;
      })}
    </div>
  );
}

let sortEvents = (a, b) => {
  const diff = a.start - b.start;
  const diff2 = a.id - b.id;
  return diff == 0 ? (diff2 > 0 ? 1 : -1) : diff > 0 ? 1 : -1;
};

function checkCollisions(events, resource, config) {
  resource.view = {
    height: 0,
  };

  if (!events.length) return 0;

  events.forEach((event) => {
    event.collision = [];
  });

  events.forEach((event) => {
    events.forEach((subEvent) => {
      if (
        event.collision.indexOf(subEvent) >= 0 ||
        subEvent.finish <= event.start ||
        subEvent.start >= event.end ||
        subEvent.id == event.id
      )
        return;

      if (
        (subEvent.start >= event.start && subEvent.start < event.finish) ||
        (subEvent.finish >= event.start && subEvent.finish < event.finish) ||
        (subEvent.start < event.start && subEvent.finish > event.finish)
      ) {
        event.collision.push(subEvent);
        subEvent.collision.push(event);
      }
    });
  });

  let period = config.end - config.start;

  events.sort(sortEvents).map((event, i) => {
    let eStart =
      config.end - (event.start < config.start ? config.start : event.start);

    event.start = getEventDate(event.start);
    event.finish = getEventDate(event.finish);
    event.position = {
      left: 100 - (eStart * 100) / period,
      top: 0,
    };

    event.view = {
      width: 0,
      height: 20,
    };

    if (event.collision.length > 0) {
      let collisions = [...event.collision, event].sort(sortEvents);
      let eventRow = collisions.findIndex((item) => item.id == event.id);

      if (eventRow == 0) {
        event.row = 0;
      } else {
        let freeRows = [];
        let blockedRows = [];
        let items = collisions.slice(0, eventRow).sort((a, b) => {
          const diff = a.row - b.row;
          return diff > 0 ? 1 : -1;
        });

        for (let z in items) {
          z = parseInt(z);
          blockedRows.push(items[z].row);
          if (z != items[z].row && blockedRows.indexOf(z) < 0) {
            freeRows.push(z);
          }
        }

        freeRows = freeRows.filter((r) => r != undefined);
        if (freeRows.length > 0) {
          event.row = freeRows[0];
        } else {
          let newRowPosition = 0;
          while (true) {
            if (blockedRows.indexOf(newRowPosition) < 0) {
              event.row = newRowPosition;
              break;
            }
            newRowPosition += 1;
          }
        }
      }
    } else {
      event.row = 0;
    }
    event.position.top = event.row * 35;
    resource.view.height =
      event.row > resource.view.height ? event.row : resource.view.height;
    event.view.width =
      (((event.finish > config.end ? config.end : event.finish) -
        (event.start < config.start ? config.start : event.start)) *
        100) /
      period;
  });

  resource.view.height = (resource.view.height + 1) * 35;
  resource.view.height = resource.view.height < 50 ? 50 : resource.view.height;
  //console.log(resource);
  //resource.setHeight(`${resource.view.height}px`);
  if (resource.ref.current)
    resource.ref.current.style.height = `${resource.view.height}px`
}

const getEventDate = (dt) => {
  return typeof dt == "string" ? new Date(dt) : dt;
}

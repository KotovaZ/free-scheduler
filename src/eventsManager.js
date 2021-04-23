import Event from './event';

export default class EventsManager {
  collisions = [];
  constructor(events, resource, config) {
    Object.assign(this, { resource, config });

    this.events = events.map((event) => {
      return new Event(event, this.config.timeLine);
    });

    this.resource.view = {
      height: 0,
    };

    if (this.events.length > 0) {
      this.period = (this.config.end - this.config.start);
      this.setEventCollisions();
      this.events
        .sort(this.sortFn)
        .forEach(this.prepareEvent.bind(this));
    }

    this.resource.view.height = (this.resource.view.height + 1) * 35;
    this.resource.view.height = this.resource.view.height < 50 ? 50 : this.resource.view.height;
    if (this.resource.ref.current) {
      this.resource.ref.current.style.height = `${this.resource.view.height}px`
    }
  }

  setEventCollisions() {

    this.events.forEach((event) => {
      this.events.forEach((subEvent) => {
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
  }

  sortFn(a, b) {
    const diff = a.start - b.start;
    if (diff == 0) {
      const diff2 = b.finish - a.finish;
      if (diff2 == 0) {
        const diff3 = a.id - b.id;
        return diff3 > 0 ? 1 : -1
      } else {
        return diff2 > 0 ? 1 : -1;
      }
    } else {
      return diff > 0 ? 1 : -1;
    }
  };

  prepareEvent(event, i) {
    if (event.collision.length > 0) {
      let collisions = [...event.collision, event].sort(this.sortFn);
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
    this.resource.view.height =
      event.row > this.resource.view.height ? event.row : this.resource.view.height;
      
    return event
  }

  getEventDate(dt) {
    return typeof dt == "string" ? new Date(dt) : dt;
  }
}
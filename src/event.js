export default class Event {
  collision = [];
  timeCrossing = 0;
  row = 0;
  view = {
    width: 0,
    height: 20,
  };
  position = {
    left: 0,
    top: 0,
  };

  constructor(data, timeline) {
    Object.assign(this, { ...data, timeline });
    this.start = this.date(data.start);
    this.finish = this.date(data.finish);
    Object.assign(this, this.timeline.getTimeCrossing(this.start, this.finish));
    this.view.width = this.width;
    this.position.left = this.startPosition;
    //console.log(this.startPosition);
  }

  get width() {
    if (this.timeline.config.byWorkTime) {
      return 100 * (this.timeCrossing) / (this.timeline.period * this.timeline.hours / 24);
    } else {
      return 100 * ((this.finish > this.timeline.config.end ? this.timeline.config.end : this.finish) -
        (this.start < this.timeline.config.start ? this.timeline.config.start : this.start)) /
        this.timeline.period;
    }
  }

  get duration() {
    return this.finish - this.start;
  }

  date(dt) {
    return typeof dt == "string" ? new Date(dt) : dt;
  }
}
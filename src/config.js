import TimeLine from "./timeLine";

export default class Config {
  start = (new Date()).setHours(0, 0, 0, 0);
  end = (new Date()).setHours(23, 59, 59, 999);
  interval = 3600000;
  workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  byWorkTime = false;
  adaptiveColumnWidth = true;
  resource = {
    width: 200,
    title: 'Resource'
  }

  constructor(params) {
    this.init(params);
  }

  init(config) {
    Object.assign(this, config);
    this.timeLine = new TimeLine(this);
  }

  get cellWidth() {
    if (!this.adaptiveColumnWidth) return 90;
    return (this.parent.offsetWidth - this.resource.width) / 24;
  }
}
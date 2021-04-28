export default class TimeLine {
  sections = [];

  constructor(config) {
    this.config = config;
    this.setSections();
  }

  setSections() {
    let result = [];
    const steps = Math.ceil((this.config.end - this.config.start) / this.config.interval);
    let startPoint = this.config.start.getTime();
    for (let i = 0; i < steps; i++) {
      const start = new Date(startPoint + this.config.interval * i);
      const finish = new Date(startPoint + this.config.interval * (i + 1));

      if (this.config.byWorkTime && !this.checkWorkingTime(start)) continue;

      const className = this.config.byWorkTime && start.getHours() == this.config.workingHours[0] ? 'start' : '';
      let section = [start, finish, className];
      result.push(section);
    }
    this.sections = result;
    return this.sections;
  }

  checkWorkingTime(dt) {
    const sectionStartHour = dt.getHours();
    return this.config.workingHours.indexOf(sectionStartHour) >= 0;
  }

  getTimeCrossing(start, finish) {
    let result = { timeCrossing: 0, startPosition: false };
    const startTime = new Date(start < this.config.start ? this.config.start : start);
    const finishTime = new Date(finish > this.config.end ? this.config.end : finish);


    if (start < this.config.start && finish < this.config.start || start > this.config.end && finish > this.config.end) {
      return result;
    }

    if (!this.config.byWorkTime) {
      result.timeCrossing = finishTime - startTime;
      result.startPosition = this.getTimeMarkPosition(startTime);
      return result;
    }

    const hours = (finishTime - startTime) / this.config.interval;
    
    if (!this.checkWorkingTime(startTime)) {
      startTime.setMinutes(0, 0, 0);
    }

    for (var i = 0; i < Math.ceil(hours); i++) {
      var stepStart = new Date(startTime.getTime() + i * this.config.interval);
      var stepFinish = new Date(startTime.getTime() + (i + 1) * this.config.interval);
      stepFinish = stepFinish > finishTime ? finishTime : stepFinish;

      if (stepStart >= finishTime) break;

      const start_inTimeLine = this.checkWorkingTime(stepStart);
      const finish_inTimeLine = this.checkWorkingTime(stepFinish);

      if (start_inTimeLine && finish_inTimeLine) {
        result.timeCrossing += (stepFinish - stepStart);
      } else if (finish_inTimeLine) {
        result.timeCrossing += stepFinish - (new Date(stepFinish)).setMinutes(0, 0, 0);
      } else if (start_inTimeLine) {
        result.timeCrossing += (new Date(stepStart)).setMinutes(0, 0, 0) + 3600000 - stepStart;
      }
      
      if (start_inTimeLine && result.startPosition === false) {
        result.startPosition = this.getTimeMarkPosition(stepStart);
      } else if (finish_inTimeLine && result.startPosition === false) {
        stepStart.setMinutes(0, 0, 0);
        while (stepStart < stepFinish) {
          stepStart.setHours(stepStart.getHours() + 1);
          if (this.checkWorkingTime(stepStart)) {
            result.startPosition = this.getTimeMarkPosition(stepStart);
            break;
          }
        }
      }
    }

    return result;
  }

  getTimeMarkPosition(mark) {
    if (!this.config.byWorkTime) {
      let eStart = this.config.end - (mark < this.config.start ? this.config.start : mark);
      return 100 - (eStart * 100) / this.period;
    }

    let startOfMark = new Date(mark);
    startOfMark.setMinutes(0, 0, 0);

    let sectionIndex = this.sections.findIndex(section => section[0].getTime() === startOfMark.getTime());
    if (sectionIndex < 0) return -1;

    let position = sectionIndex * this.config.interval;
    const section = this.sections[sectionIndex];

    if (mark.getTime() > startOfMark.getTime()) {
      position += this.config.interval * (mark - section[0]) / (section[1] - section[0]);
    }

    return (100 * position) / ((this.sections.length) * this.config.interval);
  }

  get hours() {
    return this.config.byWorkTime ? this.config.workingHours.length : 24;
  }

  get period() {
    return this.config.end - this.config.start;
  }
}
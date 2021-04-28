"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimeLine = /*#__PURE__*/function () {
  function TimeLine(config) {
    _classCallCheck(this, TimeLine);

    _defineProperty(this, "sections", []);

    this.config = config;
    this.setSections();
  }

  _createClass(TimeLine, [{
    key: "setSections",
    value: function setSections() {
      var result = [];
      var steps = Math.ceil((this.config.end - this.config.start) / this.config.interval);
      var startPoint = this.config.start.getTime();

      for (var i = 0; i < steps; i++) {
        var start = new Date(startPoint + this.config.interval * i);
        var finish = new Date(startPoint + this.config.interval * (i + 1));
        if (this.config.byWorkTime && !this.checkWorkingTime(start)) continue;
        var className = this.config.byWorkTime && start.getHours() == this.config.workingHours[0] ? 'start' : '';
        var section = [start, finish, className];
        result.push(section);
      }

      this.sections = result;
      return this.sections;
    }
  }, {
    key: "checkWorkingTime",
    value: function checkWorkingTime(dt) {
      var sectionStartHour = dt.getHours();
      return this.config.workingHours.indexOf(sectionStartHour) >= 0;
    }
  }, {
    key: "getTimeCrossing",
    value: function getTimeCrossing(start, finish) {
      var result = {
        timeCrossing: 0,
        startPosition: false
      };
      var startTime = start < this.config.start ? this.config.start : start;
      var finishTime = finish > this.config.end ? this.config.end : finish;

      if (start < this.config.start && finish < this.config.start || start > this.config.end && finish > this.config.end) {
        return result;
      }

      if (!this.config.byWorkTime) {
        result.timeCrossing = finishTime - startTime;
        result.startPosition = this.getTimeMarkPosition(startTime);
        return result;
      }

      var hours = (finishTime - startTime) / this.config.interval;

      for (var i = 0; i < Math.round(hours); i++) {
        var stepStart = new Date(startTime.getTime() + i * this.config.interval);
        var stepFinish = new Date(startTime.getTime() + (i + 1) * this.config.interval);
        stepFinish = stepFinish > finishTime ? finishTime : stepFinish;
        var start_inTimeLine = this.checkWorkingTime(stepStart);
        var finish_inTimeLine = this.checkWorkingTime(stepFinish);

        if (start_inTimeLine && finish_inTimeLine) {
          result.timeCrossing += this.config.interval;
        } else if (finish_inTimeLine) {
          result.timeCrossing += stepFinish - new Date(stepFinish).setMinutes(0, 0, 0);
        } else if (start_inTimeLine) {
          result.timeCrossing += new Date(stepStart).setMinutes(0, 0, 0) + 3600000 - stepStart;
        }

        if (start_inTimeLine && result.startPosition === false) {
          result.startPosition = this.getTimeMarkPosition(stepStart);
        } else if (finish_inTimeLine && result.startPosition === false) {
          result.startPosition = 0;
        }
      }

      return result;
    }
  }, {
    key: "getTimeMarkPosition",
    value: function getTimeMarkPosition(mark) {
      if (!this.config.byWorkTime) {
        var eStart = this.config.end - (mark < this.config.start ? this.config.start : mark);
        return 100 - eStart * 100 / this.period;
      }

      var startOfMark = new Date(mark);
      startOfMark.setMinutes(0, 0, 0);
      var sectionIndex = this.sections.findIndex(function (section) {
        return section[0].getTime() === startOfMark.getTime();
      });
      if (sectionIndex < 0) return -1;
      var position = sectionIndex * this.config.interval;
      var section = this.sections[sectionIndex];

      if (mark.getTime() > startOfMark.getTime()) {
        position += this.config.interval * (mark - section[0]) / (section[1] - section[0]);
      }

      return 100 * position / (this.sections.length * this.config.interval);
    }
  }, {
    key: "hours",
    get: function get() {
      return this.config.byWorkTime ? this.config.workingHours.length : 24;
    }
  }, {
    key: "period",
    get: function get() {
      return this.config.end - this.config.start;
    }
  }]);

  return TimeLine;
}();

exports["default"] = TimeLine;
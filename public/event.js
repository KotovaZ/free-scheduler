"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Event = /*#__PURE__*/function () {
  function Event(data, timeline) {
    _classCallCheck(this, Event);

    _defineProperty(this, "collision", []);

    _defineProperty(this, "timeCrossing", 0);

    _defineProperty(this, "row", 0);

    _defineProperty(this, "view", {
      width: 0,
      height: 20
    });

    _defineProperty(this, "position", {
      left: 0,
      top: 0
    });

    Object.assign(this, _objectSpread(_objectSpread({}, data), {}, {
      timeline: timeline
    }));
    this.start = this.date(data.start);
    this.finish = this.date(data.finish);
    Object.assign(this, this.timeline.getTimeCrossing(this.start, this.finish));
    this.view.width = this.width;
    this.position.left = this.startPosition; //console.log(this.startPosition);
  }

  _createClass(Event, [{
    key: "width",
    get: function get() {
      if (this.timeline.config.byWorkTime) {
        return 100 * this.timeCrossing / (this.timeline.period * this.timeline.hours / 24);
      } else {
        return 100 * ((this.finish > this.timeline.config.end ? this.timeline.config.end : this.finish) - (this.start < this.timeline.config.start ? this.timeline.config.start : this.start)) / this.timeline.period;
      }
    }
  }, {
    key: "duration",
    get: function get() {
      return this.finish - this.start;
    }
  }, {
    key: "date",
    value: function date(dt) {
      return typeof dt == "string" ? new Date(dt) : dt;
    }
  }]);

  return Event;
}();

exports["default"] = Event;
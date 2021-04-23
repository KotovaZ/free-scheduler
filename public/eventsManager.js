"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _event = _interopRequireDefault(require("./event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventsManager = /*#__PURE__*/function () {
  function EventsManager(events, resource, config) {
    var _this = this;

    _classCallCheck(this, EventsManager);

    _defineProperty(this, "collisions", []);

    Object.assign(this, {
      resource: resource,
      config: config
    });
    this.events = events.map(function (event) {
      return new _event["default"](event, _this.config.timeLine);
    });
    this.resource.view = {
      height: 0
    };

    if (this.events.length > 0) {
      this.period = this.config.end - this.config.start;
      this.setEventCollisions();
      this.events.sort(this.sortFn).forEach(this.prepareEvent.bind(this));
    }

    this.resource.view.height = (this.resource.view.height + 1) * 35;
    this.resource.view.height = this.resource.view.height < 50 ? 50 : this.resource.view.height;

    if (this.resource.ref.current) {
      this.resource.ref.current.style.height = "".concat(this.resource.view.height, "px");
    }
  }

  _createClass(EventsManager, [{
    key: "setEventCollisions",
    value: function setEventCollisions() {
      var _this2 = this;

      this.events.forEach(function (event) {
        _this2.events.forEach(function (subEvent) {
          if (event.collision.indexOf(subEvent) >= 0 || subEvent.finish <= event.start || subEvent.start >= event.end || subEvent.id == event.id) return;

          if (subEvent.start >= event.start && subEvent.start < event.finish || subEvent.finish >= event.start && subEvent.finish < event.finish || subEvent.start < event.start && subEvent.finish > event.finish) {
            event.collision.push(subEvent);
            subEvent.collision.push(event);
          }
        });
      });
    }
  }, {
    key: "sortFn",
    value: function sortFn(a, b) {
      var diff = a.start - b.start;

      if (diff == 0) {
        var diff2 = b.finish - a.finish;

        if (diff2 == 0) {
          var diff3 = a.id - b.id;
          return diff3 > 0 ? 1 : -1;
        } else {
          return diff2 > 0 ? 1 : -1;
        }
      } else {
        return diff > 0 ? 1 : -1;
      }
    }
  }, {
    key: "prepareEvent",
    value: function prepareEvent(event, i) {
      if (event.collision.length > 0) {
        var collisions = [].concat(_toConsumableArray(event.collision), [event]).sort(this.sortFn);
        var eventRow = collisions.findIndex(function (item) {
          return item.id == event.id;
        });

        if (eventRow == 0) {
          event.row = 0;
        } else {
          var freeRows = [];
          var blockedRows = [];
          var items = collisions.slice(0, eventRow).sort(function (a, b) {
            var diff = a.row - b.row;
            return diff > 0 ? 1 : -1;
          });

          for (var z in items) {
            z = parseInt(z);
            blockedRows.push(items[z].row);

            if (z != items[z].row && blockedRows.indexOf(z) < 0) {
              freeRows.push(z);
            }
          }

          freeRows = freeRows.filter(function (r) {
            return r != undefined;
          });

          if (freeRows.length > 0) {
            event.row = freeRows[0];
          } else {
            var newRowPosition = 0;

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
      this.resource.view.height = event.row > this.resource.view.height ? event.row : this.resource.view.height;
      return event;
    }
  }, {
    key: "getEventDate",
    value: function getEventDate(dt) {
      return typeof dt == "string" ? new Date(dt) : dt;
    }
  }]);

  return EventsManager;
}();

exports["default"] = EventsManager;
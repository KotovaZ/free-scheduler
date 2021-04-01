"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResourceRow;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _event = _interopRequireDefault(require("./event"));

var _resourceCells = _interopRequireDefault(require("./resourceCells"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ResourceRow(props) {
  checkCollisions(props.events, props.resource, props.config);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-row",
    "data-resource": props.resource.id,
    key: "rr_".concat(props.resource.id),
    style: {
      height: "".concat(props.resource.view.height, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement(_resourceCells["default"], {
    items: props.sections,
    resource: props.resource,
    config: props.config
  }), props.events.sort(sortEvents).map(function (event) {
    return /*#__PURE__*/_react["default"].createElement(_event["default"], _extends({
      key: "event_".concat(event.id)
    }, event));
  }));
}

var sortEvents = function sortEvents(a, b) {
  var diff = a.start - b.start;
  var diff2 = a.id - b.id;
  return diff == 0 ? diff2 > 0 ? 1 : -1 : diff > 0 ? 1 : -1;
};

function checkCollisions(events, resource, config) {
  resource.view = {
    height: 0
  };
  if (!events.length) return 0;
  events.forEach(function (event) {
    event.collision = [];
  });
  events.forEach(function (event) {
    events.forEach(function (subEvent) {
      if (event.collision.indexOf(subEvent) >= 0 || subEvent.finish <= event.start || subEvent.start >= event.end || subEvent.id == event.id) return;

      if (subEvent.start >= event.start && subEvent.start < event.finish || subEvent.finish >= event.start && subEvent.finish < event.finish || subEvent.start < event.start && subEvent.finish > event.finish) {
        event.collision.push(subEvent);
        subEvent.collision.push(event);
      }
    });
  });
  var period = config.end - config.start;
  events.sort(sortEvents).map(function (event, i) {
    var eStart = config.end - (event.start < config.start ? config.start : event.start);
    event.start = getEventDate(event.start);
    event.finish = getEventDate(event.finish);
    event.position = {
      left: 100 - eStart * 100 / period,
      top: 0
    };
    event.view = {
      width: 0,
      height: 20
    };

    if (event.collision.length > 0) {
      var collisions = [].concat(_toConsumableArray(event.collision), [event]).sort(sortEvents);
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
    resource.view.height = event.row > resource.view.height ? event.row : resource.view.height;
    event.view.width = ((event.finish > config.end ? config.end : event.finish) - (event.start < config.start ? config.start : event.start)) * 100 / period;
  });
  resource.view.height = (resource.view.height + 1) * 35;
  resource.view.height = resource.view.height < 50 ? 50 : resource.view.height; //console.log(resource);
  //resource.setHeight(`${resource.view.height}px`);

  if (resource.ref.current) resource.ref.current.style.height = "".concat(resource.view.height, "px");
}

var getEventDate = function getEventDate(dt) {
  return typeof dt == "string" ? new Date(dt) : dt;
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResourceRow;

var _react = _interopRequireDefault(require("react"));

var _event = _interopRequireDefault(require("./event"));

var _eventsManager = _interopRequireDefault(require("../eventsManager"));

var _resourceCells = _interopRequireDefault(require("./resourceCells"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ResourceRow(props) {
  var eventsManager = new _eventsManager["default"](props.events, props.resource, props.config);
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
    config: eventsManager.config,
    cellWidth: props.cellWidth
  }), eventsManager.events.filter(function (event) {
    return event.timeCrossing > 0;
  }).map(function (event) {
    return /*#__PURE__*/_react["default"].createElement(_event["default"], _extends({
      key: "event_".concat(event.id)
    }, event));
  }));
}
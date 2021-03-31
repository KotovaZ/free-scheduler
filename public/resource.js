"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./sass/scheduler.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Resource = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var view = props.hasOwnProperty('render') ? function () {
    return props.render(props);
  } : defaultView;

  function defaultView() {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "sc-resource-title"
    }, props.name);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-row",
    style: {
      height: props.height
    },
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-cell sc-resource"
  }, view()));
});

var _default = Resource;
exports["default"] = _default;
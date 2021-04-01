"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Resource = function Resource(props) {
  var view = props.hasOwnProperty('render') ? function () {
    return props.render(props);
  } : defaultView;
  var ref;

  if (props.ref == null) {
    ref = _react["default"].useRef();
    props.setRef(ref);
  } else {
    ref = props.ref;
  }

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
};

var _default = Resource;
exports["default"] = _default;
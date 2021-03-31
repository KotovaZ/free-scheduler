"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Resources;

var _react = _interopRequireDefault(require("react"));

var _resource = _interopRequireDefault(require("./resource"));

require("./sass/scheduler.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Resources(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.items.map(function (resource) {
    return /*#__PURE__*/_react["default"].createElement(_resource["default"], _extends({
      key: "".concat(resource.id, "_").concat(resource.id)
    }, resource, {
      height: resource.height
    }));
  }));
}
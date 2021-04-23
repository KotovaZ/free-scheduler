"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResourceCells;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _timeLine = _interopRequireDefault(require("../timeLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ResourceCells(props) {
  var checkSectionWorkingTime = _timeLine["default"].checkWorkingTime;

  if (props.resource.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.resource.checkWorkingTime;
  } else if (props.config.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.config.checkWorkingTime;
  }

  return props.items.map(function (section, i) {
    var classes = ['sc-cell', section[2]];
    if (checkSectionWorkingTime(section)) classes.push('working');
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "cell_".concat(props.resource.id, "_").concat(i),
      className: classes.join(' '),
      style: {
        minWidth: props.cellWidth
      }
    });
  });
}
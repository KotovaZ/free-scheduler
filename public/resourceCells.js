"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ResourceCells;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ResourceCells(props) {
  var checkSectionWorkingTime = checkWorkingTime;

  if (props.resource.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.resource.checkWorkingTime;
  } else if (props.config.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.config.checkWorkingTime;
  }

  return props.items.map(function (section, i) {
    //const alt = `${moment(section[0]).format('HH:mm')} - ${moment(section[1]).format('HH:mm')}`;
    var classes = ['sc-cell'];
    if (checkSectionWorkingTime(section)) classes.push('working');
    return /*#__PURE__*/_react["default"].createElement("div", {
      //title={alt}
      key: "cell_".concat(props.resource.id, "_").concat(i),
      className: classes.join(' ')
    });
  });
}

var checkWorkingTime = function checkWorkingTime(sectionDate) {
  var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  var sectionStartHour = sectionDate[0].getHours();
  return workingHours.indexOf(sectionStartHour) >= 0;
};
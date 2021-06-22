"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Event;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactjsPopup = _interopRequireDefault(require("reactjs-popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Event(props) {
  var type = props.hasOwnProperty('type') ? props.type : 'default';
  var handlers = {};

  if (props.hasOwnProperty('onClick')) {
    handlers.onClick = function () {
      props.onClick(props);
    };
  }

  var popupTitle = function popupTitle() {
    var start = (0, _moment["default"])(props.start);
    var finish = (0, _moment["default"])(props.finish);

    if (start.get('D') == finish.get('D')) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "popup-title"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "range info-text"
      }, (0, _moment["default"])(props.start).format('HH:mm'), " - ", (0, _moment["default"])(props.finish).format('HH:mm')), (0, _moment["default"])(props.start).format('DD.MM.Y'));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "popup-title"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "range"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "info-text"
      }, (0, _moment["default"])(props.start).format('HH:mm')), " ", (0, _moment["default"])(props.start).format('DD.MM'), /*#__PURE__*/_react["default"].createElement("span", {
        className: "info-text"
      }, " - "), /*#__PURE__*/_react["default"].createElement("span", {
        className: "info-text"
      }, (0, _moment["default"])(props.finish).format('HH:mm')), " ", (0, _moment["default"])(props.finish).format('DD.MM')));
    }
  };

  var eventForm = function eventForm() {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: "sc-event sc-event-".concat(type),
      style: {
        left: "".concat(props.position.left, "%"),
        top: "".concat(props.position.top, "px"),
        width: "".concat(props.view.width, "%")
      }
    }, handlers), /*#__PURE__*/_react["default"].createElement("span", null, props.name));
  };

  return /*#__PURE__*/_react["default"].createElement(_reactjsPopup["default"], {
    on: "hover",
    trigger: eventForm,
    position: ['bottom center', 'top center', 'bottom left']
  }, popupTitle(), /*#__PURE__*/_react["default"].createElement("div", {
    className: "popup-body"
  }, props.link ? /*#__PURE__*/_react["default"].createElement("a", {
    className: "popup-link",
    href: props.link,
    target: "_blank"
  }, props.name) : props.name));
}
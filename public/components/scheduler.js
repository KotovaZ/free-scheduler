"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Scheduler;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _config = _interopRequireDefault(require("../config"));

var _resourceRow = _interopRequireDefault(require("./resourceRow"));

var _resource = _interopRequireDefault(require("./resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Scheduler(props) {
  var ScheduleConfig = new _config["default"](props.config);

  var _React$useState = _react["default"].useState(ScheduleConfig),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      config = _React$useState2[0],
      setConfig = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(config.cellWidth),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cellWidth = _React$useState4[0],
      setCellWidth = _React$useState4[1];

  var res = initResources(props.resources);

  var _React$useState5 = _react["default"].useState(res),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      resources = _React$useState6[0],
      setResources = _React$useState6[1];

  function initResources() {
    return props.resources.map(function (res) {
      return new ResourceData(res);
    });
  }

  function ResourceData(res) {
    var _this = this;

    Object.assign(this, res);

    this.setRef = function (ref) {
      _this.ref = ref;
    };

    this.base = /*#__PURE__*/_react["default"].createElement(_resource["default"], _extends({
      key: "".concat(res.id)
    }, res, {
      setRef: this.setRef,
      config: config.resource
    }));
    return this;
  }

  _react["default"].useEffect(function () {
    setConfig(new _config["default"](props.config));
  }, [props.config]);

  _react["default"].useEffect(function () {
    var res = initResources(props.resources);
    setResources(res);
  }, [props.resources]);

  _react["default"].useEffect(function () {
    setCellWidth(config.cellWidth);
  }, [config]);

  var header = function header() {
    return config.timeLine.sections.map(function (section, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "column_".concat(i),
        className: "sc-cell",
        style: {
          minWidth: "".concat(cellWidth, "px")
        }
      }, config.showDayName && /*#__PURE__*/_react["default"].createElement("div", {
        className: "sc-subcell top sc-caption"
      }, (0, _moment["default"])(section[0]).locale("ru").format('ddd')), /*#__PURE__*/_react["default"].createElement("span", null, (0, _moment["default"])(section[0]).format(config.dateFormat).replace(" ", "\n")));
    });
  };

  var body = function body() {
    return resources.map(function (resource) {
      return /*#__PURE__*/_react["default"].createElement(_resourceRow["default"], {
        key: "rr)".concat(resource.id),
        resource: resource,
        events: props.events.filter(function (event) {
          return event.resourceId === resource.id;
        }),
        sections: config.timeLine.sections,
        config: config,
        cellWidth: cellWidth
      });
    });
  };

  var resourceList = function resourceList() {
    return resources.map(function (resource) {
      return resource.base;
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-table"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-row sc-header sticky-y"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-cell sc-resource",
    style: {
      minWidth: "".concat(config.resource.width, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, config.resource.title)), header()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-resources sticky-x"
  }, resourceList()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sc-events"
  }, body()))));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _timeLine = _interopRequireDefault(require("./timeLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Config = /*#__PURE__*/function () {
  function Config(params) {
    _classCallCheck(this, Config);

    _defineProperty(this, "start", new Date().setHours(0, 0, 0, 0));

    _defineProperty(this, "end", new Date().setHours(23, 59, 59, 999));

    _defineProperty(this, "interval", 3600000);

    _defineProperty(this, "workingHours", [9, 10, 11, 12, 13, 14, 15, 16, 17]);

    _defineProperty(this, "byWorkTime", false);

    _defineProperty(this, "adaptiveColumnWidth", true);

    _defineProperty(this, "resource", {
      width: 200,
      title: 'Resource'
    });

    this.init(params);
  }

  _createClass(Config, [{
    key: "init",
    value: function init(config) {
      Object.assign(this, config);
      this.timeLine = new _timeLine["default"](this);
    }
  }, {
    key: "cellWidth",
    get: function get() {
      if (!this.adaptiveColumnWidth) return 90;
      return (this.parent.offsetWidth - this.resource.width) / 24;
    }
  }]);

  return Config;
}();

exports["default"] = Config;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

require("./sass/scheduler.sass");

var demoData = _interopRequireWildcard(require("./demoData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var resources = [{
  "id": "3",
  "name": "Татарников Василий",
  "img": "/upload/resize_cache/main/35c/50_50_2/1494592816133830021.jpg"
}, {
  "id": "12",
  "name": "Сазонов Даниил",
  "img": "/desktop/img/person.png"
}, {
  "id": "13",
  "name": "Кашевская Анна",
  "img": "/desktop/img/person.png"
}, {
  "id": "17",
  "name": "Воскобоева Дарья",
  "img": "/desktop/img/person.png"
}, {
  "id": "18",
  "name": "Аксёнова Галина",
  "img": "/desktop/img/person.png"
}, {
  "id": "21",
  "name": "Кузнецов Александр",
  "img": "/desktop/img/person.png"
}, {
  "id": "55",
  "name": "Патырило Станислав",
  "img": "/desktop/img/person.png"
}, {
  "id": "56",
  "name": "Гатапов Виктор",
  "img": "/desktop/img/person.png"
}, {
  "id": "57",
  "name": "Макаров Кирилл",
  "img": "/desktop/img/person.png"
}, {
  "id": "59",
  "name": "Костюченко Дарья",
  "img": "/upload/resize_cache/main/738/50_50_2/pwa_vertical_1024_2d15bdc3a3b0ae1a2308e91990187e78.jpg"
}];
setTimeout(function () {
  resources = [].concat(_toConsumableArray(resources), [{
    "id": "1311",
    "name": "Asdasd",
    "img": "/desktop/img/person.png"
  }]);
  console.log(resources);
}, 5000);

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_scheduler["default"], {
  config: {
    start: new Date('2020-01-09 00:00:00'),
    end: new Date('2020-01-13 23:59:59'),
    interval: 3600000
  },
  resources: resources,
  events: demoData.events
}), document.getElementById('root'));
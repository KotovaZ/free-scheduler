"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resources = exports.events = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var events = [{
  "resourceId": "3",
  "id": "129646",
  "name": "Провести разбор отрицательной оценки по обращению 123641",
  "start": "2020-01-03T04:06:03+08:00",
  "finish": "2020-01-09T08:00:03+08:00",
  "type": "danger",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "3",
  "id": "651231",
  "name": "Дежурство",
  "start": "2020-01-10T00:00:00+08:00",
  "finish": "2020-01-10T10:00:00+08:00",
  "type": "warning",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "65",
  "name": "Дежурство",
  "start": "2020-01-09T00:00:00+08:00",
  "finish": "2020-01-09T08:00:00+08:00",
  "type": "default",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "668",
  "name": "CRM: Обращение № 745",
  "start": "2020-01-10T17:00:00+08:00",
  "finish": "2020-01-10T18:00:00+08:00",
  "type": "danger",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "683",
  "name": "CRM: Обращение № 760",
  "start": "2020-01-10T16:00:00+08:00",
  "finish": "2020-01-10T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "701",
  "name": "CRM: Обращение № 778",
  "start": "2020-01-09T10:05:23+08:00",
  "finish": "2020-01-09T11:05:23+08:00",
  "type": "default",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "702",
  "name": "CRM: Обращение № 779",
  "start": "2020-01-09T10:14:07+08:00",
  "finish": "2020-01-09T11:14:07+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "710",
  "name": "CRM: Обращение № 787",
  "start": "2020-01-09T14:00:00+08:00",
  "finish": "2020-01-09T15:00:00+08:00",
  "type": "info",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "716",
  "name": ">>: 08.06.2020 О начале открытого бета-тестирования новой версии продукта \"1С:Облачный архив\" до 03 августа 2020 г. и прекращение работы текущей ве",
  "start": "2020-01-09T00:00:00+08:00",
  "finish": "2020-01-09T10:00:02+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  },
  'onClick': function onClick(e) {
    console.log(e);
  }
}, {
  "resourceId": "21",
  "id": "718",
  "name": "CRM: Обращение № 795",
  "start": "2020-01-09T09:17:59+08:00",
  "finish": "2020-01-09T10:17:59+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "736",
  "name": "CRM: Обращение № 813",
  "start": "2020-01-13T11:15:16+08:00",
  "finish": "2020-01-13T12:15:16+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "745",
  "name": "CRM: Обращение № 822",
  "start": "2020-01-13T09:00:00+08:00",
  "finish": "2020-01-13T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "746",
  "name": "CRM: Обращение № 823",
  "start": "2020-01-10T14:13:06+08:00",
  "finish": "2020-01-10T15:13:06+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "747",
  "name": "CRM: Обращение № 824",
  "start": "2020-01-09T09:22:05+08:00",
  "finish": "2020-01-09T10:22:05+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "757",
  "name": "CRM: Обращение № 834",
  "start": "2020-01-09T09:30:00+08:00",
  "finish": "2020-01-09T10:30:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "760",
  "name": "CRM: Обращение № 837",
  "start": "2020-01-09T10:00:00+08:00",
  "finish": "2020-01-09T11:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "761",
  "name": "CRM: Обращение № 838",
  "start": "2020-01-13T09:10:06+08:00",
  "finish": "2020-01-13T10:10:06+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "764",
  "name": "CRM: Обращение № 841",
  "start": "2020-01-09T10:15:53+08:00",
  "finish": "2020-01-09T11:15:53+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "773",
  "name": "CRM: Обращение № 850",
  "start": "2020-01-09T15:00:00+08:00",
  "finish": "2020-01-09T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "774",
  "name": "CRM: Обращение № 851",
  "start": "2020-01-10T11:00:00+08:00",
  "finish": "2020-01-10T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "775",
  "name": "CRM: Обращение № 852",
  "start": "2020-01-09T16:00:00+08:00",
  "finish": "2020-01-09T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "776",
  "name": "CRM: Обращение № 853",
  "start": "2020-01-10T16:00:00+08:00",
  "finish": "2020-01-10T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "777",
  "name": "CRM: Обращение № 854",
  "start": "2020-01-13T11:00:13+08:00",
  "finish": "2020-01-13T12:00:13+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "787",
  "name": "CRM: Обращение № 865",
  "start": "2020-01-13T13:47:08+08:00",
  "finish": "2020-01-13T14:47:08+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "793",
  "name": "CRM: Обращение № 871",
  "start": "2020-01-09T11:43:44+08:00",
  "finish": "2020-01-09T12:43:44+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "794",
  "name": "CRM: Обращение № 872",
  "start": "2020-01-10T12:01:04+08:00",
  "finish": "2020-01-10T13:01:04+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "797",
  "name": "CRM: Обращение № 875",
  "start": "2020-01-09T11:04:26+08:00",
  "finish": "2020-01-09T12:04:26+08:00",
  "type": "danger",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "808",
  "name": "CRM: Обращение № 886",
  "start": "2020-01-09T17:00:00+08:00",
  "finish": "2020-01-09T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "810",
  "name": "CRM: Обращение № 888",
  "start": "2020-01-10T15:00:00+08:00",
  "finish": "2020-01-10T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "811",
  "name": "CRM: Обращение № 889",
  "start": "2020-01-13T13:00:00+08:00",
  "finish": "2020-01-13T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "813",
  "name": "CRM: Обращение № 891",
  "start": "2020-01-10T11:00:00+08:00",
  "finish": "2020-01-10T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "819",
  "name": "CRM: Обращение № 897",
  "start": "2020-01-10T13:00:00+08:00",
  "finish": "2020-01-10T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "820",
  "name": "CRM: Обращение № 898",
  "start": "2020-01-13T15:00:00+08:00",
  "finish": "2020-01-13T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "821",
  "name": "CRM: Обращение № 899",
  "start": "2020-01-09T10:03:01+08:00",
  "finish": "2020-01-09T11:03:01+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "832",
  "name": "CRM: Обращение № 910",
  "start": "2020-01-09T09:19:08+08:00",
  "finish": "2020-01-09T10:19:08+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "833",
  "name": "CRM: Обращение № 911",
  "start": "2020-01-09T12:55:58+08:00",
  "finish": "2020-01-09T13:55:58+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "835",
  "name": "CRM: Обращение № 913",
  "start": "2020-01-09T14:08:46+08:00",
  "finish": "2020-01-09T15:08:46+08:00",
  "type": "warning",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "839",
  "name": "CRM: Обращение № 917",
  "start": "2020-01-10T09:20:58+08:00",
  "finish": "2020-01-10T10:20:58+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "842",
  "name": "CRM: Обращение № 920",
  "start": "2020-01-09T15:00:00+08:00",
  "finish": "2020-01-09T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "843",
  "name": "CRM: Обращение № 921",
  "start": "2020-01-13T16:00:00+08:00",
  "finish": "2020-01-13T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "844",
  "name": "CRM: Обращение № 922",
  "start": "2020-01-10T09:00:00+08:00",
  "finish": "2020-01-10T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "847",
  "name": "CRM: Обращение № 925",
  "start": "2020-01-14T14:00:00+08:00",
  "finish": "2020-01-14T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "851",
  "name": "CRM: Обращение № 928",
  "start": "2020-01-10T10:00:00+08:00",
  "finish": "2020-01-10T11:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "857",
  "name": "CRM: Обращение № 934",
  "start": "2020-01-13T11:00:44+08:00",
  "finish": "2020-01-13T12:00:44+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "858",
  "name": "CRM: Обращение № 935",
  "start": "2020-01-09T15:14:53+08:00",
  "finish": "2020-01-09T16:14:53+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "866",
  "name": "CRM: Обращение № 943",
  "start": "2020-01-10T09:00:00+08:00",
  "finish": "2020-01-10T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "872",
  "name": "CRM: Обращение № 949",
  "start": "2020-01-10T09:00:23+08:00",
  "finish": "2020-01-10T10:00:23+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "876",
  "name": "CRM: Обращение № 953",
  "start": "2020-01-14T14:00:00+08:00",
  "finish": "2020-01-14T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "879",
  "name": "CRM: Обращение № 956",
  "start": "2020-01-13T10:00:14+08:00",
  "finish": "2020-01-13T11:00:14+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "881",
  "name": "CRM: Обращение № 958",
  "start": "2020-01-13T17:00:00+08:00",
  "finish": "2020-01-13T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "883",
  "name": "CRM: Обращение № 960",
  "start": "2020-01-14T16:00:00+08:00",
  "finish": "2020-01-14T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "884",
  "name": "CRM: Обращение № 961",
  "start": "2020-01-10T10:37:35+08:00",
  "finish": "2020-01-10T11:37:35+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "885",
  "name": "CRM: Обращение № 962",
  "start": "2020-01-10T14:41:03+08:00",
  "finish": "2020-01-10T15:41:03+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "888",
  "name": "CRM: Обращение № 965",
  "start": "2020-01-13T16:00:00+08:00",
  "finish": "2020-01-13T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "889",
  "name": "CRM: Обращение № 966",
  "start": "2020-01-10T14:59:31+08:00",
  "finish": "2020-01-10T15:59:31+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "894",
  "name": "CRM: Обращение № 971",
  "start": "2020-01-09T09:33:29+08:00",
  "finish": "2020-01-09T10:33:29+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "896",
  "name": "CRM: Обращение № 973",
  "start": "2020-01-09T10:01:52+08:00",
  "finish": "2020-01-09T11:01:52+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "899",
  "name": "CRM: Обращение № 975",
  "start": "2020-01-14T11:00:00+08:00",
  "finish": "2020-01-14T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "901",
  "name": "CRM: Обращение № 977",
  "start": "2020-01-10T13:00:00+08:00",
  "finish": "2020-01-10T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "902",
  "name": "CRM: Обращение № 978",
  "start": "2020-01-14T13:00:00+08:00",
  "finish": "2020-01-14T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "904",
  "name": "CRM: Обращение № 980",
  "start": "2020-01-09T11:00:19+08:00",
  "finish": "2020-01-09T12:00:19+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "908",
  "name": "CRM: Обращение № 983",
  "start": "2020-01-10T13:46:16+08:00",
  "finish": "2020-01-10T14:46:16+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "909",
  "name": "CRM: Обращение № 984",
  "start": "2020-01-13T14:05:59+08:00",
  "finish": "2020-01-13T15:05:59+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "910",
  "name": "CRM: Обращение № 985",
  "start": "2020-01-13T10:18:02+08:00",
  "finish": "2020-01-13T11:18:02+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "912",
  "name": "CRM: Обращение № 987",
  "start": "2020-01-09T10:23:17+08:00",
  "finish": "2020-01-09T11:23:17+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "913",
  "name": "CRM: Обращение № 988",
  "start": "2020-01-09T11:00:24+08:00",
  "finish": "2020-01-09T12:00:24+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "914",
  "name": "CRM: Обращение № 989",
  "start": "2020-01-10T13:20:45+08:00",
  "finish": "2020-01-10T14:20:45+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "915",
  "name": "CRM: Обращение № 990",
  "start": "2020-01-09T11:04:04+08:00",
  "finish": "2020-01-09T12:04:04+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "919",
  "name": "CRM: Обращение № 994",
  "start": "2020-01-10T16:26:20+08:00",
  "finish": "2020-01-10T17:26:20+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "920",
  "name": "CRM: Обращение № 995",
  "start": "2020-01-10T14:00:00+08:00",
  "finish": "2020-01-10T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "921",
  "name": "CRM: Обращение № 996",
  "start": "2020-01-10T15:13:06+08:00",
  "finish": "2020-01-10T16:13:06+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "922",
  "name": "CRM: Обращение № 997",
  "start": "2020-01-13T10:20:01+08:00",
  "finish": "2020-01-13T11:20:01+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "923",
  "name": "CRM: Обращение № 998",
  "start": "2020-01-09T12:00:00+08:00",
  "finish": "2020-01-09T13:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "925",
  "name": "CRM: Обращение № 1000",
  "start": "2020-01-10T14:05:33+08:00",
  "finish": "2020-01-10T15:05:33+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "926",
  "name": "CRM: Обращение № 1001",
  "start": "2020-01-14T15:00:00+08:00",
  "finish": "2020-01-14T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "928",
  "name": "CRM: Обращение № 1003",
  "start": "2020-01-13T10:31:44+08:00",
  "finish": "2020-01-13T11:31:44+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "933",
  "name": "CRM: Обращение № 1008",
  "start": "2020-01-09T13:00:24+08:00",
  "finish": "2020-01-09T14:00:24+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "940",
  "name": "CRM: Обращение № 1015",
  "start": "2020-01-16T14:00:00+08:00",
  "finish": "2020-01-16T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "942",
  "name": "CRM: Обращение № 1017",
  "start": "2020-01-10T15:47:08+08:00",
  "finish": "2020-01-10T16:47:08+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "943",
  "name": "CRM: Обращение № 1018",
  "start": "2020-01-10T15:50:55+08:00",
  "finish": "2020-01-10T16:50:55+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "946",
  "name": "CRM: Обращение № 1021",
  "start": "2020-01-10T15:55:11+08:00",
  "finish": "2020-01-10T16:55:11+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "947",
  "name": "CRM: Обращение № 1022",
  "start": "2020-01-10T15:56:19+08:00",
  "finish": "2020-01-10T16:56:19+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "958",
  "name": "CRM: Обращение № 1028",
  "start": "2020-01-13T09:00:00+08:00",
  "finish": "2020-01-13T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "960",
  "name": "CRM: Обращение № 1030",
  "start": "2020-01-09T15:07:01+08:00",
  "finish": "2020-01-09T16:07:01+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "968",
  "name": "CRM: Обращение № 1038",
  "start": "2020-01-15T14:00:00+08:00",
  "finish": "2020-01-15T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "969",
  "name": "CRM: Обращение № 1039",
  "start": "2020-01-16T14:00:00+08:00",
  "finish": "2020-01-16T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "972",
  "name": "CRM: Обращение № 1042",
  "start": "2020-01-10T16:44:34+08:00",
  "finish": "2020-01-10T17:44:34+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "973",
  "name": "CRM: Обращение № 1043",
  "start": "2020-01-09T15:18:53+08:00",
  "finish": "2020-01-09T16:18:53+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "974",
  "name": "CRM: Обращение № 1044",
  "start": "2020-01-09T15:29:57+08:00",
  "finish": "2020-01-09T16:29:57+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "980",
  "name": "CRM: Обращение № 1049",
  "start": "2020-01-09T15:43:12+08:00",
  "finish": "2020-01-09T16:43:12+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "982",
  "name": "CRM: Обращение № 1051",
  "start": "2020-01-14T14:00:00+08:00",
  "finish": "2020-01-14T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "985",
  "name": "CRM: Обращение № 1054",
  "start": "2020-01-09T15:59:06+08:00",
  "finish": "2020-01-09T16:59:06+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "988",
  "name": "CRM: Обращение № 1057",
  "start": "2020-01-13T15:00:00+08:00",
  "finish": "2020-01-13T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "989",
  "name": "CRM: Обращение № 1058",
  "start": "2020-01-13T09:16:30+08:00",
  "finish": "2020-01-13T10:16:30+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "992",
  "name": "CRM: Обращение № 1061",
  "start": "2020-01-13T15:00:00+08:00",
  "finish": "2020-01-13T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "994",
  "name": "CRM: Обращение № 1063",
  "start": "2020-01-11T11:01:05+08:00",
  "finish": "2020-01-11T12:01:05+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "996",
  "name": "CRM: Обращение № 1065",
  "start": "2020-01-13T15:00:00+08:00",
  "finish": "2020-01-13T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "999",
  "name": "CRM: Обращение № 1068",
  "start": "2020-01-16T16:00:00+08:00",
  "finish": "2020-01-16T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1002",
  "name": "CRM: Обращение № 1071",
  "start": "2020-01-13T17:00:00+08:00",
  "finish": "2020-01-13T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1003",
  "name": "CRM: Обращение № 1072",
  "start": "2020-01-09T17:52:14+08:00",
  "finish": "2020-01-09T18:52:14+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1007",
  "name": "CRM: Обращение № 1076",
  "start": "2020-01-10T17:06:31+08:00",
  "finish": "2020-01-10T18:06:31+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1010",
  "name": "CRM: Обращение № 1079",
  "start": "2020-01-11T13:00:00+08:00",
  "finish": "2020-01-11T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1013",
  "name": "CRM: Обращение № 1082",
  "start": "2020-01-13T12:26:50+08:00",
  "finish": "2020-01-13T13:26:50+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1019",
  "name": "CRM: Обращение № 1088",
  "start": "2020-01-14T11:00:00+08:00",
  "finish": "2020-01-14T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1025",
  "name": "CRM: Обращение № 1094",
  "start": "2020-01-14T10:00:00+08:00",
  "finish": "2020-01-14T11:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1026",
  "name": "CRM: Обращение № 1095",
  "start": "2020-01-11T12:10:56+08:00",
  "finish": "2020-01-11T13:10:56+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1028",
  "name": "CRM: Обращение № 1097",
  "start": "2020-01-10T10:24:26+08:00",
  "finish": "2020-01-10T11:24:26+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1029",
  "name": "CRM: Обращение № 1098",
  "start": "2020-01-13T14:11:47+08:00",
  "finish": "2020-01-13T15:11:47+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1034",
  "name": "CRM: Обращение № 1103",
  "start": "2020-01-10T10:45:09+08:00",
  "finish": "2020-01-10T11:45:09+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1035",
  "name": "CRM: Обращение № 1104",
  "start": "2020-01-11T16:00:00+08:00",
  "finish": "2020-01-11T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1036",
  "name": "CRM: Обращение № 1105",
  "start": "2020-01-13T17:00:00+08:00",
  "finish": "2020-01-13T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1039",
  "name": "CRM: Обращение № 1108",
  "start": "2020-01-10T11:10:16+08:00",
  "finish": "2020-01-10T12:10:16+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1042",
  "name": "CRM: Обращение № 1111",
  "start": "2020-01-10T11:23:36+08:00",
  "finish": "2020-01-10T12:23:36+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1043",
  "name": "CRM: Обращение № 1112",
  "start": "2020-01-14T09:26:53+08:00",
  "finish": "2020-01-14T10:26:53+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1053",
  "name": "CRM: Обращение № 1121",
  "start": "2020-01-14T09:00:00+08:00",
  "finish": "2020-01-14T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1055",
  "name": "CRM: Обращение № 1123",
  "start": "2020-01-11T15:36:24+08:00",
  "finish": "2020-01-11T16:36:24+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1065",
  "name": "CRM: Обращение № 1133",
  "start": "2020-01-10T13:00:00+08:00",
  "finish": "2020-01-10T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1067",
  "name": "CRM: Обращение № 1135",
  "start": "2020-01-14T09:00:00+08:00",
  "finish": "2020-01-14T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1068",
  "name": "CRM: Обращение № 1136",
  "start": "2020-01-13T13:09:11+08:00",
  "finish": "2020-01-13T14:09:11+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1069",
  "name": "CRM: Обращение № 1137",
  "start": "2020-01-14T09:07:05+08:00",
  "finish": "2020-01-14T10:07:05+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1073",
  "name": "CRM: Обращение № 1141",
  "start": "2020-01-13T13:24:49+08:00",
  "finish": "2020-01-13T14:24:49+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1084",
  "name": "CRM: Обращение № 1151",
  "start": "2020-01-10T14:50:14+08:00",
  "finish": "2020-01-10T15:50:14+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1101",
  "name": "CRM: Обращение № 1168",
  "start": "2020-01-15T16:00:00+08:00",
  "finish": "2020-01-15T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1106",
  "name": "CRM: Обращение № 1172",
  "start": "2020-01-15T09:00:00+08:00",
  "finish": "2020-01-15T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1111",
  "name": "CRM: Обращение № 1176",
  "start": "2020-01-16T10:00:00+08:00",
  "finish": "2020-01-16T11:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1114",
  "name": "CRM: Обращение № 1179",
  "start": "2020-01-14T09:00:00+08:00",
  "finish": "2020-01-14T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1115",
  "name": "CRM: Обращение № 1180",
  "start": "2020-01-15T13:00:00+08:00",
  "finish": "2020-01-15T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1116",
  "name": "CRM: Обращение № 1181",
  "start": "2020-01-15T11:00:00+08:00",
  "finish": "2020-01-15T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1117",
  "name": "CRM: Обращение № 1182",
  "start": "2020-01-16T09:00:00+08:00",
  "finish": "2020-01-16T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "3",
  "id": "1122",
  "name": "test2",
  "start": "2020-01-10T12:00:00+08:00",
  "finish": "2020-01-10T13:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1124",
  "name": "CRM: Обращение № 1185",
  "start": "2020-01-14T10:00:00+08:00",
  "finish": "2020-01-14T11:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1125",
  "name": "CRM: Обращение № 1186",
  "start": "2020-01-15T09:00:00+08:00",
  "finish": "2020-01-15T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1126",
  "name": "CRM: Обращение № 1187",
  "start": "2020-01-16T16:00:00+08:00",
  "finish": "2020-01-16T17:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1127",
  "name": "CRM: Обращение № 1188",
  "start": "2020-01-15T15:00:00+08:00",
  "finish": "2020-01-15T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1128",
  "name": "CRM: Обращение № 1189",
  "start": "2020-01-16T15:00:00+08:00",
  "finish": "2020-01-16T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1132",
  "name": "CRM: Обращение № 1193",
  "start": "2020-01-15T10:00:00+08:00",
  "finish": "2020-01-15T11:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1133",
  "name": "CRM: Обращение № 1194",
  "start": "2020-01-16T13:00:00+08:00",
  "finish": "2020-01-16T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1137",
  "name": "CRM: Обращение № 1198",
  "start": "2020-01-15T11:00:00+08:00",
  "finish": "2020-01-15T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1138",
  "name": "CRM: Обращение № 1199",
  "start": "2020-01-16T15:00:00+08:00",
  "finish": "2020-01-16T16:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1152",
  "name": "CRM: Обращение № 1213",
  "start": "2020-01-15T14:00:00+08:00",
  "finish": "2020-01-15T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1153",
  "name": "CRM: Обращение № 1214",
  "start": "2020-01-16T13:00:00+08:00",
  "finish": "2020-01-16T14:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1155",
  "name": "CRM: Обращение № 1216",
  "start": "2020-01-15T14:00:00+08:00",
  "finish": "2020-01-15T15:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1158",
  "name": "CRM: Обращение № 1219",
  "start": "2020-01-16T11:00:00+08:00",
  "finish": "2020-01-16T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1183",
  "name": "CRM: Обращение № 1243",
  "start": "2020-01-16T09:00:00+08:00",
  "finish": "2020-01-16T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1196",
  "name": "CRM: Обращение № 1256",
  "start": "2020-01-13T10:51:21+08:00",
  "finish": "2020-01-13T11:51:21+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1202",
  "name": "CRM: Обращение № 1262",
  "start": "2020-01-13T12:00:13+08:00",
  "finish": "2020-01-13T13:00:13+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1212",
  "name": "CRM: Обращение № 1271",
  "start": "2020-01-13T12:13:14+08:00",
  "finish": "2020-01-13T13:13:14+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1227",
  "name": "CRM: Обращение № 1286",
  "start": "2020-01-14T09:00:00+08:00",
  "finish": "2020-01-14T10:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1239",
  "name": "CRM: Обращение № 1298",
  "start": "2020-01-15T17:00:00+08:00",
  "finish": "2020-01-15T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1241",
  "name": "CRM: Обращение № 1300",
  "start": "2020-01-16T17:00:00+08:00",
  "finish": "2020-01-16T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "17",
  "id": "1246",
  "name": "CRM: Обращение № 1305",
  "start": "2020-01-16T11:00:00+08:00",
  "finish": "2020-01-16T12:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "18",
  "id": "1276",
  "name": "CRM: Обращение № 1334",
  "start": "2020-01-15T17:00:00+08:00",
  "finish": "2020-01-15T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1279",
  "name": "CRM: Обращение № 1337",
  "start": "2020-01-13T18:03:12+08:00",
  "finish": "2020-01-14T19:03:12+08:00",
  "type": "danger",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}, {
  "resourceId": "21",
  "id": "1300",
  "name": "CRM: Обращение № 1358",
  "start": "2020-01-16T17:00:00+08:00",
  "finish": "2020-01-16T18:00:00+08:00",
  "type": "success",
  "DATA": {
    "PRIORITY": null,
    "STATUS": null
  }
}];
exports.events = events;
var resources = [{
  "id": "3",
  "name": "Татарников Василий",
  "img": "/upload/resize_cache/main/35c/50_50_2/1494592816133830021.jpg",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 3);
  }
}, {
  "id": "12",
  "name": "Сазонов Даниил",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 12);
  }
}, {
  "id": "13",
  "name": "Кашевская Анна",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 13);
  }
}, {
  "id": "17",
  "name": "Воскобоева Дарья",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 17);
  }
}, {
  "id": "18",
  "name": "Аксёнова Галина",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 18);
  }
}, {
  "id": "21",
  "name": "Кузнецов Александр",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 21);
  }
}, {
  "id": "55",
  "name": "Патырило Станислав",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 55);
  }
}, {
  "id": "56",
  "name": "Гатапов Виктор",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 56);
  }
}, {
  "id": "57",
  "name": "Макаров Кирилл",
  "img": "/desktop/img/person.png",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 57);
  }
}, {
  "id": "59",
  "name": "Костюченко Дарья",
  "img": "/upload/resize_cache/main/738/50_50_2/pwa_vertical_1024_2d15bdc3a3b0ae1a2308e91990187e78.jpg",
  "checkWorkingTime": function checkWorkingTime(section) {
    return _checkWorkingTime(section, 59);
  }
}];
exports.resources = resources;

function _checkWorkingTime(section, resId) {
  var eventList = events.filter(function (event) {
    return event.type == 'default' && event.resourceId == resId;
  });
  var sectionDate = [section[0].getTime(), section[1].getTime()];

  var _iterator = _createForOfIteratorHelper(eventList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var event = _step.value;
      var eventStart = new Date(event.start).getTime();
      var eventFinish = new Date(event.finish).getTime();

      if (eventStart >= sectionDate[0] && eventStart < sectionDate[1] || eventFinish > sectionDate[0] && eventFinish < sectionDate[1] || eventStart < sectionDate[0] && eventFinish >= sectionDate[1]) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}
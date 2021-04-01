import React from "react";
import ReactDOM from "react-dom";
import Scheduler from "./scheduler";
import "./sass/scheduler.sass";

import * as demoData from "./demoData";
let resources = [
  {
    "id": "3",
    "name": "Татарников Василий",
    "img": "/upload/resize_cache/main/35c/50_50_2/1494592816133830021.jpg",
  },
  {
    "id": "12",
    "name": "Сазонов Даниил",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "13",
    "name": "Кашевская Анна",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "17",
    "name": "Воскобоева Дарья",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "18",
    "name": "Аксёнова Галина",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "21",
    "name": "Кузнецов Александр",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "55",
    "name": "Патырило Станислав",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "56",
    "name": "Гатапов Виктор",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "57",
    "name": "Макаров Кирилл",
    "img": "/desktop/img/person.png",
  },
  {
    "id": "59",
    "name": "Костюченко Дарья",
    "img": "/upload/resize_cache/main/738/50_50_2/pwa_vertical_1024_2d15bdc3a3b0ae1a2308e91990187e78.jpg",
  }
];


setTimeout(() => {
  resources = [...resources, 
    {
      "id": "1311",
      "name": "Asdasd",
      "img": "/desktop/img/person.png"
    }
  ];
  console.log(resources);
}, 5000);
ReactDOM.render(<Scheduler 
  config={{
    start: new Date('2020-01-09 00:00:00'),
    end: new Date('2020-01-13 23:59:59'),
    interval: 3600000
  }}
  resources={resources}
  events={demoData.events}
/>, document.getElementById('root'));
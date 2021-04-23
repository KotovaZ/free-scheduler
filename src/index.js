import React from "react";
import ReactDOM from "react-dom";
import Scheduler from "./components/scheduler";
import "./sass/scheduler.sass";
import * as demoData from "./demoData";

ReactDOM.render(<Scheduler
  config={{
    start: new Date('2020-01-09 00:00:00'), 
    end: new Date('2020-01-13 23:59:59'),
    interval: 3600000,
    resource: {
      width: 200,
      title: 'Пользователи'
    },
    parent: root,
    adaptiveColumnWidth: true,
    dateFormat: "DD.MM HH:mm",
    byWorkTime: true
  }}
  resources={demoData.resources}
  events={demoData.events}
/>, document.getElementById('root'));
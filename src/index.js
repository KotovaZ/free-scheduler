import React from "react";
import ReactDOM from "react-dom";
import Scheduler from "./scheduler";

import * as demoData from "./demoData";
ReactDOM.render(<Scheduler 
  config={{
    start: new Date('2020-01-09 00:00:00'),
    end: new Date('2020-01-13 23:59:59'),
    interval: 3600000
  }}
  resources={demoData.resources}
  events={demoData.events}
/>, document.getElementById('root'));
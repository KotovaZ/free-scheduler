import React from "react";
import moment from "moment";
import Timeline from '../timeLine';

export default function ResourceCells(props) {
  let checkSectionWorkingTime = Timeline.checkWorkingTime;
  if (props.resource.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.resource.checkWorkingTime;
  } else if (props.config.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.config.checkWorkingTime;
  }

  return (
    props.items
      .map((section, i) => {
        let classes = ['sc-cell', section[2]];
        if (checkSectionWorkingTime(section))
          classes.push('working');
        return (
          <div
            key={`cell_${props.resource.id}_${i}`}
            className={classes.join(' ')}
            style={{ minWidth: props.cellWidth }}
          >
          </div>
        );
      })
  );
}
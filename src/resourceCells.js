import React from "react";
import moment from "moment";

export default function ResourceCells(props) {
  let checkSectionWorkingTime = checkWorkingTime;
  if (props.resource.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.resource.checkWorkingTime;
  } else if (props.config.hasOwnProperty('checkWorkingTime')) {
    checkSectionWorkingTime = props.config.checkWorkingTime;
  }

  return (
    props.items.map((section, i) => {
      let classes = ['sc-cell'];
      if (checkSectionWorkingTime(section))
        classes.push('working');

      return (
        <div
          key={`cell_${props.resource.id}_${i}`}
          className={classes.join(' ')}
        >
        </div>
      );
    })
  );
}

const checkWorkingTime = (sectionDate) => {
  const workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const sectionStartHour = sectionDate[0].getHours();
  return workingHours.indexOf(sectionStartHour) >= 0;
}
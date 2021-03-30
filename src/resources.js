import React from "react";
import Resource from "./resource";
import "./sass/scheduler.sass";

export default function Resources(props) {
  console.log(props);

  return (
    <>
      {props.items.map((resource) => {
        return <Resource key={`${resource.id}_${resource.id}`} {...resource} height={resource.height} />;
      })}
    </>
  );
}

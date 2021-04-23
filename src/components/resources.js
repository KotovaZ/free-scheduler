import React from "react";
import Resource from "./resource";

export default function Resources(props) {
  return (
    <>
      {props.items.map((resource) => {
        return <Resource key={`${resource.id}_${resource.id}`} {...resource} height={resource.height} />;
      })}
    </>
  );
}

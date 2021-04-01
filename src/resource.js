import React from "react";

const Resource = (props) => {
  const view = props.hasOwnProperty('render') ? () => props.render(props) : defaultView;
  let ref;
  if (props.ref == null) {
    ref = React.useRef();
    props.setRef(ref);
  } else {
    ref = props.ref;
  }

  function defaultView() {
    return (<span className="sc-resource-title">{props.name}</span>);
  }

  return (
    <div className="sc-row" style={{ height: props.height }} ref={ref}>
      <div className="sc-cell sc-resource">
        {view()}
      </div>
    </div>
  );
};

export default Resource;

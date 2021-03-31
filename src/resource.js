import React from "react";

const Resource = React.forwardRef((props, ref) => {
  const view = props.hasOwnProperty('render') ? () => props.render(props) : defaultView;
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
});

export default Resource;

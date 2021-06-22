import React from "react";
import moment from "moment";
import Popup from 'reactjs-popup';

export default function Event(props) {
  let type = props.hasOwnProperty('type') ? props.type : 'default';
  let handlers = {};
  if (props.hasOwnProperty('onClick')) {
    handlers.onClick = function () { props.onClick(props) };
  }

  const popupTitle = () => {
    let start = moment(props.start);
    let finish = moment(props.finish);
    if (start.get('D') == finish.get('D')) {
      return (
        <div className='popup-title'>
          <div className='range info-text'>
            {moment(props.start).format('HH:mm')} - {moment(props.finish).format('HH:mm')}
          </div>
          {moment(props.start).format('DD.MM.Y')}
        </div>
      );
    } else {
      return (
        <div className='popup-title'>
          <div className='range'>
            <span className='info-text'>{moment(props.start).format('HH:mm')}</span> {moment(props.start).format('DD.MM')}
            <span className='info-text'> - </span>
            <span className='info-text'>{moment(props.finish).format('HH:mm')}</span> {moment(props.finish).format('DD.MM')}
          </div>
        </div>
      );
    }
  }

  const eventForm = () => {
    return (
      <div
        className={`sc-event sc-event-${type}`}
        style={{
          left: `${props.position.left}%`,
          top: `${props.position.top}px`,
          width: `${props.view.width}%`,
        }}
        {...handlers}
      >
        <span>
          {props.name}
        </span>
      </div>
    );
  }
  
  return (
    <Popup on='hover' trigger={eventForm} position={['bottom center', 'top center', 'bottom left']}>
      {popupTitle()}
      <div className='popup-body'>
        {props.link ?
          <a className="popup-link" href={props.link} target="_blank">
            {props.name}
          </a>
          :
          props.name
        }
      </div>
    </Popup>
  );
}

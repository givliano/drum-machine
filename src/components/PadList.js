import React from 'react';
import Pad from './Pad';

const PadList = (props) => (
  props.pads.map((item) => {
    if (item.keyTrigger === props.active) {
      return (
        <Pad  
          id={item.keyTrigger}
          key={item.keyCode && item.keyTrigger}
          value={item.keyTrigger}
          onClick={props.onClick}
          className="drum-pad active"
        />
      );
    } else {
      return (
        <Pad  
          id={item.keyTrigger}
          key={item.keyCode}
          value={item.keyTrigger}
          onClick={props.onClick}
          className="drum-pad"
        />
      )};
    }
  )
);

export default PadList;

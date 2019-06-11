import React from 'react';
import Pad from './Pad';

const PadList = (props) => (
  props.pads.map((item) => (
      <Pad  
        id={item.keyTrigger}
        key={item.keyCode}
        value={item.keyTrigger}
        onClick={props.onClick}s
      />
    )
  )
);

export default PadList;

import React from 'react';
import Pad from './Pad';

<<<<<<< HEAD
const PadList = (props) => (
=======
const Padlist = (props) => (
>>>>>>> e581c7906a0b76b199045cd11ae002ce4dbed3a8
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

<<<<<<< HEAD
export default PadList;
=======
export default Padlist;
>>>>>>> e581c7906a0b76b199045cd11ae002ce4dbed3a8

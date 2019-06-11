import React from 'react';

const Pad = (props) => (
  <button
    onClick={props.onClick}
    className="drum-pad" 
    id={props.id} 
    value={props.id}
  >
  <span className="button-text">{props.id}</span></button>
);

export default Pad;

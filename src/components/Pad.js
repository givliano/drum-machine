import React from 'react';

const Pad = (props) => (
  <button
    className={props.className}
    onClick={props.onClick}
    id={props.id} 
    value={props.id}
  >
    <span className="button-text">{props.id}</span>
  </button>
);

export default Pad;

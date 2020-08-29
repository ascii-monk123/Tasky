import React from 'react';

const Btn = (props) => {
  return (
    <button
      className="btn-floating btn-large pink lighten-3 waves-effect waves-light white-text center"
      onClick={props.clicked}
    >
      <i className="material-icons">{props.icon}</i>
    </button>
  );
};

export default Btn;

import React from 'react';
import Classes from './CheckedBtn.module.css';
const CheckedBtn = (props) => {
  let checked = Classes.CheckedBtn;
  let complete = <p className="center-text">Incomplete!!!</p>;
  if (props.checked) {
    checked = [Classes.CheckedBtn, Classes.Checked].join(' ');
    complete = (
      <p className={`center-text ${Classes.CheckedText}`}>Complete!!!</p>
    );
  }

  return (
    <div
      style={{
        marginTop: '15px',
      }}
    >
      <i
        className={`material-icons ${checked}`}
        onClick={props.clicked}
        style={{
          fontSize: '50px',
        }}
      >
        check_circle
      </i>
      {complete}
    </div>
  );
};
export default CheckedBtn;

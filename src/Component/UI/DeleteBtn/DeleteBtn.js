import React from 'react';
import Classes from './DelteBtn.module.css';

const DeleteBtn = (props) => {
  return (
    <i
      className={`material-icons ${Classes.DeleteBtn}`}
      onClick={props.clicked}
    >
      cancel
    </i>
  );
};

export default DeleteBtn;

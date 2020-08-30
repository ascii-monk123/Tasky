import React from 'react';
import { Modal } from 'react-materialize';

const ModalCustom = (props) => {
  return (
    <Modal
      actions={[]}
      bottomSheet={false}
      fixedFooter={false}
      open={props.show}
      options={{
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%',
      }}
    >
      <div className="container">
        <h3 className="teal-text text-lighten-2 center">Add Task</h3>
        <div className="input-field">
          <input
            placeholder="Enter Title"
            type="text"
            onChange={(event) => props.changedTitle(event.target.value)}
          />
        </div>
        <div className="input-field">
          <textarea
            className="materialize-textarea"
            onChange={(event) => props.changedDescription(event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="container center">
        <button
          className="waves-effect waves-lighten white-text btn-large center btn-floating"
          onClick={props.clicked}
          style={{
            marginRight: '10px',
          }}
        >
          <i className="material-icons">done</i>
        </button>
        <button
          className="waves-effect waves-lighten white-text btn-large center red btn-floating "
          onClick={props.closed}
        >
          <i className="material-icons">close</i>
        </button>
      </div>
    </Modal>
  );
};

export default ModalCustom;

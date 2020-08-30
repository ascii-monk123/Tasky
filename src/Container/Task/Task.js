import React, { Component } from 'react';
import Classes from './Task.module.css';
import DeleteBtn from '../../Component/UI/DeleteBtn/DeleteBtn';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import CheckedBtn from '../../Component/UI/Btn/CheckedBtn/CheckedBtn';

class Task extends Component {
  render() {
    return (
      <div className="col sm12 m6 l4">
        <div className={Classes.Card__Wrapper}>
          <div className="card-panel teal lighten-3 white-text">
            <div className="card-content">
              <textarea
                type="text"
                className={`center-text ${Classes.Title}`}
                defaultValue={this.props.title}
                style={{
                  resize: 'none',
                }}
              />
              <textarea
                type="text"
                className={`center-text ${Classes.Text}`}
                defaultValue={this.props.details}
                style={{
                  resize: 'none',
                }}
              />
            </div>
            <CheckedBtn
              checked={this.props.configs.pending}
              clicked={() =>
                this.props.changedStatusHandler(this.props.configs.id)
              }
            />
          </div>

          <DeleteBtn
            clicked={() => this.props.deleteHandler(this.props.configs.id)}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHandler: (id) =>
      dispatch({ type: actionTypes.DELETE_TASK, eleId: id }),
    changedStatusHandler: (id) =>
      dispatch({ type: actionTypes.CHANGE_STATUS, eleId: id }),
  };
};

export default connect(null, mapDispatchToProps)(Task);

import React, { Component } from 'react';
import Classes from './Task.module.css';
import DeleteBtn from '../../Component/UI/DeleteBtn/DeleteBtn';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import CheckedBtn from '../../Component/UI/Btn/CheckedBtn/CheckedBtn';
import InputField from '../../Component/UI/InputField/InputField';

class Task extends Component {
  state = {
    title: '',
    desc: '',
    showBtn: false,
    curInput: null,
  };
  componentWillMount() {
    this.setState({
      title: this.props.title,
      desc: this.props.details,
    });
  }
  handleChange = (event, type) => {
    if (!this.state.showBtn) {
      this.setState({
        showBtn: true,
      });
    }
    if (type === 'title') {
      this.setState({
        title: event.target.value,
        curInput: type,
      });
    } else if (type === 'description') {
      this.setState({
        desc: event.target.value,
        curInput: type,
      });
    }
  };
  handleSubmit = (type) => {
    if (type === 'yes') {
      this.props.editTaskHandler(
        this.props.configs.id,
        this.state.title,
        this.state.desc
      );
    } else {
      this.setState({
        title: this.props.title,
        desc: this.props.details,
      });
    }
    this.setState({
      showBtn: false,
    });
  };
  render() {
    return (
      <div className="col sm12 m6 l6">
        <div className={Classes.Card__Wrapper}>
          <div className="card-panel teal lighten-3 white-text">
            <div className="card-content">
              <InputField
                data={{
                  title: this.state.title,
                  type: 'title',
                  changed: (event, param) => this.handleChange(event, param),
                }}
              />
              <InputField
                data={{
                  title: this.state.desc,
                  type: 'description',
                  changed: (event, param) => this.handleChange(event, param),
                }}
              />

              {this.state.showBtn ? (
                <div>
                  <p>Save Changes ?</p>
                  <button
                    className="btn-small"
                    onClick={() => this.handleSubmit('yes')}
                  >
                    Yes
                  </button>
                  <button
                    className="btn-small red"
                    onClick={() => this.handleSubmit('no')}
                  >
                    No
                  </button>
                </div>
              ) : null}
            </div>
            <CheckedBtn
              checked={this.props.configs.pending}
              clicked={() =>
                this.props.changedStatusHandler(this.props.configs.id)
              }
            />
            <div className={Classes.Date}>
              <span>{this.props.configs.date}</span>
              <hr></hr>
              <span>{this.props.configs.time}</span>
            </div>
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
    editTaskHandler: (id, title, description) =>
      dispatch({
        type: actionTypes.EDIT_TASK,
        eleId: id,
        newTitle: title,
        newDescription: description,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Task);

/**
 * 
 * 
 * <textarea
                type="text"
                className={`center-text ${Classes.Title}`}
                value={this.state.title}
                style={{
                  resize: 'none',
                }}
                onChange={(event) => this.handleChange(event, 'title')}
              />
              <textarea
                type="text"
                className={`center-text ${Classes.Text}`}
                value={this.state.desc}
                style={{
                  resize: 'none',
                }}
                onChange={(event) => this.handleChange(event, 'description')}
              />
 */

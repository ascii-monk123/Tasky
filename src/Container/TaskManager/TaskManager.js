import React, { Component } from 'react';
import Classes from './TaskManager.module.css';
import Btn from '../../Component/UI/Btn/Btn';
import Search from '../../Component/Search/Search';
import ModalCustom from '../../Component/UI/Modal/Modal';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
class TaskManager extends Component {
  state = {
    showModal: false,
  };

  showModalHandler = () => {
    const show = { ...this.state }.showModal;
    this.setState({
      showModal: !show,
    });
  };
  submitDataHandler = () => {
    if (this.props.title === '' || this.props.description === '') {
      alert('Title or description is missing');
    } else {
      this.props.addTaskHandler();
      this.showModalHandler();
    }
  };

  render() {
    return (
      <div className={Classes.Task}>
        <div className="container">
          <Btn icon="add" clicked={this.showModalHandler} />
          <div className={Classes.Search}>
            <Search />
          </div>
        </div>
        <ModalCustom
          show={this.state.showModal}
          clicked={this.submitDataHandler}
          closed={this.showModalHandler}
          changedTitle={(data) => this.props.titleChangedHandler(data)}
          changedDescription={(data) => this.props.descChangedHandler(data)}
        />
        <div>
          {this.props.tsk.map((task) => {
            return (
              <div key={task.id}>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.date}</p>
                <p>{task.id}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

//Mapping state to props
const mapStateToProps = (state) => {
  return {
    tsk: state.tasks,
    title: state.currentTitle,
    description: state.currentDescription,
  };
};
//mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    addTaskHandler: () => dispatch({ type: actionTypes.ADD_TASK }),
    titleChangedHandler: (title) =>
      dispatch({ type: actionTypes.CHANGE_TITLE, curTitle: title }),
    descChangedHandler: (desc) =>
      dispatch({ type: actionTypes.CHANGE_DESC, curDesc: desc }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);

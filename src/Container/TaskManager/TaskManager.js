import React, { Component } from 'react';
import Classes from './TaskManager.module.css';
import Btn from '../../Component/UI/Btn/Btn';
import Search from '../../Component/Search/Search';
import ModalCustom from '../../Component/UI/Modal/Modal';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import Task from '../Task/Task';
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
        <div className="container">
          <div className={`row ${Classes.Center__cols}`}>
            {this.props.tsk.map((task) => (
              <Task
                title={task.title}
                details={task.description}
                configs={{
                  id: task.id,
                  pending: task.pending,
                }}
                key={task.id}
              />
            ))}
          </div>
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

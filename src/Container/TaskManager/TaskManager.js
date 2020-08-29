import React, { Component } from 'react';
import Classes from './TaskManager.module.css';
import Btn from '../../Component/UI/Btn/Btn';
import Search from '../../Component/Search/Search';
import ModalCustom from '../../Component/UI/Modal/Modal';
import ReactDOM from 'react-dom';

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
          clicked={this.showModalHandler}
        />
      </div>
    );
  }
}

export default TaskManager;

import React, { Component } from 'react';
import Header from './Component/UI/Header/Header';
import TaskManager from './Container/TaskManager/TaskManager';
import M from 'materialize-css';
class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <TaskManager />
      </React.Fragment>
    );
  }
}

export default App;

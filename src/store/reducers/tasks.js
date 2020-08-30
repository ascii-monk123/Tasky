import * as actionType from '../actions/actions';
import getDateString from '../../Helpers/getDateString';
import uniqid from 'uniqid';
const initialState = {
  tasks: [],
  currentTitle: '',
  currentDescription: '',
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TASK:
      return {
        ...state,
        tasks: [
          {
            title: state.currentTitle,
            description: state.currentDescription,
            date: getDateString(),
            id: uniqid(),
            pending: false,
          },
        ].concat(state.tasks),
      };
    case actionType.CHANGE_TITLE:
      return {
        ...state,
        currentTitle: action.curTitle,
      };
    case actionType.CHANGE_DESC:
      return {
        ...state,
        currentDescription: action.curDesc,
      };
    case actionType.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.eleId),
      };
    default:
      return {
        ...state,
      };
  }
};

export default tasks;

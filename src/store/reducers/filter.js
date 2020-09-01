import * as actionTypes from '../actions/actions';
const initialState = {
  filterType: '',
  query: '',
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_TASK:
      console.log(action.q);
      return {
        ...state,
        query: action.q,
      };
    default:
      return {
        ...state,
      };
  }
};

export default filter;

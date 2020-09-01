import * as actionTypes from '../actions/actions';
const initialState = {
  filterType: '',
  query: '',
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_TASK:
      return {
        ...state,
        query: action.q,
      };
    case actionTypes.SORT_TASK:
      return {
        ...state,
        filterType: action.filType,
      };

    default:
      return {
        ...state,
      };
  }
};

export default filter;

import filter from '../store/reducers/filter';

const { shallowEqual } = require('react-redux');

const FilterArr = (array, filterType, query) => {
  if (filterType === '' && query === '') {
    return array;
  } else {
    let newArr = array.filter((ele) =>
      ele.title.toLowerCase().includes(query.toLowerCase())
    );
    switch (filterType) {
      case 'completed':
        newArr = newArr.filter((ele) => ele.pending);
        return newArr;
      case 'incomplete':
        newArr = newArr.filter((ele) => !ele.pending);
        return newArr;
      case 'title':
        const dupArr = newArr.slice().sort();
        return dupArr;
      default:
        return newArr;
    }

    return newArr;
  }
};

export default FilterArr;

const { shallowEqual } = require('react-redux');

const FilterArr = (array, filterType, query) => {
  if (filterType === '' && query === '') {
    return array;
  } else {
    const newArr = array.filter((ele) =>
      ele.title.toLowerCase().includes(query.toLowerCase())
    );
    return newArr;
  }
};

export default FilterArr;

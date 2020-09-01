import filter from '../store/reducers/filter';
const sorter = (a, b, type) => {
  if (type === 'date') {
    let datA = a.sorterDate;
    let datB = b.sorterDate;
    let comparison = 0;
    if (datA > datB) {
      comparison = 1;
    } else if (datB > datA) {
      comparison = -1;
    }
    return comparison;
  } else if (type === 'title') {
    let titA = a.title;
    let titB = b.title;
    let comparison = 0;
    if (titA > titB) {
      comparison = 1;
    } else if (titB > titA) {
      comparison = -1;
    }
    return comparison;
  }
};
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
        const dupArr = newArr.slice().sort((a, b) => sorter(a, b, 'title'));
        return dupArr;
      case 'date':
        const dupArr2 = newArr.slice().sort((a, b) => sorter(a, b, 'date'));
        return dupArr2;

      default:
        return newArr;
    }

    return newArr;
  }
};

export default FilterArr;

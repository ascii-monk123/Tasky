import React from 'react';

const Search = (props) => {
  return (
    <React.Fragment>
      <div className="input-field">
        <input
          id="search"
          type="text"
          onChange={props.changed}
          placeholder="Search List"
          className="validate"
        />
      </div>
    </React.Fragment>
  );
};

export default Search;

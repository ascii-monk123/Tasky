import React from 'react';

const Search = (props) => {
  return (
    <React.Fragment>
      <div className="input-field">
        <input
          id="search"
          type="text"
          onChange={(event)=>props.changed(event.target.value)}
          placeholder="Search List"
          className="validate"
        />
      </div>
    </React.Fragment>
  );
};

export default Search;

import React from 'react';

const OptionSelect = (props) => (
  <div className={`input-field`}>
    <select onChange={(event) => props.changed(event.target.value)} value="">
      <option value="" disabled>
        Sort By:
      </option>
      <option value="">Default</option>
      <option value="date">Date</option>
      <option value="title">Title</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
  </div>
);

export default OptionSelect;

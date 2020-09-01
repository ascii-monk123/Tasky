import React from 'react';
import Classes from './InputField.module.css';
const InputField = ({ data: { title, type, changed } }) => {
  switch (type) {
    case 'title':
      return (
        <textarea
          type="text"
          className={`center-text ${Classes.Title}`}
          value={title}
          style={{
            resize: 'none',
          }}
          onChange={(event) => changed(event, 'title')}
        />
      );
      break;
    case 'description':
      return (
        <textarea
          type="text"
          className={`center-text ${Classes.Text}`}
          value={title}
          style={{
            resize: 'none',
          }}
          onChange={(event) => changed(event, 'description')}
        />
      );
      break;
    default:
      return (
        <p
          style={{
            color: 'red',
          }}
        >
          Something is wrong in the app
        </p>
      );
  }
};
export default InputField;
{
  /* <textarea
  type="text"
  className={`center-text ${Classes.Title}`}
  value={this.state.title}
  style={{
        resize: 'none',
    }}
    onChange={(event) => this.handleChange(event, 'title')}
  /> */
}

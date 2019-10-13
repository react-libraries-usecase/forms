import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import withRedux from './withRedux';

const FieldFileInput = props => {
  const onChange = e => {
    const {
      input: { onChange }
    } = this.props;
    onChange(e.target.files[0]);
  };

  const {
    input: { value },
    name,
    accept
  } = this.props;
  const { input, label, required, meta } = this.props; // whatever props you send to the component from redux-form Field
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          name={name}
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={() => this.onChange}
        />
      </div>
    </div>
  );
};

const submitVVV = data => {
  console.log(data);
};

const UploadForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={submitVVV}>
      <div>
        <label htmlFor='employed'>Upload file:</label>
        <div>
          <FieldFileInput
            name='employed'
            component='input'
            accept='jpg, jpeg, png, gif'
          />
        </div>
      </div>
    </form>
  );
};

export default withRedux(
  reduxForm({
    form: 'uploadForm' // a unique identifier for this form
  })(UploadForm)
);

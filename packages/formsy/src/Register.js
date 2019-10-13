import React, { Component } from 'react';
import Formsy, { addValidationRule } from 'formsy-react';
import { withFormsy } from 'formsy-react';

addValidationRule(
  'isName',
  (values, value) => value !== '' && !['god', 'hello world'].includes(value)
);

addValidationRule(
  'isNotPet',
  (values, value) => !['Kitty', 'Pusheen'].includes(value)
);

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidUpdate() {
    const {
      name,
      touched,
      dirty,
      isPristine,
      getValue,
      initialValue,
      errors,
      getErrorMessage
    } = this.props;
    const errMsg = getErrorMessage();
    const curValue = getValue();

    // pristine? dirty?
    if (!isPristine()) {
      touched[name] = true;
      if (curValue !== initialValue) {
        dirty[name] = true;
      }
    } else {
      touched[name] = false;
      dirty[name] = false;
    }

    // get error message
    if (errMsg) {
      errors[name] = errMsg;
    } else {
      errors[name] = null;
    }
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
    // setValue() will set the value of the component, which in turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required for Formsy to work.
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
    const { label, initialValue, isPristine, getValue } = this.props;
    const curValue = getValue();
    // const face = this.props.isValid() ? ":-)" : ":-(";

    return (
      <div className='field-control'>
        <div className='field'>
          <label>{label}</label>
          <input
            type='text'
            defaultValue={initialValue}
            value={curValue}
            onChange={this.changeValue}
            onBlur={() => {
              this.props.setValue((curValue || initialValue).trim());
            }}
          />
          &nbsp;
          {/* <span>isValid? {face}</span>*/}
        </div>
        <div className='error-message'>{errorMessage}</div>
      </div>
    );
  }
}

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { canSubmit: false };
    this.initialValues = {
      name : 'Jack',
      email: 'test@sample.com'
    };
    this.errors = {};
    this.dirty = {};
    this.touched = {};
    this.enableSubmit = this.enableSubmit.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
    this.notifyFormError = this.notifyFormError.bind(this);
  }

  componentDidMount() {}

  disableSubmit() {
    this.setState({ canSubmit: false });
  }

  enableSubmit() {
    this.setState({ canSubmit: true });
  }

  notifyFormError(model, resetForm, invalidateForm) {
    console.log(model);
  }

  submit(model, resetForm, invalidForm) {
    // fetch('http://example.com/', {
    //   method: 'post',
    //   body: JSON.stringify(model)
    // });

    console.log(model);
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <Formsy
          onValidSubmit={this.submit}
          onValid={this.enableSubmit}
          onInvalid={this.disableSubmit}
          onInvalidSubmit={this.notifyFormError}
          ref='form'
        >
          <div>
            <MyInput
              name='name'
              label='Name'
              validations={{
                isName   : true,
                isNotPet : true,
                minLength: 3
              }}
              validationErrors={{
                isName   : 'This is not a valid name.',
                isNotPet : 'Cannot use a pet name.',
                minLength: 'Must more than three characters.'
              }}
              initialValue={this.initialValues.name}
              errors={this.errors}
              touched={this.touched}
              dirty={this.dirty}
              required
            />
          </div>
          <div>
            <MyInput
              name='email'
              label='Email'
              validations={{
                isEmail: true
              }}
              validationErrors={{
                isEmail: 'Illegal email address.'
              }}
              initialValue={this.initialValues.email}
              errors={this.errors}
              touched={this.touched}
              dirty={this.dirty}
              required
            />
          </div>
          <button type='reset'>Reset</button>
          <button
            type='submit'
            disabled={
              Object.values(this.errors).filter(item => item !== null).length
              > 0
            }
          >
            Submit
          </button>
          {/* <button type="submit" disabled={!this.state.canSubmit}>
            Submit
          </button>*/}
          <hr />
          <ul>
            <li>
              errors: {JSON.stringify(this.errors)}, count:{' '}
              {Object.values(this.errors).filter(item => item !== null).length}
            </li>
            {/* <<li>isValid: {JSON.stringify(this.state.canSubmit)}</li>*/}
            <li>
              dirty: {JSON.stringify(this.dirty)}, count:{' '}
              {Object.values(this.dirty).filter(item => item !== null).length}
            </li>
            <li>
              touched: {JSON.stringify(this.touched)}, count:{' '}
              {Object.values(this.touched).filter(item => item).length}
            </li>
          </ul>
        </Formsy>
      </div>
    );
  }
}

export default Register;

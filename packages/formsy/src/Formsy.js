// MyInput.js
import Formsy, { withFormsy } from 'formsy-react';
import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div>
        <input
          name={'test'}
          onChange={this.changeValue}
          type='text'
          value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

const Input = withFormsy(MyInput);

class MyForm extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Formsy>
        <Input name='search' />
      </Formsy>
    );
  }
}

export default MyForm;

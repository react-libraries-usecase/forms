import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import withRedux from './withRedux'


class FieldFileInput  extends Component{

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div>
       <label>{label}</label>
       <div>
         <input
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={() => this.onChange}
         />
       </div>
     </div>
    )
  }
}

const submitVVV = (data) => {
	console.log(data);
}

const UploadForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={submitVVV}>
      <div>
        <label htmlFor="employed">Upload file:</label>
        <div>
          <FieldFileInput
            name="employed"
            id="employed"
            component="input"
            type="file"
            accept='jpg, jpeg, png, gif'
          />
        </div>
      </div>
    </form>
  )
}

export default withRedux(reduxForm({
  form: 'uploadForm' // a unique identifier for this form
})(UploadForm));


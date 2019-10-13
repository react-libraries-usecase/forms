import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default () => (
  <div className='app'>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required')
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor='email' style={{ display: 'block' }}>
              Email
            </label>
            <input
              id='email'
              placeholder='Enter your email'
              type='text'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.email && touched.email && (
              <div className='input-feedback'>{errors.email}</div>
            )}

            <button
              type='button'
              className='outline'
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>

            <div style={{ margin: '1rem 0' }}>
              <h3 style={{ fontFamily: 'monospace' }} />
              <pre
                style={{
                  background: '#f6f8fa',
                  fontSize  : '.65rem',
                  padding   : '.5rem'
                }}
              >
                <strong>props</strong> = {JSON.stringify(props, null, 2)}
              </pre>
            </div>
          </form>
        );
      }}
    </Formik>
  </div>
);

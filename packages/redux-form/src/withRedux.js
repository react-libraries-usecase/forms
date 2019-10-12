import React from "react";

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

const store = createStore(rootReducer)


// usage of component
const withRedux = (Component) => (props) => {
  return <Provider store={store}>
    <Component {...props} />
  </Provider>;
};


export default withRedux;

import React, {useEffect} from 'react';
import AxiosLayout from './containers/Layout';
import { BrowserRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import { authCheck } from './actions/auth'

import './index.css'

function App(props) {
  useEffect(() => {
    props.onCheckLogin()
  })

  return (
    <div className="App">
      <BrowserRouter>
        <AxiosLayout/>
      </BrowserRouter>
    </div>
  );
}

const mapReduxDispatchToReactProps = dispatch => {
  return {
      onCheckLogin : () => dispatch(authCheck())
  }
}

export default connect(null, mapReduxDispatchToReactProps)(App);

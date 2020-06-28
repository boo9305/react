import React, {useState} from 'react';
import AxiosLayout from './AxiosLayout';
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <AxiosLayout/>
      </BrowserRouter>
    </div>
  );
}

const mapReduxStateToReactProps = state => {
  return {
      token : state.token
  }
}


export default connect(mapReduxStateToReactProps, null)(App);

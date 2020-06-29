import React from 'react';
import AxiosLayout from './AxiosLayout';
import { BrowserRouter } from 'react-router-dom'
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


export default connect(null, null)(App);

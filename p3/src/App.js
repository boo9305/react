import React, {useState} from 'react';
import AxiosLayout from './AxiosLayout';
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AxiosLayout/>
      </BrowserRouter>
    </div>
  );
}

export default App;

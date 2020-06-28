import React from 'react';
import "./App.css"

import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
}

export default App;

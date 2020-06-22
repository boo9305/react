import React from 'react';

import './App.css';
import './Mobile.css';

function App() {
  const handleAllMenuClick = (e) => {
    console.log("kk")
  }

  return (
    <div className="App">
      
      <div className="header">
        <div className="nav">
          <div className="side">

          </div>
          <div className="left">
            <div className="mobile">
              <a href="#" onClick={handleAllMenuClick}>
                <h3>All Menu</h3>
              </a>

            </div>
            <ul className="pc">
              <li><h3><a href="#">LOL</a></h3></li>
              {/* <li><h3><a href="#">menu2</a></h3></li>
              <li><h3><a href="#">menu3</a></h3></li> */}
            </ul>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="header-section">
          <h2>Photo Upload</h2>
          <div className="upload-button"><a href="#">UPLOAD</a></div>
        </div>
      </div>

      <div className="section-a">


      </div>

      
      
    </div>
  );
}

export default App;

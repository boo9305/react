import React from 'react';
import "./App.css"



function App() {
  const handleChange = (e) => {
    
    console.log(e.target.files[0])  
  }

  return (
    <div className="App">
      <div className="header"></div>
      <div className="section">
        <div className="wrap">
          <h2>UPLOAD</h2>
          <input type="file" name="file" onChange={(e) => handleChange(e)}/>
          <button type="button" onClick={null}/>
        </div>

      </div>
    </div>
  );
}

export default App;

import React from 'react';
import "./App.css"

function App() {

    const testFunction = () => {
        window.gapi.load('auth2', () => {
        })

    }

    return (
        <div className="App">
            {testFunction}
        </div>
    );
}

export default App;

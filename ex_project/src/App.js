import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Layout from './containers/Layout'
import ExerciseCardUpdate from './containers/ExerciseCardUpdate'
import MyData from "./data.json"

function App() {
    const data = JSON.stringify(MyData)
    const [log, setLog] = useState("")

    useEffect(() => {
        setLog(log + "Render App")
    }, [])

    return (
        <div className="App">
            <h3>ex project</h3>
            <BrowserRouter>


                <Route exact path='/excard/' render={() => (
                    <ExerciseCardUpdate></ExerciseCardUpdate>
                )}/>
                <Route exact path='/' render={() => (
                    <Layout></Layout>
                )}/>

            </BrowserRouter>
            <div>
            ---------------
            <p>
                {log}
            </p>
            <p>
                {data}
            </p>
            </div>
        </div>
    );

}

export default App;

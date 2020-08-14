import React, {useState} from 'react';
import AxiosLayout from './AxiosLayout';
import { BrowserRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import { authGoogleLogin } from './actions/auth'
import { GoogleLogin } from 'react-google-login'

function App(props) {
    var [rep , setRep] = useState("rep")

    const responseGoogle = (response) => {
        var token = JSON.stringify(response.wc.access_token)
        setRep(token)

        props.login(token)
    }
    return (
        <div className="App">
            <div>
                <GoogleLogin
                clientId="957200438160-7cv4otef23bg6mch54e4e60ue8vv50j8.apps.googleusercontent.com" 
                buttonText="Login" 
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            </div>
            <div>
            {rep}
            </div>
            <BrowserRouter>
                <AxiosLayout/>
            </BrowserRouter>
        </div>
    );
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        login : (token) => dispatch(authGoogleLogin(token)),
    }
}

export default connect(null, mapReduxDispatchToReactProps)(App);

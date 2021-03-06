import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { authLogin } from '../actions/auth'

import { GoogleLogin } from 'react-google-login'
const Login = (props) => {
    const responseGoogle = (response) => {
        alert(response)
    }
    return (
        <div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.login(e.target.username.value, e.target.password.value)
                    //history.push('/')
                }}>
                    <input type='text' name='username' defaultValue='join'  />
                    <input type='password' name='password' defaultValue='rlawlghks'  />
                    <input type='submit' value="login"/>
                </form>
            </div>
            <hr />
            {
                localStorage.getItem("token") ?
                    <div style={{ color: "red" }}>login localStorage : {localStorage.getItem("token")} , token : {props.token}</div>
                    :
                    <div style={{ color: "red" }}>logout</div>
            }
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.auth.token
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        login : (username,password) => dispatch(authLogin(username, password)),
    }
}


export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login))

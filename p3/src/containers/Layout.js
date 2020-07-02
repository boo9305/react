import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import '../index.css'

import Login from './Login'
import { authCheck, authLogout } from '../actions/auth'
import { postInit } from '../actions/post'

import PostContainer from './PostContainer';

const Layout = (props) => {
    console.log("render Layout")
    return (
        <div>
            <Login></Login>
            <div>
                <input type='button' value='logout' onClick={() => props.onLogout(props.token)}></input>
            </div>
            <hr />
            <PostContainer></PostContainer>
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
        onLogout : (token) => dispatch(authLogout(token)) | dispatch(postInit()),
        onCheckLogin : () => dispatch(authCheck())
    }
}


export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Layout))
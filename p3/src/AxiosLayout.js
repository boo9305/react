import React, { useEffect } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import PostList from './PostList'
import PostDetail from './PostDetail';

import { authCheck, authLogout } from './actions/auth'

const AxiosLayout = (props) => {
    useEffect(() => {
        props.onCheckLogin()
    }, [props])

    return (
        <div>
            <div>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <div>
                <NavLink to='/post'>PostList</NavLink>
            </div>
            <div>
                <input type='button' value='logout' onClick={() => props.onLogout(props.token)}></input>
            </div>
            <hr />
            <Switch>
                <Route exact path='/Login' render={() => (
                    <Login/>
                )}></Route>
                <Route exact path='/post' component={PostList} />
                <Route exact path='/post/:postID' component={PostDetail} />
            </Switch>
            <hr />

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
        onLogout : (token) => dispatch(authLogout(token)),
        onCheckLogin : () => dispatch(authCheck())
    }
}


export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AxiosLayout))
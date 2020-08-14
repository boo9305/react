import axios from 'axios'

export const AUTH_LOGIN = "AUTH_LOGIN"
export const AUTH_LOGOUT = "AUTH_LOGOUT"

export const authSuccess = token => {
    return {
        type : AUTH_LOGIN,
        token : token
    }
}


export const authCheck = () => {
    return {
        type : AUTH_LOGIN,
        token : localStorage.getItem("token")
    }
}

export const authGoogleLogin = (access_token) => {
    return dispatch => {
        axios.defaults.headers = {}
        axios.post('/google_login/', {
            "access_token" : access_token
        }).then(res => {
            alert(JSON.stringify(res.data.key))
            localStorage.setItem("token", res.data.key)
            dispatch(authSuccess(res.data.key))
        }).catch(err => console.log(err))    
    }
}

export const authLogin = (username, password) => {
    
    return dispatch => {
        console.log("login ... ")
        //dispatch(authInit())

        axios.defaults.headers = {}
        //axios.post('/api-token-auth/', {
        axios.post('/rest_auth/login/', {
            username: username, password: password
        }).then(res => {
            console.log(res.data)
            //localStorage.setItem("token", res.data.token)
            //dispatch(authSuccess(res.data.token))
            localStorage.setItem("token", res.data.key)
            dispatch(authSuccess(res.data.key))
        }).catch(err => console.log(err))    
    }
}

export const authLogout = (token) => {
    axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
    }
    axios.post('/rest-auth/logout/').then(res => {
        console.log(res.data)
    }).catch(err => console.log(err))

    localStorage.setItem("token", null)
    return {
        type : AUTH_LOGOUT,
    }
}

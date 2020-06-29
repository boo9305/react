import axios from 'axios'

export const AUTH_LOGIN = "AUTH_LOGIN"
export const AUTH_LOGOUT = "AUTH_LOGOUT"

// dispatch 는 액션을 리턴하고 
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

export const authLogin = (username, password) => {
    
    return dispatch => {
        console.log("login ... ")
        //dispatch(authInit())

        axios.defaults.headers = {}
        axios.post('/rest-auth/login/', {
            username: username, password: password
        }).then(res => {
            console.log(res.data)
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
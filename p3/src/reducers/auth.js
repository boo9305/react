import {AUTH_LOGIN, AUTH_LOGOUT} from '../actions/auth'

const initalState = {
    token : null
}

// const authSuccess = (state, action) =>  {
//     console.log("authSuccess Token : ", action.token)

//     return {
//         token : action.token
//     }
// }

// const authLogout = (state, action) => {
//     return {
//         token : null
//     }
// }

const reducer = (state=initalState, action) => {
    switch(action.type) {
        case AUTH_LOGIN : return {...state , token : action.token} 
        case AUTH_LOGOUT : return {...state , token : null }
        default:
            return state;
    }
} 

export default reducer;
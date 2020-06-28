import axios from 'axios'

export const POST_LIST = "POST_LIST"
export const POST_CREATE = "POST_CREATE"
export const POST_FAIL = "POST_FAIL"
export const postFail = () => {
    return {
        type : POST_FAIL,
        posts : []
    }
}

export const postListSuccess = (posts) => {
    return {
        type : POST_LIST,
        posts : posts
    }
}

export const postCreateSuccess = () => {
    return {
        type : POST_CREATE,
    }
}

export const postList = (token) => {
    return dispatch => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.get('/server/post/')
            .then(res => {
                dispatch(postListSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const postCreate = (token, board, title , contents) => {
    return dispatch => {
        console.log("postCreate")

        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}` 
        }
        console.log(localStorage.getItem("token"))

        axios.post('/server/post/', {
            board : board,
            title : title,
            contents : contents
        }).then(res => { 
            console.log(res);
            dispatch(postCreateSuccess())
            dispatch(postList(token))
        }).catch(err => { console.log(err) })
    }

}
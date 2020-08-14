import axios from 'axios'

export const POST_LIST = "POST_LIST"
export const POST_DETAIL = "POST_DETAIL"
export const POST_CREATE = "POST_CREATE"
export const POST_FAIL = "POST_FAIL"

export const postFail = () => {
    return { type : POST_FAIL}
}
export const postListSuccess = (posts) => {
    return { type : POST_LIST, posts : posts }
}

export const postDetailSuccess = (post) => {
    console.log(post)
    return { type : POST_DETAIL, post : post }
}

export const postCreateSuccess = () => {
    return { type : POST_CREATE, }
}

export const postList = (token) => {
    return dispatch => {
        if (token === null) { return }
        axios.defaults.headers = {
            "Content-Type": "application/json",
            //Authorization: `JWT ${token}`
            Authorization: `token ${token}`
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

export const postDetail = (token, postID) => {
    return dispatch => {
        if (token === null) { return }

        axios.defaults.headers = {
            "Content-Type": "application/json",
            //Authorization: `JWT ${token}`
            Authorization: `token ${token}`
        }
        axios.get(`/server/post/${postID}`)
            .then(res => {
                dispatch(postDetailSuccess(res.data))
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
            Authorization: `JWT ${token}` 
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

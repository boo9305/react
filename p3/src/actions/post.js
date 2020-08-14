import axios from 'axios'

export const POST_INIT = "POST_INIT"

export const LIST_POST_INIT         = "LIST_POST_INIT"
export const LIST_POST_START        = "LIST_POST_START"
export const LIST_POST_SUCCESS      = "LIST_POST_SUCCESS"
export const LIST_POST_FAIL         = "LIST_POST_FAIL"

export const DETAIL_POST_INIT       = "DETAIL_POST_INIT"
export const DETAIL_POST_START      = "DETAIL_POST_START"
export const DETAIL_POST_SUCCESS    = "DETAIL_POST_SUCCESS"
export const DETAIL_POST_FAIL       = "DETAIL_POST_FAIL"

export const postInit = () => { return { type : POST_INIT } }
export const listPostSuccess = (data) => { return { type : LIST_POST_SUCCESS, data : data }}
export const detailPostSuccess = (data) => { return { type : DETAIL_POST_SUCCESS, data : data }}

export const postList = (token) => {
    return dispatch => {
        if (token === "null") { return }
        dispatch( { type : LIST_POST_START })

        axios.defaults.headers = {
            "Content-Type": "application/json",
            //Authorization: `JWT ${token}`
            Authorization: `token ${token}`
        }
        axios.get('/server/post/')
            .then(res => {
                dispatch(listPostSuccess(res.data))
            })
            .catch(err => {
                dispatch( { type : LIST_POST_FAIL })
                console.log(err)
            })
    }
}

export const postDetail = (token, postID) => {
    return dispatch => {
        if (token === "null") { return }
        dispatch( { type : DETAIL_POST_START })

        axios.defaults.headers = {
            "Content-Type": "application/json",
            //Authorization: `JWT ${token}`
            Authorization: `token ${token}`
        }
        axios.get(`/server/post/${postID}`)
            .then(res => {
                dispatch(detailPostSuccess(res.data))
            })
            .catch(err => {
                dispatch( { type : DETAIL_POST_FAIL })
                console.log(err)
            })    
    }
}

export const postCreate = (token, board, title , contents) => {
    return dispatch => {
        if (token === "null") { return }
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
            dispatch(postList(token))
        }).catch(err => { console.log(err) })
    }

}

export const commentCreate = (token, postID, comment) => {
    return dispatch => {
        if (token === "null") { return }
        
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.post(`/server/comment/`, {
            post : postID, contents : comment 
        })
        .then(res => { 
            console.log(res)
            dispatch(postDetail(token, postID))
        })
        .catch(err => { console.log(err) })  
    }

}

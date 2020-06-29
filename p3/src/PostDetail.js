import React, { useEffect} from 'react'
import axios from 'axios'

import { withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'

import { postDetail } from './actions/post.js'

const PostDetail = (props) => {
    useEffect(() => {
        const postID = props.match.params.postID
        props.onPostDetail(props.token, postID)
    }, [props.token])

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        var comment = e.target.comment.value
        const postID = props.match.params.postID

        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${props.token}`
        }
        axios.post(`/server/comment/`, {
            post : postID, contents : comment 
        })
        .then(res => { console.log(res)})
        .catch(err => { console.log(err) })  
    }
    return (
        <div>
            title : {props.post ? props.post.title : null}
            <hr/>
            contents : {props.post ? props.post.contents : null}
            <hr/>
            ------- comments -------
            <hr/>
            
            <form onSubmit={handleCommentSubmit}>
                <input type="input" name="comment"></input>
                <input type="submit" value="submit"></input>
            </form>
            {
                props.post ? 
                props.post.comments.map(item=> {
                    return (
                        <div key={item.pk}>{item.author} : {item.contents}</div>
                    )
                })
                : 
                null
            }
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.auth.token,
        post: state.post.postDetail
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        onPostDetail : (token, postID) => dispatch(postDetail(token, postID))
    }
}

export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(PostDetail))

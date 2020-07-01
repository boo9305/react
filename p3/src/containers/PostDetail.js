import React from 'react'

import { withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'

import { commentCreate } from '../actions/post'

const PostDetail = (props) => {
    console.log("render postdetail")
    return (
        <div>
            title : {props.post ? props.post.title : null}
            <hr/>
            contents : {props.post ? props.post.contents : null}
            <hr/>
            ------- comments -------
            <hr/>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                props.onCommentCreate(props.token, props.post.pk, e.target.comment.value)
            }}>
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
        token : state.auth.token,
        post: state.post.postDetail.data
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        onCommentCreate : (token, postID, comment) => dispatch(commentCreate(token, postID, comment))
    }
}

export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(PostDetail))

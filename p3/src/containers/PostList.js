import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { postDetail } from '../actions/post'
import "../index.css"

const PostList = (props) => {
    console.log("render postlist")
    return (
        <div>
            {
                props.posts.map(item => {
                    return (
                        <div key={item.pk} style={{ width: "100%", height : "40px", lineHeight: "40px", borderBottom: "1px solid"}}>
                            <div style={{ float: "left" }}>
                                <a href="#"  onClick={() => {props.onPostDetail(props.token, item.pk)}}>
                                    title : {item.title}
                                </a>
                            </div>
                            <div style={{ float:"right"}}>
                                <p> {item.author}</p>
                            </div>
                            {/* <NavLink to={`/post/${item.pk}`} >   detail</NavLink> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.auth.token,
        posts: state.post.postList.data,
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        onPostDetail : (token, postID) => dispatch(postDetail(token, postID))
    }
}


export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(PostList))
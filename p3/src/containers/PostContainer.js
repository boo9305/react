import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import '../index.css'

import { postList, postCreate } from '../actions/post'

import PostList from './PostList'
import PostDetail from './PostDetail'

const PostContainer = (props) => {
    console.log("render post container")
    useEffect(() => {
        props.onPostList(props.token)
    })
    return (
        <div style={{ margin: "0 auto", width: "1000px" }}>
            {props.token !== "null" ?
                <div>
                    <div style={{ float: "left", width: "450px", minHeight: "500px", border: "1px solid" }}>
                        <form onSubmit={(e) => { e.preventDefault(); props.onPostCreate(props.token, "11004", e.target.title.value, e.target.contents.value) }}>
                            <input type='title' name='title' />
                            <input type='contents' name='contents' />
                            <input type='submit' value="create post"></input>
                        </form>

                        <PostList></PostList>
                    </div>

                    <div style={{ float: "right", width: "450px", minHeight: "500px", border: "1px solid" }}>
                        <PostDetail></PostDetail>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.auth.token,
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        onPostList: (token) => dispatch(postList(token)),
        onPostCreate: (token, board, title, contents) => dispatch(postCreate(token, board, title, contents)),
    }
}

export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(PostContainer))
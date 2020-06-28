import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { postList , postCreate} from './actions/post'
import Login from './Login'

const PostList = (props) => {
    useEffect(() => {
        props.onPostList(props.token)        
    }, [])

    return (
        <div>
            {console.log("list render")}
            {
                <div>
                    <input type="button" onClick={() => {
                        //props.history.push("/")\
                        window.location.reload()
                    }} />
                    <form onSubmit={(e) => { e.preventDefault(); props.onPostCreate(props.token, "11004", e.target.title.value, e.target.contents.value )}}>
                        <input type='title' name='title' />
                        <input type='contents' name='contents' />
                        <input type='submit' value="create post"></input>
                    </form>

                    {
                        props.posts.map(item => {
                            return (
                                <div key={item.pk}>
                                    title : {item.title}
                                    <NavLink to={`/post/${item.pk}`} >   detail</NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.auth.token,
        posts: state.post.posts
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        onPostList: (token) => dispatch(postList(token)),
        onPostCreate: (token, board, title, contents) => dispatch(postCreate(token, board, title, contents)),
    }
}


export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(PostList))
import React, { useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { postList , postCreate} from './actions/post'

const PostList = (props) => {
    useEffect(() => {
        props.onPostList(props.token)
    }, [props.token])

    return (
        <div>
            {console.log("list render")}
            <div style={{ float: "left", width: "50%" , height: "500px", border: "1px solid"}}>
                <form onSubmit={(e) => { e.preventDefault(); props.onPostCreate(props.token, "11004", e.target.title.value, e.target.contents.value) }}>
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
            <div style={{ float: "left", width: "50%" }}>

            </div>
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token: state.auth.token,
        posts: state.post.postList,
        loading: state.post.loading
    }
}

const mapReduxDispatchToReactProps = dispatch => {
    return {
        onPostList: (token) => dispatch(postList(token)),
        onPostCreate: (token, board, title, contents) => dispatch(postCreate(token, board, title, contents)),
    }
}


export default withRouter(connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(PostList))

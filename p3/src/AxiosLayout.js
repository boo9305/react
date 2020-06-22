import React, {useState} from 'react';
import axios from 'axios'
import { Switch, Route , NavLink, withRouter} from 'react-router-dom'

import Login from './Login'
import PostList from './PostList'
import PostDetail from './PostDetail';

const AxiosLayout = (props) => {
    const [token , setToken] = useState("")
    const [post, setPost] = useState([])

    const handleLogin = (username, password) => {
        axios.defaults.headers = {}
        axios.post('/rest-auth/login/', {
            username: username, password: password
        }).then(res => {
            setToken(res.data.key)
            console.log(res.data)
            props.history.push("/")
        }).catch(err => console.log(err))
    }

    const handleLogout = () => {
        setToken(null)
        setPost([])
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.post('/rest-auth/logout/').then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    const handlePostList = () => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.get('/file_server/post/')
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
        
    }
    const handleCreatePost = (title, contents) => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        console.log(token)

        axios.post('/file_server/post/', {
            author: "1",
            title: title,
            contents: contents,

        }).then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <div>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <div>
                <NavLink to='/'>PostList</NavLink>
            </div>
            <hr/>
            <Switch>
                <Route exact path='/Login' render={() => (
                    <Login handleLogin={handleLogin} handleLogout={handleLogout} token={token}/>
                )}></Route>
                <Route exact path='/' render={() => (
                    <PostList 
                        handlePostList={handlePostList} 
                        handleCreatePost={handleCreatePost} 
                        token={token} 
                        post={post}/>
                    )}>
                </Route>
                <Route exact path='/post/:postID' render={() => (
                    <PostDetail token={token}></PostDetail> )}>
                </Route>
            </Switch>
            <hr/>
         
        </div>
    )
}

export default withRouter(AxiosLayout)
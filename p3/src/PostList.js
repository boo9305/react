import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

const PostList =  (props) => {
    const [post, setPost] = useState([])

    const handlePostList = () => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`
        }
        axios.get('/server/post/')
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
                setPost([])
            })

    }
    const handleCreatePost = (e) => {
        e.preventDefault()
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`
        }
        console.log(localStorage.getItem("token"))

        axios.post('/server/post/', {

            board: "11004",
            title: e.target.title.value,
            contents: e.target.contents.value,

        }).then(res => { console.log(res) })
            .catch(err => { console.log(err) })

    }

    useEffect(() => {
        console.log("useEffect")
        setPost(["kk"]);
        if (post.length === 0) {
             handlePostList()
        }
    }, [])

    return (
        <div>
            {console.log("list render")}
            {
                localStorage.getItem("token") ?
                    <div>
                        <input type="button" onClick={() => {
                            //props.history.push("/")\
                            window.location.reload()
                        }}/>
                        <form onSubmit={handleCreatePost}>
                            <input type='title' name='title' />
                            <input type='contents' name='contents' />
                            <input type='submit' value="create post"></input>

                        </form>

                        {
                             post.map(item => {
                                return (
                                    <div key={item.pk}>
                                        title : {item.title}
                                        <NavLink to={`/post/${item.pk}`} >   detail</NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div></div>
            }

            {
               
            }
        </div>
    )
}

export default withRouter(PostList)
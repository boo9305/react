import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
export default (props) => {
    const [post, setPost] = useState([])

    const handlePostList = () => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${props.token}`
        }
        axios.get('/server/post/')
            .then(res => setPost(res.data))
            .catch(err => console.log(err))

    }
    const handleCreatePost = (e) => {
        e.preventDefault()
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${props.token}`
        }
        console.log(props.token)

        axios.post('/server/post/', {
            author: "1",
            board: "1",
            title: e.target.title.value,
            contents: e.target.contents.value,

        }).then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        if (post.length === 0) {
            handlePostList()
        }
    }, [])

    return (
        <div>
            {console.log("list render")}
            {
                props.token ?
                    <div>
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
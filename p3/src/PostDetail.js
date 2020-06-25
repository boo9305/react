import React, { useState ,useEffect} from 'react'
import axios from 'axios'

import { withRouter } from 'react-router-dom' 

const PostDetail = (props) => {
    const [post, setPost] = useState({title : "" , contents : ""})
    const [comments, setComments] = useState([])

    useEffect(() => {
        if (post.title === "") {
            const postID = props.match.params.postID
            console.log("postID: ", postID)
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Token ${props.token}`
            }
            axios.get(`/server/post/${postID}/`)
            .then(res => { setPost(res.data) ; setComments(res.data.comments)})
            .catch(err => { console.log(err) })    
        }

    })
    const handlePostDetail = () => {
   
    }

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

    return(
        <div>  
            title : {post.title}
            <hr/>
            contents : {post.contents}
            <hr/>
            ------- comments -------
            <hr/>

            <form onSubmit={handleCommentSubmit}>
                <input type="input" name="comment"></input>
                <input type="submit" value="submit"></input>
            </form>

            {

                comments.map(item=> {
                    return (
                        <div>{item.author} : {item.contents}</div>
                    )
                })
            }
        </div>
    )
}

export default withRouter(PostDetail)

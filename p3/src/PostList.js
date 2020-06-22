import React, {useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
export default (props) => {
    useEffect(()=>{
        if (props.post.length === 0) {
            props.handlePostList()
        }
    })

    return (
        <div>
            {console.log("list render")}
            {
                props.token ?
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleCreatePost(e.target.title.value, e.target.contents.value)
                    }}>
                        <input type='title' name='title' />
                        <input type='contents' name='contents' />
                        <input type='submit' value="create post"></input>

                    </form>
                </div>
                :
                <div></div>
            }
           
            {
                props.post.map(item => {
                    return (
                        <div key={item.pk}>
                            title : {item.title}
                            <NavLink to={`/post/${item.pk}`} >   detail</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}
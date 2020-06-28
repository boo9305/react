import React from 'react'

export default (props, history) => {


    return (
        <div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.handleLogin(e.target.username.value, e.target.password.value)
                    //history.push('/')
                }}>
                    <input type='text' name='username' defaultValue='join'  />
                    <input type='password' name='password' defaultValue='rlawlghks'  />
                    <input type='submit' value="login"/>
                </form>

             
            </div>

            <hr />
            {
                localStorage.getItem("token") ?
                    <div style={{ color: "red" }}>login {props.token} {localStorage.getItem("token")}</div>
                    :
                    <div style={{ color: "red" }}>logout</div>
            }
        </div>
    )
}

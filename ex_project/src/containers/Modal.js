import React, { useState } from 'react'
import '../App.css'

const MyModal = () => {
    const [display, setDisplay] = useState("block")

    const onHandleClick = () => {
        setDisplay("block")
    }

    const onHandleCancelClick = () => {
        setDisplay("none")
        alert("dis")
    }

    return (
        <div onClick={onHandleClick}>
            hiHI
            {display}
            <div style={{ 
                "display" : display , 
                "position" : "fixed",
                "width" : "100%" , 
                "height" : "100%" , 
                "backgroundColor" : "#fff",
                "left" : "0",
                "top" : "0"
            }}>
                <div style={{ 
                    "margin" : "15% auto",
                    "width" : "70%",
                    "backgroundColor" : "#fff",
                }}>
                    HHHHHHIII
                    {display}
                    <div style={{
                        "margin" : "0 auto",
                        "width" : "100px",
                        "fontColor" : "fff",
                        "backgroundColor" : "fff"
                    }} onClick={() => {setDisplay("none")}}>
                    X
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyModal

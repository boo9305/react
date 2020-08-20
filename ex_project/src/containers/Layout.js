import React, {useState} from 'react'
import { connect } from 'react-redux' 
import { Link } from  'react-router-dom'

import "../App.css"
import ExerciseCard from "./ExerciseCard"
import MyModal from './Modal'

const Layout = (props) => {
    const onHandleClick = (e) => {
    }
    return(
        <div style={{ "height" : "1000px"}}>
            <h3>Layout</h3>
            <div>
                Token : {props.token}
            </div>

            <ExerciseCard type="squat" pk="1"i count="10" weight="100" ></ExerciseCard>
            <ExerciseCard type="banch_press" pk="2" count="10" weight="150" ></ExerciseCard>

            <MyModal></MyModal>

            <div>
                <div class="my-button" onClick={onHandleClick}>SAVE</div>
            </div>
        </div>
    )
}

const mapReduxStateToReactProps = state => {
    return {
        token : state.auth.token
    }
}

export default connect(mapReduxStateToReactProps, null)(Layout)


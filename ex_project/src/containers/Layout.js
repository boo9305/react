import React, {useState} from 'react'
import { connect } from 'react-redux' 
import { Link } from  'react-router-dom'

import "../App.css"
import ExerciseCard from "./ExerciseCard"

const Layout = (props) => {
    const onHandleClick = (e) => {
    }
    return(
        <div>
            <h3>Layout</h3>
            <div>
                Token : {props.token}
            </div>

            <ExerciseCard type="squat"></ExerciseCard>
            <ExerciseCard type="banch_press"></ExerciseCard>

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


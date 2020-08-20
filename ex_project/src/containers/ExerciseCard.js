import React from 'react'
import { withRouter, Link } from 'react-router-dom'


const ExerciseCard = (props) => {
    return (
        <div style={{"border" : "1px solid #000"}} >
            <Link to={
                { 
                    pathname : '/excard/' , 
                    state : { 
                        pk : props.pk ,
                        type : props.type,
                        count : props.count,
                        weight : props.weight,
                        comment : props.comment
                    }
                }
            } style={{ "color" : "#000", "textDecoration" : "none" }}> 
                <div>
                    Data : {props.data}
                </div>
                <div>
                    Type : {props.type}
                </div>
                <div>
                    Count : {props.count}
                </div>
                <div>
                    Weight : {props.weight}
                </div>
                <div>
                    comment : {props.comment}
                </div>
            </Link>
        </div>
    )

}

export default withRouter(ExerciseCard);


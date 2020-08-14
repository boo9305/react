import React from 'react'


const ExerciseCard = (props) => {

    return (
        <div style={{"border" : "1px solid #000"}}>
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
        </div>
    )

}

export default ExerciseCard;


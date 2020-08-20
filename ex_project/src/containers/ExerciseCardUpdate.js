import React from 'react'
import { withRouter, Link} from 'react-router-dom'

const ExerciseCard = (props) => {
    return (
        <div style={{"border" : "1px solid #000"}}>
            <div>
                id : {props.location.state.pk}
            </div>
            <div>
                Data : {props.location.state.data}
            </div>
            <div>
                Type : 
                <input type="text" defaultValue={props.location.state.type}/>
            </div>
            <div>
                Count : 
                <input type="text" defaultValue={props.location.state.count}/>
            </div>
            <div>
                Weight : 
                <input type="text" defaultValue={props.location.state.weight}/>
            </div>
            <div>
                comment : 
                <input type="text" defaultValue={props.location.state.comment}/>
            </div>

            <Link to="/">Save </Link>
            
            <Link to="/">Back </Link>
        </div>
    )

}

export default withRouter(ExerciseCard);


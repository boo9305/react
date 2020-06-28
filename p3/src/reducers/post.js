import { POST_FAIL, POST_LIST, POST_CREATE} from '../actions/post'


const initalState = {
    posts : []
}

const postReducer = (state = initalState, action) => {
    switch(action.type) {
        case POST_LIST : return {...state , posts : action.posts}
        case POST_CREATE : return {...state}
        case POST_FAIL : return {...state , posts : action.posts}
        default :
            return state;
    }
    
} 

export default postReducer;
import { POST_FAIL, POST_LIST, POST_DETAIL, POST_CREATE} from '../actions/post'


const initalState = {
    postList: [],
    postDetail : null,
    loading : false,
}

const postReducer = (state = initalState, action) => {
    switch(action.type) {
        case POST_LIST : return {...state , postList : action.posts , loading : true}
        case POST_DETAIL : return {...state, postDetail : action.post, loading : true }
        case POST_CREATE : return {...state}
        case POST_FAIL : return {...state , initalState }
        default :
            return state;
    }
    
} 

export default postReducer;
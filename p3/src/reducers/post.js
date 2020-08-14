import { POST_FAIL, POST_LIST, POST_DETAIL, POST_CREATE } from '../actions/post'


import {
    POST_INIT, 
    LIST_POST_INIT, LIST_POST_START, LIST_POST_SUCCESS, LIST_POST_FAIL, 
    DETAIL_POST_INIT, DETAIL_POST_START, DETAIL_POST_SUCCESS, DETAIL_POST_FAIL
 } from "../actions/post"

const initalState = {
    postList:   { data : [] , loading : false},
    postDetail: { data : null, loading : false},
}
const postReducer = (state = initalState, action) => {
    switch (action.type) {
        case POST_INIT              : return {...state, ...initalState }
        case LIST_POST_INIT         : return {...state, postList : initalState.postList }
        case LIST_POST_START        : return {...state, postList : {...state.postList, loading: false}}
        case LIST_POST_SUCCESS      : return {...state, postList : {...state.postList, data : action.data, loading: false}}
        case LIST_POST_FAIL         : return {...state, postList : initalState.postList}
        case DETAIL_POST_INIT       : return {...state, postDetail : initalState.postDetail }
        case DETAIL_POST_START      : return {...state, postDetail : {...state.postDetail, loading: false}}
        case DETAIL_POST_SUCCESS    : return {...state, postDetail : {...state.postDetail, data : action.data, loading: false}}
        case DETAIL_POST_FAIL       : return {...state, postDetail : initalState.postDetail}
        default:
            return state;
    }
}
export default postReducer;
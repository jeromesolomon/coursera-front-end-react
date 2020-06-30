// shared data
import * as ActionTypes from './actionTypes';

const initialState = {
    isLoading: true,
    errorMessage: null,
    commentList: []
};

export const CommentInfoReducer = (state = initialState, action) => {

    let newState = undefined;

    switch(action.type) {

        case ActionTypes.SET_COMMENTLIST:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: null, commentList: action.payload}
            
            return newState;

        case ActionTypes.COMMENTLIST_LOADING:

            // create new state
            newState = Object.assign({}, initialState);

            return newState;

        case ActionTypes.COMMENTLIST_FAILED:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, commentList: []}

            return newState;

        case ActionTypes.ADD_COMMENT:

            // the next comment id is the number of comments in the commentlist
            action.comment.id  = state.length; 

            // set the date to current ISO string formatted time/date
            action.comment.date = new Date().toISOString();

            // create a new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, commentList: []};

            // copy the existing commentList
            newState.commentList = [...state.commentList];

            // apend the new comment from the action to the list
            newState.commentList.push(action.comment);

            // return a new state (commment list)
            return newState;

        default:
            return state;

    }
}

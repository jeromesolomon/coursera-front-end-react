// shared data
import * as ActionTypes from './actionTypes';

const initialState = {
    isLoading: false,
    isPosting: false,
    errorMessage: null,
    commentList: []
};

export const CommentInfoReducer = (state = initialState, action) => {

    let newState = undefined;

    switch(action.type) {


        //
        // actions for loading and setting the comment list
        //

        case ActionTypes.SET_COMMENTLIST:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: null, commentList: action.payload}
            
            return newState;

        case ActionTypes.COMMENTLIST_LOADING:

            // create new state
            newState = Object.assign({}, initialState, { isLoading: true });

            return newState;

        case ActionTypes.COMMENTLIST_FAILED:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, commentList: []}

            return newState;

        //
        // actions for handling new comments from users
        //
            
        case ActionTypes.ADD_COMMENT:

            // create a new state with some fields changed
            newState = {...state, isPosting: false, commentList: []};

            // copy the existing commentList
            newState.commentList = [...state.commentList];

            // apend the new comment from the action to the list
            newState.commentList.push(action.payload);

            // return a new state (commment list)
            return newState;

        case ActionTypes.COMMENT_POSTING:

            newState = {...state, isPosting: true };

            return newState;

        case ActionTypes.COMMENT_POST_FAILED:

            // create a new state with some fields changed
            newState = {...state, errorMessage: action.payload};

            return newState;

        default:
            return state;

    }
}

// shared data
import { COMMENTLIST } from '../shared/commentList';
import * as ActionTypes from './actionTypes';

export const CommentListReducer = (state = COMMENTLIST, action) => {

    switch(action.type) {

        case ActionTypes.ADD_COMMENT:

            // the next comment id is the number of comments in the commentlist
            action.comment.id  = state.length; 

            // set the date to current ISO string formatted time/date
            action.comment.date = new Date().toISOString();
            
            // clone/copy into emtpty {} object, and then return a 
            // new state (commment list) using Object.assign
            let newState = Object.assign({}, action.comment);
            return newState;

        default:
            return state;

    }
}

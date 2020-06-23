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
            
            // clone/copy a new list/state (use Object.assign if using an object)
            // this is a shallow element by element copy, using spread
            let newState = [...state];

            // add the comment to the list
            newState.push(action.comment);

            console.log("state=",state);
            console.log("newState=",newState);

            // return a new state (commment list)
            return newState;

        default:
            return state;

    }
}

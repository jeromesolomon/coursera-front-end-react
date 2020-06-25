import * as ActionTypes from './actionTypes';

// shared data
import { DISHLIST } from '../shared/dishList';

// js object for adding comments action
export const addComment = (dishId, rating, author, comment) => ({
    
    type: ActionTypes.ADD_COMMENT,
    comment: {
        id: undefined, // the new unique id # is set in the reducer
        dishId: dishId, 
        rating: rating, 
        comment: comment,
        author: author,
        date: undefined, // the date is set in the reducer
        
    }

});

// thunk function
export const fetchDishList = () => (dispatch) => {

    // dispatch dishlist loading
    dispatch(dishListLoading(true));

    // 2 second delay, then dispatch addDishList
    setTimeout(() => {
        dispatch(addDishList(DISHLIST));
    }, 2*1000);
}

// load action
export const dishListLoading = () => ({
    type: ActionTypes.DISHLIST_LOADING
});

// failed action
export const dishListFailed = (errorMessage) => ({
    type: ActionTypes.DISHLIST_FAILED,
    payload: errorMessage
});

// add action
export const addDishList = (dishList) => ({
    type: ActionTypes.ADD_DISHLIST,
    payload: dishList
});

import * as ActionTypes from './actionTypes';

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


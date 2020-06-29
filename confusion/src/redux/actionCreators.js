import * as ActionTypes from './actionTypes';

// server url
import { serverUrl } from '../shared/serverUrl';

//
// add comment action
//

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

//
// dishList actions
//

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

// thunk function for fetching dishes
export const fetchDishList = () => (dispatch) => {

    // dispatch dishlist loading
    dispatch(dishListLoading(true));

    // from server
    return fetch(serverUrl + 'dishes')
        // convert response to json
        .then(response => response.json())
        // take json and dispatch a add dish action
        .then(dishList => dispatch(addDishList(dishList)))

};

//
// commentList actions
//

// load action
export const commentListLoading = () => ({
    type: ActionTypes.COMMENTLIST_LOADING
});


// failed action
export const commentListFailed = (errorMessage) => ({
    type: ActionTypes.COMMENTLIST_FAILED,
    payload: errorMessage
});

// add action
export const addCommentList = (commentList) => ({
    type: ActionTypes.ADD_COMMENTLIST,
    payload: commentList
});

// thunk function for fetching commentes
export const fetchCommentList = () => (dispatch) => {

    // dispatch commentlist loading
    dispatch(commentListLoading(true));

    // from server
    return fetch(serverUrl + 'comments')
        // convert response to json
        .then(response => response.json())
        // take json and dispatch a add comment action
        .then(commentList => dispatch(addCommentList(commentList)))

};

//
// promoList actions
//

// load action
export const promoListLoading = () => ({
    type: ActionTypes.PROMOLIST_LOADING
});


// failed action
export const promoListFailed = (errorMessage) => ({
    type: ActionTypes.PROMOLIST_FAILED,
    payload: errorMessage
});

// add action
export const addPromoList = (promoList) => ({
    type: ActionTypes.ADD_PROMOLIST,
    payload: promoList
});

// thunk function for fetching promoes
export const fetchPromoList = () => (dispatch) => {

    // dispatch promolist loading
    dispatch(promoListLoading(true));

    // from server
    return fetch(serverUrl + 'promos')
        // convert response to json
        .then(response => response.json())
        // take json and dispatch a add promo action
        .then(promoList => dispatch(addPromoList(promoList)))

};





import * as ActionTypes from './actionTypes';

// server url
import { serverUrl } from '../shared/serverUrl';

//
// add comment action
//

// js function for comments action
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
    type: ActionTypes.SET_DISHLIST,
    payload: dishList
});

//
// server response is ok
//
const serverSuccess = (response) => {

    if (response.ok) {
        return response;
    // else the response is a server processing error
    } else {
        // generate a new error object
        let error = new Error('Server Error:' + response.status + ":" + response.statusText);
        error.response = response;
        throw error;
    }

}

//
// server does not respond, error occured, promise failed
//
const serverFail = (error) => {

    // prepend more info to the error message
    error.message = "Server Error: Unable to contact the server. " + error.message;

    throw error;
    
}

// thunk function for fetching dishes
export const fetchDishList = () => (dispatch) => {

    // dispatch dishlist loading
    dispatch(dishListLoading(true));

    // from server
    return fetch(serverUrl + 'dishes')

        // server gives a response as a promise
        .then(serverSuccess, serverFail)

        // convert response to json
        .then(response => response.json())

        // take json and dispatch a add dish action
        .then(dishList => dispatch(addDishList(dishList)))

        // catch any of the thrown errors
        .catch(error => dispatch(dishListFailed(error.message)));

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
    type: ActionTypes.SET_COMMENTLIST,
    payload: commentList
});

// thunk function for fetching commentes
export const fetchCommentList = () => (dispatch) => {

    // dispatch commentlist loading
    dispatch(commentListLoading(true));

    // from server
    return fetch(serverUrl + 'comments')

        // server gives a response as a promise
        .then(serverSuccess, serverFail)

        // convert response to json
        .then(response => response.json())
        // take json and dispatch a add comment action
        .then(commentList => dispatch(addCommentList(commentList)))

        // catch any of the thrown errors
        .catch(error => dispatch(commentListFailed(error.message)));

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
    type: ActionTypes.SET_PROMOLIST,
    payload: promoList
});

// thunk function for fetching promoes
export const fetchPromoList = () => (dispatch) => {

    // dispatch promolist loading
    dispatch(promoListLoading(true));

    // from server
    return fetch(serverUrl + 'promotions')

        // server gives a response as a promise
        .then(serverSuccess, serverFail)

        // convert response to json
        .then(response => response.json())

        // take json and dispatch a add promo action
        .then(promoList => dispatch(addPromoList(promoList)))

        // catch any of the thrown errors
        .catch(error => dispatch(promoListFailed(error.message)));

};


//
// leaderList actions
//

// load action
export const leaderListLoading = () => ({
    type: ActionTypes.LEADERLIST_LOADING
});


// failed action
export const leaderListFailed = (errorMessage) => ({
    type: ActionTypes.LEADERLIST_FAILED,
    payload: errorMessage
});

// add action
export const addLeaderList = (leaderList) => ({
    type: ActionTypes.SET_LEADERLIST,
    payload: leaderList
});

// thunk function for fetching leaderes
export const fetchLeaderList = () => (dispatch) => {

    // dispatch leaderlist loading
    dispatch(leaderListLoading(true));

    // from server
    return fetch(serverUrl + 'leaders')

        // server gives a response as a promise
        .then(serverSuccess, serverFail)

        // convert response to json
        .then(response => response.json())

        // take json and dispatch a add leader action
        .then(leaderList => dispatch(addLeaderList(leaderList)))

        // catch any of the thrown errors
        .catch(error => dispatch(leaderListFailed(error.message)));

};


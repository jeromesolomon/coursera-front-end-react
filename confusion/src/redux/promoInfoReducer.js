import * as ActionTypes from './actionTypes';

const initialState = {
    isLoading: true, // defaults to true, since the first thing to happen is to load data from the server
    errorMessage: null,
    promoList: []
};

export const PromoInfoReducer = (state = initialState, action) => {

    let newState = undefined;

    switch(action.type) {

        case ActionTypes.SET_PROMOLIST:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: null, promoList: action.payload};
            
            return newState;

        case ActionTypes.PROMOLIST_LOADING:

            // create new state
            newState = Object.assign({}, initialState, { isLoading: true });

            return newState;

        case ActionTypes.PROMOLIST_FAILED:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, promoList: []};

            return newState;


        default:
            return state;

    }
}

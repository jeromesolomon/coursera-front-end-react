import * as ActionTypes from './actionTypes';

const initialState = {
    isLoading: false,
    errorMessage: null,
    dishList: []
};

export const DishInfoReducer = (state = initialState, action) => {

    let newState = undefined;

    switch(action.type) {

        case ActionTypes.SET_DISHLIST:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: null, dishList: action.payload};
            
            return newState;

        case ActionTypes.DISHLIST_LOADING:

            // create new state
            newState = Object.assign({}, initialState, { isLoading: true });

            return newState;

        case ActionTypes.DISHLIST_FAILED:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, dishList: []};

            return newState;


        default:
            return state;

    }
}

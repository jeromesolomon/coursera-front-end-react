import * as ActionTypes from './actionTypes';

const initialState = {
    isLoading: true,
    errorMessage: null,
    dishList: []
};

export const DishInfoReducer = (state = initialState, action) => {

    let newState = undefined;

    switch(action.type) {

        case ActionTypes.ADD_DISHLIST:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: null, dishList: action.payload};
            
            return newState;

        case ActionTypes.DISHLIST_LOADING:

            // create new state
            newState = Object.assign({}, initialState);

            return newState;

        case ActionTypes.DISHLIST_FAILED:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, dishList: []};

            return newState;


        default:
            return state;

    }
}

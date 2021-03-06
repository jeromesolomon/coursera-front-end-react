import * as ActionTypes from './actionTypes';

const initialState = {
    isLoading: true, // defaults to true, since the first thing to happen is to load data from the server
    errorMessage: null,
    leaderList: []
};

export const LeaderInfoReducer = (state = initialState, action) => {

    let newState = undefined;

    switch(action.type) {

        case ActionTypes.SET_LEADERLIST:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: null, leaderList: action.payload};
            
            return newState;

        case ActionTypes.LEADERLIST_LOADING:

            // create new state
            newState = Object.assign({}, initialState, { isLoading: true });

            return newState;

        case ActionTypes.LEADERLIST_FAILED:

            // create new state with some fields changed
            newState = {...state, isLoading: false, errorMessage: action.payload, leaderList: []};

            return newState;


        default:
            return state;

    }
}

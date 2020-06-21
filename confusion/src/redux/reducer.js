// shared data
import { DISHLIST } from '../shared/dishList';
import { COMMENTLIST } from '../shared/commentList';
import { PROMOTIONLIST } from '../shared/promotionList';
import { LEADERLIST } from '../shared/leaderList';

// initial state of the redux store
export const initialState = {
    dishList: DISHLIST,
    commentList: COMMENTLIST,
    promotionList: PROMOTIONLIST,
    leaderList: LEADERLIST

};

//
// reducer function takes a state and actiion, and 
// returns a new state
//
export const Reducer = (state = initialState, action) => {
    return state;
}

import { createStore, combineReducers } from 'redux';
import { DishListReducer } from './dishListReducer';
import { CommentListReducer } from './commentListReducer';
import { PromotionListReducer } from './promotionListReducer';
import { LeaderListReducer } from './leaderListReducer';

// add redux dev tools with action tracing turned on
import { composeWithDevTools } from "redux-devtools-extension";
import * as actionCreators from './actionCreators';

/*
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
*/

// get the enhancers w/ action tracing
const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
  });


// function to configure redux-react store
export const ConfigureStore = () => {

    // use combineReducers to combine different reducers to manage 
    // different parts of the redux store's state
    const store = createStore(
        combineReducers({
            dishList: DishListReducer,
            commentList: CommentListReducer,
            promotionList: PromotionListReducer,
            leaderList: LeaderListReducer
        }),
        composeEnhancers());

    return store;

}
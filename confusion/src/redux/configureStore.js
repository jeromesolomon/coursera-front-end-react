import { createStore, combineReducers, compose } from 'redux';
import { DishListReducer } from './dishListReducer';
import { CommentListReducer } from './commentListReducer';
import { PromotionListReducer } from './promotionListReducer';
import { LeaderListReducer } from './leaderListReducer';

// add redux dev tools with action tracing turned on
import { composeWithDevTools } from "redux-devtools-extension";
import * as actionCreators from './actionCreators';

// redux thunk middleware
import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from 'redux';

// middleware enhancers
const middlewareEnhancers = applyMiddleware(thunk, logger);

// enhancers w/ action tracing, and middleware
const composedEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25
    }
);

// function to configure redux-react store
export const ConfigureStore = () => {

    // use combineReducers to combine different reducers to manage 
    // different parts of the redux store's state
    const store = createStore(
        combineReducers({
            dishInfo: DishListReducer,
            commentList: CommentListReducer,
            promotionList: PromotionListReducer,
            leaderList: LeaderListReducer
        }),
        middlewareEnhancers);

    return store;

}
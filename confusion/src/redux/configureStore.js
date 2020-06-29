import { createStore, combineReducers } from 'redux';
import { createForms} from 'react-redux-form';

// import redux store elements
import { DishInfoReducer } from './dishInfoReducer';
import { CommentInfoReducer } from './commentInfoReducer';
import { PromotionListReducer } from './promotionListReducer';
import { LeaderListReducer } from './leaderListReducer';
import { InitialFeedbackForm } from './forms';

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

const allEnhancers = composedEnhancers(middlewareEnhancers)

// function to configure redux-react store
export const ConfigureStore = () => {

    // use combineReducers to combine different reducers to manage 
    // different parts of the redux store's state
    const store = createStore(
        combineReducers({
            dishInfo: DishInfoReducer,
            commentInfo: CommentInfoReducer,
            promotionList: PromotionListReducer,
            leaderList: LeaderListReducer,
            ...createForms({
                feedback: InitialFeedbackForm
            })
        }),
        allEnhancers);

    return store;

}
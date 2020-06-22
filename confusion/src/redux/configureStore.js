import { createStore, combineReducers, compose } from 'redux';
import { DishListReducer } from './dishListReducer';
import { CommentListReducer } from './commentListReducer';
import { PromotionListReducer } from './promotionListReducer';
import { LeaderListReducer } from './leaderListReducer';

// add redux dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

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
        enhancers);

    return store;

}
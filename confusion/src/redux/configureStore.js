import { createStore, compose } from 'redux';
import { Reducer, initialState } from './reducer';

// add redux dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// function to configure redux-react store
export const ConfigureStore = () => {

    const store = createStore(Reducer, initialState, enhancers);

    return store;

}
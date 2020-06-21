import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';


// function to configure redux-react store
export const ConfigureStore = () => {

    const store = createStore(Reducer, initialState);

    return store;

}
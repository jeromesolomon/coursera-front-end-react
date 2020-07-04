import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import new components
import Main from './components/MainComponent';
import './App.css';

// add firebase
import * as firebase from 'firebase';

// add react redux
// provider provides store to all components in the app via props
import { Provider } from 'react-redux';

// configure and create the react-redux store
import { ConfigureStore } from './redux/configureStore';

// create firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0gJo3B8VNFaQaPBJg2pukfJCxITxweOs",
  authDomain: "reactaurant-361ee.firebaseapp.com",
  databaseURL: "https://reactaurant-361ee.firebaseio.com",
  projectId: "reactaurant-361ee",
  storageBucket: "reactaurant-361ee.appspot.com",
  messagingSenderId: "173192635918",
  appId: "1:173192635918:web:1aa096d3224e15f00dbe5f",
  measurementId: "G-1G3CZ8W0TS"
};

firebase.initializeApp(firebaseConfig);

// create redux store
const store = ConfigureStore();

console.log("store =", store.getState());

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;

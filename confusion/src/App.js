import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import new components
import Main from './components/MainComponent';
import './App.css';

// add react redux
// provider provides store to all components in the app via props
import { Provider } from 'react-redux';

// configure and create the react-redux store
import { ConfigureStore } from './redux/configureStore';

// create redux store
const store = ConfigureStore();

console.log("store =", store.getState());

class App extends Component {

  render() {

    document.title = 'Reactaurant'

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

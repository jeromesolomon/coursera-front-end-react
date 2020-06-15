import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import new components
import Main from './components/MainComponent';

import './App.css';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Main></Main>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

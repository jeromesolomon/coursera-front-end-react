import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

// shared data
import { DISHLIST } from './shared/dishList';

// import new components
import Menu from './components/MenuComponent';

import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    // add dish list to the apps state
    this.state = {
      dishList: DISHLIST
    }

  }

  render() {

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishList={this.state.dishList}></Menu>
      </div>
    );
  }

}

export default App;

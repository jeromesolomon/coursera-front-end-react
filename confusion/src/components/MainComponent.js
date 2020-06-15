import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// shared data
import { DISHLIST } from '../shared/dishList';

// import  components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

class MainComponent extends Component {

    constructor(props) {

        super(props);

        // add dish list to the apps state
        this.state = {
        dishList: DISHLIST
        };

    }

    render() {

        return (
        <div>
            <Header></Header>
                <Switch>
                    <Route path='/home' component={
                        () => <Home></Home>}
                    >
                    </Route>
                    <Route exact path='/menu' component={
                        () => <Menu dishList={this.state.dishList}></Menu>}
                    >
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            <Footer></Footer>
        </div>
        );
    }

}

export default MainComponent;

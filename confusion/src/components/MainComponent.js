import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// shared data
import { DISHLIST } from '../shared/dishList';
import { COMMENTLIST } from '../shared/commentList';
import { PROMOTIONLIST } from '../shared/promotionList';
import { LEADERLIST } from '../shared/leaderList';

// import  components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';


class MainComponent extends Component {

    constructor(props) {

        super(props);

        // add dish list to the apps state
        this.state = {
        dishList: DISHLIST,
        commentList: COMMENTLIST,
        promotionList: PROMOTIONLIST,
        leaderList: LEADERLIST
        };

    }

    

    render() {

        return (
        <div>
            <Header></Header>
                <Switch>
                    <Route path='/home' component={
                        () => <Home
                                dish={this.state.dishList.filter((dish) => dish.featured)[0]}
                                promotion={this.state.promotionList.filter((promo) => promo.featured)[0]}
                                leader={this.state.leaderList.filter((leader) => leader.featured)[0]}
                            ></Home>}
                    >
                    </Route>
                    <Route exact path='/menu' component={
                        () => <Menu 
                                dishList={this.state.dishList}
                            ></Menu>}
                    >
                    </Route>
                    <Route exact path='/contactus' component={
                        () => <Contact></Contact>}
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

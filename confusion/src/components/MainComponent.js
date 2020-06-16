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
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';


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

        const HomePage = () => {
            return(
                <Home
                dish={this.state.dishList.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotionList.filter((promo) => promo.featured)[0]}
                leader={this.state.leaderList.filter((leader) => leader.featured)[0]}
                >
                </Home>
            );

        }

        const DishWithId = (props) => {

            const { match } = props;

            let menuDishId = parseInt(match.params.dishId);

            return (
                <DishDetail dish={this.state.dishList.filter(
                                (dish) => dish.id === menuDishId)[0]}
                            dishCommentList={this.state.commentList.filter(
                                (comment) => comment.dishId === menuDishId)}
                >
                </DishDetail>
            );
        }

        return (
        <div>
            <Header></Header>
                <Switch>

                    <Route path='/home' component={HomePage}
                    >
                    </Route>

                    <Route exact path='/aboutus' component={
                        () => <About
                            leaders={this.state.leaderList}
                            >
                            </About>}
                    >
                    </Route>

                    <Route exact path='/menu' component={
                        () => <Menu 
                                dishList={this.state.dishList}
                            > 
                            </Menu>}
                    >
                    </Route>

                    <Route path='/menu/:dishId' component={DishWithId}>
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

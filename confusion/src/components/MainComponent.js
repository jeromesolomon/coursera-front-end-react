import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishList } from '../redux/actionCreators';

// import  components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';

// maps a redux store state (in reducer.js) into props that will be made
// available for react components by the provider component
const mapStateToProps = (state) => {
    return {
        dishInfo: state.dishInfo,
        commentList: state.commentList,
        promotionList: state.promotionList,
        leaderList: state.leaderList
    }
}

// maps the dispatch actions to react components
const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => {
            dispatch(addComment(dishId, rating, author, comment));
            },
        fetchDishList: () => {
            dispatch(fetchDishList());
            }

    }
}

class MainComponent extends Component {

    // lifecycle componentDidMount method of component that gets called just after component 
    // is mounted into view of application
    componentDidMount() {

        // fetch the dish list when component is mounted
        this.props.fetchDishList();

    }

    render() {

        const HomePage = () => {
            return(
                <Home
                dish={this.props.dishInfo.dishList.filter((dish) => dish.featured)[0]}
                isLoading={this.props.dishInfo.isLoading}
                errorMessage={this.props.dishInfo.errorMessage}
                promotion={this.props.promotionList.filter((promo) => promo.featured)[0]}
                leader={this.props.leaderList.filter((leader) => leader.featured)[0]}
                >
                </Home>
            );

        }

        const DishWithId = (props) => {

            const { match } = props;

            let menuDishId = parseInt(match.params.dishId);

            console.log("menuDishId = ", menuDishId);

            let selectedDishList = this.props.dishInfo.dishList.filter((dish) => dish.id === menuDishId);

            // if the dish item does not exist, redirect back to the menu
            if (selectedDishList.length === 0) {
                // return(<div>Dish id {menuDishId.id} not found.</div>);
                return (<Redirect to="/menu" />);
            }

            let selectedDish = selectedDishList[0];

            let selectedDishCommentList = this.props.commentList.filter(
                (comment) => comment.dishId === menuDishId);

            console.log("selectedDish = ", selectedDish);
            console.log("selectedDishCommentList = ", selectedDishCommentList);  

            return (
                <DishDetail dish={selectedDish}
                            dishCommentList={selectedDishCommentList}
                            addComment={this.props.addComment}
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
                            leaderList={this.props.leaderList}
                            >
                            </About>}
                    >
                    </Route>

                    <Route exact path='/menu' component={
                        () => <Menu 
                                dishInfo={this.props.dishInfo}
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

// connect main component to redux with router
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

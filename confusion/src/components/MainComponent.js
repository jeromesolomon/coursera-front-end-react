import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchDishList, fetchCommentList, fetchPromoList, fetchLeaderList } from '../redux/actionCreators';

// import the predefined actions for redux forms
import { actions } from 'react-redux-form';

// react animations
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        commentInfo: state.commentInfo,
        promoInfo: state.promoInfo,
        leaderInfo: state.leaderInfo
    }
}

// maps the dispatch actions to react components
const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (dishId, rating, author, comment) => {
            dispatch(postComment(dishId, rating, author, comment));
            },
        postFeedback: (dishId, rating, author, comment) => {
            dispatch(postFeedback(dishId, rating, author, comment));
            },
        fetchDishList: () => {
            dispatch(fetchDishList());
            },
        fetchCommentList: () => {
            dispatch(fetchCommentList());
            },
        fetchPromoList: () => {
            dispatch(fetchPromoList());
            },
        fetchLeaderList: () => {
            dispatch(fetchLeaderList());
            },
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'));
            }

    }
}

class MainComponent extends Component {

    // lifecycle componentDidMount method of component that gets called just after component 
    // is mounted into view of application
    componentDidMount() {

        // fetch the data from server when Main component is mounted
        this.props.fetchDishList();
        this.props.fetchCommentList();
        this.props.fetchPromoList();
        this.props.fetchLeaderList();

    }

    render() {

        const HomePage = () => {

            console.log("this.props = ", this.props);

            return(
                <Home
                dishInfo={this.props.dishInfo}
                promoInfo={this.props.promoInfo}
                leaderInfo={this.props.leaderInfo}
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

            let selectedDishCommentList = this.props.commentInfo.commentList.filter(
                (comment) => comment.dishId === menuDishId);

            console.log("selectedDish = ", selectedDish);
            console.log("selectedDishCommentList = ", selectedDishCommentList);  

            return (
                <DishDetail dish={selectedDish}
                            dishCommentList={selectedDishCommentList}
                            postComment={this.props.postComment}
                >
                </DishDetail>
            );
        }

        return (
        <div>
            <Header></Header>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={150}>
                        <Switch>

                            <Route path='/home' component={HomePage}
                            >
                            </Route>

                            <Route exact path='/aboutus' component={
                                () => <About
                                    leaderInfo={this.props.leaderInfo}
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
                                () => <Contact
                                        resetFeedbackForm={this.props.resetFeedbackForm}
                                        postFeedback={this.props.postFeedback}
                                    >
                                </Contact>}
                            >
                            </Route>

                            <Redirect to="/home" />

                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            <Footer></Footer>
        </div>
        );
    }

}

// connect main component to redux with router
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

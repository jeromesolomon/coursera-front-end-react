import React, { Component } from 'react';

// shared data
import { DISHLIST } from '../shared/dishList';

// import  components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

class MainComponent extends Component {

    constructor(props) {

        super(props);

        // add dish list to the apps state
        this.state = {
        dishList: DISHLIST,
        selectedDishId: null
        };

    }

    // dish selected and update in components state
    onDishSelect(dishId) {
        this.setState({ selectedDishId: dishId});
    }

    render() {

        return (
        <div>
            <Header></Header>
            <Menu 
                dishList={this.state.dishList}
                mainOnDishSelect={(dishId) => {this.onDishSelect(dishId)}}
            >
            </Menu>
            <DishDetail dish={this.state.dishList.filter(
                (dish) => dish.id === this.state.selectedDishId)[0]}>
            </DishDetail>
            <Footer></Footer>
        </div>
        );
    }

}

export default MainComponent;

import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

// shared data
import { DISHLIST } from '../shared/dishList';

// import  components
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
        console.log("in");
        this.setState({ selectedDishId: dishId});
    }

    render() {

        return (
        <div>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Menu 
                dishList={this.state.dishList}
                mainOnDishSelect={(dishId) => {this.onDishSelect(dishId)}}
            >
            </Menu>
            <DishDetail selectedDish={this.state.dishList.filter(
                (dish) => dish.id === this.state.selectedDishId)[0]}>
            </DishDetail>
        </div>
        );
    }

}

export default MainComponent;

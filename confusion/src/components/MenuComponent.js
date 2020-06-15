import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import DishDetail from './DishDetailComponent';

function MenuItem(props) {

    const { dish, onDishSelect}  = props;

    return(

        <Card 
            className="dishCard"
            onClick={() => onDishSelect(dish.id)}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    );

}

class Menu extends Component {


    constructor(props) {

        super(props);

        // add dish list to the apps state
        this.state = {
            selectedDishId: undefined
        };



    }

    onDishSelect(dishId) {
        console.log("dishId = ",dishId);
        this.setState({ selectedDishId: dishId});
    }

    render() {

        // construct a list of card items
        const menu = this.props.dishList.map(
            (dish, index) => {

                return (
                    // col-12 col-md-6 means:
                    // on mobile: extra small to small one column for all 12 columns
                    // on laptop/tablet for medium to extra largre screens, each card occupies 5 columns
                    <div key={index} className="col-12 col-md-6">
                        <MenuItem 
                            dish={dish}
                            onDishSelect={(dishId) => this.onDishSelect(dishId)}
                            >
                        </MenuItem>
                    </div>
                );
            });

        // use list of items in each row of container/grid
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dish={this.props.dishList.filter(
                                (dish) => dish.id === this.state.selectedDishId)[0]}>
                    </DishDetail>
                </div>
            </div>
        );
    }

}


export default Menu;

import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {

        super(props);

        // state has properties related to this component
        this.state = {
            selectedDish: null
        };

    }

    // dish selected and update in components state
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }


    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardBody>
                        <CardText>
                            {dish.description}
                        </CardText> 
                    </Card>
                </div>
            )
        }

    }

    render() {

        // construct a list of media items
        const menu = this.props.dishList.map(
            (dish, index) => {

                return (
                    // extra small to small one column for all 12 columns
                    // for medium to extra largre screens, each card occupies 5 columns
                    <div key={index} className="col-12 col-md-6">
                        <Card onClick={() => {this.onDishSelect(dish)}}>
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>

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
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }

}

export default Menu;

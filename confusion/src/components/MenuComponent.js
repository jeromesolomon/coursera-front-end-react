import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';

// import components

class Menu extends Component {

    constructor(props) {

        super(props);

        // state has properties related to this component
        this.state = {
        };

    }




    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12">
                    <Card onClick={() => this.props.onClick(dish.id)}>
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


        // construct a list of card items
        const menu = this.props.dishList.map(
            (dish, index) => {

                return (
                    // col-12 col-md-6 means:
                    // on mobile: extra small to small one column for all 12 columns
                    // on laptop/tablet for medium to extra largre screens, each card occupies 5 columns
                    <div key={index} className="col-12 col-md-6">
                        <Card 
                            className="dishCard"
                            onClick={() => this.props.mainOnDishSelect(dish.id)}>
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
            </div>
        );
    }

}

export default Menu;

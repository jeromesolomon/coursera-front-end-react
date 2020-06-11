import React from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';


function renderDish(dish) {
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

};

function MenuItem(props) {

    const { dish, mainOnDishSelect }  = props;

    return(

        <Card 
            className="dishCard"
            onClick={() => mainOnDishSelect(dish.id)}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    );

}

const Menu = (props) => {

    // construct a list of card items
    const menu = props.dishList.map(
        (dish, index) => {

            return (
                // col-12 col-md-6 means:
                // on mobile: extra small to small one column for all 12 columns
                // on laptop/tablet for medium to extra largre screens, each card occupies 5 columns
                <div key={index} className="col-12 col-md-6">
                    <MenuItem dish={dish} mainOnDishSelect={props.mainOnDishSelect}></MenuItem>
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


export default Menu;

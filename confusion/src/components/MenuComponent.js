import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function MenuItem(props) {

    const { dish }  = props;

    return(

        <Card className="dishCard">
            <Link to={`/menu/${dish.id}`}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                            >
                        </MenuItem>
                    </div>
                );
            });

        // use list of items in each row of container/grid
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

}


export default Menu;

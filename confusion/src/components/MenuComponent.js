import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { serverUrl } from '../shared/serverUrl';

import { Loading } from './LoadingComponent';

function MenuItem(props) {

    const { dish }  = props;

    return(

        <Card className="dishCard">
            <Link to={`/menu/${dish.id}`}>
                <CardImg src={'assets/'+ dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
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

        if (this.props.dishInfo.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading></Loading>
                    </div>
                </div>
    
            );
        }
    
        if (this.props.dishInfo.errorMessage) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.dishInfo.errorMessage}</h4>
                    </div>
                </div>
            );
        }

        // construct a list of card items
        // col-12 col-md-6 means:
        // on mobile: extra small to small one column for all 12 columns
        // on laptop/tablet for medium to extra largre screens, each card occupies 5 columns
        
        const menu = this.props.dishInfo.dishList.map(
            (dish, index) => {

                return (
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
                </div>
                <div className="row">
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

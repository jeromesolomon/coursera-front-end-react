import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, 
        CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {

        super(props);

        // state has properties related to this component
        this.state = {
        };

    }

    render() {

        // construct a list of media items
        const menu = this.props.dishList.map(
            (dish, index) => {

                return (
                    // extra small to small one column for all 12 columns
                    // for medium to extra largre screens, each card occupies 5 columns
                    <div key={index} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
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

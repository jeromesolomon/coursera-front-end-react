import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {

        super(props);

        // state has properties related to this component
        this.state = {
        };

    }



    render() {

        let dish = this.props.selectedDish;

        if (dish != null) {
            return (
                <div className="col-12 col-md-6">
                    <Card className="dishDetailCard">
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
        } else {
            return (<div></div>);
        }

    }

}

export default DishDetail;


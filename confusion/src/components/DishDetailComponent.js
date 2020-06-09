import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {

        super(props);

        // state has properties related to this component
        this.state = {
        };

    }

        // render the comments
        renderComments(comments) {

 
            if (comments != null) {
    
                // construct and format the unstyled list item comments
    
                // date formatting
                const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    
    
                const commentItems = comments.map(
                    (x, index) => {
    
                        let aDate = new Date(x.date);
    
                        let d = aDate.toLocaleDateString(undefined, dateOptions)
    
                        return (
                            <div className="dishComment">
                                <li>{x.comment}</li>
                                <li>-- {x.author}, {d}</li>
                            </div>
                        );
                    });
    
                // date.toLocaleDateString('en-US', options));
    
                // <pre>{JSON.stringify(commentsFormatted)}</pre>
    
                return (
                        <ul class="list-unstyled">
                            {commentItems}
                        </ul>
                );       
    
            } else {
                return (<p>No comments</p>);
            }
    
        }

    render() {

        let dish = this.props.selectedDish;

        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card className="dishDetailCard">
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardBody>
                            <CardText className="dishDescription">
                                {dish.description}
                            </CardText> 
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="dishDetailCard">
                            <CardText className="dishCommentCardText">
                                <h4>Comments</h4>
                                { this.renderComments(dish.comments) }
                            </CardText> 
                        </Card>
                    </div>
                </div>
            )
        } else {
            return (<div></div>);
        }

    }

}

export default DishDetail;


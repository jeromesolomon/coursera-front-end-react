import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


// disay dish details
function RenderDish(props) {

    const { dish } = props;

    if (dish != null) {
        return (
            <div className="noSpaceDiv col-12">
                <Card 
                    className="dishDetailCard">
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

// render the dish comments
function RenderComments(props) {

    const { comments } = props;

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
                <div className="noSpaceDiv col-12">
                    <Card 
                        className="dishCommentCard">
                        <CardBody>
                            <CardTitle heading><h4>Comments</h4></CardTitle>
                        </CardBody>
                        <CardText>
                            <ul class="list-unstyled">
                                {commentItems}
                            </ul>
                        </CardText> 
                    </Card>
                </div>
        );       

    } else {
        return (<p>No comments</p>);
    }

}

const DishDetail = (props) => {

    const { dish } = props;

    // console.log(props);

    if (dish != null) {
        return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <RenderDish dish={dish}></RenderDish>
                </div>
                <div className="col-12 col-md-6">
                    <RenderComments comments={dish.comments}></RenderComments>
                </div>
            </div>
        </div>
        )
    } else {
        return (<div></div>);
    }

}

export default DishDetail;


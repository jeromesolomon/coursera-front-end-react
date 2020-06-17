import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


// disay dish details
function RenderDish(props) {

    const { dish } = props;

    if (dish != null) {
        return (
            <React.Fragment>
                <Card 
                    className="dishDetailCard">
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardBody>
                    <CardText className="dishDetailCardText">
                        {dish.description}
                    </CardText> 
                </Card>
            </React.Fragment>
        )
    }

}

// render the dish comments
function RenderCommentList(props) {

    const { dishCommentList } = props;

    // date.toLocaleDateString('en-US', options));
    // <pre>{JSON.stringify(commentFormatted)}</pre>

    let commentItems = undefined;

    if (dishCommentList == null) {

        return (<div></div>);
        
    } else {

        // construct and format the unstyled list item comments

        // date formatting
        const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };


        commentItems = dishCommentList.map(
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

        return (
            <React.Fragment>
                <Card 
                    className="dishCommentCard">
                    <CardBody>
                        <CardTitle><h4>Comments</h4></CardTitle>
                    </CardBody>
                    <CardText className="dishDetailCardText">
                        <ul class="list-unstyled">
                            {commentItems}
                        </ul>
                    </CardText> 
                </Card>
            </React.Fragment>
        );

    }


}


const DishDetail = (props) => {

    const { dish, dishCommentList } = props;

    // console.log(props);

    if (dish != null) {
        return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-12">
                        <h3>{dish.name}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <RenderDish dish={dish}></RenderDish>
                </div>
                <div className="col-12 col-md-6">
                    <RenderCommentList dishCommentList={dishCommentList}></RenderCommentList>
                </div>
            </div>
        </div>
        )
    } else {
        return (<div></div>);
    }

}

export default DishDetail;


import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { Button, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//
// form validation functions
//
const required = (val) => val && (val.length>0);
// function of functions
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

// comment form component
function CommentForm(props) {

    const { dishCommentList, toggleModal } = props;

    return (
        <React.Fragment>
            <Button 
                className="darkButton"
                id="commentFormButton"
                outline onClick={ () => { toggleModal(); } }
            >
            Submit Comment
            </Button>
        </React.Fragment>
    )

}

// display dish details
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

    const { dishCommentList, toggleModal } = props;

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
                    <div className="dishComment" key={index}>
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
                        <ul className="list-unstyled">
                            {commentItems}
                        </ul>
                    </CardText> 
                    <CommentForm 
                        dishCommentList={dishCommentList}
                        toggleModal = { toggleModal }
                    >
                    </CommentForm>
                </Card>
            </React.Fragment>
        );

    }


}


class DishDetail extends Component {

    constructor(props) {
        
        super(props);
    
        this.state = {
          isModalOpen: false,
          dish: props.dish,
          dishCommentList: props.dishCommentList
        };

        this.handleSubmit = this.handleSubmit.bind(this);

      }

    toggleModal() {

        this.setState({ 
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values, null, 2));
    }

    

    // console.log(props);

    render() {

        let dish = this.state.dish;
        let dishCommentList = this.state.dishCommentList;

        if (dish != null) {
            return (
            <React.Fragment>
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
                            <RenderCommentList 
                                dishCommentList={dishCommentList}
                                toggleModal={ () => { this.toggleModal(); } }
                            >

                                </RenderCommentList>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={ () => { this.toggleModal(); } }
                >
                    <ModalHeader toggle={ () => { this.toggleModal(); } }>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                                        <Row>Rating</Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.select model=".ratingType" name="ratingType"
                                                    className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="form-group">
                                            <Col>
                                                <Row>Your Name</Row>
                                                <Control.text model=".name" id="name" name="name"
                                                    placeholder="Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".name"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>Comment</Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.textarea model=".message" id="message" name="message"
                                                    rows="6"
                                                    className="form-control" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={{size:10, offset: 2}}>
                                                <Button type="submit" color="primary">
                                                Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
            )
        } else {
            return (<div></div>);
        }

    }

}

export default DishDetail;


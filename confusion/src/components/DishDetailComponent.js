import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { Button, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// react animations
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

import { Loading } from './LoadingComponent';

import { serverUrl } from '../shared/serverUrl';




//
// form validation functions
//
const required = (val) => { return (val && (val.length>0)); }
// function of functions
const maxLength = (len) => (val) => { return ( !(val) || (val.length <= len) ); }
const minLength = (len) => (val) => { return ( val && (val.length >= len) ); }

const requiredSelect = (val) => {  return !isNaN(val); }

// comment form component
function CommentForm(props) {

    const { toggleModal } = props;

    return (
        <React.Fragment>
            <Button 
                className="darkButton"
                id="commentFormButton"
                outline onClick={ () => { toggleModal(); } }
            >
            <i className="fa fa-edit fa-lg"></i>
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
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translate(-50%)'
                    }}
                >
                    <Card 
                        className="dishDetailCard">
                        <CardImg src={serverUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                        <CardText className="dishDetailCardText">
                            {dish.description}
                        </CardText> 
                    </Card>
                </FadeTransform>
            </React.Fragment>
        )
    }

}

// render the dish comments
function RenderCommentList(props) {

    const { dishCommentList, toggleModal, postComment, dishId } = props;

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
                    <Fade in>
                        <div className="dishComment" key={index}>
                            <li>{x.comment}</li>
                            <li>-- {x.author}, {d}</li>
                        </div>
                    </Fade>
                );
            });

        return (
            <React.Fragment>
                <Card 
                    className="dishCommentCard">
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                    </CardBody>
                    <CardText className="dishDetailCardText">
                        <ul className="list-unstyled">
                            <Stagger in>
                                {commentItems}
                            </Stagger>
                        </ul>
                    </CardText> 
                    <CommentForm
                        toggleModal = { toggleModal }
                        postComment={postComment}
                        dishId={dishId}
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
            isValidComment: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

      }

    toggleModal() {

        this.setState({ 
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleSubmit(values) {

        // toggle off the modal
        this.toggleModal();

        // alert('Current State is: ' + JSON.stringify(values, null, 2));

        // add comment to list by dispatching a postComment action to update
        // the react redux store/state
        this.props.postComment(this.props.dish.id, values.rating, values.name, values.comment);
    
    }

    handleUpdate(form) {
        // console.log('form = ',form);
        // console.log('form.rating.valid = ', form.rating.valid);
        // console.log('form.name.valid = ', form.name.valid);

        // to enable/disable submut button
        this.setState({ 
            isValidComment: (form.rating.valid && form.name.valid && form.comment.valid)
        });

    }

    // console.log(props);

    render() {

        // check if dishes are loading
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading></Loading>
                    </div>
                </div>

            );
        }

        if (this.props.errorMessage) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errorMessage}</h4>
                    </div>
                </div>
            );
        }

        let dish = this.props.dish;
        let dishCommentList = this.props.dishCommentList;

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
                                postComment={this.props.postComment}
                                dishId={this.props.dish.id}
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
                        Comment on {dish.name}
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <LocalForm 
                                        onSubmit={(values) => this.handleSubmit(values)}
                                        onUpdate={(form) => this.handleUpdate(form)}
                                    >

                                        Rating
                                        <Row className="form-group">
                                            <Col>
                                                <Control.select model=".rating" name="rating"
                                                    className="form-control"
                                                    validators={{
                                                        requiredSelect
                                                    }}
                                                >
                                                    <option>--</option>
                                                    <option>5</option>
                                                    <option>4</option>
                                                    <option>3</option>
                                                    <option>2</option>
                                                    <option>1</option>
                                                </Control.select>
                                                <Errors
                                                    className="text-danger"
                                                    model=".rating"
                                                    show="touched"
                                                    messages={{
                                                        requiredSelect: 'Please select a rating'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        
                                        Your Name
                                        <Row className="form-group">
                                            <Col>
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

                                        Comment
                                        <Row className="form-group">
                                            <Col>
                                                <Control.textarea model=".comment" id="comment" name="comment"
                                                    rows="6"
                                                    className="form-control" 
                                                    validators={{
                                                        required, maxLength: maxLength(1000)
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".comment"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        maxLength: 'Must be 1000 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Button className="darkButton" type="submit"
                                                    disabled={!this.state.isValidComment}
                                                >
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


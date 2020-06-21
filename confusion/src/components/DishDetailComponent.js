import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

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

        this.handleLogin = this.handleLogin.bind(this);

      }

    toggleModal() {

        this.setState({ 
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

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
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
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


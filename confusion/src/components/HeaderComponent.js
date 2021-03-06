import React, { Component } from 'react';

// reasct nav bar imports
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { Form, FormGroup, Label, Input } from 'reactstrap';

import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.handleLogin = this.handleLogin.bind(this);

      }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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


    render() {

        return(
            <React.Fragment>

                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={() => {this.toggleNav()}} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Reactaurant' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><i className="fa fa-home fa-lg"></i> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><i className="fa fa-list fa-lg"></i> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><i className="fa fa-info fa-lg"></i> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><i className="fa fa-address-card fa-lg"></i> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button id="loginButton" outline onClick={ () => { this.toggleModal(); } }>
                                    <i className="fa fa-sign-in"> Login</i>
                                </Button>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Reactaurant</h1>
                                <p>We take inspiration from the most reactive ingredients and how they can create amazing cuisines.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

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
                            <Button className="darkButton" type="submit" value="submit">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;

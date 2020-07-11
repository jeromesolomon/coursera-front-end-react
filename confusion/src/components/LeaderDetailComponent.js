import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// react animations
import { FadeTransform } from 'react-animation-components';

import { Loading } from './LoadingComponent';


// display leader details
function RenderLeader(props) {

    const { leader } = props;

    if (leader != null) {
        return (
            <React.Fragment>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translate(-50%)'
                    }}
                >
                    <Card
                        className="leaderDetailCard">
                        <CardImg className="leaderDetailImage" src={'/assets/' + leader.image} alt={leader.name} />
                        <CardBody>
                            <CardTitle>
                                {leader.name}
                            </CardTitle>
                        </CardBody>
                        <CardText className="leaderDetailCardText">
                            
                            {leader.description}
                        </CardText> 
                    </Card>
                </FadeTransform>
            </React.Fragment>
        )
    }

}



class LeaderDetail extends Component {

    constructor(props) {
        
        super(props);

        this.state = {};

      }


    // console.log(props);

    render() {

        // check if leaderes are loading
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

        let leader = this.props.leader;

        if (leader != null) {
            return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active><Link to='/aboutus'>About Us</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{leader.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <div className="col-12">
                                <h3>{leader.name}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <RenderLeader leader={leader}></RenderLeader>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
        } else {
            return (<div></div>);
        }

    }

}

export default LeaderDetail;


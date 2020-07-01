import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

import { Loading } from './LoadingComponent';

import { serverUrl } from '../shared/serverUrl';

import { FadeTransform } from 'react-animation-components';

function RenderCard(props) {

    const { item, isLoading, errorMessage } = props;

    // check if dishes are loading
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading></Loading>
                </div>
            </div>

        );
    }

    if (errorMessage) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{errorMessage}</h4>
                </div>
            </div>
        );
    }


    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translate(-50%)'
            }}
        >
            <Card>
                <CardImg src={serverUrl + item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );

}


function Home(props) {

    const { dishInfo, promoInfo, leaderInfo } = props;

    // get the featured dish
    let featuredDish = dishInfo.dishList.filter((dish) => (dish.featured))[0];
    let featuredPromo = promoInfo.promoList.filter((promo) => (promo.featured))[0];
    let featuredLeader = leaderInfo.leaderList.filter((leader) => (leader.featured))[0];

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={featuredDish}
                        isLoading={dishInfo.isLoading}
                        errorMessage={dishInfo.errorMessage}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard
                        item={featuredPromo}
                        isLoading={promoInfo.isLoading}
                        errorMessage={promoInfo.errorMessage}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard
                        item={featuredLeader}
                        isLoading={leaderInfo.isLoading}
                        errorMessage={leaderInfo.errorMessage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
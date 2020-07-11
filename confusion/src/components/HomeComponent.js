import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Loading } from './LoadingComponent';

// react animations
import { FadeTransform } from 'react-animation-components';

function RenderCard(props) {

    const { item, isLoading, errorMessage, isDish, isLeader } = props;

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

    let route = undefined;
    if (isDish) {
            route = "/menu/" + item.id;
    }

    if (isLeader) {
        route = "/aboutus/" + item.id;
    }

    // console.log("IMAGE PATH =", 'assets/' + item.image);

    console.log("item = ", item);
    console.log("item.id = ", item.id);

    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translate(-50%)'
            }}
        >
            <Card>
                <Link to={`${route}`}>
                    <CardImg className="homeImage" src={'assets/' + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    </CardBody>
                </Link>
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
                    <h3>Featured Dish</h3>
                    <RenderCard
                        item={featuredDish}
                        isLoading={dishInfo.isLoading}
                        errorMessage={dishInfo.errorMessage}
                        isDish={true}
                        isLeader={false}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <h3>Special Dish</h3>
                    <RenderCard
                        item={featuredPromo}
                        isLoading={promoInfo.isLoading}
                        errorMessage={promoInfo.errorMessage}
                        isDish={true}
                        isLeader={false}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <h3>Featured Team Member</h3>
                    <RenderCard
                        item={featuredLeader}
                        isLoading={leaderInfo.isLoading}
                        errorMessage={leaderInfo.errorMessage}
                        isDish={false}
                        isLeader={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
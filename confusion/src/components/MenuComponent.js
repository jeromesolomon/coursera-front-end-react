import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { DISHLIST } from '../shared/dishList';



class Menu extends Component {

    constructor(props) {

        super(props);

        // state has properties related to this component
        this.state = {
        };

    }

    render() {

        // construct a list of media items
        const menu = this.props.dishList.map(
            (dish, index) => {

                return (
                    <div key={index} className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name} />
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media>

                    </div>
                    
                );
            });

        // use list of items in container/grid
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>

                </div>
            </div>

        );
    }

}

export default Menu;

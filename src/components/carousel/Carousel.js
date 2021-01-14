import React from 'react';
import {Link} from "react-router-dom";

import Slider from "react-slick";

import Item from 'components/item/Item';

export default class Carousel extends React.Component {

    render(){
    	var settingsItem = {
			dots: false,
			infinite: true,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1
		};
    	return(
			<div className="contentCarousel">
				<Slider {...settingsItem} className="customCarousel">
					<div>
						<Item/>
					</div>
					<div>
						<Item/>
					</div>
					<div>
						<Item/>
					</div>
					<div>
						<Item/>
					</div>
					<div>
						<Item/>
					</div>
				</Slider>
			</div>
        );
    }
}

import React from 'react';
import {Link} from "react-router-dom";

import Slider from "react-slick";

export default class BannerSlider extends React.Component {

    render(){
    	var settingsLarge = {
			dots: true,
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
		};
    	return(
			<div className="contentSlider">				
				<Slider {...settingsLarge} className="customSlider">
					<div>
						<img src="https://www.datasoft.com.ar/Pubs/Sites/Default/Banners/1084.jpg" className="img-fluid"/>
					</div>
					<div>
						<img src="https://www.datasoft.com.ar/Pubs/Sites/Default/Banners/1082.jpg" className="img-fluid"/>
					</div>
					<div>
						<img src="https://www.datasoft.com.ar/Pubs/Sites/Default/Banners/1086.jpg" className="img-fluid"/>
					</div>
					<div>
						<img src="https://www.datasoft.com.ar/Pubs/Sites/Default/Banners/1080.jpg" className="img-fluid"/>
					</div>
				</Slider>
			</div>
        );
    }
}

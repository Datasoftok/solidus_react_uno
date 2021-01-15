import React from 'react';
import {Link} from "react-router-dom";

import BannerSlider from 'components/banner_slider/BannerSlider';
import Carousel from 'components/carousel/Carousel';

export default class Home extends React.Component {

    render(){
    	return(
			<div className="contentHome">
				<div className="row">
					<div className=" col">
						<BannerSlider/>
					</div>
					<div className="col title">
						<h2>Destacados</h2>
					</div>
					<div className=" col">
						<Carousel/>
					</div>
				</div>
			</div>
        );
    }
}

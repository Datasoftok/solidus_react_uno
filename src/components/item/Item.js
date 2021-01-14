import React from 'react';
import {Link} from "react-router-dom";


export default class Item extends React.Component {

    render(){
    	return(
			<div className="contentProduct">
				<buttom className="btn btn-fav"><i className="far fa-heart"></i></buttom>
				<img src="https://www.datasoft.com.ar/Image/0/450_450-020831_1.jpg" className="img-fluid imgProduct"/>
				<Link to="/vip"><h2 className="titleProduct">TABLET 7" PHILCO TP7A6 QUAD CORE 1GB 16GB DUAL CAM WIFI ANDROID 10</h2></Link>
				<h4 className="price"><span className="sign">$</span><span>10.209</span></h4>							
				<div className="descProduct">
					<p className="oldPrice">$8.859</p>
					<p className="Discount"><span className="number">32</span><span className="sign">%</span><span className="off">OFF</span></p>
				</div>
				<h3 className="quota" >18 cuotas sin interés de <span className="num">$ 492,17</span></h3>
				<buttom className="btn btnBuy">Comprar</buttom>
			</div>			
        );
    }
}

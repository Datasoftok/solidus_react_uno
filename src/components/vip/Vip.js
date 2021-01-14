import React from 'react';
import {Link} from "react-router-dom";

import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';

export default class Vip extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      nav1: null,
	      nav2: null
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      nav1: this.slider1,
	      nav2: this.slider2
	    });
	  }

    render(){
    	var settingsLarge = {
    		asNavFor: this.state.nav2,
          	ref: (slider) => (this.slider1 = slider),
			infinite: true,
			speed: 500,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		var settingsSmall = {
			asNavFor: this.state.nav1,
          	ref: (slider) => (this.slider2 = slider),
			infinite: true,
			speed: 500,
			arrows: false,
			slidesToShow: 4,
			swipeToSlide: true,
			focusOnSelect: true,
			slidesToScroll: 1
		};

    	return(
			<div className="contentVip">
				<div className="row">
					<div className="col offset-md-1 col-md-4">
						<Slider {...settingsLarge} className="vipSlider">
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_1.png" zoomSrc="https://www.datasoft.com.ar/Image/0/1500_1500-020877_1.png" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_2.png" zoomSrc="https://www.datasoft.com.ar/Image/0/1500_1500-020877_2.png" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_3.png" zoomSrc="https://www.datasoft.com.ar/Image/0/1500_1500-020877_3.png" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_4.png" zoomSrc="https://www.datasoft.com.ar/Image/0/1500_1500-020877_4.png" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_5.png" zoomSrc="https://www.datasoft.com.ar/Image/0/1500_1500-020877_5.png" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_6.png" zoomSrc="https://www.datasoft.com.ar/Image/0/1500_1500-020877_6.png" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/700_700-020898_2.jpg" zoomSrc="https://www.datasoft.com.ar/Image/0/700_700-020898_2.jpg" />
							</div>
							<div>
								<InnerImageZoom src="https://www.datasoft.com.ar/Image/0/700_700-017421_1.jpg" zoomSrc="https://www.datasoft.com.ar/Image/0/700_700-017421_1.jpg" />
							</div>
						</Slider>
						<Slider {...settingsSmall} className="vipSlider">
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_1.png" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_2.png" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_3.png" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_4.png" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_5.png" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_6.png" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/700_700-020898_2.jpg" className="img-fluid imgSliderSmall"/>
							</div>
							<div>
								<img src="https://www.datasoft.com.ar/Image/0/700_700-017421_1.jpg" className="img-fluid imgSliderSmall"/>
							</div>
						</Slider>
					</div>
					<div className="col col-md-7">
						<div className="infoBox">
							<h4 className="title">TABLET 8" SAMSUNG GALAXY TAB A SM-T290 2GB 32GB DUAL CAM WIFI NEGRA</h4>
							<span className="sku">SKU: 020877</span>
							<span className="price">$ 18.529</span>
							<span className="quota">18 cuotas sin interés de $ 1.029,39</span>							
						</div>
						<div className="buyBox">
							<Link to="/cart"><button className="btn btnBuy">Comprar</button></Link>
							<div className="row infoBuy">
								<div className="col payment">
									<p className="titlePayment">Empezá a Pagar en 3 meses en 12 Cuotas sin Interés!</p>
									<img src="https://www.datasoft.com.ar/Content/Images/tarjetasx2.png" className="img-fluid imgPayment"/><span className="comentPayment">Pagá hasta en 12 cuotas sin interés con pago diferido*!</span>
									<button className="btn morePayment">Ver más opciones de Pago</button>
								</div>
								<div className="col shipping">
									<img src="https://www.datasoft.com.ar/Pubs/Sites/Default/Custom/b-camion.svg" className="img-fluid imgShipping"/>
									<p className="titleShipping">Envio a Domicilio</p>
									<span className="comentShipping">Recibilo en tu domicilio</span>
									<button className="btn moreShipping">Ver tiempos y costos de envío</button>
								</div>
							</div>		
						</div>
					</div>
				</div>
				<div className="row titleDesc">
					<div className="col">
						<h4>Descripción</h4>
					</div>
					<div className="col">
						<h4>Especificaciones técnicas</h4>
					</div>
				</div>
				<div className="row">
					<div className="col desc">
						<h6>Conectá tus dispositivos</h6>
						<p>Cuenta con puerto micro USB, mientras que gracias a su placa red de Wi-Fi vas a poder conectarte inalámbricamente a internet.</p>
						<h6>Capturá tus momentos</h6>
						<p>Este producto cuenta con Cámara Principal de 8 megapíxeles mediante la cual podrás capturar tus imágenes y con 
						la cámara frontal de 2 megapíxeles,vas a poder realizar videollamadas o sacarte fotos instantáneas de manera sencilla.</p>
						<h6>Experimentá su diseño/</h6>
						<p>La Tablet Samsung SM-T290 cuenta con un diseño compacto y moderno. Cuenta con una pantalla de 8 pulgadas con una resolución de: 1280x800 píxeles.</p>
						<h6>Personalizá tu Tablet</h6>
						<p>La Tablet Samsung cuenta con 32GB de memoria interna para que la personalices cómo y cuándo quieras, lleves tus aplicaciones favoritas, 
						guardes tus libros, fotos y música.</p>
					</div>
					
					<div className="col specs">
						<div className="row">
							<div className="col ">
								<span className="name">Imagen</span>
							</div>
							<div className="col">
								<span className="value">Tamaño de Pantalla: 8"</span> 
								<span className="value">Resolución de pantalla: 1280x800</span>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<span className="name">Memoria</span>
							</div>
							<div className="col">
								<span className="value">Memoria Interna 32 GB</span> 
								<span className="value">Memoria RAM 2 GB</span>
								<span className="value">Expandible a 512GB</span>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<span className="name">Cámara</span>
							</div>
							<div className="col">
								<span className="value">Tamaño de Pantalla: 8"</span> 
								<span className="value">Cámara Frontal 2 Mp</span>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<span className="name">Características generales</span>
							</div>
							<div className="col">
								<span className="value">Sistema Operativo: Android</span> 
								<span className="value">Batería 5,100 mAh (Typical)</span> 
								<span className="value">Color Negro</span>
								<span className="value">Medidas 210 x 124.4 x 8 mm</span>
								<span className="value">Peso 345 g</span>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<span className="name">Modelo y origen</span>
							</div>
							<div className="col">
								<span className="value">Modelo SM-T290</span> 
								<span className="value">Origen Vietnam</span>
							</div>
						</div>
					</div>
				</div>	
			</div>
        );
    }
}

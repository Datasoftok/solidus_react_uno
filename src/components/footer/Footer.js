import React from 'react';
import {Link} from "react-router-dom";


export default class Footer extends React.Component {

    render(){
    	return(
			<footer className="footer">
				<div className="row">
					<div className="col footerContent">
						<div className="row news">
							<div className="col-12 col-md-6 "><i className="far fa-envelope"></i><span className="txtNews">Newsletter</span></div>
							<div className="col-12 col-md-6 ">
								<span className="txtComent">Recibí en tu email noticias de productos, lanzamientos y promociones!</span>
								<form>
									<div className="form-group">
										<input type="email" className="form-control inputSend"/>
										<button type="submit" className="btn btnSend"><i className="fas fa-arrow-right"></i></button>
									</div>
								</form>
							</div>							
						</div>
						<div className="row infoSite">
							<div className="col">
								<h4>Local Belgrano</h4>
								<span className="dir">Av. Cabildo 2871 – (C1428AAK) – CABA</span>
								<span className="hs">Lunes a Viernes de 10.00 a 18.00 hs. y sábados de 10 a 16 hs.</span>
							</div>
							<div className="col">
								<h4>Servicio al Cliente</h4>
								<ul>
									<li><Link to="">Cómo Comprar</Link></li>
									<li><Link to="">Formas de Envío</Link></li>
									<li><Link to="">Medios de Pago</Link></li>
									<li><Link to="">Garantías</Link></li>
								</ul>
							</div>
							<div className="col">
								<h4>Institucional</h4>
								<ul>
									<li><Link to="">Quienes Somos</Link></li>
									<li><Link to="">Sucursales</Link></li>
									<li><Link to="">Términos y Condiciones</Link></li>
									<li><Link to="">Contacto</Link></li>
									<li><Link to="">Botón de Arrepentimiento</Link></li>
								</ul>
							</div>
							<div className="col">
								<div className="social">
									<Link to=""><i class="fab fa-facebook-square"></i></Link>
									<Link to=""><i class="fab fa-twitter-square"></i></Link>
									<Link to=""><i class="fab fa-instagram-square"></i></Link>
								</div>
								<div className="data">
									<Link to="https://servicios1.afip.gov.ar/clavefiscal/qr/response.aspx?qr=pDhvRNORBda64suz15pQKA,," class="datafiscal">
										<img src="http://cordobahosting.com/blog/wp-content/uploads/2013/09/DATAWEB.jpg" className="img-fluid imgDF"/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
        );
    }
}

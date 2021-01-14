import React from 'react';
import {Link} from "react-router-dom";

import logo from 'assets/LOGO-ok.png';

export default class Header extends React.Component {

	handleChange = (evt) => {
		console.log("change");
		if(evt.currentTarget.checked){
			document.getElementById('left-sidebar').classList.add("open");
		}else{
			document.getElementById('left-sidebar').classList.remove("open");
			document.getElementById('left-sidebar').classList.add("animated");
		}
	}

    render(){
    	return(
			<div className="top-content">
				<nav className="navbar fixed-top top-header">
					<div className="row bannerTop d-none d-md-block">
						<div className="col-1 infoBlock">
							<Link to="https://api.whatsapp.com/send?phone=+541120400891"><span><i className="fab fa-whatsapp"></i>11-2040-0891</span></Link>
						</div>
						<div className="col-1 infoBlock">
							<Link to="tel:21523560"><span><i className="fas fa-phone-alt"></i>2152-3560</span></Link>
						</div>
						<div className="col-6 infoBlock">
							<span>Venta Empresas: 11 4157-3330 / 11 2726-3638</span>
						</div>
						<div className="col-4 infoBlock pagContact">
							<Link to=""><span>Centro de Ayuda</span></Link>
							<Link to=""><span>Contacto</span></Link>
						</div>
					</div>
					<div className="row d-block d-md-none">
						<div className="col-12">
							<input type="checkbox" id="overlay-input" className="checker" onChange={this.handleChange}/>
							<label htmlFor="overlay-input" id="overlay-button"><span></span></label>
						</div>
					</div>
					<div className="row d-none d-md-block">
						<div className="col-12">
							<div className="row headerBlock">
								<div className="col">
									<Link to="/"><img src={logo} alt="datasoft" className="fluid"/></Link>
								</div>
								<div className="col">
										<div className="dropdown">
										  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										    Categorías
										  </button>
										  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										    <Link to="/list" className="dropdown-item">Computación</Link>
										    <Link to="/list" className="dropdown-item">Conectividad</Link>
										    <Link to="/list" className="dropdown-item">Notebooks</Link>
										  </div>
										</div>
								</div>
								<div className="col-6">
									<div className="searchBox">
										<input type="text" className="searchText" id="search" placeholder="Buscar ..." ref="search"/>
										<button  type="button" className="btn btn-primary btnSearch"><i className="fas fa-search"></i></button>
									</div>
								</div>
								<div className="col">
									<button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Ingresar <i class="fas fa-user"></i>
									</button>
								</div>
								<div className="col">
									<button className="btn" type="button">
										<i class="fas fa-shopping-cart"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
        );
    }
}
	
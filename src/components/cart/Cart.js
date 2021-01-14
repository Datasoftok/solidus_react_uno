import React from 'react';
import {Link} from "react-router-dom";


export default class Cart extends React.Component {

    render(){
    	return(
			<div className="contentCart">

				<div className="row">
					<div className=" col-9">
						<div className="cartItem">
							<div className="row">
								<div className="col col-md-2">
									<img src="https://www.datasoft.com.ar/Image/0/1500_1500-020877_1.png" className="img-fluid imgthumb"/>
								</div>
								<div className="col col-md-5">
									<h6 className="title">TABLET 8" SAMSUNG GALAXY TAB A SM-T290 2GB 32GB DUAL CAM WIFI NEGRA</h6>
								</div>
								<div className="col col-md-2 infoQuantity">
									<button className="btn btnMinus"><i class="fas fa-minus-circle"></i></button>
									<div class="quantity">1</div>
									<button className="btn btnPlus"><i class="fas fa-plus-circle"></i></button>
								</div>
								<div className="col col-md-2">
									<span className="price">$ 18.529</span>
								</div>
								<div className="col col-md-1">
									<button className="btn btnDelete"><i class="fas fa-trash-alt"></i></button>
								</div>
							</div>
						</div>						
					</div>
					<div className=" col-3">
						<div className="cartTotals">
							<div className="row totals">
									<div className=" col-6 block blockSub">
										<span className="txtPrice">Subtotal</span> 
									</div>
									<div className=" col-6 block blockSub">
										<span className="price">18.529</span>
									</div>
									<div className="col-6 block blockShipping">
										<span className="txtShipping">Envio</span> 
									</div>
									<div className="col-6 block blockShipping">
										<span className="shipping">300</span>
										</div>
									<div className="col-6 block blockDes">
										<span className="txtDes">Descuento</span>
									</div>
									<div className="col-6 block blockDes">
										<button class="btn btn-des" type="button" data-toggle="collapse" data-target="#collapseVoucher" aria-expanded="false" aria-controls="collapseVoucher">
											<i class="fas fa-plus-circle"></i>
										</button>
									</div>
									<div class="col-12 collapse" id="collapseVoucher">
										<input type="text" class="form-control" placeholder="Ingrese su clave de Descuento"/>
									</div>
									 <div className="col-6 block blockTotal">
									 	<span className="txtTotal">Total</span>
									 </div>
									 <div className="col-6 block blockTotal">
									 	<span className="totalPrice">18.529</span>
									 </div>
							</div>
							<buttom className="btn btnBuy">Comprar</buttom>
						</div>		
					</div>
				</div>
			</div>
        );
    }
}

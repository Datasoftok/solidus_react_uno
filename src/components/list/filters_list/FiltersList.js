import React from 'react';
import {Link} from "react-router-dom";

export default class FiltersList extends React.Component {

    render(){
    	return(
			<div className="FiltersList">
				<div className="categoriesBox">
					<h4>Categorías</h4>
					<ul>
						<li><Link to="">Componentes</Link></li>
						<li><Link to="">Almacenamiento</Link></li>
						<li><Link to="">Software</Link></li>
						<li><Link to="">Impresoras e Insumos</Link></li>
						<li><Link to="">Monitores</Link></li>
						<li><Link to="">PCs de Escritorio</Link></li>
						<li><Link to="">Tablets y E-Readers</Link></li>
						<li><Link to="">Edicion y Diseño</Link></li>
						<li><Link to="">Accesorios y Perifericos</Link></li>
					</ul>
				</div>
				<div className="filterBox">
					<h4>Capacidad Memoria</h4>
					<ul>
						<li>
							<Link to="">512 MB</Link><span className="quantity">(12)</span>										
						</li>
						<li>										
							<Link to="">1 GB</Link><span className="quantity">(6)</span>
						</li>
						<li>										
							<Link to="">2 GB</Link><span className="quantity">(21)</span>
						</li>
						<li>										
							<Link to="">4 GB</Link><span className="quantity">(32)</span>
						</li>
						<li>										
							<Link to="">8 GB</Link><span className="quantity">(9)</span>
						</li>
						<li>										
							<Link to="">16 GB</Link><span className="quantity">(19)</span>
						</li>
					</ul>
				</div>				
			</div>					
        );
    }
}

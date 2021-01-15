import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserHistory } from "history";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import './App.scss';

import {
  Router as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from 'components/header/Header';
import Home from 'components/home/Home';
import Footer from 'components/footer/Footer';
import List from 'components/list/List';
import Vip from 'components/vip/Vip';
import Cart from 'components/cart/Cart';

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.history = createBrowserHistory();
  	}
  render(){
    return (
    	<Router history={this.history}>
    		<div className="App">
		      	<div className="container-fluid ">
			        <Header/>
			        <Switch>
				       	<Route path="/list">
				    		<List/>
				      	</Route>
				      	<Route path="/vip">
				    		<Vip/>
				      	</Route>				      	
				      	<Route path="/cart">
				    		<Cart/>
				      	</Route>
				      	<Route  exact path="/">
				    		<Home/>
				      	</Route>
			        </Switch>
			        <Footer/>
		        </div>
      		</div>
      	</Router>
    )
  }
}

export default App;

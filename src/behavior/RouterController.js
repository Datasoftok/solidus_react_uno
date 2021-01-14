import EventDispatcher from 'behavior/EventDispatcher';
import runtimeEnv from '@mars/heroku-js-runtime-env';

class RouterController {
    constructor(app){
        console.log("CONSTRUCT")
    	this._app = app;

        this.unlisten = this._app.history.listen((location, action) => {
            this.handleRouteChange(location, action);
        })
        this.processLocation(window.location)
        EventDispatcher.getInstance().addEventListener("RELOAD_LOCATION", ((payload) => {this.handleReloadLocation(payload)}));
    }

    handleRouteChange(location,action){
        console.log("POTATO", location, action);
    	this.processLocation(location);
    }

    handleReloadLocation(payload){
        this.processLocation(window.location);
    }
    processLocation(location){
        if(location.pathname === "/"){
            console.log("HOME MAN!")
            EventDispatcher.getInstance().dispatchEvent(
                'HOME_INDEX', 
                {}
            );
        }else if(location.pathname.indexOf('/sellers') === 0){
            console.log("SELLER MAN!")
            if ("/sellers/".length < location.pathname.length){
                const pathParts = location.pathname.split('/')
                EventDispatcher.getInstance().dispatchEvent(
                    'SELLERS_SHOW', 
                    {"sellerId": pathParts[pathParts.length - 1]}
                );
            }else{
                EventDispatcher.getInstance().dispatchEvent(
                    'SELLERS_INDEX', 
                    {}
                );
            }
        }else if(location.pathname.indexOf('/categories') === 0){
            console.log("CATEGORIES MAN!")
            EventDispatcher.getInstance().dispatchEvent(
                'CATEGORIES_INDEX', 
                {}
            );
        }else if(location.pathname.indexOf('/publications') === 0){
            console.log("PUBLICATIONS MAN!")
            if ("/publications/".length < location.pathname.length){
                const pathParts = location.pathname.split('/')
                EventDispatcher.getInstance().dispatchEvent(
                    'PUBLICATIONS_SHOW', 
                    {"id": pathParts[pathParts.length - 1],"sellerId": pathParts[pathParts.length - 2]}
                );
            }else{
                EventDispatcher.getInstance().dispatchEvent(
                    'PUBLICATIONS_INDEX', 
                    {}
                );
            }
        }else if(location.pathname.indexOf('/orders') === 0){
            console.log("ORDERS MAN!")
            if ("/orders/".length < location.pathname.length){
                const pathParts = location.pathname.split('/')
                EventDispatcher.getInstance().dispatchEvent(
                    'ORDERS_SHOW', 
                    {"reference_order": pathParts[pathParts.length - 1]}
                );
            }else{
                EventDispatcher.getInstance().dispatchEvent(
                    'ORDERS_INDEX', 
                    {}
                );
            }
        }
    }

}

export default RouterController;
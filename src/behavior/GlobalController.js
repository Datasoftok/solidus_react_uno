import EventDispatcher from 'behavior/EventDispatcher';
import moment from 'moment';
import runtimeEnv from '@mars/heroku-js-runtime-env';

class GlobalController {
    constructor(app){
        console.log("CONSTRUCT")
    	this._app = app;

        EventDispatcher.getInstance().addEventListener("DATE_FROM_CHANGED", ((payload) => {this.handleDateFromChanged(payload)}));
        EventDispatcher.getInstance().addEventListener("DATE_TO_CHANGED", ((payload) => {this.handleDateToChanged(payload)}));
    }

    handleDateFromChanged(payload){
        let global = this._app.state.global;
        global.dateFrom = payload.date
    	this._app.setState({global: global}, () => EventDispatcher.getInstance().dispatchEvent("RELOAD_LOCATION",{}))
    }
    handleDateToChanged(payload){
        let global = this._app.state.global;
        global.dateTo = payload.date
        this._app.setState({global: global}, () => EventDispatcher.getInstance().dispatchEvent("RELOAD_LOCATION",{}))
        
    }

}

export default GlobalController;
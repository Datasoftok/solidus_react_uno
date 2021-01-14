class EventDispatcher {
	static instance = null;

    constructor(){
    	this.callbacks = {};
    	console.log("EventDispatcher created")
    }

	static getInstance() {
        if (EventDispatcher.instance === null) {
            EventDispatcher.instance = new EventDispatcher();
        }
        console.log("EventDispatcher invoqued")
        return this.instance;
    }

    dispatchEvent(event_id, payload){
    	console.log("RECEIVED EVENT - "+event_id);
    	console.log(payload);
    	if(this.callbacks[event_id]){
    		this.callbacks[event_id].forEach((callback, index) => {
		    	callback(payload);
    		});
    	}
    }

    addEventListener(event_id, callback){
    	if(!this.callbacks[event_id]){
    		this.callbacks[event_id] = [];
    	}
    	this.callbacks[event_id].push(callback)
    }
}

export default EventDispatcher;
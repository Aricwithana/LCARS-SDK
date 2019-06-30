//Setup LCARS Base Element Prototype Object
LCARS.element.blank = function(oDef){
	//Begin Required
	this.data = {
		type:'blank',
		id: oDef.id || 'blankSID'+ Math.random().toString(36).substr(2, 9)
	}
	
	this.receiver = {};
	this.event = {};
	this.broadcast = {};
    this.delete = {};
	this.dom = this.create(oDef);

	LCARS.active[this.data.id] = this;
	
	for(var prop in oDef){
		this.data[prop] = oDef[prop];
	}

	for(var prop in oDef){
		if(typeof this.setting[prop] === 'function'){
			this.setting[prop](this, oDef[prop]);
		}else if(typeof LCARS.setting[prop] === 'function'){
			LCARS.setting[prop](this, oDef[prop]);
		}	
	}
	
	return LCARS.active[this.data.id];
	//End Required
};

LCARS.element.blank.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){
		if(oDef.href !== undefined){
			var element = $('<a id="'+this.data.id+'" class="blank"></a>');
		}else{
			var element = $('<div id="'+this.data.id+'" class="blank"></div>');
		}            
		return element;
	},	
	//Overide global settings
	setting:{
		dummy:function(object, value){
			if(value === null){  
				object.dom.removeClass(value);   
				object.data.test = null;
			}else if(typeof value === 'string'){
				object.dom.addClass(value);
				object.data.test = value;
			}          
			return true;
		}
		
	},
	//Required. Set Value by Setting Name | Ignores ID & Type
	set:function(setting, value){
		if(setting !== 'id' && setting !== 'type'){
			if(typeof this.setting[setting] === 'function'){
				return this.setting[setting](this, value);
			}else if(typeof LCARS.setting[setting] === 'function'){
				return LCARS.setting[setting](this, value);
			}else{
				this.data[setting] = value;
				return true 
			}		
		}
	},
    //Required.
    get:function(setting){
        return this.data[setting];    
    }
};		




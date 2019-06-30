//Setup LCARS Base Element Prototype Object
LCARS.element.elbow = function(oDef){
	//Begin Required
	this.data = {
		type:'elbow',
		id: oDef.id || 'elbowSID'+ Math.random().toString(36).substr(2, 9),
		size:'default',
        version:'horizontal',
        direction:'bottom-left'
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

	for(var prop in this.data){
		if(typeof this.setting[prop] === 'function'){
			this.setting[prop](this, this.data[prop]);
		}else if(typeof LCARS.setting[prop] === 'function'){
			LCARS.setting[prop](this, this.data[prop])
		}
		
	}
	
	return LCARS.active[this.data.id];
	//End Required
};

LCARS.element.elbow.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){
	
		if(oDef.href !== undefined){
			var element = $('<a id="'+this.data.id+'" class="elbow"></a>');
		}else{
			var element = $('<div id="'+this.data.id+'" class="elbow"></div>');
		}   
		
		var elbowBar = new LCARS.element.bar({})
		var innerRadius = new LCARS.element.block({})
		$(elbowBar.dom).append(innerRadius.dom)
		$(element).append(elbowBar.dom);
		
		return element;
	},	
			
	//Overide global settings
	setting:{},
	//Required. Set Value by Setting Name
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
    
    get:function(setting){
        return this.data[setting];    
    }
};		




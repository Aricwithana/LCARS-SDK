//Check and Add Widget Group Namespace
if(!LCARS.element.sdk){LCARS.element.sdk = {};}
//Setup LCARS Base Element Prototype Object
LCARS.element.sdk.solidLevelBar = function(oDef){
	//Begin Required
	this.data = {
		type:'solidLevelBar',
		id: oDef.id || 'solidLevelBarSID'+ Math.random().toString(36).substr(2, 9),
        namespace:'sdk',
        version:'vertical'
	}
	
	this.receiver = {};
	this.event = {};
	this.broadcast = {};
    this.delete = {};
    this.elements = {};
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

LCARS.element.sdk.solidLevelBar.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){    
        var element = $('<div id="'+this.data.id+'" class="sdk solid-level-bar"></div>');
        this.elements.wrapper = LCARS.create({type:'wrapper'}); 
		this.elements.bar = LCARS.create({type:'bar'}); 
		this.elements.cap = LCARS.create({type:'cap', color:'bg-white'} ); 
        
        this.elements.wrapper.dom.append(this.elements.bar.dom)
        this.elements.wrapper.dom.append(this.elements.cap.dom)
        
        element.append(this.elements.wrapper.dom)
        
		return element;
	},	
	//Overide global settings
	setting:{

		color:function(object, value){
			if(value === null){  
				object.data.color = null;
                object.elements.bar.set('color', null);  
            }else if(typeof value === 'string'){
				object.data.color = value;
                object.elements.bar.set('color', value);  
			}

			return true;
		},
        
        level:function(object, value){
            
            if(typeof value === 'number'){
                object.data.level = value;

                if(object.data.version === 'vertical'){
                    var iLevelHeight = object.dom.height();
                    var min = object.data.min || 45;
                    var transformMin = Math.ceil((min / iLevelHeight) * 100);
                    if(value < transformMin){
                        if(object.data.reverse === true){
                            object.elements.wrapper.dom.css('transform', 'translateY(-'+(100 - transformMin) + '%)'); 
                        }else{
                            object.elements.wrapper.dom.css('transform', 'translateY('+(100 - transformMin) + '%)'); 
                        }
                    }else{
                        if(object.data.reverse === true){
                            object.elements.wrapper.dom.css('transform', 'translateY(-'+(100 - object.data.level) + '%)'); 
                        }else{
                            object.elements.wrapper.dom.css('transform', 'translateY('+(100 - object.data.level) + '%)'); 
                        }
                    }
                }else{
                    var iLevelWidth = object.dom.width();
                    var min = object.data.min || 45;
                    var transformMin = Math.ceil((min / iLevelWidth) * 100);
                    if(value < transformMin){
                        if(object.data.reverse === true){
                            object.elements.wrapper.dom.css('transform', 'translateX('+(100 - transformMin) + '%)'); 
                        }else{
                            object.elements.wrapper.dom.css('transform', 'translateX(-'+(100 - transformMin) + '%)'); 
                        }
                    }else{
                        if(object.data.reverse === true){
                            object.elements.wrapper.dom.css('transform', 'translateX('+(100 - object.data.level) + '%)'); 
                        }else{
                            object.elements.wrapper.dom.css('transform', 'translateX(-'+(100 - object.data.level) + '%)'); 
                        }
                    }                    
  
                }
                
                if(object.data.label){
                    object.set('label', value);
                }else if(object.data.altLabel){
                    object.set('altLabel', value);
                }
            }
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
    
    get:function(setting){
        return this.data[setting];    
    }
};		
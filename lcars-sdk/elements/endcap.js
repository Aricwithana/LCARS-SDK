//Setup LCARS Base Element Prototype Object
LCARS.element.endcap = function(oDef){
	//Begin Required
	this.data = {
		type:'endcap',
		id: oDef.id || 'endcapSID'+ Math.random().toString(36).substr(2, 9)
	}
	
	this.receiver = {};
	this.event = {};
	this.broadcast = {};
    this.elements = {};
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

LCARS.element.endcap.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){
		if(oDef.href !== undefined){
			var element = $('<a id="'+this.data.id+'" class="endcap"></a>');
		}else{
			var element = $('<div id="'+this.data.id+'" class="endcap"></div>');
		}  
        
        this.elements.cap = LCARS.create({type:'cap'});
        element.append(this.elements.cap.dom);
        
		return element;
	},	
	//Overide global settings
	setting:{
		roundTop:function(object, sValue){
			var oValue = {}; 
            
            if(object.data.version === 'bottom-left' || object.data.version === 'top-left'){
                oValue['border-top-left-radius'] = sValue; 
            }
            if(object.data.version === 'bottom-right' || object.data.version === 'top-right'){
                oValue['border-top-right-radius'] = sValue; 
            }      
            
            if(sValue === null){  
				object.elements.cap.set('style', {'border-top-right-radius': '0px', 'border-top-left-radius': '0px'});   
				object.data.roundTop = null;
			}else if(typeof sValue === 'string'){
				object.elements.cap.set('style', oValue);
				object.data.roundTop = sValue;
			}          
			return true;
		},
		roundBottom:function(object, sValue){
			var oValue = {}; 
            
            if(object.data.version === 'bottom-left' || object.data.version === 'top-left'){
                oValue['border-bottom-left-radius'] = sValue; 
            }
            if(object.data.version === 'bottom-right' || object.data.version === 'top-right'){
                oValue['border-bottom-right-radius'] = sValue; 
            }      
            
            if(sValue === null){  
				object.elements.cap.set('style', {'border-bottom-left-radius': '0px', 'border-bottom-right-radius': '0px'});   
				object.data.roundBottom = null;
			}else if(typeof sValue === 'string'){
				object.elements.cap.set('style', oValue);
				object.data.roundBottom = sValue;
			} 			
            return true;
		}, 
		skew:function(object, sValue){
            var oValue = {}
            if(object.data.version === 'bottom-left' || object.data.version === 'top-right'){
                oValue['transform'] = 'skew(-'+sValue+')'; 
            }  
            if(object.data.version === 'bottom-right' || object.data.version === 'top-left'){
                oValue['transform'] = 'skew('+sValue+')'; 
            }  

            if(sValue === null){  
				object.elements.cap.set('style', {'transform': 'skew(0deg);'});   
				object.data.skew = null;
			}else if(typeof sValue === 'string'){
				object.elements.cap.set('style', oValue);
				object.data.skew = sValue;
			} 			
            return true;
        },  
		offset:function(object, sValue){  
			var oValue = {}; 
            
            if(object.data.version === 'bottom-left' || object.data.version === 'top-left'){
                oValue['left'] = sValue; 
            }
            if(object.data.version === 'bottom-right' || object.data.version === 'top-right'){
                oValue['right'] = ''+sValue; 
            }      

            if(sValue === null){  
				object.elements.cap.set('style', {'left':'0', 'right':'0'});   
				object.data.offset = null;
			}else if(typeof sValue === 'string'){
				object.elements.cap.set('style', oValue);
				object.data.offset = sValue;
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




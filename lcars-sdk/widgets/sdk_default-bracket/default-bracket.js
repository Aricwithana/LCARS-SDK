//Check and Add Widget Group Namespace
if(!LCARS.element.sdk){LCARS.element.sdk = {};}
//Setup LCARS Base Element Prototype Object
LCARS.element.sdk.defaultBracket = function(oDef){
	//Begin Required
	this.data = {
		type:'defaultBracket',
		id: oDef.id || 'defaultBracketSID'+ Math.random().toString(36).substr(2, 9),
        namespace:'sdk'
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

LCARS.element.sdk.defaultBracket.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){

        var element = $('<div id="'+this.data.id+'" class="sdk default-bracket"></div>');
        
        this.elements.content = LCARS.create({type:'wrapper', class:{'content':true}}); 
        element.append(this.elements.content.dom);

        if(oDef.template){
            for(var i = 0; i < oDef.template.length; i++){
                var oElement = LCARS.create(oDef.template[i]);
                element.append(oElement.dom);    
            } 
        }else{
            for(var i = 0; i < this.template.length; i++){
                var oElement = LCARS.create(this.template[i]);
                element.append(oElement.dom);    
            }
        }
        
		return element;
	},
    
    template:[
        {type:'elbow', direction:'top-left', version:'horizontal', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
        {type:'elbow', direction:'top-right', version:'horizontal', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
        {type:'elbow', direction:'bottom-left', version:'horizontal', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
        {type:'elbow', direction:'bottom-right', version:'horizontal', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},        
        {type:'column', flex:'v', children:[
            {type:'bar', flexc:'v', color:'bg-'},
            {type:'bar', flexc:'v', color:'bg-', children:[{type:'bar', class:{'animated':true}, color:'bg-white'}]},
            {type:'bar', flexc:'v', color:'bg-'}                     
        ]},
        {type:'column', flex:'v', children:[
            {type:'bar', flexc:'v', color:'bg-'},
            {type:'bar', flexc:'v', color:'bg-'},
            {type:'bar', flexc:'v', color:'bg-'}                     
        ]},
        {type:'column', flex:'v', children:[
            {type:'bar', flexc:'v', color:'bg-'},
            {type:'bar', flexc:'v', color:'bg-', children:[{type:'bar', class:{'animated':true}, color:'bg-white'}]},
            {type:'bar', flexc:'v', color:'bg-'}                     
        ]},
        {type:'column', flex:'v', children:[
            {type:'bar', flexc:'v', color:'bg-'},
            {type:'bar', flexc:'v', color:'bg-'},
            {type:'bar', flexc:'v', color:'bg-'}                     
        ]} 
    ],  
    
	//Custom & Overide global settings
	setting:{
        coloring:function(object, value){
            var elbows = object.dom.children('.elbow');
            var columns = object.dom.children('.column');
            var animated = object.dom.children('.animated');
            
            if(typeof value.elbow === 'string'){
                for(var i = 0; i < elbows.length; i++){
                    var sID = elbows[i].getAttribute('id');                    
                    LCARS.active[sID].set('color', value.elbow);    
                }                
            }
            if(typeof value.animated === 'string'){
                for(var i = 0; i < elbows.length; i++){
                    var sID = elbows[i].getAttribute('id');                    
                    LCARS.active[sID].set('color', value.elbow);    
                }                
            }
            if(Array.isArray(value.column1)){                
                var sID = columns[0].getAttribute('id');    
                LCARS.active[sID].set('colors', value.column1);                   
            }
            if(Array.isArray(value.column2)){                
                var sID = columns[1].getAttribute('id');                    
                LCARS.active[sID].set('colors', value.column2);                   
            }
            if(Array.isArray(value.column3)){                
                var sID = columns[2].getAttribute('id');                    
                LCARS.active[sID].set('colors', value.column3);                   
            }
            if(Array.isArray(value.column4)){                
                var sID = columns[3].getAttribute('id');                    
                LCARS.active[sID].set('colors', value.column4);                   
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
    
    get:function(setting){
        return this.data[setting];    
    }
};		




//Check and Add Widget Group Namespace
if(!LCARS.element.sdk){LCARS.element.sdk = {};}
//Setup LCARS Base Element Prototype Object
LCARS.element.sdk.defaultBarFrame = function(oDef){
	//Begin Required
	this.data = {
		type:'defaultBarFrame',
		id: oDef.id || 'defaultBarFrameSID'+ Math.random().toString(36).substr(2, 9),
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

LCARS.element.sdk.defaultBarFrame.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){
        var element = $('<div id="'+this.data.id+'" class="sdk default-bar-frame"></div>');
        
        if(oDef.reverse === true){
            this.elements.header = LCARS.create(this.template.reverse.header);
            this.elements.footer = LCARS.create(this.template.reverse.footer);   
        }else{
            this.elements.header = LCARS.create(this.template.default.header);
            this.elements.footer = LCARS.create(this.template.default.footer);       
        }
        
        this.elements.headerTitle = LCARS.active[this.elements.header.dom.find('.title').attr('id')];
        this.elements.headerControlsBefore = LCARS.active[this.elements.header.dom.find('.header-controls-before').attr('id')];
        this.elements.headerControlsAfter = LCARS.active[this.elements.header.dom.find('.header-controls-after').attr('id')];
        element.append(this.elements.header.dom);
        
        this.elements.content = LCARS.create({type:'wrapper', class:{'content':true}}); 
        element.append(this.elements.content.dom);
        
        this.elements.footerTitle = LCARS.active[this.elements.footer.dom.find('.title').attr('id')];
        this.elements.footerControlsBefore = LCARS.active[this.elements.footer.dom.find('.footer-controls-before').attr('id')];
        this.elements.footerControlsAfter = LCARS.active[this.elements.footer.dom.find('.footer-controls-after').attr('id')];
        element.append(this.elements.footer.dom);
                     
		return element;
	},	
    
    template:{
        default:{

            header:{
                type:'header', 
                version:'row',
                children:[
                    {type:'cap', version:'round-left', color:'bg-'},
                    {type:'row', flexc:'h', children:[
                        {type:'title', color:'text-white'},
                        {type:'row', class:{'header-controls-before':true}},
                        {type:'bar', color:'bg-', flexc:'h'},
                        {type:'row', class:{'header-controls-after':true}},

                    ]},
                    {type:'cap', version:'round-right', color:'bg-'}

                ]
            },

            footer:{
                type:'footer', 
                version:'row',
                children:[
                    {type:'cap', version:'round-left', color:'bg-'},
                    {type:'row', flexc:'h', children:[
                        {type:'row', class:{'footer-controls-before':true}},
                        {type:'bar', color:'bg-', flexc:'h'},
                        {type:'row', class:{'footer-controls-after':true}},
                        {type:'title', color:'text-white'},
                    ]},
                    {type:'cap', version:'round-right', color:'bg-'},

                ]
            }  
        },
        reverse:{

            header:{
                type:'header', 
                version:'row',
                children:[
                    {type:'cap', version:'round-left', color:'bg-'},
                    {type:'row', flexc:'h', children:[     
                        {type:'row', class:{'header-controls-before':true}},
                        {type:'bar', color:'bg-', flexc:'h'},
                        {type:'row', class:{'header-controls-after':true}},
                        {type:'title', color:'text-white'},
                    ]},
                    {type:'cap', version:'round-right', color:'bg-'}
                ]
            },

            footer:{
                type:'footer', 
                version:'row',
                children:[
                    {type:'cap', version:'round-left', color:'bg-'},
                    {type:'row', flexc:'h', children:[
                        {type:'title', color:'text-white'},
                        {type:'row', class:{'footer-controls-before':true}},
                        {type:'bar', color:'bg-', flexc:'h'},
                        {type:'row', class:{'footer-controls-after':true}},
                    ]},
                    {type:'cap', version:'round-right', color:'bg-'},

                ]
            }  
        },        
    },
    
	//Overide global settings
	setting:{
        reverse:function(object, value){

            if(value !== object.data.reverse){

                if(value === true){
                    var sHID = object.elements.header.data.id;
                    var sFID = object.elements.footer.data.id;
                    LCARS.delete(LCARS.active[sHID]);
                    LCARS.delete(LCARS.active[sFID]);
                    object.elements.header = LCARS.create(object.template.reverse.header);
                    object.elements.footer = LCARS.create(object.template.reverse.footer);   
                }else{
                    var sHID = object.elements.header.data.id;
                    var sFID = object.elements.footer.data.id;
                    LCARS.delete(LCARS.active[sHID]);
                    LCARS.delete(LCARS.active[sFID]);
                    object.elements.header = LCARS.create(object.template.default.header);
                    object.elements.footer = LCARS.create(object.template.default.footer);       
                }


                this.elements.headerTitle = LCARS.active[this.elements.header.dom.find('.title').attr('id')];
                this.elements.headerControlsBefore = LCARS.active[this.elements.header.dom.find('.header-controls-before').attr('id')];
                this.elements.headerControlsAfter = LCARS.active[this.elements.header.dom.find('.header-controls-after').attr('id')];
                object.dom.prepend(object.elements.header.dom);

                this.elements.footerTitle = LCARS.active[this.elements.footer.dom.find('.title').attr('id')];
                this.elements.footerControlsBefore = LCARS.active[this.elements.footer.dom.find('.footer-controls-before').attr('id')];
                this.elements.footerControlsAfter = LCARS.active[this.elements.footer.dom.find('.footer-controls-after').attr('id')];
                object.dom.append(object.elements.footer.dom); 

                for(var prop in object.data){
                    if(prop !== 'content' && prop !== 'id' && prop !== 'type'){                            
                        if(typeof object.setting[prop] === 'function'){
                            object.setting[prop](object, object.data[prop]);
                        }else if(typeof LCARS.setting[prop] === 'function'){
                            LCARS.setting[prop](object, object.data[prop]);
                        }
                    }
                }                    
            }

            if(value === null){  
				object.dom.removeClass('reverse');
				object.data.reverse = null;
			}else if(typeof value === 'string'){				
                object.dom.addClass('reverse');
                object.data.reverse = value;
                
			}
            
			return true;
        }, 
        coloring:function(object, value){
            var headerCapLeft = object.elements.header.dom.children('.cap:first-child');
            var headerCapRight = object.elements.header.dom.children('.cap:last-child');
            var headerBar = object.elements.header.dom.find('.bar');
            var headerTitle = object.elements.header.dom.find('.title');
            
            var footerCapLeft = object.elements.footer.dom.children('.cap:first-child');
            var footerCapRight = object.elements.footer.dom.children('.cap:last-child');
            var footerBar = object.elements.footer.dom.find('.bar');
            var footerTitle = object.elements.footer.dom.find('.title');

            if(value.headerCapLeft){                
                var sID = headerCapLeft[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.headerCapLeft);                   
            }
            if(value.headerCapRight){                
                var sID = headerCapRight[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.headerCapRight);                   
            }
            if(value.headerBar){                
                var sID = headerBar[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.headerBar);                   
            }
            if(value.headerTitle){                
                var sID = headerTitle[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.headerTitle);                   
            }

            if(value.footerCapLeft){                
                var sID = footerCapLeft[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.footerCapLeft);                   
            }
            if(value.footerCapRight){                
                var sID = footerCapRight[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.footerCapRight);                   
            }
            if(value.footerBar){                
                var sID = footerBar[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.footerBar);                   
            }
            if(value.footerTitle){                
                var sID = footerTitle[0].getAttribute('id');    
                LCARS.active[sID].set('color', value.footerTitle);                   
            }
            object.data.coloring = value;
            return true;
        },        
        content:function(object, value){			
            if(Array.isArray(value)){
				for (var i = 0; i < value.length; i++) { 
					var type = value[i].type;
					var child = new LCARS.element[type](value[i]);
					object.elements.content.dom.append(child.dom);            

				}
            }else if(typeof value === 'string'){
                object.elements.content.dom.append(value);
            }
			return true;
        },
        headerControlsBefore:function(object, value){			
            if(Array.isArray(value)){
				for (var i = 0; i < value.length; i++) { 
					var type = value[i].type;
					var child = new LCARS.element[type](value[i]);
					object.elements.headerControlsBefore.dom.append(child.dom);            

				}
            }else if(typeof value === 'string'){
                object.elements.headerControlsBefore.dom.append(value);
            }
			return true;
        },        
        headerControlsAfter:function(object, value){			
            if(Array.isArray(value)){
				for (var i = 0; i < value.length; i++) { 
					var type = value[i].type;
					var child = new LCARS.element[type](value[i]);
					object.elements.headerControlsAfter.dom.append(child.dom);            

				}
            }else if(typeof value === 'string'){
                object.elements.headerControlsAfter.dom.append(value);
            }
			return true;
        },        
        footerControlsBefore:function(object, value){			
            if(Array.isArray(value)){
				for (var i = 0; i < value.length; i++) { 
					var type = value[i].type;
					var child = new LCARS.element[type](value[i]);
					object.elements.footerControlsBefore.dom.append(child.dom);            

				}
            }else if(typeof value === 'string'){
                object.elements.footerControlsBefore.dom.append(value);
            }
			return true;
        },        
        footerControlsAfter:function(object, value){			
            if(Array.isArray(value)){
				for (var i = 0; i < value.length; i++) { 
					var type = value[i].type;
					var child = new LCARS.element[type](value[i]);
					object.elements.footerControlsAfter.dom.append(child.dom);            

				}
            }else if(typeof value === 'string'){
                object.elements.footerControlsAfter.dom.append(value);
            }
			return true;
        },          
		label:function(object, value){
			if(value === null){  
				
				object.elements.headerTitle.set('text', null);
                object.data.label = null;
			}else if(typeof value === 'string'){
				
				object.elements.headerTitle.set('text', value);
				object.data.label = value;
			}
			return true;
        },
		altLabel:function(object, value){
			if(value === null){  
				object.elements.footerTitle.set('text', null);
                object.data.altLabel = null;
			}else if(typeof value === 'string'){
				object.elements.footerTitle.set('text', value);
				object.data.altLabel = value;
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




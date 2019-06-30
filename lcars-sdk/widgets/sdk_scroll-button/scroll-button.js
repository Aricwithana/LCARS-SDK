//Check and Add Widget Group Namespace
if(!LCARS.element.sdk){LCARS.element.sdk = {};}
//Setup LCARS Base Element Prototype Object
LCARS.element.sdk.scrollButton = function(oDef){
	//Begin Required
	this.data = {
		type:'scrollButton',
		id: oDef.id || 'scrollButtonSID'+ Math.random().toString(36).substr(2, 9),
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

LCARS.element.sdk.scrollButton.prototype = {	
	//Required.  Create DOM element and base class
	create:function(oDef){
        var element = $('<div id="'+this.data.id+'" class="sdk scroll-button"></div>');
        if(!oDef.version){oDef.version = this.data.version;}
        if(oDef.version === 'vertical'){
            this.elements.up = LCARS.create({type:'button', class:{'scroll-up':true}, tap:this.scrollUp, label:'▲', attachedTo:this.data.id});    
            this.elements.down = LCARS.create({type:'button', class:{'scroll-down':true}, tap:this.scrollDown, altLabel:'▼', attachedTo:this.data.id});    
            element.append(this.elements.up.dom);
            element.append(this.elements.down.dom);
        }
        if(oDef.version === 'horizontal'){
            this.elements.left = LCARS.create({type:'button', class:{'scroll-left':true}, tap:this.scrollLeft, label:'◀', attachedTo:this.data.id});    
            this.elements.right = LCARS.create({type:'button', class:{'scroll-right':true}, tap:this.scrollRight, label:'▶', attachedTo:this.data.id});    
            element.append(this.elements.left.dom);
            element.append(this.elements.right.dom);
        }
        
        
		return element;
	},
    scrollUp:function(){
        var sAttachedTo = this.data.attachedTo;
        var object = LCARS.active[sAttachedTo]
        var scrollVal = $(''+object.data.target+'').scrollTop();
        var scrollAmount = 60;
        if(typeof object.data.amount  === 'number'){scrollAmount = object.data.amount;}
        if(typeof object.data.page  === 'number'){
            var iHeight = $(''+object.data.target+'').height();
            scrollAmount = iHeight * object.data.page;
        }       
        $(''+object.data.target+'').scrollTop(scrollVal - scrollAmount);  
    },
    scrollDown:function(){
        var sAttachedTo = this.data.attachedTo;
        var object = LCARS.active[sAttachedTo]
        var scrollVal = $(''+object.data.target+'').scrollTop();
        var scrollAmount = 60;
        if(typeof object.data.amount  === 'number'){scrollAmount = object.data.amount;}
        if(typeof object.data.page  === 'number'){
            var iHeight = $(''+object.data.target+'').height();
            scrollAmount = iHeight * object.data.page;
        }    
        $(''+object.data.target+'').scrollTop(scrollVal + scrollAmount);  
    },
    scrollLeft:function(){
        var sAttachedTo = this.data.attachedTo;
        var object = LCARS.active[sAttachedTo]
        var scrollVal = $(''+object.data.target+'').scrollLeft();
        var scrollAmount = 60;
        if(typeof object.data.amount  === 'number'){scrollAmount = object.data.amount;}
        if(typeof object.data.page  === 'number'){
            var iWidth = $(''+object.data.target+'').width();
            scrollAmount = iWidth * object.data.page;
        }    
        $(''+object.data.target+'').scrollLeft(scrollVal - scrollAmount);  
        
    },
    scrollRight:function(){
        var sAttachedTo = this.data.attachedTo;
        var object = LCARS.active[sAttachedTo]
        var scrollVal = $(''+object.data.target+'').scrollLeft();
        var scrollAmount = 60;
        if(typeof object.data.amount  === 'number'){scrollAmount = object.data.amount;}
        if(typeof object.data.page  === 'number'){
            var iWidth = $(''+object.data.target+'').width();
            scrollAmount = iWidth * object.data.page;
        }    
        $(''+object.data.target+'').scrollLeft(scrollVal + scrollAmount);  
        
    },
    
	//Overide global settings
	setting:{},
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




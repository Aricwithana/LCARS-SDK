var lcars = {
    colors:{
        pool:{
            blue:['bg-blue-1', 'bg-blue-2', 'bg-blue-3', 'bg-blue-4', 'bg-blue-5'],
            green:['bg-green-1', 'bg-green-2', 'bg-green-3', 'bg-green-4', 'bg-green-5'],
            purple:['bg-purple-1', 'bg-purple-2', 'bg-purple-3', 'bg-purple-4', 'bg-purple-5'],
            orange:['bg-orange-1', 'bg-orange-2', 'bg-orange-3', 'bg-orange-4', 'bg-orange-5'],
            red:['bg-red-1', 'bg-red-2', 'bg-red-3', 'bg-red-4', 'bg-red-5'],
            grey:['bg-grey-1', 'bg-grey-2', 'bg-grey-3', 'bg-grey-4', 'bg-grey-5'] 
        },
        primary:['bg-blue-1', 'bg-blue-2', 'bg-blue-4', 'bg-blue-5', 'bg-orange-1', 'bg-green-2', 'bg-green-4', 'bg-green-5'],
        secondary:['bg-blue-1', 'bg-blue-2', 'bg-blue-4', 'bg-blue-5', 'bg-orange-1', 'bg-orange-2', 'bg-orange-3', 'bg-orange-4'],
        tertiary:['bg-blue-1', 'bg-blue-2', 'bg-blue-4', 'bg-blue-5', 'bg-orange-1', 'bg-purple-2', 'bg-purple-3', 'bg-purple-4'],
        custom:['bg-orange-5', 'bg-blue-3', 'bg-blue-4', 'bg-blue-5', 'bg-green-3', 'bg-green-1', 'bg-purple-1', 'bg-purple-5']   
    }
};

var LCARS = {
	active:{},
	element:{},
	setting:{
		//Global Setting Events
        altLabel:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('data-altLabel');
				object.data.altLabel = null;
			}else if(typeof sValue === 'string' || typeof sValue === 'number'){
				object.dom.attr('data-altLabel', sValue);
				object.data.altLabel = sValue;
			}
			return true;
        },
		attr:function(object, oValue){
			for(var prop in oValue){
				var sValue = oValue[prop]
                if(sValue === null){
                    object.dom.removeAttr(prop);
                    delete object.data.attr[prop];
                }else{
					object.dom.attr(prop, sValue);
                    object.data.attr[prop] = sValue;
				}					
			}
			return true;
        },
        class:function(object, oValue){

            for(var prop in oValue){
                var bValue = oValue[prop]
                if(bValue === false){
                    object.dom.removeClass(prop);
                    delete object.data.class[prop];                        
                }else if(bValue === true){
                    if(!object.data.class){object.data.class = {};}
                    object.dom.addClass(prop);
                    object.data.class[prop] = true;
                }
            }
                
			return true;
        },
        children:function(object, value){			
            if(Array.isArray(value)){
				for (var i = 0; i < value.length; i++) { 
                    var child = LCARS.create(value[i]);
					object.dom.append(child.dom);            
				}
            }else if(typeof value === 'string'){
                object.dom.append(value);
            }
			return true;
        },
        color:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass(object.data.color);
				object.data.color = null;
			}else if(typeof sValue === 'string'){
                if(object.data.type === 'text' || object.data.type === 'title'){sValue = sValue.replace('bg-', 'text-');}
				object.dom.removeClass(object.data.color);
                object.dom.addClass(sValue);
				object.data.color = sValue;
			}
			return true;
        },
        colors:function(object, aValue){
			var children = object.dom.children();
			for (var i = 0; i < children.length; i++){ 
				var sID = $(children[i]).attr('id');
				var oChild = LCARS.active[sID];
				var value = aValue[i];
				if(value === null){  
					oChild.set('color', null);
				}else if(typeof value === 'string'){
					oChild.set('color', value);
				}
			}
            object.data.colors = aValue;
			return true;
        },
        direction:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass(object.data.direction);
				object.data.direction = null;
			}else if(typeof sValue === 'string'){
				object.dom.addClass(sValue);
				object.data.direction = sValue;
			}
			return true;
        },
        disabled:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('disabled');
				object.data.disabled = false;
			}else if(bValue === true){
				object.dom.addClass('disabled');
				object.data.disabled = true;
			}
			return true;
        },
        fade:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('fade');
				object.data.fade = false;
			}else if(bValue === true){
				object.dom.addClass('fade');
				object.data.fade = true;
			}
			return true;
        },
        flex:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass('flex-'+object.data.flex);
				object.data.flex = null;
			}else if(typeof sValue === 'string'){
				object.dom.addClass('flex-'+sValue);
				object.data.flex = sValue;
			}
			return true;
        },
        flexc:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass('flex-c-'+object.data.flexC);
				object.data.flexC = null;
			}else if(typeof sValue === 'string'){
				object.dom.addClass('flex-c-'+sValue);
				object.data.flexC = sValue;
			}
			return true;
        },
        hidden:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('hidden');
				object.data.hidden = false;
			}else if(bValue === true){
				object.dom.addClass('hidden');
				object.data.hidden = true;
			}
			return true;
        },
		href:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('href');
				object.data.href = null;
			}else if(typeof sValue === 'string'){
				object.dom.attr('href', sValue);
				object.data.href = sValue;
			}
			return true;
        },	
        html:function(object, sValue){
			if(sValue === null){  
				object.dom.empty();
				object.data.html = null;
			}else if(typeof object.data.html === 'string'){
                object.dom.empty();
				object.dom.html(sValue);
				object.data.html = sValue;
			}
			return true;
        },
		inputValue:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('value');
				object.data.inputValue = null;
			}else if(typeof sValue === 'string'){
				object.dom.attr('value', sValue);
				object.data.inputValue = sValue;
			}
			return true;
        },		
		label:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('data-label');
				object.data.label = null;
			}else if(typeof sValue === 'string' || typeof sValue === 'number'){
				object.dom.attr('data-label', sValue);
				object.data.label = sValue;
			}
			return true;
        },
		name:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('name');
				object.data.name = null;
			}else if(typeof sValue === 'string'){
				object.dom.attr('name', sValue);
				object.data.name = sValue;
			}
			return true;
        },		
		group:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('data-group');
				object.data.group = null;
			}else if(typeof sValue === 'string'){
				object.dom.attr('data-group', sValue);
				object.data.group = sValue;
			}
			return true;
        },		
        noEvent:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('no-event');
				object.data.noEvent = false;
			}else if(bValue === true){
				object.dom.addClass('no-event');
				object.data.noEvent = true;
			}
			return true;
        },
		noTransition:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('no-transition');
				object.data.noTransition = false;
			}else if(bValue === true){
				object.dom.addClass('no-transition');
				object.data.noTransition = true;
			}
			return true;
        },
        password:function(object, bValue){
			if(bValue === false){  
				object.dom.attr('type', 'text');
				object.data.password = false;
			}else if(bValue === true){
				object.dom.attr('type', 'password');
				object.data.password = true;
			}
			return true;
        },		
        readOnly:function(object, bValue){
			if(bValue === false){  
				object.dom.attr('readonly', false);
				object.data.readOnly = false;
			}else if(bValue === true){
				object.dom.attr('readonly', true);
				object.data.readOnly = true;
			}
			return true;
        },
        reverse:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('reverse');
				object.data.reverse = false;
			}else if(bValue === true){
				object.dom.addClass('reverse');
				object.data.reverse = true;
			}
			return true;
        },
        size:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass(object.data.size);
				object.data.size = null;
			}else if(typeof sValue === 'string'){
				object.dom.addClass(sValue);
				object.data.size = sValue;
			}
			return true;
        },
		src:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('src');
				object.data.src = null;
			}else if(typeof sValue === 'string'){
				object.dom.attr('src', sValue);
				object.data.src = sValue;
			}
			return true;
        },		
        state:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass(object.data.state);
				object.data.state = null;
			}else if(typeof sValue === 'string'){
				object.dom.addClass(sValue);
				object.data.state = sValue;
			}
			return true;
        },
        style:function(object, oValue){
            for(var prop in oValue){
                var sbValue = oValue[prop]
                if(sbValue === false){
                    object.dom.css(prop, '');
                    delete object.data.style[prop];                        
                }else if(typeof sbValue === 'string'){
                    if(!object.data.style){object.data.style = {};}
                    object.dom.css(prop, sbValue);
                    object.data.style[prop] = sbValue;
                }
            }
			return true;
        },
        text:function(object, sValue){
			if(sValue === null){  
				if(object.dom.is('input')){
					object.dom.val('');
				}else{
					object.dom.empty();
				}                                       
				object.data.text = null;
			}else if(typeof sValue === 'string'){
				if(object.dom.is('input')){
					object.dom.val(sValue);
				}else{
					object.dom.text(sValue);
				}  
				object.data.text = sValue;
			}
			return true;
        },
        toggle:function(object, bValue){
			if(bValue === false){  
				object.dom.removeClass('toggle');
				object.data.toggle = false;
			}else if(bValue === true){
				object.dom.addClass('toggle');
				object.data.toggle = true;
			}
			return true;
        },
        toggleGroup:function(object, sValue){
			if(sValue === null){  
				object.dom.removeAttr('data-toggleGroup');
                delete LCARS.helper.toggleGroups[value][object. data.id];
				object.data.toggleGroup = null;
			}else if(typeof sValue === 'string'){
				object.dom.attr('data-toggleGroup', sValue);
                if(!LCARS.helper.toggleGroups[sValue]){
                    LCARS.helper.toggleGroups[sValue] = {};
                }
                LCARS.helper.toggleGroups[sValue][object.data.id] = object.data.id;
				object.data.toggleGroup = sValue;
			}
			return true;         
            
        },
        version:function(object, sValue){
			if(sValue === null){  
				object.dom.removeClass(object.data.version);
				object.data.version = null;
			}else if(typeof sValue === 'string'){
				object.dom.addClass(sValue);
				object.data.version = sValue;
			}
			return true;
        },

		//Events
		arrive:function(object, fValue){
			if(fValue === null){  
				$(document).unbindArrive('#'+object.data.id);
				object.data.arrive = null;
			}else if(typeof fValue === 'function'){
				$(document).arrive('#'+object.data.id, fValue.bind(object));
				object.data.arrive = fValue;
			}
			return true;
        },			
		leave:function(object, fValue){
			if(fValue === null){  
				$(document).unbindLeave('#'+object.data.id);
				object.data.leave = null;
			}else if(typeof fValue === 'function'){
				$(document).leave('#'+object.data.id, fValue.bind(object));
				object.data.leave = fValue;
			}
			return true;
        },				
        event:function(object, oValue){
			for(var prop in oValue){
				object.event[prop] = oValue[prop].bind(object);	
			}
			return true;
        },
        receiver:function(object, oValue){						
			for(var prop in oValue){
				object.receiver[prop] = oValue[prop].bind(object);	
			}			
			return true;
        },
        delete:function(object, oValue){						
			for(var prop in oValue){
				object.delete[prop] = oValue[prop].bind(object);	
			}			
			return true;
        },
        
        //Only use Desktop Mouse Events if no Touch Interaction is possible.
		//Mouse Settings
        click:function(object, value){
            if(value !== null){
                if(object.data.click){object.dom.off('click');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('click', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.click = object[value];
					object.dom.on('click', object[value].bind(object));
				}else{
                    object.data.click = value;
					object.dom.on('click', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.click){object.dom.off('click');}
                object.data.click = null;             
            }  
            return true;
        },	
        mouseenter:function(object, value){
            if(value !== null){
                if(object.data.click){object.dom.off('mouseenter');}
                             
                if(typeof value === 'string'){
					object.data.mouseenter = object[value];
					object.dom.on('mouseenter', object[value].bind(object));
				}else{
                    object.data.mouseenter = value;
					object.dom.on('mouseenter', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mouseenter){object.dom.off('mouseenter');}
                object.data.mouseenter = null;             
            }  
            return true;
        },
        mouseleave:function(object, value){
            if(value !== null){
                if(object.data.mouseleave){object.dom.off('mouseleave');}
                             
                if(typeof value === 'string'){
					object.data.mouseleave = object[value];
					object.dom.on('mouseleave', object[value].bind(object));
				}else{
                    object.data.mouseleave = value;
					object.dom.on('mouseleave', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mouseleave){object.dom.off('mouseleave');}
                object.data.mouseleave = null;             
            }  
            return true;
        },
        mousedown:function(object, value){
            if(value !== null){
                if(object.data.mousedown){object.dom.off('mousedown');}
                             
                if(typeof value === 'string'){
					object.data.mousedown = object[value];
					object.dom.on('mousedown', object[value].bind(object));
				}else{
                    object.data.mousedown = value;
					object.dom.on('mousedown', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mousedown){object.dom.off('mousedown');}
                object.data.mousedown = null;             
            }  
            return true;
        },
        mouseup:function(object, value){
            if(value !== null){
                if(object.data.mouseup){object.dom.off('mouseup');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('mouseup', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.mouseup = object[value];
					object.dom.on('mouseup', object[value].bind(object));
				}else{
                    object.data.mouseup = value;
					object.dom.on('mouseup', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mouseup){object.dom.off('mouseup');}
                object.data.mouseup = null;             
            }  
            return true;
        },
        mousemove:function(object, value){
            if(value !== null){
                if(object.data.mousemove){object.dom.off('mousemove');}
                             
                if(typeof value === 'string'){
					object.data.mousemove = object[value];
					object.dom.on('mousemove', object[value].bind(object));
				}else{
                    object.data.mousemove = value;
					object.dom.on('mousemove', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mousemove){object.dom.off('mousemove');}
                object.data.mousemove = null;             
            }  
            return true;
        },	
        mouseout:function(object, value){
            if(value !== null){
                if(object.data.mouseout){object.dom.off('mouseout');}
                             
                if(typeof value === 'string'){
					object.data.mouseout = object[value];
					object.dom.on('mouseout', object[value].bind(object));
				}else{
                    object.data.mouseout = value;
					object.dom.on('mouseout', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mouseout){object.dom.off('mouseout');}
                object.data.mouseout = null;             
            }  
            return true;
        },	
        mouseover:function(object, value){
            if(value !== null){
                if(object.data.mouseover){object.dom.off('mouseover');}
                             
                if(typeof value === 'string'){
					object.data.mouseover = object[value];
					object.dom.on('mouseover', object[value].bind(object));
				}else{
                    object.data.mouseover = value;
					object.dom.on('mouseover', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.mouseover){object.dom.off('mouseover');}
                object.data.mouseover = null;             
            }  
            return true;
        },
        hover:function(object, value){
            if(value !== null){
                if(object.data.hover){object.dom.off('hover');}
                             
                if(typeof value === 'string'){
					object.data.hover = object[value];
					object.dom.on('hover', object[value].bind(object));
				}else{
                    object.data.hover = value;
					object.dom.on('hover', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.hover){object.dom.off('hover');}
                object.data.hover = null;             
            }  
            return true;
        },   
        
		//Touch Settings        
        tapstart:function(object, value){
            if(value !== null){
                if(object.data.tapstart){object.dom.off('tapstart');}

                if(typeof value === 'string'){
                    object.data.tapstart = object[value];
                    object.dom.on('tapstart', object[value].bind(object));
                }else{
                    object.data.tapstart = value;
                    object.dom.on('tapstart', value.bind(object));
                }

            }else if(value === null){
                if(object.data.tapstart){object.dom.off('tapstart');}
                object.data.tapstart = null;             
            }  
            return true;
        },
        tapend:function(object, value){
            if(value !== null){
                if(object.data.tapend){object.dom.off('tapend');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('tapend', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.tapend = object[value];
					object.dom.on('tapend', object[value].bind(object));
				}else{
                    object.data.tapend = value;
					object.dom.on('tapend', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.tapend){object.dom.off('tapend');}
                object.data.tapend = null;             
            }  
            return true;
        },
        tap:function(object, value){
            if(value !== null){
                if(object.data.tap){object.dom.off('tap');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('tap', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.tap = object[value];
					object.dom.on('tap', object[value].bind(object));
				}else{
                    object.data.tap = value;
					object.dom.on('tap', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.tap){object.dom.off('tap');}
                object.data.tap = null;             
            }  
            return true;
        },        
        singletap:function(object, value){
            if(value !== null){
                if(object.data.singletap){object.dom.off('singletap');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('singletap', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.singletap = object[value];
					object.dom.on('singletap', object[value].bind(object));
				}else{
                    object.data.singletap = value;
					object.dom.on('singletap', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.singletap){object.dom.off('singletap');}
                object.data.singletap = null;             
            }  
            return true;
        },
        doubletap:function(object, value){
            if(value !== null){
                if(object.data.doubletap){object.dom.off('doubletapevent');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('doubletap', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.doubletap = object[value];
					object.dom.on('doubletap', object[value].bind(object));
				}else{
                    object.data.doubletap = value;
					object.dom.on('doubletap', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.doubletap){object.dom.off('doubletap');}
                object.data.doubletap = null;             
            }  
            return true;
        },        
        taphold:function(object, value){
            if(value !== null){
                if(object.data.taphold){object.dom.off('taphold');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('taphold', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.taphold = object[value];
					object.dom.on('taphold', object[value].bind(object));
				}else{
                    object.data.taphold = value;
					object.dom.on('taphold', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.taphold){object.dom.off('taphold');}
                object.data.taphold = null;             
            }  
            return true;
        },        
        swipe:function(object, value){
            if(value !== null){
                if(object.data.swipe){object.dom.off('swipe');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('swipe', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.swipe = object[value];
					object.dom.on('swipe', object[value].bind(object));
				}else{
                    object.data.swipe = value;
					object.dom.on('swipe', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.swipe){object.dom.off('swipe');}
                object.data.swipe = null;             
            }  
            return true;
        },        
        swipeup:function(object, value){
            if(value !== null){
                if(object.data.swipeup){object.dom.off('swipeup');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('swipeup', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.swipeup = object[value];
					object.dom.on('swipeup', object[value].bind(object));
				}else{
                    object.data.swipeup = value;
					object.dom.on('swipeup', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.swipeup){object.dom.off('swipeup');}
                object.data.swipeup = null;             
            }  
            return true;
        },        
        swiperight:function(object, value){
            if(value !== null){
                if(object.data.swiperight){object.dom.off('swiperight');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('swiperight', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.swiperight = object[value];
					object.dom.on('swiperight', object[value].bind(object));
				}else{
                    object.data.swiperight = value;
					object.dom.on('swiperight', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.swiperight){object.dom.off('swiperight');}
                object.data.swiperight = null;             
            }  
            return true;
        },        
        swipedown:function(object, value){
            if(value !== null){
                if(object.data.swipedown){object.dom.off('swipedown');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('swipedown', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.swipedown = object[value];
					object.dom.on('swipedown', object[value].bind(object));
				}else{
                    object.data.swipedown = value;
					object.dom.on('swipedown', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.swipedown){object.dom.off('swipedown');}
                object.data.swipedown = null;             
            }  
            return true;
        },        
        swipeleft:function(object, value){
            if(value !== null){
                if(object.data.swipeleft){object.dom.off('swipeleft');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('swipeleft', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.swipeleft = object[value];
					object.dom.on('swipeleft', object[value].bind(object));
				}else{
                    object.data.swipeleft = value;
					object.dom.on('swipeleft', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.swipeleft){object.dom.off('swipeleft');}
                object.data.swipeleft = null;             
            }  
            return true;
        },        
        swipeend:function(object, value){
            if(value !== null){
                if(object.data.swipeend){object.dom.off('swipeend');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('swipeleft', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.swipeend = object[value];
					object.dom.on('swipeend', object[value].bind(object));
				}else{
                    object.data.swipeend = value;
					object.dom.on('swipeend', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.swipeend){object.dom.off('swipeend');}
                object.data.swipeend = null;             
            }  
            return true;
        },        
        scrollstart:function(object, value){
            if(value !== null){
                if(object.data.scrollstart){object.dom.off('scrollstart');}
                             
                if(typeof value === 'string'){
					object.data.scrollstart = object[value];
					object.dom.on('scrollstart', object[value].bind(object));
				}else{
                    object.data.scrollstart = value;
					object.dom.on('scrollstart', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.scrollstart){object.dom.off('scrollstart');}
                object.data.scrollstart = null;             
            }  
            return true;
        },        
        scrollend:function(object, value){
            if(value !== null){
                if(object.data.scrollend){object.dom.off('scrollend');}
                             
                if(typeof value === 'string'){
					object.data.scrollend = object[value];
					object.dom.on('scrollend', object[value].bind(object));
				}else{
                    object.data.scrollend = value;
					object.dom.on('scrollend', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.scrollend){object.dom.off('scrollend');}
                object.data.scrollend = null;             
            }  
            return true;
        },        
        orientationchange:function(object, value){
            if(value !== null){
                if(object.data.orientationchange){object.dom.off('orientationchange');}
                             
                if(typeof value === 'string'){
					object.data.orientationchange = object[value];
					object.dom.on('orientationchange', object[value].bind(object));
				}else{
                    object.data.orientationchange = value;
					object.dom.on('orientationchange', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.orientationchange){object.dom.off('orientationchange');}
                object.data.orientationchange = null;             
            }  
            return true;
        },        
        tap2:function(object, value){
            if(value !== null){
                if(object.data.tap2){object.dom.off('tap2');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('tap2', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.tap2 = object[value];
					object.dom.on('tap2', object[value].bind(object));
				}else{
                    object.data.tap2 = value;
					object.dom.on('tap2', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.tap2){object.dom.off('tap2');}
                object.data.tap2 = null;             
            }  
            return true;
        },        
        taphold2:function(object, value){
            if(value !== null){
                if(object.data.taphold2){object.dom.off('taphold2');}
                             
                if(object.data.toggle === true || object.data.toggle === false){
                    object.dom.on('taphold2', function(){
                        LCARS.helper.toggleCheck(this, value);
					});
                }else if(typeof value === 'string'){
					object.data.taphold2 = object[value];
					object.dom.on('taphold2', object[value].bind(object));
				}else{
                    object.data.taphold2 = value;
					object.dom.on('taphold2', value.bind(object));
                }
                
            }else if(value === null){
                if(object.data.taphold2){object.dom.off('taphold2');}
                object.data.taphold2 = null;             
            }  
            return true;
        }, 
        
        /*
        dummyClass:function(object, sValue){
            if(sValue === null){  
                object.dom.removeClass(object.data.dummy);
                object.data.dummy = null;
            }else if(typeof sValue === 'string'){
                object.dom.addClass(sValue);
                object.data.dummy = sValue;
            }
            return true;
        },

        dummyBool:function(object, bValue){
            if(bValue === false){  
                object.dom.removeClass('dummy');
                object.data.dummy = false;
            }else if(bValue === true){
                object.dom.addClass('dummy');
                object.data.dummy = true;
            }
            return true;
        },

        dummyAttr:function(object, sValue){
            if(sValue === null){  
                object.dom.removeAttr('data-dummy');
                object.data.dummy = null;
            }else if(typeof sValue === 'string'){
                object.dom.attr('data-dummy', sValue);
                object.data.dummy = sValue;
            }
            return true;
        },
        */	
},
    
	helper:{
        toggleGroups:{},
        aRandColor: function(array){
            var color = array[Math.floor(array.length * Math.random())];
            return color;  
        },
        aRandColorGroup:function(array, iLength){
            var aReturn = [];
            for (i = 0; i < iLength; i++) { 
                aReturn.push(array[Math.floor(array.length * Math.random())]);
            }	
            return aReturn;
        },
        viewportScale: function(object, oArgs){
            var windowH = $(window).height();
            var windowW = $(window).width();
            var ratio = oArgs.width / oArgs.height;
            var container = object;
            var diffH = 1-((oArgs.width - windowW)/oArgs.width);
            var diffW = 1-((oArgs.height - windowH)/oArgs.height);
            
            if(oArgs.max !== true  || oArgs.max === true && diffW < 1 && diffH < 1 || oArgs.max === true && diffW < 1 || diffH < 1){
                if(oArgs.width > oArgs.height){
                    if(windowH < (windowW*ratio)){
                        object.css('-webkit-transform', 'scale('+diffW+')');
                        object.css('-ms-transform', 'scale('+diffW+')');
                        object.css('transform', 'scale('+diffW+')');
                    }

                    if(windowW < (windowH*ratio)){
                        object.css('-webkit-transform', 'scale('+diffH+')');
                        object.css('-ms-transform', 'scale('+diffH+')');
                        object.css('transform', 'scale('+diffH+')');
                    }
                }
                if(oArgs.width < oArgs.height){
                    if(windowH > (windowW*ratio)){
                        object.css('-webkit-transform', 'scale('+diffH+')');
                        object.css('-ms-transform', 'scale('+diffH+')');
                        object.css('transform', 'scale('+diffH+')');
                    }

                    if(windowW > (windowH*ratio)){
                        object.css('-webkit-transform', 'scale('+diffW+')');
                        object.css('-ms-transform', 'scale('+diffW+')');
                        object.css('transform', 'scale('+diffW+')');
                    }
                }
            }else{
                object.css('-webkit-transform', '');
                object.css('-ms-transform',  '');
                object.css('transform',  '');              
            }

            var bodyH = ((windowH - object[0].getBoundingClientRect().height)/2)
            var bodyW = ((windowW - object[0].getBoundingClientRect().width)/2)

            if(bodyH < 0){bodyH=0;}
            if(bodyW < 0){bodyW=0;}
            object.css('top', bodyH);
            object.css('left', bodyW);
        },
        viewportZoom:function(object, oArgs){
            var viewportWidth = $(window).width();
            var viewportHeight = $(window).height();
            var aspectUI = oArgs.width/oArgs.height;
            var aspectViewport = viewportWidth / viewportHeight;
            if(aspectUI < aspectViewport){
                var zoomLevel = Math.round((viewportHeight/oArgs.height)*1000000)/1000000 ; //Round to 6 decimal 
            }else{
                var zoomLevel = Math.round((viewportWidth/oArgs.width)*1000000)/1000000 ; //Round to 6 decimal

            }
            object.css('zoom', zoomLevel);
        
            var bodyW = ((viewportWidth - (object[0].getBoundingClientRect().width * zoomLevel) )/2);       
            var bodyH = ((viewportHeight - (object[0].getBoundingClientRect().height * zoomLevel) )/2);
            
            var bodyWZ = bodyW * (bodyW / (bodyW * zoomLevel))
            var bodyHZ = bodyH * (bodyH / (bodyH * zoomLevel))           

            
            if(bodyWZ < 0){bodyW=0;}
            if(bodyHZ < 0){bodyH=0;}
            object.css('left', bodyWZ);            
            object.css('top', bodyHZ);
        },
        toggleCheck:function(dom, fValue){
            var object = LCARS.active[dom.id]
            var group = object.data.toggleGroup;               
            if(typeof group === 'string'){
                if(object.data.toggle === false){
                    for(var prop in LCARS.helper.toggleGroups[group]){
                        if(prop !== object.data.id){
                            LCARS.active[prop].set('toggle', false)     
                        }
                    } 
                    object.set('toggle', true);        
                }
            }else{
                if(object.data.toggle){
                    object.set('toggle', false);			
                }else{
                    object.set('toggle', true);	
                } 
            }
            fValue.apply(object, []);  
        }        
	},
		
	create:function(oDef){
		if(Array.isArray(oDef)){
			var objects = [];
			for (var i = 0; i < oDef.length; i++){
				var def = oDef[i];
                if(typeof def.namespace === 'string'){
                    objects.push(new LCARS.element[def.namespace][def.type](def));
                }else{
                    objects.push(new LCARS.element[def.type](def));
                }
			}
			
			return objects;
            
		}else{
            if(typeof oDef.namespace === 'string'){
                return new LCARS.element[oDef.namespace][oDef.type](oDef);    
            }else{
                return new LCARS.element[oDef.type](oDef);
            }
		}    		
	},
    
    delete:function(object){
        var deleted = null;
        if(typeof object === 'string'){
            var object = LCARS.active[object];
        }         
        
        for(var prop in object.data.delete){
            deleted = object.data.delete[prop](); 
        }
        
        object.dom.find('[id]').each(function() { 
            var sID = $(this).attr('id');
            delete LCARS.active[sID];
            $(this).remove();
        });
        
        object.dom.remove();
        delete LCARS.active[object.data.id]; 
        return true;
    }
};

//Apply Setting via DOM Element
$.fn.objectSet = function(setting, value){		
    var sID = this.attr('id');
    LCARS.active[sID].set(setting, value);
    return this;   
}

//Disables Rubber Banding in iOS.
$(document).ready(function(){
	if(document.ontouchmove){
        document.ontouchmove = function(event){
            event.preventDefault();
        }    
    }
});

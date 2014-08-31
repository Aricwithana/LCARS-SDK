/** LCARS SDK 14243.101
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

// @timing_sequence -  How quickly things append or are removed.  Also used in other functions as part of standardized timing.
// @allObjects - Holds all definitions of objects that have an ID. Access via:  var allObjects.objectID;
// @sdkAddonTemplates - Container for Addon Templates;
// @objectCount - Number of objects stored in allObjects;
// @eventNames - List of available events within the SDK, segmented via mouse/touch.
var timing_sequence = 65;
var allObjects = {};
var sdkAddonTemplates = {}
var objectCount = 0;
if(webviewInfo.input === 'desktop'){
    var eventNames = ['click', 'mouseenter', 'mouseleave', 'hover', 'mousedown', 'mouseup'] 
}else{
    var eventNames = ['tap','singleTap', 'doubleTap', 'longTap', 'swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown'] 
}

/** +brief LCARS.X
 *	&info - This maintains the base SDK logic.  It is purely meant to handle
 *          {} object definitions and not DOM elements hence the lack of the
 *          $.fn syntax for the calls.  
 *          
 *          This also allows for easy extensibility of the LCARS base API
 *          without the need to modify this file directly so upgrading
 *          does not conflict with custom needs of custom projects.
 */  
var LCARS = {
    /** +brief Viewport Scaler
     *	&info - Scale viewport container in porportion and aspect ratio.
     *	@panelW - Width of container
     *	@panelH - Height of container
     *	@max -  true, Disables viewport container from expanding beyond its defined width/height.
     *	@wrapper - Wrapper DOM Object         
     */   
    scaler: function(panelW, panelH, wrapper, max){
        var windowH = $(window).height();
        var windowW = $(window).width();
        var ratio = panelW/panelH;
        
        var diffH = 1-((panelW - windowW)/panelW)
        var diffW = 1-((panelH - windowH)/panelH)
        if(max !== true  || max === true && diffW < 1 && diffH < 1 || max === true && diffW < 1 || diffH < 1){
            if(panelW > panelH){
                if(windowH < (windowW*ratio)){
                    $(wrapper).css('-webkit-transform', 'scale('+diffW+')');
                    $(wrapper).css('-ms-transform', 'scale('+diffW+')');
                    $(wrapper).css('transform', 'scale('+diffW+')');
                }
                
                if(windowW < (windowH*ratio)){
                    $(wrapper).css('-webkit-transform', 'scale('+diffH+')');
                    $(wrapper).css('-ms-transform', 'scale('+diffH+')');
                    $(wrapper).css('transform', 'scale('+diffH+')');
                }
            }
            if(panelW < panelH){
                if(windowH > (windowW*ratio)){
                    $(wrapper).css('-webkit-transform', 'scale('+diffH+')');
                    $(wrapper).css('-ms-transform', 'scale('+diffH+')');
                    $(wrapper).css('transform', 'scale('+diffH+')');
                }
                
                if(windowW > (windowH*ratio)){
                    $(wrapper).css('-webkit-transform', 'scale('+diffW+')');
                    $(wrapper).css('-ms-transform', 'scale('+diffW+')');
                    $(wrapper).css('transform', 'scale('+diffW+')');
                }
            }
        }else{
            $(wrapper).css('-webkit-transform', '');
            $(wrapper).css('-ms-transform',  '');
            $(wrapper).css('transform',  '');              
        }
        
        var bodyH = ((windowH - $(wrapper)[0].getBoundingClientRect().height)/2)
        var bodyW = ((windowW - $(wrapper)[0].getBoundingClientRect().width)/2)
        if(bodyH < 0){bodyH=0;}
        if(bodyW < 0){bodyW=0;}
        $(wrapper).css('top', bodyH);
        $(wrapper).css('left', bodyW);
    },
     
      
    /** +brief Viewport Stepper - IN PRODUCTION, DO NOT USE.
     *	&info - Shrink Width and Height of viewport in steps of passed parameters.
     *	@panelW - Width of container
     *	@panelH - Height of container
     *	@baseStepV - Base Vertical step height     
     *	@spacingStepV - BaseStepV + spacing between (60+5=65)
     *	@baseStepH - Base Horizontal step width 
     *	@spacingStepH -  BaseStepV + spacing between (150+5=155)
     *	@wrapper - Wrapper DOM Object
     *          
        
    stepper: function(panelW, panelH, baseStepV, spacingStepV, baseStepH, spacingStepH, wrapper){
        var windowH = $(window).height();
        var windowW = $(window).width(); 
        var stepHeight = (Math.floor((windowH - baseStepV - 20)/spacingStepV) * spacingStepV) + baseStepV;	
        var newWidth = Math.round(stepHeight*(panelW/panelH)); 
        
        if(newWidth < windowW){
            $(wrapper).width(newWidth).height(stepHeight);  
        }else{       
            var stepWidth = (Math.floor((windowW - baseStepH - 20)/spacingStepH) * spacingStepH) + baseStepH;	
            var newHeight = Math.round(stepWidth*(panelH/panelW)); 
            $(wrapper).width(stepWidth).height(newHeight);  
        } 
    
        var bodyH = ((windowH - $(wrapper)[0].getBoundingClientRect().height)/2)
        var bodyW = ((windowW - $(wrapper)[0].getBoundingClientRect().width)/2)
        if(bodyH < 0){bodyH=0;}
        if(bodyW < 0){bodyW=0;}
        $(wrapper).css('top', bodyH);
        $(wrapper).css('left', bodyW);
    },
    */ 
    
    /** +brief Mouse Events
     *	@element - DOM Object
     *	@args - Element Definition, ex. {type:'button', click:function(){ //do somthing}}  
     *	@id - ID of Element to access allObjects.id  
     *  !note - SDK checks for touch input or mouse input.
     */	
	eventBinders: function(element, args, id){                       
        for (i = 0; i < eventNames.length; i++) { 
            var eventName = eventNames[i];
            var targetObj = allObjects[id];
            if(args[eventName] != null){
                if(targetObj[eventName]){$(element).off(eventName, targetObj[eventName]);}
                $(element).on(eventName, args[eventName]);
                if(args.type === 'radioButton' || args.type === 'checkboxButton'){$(element).on(eventName, preventLabelDoubleEvent);}
            }else if(args[eventName] === null){
                if(targetObj[eventName]){$(element).off(eventName, targetObj[eventName]);}
                if(args.type === 'radioButton' || args.type === 'checkboxButton'){$(element).off(eventName, preventLabelDoubleEvent);}               
            }
        }             
        return true
    },
    
    /** +brief Randomly select color from array.
     *	@array - ['blue', 'yellow', 'grey']
     */	
    colorGen: function(array){
        var color = array[Math.floor(array.length * Math.random())];
        return color;  
    },
    
    /** +brief Object Definition Storage
     *  &info - This stores each rendered elements definition into a global
     *          variable, allObjects.  If there is no ID present, an ID will
     *          be generated.  All rendered elements MUST have an ID, one way
     *          or another.
     *  EX:  allObjects.btn_ButtonID.label
     *  @setGet - boolean - true - Enables object modifcation after creation.
     *  !note - If functionality needs to be added custom for a project
     *          override 'LCARS.objectDefinition' with your own module.
     *          DO NOT EDIT THIS, WILL BE OVERWRITTEN WHEN SDK IS UPGRADED.
     */	    
    objectDefinition: function(element, args, setGet){
        
        if(setGet === true){
            var elemID = $(element).attr('id');
            var targetObj = allObjects[elemID];
            var element = LCARS.setObjectSettings(element, args, targetObj);
            var eventsReady = LCARS.eventBinders(element, args, elemID);
            for (var prop in args) {
              if(args.hasOwnProperty(prop)){          
                if(args[prop] === null){                 
                    targetObj[prop] = null;             
                }else{
                    if(prop === 'class'){
                        if(typeof args[prop] === 'string'){
                            targetObj[prop] = targetObj[prop] + ' ' + args[prop]
                        }else if(Array.isArray(args[prop])){
                            for (i = 0; i < args.class.length; i++) { 
                                var className = args.class[i];
                                targetObj[prop].replace(className,'');
                            }                               
                        }
                    }else if(prop === 'attrs' && targetObj.attrs){ 
                        for (i = 0; i < args.attrs.length; i++) { 
                            var domAttr = args.attrs[i];
                            if(domAttr.value === null){     
                                for (i = 0; i < targetObj.attrs.length; i++) { 
                                    var targetAttr = targetObj.attrs[i];
                                    if(targetAttr.attr === domAttr.attr){
                                        targetAttr.value = null;
                                    }
                                }            
                            }else if(typeof domAttr.attr === 'string'){
                                if(targetObj[prop]){
                                    for (i = 0; i < targetObj.attrs.length; i++) { 
                                        var targetAttr = targetObj.attrs[i];
                                        if(targetAttr.attr === domAttr.attr){
                                            targetAttr.value = domAttr.value;
                                        }else{
                                          targetAttr[domAttr.attr] = domAttr.value;  
                                        }
                                    }                               
                                }
                            } 
                        }               
                    }else{
                        targetObj[prop] = args[prop];
                    }
                }
              }
           }
           
           return element;
        }else{  
            //Clones args to prevent references and altering stored templates.
            var object = Object.create(args);
            objectCount += 1;
            object.objectNumber = objectCount;
            if(object.id){
                allObjects[object.id] = object;           
            }else{
                var genID = object.type+'_'+objectCount;
                object.id = genID;
                allObjects[genID] = object; 
            } 
            var eventsReady = LCARS.eventBinders(element, object, object.id);
            var element = LCARS.setObjectSettings(element, object)
            
            return element;
        }  
    },
   
    /** +brief Object Settings
     *  &info - This maintains the settings applied within the DOM. 
     *  !note - If functionality needs to be added custom for a project
     *          override 'LCARS.setObjectSettings' with your own module.
     *          DO NOT EDIT THIS, WILL BE OVERWRITTEN WHEN SDK IS UPGRADED.
     */	
    setObjectSettings: function(element, args, original){

        if(!original){original = {}}
        if(args.id){$(element).attr('id', args.id);}
        if(args.type){$(element).addClass(args.type);} 
               
        if(args.label === null){$(element).removeAttr('data-label'); }else if(args.label){$(element).not('.complexButton').attr('data-label', args.label);} 	 
        if(args.altLabel === null){$(element).removeAttr('data-altLabel'); }else if(args.altLabel){$(element).not('.complexButton').attr('data-altLabel', args.altLabel);}       
        
        if(args.color === null && original.color != null){     
            $(element).removeClass(original.color);          
        }else if(typeof args.color === 'string'){
            if(original.color){$(element).removeClass(original.color);}
            $(element).addClass(args.color);
        }
        
        if(args.version === null && original.version != null){     
            $(element).removeClass(original.version);          
        }else if(typeof args.version === 'string'){
            if(original.version){$(element).removeClass(original.version);}
            $(element).addClass(args.version);
        }        
        
        if(args.size === null && original.size != null){     
            $(element).removeClass(original.size);          
        }else if(typeof args.size === 'string'){
            if(original.size){$(element).removeClass(original.size);}
            $(element).addClass(args.size);
        }   
        
        if(args.state === null && original.state != null){     
            $(element).removeClass(original.state);          
        }else if(typeof args.state === 'string'){
            if(original.state){$(element).removeClass(original.state);}
            $(element).addClass(args.state);
        }         
             
        if(typeof args.class === 'string'){
            $(element).addClass(args.class);
        }else if(Array.isArray(args.class)){
            for (i = 0; i < args.class.length; i++) { 
                var className = args.class[i];
                $(element).removeClass(className);
            }
        }
     
        if(args.flex === null && original.flex != null){     
            $(element).removeClass('flex'+original.flex);          
        }else if(typeof args.flex === 'string'){
            if(original.flex){$(element).removeClass('flex'+original.flex);}
            $(element).addClass('flex'+args.flex);
        } 

        if(args.flexC === null && original.flexC != null){     
            $(element).removeClass('flexc'+original.flexC);          
        }else if(typeof args.flexC === 'string'){
            if(original.flexC){$(element).removeClass('flexc'+original.flexC);}
            $(element).addClass('flexc'+args.flexC);
        } 
        
        if(args.noTransition === true){
            $(element).addClass('noTransition');
        }else if(args.noTransition === 'false'){
            $(element).removeClass('noTransition');
        }
        
        if(args.noEvent === true){
            $(element).addClass('noEvent');
        }else if(args.noEvent === 'false'){
            $(element).removeClass('noEvent');
        }        
        
        if(args.hidden === true){
            $(element).addClass('hidden');
        }else if(args.hidden === 'false'){
            $(element).removeClass('hidden');
        }        

        if(args.fade === true){
            $(element).addClass('fade');
        }else if(args.fade === 'false'){
            $(element).removeClass('fade');
        }  


        if(args.readOnly === true){
            $(element).attr('readonly', true);
        }else if(args.readOnly === 'false'){
            $(element).attr('readonly', false);
        }

        if(args.checked === true){
            $(element).find('input').prop('checked', true);
        }else if(args.checked === false){
            $(element).find('input').prop('checked', false);
        }
        
        if(args.password === true){
            $(element).attr('type', 'password');
        }else if(args.checked === false){
            $(element).attr('type', 'text');
        }
 
        if(args.nbValue === null && original.nbValue != null){     
            $(element).find('.numericBlock').empty();          
        }else if(typeof args.nbValue === 'string'){
            $(element).find('.numericBlock').text(args.nbValue);
        }  
 
        if(args.text === null && original.text != null){     
            if($(element).is('input')){
                $(element).val('');
            }else{
                $(element).empty();
            }
        }else if(typeof args.text === 'string'){
            if($(element).is('input')){
                $(element).val(args.text);
            }else{
                $(element).text(args.text);
            }            
        }   
 
        if(args.name === null){$(element).removeAttr('name'); }else if(args.name){$(element).attr('name', args.name);} 
        if(args.href === null){$(element).removeAttr('href'); }else if(args.href){$(element).attr('href', args.href);} 
        if(args.src === null){$(element).removeAttr('src'); }else if(args.name){$(element).attr('src', args.src);} 
       
       
       
        if(args.headerTitle === null){$(element).find('.header').children('.title').text('');}else if(args.headerTitle){$(element).find('.header').children('.title').text(args.headerTitle);} 
        if(args.footerTitle === null){$(element).find('.footer').children('.title').text('');}else if(args.footerTitle){$(element).find('.footer').children('.title').text(args.footerTitle);}
        
       
       
        if(args.attrs){
            if(args.attrs === null){
                if(original.attrs){
                    for (i = 0; i < original.attrs.length; i++) { 
                        var originalAttr = original.attrs[i];
                        $(element).removeAttr(originalAttr.attr);
                    }                               
                } 
            }else{
                for (i = 0; i < args.attrs.length; i++) { 
                    var domAttr = args.attrs[i];
                    if(domAttr.value === null ){ 
                        $(element).removeAttr(domAttr.attr);
                    }else if(typeof domAttr.value === 'string'){
                        $(element).attr(domAttr.attr, domAttr.value);
                    } 
                }
            }
        }


        if(Array.isArray(args.children)){
            $(args.children).each(function(){
                var childElement = LCARS.create[this.type](this);
                $(element).append(childElement);            
            });                                   
        }else if(typeof args.children === 'string'){
            $(element).append(args.children);
        }        
        
        return element;
    },
    
    /** +brief LCARS.create
     *  @keys - Keys are the same as the {type:value} of an objects definition.
     *          THESE MUST MATCH!
     *  >return - All LCARS.create.X calls MUST RETURN the created object.
     *  !note - The built in calls are meant to cover the main basic elements.
     *          There are a couple basic elements missing, which will be included
     *          in future versions.
     *  !note - Extensibility:  The reason the $.fn.createObject(); is universal
     *          beause of the KEY/TYPE relationship.  Extend the LCARS.create
     *          with additional code going 'LCARS.create.newObject = function(args){ //Do Something }
     *          and use the 'newObject' KEY as the element type '{type:'newObject'}
     *  @LCARS.create.widget - This call is used when wanting to call a custom function
     *                          that is not using the LCARS.create.X syntax.
     *  @LCARS.create.dialogWindow - This is a generic call that assumes there is
     *                                  a header and footer within the dialog along
     *                                  with the possibility of a title in either.
     *  @args.appendTo - string selector for DOM element w/ id/class/other selector symbol.  ex.
     *                   {type:'button', color:'red', appendTo:'#customElement'}
     */	
	create: {
		button:function(args){
            if(args.href !== undefined){var element = $('<a class="button">');}else{var element = $('<div class="button">');}            
            element = LCARS.objectDefinition(element, args);
            return element;          
        },
                                
        elbow:function(args){
            if(args.href !== undefined){
                var element = $('<a class="elbow"><div class="innerRadius"></div><div class="bar"></div></a>');
            }else{
                var element =  $('<div class="elbow"><div class="innerRadius"></div><div class="bar"></div></div>');
            }	            
            element = LCARS.objectDefinition(element, args);                            
            return element;	            
        },
 
        bar: function(args){
            var element =  $('<div class="bar"></div>');					            
            element = LCARS.objectDefinition(element, args);    						            
            return element;	            
        },
        
        cap:function(args){
            var element =  $('<div class="cap"></div>');					            
            element = LCARS.objectDefinition(element, args);            
            return element;	        
        },
        
        block:function(args){
            var element =  $('<div class="block"></div>');					            
            element = LCARS.objectDefinition(element, args);            
            return element;        
        },
        
        complexButton:function(args){
            if(args.href !== undefined){var element = $('<a class="complexButton">');}else{var element = $('<div class="complexButton">');}           
            $(args.template).each(function(){
                if(this.type == 'button'){
                    if(args.label !== undefined){this.label = args.label;}
                    if(args.altLabel !== undefined){this.altLabel = args.altLabel;}
                }                 
                var elementChild = LCARS.create[this.type](this);
                $(element).append(elementChild);
            });          
            element = LCARS.objectDefinition(element, args);
            return element;	        
        },
        
        numericButton:function(args){
            if(args.href !== undefined){var element = $('<a class="complexButton numericButton">');}else{var element = $('<div class="complexButton numericButton">');}         						
            $(args.template).each(function(){
                var nbCheck = 'numericBlock';
                if(nbCheck.indexOf(this.class) > -1){
                    if(args.nbValue){this.nbValue = args.nbValue;}
                }else{
                    if(this.type == 'button'){
                        if(args.label !== undefined){this.label = args.label;}
                        if(args.altLabel !== undefined){this.altLabel = args.altLabel;}
                    }                      
                }
                var elementChild = LCARS.create[this.type](this);
                $(element).append(elementChild);
            });            
            element = LCARS.objectDefinition(element, args);            
            return element;	        
        },
        
        radio:function(args){       
            var element = $('<input type="radio">')
            element = LCARS.objectDefinition(element, args);
            return element;	          
        },
        

        radioButton:function(args){
            var element = $('<label class="complexButton radioButton">');
            var input = LCARS.create.radio({type:'radio', name:args.name, checked:args.checked});
            $(element).prepend(input);
            $(args.template).each(function(){
                if(this.type == 'button'){
                    if(args.label !== undefined){this.label = args.label;}
                    if(args.altLabel !== undefined){this.altLabel = args.altLabel;}
                }
                var elementChild = LCARS.create[this.type](this);
                $(element).append(elementChild);
            });   
            element = LCARS.objectDefinition(element, args);
            return element;	          
        },

        numericRadioButton:function(args){
            var element = $('<label class="complexButton numericButton radioButton">');
            var input = LCARS.create.radio({type:'radio', name:args.name, checked:args.checked});
            $(element).prepend(input);
            $(args.template).each(function(){
                var nbCheck = 'numericBlock';
                if(nbCheck.indexOf(this.class) > -1){
                    if(args.nbValue){this.nbValue = args.nbValue;}
                }else{
                    if(this.type == 'button'){
                        if(args.label !== undefined){this.label = args.label;}
                        if(args.altLabel !== undefined){this.altLabel = args.altLabel;}
                    }                      
                }
                var elementChild = LCARS.create[this.type](this);
                $(element).append(elementChild);
            });   
            element = LCARS.objectDefinition(element, args);
            return element;	          
        },

        checkbox:function(args){       
            var element = $('<input type="checkbox">')
            element = LCARS.objectDefinition(element, args);
            return element;	          
        },        

        checkboxButton:function(args){
            var element = $('<label class="complexButton checkboxButton">');
            var input = LCARS.create.checkbox({type:'checkboxButton', name:args.name, checked:args.checked});
            $(element).prepend(input);
            $(args.template).each(function(){
                if(this.type == 'button'){
                    if(args.label !== undefined){this.label = args.label;}
                    if(args.altLabel !== undefined){this.altLabel = args.altLabel;}
                }                
                var elementChild = LCARS.create[this.type](this);
                $(element).append(elementChild);
            });   
            element = LCARS.objectDefinition(element, args);
            return element;	          
        },

        numericCheckboxButton:function(args){
            var element = $('<label class="complexButton numericButton checkboxButton">');
            var input = LCARS.create.checkbox({type:'checkboxButton', name:args.name, checked:args.checked});
            $(element).prepend(input);
            $(args.template).each(function(){
                var nbCheck = 'numericBlock';
                if(nbCheck.indexOf(this.class) > -1){
                    if(args.nbValue){this.nbValue = args.nbValue;}
                }else{
                    if(this.type == 'button'){
                        if(args.label !== undefined){this.label = args.label;}
                        if(args.altLabel !== undefined){this.altLabel = args.altLabel;}
                    }                      
                }
                var elementChild = LCARS.create[this.type](this);
                $(element).append(elementChild);
            });   
            element = LCARS.objectDefinition(element, args);
            return element;	          
        },
        
        wrapper:function(args){
            var element = $('<div class="wrapper"></div>');            
            element = LCARS.objectDefinition(element, args);          
            return element;	        
        },
        
        level:function(args){
            var element = $('<div class="level"><div class="bar" data-number="50%"></div></div>');					
            element = LCARS.objectDefinition(element, args);
            return element;	        
        },
        
        title:function(args){
            var element = $('<div>'+args.text+'</div>');					
            element = LCARS.objectDefinition(element, args);
            return element;		        
        },
        
        img:function(args){
            var element = $('<img>');					
            element = LCARS.objectDefinition(element, args);            
            return element;	        
        },
        
        svg:function(args){
            var element = $(args.xml);	
            element = LCARS.objectDefinition(element, args);               
            return element;	        
        },
        
        textInput:function(args){
            if(args.password === true){
                var element = $('<input type="password" />');					
            }else{
                var element = $('<input type="text" />');					
            }  
            element = LCARS.objectDefinition(element, args);
            return element;	        
        },
        
        bracket:function(args){
            if(args.id){args.template.id = args.id;}
            var element = LCARS.create[args.template.type](args.template);
            element = LCARS.objectDefinition(element, args);
            return element;		       
        },
        
        dialog:function(args){
            if(args.id){args.template.id = args.id;}
            var element = LCARS.create[args.template.type](args.template);
            element = LCARS.objectDefinition(element, args);
            return element;	        
        }
	}   
}




//Disables Rubber Banding in iOS.
$(document).ready(function(){
	if(webviewInfo.os === 'ios'){
        document.ontouchmove = function(event){
            event.preventDefault();
        }    
    }
});

//Used to sort alphabetically within their array.
function compare(a,b) {
  if (a.label < b.label)
     return -1;
  if (a.label > b.label)
    return 1;
  return 0;
}


function preventLabelDoubleEvent(event){
    event.preventDefault();
    event.stopPropagation();      
    var input = $(this).find('input');
    if($(this).hasClass('checkboxButton')){
        if($(input).prop('checked')){$(input).prop('checked', false);}else{$(input).prop('checked', true);}
    }else{
      if($(input).prop('checked')){}else{$(input).prop('checked', true);}  
    }
}


/* $.fn Calls - Used specifically with object definition objects.  ex.  {type:'button', label:'someText'} */


/** +brief Create Object
 *	@args - {}
 *  >return - When returning, only pass a single element or template.
 *  !note - This is the universal create call.  All objects, from a single button or bar 
 *          to entire widgets, this single call handles them all.  An entire UI
 *          can be created with a single create call.
 *  !note - This call directly interacts with the LCARS.create.X API.  While those API
 *          calls can be accessed directly, it is highly encouraged to use this $.fn structure.
 */	
$.fn.createObject = function(args){
    this.each(function(){
        var element = LCARS.create[this.type](this);
        if(args.appendTo == undefined && this.appendTo == undefined || args.return === true){return element; }else
        if(args.appendTo !== undefined){$(''+args.appendTo+'').append(element); setTimeout(function(){if(typeof this.success  === 'function'){this.success();}},0); }else
        if(args.appendTo == undefined && this.appendTo !== undefined){$(''+this.appendTo+'').append(element); setTimeout(function(){if(typeof this.success  === 'function'){this.success();}},0);}
    });
    setTimeout(function(){if(typeof args.success  === 'function'){args.success();}}, args.timing + 0);
}



/* $.fn Calls - Used specifically for objects within the DOM */


/** +brief Remove Object
 *	^syntax - $(element).removeObject(success);
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'remove' event specifically for that object.
 *          This allows elements to trigger events when they are removed from the view.
 *  !note - Removes definition object from global variable, 'allObjects'.
 */	
$.fn.removeObject = function(success){
    this.each(function(){
        var objectID = $(this).attr('id');    
        $(this).remove();
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].remove === 'function'){setTimeout(function(){delete allObjects[objectID];}, timing_sequence);}}
        $(this).find('[id]').each(function() { 
            var elemID = $(this).attr('id');
            delete allObjects[elemID];
        });
    });
    if(typeof success === 'function'){setTimeout(function(){success();}, args.timing+timing_sequence);}
}


/** +brief Sequence Remove - Delay and sequential
 *  !note - Remove elements and triggers optional individual element remove function.
 *  @args - {fade:true, timing:int, success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading. 
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'remove' event specifically for that object.
 *          This allows elements to trigger events when they appear within view.
 */	    
$.fn.removeObjectSequence = function(args){		
    var array = this;
    var count = array.length
    var numberStart = args.number || 0;
    var object = array[numberStart]
    var objectID = $(object).attr('id'); 
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).css('opacity', '0');
        setTimeout(function(){$(object).addClass('hidden');}, args.timing+timing_sequence);
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].remove === 'function'){setTimeout(function(){allObjects[objectID].remove();}, args.timing+timing_sequence);}}
        setTimeout(function(){ $(object).remove();}, args.timing+timing_sequence);
    }else{
        $(object).addClass('hidden');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].remove === 'function'){setTimeout(function(){allObjects[objectID].remove();}, args.timing+timing_sequence);}}
        setTimeout(function(){ $(object).remove();}, timing_sequence);
    } 
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).removeObjectSequence({number:numberStart+1, success:args.success}); }, timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence*2);}
    }
  
}

/** +brief Show Object
 *	@args - {fade:boolean, timing:int, success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading.
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'show' event specifically for that object.
 *          This allows elements to trigger events when they appear within view.
 */	
$.fn.showObject = function(args){
    this.each(function(){
        var objectID = $(this).attr('id'); 
        if($(this).hasClass('fade') && args.fade !== false){
            $(this).removeClass('hidden');
            $(this).css('opacity', '1');
            
            if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing + timing_sequence);}}
        }else{
            $(this).removeClass('hidden');
            if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing + timing_sequence);}}
        }   
    });
    if(typeof args.success === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    return this;   
}

/** +brief Sequence Show - Delay and sequential
 *  !note - Show elements and triggers optional individual element Show function.
 *  @args - {fade:boolean, timing:250, success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading.
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'show' event specifically for that object.
 *          This allows elements to trigger events when they appear within view.
 */	     
$.fn.showObjectSequence = function(args){		
    var array = this;
    var count = array.length
    var numberStart = args.number || 0;
    var object = array[numberStart]
    var objectID = $(object).attr('id'); 
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).removeClass('hidden');
        $(object).css('opacity', '1');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }else{
        $(object).removeClass('hidden');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }    
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).showObjectSequence({number:numberStart+1, success:args.success}); }, timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence*2);}
    }            
}




/** +brief Hide Object
 *	@args - {fade:boolean, timing:int, success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading.
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'hide' event specifically for that object.
 *          This allows elements to trigger events when they disappear within view.
 */	
$.fn.hideObject = function(args){
    this.each(function(){
        var objectID = $(this).attr('id'); 
        if($(this).hasClass('fade') && args.fade !== false){
            $(this).css('opacity', '0');
            setTimeout(function(){$('#'+objectID+'').addClass('hidden');}, args.timing+timing_sequence);
            if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].hide === 'function'){setTimeout(function(){allObjects[objectID].hide();}, args.timing+timing_sequence);}}
        }else{
            $(this).addClass('hidden');
            if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].hide === 'function'){setTimeout(function(){allObjects[objectID].hide();}, args.timing+timing_sequence);}}
        }   
    });
    if(typeof args.success === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    return this;   
}

/** +brief Sequence Hide - Delay and sequential
 *  !note - Hide elements and triggers optional individual element remove function.
 *  @args - {fade:true, timing:250,  success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading. 
 */	    
$.fn.hideObjectSequence = function(args){		
    var array = this;
    var count = array.length
    var numberStart = args.number || 0;
    var object = array[numberStart]
    var objectID = $(this).attr('id'); 
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).css('opacity', '0');
        setTimeout(function(){$(object).addClass('hidden');}, args.timing+timing_sequence);
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].hide === 'function'){setTimeout(function(){allObjects[objectID].hide();}, args.timing+timing_sequence);}}
    }else{
        $(object).addClass('hidden');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].hide === 'function'){setTimeout(function(){allObjects[objectID].hide();}, args.timing+timing_sequence);}}
    } 
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).hideObjectSequence({number:numberStart+1, success:args.success}); }, args.timing+timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence*2);}
    }
  
}


/** +brief Numeric Block Value.
 *  ^syntax - $(element).numericBlockValue(value, success);
 *	@value -  value:string/int,}
 *  >return - String/Int
 *	!note:  Pass only one element for return.
 *  !note:  Target complex button.
 */	
$.fn.nbValue = function(value, success){  
    var elemID = $(this).attr('id');
    var objectDef = allObjects[elemID]
    
    if(!value || typeof value === 'function'){
        if(objectDef.nbValue){
            var returnVal = objectDef.nbValue;
            if(typeof success === 'function'){value();}
            return returnVal
        }else{
            if(typeof success === 'function'){value();}
            return false;
        }        
    }else{
        this.each(function(){
            if(value === 'remove'){
                $(this).children('.numericBlock').text('');
                delete objectDef.nbValue;
            }else{   
                $(this).children('.numericBlock').text(value);
                objectDef.nbValue = value;
            }
        });
        if(typeof success === 'function'){success();}
        return this;
    } 
}


/** +brief Object Lable
 *	@action - String Text/Remove/undefined
 *  ^syntax - $(element).objectLabel(action, success); 
 *  >return - String when value else false.
 *	!note:  Pass only one element.
 *  !note:  When checking complex buttons, only use this when
 *          there is only one button within the complex button.
 *          If there is more than one, target the indivdual buttons
 *          than the complex button itself.
 */	
$.fn.objectLabel = function(action, success){   
    var elemID = $(this).attr('id');
    var complex = this.hasClass('complexButton');
    if(complex){var elemChildID = $(this).children('.button').attr('id'); var elemChild = $(this).children('.button');}
    
    if(typeof action === 'function' || !action){    
        if(complex){
            if(allObjects[elemChildID].label){
                if(typeof action === 'function'){action();}
                return allObjects[elemChildID].label;
            }else{
                return false;   
            }
        }else{          
            if(allObjects[elemID].label){
                if(typeof action === 'function'){action();}
                return allObjects[elemID].label
            }else{
                if(typeof action === 'function'){action();}
                return false;   
            }        
        }
    }else if(action === 'remove'){
        if(complex){
            $(elemChild).removeAttr('data-label');
            delete allObjects[elemChildID].label
        }else{
            this.removeAttr('data-label'); 
            delete allObjects[elemID].label
        }
        
        if(typeof success === 'function'){success();}
        return this;   
    }else if(action){
        if(complex){
            $(elemChild).attr('data-label', action);    
            allObjects[elemChildID].label = action;
        }else{
            this.attr('data-label', action);
            allObjects[elemID].label = action;
        }               
        if(typeof success === 'function'){success();}
        return this;
    }else{
        return this;   
    }
}


/** +brief Object Alt Lable
 *	@action - String Text/Remove/undefined
 *  ^syntax - $(element).objectLabel(action, success);
 *  >return - String when value else false.
 *	!note:  Pass only one element.
 *  !note:  When checking complex buttons, only use this when
 *          there is only one button within the complex button.
 *          If there is more than one, target the indivdual buttons
 *          than the complex button itself.
 */	
$.fn.objectAltLabel = function(action, success){   
    var elemID = $(this).attr('id');
    var complex = this.hasClass('complexButton');
    if(complex){var elemChildID = $(this).children('.button').attr('id'); var elemChild = $(this).children('.button');}
    
    if(typeof action === 'function' || !action){    
        if(complex){
            if(allObjects[elemChildID].altLabel){
                if(typeof action === 'function'){action();}
                return allObjects[elemChildID].altLabel;
            }else{
                return false;   
            }
        }else{          
            if(allObjects[elemID].altLabel){
                if(typeof action === 'function'){action();}
                return allObjects[elemID].altLabel
            }else{
                if(typeof action === 'function'){action();}
                return false;   
            }        
        }
    }else if(action === 'remove'){
        if(complex){
            $(elemChild).removeAttr('data-altlabel');
            delete allObjects[elemChildID].altLabel
        }else{
            this.removeAttr('data-altlabel'); 
            delete allObjects[elemID].altLabel
        }
        
        if(typeof success === 'function'){success();}
        return this;   
    }else if(action){
        if(complex){
            $(elemChild).attr('data-altlabel', action);    
            allObjects[elemChildID].altLabel = action;
        }else{
            this.attr('data-altlabel', action);
            allObjects[elemID].altLabel = action;
        }               
        if(typeof success === 'function'){success();}
        return this;
    }else{
        return this;   
    }
}



/** +brief Object Setting
 *  ex. $.fn.objectSettings('color', 'red');
 *  @setting - Setting to change.  Matches setting name used in object definitions.
 *  @value - New Value to set.
 *  >return - $.fn.objectSettings('color', function(){});
 *  --remove - $.fn.objectSettings('color', 'remove', function(){});
 *  !note - Call utilizes the LCARS.setObjectSettings(element, args)
 *          logic to change settings.  All settings within that call
 *          are accessable with this call.  
 */	    
$.fn.objectSettings = function(setting, success){		
    var elemID = $(this).attr('id');
    var objectDef = allObjects[elemID]
    if(setting.get){ 
        if(objectDef[setting.get]){
            if(typeof success === 'function'){success();}
            return objectDef[setting.get];
        }else{
            if(typeof success === 'function'){success();}
            return null;
        } 
    }else{ 
        $(this).each(function(){
            LCARS.objectDefinition($(this), setting, true);
        });
        if(typeof success === 'function'){success();}
        return this; 
    }   
  
}

/** +brief Viewport Settings
 *  +Scale a wrappered interface, respecting aspect ratio of the interface.
 *  +Shrink the viewport height/width in specific increments
 *  ^syntax - $(element).viewport('scale', {width:1080, height:1920, max:true});
 *  ^syntax - $(element).viewport('step', {width:1080, height:1920, baseStepV:60, spacingStepV:65, baseStepH:150, spacingStepH:155});
 *  @width - Target viewport default width
 *  @height - Target viewport default height
 *  @max - When scale ratio equals 1 or greater, disables scaling and interface renders at default width/height.
 *  @baseStepV - Base element heights.  Standard is 60px generally.
 *  @spacingStepV - Stepping value, add baseStepV to spacing value (60px height + 5px spacing = 65px).
 *  @baseStepH - Base element width.  Standard is 150px generally.
 *  @spacingStepH - Stepping value, add spacingStepH to spacing value (150px width + 5px spacing = 155px).
 *  !note - 'Standard' spacing is relative.  There are a few spacing standards within the LCARS
 *          methodology.
 */	
$.fn.viewport = function(action, args){
    var element = this;
    if(action === 'scale'){
        LCARS.scaler(args.width, args.height, element, args.max);
        window.onresize = function(event) {
            LCARS.scaler(args.width, args.height, element, args.max); 
        }
    }else if(action === 'step'){
        LCARS.stepper(args.width, args.height, args.baseStepV, args.spacingStepV, args.baseStepH, args.spacingStepH, element);
        window.onresize = function(event) {
            LCARS.stepper(args.width, args.height, args.baseStepV, args.spacingStepV, args.baseStepH, args.spacingStepH, element);    
        }
    }
    
}


/** +brief Object Color
 *	@action - String Text/Remove/object
 *  ^syntax - $(element).objectLabel(action, success);
 *  >return - String when value else false.
 *	!note:  Pass only one element for returns.
 *  !note:  If an object array is passed ex. ['red', 'burnt orange', 'blue']
 *          then this $.fn calls the core LCARS API, LCARS.colorGen(array);
 *          This will take an array of color names and randomly return one.
 */	
$.fn.objectColor = function(action, success){   
    var elemID = $(this).attr('id');
    var objectDef = allObjects[elemID] 
    if(typeof action === 'function' || !action){
        
        if(objectDef.color){
            if(typeof action === 'function'){action();}
            return objectDef.color;  
        }else{
            if(typeof action === 'function'){action();}
            return null;
        }    
        
    }else if(action === 'remove'){
        this.each(function(){
            $(this).removeClass(objectDef.color); 
            delete allObjects[elemID].color;
        });        
        if(typeof success === 'function'){success();}
        return this;
    
    }else if(action){
        
        this.each(function(){
            if(objectDef.color){$(this).removeClass(objectDef.color);}
            $(this).addClass(action);
            objectDef.color = action;
        });
        if(typeof success === 'function'){success();}
        return this; 
    
    }else{
        return this;   
    }
}



/** +brief Object State
 *	@action - String Text/Remove/object
 *  ^syntax - $(element).objectState(action, success);
 *  >return - String when value else false.
 *	!note:  Pass only one element for returns.
 *  !note:  If element already had a set state, it is stored in 
 *          a secondary data-attribute.  When a state is removed,
 *          if the secondary data-attribute exists, that state
 *          will be placed on the element.
 */	
$.fn.objectState = function(action, success){   
    var elemID = $(this).attr('id');
    var objectDef = allObjects[elemID]    
    if(typeof action === 'function' || !action){
        
        if(objectDef.state){
            if(typeof action === 'function'){action();}
            return objectDef.state;  
        }else{
            if(typeof action === 'function'){action();}
            return false;
        }            
    }else if(action === 'remove'){
        this.each(function(){
            $(this).removeClass(objectDef.state);
            delete objectDef.state;
        });
        if(typeof success === 'function'){success();}
        return this;
        
    }else if(action){ 
        this.each(function(){
            if(objectDef.state){$(this).removeClass(objectDef.state);}
            $(this).addClass(action);
            objectDef.state = action;
        });
        if(typeof success === 'function'){success();}
        return this; 
    
    }else{
        return this;   
    }
}


/** +brief Input Settings
 *	@action - String Text/Clear/object
 *  ^syntax - $(element).objectState(action, success);
 *  >return - String when value else true/false.
 *	!note:  Pass only one element for returns.
 */	
$.fn.inputSettings = function(action, success){   
    var elemID = $(this).attr('id');
    var objectDef = allObjects[elemID];
    
    if(typeof action === 'function' || !action){
        if($(this).is('[type="text"]') || $(this).is('[type="password"]')){
            return $(this).val();
        }else if($(this).find('input').is(':checked')){
            if(typeof action === 'function'){action();}
            return true  
        }else{
            if(typeof action === 'function'){action();}
            return false;
        }            
    }else if(action === 'clear'){
        this.each(function(){            
            if($(this).is('[type="text"]') || $(this).is('[type="password"]')){
                $(this).val('');
            }else{
                $(this).find('input').prop('checked', false );
                delete objectDef.checked;
            }
        });
        if(typeof success === 'function'){success();}
        return this;       
    }else if(action === 'check'){ 
        this.each(function(){           
            $(this).find('input').prop('checked', true );
            objectDef.checked = true;
        });
        if(typeof success === 'function'){success();}
        return this; 
    }else if(action){ 
        this.each(function(){           
            $(this).val(action);
        });
        if(typeof success === 'function'){success();}
        return this;     
    }else{
        return this;   
    }
    
}

/** +brief Has Attribute 
 *	@arg - String: attribute value
 *  @string - Boolean:  Returns attribute value if true.
 *  >return - true/false/string
 *	!note:  Pass only a single object.
 */	
$.fn.hasAttr = function(arg, string){
    var check = $(this)[0].hasAttribute(arg);
    if(string === true){
        return $(this).attr(arg);
    }else{
        return check;
    }
}


/** +brief Get Definition
 *  >return - {} else false.
 *	!note:  Pass only a single object.
 */	
$.fn.getDefinition = function(){
    var elemID = $(this).attr('id');
    if(allObjects[elemID]){
        return allObjects[elemID];
    }else{
        return false;
    }
}


/** +brief Element Scrolling
 *	@arg - {target:object, step:int}
 *	@arg - ex. {target:$('body'), step:65}
 *	!note:  Pass only a single object.
 */	
$.fn.scrollUp = function(args){    
    $(args.target).each(function(){
       var scrollVal = $(this).scrollTop();
	   $(this).scrollTop(scrollVal-args.step);
    });  
}

$.fn.scrollDown = function(args){    
    $(args.target).each(function(){
       var scrollVal = $(this).scrollTop();
	   $(this).scrollTop(scrollVal+args.step);
    });
    
}

$.fn.scrollLeft = function(args){    
   $(args.target).each(function(){ 
        var scrollVal = $(this).scrollLeft();
	   $(this).scrollLeft(scrollVal-args.step);
   });
}

$.fn.scrollRight = function(args){    
    $(args.target).each(function(){
        var scrollVal = $(this).scrollLeft();	
        $(this).scrollLeft(scrollVal+args.step); 
    });
}


/**
* For IE Active States.  Clicking on a child element does not 
* trigger its parents css :active state in IE.  JS is required with class change.
*/
$(document).on('touchstart', '.ie.touch .complexButton:not(.disabled):not(.noEvent), .ie.touch :not(.complexButton)>.button:not(.disabled):not(.noEvent), .ie.touch .elbow:not(.disabled):not(.noEvent)', function(){
    $(this).addClass('active');
});

$(document).on('touchend', '.ie.touch .complexButton.active, .ie.touch .button.active, .ie.touch .elbow.active', function(e){      
    $(this).removeClass('active'); 
});

$(document).on('touchcancel', '.ie.touch .complexButton.active, .ie.touch .button.active, .ie.touch .elbow.active', function(e){      
    $(this).removeClass('active'); 
});

$(document).on('mousedown', '.ie .complexButton:not(.disabled):not(.noEvent), .ie :not(.complexButton)>.button:not(.disabled):not(.noEvent), .ie .elbow:not(.disabled):not(.noEvent)', function(){
    $(this).addClass('active');
});

$(document).on('mouseup', '.ie .complexButton.active, .ie.button.active, .ie .elbow.active', function(e){      
    $(this).removeClass('active'); 
});

$(document).on('mouseup', '.ie body', function(e){      
    var $activeElements = $('.complexButton.active, .elbow.active') 
    if($activeElements.length > 0){
        $activeElements.removeClass('active'); 
    } 
});



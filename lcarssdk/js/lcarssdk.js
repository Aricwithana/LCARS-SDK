/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

// @timing_sequence -  How quickly things append or are removed.  Also used in other functions as part of standardized timing.
// @allObjects - Holds all definitions of objects that have an ID. Access via:  var allObjects.objectID;
// @sdkAddonTemplates - Container for Addon Templates;
// @objectCount - Number of objects stored in allObjects;
var timing_sequence = 65;
var allObjects = {};
var objectCount = 0;


/** +brief LCARS.XXX
 *          Each element is defined under the LCARS global variable.         
 *          This also allows for easy extensibility of the LCARS base API
 *          without the need to modify this file directly so upgrading
 *          does not conflict with custom needs of custom projects.
 */  
var LCARS = {
	
	templates:{
		sdk:{}
	},

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
        var ratio = panelW / panelH;
        var diffH = 1-((panelW - windowW)/panelW);
        var diffW = 1-((panelH - windowH)/panelH);
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
    
    childScale:function(panelW, panelH, wrapper, max){
        $('.childScale').each(function(){
            var windowH = $(this).parent().height();
            var windowW = $(this).parent().width();
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
        });
    },
    
    zoom:function(width, height){
        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();
        var aspectUI = width/height;
        var aspectViewport = viewportWidth / viewportHeight;
        if(aspectUI < aspectViewport){
            var zoomLevel = Math.round((viewportHeight/height)*100)/100 ; //Round to 1 decimal 
        }else{
            var zoomLevel = Math.round((viewportWidth/width)*100)/100 ; //Round to 1 decimal

        }
        $('html').css('zoom', zoomLevel);     
    },
    
    childZoom:function(width, height){
        $('.childZoom').each(function(){
            var viewportWidth = $(this).parent().width();
            var viewportHeight = $(this).parent().height();
            var aspectUI = width/height;
            var aspectViewport = viewportWidth / viewportHeight;
            if(aspectUI < aspectViewport){
                var zoomLevel = Math.round((viewportHeight/height)*100)/100; 
            }else{
                var zoomLevel = Math.round((viewportWidth/width)*100)/100;
            }      
            $(this).css('zoom', zoomLevel);     
        });
    },
    
 
/** +brief Randomly select color from array.
 *	@array - ['blue', 'yellow', 'grey']
 */	
    colorGen: function(array){
        var color = array[Math.floor(array.length * Math.random())];
        return color;  
    },
	
	colorGroupGen:function(array, iLength){
		var aReturn = [];
		
		for (i = 0; i < iLength; i++) { 
			aReturn.push(array[Math.floor(array.length * Math.random())]);
		}	
		
		return aReturn;
	},
    
    
 /** +brief Object Settings
 *  &info - This maintains the settings applied within the DOM. 
 *  !note - If functionality needs to be added custom for a project
 *          add a 'LCARS.object.settings.xxx' with your own module to override.
 *          DO NOT EDIT THIS, WILL BE OVERWRITTEN WHEN SDK IS UPGRADED.
 */	   
    settings:{
        //Universal Set Call
        set:function(element, args){
            var elemID = $(element).attr('id');
            var original = allObjects[elemID];
            
            for (var prop in args) {
				//Check to see if there are type specific settings needing to be used.
                if(args.type){var customSettings = LCARS[args.type].settings;}else{var customSettings = LCARS[original.type].settings;}
      
                //If type has custom settings
                if(customSettings){
                    if(customSettings[prop]){
                        element = LCARS[allObjects[elemID].type].settings[prop]({element:element, args:args, original:original, set:true, elemID:elemID});
                    
                    //If no custom setting, see if a setting is globally available.
                    }else if(LCARS.settings[prop]){
                        selement = LCARS.settings[prop]({element:element, args:args, original:original, set:true,  elemID:elemID});    
                    
                    //if no setting is available, just set value in global object.
                    }else{
                       original[prop] = args[prop];    
                    }
                
                }else{
                    if(LCARS.settings[prop]){
                        element = LCARS.settings[prop]({element:element, args:args, original:original, set:true,  elemID:elemID});   
                    
                    //if no setting is available, just set value in global object.
                    }else{
                        original[prop] = args[prop];   
                    }                
                }
                
                
                
            }
            return element;
        },
        
        //Universal Get Call
        get:function(element, arg, args){
            var elemID = $(element).attr('id');        
                var customSettings = LCARS[allObjects[elemID].type].settings
                if(customSettings && customSettings[arg]){
                    element = LCARS[allObjects[elemID].type].settings[arg]({elemID:elemID, args:args});
                }else{
                    element = LCARS.settings[arg]({elemID:elemID, args:args});
                }
            return element;           
        },      

        //Mouse/Touch Event Settings
        click:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.click != null && webviewInfo.input !== 'touch'){
                if(targetObj.click){$(args.element).off('click', targetObj.click);}
                targetObj.click = args.args.click;              
                if(targetObj.type === 'radio' || targetObj.type === 'checkbox'){
                    $(args.element).on('click', function(){
						radioCheckboxState.apply(this, [targetObj.click]);
					});
                }else{
                    $(args.element).on('click', targetObj.click);
                }
            }else if(args.args.click === null){
                if(targetObj.click){$(args.element).off('click');}
                targetObj.click = null;             
            }  
            return args.element;
        },
        
        mouseenter:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.mouseenter != null && webviewInfo.input !== 'touch'){
                if(targetObj.mouseenter){$(args.element).off('mouseenter');}
                targetObj.mouseenter = args.args.mouseenter;
				$(args.element).on('mouseenter', targetObj.mouseenter);
            }else if(args.args.mouseenter === null){
                if(targetObj.mouseenter){$(args.element).off('mouseenter');}
                targetObj.mouseenter = null;             
            }  
            return args.element;
        },
        
        mouseleave:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.mouseleave != null && webviewInfo.input !== 'touch'){
                if(targetObj.mouseleave){$(args.element).off('mouseleave');}
                targetObj.mouseleave = args.args.mouseleave;
				$(args.element).on('mouseleave', targetObj.mouseleave);
            }else if(args.args.mouseleave === null){
                if(targetObj.mouseleave){$(args.element).off('mouseleave');}
                targetObj.mouseleave = null;             
            }  
            return args.element;
        
        }, 
        
        hover:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.hover != null && webviewInfo.input !== 'touch'){
                if(targetObj.hover){$(args.element).off('hover');}
                targetObj.hover = args.args.hover;
				$(args.element).on('hover', targetObj.hover);
            }else if(args.args.hover === null){
                if(targetObj.hover){$(args.element).off('hover');}
                targetObj.hover = null;             
            }  
            return args.element;
        }, 
        
        mousedown:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.mousedown != null && webviewInfo.input !== 'touch'){
                if(targetObj.mousedown){$(args.element).off('mousedown');}
                targetObj.mousedown = args.args.mousedown;
				$(args.element).on('mousedown', targetObj.mousedown);
            }else if(args.args.mousedown === null){
                if(targetObj.mousedown){$(args.element).off('mousedown');}
                targetObj.mousedown = null;             
            }  
            return args.element;
        },
        
        mouseup:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.mouseup != null && webviewInfo.input !== 'touch'){
                if(targetObj.mouseup){$(args.element).off('mouseup');}
                targetObj.mouseup = args.args.mouseup;
                if(targetObj.type === 'radio' || targetObj.type === 'checkbox'){
                    $(args.element).on('mouseup', function(){
						radioCheckboxState.apply(this, [targetObj.click]);
					});
                }else{
                    $(args.element).on('mouseup', targetObj.mouseup);
                }
            }else if(args.args.mouseup === null){
                if(targetObj.mouseup){$(args.element).off('mouseup');}
                targetObj.mouseup = null;             
            } 
            return args.element;
        },         

        tap:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.tap != null && webviewInfo.input === 'touch'){
                if(targetObj.tap){$(args.element).off('tap');}
                targetObj.tap = args.args.tap;
                if(targetObj.type === 'radio' || targetObj.type === 'checkbox'){
                    $(args.element).on('tap', function(){
						radioCheckboxState.apply(this, [targetObj.click]);
					});
                }else{
                    $(args.element).on('tap', targetObj.tap);
                }
            }else if(args.args.tap === null){
                if(targetObj.tap){$(args.element).off('tap');}
                targetObj.tap = null;             
            }  
            return args.element;
        }, 
        
        singleTap:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.singleTap != null && webviewInfo.input === 'touch'){
                if(targetObj.singleTap){$(args.element).off('singleTap');}
                targetObj.singleTap = args.args.singleTap;
                if(targetObj.type === 'radio' || targetObj.type === 'checkbox'){
                    $(args.element).on('singleTap', function(){
						radioCheckboxState.apply(this, [targetObj.click]);
					});
                }else{
                    $(args.element).on('singleTap', targetObj.singleTap);
                }
            }else if(args.args.singleTap === null){
                if(targetObj.singleTap){$(args.element).off('singleTap');}
                targetObj.singleTap = null;             
            }  
            return args.element;
        }, 
        
        doubleTap:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.doubleTap != null && webviewInfo.input === 'touch'){
                if(targetObj.doubleTap){$(args.element).off('doubleTap');}
                targetObj.doubleTap = args.args.doubleTap;
				$(args.element).on('doubleTap', targetObj.doubleTap);
            }else if(args.args.doubleTap === null){
                if(targetObj.doubleTap){$(args.element).off('doubleTap');}
                targetObj.doubleTap = null;             
            }  
            
            return args.element;
        }, 
        
        longTap:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.longTap != null && webviewInfo.input === 'touch'){
                if(targetObj.longTap){$(args.element).off('longTap');}
                targetObj.longTap = args.args.longTap;
				$(args.element).on('longTap', targetObj.longTap);
            }else if(args.args.longTap === null){
                if(targetObj.longTap){$(args.element).off('longTap');}
                targetObj.longTap = null;             
            }  
            return args.element;
        }, 
        
        swipe:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.swipe != null && webviewInfo.input === 'touch'){
                if(targetObj.swipe){$(args.element).off('swipe');}
                targetObj.swipe = args.args.swipe;
				$(args.element).on('swipe', targetObj.swipe);
            }else if(args.args.swipe === null){
                if(targetObj.swipe){$(args.element).off('swipe');}
                targetObj.swipe = null;             
            }  
            return args.element;
        },
        
        swipeLeft:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.swipeLeft != null && webviewInfo.input === 'touch'){
                if(targetObj.swipeLeft){$(args.element).off('swipeLeft');}
                targetObj.swipeLeft = args.args.swipeLeft;
				$(args.element).on('swipeLeft', targetObj.swipeLeft);
            }else if(args.args.swipeLeft === null){
                if(targetObj.swipeLeft){$(args.element).off('swipeLeft');}
                targetObj.swipeLeft = null;             
            }  
            return args.element;
        },
        
        swipeRight:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.swipeRight != null && webviewInfo.input === 'touch'){
                if(targetObj.swipeRight){$(args.element).off('swipeRight');}
                targetObj.swipeRight = args.args.swipeRight;
				$(args.element).on('swipeRight', targetObj.swipeRight);
            }else if(args.args.swipeRight === null){
                if(targetObj.swipeRight){$(args.element).off('swipeRight');}
                targetObj.swipeRight = null;             
            }  
            return args.element;
        },
        
        swipeUp:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.swipeUp != null && webviewInfo.input === 'touch'){
                if(targetObj.swipeUp){$(args.element).off('swipeUp');}
                targetObj.swipeUp = args.args.swipeUp;
				$(args.element).on('swipeUp', targetObj.swipeUp);
            }else if(args.args.swipeUp === null){
                if(targetObj.swipeUp){$(args.element).off('swipeUp');}
                targetObj.swipeUp = null;             
            }  
            return args.element;
        }, 
        
        swipeDown:function(args){
            var elemID = $(args.element).attr('id');
            var targetObj = allObjects[elemID];              
            if(args.args.swipeDown != null && webviewInfo.input === 'touch'){
                if(targetObj.swipeDown){$(args.element).off('swipeDown');}
                targetObj.swipeDown = args.args.swipeDown;
				$(args.element).on('swipeDown', targetObj.swipeDown);
            }else if(args.args.swipeDown === null){
                if(targetObj.swipeDown){$(args.element).off('swipeDown');}
                targetObj.swipeDown = null;             
            }  
            return args.element;
        },         
     
        //Base Settings
        type:function(args){         
            if(args.set === true){
                if(args.args.type === null && args.original.type != null){     
                    $(args.element).removeClass(args.original.type); 
                    allObjects[args.elemID].type = null;
                }else if(typeof args.args.type === 'string'){
                    if(args.original.type){$(args.element).removeClass(args.original.type);}
                    $(args.element).addClass(args.args.type);
                    allObjects[args.elemID].type = args.args.type;
                }            
                return args.element;          
            }else{
                if(!allObjects[args.elemID].type){return null;}else{return allObjects[args.elemID].type;}
            }
        },
        
        color:function(args){         
            if(args.set === true){
                if(args.args.color === null && args.original.color != null){     
                    $(args.element).removeClass(args.original.color); 
                    allObjects[args.elemID].color = null;
                }else if(typeof args.args.color === 'string'){
                    if(args.original.color){$(args.element).removeClass(args.original.color);}
                    $(args.element).addClass(args.args.color);
                    allObjects[args.elemID].color = args.args.color;
                }            
                return args.element;          
            }else{
                if(!allObjects[args.elemID].color){return null;}else{return allObjects[args.elemID].color;}
            }
        },
        
        version:function(args){
            if(args.set === true){
                if(args.args.version === null && args.original.version != null){     
                    $(args.element).removeClass(args.original.version);
                    allObjects[args.elemID].version = null;
                }else if(typeof args.args.version === 'string'){
                    if(args.original.version){$(args.element).removeClass(args.original.version);}
                    $(args.element).addClass(args.args.version);
                    allObjects[args.elemID].version = args.args.version;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].version){return null;}else{return allObjects[args.elemID].version;}
            }  
        },
        
        direction:function(args){
            if(args.set === true){
                if(args.args.direction === null && args.original.direction != null){     
                    $(args.element).removeClass(args.original.direction);
                    allObjects[args.elemID].direction = null;
                }else if(typeof args.args.direction === 'string'){
                    if(args.original.direction){$(args.element).removeClass(args.original.direction);}
                    $(args.element).addClass(args.args.direction);
                    allObjects[args.elemID].direction = args.args.direction;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].direction){return null;}else{return allObjects[args.elemID].direction;}
            }  
        },
            
        orient:function(args){
            if(args.set === true){
                if(args.args.orient === null && args.original.orient != null){     
                    $(args.element).removeClass(args.original.orient);
                    allObjects[args.elemID].orient = null;
                }else if(typeof args.args.orient === 'string'){
                    if(args.original.orient){$(args.element).removeClass(args.original.orient);}
                    $(args.element).addClass(args.args.orient);
                    allObjects[args.elemID].orient = args.args.orient;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].orient){return null;}else{return allObjects[args.elemID].orient;}
            }  
        },    

        label:function(args){
            if(args.set === true){
                if(args.args.label === null && args.original.label != null){     
                    $(args.element).removeAttr('data-label');
                    allObjects[args.elemID].label = null;
                }else if(typeof args.args.label === 'string'){
                    $(args.element).attr('data-label', args.args.label);
                    allObjects[args.elemID].label = args.args.label;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].label){return null;}else{return allObjects[args.elemID].label;}
                
            }  
        },
        
        altLabel:function(args){
            if(args.set === true){
                if(args.args.altLabel === null && args.original.altLabel != null){     
                    $(args.element).removeAttr('data-altLabel');
                    allObjects[args.elemID].altLabel = null;
                }else if(typeof args.args.altLabel === 'string'){
                    $(args.element).attr('data-altLabel', args.args.altLabel);
                    allObjects[args.elemID].altLabel = args.args.altLabel;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].altLabel){return null;}else{return allObjects[args.elemID].altLabel;}
            }  
        },

        size:function(args){
            if(args.set === true){
                if(args.args.size === null && args.original.size != null){     
                    $(args.element).removeClass(args.original.size);
                    allObjects[args.elemID].size = null;
                }else if(typeof args.args.size === 'string'){
                    if(args.original.size){$(args.element).removeClass(args.original.size);}
                    $(args.element).addClass(args.args.size);
                    allObjects[args.elemID].size = args.args.size;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].size){return null;}else{return allObjects[args.elemID].size;}
            }  
        },
        
        state:function(args){
            if(args.set === true){
                if(args.args.state === null && args.original.state != null){     
                    $(args.element).removeClass(args.original.state);
                    allObjects[args.elemID].state = null;
                }else if(typeof args.args.state === 'string'){
                    if(args.original.state){$(args.element).removeClass(args.original.state);}
                    $(args.element).addClass(args.args.state);
                    allObjects[args.elemID].state = args.args.state;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].state){return null;}else{return allObjects[args.elemID].state;}
            }  
        }, 
        
        class:function(args){
            if(args.set === true){
                if(typeof args.args.class === 'string'){
                    $(args.element).addClass(args.args.class);
                    if(allObjects[args.elemID].class){
                        allObjects[args.elemID].class = allObjects[args.elemID].class + ' ' + args.args.class;
                    }else{
                        allObjects[args.elemID].class = args.args.class;
                    }
                }else if(Array.isArray(args.args.class)){
                    for (i = 0; i < args.args.class.length; i++) { 
                        var className = args.args.class[i];
                        $(args.element).removeClass(className);
                        var classN = allObjects[args.elemID].class
                        var re = new RegExp(className,"g");
                        var newClass = classN.replace(re, '');
                        allObjects[args.elemID].class = newClass;
                    }
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].class){return null;}else{return allObjects[args.elemID].class;}
            }  
        },
        
        style:function(args){
            if(args.set === true){
                
                if(args.args.style === null && args.original.style != null){     
                    allObjects[args.elemID].style = null;   
                }else if(typeof args.args.style === 'string'){
                    $(args.element).attr('style', args.args.style);
                    allObjects[args.elemID].style = args.args.style;
                }          
                return args.element;
            
            }else{
                if(!allObjects[args.elemID].style){return null;}else{return allObjects[args.elemID].style;}          
            }  
        },

        flex:function(args){
            if(args.set === true){
                
                if(args.args.flex === null && args.original.flex != null){     
                    $(args.element).removeClass('flex'+args.original.flex);
                    allObjects[args.elemID].flex = null;   
                }else if(typeof args.args.flex === 'string'){
                    if(args.original.flex){$(args.element).removeClass('flex' + args.original.flex);}
                    $(args.element).addClass('flex' + args.args.flex);
                    allObjects[args.elemID].flex = 'flex' + args.args.flex;
                }          
                return args.element;
            
            }else{
                if(!allObjects[args.elemID].flex){return null;}else{return 'flex' + allObjects[args.elemID].flex;}          
            }  
        },
        
        flexC:function(args){
            if(args.set === true){
                
                if(args.args.flexC === null && args.original.flexC != null){     
                    $(args.element).removeClass('flexc'+args.original.flexC);
                    allObjects[args.elemID].flexC = null;   
                }else if(typeof args.args.flexC === 'string'){
                    if(args.original.flexC){$(args.element).removeClass('flexc' + args.original.flexC);}
                    $(args.element).addClass('flexc' + args.args.flexC);
                    allObjects[args.elemID].flexC = 'flexc' + args.args.flexC;
                }          
                return args.element;
            
            }else{
                if(!allObjects[args.elemID].flexC){return null;}else{return 'flexc' + allObjects[args.elemID].flexC;}   
            }  
        },
        
        noTransition:function(args){
            if(args.set === true){
                if(args.args.noTransition === false){     
                    $(args.element).removeClass('noTransition');
                    allObjects[args.elemID].noTransition = args.args.noTransition;
                }else if(args.args.noTransition === true){
                    $(args.element).addClass('noTransition');
                    allObjects[args.elemID].noTransition = args.args.noTransition;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].noTransition){return null;}else{return allObjects[args.elemID].noTransition;}
            }  
        },
        
        noEvent:function(args){
            if(args.set === true){
                if(args.args.noEvent === false){     
                    $(args.element).removeClass('no-event');
                    allObjects[args.elemID].noEvent = args.args.noEvent;
                }else if(args.args.noEvent === true){
                    $(args.element).addClass('no-event');
                    allObjects[args.elemID].noEvent = args.args.noEvent;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].noEvent){return null;}else{return allObjects[args.elemID].noEvent;}
            }  
        },

        disabled:function(args){
            if(args.set === true){
                if(args.args.hidden === false){     
                    $(args.element).removeClass('disabled');
                    allObjects[args.elemID].disabled = args.args.disabled;
                }else if(args.args.disabled === true){
                    $(args.element).addClass('disabled');
                    allObjects[args.elemID].disabled = args.args.disabled;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].disabled){return null;}else{return allObjects[args.elemID].disabled;}
            }  
        },        
        
        hidden:function(args){
            if(args.set === true){
                if(args.args.hidden === false){     
                    $(args.element).removeClass('hidden');
                    allObjects[args.elemID].hidden = args.args.hidden;
                }else if(args.args.hidden === true){
                    $(args.element).addClass('hidden');
                    allObjects[args.elemID].hidden = args.args.hidden;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].hidden){return null;}else{return allObjects[args.elemID].hidden;}
            }  
        },
        
        fade:function(args){
            if(args.set === true){
                if(args.args.fade === false){     
                    $(args.element).removeClass('fade');
                    allObjects[args.elemID].fade = args.args.fade;
                }else if(args.args.fade === true){
                    $(args.element).addClass('fade');
                    allObjects[args.elemID].fade = args.args.fade;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].fade){return null;}else{return allObjects[args.elemID].fade;}
            }  
        },
        
        readOnly:function(args){
            if(args.set === true){
                if(args.args.readOnly === false){     
                    $(args.element).attr('readonly', false);
                    allObjects[args.elemID].readOnly = args.args.readOnly;
                }else if(args.args.readOnly === true){
                    $(args.element).attr('readonly', true);
                    allObjects[args.elemID].readOnly = args.args.readOnly;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].readOnly){return null;}else{return allObjects[args.elemID].readOnly;}
            }  
        },
        
        checked:function(args){
            if(args.set === true){
                if(args.args.checked === false){     
                    $(args.element).removeClass('checked');
                    allObjects[args.elemID].checked = null;
                }else if(args.args.checked === true){
                    $(args.element).addClass('checked');
                    allObjects[args.elemID].checked = true;
                }
                return args.element;
            }else{
                if(allObjects[args.elemID].checked){return allObjects[args.elemID].checked;}else{return null;}
            }  
        },
        
        password:function(args){
            if(args.set === true){
                if(args.args.password === false){     
                    $(args.element).attr('type', 'text');
                    allObjects[args.elemID].password = args.args.password;
                }else if(args.args.password === true){
                    $(args.element).attr('type', 'password');
                    allObjects[args.elemID].password = args.args.password;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].password){return null;}else{return allObjects[args.elemID].password;}
            }  
        },
        
        inputValue:function(args){
            if(args.set === true){
                if(args.args.inputValue === null){     
                    $(args.element).removeAttr('value');
                    allObjects[args.elemID].inputValue = null;
                }else if(args.args.inputValue === 'string'){
                    $(args.element).attr('value', args.args.inputValue);
                    allObjects[args.elemID].inputValue = args.args.inputValue;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].inputValue){return null;}else{return allObjects[args.elemID].inputValue;}
            }  
        },        
        
        text:function(args){
            if(args.set === true){
                if(args.args.text === null && args.original.text != null){     
                    if($(args.element).is('input')){
                        $(args.element).val('');
                    }else{
                        $(args.element).empty();
                    }                                       
                    allObjects[args.elemID].text = null;                
                }else if(typeof args.args.text === 'string'){
                    if($(args.element).is('input')){
                        $(args.element).val(args.args.text);
                    }else{
                        $(args.element).text(args.args.text);
                    }                   
                    allObjects[args.elemID].text = args.args.text;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].text){return null;}else{return allObjects[args.elemID].text;}
            }  
        },
        
        name:function(args){
            if(args.set === true){
                if(args.args.name === null && args.original.name != null){     
                    $(args.element).removeAttr('name');
                    allObjects[args.elemID].name = null;
                }else if(typeof args.args.name === 'string'){
                    $(args.element).attr('name', args.args.name);
                    allObjects[args.elemID].name = args.args.name;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].name){return null;}else{return allObjects[args.elemID].name;}
            }  
        },
        
        href:function(args){
            if(args.set === true){
                if(args.args.href === null && args.original.href != null){     
                    $(args.element).removeAttr('href');
                    allObjects[args.elemID].href = null;
                }else if(typeof args.args.href === 'string'){
                    $(args.element).attr('href', args.args.href);
                    allObjects[args.elemID].href = args.args.href;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].href){return null;}else{return allObjects[args.elemID].href;}
            }  
        },
        
        src:function(args){
            if(args.set === true){
                if(args.args.src === null && args.original.src != null){     
                    $(args.element).removeAttr('src');
                    allObjects[args.elemID].src = null;
                }else if(typeof args.args.src === 'string'){
                    $(args.element).attr('src', args.args.src);
                    allObjects[args.elemID].src = args.args.src;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].src){return null;}else{return allObjects[args.elemID].src;}
            }  
        },
        
        attrs:function(args){
            if(args.set === true){
                if(args.args.attrs === null && args.original.attrs !== null){
                    for (i = 0; i < allObjects[args.elemID].attrs.length; i++) { 
                        var domAttr = allObjects[args.elemID].attrs[i];
                        $(args.element).removeAttr(domAttr.attr);
                    }
                    allObjects[args.elemID].attrs = null;  
                }else{              
                    if(!allObjects[args.elemID].attrs){allObjects[args.elemID].attrs = []}             
                    for (i = 0; i < args.args.attrs.length; i++) { 
                        var domAttr = args.args.attrs[i];
                        var present = null;                  
                        
                        for (i = 0; i < allObjects[args.elemID].attrs.length; i++) { 
                            var orgAttr = allObjects[args.elemID].attrs[i];
                            if(orgAttr[domAttr.attr] === domAttr.attr){present = i;}
                        }
                        
                        if(domAttr.value === null ){ 
                            if(present !== null){
                                allObjects[args.elemID].attrs[present].value = null;
                            }
                            $(args.element).removeAttr(domAttr.attr);
                            
                        }else if(typeof domAttr.value === 'string'){
                            if(present !== null){
                                allObjects[args.elemID].attrs[present].value = domAttr.value;    
                            }else{
                                $(args.element).attr(domAttr.attr, domAttr.value);
                                allObjects[args.elemID].attrs.push(domAttr);
                            }
                        }
                    }
                }
                return args.element;
            }else{
               if(!allObjects[args.elemID].attrs){return null;}else{return allObjects[args.elemID].attrs;}
            }  
        },
        
        children:function(args){
            if(Array.isArray(args.args.children)){
                $(args.args.children).each(function(){
                    var childElement = LCARS[this.type].create(this);
                    $(args.element).append(childElement);            
                });                                   
            }else if(typeof args.args.children === 'string'){
                $(args.element).append(args.args.children);
            }
            allObjects[args.elemID].children = args.args.children;
            return args.element;
        },
                
        colors:function(args){
             if(args.set === true){ 
                if(args.args.colors === null && args.original.colors != null){     
                    $(args.element).children(':not(.text):not(.title)').each(function(){
                        LCARS.settings.set(this, {color:null});                     
                    });
                    allObjects[args.elemID].colors = null;
                }else if(Array.isArray(args.args.colors)){
                    var childrenElem = $(args.element).children(':not(.text):not(.title)')
                    for (i = 0; i < childrenElem.length; i++) { 
                        var childElem = childrenElem[i];
                        if(args.args.colors[i]){
                            LCARS.settings.set(childElem, {color:args.args.colors[i]});  
                        }        
                    }           
                    allObjects[args.elemID].colors = args.args.colors;
                }                
            }else{
                if(!allObjects[args.elemID].colors){return null;}else{return allObjects[args.elemID].colors;}
            }                
            return args.element;
        },

        html:function(args){
            if(args.set === true){
                if(args.args.html === null && args.original.html != null){     
                    $(args.element).empty();                                      
                    allObjects[args.elemID].html = null;                
                }else if(typeof args.args.html === 'string'){
                    $(args.element).html(args.args.html);               
                    allObjects[args.elemID].html = args.args.html;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].html){return null;}else{return allObjects[args.elemID].html;}
            }  
        },
        
        leave:function(args){
            if(args.set === true){ 
                if(args.args.leave === null && args.original.leave != null){     
                    var elemID = $(args.element).attr('id');
                    $(document).unbindLeave('#'+elemID);
                    allObjects[args.elemID].leave = null;    
                }else if(typeof args.args.leave === 'function'){
                    var elemID = $(args.element).attr('id');
                    $(document).leave('#'+elemID, args.args.leave);
                    allObjects[args.elemID].leave = args.args.leave;
                } 
                return args.element;             
            }else{
                if(!allObjects[args.elemID].leave){return null;}else{return allObjects[args.elemID].leave;}
            }                
            
        },
		
        arrive:function(args){
            if(args.set === true){ 
                if(args.args.arrive === null && args.original.arrive != null){     
                    var elemID = $(args.element).attr('id');
                    $(document).unbindArrive('#'+elemID);
                    allObjects[args.elemID].arrive = null;    
                }else if(typeof args.args.arrive === 'function'){
                    var elemID = $(args.element).attr('id');
                    $(document).arrive('#'+elemID, args.args.arrive);
                    allObjects[args.elemID].arrive = args.args.arrive;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].arrive){return null;}else{return allObjects[args.elemID].arrive;}
            }                                                  
        },
		
		endcap:function(args){
	
			if(args.set === true){
				if(args.args.endcap === false){  				  				
					$(args.element).removeClass('endcap');
					$(args.element).find('div').removeObject();
					allObjects[args.elemID].endcap = args.args.endcap;
				}else if(args.args.endcap === true){
					var elementCap = LCARS.cap.create({type:'cap'});
					$(args.element).addClass('endcap').append(elementCap);
					allObjects[args.elemID].endcap = args.args.endcap;
				}
				return args.element;
			}else{
				if(!allObjects[args.elemID].hidden){return null;}else{return allObjects[args.elemID].hidden;}
			}  
		}
		     
    },
  
 
   
/** +brief Object Definition Storage
*  &info - This stores each rendered elements definition into a global
*          variable, allObjects.  If there is no ID present, an ID will
*          be generated.  All rendered elements MUST have an ID, one way
*          or another.
*  EX:  allObjects.btn_ButtonID.label
*  @element - DOM object
*  @args - passed array settings making up the elements definition.
*/	  
    definition:function(element, args){
        //Clones args to prevent references and altering stored templates.
        var object = Object.create(args);
        objectCount += 1;
        if(object.id){
            allObjects[object.id] = {id:object.id, objectNumber:objectCount};
            $(element).attr('id', object.id);
            
        }else{
            var genID = object.type+'_'+objectCount;
            allObjects[genID] = {id:genID, objectNumber:objectCount};
            $(element).attr('id', genID);     
        } 
        element = LCARS.settings.set(element, object)

        return element;    
    },

   
/** +brief LCARS.create
 *  @keys - Keys are the same as the {type:value} of an objects definition.
 *          THESE MUST MATCH!
 *  >return - All LCARS.xxx.create/LCARS.settings.xxx calls MUST RETURN the created object.
 *  !note - The built in calls are meant to cover the main basic elements.
 *          There are a couple basic elements missing, which will be included
 *          in future versions.
 *  !note - Extensibility:  The reason the $.fn.createObject(); is universal, along with
 *          the unlimited settings, is beause of the KEY/TYPE relationship.  Extend the LCARS.xxx
 *          with additional code going 'LCARS.newObjectName.create = function(args){ //Do Something }
 *          and use the 'newObject' KEY as the element type '{type:'newObject'}
 *  
 *          Override universal settings by applying the setting key name under the element
 *          expression.  ex.  LCARS.complexButton.settings.label.  The LCARS.get/LCARS.set
 *          will use them instead of the native setting handling.
 *
 *  @LCARS.dialog - This is a generic call that has optinal settings to auto generate
 *                      header and footer title text.
 *  @args.appendTo - string selector for DOM element w/ id/class/other selector symbol.  ex.
 *                   {type:'button', color:'red', appendTo:'#customElement'}
 */	
    button:{
        create:function(args){
            if(args.href !== undefined){var element = $('<a class="button">');}else{var element = $('<div class="button">');}            
            element = LCARS.definition(element, args);
            return element;
        }
    },

    elbow:{
        create:function(args){
            if(args.href !== undefined){
                var element = $('<a class="elbow"><div class="bar"><div class="block"></div></div></a>');
            }else{
                var element =  $('<div class="elbow"><div class="bar"><div class="block"></div></div></div>');
            }	
			if(args.size === undefined){
				args.size = 'default'
			}
			if(args.orient === undefined){
				args.orient = 'horizontal'
			}
            element = LCARS.definition(element, args);                            
            return element;	    
        }
    },

    bar: {
        create:function(args){
            var element =  $('<div class="bar"></div>');					            
            element = LCARS.definition(element, args);    						            
            return element;	
        }
    },

    cap:{
        create:function(args){
            var element =  $('<div class="cap"></div>');					            
            element = LCARS.definition(element, args);            
            return element;	
        }
    },

    block:{
        create:function(args){
            var element =  $('<div class="block"></div>');					            
            element = LCARS.definition(element, args);            
            return element;
        }
    },

    oval:{
        create:function(args){
            var element =  $('<div class="oval"></div>');					            
            element = LCARS.definition(element, args);            
            return element;
        }
    },

    complexButton:{
        create:function(args){
            if(args.href !== undefined){var element = $('<a class="complexButton">');}else{var element = $('<div class="complexButton">');}           
            if(args.template){        
                $(args.template).each(function(){               
                    var elementChild = LCARS[this.type].create(this);
                    $(element).append(elementChild);
                });
            }
            if(args.colors){
                saveColors = [];
                for (i = 0; i < args.colors.length; i++) { 
                    saveColors.push(args.colors[i]);
                }
                args.colors = [];
                element = LCARS.definition(element, args);
                args.colors = saveColors;
                element = LCARS.settings.set(element, {colors:saveColors});
            }else{
                element = LCARS.definition(element, args);
            }
            return element;	  
        },
        
        settings:{
            label:function(args){
                if(args.set === true){
                    var elemBtn = $(args.element).find('.button');
                    var btnID = $(elemBtn).attr('id');
                    if(args.args.label === null && args.original.label != null){     
                        $(elemBtn).removeAttr('data-label');
                        allObjects[args.elemID].label = null;
                        allObjects[btnID].label = null;
                    }else if(typeof args.args.label === 'string'){
                        $(elemBtn).attr('data-label', args.args.label);             
                        allObjects[args.elemID].label = args.args.label;
                        allObjects[btnID].label = args.args.label;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].label){return null;}else{return allObjects[args.elemID].label;}

                }  
            },
            
            altLabel:function(args){
                if(args.set === true){
                    var elemBtn = $(args.element).find('.button');
                    var btnID = $(elemBtn).attr('id');
                    if(args.args.altLabel === null && args.original.altLabel != null){     
                        $(elemBtn).removeAttr('data-altLabel');
                        allObjects[args.elemID].altLabel = null;
                        allObjects[args.btnID].altLabel = null;
                    }else if(typeof args.args.altLabel === 'string'){
                        $(elemBtn).attr('data-altLabel', args.args.altLabel);             
                        allObjects[args.elemID].altLabel = args.args.altLabel;
                        allObjects[args.btnID].altLabel = args.args.altLabel;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].altLabel){return null;}else{return allObjects[args.elemID].altLabel;}

                }  
            },
			
            text:function(args){
                if(args.set === true){  
                    var elemNB = $(args.element).find('.text');
					if(args.args.text === null && args.original.text != null){     
						$(elemNB).text('');
						allObjects[args.elemID].text = null;
						$(elemNB).width(0);
					}else{
						var textLength = args.args.text.length;
						console.log(textLength);
						var textWidth = (textLength * 25) + ((textLength-1) * 5) + 10;
						$(elemNB).width(textWidth);
						$(elemNB).text(args.args.text);
						allObjects[args.elemID].text = args.args.text;
					}                
				       
                    allObjects[args.elemID].text = args.args.text;
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].text){return null;}else{return allObjects[args.elemID].text;}
                }                
            }            
        }   
    },

    radioInput:{
        create:function(args){       
            var element = $('<input type="radio">')
            element = LCARS.definition(element, args);
            return element;	
        }
    },

    radio:{
        create:function(args){
            var element = $('<div class="complexButton radio">');         
            if(args.template){        
                $(args.template).each(function(){               
                    var elementChild = LCARS[this.type].create(this);
                    $(element).append(elementChild);
                });
            }
            if(args.colors){
                saveColors = [];
                for (i = 0; i < args.colors.length; i++) { 
                    saveColors.push(args.colors[i]);
                }
                args.colors = [];
                element = LCARS.definition(element, args);
                args.colors = saveColors;
                element = LCARS.settings.set(element, {colors:saveColors});
            }else{
                element = LCARS.definition(element, args);
            }
            return element;	  
        },
        
        settings:{
            label:function(args){
                if(args.set === true){
                    var elemBtn = $(args.element).find('.button');
                    var btnID = $(elemBtn).attr('id');
                    if(args.args.label === null && args.original.label != null){     
                        $(elemBtn).removeAttr('data-label');
                        allObjects[args.elemID].label = null;
                        allObjects[btnID].label = null;
                    }else if(typeof args.args.label === 'string'){
                        $(elemBtn).attr('data-label', args.args.label);             
                        allObjects[args.elemID].label = args.args.label;
                        allObjects[btnID].label = args.args.label;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].label){return null;}else{return allObjects[args.elemID].label;}

                }  
            },
            
            altLabel:function(args){
                if(args.set === true){
                    var elemBtn = $(args.element).find('.button');
                    var btnID = $(elemBtn).attr('id');
                    if(args.args.altLabel === null && args.original.altLabel != null){     
                        $(elemBtn).removeAttr('data-altLabel');
                        allObjects[args.elemID].altLabel = null;
                        allObjects[args.btnID].altLabel = null;
                    }else if(typeof args.args.altLabel === 'string'){
                        $(elemBtn).attr('data-altLabel', args.args.altLabel);             
                        allObjects[args.elemID].altLabel = args.args.altLabel;
                        allObjects[args.btnID].altLabel = args.args.altLabel;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].altLabel){return null;}else{return allObjects[args.elemID].altLabel;}

                }  
            },
			
            text:function(args){
                if(args.set === true){  
                    var elemNB = $(args.element).find('.text');
					if(args.args.text === null && args.original.text != null){     
						$(elemNB).text('');
						allObjects[args.elemID].text = null;
						$(elemNB).width(0);
					}else{
						var textLength = args.args.text.length;
						var textWidth = (textLength * 25) + ((textLength-1) * 5) + 10;
						$(elemNB).width(textWidth);
						$(elemNB).text(args.args.text);
						allObjects[args.elemID].text = args.args.text;
					}                
				       
                    allObjects[args.elemID].text = args.args.text;
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].text){return null;}else{return allObjects[args.elemID].text;}
                }                
            }            
        }   
    },

    checkboxInput:{
        create:function(args){       
            var element = $('<input type="checkbox">')
            element = LCARS.definition(element, args);
            return element;
        }
    },        

    checkbox:{
        create:function(args){
            var element = $('<div class="complexButton checkbox">');         
            if(args.template){        
                $(args.template).each(function(){               
                    var elementChild = LCARS[this.type].create(this);
                    $(element).append(elementChild);
                });
            }
            if(args.colors){
                saveColors = [];
                for (i = 0; i < args.colors.length; i++) { 
                    saveColors.push(args.colors[i]);
                }
                args.colors = [];
                element = LCARS.definition(element, args);
                args.colors = saveColors;
                element = LCARS.settings.set(element, {colors:saveColors});
            }else{
                element = LCARS.definition(element, args);
            }
            return element;	  
        },
        
        settings:{
            label:function(args){
                if(args.set === true){
                    var elemBtn = $(args.element).find('.button');
                    var btnID = $(elemBtn).attr('id');
                    if(args.args.label === null && args.original.label != null){     
                        $(elemBtn).removeAttr('data-label');
                        allObjects[args.elemID].label = null;
                        allObjects[btnID].label = null;
                    }else if(typeof args.args.label === 'string'){
                        $(elemBtn).attr('data-label', args.args.label);             
                        allObjects[args.elemID].label = args.args.label;
                        allObjects[btnID].label = args.args.label;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].label){return null;}else{return allObjects[args.elemID].label;}

                }  
            },
            
            altLabel:function(args){
                if(args.set === true){
                    var elemBtn = $(args.element).find('.button');
                    var btnID = $(elemBtn).attr('id');
                    if(args.args.altLabel === null && args.original.altLabel != null){     
                        $(elemBtn).removeAttr('data-altLabel');
                        allObjects[args.elemID].altLabel = null;
                        allObjects[args.btnID].altLabel = null;
                    }else if(typeof args.args.altLabel === 'string'){
                        $(elemBtn).attr('data-altLabel', args.args.altLabel);             
                        allObjects[args.elemID].altLabel = args.args.altLabel;
                        allObjects[args.btnID].altLabel = args.args.altLabel;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].altLabel){return null;}else{return allObjects[args.elemID].altLabel;}

                }  
            },
			
            text:function(args){
                if(args.set === true){  
                    var elemNB = $(args.element).find('.text');
					if(args.args.text === null && args.original.text != null){     
						$(elemNB).text('');
						allObjects[args.elemID].text = null;
						$(elemNB).width(0);
					}else{
						var textLength = args.args.text.length;
						var textWidth = (textLength * 25) + ((textLength-1) * 5) + 10;
						$(elemNB).width(textWidth);
						$(elemNB).text(args.args.text);
						allObjects[args.elemID].text = args.args.text;
					}                
				       
                    allObjects[args.elemID].text = args.args.text;
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].text){return null;}else{return allObjects[args.elemID].text;}
                }                
            }            
        }   
    },

    wrapper:{
        create:function(args){
            var element = $('<div class="wrapper"></div>');            
            element = LCARS.definition(element, args);  
            
            return element;	
        }
    },
	
    content:{
        create:function(args){
            var element = $('<div class="content"></div>');            
            element = LCARS.definition(element, args);  
            
            return element;	
        }
    },
	
    column:{
        create:function(args){
            var element = $('<div class="column"></div>');            
            element = LCARS.definition(element, args);  
            
            return element;	
        }
    },
	
    row:{
        create:function(args){
            var element = $('<div class="row"></div>');            
            element = LCARS.definition(element, args);  
            
            return element;	
        }
    },		

    title:{
        create:function(args){
            var element = $('<div>'+args.text+'</div>');					
            element = LCARS.definition(element, args);
            return element;
        }
    },

    text:{
        create:function(args){
            var element = $('<div>'+args.text+'</div>');					
            element = LCARS.definition(element, args);
            return element;
        }
    },

    img:{
        create:function(args){
            var element = $('<img>');					
            element = LCARS.definition(element, args);            
            return element;	 
        }
    },

    svg:{
        create:function(args){
            var element = $(args.xml);	
            element = LCARS.definition(element, args);               
            return element;	
        }
    },

    textInput:{
        create:function(args){
            if(args.password === true){
                var element = $('<input type="password" />');					
            }else{
                var element = $('<input type="text" />');					
            }  
            element = LCARS.definition(element, args);
            return element;
        }
    },

    bracket:{
        create:function(args){
            if(args.id){args.template.id = args.id;}
            var element = LCARS[args.template.type].create(args.template);
            element = LCARS.definition(element, args);
            return element;		
        }
    },

    dialog:{
        create:function(args){
            if(args.id){args.template.id = args.id;}
            var element = LCARS[args.template.type].create(args.template);
            element = LCARS.definition(element, args);
            return element;	        
        }, 
        
        settings:{
            headerTitle:function(args){
                var headerTitle = $(args.element).find('.header').children('.title');
                var titleID = $(headerTitle).attr('id');
                if(args.set === true){
                    if(args.args.headerTitle === null && args.original.headerTitle != null){     
                        $(headerTitle).text('');
                        allObjects[args.elemID].headerTitle = null;
                        allObjects[titleID].text = null;
                    }else if(typeof args.args.headerTitle === 'string'){
                        $(headerTitle).html(args.args.headerTitle);
                        allObjects[args.elemID].headerTitle = args.args.headerTitle;
                        allObjects[titleID].text = args.args.headerTitle;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].headerTitle){return null;}else{return allObjects[args.elemID].headerTitle;}
                }            
                return args.element;
            },
            
            footerTitle:function(args){
                var footerTitle = $(args.element).find('.footer').children('.title');
                var titleID = $(footerTitle).attr('id');
                if(args.set === true){
                    if(args.args.footerTitle === null && args.original.footerTitle != null){     
                        $(footerTitle).text('');
                        allObjects[args.elemID].footerTitle = null;
                        allObjects[titleID].text = null;
                    }else if(typeof args.args.footerTitle === 'string'){
                        $(footerTitle).html(args.args.footerTitle);
                        allObjects[args.elemID].footerTitle = args.args.footerTitle;
                        allObjects[titleID].text = args.args.footerTitle;
                    }
                    return args.element;
                }else{
                    if(!allObjects[args.elemID].footerTitle){return null;}else{return allObjects[args.elemID].footerTitle;}
                }            
                return args.element;             
            },
			
			content:function(args){console.log('asdf');  
				if(Array.isArray(args.args.content)){
					$(args.args.content).each(function(){
						var childElement = LCARS[this.type].create(this);
						$(args.element).children('.content').append(childElement);         
						 
					});                                   
				}else if(typeof args.args.children === 'string'){
					$(args.element).children('.content').append(args.args.content);
				}
				allObjects[args.elemID].content = args.args.content;
				return args.element;
			}
			
        }
		        
    },
    
    htmlTag:{
        create:function(args){
            var element = $('<'+args.tag+'>');
            element = LCARS.definition(element, args);
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


//Used to sort alphabetically within an array.
function compare(a,b) {
  if (a.label < b.label)
     return -1;
  if (a.label > b.label)
    return 1;
  return 0;
}


/** + brief Checkbox/Radio Check State
*
*   This SDK, while providing an API for standard input form elements,
*	utilizes normal buttons and simulates the checked state on 
*	the element.
*
**/


function radioCheckboxState(func){
    var elemID = $(this).attr('id');
    if($(this).hasClass('checkbox')){
        if(allObjects[elemID].checked === true){
            $(this).removeClass('checked');   
            allObjects[elemID].checked = false;
        }else{      
            $(this).addClass('checked');
            allObjects[elemID].checked = true;
        }
    }else{ 
        if(allObjects[elemID].checked !== true){
            var nameGroup = allObjects[elemID].name;
            $(this).addClass('checked');
            allObjects[elemID].checked = true;
            $('[name="'+nameGroup+'"].checked').each(function(){
                var inputID = $(this).attr('id');
				if(inputID !== elemID){
					allObjects[inputID].checked = false;
					$(this).removeClass('checked');   
				}
            });
        }  
    }
	func.apply(this, []);
}

/** + brief $.fn Calls
*   
*   The SDK provides a handful of $.api calls for easy object
*   creation, manipulation and deletion. 
*
*   !note - Use the $.removeObject() when deleting an object from the
*           scene for proper cleanup within the environment.  
*           
*           DO NOT USE native $.remove() any object that has a stored definition.
*
*   The SDK does not provide $.api wrappers per specific settings, only a single universal
*   controller is provided, $.objectSettings();
*
*   An example would be $.objectLabel(); -> pass string - sets / pass nothing - returns
*   These are easy to create per a projects needs and are likely to be customized 
*   accordingly so not provided here.
*
*/

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
        var element = LCARS[this.type].create(this);
        
        if(args.appendTo == undefined && this.appendTo == undefined || args.return === true){return element; }else
        if(args.appendTo !== undefined){$(''+args.appendTo+'').append(element); setTimeout(function(){if(typeof this.success  === 'function'){this.success();}},0); }else
        if(args.appendTo == undefined && this.appendTo !== undefined){$(''+this.appendTo+'').append(element); setTimeout(function(){if(typeof this.success  === 'function'){this.success();}},0);}
    });
    setTimeout(function(){if(typeof args.success  === 'function'){args.success();}}, args.timing + 0);
}

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
    if(typeof success === 'function'){setTimeout(function(){success();}, timing_sequence);}
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
    if(!args.timing){args.timing = 0;}
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
        setTimeout(function(){ $(array).removeObjectSequence({timing:args.timing, number:numberStart+1, success:args.success}); }, timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
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
    if(!args.timing){args.timing = 0;}
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).removeClass('hidden');
        $(object).css('opacity', '1');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }else{
        $(object).removeClass('hidden');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }    
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).showObjectSequence({timing:args.timing, number:numberStart+1, success:args.success}); }, args.timing+timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
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
    if(!args.timing){args.timing = 0;}
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).css('opacity', '0');
        setTimeout(function(){$(object).addClass('hidden');}, args.timing+timing_sequence);
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].hide === 'function'){setTimeout(function(){allObjects[objectID].hide();}, args.timing+timing_sequence);}}
    }else{
        $(object).addClass('hidden');
        if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].hide === 'function'){setTimeout(function(){allObjects[objectID].hide();}, args.timing+timing_sequence);}}
    } 
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).hideObjectSequence({timing:args.timing, number:numberStart+1, success:args.success}); }, args.timing+timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    }  
}


/** +brief Object Setting
 *  ex. $.fn.objectSettings({color:'red'}, function(){});
 *  ex. $.fn.objectSettings('color', {secondary:arg}, function(){});
 *  @setting - Setting(s) to change.  Matches setting name used in object definitions.
 *  @args - Secondary set of arguments that can be passed when getting.
 *  >return - Pass String Name - $.fn.objectSettings('color'); 
 *
 *  !note - Look to each setting for proper value type to be
 *          passed through the settings.  Most settings use string/null
 *          as the set/get flags.  Some settings, like class, use a
 *          string/array combination to apply and remove class names.
 */	    
$.fn.objectSettings = function(setting, args, success){		
    if(typeof setting === 'string'){ 
        if(typeof args === 'function'){args();}
        if(typeof success === 'function'){success();}
        return LCARS.settings.get($(this), setting, args);
    }else{ 
        $(this).each(function(){
            LCARS.settings.set($(this), setting);
        });
        if(typeof args === 'function'){args();}
        return this; 
    }  
}

/** +brief Get Definition
*   @id - boolean, if true returns ID strings else definition objects.
*   >return - {} else null.
*	!note:  Pass only a single object.
**/	
$.fn.getDefinition = function(){
    var elemID = $(this).attr('id');
    if(allObjects[elemID]){
        return allObjects[elemID];
    }else{
        return null;
    }
}

/** +brief Get Children
*   
*   >return - [].
*	!note:  Pass only a single object.
**/	
$.fn.getChildren = function(id){ 
    var allChildren = []
    $(this).children().each(function(){
        var elemID = $(this).attr('id');
        if(id === true){
            allChildren.push(elemID);
        }else{
            allChildren.push(allObjects[elemID]);    
        }
    });
    return allChildren;
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
        window.addEventListener("resize", function(event) {
            LCARS.scaler(args.width, args.height, element, args.max); 
        });
        
    }else if(action === 'childScale'){
        LCARS.childScale(args.width, args.height, element, args.max);
        window.addEventListener("resize", function(event) {
            LCARS.childScale(args.width, args.height, element, args.max); 
        });
        
    }else if(action === 'zoom'){
        LCARS.zoom(args.width, args.height);
        window.addEventListener("resize", function(event) {
            LCARS.zoom(args.width, args.height);    
        });   
        
    }else if(action === 'childZoom'){
        LCARS.childZoom(args.width, args.height);
        window.addEventListener("resize", function(event) {
            LCARS.childZoom(args.width, args.height);    
        });    
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


/** +brief Element Scrolling
 *	@arg - {target:object, step:int}
 *	@arg - ex. {target:'body', step:65}
 *	!note:  Pass only a single object.
 */	
$.fn.scrollingUp = function(args){    
    $(args.target).each(function(){
       var scrollVal = $(this).scrollTop();
	   $(this).scrollTop(scrollVal-args.step);
    });  
}

$.fn.scrollingDown = function(args){    
    $(args.target).each(function(){
       var scrollVal = $(this).scrollTop();
	   $(this).scrollTop(scrollVal+args.step);
    });
    
}

$.fn.scrollingLeft = function(args){   
   $(args.target).each(function(){ 
        var scrollVal = $(this).scrollLeft();
	   $(this).scrollLeft(scrollVal-args.step);
   });
}

$.fn.scrollingRight = function(args){    
    $(args.target).each(function(){
        var scrollVal = $(this).scrollLeft();	
        $(this).scrollLeft(scrollVal+args.step); 
    });
}

/** LCARS SDK
* This file is a part of the LCARS SDK.
* It is licensed under the Creative Commons Attribution-NonCommercial 4.0 International  (CC BY-NC 4.0).
* For more information please go to http://www.lcarssdk.org.
**/

/** Scroll Button
* A scroll button is a horizontal or vertical duo element
* that displays two triangles and scrolls content.
**/

sdkAddonTemplates.scrollButton = {
        typeAV:{type:'wrapper', class:'sdk widget complexButton scrollButton typeAV duo vertical ', children:[
                {type:'button', class:'up'}, 
                {type:'button', class:'down'}        
            ]
        },
        typeAH:{type:'wrapper', class:'sdk widget complexButton scrollButton typeAH duo', children:[
                {type:'button', class:'left'}, 
                {type:'button', class:'right'}               
            ]
        }        
    }


LCARS.create.scrollButton = function(args){
    var element = LCARS.create[args.template.type](args.template);
    if($(element).find('.left').length !== -1){
        LCARS.oncreateEvents($(element).find('.left'), {
            click:function(){$(this).scrollLeft({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollLeft({target:args.target, step:args.step});}
        });              
        LCARS.oncreateEvents($(element).find('.right'), {
            click:function(){$(this).scrollRight({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollRight({target:args.target, step:args.step});}
        });                      
    }

    if($(element).find('.up').length !== -1){
        LCARS.oncreateEvents($(element).find('.up'), {
            click:function(){$(this).scrollUp({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollUp({target:args.target, step:args.step});}
        });              
        LCARS.oncreateEvents($(element).find('.down'), {
            click:function(){$(this).scrollDown({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollDown({target:args.target, step:args.step});}
        });  
    }
    element = LCARS.setObjectSettings(element, args);
    return element;
}
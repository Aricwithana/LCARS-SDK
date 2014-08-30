/** LCARS SDK 14241.1
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
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
    if(args.id){args.template.id = args.id;}
    var element = LCARS.create[args.template.type](args.template);

    if($(element).find('.left').length !== -1){
          
        $(element).find('.left').objectSettings({
            click:function(){$(this).scrollLeft({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollLeft({target:args.target, step:args.step});}
        });
        
        $(element).find('.right').objectSettings({
            click:function(){$(this).scrollRight({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollRight({target:args.target, step:args.step});}
        });
       
    }

    if($(element).find('.up').length !== -1){
        
        $(element).find('.up').objectSettings({
            click:function(){$(this).scrollUp({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollUp({target:args.target, step:args.step});}
        });
              
        $(element).find('.down').objectSettings({
            click:function(){$(this).scrollDown({target:args.target, step:args.step});}, 
            tap:function(){$(this).scrollDown({target:args.target, step:args.step});}
        }); 

    }
    element = LCARS.objectDefinition(element, args, true);
    return element;
}
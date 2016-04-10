/** LCARS SDK 16098.3
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

/** Scroll Button
* A scroll button is a horizontal or vertical duo element
* that displays two triangles and scrolls content.
**/

LCARS.templates.sdk.scrollButton = {
        typeAV:{type:'wrapper', class:'addon sdk complexButton scrollButton typeAV duo vertical ', children:[
                {type:'button', class:'up'}, 
                {type:'button', class:'down'}        
            ]
        },
        typeAH:{type:'wrapper', class:'addon sdk complexButton scrollButton typeAH duo', children:[
                {type:'button', class:'left'}, 
                {type:'button', class:'right'}               
            ]
        }        
    }


LCARS.scrollButton = {

    create:function(args){
        if(!args.template){args.template = $.extend(true, {}, LCARS.templates.sdk.scrollButton.typeAV);}
        
        if(args.id){args.template.id = args.id;}
        
        var element = LCARS[args.template.type].create(args.template);

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
        element = LCARS.definition(element, args);
        return element;
    }
}
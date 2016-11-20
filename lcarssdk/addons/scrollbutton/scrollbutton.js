/** LCARS SDK 16323.311
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
                {type:'button', class:'scrollUp'}, 
                {type:'button', class:'scrollDown'}        
            ]
        },
        typeAH:{type:'wrapper', class:'addon sdk complexButton scrollButton typeAH horizontal duo', children:[
                {type:'button', class:'scrollLeft'}, 
                {type:'button', class:'scrollRight'}               
            ]
        }        
    }


LCARS.scrollButton = {

    create:function(args){
        if(!args.template){args.template = $.extend(true, {}, LCARS.templates.sdk.scrollButton.typeAV);}
        
        if(args.id){args.template.id = args.id;}
        
        var element = LCARS[args.template.type].create(args.template);

        if($(element).find('.scrollLeft').length !== -1){

            $(element).find('.scrollLeft').objectSettings({
                click:function(){$(this).scrollingLeft({target:args.target, step:args.step});}, 
                tap:function(){$(this).scrollingLeft({target:args.target, step:args.step});}
            });

            $(element).find('.scrollRight').objectSettings({
                click:function(){$(this).scrollingRight({target:args.target, step:args.step});}, 
                tap:function(){$(this).scrollingRight({target:args.target, step:args.step});}
            });

        }

        if($(element).find('.scrollUp').length !== -1){

            $(element).find('.scrollUp').objectSettings({
                click:function(){$(this).scrollingUp({target:args.target, step:args.step});}, 
                tap:function(){$(this).scrollingUp({target:args.target, step:args.step});}
            });

            $(element).find('.scrollDown').objectSettings({
                click:function(){$(this).scrollingDown({target:args.target, step:args.step});}, 
                tap:function(){$(this).scrollingDown({target:args.target, step:args.step});}
            }); 

        }
        element = LCARS.definition(element, args);
        return element;
    }
}
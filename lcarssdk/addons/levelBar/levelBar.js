/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

/** +brief Level Bar
* Display numerical value as an animating bar
**/

LCARS.templates.sdk.levelBar = {
    typeA:{type:'wrapper', class:'addon sdk levelBar typeA', children:[
        {type:'bar'}, 
        {type:'cap'} 
    ]}     
};


LCARS.levelBar = {
    create:function(args){
        if(!args.template){args.template = $.extend(true, {}, LCARS.templates.sdk.levelBar.typeA);}
        if(args.id){args.template.id = args.id;}
        var element = LCARS[args.template.type].create(args.template);
        element = LCARS.definition(element, args);
        return element;
    }, 
    
    settings:{
        color:function(args){
            if(args.set === true){
                var elemBar = $(args.element).find('.bar');
                var barID = $(elemBar).attr('id');
                if(args.args.color === null && args.original.color != null){
                    allObjects[args.elemID].color = null;
                    LCARS.settings.set($(elemBar), {color:null});
                }else if(typeof args.args.color === 'string'){           
                    allObjects[args.elemID].color = args.args.color;
                    LCARS.settings.set($(elemBar), {color:args.args.color});
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].color){return null;}else{return allObjects[args.elemID].color;}

            }  
        },
        
        label:function(args){
            if(args.set === true){
                var elemBar = $(args.element).find('.bar');
                var barID = $(elemBar).attr('id');
                if(args.args.label === null && args.original.label != null){     
                    $(elemBar).removeAttr('data-label');
                    allObjects[args.elemID].label = null;
                    allObjects[barID].label = null;
                }else if(typeof args.args.label === 'string'){
                    $(elemBar).attr('data-label', args.args.label);             
                    allObjects[args.elemID].label = args.args.label;
                    allObjects[barID].label = args.args.label;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].label){return null;}else{return allObjects[args.elemID].label;}

            }  
        },

        altLabel:function(args){
            if(args.set === true){
                var elemBar = $(args.element).find('.bar');
                var barID = $(elemBar).attr('id');
                if(args.args.altLabel === null && args.original.altLabel != null){     
                    $(elemBar).removeAttr('data-altLabel');
                    allObjects[args.elemID].altLabel = null;
                    allObjects[barID].altLabel = null;
                }else if(typeof args.args.altLabel === 'string'){
                    $(elemBar).attr('data-altLabel', args.args.altLabel);             
                    allObjects[args.elemID].altLabel = args.args.altLabel;
                    allObjects[barID].altLabel = args.args.altLabel;
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].altLabel){return null;}else{return allObjects[args.elemID].altLabel;}

            } 
        },        
        
        level:function(args){
            if(args.set === true){
                var elemBar = $(args.element).find('.bar');
                if(args.args.level === null && args.original.level != null){     
                    
                    if(allObjects[args.elemID].orient === 'vertical' || args.args.direction === 'vertical'){
                       $(elemBar).css('height', 0+'%'); 
                    }else{
                       $(elemBar).css('width', 0+'%'); 
                    }
                    
                    allObjects[args.elemID].level = null;
                    
                    if(allObjects[args.elemID].label  && allObjects[args.elemID].labelLink === true){
                        LCARS.settings.set(args.element, {label:null});
                    }
                    
                    if(allObjects[args.elemID].altLabel  && allObjects[args.elemID].labelLink === true){
                        LCARS.settings.set(args.element, {altLabel:null});
                    }    
                    
                }else if(typeof args.args.level === 'number'){
                    
                    if(allObjects[args.elemID].orient === 'vertical' || args.args.direction === 'vertical'){
                        $(elemBar).css('height', 'calc('+args.args.level + '% - 10px)');     
                    }else{
                        $(elemBar).css('width', 'calc('+args.args.level + '% - 10px)');     
                    }
                               
                    allObjects[args.elemID].level = args.args.level;
                    if(allObjects[args.elemID].labelLink === 'label'){      
                        LCARS.settings.set(args.element, {label:''+args.args.level+''});
                    }
                    
                    if(allObjects[args.elemID].labelLink === 'altLabel'){
                        LCARS.settings.set(args.element, {altLabel:''+args.args.level+''});
                    }  
                }
                return args.element;
            }else{
                if(!allObjects[args.elemID].level){return null;}else{return allObjects[args.elemID].level;}

            }             
        }
    }
};
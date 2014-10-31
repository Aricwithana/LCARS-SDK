/** LCARS SDK
* This file is a part of the LCARS SDK.
* It is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0).
* For more information please go to http://www.lcarssdk.org.
**/

var sdkTemplates = {
    framingTemplates:{
        typeA:{
                        
        }        
    },
    
    dialogWindows:{
        typeA:{type:'wrapper', class:'sdk dialog typeA', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'barTitle'}, {type:'bar', flexC:'h'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'bar', flexC:'h'}, {type:'barTitle'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'content'}
            ]
        },
             
        typeAR:{type:'wrapper', class:'sdk dialog typeAR', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'bar', flexC:'h'}, {type:'barTitle'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'barTitle'}, {type:'bar', flexC:'h'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'content'}     
            ]
        },
        
        typeB:{type:'wrapper', class:'sdk dialog typeB', children:[
                {type:'elbow', version:'topLeftAlt', size:'medium', noEvent:true},
                {type:'elbow', version:'bottomLeftAlt', size:'medium', noEvent:true},
                {type:'elbow', version:'bottomRightAlt', size:'medium', noEvent:true},
                {type:'elbow', version:'topRightAlt', size:'medium', noEvent:true},
                {type:'wrapper', class:'content'},
                {type:'block'},
                {type:'block'},
                {type:'wrapper', class:'sdk widget complexButton scrollButton typeAV', flex:'v', children:[
                    {type:'button', class:'up', click:function(){$(this).scrollUp({step:65, target:$(this).parent().siblings('.content')})}, tap:function(){$(this).scrollUp({step:65, target:$(this).parent().siblings('.content')})}}, 
                    {type:'button', class:'down', click:function(){$(this).scrollDown({step:65, target:$(this).parent().siblings('.content')})}, tap:function(){$(this).scrollDown({step:65, target:$(this).parent().siblings('.content')})}}
                ]}
            ]
        },
        
        typeC:{type:'wrapper', class:'sdk dialog typeC', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', version:'left'}, {type:'barTitle'}, {type:'bar'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', version:'left'}, {type:'bar'}, {type:'barTitle'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'content'}
            ]
        },
             
        typeCR:{type:'wrapper', class:'sdk dialog typeCR', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', version:'left'}, {type:'bar', flexC:'h'}, {type:'barTitle'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', version:'left'}, {type:'barTitle'}, {type:'bar', flexC:'h'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'content'}     
            ]
        }         
        
    },
    //Complex Buttons do not follow standard templating.  Wrapper is created with create call.
    complexButtons:{
        typeA:[{type:'button', version:'tabLeft'}, {type:'block'}],
        typeAR:[{type:'block'}, {type:'button', version:'tabRight'}],
        typeB:[{type:'cap', version:'left'}, {type:'button'}],
        typeBR:[{type:'button'}, {type:'cap', version:'right'}],
        typeC:[{type:'button'}, {type:'block'}, {type:'block'}],
        typeCR:[{type:'block'}, {type:'block'}, {type:'block'}],
        typeD:[{type:'cap', version:'left'}, {type:'button'}, {type:'block'}],
        typeDR:[{type:'block'}, {type:'button'}, {type:'cap', version:'right'}]                
    },
    //Numeric Buttons do not follow standard templating.  Wrapper is created with create call.   
    numericButtons:{
		typeA:[{type:'cap', version:'left'}, {type:'numericBlock'}, {type:'button'}],
		typeAR:[{type:'button'}, {type:'numericBlock'}, {type:'cap', version:'right'}],		
        typeB:[{type:'numericBlock'}, {type:'button'}],
		typeBR:[{type:'button'}, {type:'numericBlock'}],
        typeC:[{type:'block'}, {type:'numericBlock'}, {type:'button'}],
        typeCR:[{type:'button'}, {type:'numericBlock'},{type:'block'}],
        typeD:[{type:'numericBlock'}, {type:'button'}, {type:'bar'}],
        typeDR:[{type:'block'}, {type:'button'}, {type:'numericBlock'}],
        typeE:[{type:'cap', version:'left'}, {type:'button'}, {type:'numericBlock'}],
        typeER:[{type:'numericBlock'}, {type:'button'}, {type:'cap', version:'right'}],
        typeF:[{type:'cap', version:'left'}, {type:'button'}, {type:'block'}, {type:'numericBlock'}, {type:'block'}],
        typeFR:[{type:'block'}, {type:'numericBlock'}, {type:'block'}, {type:'button'}, {type:'cap', version:'right'}]       
    },
    //Radio Buttons do not follow standard templating.  Wrapper is created with create call.
    radioButtons:{
        typeA:[{type:'cap'},{type:'bar', class:'checkBlock'}, {type:'button'}],
        typeAR:[{type:'button'}, {type:'bar', class:'checkBlock'}, {type:'cap'}],  
        typeB:[{type:'cap', version:'left'},{type:'bar', class:'checkBlock'}, {type:'button'}],
        typeBR:[{type:'button'}, {type:'bar', class:'checkBlock'}, {type:'cap', version:'right'}],               
    },
    //Numeric Radioo Buttons do not follow standard templating.  Wrapper is created with create call.   
    numericRadioButtons:{
		typeA:[{type:'cap'},{type:'bar', class:'checkBlock'}, {type:'numericBlock'},{type:'button'}],
		typeAR:[{type:'button'}, {type:'numericBlock'}, {type:'bar', class:'checkBlock'}, {type:'cap'}],
		typeB:[{type:'cap'},{type:'bar', class:'checkBlock'}, {type:'bar', class:'checkBlock'}, {type:'numericBlock'},{type:'button'}],
		typeBR:[{type:'button'}, {type:'numericBlock'}, {type:'bar', class:'checkBlock'}, {type:'bar', class:'checkBlock'}, {type:'cap'}], 
		typeC:[{type:'cap', version:'left'},{type:'bar', class:'checkBlock'}, {type:'numericBlock'},{type:'button'}],
		typeCR:[{type:'button'}, {type:'numericBlock'}, {type:'bar', class:'checkBlock'}, {type:'cap', version:'right'}],
		typeD:[{type:'cap', version:'left'},{type:'bar', class:'checkBlock'}, {type:'bar', class:'checkBlock'}, {type:'numericBlock'},{type:'button'}],
		typeDR:[{type:'button'}, {type:'numericBlock'}, {type:'bar', class:'checkBlock'}, {type:'bar', class:'checkBlock'}, {type:'cap', version:'right'}], 
		
    },    
    //Checkbox Buttons do not follow standard templating.  Wrapper is created with create call.
    checkboxButtons:{
        typeA:[{type:'cap'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'button'}],
        typeAR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'cap'}],  
        typeB:[{type:'cap', version:'left'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'button'}],
        typeBR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'cap', version:'right'}],              
    },
    //Numeric Checkbox Buttons do not follow standard templating.  Wrapper is created with create call.   
    numericCheckboxButtons:{
		typeA:[{type:'cap'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'numericBlock'},{type:'button'}],
		typeAR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'cap'}],
		typeB:[{type:'cap', version:'left'}, {type:'block', class:'checkBlock'}, {type:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'button'}],
		typeBR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'cap', version:'right'}]			      
    }, 
    brackets:{
        typeA:{type:'wrapper', class:'sdk bracket typeA', children:[
                {type:'wrapper', class:'content'},
                {type:'elbow', version:'topLeft', size:'small', class:'backet_typeA_elbow1', color:'grey', children:[{type:'bar'}], noEvent:true},	
                {type:'elbow', version:'topRight', size:'small', class:'backet_typeA_elbow2', color:'grey', children:[{type:'bar'}], noEvent:true},	
                {type:'elbow', version:'bottomLeft', size:'small', class:'backet_typeA_elbow3', color:'grey', children:[{type:'bar'}], noEvent:true},	
                {type:'elbow', version:'bottomRight', size:'small', class:'backet_typeA_elbow4', color:'grey', children:[{type:'bar'}], noEvent:true},        
                {type:'wrapper', class:'wrapper_leftColumn1', flex:'v', children:[
                    {type:'bar', class:'backet_typeA_leftColumn1_bar1', color:'grey'},
                    {type:'bar', class:'backet_typeA_leftColumn1_bar2', color:'grey', children:[{type:'bar', color:'white'}]},
                    {type:'bar', class:'backet_typeA_leftColumn1_bar3', color:'grey'}                     
                ]},
                {type:'wrapper', class:'wrapper_leftColumn2', flex:'v', children:[
                    {type:'bar', class:'backet_typeA_leftColumn2_bar1', color:'grey'},
                    {type:'bar', class:'backet_typeA_leftColumn2_bar1', color:'grey'},
                    {type:'bar', class:'backet_typeA_leftColumn2_bar3', color:'grey'}                     
                ]},
                {type:'wrapper', class:'wrapper_leftColumn3', flex:'v', children:[
                    {type:'bar', class:'backet_typeA_leftColumn3_bar1', color:'grey'},
                    {type:'bar', class:'backet_typeA_leftColumn3_bar2', color:'grey', children:[{type:'bar', color:'white'}]},
                    {type:'bar', class:'backet_typeA_leftColumn3_bar3', color:'grey'}                     
                ]},
                {type:'wrapper', class:'wrapper_leftColumn4', flex:'v', children:[
                    {type:'bar', class:'backet_typeA_leftColumn4_bar1', color:'grey'},
                    {type:'bar', class:'backet_typeA_leftColumn4_bar2', color:'grey'},
                    {type:'bar', class:'backet_typeA_leftColumn4_bar3', color:'grey'}                     
                ]}       
            ]
        }                
    }
}


       

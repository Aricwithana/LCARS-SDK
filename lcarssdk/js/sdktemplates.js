/** LCARS SDK 15088.21
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

var sdkTemplates = {
    framingTemplates:{
        typeA:{
                        
        }        
    },
    
    dialogWindows:{
        typeA:{type:'wrapper', class:'sdk dialog typeA', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'title', size:'half'}, {type:'bar', flexC:'h'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'bar', flexC:'h'}, {type:'title', size:'half'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'content'}
            ]
        },
             
        typeAR:{type:'wrapper', class:'sdk dialog typeAR', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'bar', flexC:'h'}, {type:'title', size:'half'}, {type:'cap', size:'small', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'title', size:'half'}, {type:'bar', flexC:'h'}, {type:'cap', size:'small', version:'right'}]},
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
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', version:'left'}, {type:'title', size:'half'}, {type:'bar'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', version:'left'}, {type:'bar'}, {type:'title', size:'half'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'content'}
            ]
        },
             
        typeCR:{type:'wrapper', class:'sdk dialog typeCR', children:[
                {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', version:'left'}, {type:'bar', flexC:'h'}, {type:'title', size:'half'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', version:'left'}, {type:'title', size:'half'}, {type:'bar', flexC:'h'}, {type:'cap', version:'right'}]},
                {type:'wrapper', class:'content'}     
            ]
        },
        
        typeT:{type:'wrapper', class:'sdk dialog typeT', flexC:'v', children:[
                {type:'wrapper', class:'header row', flex:'h', children:[{type:'cap', size:'tiny', version:'left'}, {type:'bar', flexC:'h'}, {type:'cap', size:'tiny', version:'right'}]},
                {type:'wrapper', class:'footer row', flex:'h', children:[{type:'cap', size:'tiny', version:'left'}, {type:'bar', flexC:'h'}, {type:'cap', size:'tiny', version:'right'}]},
                {type:'wrapper', class:'content', flex:'v'}
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
		typeA:[{type:'cap', version:'left'}, {type:'block', class:'numericBlock'}, {type:'button'}],
		typeAR:[{type:'button'}, {type:'block', class:'numericBlock'}, {type:'cap', version:'right'}],		
        typeB:[{type:'block', class:'numericBlock'}, {type:'button'}],
		typeBR:[{type:'button'}, {type:'block', class:'numericBlock'}],
        typeC:[{type:'block'}, {type:'block', class:'numericBlock'}, {type:'button'}],
        typeCR:[{type:'button'}, {type:'block', class:'numericBlock'},{type:'block'}],
        typeD:[{type:'block', class:'numericBlock'}, {type:'button'}, {type:'bar'}],
        typeDR:[{type:'block'}, {type:'button'}, {type:'block', class:'numericBlock'}],
        typeE:[{type:'cap', version:'left'}, {type:'button'}, {type:'block', class:'numericBlock'}],
        typeER:[{type:'block', class:'numericBlock'}, {type:'button'}, {type:'cap', version:'right'}],
        typeF:[{type:'cap', version:'left'}, {type:'button'}, {type:'block'}, {type:'block', class:'numericBlock'}, {type:'block'}],
        typeFR:[{type:'block'}, {type:'block', class:'numericBlock'}, {type:'block'}, {type:'button'}, {type:'cap', version:'right'}]       
    },
    //Radio Buttons do not follow standard templating.  Wrapper is created with create call.
    radioButtons:{
        typeA:[{type:'cap'},{type:'block', class:'checkBlock'}, {type:'button'}],
        typeAR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'cap'}],  
        typeB:[{type:'cap', version:'left'},{type:'block', class:'checkBlock'}, {type:'button'}],
        typeBR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'cap', version:'right'}],               
    },
    //Numeric Radioo Buttons do not follow standard templating.  Wrapper is created with create call.   
    numericRadioButtons:{
		typeA:[{type:'cap'},{type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'},{type:'button'}],
		typeAR:[{type:'button'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'cap'}],
		typeB:[{type:'cap'},{type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'},{type:'button'}],
		typeBR:[{type:'button'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'cap'}], 
		typeC:[{type:'cap', version:'left'},{type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'},{type:'button'}],
		typeCR:[{type:'button'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'cap', version:'right'}],
		typeD:[{type:'cap', version:'left'},{type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'},{type:'button'}],
		typeDR:[{type:'button'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'cap', version:'right'}], 
		
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
		typeA:[{type:'cap'}, {type:'block', class:'checkBlock'}, {type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'},{type:'button'}],
		typeAR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'cap'}],
		typeB:[{type:'cap', version:'left'}, {type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'button'}],
		typeBR:[{type:'button'}, {type:'block', class:'checkBlock'}, {type:'block', class:'numericBlock'}, {type:'block', class:'checkBlock'}, {type:'cap', version:'right'}]			      
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


       

/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

LCARS.templates.sdk.buttons = {};

//Complex Buttons do not follow standard templating.  Wrapper is created with create call.
LCARS.templates.sdk.buttons.complex = {
	typeA:[
		{type:'button', version:'left'}, 
		{type:'block'}
	],
	typeAR:[
		{type:'block'}, 
		{type:'button', version:'right'}
	],
	typeB:[
		{type:'cap', version:'left'}, 
		{type:'button'}
	],
	typeBR:[
		{type:'button'}, 
		{type:'cap', version:'right'}
	],
	typeC:[
		{type:'button'}, 
		{type:'block'}, 
		{type:'block'}
	],
	typeCR:[
		{type:'block'}, 
		{type:'block'}, 
		{type:'button'}
	],
	typeD:[
		{type:'cap', version:'left'}, 
		{type:'button'}, 
		{type:'block'}
	],
	typeDR:[
		{type:'block'}, 
		{type:'button'}, 
		{type:'cap', version:'right'}
	]                
};

//Numeric Buttons do not follow standard templating.  Wrapper is created with create call.   
LCARS.templates.sdk.buttons.complexText = {
	typeA:[
		{type:'cap', version:'left'}, 
		{type:'text'}, 
		{type:'button'}
	],
	typeAR:[
		{type:'button'}, 
		{type:'text'}, 
		{type:'cap', version:'right'}
	],		
	typeB:[
		{type:'text'}, 
		{type:'button'}
	],
	typeBR:[
		{type:'button'}, 
		{type:'text'}
	],
	typeC:[
		{type:'block'}, 
		{type:'text'}, 
		{type:'button'}
	],
	typeCR:[
		{type:'button'}, 
		{type:'text'},
		{type:'block'}
	],
	typeD:[
		{type:'text'}, 
		{type:'button'}, {type:'bar'}
	],
	typeDR:[
		{type:'block'}, 
		{type:'button'}, 
		{type:'text'}
	],
	typeE:[
		{type:'cap', version:'left'}, 
		{type:'button'}, 
		{type:'text'}
	],
	typeER:[
		{type:'text'}, 
		{type:'button'}, 
		{type:'cap', version:'right'}
	],
	typeF:[
		{type:'cap', version:'left'}, 
		{type:'button'}, 
		{type:'block'}, 
		{type:'text'}, 
		{type:'block'}
	],
	typeFR:[
		{type:'block'}, 
		{type:'text'}, 
		{type:'block'}, 
		{type:'button'}, 
		{type:'cap', version:'right'}
	],
	
	typeG:[
		{type:'cap', version:'left'}, 
		{type:'block'}, 
		{type:'text'}, 
		{type:'button', version:'right'}
	],
	typeGR:[
		{type:'button', version:'left'},
		{type:'text'}, 
		{type:'block'}, 
		{type:'cap', version:'right'}, 
	],		       
};

//Radio Buttons do not follow standard templating.  Wrapper is created with create call.
LCARS.templates.sdk.buttons.radio = {
	typeA:[
		{type:'cap'},
		{type:'block', class:'check'}, 
		{type:'button'}
	],
	typeAR:[
		{type:'button'}, 
		{type:'block', class:'check'}, 
		{type:'cap'}
	],  
	typeB:[
		{type:'cap', version:'left'},
		{type:'block', class:'check'}, 
		{type:'button'}
	],
	typeBR:[
		{type:'button'}, 
		{type:'block', class:'check'}, 
		{type:'cap', version:'right'}
	],               
};

//Numeric Radioo Buttons do not follow standard templating.  Wrapper is created with create call.   
LCARS.templates.sdk.buttons.radioText = {
	typeA:[
		{type:'cap'},
		{type:'block', class:'check'}, 
		{type:'text'},
		{type:'button'}
	],
	typeAR:[
		{type:'button'}, 
		{type:'text'}, 
		{type:'block', class:'check'}, 
		{type:'cap'}
	],
	typeB:[
		{type:'cap'},
		{type:'block', class:'check'}, 
		{type:'text'},
		{type:'button'}
	],
	typeBR:[
		{type:'button'}, 
		{type:'block', class:'check'}, 
		{type:'text'},
		{type:'cap'}
	], 
	typeC:[
		{type:'cap', version:'left'},
		{type:'block', class:'check'}, 
		{type:'text'},
		{type:'button'}
	],
	typeCR:[
		{type:'button'}, 
		{type:'text'}, 
		{type:'block', class:'check'}, 
		{type:'cap', version:'right'}
	]
	
};    

//Checkbox Buttons do not follow standard templating.  Wrapper is created with create call.
LCARS.templates.sdk.buttons.checkbox = {
	typeA:[
		{type:'cap'}, 
		{type:'block', class:'check'}, 
		{type:'block', class:'check'}, 
		{type:'button'}
	],
	typeAR:[
		{type:'button'}, 
		{type:'block', class:'check'}, 
		{type:'block', class:'check'}, 
		{type:'cap'}
	],  
	typeB:[
		{type:'cap', version:'left'}, 
		{type:'block', class:'check'}, 
		{type:'block', class:'check'}, 
		{type:'button'}
	],
	typeBR:[
		{type:'button'}, 
		{type:'block', class:'check'}, 
		{type:'block', class:'check'}, 
		{type:'cap', version:'right'}
	],              
};

//Numeric Checkbox Buttons do not follow standard templating.  Wrapper is created with create call.   
LCARS.templates.sdk.buttons.checkboxText = {
	typeA:[
		{type:'cap'}, 
		{type:'block', class:'check'}, 
		{type:'block', class:'check'}, 
		{type:'text'},
		{type:'button'}
	],
	typeAR:[
		{type:'button'}, 
		{type:'text'}, 
		{type:'block', class:'check'}, 
		{type:'block', class:'check'}, 
		{type:'cap'}
	],
	typeB:[
		{type:'cap', version:'left'}, 
		{type:'block', class:'check'}, 
		{type:'text'}, 
		{type:'block', class:'check'}, 
		{type:'button'}
	],
	typeBR:[
		{type:'button'}, 
		{type:'block', class:'check'}, 
		{type:'text'}, 
		{type:'block', class:'check'}, 
		{type:'cap', version:'right'}
	]			      
}; 





       

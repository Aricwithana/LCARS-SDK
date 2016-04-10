/** LCARS SDK 16098.3
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/
    
LCARS.templates.sdk.dialog = {
	
	typeA:{type:'wrapper', class:'template sdk dialog typeA', children:[
			{type:'wrapper', class:'header', flex:'h', children:[
				{type:'cap', size:'small', version:'left'}, 
				{type:'title', size:'half'}, 
				{type:'bar', flexC:'h'}, 
				{type:'cap', size:'small', version:'right'}
			]},
			{type:'wrapper', class:'footer', flex:'h', children:[
				{type:'cap', size:'small', version:'left'}, 
				{type:'bar', flexC:'h'}, 
				{type:'title', size:'half'}, 
				{type:'cap', size:'small', version:'right'}
			]},
			{type:'wrapper', class:'content'}
		]
	},
		 
	typeAR:{type:'wrapper', class:'template sdk dialog typeAR', children:[
			{type:'wrapper', class:'header', flex:'h', children:[
				{type:'cap', size:'small', version:'left'}, 
				{type:'bar', flexC:'h'}, 
				{type:'title', size:'half'}, 
				{type:'cap', size:'small', version:'right'}
			]},
			{type:'wrapper', class:'footer', flex:'h', children:[
				{type:'cap', size:'small', version:'left'}, 
				{type:'title', size:'half'}, 
				{type:'bar', flexC:'h'}, 
				{type:'cap', size:'small', version:'right'}
			]},
			{type:'wrapper', class:'content'}     
		]
	},
	
	typeB:{type:'wrapper', class:'template sdk dialog typeB', children:[
			{type:'elbow', version:'topLeftAlt', size:'medium', noEvent:true},
			{type:'elbow', version:'bottomLeftAlt', size:'medium', noEvent:true},
			{type:'elbow', version:'bottomRightAlt', size:'medium', noEvent:true},
			{type:'elbow', version:'topRightAlt', size:'medium', noEvent:true},
			{type:'wrapper', class:'content'},
			{type:'block'},
			{type:'block'},
			{type:'wrapper', class:'addon sdk complexButton scrollButton typeAV', flex:'v', children:[
				{type:'button', class:'up', 
					click:function(){
						$(this).scrollUp({step:65, target:$(this).parent().siblings('.content')});
					}, 
					tap:function(){
						$(this).scrollUp({step:65, target:$(this).parent().siblings('.content')});
					}
				}, 
				{type:'button', class:'down', 
					click:function(){
						$(this).scrollDown({step:65, target:$(this).parent().siblings('.content')});
					}, 
					tap:function(){
						$(this).scrollDown({step:65, target:$(this).parent().siblings('.content')});
					}
				}
			]}
		]
	},
	
	typeC:{type:'wrapper', class:'template sdk dialog typeC', children:[
			{type:'wrapper', class:'header', flex:'h', children:[
				{type:'cap', version:'left'}, 
				{type:'title', size:'half'}, 
				{type:'bar'}, 
				{type:'cap', version:'right'}
			]},
			{type:'wrapper', class:'footer', flex:'h', children:[
				{type:'cap', version:'left'}, 
				{type:'bar'}, 
				{type:'title', size:'half'}, 
				{type:'cap', version:'right'}
			]},
			{type:'wrapper', class:'content'}
		]
	},
		 
	typeCR:{type:'wrapper', class:'template sdk dialog typeCR', children:[
			{type:'wrapper', class:'header', flex:'h', children:[
				{type:'cap', version:'left'}, 
				{type:'bar', flexC:'h'}, 
				{type:'title', size:'half'}, 
				{type:'cap', version:'right'}
			]},
			{type:'wrapper', class:'footer', flex:'h', children:[
				{type:'cap', version:'left'}, 
				{type:'title', size:'half'}, 
				{type:'bar', flexC:'h'}, 
				{type:'cap', version:'right'}
			]},
			{type:'wrapper', class:'content'}     
		]
	},
	
	typeT:{type:'wrapper', class:'template sdk dialog typeT', flexC:'v', children:[
			{type:'wrapper', class:'header row', flex:'h', children:[
				{type:'cap', size:'tiny', version:'left'}, 
				{type:'bar', flexC:'h'}, 
				{type:'cap', size:'tiny', version:'right'}
			]},
			{type:'wrapper', class:'footer row', flex:'h', children:[
				{type:'cap', size:'tiny', version:'left'}, 
				{type:'bar', flexC:'h'}, 
				{type:'cap', size:'tiny', version:'right'}
			]},
			{type:'wrapper', class:'content', flex:'v'}
		]
	}              
};
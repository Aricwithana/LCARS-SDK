/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/
    
LCARS.templates.sdk.dialog = {
	
	typeA:{type:'wrapper', class:'template sdk dialog typeA', flex:'v', children:[
			{type:'row', version:'header', flex:'h', children:[
				{type:'cap', size:'medium', version:'left', color:'bg-'}, 
				{type:'title', size:'half'}, 
				{type:'bar', flexC:'h', color:'bg-'}, 
				{type:'cap', size:'medium', version:'right', color:'bg-'}
			]},
			{type:'content', flexC:'v'},
			{type:'row', version:'footer', flex:'h', children:[
				{type:'cap', size:'medium', version:'left', color:'bg-'}, 
				{type:'bar', flexC:'h',  color:'bg-'}, 
				{type:'title', size:'half', color:'bg-'}, 
				{type:'cap', size:'medium', version:'right', color:'bg-'}
			]},
		]
	},
		 
	typeAR:{type:'wrapper', class:'template sdk dialog typeAR', flex:'v', children:[
			{type:'row', version:'header', flex:'h', children:[
				{type:'cap', size:'medium', version:'left', color:'bg-'}, 
				{type:'bar', flexC:'h', color:'bg-'}, 
				{type:'title', size:'half'}, 
				{type:'cap', size:'medium', version:'right', color:'bg-'}
			]},
			{type:'content', flexC:'v'},
			{type:'row', version:'footer', flex:'h', children:[
				{type:'cap', size:'medium', version:'left', color:'bg-'}, 
				{type:'title', size:'half', color:'bg-'}, 
				{type:'bar', flexC:'h',  color:'bg-'}, 
				{type:'cap', size:'medium', version:'right', color:'bg-'}
			]},
		]
	},
		
	typeT:{type:'wrapper', class:'template sdk dialog typeT', flex:'v', children:[
			{type:'row', version:'header', flex:'h', children:[
				{type:'cap', size:'tiny', version:'left', color:'bg-'}, 
				{type:'bar', size:'tiny', flexC:'h', color:'bg-'}, 
				{type:'cap', size:'tiny', version:'right', color:'bg-'}
			]},
			{type:'wrapper', class:'content', flexC:'v'},
			{type:'wrapper', class:'footer row', flex:'h', children:[
				{type:'cap', size:'tiny', version:'left', color:'bg-'}, 
				{type:'bar', size:'tiny', flexC:'h', color:'bg-'}, 
				{type:'cap', size:'tiny', version:'right', color:'bg-'}
			]}
		]
	}              
};
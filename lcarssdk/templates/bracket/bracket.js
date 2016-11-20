/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

LCARS.templates.sdk.bracket = {
	typeA:{type:'wrapper', class:'sdk bracket typeA', children:[
			{type:'wrapper', class:'content'},
			{type:'elbow', version:'topLeft', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
			{type:'elbow', version:'topRight', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
			{type:'elbow', version:'bottomLeft', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
			{type:'elbow', version:'bottomRight', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},        
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-', children:[{type:'bar', color:'bg-white'}]},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]},
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]},
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-', children:[{type:'bar', color:'bg-white'}]},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]},
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]}
		]
	}                
};
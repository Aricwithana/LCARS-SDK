/** LCARS SDK 16276.31
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

//Base UI Definition
var visualGuide = {
		currentView:null,
		uiColors:['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4']
};

//UI Events
visualGuide.events = {
	generateVisualGroups:function(sName){
		$('#viewport-content > *').removeObject({});
		$(visualGuide.visualGroups[sName]).createObject({appendTo:'#viewport-content'});
		visualGuide.currentView = sName;
		
	},

	animateLevelBar:{
		bars:{},
		init:function(){
			var elemID = $(this).attr('id');
			visualGuide.events.animateLevelBar.bars[elemID] = setInterval(function(){visualGuide.events.animateLevelBar.timer(elemID);}, 1000);
		},
		
		timer:function(elemID){
			if($('#'+elemID).length){
				$('#'+elemID).objectSettings({level:Math.floor((Math.random() * 100) + 1)});
			}else{
				clearInterval(visualGuide.events.animateLevelBar.bars[elemID]);
				visualGuide.events.animateLevelBar.bars[elemID] = null;
			}
		}
	},
	
	numberGenerate:{
		six:function(){
			var newValue = Math.floor(Math.random()*900000) + 100000
			$(this).objectSettings({text:newValue.toString()});
		},
		
		three:function(){
			var newValue = Math.floor(Math.random()*900) + 100
			$(this).objectSettings({text:newValue.toString()});
		}	
	}
}		   

//Element Type Groups
visualGuide.visualGroups = {
		
		//Brackets
		bracket:{type:'wrapper', class:'sdk bracket typeA', children:[
				{type:'wrapper', class:'content'},
				{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), children:[{type:'bar'}], noEvent:true},	
				{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), children:[{type:'bar'}], noEvent:true},	
				{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), children:[{type:'bar'}], noEvent:true},	
				{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), children:[{type:'bar'}], noEvent:true},        
				{type:'column', flex:'v', children:[
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors), children:[{type:'bar', color:'bg-white'}]},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)}                     
				]},
				{type:'column', flex:'v', children:[
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)}                     
				]},
				{type:'column', flex:'v', children:[
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors), children:[{type:'bar', color:'bg-white'}]},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)}                    
				]},
				{type:'column', flex:'v', children:[
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'bar', flexC:'v', color:LCARS.colorGen(visualGuide.uiColors)}                     
				]}
			]
		},
		
		//All Text
		typography:{
			type:'content',
			children:[
				{type:'htmlTag', version:'title', tag:'h1', text:'Title Element - Large Bar Height 67px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', version:'title', size:'small', tag:'h1', text:'Title Element Small - Default Bar Height 35px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h1', text:'H1 Title 50px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h2', text:'H2 Title 40px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h3', text:'H3 Title 30px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h4', text:'H4 Title 24px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h5', text:'H5 Title 20px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h6', text:'H6 Title 18px', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'p', text:'"P Tag 24px Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1234567890!@#$%^&*()-=_+/?\|[]{}`~"', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'h2', text:'UL-LI List', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'htmlTag', tag:'ul', children:[
					{type:'htmlTag', tag:'li', text:'SYSTEM ACCESS', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'htmlTag', tag:'li', text:'OPERATIONS', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'htmlTag', tag:'li', text:'PADD', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'htmlTag', tag:'li', text:'MEMORY BUFFER', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')}
				]}
			]
				
			
		},
		
		//All Buttons
		buttons:{
			type:'content',
			children:[
				
				//Basic Buttons
				{type:'row', flex:'h', style:'margin-bottom:30px;', children:[
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Default Button', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', label:'Label Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', altLabel:'Alt Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', altLabel:'AltLabel Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)}
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Default Button Pill', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', version:'pill', label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'pill', label:'Label Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'pill', altLabel:'Alt Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'pill', altLabel:'AltLabel Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)}
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Default Button Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', version:'left', label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'left', label:'Label Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'left', altLabel:'Alt Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'left', altLabel:'AltLabel Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)}
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Default Button Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', version:'right', label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'right', label:'Label Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'right', altLabel:'Alt Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', version:'right', altLabel:'AltLabel Right', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)}
					]},
				]},
				
				//Complex Buttons - Radio Buttons - Checkbox Buttons
				{type:'row', flex:'h', style:'margin-bottom:30px;', children:[
					
					//Basic Complex Button
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Complex Buttons', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeA, label:'Type A', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeAR, label:'Type AR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeB, label:'Type B', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeBR, label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeC, label:'Type C', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeCR, label:'Type CR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeD, label:'Type D', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complex.typeDR, label:'Type DR', color:LCARS.colorGen(visualGuide.uiColors)}
					]},
					
					//Complex Button w/ Text
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Complex Text', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeA, text:'00', label:'Type A', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeAR, text:'00', label:'Type AR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeB, text:'00', label:'Type B', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeBR, text:'00', label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeC, text:'00', label:'Type C', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeCR, text:'00', label:'Type CR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeD, text:'00', label:'Type D', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeDR, text:'00', label:'Type DR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeE, text:'00', label:'Type E', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeER, text:'00', label:'Type ER', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeF, text:'00', label:'Type F', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeFR, text:'00', label:'Type FR', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'00', label:'Type G', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'complexButton', template:LCARS.templates.sdk.buttons.complexText.typeGR, text:'00', label:'Type GR', color:LCARS.colorGen(visualGuide.uiColors)}
					]},
					
					//Radio Buttons
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Complex Radio', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'radio', template:LCARS.templates.sdk.buttons.radio.typeA, name:'samples1', text:'00', label:'Type A', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radio.typeAR, name:'samples1', text:'00', label:'Type AR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radio.typeB, name:'samples1', text:'00', label:'Type B', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radio.typeBR, name:'samples1', text:'00', label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'htmlTag', tag:'h3', text:'Complex Radio Text', style:'margin-top:18px;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'radio', template:LCARS.templates.sdk.buttons.radioText.typeA, name:'samples1', text:'00', label:'Type A', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radioText.typeAR, name:'samples1', text:'00', label:'Type AR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radioText.typeB, name:'samples1', text:'00', label:'Type B', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radioText.typeBR, name:'samples1', text:'00', label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radioText.typeC, name:'samples1', text:'00', label:'Type B', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'radio', template:LCARS.templates.sdk.buttons.radioText.typeCR, name:'samples1', text:'00', label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
					]},
					
					//Checkbox Buttons
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Complex Checkbox', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkbox.typeA, name:'samples11', text:'00', label:'Type A', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkbox.typeAR, name:'samples11', text:'00', label:'Type AR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkbox.typeB, name:'samples11', text:'00', label:'Type B', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkbox.typeBR, name:'samples11', text:'00', label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'htmlTag', tag:'h3', text:'Complex Checkbox Text', style:'margin-top:18px;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkboxText.typeA, name:'samples11', text:'00', label:'Type A', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkboxText.typeAR, name:'samples11', text:'00', label:'Type AR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkboxText.typeB, name:'samples11', text:'00', label:'Type B', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
						{type:'checkbox', template:LCARS.templates.sdk.buttons.checkboxText.typeBR, name:'samples11', text:'00', label:'Type BR', color:LCARS.colorGen(visualGuide.uiColors), click:function(){}},
					]},
				]},
				
				//End Cap Buttons
				{type:'row', flex:'h', style:'margin-bottom:30px;', children:[
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Endcap Large Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', endcap:true, orient:'bottom-left', style:'height:255px;', size:'large',  label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'bottom-left', style:'height:255px; text-align:right;', size:'large',  label:'Label Right', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'bottom-left', style:'height:255px;', size:'large',  altLabel:'Label Alt Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'bottom-left', style:'height:255px; text-align:right;', size:'large',  altLabel:'Label Alt Right', color:LCARS.colorGen(visualGuide.uiColors)},
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Endcap Large Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', endcap:true, orient:'bottom-right', style:'height:255px;', size:'large',  label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'bottom-right', style:'height:255px; text-align:right;', size:'large',  label:'Label Right', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'bottom-right', style:'height:255px;', size:'large',  altLabel:'Label Alt Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'bottom-right', style:'height:255px; text-align:right;', size:'large',  altLabel:'Label Alt Right', color:LCARS.colorGen(visualGuide.uiColors)},
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Endcap Large Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', endcap:true, orient:'top-left', style:'height:255px;', size:'large',  label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'top-left', style:'height:255px; text-align:right;', size:'large',  label:'Label Right', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'top-left', style:'height:255px;', size:'large',  altLabel:'Label Alt Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'top-left', style:'height:255px; text-align:right;', size:'large',  altLabel:'Label Alt Right', color:LCARS.colorGen(visualGuide.uiColors)},
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Endcap Large Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'button', endcap:true, orient:'top-right', style:'height:255px;', size:'large',  label:'Label Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'top-right', style:'height:255px; text-align:right;', size:'large',  label:'Label Right', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'top-right', style:'height:255px;', size:'large',  altLabel:'Label Alt Left', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'button', endcap:true, orient:'top-right', style:'height:255px; text-align:right;', size:'large',  altLabel:'Label Alt Right', color:LCARS.colorGen(visualGuide.uiColors)},
					]},
				]},
			]
		},
		
		//All Elbows
		elbows:{
			type:'content',
			children:[
			
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-right:125px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:125px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-right:125px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:125px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'large', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'margin-bottom:50px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large V Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'margin-bottom:50px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large V Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:75px; text-align:left;', altLabel:'Alt Label Left' }
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'margin-bottom:50px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large V Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'margin-bottom:50px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Large V Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'large', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-top:75px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small V Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small V Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small V Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Small V Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'small', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'medium', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium V Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium V Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium V Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Medium V Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'medium', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'base', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base V Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base V Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base V Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Base V Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', size:'base', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:45px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},

				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},
				
				{type:'row', flex:'h', children:[
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Vertical Top Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Vertical Top Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'top-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', label:'Label Right' },
						{type:'elbow', version:'top-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'top-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'top-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Vertical Bottom Left', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-left', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
					{type:'column', flex:'v', flexC:'h', style:'padding-left:60px; padding-right:30px;', children:[
						{type:'htmlTag', tag:'h4', text:'Default Vertical Bottom Right', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'elbow', version:'bottom-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right; margin-top: 45px;', label:'Label Right' },
						{type:'elbow', version:'bottom-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:right;', altLabel:'Alt Label Right' },
						{type:'elbow', version:'bottom-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', label:'Label Left' },
						{type:'elbow', version:'bottom-right', orient:'vertical', color:LCARS.colorGen(visualGuide.uiColors), style:'margin-bottom:30px; text-align:left;', altLabel:'Alt Label Left' }
	
					]},
				]},

			]		
		},
		
		//All Media
		Media:{
			type:'content',
			flex:'h',
			children:[
				{type:'column', flexC:'h', children:[
					{type:'htmlTag', tag:'h2', text:'SVG', style:'text-align:center;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'img', src:'emblem.png'},
				]},
				{type:'column', flexC:'h', children:[
					{type:'htmlTag', tag:'h2', text:'IMG', style:'text-align:center;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'svg', xml:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css">.st0{fill:#FFFFFF;}.st1{fill:none;stroke:#FFFFFF;stroke-width:1.1747;}</style><path class="st0" d="M257.5,67.4C168.9,67.4,97,139.2,97,227.9c0,88.6,71.8,160.5,160.5,160.5c88.6,0,160.5-71.8,160.5-160.5C418,139.2,346.1,67.4,257.5,67.4z M257.5,380.5c-84.3,0-152.6-68.3-152.6-152.6c0-84.3,68.3-152.6,152.6-152.6c84.3,0,152.6,68.3,152.6,152.6C410.1,312.2,341.8,380.5,257.5,380.5z"/><path class="st1" d="M257.5,396.3c-93,0-168.4-75.4-168.4-168.4c0-93,75.4-168.4,168.4-168.4c93,0,168.4,75.4,168.4,168.4C425.9,320.9,350.5,396.3,257.5,396.3z"/><path class="st0" d="M113.4,101.9c15.2-12.5,32.5-39.1,32.5-39.1s-5.6,0.3-13,4.4c-9.2,5.1-20.7,14.1-20.7,14.1l1.1-11.2c0,0-9.1,7.2-15,16.8c-5.9,9.8-8.6,21.9-8.6,21.9S100.8,112.2,113.4,101.9z M84.6,138.2c8.6-7.8,14.8-18.8,14.8-18.8s-5.3,2.6-10.2,3.4c-3.6,0.6-7.2-0.6-7.2-0.6s-1.9-3.9-1.5-10.7c0.5-8,3.2-19,3.2-19s-10.2,11-14.6,24.3c-1.2,3.7-2.2,7.6-2.9,11.3c-2.7,12.6-2.1,23.2-2.1,23.2S75.6,146.3,84.6,138.2z M68.5,179.2c7-7.7,11.3-19.5,11.3-19.5s-5.9,3.3-12,4.7c-4.6,1.1-9.8,0.3-9.8,0.3s-1.6-4.8-2.3-11.7c-1.2-12.2-0.5-31.5-0.5-31.5s-10.5,19.2-11,36.5c-0.4,16,8.2,31.9,8.2,31.9S61.7,186.6,68.5,179.2z M48.4,227.6c0,0,10.3-7.7,15.8-16.8c5.1-8.3,5.5-18,5.5-18s-4.9,2.7-10.2,4.8c-4.8,1.9-10,3.1-10,3.1s-5.7-6.2-9.2-14.5c-5.3-12.5-9.3-28.7-9.3-28.7s-5.7,21.8-1.3,39.4C34,214.3,48.4,227.6,48.4,227.6z M51.2,270.2c0,0,7.1-7.5,10.9-16.8c4-9.9,4.8-21.8,4.8-21.8l-16.3,14.6c0,0-8.7-5.8-16.2-15.7c-10.3-13.6-20.2-32.5-20.2-32.5s-1.3,29.6,8.1,47.8C31.5,263.6,51.2,270.2,51.2,270.2z M61.9,309.4c0,0,6.2-7.2,8.2-16.5c2.5-11.7,0.8-26.1,0.8-26.1s-2.8,5.9-6.5,11.4c-3.1,4.6-7,8.8-7,8.8s-10.2-4.1-20.1-13.5c-14-13.2-29.7-34.7-29.7-34.7s1.5,32.1,14.8,49.2C35.8,305.3,61.9,309.4,61.9,309.4z M83.7,347c0,0,3.8-10.1,3.7-21.3c-0.1-12.3-4.2-25.8-4.2-25.8l-12.9,24.7c0,0-12.1,0.4-24.2-6c-14.8-7.8-30.2-22.6-30.2-22.6s10,28,27.5,41.1C59.8,349.5,83.7,347,83.7,347z M110.1,379.5c0,0,1.8-11.4,0.1-21.8c-1.9-11.9-7.4-23.1-7.4-23.1s-1,8.1-3.5,15.5c-2,6-5.5,11.4-5.5,11.4s-6.9,1-15.7,0.2c-12.6-1.1-28.6-4.2-28.6-4.2s8.6,11.9,24.1,17.5C88.4,380.4,110.1,379.5,110.1,379.5z M122.4,359.8l-2.2,28.6c0,0-6.5,2.6-15.2,2.9c-11.4,0.5-25.8-1.2-25.8-1.2s12.6,10.7,27.5,14.2c15.3,3.5,33-0.2,33-0.2s1.9-10.1-2.1-19.8C133,373.1,122.4,359.8,122.4,359.8z M227.5,418.7c-9.6-5.3-23.8-8.4-23.8-8.4s-14.4-2.3-28-6.3c-13.3-3.9-25.8-9.4-25.8-9.4s2.8,7,1.3,11.9c-1.3,4-6.9,6.1-6.9,6.1l12.3,3.9c0,0,31.1,0.9,49.3,3.9c16.2,2.6,19.6,7.3,19.6,7.3s-2,2.1-8.9,3.2c-9.9,1.6-24.7,1.3-24.7,1.3l10.6,10.1c0,0,11.7,1.4,21.8-1.5c9.2-2.7,16.9-9.7,16.9-9.7S236.7,423.8,227.5,418.7z M401.6,101.9c12.6,10.3,23.5,6.9,23.5,6.9s-2.6-12.1-8.6-21.9c-5.8-9.6-15-16.8-15-16.8l1.1,11.2c0,0-11.5-9.1-20.7-14.1c-7.4-4.1-13-4.4-13-4.4S386.4,89.4,401.6,101.9z M430.4,138.2c9,8.2,20.5,13.2,20.5,13.2s0.6-10.6-2.1-23.2c-0.7-3.8-1.6-7.6-2.9-11.4c-4.4-13.3-14.6-24.3-14.6-24.3s2.7,11,3.2,19c0.4,6.7-1.5,10.7-1.5,10.7s-3.6,1.2-7.2,0.6c-4.9-0.8-10.2-3.4-10.2-3.4S421.7,130.4,430.4,138.2z M435.2,159.7c0,0,4.3,11.8,11.3,19.5c6.7,7.4,16.1,10.8,16.1,10.8s8.6-15.9,8.2-31.9c-0.4-17.3-11-36.5-11-36.5s0.6,19.3-0.5,31.5c-0.6,6.9-2.3,11.7-2.3,11.7s-5.2,0.7-9.8-0.3C441.1,163,435.2,159.7,435.2,159.7z M455.5,197.5c-5.3-2-10.2-4.8-10.2-4.8s0.4,9.7,5.5,18c5.5,9,15.8,16.8,15.8,16.8s14.4-13.3,18.7-30.6c4.4-17.7-1.3-39.4-1.3-39.4s-3.9,16.2-9.3,28.7c-3.5,8.2-9.2,14.5-9.2,14.5S460.3,199.4,455.5,197.5z M464.3,246.1l-16.3-14.6c0,0,0.8,11.9,4.8,21.8c3.8,9.4,10.9,16.8,10.9,16.8s19.8-6.6,28.9-24.5c9.3-18.2,8.1-47.8,8.1-47.8s-9.9,18.9-20.2,32.5C473.1,240.3,464.3,246.1,464.3,246.1z M477.7,273.5c-10,9.4-20.1,13.5-20.1,13.5s-3.9-4.2-7-8.8c-3.6-5.4-6.5-11.4-6.5-11.4s-1.7,14.4,0.8,26.1c2,9.3,8.2,16.5,8.2,16.5s26-4.1,39.6-21.5c13.3-17.1,14.8-49.2,14.8-49.2S491.8,260.3,477.7,273.5z M444.7,324.5l-12.9-24.7c0,0-4.1,13.5-4.2,25.8c-0.1,11.2,3.7,21.3,3.7,21.3s23.9,2.5,40.4-9.9c17.4-13.1,27.5-41.1,27.5-41.1s-15.4,14.8-30.2,22.6C456.8,324.9,444.7,324.5,444.7,324.5z M421.2,361.5c0,0-3.5-5.4-5.5-11.4c-2.4-7.3-3.5-15.5-3.5-15.5s-5.4,11.1-7.4,23.1c-1.7,10.4,0.1,21.8,0.1,21.8s21.7,1,36.4-4.4c15.5-5.6,24.1-17.5,24.1-17.5s-15.9,3-28.6,4.2C428.1,362.5,421.2,361.5,421.2,361.5z M410,391.3c-8.7-0.4-15.2-2.9-15.2-2.9l-2.2-28.6c0,0-10.6,13.3-15.3,24.5c-4,9.7-2.1,19.8-2.1,19.8s17.7,3.7,33,0.2c15-3.5,27.5-14.2,27.5-14.2S421.4,391.8,410,391.3z M363.8,406.5c-1.5-4.9,1.3-11.9,1.3-11.9s-12.6,5.5-25.8,9.4c-13.6,4-28,6.3-28,6.3s-14.3,3.2-23.8,8.4c-9.2,5.1-13.7,12.3-13.7,12.3s7.7,7,16.9,9.7c10.1,2.9,21.8,1.5,21.8,1.5l10.6-10.1c0,0-14.8,0.3-24.7-1.3c-6.9-1.1-8.9-3.2-8.9-3.2s3.5-4.7,19.6-7.3c18.2-3,49.3-3.9,49.3-3.9l12.3-3.9C370.7,412.5,365.1,410.5,363.8,406.5z"/><path class="st0" d="M251.3,232.4C251.3,232.4,251.3,232.4,251.3,232.4L251.3,232.4c-0.7,0-31.6-0.5-36.7-5.6c-5.1-5.1-5.6-36-5.6-36.7v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0.7-0.5,31.6-5.6,36.7c-5.1,5.1-35.7,5.6-36.7,5.6h0c0,0,0,0,0,0c0,0,0,0,0,0h0c1,0,31.6,0.5,36.7,5.6c5.1,5.1,5.6,36,5.6,36.7v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0-0.7,0.5-31.6,5.6-36.7C219.7,232.9,250.6,232.4,251.3,232.4L251.3,232.4C251.3,232.4,251.3,232.4,251.3,232.4z"/><path class="st0" d="M322.2,182.6C322.2,182.6,322.2,182.6,322.2,182.6L322.2,182.6c-0.5,0-24.4-0.4-28.3-4.3c-3.9-3.9-4.3-27.8-4.3-28.3v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0.5-0.4,24.4-4.3,28.3c-3.9,3.9-27.5,4.3-28.3,4.3h0c0,0,0,0,0,0c0,0,0,0,0,0h0c0.8,0,24.4,0.4,28.3,4.3c3.9,3.9,4.3,27.8,4.3,28.3v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0-0.5,0.4-24.4,4.3-28.3C297.8,183,321.7,182.6,322.2,182.6L322.2,182.6C322.2,182.6,322.2,182.6,322.2,182.6z"/><path class="st0" d="M337.2,267.9C337.2,267.9,337.2,267.9,337.2,267.9L337.2,267.9c-0.5,0-22.7-0.4-26.4-4c-3.7-3.7-4-25.9-4-26.4v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0.5-0.4,22.7-4,26.4c-3.7,3.7-25.7,4-26.4,4h0c0,0,0,0,0,0c0,0,0,0,0,0h0c0.7,0,22.8,0.4,26.4,4c3.7,3.7,4,25.9,4,26.4v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0-0.5,0.4-22.7,4-26.4C314.4,268.2,336.7,267.9,337.2,267.9L337.2,267.9C337.2,267.9,337.2,267.9,337.2,267.9z"/><path class="st0" d="M318.5,226.9c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C315.3,219.9,318.5,223,318.5,226.9z"/><path class="st0" d="M276.4,254.1c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C273.2,247,276.4,250.2,276.4,254.1z"/><path class="st0" d="M229.8,305c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C226.6,297.9,229.8,301.1,229.8,305z"/><path class="st0" d="M264.1,210c0,3.6-2.9,6.6-6.6,6.6c-3.6,0-6.6-2.9-6.6-6.6c0-3.6,2.9-6.6,6.6-6.6C261.1,203.4,264.1,206.4,264.1,210z"/><path class="st0" d="M264.9,290.9c0,3.9-3.1,7-7,7c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7C261.8,283.9,264.9,287.1,264.9,290.9z"/><path class="st0" d="M172,295.8c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C168.8,288.7,172,291.9,172,295.8z"/><path class="st0" d="M395.8,172.3c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C392.7,165.2,395.8,168.4,395.8,172.3z"/><path class="st0" d="M357.2,157.4c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C354,150.3,357.2,153.5,357.2,157.4z"/><path class="st0" d="M261.8,229.7c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C259.5,224.5,261.8,226.8,261.8,229.7z"/><path class="st0" d="M190.9,292.7c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C188.6,287.6,190.9,289.9,190.9,292.7z"/><path class="st0" d="M130.9,267.6c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C128.6,262.4,130.9,264.8,130.9,267.6z"/><path class="st0" d="M284.5,96c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C282.2,90.8,284.5,93.1,284.5,96z"/><path class="st0" d="M312.2,91.7c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C309.9,86.5,312.2,88.9,312.2,91.7z"/><path class="st0" d="M140.6,210.2c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C138,204.4,140.6,207,140.6,210.2z"/><path class="st0" d="M129.1,250.9c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C126.5,245.2,129.1,247.7,129.1,250.9z"/><path class="st0" d="M232.8,147.1c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C230.3,141.4,232.8,144,232.8,147.1z"/><path class="st0" d="M206.2,148.8c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C204.4,144.9,206.2,146.7,206.2,148.8z"/><path class="st0" d="M252.1,126.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C250.4,122.5,252.1,124.2,252.1,126.4z"/><path class="st0" d="M262.1,191.2c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C260.4,187.3,262.1,189,262.1,191.2z"/><path class="st0" d="M223.8,212.7c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C222.1,208.8,223.8,210.6,223.8,212.7z"/><path class="st0" d="M240.4,245.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C238.7,241.4,240.4,243.2,240.4,245.3z"/><path class="st0" d="M247,277.9c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C245.3,274,247,275.7,247,277.9z"/><path class="st0" d="M247.6,256.8c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C245.8,252.9,247.6,254.7,247.6,256.8z"/><path class="st0" d="M261.8,261.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C260,257.5,261.8,259.3,261.8,261.4z"/><path class="st0" d="M317.5,246.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C315.7,242.2,317.5,243.9,317.5,246.1z"/><path class="st0" d="M294.8,255.2c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C293.1,251.3,294.8,253.1,294.8,255.2z"/><path class="st0" d="M343.1,204.7c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C341.3,200.8,343.1,202.5,343.1,204.7z"/><path class="st0" d="M263.3,243.2c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C261.6,239.3,263.3,241,263.3,243.2z"/><path class="st0" d="M282.1,274.8c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C280.4,270.9,282.1,272.7,282.1,274.8z"/><path class="st0" d="M353.4,207c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C351.7,203.1,353.4,204.8,353.4,207z"/><path class="st0" d="M384.1,186.5c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C382.3,182.7,384.1,184.4,384.1,186.5z"/><path class="st0" d="M384.1,239.2c0,2.4-2,4.4-4.4,4.4c-2.5,0-4.4-2-4.4-4.4c0-2.5,2-4.4,4.4-4.4C382.1,234.8,384.1,236.7,384.1,239.2z"/><path class="st0" d="M336.9,174.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C335.2,170.5,336.9,172.2,336.9,174.4z"/><path class="st0" d="M361.5,167.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C359.7,163.4,361.5,165.1,361.5,167.3z"/><path class="st0" d="M364.6,179.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C362.9,175.5,364.6,177.2,364.6,179.4z"/><path class="st0" d="M343.4,139.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C341.7,135.2,343.4,136.9,343.4,139.1z"/><path class="st0" d="M369.5,148.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C367.8,144.4,369.5,146.1,369.5,148.3z"/><path class="st0" d="M354,118.8c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C352.2,114.9,354,116.6,354,118.8z"/><path class="st0" d="M222.3,263.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C220.5,259.4,222.3,261.2,222.3,263.3z"/><path class="st0" d="M219,291.7c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C217.3,287.8,219,289.5,219,291.7z"/><path class="st0" d="M200.8,297.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C199.1,293.4,200.8,295.1,200.8,297.3z"/><path class="st0" d="M192.4,274.2c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C190.6,270.4,192.4,272.1,192.4,274.2z"/><path class="st0" d="M206.4,274.2c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C204.6,270.4,206.4,272.1,206.4,274.2z"/><path class="st0" d="M172.4,260.6c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C170.7,256.8,172.4,258.5,172.4,260.6z"/><path class="st0" d="M185.2,239.5c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C183.4,235.6,185.2,237.3,185.2,239.5z"/><path class="st0" d="M160.2,227.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C158.4,223.2,160.2,224.9,160.2,227.1z"/><path class="st0" d="M126.8,185.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C125.1,181.5,126.8,183.2,126.8,185.4z"/><path class="st0" d="M136.6,300.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C134.9,296.4,136.6,298.1,136.6,300.3z"/><path class="st0" d="M161.7,322.8c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C160,319,161.7,320.7,161.7,322.8z"/><path class="st0" d="M184.3,304.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C182.6,300.6,184.3,302.3,184.3,304.4z"/><path class="st0" d="M283.2,370.2c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C281.5,366.3,283.2,368.1,283.2,370.2z"/><path class="st0" d="M174,325.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C172.2,321.2,174,322.9,174,325.1z"/><path class="st0" d="M178.2,346.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C176.4,342.5,178.2,344.3,178.2,346.4z"/><path class="st0" d="M200,329.6c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C198.3,325.8,200,327.5,200,329.6z"/><path class="st0" d="M276.7,337.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C275,333.2,276.7,335,276.7,337.1z"/><path class="st0" d="M282.7,311.8c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C280.9,307.9,282.7,309.7,282.7,311.8z"/><path class="st0" d="M368.6,315.3c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C366.9,311.4,368.6,313.1,368.6,315.3z"/><path class="st0" d="M349.1,254.7c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C347.4,250.8,349.1,252.5,349.1,254.7z"/><path class="st0" d="M333.6,234.3c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2C331.7,230,333.6,231.9,333.6,234.3z"/><path class="st0" d="M325.5,219.9c0,2.3-1.9,4.1-4.1,4.1c-2.3,0-4.1-1.9-4.1-4.1c0-2.3,1.9-4.1,4.1-4.1C323.7,215.8,325.5,217.6,325.5,219.9z"/><path class="st0" d="M286.5,224.1c0,2.4-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4C284.6,219.7,286.5,221.7,286.5,224.1z"/><path class="st0" d="M320.5,173.5c0,2.4-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4C318.5,169.1,320.5,171.1,320.5,173.5z"/><path class="st0" d="M311.5,194.9c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5C309.5,190.3,311.5,192.4,311.5,194.9z"/><path class="st0" d="M268.3,330.6c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C266.5,326.7,268.3,328.5,268.3,330.6z"/><path class="st0" d="M291.3,306.1c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C289.6,302.2,291.3,303.9,291.3,306.1z"/><path class="st0" d="M352.3,183.4c0,2.1-1.7,3.9-3.9,3.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9C350.5,179.5,352.3,181.2,352.3,183.4z"/><path class="st0" d="M325,191.7c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2C323.1,187.5,325,189.3,325,191.7z"/><path class="st0" d="M181.8,144.6c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C179.5,139.4,181.8,141.7,181.8,144.6z"/><path class="st0" d="M279.2,302.1c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C276.9,296.9,279.2,299.3,279.2,302.1z"/><path class="st0" d="M294,327.7c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C291.7,322.5,294,324.9,294,327.7z"/><path class="st0" d="M210.6,333.5c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C208.3,328.3,210.6,330.6,210.6,333.5z"/><path class="st0" d="M208.6,318.5c0,3.1-2.5,5.6-5.6,5.6c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6C206.1,313,208.6,315.4,208.6,318.5z"/><path class="st0" d="M208.6,96.2c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C206,90.5,208.6,93,208.6,96.2z"/><path class="st0" d="M332,202.7c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C329.4,197,332,199.6,332,202.7z"/><path class="st0" d="M378.3,197.5c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C375.7,191.7,378.3,194.3,378.3,197.5z"/><path class="st0" d="M394.4,276.3c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C391.8,270.5,394.4,273.1,394.4,276.3z"/><path class="st0" d="M397.8,208.1c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7C395.2,202.4,397.8,204.9,397.8,208.1z"/><path class="st0" d="M297.1,232.7c0,2.9-2.3,5.2-5.2,5.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2C294.7,227.5,297.1,229.8,297.1,232.7z"/></svg>'}	
				]}
				
				
					
			]
		},
		
		//All Addons
		addons:{
			type:'content',
			children:[
				{type:'row', flex:'h', arrive:function(){$(this).find('.levelBar').each(function(){$(this).objectSettings({level:Math.round(Math.random()*100) + 1});});}, children:[
					{type:'column', flexC:'h', children:[
						{type:'htmlTag', tag:'h2', text:'Level Bar Horizontal', style:'text-align:center;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'levelBar', arrive:visualGuide.events.animateLevelBar.init, color:LCARS.colorGen(visualGuide.uiColors), label:'50', level:50, labelLink:'label'},
						{type:'levelBar', arrive:visualGuide.events.animateLevelBar.init, direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'50', level:50, labelLink:'altLabel' },
						{type:'levelBar', arrive:visualGuide.events.animateLevelBar.init, color:LCARS.colorGen(visualGuide.uiColors), label:'50', level:50, labelLink:'label'},
						{type:'levelBar', arrive:visualGuide.events.animateLevelBar.init, direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'50', level:50, labelLink:'altLabel'}
					]}
				]},
				{type:'htmlTag', tag:'h2', text:'Level Bar Vertical', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'row', arrive:function(){$(this).find('.levelBar').each(function(){$(this).objectSettings({level:Math.round(Math.random()*100) + 1});});}, children:[
					{type:'column', style:'height:250px;', children:[
						{type:'levelBar', orient:'vertical', arrive:visualGuide.events.animateLevelBar.init, color:LCARS.colorGen(visualGuide.uiColors), label:'50', level:50, labelLink:'label' },
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical', arrive:visualGuide.events.animateLevelBar.init,  direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'50', level:50, labelLink:'altLabel' },
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical', arrive:visualGuide.events.animateLevelBar.init, color:LCARS.colorGen(visualGuide.uiColors), label:'50', level:50, labelLink:'label' },
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical', arrive:visualGuide.events.animateLevelBar.init, direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'50', level:50, labelLink:'altLabel' },
					]}
				]},
				{type:'htmlTag', tag:'h2', text:'Level Bar Minimal Sizing', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'row', children:[
					{type:'column', style:'height:250px;', children:[
						{type:'levelBar', noEvent:true,color:LCARS.colorGen(visualGuide.uiColors), label:'0', level:0, labelLink:'label'},
						{type:'levelBar', noEvent:true,direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'0', level:0, labelLink:'altLabel' },
						{type:'levelBar', noEvent:true,color:LCARS.colorGen(visualGuide.uiColors), label:'100', level:0},
						{type:'levelBar', direction:'reverse', noEvent:true,color:LCARS.colorGen(visualGuide.uiColors), altLabel:'100', level:0,}
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical', noEvent:true,color:LCARS.colorGen(visualGuide.uiColors), label:'100', level:0, },
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical',  noEvent:true, direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'0', level:0, labelLink:'altLabel' },
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical', noEvent:true,color:LCARS.colorGen(visualGuide.uiColors), label:'0', level:0, labelLink:'label' },
					]},
					{type:'column', children:[
						{type:'levelBar', orient:'vertical', noEvent:true, direction:'reverse', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'100', level:0},
					]}
				]},
				
				{type:'htmlTag', tag:'h2', text:'Scroll Button', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'row', children:[
					{type:'column',  children:[
						{type:'scrollButton', style:'height:400px; width:75px;', target:'#scroll-wrapper', step:25, color:LCARS.colorGen(visualGuide.uiColors), template:LCARS.templates.sdk.scrollButton.typeAV}
					]},
					{type:'column',  children:[
						{type:'scrollButton', style:'height:400px; width:75px;', target:'#scroll-wrapper', step:25, direction:'down', color:LCARS.colorGen(visualGuide.uiColors), template:LCARS.templates.sdk.scrollButton.typeAV}
					]},
					{type:'column', id:'scroll-wrapper', style:'max-width:400px; height:200px; overflow:auto;', children:[
						{type:'wrapper', style:' width:500px;', children:[
							{type:'htmlTag', tag:'p', text:'"P Tag 24px Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1234567890!@#$%^&*()-=_+/?\|[]{}`~"', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')}
						]}
					]},
					{type:'column', style:'width:400px;', children:[
						{type:'scrollButton', color:LCARS.colorGen(visualGuide.uiColors), template:LCARS.templates.sdk.scrollButton.typeAH, target:'#scroll-wrapper', step:25},
						{type:'scrollButton', color:LCARS.colorGen(visualGuide.uiColors), direction:'right', template:LCARS.templates.sdk.scrollButton.typeAH, target:'#scroll-wrapper', step:25}
					]},
				]}				
			
		]},
		
		//All Dialogs
		dialogs:{
			type:'content',
			flex:'c',
			children:[
				{type:'row', children:[
					{type:'dialog', style:'width:100%;', footerTitle:'Access token 1356-5', headerTitle:'TYPE A', template:LCARS.templates.sdk.dialog.typeA, content:[{type:'htmlTag', tag:'p', text:'"P Tag 24px Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1234567890!@#$%^&*()-=_+/?\|[]{}`~"', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')}]},
					{type:'dialog', style:'width:100%;', footerTitle:'Access token 3548-1', headerTitle:'Type AR', template:LCARS.templates.sdk.dialog.typeAR, content:[{type:'htmlTag', tag:'p', text:'"P Tag 24px Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1234567890!@#$%^&*()-=_+/?\|[]{}`~"', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')}]}
				]},
				{type:'row', children:[
					{type:'dialog', style:'width:100%; margin-top:30px;', template:LCARS.templates.sdk.dialog.typeT, content:[{type:'htmlTag', tag:'p', text:'"Dialog TypeT -- P Tag 24px Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1234567890!@#$%^&*()-=_+/?\|[]{}`~"', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')}]}
					
				]}
			
		]},	
		
		//All Element States
		states:{
			type:'content',
			children:[
			
				{type:'htmlTag', tag:'h3', text:'States', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'row', flex:'h', style:'margin-bottom:30px; width:100%; min-width: 100%; height: 60px;', children:[
					{type:'button', version:'pill', label:'Disabled', disabled:true, color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'button', version:'pill', label:' Blink', state:'blink', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'button', version:'pill', label:'Red Dark-Light', state:'red-dark-light', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'button', version:'pill', label:'White Flash', state:'white-flash', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
					{type:'button', version:'pill', label:'Red Dark Flash', state:'red-dark-blink', style:'text-align:right;', color:LCARS.colorGen(visualGuide.uiColors)},
				]},
				
				{type:'row', flex:'h', style:'margin-bottom:30px;', children:[
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'SDK Default', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'complexButton', id:'button-default-color-sdk', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'999999', label:'bg-', color:'bg-'}
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'USS Not Affiliated Theme Default', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'003366', label:'bg-', color:'bg-'},
						
					]},
				]},
				{type:'htmlTag', tag:'h3', text:'Theme USS Not Affiliated  w/ Red Alert', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
				{type:'row', flex:'h', style:'margin-bottom:30px;', children:[
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'99ccff', label:'bg-blue-1', color:'bg-blue-1'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'3399cc', label:'bg-blue-2', color:'bg-blue-2'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'006699', label:'bg-blue-3', color:'bg-blue-3'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'003366', label:'bg-blue-4', color:'bg-blue-4'},
						
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'ccddbb', label:'bg-green-1', color:'bg-green-1'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'00cc99', label:'bg-green-2', color:'bg-green-2'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'009999', label:'bg-green-3', color:'bg-green-3'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'006666', label:'bg-green-4', color:'bg-green-4'},
						
						
						
					]},
					{type:'column', flex:'v', flexC:'h', version:'red-alert', children:[
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'cccccc', label:'bg-blue-1', color:'bg-blue-1'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'999999', label:'bg-blue-2', color:'bg-blue-2'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'cc0000', label:'bg-blue-3', color:'bg-blue-3'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'660000', label:'bg-blue-4', color:'bg-blue-4'},
						
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'ffff66', label:'bg-green-1', color:'bg-green-1'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'ff0000', label:'bg-green-2', color:'bg-green-2'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'990000', label:'bg-green-3', color:'bg-green-3'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'330000', label:'bg-green-4', color:'bg-green-4'},					
						
					]},
				]},
				{type:'row', flex:'h', style:'margin-bottom:30px;', children:[
					{type:'column', flex:'v', flexC:'h', style:'', children:[
				{type:'htmlTag', tag:'h3', text:'Assorted Colors', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'ff0000', label:'bg-red-1', color:'bg-red-1'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'cc0000', label:'bg-red-2', color:'bg-red-2'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'990000', label:'bg-red-3', color:'bg-red-3'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'eeeeee', label:'bg-grey-1', color:'bg-grey-1'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'cccccc', label:'bg-grey-2', color:'bg-grey-2'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'666666', label:'bg-grey-3', color:'bg-grey-3'},
						{type:'complexButton', class:'text-transform-none', template:LCARS.templates.sdk.buttons.complexText.typeG, text:'ffffff', label:'bg-white', color:'bg-white'},

						
						
						
					]},
					{type:'column', flex:'v', flexC:'h', style:'', children:[
						{type:'htmlTag', tag:'h3', text:'Text Colors', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'htmlTag', tag:'p', text:'text-blue-1', color:'text-blue-1'},
						{type:'htmlTag', tag:'p', text:'text-blue-2', color:'text-blue-2'},
						{type:'htmlTag', tag:'p', text:'text-blue-3', color:'text-blue-3'},
						{type:'htmlTag', tag:'p', text:'text-blue-4', color:'text-blue-4'},
						{type:'htmlTag', tag:'p', text:'text-green-1', color:'text-green-1'},
						{type:'htmlTag', tag:'p', text:'text-green-2', color:'text-green-2'},
						{type:'htmlTag', tag:'p', text:'text-green-3', color:'text-green-3'},
						{type:'htmlTag', tag:'p', text:'text-green-4', color:'text-green-4'},
						{type:'htmlTag', tag:'p', text:'text-red-1', color:'text-red-1'},
						{type:'htmlTag', tag:'p', text:'text-red-2', color:'text-red-2'},
						{type:'htmlTag', tag:'p', text:'text-red-3', color:'text-red-3'},
						{type:'htmlTag', tag:'p', text:'text-grey-1', color:'text-grey-1'},
						{type:'htmlTag', tag:'p', text:'text-grey-2', color:'text-grey-2'},
						{type:'htmlTag', tag:'p', text:'text-grey-3', color:'text-grey-3'},
						{type:'htmlTag', tag:'p', text:'text-white', color:'text-white'},
						{type:'htmlTag', tag:'div', class:'red-alert', children:[
							{type:'htmlTag', tag:'h3', text:'Red Alert Text Colors', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
							{type:'htmlTag', tag:'p', text:'text-blue-1', color:'text-blue-1'},
							{type:'htmlTag', tag:'p', text:'text-blue-2', color:'text-blue-2'},
							{type:'htmlTag', tag:'p', text:'text-blue-3', color:'text-blue-3'},
							{type:'htmlTag', tag:'p', text:'text-blue-4', color:'text-blue-4'},
							{type:'htmlTag', tag:'p', text:'text-green-1', color:'text-green-1'},
							{type:'htmlTag', tag:'p', text:'text-green-2', color:'text-green-2'},
							{type:'htmlTag', tag:'p', text:'text-green-3', color:'text-green-3'},
							{type:'htmlTag', tag:'p', text:'text-green-4', color:'text-green-4'}
						]},
					]},
				]},
				
		]},	
		
		//All Basic Components		
		components:{
			type:'content',
			children:[
				{type:'row', flex:'h', children:[
					{type:'column', flexC:'h', children:[
						{type:'htmlTag', tag:'h3', text:'Block', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},			
						{type:'block', color:LCARS.colorGen(visualGuide.uiColors), label:'Block Label'},
						{type:'block', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'Block Alt Label'},
						{type:'block', color:LCARS.colorGen(visualGuide.uiColors), style:'text-align:right', label:'Block Label'},
						{type:'block', color:LCARS.colorGen(visualGuide.uiColors), style:'text-align:right', altLabel:'Block Alt Label'},
					]},
					{type:'column', flexC:'h', children:[
						{type:'htmlTag', tag:'h3', text:'Bar', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},			
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), label:'label'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'altLabel'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'tiny'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'small'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'medium', altLabel:'altLabel'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'large', label:'label'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'large', altLabel:'altLabel'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'xlarge', label:'label'},
						{type:'bar', color:LCARS.colorGen(visualGuide.uiColors), size:'xlarge', altLabel:'altLabel'},
					]},
					{type:'column', children:[
						{type:'htmlTag', tag:'h3', text:'Cap', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), label:'25', style:'width:60px; height:60px; min-width:60px;', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), label:'09', style:'width:60px; height:60px; min-width:60px;', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'74', style:'width:60px; height:60px; min-width:60px;', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), altLabel:'38', style:'width:60px; height:60px; min-width:60px;', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'tiny', style:'width:10px; height:10px', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'tiny', style:'width:10px; height:10px', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'small', style:'width:15px; height:15px', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'small', style:'width:15px; height:15px', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'medium', style:'width:30px; height:30px', label:'Cap', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'medium', style:'width:30px; height:30px', label:'Cap', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'large', style:'width:90px; height:90px', label:'Cap', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'large', style:'width:90px; height:90px', label:'Cap', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'large', style:'width:90px; height:90px', altLabel:'Cap', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'large', style:'width:90px; height:90px', altLabel:'Cap', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'xlarge', style:'width:125px; height:125px', label:'Cap', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'xlarge', style:'width:125px; height:125px', label:'Cap', version:'right'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'xlarge', style:'width:125px; height:125px', altLabel:'Cap', version:'left'},
						{type:'cap', color:LCARS.colorGen(visualGuide.uiColors), size:'xlarge', style:'width:125px; height:125px', altLabel:'Cap', version:'right'},
					]},
					{type:'content', children:[
						{type:'htmlTag', tag:'h3', text:'Oval', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'oval', color:LCARS.colorGen(visualGuide.uiColors)},
						{type:'htmlTag', tag:'h3', text:'Oval Small', style:'margin-top:10px;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
						{type:'oval', color:LCARS.colorGen(visualGuide.uiColors), size:'small'},
					]}
				]}
		]},			
		
	};

//This is the UI
visualGuide.uiViewport = {
	type:'wrapper', 
	class:'dialog typeD',
	flex:'v',
	version:'column',
	children:[
		//Header
		{type:'row', version:'header', flex:'h', children:[{type:'title', text:'LCARS SDK Visual Guide'}, {type:'bar', flexC:'h', color:LCARS.colorGen(visualGuide.uiColors)}]},
		
		//Scroll Content Area
		{type:'content', flexC:'v', id:'viewport-content'},
		
		//Footer
		{type:'row', version:'footer', flex:'h', children:[{type:'button', color:LCARS.colorGen(visualGuide.uiColors), noEvent:true, flexC:'h'}]},
	
		//Section Control Buttons
		{type:'column', id:'ui-controls',children:[
			
			//Top Row
			{type:'row', flex:'h', children:[
			
				{type:'button', flexC:'h', color:LCARS.colorGen(visualGuide.uiColors), label:'Buttons', click:function(){visualGuide.events.generateVisualGroups('buttons')}},
				
				{type:'button', flexC:'h', color:LCARS.colorGen(visualGuide.uiColors),  label:'Elbows', click:function(){visualGuide.events.generateVisualGroups('elbows')}},
				
				{type:'complexButton', color:LCARS.colorGen(visualGuide.uiColors), arrive:visualGuide.events.numberGenerate.three, text:'562',  template:[{type:'button'}, {type:'block'}, {type:'text'}], label:'Addons', click:function(){visualGuide.events.generateVisualGroups('addons');}},
				
				{type:'complexButton', color:LCARS.colorGen(visualGuide.uiColors), arrive:visualGuide.events.numberGenerate.six,  text:'685431',  template:[{type:'text'}, {type:'button'}], label:'Dialogs', click:function(){visualGuide.events.generateVisualGroups('dialogs')}},
			]},
			
			//Bottom Row
			{type:'row', flex:'h', children:[
					{type:'button', label:'Media', flexC:'h', style:'max-width:165px;', color:LCARS.colorGen(visualGuide.uiColors), click:function(){visualGuide.events.generateVisualGroups('Media')}}, 
					{type:'button', label:'Components', flexC:'h', style:'max-width:165px;', color:LCARS.colorGen(visualGuide.uiColors), click:function(){visualGuide.events.generateVisualGroups('components');}}, 
					
				{type:'complexButton', flexC:'h', arrive:visualGuide.events.numberGenerate.three, color:LCARS.colorGen(visualGuide.uiColors), text:'648', template:[
					{type:'button',label:'Typography', click:function(){visualGuide.events.generateVisualGroups('typography')}}, 
					{type:'block',  color:LCARS.colorGen(visualGuide.uiColors)}, 
					{type:'text'}
				]},
				
				{type:'complexButton', color:LCARS.colorGen(visualGuide.uiColors), arrive:visualGuide.events.numberGenerate.six, text:'023251', template:[{type:'text'}, {type:'button'}, {type:'cap', version:'right', color:LCARS.colorGen(visualGuide.uiColors)}], label:'States-colors', click:function(){visualGuide.events.generateVisualGroups('states')}},
			]}       
		]}	
	
	]
}
	   
	   

$(document).on('ready', function(){
	$(visualGuide.uiViewport).createObject({appendTo:'body', success:function(){
		//Shows this section on load.
		visualGuide.events.generateVisualGroups('buttons')
	}});
});
/** LCARS SDK 16323.311
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
				//Large
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
				//Large
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
				//Large
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
				//Large
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
				//Small
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
				//Small
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
				//Medium
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
				//Medium
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
				//Base
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
				//Base
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
				//Default
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
				//Default 
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
					{type:'htmlTag', tag:'h2', text:'IMG', style:'text-align:center;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'img', src:'emblem.png'},
				]},
				{type:'column', flexC:'h', children:[
					{type:'htmlTag', tag:'h2', text:'SVG', style:'text-align:center;', color:LCARS.colorGen(visualGuide.uiColors).replace('bg-', 'text-')},
					{type:'svg', xml:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}.st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_2_);}.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#CC0000;}.st3{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_3_);}.st4{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_4_);}</style><g id="LCARS_SDK_-_command_2_"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="129.9082" y1="506" x2="129.9082" y2="425.6671"><stop offset="0" style="stop-color:#3399CC"/><stop offset="1" style="stop-color:#006699"/></linearGradient><path class="st0" d="M162.8,425.7C124.7,467.4,97,506,97,506s1.5-31.2,8.7-80.3H162.8z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="405.5803" y1="464.5993" x2="405.5803" y2="425.673"><stop offset="0" style="stop-color:#3399CC"/><stop offset="1" style="stop-color:#006699"/></linearGradient><path class="st1" d="M411.2,425.7c3.3,24.5,4.5,38.9,4.5,38.9s-8.1-16.8-20.2-38.9L411.2,425.7z"/><path class="st2" d="M191.9,395.7c-6.8,6.7-13.5,13.5-19.9,20.3l-64.6-0.3c1-6.4,2.1-13.1,3.3-20L191.9,395.7z"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="187.4707" y1="385.6646" x2="187.4707" y2="6"><stop offset="0" style="stop-color:#006699"/><stop offset="1" style="stop-color:#003366"/></linearGradient><path class="st3" d="M262.6,339.4c-20.1,11.5-40.7,28-60.4,46.3l-90,0C131.2,280.5,172.7,126.3,262.7,6"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="338.8686" y1="385.6671" x2="338.8686" y2="6"><stop offset="0" style="stop-color:#006699"/><stop offset="1" style="stop-color:#003366"/></linearGradient><path class="st4" d="M272.7,6c79.8,123.6,116.6,285,132.4,379.7l-33,0c-18.1-28.7-38.7-55.8-55-62.2c-13.9,1.3-29,7.1-44.4,15.9"/><path class="st2" d="M389.9,415.7c-3.7-6.5-7.6-13.2-11.7-20l28.5,0c1.1,7.1,2.1,13.8,3,20L389.9,415.7z"/></g></svg>'}	
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
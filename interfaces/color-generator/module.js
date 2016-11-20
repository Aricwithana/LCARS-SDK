/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4'];
   
//Template for the Bracket Element   
var bracket = {type:'wrapper', class:'sdk bracket typeA', children:[
		{type:'wrapper', class:'content'},
		{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},	
		{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},	
		{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},	
		{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},        
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors), children:[{type:'bar', color:'bg-white'}]},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}                     
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}                     
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors), children:[{type:'bar', color:'bg-white'}]},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}                    
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}                     
		]}
	]
};  

//UI Framing.  Uses the Arrive event to trigger the Viewport scaling.
var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', arrive:function(){$(this).viewport('zoom', {width:1920, height:1080});}, children:[
	
    //Left Column Wrapper
    {type:'column', flex:'v', children:[
        {type:'wrapper', children:[
		
			//Bracket
            {type:'bracket', template:bracket},
			
			//Top Button Group
            {type:'wrapper', flex:'h', version:'button-wrap', children:[
                {type:'button', color:LCARS.colorGen(uiColors), version:'left'},
                {type:'button', color:LCARS.colorGen(uiColors)},
                {type:'button', color:LCARS.colorGen(uiColors), version:'left'},
                {type:'button', color:LCARS.colorGen(uiColors)},
                {type:'button', color:LCARS.colorGen(uiColors), version:'left'},
                {type:'button', color:LCARS.colorGen(uiColors)}            
            ]},
			
			//Bottom Button Group
            {type:'wrapper', flex:'h', version:'button-wrap', children:[
                {type:'button', color:LCARS.colorGen(uiColors), version:'left'},
                {type:'button', color:LCARS.colorGen(uiColors)},
                {type:'button', color:LCARS.colorGen(uiColors), version:'left'},
                {type:'button', color:LCARS.colorGen(uiColors)},
                {type:'button', color:LCARS.colorGen(uiColors), version:'left', state:'ra_g1'},
                {type:'button', color:LCARS.colorGen(uiColors)}            
            ]}
        ]},
		
		{type:'column', style:'justify-content: flex-end;', flexC:'v', flex:'v', children:[
			{type:'complexButton', text:'55', template:LCARS.templates.sdk.buttons.complexText.typeG, colors:LCARS.colorGroupGen(uiColors, 3)}
		]}
		
    ]},
	
	//Column Buttons
	{type:'wrapper', version:'column', style:'width:150px;', flex:'v', children:[
		{type:'button', color:LCARS.colorGen(uiColors)},
		{type:'button', color:LCARS.colorGen(uiColors)},
		{type:'button', color:LCARS.colorGen(uiColors), size:'step-two'},
		{type:'button', color:LCARS.colorGen(uiColors), size:'step-three'},
		{type:'button', color:LCARS.colorGen(uiColors), size:'step-three'},
		{type:'button', color:LCARS.colorGen(uiColors)},
		{type:'button', color:LCARS.colorGen(uiColors)},
		{type:'button', color:LCARS.colorGen(uiColors)},
		{type:'button', color:LCARS.colorGen(uiColors), flexC:'v'}
	]} ,        
	
	//Main Area
    {type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexC:'h', children:[   
	
		//Header
        {type:'row', version:'header', flex:'h', children:[
			
			//Elbow & Button
            {type:'column', flex:'v', children:[
                {type:'button', color:LCARS.colorGen(uiColors), size:'step-two'},
                {type:'elbow', version:'bottom-left', color:LCARS.colorGen(uiColors), flexC:'v'}
            ]},
			
			{type:'wrapper', flexC:'h', flex:'v', children:[
			
				//Header Content Area
				{type:'wrapper', version:'content', flexC:'v', children:[
				
					//Header Title
					{type:'title', text:'LCARS Color Pattern Generator'},
					
					//Header Pill Button Group
					{type:'wrapper', flex:'h', class:'button-wrap', children:[
						{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},
						{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},
						{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},
						{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},
						{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},
						{type:'button', color:LCARS.colorGen(uiColors), version:'pill', label:'Docs', state:'blink', href:'https://github.com/Aricwithana/LCARS-SDK/wiki'}           
					]},
				]},
				
				//Header Bottom Bars
				{type:'row', version:'frame', flex:'h', children:[
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors), flexC:'h'},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)}
				]}
			
			]}
			
        ]},
		
		//Main Content Area
        {type:'wrapper', class:'main', flex:'h', flexC:'v', children:[
		
			//Left Columns & Elbow
            {type:'wrapper', version:'column', flex:'v', children:[
                {type:'elbow', version:'top-left', color:LCARS.colorGen(uiColors), class:'step-two'},
                {type:'button', color:LCARS.colorGen(uiColors)},
                {type:'button', color:LCARS.colorGen(uiColors), size:'step-two'},
                {type:'button', color:LCARS.colorGen(uiColors)},
                {type:'button', color:LCARS.colorGen(uiColors), size:'step-two'},
                {type:'button', color:LCARS.colorGen(uiColors), flexC:'v'}
            ]},
			
			{type:'column', flexC:'h', flex:'v', children:[
				//Top Bars Group
				{type:'row', flex:'h', class:'frame', children:[
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors), version:'small'},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors), flexC:'h'},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)}
				]},
				
				//Main Content Wrapper
				{type:'wrapper', class:'content', flexC:'v', style:' overflow:auto;'}
        	]}
		]}
    ]}
]}; 

$(document).on('ready', function(){
	$(nemesisUI).createObject({appendTo:'body'});
});


/** LCARS SDK 19182.4
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

$( document ).ready(function() {
        $('body').append( LCARS.create(nemesisUI).dom );
});

var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4'];
   


var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', 
	arrive:function(){LCARS.helper.viewportZoom(this.dom, {width:1440, height:1080}); 
		window.addEventListener("resize", function(){LCARS.helper.viewportZoom(this.dom, {width:1440, height:1080});});},

	children:[
    //Left Column Wrapper
    {type:'column', flex:'v', children:[
        {type:'wrapper', children:[
			
			//Bracket
            {type:'defaultBracket', namespace:'sdk', coloring:{
				elbow:LCARS.helper.aRandColor(uiColors),
				column1:LCARS.helper.aRandColorGroup(uiColors, 3),				
				column2:LCARS.helper.aRandColorGroup(uiColors, 3),				
				column3:LCARS.helper.aRandColorGroup(uiColors, 3),				
				column4:LCARS.helper.aRandColorGroup(uiColors, 3),
				animated:'bg-red-1'                                          
			}},
			
			//Top Button Group
            {type:'wrapper', flex:'h', version:'button-wrap', children:[
                {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round-left'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round-left'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round-left'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)}            
            ]},
			
			//Bottom Button Group
            {type:'wrapper', flex:'h', version:'button-wrap', children:[
                {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round-left'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round-left'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round-left', state:'ra_g1'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)}            
            ]}
        ]},
		
		{type:'column', style:{'justify-content':'flex-end'}, flexc:'v', flex:'v', children:[
			{type:'complexButton', children:[{type:'cap', version:'round-left'}, {type:'block'}, {type:'text', text:'55'}, {type:'button', version:'round-right'}], colors:LCARS.helper.aRandColorGroup(uiColors, 4)}
		]}
		
    ]},
	
	//Column Buttons
	{type:'wrapper', version:'column', flex:'v', style:{'width':'150px'}, children:[
		{type:'button', color:LCARS.helper.aRandColor(uiColors)},
		{type:'button', color:LCARS.helper.aRandColor(uiColors)},
		{type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
		{type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-three'},
		{type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-three'},
		{type:'button', color:LCARS.helper.aRandColor(uiColors)},
		{type:'button', color:LCARS.helper.aRandColor(uiColors)},
		{type:'button', color:LCARS.helper.aRandColor(uiColors)},
		{type:'button', color:LCARS.helper.aRandColor(uiColors), flexc:'v', altLabel:'LCARS'}
	]} ,        
	
	//Main Area
    {type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexc:'h', children:[   
	
		//Header
        {type:'row', version:'header', flex:'h', children:[
			
			//Elbow & Button
            {type:'column', flex:'v', children:[
                {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
                {type:'elbow', version:'horizontal', direction:'bottom-left', color:LCARS.helper.aRandColor(uiColors), flexc:'v'}
            ]},
			
			{type:'wrapper', flexc:'h', flex:'v', children:[
			
				//Header Content Area
				{type:'wrapper', version:'content', flexc:'v', children:[
				
					//Header Title
					{type:'title', text:'LCARS Color Pattern Generator'},
					
					//Header Round Button Group
					{type:'wrapper', flex:'h', version:'button-wrap', children:[
						{type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
						{type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
						{type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
						{type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
						{type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round'},
						{type:'button', color:LCARS.helper.aRandColor(uiColors), version:'round', label:'Docs', state:'blink', href:'https://github.com/Aricwithana/LCARS-SDK/wiki'}           
					]},
				]},
				
				//Header Bottom Bars
				{type:'row', version:'frame', flex:'h', children:[
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h'},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)}
				]}
			
			]}
			
        ]},
		
		//Main Content Area
        {type:'wrapper', version:'main', flex:'h', flexc:'v', children:[
		
			//Left Columns & Elbow
            {type:'wrapper', version:'column', flex:'v', children:[
                {type:'elbow', version:'horizontal', direction:'top-left', color:LCARS.helper.aRandColor(uiColors), class:'step-two'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors)},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), size:'step-two'},
                {type:'button', color:LCARS.helper.aRandColor(uiColors), flexc:'v'}
            ]},
			
			{type:'column', flexc:'h', flex:'v', children:[
				//Top Bars Group
				{type:'row', flex:'h', version:'frame', children:[
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors), size:'small'},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors), flexc:'h'},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)},
					{type:'bar', color:LCARS.helper.aRandColor(uiColors)}
				]},
				
				//Main Content Wrapper
				{type:'wrapper', style:{'overflow':'auto'}, version:'content', flexc:'v'}
        	]}
		]}
    ]}
]}; 

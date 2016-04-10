var colorArray = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4', 'bg-green-1','bg-green-2','bg-green-3','bg-green-4', 'bg-white'];
var timer_colorChanges = null
var array_colorChangeObjects = null;
    
var nemesisBracket = {type:'wrapper', class:'sdk bracket typeA', children:[
		{type:'wrapper', class:'content'},
		{type:'elbow', version:'top-left', size:'small', color:'bg-blue-4', children:[{type:'bar'}], noEvent:true},	
		{type:'elbow', version:'top-right', size:'small', color:'bg-blue-4', children:[{type:'bar'}], noEvent:true},	
		{type:'elbow', version:'bottom-left', size:'small', color:'bg-blue-4', children:[{type:'bar'}], noEvent:true},	
		{type:'elbow', version:'bottom-right', size:'small', color:'bg-blue-4', children:[{type:'bar'}], noEvent:true},        
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:'bg-blue-2'},
			{type:'bar', flexC:'v', color:'bg-blue-1', children:[{type:'bar', color:'bg-white'}]},
			{type:'bar', flexC:'v', color:'bg-blue-2'}                     
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:'bg-green-3'},
			{type:'bar', flexC:'v', color:'bg-red-2'},
			{type:'bar', flexC:'v', color:'bg-green-3'}                     
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:'bg-blue-2'},
			{type:'bar', flexC:'v', color:'bg-blue-1', children:[{type:'bar', color:'bg-white'}]},
			{type:'bar', flexC:'v', color:'bg-blue-2'}                    
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:'bg-green-3'},
			{type:'bar', flexC:'v', color:'bg-red-2'},
			{type:'bar', flexC:'v', color:'bg-green-3'}                     
		]}
	]
};  

var nemesisUI = {type:'wrapper', id:'wpr_viewport', class:'scale red-alert', version:'row', flex:'h', arrive:function(){$('#wpr_viewport').viewport('scale', {width:1920, height:1080});}, children:[

    {type:'wrapper', flex:'h', id:'wpr_leftControls', children:[
	
        {type:'column', flex:'v', hidden:true, children:[
		
            {type:'bracket', template:nemesisBracket},
			
            {type:'wrapper', id:'wpr_blockControls', flex:'h', version:'buttonWrap', children:[
                {type:'button', color:'bg-blue-1', version:'left'},
                {type:'button', color:'bg-green-2'},
                {type:'button', color:'bg-green-3', version:'left'},
                {type:'button', color:'bg-green-1'},
                {type:'button', color:'bg-blue-3', version:'left'},
                {type:'button', color:'bg-green-4'}               
            ]},
			
            {type:'wrapper', id:'wpr_tabControls', flex:'h', version:'buttonWrap', children:[
                {type:'button', color:'bg-green-4', version:'left'},
                {type:'button', color:'bg-blue-4', version:'right'},
                {type:'button', color:'bg-green-3', version:'left'},
                {type:'button', color:'bg-blue-2', version:'right'},
                {type:'button', color:'bg-blue-4', version:'left', state:'ra_g1'},
                {type:'button', color:'bg-blue-3', version:'right'}            
            ]}
			
        ]}
    ]},
	
	{type:'column', style:'margin-left:10px; width:150px;', flex:'v', children:[
		{type:'button', color:'bg-green-4', hidden:true},
		{type:'button', color:'bg-green-3', hidden:true, size:'twoHeight'},
		{type:'button', color:'bg-blue-4', hidden:true},
		{type:'button', color:'bg-blue-3', hidden:true, size:'threeHeight'},
		{type:'button', color:'bg-green-1', hidden:true},
		{type:'button', color:'bg-green-3', hidden:true, size:'threeHeight'},
		{type:'button', color:'bg-green-4', hidden:true, size:'twoHeight'},
		{type:'button', color:'bg-blue-3', hidden:true, flexC:'v'}
	]} ,        
	
    {type:'column', id:'wpr_mainView', flex:'v', flexC:'h', children:[ 
	  
        {type:'wrapper', flex:'h', version:'header', children:[
		
            {type:'wrapper', version:'column', flex:'v', children:[
                {type:'button', color:'bg-green-2', size:'threeHeight', hidden:true},
                {type:'elbow', version:'bottom-left', color:'bg-blue-2', flexC:'v', hidden:true}
            ]},
			{type:'wrapper', flex:'v', flexC:'h', children:[
			
				{type:'content', flexC:'v', hidden:true, children:[
					{type:'title', text:'LCARS ALERT HUE ROTATION'},
					{type:'wrapper', flexC:'v', id:'wpr_commandButtons', flex:'h', class:'buttonWrap', children:[
						{type:'button', color:'bg-blue-3', version:'pill'},
						{type:'button', color:'bg-green-3', version:'pill'},
						{type:'button', color:'bg-blue-4', version:'pill'},
						{type:'button', color:'bg-green-1', version:'pill', label:'Documentation', state:'blink', href:'https://github.com/Aricwithana/LCARS-SDK/wiki'}           
					]}
				]},
				
				{type:'row', style:'margin-left:206px;', flex:'h', children:[
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true},
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-blue-2', flexC:'h', hidden:true},
					{type:'bar', color:'bg-blue-2', hidden:true},
					{type:'bar', color:'bg-blue-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true},
					{type:'bar', color:'bg-green-1', hidden:true}
				]}
            ]}
			
        ]},
		
        {type:'wrapper', class:'main', flex:'h', flexC:'v', children:[
            {type:'wrapper', version:'column', flex:'v', children:[
                {type:'elbow', version:'top-left', color:'bg-blue-2', class:'threeHeight', hidden:true},
                {type:'button', color:'bg-blue-3', hidden:true},
                {type:'button', color:'bg-green-3', hidden:true},
                {type:'button', color:'bg-blue-1', hidden:true},
                {type:'button', color:'bg-blue-4', size:'twoHeight', hidden:true},
                {type:'button', color:'bg-green-2', flexC:'v', hidden:true}
            ]},
			{type:'wrapper', flex:'v', flexC:'h', children:[
				{type:'row',  style:'margin-left:206px;',flex:'h', children:[
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true, size:'small'},
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-blue-2', flexC:'h', hidden:true}, 
					{type:'bar', color:'bg-blue-2', hidden:true},
					{type:'bar', color:'bg-blue-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true},
					{type:'bar', color:'bg-green-1', hidden:true}
				]},
				{type:'wrapper', version:'content', children:[]}
			]}
        ]}
    ]}
]};   
 

// Barebones 'Automated' Show Pattern - idea testing a later proper module.
function showMainFrame(){
    var headerBars = $('#wpr_mainView > .header .row *');
    var headerColumn = $('#wpr_mainView > .header .column > *');
    var mainBars = $('#wpr_mainView > .main .row *');
    var mainColumn = $('#wpr_mainView > .main > .elbow, #wpr_mainView > .main .column > *');
    var leftControlsColumn = $('#wpr_leftControls > .column > *')
    
    sequenceHeaderPattern = []
    sequenceFooterPattern = []
    
    $(headerColumn).each(function(){
        sequenceHeaderPattern.push(this);
    });       
    
    $(headerBars).each(function(){
        sequenceHeaderPattern.push(this);
    });
    
    sequenceHeaderPattern.reverse()
    
    $(mainBars).each(function(){
        sequenceFooterPattern.push(this);
    });
    
    sequenceFooterPattern.reverse()
    
    $(mainColumn).each(function(){
        sequenceFooterPattern.push(this); 
    }); 
    
    $(leftControlsColumn).each(function(){
        sequenceFooterPattern.push(this); 
    }); 
    
    sequenceFooterPattern.push($('#wpr_leftControls > :first-child'))
    sequenceFooterPattern.push($('.header .content'))

    $(sequenceHeaderPattern).showObjectSequence({});
    $(sequenceFooterPattern).showObjectSequence({success:function(){
        $('#wpr_mainView .header > *:not(.column)').showObject({success:function(){
            array_colorChangeObjects = $('#wpr_leftControls .button');
            raMainFrameSetup();
            timer_colorChanges = setInterval(function(){
                var random = Math.floor(Math.random()*(array_colorChangeObjects.length+1))
                $(array_colorChangeObjects[random]).objectSettings({color:LCARS.colorGen(colorArray)});
            }, 3750);
        }});
    }});
}


// Barebones 'Automated' Alert System - idea testing a later proper module.    
var headerRASequence = []
var mainRASequence = []
var timer_whiteFlash = null;  
    
function raMainFrameSetup(){
    
    var headerBars = $('#wpr_mainView > .header .row *');
    var headerColumn = $('#wpr_mainView > .header .column > *');
    var mainBars = $('#wpr_mainView > .main .row *');
    var mainColumn = $('#wpr_mainView > .main .column > *');

    $(headerColumn).each(function(){
        headerRASequence.push(this);
    });       
    $(headerBars).each(function(){
        headerRASequence.push(this);
    });
    
    $(mainColumn).each(function(){
        mainRASequence.push(this);
    });
    
    mainRASequence.reverse();
    
    $(mainBars).each(function(){
        mainRASequence.push(this); 
    });
    var posValHeader = .5;
    var posValMain = .1;
    $(headerRASequence).each(function(){
        $(this).attr('style', '-webkit-animation-delay:' + posValHeader+'s; animation-delay:' + posValHeader+'s;')
        $(this).addClass('alertFlash');
        posValHeader = posValHeader + .1
    });
    
    $(mainRASequence).each(function(){
        $(this).attr('style', '-webkit-animation-delay:' + posValMain+'s; animation-delay:' + posValMain+'s;')
        
        $(this).addClass('alertFlash');
        posValMain = posValMain + .1
    }); 
    console.log(posValMain*100);
    timer_whiteFlash = setInterval(function(){$('body').toggleClass('alertFlash')}, posValMain*1000);
}    

$(document).on('ready', function(){
	$(nemesisUI).createObject({appendTo:'body', success:function(){ 
		showMainFrame();
	}});
});

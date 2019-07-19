
$( document ).ready(function() {
        $('body').append( LCARS.create(nemesisUI).dom );
		showMainFrame();
});

var colorArray = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4', 'bg-green-1','bg-green-2','bg-green-3','bg-green-4', 'bg-white'];
var timer_colorChanges = null
var array_colorChangeObjects = null;
    
var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row scale red-alert', flex:'h', arrive:function(){var dom = this.dom; LCARS.helper.viewportZoom(dom, {width:1440, height:1080}); 
		window.addEventListener("resize", function(){LCARS.helper.viewportZoom(dom, {width:1440, height:1080});});},

	children:[

    {type:'wrapper', version:'column', flex:'h', id:'wpr_leftControls', children:[
	
        {type:'wrapper', version:'column', flex:'v', hidden:true, children:[
		
            {type:'defaultBracket', namespace:'sdk', coloring:{
				elbow:'bg-blue-4',
				column1:['bg-blue-2', 'bg-blue-1', 'bg-blue-2'],				
				column2:['bg-blue-3', 'bg-blue-2', 'bg-blue-3'],				
				column3:['bg-blue-2', 'bg-blue-1', 'bg-blue-2'],				
				column4:['bg-blue-3', 'bg-blue-2', 'bg-blue-3'],
				animated:'bg-red-1'                                          
			}},
			
            {type:'wrapper', id:'wpr_blockControls', flex:'h', version:'button-wrap', children:[
                {type:'button', color:'bg-blue-1', version:'round-left'},
                {type:'button', color:'bg-green-2'},
                {type:'button', color:'bg-green-3', version:'round-left'},
                {type:'button', color:'bg-green-1'},
                {type:'button', color:'bg-blue-3', version:'round-left'},
                {type:'button', color:'bg-green-4'}               
            ]},
			
            {type:'wrapper', id:'wpr_tabControls', flex:'h', version:'button-wrap', children:[
                {type:'button', color:'bg-green-4', version:'round-left'},
                {type:'button', color:'bg-blue-4', version:'round-right'},
                {type:'button', color:'bg-green-3', version:'round-left'},
                {type:'button', color:'bg-blue-2', version:'round-right'},
                {type:'button', color:'bg-blue-4', version:'round-left', state:'ra_g1'},
                {type:'button', color:'bg-blue-3', version:'round-right'}            
            ]}
			
        ]}
    ]},

	{type:'wrapper', version:'column', id:'wpr_centerControls', style:{'margin-left':'10px', 'width':'150px'}, flex:'v', children:[
		{type:'button', color:'bg-green-4', hidden:true},
		{type:'button', color:'bg-green-3', hidden:true, size:'twoHeight'},
		{type:'button', color:'bg-blue-4', hidden:true},
		{type:'button', color:'bg-blue-3', hidden:true, size:'threeHeight'},
		{type:'button', color:'bg-green-1', hidden:true},
		{type:'button', color:'bg-green-3', hidden:true, size:'threeHeight'},
		{type:'button', color:'bg-green-4', hidden:true, size:'twoHeight'},
		{type:'button', color:'bg-blue-3', hidden:true, flexc:'v'}
	]} , 
	
    {type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexc:'h', children:[ 
	  
        {type:'wrapper', flex:'h', version:'header', children:[
		
            {type:'wrapper', version:'column', flex:'v', children:[
                {type:'button', color:'bg-green-2', size:'threeHeight', hidden:true},
                {type:'elbow', version:'horizontal', direction:'bottom-left', color:'bg-blue-2', flexc:'v', hidden:true}
            ]},
			{type:'wrapper', flex:'v', flexc:'h', children:[
			
				{type:'content', flexc:'v', hidden:true, children:[
					{type:'title', text:'LCARS ALERT HUE ROTATION'},
					{type:'wrapper', flexc:'v', id:'wpr_commandButtons', flex:'h', version:'button-wrap', children:[
						{type:'button', color:'bg-blue-3', version:'round'},
						{type:'button', color:'bg-green-3', version:'round'},
						{type:'button', color:'bg-blue-4', version:'round'},
						{type:'button', color:'bg-green-1', version:'round', label:'Documentation', state:'blink', href:'https://github.com/Aricwithana/LCARS-SDK/wiki'}           
					]}
				]},
				
				{type:'row', style:{'margin-left':'206px'}, flex:'h', children:[
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true},
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-blue-2', hidden:true, flexc:'h'},
					{type:'bar', color:'bg-blue-2', hidden:true},
					{type:'bar', color:'bg-blue-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true},
					{type:'bar', color:'bg-green-1', hidden:true}
				]}
            ]}
			
        ]},
		
        {type:'wrapper', version:'main', flex:'h', flexc:'v', children:[
            {type:'wrapper', version:'column', flex:'v', children:[
                {type:'elbow', version:'horizontal threeHeight', direction:'top-left', color:'bg-blue-2', hidden:true},
                {type:'button', color:'bg-blue-3', hidden:true},
                {type:'button', color:'bg-green-3', hidden:true},
                {type:'button', color:'bg-blue-1', hidden:true},
                {type:'button', color:'bg-blue-4', size:'twoHeight', hidden:true},
                {type:'button', color:'bg-green-2', flexc:'v', hidden:true}
            ]},
			{type:'wrapper', flex:'v', flexc:'h', children:[
				{type:'row',  style:{'margin-left':'206px'},flex:'h', children:[
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-green-4', hidden:true, size:'small'},
					{type:'bar', color:'bg-green-3', hidden:true},
					{type:'bar', color:'bg-blue-2', hidden:true, flexc:'h'}, 
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
    var leftControlsColumn = $('#wpr_leftControls > .column > *');
	var centerControlsColumn = $('#wpr_centerControls > *');
   
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

    $(centerControlsColumn).each(function(){
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
                var random = Math.floor(Math.random()*(array_colorChangeObjects.length));
                $(array_colorChangeObjects[random]).objectSet('color', LCARS.helper.aRandColor(colorArray));
            }, 3750);
        }});
    }});
}


// Barebones 'Automated' Alert System - idea testing a later proper module.    
var headerRASequence = []
var mainRASequence = []
var timer_whiteFlash = null;  
 var timing_sequence = 65;
 
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


/** +brief Show Object
 *	@args - {fade:boolean, timing:int, success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading.
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'show' event specifically for that object.
 *          This allows elements to trigger events when they appear within view.
 */	
$.fn.showObject = function(args){
    this.each(function(){
        var objectID = $(this).attr('id'); 
        if($(this).hasClass('fade') && args.fade !== false){
            $(this).removeClass('hidden');
            $(this).css('opacity', '1');
            
            //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing + timing_sequence);}}
        }else{
            $(this).removeClass('hidden');
            //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing + timing_sequence);}}
        }   
    });
    if(typeof args.success === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    return this;   
}

/** +brief Sequence Show - Delay and sequential
 *  !note - Show elements and triggers optional individual element Show function.
 *  @args - {fade:boolean, timing:250, success:function(){}}
 *  @args.fade - true/false - Override objects fade setting.
 *  @args.timing - Transition time for fading.
 *  !note - If object has an ID and has a definition within the 'allObjects' variable
 *          it checks to see if there is an attached 'show' event specifically for that object.
 *          This allows elements to trigger events when they appear within view.
 */	     
$.fn.showObjectSequence = function(args){		
    var array = this;
    var count = array.length
    var numberStart = args.number || 0;
    var object = array[numberStart]
    var objectID = $(object).attr('id'); 
    if(!args.timing){args.timing = 0;}
    if($(object).hasClass('fade') && args.fade !== false){
        $(object).removeClass('hidden');
        $(object).css('opacity', '1');
        //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }else{
        $(object).removeClass('hidden');
        //if(allObjects.hasOwnProperty(objectID)){if(typeof allObjects[objectID].show === 'function'){setTimeout(function(){allObjects[objectID].show();}, args.timing+timing_sequence);}}
    }    
    
    if(numberStart+1 !== count){
        setTimeout(function(){ $(array).showObjectSequence({timing:args.timing, number:numberStart+1, success:args.success}); }, args.timing+timing_sequence);
    }else{
       if(typeof args.success  === 'function'){setTimeout(function(){ args.success();}, args.timing+timing_sequence);}
    }         
}


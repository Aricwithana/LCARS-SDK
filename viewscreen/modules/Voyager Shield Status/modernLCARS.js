// JavaScript Document

timer_numberGen = null;
timer_alertWhiteFade = null;
timer_headerButtonBG = null;
timer_btnContent1 = null;
timer_btnContent2 = null;
timer_randomColorChanges = null;
timer_scanCords = null;
var gui = require('nw.gui');
var win = gui.Window.get();
win.maximize();


$(window).load(function(){
    $(demoUI).createObject({appendTo:'body', success:initFunc});
});


function initFunc(){
    $('.scaler').viewport('scale', {width:1333, height:1000, max:true})
    window.onresize = function(event) {
       $('.scaler').viewport('scale', {width:1333, height:1000, max:true}) 
    } 
    
    timer_scanCords = setInterval(function(){scanCords();}, 250);
    timer_numberGen = setInterval(function(){numberLineGenerator();}, 350);
    timer_randomColorChanges = setInterval(function(){randomColorChanges();}, 2250);
    
    $(ani_showUIHeader).showObjectSequence({});
    $(ani_showUIBody).showObjectSequence({success:function(){
        $(['#wpr_headerControls', '#wpr_numberReadout', '#title_vesselStatus', '#wpr_mainDisplay']).showObject({});
    }});
}

function initialLoad(){

}

var demoUI = {id:'wpr_scaleWrapper', class:'scaler', type:'wrapper', children:[
    
    {id:'wpr_headerControls', type:'wrapper', hidden:true, children:[
        {id:'btn_viewStarboard', type:'button', version:'pill', color:'blue', label:'starboard'},
        {id:'btn_viewPort', type:'button', version:'pill', color:'peach', label:'port'},
        {id:'btn_viewTop', type:'button', version:'pill', color:'violet', label:'dorsal'},
        {id:'btn_viewBottom', type:'button', version:'pill', color:'maroon', label:'ventral'}
    ]},
    {id:'wpr_mainDisplay', type:'wrapper', hidden:true, children:[
        {id:'oval_grey', type:'wrapper'},
        {id:'oval_blue1', type:'wrapper'},
        {id:'oval_blue2', type:'wrapper'},
        {id:'oval_blue3', type:'wrapper'},
        {id:'img_shipViews', type:'wrapper', class:'starBoard'},
        {id:'shieldScan', type:'wrapper', children:'<div><div></div></div>'},
        {id:'shieldScanCords', type:'wrapper', children:'<div>1</div><div>604</div><div>256<div>'},    
    ]},
    
	{id:'elbow_BL1', type:'elbow', version:'bottomLeft', color:'blue', label:'55-2005', hidden:true},
	
	{id:'btn_header1', type:'button', color:'orange', label:'LCARS-0105', hidden:true},
	{id:'bar_header1', type:'bar', color:'orange', hidden:true},
	{id:'bar_header2', type:'bar', color:'pink', hidden:true},
	{id:'bar_header3', type:'bar', color:'violet', hidden:true},
	{id:'bar_header4', type:'bar', color:'maroon', hidden:true},
	
    {id:'elbow_TL1', type:'elbow', version:'topLeft', color:'blue', label:'15-183', hidden:true},
	
	{id:'bar_content1', type:'bar', color:'orange', hidden:true},
	{id:'bar_content2', type:'bar', color:'peach', size:'half', hidden:true},
	{id:'bar_content3', type:'bar', color:'violet', hidden:true},
	{id:'bar_content4', type:'bar', color:'maroon', hidden:true},
	
	{id:'btn_content1', type:'button', label:'25-0451', color:'maroon', hidden:true},
	{id:'btn_content2', type:'button', label:'Credits', color:'peach', hidden:true},
	{id:'btn_content3', type:'button', label:'LCARS', altLabel:'mode', color:'violet', hidden:true},
	
	{id:'title_vesselStatus', text:'Vessel Status', type:'title', hidden:true},
	{text:'Alert condition red', id:'title_redAlert', type:'title', size:'half', hidden:true},
    {id:'wpr_numberReadout', hidden:true, type:'wrapper', children:'<div class="last"><div></div><div></div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div><div></div><div></div></div><div><div></div><div></div><div></div><div></div><div></div><div></div></div>'},
    
    
    
    {id:'elbow_TR1', type:'elbow', version:'topRight', color:'blue', hidden:true},
	{id:'btn_credits1', type:'button', color:'violet', hidden:true},
	{id:'btn_credits2', type:'button', color:'violet', hidden:true},
	{id:'btn_credits3', type:'button', color:'peach', hidden:true},
	{id:'btn_credits4', type:'button', color:'orange', hidden:true},
    
    {id:'text_creditsText', hidden:true, type:'wrapper', children:'<h1 style="border-bottom:2px solid #ffffff;">Credits & Info</h1><p>My name is <a style="color:white; display: inline;" href="mailto:mraricwithana@domlauncher.com" title="Email Me">Aric (Aricwithana)</a> and I love web-tech and LCARS.</p><p>  In the past, LCARS creation, design and implementation have been locked away in static images, animated gifs, flash, proprietary applications and video.  This screen is created with none of those.  It is fully created from HTML/CSS/Javascript.  Any Modern Desktop browser will do.</p><p>This is an early test dug up from the archives and is based off of a flash animiaton by <a style="color:white; display: inline;" href="http://www.lcars.org.uk/lcars_Voyager_panels.htm" title="lcars.org.uk">Adge</a>.  This was a simple upgrade to the newest SDK version since this was initially created while the SDK was being developed and thus has a little extra code than necessary.</p><p>The LCARS SDK will continually be updated as needs arise.  For more information check out the website:  <a style="color:white; display: inline;" href="http://www.lcarssdk.org" title="lcars.org.uk">LCARSSDK.ORG</a></p><p>With the advent of libraries like <a style="color:white; display: inline;" href="http://cordova.apache.org/" title="Cordova">Cordova</a>, operating systems like Windows 8, games like <a style="color:white; display: inline;" href="http://stexcalibur.com" title="ST Excalibur">Star Trek Excalibur</a> and of course browsers themselves, this framework can fully be used to create fully functional LCARS interfaces!</p><p>Through the use of my Android Launcher, <a style="color:white; display: inline;" href="http://www.domlauncher.com" title="DOMLauncher">DOMLauncher</a>, anyone can have fully functional LCARS screens for their Android Devices!  You can generally find me in the IRC Phonegap chat (irc.freenode.net #phonegap).</p><p>The Intrepid Blueprint is credited to:  <a style="color:white; display: inline;" href="http://www.cygnus-x1.net/links/lcars/uss-voyager-ncc-74656.php" title="Star Trek Blueprints">Star Trek Blueprints</a></p><small>*All Star Trek Trademarks are registered to CBS®/PARAMOUNT®. The LCARS Web API was created in the hopes that they do not violate on the intellectual rights of CBS®/PARAMOUNT®. Original (and awesome) LCARS design was created by Mike Okuda and this work is not meant to disparage on his awesome work. The LCARS SDK will always be free, open and for the fans.</small>'}
]}


var ani_showUIHeader = ['#bar_header4', '#bar_header3', '#bar_header2', '#bar_header1', '#elbow_BL1', '#btn_header1']
var ani_showUIBody = ['#bar_content4', '#bar_content3', '#bar_content2', '#bar_content1', '#elbow_TL1', '#btn_content1', '#btn_content2', '#btn_content3']

function scanCords(){
	$('#shieldScanCords div:last-child').text(Math.round($('#shieldScan >div').offset().top, 10));
	$('#shieldScanCords div:nth-child(2)').text(Math.round($('#shieldScan >div').offset().left, 10));
}

function randomColorChanges(){
	var array_headerControlsColor = ['blue', 'orange', 'maroon', 'peach', 'violet', 'pink'];
		var numButton = $('#wpr_headerControls .button').length;
		var randomColor =  LCARS.colorGen(array_headerControlsColor);
		var numB = Math.round(Math.random() * numButton, 10);
		$('#wpr_headerControls .button').eq(numB).objectSettings({color:randomColor});
}

function numberLineGenerator(){
	var wrapper = $('#wpr_numberReadout');
	var lastFilled = $('#wpr_numberReadout .last');
	if($(lastFilled).is(':last-child')){
		$(wrapper).children('div:nth-child(1)').addClass('last');
		$(lastFilled).removeClass('last');
		$(wrapper).children('div').children('div').empty();
	}else{
		$(lastFilled).next('div').addClass('last');
		$(lastFilled).removeClass('last');
	}
	$(wrapper).children('.last').children('div:nth-child(1)').text(Math.round(Math.random() * (999999999 - 100000000) + 100000000, 10));
	$(wrapper).children('.last').children('div:nth-child(2)').text(Math.round(Math.random() * (999999 - 10000) + 10000, 10));
	$(wrapper).children('.last').children('div:nth-child(3)').text(Math.round(Math.random() * (999999 - 100000) + 100000, 10));
	$(wrapper).children('.last').children('div:nth-child(4)').text(Math.round(Math.random() * (999999 - 10000) + 10000, 10));
	$(wrapper).children('.last').children('div:nth-child(5)').text(Math.round(Math.random() * (999999 - 10000) + 10000, 10));
	$(wrapper).children('.last').children('div:nth-child(6)').text(Math.round(Math.random() * (999999 - 10000) + 10000, 10));
}





$(document).on('click', '#btn_credits1, #btn_credits2', function(){creditScroll($(this));});

function creditScroll(element){
	var thisID = $(element).attr('id');
	var textScrollTop = $('#text_creditsText').scrollTop();
	if(thisID === "btn_credits1"){
		$('#text_creditsText').scrollUp({step:250, target:['#text_creditsText']});
	}
	
	if(thisID === "btn_credits2"){
		$('#text_creditsText').scrollDown({step:250, target:['#text_creditsText']});
	}
}


$(document).on('click', '#btn_content2, #btn_credits3', function(){openCloseCredits($(this));});

function openCloseCredits(element){
	var thisID = $(element).attr('id');
    $('#btn_content2').objectSettings({noEvent:true}); 
	if($('.scaler').hasClass('credits')){
		$('.scaler').objectSettings({class:['credits']});       
        $(['#elbow_TR1', '#btn_credits1', '#btn_credits2', '#btn_credits3', '#btn_credits4', '#text_creditsText']).hideObject({success:function(){$('#btn_content2').objectSettings({noEvent:false});}});	
	}else{
        $('.scaler').objectSettings({class:'credits'});
        setTimeout(function(){$(['#elbow_TR1', '#btn_credits1', '#btn_credits2', '#btn_credits3', '#btn_credits4', '#text_creditsText']).showObjectSequence({success:function(){$('#btn_content2').objectSettings({noEvent:false});}});}, 250);
    }

}


$(document).on('click', '#wpr_headerControls .button', function(){shipViews($(this).attr('id'));});

function shipViews(id){
	$('#img_shipViews').removeClass('top').removeClass('starBoard').removeClass('port').removeClass('bottom')
	switch(id){
		case "btn_viewStarboard":
			$('#img_shipViews').addClass('starBoard');
		break
		case "btn_viewPort":
			$('#img_shipViews').addClass('port');
		break
		case "btn_viewTop":
			$('#img_shipViews').addClass('top');
		break
		case "btn_viewBottom":
			$('#img_shipViews').addClass('bottom');
		break
	}	
}


function alertWhiteFade(){
	if(!$('body').hasClass('redAlert')){clearInterval(timer_alertWhiteFade); timer_alertWhiteFade = null;}
	$('body.redAlert').addClass('whiteFade').addClass('lightGreyWhiteFade');
	setTimeout(function(){	$('body.redAlert').removeClass('whiteFade').removeClass('lightGreyWhiteFade');}, 1150);
}

function redAlertHeaderControls(){  
    $('#wpr_headerControls').toggleClass('frame2');   
}

$(document).on('click', '#btn_content3', function(){toggleRedAlert();});

function toggleRedAlert(){
	if($('body').hasClass('redAlert')){
		$('body').removeClass('redAlert').removeClass('whiteFade').removeClass('lightGreyWhiteFade');
		$('#title_redAlert').hideObject({});
		clearInterval(timer_alertWhiteFade);
        clearInterval(timer_raHeaderControls);
		timer_alertWhiteFade = null;
        timer_raHeaderControls = null;
	}else{
		$('#title_redAlert').showObject({});
		$('body').addClass('redAlert');
		alertWhiteFade();
		timer_alertWhiteFade = setInterval(function(){alertWhiteFade()}, 1350);
        timer_raHeaderControls = setInterval(function(){redAlertHeaderControls()}, 1000);
	}	
}




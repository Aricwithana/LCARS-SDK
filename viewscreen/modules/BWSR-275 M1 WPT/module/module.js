// JavaScript Document
var timer_clock = null;
var postButtons = null;

$(document).ready(function(){
 // $({type:'numericButton', state:'darkRed2LightRed', label:'upgrade process', color:'red', value:'099', id:'btn_upgrading', template:[{type:'cap', version:'left'}, {type:'numericBlock'}, {type:'block'}, {type:'button', version:'tabRight'}], appendTo:'body', click:testLoad}).createObject({});
    $(dmdLCARSRT).createObject({success:init});
});  

function testLoad(){
    
    if($('#btn_upgrading').children('.button').attr('data-label') === 'awaa'){
        $('#btn_upgrading').hideObject({success:function(){$(dmdLCARSRT).createObject({success:init});}});
    }
}

var colorArray = ['w1','w2','w3','w4','c1','c2','c3','c4',];

var bwsrTemplates = {
    numericCheckbox:[{type:'cap', version:'left'}, {type:'block', class:'checkBlock'}, {type:'numericBlock'}, {type:'button', version:'tabRight'}],
    checkboxButtons:{
        typeA:[{type:'cap', version:'left'}, {type:'block', class:'checkBlock'}, {type:'button', version:'tabRight'}],
        typeB:[{type:'block', class:'checkBlock'}, {type:'button', version:'tabRight'}],    
    },
    complexButtons:{
        typeA:[{type:'block'}, {type:'button', version:'tabRight'}],
        
    
    },
    numericButtons:{
        typeA:[{type:'cap', version:'left'}, {type:'block'}, {type:'numericBlock'}, {type:'button', version:'tabRight'}],
        typeB:[{type:'block'}, {type:'numericBlock'}, {type:'button', version:'tabRight'}],
        typeC:[{type:'cap', version:'left'}, {type:'numericBlock'}, {type:'block'}, {type:'button', version:'tabRight'}]
    },
    bracket:{type:'wrapper', class:'sdk bracket typeA', children:[
                {type:'elbow', version:'topLeft', size:'small', class:'backet_typeA_elbow1', color:'w3', children:[{type:'bar'}], noEvent:true},	
                {type:'elbow', version:'topRight', size:'small', class:'backet_typeA_elbow2', color:'w3', children:[{type:'bar'}], noEvent:true},	
                {type:'elbow', version:'bottomLeft', size:'small', class:'backet_typeA_elbow3', color:'w3', children:[{type:'bar'}], noEvent:true},	
                {type:'elbow', version:'bottomRight', size:'small', class:'backet_typeA_elbow4', color:'w3', children:[{type:'bar'}], noEvent:true},        
                {type:'wrapper', class:'wrapper_leftColumn1', flex:'v', children:[
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn1_bar1', color:'c4'},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn1_bar2', color:'w1'},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn1_bar3', color:'c4'}                     
                ]},
                {type:'wrapper', class:'wrapper_leftColumn2', flex:'v', children:[
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn2_bar1', color:'c3'},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn2_bar1', color:'c1', children:[{type:'bar', color:'white'}]},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn2_bar3', color:'c3'}                     
                ]},
                {type:'wrapper', class:'wrapper_leftColumn3', flex:'v', children:[
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn3_bar1', color:'c3'},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn3_bar2', color:'w1'},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn3_bar3', color:'c3'}                     
                ]},
                {type:'wrapper', class:'wrapper_leftColumn4', flex:'v', children:[
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn4_bar1', color:'c1'},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn4_bar2', color:'w1', children:[{type:'bar', color:'white'}]},
                    {type:'bar', flexC:'v', class:'backet_typeA_leftColumn4_bar3', color:'c1'}                     
                ]} ,
                {type:'wrapper', version:'content', id:'wpr_sysClock', hidden:true},
                {type:'wrapper', version:'content', id:'wpr_sysDate', hidden:true, children:'<span>STARDATE</span><h1></h1><small></small>'},
                {type:'wrapper', version:'content', id:'wpr_graphing', children:'<canvas id="canvas_graphing" width="253" height="219"></canvas>'}
            ]
        }
}
var dmdLCARSRT = {type:'wrapper', id:'wpr_scaleWrapper', class:'scaler', appendTo:'body', attrs:[{attr:'data-view', value:'#wpr_sdkDatabase'}], hidden:true, fade:true, children:[

    {type:'wrapper', id:'wpr_leftPanel', children:[
        {type:'elbow', version:'topRight', size:'base', color:'c1'},
        {type:'button', label:'SDK Database', id:'btn_showSDKDatabase', attrs:[{attr:'data-linkTo', value:'#wpr_sdkDatabase'}], color:'c4', click:swapDirectory, tap:swapDirectory},
        {type:'complexButton', id:'btn_SDKLibInfo', color:'c2', version:'duo vertical', template:[
            {type:'button', altLabel:'Library', attrs:[{attr:'data-linkTo', value:'#wpr_library'}], click:swapDirectory, tap:swapDirectory}, 
            {type:'button', label:'Information', attrs:[{attr:'data-linkTo', value:'#wpr_information'}], click:swapDirectory, tap:swapDirectory}
        ]},
        {type:'button', label:'Addons', id:'btn_addons', color:'c1', attrs:[{attr:'data-linkTo', value:'#wpr_addons'}], click:swapDirectory, tap:swapDirectory},
        {type:'button', label:'Templates', id:'btn_templates', color:'w3', attrs:[{attr:'data-linkTo', value:'#wpr_templates'}], click:swapDirectory, tap:swapDirectory},
        {type:'elbow', version:'bottomRight', size:'base', label:'Modules', id:'btn_modules', color:'c4', attrs:[{attr:'data-linkTo', value:'#wpr_modules'}], click:swapDirectory, tap:swapDirectory}, 
        {type:'bar', color:'w3'},  
        {type:'wrapper', id:'wpr_commandControls', children:[
            {type:'button', label:'SYS Time', id:'btn_sysTime', color:'c4', click:swapBracketContent, tap:swapBracketContent},
            {type:'button', label:'Sys Date', id:'btn_sysDate', color:'c3', version:'tabRight', click:swapBracketContent, tap:swapBracketContent, attrs:[{attr:'target', value:'_blank'}]},
            {type:'button', label:'Facebook', id:'btn_facebook', href:'https://www.facebook.com/LCARSSDK', color:'c2', attrs:[{attr:'target', value:'_blank'}]},
            {type:'button', label:'Twitter', id:'btn_twitter', href:'https://twitter.com/LCARSSDK', color:'c1', version:'tabRight', attrs:[{attr:'target', value:'_blank'}]},
            {type:'button', label:'LCARS', id:'btn_lcars', color:'w1', click:swapBracketContent, tap:swapBracketContent},
            {type:'button', label:'Comm Feed', id:'btn_commFeed', color:'w4', version:'tabRight', attrs:[{attr:'data-postid', value:784}], click:loadPost, tap:loadPost},
        ]},
        {type:'wrapper', id:'wpr_meteorology', children:[
            {type:'button', label:'Meteorology', id:'btn_showMeteorology', color:'c4', state:'disabled'},
            {type:'button', label:'update', id:'btn_meteorUpdate', color:'c3', state:'disabled'},
            {type:'button', label:'location', id:'btn_location', color:'c2', state:'disabled'},
            {type:'button', label:'visual scanner', id:'btn_visualScanner', color:'c1', state:'disabled'},
        ]},        
        {type:'bracket', template:bwsrTemplates.bracket, id:'bracket_sysReadout'}

    ]},
    {type:'wrapper', id:'wpr_rightPanel', flex:'v', children:[

        {type:'wrapper', id:'wpr_topPanel', flexC:'v', children:[
            {type:'title', version:'half',  text:'BWSR-275 Mark I Wordpress Terminal 52275', class:'expandedHidden'},
            {type:'bar', color:'w3', class:'expandedHidden'},
            {type:'elbow', version:'topLeft', size:'base', color:'c1', class:'expandedHidden'},
            {type:'scrollButton', template:sdkAddonTemplates.scrollButton.typeAV, target:['#wpr_topPanel .content:not(.hidden)'], step:65, color:'w1', class:'expandedHidden'}, 
            {type:'button', color:'w1', id:'btn_downloadLibrary', altLabel:'Download', label:'LCARS SDK', class:'expandedHidden', href:'http://lcarssdk.org/sdk-library/LCARS_SDK_68076.3/LCARS_SDK_68076.3.zip', attrs:[{attr:'onClick', value:'_gaq.push(["_trackEvent", "SDK", "Download", "v68076.3"]);'}]},
            {type:'elbow', version:'bottomLeft', size:'base', color:'c4'},
            {type:'bar', color:'c3'},
            {type:'bar', color:'c1'},
            {type:'bar', color:'c4'},
            {type:'bar', color:'w3'},
            {type:'wrapper', id:'wpr_templates', class:'content buttonGrid threeGrid', hidden:true, children:[]},
            {type:'wrapper', id:'wpr_modules', class:'content buttonGrid threeGrid', hidden:true, children:[]},
            {type:'wrapper', id:'wpr_addons', class:'content buttonGrid threeGrid', hidden:true, children:[
                {type:'button', color:'grey', version:'pill', label:'ScrollBTN', attrs:[{attr:'data-postid', value:740}], click:loadPost, tap:loadPost},
            ]},
            {type:'wrapper', id:'wpr_library', class:'content buttonGrid threeGrid', hidden:true, children:[
                {type:'numericButton', value:01, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'Zepto.js', attrs:[{attr:'data-postid', value:92}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:02, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'webviewinfo.js', attrs:[{attr:'data-postid', value:219}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:03, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'fontface', attrs:[{attr:'data-postid', value:212}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:04, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'lcarssdk.js', attrs:[{attr:'data-postid', value:225}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:05, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'sdktemplates.js', attrs:[{attr:'data-postid', value:239}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:06, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'audio', attrs:[{attr:'data-postid', value:483}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:07, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'lcarssdk.css', attrs:[{attr:'data-postid', value:234}], click:loadPost, tap:loadPost},
                {type:'numericButton', value:08, template:bwsrTemplates.numericButtons.typeC, color:'grey', version:'pill', label:'sdktemplates.css', attrs:[{attr:'data-postid', value:246}], click:loadPost, tap:loadPost}        
            ]},
            {type:'wrapper', id:'wpr_information', class:'content buttonGrid sixGrid', hidden:true, children:[
                {type:'button', color:'grey', version:'pill', label:'Terms', attrs:[{attr:'data-postid', value:129}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'3rd Party', attrs:[{attr:'data-postid', value:130}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'about', attrs:[{attr:'data-postid', value:131}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'logo', attrs:[{attr:'data-postid', value:135}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'linkback', attrs:[{attr:'data-postid', value:134}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'illustrator', attrs:[{attr:'data-postid', value:399}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'domlauncher', attrs:[{attr:'data-postid', value:123}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'ST Excalibur', attrs:[{attr:'data-postid', value:121}], click:loadPost, tap:loadPost},            
                {type:'button', color:'grey', version:'pill', label:'LCARS47', attrs:[{attr:'data-postid', value:122}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'developer', attrs:[{attr:'data-postid', value:125}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'adge', attrs:[{attr:'data-postid', value:124}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'memoryalpha', attrs:[{attr:'data-postid', value:127}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'paramount-cbs', attrs:[{attr:'data-postid', value:128}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'startrek', attrs:[{attr:'data-postid', value:126}], click:loadPost, tap:loadPost},                
            ]},
            {type:'wrapper', id:'wpr_sdkDatabase', class:'content buttonGrid sixGrid', children:[
                {type:'button', color:'grey', version:'pill', label:'webview info', attrs:[{attr:'data-postid', value:93}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'definitons', attrs:[{attr:'data-postid', value:96}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'lcars.fn', attrs:[{attr:'data-postid', value:97}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'Settings', attrs:[{attr:'data-postid', value:537}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'Scrolling', attrs:[{attr:'data-postid', value:546}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'Has Attr', attrs:[{attr:'data-postid', value:545}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'Label', attrs:[{attr:'data-postid', value:544}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'viewport', attrs:[{attr:'data-postid', value:98}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'coloring', attrs:[{attr:'data-postid', value:95}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'states', attrs:[{attr:'data-postid', value:330}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'create', attrs:[{attr:'data-postid', value:99}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'remove', attrs:[{attr:'data-postid', value:100}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'show', attrs:[{attr:'data-postid', value:102}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'hide', attrs:[{attr:'data-postid', value:101}], click:loadPost, tap:loadPost},            
                {type:'button', color:'grey', version:'pill', label:'buttons', attrs:[{attr:'data-postid', value:63}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'complex', attrs:[{attr:'data-postid', value:74}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'numeric', attrs:[{attr:'data-postid', value:75}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'radio', attrs:[{attr:'data-postid', value:622}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'numeric radio', attrs:[{attr:'data-postid', value:636}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'checkbox', attrs:[{attr:'data-postid', value:634}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'numeric chbx', attrs:[{attr:'data-postid', value:637}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'elbows', attrs:[{attr:'data-postid', value:76}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'bars', attrs:[{attr:'data-postid', value:77}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'caps', attrs:[{attr:'data-postid', value:78}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'blocks', attrs:[{attr:'data-postid', value:79}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'titles', attrs:[{attr:'data-postid', value:80}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'wrapper', attrs:[{attr:'data-postid', value:314}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'images-svg', attrs:[{attr:'data-postid', value:81}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'templates', attrs:[{attr:'data-postid', value:82}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'brackets', attrs:[{attr:'data-postid', value:682}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'dialog', attrs:[{attr:'data-postid', value:679}], click:loadPost, tap:loadPost},
                {type:'button', color:'grey', version:'pill', label:'text input', attrs:[{attr:'data-postid', value:696}], click:loadPost, tap:loadPost},
            ]},
        ]},
        {type:'wrapper', id:'wpr_bottomPanel', flexC:'v', children:[
            {type:'bar', color:'w3'},
            {type:'bar', color:'c4'},
            {type:'bar', color:'c1'},
            {type:'bar', color:'w3', size:'half'},
            
            {type:'wrapper', id:'col_bottomPanel', class:'column', flex:'v', children:[
                {type:'elbow', version:'topLeft', size:'base', color:'c4', flexC:'v'},
                {type:'wrapper', class:'column col_subCol'},
                {type:'scrollButton', flexC:'v', template:sdkAddonTemplates.scrollButton.typeAV, target:['#wpr_ajaxLoadTo'], step:65, color:'w1'},              
                {type:'checkboxButton', id:'chbx_toggleFullPanel', color:'c4', flexC:'v', template:[{type:'button', label:'Expand'}], click:panelCheck, tap:panelCheck},            
            ]},
            {type:'elbow', version:'bottomLeft', size:'base', color:'c1'},
            {type:'bar', color:'w3'},
            {type:'title', version:'half', id:'title_footer', text:'<span>CONNECTING</span> - LCARS SDK 68076.3'},
            {type:'wrapper', id:'wpr_ajaxLoadTo', class:'content', children:[
           
            
            ]},
        ]},                          
    ]}
                      
]}
	
var gui = require('nw.gui');
var win = gui.Window.get();

function init(){  
    win.maximize()
    $('.scaler').viewport('scale', {width:1575, height:860, max:true})
    window.onresize = function(event) {
        $('.scaler').viewport('scale', {width:1575, height:860, max:true}) 
    }  
    
    $('#wpr_topPanel > .content > .button, #wpr_topPanel > .content > .complexButton').each(function(){$(this).objectColor(colorArray);});
    $('#wpr_topPanel > .content > .complexButton .block:not(.numericBlock)').each(function(){$(this).objectColor(colorArray);});
    
    postAjax(784);
    enableClock(); 
    startBracketSmoothie()
    console.log(bwsrTemplates.numericButtons.typeC);
    
    setTimeout(function(){$('.scaler').showObject({});}, 1000);
}
 
//Smoothie Graph Init
function startBracketSmoothie(){
    var smoothie = new SmoothieChart({scaleSmoothing:0.01, grid:{fillStyle:'transparent',strokeStyle:'transparent', verticalSections:6, borderVisible:false},labels:{disabled:true},maxValue:1,minValue:-0.01 });   
    smoothie.streamTo(document.getElementById("canvas_graphing"), 1000 /*delay*/); 
    // Data
    var line1 = new TimeSeries();
    var line2 = new TimeSeries();
    var line3 = new TimeSeries();

    // Add a random value to each line every second
    setInterval(function() {
        line1.append(new Date().getTime(), Math.random());
        line2.append(new Date().getTime(), Math.random());
        line3.append(new Date().getTime(), Math.random());
    }, 650);

    // Add to SmoothieChart
    smoothie.addTimeSeries(line1, {lineWidth:5,strokeStyle:'#DD6644'});
    smoothie.addTimeSeries(line2, {lineWidth:5,strokeStyle:'#774466'});
    smoothie.addTimeSeries(line3, {lineWidth:5,strokeStyle:'#9977AA'});

} 
 
//Expand-Collapse Right Panel
function panelCheck(){
    if($(this).inputSettings()){
        collapsePanel();
    }else{
        expandPanel();
    }
}
    
//Expand-Collapse Right Panel    
function expandPanel(){
    $('#chbx_toggleFullPanel').addClass('noEvent');
    $('.expandedHidden, #wpr_topPanel .content:not(.hidden)').hideObject({
        success:function(){
            $('body').addClass('contentExpanded');
            setTimeout(function(){$('#chbx_toggleFullPanel').removeClass('noEvent');}, 765);
        }
    });                            
}                         
 
 //Expand-Collapse Right Panel
function collapsePanel(){  
    $('#chbx_toggleFullPanel').addClass('noEvent');
    $('body').removeClass('contentExpanded'); 
    setTimeout(function(){
        $('.expandedHidden').showObject({success:function(){
            $($('.scaler').attr('data-view')).showObject({});
            $('#chbx_toggleFullPanel').removeClass('noEvent');
        }});
    }, 500);                                                                        
}                            


//Initiate Post Loading
function loadPost(){  
    var postID = $(this).attr('data-postid');
    $('#wpr_topPanel .content').addClass('noEvent');
    postAjax(postID);

}

//AJAX Content from site.
function postAjax(postID){
    $('#wpr_ajaxLoadTo').removeClass('error').addClass('loading').empty();
    $('#title_footer span').text('Connecting');
    postButtons = null;
    $.ajax({
        type: "GET",
        url: "http://www.lcarssdk.org/wp-content/themes/no-style/postload.php", 
        dataType: 'json',
        data: ({id:postID}),
        success: function(data){
            $('#col_bottomPanel .col_subCol').empty();
            $('#title_footer span').text(data.title);
            $('#wpr_ajaxLoadTo').append(data.content);
            setTimeout(function(){showLoadedPost();}, 500);
        },
        error: function(data)  
        {
            $('#wpr_topPanel .content').removeClass('noEvent');
            $('#col_bottomPanel .col_subCol').css('max-height', '0px'); 
            $('#wpr_ajaxLoadTo').removeClass('loading').addClass('error');
            $('#title_footer span').text('Connection Error');
            return false;
        }  
    });
}

//Show post after successful AJAX
function showLoadedPost(){
    $('#wpr_topPanel .content').removeClass('noEvent');
    if(postButtons !== null){
        var buttonsLength = postButtons.length
        var maxHeight = 5+(buttonsLength*60)+(buttonsLength-1)*5
        $('#col_bottomPanel .col_subCol').css('max-height', maxHeight+'px');
        $(postButtons).createObject({appendTo:'#col_bottomPanel .col_subCol', timing:500, success:function(){
            $('#col_bottomPanel .col_subCol>*').showObject({success:function(){
                $('#wpr_ajaxLoadTo').removeClass('loading');   
            }});
        }});  
    }else{
        if($('#col_bottomPanel .col_subCol').is(':empty')){   
            $('#col_bottomPanel .col_subCol').css('max-height', '0px');
        } 
        setTimeout(function(){$('#wpr_ajaxLoadTo').removeClass('loading');}, 500);
    }
}


//UI Content Swapping      
function swapDirectory(){
    var linkTo = $(this).attr('data-linkTo');
    var dataView = $('.scaler').attr('data-view');
    
    if(linkTo !== dataView){
        $('#chbx_toggleFullPanel').inputSettings('clear'); 
        $('#title_footer span').text('Awaiting Input');
        $('#wpr_topPanel .content:not(.hidden)').hideObject({});
        $('#wpr_ajaxLoadTo, #col_bottomPanel .col_subCol').removeClass('error').empty();
        $('#col_bottomPanel .col_subCol').css('max-height', '0px'); 
        $('.scaler').attr('data-view', linkTo);
        if($('body').hasClass('contentExpanded')){collapsePanel();}else{$(linkTo).showObject({});}
    }
}

//UI Content Swapping 
function swapBracketContent(){
    var clickID = $(this).attr('id');
    $('.bracket .content:not(.hidden)').hideObject({});
    if(clickID === "btn_sysTime"){
        $('#wpr_sysClock').showObject({});
    }else if(clickID === "btn_sysDate"){
        currentDate();
        $('#wpr_sysDate').showObject({});
    }else if(clickID === "btn_lcars"){
        $('#wpr_graphing').showObject({});
    }
}

//UI Content Swapping 
function swapSDKDatabaseInfo(){
    var label = $(this).objectLabel();
    $('#wpr_ajaxLoadTo > .description:not(.hidden), #wpr_ajaxLoadTo > .code:not(.hidden), #wpr_ajaxLoadTo > .visual:not(.hidden)').hideObject({});
    $('.'+label+'').showObject({});
}


//For Elbows Page
function swapAlts(){
    $('.visual .elbow').each(function(){
        var version = $(this).objectSettings('version');
        if(version.indexOf('Alt') === -1){
          $(this).objectSettings('version', version+'Alt');
        }else{
            $(this).objectSettings('version', version.replace('Alt', ''));
        }
    });
}

//For Elbows Page
function swapSize(){
     label = $(this).objectLabel();
    $('.visual .elbow').each(function(){
        $(this).objectSettings('size', label);
     });
}


//Clock
function clock(){$('#wpr_sysClock').attr('data-systime', moment().format('HH:mm:ss'));}
function disableClock(){if(timer_clock !== null){clearInterval(timer_clock); timer_clock = null;} }
function enableClock(){if(timer_clock === null){timer_clock = setInterval(clock, 1000);}}  

function currentDate(){
    $('#wpr_sysDate h1').text(StardateTodayThis());
    $('#wpr_sysDate small').text(moment().format('(dddd MMMM Do, YYYY)'));
}

// Stardate script © Phillip L. Sublett
// Phillip.L@Sublett.org
// http://TrekGuide.com

//Modified for site.  Trying to contact author.

function StardateTodayThis() {

YearInput = moment().format('YYYY')
MonthInput = moment().format('M')
DayInput = moment().format('DD')
HourInput = moment().format('HH')
MinuteInput = moment().format('mm')
var StardateOriginToday = new Date("July 15, 1987 00:00:00");
var StardateInputToday = new Date();

StardateInputToday.setYear(YearInput)
StardateInputToday.setMonth(MonthInput)
StardateInputToday.setDate(DayInput)
StardateInputToday.setHours(HourInput)
StardateInputToday.setMinutes(MinuteInput)
StardateInputToday.setSeconds(0)
StardateInputToday.toGMTString(0)

var stardateToday = StardateInputToday.getTime() - StardateOriginToday.getTime();
stardateToday = stardateToday / (1000 * 60 * 60 * 24 * 0.036525);
stardateToday = Math.floor(stardateToday + 410000);
stardateToday = stardateToday / 10

	
return stardateToday; 
	}
 

var ngui = require('nw.gui');
var win = ngui.Window.get();
var WindowManager = require('node-webkit-window-manager').windowManager;  
var fs = require('fs');
 var colorSetModuleList = ['blue2', 'blue3', 'blue4', 'green1', 'green2', 'green3', 'gold1']   
win.on('close', function() {
  ngui.App.quit();
});

//win.showDevTools() 

window.onload = function(){
    $(ui_moduleLoader).createObject({});
    contentSizing();
    genButtons();
    $('a').on('click', function(e){
        e.preventDefault();
        ngui.Shell.openExternal($(this).attr('href'))

    });
}

window.onresize = contentSizing;


var browserFrame = {type:'wrapper', class:'sdk dialog typeA', children:[
    {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'title', size:'half'}, {type:'bar', flexC:'h'}, {type:'cap', size:'small', version:'right'}]},
    {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'bar', flexC:'h'}, {type:'title', size:'half'}, {type:'cap', size:'small', version:'right'}]},
    {type:'wrapper', class:'content'}
]}

var ui_moduleLoader = {type:'wrapper', id:'wpr_moduleLoader', appendTo:'body', children:[
    {type:'elbow', color:'blue3', version:'topLeftAlt', noEvent:true},
    {type:'elbow', color:'blue3', version:'topRightAlt', noEvent:true},
    {type:'wrapper', id:'wpr_moduleLoader_controls', class:'row', flex:'h', children:[
        {type:'wrapper', flex:'v', class:'column', flexC:'v', children:[
            {type:'button', color:'green1', label:'LCARS SDK', href:'http://www.lcarssdk.org'},
            {type:'button', color:'green3', label:'Facebook', href:'http://www.facebook.com/LCARSSDK'},
            {type:'button', color:'blue4', label:'Terminate', flexC:'v', click:function(){win.close();}}
        ]},
        {type:'wrapper', flex:'v', class:'column', children:[
           {type:'button', color:'gold1', label:'Minimize', flexC:'v', click:function(){win.minimize();}},
           {type:'checkboxButton', template:[{type:'button'}], color:'red1', checked:win.isFullscreen, label:'Windowed', click:function(){win.toggleFullscreen();}}
        ]},
        {type:'bar', color:'blue3'},
        {type:'complexButton', class:'duo vertical', color:'blue2', flexC:'h', template:[
            {type:'button', altLabel:'PRECEDING', click:function(){$('#wpr_moduleLoader .content').scrollUp({step:70, target:['#wpr_moduleLoader .content']});}},
            {type:'button', label:'SUCCEEDING', click:function(){$('#wpr_moduleLoader .content').scrollDown({step:70, target:['#wpr_moduleLoader .content']});}}
        ]}    
    ]},
    {type:'wrapper', class:'content', children:[
        {type:'wrapper', id:'wpr_moduleLoader_list', flex:'h'},
    ]}
]}




    
function contentSizing(){
    var contentH = $('#wpr_moduleLoader').height() - 290 - 45;
    var newHeight = (Math.floor((contentH - 60)/70) * 70) + 60;
    $('#wpr_moduleLoader .content').height(newHeight);
}

function genButtons(){
    var path = process.execPath.replace('Viewscreen.exe', 'modules');
    var modules = fs.readdirSync(path);
    var countLength = 0
    var windowList = {}
    $(modules).each(function(){
            var thisModule = this;
            $.getJSON(path+'/'+this+'/package.json', function(data){
                windowList[data.id] = {page:'../modules/'+thisModule+'/index.html', id:data.id, title:this, options:data.window};

                if (countLength%2 == 0){
                    $({type:'complexButton', click:function(){loadModule(data.id)}, color:LCARS.colorGen(colorSetModuleList), label:thisModule, flexC:'h', nbValue:'521', template:[
                        {type:'cap', version:'left'}, 
                        {type:'button', color:LCARS.colorGen(colorSetModuleList)}, 
                        {type:'block', class:'numericBlock'}, 
                        {type:'cap', version:'right'}
                    ]}).createObject({appendTo:'#wpr_moduleLoader_list'});
                }else{
                    $({type:'complexButton', click:function(){loadModule(data.id)}, color:LCARS.colorGen(colorSetModuleList), flexC:'h', nbValue:'63', label:thisModule, template:[
                        {type:'cap', version:'left'}, 
                        {type:'button', color:LCARS.colorGen(colorSetModuleList)}, 
                        {type:'block', class:'numericBlock'},
                        {type:'block'},
                        {type:'cap', version:'right'}
                    ]}).createObject({appendTo:'#wpr_moduleLoader_list'});
                }

                countLength = countLength+1;            
            
            
            });
    });
    
    if(countLength%2 !== 0){
          $({type:'complexButton', flexC:'h', noEvent:true, template:[]}).createObject({appendTo:'#wpr_moduleLoader_list'});      
    }
    global.windowManager = new WindowManager(ngui, windowList);
}


function loadModule(windowID){

    var windowCheck = true;
    $(global.windowManager.openWindows).each(function(){
        if(this.name === windowID){
            windowCheck = false;
            this.focus();
        }
    });
    if(windowCheck){
        var newWindow = global.windowManager.open(windowID);
    }
    
}




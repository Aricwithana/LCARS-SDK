LCARS SDK 

14241.1 - 

INCLUDES REWRITTEN OBJECT DEFINITION AND SETTINGS HANDLER. 
LARGE ELBOWS AND BLOCK VERSION ‘OVAL’ HAVE BEEN ADDED FOR 
ELEMENT SELECTION. UPDATED TERMS OF SERVICE.

14243.101 -
BF:  href value not applied to element attribute
BF:  Sequence timing not being applied.
BF:  Dialog Templates, correct Title object definition syntax.

14278.102 - 
BF:  Removed accidental false string from settings.
CO:  Active state tweak for complex button sub-elements.

14304.103 - 
BF:  Password setting variable
EH:  Viewscreen application environment included.

14312.104 - 
CO:  USS Not Affiliated Theme addon.

14333.2 - 
EH: Restructure of the LCARS.fn expression.
    LCARS.object.create vs LCARS.create.object
    LCARS.settings.settingName
    LCARS.settings.get
    LCARS.settings.set
EH: Restructure of Settings
    No longer under a single function call.  
    Override native settings with custom setting
    name under object expression.
    ex. LCARS.object.settings.settingName:function(args){};
RM: Setting Specific $.api
    ex. $.objectLabel();
RM: Numeric Button Type
    Complex/Radio/Checkbox - pass a nbValue setting and
    the value will be applied to the child numericBlock.
CO: Changed scrollbutton to scrollButton
EH: Block Font - Number Only
EH: labelPreventDefault/labelPreventSet
    Rewrite of the label double event bug when inputs
    are inside their attached label.
EH: Event Settings
    Are applied as any other setting.  Uses a check to 
    the webview webviewInfo.input variable for touch.
    Add more event binders at will, follow already coded
    model for applying label event prevention.
EH: HTML Tag
    Create, manipulate and remove HTML markup within the
    LCARS SDK definition environment.
EH: Level Bar
    New addon displaying an animated, stylized bar
    with connected API methods.
CO: USS Not Affiliated Theme
    Updated with additional color 'una_violet1' which is 
    used for state highlighting.
RM: Legacy Flexbox Model
    Only native support for modern flexbox syntax.  
    Allowance for -webkit prefix.
    http://caniuse.com/#feat=flexbox
    IE11+, IE Mobile 11+, Android 4.4+, iOS7+, 
    Opera Mobile 12.1+, Opera Mobile 24+ (webkit upgrade)
RM: Removed Viewscreen app from SDK.  Will provide in seperate repo.    
BF: Assorted fixes and updated that have been lost in the mix.    

14346.201 - 
BF: X Object Sequence Timing variable.
    Applies as 0 unless passed.  Remove *2 from 
    function set timeout loop.
CO: Block Font
    Updated the font with tweaked MNW@

Legend - 
BF:  Bug Fix
CO:  Cosmetic
EH:  Enhancement
RM:  Remove

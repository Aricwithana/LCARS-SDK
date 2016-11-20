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

14347.202-
BF: Remove Object
    Removed args.timing for it is not used and threw error.
CO: Block Font
    Update to :

14350.203-
BF: Checked Setting
    Testing code got into prod.
    Changed false back to nulls
    to maintain standard return
    syntax.
EH: Click Preven Default
    Touch devices use click to handle
    native checked state changes. Added
    code to prevent this.

15019.204-
EH: Tiny Dialog Framing
CO: Tiny Sizing for bars and caps
EH: HTML setting to pass raw HTML to
    append to generated object.
EH: Prevent Click on Radio/Checkbox
    inputs on touch screens.
EH: Added touch check for touch modifications.
CO: Updated to classes stray DOM attribute
    settings via CSS.
BF: Fixed arg name in Fade setting.
CO: Changed Text setting to use the
    $.html() syntax so HTML can be 
    passed within string.


15056.205-
BF: Prevent Default Prop setting
EH: Disabled Setting
EH: Arrive.js + arrive/leave setting
CO: USS Not Affiliated theme updated


15088.21-
BF: Arrive.js to use Zepto.
RM: Removed 'active' CSS state.
RM: Active state JS for IE and touch.
EH: Orient setting
EH: Direction settings
EH: Level Bars updated for direction
    and orientation settings.
CO: Added template to index.html, using 
    the Alert Status Hue Rotation interface.
BF: Place more than one onresize events on the UI.
EH: Child Scale, scales a secondary inner 
    interface to its parent.
EH: Viewport Zoom uses zoom feature instead
    of CSS scaling.  Provides a better visual
    than scaling on Webkit browsers.
EH: Child Zoom, zooms a seconary inner
    inerface to its parent.

16098.3-
EH: Updated assorted core CSS settings.  Largest
    update was to the Elbows, complex buttons.
RM: Assorted files as content was seperated
    into their own files and new file structure
    created.
EH: Added End Cap elements for large bar framing
    controls.
EH: Added style setting to directly apply CSS
    settings to an elements definition object.
EH: Additional coler generation call for grouped
    color rendering.
CO: Provided USS Not Affiliated theme updated.
EH: Radio/Checkbox are now standard buttons.
    The state of the element is handled via 
    a simple JS with function passthrough.
    These elements are not input elements.
CO: Multiple elements have their settings updated
    to utilize new options.
CO: Complex buttons using large text utilize a 
    text element instead of the old nbValue setting.
CO: Elements are not long position absolute by default.


16276.31-
BF: API Scrolling - Named function call name. 
    Conflicted with jQuery.
BF: Elbow inner radiuses fixed.
CO/EH: Cleaned up the core css.
    Standardized many element classes across the board.
    Added extra variants to different elements.
    Animations and state names updated.
    Optional active state for elements to be uncommented
    if wanted.
EH: Visual Guide
RM: Old graphic files
RM: Older Interface demos
EH: USS Not Affiliated Theme updates
EH: Antonio Bold font replaced older fan font.
BF/CO: Base templates tweaked and cleaned up
BF/CO: Assorted small issues on the addons.


16323.311-
EH: Updated all elbows with new settings. Should
    be closer to canon material and lacking stylized
    flavor from other fan projects.
CO: Updated bracket template to account for new elbows.
CO: Swapped svg/img emblem for the Visual Guide to the
    SDK logo command emblem.

Legend - 
BF:  Bug Fix
CO:  Cosmetic
EH:  Enhancement
RM:  Remove

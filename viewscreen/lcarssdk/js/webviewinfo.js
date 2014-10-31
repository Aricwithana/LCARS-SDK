/*

Copyright (c) 2014 Matthew Hudson

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

Modified by Aricwithana in conjunction for use in the LCARS SDK.  http://www.lcarssdk.org

*/
    

var webviewInfo; 

(function() {
  var previousDevice, _addClass, _doc_element, _find, _handleOrientation, _hasClass, _orientation_event, _removeClass, _supports_orientation, _user_agent;
    
/**
* @os - 'ios/android/blackberry/windows/ffos/meego', 
* @device - 'ipod/ipad/iphone'
* @orientation - 'landscape/portrait'
* @input - 'desktop/touch'
* @type - 'mobile/tablet'
* @ie - true
*/  
  webviewInfo = {os:null, device:null, orientation:null, input:null, type:null, ie:null} ;
    
  previousDevice = window.device;

  window.device = {};

  _doc_element = window.document.documentElement;

  _user_agent = window.navigator.userAgent.toLowerCase();

  device.ios = function() {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function() {
    return _find('iphone');
  };

  device.ipod = function() {
    return _find('ipod');
  };

  device.ipad = function() {
    return _find('ipad');
  };

  device.android = function() {
    return _find('android');
  };

  device.androidPhone = function() {
    return device.android() && _find('mobile');
  };

  device.androidTablet = function() {
    return device.android() && !_find('mobile');
  };

  device.blackberry = function() {
    return _find('blackberry') || _find('bb10') || _find('rim');
  };

  device.blackberryPhone = function() {
    return device.blackberry() && !_find('tablet');
  };

  device.blackberryTablet = function() {
    return device.blackberry() && _find('tablet');
  };

  device.windows = function() {
    return _find('windows');
  };

  device.windowsPhone = function() {
    return device.windows() && _find('phone');
  };

  device.windowsTablet = function() {
    return device.windows() && _find('touch');
  };

  device.fxos = function() {
    return (_find('(mobile;') || _find('(tablet;')) && _find('; rv:');
  };

  device.fxosPhone = function() {
    return device.fxos() && _find('mobile');
  };

  device.fxosTablet = function() {
    return device.fxos() && _find('tablet');
  };

  device.meego = function() {
    return _find('meego');
  };

  device.mobile = function() {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function() {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.portrait = function() {
    return Math.abs(window.orientation) !== 90;
  };

  device.landscape = function() {
    return Math.abs(window.orientation) === 90;
  };

  device.noConflict = function() {
    window.device = previousDevice;
    return this;
  };

  _find = function(needle) {
    return _user_agent.indexOf(needle) !== -1;
  };

  _hasClass = function(class_name) {
    var regex;
    regex = new RegExp(class_name, 'i');
    return _doc_element.className.match(regex);
  };

  _addClass = function(class_name) {
    if (!_hasClass(class_name)) {
      return _doc_element.className += " " + class_name;
    }
  };

  _removeClass = function(class_name) {
    if (_hasClass(class_name)) {
      return _doc_element.className = _doc_element.className.replace(class_name, "");
    }
  };


if (device.ios()) {
    if (device.ipad()) {
        _addClass("ios ipad tablet touch");
        webviewInfo.os = 'ios';
        webviewInfo.device = 'ipad';
        webviewInfo.input = 'touch';
        webviewInfo.type = 'tablet';
    } else if (device.iphone()) {
        _addClass("ios iphone mobile touch");
        webviewInfo.os = 'ios';
        webviewInfo.device = 'iphone';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'mobile';
    } else if (device.ipod()) {
        _addClass("ios ipod mobile touch");
        webviewInfo.os = 'ios';
        webviewInfo.device = 'ipod';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'mobile';
    }
} else if (device.android()) {
    if (device.androidTablet()) {
        _addClass("android tablet touch");
        webviewInfo.os = 'android';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'tablet';
    } else {
        _addClass("android mobile touch");
        webviewInfo.os = 'android';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'mobile';
    }
} else if (device.blackberry()) {
    if (device.blackberryTablet()) {
        _addClass("blackberry tablet touch");
        webviewInfo.os = 'blackberry';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'tablet';
    } else {
        _addClass("blackberry mobile");
        webviewInfo.os = 'blackberry';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'mobile';
    }
} else if (device.windows()) {
    if (device.windowsTablet()) {
        _addClass("windows tablet touch");
        webviewInfo.os = 'windows';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'tablet';
        webviewInfo.ie = 'true';
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');
    
        if (msie > 0) {
           _addClass("ie"); 
        }
    
        if (trident > 0) {
          _addClass("ie");  
        }
    } else if (device.windowsPhone()) {
        _addClass("windows mobile touch");
        webviewInfo.os = 'windows';
        webviewInfo.input = 'touch'; 
        webviewInfo.type = 'mobile';
        webviewInfo.ie = 'true';
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');
    
        if (msie > 0) {
           _addClass("ie"); 
        }
    
        if (trident > 0) {
          _addClass("ie");  
        }        
    } else {
        _addClass("desktop");
         webviewInfo.input = 'desktop';
        webviewInfo.ie = 'true';
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');
    
        if (msie > 0) {
           _addClass("ie"); 
        }
    
        if (trident > 0) {
          _addClass("ie");  
    }        
    }
} else if (device.fxos()) {
    if (device.fxosTablet()) {
        _addClass("fxos tablet touch");
        webviewInfo.os = 'fxos';
        webviewInfo.input = 'touch';
        webviewInfo.type = 'tablet';
    } else {
        _addClass("fxos mobile touch");
        webviewInfo.os = 'fxos';
        webviewInfo.input = 'touch';
        webviewInfo.type = 'mobile';
    }
} else if (device.meego()) {
    _addClass("meego mobile touch");
    webviewInfo.os = 'meego';
    webviewInfo.input = 'touch';
    webviewInfo.type = 'mobile';
} else {
    _addClass("desktop");
    webviewInfo.input = 'desktop';
    webviewInfo.ie = 'true';
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
       _addClass("ie"); 
    }

    if (trident > 0) {
      _addClass("ie");  
    }

}

_handleOrientation = function() {
    if (device.landscape()) {
        _removeClass("portrait");
        webviewInfo.orientation = 'landscape'; 
        return _addClass("landscape");
        
    } else {
        _removeClass("landscape");
        webviewInfo.orientation = 'portrait'; 
        return _addClass("portrait");
    }
};

  _supports_orientation = "onorientationchange" in window;

  _orientation_event = _supports_orientation ? "orientationchange" : "resize";

  if (window.addEventListener) {
    window.addEventListener(_orientation_event, _handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(_orientation_event, _handleOrientation);
  } else {
    window[_orientation_event] = _handleOrientation;
  }

  _handleOrientation();

}).call(this);


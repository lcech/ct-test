(function(window) {
  window.measure = function() {
    var uuidCookie,
        uuid;
    
    uuidCookie = window.measure.getCookie("ct_fp_uuid");
    
    if (typeof uuidCookie !== "undefined") {
      uuid = uuidCookie;
    } else {
      uuid = window.measure._generateUuid();
    }

    window.measure.setCookie("ct_fp_uuid", uuid, 1825);
    measure._debug("UUID: " + uuid);
    
    window.measure._track(uuid);
  };
  
  /**
   * Generate UUID according to RFC4122 version 4
   * @type {Function}
   * @private
   */
  window.measure._generateUuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
  
  /**
   * Generate UUID according to RFC4122 version 4
   * @type {Function}
   * @private
   */
  window.measure._track = function (uuid) {
    var img,
        src;
        
    img = document.createElement("img");
    img.width = 1;
    img.height = 1;
    src = "http://dmp.417.cz/record.gif";
    src += "?fp_uuid=" + uuid;
    img.src = src;
  }
  
  /**
   * Debug
   * @type {Function}
   * @private
   */
  window.measure._debug = (function () {
    var result;
    if (! window.console || ! console.log) {
      result = function(){};
    } else {
      result = Function.prototype.bind.call(console.log, console);
    }
    return result;
  })();
  
  /**
   * Get First Party Cookie
   * @method getCookie
   * @public
   * @param name {String}
   */
  window.measure.getCookie = function(name) {
    var ca;
    ca = document.cookie.split(';');
    name = name + "=";
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length,c.length);
      }
    }
    return undefined;
  };
  
  /**
   * Set First Party Cookie
   * @method _process
   * @public
   * @param name {String}
   * @param value {String}
   * @param days {Number}
   */
  window.measure.setCookie = function(name, value, days) {
    var date,
      expires;

    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = 'expires=' + date.toUTCString() + '; ';
    } else {
      expires = '';
    }
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';
  };
  
  window.addEventListener("load", measure, false);
  
})(window);

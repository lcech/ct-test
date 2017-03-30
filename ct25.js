(function(window) {
  window.measure = function(data) {
    data = data || {};
    
    switch (data.event) {
    case 'init':
      measure._debug(data);
      break;
    default:    
      measure._debug('Unknown event ID.');
    }
  };
  
  /**
   * Async Script Loader
   * @type {Function}
   * @private
   */
  window.measure._requestAsyncScript = function (url) {
    var s = document.createElement('script'),
        x = document.getElementsByTagName('script')[0];
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    x.parentNode.insertBefore(s, x);
  };
  
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
  
  window.addEventListener("load", function (event) {
    measure._requestAsyncScript('http://dmp.417.cz/record.js');
  }, false);
  
})(window);

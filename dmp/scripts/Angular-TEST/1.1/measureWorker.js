var digitalData=digitalData||{},_paq=_paq||[];digitalData._log=digitalData._log||[],Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var measure=function(e){var a=function(e){e=e||{},e._timestamp=(new Date).getTime(),"init"===e.event?(a._init(e),a.debug("WEBMON: Event captured:"),a.debug("WEBMON: "+JSON.stringify(e,null,4).replace(/\n/g,"\nWEBMON: ")),a.debug("WEBMON: ---------------------------------------------")):(e=a._loadGlobalDataElements(e),a._initialized===!0?(digitalData=a._deepMerge(digitalData,e),digitalData._log.push(e),a.process(e),a.debug("WEBMON: Event captured:"),a.debug("WEBMON: "+JSON.stringify(e,null,4).replace(/\n/g,"\nWEBMON: ")),a.debug("WEBMON: ---------------------------------------------")):a.q.push(arguments))};a.q=e.q||[],a.getCookie=e.getCookie,a.environment=e.environment||"DEV",a.domain=e.domain||"watest.mojebanka.cz",a.version=e.version||"dev",a.application=e.application||"N/A",a.formHandlersAttached=!1,a._initialized=!1,a._vid=!1,a.debug=function(){var e;return e=window.console&&console.log&&"PROD"!==a.environment?Function.prototype.bind.call(console.log,console):function(){}}(),a._deepMerge=function(e,t){var i=Array.isArray(t),n=i&&t||{};return i||(e&&"object"==typeof e&&Object.keys(e).forEach(function(a){n[a]=e[a]}),Object.keys(t).forEach(function(i){"object"==typeof t[i]&&t[i]&&e[i]?n[i]=a._deepMerge(e[i],t[i]):n[i]=t[i]})),n},a._init=function(t){var i,n;switch(a._initialized=!0,a._vid=t.vid,a.setCookie("_wa_vid",t.vid,1825),_paq.push(["setTrackerUrl","https://"+(e.domain||"watest.mojebanka.cz")+"/tracker"]),_paq.push(["setCookieNamePrefix","_wa_"]),_paq.push(["setCookieDomain",".mojebanka.cz"]),e.application){case"CEXI":case"CORP":case"WLCI":case"EFS":case"KBCZ":case"MojePlatba":case"MojePlany":case"PodnikatelskeFinance":i="VlPX77A8N";break;case"intranet":i="mkxeYRxeb";break;default:i="5"}_paq.push(["setSiteId",i]),n="cid="+t.vid,"PROD"!==t.environment&&(n+="&debug=1"),_paq.push(["appendToTrackingUrl",n]);for(var o=a.q.length;o>0;o--)a(a.q.shift()[0])},a._loadGlobalDataElements=function(e){return e.environment=e.environment||a.environment,e.application=e.application||a.application,e},a.setCookie=function(e,a,t){var i,n;t?(i=new Date,i.setTime(i.getTime()+24*t*60*60*1e3),n="expires="+i.toUTCString()+"; "):n="",document.cookie=e+"="+a+"; "+n+"; path=/"},a.process=function(e){};for(var t=a.q.length;t>0;t--)a(a.q.shift()[0]);return a}(measure);
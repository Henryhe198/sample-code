
/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
var mui=function(a,b){var c=/complete|loaded|interactive/,d=/^#([\w-]+)$/,e=/^\.([\w-]+)$/,f=/^[\w-]+$/,g=/translate(?:3d)?\((.+?)\)/,h=/matrix(3d)?\((.+?)\)/,i=function(b,c){if(c=c||a,!b)return j();if("object"==typeof b)return i.isArrayLike(b)?j(i.slice.call(b),null):j([b],null);if("function"==typeof b)return i.ready(b);if("string"==typeof b)try{if(b=b.trim(),d.test(b)){var e=a.getElementById(RegExp.$1);return j(e?[e]:[])}return j(i.qsa(b,c),b)}catch(f){}return j()},j=function(a,b){return a=a||[],Object.setPrototypeOf(a,i.fn),a.selector=b||"",a};i.uuid=0,i.data={},i.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},j=1,k=arguments.length,l=!1;for("boolean"==typeof h&&(l=h,h=arguments[j]||{},j++),"object"==typeof h||i.isFunction(h)||(h={}),j===k&&(h=this,j--);k>j;j++)if(null!=(a=arguments[j]))for(c in a)d=h[c],e=a[c],h!==e&&(l&&e&&(i.isPlainObject(e)||(f=i.isArray(e)))?(f?(f=!1,g=d&&i.isArray(d)?d:[]):g=d&&i.isPlainObject(d)?d:{},h[c]=i.extend(l,g,e)):e!==b&&(h[c]=e));return h},i.noop=function(){},i.slice=[].slice,i.filter=[].filter,i.type=function(a){return null==a?String(a):k[{}.toString.call(a)]||"object"},i.isArray=Array.isArray||function(a){return a instanceof Array},i.isArrayLike=function(a){var b=!!a&&"length"in a&&a.length,c=i.type(a);return"function"===c||i.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a},i.isWindow=function(a){return null!=a&&a===a.window},i.isObject=function(a){return"object"===i.type(a)},i.isPlainObject=function(a){return i.isObject(a)&&!i.isWindow(a)&&Object.getPrototypeOf(a)===Object.prototype},i.isEmptyObject=function(a){for(var c in a)if(c!==b)return!1;return!0},i.isFunction=function(a){return"function"===i.type(a)},i.qsa=function(b,c){return c=c||a,i.slice.call(e.test(b)?c.getElementsByClassName(RegExp.$1):f.test(b)?c.getElementsByTagName(b):c.querySelectorAll(b))},i.ready=function(b){return c.test(a.readyState)?b(i):a.addEventListener("DOMContentLoaded",function(){b(i)},!1),this},i.buffer=function(a,b,c){function d(){e&&(e.cancel(),e=0),f=i.now(),a.apply(c||this,arguments),g=i.now()}var e,f=0,g=0,b=b||150;return i.extend(function(){!f||g>=f&&i.now()-g>b||f>g&&i.now()-f>8*b?d():(e&&e.cancel(),e=i.later(d,b,null,arguments))},{stop:function(){e&&(e.cancel(),e=0)}})},i.each=function(a,b,c){if(!a)return this;if("number"==typeof a.length)[].every.call(a,function(a,c){return b.call(a,c,a)!==!1});else for(var d in a)if(c){if(a.hasOwnProperty(d)&&b.call(a[d],d,a[d])===!1)return a}else if(b.call(a[d],d,a[d])===!1)return a;return this},i.focus=function(a){i.os.ios?setTimeout(function(){a.focus()},10):a.focus()},i.trigger=function(a,b,c){return a.dispatchEvent(new CustomEvent(b,{detail:c,bubbles:!0,cancelable:!0})),this},i.getStyles=function(a,b){var c=a.ownerDocument.defaultView.getComputedStyle(a,null);return b?c.getPropertyValue(b)||c[b]:c},i.parseTranslate=function(a,b){var c=a.match(g||"");return c&&c[1]||(c=["","0,0,0"]),c=c[1].split(","),c={x:parseFloat(c[0]),y:parseFloat(c[1]),z:parseFloat(c[2])},b&&c.hasOwnProperty(b)?c[b]:c},i.parseTranslateMatrix=function(a,b){var c=a.match(h),d=c&&c[1];c?(c=c[2].split(","),"3d"===d?c=c.slice(12,15):(c.push(0),c=c.slice(4,7))):c=[0,0,0];var e={x:parseFloat(c[0]),y:parseFloat(c[1]),z:parseFloat(c[2])};return b&&e.hasOwnProperty(b)?e[b]:e},i.hooks={},i.addAction=function(a,b){var c=i.hooks[a];return c||(c=[]),b.index=b.index||1e3,c.push(b),c.sort(function(a,b){return a.index-b.index}),i.hooks[a]=c,i.hooks[a]},i.doAction=function(a,b){i.isFunction(b)?i.each(i.hooks[a],b):i.each(i.hooks[a],function(a,b){return!b.handle()})},i.later=function(a,b,c,d){b=b||0;var e,f,g=a,h=d;return"string"==typeof a&&(g=c[a]),e=function(){g.apply(c,i.isArray(h)?h:[h])},f=setTimeout(e,b),{id:f,cancel:function(){clearTimeout(f)}}},i.now=Date.now||function(){return+new Date};var k={};return i.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],function(a,b){k["[object "+b+"]"]=b.toLowerCase()}),window.JSON&&(i.parseJSON=JSON.parse),i.fn={each:function(a){return[].every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this}},"function"==typeof define&&define.amd&&define("mui",[],function(){return i}),i}(document);!function(a,b){function c(c){this.os={};var d=[function(){var a=c.match(/(MicroMessenger)\/([\d\.]+)/i);return a&&(this.os.wechat={version:a[2].replace(/_/g,".")}),!1},function(){var a=c.match(/(Android);?[\s\/]+([\d.]+)?/);return a&&(this.os.android=!0,this.os.version=a[2],this.os.isBadAndroid=!/Chrome\/\d/.test(b.navigator.appVersion)),this.os.android===!0},function(){var a=c.match(/(iPhone\sOS)\s([\d_]+)/);if(a)this.os.ios=this.os.iphone=!0,this.os.version=a[2].replace(/_/g,".");else{var b=c.match(/(iPad).*OS\s([\d_]+)/);b&&(this.os.ios=this.os.ipad=!0,this.os.version=b[2].replace(/_/g,"."))}return this.os.ios===!0}];[].every.call(d,function(b){return!b.call(a)})}c.call(a,navigator.userAgent)}(mui,window),function(a,b){function c(c){this.os=this.os||{};var d=c.match(/Html5Plus/i);d&&(this.os.plus=!0,a(function(){b.body.classList.add("mui-plus")}),c.match(/StreamApp/i)&&(this.os.stream=!0,a(function(){b.body.classList.add("mui-plus-stream")})))}c.call(a,navigator.userAgent)}(mui,document),function(a){"ontouchstart"in window?(a.isTouchable=!0,a.EVENT_START="touchstart",a.EVENT_MOVE="touchmove",a.EVENT_END="touchend"):(a.isTouchable=!1,a.EVENT_START="mousedown",a.EVENT_MOVE="mousemove",a.EVENT_END="mouseup"),a.EVENT_CANCEL="touchcancel",a.EVENT_CLICK="click";var b=1,c={},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},e=function(){return!0},f=function(){return!1},g=function(b,c){return b.detail?b.detail.currentTarget=c:b.detail={currentTarget:c},a.each(d,function(a,c){var d=b[a];b[a]=function(){return this[c]=e,d&&d.apply(b,arguments)},b[c]=f},!0),b},h=function(a){return a&&(a._mid||(a._mid=b++))},i={},j=function(b,d,e,f){return function(e){for(var f=c[b._mid][d],h=[],i=e.target,j={};i&&i!==document&&i!==b&&(!~["click","tap","doubletap","longtap","hold"].indexOf(d)||!i.disabled&&!i.classList.contains("mui-disabled"));i=i.parentNode){var k={};a.each(f,function(c,d){j[c]||(j[c]=a.qsa(c,b)),j[c]&&~j[c].indexOf(i)&&(k[c]||(k[c]=d))},!0),a.isEmptyObject(k)||h.push({element:i,handlers:k})}j=null,e=g(e),a.each(h,function(b,c){i=c.element;var f=i.tagName;return"tap"===d&&"INPUT"!==f&&"TEXTAREA"!==f&&"SELECT"!==f&&(e.preventDefault(),e.detail&&e.detail.gesture&&e.detail.gesture.preventDefault()),a.each(c.handlers,function(b,c){a.each(c,function(a,b){b.call(i,e)===!1&&(e.preventDefault(),e.stopPropagation())},!0)},!0),e.isPropagationStopped()?!1:void 0},!0)}},k=function(a,b){var c=i[h(a)],d=[];if(c){if(d=[],b){var e=function(a){return a.type===b};return c.filter(e)}d=c}return d},l=/^(INPUT|TEXTAREA|BUTTON|SELECT)$/;a.fn.on=function(b,d,e){return this.each(function(){var f=this;h(f),h(e);var g=!1,k=c[f._mid]||(c[f._mid]={}),m=k[b]||(k[b]={});a.isEmptyObject(m)&&(g=!0);var n=m[d]||(m[d]=[]);if(n.push(e),g){var o=i[h(f)];o||(o=[]);var p=j(f,b,d,e);o.push(p),p.i=o.length-1,p.type=b,i[h(f)]=o,f.addEventListener(b,p),"tap"===b&&f.addEventListener("click",function(a){if(a.target){var b=a.target.tagName;if(!l.test(b))if("A"===b){var c=a.target.href;c&&~c.indexOf("tel:")||a.preventDefault()}else a.preventDefault()}})}})},a.fn.off=function(b,d,e){return this.each(function(){var f=h(this);if(b)if(d)if(e){var g=c[f]&&c[f][b]&&c[f][b][d];a.each(g,function(a,b){return h(b)===h(e)?(g.splice(a,1),!1):void 0},!0)}else c[f]&&c[f][b]&&delete c[f][b][d];else c[f]&&delete c[f][b];else c[f]&&delete c[f];c[f]?(!c[f][b]||a.isEmptyObject(c[f][b]))&&k(this,b).forEach(function(a){this.removeEventListener(a.type,a),delete i[f][a.i]}.bind(this)):k(this).forEach(function(a){this.removeEventListener(a.type,a),delete i[f][a.i]}.bind(this))})}}(mui),function(a,b,c){a.targets={},a.targetHandles=[],a.registerTarget=function(b){return b.index=b.index||1e3,a.targetHandles.push(b),a.targetHandles.sort(function(a,b){return a.index-b.index}),a.targetHandles},b.addEventListener(a.EVENT_START,function(b){for(var d=b.target,e={};d&&d!==c;d=d.parentNode){var f=!1;if(a.each(a.targetHandles,function(c,g){var h=g.name;f||e[h]||!g.hasOwnProperty("handle")?e[h]||g.isReset!==!1&&(a.targets[h]=!1):(a.targets[h]=g.handle(b,d),a.targets[h]&&(e[h]=!0,g.isContinue!==!0&&(f=!0)))}),f)break}}),b.addEventListener("click",function(b){for(var d=b.target,e=!1;d&&d!==c&&("A"!==d.tagName||(a.each(a.targetHandles,function(a,c){c.name;return c.hasOwnProperty("handle")&&c.handle(b,d)?(e=!0,b.preventDefault(),!1):void 0}),!e));d=d.parentNode);})}(mui,window,document),function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Object.setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a}}(),function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("Events"),d=!0;for(var e in b)"bubbles"===e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),c}"undefined"==typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)}(),Function.prototype.bind=Function.prototype.bind||function(a){var b=Array.prototype.splice.call(arguments,1),c=this,d=function(){var e=b.concat(Array.prototype.splice.call(arguments,0));return this instanceof d?void c.apply(this,e):c.apply(a,e)};return d.prototype=c.prototype,d},function(a){"classList"in a.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function a(a){return function(c){var d=b.className.split(/\s+/),e=d.indexOf(c);a(d,e,c),b.className=d.join(" ")}}var b=this,c={add:a(function(a,b,c){~b||a.push(c)}),remove:a(function(a,b){~b&&a.splice(b,1)}),toggle:a(function(a,b,c){~b?a.splice(b,1):a.push(c)}),contains:function(a){return!!~b.className.split(/\s+/).indexOf(a)},item:function(a){return b.className.split(/\s+/)[a]||null}};return Object.defineProperty(c,"length",{get:function(){return b.className.split(/\s+/).length}}),c}})}(document),function(a){if(!a.requestAnimationFrame){var b=0;a.requestAnimationFrame=a.webkitRequestAnimationFrame||function(c,d){var e=(new Date).getTime(),f=Math.max(0,16.7-(e-b)),g=a.setTimeout(function(){c(e+f)},f);return b=e+f,g},a.cancelAnimationFrame=a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame||function(a){clearTimeout(a)}}}(window),function(a,b,c){if((a.os.android||a.os.ios)&&!b.FastClick){var d=function(a,b){return"LABEL"===b.tagName&&b.parentNode&&(b=b.parentNode.querySelector("input")),!b||"radio"!==b.type&&"checkbox"!==b.type||b.disabled?!1:b};a.registerTarget({name:c,index:40,handle:d,target:!1});var e=function(c){var d=a.targets.click;if(d){var e,f;document.activeElement&&document.activeElement!==d&&document.activeElement.blur(),f=c.detail.gesture.changedTouches[0],e=document.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,b,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),e.forwardedTouchEvent=!0,d.dispatchEvent(e),c.detail&&c.detail.gesture.preventDefault()}};b.addEventListener("tap",e),b.addEventListener("doubletap",e),b.addEventListener("click",function(b){return a.targets.click&&!b.forwardedTouchEvent?(b.stopImmediatePropagation?b.stopImmediatePropagation():b.propagationStopped=!0,b.stopPropagation(),b.preventDefault(),!1):void 0},!0)}}(mui,window,"click"),function(a,b){a(function(){if(a.os.ios){var c="mui-focusin",d="mui-bar-tab",e="mui-bar-footer",f="mui-bar-footer-secondary",g="mui-bar-footer-secondary-tab";b.addEventListener("focusin",function(h){if(!(a.os.plus&&window.plus&&plus.webview.currentWebview().children().length>0)){var i=h.target;if(i.tagName&&("TEXTAREA"===i.tagName||"INPUT"===i.tagName&&("text"===i.type||"search"===i.type||"number"===i.type))){if(i.disabled||i.readOnly)return;b.body.classList.add(c);for(var j=!1;i&&i!==b;i=i.parentNode){var k=i.classList;if(k&&k.contains(d)||k.contains(e)||k.contains(f)||k.contains(g)){j=!0;break}}if(j){var l=b.body.scrollHeight,m=b.body.scrollLeft;setTimeout(function(){window.scrollTo(m,l)},20)}}}}),b.addEventListener("focusout",function(a){var d=b.body.classList;d.contains(c)&&(d.remove(c),setTimeout(function(){window.scrollTo(b.body.scrollLeft,b.body.scrollTop)},20))})}})}(mui,document),function(a){a.namespace="mui",a.classNamePrefix=a.namespace+"-",a.classSelectorPrefix="."+a.classNamePrefix,a.className=function(b){return a.classNamePrefix+b},a.classSelector=function(b){return b.replace(/\./g,a.classSelectorPrefix)},a.eventName=function(b,c){return b+(a.namespace?"."+a.namespace:"")+(c?"."+c:"")}}(mui),function(a,b){a.gestures={session:{}},a.preventDefault=function(a){a.preventDefault()},a.stopPropagation=function(a){a.stopPropagation()},a.addGesture=function(b){return a.addAction("gestures",b)};var c=Math.round,d=Math.abs,e=Math.sqrt,f=(Math.atan,Math.atan2),g=function(a,b,c){c||(c=["x","y"]);var d=b[c[0]]-a[c[0]],f=b[c[1]]-a[c[1]];return e(d*d+f*f)},h=function(a,b){if(a.length>=2&&b.length>=2){var c=["pageX","pageY"];return g(b[1],b[0],c)/g(a[1],a[0],c)}return 1},i=function(a,b,c){c||(c=["x","y"]);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*f(e,d)/Math.PI},j=function(a,b){return a===b?"":d(a)>=d(b)?a>0?"left":"right":b>0?"up":"down"},k=function(a,b){var c=["pageX","pageY"];return i(b[1],b[0],c)-i(a[1],a[0],c)},l=function(a,b,c){return{x:b/a||0,y:c/a||0}},m=function(b,c){a.gestures.stoped||a.doAction("gestures",function(d,e){a.gestures.stoped||a.options.gestureConfig[e.name]!==!1&&e.handle(b,c)})},n=function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},o=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];e.indexOf(g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d},p=function(a){var b=a.length;if(1===b)return{x:c(a[0].pageX),y:c(a[0].pageY)};for(var d=0,e=0,f=0;b>f;)d+=a[f].pageX,e+=a[f].pageY,f++;return{x:c(d/b),y:c(e/b)}},q=function(){return a.options.gestureConfig.pinch},r=function(b){for(var d=[],e=0;e<b.touches.length;)d[e]={pageX:c(b.touches[e].pageX),pageY:c(b.touches[e].pageY)},e++;return{timestamp:a.now(),gesture:b.gesture,touches:d,center:p(b.touches),deltaX:b.deltaX,deltaY:b.deltaY}},s=function(b){var c=a.gestures.session,d=b.center,e=c.offsetDelta||{},f=c.prevDelta||{},g=c.prevTouch||{};(b.gesture.type===a.EVENT_START||b.gesture.type===a.EVENT_END)&&(f=c.prevDelta={x:g.deltaX||0,y:g.deltaY||0},e=c.offsetDelta={x:d.x,y:d.y}),b.deltaX=f.x+(d.x-e.x),b.deltaY=f.y+(d.y-e.y)},t=function(b){var c=a.gestures.session,d=b.touches,e=d.length;c.firstTouch||(c.firstTouch=r(b)),q()&&e>1&&!c.firstMultiTouch?c.firstMultiTouch=r(b):1===e&&(c.firstMultiTouch=!1);var f=c.firstTouch,l=c.firstMultiTouch,m=l?l.center:f.center,n=b.center=p(d);b.timestamp=a.now(),b.deltaTime=b.timestamp-f.timestamp,b.angle=i(m,n),b.distance=g(m,n),s(b),b.offsetDirection=j(b.deltaX,b.deltaY),b.scale=l?h(l.touches,d):1,b.rotation=l?k(l.touches,d):0,v(b)},u=25,v=function(b){var c,e,f,g,h=a.gestures.session,i=h.lastInterval||b,k=b.timestamp-i.timestamp;if(b.gesture.type!=a.EVENT_CANCEL&&(k>u||void 0===i.velocity)){var m=i.deltaX-b.deltaX,n=i.deltaY-b.deltaY,o=l(k,m,n);e=o.x,f=o.y,c=d(o.x)>d(o.y)?o.x:o.y,g=j(m,n)||i.direction,h.lastInterval=b}else c=i.velocity,e=i.velocityX,f=i.velocityY,g=i.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g},w={},x=function(a){for(var b=0;b<a.length;b++)!a.identifier&&(a.identifier=0);return a},y=function(b,c){var d=x(a.slice.call(b.touches||[b])),e=b.type,f=[],g=[];if(e!==a.EVENT_START&&e!==a.EVENT_MOVE||1!==d.length){var h=0,f=[],g=[],i=x(a.slice.call(b.changedTouches||[b]));c.target=b.target;var j=a.gestures.session.target||b.target;if(f=d.filter(function(a){return n(a.target,j)}),e===a.EVENT_START)for(h=0;h<f.length;)w[f[h].identifier]=!0,h++;for(h=0;h<i.length;)w[i[h].identifier]&&g.push(i[h]),(e===a.EVENT_END||e===a.EVENT_CANCEL)&&delete w[i[h].identifier],h++;if(!g.length)return!1}else w[d[0].identifier]=!0,f=d,g=d,c.target=b.target;f=o(f.concat(g),"identifier",!0);var k=f.length,l=g.length;return e===a.EVENT_START&&k-l===0&&(c.isFirst=!0,a.gestures.touch=a.gestures.session={target:b.target}),c.isFinal=(e===a.EVENT_END||e===a.EVENT_CANCEL)&&k-l===0,c.touches=f,c.changedTouches=g,!0},z=function(b){var c={gesture:b},d=y(b,c);d&&(t(c),m(b,c),a.gestures.session.prevTouch=c,b.type!==a.EVENT_END||a.isTouchable||(a.gestures.touch=a.gestures.session={}))};b.addEventListener(a.EVENT_START,z),b.addEventListener(a.EVENT_MOVE,z),b.addEventListener(a.EVENT_END,z),b.addEventListener(a.EVENT_CANCEL,z),b.addEventListener(a.EVENT_CLICK,function(b){(a.os.android||a.os.ios)&&(a.targets.popover&&b.target===a.targets.popover||a.targets.tab||a.targets.offcanvas||a.targets.modal)&&b.preventDefault()},!0),a.isScrolling=!1;var A=null;b.addEventListener("scroll",function(){a.isScrolling=!0,A&&clearTimeout(A),A=setTimeout(function(){a.isScrolling=!1},250)})}(mui,window),function(a,b){var c=0,d=function(d,e){var f=a.gestures.session,g=this.options,h=a.now();switch(d.type){case a.EVENT_MOVE:h-c>300&&(c=h,f.flickStart=e.center);break;case a.EVENT_END:case a.EVENT_CANCEL:e.flick=!1,f.flickStart&&g.flickMaxTime>h-c&&e.distance>g.flickMinDistince&&(e.flick=!0,e.flickTime=h-c,e.flickDistanceX=e.center.x-f.flickStart.x,e.flickDistanceY=e.center.y-f.flickStart.y,a.trigger(f.target,b,e),a.trigger(f.target,b+e.direction,e))}};a.addGesture({name:b,index:5,handle:d,options:{flickMaxTime:200,flickMinDistince:10}})}(mui,"flick"),function(a,b){var c=function(c,d){var e=a.gestures.session;if(c.type===a.EVENT_END||c.type===a.EVENT_CANCEL){var f=this.options;d.swipe=!1,d.direction&&f.swipeMaxTime>d.deltaTime&&d.distance>f.swipeMinDistince&&(d.swipe=!0,a.trigger(e.target,b,d),a.trigger(e.target,b+d.direction,d))}};a.addGesture({name:b,index:10,handle:c,options:{swipeMaxTime:300,swipeMinDistince:18}})}(mui,"swipe"),function(a,b){var c=function(c,d){var e=a.gestures.session;switch(c.type){case a.EVENT_START:break;case a.EVENT_MOVE:if(!d.direction||!e.target)return;e.lockDirection&&e.startDirection&&e.startDirection&&e.startDirection!==d.direction&&("up"===e.startDirection||"down"===e.startDirection?d.direction=d.deltaY<0?"up":"down":d.direction=d.deltaX<0?"left":"right"),e.drag||(e.drag=!0,a.trigger(e.target,b+"start",d)),a.trigger(e.target,b,d),a.trigger(e.target,b+d.direction,d);break;case a.EVENT_END:case a.EVENT_CANCEL:e.drag&&d.isFinal&&a.trigger(e.target,b+"end",d)}};a.addGesture({name:b,index:20,handle:c,options:{fingers:1}})}(mui,"drag"),function(a,b){var c,d,e=function(e,f){var g=a.gestures.session,h=this.options;switch(e.type){case a.EVENT_END:if(!f.isFinal)return;var i=g.target;if(!i||i.disabled||i.classList&&i.classList.contains("mui-disabled"))return;if(f.distance<h.tapMaxDistance&&f.deltaTime<h.tapMaxTime){if(a.options.gestureConfig.doubletap&&c&&c===i&&d&&f.timestamp-d<h.tapMaxInterval)return a.trigger(i,"doubletap",f),d=a.now(),void(c=i);a.trigger(i,b,f),d=a.now(),c=i}}};a.addGesture({name:b,index:30,handle:e,options:{fingers:1,tapMaxInterval:300,tapMaxDistance:5,tapMaxTime:250}})}(mui,"tap"),function(a,b){var c,d=function(d,e){var f=a.gestures.session,g=this.options;switch(d.type){case a.EVENT_START:clearTimeout(c),c=setTimeout(function(){a.trigger(f.target,b,e)},g.holdTimeout);break;case a.EVENT_MOVE:e.distance>g.holdThreshold&&clearTimeout(c);break;case a.EVENT_END:case a.EVENT_CANCEL:clearTimeout(c)}};a.addGesture({name:b,index:10,handle:d,options:{fingers:1,holdTimeout:500,holdThreshold:2}})}(mui,"longtap"),function(a,b){var c,d=function(d,e){var f=a.gestures.session,g=this.options;switch(d.type){case a.EVENT_START:a.options.gestureConfig.hold&&(c&&clearTimeout(c),c=setTimeout(function(){e.hold=!0,a.trigger(f.target,b,e)},g.holdTimeout));break;case a.EVENT_MOVE:break;case a.EVENT_END:case a.EVENT_CANCEL:c&&(clearTimeout(c)&&(c=null),a.trigger(f.target,"release",e))}};a.addGesture({name:b,index:10,handle:d,options:{fingers:1,holdTimeout:0}})}(mui,"hold"),function(a,b){var c=function(c,d){var e=this.options,f=a.gestures.session;switch(c.type){case a.EVENT_START:break;case a.EVENT_MOVE:if(a.options.gestureConfig.pinch){if(d.touches.length<2)return;f.pinch||(f.pinch=!0,a.trigger(f.target,b+"start",d)),a.trigger(f.target,b,d);var g=d.scale,h=d.rotation,i="undefined"==typeof d.lastScale?1:d.lastScale,j=1e-12;g>i?(i=g-j,a.trigger(f.target,b+"out",d)):i>g&&(i=g+j,a.trigger(f.target,b+"in",d)),Math.abs(h)>e.minRotationAngle&&a.trigger(f.target,"rotate",d)}break;case a.EVENT_END:case a.EVENT_CANCEL:a.options.gestureConfig.pinch&&f.pinch&&2===d.touches.length&&(f.pinch=!1,a.trigger(f.target,b+"end",d))}};a.addGesture({name:b,index:10,handle:c,options:{minRotationAngle:0}})}(mui,"pinch"),function(a){function b(a,b){var c="MUI_SCROLL_POSITION_"+document.location.href+"_"+b.src,d=parseFloat(localStorage.getItem(c))||0;d&&!function(a){b.onload=function(){window.scrollTo(0,a)}}(d),setInterval(function(){var a=window.scrollY;d!==a&&(localStorage.setItem(c,a+""),d=a)},100)}a.global=a.options={gestureConfig:{tap:!0,doubletap:!1,longtap:!1,hold:!1,flick:!0,swipe:!0,drag:!0,pinch:!1}},a.initGlobal=function(b){return a.options=a.extend(!0,a.global,b),this};var c={},d=!1;a.init=function(b){return d=!0,a.options=a.extend(!0,a.global,b||{}),a.ready(function(){a.doAction("inits",function(b,d){var e=!(c[d.name]&&!d.repeat);e&&(d.handle.call(a),c[d.name]=!0)})}),this},a.addInit=function(b){return a.addAction("inits",b)},a.addInit({name:"iframe",index:100,handle:function(){var b=a.options,c=b.subpages||[];!a.os.plus&&c.length&&e(c[0])}});var e=function(c){var d=document.createElement("div");d.className="mui-iframe-wrapper";var e=c.styles||{};"string"!=typeof e.top&&(e.top="0px"),"string"!=typeof e.bottom&&(e.bottom="0px"),d.style.top=e.top,d.style.bottom=e.bottom;var f=document.createElement("iframe");f.src=c.url,f.id=c.id||c.url,f.name=f.id,d.appendChild(f),document.body.appendChild(d),a.os.wechat&&b(d,f)};a(function(){var b=document.body.classList,c=[];a.os.ios?(c.push({os:"ios",version:a.os.version}),b.add("mui-ios")):a.os.android&&(c.push({os:"android",version:a.os.version}),b.add("mui-android")),a.os.wechat&&(c.push({os:"wechat",version:a.os.wechat.version}),b.add("mui-wechat")),c.length&&a.each(c,function(c,d){var e="";d.version&&a.each(d.version.split("."),function(c,f){e=e+(e?"-":"")+f,b.add(a.className(d.os+"-"+e))})})})}(mui),function(a){var b={swipeBack:!1,preloadPages:[],preloadLimit:10,keyEventBind:{backbutton:!0,menubutton:!0}},c={autoShow:!0,duration:a.os.ios?200:100,aniShow:"slide-in-right"};a.options.show&&(c=a.extend(!0,c,a.options.show)),a.currentWebview=null,a.isHomePage=!1,a.extend(!0,a.global,b),a.extend(!0,a.options,b),a.waitingOptions=function(b){return a.extend(!0,{},{autoShow:!0,title:"",modal:!1},b)},a.showOptions=function(b){return a.extend(!0,{},c,b)},a.windowOptions=function(b){return a.extend({scalable:!1,bounce:""},b)},a.plusReady=function(a){return window.plus?setTimeout(function(){a()},0):document.addEventListener("plusready",function(){a()},!1),this},a.fire=function(b,c,d){b&&(""!==d&&(d=d||{},a.isPlainObject(d)&&(d=JSON.stringify(d||{}).replace(/\'/g,"\\u0027").replace(/\\/g,"\\u005c"))),b.evalJS("typeof mui!=='undefined'&&mui.receive('"+c+"','"+d+"')"))},a.receive=function(b,c){if(b){try{c&&(c=JSON.parse(c))}catch(d){}a.trigger(document,b,c)}};var d=function(b){if(!b.preloaded){a.fire(b,"preload");for(var c=b.children(),d=0;d<c.length;d++)a.fire(c[d],"preload");b.preloaded=!0}},e=function(b,c,d){if(d){if(!b[c+"ed"]){a.fire(b,c);for(var e=b.children(),f=0;f<e.length;f++)a.fire(e[f],c);b[c+"ed"]=!0}}else{a.fire(b,c);for(var e=b.children(),f=0;f<e.length;f++)a.fire(e[f],c)}};a.openWindow=function(b,c,f){if("object"==typeof b?(f=b,b=f.url,c=f.id||b):"object"==typeof c?(f=c,c=b):c=c||b,!a.os.plus)return void(a.os.ios||a.os.android?window.top.location.href=b:window.parent.location.href=b);if(window.plus){f=f||{};var g,h,i=f.params||{},j=null,k=null;if(a.webviews[c]&&(k=a.webviews[c],plus.webview.getWebviewById(c)&&(j=k.webview)),k&&j)return g=k.show,g=f.show?a.extend(g,f.show):g,j.show(g.aniShow,g.duration,function(){d(j),e(j,"pagebeforeshow",!1)}),k.afterShowMethodName&&j.evalJS(k.afterShowMethodName+"('"+JSON.stringify(i)+"')"),j;if(f.createNew!==!0){if(j=plus.webview.getWebviewById(c))return g=a.showOptions(f.show),g.autoShow&&j.show(g.aniShow,g.duration,function(){d(j),e(j,"pagebeforeshow",!1)}),j;if(!b)throw new Error("webview["+c+"] does not exist")}var l=a.waitingOptions(f.waiting);if(l.autoShow&&(h=plus.nativeUI.showWaiting(l.title,l.options)),f=a.extend(f,{id:c,url:b}),j=a.createWindow(f),g=a.showOptions(f.show),g.autoShow){var m=function(){h&&h.close(),j.show(g.aniShow,g.duration,function(){}),j.showed=!0,f.afterShowMethodName&&j.evalJS(f.afterShowMethodName+"('"+JSON.stringify(i)+"')")};b?(j.addEventListener("titleUpdate",m,!1),j.addEventListener("loaded",function(){d(j),e(j,"pagebeforeshow",!1)},!1)):m()}return j}},a.createWindow=function(b,c){if(window.plus){var d,e=b.id||b.url;if(b.preload){a.webviews[e]&&a.webviews[e].webview.getURL()?d=a.webviews[e].webview:(b.createNew!==!0&&(d=plus.webview.getWebviewById(e)),d||(d=plus.webview.create(b.url,e,a.windowOptions(b.styles),a.extend({preload:!0},b.extras)),b.subpages&&a.each(b.subpages,function(b,c){var e=c.id||c.url;if(e){var f=plus.webview.getWebviewById(e);f||(f=plus.webview.create(c.url,e,a.windowOptions(c.styles),a.extend({preload:!0},c.extras))),d.append(f)}}))),a.webviews[e]={webview:d,preload:!0,show:a.showOptions(b.show),afterShowMethodName:b.afterShowMethodName};var f=a.data.preloads,g=f.indexOf(e);if(~g&&f.splice(g,1),f.push(e),f.length>a.options.preloadLimit){var h=a.data.preloads.shift(),i=a.webviews[h];i&&i.webview&&a.closeAll(i.webview),delete a.webviews[h]}}else c!==!1&&(d=plus.webview.create(b.url,e,a.windowOptions(b.styles),b.extras),b.subpages&&a.each(b.subpages,function(b,c){var e=c.id||c.url,f=plus.webview.getWebviewById(e);f||(f=plus.webview.create(c.url,e,a.windowOptions(c.styles),c.extras)),d.append(f)}));return d}},a.preload=function(b){return b.preload||(b.preload=!0),a.createWindow(b)},a.closeOpened=function(b){var c=b.opened();if(c)for(var d=0,e=c.length;e>d;d++){var f=c[d],g=f.opened();g&&g.length>0?(a.closeOpened(f),f.close("none")):f.parent()!==b&&f.close("none")}},a.closeAll=function(b,c){a.closeOpened(b),c?b.close(c):b.close()},a.createWindows=function(b){a.each(b,function(b,c){a.createWindow(c,!1)})},a.appendWebview=function(b){if(window.plus){var c,d=b.id||b.url;return a.webviews[d]||(plus.webview.getWebviewById(d)||(c=plus.webview.create(b.url,d,b.styles,b.extras)),plus.webview.currentWebview().append(c),a.webviews[d]=b),c}},a.webviews={},a.data.preloads=[],a.plusReady(function(){a.currentWebview=plus.webview.currentWebview()}),a.addInit({name:"5+",index:100,handle:function(){var b=a.options,c=b.subpages||[];a.os.plus&&a.plusReady(function(){a.each(c,function(b,c){a.appendWebview(c)}),plus.webview.currentWebview()===plus.webview.getWebviewById(plus.runtime.appid)&&(a.isHomePage=!0,setTimeout(function(){d(plus.webview.currentWebview())},300)),a.os.ios&&a.options.statusBarBackground&&plus.navigator.setStatusBarBackground(a.options.statusBarBackground),a.os.android&&parseFloat(a.os.version)<4.4&&null==plus.webview.currentWebview().parent()&&document.addEventListener("resume",function(){var a=document.body;a.style.display="none",setTimeout(function(){a.style.display=""},10)})})}}),window.addEventListener("preload",function(){var b=a.options.preloadPages||[];a.plusReady(function(){a.each(b,function(b,c){a.createWindow(a.extend(c,{preload:!0}))})})}),a.supportStatusbarOffset=function(){return a.os.plus&&a.os.ios&&parseFloat(a.os.version)>=7},a.ready(function(){a.supportStatusbarOffset()&&document.body.classList.add("mui-statusbar")})}(mui),function(a,b){a.addBack=function(b){return a.addAction("backs",b)},a.addBack({name:"browser",index:100,handle:function(){return b.history.length>1?(b.history.back(),!0):!1}}),a.back=function(){("function"!=typeof a.options.beforeback||a.options.beforeback()!==!1)&&a.doAction("backs")},b.addEventListener("tap",function(b){var c=a.targets.action;c&&c.classList.contains("mui-action-back")&&(a.back(),a.targets.action=!1)}),b.addEventListener("swiperight",function(b){var c=b.detail;a.options.swipeBack===!0&&Math.abs(c.angle)<3&&a.back()})}(mui,window),function(a,b){a.os.plus&&a.os.android&&a.addBack({name:"mui",index:5,handle:function(){if(a.targets._popover&&a.targets._popover.classList.contains("mui-active"))return a(a.targets._popover).popover("hide"),!0;var b=document.querySelector(".mui-off-canvas-wrap.mui-active");if(b)return a(b).offCanvas("close"),!0;var c=a.isFunction(a.getPreviewImage)&&a.getPreviewImage();return c&&c.isShown()?(c.close(),!0):a.closePopup()}}),a.__back__first=null,a.addBack({name:"5+",index:10,handle:function(){if(!b.plus)return!1;var c=plus.webview.currentWebview(),d=c.parent();return d?d.evalJS("mui&&mui.back();"):c.canBack(function(d){d.canBack?b.history.back():c.id===plus.runtime.appid?a.__back__first?(new Date).getTime()-a.__back__first<2e3&&plus.runtime.quit():(a.__back__first=(new Date).getTime(),mui.toast("再按一次退出应用"),setTimeout(function(){a.__back__first=null},2e3)):c.preload?c.hide("auto"):a.closeAll(c)}),!0}}),a.menu=function(){var c=document.querySelector(".mui-action-menu");if(c)a.trigger(c,a.EVENT_START),a.trigger(c,"tap");else if(b.plus){var d=a.currentWebview,e=d.parent();e&&e.evalJS("mui&&mui.menu();")}};var c=function(){a.back()},d=function(){a.menu()};a.plusReady(function(){a.options.keyEventBind.backbutton&&plus.key.addEventListener("backbutton",c,!1),a.options.keyEventBind.menubutton&&plus.key.addEventListener("menubutton",d,!1)}),a.addInit({name:"keyEventBind",index:1e3,handle:function(){a.plusReady(function(){a.options.keyEventBind.backbutton||plus.key.removeEventListener("backbutton",c),a.options.keyEventBind.menubutton||plus.key.removeEventListener("menubutton",d)})}})}(mui,window),function(a){a.addInit({name:"pullrefresh",index:1e3,handle:function(){var b=a.options,c=b.pullRefresh||{},d=c.down&&c.down.hasOwnProperty("callback"),e=c.up&&c.up.hasOwnProperty("callback");if(d||e){var f=c.container;if(f){var g=a(f);1===g.length&&(a.os.plus&&a.os.android?a.plusReady(function(){var b=plus.webview.currentWebview();if(e){var f={};f.up=c.up,f.webviewId=b.id||b.getURL(),g.pullRefresh(f)}if(d){var h=b.parent(),i=b.id||b.getURL();if(h){e||g.pullRefresh({webviewId:i});var j={webviewId:i};j.down=a.extend({},c.down),j.down.callback="_CALLBACK",h.evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('"+JSON.stringify(j)+"')")}}}):g.pullRefresh(c))}}}})}(mui),function(a,b,c){var d="application/json",e="text/html",f=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,g=/^(?:text|application)\/javascript/i,h=/^(?:text|application)\/xml/i,i=/^\s*$/;a.ajaxSettings={type:"GET",beforeSend:a.noop,success:a.noop,error:a.noop,complete:a.noop,context:null,xhr:function(a){return new b.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:d,xml:"application/xml, text/xml",html:e,text:"text/plain"},timeout:0,processData:!0,cache:!0};var j=function(a,b){var c=b.context;return b.beforeSend.call(c,a,b)===!1?!1:void 0},k=function(a,b,c){c.success.call(c.context,a,"success",b),m("success",b,c)},l=function(a,b,c,d){d.error.call(d.context,c,b,a),m(b,c,d)},m=function(a,b,c){c.complete.call(c.context,b,a)},n=function(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c);a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"===f||"array"===f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"===f||!d&&"object"===f?n(b,i,d,c):b.add(c,i)})},o=function(b){if(b.processData&&b.data&&"string"!=typeof b.data){var e=b.contentType;!e&&b.headers&&(e=b.headers["Content-Type"]),e&&~e.indexOf(d)?b.data=JSON.stringify(b.data):b.data=a.param(b.data,b.traditional)}!b.data||b.type&&"GET"!==b.type.toUpperCase()||(b.url=p(b.url,b.data),
b.data=c)},p=function(a,b){return""===b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")},q=function(a){return a&&(a=a.split(";",2)[0]),a&&(a===e?"html":a===d?"json":g.test(a)?"script":h.test(a)&&"xml")||"text"},r=function(b,d,e,f){return a.isFunction(d)&&(f=e,e=d,d=c),a.isFunction(e)||(f=e,e=c),{url:b,data:d,success:e,dataType:f}};a.ajax=function(d,e){"object"==typeof d&&(e=d,d=c);var f=e||{};f.url=d||f.url;for(var g in a.ajaxSettings)f[g]===c&&(f[g]=a.ajaxSettings[g]);o(f);var h=f.dataType;f.cache!==!1&&(e&&e.cache===!0||"script"!==h)||(f.url=p(f.url,"_="+a.now()));var m,n=f.accepts[h&&h.toLowerCase()],r={},s=function(a,b){r[a.toLowerCase()]=[a,b]},t=/^([\w-]+:)\/\//.test(f.url)?RegExp.$1:b.location.protocol,u=f.xhr(f),v=u.setRequestHeader;if(s("X-Requested-With","XMLHttpRequest"),s("Accept",n||"*/*"),(n=f.mimeType||n)&&(n.indexOf(",")>-1&&(n=n.split(",",2)[0]),u.overrideMimeType&&u.overrideMimeType(n)),(f.contentType||f.contentType!==!1&&f.data&&"GET"!==f.type.toUpperCase())&&s("Content-Type",f.contentType||"application/x-www-form-urlencoded"),f.headers)for(var w in f.headers)s(w,f.headers[w]);if(u.setRequestHeader=s,u.onreadystatechange=function(){if(4===u.readyState){u.onreadystatechange=a.noop,clearTimeout(m);var b,c=!1,d="file:"===t;if(u.status>=200&&u.status<300||304===u.status||0===u.status&&d&&u.responseText){h=h||q(f.mimeType||u.getResponseHeader("content-type")),b=u.responseText;try{"script"===h?(1,eval)(b):"xml"===h?b=u.responseXML:"json"===h&&(b=i.test(b)?null:a.parseJSON(b))}catch(e){c=e}c?l(c,"parsererror",u,f):k(b,u,f)}else{var g=u.status?"error":"abort",j=u.statusText||null;d&&(g="error",j="404"),l(j,g,u,f)}}},j(u,f)===!1)return u.abort(),l(null,"abort",u,f),u;if(f.xhrFields)for(var w in f.xhrFields)u[w]=f.xhrFields[w];var x="async"in f?f.async:!0;u.open(f.type.toUpperCase(),f.url,x,f.username,f.password);for(var w in r)r.hasOwnProperty(w)&&v.apply(u,r[w]);return f.timeout>0&&(m=setTimeout(function(){u.onreadystatechange=a.noop,u.abort(),l(null,"timeout",u,f)},f.timeout)),u.send(f.data?f.data:null),u},a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(encodeURIComponent(a)+"="+encodeURIComponent(b))},n(c,a,b),c.join("&").replace(/%20/g,"+")},a.get=function(){return a.ajax(r.apply(null,arguments))},a.post=function(){var b=r.apply(null,arguments);return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=r.apply(null,arguments);return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this;var e,g=this,h=b.split(/\s/),i=r(b,c,d),j=i.success;return h.length>1&&(i.url=h[0],e=h[1]),i.success=function(a){if(e){var b=document.createElement("div");b.innerHTML=a.replace(f,"");var c=document.createElement("div"),d=b.querySelectorAll(e);if(d&&d.length>0)for(var h=0,i=d.length;i>h;h++)c.appendChild(d[h]);g[0].innerHTML=c.innerHTML}else g[0].innerHTML=a;j&&j.apply(g,arguments)},a.ajax(i),this}}(mui,window),function(a){var b=document.createElement("a");b.href=window.location.href,a.plusReady(function(){a.ajaxSettings=a.extend(a.ajaxSettings,{xhr:function(a){if(a.crossDomain)return new plus.net.XMLHttpRequest;if("file:"!==b.protocol){var c=document.createElement("a");if(c.href=a.url,c.href=c.href,a.crossDomain=b.protocol+"//"+b.host!=c.protocol+"//"+c.host,a.crossDomain)return new plus.net.XMLHttpRequest}return new window.XMLHttpRequest}})})}(mui),function(a,b,c){a.offset=function(a){var d={top:0,left:0};return typeof a.getBoundingClientRect!==c&&(d=a.getBoundingClientRect()),{top:d.top+b.pageYOffset-a.clientTop,left:d.left+b.pageXOffset-a.clientLeft}}}(mui,window),function(a,b){a.scrollTo=function(a,c,d){c=c||1e3;var e=function(c){if(0>=c)return b.scrollTo(0,a),void(d&&d());var f=a-b.scrollY;setTimeout(function(){b.scrollTo(0,b.scrollY+f/c*10),e(c-10)},16.7)};e(c)},a.animationFrame=function(a){var b,c,d;return function(){b=arguments,d=this,c||(c=!0,requestAnimationFrame(function(){a.apply(d,b),c=!1}))}}}(mui,window),function(a){var b=!1,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,d=function(){};d.extend=function(a){function d(){!b&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;b=!0;var f=new this;b=!1;for(var g in a)f[g]="function"==typeof a[g]&&"function"==typeof e[g]&&c.test(a[g])?function(a,b){return function(){var c=this._super;this._super=e[a];var d=b.apply(this,arguments);return this._super=c,d}}(g,a[g]):a[g];return d.prototype=f,d.prototype.constructor=d,d.extend=arguments.callee,d},a.Class=d}(mui),function(a,b,c){var d="mui-pull-top-pocket",e="mui-pull-bottom-pocket",f="mui-pull",g="mui-pull-loading",h="mui-pull-caption",i="mui-pull-caption-down",j="mui-pull-caption-refresh",k="mui-pull-caption-nomore",l="mui-icon",m="mui-spinner",n="mui-icon-pulldown",o="mui-block",p="mui-hidden",q="mui-visibility",r=g+" "+l+" "+n,s=g+" "+l+" "+n,t=g+" "+l+" "+m,u=['<div class="'+f+'">','<div class="{icon}"></div>','<div class="'+h+'">{contentrefresh}</div>',"</div>"].join(""),v={init:function(b,c){this._super(b,a.extend(!0,{scrollY:!0,scrollX:!1,indicators:!0,deceleration:.003,down:{height:50,contentinit:"下拉可以刷新",contentdown:"下拉可以刷新",contentover:"释放立即刷新",contentrefresh:"正在刷新..."},up:{height:50,auto:!1,contentinit:"上拉显示更多",contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",duration:300}},c))},_init:function(){this._super(),this._initPocket()},_initPulldownRefresh:function(){this.pulldown=!0,this.pullPocket=this.topPocket,this.pullPocket.classList.add(o),this.pullPocket.classList.add(q),this.pullCaption=this.topCaption,this.pullLoading=this.topLoading},_initPullupRefresh:function(){this.pulldown=!1,this.pullPocket=this.bottomPocket,this.pullPocket.classList.add(o),this.pullPocket.classList.add(q),this.pullCaption=this.bottomCaption,this.pullLoading=this.bottomLoading},_initPocket:function(){var a=this.options;a.down&&a.down.hasOwnProperty("callback")&&(this.topPocket=this.scroller.querySelector("."+d),this.topPocket||(this.topPocket=this._createPocket(d,a.down,s),this.wrapper.insertBefore(this.topPocket,this.wrapper.firstChild)),this.topLoading=this.topPocket.querySelector("."+g),this.topCaption=this.topPocket.querySelector("."+h)),a.up&&a.up.hasOwnProperty("callback")&&(this.bottomPocket=this.scroller.querySelector("."+e),this.bottomPocket||(this.bottomPocket=this._createPocket(e,a.up,t),this.scroller.appendChild(this.bottomPocket)),this.bottomLoading=this.bottomPocket.querySelector("."+g),this.bottomCaption=this.bottomPocket.querySelector("."+h),this.wrapper.addEventListener("scrollbottom",this))},_createPocket:function(a,c,d){var e=b.createElement("div");return e.className=a,e.innerHTML=u.replace("{contentrefresh}",c.contentinit).replace("{icon}",d),e},_resetPullDownLoading:function(){var a=this.pullLoading;a&&(this.pullCaption.innerHTML=this.options.down.contentdown,a.style.webkitTransition="",a.style.webkitTransform="",a.style.webkitAnimation="",a.className=s)},_setCaptionClass:function(a,b,c){if(!a)switch(c){case this.options.up.contentdown:b.className=h+" "+i;break;case this.options.up.contentrefresh:b.className=h+" "+j;break;case this.options.up.contentnomore:b.className=h+" "+k}},_setCaption:function(a,b){if(!this.loading){var c=this.options,d=this.pullPocket,e=this.pullCaption,f=this.pullLoading,g=this.pulldown,h=this;d&&(b?setTimeout(function(){e.innerHTML=h.lastTitle=a,g?f.className=s:(h._setCaptionClass(!1,e,a),f.className=t),f.style.webkitAnimation="",f.style.webkitTransition="",f.style.webkitTransform=""},100):a!==this.lastTitle&&(e.innerHTML=a,g?a===c.down.contentrefresh?(f.className=t,f.style.webkitAnimation="spinner-spin 1s step-end infinite"):a===c.down.contentover?(f.className=r,f.style.webkitTransition="-webkit-transform 0.3s ease-in",f.style.webkitTransform="rotate(180deg)"):a===c.down.contentdown&&(f.className=s,f.style.webkitTransition="-webkit-transform 0.3s ease-in",f.style.webkitTransform="rotate(0deg)"):(a===c.up.contentrefresh?f.className=t+" "+q:f.className=t+" "+p,h._setCaptionClass(!1,e,a)),this.lastTitle=a))}}};a.PullRefresh=v}(mui,document),function(a,b,c,d){var e="mui-scroll",f="mui-scrollbar",g="mui-scrollbar-indicator",h=f+"-vertical",i=f+"-horizontal",j="mui-active",k={quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return Math.sqrt(1- --a*a)}},outCirc:{style:"cubic-bezier(0.075, 0.82, 0.165, 1)"},outCubic:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)"}},l=a.Class.extend({init:function(b,c){this.wrapper=this.element=b,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller&&this.scroller.style,this.stopped=!1,this.options=a.extend(!0,{scrollY:!0,scrollX:!1,startX:0,startY:0,indicators:!0,stopPropagation:!1,hardwareAccelerated:!0,fixedBadAndorid:!1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/},momentum:!0,snapX:.5,snap:!1,bounce:!0,bounceTime:500,bounceEasing:k.outCirc,scrollTime:500,scrollEasing:k.outCubic,directionLockThreshold:5,parallaxElement:!1,parallaxRatio:.5},c),this.x=0,this.y=0,this.translateZ=this.options.hardwareAccelerated?" translateZ(0)":"",this._init(),this.scroller&&(this.refresh(),this.scrollTo(this.options.startX,this.options.startY))},_init:function(){this._initParallax(),this._initIndicators(),this._initEvent()},_initParallax:function(){this.options.parallaxElement&&(this.parallaxElement=c.querySelector(this.options.parallaxElement),this.parallaxStyle=this.parallaxElement.style,this.parallaxHeight=this.parallaxElement.offsetHeight,this.parallaxImgStyle=this.parallaxElement.querySelector("img").style)},_initIndicators:function(){var a=this;if(a.indicators=[],this.options.indicators){var b,c=[];a.options.scrollY&&(b={el:this._createScrollBar(h),listenX:!1},this.wrapper.appendChild(b.el),c.push(b)),this.options.scrollX&&(b={el:this._createScrollBar(i),listenY:!1},this.wrapper.appendChild(b.el),c.push(b));for(var d=c.length;d--;)this.indicators.push(new m(this,c[d]))}},_initSnap:function(){this.currentPage={},this.pages=[];for(var a=this.snaps,b=a.length,c=0,d=-1,e=0,f=0,g=0,h=0,i=0;b>i;i++){var k=a[i],l=k.offsetLeft,m=k.offsetWidth;(0===i||l<=a[i-1].offsetLeft)&&(c=0,d++),this.pages[c]||(this.pages[c]=[]),e=this._getSnapX(l),h=Math.round(m*this.options.snapX),f=e-h,g=e-m+h,this.pages[c][d]={x:e,leftX:f,rightX:g,pageX:c,element:k},k.classList.contains(j)&&(this.currentPage=this.pages[c][0]),e>=this.maxScrollX&&c++}this.options.startX=this.currentPage.x||0},_getSnapX:function(a){return Math.max(Math.min(0,-a+this.wrapperWidth/2),this.maxScrollX)},_gotoPage:function(a){this.currentPage=this.pages[Math.min(a,this.pages.length-1)][0];for(var b=0,c=this.snaps.length;c>b;b++)b===a?this.snaps[b].classList.add(j):this.snaps[b].classList.remove(j);this.scrollTo(this.currentPage.x,0,this.options.scrollTime)},_nearestSnap:function(a){if(!this.pages.length)return{x:0,pageX:0};var b=0,c=this.pages.length;for(a>0?a=0:a<this.maxScrollX&&(a=this.maxScrollX);c>b;b++){var d="left"===this.direction?this.pages[b][0].leftX:this.pages[b][0].rightX;if(a>=d)return this.pages[b][0]}return{x:0,pageX:0}},_initEvent:function(c){var d=c?"removeEventListener":"addEventListener";b[d]("orientationchange",this),b[d]("resize",this),this.scroller[d]("webkitTransitionEnd",this),this.wrapper[d](a.EVENT_START,this),this.wrapper[d](a.EVENT_CANCEL,this),this.wrapper[d](a.EVENT_END,this),this.wrapper[d]("drag",this),this.wrapper[d]("dragend",this),this.wrapper[d]("flick",this),this.wrapper[d]("scrollend",this),this.options.scrollX&&this.wrapper[d]("swiperight",this);var e=this.wrapper.querySelector(".mui-segmented-control");e&&mui(e)[c?"off":"on"]("click","a",a.preventDefault),this.wrapper[d]("scrollstart",this),this.wrapper[d]("refresh",this)},_handleIndicatorScrollend:function(){this.indicators.map(function(a){a.fade()})},_handleIndicatorScrollstart:function(){this.indicators.map(function(a){a.fade(1)})},_handleIndicatorRefresh:function(){this.indicators.map(function(a){a.refresh()})},handleEvent:function(b){if(this.stopped)return void this.resetPosition();switch(b.type){case a.EVENT_START:this._start(b);break;case"drag":this.options.stopPropagation&&b.stopPropagation(),this._drag(b);break;case"dragend":case"flick":this.options.stopPropagation&&b.stopPropagation(),this._flick(b);break;case a.EVENT_CANCEL:case a.EVENT_END:this._end(b);break;case"webkitTransitionEnd":this.transitionTimer&&this.transitionTimer.cancel(),this._transitionEnd(b);break;case"scrollstart":this._handleIndicatorScrollstart(b);break;case"scrollend":this._handleIndicatorScrollend(b),this._scrollend(b),b.stopPropagation();break;case"orientationchange":case"resize":this._resize();break;case"swiperight":b.stopPropagation();break;case"refresh":this._handleIndicatorRefresh(b)}},_start:function(b){if(this.moved=this.needReset=!1,this._transitionTime(),this.isInTransition){this.needReset=!0,this.isInTransition=!1;var c=a.parseTranslateMatrix(a.getStyles(this.scroller,"webkitTransform"));this.setTranslate(Math.round(c.x),Math.round(c.y)),a.trigger(this.scroller,"scrollend",this),b.preventDefault()}this.reLayout(),a.trigger(this.scroller,"beforescrollstart",this)},_getDirectionByAngle:function(a){return-80>a&&a>-100?"up":a>=80&&100>a?"down":a>=170||-170>=a?"left":a>=-35&&10>=a?"right":null},_drag:function(c){var d=c.detail;if((this.options.scrollY||"up"===d.direction||"down"===d.direction)&&a.os.ios&&parseFloat(a.os.version)>=8){var e=d.gesture.touches[0].clientY;if(e+10>b.innerHeight||10>e)return void this.resetPosition(this.options.bounceTime)}var f=isReturn=!1;this._getDirectionByAngle(d.angle);if("left"===d.direction||"right"===d.direction?this.options.scrollX?(f=!0,this.moved||(a.gestures.session.lockDirection=!0,a.gestures.session.startDirection=d.direction)):this.options.scrollY&&!this.moved&&(isReturn=!0):"up"===d.direction||"down"===d.direction?this.options.scrollY?(f=!0,this.moved||(a.gestures.session.lockDirection=!0,a.gestures.session.startDirection=d.direction)):this.options.scrollX&&!this.moved&&(isReturn=!0):isReturn=!0,(this.moved||f)&&(c.stopPropagation(),d.gesture&&d.gesture.preventDefault()),!isReturn){this.moved?c.stopPropagation():a.trigger(this.scroller,"scrollstart",this);var g=0,h=0;this.moved?(g=d.deltaX-a.gestures.session.prevTouch.deltaX,h=d.deltaY-a.gestures.session.prevTouch.deltaY):(g=d.deltaX,h=d.deltaY);var i=Math.abs(d.deltaX),j=Math.abs(d.deltaY);i>j+this.options.directionLockThreshold?h=0:j>=i+this.options.directionLockThreshold&&(g=0),g=this.hasHorizontalScroll?g:0,h=this.hasVerticalScroll?h:0;var k=this.x+g,l=this.y+h;(k>0||k<this.maxScrollX)&&(k=this.options.bounce?this.x+g/3:k>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+h/3:l>0?0:this.maxScrollY),this.requestAnimationFrame||this._updateTranslate(),this.direction=d.deltaX>0?"right":"left",this.moved=!0,this.x=k,this.y=l,a.trigger(this.scroller,"scroll",this)}},_flick:function(b){if(this.moved){b.stopPropagation();var c=b.detail;if(this._clearRequestAnimationFrame(),"dragend"!==b.type||!c.flick){var d=Math.round(this.x),e=Math.round(this.y);if(this.isInTransition=!1,!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(d,e),"dragend"===b.type)return void a.trigger(this.scroller,"scrollend",this);var f=0,g="";return this.options.momentum&&c.flickTime<300&&(momentumX=this.hasHorizontalScroll?this._momentum(this.x,c.flickDistanceX,c.flickTime,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:d,duration:0},momentumY=this.hasVerticalScroll?this._momentum(this.y,c.flickDistanceY,c.flickTime,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:e,duration:0},d=momentumX.destination,e=momentumY.destination,f=Math.max(momentumX.duration,momentumY.duration),this.isInTransition=!0),d!=this.x||e!=this.y?((d>0||d<this.maxScrollX||e>0||e<this.maxScrollY)&&(g=k.quadratic),void this.scrollTo(d,e,f,g)):void a.trigger(this.scroller,"scrollend",this)}}}},_end:function(b){this.needReset=!1,(!this.moved&&this.needReset||b.type===a.EVENT_CANCEL)&&this.resetPosition()},_transitionEnd:function(b){b.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,a.trigger(this.scroller,"scrollend",this)))},_scrollend:function(b){(0===this.y&&0===this.maxScrollY||Math.abs(this.y)>0&&this.y<=this.maxScrollY)&&a.trigger(this.scroller,"scrollbottom",this)},_resize:function(){var a=this;clearTimeout(a.resizeTimeout),a.resizeTimeout=setTimeout(function(){a.refresh()},a.options.resizePolling)},_transitionTime:function(b){if(b=b||0,this.scrollerStyle.webkitTransitionDuration=b+"ms",this.parallaxElement&&this.options.scrollY&&(this.parallaxStyle.webkitTransitionDuration=b+"ms"),this.options.fixedBadAndorid&&!b&&a.os.isBadAndroid&&(this.scrollerStyle.webkitTransitionDuration="0.001s",this.parallaxElement&&this.options.scrollY&&(this.parallaxStyle.webkitTransitionDuration="0.001s")),this.indicators)for(var c=this.indicators.length;c--;)this.indicators[c].transitionTime(b);b&&(this.transitionTimer&&this.transitionTimer.cancel(),this.transitionTimer=a.later(function(){a.trigger(this.scroller,"webkitTransitionEnd")},b+100,this))},_transitionTimingFunction:function(a){if(this.scrollerStyle.webkitTransitionTimingFunction=a,this.parallaxElement&&this.options.scrollY&&(this.parallaxStyle.webkitTransitionDuration=a),this.indicators)for(var b=this.indicators.length;b--;)this.indicators[b].transitionTimingFunction(a)},_translate:function(a,b){this.x=a,this.y=b},_clearRequestAnimationFrame:function(){this.requestAnimationFrame&&(cancelAnimationFrame(this.requestAnimationFrame),this.requestAnimationFrame=null)},_updateTranslate:function(){var a=this;(a.x!==a.lastX||a.y!==a.lastY)&&a.setTranslate(a.x,a.y),a.requestAnimationFrame=requestAnimationFrame(function(){a._updateTranslate()})},_createScrollBar:function(a){var b=c.createElement("div"),d=c.createElement("div");return b.className=f+" "+a,d.className=g,b.appendChild(d),a===h?(this.scrollbarY=b,this.scrollbarIndicatorY=d):a===i&&(this.scrollbarX=b,this.scrollbarIndicatorX=d),this.wrapper.appendChild(b),b},_preventDefaultException:function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1},_reLayout:function(){if(this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.indicators.map(function(a){a.refresh()}),this.options.snap&&"string"==typeof this.options.snap){var a=this.scroller.querySelectorAll(this.options.snap);this.itemLength=0,this.snaps=[];for(var b=0,c=a.length;c>b;b++){var d=a[b];d.parentNode===this.scroller&&(this.itemLength++,this.snaps.push(d))}this._initSnap()}},_momentum:function(a,b,c,e,f,g){var h,i,j=parseFloat(Math.abs(b)/c);return g=g===d?6e-4:g,h=a+j*j/(2*g)*(0>b?-1:1),i=j/g,e>h?(h=f?e-f/2.5*(j/8):e,b=Math.abs(h-a),i=b/j):h>0&&(h=f?f/2.5*(j/8):0,b=Math.abs(a)+h,i=b/j),{destination:Math.round(h),duration:i}},_getTranslateStr:function(a,b){return this.options.hardwareAccelerated?"translate3d("+a+"px,"+b+"px,0px) "+this.translateZ:"translate("+a+"px,"+b+"px) "},setStopped:function(a){this.stopped=!!a},setTranslate:function(b,c){if(this.x=b,this.y=c,this.scrollerStyle.webkitTransform=this._getTranslateStr(b,c),this.parallaxElement&&this.options.scrollY){var d=c*this.options.parallaxRatio,e=1+d/((this.parallaxHeight-d)/2);e>1?(this.parallaxImgStyle.opacity=1-d/100*this.options.parallaxRatio,this.parallaxStyle.webkitTransform=this._getTranslateStr(0,-d)+" scale("+e+","+e+")"):(this.parallaxImgStyle.opacity=1,this.parallaxStyle.webkitTransform=this._getTranslateStr(0,-1)+" scale(1,1)")}if(this.indicators)for(var f=this.indicators.length;f--;)this.indicators[f].updatePosition();this.lastX=this.x,this.lastY=this.y,a.trigger(this.scroller,"scroll",this)},reLayout:function(){this.wrapper.offsetHeight;var b=parseFloat(a.getStyles(this.wrapper,"padding-left"))||0,c=parseFloat(a.getStyles(this.wrapper,"padding-right"))||0,d=parseFloat(a.getStyles(this.wrapper,"padding-top"))||0,e=parseFloat(a.getStyles(this.wrapper,"padding-bottom"))||0,f=this.wrapper.clientWidth,g=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.wrapperWidth=f-b-c,this.wrapperHeight=g-d-e,this.maxScrollX=Math.min(this.wrapperWidth-this.scrollerWidth,0),this.maxScrollY=Math.min(this.wrapperHeight-this.scrollerHeight,0),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this._reLayout()},resetPosition:function(a){var b=this.x,c=this.y;return a=a||0,!this.hasHorizontalScroll||this.x>0?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX),!this.hasVerticalScroll||this.y>0?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY),b==this.x&&c==this.y?!1:(this.scrollTo(b,c,a,this.options.scrollEasing),!0)},_reInit:function(){for(var a=this.wrapper.querySelectorAll("."+e),b=0,c=a.length;c>b;b++)if(a[b].parentNode===this.wrapper){this.scroller=a[b];break}this.scrollerStyle=this.scroller&&this.scroller.style},refresh:function(){this._reInit(),this.reLayout(),a.trigger(this.scroller,"refresh",this),this.resetPosition()},scrollTo:function(a,b,c,d){var d=d||k.circular;this.isInTransition=c>0,this.isInTransition?(this._clearRequestAnimationFrame(),this._transitionTimingFunction(d.style),this._transitionTime(c),this.setTranslate(a,b)):this.setTranslate(a,b)},scrollToBottom:function(a,b){a=a||this.options.scrollTime,this.scrollTo(0,this.maxScrollY,a,b)},gotoPage:function(a){this._gotoPage(a)},destroy:function(){this._initEvent(!0),delete a.data[this.wrapper.getAttribute("data-scroll")],this.wrapper.setAttribute("data-scroll","")}}),m=function(b,d){this.wrapper="string"==typeof d.el?c.querySelector(d.el):d.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=b,this.options=a.extend({listenX:!0,listenY:!0,fade:!1,speedRatioX:0,speedRatioY:0},d),this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.fade&&(this.wrapperStyle.webkitTransform=this.scroller.translateZ,this.wrapperStyle.webkitTransitionDuration=this.options.fixedBadAndorid&&a.os.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")};m.prototype={handleEvent:function(a){},transitionTime:function(b){b=b||0,this.indicatorStyle.webkitTransitionDuration=b+"ms",this.scroller.options.fixedBadAndorid&&!b&&a.os.isBadAndroid&&(this.indicatorStyle.webkitTransitionDuration="0.001s")},transitionTimingFunction:function(a){this.indicatorStyle.webkitTransitionTimingFunction=a},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.wrapper.offsetHeight,this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.indicatorWidth=Math.max(Math.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=this.wrapperWidth-this.indicatorWidth,this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX,this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.indicatorHeight=Math.max(Math.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var a=this.options.listenX&&Math.round(this.sizeRatioX*this.scroller.x)||0,b=this.options.listenY&&Math.round(this.sizeRatioY*this.scroller.y)||0;a<this.minBoundaryX?(this.width=Math.max(this.indicatorWidth+a,8),this.indicatorStyle.width=this.width+"px",a=this.minBoundaryX):a>this.maxBoundaryX?(this.width=Math.max(this.indicatorWidth-(a-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",a=this.maxPosX+this.indicatorWidth-this.width):this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),b<this.minBoundaryY?(this.height=Math.max(this.indicatorHeight+3*b,8),this.indicatorStyle.height=this.height+"px",b=this.minBoundaryY):b>this.maxBoundaryY?(this.height=Math.max(this.indicatorHeight-3*(b-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",b=this.maxPosY+this.indicatorHeight-this.height):this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px"),this.x=a,this.y=b,this.indicatorStyle.webkitTransform=this.scroller._getTranslateStr(a,b)},fade:function(a,b){if(!b||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var c=a?250:500,d=a?0:300;a=a?"1":"0",this.wrapperStyle.webkitTransitionDuration=c+"ms",this.fadeTimeout=setTimeout(function(a){this.wrapperStyle.opacity=a,this.visible=+a}.bind(this,a),d)}}},a.Scroll=l,a.fn.scroll=function(b){var c=[];return this.each(function(){var d=null,e=this,f=e.getAttribute("data-scroll");if(f)d=a.data[f];else{f=++a.uuid;var g=a.extend({},b);e.classList.contains("mui-segmented-control")&&(g=a.extend(g,{scrollY:!1,scrollX:!0,indicators:!1,snap:".mui-control-item"})),a.data[f]=d=new l(e,g),e.setAttribute("data-scroll",f)}c.push(d)}),1===c.length?c[0]:c}}(mui,window,document),function(a,b,c,d){var e="mui-visibility",f="mui-hidden",g=a.Scroll.extend(a.extend({handleEvent:function(a){this._super(a),"scrollbottom"===a.type&&a.target===this.scroller&&this._scrollbottom()},_scrollbottom:function(){this.pulldown||this.loading||(this.pulldown=!1,this._initPullupRefresh(),this.pullupLoading())},_start:function(a){a.touches&&a.touches.length&&a.touches[0].clientX>30&&a.target&&!this._preventDefaultException(a.target,this.options.preventDefaultException)&&a.preventDefault(),this.loading||(this.pulldown=this.pullPocket=this.pullCaption=this.pullLoading=!1),this._super(a)},_drag:function(a){this._super(a),!this.pulldown&&!this.loading&&this.topPocket&&"down"===a.detail.direction&&this.y>=0&&this._initPulldownRefresh(),this.pulldown&&this._setCaption(this.y>this.options.down.height?this.options.down.contentover:this.options.down.contentdown)},_reLayout:function(){this.hasVerticalScroll=!0,this._super()},resetPosition:function(a){if(this.pulldown){if(this.y>=this.options.down.height)return this.pulldownLoading(d,a||0),!0;!this.loading&&this.topPocket.classList.remove(e)}return this._super(a)},pulldownLoading:function(a,b){if("undefined"==typeof a&&(a=this.options.down.height),this.scrollTo(0,a,b,this.options.bounceEasing),!this.loading){this._initPulldownRefresh(),this._setCaption(this.options.down.contentrefresh),this.loading=!0,this.indicators.map(function(a){a.fade(0)});var c=this.options.down.callback;c&&c.call(this)}},endPulldownToRefresh:function(){var a=this;a.topPocket&&a.loading&&this.pulldown&&(a.scrollTo(0,0,a.options.bounceTime,a.options.bounceEasing),a.loading=!1,a._setCaption(a.options.down.contentdown,!0),setTimeout(function(){a.loading||a.topPocket.classList.remove(e)},350))},pullupLoading:function(a,b,c){b=b||0,this.scrollTo(b,this.maxScrollY,c,this.options.bounceEasing),this.loading||(this._initPullupRefresh(),this._setCaption(this.options.up.contentrefresh),this.indicators.map(function(a){a.fade(0)}),this.loading=!0,a=a||this.options.up.callback,a&&a.call(this))},endPullupToRefresh:function(a){var b=this;b.bottomPocket&&(b.loading=!1,a?(this.finished=!0,b._setCaption(b.options.up.contentnomore),b.wrapper.removeEventListener("scrollbottom",b)):(b._setCaption(b.options.up.contentdown),b.loading||b.bottomPocket.classList.remove(e)))},disablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.className="mui-pull-bottom-pocket "+f,this.wrapper.removeEventListener("scrollbottom",this)},enablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.classList.remove(f),this._setCaption(this.options.up.contentdown),this.wrapper.addEventListener("scrollbottom",this)},refresh:function(a){a&&this.finished&&(this.enablePullupToRefresh(),this.finished=!1),this._super()}},a.PullRefresh));a.fn.pullRefresh=function(b){if(1===this.length){var c=this[0],d=null;b=b||{};var e=c.getAttribute("data-pullrefresh");return e?d=a.data[e]:(e=++a.uuid,a.data[e]=d=new g(c,b),c.setAttribute("data-pullrefresh",e)),b.down&&b.down.auto?d.pulldownLoading(b.down.autoY):b.up&&b.up.auto&&d.pullupLoading(),d}}}(mui,window,document),function(a,b){var c="mui-slider",d="mui-slider-group",e="mui-slider-loop",f="mui-action-previous",g="mui-action-next",h="mui-slider-item",i="mui-active",j="."+h,k=".mui-slider-progress-bar",l=a.Slider=a.Scroll.extend({init:function(b,c){this._super(b,a.extend(!0,{fingers:1,interval:0,scrollY:!1,scrollX:!0,indicators:!1,scrollTime:1e3,startX:!1,slideTime:0,snap:j},c)),this.options.startX},_init:function(){this._reInit(),this.scroller&&(this.scrollerStyle=this.scroller.style,this.progressBar=this.wrapper.querySelector(k),this.progressBar&&(this.progressBarWidth=this.progressBar.offsetWidth,this.progressBarStyle=this.progressBar.style),this._super(),this._initTimer())},_triggerSlide:function(){var b=this;b.isInTransition=!1;b.currentPage;b.slideNumber=b._fixedSlideNumber(),b.loop&&(0===b.slideNumber?b.setTranslate(b.pages[1][0].x,0):b.slideNumber===b.itemLength-3&&b.setTranslate(b.pages[b.itemLength-2][0].x,0)),b.lastSlideNumber!=b.slideNumber&&(b.lastSlideNumber=b.slideNumber,b.lastPage=b.currentPage,a.trigger(b.wrapper,"slide",{slideNumber:b.slideNumber})),b._initTimer()},_handleSlide:function(b){var c=this;if(b.target===c.wrapper){var d=b.detail;d.slideNumber=d.slideNumber||0;for(var e=c.scroller.querySelectorAll(j),f=[],g=0,h=e.length;h>g;g++){var k=e[g];k.parentNode===c.scroller&&f.push(k)}var l=d.slideNumber;if(c.loop&&(l+=1),!c.wrapper.classList.contains("mui-segmented-control"))for(var g=0,h=f.length;h>g;g++){var k=f[g];k.parentNode===c.scroller&&(g===l?k.classList.add(i):k.classList.remove(i))}var m=c.wrapper.querySelector(".mui-slider-indicator");if(m){m.getAttribute("data-scroll")&&a(m).scroll().gotoPage(d.slideNumber);var n=m.querySelectorAll(".mui-indicator");if(n.length>0)for(var g=0,h=n.length;h>g;g++)n[g].classList[g===d.slideNumber?"add":"remove"](i);else{var o=m.querySelector(".mui-number span");if(o)o.innerText=d.slideNumber+1;else for(var p=m.querySelectorAll(".mui-control-item"),g=0,h=p.length;h>g;g++)p[g].classList[g===d.slideNumber?"add":"remove"](i)}}b.stopPropagation()}},_handleTabShow:function(a){var b=this;b.gotoItem(a.detail.tabNumber||0,b.options.slideTime)},_handleIndicatorTap:function(a){var b=this,c=a.target;(c.classList.contains(f)||c.classList.contains(g))&&(b[c.classList.contains(f)?"prevItem":"nextItem"](),a.stopPropagation())},_initEvent:function(b){var c=this;c._super(b);var d=b?"removeEventListener":"addEventListener";c.wrapper[d]("slide",this),c.wrapper[d](a.eventName("shown","tab"),this)},handleEvent:function(b){switch(this._super(b),b.type){case"slide":this._handleSlide(b);break;case a.eventName("shown","tab"):~this.snaps.indexOf(b.target)&&this._handleTabShow(b)}},_scrollend:function(a){this._super(a),this._triggerSlide(a)},_drag:function(a){this._super(a);var c=a.detail.direction;if("left"===c||"right"===c){var d=this.wrapper.getAttribute("data-slidershowTimer");d&&b.clearTimeout(d),a.stopPropagation()}},_initTimer:function(){var a=this,c=a.wrapper,d=a.options.interval,e=c.getAttribute("data-slidershowTimer");e&&b.clearTimeout(e),d&&(e=b.setTimeout(function(){c&&((c.offsetWidth||c.offsetHeight)&&a.nextItem(!0),
a._initTimer())},d),c.setAttribute("data-slidershowTimer",e))},_fixedSlideNumber:function(a){a=a||this.currentPage;var b=a.pageX;return this.loop&&(b=0===a.pageX?this.itemLength-3:a.pageX===this.itemLength-1?0:a.pageX-1),b},_reLayout:function(){this.hasHorizontalScroll=!0,this.loop=this.scroller.classList.contains(e),this._super()},_getScroll:function(){var b=a.parseTranslateMatrix(a.getStyles(this.scroller,"webkitTransform"));return b?b.x:0},_transitionEnd:function(b){b.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.isInTransition=!1,a.trigger(this.wrapper,"scrollend",this))},_flick:function(a){if(this.moved){var b=a.detail,c=b.direction;this._clearRequestAnimationFrame(),this.isInTransition=!0,"flick"===a.type?(b.deltaTime<200&&(this.x=this._getPage(this.slideNumber+("right"===c?-1:1),!0).x),this.resetPosition(this.options.bounceTime)):"dragend"!==a.type||b.flick||this.resetPosition(this.options.bounceTime),a.stopPropagation()}},_initSnap:function(){if(this.scrollerWidth=this.itemLength*this.scrollerWidth,this.maxScrollX=Math.min(this.wrapperWidth-this.scrollerWidth,0),this._super(),this.currentPage.x)this.slideNumber=this._fixedSlideNumber(),this.lastSlideNumber="undefined"==typeof this.lastSlideNumber?this.slideNumber:this.lastSlideNumber;else{var a=this.pages[this.loop?1:0];if(a=a||this.pages[0],!a)return;this.currentPage=a[0],this.slideNumber=0,this.lastSlideNumber="undefined"==typeof this.lastSlideNumber?0:this.lastSlideNumber}this.options.startX=this.currentPage.x||0},_getSnapX:function(a){return Math.max(-a,this.maxScrollX)},_getPage:function(a,b){return this.loop?a>this.itemLength-(b?2:3)?(a=1,time=0):(b?-1:0)>a?(a=this.itemLength-2,time=0):a+=1:(b||(a>this.itemLength-1?(a=0,time=0):0>a&&(a=this.itemLength-1,time=0)),a=Math.min(Math.max(0,a),this.itemLength-1)),this.pages[a][0]},_gotoItem:function(b,c){this.currentPage=this._getPage(b,!0),this.scrollTo(this.currentPage.x,0,c,this.options.scrollEasing),0===c&&a.trigger(this.wrapper,"scrollend",this)},setTranslate:function(a,b){this._super(a,b);var c=this.progressBar;c&&(this.progressBarStyle.webkitTransform=this._getTranslateStr(-a*(this.progressBarWidth/this.wrapperWidth),0))},resetPosition:function(a){return a=a||0,this.x>0?this.x=0:this.x<this.maxScrollX&&(this.x=this.maxScrollX),this.currentPage=this._nearestSnap(this.x),this.scrollTo(this.currentPage.x,0,a,this.options.scrollEasing),!0},gotoItem:function(a,b){this._gotoItem(a,"undefined"==typeof b?this.options.scrollTime:b)},nextItem:function(){this._gotoItem(this.slideNumber+1,this.options.scrollTime)},prevItem:function(){this._gotoItem(this.slideNumber-1,this.options.scrollTime)},getSlideNumber:function(){return this.slideNumber||0},_reInit:function(){for(var a=this.wrapper.querySelectorAll("."+d),b=0,c=a.length;c>b;b++)if(a[b].parentNode===this.wrapper){this.scroller=a[b];break}this.scrollerStyle=this.scroller&&this.scroller.style,this.progressBar&&(this.progressBarWidth=this.progressBar.offsetWidth,this.progressBarStyle=this.progressBar.style)},refresh:function(b){b?(a.extend(this.options,b),this._super(),this._initTimer()):this._super()},destroy:function(){this._initEvent(!0),delete a.data[this.wrapper.getAttribute("data-slider")],this.wrapper.setAttribute("data-slider","")}});a.fn.slider=function(b){var d=null;return this.each(function(){var e=this;if(this.classList.contains(c)||(e=this.querySelector("."+c)),e&&e.querySelector(j)){var f=e.getAttribute("data-slider");f?(d=a.data[f],d&&b&&d.refresh(b)):(f=++a.uuid,a.data[f]=d=new l(e,b),e.setAttribute("data-slider",f))}}),d},a.ready(function(){a(".mui-slider").slider(),a(".mui-scroll-wrapper.mui-slider-indicator.mui-segmented-control").scroll({scrollY:!1,scrollX:!0,indicators:!1,snap:".mui-control-item"})})}(mui,window),function(a,b){if(a.os.plus&&a.os.android){var c="mui-plus-pullrefresh",d="mui-visibility",e="mui-hidden",f="mui-block",g="mui-pull-caption",h="mui-pull-caption-down",i="mui-pull-caption-refresh",j="mui-pull-caption-nomore",k=a.Class.extend({init:function(a,b){this.element=a,this.options=b,this.wrapper=this.scroller=a,this._init(),this._initPulldownRefreshEvent()},_init:function(){var a=this;window.addEventListener("dragup",a),b.addEventListener("plusscrollbottom",a),a.scrollInterval=window.setInterval(function(){a.isScroll&&!a.loading&&window.pageYOffset+window.innerHeight+10>=b.documentElement.scrollHeight&&(a.isScroll=!1,a.bottomPocket&&a.pullupLoading())},100)},_initPulldownRefreshEvent:function(){var b=this;b.topPocket&&b.options.webviewId&&a.plusReady(function(){var a=plus.webview.getWebviewById(b.options.webviewId);if(a){b.options.webview=a;var c=b.options.down,d=c.height;a.addEventListener("dragBounce",function(d){switch(b.pulldown?b.pullPocket.classList.add(f):b._initPulldownRefresh(),d.status){case"beforeChangeOffset":b._setCaption(c.contentdown);break;case"afterChangeOffset":b._setCaption(c.contentover);break;case"dragEndAfterChangeOffset":a.evalJS("mui&&mui.options.pullRefresh.down.callback()"),b._setCaption(c.contentrefresh)}},!1),a.setBounce({position:{top:2*d+"px"},changeoffset:{top:d+"px"}})}})},handleEvent:function(a){var b=this;b.stopped||(b.isScroll=!1,("dragup"===a.type||"plusscrollbottom"===a.type)&&(b.isScroll=!0,setTimeout(function(){b.isScroll=!1},1e3)))}}).extend(a.extend({setStopped:function(a){this.stopped=!!a;var b=plus.webview.currentWebview();if(this.stopped)b.setStyle({bounce:"none"}),b.setBounce({position:{top:"none"}});else{var c=this.options.down.height;b.setStyle({bounce:"vertical"}),b.setBounce({position:{top:2*c+"px"},changeoffset:{top:c+"px"}})}},pulldownLoading:function(){a.plusReady(function(){plus.webview.currentWebview().setBounce({offset:{top:this.options.down.height+"px"}})}.bind(this))},_pulldownLoading:function(){var b=this;a.plusReady(function(){var a=plus.webview.getWebviewById(b.options.webviewId);a.setBounce({offset:{top:b.options.down.height+"px"}})})},endPulldownToRefresh:function(){var a=plus.webview.currentWebview();a.parent().evalJS("mui&&mui(document.querySelector('.mui-content')).pullRefresh('"+JSON.stringify({webviewId:a.id})+"')._endPulldownToRefresh()")},_endPulldownToRefresh:function(){var a=this;a.topPocket&&a.options.webview&&(a.options.webview.endPullToRefresh(),a.loading=!1,a._setCaption(a.options.down.contentdown,!0),setTimeout(function(){a.loading||a.topPocket.classList.remove(f)},350))},pullupLoading:function(a){var b=this;b.isLoading||(b.isLoading=!0,b.pulldown!==!1?b._initPullupRefresh():this.pullPocket.classList.add(f),setTimeout(function(){b.pullLoading.classList.add(d),b.pullLoading.classList.remove(e),b.pullCaption.innerHTML="",b.pullCaption.className=g+" "+i,b.pullCaption.innerHTML=b.options.up.contentrefresh,a=a||b.options.up.callback,a&&a.call(b)},300))},endPullupToRefresh:function(a){var c=this;c.pullLoading&&(c.pullLoading.classList.remove(d),c.pullLoading.classList.add(e),c.isLoading=!1,a?(c.finished=!0,c.pullCaption.className=g+" "+j,c.pullCaption.innerHTML=c.options.up.contentnomore,b.removeEventListener("plusscrollbottom",c),window.removeEventListener("dragup",c)):(c.pullCaption.className=g+" "+h,c.pullCaption.innerHTML=c.options.up.contentdown))},disablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.className="mui-pull-bottom-pocket "+e,window.removeEventListener("dragup",this)},enablePullupToRefresh:function(){this._initPullupRefresh(),this.bottomPocket.classList.remove(e),this.pullCaption.className=g+" "+h,this.pullCaption.innerHTML=this.options.up.contentdown,b.addEventListener("plusscrollbottom",this),window.addEventListener("dragup",this)},scrollTo:function(b,c,d){a.scrollTo(c,d)},scrollToBottom:function(c){a.scrollTo(b.documentElement.scrollHeight,c)},refresh:function(a){a&&this.finished&&(this.enablePullupToRefresh(),this.finished=!1)}},a.PullRefresh));a.fn.pullRefresh=function(d){var e;0===this.length?(e=b.createElement("div"),e.className="mui-content",b.body.appendChild(e)):e=this[0];var f=d;d=d||{},"string"==typeof d&&(d=a.parseJSON(d)),!d.webviewId&&(d.webviewId=plus.webview.currentWebview().id||plus.webview.currentWebview().getURL());var g=null,h=d.webviewId&&d.webviewId.replace(/\//g,"_"),i=e.getAttribute("data-pullrefresh-plus-"+h);return i||"undefined"!=typeof f?(i?g=a.data[i]:(i=++a.uuid,e.setAttribute("data-pullrefresh-plus-"+h,i),b.body.classList.add(c),a.data[i]=g=new k(e,d)),d.down&&d.down.auto?g._pulldownLoading():d.up&&d.up.auto&&g.pullupLoading(),g):!1}}}(mui,document),function(a,b,c,d){var e="mui-off-canvas-left",f="mui-off-canvas-right",g="mui-off-canvas-backdrop",h="mui-off-canvas-wrap",i="mui-slide-in",j="mui-active",k="mui-transitioning",l=".mui-inner-wrap",m=a.Class.extend({init:function(b,d){this.wrapper=this.element=b,this.scroller=this.wrapper.querySelector(l),this.classList=this.wrapper.classList,this.scroller&&(this.options=a.extend(!0,{dragThresholdX:10,scale:.8,opacity:.1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|VIDEO)$/}},d),c.body.classList.add("mui-fullscreen"),this.refresh(),this.initEvent())},_preventDefaultException:function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1},refresh:function(a){this.slideIn=this.classList.contains(i),this.scalable=this.classList.contains("mui-scalable")&&!this.slideIn,this.scroller=this.wrapper.querySelector(l),this.offCanvasLefts=this.wrapper.querySelectorAll("."+e),this.offCanvasRights=this.wrapper.querySelectorAll("."+f),a?a.classList.contains(e)?this.offCanvasLeft=a:a.classList.contains(f)&&(this.offCanvasRight=a):(this.offCanvasRight=this.wrapper.querySelector("."+f),this.offCanvasLeft=this.wrapper.querySelector("."+e)),this.offCanvasRightWidth=this.offCanvasLeftWidth=0,this.offCanvasLeftSlideIn=this.offCanvasRightSlideIn=!1,this.offCanvasRight&&(this.offCanvasRightWidth=this.offCanvasRight.offsetWidth,this.offCanvasRightSlideIn=this.slideIn&&this.offCanvasRight.parentNode===this.wrapper),this.offCanvasLeft&&(this.offCanvasLeftWidth=this.offCanvasLeft.offsetWidth,this.offCanvasLeftSlideIn=this.slideIn&&this.offCanvasLeft.parentNode===this.wrapper),this.backdrop=this.scroller.querySelector("."+g),this.options.dragThresholdX=this.options.dragThresholdX||10,this.visible=!1,this.startX=null,this.lastX=null,this.offsetX=null,this.lastTranslateX=null},handleEvent:function(b){switch(b.type){case a.EVENT_START:b.target&&!this._preventDefaultException(b.target,this.options.preventDefaultException)&&b.preventDefault();break;case"webkitTransitionEnd":b.target===this.scroller&&this._dispatchEvent();break;case"drag":var c=b.detail;this.startX?this.lastX=c.center.x:(this.startX=c.center.x,this.lastX=this.startX),!this.isDragging&&Math.abs(this.lastX-this.startX)>this.options.dragThresholdX&&("left"===c.direction||"right"===c.direction)&&(this.slideIn?(this.scroller=this.wrapper.querySelector(l),this.classList.contains(j)?this.offCanvasRight&&this.offCanvasRight.classList.contains(j)?(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):"left"===c.direction&&this.offCanvasRight?(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):"right"===c.direction&&this.offCanvasLeft?(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):this.scroller=null):this.classList.contains(j)?"left"===c.direction?(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):"right"===c.direction?(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth):(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth),this.offCanvas&&this.scroller&&(this.startX=this.lastX,this.isDragging=!0,a.gestures.session.lockDirection=!0,a.gestures.session.startDirection=c.direction,this.offCanvas.classList.remove(k),this.scroller.classList.remove(k),this.offsetX=this.getTranslateX(),this._initOffCanvasVisible())),this.isDragging&&(this.updateTranslate(this.offsetX+(this.lastX-this.startX)),c.gesture.preventDefault(),b.stopPropagation());break;case"dragend":if(this.isDragging){var c=b.detail,d=c.direction;this.isDragging=!1,this.offCanvas.classList.add(k),this.scroller.classList.add(k);var e=0,f=this.getTranslateX();if(this.slideIn){if(e=f>=0?this.offCanvasRightWidth&&f/this.offCanvasRightWidth||0:this.offCanvasLeftWidth&&f/this.offCanvasLeftWidth||0,"right"===d&&0>=e&&(e>=-.5||c.swipe)?this.openPercentage(100):"right"===d&&e>0&&(e>=.5||c.swipe)?this.openPercentage(0):"right"===d&&-.5>=e?this.openPercentage(0):"right"===d&&e>0&&.5>=e?this.openPercentage(-100):"left"===d&&e>=0&&(.5>=e||c.swipe)?this.openPercentage(-100):"left"===d&&0>e&&(-.5>=e||c.swipe)?this.openPercentage(0):"left"===d&&e>=.5?this.openPercentage(0):"left"===d&&e>=-.5&&0>e?this.openPercentage(100):this.openPercentage(0),1===e||-1===e||0===e)return void this._dispatchEvent()}else{if(e=f>=0?this.offCanvasLeftWidth&&f/this.offCanvasLeftWidth||0:this.offCanvasRightWidth&&f/this.offCanvasRightWidth||0,0===e)return this.openPercentage(0),void this._dispatchEvent();"right"===d&&e>=0&&(e>=.5||c.swipe)?this.openPercentage(100):"right"===d&&0>e&&(e>-.5||c.swipe)?this.openPercentage(0):"right"===d&&e>0&&.5>e?this.openPercentage(0):"right"===d&&.5>e?this.openPercentage(-100):"left"===d&&0>=e&&(-.5>=e||c.swipe)?this.openPercentage(-100):"left"===d&&e>0&&(.5>=e||c.swipe)?this.openPercentage(0):"left"===d&&0>e&&e>=-.5?this.openPercentage(0):"left"===d&&e>.5?this.openPercentage(100):this.openPercentage(0),(1===e||-1===e)&&this._dispatchEvent()}}}},_dispatchEvent:function(){this.classList.contains(j)?a.trigger(this.wrapper,"shown",this):a.trigger(this.wrapper,"hidden",this)},_initOffCanvasVisible:function(){this.visible||(this.visible=!0,this.offCanvasLeft&&(this.offCanvasLeft.style.visibility="visible"),this.offCanvasRight&&(this.offCanvasRight.style.visibility="visible"))},initEvent:function(){var b=this;b.backdrop&&b.backdrop.addEventListener("tap",function(a){b.close(),a.detail.gesture.preventDefault()}),this.classList.contains("mui-draggable")&&(this.wrapper.addEventListener(a.EVENT_START,this),this.wrapper.addEventListener("drag",this),this.wrapper.addEventListener("dragend",this)),this.wrapper.addEventListener("webkitTransitionEnd",this)},openPercentage:function(a){var b=a/100;this.slideIn?(this.offCanvasLeft&&a>=0?(b=0===b?-1:0,this.updateTranslate(this.offCanvasLeftWidth*b),this.offCanvasLeft.classList[0!==a?"add":"remove"](j)):this.offCanvasRight&&0>=a&&(b=0===b?1:0,this.updateTranslate(this.offCanvasRightWidth*b),this.offCanvasRight.classList[0!==a?"add":"remove"](j)),this.classList[0!==a?"add":"remove"](j)):(this.offCanvasLeft&&a>=0?(this.updateTranslate(this.offCanvasLeftWidth*b),this.offCanvasLeft.classList[0!==b?"add":"remove"](j)):this.offCanvasRight&&0>=a&&(this.updateTranslate(this.offCanvasRightWidth*b),this.offCanvasRight.classList[0!==b?"add":"remove"](j)),this.classList[0!==b?"add":"remove"](j))},updateTranslate:function(b){if(b!==this.lastTranslateX){if(this.slideIn){if(this.offCanvas.classList.contains(f)){if(0>b)return void this.setTranslateX(0);if(b>this.offCanvasRightWidth)return void this.setTranslateX(this.offCanvasRightWidth)}else{if(b>0)return void this.setTranslateX(0);if(b<-this.offCanvasLeftWidth)return void this.setTranslateX(-this.offCanvasLeftWidth)}this.setTranslateX(b)}else{if(!this.offCanvasLeft&&b>0||!this.offCanvasRight&&0>b)return void this.setTranslateX(0);if(this.leftShowing&&b>this.offCanvasLeftWidth)return void this.setTranslateX(this.offCanvasLeftWidth);if(this.rightShowing&&b<-this.offCanvasRightWidth)return void this.setTranslateX(-this.offCanvasRightWidth);this.setTranslateX(b),b>=0?(this.leftShowing=!0,this.rightShowing=!1,b>0&&(this.offCanvasLeft&&a.each(this.offCanvasLefts,function(a,b){b===this.offCanvasLeft?this.offCanvasLeft.style.zIndex=0:b.style.zIndex=-1}.bind(this)),this.offCanvasRight&&(this.offCanvasRight.style.zIndex=-1))):(this.rightShowing=!0,this.leftShowing=!1,this.offCanvasRight&&a.each(this.offCanvasRights,function(a,b){b===this.offCanvasRight?b.style.zIndex=0:b.style.zIndex=-1}.bind(this)),this.offCanvasLeft&&(this.offCanvasLeft.style.zIndex=-1))}this.lastTranslateX=b}},setTranslateX:a.animationFrame(function(a){if(this.scroller)if(this.scalable&&this.offCanvas.parentNode===this.wrapper){var b=Math.abs(a)/this.offCanvasWidth,c=1-(1-this.options.scale)*b,d=this.options.scale+(1-this.options.scale)*b,f=(1-(1-this.options.opacity)*b,this.options.opacity+(1-this.options.opacity)*b);this.offCanvas.classList.contains(e)?(this.offCanvas.style.webkitTransformOrigin="-100%",this.scroller.style.webkitTransformOrigin="left"):(this.offCanvas.style.webkitTransformOrigin="200%",this.scroller.style.webkitTransformOrigin="right"),this.offCanvas.style.opacity=f,this.offCanvas.style.webkitTransform="translate3d(0,0,0) scale("+d+")",this.scroller.style.webkitTransform="translate3d("+a+"px,0,0) scale("+c+")"}else this.slideIn?this.offCanvas.style.webkitTransform="translate3d("+a+"px,0,0)":this.scroller.style.webkitTransform="translate3d("+a+"px,0,0)"}),getTranslateX:function(){if(this.offCanvas){var b=this.slideIn?this.offCanvas:this.scroller,c=a.parseTranslateMatrix(a.getStyles(b,"webkitTransform"));return c&&c.x||0}return 0},isShown:function(a){var b=!1;if(this.slideIn)b="left"===a?this.classList.contains(j)&&this.wrapper.querySelector("."+e+"."+j):"right"===a?this.classList.contains(j)&&this.wrapper.querySelector("."+f+"."+j):this.classList.contains(j)&&(this.wrapper.querySelector("."+e+"."+j)||this.wrapper.querySelector("."+f+"."+j));else{var c=this.getTranslateX();b="right"===a?this.classList.contains(j)&&0>c:"left"===a?this.classList.contains(j)&&c>0:this.classList.contains(j)&&0!==c}return b},close:function(){this._initOffCanvasVisible(),this.offCanvas=this.wrapper.querySelector("."+f+"."+j)||this.wrapper.querySelector("."+e+"."+j),this.offCanvasWidth=this.offCanvas.offsetWidth,this.scroller&&(this.offCanvas.offsetHeight,this.offCanvas.classList.add(k),this.scroller.classList.add(k),this.openPercentage(0))},show:function(a){return this._initOffCanvasVisible(),this.isShown(a)?!1:(a||(a=this.wrapper.querySelector("."+f)?"right":"left"),"right"===a?(this.offCanvas=this.offCanvasRight,this.offCanvasWidth=this.offCanvasRightWidth):(this.offCanvas=this.offCanvasLeft,this.offCanvasWidth=this.offCanvasLeftWidth),this.scroller&&(this.offCanvas.offsetHeight,this.offCanvas.classList.add(k),this.scroller.classList.add(k),this.openPercentage("left"===a?100:-100)),!0)},toggle:function(a){var b=a;a&&a.classList&&(b=a.classList.contains(e)?"left":"right",this.refresh(a)),this.show(b)||this.close()}}),n=function(a){if(parentNode=a.parentNode,parentNode){if(parentNode.classList.contains(h))return parentNode;if(parentNode=parentNode.parentNode,parentNode.classList.contains(h))return parentNode}},o=function(b,d){if("A"===d.tagName&&d.hash){var e=c.getElementById(d.hash.replace("#",""));if(e){var f=n(e);if(f)return a.targets._container=f,e}}return!1};a.registerTarget({name:d,index:60,handle:o,target:!1,isReset:!1,isContinue:!0}),b.addEventListener("tap",function(b){if(a.targets.offcanvas)for(var d=b.target;d&&d!==c;d=d.parentNode)if("A"===d.tagName&&d.hash&&d.hash==="#"+a.targets.offcanvas.id){b.detail&&b.detail.gesture&&b.detail.gesture.preventDefault(),a(a.targets._container).offCanvas().toggle(a.targets.offcanvas),a.targets.offcanvas=a.targets._container=null;break}}),a.fn.offCanvas=function(b){var c=[];return this.each(function(){var d=null,e=this;e.classList.contains(h)||(e=n(e));var f=e.getAttribute("data-offCanvas");f?d=a.data[f]:(f=++a.uuid,a.data[f]=d=new m(e,b),e.setAttribute("data-offCanvas",f)),("show"===b||"close"===b||"toggle"===b)&&d.toggle(),c.push(d)}),1===c.length?c[0]:c},a.ready(function(){a(".mui-off-canvas-wrap").offCanvas()})}(mui,window,document,"offcanvas"),function(a,b){var c="mui-action",d=function(a,b){var d=b.className||"";return"string"!=typeof d&&(d=""),d&&~d.indexOf(c)?(b.classList.contains("mui-action-back")&&a.preventDefault(),b):!1};a.registerTarget({name:b,index:50,handle:d,target:!1,isContinue:!0})}(mui,"action"),function(a,b,c,d){var e="mui-modal",f=function(a,b){if("A"===b.tagName&&b.hash){var d=c.getElementById(b.hash.replace("#",""));if(d&&d.classList.contains(e))return d}return!1};a.registerTarget({name:d,index:50,handle:f,target:!1,isReset:!1,isContinue:!0}),b.addEventListener("tap",function(b){a.targets.modal&&(b.detail.gesture.preventDefault(),a.targets.modal.classList.toggle("mui-active"))})}(mui,window,document,"modal"),function(a,b,c,d){var e="mui-popover",f="mui-popover-arrow",g="mui-popover-action",h="mui-backdrop",i="mui-bar-popover",j="mui-bar-backdrop",k="mui-backdrop-action",l="mui-active",m="mui-bottom",n=function(b,d){if("A"===d.tagName&&d.hash){if(a.targets._popover=c.getElementById(d.hash.replace("#","")),a.targets._popover&&a.targets._popover.classList.contains(e))return d;a.targets._popover=null}return!1};a.registerTarget({name:d,index:60,handle:n,target:!1,isReset:!1,isContinue:!0});var o,p=function(a){},q=function(b){this.removeEventListener("webkitTransitionEnd",q),this.addEventListener(a.EVENT_MOVE,a.preventDefault),a.trigger(this,"shown",this)},r=function(b){v(this,"none"),this.removeEventListener("webkitTransitionEnd",r),this.removeEventListener(a.EVENT_MOVE,a.preventDefault),p(!1),a.trigger(this,"hidden",this)},s=function(){var b=c.createElement("div");return b.classList.add(h),b.addEventListener(a.EVENT_MOVE,a.preventDefault),b.addEventListener("tap",function(b){var d=a.targets._popover;d&&(d.addEventListener("webkitTransitionEnd",r),d.classList.remove(l),t(d),c.body.setAttribute("style",""))}),b}(),t=function(b){s.setAttribute("style","opacity:0"),a.targets.popover=a.targets._popover=null,o=a.later(function(){!b.classList.contains(l)&&s.parentNode&&s.parentNode===c.body&&c.body.removeChild(s)},350)};b.addEventListener("tap",function(b){if(a.targets.popover){for(var d=!1,e=b.target;e&&e!==c;e=e.parentNode)e===a.targets.popover&&(d=!0);d&&(b.detail.gesture.preventDefault(),u(a.targets._popover,a.targets.popover))}});var u=function(a,b,d){if(!("show"===d&&a.classList.contains(l)||"hide"===d&&!a.classList.contains(l))){o&&o.cancel(),a.removeEventListener("webkitTransitionEnd",q),a.removeEventListener("webkitTransitionEnd",r),s.classList.remove(j),s.classList.remove(k);var e=c.querySelector(".mui-popover.mui-active");if(e&&(e.addEventListener("webkitTransitionEnd",r),e.classList.remove(l),a===e))return void t(e);var f=!1;(a.classList.contains(i)||a.classList.contains(g))&&(a.classList.contains(g)?(f=!0,s.classList.add(k)):s.classList.add(j)),v(a,"block"),a.offsetHeight,a.classList.add(l),s.setAttribute("style",""),c.body.appendChild(s),p(!0),w(a,b,f),s.classList.add(l),a.addEventListener("webkitTransitionEnd",q)}},v=function(a,b,c,d){var e=a.style;"undefined"!=typeof b&&(e.display=b),"undefined"!=typeof c&&(e.top=c+"px"),"undefined"!=typeof d&&(e.left=d+"px")},w=function(d,e,h){if(d&&e){if(h)return void v(d,"block");var i=b.innerWidth,j=b.innerHeight,k=d.offsetWidth,l=d.offsetHeight,n=e.offsetWidth,o=e.offsetHeight,p=a.offset(e),q=d.querySelector("."+f);q||(q=c.createElement("div"),q.className=f,d.appendChild(q));var r=q&&q.offsetWidth/2||0,s=0,t=0,u=0,w=0,x=d.classList.contains(g)?0:5,y="top";l+r<p.top-b.pageYOffset?s=p.top-l-r:l+r<j-(p.top-b.pageYOffset)-o?(y="bottom",s=p.top+o+r):(y="middle",s=Math.max((j-l)/2+b.pageYOffset,0),t=Math.max((i-k)/2+b.pageXOffset,0)),"top"===y||"bottom"===y?(t=n/2+p.left-k/2,u=t,x>t&&(t=x),t+k>i&&(t=i-k-x),q&&("top"===y?q.classList.add(m):q.classList.remove(m),u-=t,w=k/2-r/2+u,w=Math.max(Math.min(w,k-2*r-6),6),q.setAttribute("style","left:"+w+"px"))):"middle"===y&&q.setAttribute("style","display:none"),v(d,"block",s,t)}};a.createMask=function(b){var d=c.createElement("div");d.classList.add(h),d.addEventListener(a.EVENT_MOVE,a.preventDefault),d.addEventListener("tap",function(){e.close()});var e=[d];return e._show=!1,e.show=function(){return e._show=!0,d.setAttribute("style","opacity:1"),c.body.appendChild(d),e},e._remove=function(){return e._show&&(e._show=!1,d.setAttribute("style","opacity:0"),a.later(function(){var a=c.body;d.parentNode===a&&a.removeChild(d)},350)),e},e.close=function(){b?b()!==!1&&e._remove():e._remove()},e},a.fn.popover=function(){var b=arguments;this.each(function(){a.targets._popover=this,("show"===b[0]||"hide"===b[0]||"toggle"===b[0])&&u(this,b[1],b[0])})}}(mui,window,document,"popover"),function(a,b,c,d,e){var f="mui-control-item",g="mui-segmented-control",h="mui-segmented-control-vertical",i="mui-control-content",j="mui-bar-tab",k="mui-tab-item",l=function(a,b){return b.classList&&(b.classList.contains(f)||b.classList.contains(k))?(b.parentNode&&b.parentNode.classList&&b.parentNode.classList.contains(h)||a.preventDefault(),b):!1};a.registerTarget({name:d,index:80,handle:l,target:!1}),b.addEventListener("tap",function(b){var e=a.targets.tab;if(e){for(var h,l,m,n="mui-active",o="."+n,p=e.parentNode;p&&p!==c;p=p.parentNode){if(p.classList.contains(g)){h=p.querySelector(o+"."+f);break}p.classList.contains(j)&&(h=p.querySelector(o+"."+k))}h&&h.classList.remove(n);var q=e===h;if(e&&e.classList.add(n),e.hash&&(m=c.getElementById(e.hash.replace("#","")))){if(!m.classList.contains(i))return void e.classList[q?"remove":"add"](n);if(!q){var r=m.parentNode;l=r.querySelectorAll("."+i+o);for(var s=0;s<l.length;s++){var t=l[s];t.parentNode===r&&t.classList.remove(n)}m.classList.add(n);for(var u=[],v=r.querySelectorAll("."+i),s=0;s<v.length;s++)v[s].parentNode===r&&u.push(v[s]);a.trigger(m,a.eventName("shown",d),{tabNumber:Array.prototype.indexOf.call(u,m)}),b.detail&&b.detail.gesture.preventDefault()}}}})}(mui,window,document,"tab"),function(a,b,c){var d="mui-switch",e="mui-switch-handle",f="mui-active",g="mui-dragging",h="mui-disabled",i="."+e,j=function(a,b){return b.classList&&b.classList.contains(d)?b:!1};a.registerTarget({name:c,index:100,handle:j,target:!1});var k=function(a){this.element=a,this.classList=this.element.classList,this.handle=this.element.querySelector(i),this.init(),this.initEvent()};k.prototype.init=function(){this.toggleWidth=this.element.offsetWidth,this.handleWidth=this.handle.offsetWidth,this.handleX=this.toggleWidth-this.handleWidth-3},k.prototype.initEvent=function(){this.element.addEventListener(a.EVENT_START,this),this.element.addEventListener("drag",this),this.element.addEventListener("swiperight",this),this.element.addEventListener(a.EVENT_END,this),this.element.addEventListener(a.EVENT_CANCEL,this)},k.prototype.handleEvent=function(b){if(!this.classList.contains(h))switch(b.type){case a.EVENT_START:this.start(b);break;case"drag":this.drag(b);break;case"swiperight":this.swiperight();break;case a.EVENT_END:case a.EVENT_CANCEL:this.end(b)}},k.prototype.start=function(a){this.handle.style.webkitTransitionDuration=this.element.style.webkitTransitionDuration=".2s",this.classList.add(g),(0===this.toggleWidth||0===this.handleWidth)&&this.init()},k.prototype.drag=function(a){var b=a.detail;this.isDragging||("left"===b.direction||"right"===b.direction)&&(this.isDragging=!0,this.lastChanged=void 0,this.initialState=this.classList.contains(f)),this.isDragging&&(this.setTranslateX(b.deltaX),a.stopPropagation(),b.gesture.preventDefault())},k.prototype.swiperight=function(a){this.isDragging&&a.stopPropagation()},k.prototype.end=function(b){this.classList.remove(g),this.isDragging?(this.isDragging=!1,b.stopPropagation(),a.trigger(this.element,"toggle",{isActive:this.classList.contains(f)})):this.toggle()},k.prototype.toggle=function(b){var c=this.classList;b===!1?this.handle.style.webkitTransitionDuration=this.element.style.webkitTransitionDuration="0s":this.handle.style.webkitTransitionDuration=this.element.style.webkitTransitionDuration=".2s",c.contains(f)?(c.remove(f),this.handle.style.webkitTransform="translate(0,0)"):(c.add(f),this.handle.style.webkitTransform="translate("+this.handleX+"px,0)"),a.trigger(this.element,"toggle",{isActive:this.classList.contains(f)})},k.prototype.setTranslateX=a.animationFrame(function(a){if(this.isDragging){var b=!1;(this.initialState&&-a>this.handleX/2||!this.initialState&&a>this.handleX/2)&&(b=!0),this.lastChanged!==b&&(b?(this.handle.style.webkitTransform="translate("+(this.initialState?0:this.handleX)+"px,0)",this.classList[this.initialState?"remove":"add"](f)):(this.handle.style.webkitTransform="translate("+(this.initialState?this.handleX:0)+"px,0)",this.classList[this.initialState?"add":"remove"](f)),this.lastChanged=b)}}),a.fn["switch"]=function(b){var c=[];return this.each(function(){var b=null,d=this.getAttribute("data-switch");d?b=a.data[d]:(d=++a.uuid,a.data[d]=new k(this),this.setAttribute("data-switch",d)),c.push(b)}),c.length>1?c:c[0]},a.ready(function(){a("."+d)["switch"]()})}(mui,window,"toggle"),function(a,b,c){function d(a,b){var c=b?"removeEventListener":"addEventListener";a[c]("drag",F),a[c]("dragend",F),a[c]("swiperight",F),a[c]("swipeleft",F),a[c]("flick",F)}var e,f,g="mui-active",h="mui-selected",i="mui-grid-view",j="mui-table-view-radio",k="mui-table-view-cell",l="mui-collapse-content",m="mui-disabled",n="mui-switch",o="mui-btn",p="mui-slider-handle",q="mui-slider-left",r="mui-slider-right",s="mui-transitioning",t="."+p,u="."+q,v="."+r,w="."+h,x="."+o,y=.8,z=isOpened=openedActions=progress=!1,A=sliderActionLeft=sliderActionRight=buttonsLeft=buttonsRight=sliderDirection=sliderRequestAnimationFrame=!1,B=translateX=lastTranslateX=sliderActionLeftWidth=sliderActionRightWidth=0,C=function(a){a?f?f.classList.add(g):e&&e.classList.add(g):(B&&B.cancel(),f?f.classList.remove(g):e&&e.classList.remove(g))},D=function(){if(translateX!==lastTranslateX){if(buttonsRight&&buttonsRight.length>0){progress=translateX/sliderActionRightWidth,translateX<-sliderActionRightWidth&&(translateX=-sliderActionRightWidth-Math.pow(-translateX-sliderActionRightWidth,y));for(var a=0,b=buttonsRight.length;b>a;a++){var c=buttonsRight[a];"undefined"==typeof c._buttonOffset&&(c._buttonOffset=c.offsetLeft),buttonOffset=c._buttonOffset,E(c,translateX-buttonOffset*(1+Math.max(progress,-1)))}}if(buttonsLeft&&buttonsLeft.length>0){progress=translateX/sliderActionLeftWidth,translateX>sliderActionLeftWidth&&(translateX=sliderActionLeftWidth+Math.pow(translateX-sliderActionLeftWidth,y));for(var a=0,b=buttonsLeft.length;b>a;a++){var d=buttonsLeft[a];"undefined"==typeof d._buttonOffset&&(d._buttonOffset=sliderActionLeftWidth-d.offsetLeft-d.offsetWidth),buttonOffset=d._buttonOffset,buttonsLeft.length>1&&(d.style.zIndex=buttonsLeft.length-a),E(d,translateX+buttonOffset*(1-Math.min(progress,1)))}}E(A,translateX),lastTranslateX=translateX}sliderRequestAnimationFrame=requestAnimationFrame(function(){D()})},E=function(a,b){a&&(a.style.webkitTransform="translate("+b+"px,0)")};b.addEventListener(a.EVENT_START,function(b){e&&C(!1),e=f=!1,z=isOpened=openedActions=!1;for(var g=b.target,h=!1;g&&g!==c;g=g.parentNode)if(g.classList){var p=g.classList;if(("INPUT"===g.tagName&&"radio"!==g.type&&"checkbox"!==g.type||"BUTTON"===g.tagName||p.contains(n)||p.contains(o)||p.contains(m))&&(h=!0),p.contains(l))break;if(p.contains(k)){e=g;var q=e.parentNode.querySelector(w);if(!e.parentNode.classList.contains(j)&&q&&q!==e)return a.swipeoutClose(q),void(e=h=!1);if(!e.parentNode.classList.contains(i)){var r=e.querySelector("a");r&&r.parentNode===e&&(f=r)}var s=e.querySelector(t);s&&(d(e),b.stopPropagation()),h||(s?(B&&B.cancel(),B=a.later(function(){C(!0)},100)):C(!0));break}}}),b.addEventListener(a.EVENT_MOVE,function(a){C(!1)});var F={handleEvent:function(a){switch(a.type){case"drag":this.drag(a);break;case"dragend":this.dragend(a);break;case"flick":this.flick(a);break;case"swiperight":this.swiperight(a);break;case"swipeleft":this.swipeleft(a)}},drag:function(a){if(e){z||(A=sliderActionLeft=sliderActionRight=buttonsLeft=buttonsRight=sliderDirection=sliderRequestAnimationFrame=!1,A=e.querySelector(t),A&&(sliderActionLeft=e.querySelector(u),
sliderActionRight=e.querySelector(v),sliderActionLeft&&(sliderActionLeftWidth=sliderActionLeft.offsetWidth,buttonsLeft=sliderActionLeft.querySelectorAll(x)),sliderActionRight&&(sliderActionRightWidth=sliderActionRight.offsetWidth,buttonsRight=sliderActionRight.querySelectorAll(x)),e.classList.remove(s),isOpened=e.classList.contains(h),isOpened&&(openedActions=e.querySelector(u+w)?"left":"right")));var b=a.detail,c=b.direction,d=b.angle;if("left"===c&&(d>150||-150>d)?(buttonsRight||buttonsLeft&&isOpened)&&(z=!0):"right"===c&&d>-30&&30>d&&(buttonsLeft||buttonsRight&&isOpened)&&(z=!0),z){a.stopPropagation(),a.detail.gesture.preventDefault();var f=a.detail.deltaX;if(isOpened&&("right"===openedActions?f-=sliderActionRightWidth:f+=sliderActionLeftWidth),f>0&&!buttonsLeft||0>f&&!buttonsRight){if(!isOpened)return;f=0}0>f?sliderDirection="toLeft":f>0?sliderDirection="toRight":sliderDirection||(sliderDirection="toLeft"),sliderRequestAnimationFrame||D(),translateX=f}}},flick:function(a){z&&a.stopPropagation()},swipeleft:function(a){z&&a.stopPropagation()},swiperight:function(a){z&&a.stopPropagation()},dragend:function(b){if(z){b.stopPropagation(),sliderRequestAnimationFrame&&(cancelAnimationFrame(sliderRequestAnimationFrame),sliderRequestAnimationFrame=null);var c=b.detail;z=!1;var d="close",f="toLeft"===sliderDirection?sliderActionRightWidth:sliderActionLeftWidth,g=c.swipe||Math.abs(translateX)>f/2;g&&(isOpened?"left"===c.direction&&"right"===openedActions?d="open":"right"===c.direction&&"left"===openedActions&&(d="open"):d="open"),e.classList.add(s);var i;if("open"===d){var j="toLeft"===sliderDirection?-f:f;if(E(A,j),i="toLeft"===sliderDirection?buttonsRight:buttonsLeft,"undefined"!=typeof i){for(var k=null,l=0;l<i.length;l++)k=i[l],E(k,j);k.parentNode.classList.add(h),e.classList.add(h),isOpened||a.trigger(e,"toLeft"===sliderDirection?"slideleft":"slideright")}}else E(A,0),sliderActionLeft&&sliderActionLeft.classList.remove(h),sliderActionRight&&sliderActionRight.classList.remove(h),e.classList.remove(h);var m;if(buttonsLeft&&buttonsLeft.length>0&&buttonsLeft!==i)for(var l=0,n=buttonsLeft.length;n>l;l++){var o=buttonsLeft[l];m=o._buttonOffset,"undefined"==typeof m&&(o._buttonOffset=sliderActionLeftWidth-o.offsetLeft-o.offsetWidth),E(o,m)}if(buttonsRight&&buttonsRight.length>0&&buttonsRight!==i)for(var l=0,n=buttonsRight.length;n>l;l++){var p=buttonsRight[l];m=p._buttonOffset,"undefined"==typeof m&&(p._buttonOffset=p.offsetLeft),E(p,-m)}}}};a.swipeoutOpen=function(b,c){if(b){var d=b.classList;if(!d.contains(h)){c||(c=b.querySelector(v)?"right":"left");var e=b.querySelector(a.classSelector(".slider-"+c));if(e){e.classList.add(h),d.add(h),d.remove(s);for(var f,g=e.querySelectorAll(x),i=e.offsetWidth,j="right"===c?-i:i,k=g.length,l=0;k>l;l++)f=g[l],"right"===c?E(f,-f.offsetLeft):E(f,i-f.offsetWidth-f.offsetLeft);d.add(s);for(var l=0;k>l;l++)E(g[l],j);E(b.querySelector(t),j)}}}},a.swipeoutClose=function(b){if(b){var c=b.classList;if(c.contains(h)){var d=b.querySelector(v+w)?"right":"left",e=b.querySelector(a.classSelector(".slider-"+d));if(e){e.classList.remove(h),c.remove(h),c.add(s);var f,g=e.querySelectorAll(x),i=e.offsetWidth,j=g.length;E(b.querySelector(t),0);for(var k=0;j>k;k++)f=g[k],"right"===d?E(f,-f.offsetLeft):E(f,i-f.offsetWidth-f.offsetLeft)}}}},b.addEventListener(a.EVENT_END,function(a){e&&(C(!1),A&&d(e,!0))}),b.addEventListener(a.EVENT_CANCEL,function(a){e&&(C(!1),A&&d(e,!0))});var G=function(b){var c=b.target&&b.target.type||"";if("radio"!==c&&"checkbox"!==c){var d=e.classList;if(d.contains("mui-radio")){var f=e.querySelector("input[type=radio]");f&&(f.disabled||f.readOnly||(f.checked=!f.checked,a.trigger(f,"change")))}else if(d.contains("mui-checkbox")){var f=e.querySelector("input[type=checkbox]");f&&(f.disabled||f.readOnly||(f.checked=!f.checked,a.trigger(f,"change")))}}};b.addEventListener(a.EVENT_CLICK,function(a){e&&e.classList.contains("mui-collapse")&&a.preventDefault()}),b.addEventListener("doubletap",function(a){e&&G(a)});var H=/^(INPUT|TEXTAREA|BUTTON|SELECT)$/;b.addEventListener("tap",function(b){if(e){var c=!1,d=e.classList,f=e.parentNode;if(f&&f.classList.contains(j)){if(d.contains(h))return;var i=f.querySelector("li"+w);return i&&i.classList.remove(h),d.add(h),void a.trigger(e,"selected",{el:e})}if(d.contains("mui-collapse")&&!e.parentNode.classList.contains("mui-unfold")){if(H.test(b.target.tagName)||b.detail.gesture.preventDefault(),!d.contains(g)){var k=e.parentNode.querySelector(".mui-collapse.mui-active");k&&k.classList.remove(g),c=!0}d.toggle(g),c&&a.trigger(e,"expand")}else G(b)}})}(mui,window,document),function(a,b){a.alert=function(c,d,e,f){if(a.os.plus){if("undefined"==typeof c)return;"function"==typeof d?(f=d,d=null,e="确定"):"function"==typeof e&&(f=e,e=null),a.plusReady(function(){plus.nativeUI.alert(c,f,d,e)})}else b.alert(c)}}(mui,window),function(a,b){a.confirm=function(c,d,e,f){if(a.os.plus){if("undefined"==typeof c)return;"function"==typeof d?(f=d,d=null,e=null):"function"==typeof e&&(f=e,e=null),a.plusReady(function(){plus.nativeUI.confirm(c,f,d,e)})}else f(b.confirm(c)?{index:0}:{index:1})}}(mui,window),function(a,b){a.prompt=function(c,d,e,f,g){if(a.os.plus){if("undefined"==typeof message)return;"function"==typeof d?(g=d,d=null,e=null,f=null):"function"==typeof e?(g=e,e=null,f=null):"function"==typeof f&&(g=f,f=null),a.plusReady(function(){plus.nativeUI.prompt(c,g,e,d,f)})}else{var h=b.prompt(c);g(h?{index:0,value:h}:{index:1,value:""})}}}(mui,window),function(a,b){var c="mui-active";a.toast=function(b){if(a.os.plus)a.plusReady(function(){plus.nativeUI.toast(b,{verticalAlign:"bottom"})});else{var d=document.createElement("div");d.classList.add("mui-toast-container"),d.innerHTML='<div class="mui-toast-message">'+b+"</div>",d.addEventListener("webkitTransitionEnd",function(){d.classList.contains(c)||d.parentNode.removeChild(d)}),document.body.appendChild(d),d.offsetHeight,d.classList.add(c),setTimeout(function(){d.classList.remove(c)},2e3)}}}(mui,window),function(a,b,c){var d="mui-popup",e="mui-popup-backdrop",f="mui-popup-in",g="mui-popup-out",h="mui-popup-inner",i="mui-popup-title",j="mui-popup-text",k="mui-popup-input",l="mui-popup-buttons",m="mui-popup-button",n="mui-popup-button-bold",e="mui-popup-backdrop",o="mui-active",p=[],q=function(){var b=c.createElement("div");return b.classList.add(e),b.addEventListener(a.EVENT_MOVE,a.preventDefault),b.addEventListener("webkitTransitionEnd",function(){this.classList.contains(o)||b.parentNode&&b.parentNode.removeChild(b)}),b}(),r=function(a){return'<div class="'+k+'"><input type="text" autofocus placeholder="'+(a||"")+'"/></div>'},s=function(a,b,c){return'<div class="'+h+'"><div class="'+i+'">'+b+'</div><div class="'+j+'">'+a.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>")+"</div>"+(c||"")+"</div>"},t=function(a){for(var b=a.length,c=[],d=0;b>d;d++)c.push('<span class="'+m+(d===b-1?" "+n:"")+'">'+a[d]+"</span>");return'<div class="'+l+'">'+c.join("")+"</div>"},u=function(b,e){var h=c.createElement("div");h.className=d,h.innerHTML=b;var i=function(){h.parentNode&&h.parentNode.removeChild(h),h=null};h.addEventListener(a.EVENT_MOVE,a.preventDefault),h.addEventListener("webkitTransitionEnd",function(a){h&&a.target===h&&h.classList.contains(g)&&i()}),h.style.display="block",c.body.appendChild(h),h.offsetHeight,h.classList.add(f),q.classList.contains(o)||(q.style.display="block",c.body.appendChild(q),q.offsetHeight,q.classList.add(o));var j=a.qsa("."+m,h),l=h.querySelector("."+k+" input"),n={element:h,close:function(a,b){h&&(e&&e({index:a||0,value:l&&l.value||""}),b!==!1?(h.classList.remove(f),h.classList.add(g)):i(),p.pop(),p.length?p[p.length-1].show(b):q.classList.remove(o))}},r=function(a){n.close(j.indexOf(a.target))};return a(h).on("tap","."+m,r),p.length&&p[p.length-1].hide(),p.push({close:n.close,show:function(a){h.style.display="block",h.offsetHeight,h.classList.add(f)},hide:function(){h.style.display="none",h.classList.remove(f)}}),n},v=function(b,c,d,e,f){return"undefined"!=typeof b?("function"==typeof c?(e=c,f=d,c=null,d=null):"function"==typeof d&&(f=e,e=d,d=null),a.os.plus&&"div"!==f?plus.nativeUI.alert(b,e,c||"提示",d||"确定"):u(s(b,c||"提示")+t([d||"确定"]),e)):void 0},w=function(b,c,d,e,f){return"undefined"!=typeof b?("function"==typeof c?(e=c,f=d,c=null,d=null):"function"==typeof d&&(f=e,e=d,d=null),a.os.plus&&"div"!==f?plus.nativeUI.confirm(b,e,c,d||["取消","确认"]):u(s(b,c||"提示")+t(d||["取消","确认"]),e)):void 0},x=function(b,c,d,e,f,g){return"undefined"!=typeof b?("function"==typeof c?(f=c,g=d,c=null,d=null,e=null):"function"==typeof d?(f=d,g=e,d=null,e=null):"function"==typeof e&&(g=f,f=e,e=null),a.os.plus&&"div"!==g?plus.nativeUI.prompt(b,f,d||"提示",c,e||["取消","确认"]):u(s(b,d||"提示",r(c))+t(e||["取消","确认"]),f)):void 0},y=function(){return p.length?(p[p.length-1].close(),!0):!1},z=function(){for(;p.length;)p[p.length-1].close()};a.closePopup=y,a.closePopups=z,a.alert=v,a.confirm=w,a.prompt=x}(mui,window,document),function(a,b){var c="mui-progressbar",d="mui-progressbar-in",e="mui-progressbar-out",f="mui-progressbar-infinite",g=".mui-progressbar",h=function(b){if(b=a(b||"body"),0!==b.length){if(b=b[0],b.classList.contains(c))return b;var d=b.querySelectorAll(g);if(d)for(var e=0,f=d.length;f>e;e++){var h=d[e];if(h.parentNode===b)return h}}},i=function(h,i,j){if("number"==typeof h&&(j=i,i=h,h="body"),h=a(h||"body"),0!==h.length){h=h[0];var l;if(h.classList.contains(c))l=h;else{var m=h.querySelectorAll(g+":not(."+e+")");if(m)for(var n=0,o=m.length;o>n;n++){var p=m[n];if(p.parentNode===h){l=p;break}}l?l.classList.add(d):(l=b.createElement("span"),l.className=c+" "+d+("undefined"!=typeof i?"":" "+f)+(j?" "+c+"-"+j:""),"undefined"!=typeof i&&(l.innerHTML="<span></span>"),h.appendChild(l))}return i&&k(h,i),l}},j=function(a){var b=h(a);if(b){var c=b.classList;c.contains(d)&&!c.contains(e)&&(c.remove(d),c.add(e),b.addEventListener("webkitAnimationEnd",function(){b.parentNode&&b.parentNode.removeChild(b),b=null}))}},k=function(a,b,c){"number"==typeof a&&(c=b,b=a,a=!1);var d=h(a);if(d&&!d.classList.contains(f)){b&&(b=Math.min(Math.max(b,0),100)),d.offsetHeight;var e=d.querySelector("span");if(e){var g=e.style;g.webkitTransform="translate3d("+(-100+b)+"%,0,0)","undefined"!=typeof c?g.webkitTransitionDuration=c+"ms":g.webkitTransitionDuration=""}return d}};a.fn.progressbar=function(a){var b=[];return a=a||{},this.each(function(){var c=this,d=c.mui_plugin_progressbar;d?a&&d.setOptions(a):c.mui_plugin_progressbar=d={options:a,setOptions:function(a){this.options=a},show:function(){return i(c,this.options.progress,this.options.color)},setProgress:function(a){return k(c,a)},hide:function(){return j(c)}},b.push(d)}),1===b.length?b[0]:b}}(mui,document),function(a,b,c){var d="mui-icon",e="mui-icon-clear",f="mui-icon-speech",g="mui-icon-search",h="mui-icon-eye",i="mui-input-row",j="mui-placeholder",k="mui-tooltip",l="mui-hidden",m="mui-focusin",n="."+e,o="."+f,p="."+h,q="."+j,r="."+k,s=function(a){for(;a&&a!==c;a=a.parentNode)if(a.classList&&a.classList.contains(i))return a;return null},t=function(a,b){this.element=a,this.options=b||{actions:"clear"},~this.options.actions.indexOf("slider")?(this.sliderActionClass=k+" "+l,this.sliderActionSelector=r):(~this.options.actions.indexOf("clear")&&(this.clearActionClass=d+" "+e+" "+l,this.clearActionSelector=n),~this.options.actions.indexOf("speech")&&(this.speechActionClass=d+" "+f,this.speechActionSelector=o),~this.options.actions.indexOf("search")&&(this.searchActionClass=j,this.searchActionSelector=q),~this.options.actions.indexOf("password")&&(this.passwordActionClass=d+" "+h,this.passwordActionSelector=p)),this.init()};t.prototype.init=function(){this.initAction(),this.initElementEvent()},t.prototype.initAction=function(){var b=this,c=b.element.parentNode;c&&(b.sliderActionClass?b.sliderAction=b.createAction(c,b.sliderActionClass,b.sliderActionSelector):(b.searchActionClass&&(b.searchAction=b.createAction(c,b.searchActionClass,b.searchActionSelector),b.searchAction.addEventListener("tap",function(c){a.focus(b.element),c.stopPropagation()})),b.speechActionClass&&(b.speechAction=b.createAction(c,b.speechActionClass,b.speechActionSelector),b.speechAction.addEventListener("click",a.stopPropagation),b.speechAction.addEventListener("tap",function(a){b.speechActionClick(a)})),b.clearActionClass&&(b.clearAction=b.createAction(c,b.clearActionClass,b.clearActionSelector),b.clearAction.addEventListener("tap",function(a){b.clearActionClick(a)})),b.passwordActionClass&&(b.passwordAction=b.createAction(c,b.passwordActionClass,b.passwordActionSelector),b.passwordAction.addEventListener("tap",function(a){b.passwordActionClick(a)}))))},t.prototype.createAction=function(a,b,e){var f=a.querySelector(e);if(!f){var f=c.createElement("span");f.className=b,b===this.searchActionClass&&(f.innerHTML='<span class="'+d+" "+g+'"></span><span>'+this.element.getAttribute("placeholder")+"</span>",this.element.setAttribute("placeholder",""),this.element.value.trim()&&a.classList.add("mui-active")),a.insertBefore(f,this.element.nextSibling)}return f},t.prototype.initElementEvent=function(){var b=this.element;if(this.sliderActionClass){var c=this.sliderAction,d=null,e=function(){c.classList.remove(l);var a=b.offsetLeft,e=b.offsetWidth-28,f=c.offsetWidth,g=Math.abs(b.max-b.min),h=e/g*Math.abs(b.value-b.min);c.style.left=14+a+h-f/2+"px",c.innerText=b.value,d&&clearTimeout(d),d=setTimeout(function(){c.classList.add(l)},1e3)};b.addEventListener("input",e),b.addEventListener("tap",e),b.addEventListener(a.EVENT_MOVE,function(a){a.stopPropagation()})}else{if(this.clearActionClass){var f=this.clearAction;if(!f)return;a.each(["keyup","change","input","focus","cut","paste"],function(a,c){!function(a){b.addEventListener(a,function(){f.classList[b.value.trim()?"remove":"add"](l)})}(c)}),b.addEventListener("blur",function(){f.classList.add(l)})}this.searchActionClass&&(b.addEventListener("focus",function(){b.parentNode.classList.add("mui-active")}),b.addEventListener("blur",function(){b.value.trim()||b.parentNode.classList.remove("mui-active")}))}},t.prototype.setPlaceholder=function(a){if(this.searchActionClass){var b=this.element.parentNode.querySelector(q);b&&(b.getElementsByTagName("span")[1].innerText=a)}else this.element.setAttribute("placeholder",a)},t.prototype.passwordActionClick=function(a){"text"===this.element.type?this.element.type="password":this.element.type="text",this.passwordAction.classList.toggle("mui-active"),a.preventDefault()},t.prototype.clearActionClick=function(b){var c=this;c.element.value="",a.focus(c.element),c.clearAction.classList.add(l),b.preventDefault()},t.prototype.speechActionClick=function(d){if(b.plus){var e=this,f=e.element.value;e.element.value="",c.body.classList.add(m),plus.speech.startRecognize({engine:"iFly"},function(b){e.element.value+=b,a.focus(e.element),plus.speech.stopRecognize(),a.trigger(e.element,"recognized",{value:e.element.value}),f!==e.element.value&&(a.trigger(e.element,"change"),a.trigger(e.element,"input"))},function(a){c.body.classList.remove(m)})}else alert("only for 5+");d.preventDefault()},a.fn.input=function(b){var c=[];return this.each(function(){var b=null,d=[],e=s(this.parentNode);if("range"===this.type&&e.classList.contains("mui-input-range"))d.push("slider");else{var f=this.classList;f.contains("mui-input-clear")&&d.push("clear"),a.os.android&&a.os.stream||!f.contains("mui-input-speech")||d.push("speech"),f.contains("mui-input-password")&&d.push("password"),"search"===this.type&&e.classList.contains("mui-search")&&d.push("search")}var g=this.getAttribute("data-input-"+d[0]);if(g)b=a.data[g];else{g=++a.uuid,b=a.data[g]=new t(this,{actions:d.join(",")});for(var h=0,i=d.length;i>h;h++)this.setAttribute("data-input-"+d[h],g)}c.push(b)}),1===c.length?c[0]:c},a.ready(function(){a(".mui-input-row input").input()})}(mui,window,document),function(a,b){var c=/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,d=function(a){var b=a.match(c);return b&&5===b.length?[b[1],b[2],b[3],b[4]]:[]},e=function(b,c){this.element=b,this.options=a.extend({top:0,offset:150,duration:16},c||{}),this._style=this.element.style,this._bgColor=this._style.backgroundColor;var e=d(mui.getStyles(this.element,"backgroundColor"));if(!e.length)throw new Error("元素背景颜色必须为RGBA");this._R=e[0],this._G=e[1],this._B=e[2],this._A=e[3],this._bufferFn=a.buffer(this.handleScroll,this.options.duration,this),this.initEvent()};e.prototype.initEvent=function(){b.addEventListener("scroll",this._bufferFn),b.addEventListener(a.EVENT_MOVE,this._bufferFn)},e.prototype.handleScroll=function(){this._style.backgroundColor="rgba("+this._R+","+this._G+","+this._B+","+(b.scrollY-this.options.top)/this.options.offset+")"},e.prototype.destory=function(){b.removeEventListener("scroll",this._bufferFn),b.removeEventListener(a.EVENT_MOVE,this._bufferFn),this.element.style.backgroundColor=this._bgColor,this.element.mui_plugin_transparent=null},a.fn.transparent=function(a){a=a||{};var b=[];return this.each(function(){var c=this.mui_plugin_transparent;if(!c){var d=this.getAttribute("data-top"),f=this.getAttribute("data-offset"),g=this.getAttribute("data-duration");null!==d&&"undefined"==typeof a.top&&(a.top=d),null!==f&&"undefined"==typeof a.offset&&(a.offset=f),null!==g&&"undefined"==typeof a.duration&&(a.duration=g),c=this.mui_plugin_transparent=new e(this,a)}b.push(c)}),1===b.length?b[0]:b},a.ready(function(){a(".mui-bar-transparent").transparent()})}(mui,window),function(a){var b="ontouchstart"in document,c=b?"tap":"click",d="change",e="mui-numbox",f=".mui-btn-numbox-plus,.mui-numbox-btn-plus",g=".mui-btn-numbox-minus,.mui-numbox-btn-minus",h=".mui-input-numbox,.mui-numbox-input",i=a.Numbox=a.Class.extend({init:function(b,c){var d=this;if(!b)throw"构造 numbox 时缺少容器元素";d.holder=b,c=c||{},c.step=parseInt(c.step||1),d.options=c,d.input=a.qsa(h,d.holder)[0],d.plus=a.qsa(f,d.holder)[0],d.minus=a.qsa(g,d.holder)[0],d.checkValue(),d.initEvent()},initEvent:function(){var b=this;b.plus.addEventListener(c,function(c){var e=parseInt(b.input.value)+b.options.step;b.input.value=e.toString(),a.trigger(b.input,d,null)}),b.minus.addEventListener(c,function(c){var e=parseInt(b.input.value)-b.options.step;b.input.value=e.toString(),a.trigger(b.input,d,null)}),b.input.addEventListener(d,function(c){b.checkValue();var e=parseInt(b.input.value);a.trigger(b.holder,d,{value:e})})},getValue:function(){var a=this;return parseInt(a.input.value)},checkValue:function(){var a=this,b=a.input.value;if(null==b||""==b||isNaN(b))a.input.value=a.options.min||0,a.minus.disabled=null!=a.options.min;else{var b=parseInt(b);null!=a.options.max&&!isNaN(a.options.max)&&b>=parseInt(a.options.max)?(b=a.options.max,a.plus.disabled=!0):a.plus.disabled=!1,null!=a.options.min&&!isNaN(a.options.min)&&b<=parseInt(a.options.min)?(b=a.options.min,a.minus.disabled=!0):a.minus.disabled=!1,a.input.value=b}},setOption:function(a,b){var c=this;c.options[a]=b}});a.fn.numbox=function(a){return this.each(function(a,b){if(!b.numbox)if(d)b.numbox=new i(b,d);else{var c=b.getAttribute("data-numbox-options"),d=c?JSON.parse(c):{};d.step=b.getAttribute("data-numbox-step")||d.step,d.min=b.getAttribute("data-numbox-min")||d.min,d.max=b.getAttribute("data-numbox-max")||d.max,b.numbox=new i(b,d)}}),this[0]?this[0].numbox:null},a.ready(function(){a("."+e).numbox()})}(mui);
/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = function() {
		function L(t) {
			return null == t ? String(t) : j[S.call(t)] || "object"
		}
		function Z(t) {
			return "function" == L(t)
		}
		function _(t) {
			return null != t && t == t.window
		}
		function $(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}
		function D(t) {
			return "object" == L(t)
		}
		function M(t) {
			return D(t) && !_(t) && Object.getPrototypeOf(t) == Object.prototype
		}
		function R(t) {
			return "number" == typeof t.length
		}
		function k(t) {
			return s.call(t, function(t) {
				return null != t
			})
		}
		function z(t) {
			return t.length > 0 ? n.fn.concat.apply([], t) : t
		}
		function F(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function q(t) {
			return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}
		function H(t, e) {
			return "number" != typeof e || c[F(t)] ? e : e + "px"
		}
		function I(t) {
			var e, n;
			return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
		}
		function V(t) {
			return "children" in t ? o.call(t.children) : n.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : void 0
			})
		}
		function B(n, i, r) {
			for (e in i) r && (M(i[e]) || A(i[e])) ? (M(i[e]) && !M(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
		}
		function U(t, e) {
			return null == e ? n(t) : n(t).filter(e)
		}
		function J(t, e, n, i) {
			return Z(e) ? e.call(t, n, i) : e
		}
		function X(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}
		function W(e, n) {
			var i = e.className || "",
				r = i && i.baseVal !== t;
			return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
		}
		function Y(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}
		function G(t, e) {
			e(t);
			for (var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e)
		}
		var t, e, n, i, C, N, r = [],
			o = r.slice,
			s = r.filter,
			a = window.document,
			u = {},
			f = {},
			c = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			l = /^\s*<(\w+|!)[^>]*>/,
			h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			d = /^(?:body|html)$/i,
			m = /([A-Z])/g,
			g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			v = ["after", "prepend", "before", "append"],
			y = a.createElement("table"),
			x = a.createElement("tr"),
			b = {
				tr: a.createElement("tbody"),
				tbody: y,
				thead: y,
				tfoot: y,
				td: x,
				th: x,
				"*": a.createElement("div")
			},
			w = /complete|loaded|interactive/,
			E = /^[\w-]*$/,
			j = {},
			S = j.toString,
			T = {},
			O = a.createElement("div"),
			P = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			A = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return T.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var i, r = t.parentNode,
				o = !r;
			return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i
		}, C = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, N = function(t) {
			return s.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, T.fragment = function(e, i, r) {
			var s, u, f;
			return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function() {
				f.removeChild(this)
			})), M(r) && (u = n(s), n.each(r, function(t, e) {
				g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
			})), s
		}, T.Z = function(t, e) {
			return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
		}, T.isZ = function(t) {
			return t instanceof T.Z
		}, T.init = function(e, i) {
			var r;
			if (!e) return T.Z();
			if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && l.test(e)) r = T.fragment(e, RegExp.$1, i), e = null;
			else {
				if (i !== t) return n(i).find(e);
				r = T.qsa(a, e)
			} else {
				if (Z(e)) return n(a).ready(e);
				if (T.isZ(e)) return e;
				if (A(e)) r = k(e);
				else if (D(e)) r = [e], e = null;
				else if (l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i), e = null;
				else {
					if (i !== t) return n(i).find(e);
					r = T.qsa(a, e)
				}
			}
			return T.Z(r, e)
		}, n = function(t, e) {
			return T.init(t, e)
		}, n.extend = function(t) {
			var e, n = o.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				B(t, n, e)
			}), t
		}, T.qsa = function(t, e) {
			var n, i = "#" == e[0],
				r = !i && "." == e[0],
				s = i || r ? e.slice(1) : e,
				a = E.test(s);
			return $(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, n.contains = a.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, n.type = L, n.isFunction = Z, n.isWindow = _, n.isArray = A, n.isPlainObject = M, n.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, n.inArray = function(t, e, n) {
			return r.indexOf.call(e, t, n)
		}, n.camelCase = C, n.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function(t, e) {
			var n, r, o, i = [];
			if (R(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
			else for (o in t) n = e(t[o], o), null != n && i.push(n);
			return z(i)
		}, n.each = function(t, e) {
			var n, i;
			if (R(t)) {
				for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
			return t
		}, n.grep = function(t, e) {
			return s.call(t, e)
		}, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			j["[object " + e + "]"] = e.toLowerCase()
		}), n.fn = {
			forEach: r.forEach,
			reduce: r.reduce,
			push: r.push,
			sort: r.sort,
			indexOf: r.indexOf,
			concat: r.concat,
			map: function(t) {
				return n(n.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return n(o.apply(this, arguments))
			},
			ready: function(t) {
				return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function() {
					t(n)
				}, !1), this
			},
			get: function(e) {
				return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return r.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return Z(t) ? this.not(this.not(t)) : n(s.call(this, function(e) {
					return T.matches(e, t)
				}))
			},
			add: function(t, e) {
				return n(N(this.concat(n(t, e))))
			},
			is: function(t) {
				return this.length > 0 && T.matches(this[0], t)
			},
			not: function(e) {
				var i = [];
				if (Z(e) && e.call !== t) this.each(function(t) {
					e.call(this, t) || i.push(this)
				});
				else {
					var r = "string" == typeof e ? this.filter(e) : R(e) && Z(e.item) ? o.call(e) : n(e);
					this.forEach(function(t) {
						r.indexOf(t) < 0 && i.push(t)
					})
				}
				return n(i)
			},
			has: function(t) {
				return this.filter(function() {
					return D(t) ? n.contains(this, t) : n(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !D(t) ? t : n(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !D(t) ? t : n(t)
			},
			find: function(t) {
				var e, i = this;
				return e = t ? "object" == typeof t ? n(t).filter(function() {
					var t = this;
					return r.some.call(i, function(e) {
						return n.contains(e, t)
					})
				}) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function() {
					return T.qsa(this, t)
				}) : n()
			},
			closest: function(t, e) {
				var i = this[0],
					r = !1;
				for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) i = i !== e && !$(i) && i.parentNode;
				return n(i)
			},
			parents: function(t) {
				for (var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
					return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
				});
				return U(e, t)
			},
			parent: function(t) {
				return U(N(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return U(this.map(function() {
					return V(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return o.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return U(this.map(function(t, e) {
					return s.call(V(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return n.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var e = Z(t);
				if (this[0] && !e) var i = n(t).get(0),
					r = i.parentNode || this.length > 1;
				return this.each(function(o) {
					n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					n(this[0]).before(t = n(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					n(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var e = Z(t);
				return this.each(function(i) {
					var r = n(this),
						o = r.contents(),
						s = e ? t.call(this, i) : t;
					o.length ? o.wrapAll(s) : r.append(s)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					n(this).replaceWith(n(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(e) {
				return this.each(function() {
					var i = n(this);
					(e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
				})
			},
			prev: function(t) {
				return n(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return n(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var i = this.innerHTML;
					n(this).empty().append(J(this, t, e, i))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = J(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(n, i) {
				var r;
				return "string" != typeof n || 1 in arguments ? this.each(function(t) {
					if (1 === this.nodeType) if (D(n)) for (e in n) X(this, e, n[e]);
					else X(this, n, J(this, i, t, this.getAttribute(n)))
				}) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						X(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = P[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = J(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			data: function(e, n) {
				var i = "data-" + e.replace(m, "-$1").toLowerCase(),
					r = 1 in arguments ? this.attr(i, n) : this.attr(i);
				return null !== r ? Y(r) : t
			},
			val: function(t) {
				return 0 in arguments ? this.each(function(e) {
					this.value = J(this, t, e, this.value)
				}) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var i = n(this),
						r = J(this, t, e, i.offset()),
						o = i.offsetParent().offset(),
						s = {
							top: r.top - o.top,
							left: r.left - o.left
						};
					"static" == i.css("position") && (s.position = "relative"), i.css(s)
				});
				if (!this.length) return null;
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(t, i) {
				if (arguments.length < 2) {
					var r, o = this[0];
					if (!o) return;
					if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[C(t)] || r.getPropertyValue(t);
					if (A(t)) {
						var s = {};
						return n.each(t, function(t, e) {
							s[e] = o.style[C(e)] || r.getPropertyValue(e)
						}), s
					}
				}
				var a = "";
				if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function() {
					this.style.removeProperty(F(t))
				});
				else for (e in t) t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function() {
					this.style.removeProperty(F(e))
				});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return t ? r.some.call(this, function(t) {
					return this.test(W(t))
				}, q(t)) : !1
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						i = [];
						var r = W(this),
							o = J(this, t, e, r);
						o.split(/\s+/g).forEach(function(t) {
							n(this).hasClass(t) || i.push(t)
						}, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
					}
				}) : this
			},
			removeClass: function(e) {
				return this.each(function(n) {
					if ("className" in this) {
						if (e === t) return W(this, "");
						i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function(t) {
							i = i.replace(q(t), " ")
						}), W(this, i.trim())
					}
				})
			},
			toggleClass: function(e, i) {
				return e ? this.each(function(r) {
					var o = n(this),
						s = J(this, e, r, W(this));
					s.split(/\s+/g).forEach(function(e) {
						(i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
					})
				}) : this
			},
			scrollTop: function(e) {
				if (this.length) {
					var n = "scrollTop" in this[0];
					return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ?
					function() {
						this.scrollTop = e
					} : function() {
						this.scrollTo(this.scrollX, e)
					})
				}
			},
			scrollLeft: function(e) {
				if (this.length) {
					var n = "scrollLeft" in this[0];
					return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ?
					function() {
						this.scrollLeft = e
					} : function() {
						this.scrollTo(e, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						i = this.offset(),
						r = d.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
						top: i.top - r.top,
						left: i.left - r.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
			var i = e.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			n.fn[e] = function(r) {
				var o, s = this[0];
				return r === t ? _(s) ? s["inner" + i] : $(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
					s = n(this), s.css(e, J(this, r, t, s[e]()))
				})
			}
		}), v.forEach(function(t, e) {
			var i = e % 2;
			n.fn[t] = function() {
				var t, o, r = n.map(arguments, function(e) {
					return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e)
				}),
					s = this.length > 1;
				return r.length < 1 ? this : this.each(function(t, u) {
					o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
					var f = n.contains(a.documentElement, o);
					r.forEach(function(t) {
						if (s) t = t.cloneNode(!0);
						else if (!o) return n(t).remove();
						o.insertBefore(t, u), f && G(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
				return n(e)[t](this), this
			}
		}), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function l(t) {
		return t._zid || (t._zid = e++)
	}
	function h(t, e, n, i) {
		if (e = p(e), e.ns) var r = d(e.ns);
		return (s[l(t)] || []).filter(function(t) {
			return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
		})
	}
	function p(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function d(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function m(t, e) {
		return t.del && !u && t.e in f || !! e
	}
	function g(t) {
		return c[t] || u && f[t] || t
	}
	function v(e, i, r, o, a, u, f) {
		var h = l(e),
			d = s[h] || (s[h] = []);
		i.split(/\s/).forEach(function(i) {
			if ("ready" == i) return t(document).ready(r);
			var s = p(i);
			s.fn = r, s.sel = a, s.e in c && (r = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
			}), s.del = u;
			var l = u || r;
			s.proxy = function(t) {
				if (t = j(t), !t.isImmediatePropagationStopped()) {
					t.data = o;
					var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
					return i === !1 && (t.preventDefault(), t.stopPropagation()), i
				}
			}, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
		})
	}
	function y(t, e, n, i, r) {
		var o = l(t);
		(e || "").split(/\s/).forEach(function(e) {
			h(t, e, n, i).forEach(function(e) {
				delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
			})
		})
	}
	function j(e, i) {
		return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function(t, n) {
			var r = i[t];
			e[t] = function() {
				return this[n] = x, r && r.apply(i, arguments)
			}, e[n] = b
		}), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e
	}
	function S(t) {
		var e, i = {
			originalEvent: t
		};
		for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]);
		return j(i, t)
	}
	var n, e = 1,
		i = Array.prototype.slice,
		r = t.isFunction,
		o = function(t) {
			return "string" == typeof t
		},
		s = {},
		a = {},
		u = "onfocusin" in window,
		f = {
			focus: "focusin",
			blur: "focusout"
		},
		c = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
		add: v,
		remove: y
	}, t.proxy = function(e, n) {
		var s = 2 in arguments && i.call(arguments, 2);
		if (r(e)) {
			var a = function() {
					return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
				};
			return a._zid = l(e), a
		}
		if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, i) {
		return this.on(t, e, n, i, 1)
	};
	var x = function() {
			return !0
		},
		b = function() {
			return !1
		},
		w = /^([A-Z]|returnValue$|layer[XY]$)/,
		E = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, s, a, u, f) {
		var c, l, h = this;
		return e && !o(e) ? (t.each(e, function(t, e) {
			h.on(t, s, a, e, f)
		}), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function(n, r) {
			f && (c = function(t) {
				return y(r, t.type, u), u.apply(this, arguments)
			}), s && (l = function(e) {
				var n, o = t(e.target).closest(s, r).get(0);
				return o && o !== r ? (n = t.extend(S(e), {
					currentTarget: o,
					liveFired: r
				}), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
			}), v(r, e, u, a, s, l || c)
		}))
	}, t.fn.off = function(e, i, s) {
		var a = this;
		return e && !o(e) ? (t.each(e, function(t, e) {
			a.off(t, i, e)
		}), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function() {
			y(this, e, s, i)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function() {
			e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, n) {
		var i, r;
		return this.each(function(s, a) {
			i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function(t, e) {
				return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
			})
		}), r
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		o(t) || (e = t, t = e.type);
		var n = document.createEvent(a[t] || "Events"),
			i = !0;
		if (e) for (var r in e)"bubbles" == r ? i = !! e[r] : n[r] = e[r];
		return n.initEvent(t, i, !0), j(n)
	}
}(Zepto), function(t) {
	function h(e, n, i) {
		var r = t.Event(n);
		return t(e).trigger(r, i), !r.isDefaultPrevented()
	}
	function p(t, e, i, r) {
		return t.global ? h(e || n, i, r) : void 0
	}
	function d(e) {
		e.global && 0 === t.active++ && p(e, null, "ajaxStart")
	}
	function m(e) {
		e.global && !--t.active && p(e, null, "ajaxStop")
	}
	function g(t, e) {
		var n = e.context;
		return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e])
	}
	function v(t, e, n, i) {
		var r = n.context,
			o = "success";
		n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), x(o, e, n)
	}
	function y(t, e, n, i, r) {
		var o = i.context;
		i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), x(e, n, i)
	}
	function x(t, e, n) {
		var i = n.context;
		n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n)
	}
	function b() {}
	function w(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
	}
	function E(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function j(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
	}
	function S(e, n, i, r) {
		return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
			url: e,
			data: n,
			success: i,
			dataType: r
		}
	}
	function C(e, n, i, r) {
		var o, s = t.isArray(n),
			a = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u)
		})
	}
	var i, r, e = 0,
		n = window.document,
		o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		s = /^(?:text|application)\/javascript/i,
		a = /^(?:text|application)\/xml/i,
		u = "application/json",
		f = "text/html",
		c = /^\s*$/,
		l = n.createElement("a");
	l.href = window.location.href, t.active = 0, t.ajaxJSONP = function(i, r) {
		if (!("type" in i)) return t.ajax(i);
		var f, h, o = i.jsonpCallback,
			s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
			a = n.createElement("script"),
			u = window[s],
			c = function(e) {
				t(a).triggerHandler("error", e || "abort")
			},
			l = {
				abort: c
			};
		return r && r.promise(l), t(a).on("load error", function(e, n) {
			clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
		}), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function() {
			f = arguments
		}, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function() {
			c("timeout")
		}, i.timeout)), l)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: b,
		success: b,
		error: b,
		complete: b,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: u,
			xml: "application/xml, text/xml",
			html: f,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var a, o = t.extend({}, e || {}),
			s = t.Deferred && t.Deferred();
		for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
		d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), j(o);
		var u = o.dataType,
			f = /\?.+=\?/.test(o.url);
		if (f && (u = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == u) return f || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);
		var C, h = o.accepts[u],
			p = {},
			m = function(t, e) {
				p[t.toLowerCase()] = [t, e]
			},
			x = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
			S = o.xhr(),
			T = S.setRequestHeader;
		if (s && s.promise(S), o.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", h || "*/*"), (h = o.mimeType || h) && (h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(h)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && m("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (r in o.headers) m(r, o.headers[r]);
		if (S.setRequestHeader = m, S.onreadystatechange = function() {
			if (4 == S.readyState) {
				S.onreadystatechange = b, clearTimeout(C);
				var e, n = !1;
				if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == x) {
					u = u || w(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
					try {
						"script" == u ? (1, eval)(e) : "xml" == u ? e = S.responseXML : "json" == u && (e = c.test(e) ? null : t.parseJSON(e))
					} catch (i) {
						n = i
					}
					n ? y(n, "parsererror", S, o, s) : v(e, S, o, s)
				} else y(S.statusText || null, S.status ? "error" : "abort", S, o, s)
			}
		}, g(S, o) === !1) return S.abort(), y(null, "abort", S, o, s), S;
		if (o.xhrFields) for (r in o.xhrFields) S[r] = o.xhrFields[r];
		var N = "async" in o ? o.async : !0;
		S.open(o.type, o.url, N, o.username, o.password);
		for (r in p) T.apply(S, p[r]);
		return o.timeout > 0 && (C = setTimeout(function() {
			S.onreadystatechange = b, S.abort(), y(null, "timeout", S, o, s)
		}, o.timeout)), S.send(o.data ? o.data : null), S
	}, t.get = function() {
		return t.ajax(S.apply(null, arguments))
	}, t.post = function() {
		var e = S.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = S.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, i) {
		if (!this.length) return this;
		var a, r = this,
			s = e.split(/\s/),
			u = S(e, n, i),
			f = u.success;
		return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function(e) {
			r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
		}, t.ajax(u), this
	};
	var T = encodeURIComponent;
	t.param = function(e, n) {
		var i = [];
		return i.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(T(e) + "=" + T(n))
		}, C(i, e, n), i.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, i = [],
			r = function(t) {
				return t.forEach ? t.forEach(r) : void i.push({
					name: e,
					value: t
				})
			};
		return this[0] && t.each(this[0].elements, function(i, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
		}), i
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t) {
	"__proto__" in {} || t.extend(t.zepto, {
		Z: function(e, n) {
			return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
		},
		isZ: function(e) {
			return "array" === t.type(e) && "__Z" in e
		}
	});
	try {
		getComputedStyle(void 0)
	} catch (e) {
		var n = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return n(t)
			} catch (e) {
				return null
			}
		}
	}
}(Zepto);
define("zepto", function(){});

/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ? 
			'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		return ((" "+e.className+" ").indexOf(" "+c+" ") == -1)?false:true;
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();

function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS 

		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,

        //禁止某一方向的弹性运行
		BanLeft: true,  //禁止左的弹性运动
		BanRight: true, //禁止右的弹性运动
		BanTop: true,   //禁止上的弹性运动
        BanBottom:true  //禁止下的弹性运动






	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	if ( this.options.probeType == 3 ) {
		this.options.useTransition = false;	}

// INSERT POINT: NORMALIZATION

	// Some defaults	
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.1.3',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);

		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
			if ( e.button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this._transitionTime();

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;


	  
		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;

			if ( this.options.probeType == 1 ) {
				this._execEvent('scroll');
			}
		}

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}
/* REPLACE END: _move */

	},

	silieUpDown:function(){
		var y = this.y;
		
		if ( !this.hasVerticalScroll || y > 0 ) {
			this._execEvent('slideDown');
		} else if ( y < this.maxScrollY ) {
			this._execEvent('slideUp');
		}
	},
	
	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			this.silieUpDown();
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		
	  if(type==undefined && fn==undefined)
	  {
	  	this._events = {};
	  }
		
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;

		if ( !time || (this.options.useTransition && easing.style) ) {
			this._transitionTimingFunction(easing.style);
			this._transitionTime(time);
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {

	    // BanLeft: true,
	    //  BanRight: true,
	    //  BanTop: true,
	    //  BanBottom:true

	    //上
	    if (y > 0) {
	        if (!this.options.BanTop) {
	            y = 0;
	          
	        }
	    }


	    //下
	    //this.scrollerHeight   滚动条总高度      2240
	    //this.wrapperHeight    屏幕的高度        1251
	    //this.y                y轴的坐标         -989 
	    // this.wrapperHeight - this.y  >=this.scrollerHeight    到底部了
	    if (this.wrapperHeight - y >= this.scrollerHeight) {
	        if (!this.options.BanBottom) {
	            y = this.wrapperHeight - this.scrollerHeight;
	        }
	    }

	    if (x > 0) {
	        if (!this.options.BanLeft) {
	            x = 0;
	        }
	    }

	    if (this.wrapperWidth - x >= this.scrollerWidth) {
	        if (!this.options.BanRight) {
	            x = this.wrapperWidth - this.scrollerWidth;
	        }
	    }



		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},

	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			for ( var i = that.indicators.length; i--; ) {
				fn.call(that.indicators[i]);
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();
		e.stopPropagation();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			that._execEvent('scrollEnd');
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}

			if ( that.options.probeType == 3 ) {
				that._execEvent('scroll');
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);


		if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.scroller._execEvent('scroll');
		} else if ( this.scroller.options.probeType > 1 ) {
			this.scroller._execEvent('scroll');
		}


// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));	
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;




		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);
define("iscroll", function(){});

//define(function () {
    /*
    用途：检查输入字符串是否超出指定长度
    输入：
    s：字符串
    n：错误提示标签名
    l：验证长度
    返回：
    如果通过验证返回true,否则返回false
    */
    function IsOverLength(s, l) {
        if (s.length >= l) {
            return true;
        };
        return false;
    };
    /*
          用途：检查输入字符串是否为undefined
      输入：
      str:字符串,
      返回：
      如果是返回true,否则返回false*/
    function IsUndefined(str) {
        if (typeof (str) == 'undefined') {
            return true;
        };
    }
    /*
      用途：检查输入字符串是否为空为零或者非正数
      输入：
      str:字符串,
      n：错误提示标签名
      返回：
      如果全是空返回true,否则返回false
      */
    function IsNull(str) {
        if (str == "") {
            return true;
        }
        if (str == 0) {
            return true;
        }
        // var regu = "^[ ]+$";
        var reg = /^[0-9].*$/;
        if (!reg.test(str)) {
            return true;
        }
        return false;
    };
    /*
       用途：检查输入字符串是否为中文
       输入：
       str:字符串,
       返回：
       如果全是空返回true,否则返回false
       */
    function MatchChinese(str) {
        var reg = /^[\u4E00-\u9FFF]+$/;
        if (reg.test(str)) {
            return true;
        };
        return false;
    };
    /*匹配电话号码
     暂时第一位为1，第二位只有3578，总位数为11位
    */
    function PhoneNum(str) {
        var reg = /^[1][0-9]{10}$/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    };
    /*匹配电话号码
     暂时第一位为1到9，总位数为5到10位
    */
    function QQNum(str) {
        var reg = /^[1-9][0-9]{5,10}/;
        if (reg.test(str)) {
            return true;
        }
        return false;
    };
    
    /* 匹配邮箱*/
    function CheckMail(mail) {
        var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (reg.test(mail)) { return true; }
        return false;
    };

    /* 匹配纯数字 */
    function Number(number)
    {
        var reg = /[^\d]/g;
        if (!reg.test(number)) { return true;}
        return false;
    }
    /* 匹配身份证 */

    function IsCard(str)
    {
        var reg = /[xX1-9]{18}/gi
        if (!reg.test(str)) { return true; }
        return false;
    }

    /* 匹配邮政编码*/
    function CheckPostcode(str) {
        var reg = /^[1-9][0-9]{5}$/;
        if (reg.test(str)) {
            return true;
        };
        return false;
    };
    /*匹配银行卡号*/
    function CheckBnak(str) {
        var reg = /^\d{16}|\d{19}$/;
        if (reg.test(str)) {
            return true;
        };
        return false;
    }
    /*验证是否包含特殊字符*/
    function IsSpecialCharacter(s) {
        if (s == "") {
            return false;
        }

        var pattern = new RegExp("[`~!%@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        return pattern.test(s) ? false : true;
    }

//    return {
//        IsSpecialCharacter: IsSpecialCharacter, CheckBnak: CheckBnak, CheckPostcode: CheckPostcode, Number: Number, CheckMail: CheckMail, QQNum: QQNum, PhoneNum: PhoneNum, MatchChinese: MatchChinese, IsNull: IsNull, IsUndefined: IsUndefined, IsOverLength: IsOverLength
//    }
//});
define("valid_format", function(){});

/**
 * 选择列表插件
 * varstion 2.0.0
 * by Houfeng
 * Houfeng@DCloud.io
 */

(function($, window, document, undefined) {

	var MAX_EXCEED = 30;
	var VISIBLE_RANGE = 90;
	var DEFAULT_ITEM_HEIGHT = 40;
	var BLUR_WIDTH = 10;

	var rad2deg = $.rad2deg = function(rad) {
		return rad / (Math.PI / 180);
	};

	var deg2rad = $.deg2rad = function(deg) {
		return deg * (Math.PI / 180);
	};

	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();
	var isIos = (userAgent.indexOf('iphone') > -1 ||
			userAgent.indexOf('ipad') > -1 ||
			userAgent.indexOf('ipod') > -1) &&
		(platform.indexOf('iphone') > -1 ||
			platform.indexOf('ipad') > -1 ||
			platform.indexOf('ipod') > -1);
	//alert(isIos);

	var Picker = $.Picker = function(holder, options) {
		var self = this;
		self.holder = holder;
		self.options = options || {};
		self.init();
		self.initInertiaParams();
		self.calcElementItemPostion(true);
		self.bindEvent();
	};

	Picker.prototype.findElementItems = function() {
		var self = this;
		self.elementItems = [].slice.call(self.holder.querySelectorAll('li'));
		return self.elementItems;
	};

	Picker.prototype.init = function() {
		var self = this;
		self.list = self.holder.querySelector('ul');
		self.findElementItems();
		self.height = self.holder.offsetHeight;
		self.r = self.height / 2 - BLUR_WIDTH;
		self.d = self.r * 2;
		self.itemHeight = self.elementItems.length > 0 ? self.elementItems[0].offsetHeight : DEFAULT_ITEM_HEIGHT;
		self.itemAngle = parseInt(self.calcAngle(self.itemHeight * 0.8));
		self.hightlightRange = self.itemAngle / 2;
		self.visibleRange = VISIBLE_RANGE;
		self.beginAngle = 0;
		self.beginExceed = self.beginAngle - MAX_EXCEED;
		self.list.angle = self.beginAngle;
		if (isIos) {
			self.list.style.webkitTransformOrigin = "center center " + self.r + "px";
		}
	};

	Picker.prototype.calcElementItemPostion = function(andGenerateItms) {
		var self = this;
		if (andGenerateItms) {
			self.items = [];
		}
		self.elementItems.forEach(function(item) {
			var index = self.elementItems.indexOf(item);
			self.endAngle = self.itemAngle * index;
			item.angle = self.endAngle;
			item.style.webkitTransformOrigin = "center center -" + self.r + "px";
			item.style.webkitTransform = "translateZ(" + self.r + "px) rotateX(" + (-self.endAngle) + "deg)";
			if (andGenerateItms) {
				var dataItem = {};
				dataItem.text = item.innerHTML || '';
				dataItem.value = item.getAttribute('data-value') || dataItem.text;
				self.items.push(dataItem);
			}
		});
		self.endExceed = self.endAngle + MAX_EXCEED;
		self.calcElementItemVisibility(self.beginAngle);
	};

	Picker.prototype.calcAngle = function(c) {
		var self = this;
		var a = b = parseFloat(self.r);
		//直径的整倍数部分直接乘以 180
		c = Math.abs(c); //只算角度不关心正否值
		var intDeg = parseInt(c / self.d) * 180;
		c = c % self.d;
		//余弦
		var cosC = (a * a + b * b - c * c) / (2 * a * b);
		var angleC = intDeg + rad2deg(Math.acos(cosC));
		return angleC;
	};

	Picker.prototype.calcElementItemVisibility = function(angle) {
		var self = this;
		self.elementItems.forEach(function(item) {
			var difference = Math.abs(item.angle - angle);
			if (difference < self.hightlightRange) {
				item.classList.add('highlight');
			} else if (difference < self.visibleRange) {
				item.classList.add('visible');
				item.classList.remove('highlight');
			} else {
				item.classList.remove('highlight');
				item.classList.remove('visible');
			}
		});
	};

	Picker.prototype.setAngle = function(angle) {
		var self = this;
		self.list.angle = angle;
		self.list.style.webkitTransform = "perspective(1000px) rotateY(0deg) rotateX(" + angle + "deg)";
		self.calcElementItemVisibility(angle);
	};

	Picker.prototype.bindEvent = function() {
		var self = this;
		var lastAngle = 0;
		var startY = null;
		var isPicking = false;
		self.holder.addEventListener($.EVENT_START, function(event) {
			isPicking = true;
			event.preventDefault();
			self.list.style.webkitTransition = '';
			startY = (event.changedTouches ? event.changedTouches[0] : event).pageY;
			lastAngle = self.list.angle;
			self.updateInertiaParams(event, true);
		}, false);
		self.holder.addEventListener($.EVENT_END, function(event) {
			isPicking = false;
			event.preventDefault();
			self.startInertiaScroll(event);
		}, false);
		self.holder.addEventListener($.EVENT_CANCEL, function(event) {
			isPicking = false;
			event.preventDefault();
			self.startInertiaScroll(event);
		}, false);
		self.holder.addEventListener($.EVENT_MOVE, function(event) {
			if (!isPicking) {
				return;
			}
			event.preventDefault();
			var endY = (event.changedTouches ? event.changedTouches[0] : event).pageY;
			var dragRange = endY - startY;
			var dragAngle = self.calcAngle(dragRange);
			var newAngle = dragRange > 0 ? lastAngle - dragAngle : lastAngle + dragAngle;
			if (newAngle > self.endExceed) {
				newAngle = self.endExceed
			}
			if (newAngle < self.beginExceed) {
				newAngle = self.beginExceed
			}
			self.setAngle(newAngle);
			self.updateInertiaParams(event);
		}, false);
		//--
		self.list.addEventListener('tap', function(event) {
			elementItem = event.target;
			if (elementItem.tagName == 'LI') {
				self.setSelectedIndex(self.elementItems.indexOf(elementItem), 200);
			}
		}, false);
	};

	Picker.prototype.initInertiaParams = function() {
		var self = this;
		self.lastMoveTime = 0;
		self.lastMoveStart = 0;
		self.stopInertiaMove = false;
	};

	Picker.prototype.updateInertiaParams = function(event, isStart) {
		var self = this;
		var point = event.changedTouches ? event.changedTouches[0] : event;
		if (isStart) {
			self.lastMoveStart = point.pageY;
			self.lastMoveTime = event.timeStamp || Date.now();
			self.startAngle = self.list.angle;
		} else {
			var nowTime = event.timeStamp || Date.now();
			if (nowTime - self.lastMoveTime > 300) {
				self.lastMoveTime = nowTime;
				self.lastMoveStart = point.pageY;
			}
		}
		self.stopInertiaMove = true;
	};

	Picker.prototype.startInertiaScroll = function(event) {
		var self = this;
		var point = event.changedTouches ? event.changedTouches[0] : event;
		/** 
		 * 缓动代码
		 */
		var nowTime = event.timeStamp || Date.now();
		var v = (point.pageY - self.lastMoveStart) / (nowTime - self.lastMoveTime); //最后一段时间手指划动速度  
		var dir = v > 0 ? -1 : 1; //加速度方向  
		var deceleration = dir * 0.0006 * -1;
		var duration = Math.abs(v / deceleration); // 速度消减至0所需时间  
		var dist = v * duration / 2; //最终移动多少 
		var startAngle = self.list.angle;
		var distAngle = self.calcAngle(dist) * dir;
		//----
		var srcDistAngle = distAngle;
		if (startAngle + distAngle < self.beginExceed) {
			distAngle = self.beginExceed - startAngle;
			duration = duration * (distAngle / srcDistAngle) * 0.6;
		}
		if (startAngle + distAngle > self.endExceed) {
			distAngle = self.endExceed - startAngle;
			duration = duration * (distAngle / srcDistAngle) * 0.6;
		}
		//----
		if (distAngle == 0) {
			self.endScroll();
			return;
		}
		self.scrollDistAngle(nowTime, startAngle, distAngle, duration);
	};

	Picker.prototype.scrollDistAngle = function(nowTime, startAngle, distAngle, duration) {
		var self = this;
		self.stopInertiaMove = false;
		(function(nowTime, startAngle, distAngle, duration) {
			var frameInterval = 13;
			var stepCount = duration / frameInterval;
			var stepIndex = 0;
			(function inertiaMove() {
				if (self.stopInertiaMove) return;
				var newAngle = self.quartEaseOut(stepIndex, startAngle, distAngle, stepCount);
				self.setAngle(newAngle);
				stepIndex++;
				if (stepIndex > stepCount - 1 || newAngle < self.beginExceed || newAngle > self.endExceed) {
					self.endScroll();
					return;
				}
				setTimeout(inertiaMove, frameInterval);
			})();
		})(nowTime, startAngle, distAngle, duration);
	};

	Picker.prototype.quartEaseOut = function(t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	};

	Picker.prototype.endScroll = function() {
		var self = this;
		if (self.list.angle < self.beginAngle) {
			self.list.style.webkitTransition = "150ms ease-out";
			self.setAngle(self.beginAngle);
		} else if (self.list.angle > self.endAngle) {
			self.list.style.webkitTransition = "150ms ease-out";
			self.setAngle(self.endAngle);
		} else {
			var index = parseInt((self.list.angle / self.itemAngle).toFixed(0));
			self.list.style.webkitTransition = "100ms ease-out";
			self.setAngle(self.itemAngle * index);
		}
		self.triggerChange();
	};

	Picker.prototype.triggerChange = function(force) {
		var self = this;
		setTimeout(function() {
			var index = self.getSelectedIndex();
			var item = self.items[index];
			if ($.trigger && (index != self.lastIndex || force === true)) {
				$.trigger(self.holder, 'change', {
					"index": index,
					"item": item
				});
				//console.log('change:' + index);
			}
			self.lastIndex = index;
			typeof force === 'function' && force();
		}, 0);
	};

	Picker.prototype.correctAngle = function(angle) {
		var self = this;
		if (angle < self.beginAngle) {
			return self.beginAngle;
		} else if (angle > self.endAngle) {
			return self.endAngle;
		} else {
			return angle;
		}
	};

	Picker.prototype.setItems = function(items) {
		var self = this;
		self.items = items || [];
		var buffer = [];
		self.items.forEach(function(item) {
			if (item !== null && item !== undefined) {
				buffer.push('<li>' + (item.text || item) + '</li>');
			}
		});
		self.list.innerHTML = buffer.join('');
		self.findElementItems();
		self.calcElementItemPostion();
		self.setAngle(self.correctAngle(self.list.angle));
		self.triggerChange(true);
	};

	Picker.prototype.getItems = function() {
		var self = this;
		return self.items;
	};

	Picker.prototype.getSelectedIndex = function() {
		var self = this;
		return parseInt((self.list.angle / self.itemAngle).toFixed(0));
	};

	Picker.prototype.setSelectedIndex = function(index, duration, callback) {
		var self = this;
		self.list.style.webkitTransition = '';
		var angle = self.correctAngle(self.itemAngle * index);
		if (duration && duration > 0) {
			var distAngle = angle - self.list.angle;
			self.scrollDistAngle(Date.now(), self.list.angle, distAngle, duration);
		} else {
			self.setAngle(angle);
		}
		self.triggerChange(callback);
	};

	Picker.prototype.getSelectedItem = function() {
		var self = this;
		return self.items[self.getSelectedIndex()];
	};

	Picker.prototype.getSelectedValue = function() {
		var self = this;
		return (self.items[self.getSelectedIndex()] || {}).value;
	};

	Picker.prototype.getSelectedText = function() {
		var self = this;
		return (self.items[self.getSelectedIndex()] || {}).text;
	};

	Picker.prototype.setSelectedValue = function(value, duration, callback) {
		var self = this;
		for (var index in self.items) {
			var item = self.items[index];
			if (item.value == value) {
				self.setSelectedIndex(index, duration, callback);
				return;
			}
		}
	};

	if ($.fn) {
		$.fn.picker = function(options) {
			//遍历选择的元素
			this.each(function(i, element) {
				if (element.picker) return;
				if (options) {
					element.picker = new Picker(element, options);
				} else {
					var optionsText = element.getAttribute('data-picker-options');
					var _options = optionsText ? JSON.parse(optionsText) : {};
					element.picker = new Picker(element, _options);
				}
			});
			return this[0] ? this[0].picker : null;
		};

		//自动初始化
		$.ready(function() {
			$('.mui-picker').picker();
		});
	}

})(window.mui || window, window, document, undefined);
//end;
define("picker", function(){});

/**
 * 弹出选择列表插件
 * 此组件依赖 listpcker ，请在页面中先引入 mui.picker.css + mui.picker.js
 * varstion 1.0.1
 * by Houfeng
 * Houfeng@DCloud.io
 */

(function($, document) {

	//创建 DOM
	$.dom = function(str) {
		if (typeof(str) !== 'string') {
			if ((str instanceof Array) || (str[0] && str.length)) {
				return [].slice.call(str);
			} else {
				return [str];
			}
		}
		if (!$.__create_dom_div__) {
			$.__create_dom_div__ = document.createElement('div');
		}
		$.__create_dom_div__.innerHTML = str;
		return [].slice.call($.__create_dom_div__.childNodes);
	};

	var panelBuffer = '<div class="mui-poppicker">\
		<div class="mui-poppicker-header">\
			<button class="mui-btn mui-poppicker-btn-cancel">取消</button>\
			<button class="mui-btn mui-btn-blue mui-poppicker-btn-ok">确定</button>\
			<div class="mui-poppicker-clear"></div>\
		</div>\
		<div class="mui-poppicker-body">\
		</div>\
	</div>';

	var pickerBuffer = '<div class="mui-picker">\
		<div class="mui-picker-inner">\
			<div class="mui-pciker-rule mui-pciker-rule-ft"></div>\
			<ul class="mui-pciker-list">\
			</ul>\
			<div class="mui-pciker-rule mui-pciker-rule-bg"></div>\
		</div>\
	</div>';

	//定义弹出选择器类
	var PopPicker = $.PopPicker = $.Class.extend({
		//构造函数
		init: function(options) {
			var self = this;
			self.options = options || {};
			self.options.buttons = self.options.buttons || ['取消', '确定'];
			self.panel = $.dom(panelBuffer)[0];
			document.body.appendChild(self.panel);
			self.ok = self.panel.querySelector('.mui-poppicker-btn-ok');
			self.cancel = self.panel.querySelector('.mui-poppicker-btn-cancel');
			self.body = self.panel.querySelector('.mui-poppicker-body');
			self.mask = $.createMask();
			self.cancel.innerText = self.options.buttons[0];
			self.ok.innerText = self.options.buttons[1];
			self.cancel.addEventListener('tap', function(event) {
				self.hide();
			}, false);
			self.ok.addEventListener('tap', function(event) {
				if (self.callback) {
						var rs = self.callback(self.getSelectedItems());
						if (rs !== false) {
						self.hide();
					}
					
					
					
				}
			}, false);
			self.mask[0].addEventListener('tap', function() {
				self.hide();
			}, false);
			self._createPicker();
			//防止滚动穿透
			self.panel.addEventListener($.EVENT_START, function(event) {
				event.preventDefault();
			}, false);
			self.panel.addEventListener($.EVENT_MOVE, function(event) {
				event.preventDefault();
			}, false);
		},
		_createPicker: function() {
			var self = this;
			var layer = self.options.layer || 1;
			var width = (100 / layer) + '%';
			self.pickers = [];
			for (var i = 1; i <= layer; i++) {
				var pickerElement = $.dom(pickerBuffer)[0];
				pickerElement.style.width = width;
				self.body.appendChild(pickerElement);
				var picker = $(pickerElement).picker();
				self.pickers.push(picker);
				pickerElement.addEventListener('change', function(event) {
					var nextPickerElement = this.nextSibling;
					if (nextPickerElement && nextPickerElement.picker) {
						var eventData = event.detail || {};
						var preItem = eventData.item || {};
						nextPickerElement.picker.setItems(preItem.children);
					}
				}, false);
			}
		},
		//填充数据
		setData: function(data) {
			var self = this;
			data = data || [];
			self.pickers[0].setItems(data);
		},
		//获取选中的项（数组）
		getSelectedItems: function() {
			var self = this;
			var items = [];
			for (var i in self.pickers) {
				var picker = self.pickers[i];
				items.push(picker.getSelectedItem() || {});
			}
			return items;
		},
		//显示
		show: function(callback) {
			var self = this;
			self.callback = callback;
			self.mask.show();
			document.body.classList.add($.className('poppicker-active-for-page'));
			self.panel.classList.add($.className('active'));
			//处理物理返回键
			self.__back = $.back;
			$.back = function() {
				self.hide();
			};
		},
		//隐藏
		hide: function() {
			var self = this;
			if (self.disposed) return;
			self.panel.classList.remove($.className('active'));
			self.mask.close();
			document.body.classList.remove($.className('poppicker-active-for-page'));
			//处理物理返回键
			$.back=self.__back;
		},
		dispose: function() {
			var self = this;
			self.hide();
			setTimeout(function() {
				self.panel.parentNode.removeChild(self.panel);
				for (var name in self) {
					self[name] = null;
					delete self[name];
				};
				self.disposed = true;
			}, 300);
		}
	});

})(mui, document);
define("poppicker", function(){});

var cityData = [{
	value: '110000',
	text: '北京市',
	children: [{
		value: "110101",
		text: "东城区"
	}, {
		value: "110102",
		text: "西城区"
	}, {
		value: "110103",
		text: "崇文区"
	}, {
		value: "110104",
		text: "宣武区"
	}, {
		value: "110105",
		text: "朝阳区"
	}, {
		value: "110106",
		text: "丰台区"
	}, {
		value: "110107",
		text: "石景山区"
	}, {
		value: "110108",
		text: "海淀区"
	}, {
		value: "110109",
		text: "门头沟区"
	}, {
		value: "110111",
		text: "房山区"
	}, {
		value: "110112",
		text: "通州区"
	}, {
		value: "110113",
		text: "顺义区"
	}, {
		value: "110114",
		text: "昌平区"
	}, {
		value: "110115",
		text: "大兴区"
	}, {
		value: "110116",
		text: "怀柔区"
	}, {
		value: "110117",
		text: "平谷区"
	}, {
		value: "110228",
		text: "密云县"
	}, {
		value: "110229",
		text: "延庆县"
	}, {
		value: "110230",
		text: "其它区"
	}]
}, {
	value: '120000',
	text: '天津市',
	children: [{
		value: "120101",
		text: "和平区"
	}, {
		value: "120102",
		text: "河东区"
	}, {
		value: "120103",
		text: "河西区"
	}, {
		value: "120104",
		text: "南开区"
	}, {
		value: "120105",
		text: "河北区"
	}, {
		value: "120106",
		text: "红桥区"
	}, {
		value: "120107",
		text: "塘沽区"
	}, {
		value: "120108",
		text: "汉沽区"
	}, {
		value: "120109",
		text: "大港区"
	}, {
		value: "120110",
		text: "东丽区"
	}, {
		value: "120111",
		text: "西青区"
	}, {
		value: "120112",
		text: "津南区"
	}, {
		value: "120113",
		text: "北辰区"
	}, {
		value: "120114",
		text: "武清区"
	}, {
		value: "120115",
		text: "宝坻区"
	}, {
		value: "120116",
		text: "滨海新区"
	}, {
		value: "120221",
		text: "宁河县"
	}, {
		value: "120223",
		text: "静海县"
	}, {
		value: "120225",
		text: "蓟县"
	}, {
		value: "120226",
		text: "其它区"
	}]
}, {
	value: '130000',
	text: '河北省',
	children: [{
		value: "130100",
		text: "石家庄市"
	}, {
		value: "130200",
		text: "唐山市"
	}, {
		value: "130300",
		text: "秦皇岛市"
	}, {
		value: "130400",
		text: "邯郸市"
	}, {
		value: "130500",
		text: "邢台市"
	}, {
		value: "130600",
		text: "保定市"
	}, {
		value: "130700",
		text: "张家口市"
	}, {
		value: "130800",
		text: "承德市"
	}, {
		value: "130900",
		text: "沧州市"
	}, {
		value: "131000",
		text: "廊坊市"
	}, {
		value: "131100",
		text: "衡水市"
	}]
}, {
	value: '140000',
	text: '山西省',
	children: [{
		value: "140100",
		text: "太原市"
	}, {
		value: "140200",
		text: "大同市"
	}, {
		value: "140300",
		text: "阳泉市"
	}, {
		value: "140400",
		text: "长治市"
	}, {
		value: "140500",
		text: "晋城市"
	}, {
		value: "140600",
		text: "朔州市"
	}, {
		value: "140700",
		text: "晋中市"
	}, {
		value: "140800",
		text: "运城市"
	}, {
		value: "140900",
		text: "忻州市"
	}, {
		value: "141000",
		text: "临汾市"
	}, {
		value: "141100",
		text: "吕梁市"
	}]
}, {
	value: '150000',
	text: '内蒙古',
	children: [{
		value: "150100",
		text: "呼和浩特市"
	}, {
		value: "150200",
		text: "包头市"
	}, {
		value: "150300",
		text: "乌海市"
	}, {
		value: "150400",
		text: "赤峰市"
	}, {
		value: "150500",
		text: "通辽市"
	}, {
		value: "150600",
		text: "鄂尔多斯市"
	}, {
		value: "150700",
		text: "呼伦贝尔市"
	}, {
		value: "150800",
		text: "巴彦淖尔市"
	}, {
		value: "150900",
		text: "乌兰察布市"
	}, {
		value: "152200",
		text: "兴安盟"
	}, {
		value: "152500",
		text: "锡林郭勒盟"
	}, {
		value: "152900",
		text: "阿拉善盟"
	}]
}, {
	value: '210000',
	text: '辽宁省',
	children: [{
		value: "210100",
		text: "沈阳市"
	}, {
		value: "210200",
		text: "大连市"
	}, {
		value: "210300",
		text: "鞍山市"
	}, {
		value: "210400",
		text: "抚顺市"
	}, {
		value: "210500",
		text: "本溪市"
	}, {
		value: "210600",
		text: "丹东市"
	}, {
		value: "210700",
		text: "锦州市"
	}, {
		value: "210800",
		text: "营口市"
	}, {
		value: "210900",
		text: "阜新市"
	}, {
		value: "211000",
		text: "辽阳市"
	}, {
		value: "211100",
		text: "盘锦市"
	}, {
		value: "211200",
		text: "铁岭市"
	}, {
		value: "211300",
		text: "朝阳市"
	}, {
		value: "211400",
		text: "葫芦岛市"
	}]
}, {
	value: '220000',
	text: '吉林省',
	children: [{
		value: "220100",
		text: "长春市"
	}, {
		value: "220200",
		text: "吉林市"
	}, {
		value: "220300",
		text: "四平市"
	}, {
		value: "220400",
		text: "辽源市"
	}, {
		value: "220500",
		text: "通化市"
	}, {
		value: "220600",
		text: "白山市"
	}, {
		value: "220700",
		text: "松原市"
	}, {
		value: "220800",
		text: "白城市"
	}, {
		value: "222400",
		text: "延边朝鲜族自治州"
	}]
}, {
	value: '230000',
	text: '黑龙江省',
	children: [{
		value: "230100",
		text: "哈尔滨市"
	}, {
		value: "230200",
		text: "齐齐哈尔市"
	}, {
		value: "230300",
		text: "鸡西市"
	}, {
		value: "230400",
		text: "鹤岗市"
	}, {
		value: "230500",
		text: "双鸭山市"
	}, {
		value: "230600",
		text: "大庆市"
	}, {
		value: "230700",
		text: "伊春市"
	}, {
		value: "230800",
		text: "佳木斯市"
	}, {
		value: "230900",
		text: "七台河市"
	}, {
		value: "231000",
		text: "牡丹江市"
	}, {
		value: "231100",
		text: "黑河市"
	}, {
		value: "231200",
		text: "绥化市"
	}, {
		value: "232700",
		text: "大兴安岭地区"
	}]
}, {
	value: '310000',
	text: '上海市',
	children: [{
		value: "310101",
		text: "黄浦区"
	}, {
		value: "310103",
		text: "卢湾区"
	}, {
		value: "310104",
		text: "徐汇区"
	}, {
		value: "310105",
		text: "长宁区"
	}, {
		value: "310106",
		text: "静安区"
	}, {
		value: "310107",
		text: "普陀区"
	}, {
		value: "310108",
		text: "闸北区"
	}, {
		value: "310109",
		text: "虹口区"
	}, {
		value: "310110",
		text: "杨浦区"
	}, {
		value: "310112",
		text: "闵行区"
	}, {
		value: "310113",
		text: "宝山区"
	}, {
		value: "310114",
		text: "嘉定区"
	}, {
		value: "310115",
		text: "浦东新区"
	}, {
		value: "310116",
		text: "金山区"
	}, {
		value: "310117",
		text: "松江区"
	}, {
		value: "310118",
		text: "青浦区"
	}, {
		value: "310119",
		text: "南汇区"
	}, {
		value: "310120",
		text: "奉贤区"
	}, {
		value: "310152",
		text: "川沙区"
	}, {
		value: "310230",
		text: "崇明县"
	}, {
		value: "310231",
		text: "其它区"
	}]
}, {
	value: '320000',
	text: '江苏省',
	children: [{
		value: "320100",
		text: "南京市"
	}, {
		value: "320200",
		text: "无锡市"
	}, {
		value: "320300",
		text: "徐州市"
	}, {
		value: "320400",
		text: "常州市"
	}, {
		value: "320500",
		text: "苏州市"
	}, {
		value: "320600",
		text: "南通市"
	}, {
		value: "320700",
		text: "连云港市"
	}, {
		value: "320800",
		text: "淮安市"
	}, {
		value: "320900",
		text: "盐城市"
	}, {
		value: "321000",
		text: "扬州市"
	}, {
		value: "321100",
		text: "镇江市"
	}, {
		value: "321200",
		text: "泰州市"
	}, {
		value: "321300",
		text: "宿迁市"
	}]
}, {
	value: '330000',
	text: '浙江省',
	children: [{
		value: "330100",
		text: "杭州市"
	}, {
		value: "330200",
		text: "宁波市"
	}, {
		value: "330300",
		text: "温州市"
	}, {
		value: "330400",
		text: "嘉兴市"
	}, {
		value: "330500",
		text: "湖州市"
	}, {
		value: "330600",
		text: "绍兴市"
	}, {
		value: "330700",
		text: "金华市"
	}, {
		value: "330800",
		text: "衢州市"
	}, {
		value: "330900",
		text: "舟山市"
	}, {
		value: "331000",
		text: "台州市"
	}, {
		value: "331100",
		text: "丽水市"
	}]
}, {
	value: '340000',
	text: '安徽省',
	children: [{
		value: "340100",
		text: "合肥市"
	}, {
		value: "340200",
		text: "芜湖市"
	}, {
		value: "340300",
		text: "蚌埠市"
	}, {
		value: "340400",
		text: "淮南市"
	}, {
		value: "340500",
		text: "马鞍山市"
	}, {
		value: "340600",
		text: "淮北市"
	}, {
		value: "340700",
		text: "铜陵市"
	}, {
		value: "340800",
		text: "安庆市"
	}, {
		value: "341000",
		text: "黄山市"
	}, {
		value: "341100",
		text: "滁州市"
	}, {
		value: "341200",
		text: "阜阳市"
	}, {
		value: "341300",
		text: "宿州市"
	}, {
		value: "341500",
		text: "六安市"
	}, {
		value: "341600",
		text: "亳州市"
	}, {
		value: "341700",
		text: "池州市"
	}, {
		value: "341800",
		text: "宣城市"
	}]
}, {
	value: '350000',
	text: '福建省',
	children: [{
		value: "350100",
		text: "福州市"
	}, {
		value: "350200",
		text: "厦门市"
	}, {
		value: "350300",
		text: "莆田市"
	}, {
		value: "350400",
		text: "三明市"
	}, {
		value: "350500",
		text: "泉州市"
	}, {
		value: "350600",
		text: "漳州市"
	}, {
		value: "350700",
		text: "南平市"
	}, {
		value: "350800",
		text: "龙岩市"
	}, {
		value: "350900",
		text: "宁德市"
	}]
}, {
	value: '360000',
	text: '江西省',
	children: [{
		value: "360100",
		text: "南昌市"
	}, {
		value: "360200",
		text: "景德镇市"
	}, {
		value: "360300",
		text: "萍乡市"
	}, {
		value: "360400",
		text: "九江市"
	}, {
		value: "360500",
		text: "新余市"
	}, {
		value: "360600",
		text: "鹰潭市"
	}, {
		value: "360700",
		text: "赣州市"
	}, {
		value: "360800",
		text: "吉安市"
	}, {
		value: "360900",
		text: "宜春市"
	}, {
		value: "361000",
		text: "抚州市"
	}, {
		value: "361100",
		text: "上饶市"
	}]
}, {
	value: '370000',
	text: '山东省',
	children: [{
		value: "370100",
		text: "济南市"
	}, {
		value: "370200",
		text: "青岛市"
	}, {
		value: "370300",
		text: "淄博市"
	}, {
		value: "370400",
		text: "枣庄市"
	}, {
		value: "370500",
		text: "东营市"
	}, {
		value: "370600",
		text: "烟台市"
	}, {
		value: "370700",
		text: "潍坊市"
	}, {
		value: "370800",
		text: "济宁市"
	}, {
		value: "370900",
		text: "泰安市"
	}, {
		value: "371000",
		text: "威海市"
	}, {
		value: "371100",
		text: "日照市"
	}, {
		value: "371200",
		text: "莱芜市"
	}, {
		value: "371300",
		text: "临沂市"
	}, {
		value: "371400",
		text: "德州市"
	}, {
		value: "371500",
		text: "聊城市"
	}, {
		value: "371600",
		text: "滨州市"
	}, {
		value: "371700",
		text: "菏泽市"
	}]
}, {
	value: '410000',
	text: '河南省',
	children: [{
		value: "410100",
		text: "郑州市"
	}, {
		value: "410200",
		text: "开封市"
	}, {
		value: "410300",
		text: "洛阳市"
	}, {
		value: "410400",
		text: "平顶山市"
	}, {
		value: "410500",
		text: "安阳市"
	}, {
		value: "410600",
		text: "鹤壁市"
	}, {
		value: "410700",
		text: "新乡市"
	}, {
		value: "410800",
		text: "焦作市"
	}, {
		value: "410881",
		text: "济源市"
	}, {
		value: "410900",
		text: "濮阳市"
	}, {
		value: "411000",
		text: "许昌市"
	}, {
		value: "411100",
		text: "漯河市"
	}, {
		value: "411200",
		text: "三门峡市"
	}, {
		value: "411300",
		text: "南阳市"
	}, {
		value: "411400",
		text: "商丘市"
	}, {
		value: "411500",
		text: "信阳市"
	}, {
		value: "411600",
		text: "周口市"
	}, {
		value: "411700",
		text: "驻马店市"
	}]
}, {
	value: '420000',
	text: '湖北省',
	children: [{
		value: "420100",
		text: "武汉市"
	}, {
		value: "420200",
		text: "黄石市"
	}, {
		value: "420300",
		text: "十堰市"
	}, {
		value: "420500",
		text: "宜昌市"
	}, {
		value: "420600",
		text: "襄阳市"
	}, {
		value: "420700",
		text: "鄂州市"
	}, {
		value: "420800",
		text: "荆门市"
	}, {
		value: "420900",
		text: "孝感市"
	}, {
		value: "421000",
		text: "荆州市"
	}, {
		value: "421100",
		text: "黄冈市"
	}, {
		value: "421200",
		text: "咸宁市"
	}, {
		value: "421300",
		text: "随州市"
	}, {
		value: "422800",
		text: "恩施土家族苗族自治州"
	}, {
		value: "429004",
		text: "仙桃市"
	}, {
		value: "429005",
		text: "潜江市"
	}, {
		value: "429006",
		text: "天门市"
	}, {
		value: "429021",
		text: "神农架林区"
	}]
}, {
	value: '430000',
	text: '湖南省',
	children: [{
		value: "430100",
		text: "长沙市"
	}, {
		value: "430200",
		text: "株洲市"
	}, {
		value: "430300",
		text: "湘潭市"
	}, {
		value: "430400",
		text: "衡阳市"
	}, {
		value: "430500",
		text: "邵阳市"
	}, {
		value: "430600",
		text: "岳阳市"
	}, {
		value: "430700",
		text: "常德市"
	}, {
		value: "430800",
		text: "张家界市"
	}, {
		value: "430900",
		text: "益阳市"
	}, {
		value: "431000",
		text: "郴州市"
	}, {
		value: "431100",
		text: "永州市"
	}, {
		value: "431200",
		text: "怀化市"
	}, {
		value: "431300",
		text: "娄底市"
	}, {
		value: "433100",
		text: "湘西土家族苗族自治州"
	}]
}, {
	value: '440000',
	text: '广东省',
	children: [{
		value: "440100",
		text: "广州市"
	}, {
		value: "440200",
		text: "韶关市"
	}, {
		value: "440300",
		text: "深圳市"
	}, {
		value: "440400",
		text: "珠海市"
	}, {
		value: "440500",
		text: "汕头市"
	}, {
		value: "440600",
		text: "佛山市"
	}, {
		value: "440700",
		text: "江门市"
	}, {
		value: "440800",
		text: "湛江市"
	}, {
		value: "440900",
		text: "茂名市"
	}, {
		value: "441200",
		text: "肇庆市"
	}, {
		value: "441300",
		text: "惠州市"
	}, {
		value: "441400",
		text: "梅州市"
	}, {
		value: "441500",
		text: "汕尾市"
	}, {
		value: "441600",
		text: "河源市"
	}, {
		value: "441700",
		text: "阳江市"
	}, {
		value: "441800",
		text: "清远市"
	}, {
		value: "441900",
		text: "东莞市"
	}, {
		value: "442000",
		text: "中山市"
	}, {
		value: "445100",
		text: "潮州市"
	}, {
		value: "445200",
		text: "揭阳市"
	}, {
		value: "445300",
		text: "云浮市"
	}]
}, {
	value: '450000',
	text: '广西壮族',
	children: [{
		value: "450100",
		text: "南宁市"
	}, {
		value: "450200",
		text: "柳州市"
	}, {
		value: "450300",
		text: "桂林市"
	}, {
		value: "450400",
		text: "梧州市"
	}, {
		value: "450500",
		text: "北海市"
	}, {
		value: "450600",
		text: "防城港市"
	}, {
		value: "450700",
		text: "钦州市"
	}, {
		value: "450800",
		text: "贵港市"
	}, {
		value: "450900",
		text: "玉林市"
	}, {
		value: "451000",
		text: "百色市"
	}, {
		value: "451100",
		text: "贺州市"
	}, {
		value: "451200",
		text: "河池市"
	}, {
		value: "451300",
		text: "来宾市"
	}, {
		value: "451400",
		text: "崇左市"
	}]
}, {
	value: '460000',
	text: '海南省',
	children: [{
		value: "460100",
		text: "海口市"
	}, {
		value: "460200",
		text: "三亚市"
	}, {
		value: "469001",
		text: "五指山市"
	}, {
		value: "469002",
		text: "琼海市"
	}, {
		value: "469003",
		text: "儋州市"
	}, {
		value: "469005",
		text: "文昌市"
	}, {
		value: "469006",
		text: "万宁市"
	}, {
		value: "469007",
		text: "东方市"
	}, {
		value: "469025",
		text: "定安县"
	}, {
		value: "469026",
		text: "屯昌县"
	}, {
		value: "469027",
		text: "澄迈县"
	}, {
		value: "469028",
		text: "临高县"
	}, {
		value: "469030",
		text: "白沙黎族自治县"
	}, {
		value: "469031",
		text: "昌江黎族自治县"
	}, {
		value: "469033",
		text: "乐东黎族自治县"
	}, {
		value: "469034",
		text: "陵水黎族自治县"
	}, {
		value: "469035",
		text: "保亭黎族苗族自治县"
	}, {
		value: "469036",
		text: "琼中黎族苗族自治县"
	}, {
		value: "469037",
		text: "西沙群岛"
	}, {
		value: "469038",
		text: "南沙群岛"
	}, {
		value: "469039",
		text: "中沙群岛的岛礁及其海域"
	}]
}, {
	value: '500000',
	text: '重庆',
	children: [{
		value: "500101",
		text: "万州区"
	}, {
		value: "500102",
		text: "涪陵区"
	}, {
		value: "500103",
		text: "渝中区"
	}, {
		value: "500104",
		text: "大渡口区"
	}, {
		value: "500105",
		text: "江北区"
	}, {
		value: "500106",
		text: "沙坪坝区"
	}, {
		value: "500107",
		text: "九龙坡区"
	}, {
		value: "500108",
		text: "南岸区"
	}, {
		value: "500109",
		text: "北碚区"
	}, {
		value: "500110",
		text: "万盛区"
	}, {
		value: "500111",
		text: "双桥区"
	}, {
		value: "500112",
		text: "渝北区"
	}, {
		value: "500113",
		text: "巴南区"
	}, {
		value: "500114",
		text: "黔江区"
	}, {
		value: "500115",
		text: "长寿区"
	}, {
		value: "500222",
		text: "綦江县"
	}, {
		value: "500223",
		text: "潼南县"
	}, {
		value: "500224",
		text: "铜梁县"
	}, {
		value: "500225",
		text: "大足县"
	}, {
		value: "500226",
		text: "荣昌县"
	}, {
		value: "500227",
		text: "璧山县"
	}, {
		value: "500228",
		text: "梁平县"
	}, {
		value: "500229",
		text: "城口县"
	}, {
		value: "500230",
		text: "丰都县"
	}, {
		value: "500231",
		text: "垫江县"
	}, {
		value: "500232",
		text: "武隆县"
	}, {
		value: "500233",
		text: "忠县"
	}, {
		value: "500234",
		text: "开县"
	}, {
		value: "500235",
		text: "云阳县"
	}, {
		value: "500236",
		text: "奉节县"
	}, {
		value: "500237",
		text: "巫山县"
	}, {
		value: "500238",
		text: "巫溪县"
	}, {
		value: "500240",
		text: "石柱土家族自治县"
	}, {
		value: "500241",
		text: "秀山土家族苗族自治县"
	}, {
		value: "500242",
		text: "酉阳土家族苗族自治县"
	}, {
		value: "500243",
		text: "彭水苗族土家族自治县"
	}, {
		value: "500381",
		text: "江津区"
	}, {
		value: "500382",
		text: "合川区"
	}, {
		value: "500383",
		text: "永川区"
	}, {
		value: "500384",
		text: "南川区"
	}, {
		value: "500385",
		text: "其它区"
	}]
}, {
	value: '510000',
	text: '四川省',
	children: [{
		value: "510100",
		text: "成都市"
	}, {
		value: "510300",
		text: "自贡市"
	}, {
		value: "510400",
		text: "攀枝花市"
	}, {
		value: "510500",
		text: "泸州市"
	}, {
		value: "510600",
		text: "德阳市"
	}, {
		value: "510700",
		text: "绵阳市"
	}, {
		value: "510800",
		text: "广元市"
	}, {
		value: "510900",
		text: "遂宁市"
	}, {
		value: "511000",
		text: "内江市"
	}, {
		value: "511100",
		text: "乐山市"
	}, {
		value: "511300",
		text: "南充市"
	}, {
		value: "511400",
		text: "眉山市"
	}, {
		value: "511500",
		text: "宜宾市"
	}, {
		value: "511600",
		text: "广安市"
	}, {
		value: "511700",
		text: "达州市"
	}, {
		value: "511800",
		text: "雅安市"
	}, {
		value: "511900",
		text: "巴中市"
	}, {
		value: "512000",
		text: "资阳市"
	}, {
		value: "513200",
		text: "阿坝藏族羌族自治州"
	}, {
		value: "513300",
		text: "甘孜藏族自治州"
	}, {
		value: "513400",
		text: "凉山彝族自治州"
	}]
}, {
	value: '520000',
	text: '贵州省',
	children: [{
		value: "520100",
		text: "贵阳市"
	}, {
		value: "520200",
		text: "六盘水市"
	}, {
		value: "520300",
		text: "遵义市"
	}, {
		value: "520400",
		text: "安顺市"
	}, {
		value: "522200",
		text: "铜仁地区"
	}, {
		value: "522300",
		text: "黔西南布依族苗族自治州"
	}, {
		value: "522400",
		text: "毕节地区"
	}, {
		value: "522600",
		text: "黔东南苗族侗族自治州"
	}, {
		value: "522700",
		text: "黔南布依族苗族自治州"
	}]
}, {
	value: '530000',
	text: '云南省',
	children: [{
		value: "530100",
		text: "昆明市"
	}, {
		value: "530300",
		text: "曲靖市"
	}, {
		value: "530400",
		text: "玉溪市"
	}, {
		value: "530500",
		text: "保山市"
	}, {
		value: "530600",
		text: "昭通市"
	}, {
		value: "530700",
		text: "丽江市"
	}, {
		value: "530800",
		text: "普洱市"
	}, {
		value: "530900",
		text: "临沧市"
	}, {
		value: "532300",
		text: "楚雄彝族自治州"
	}, {
		value: "532500",
		text: "红河哈尼族彝族自治州"
	}, {
		value: "532600",
		text: "文山壮族苗族自治州"
	}, {
		value: "532800",
		text: "西双版纳傣族自治州"
	}, {
		value: "532900",
		text: "大理白族自治州"
	}, {
		value: "533100",
		text: "德宏傣族景颇族自治州"
	}, {
		value: "533300",
		text: "怒江傈僳族自治州"
	}, {
		value: "533400",
		text: "迪庆藏族自治州"
	}]
}, {
	value: '540000',
	text: '西藏',
	children: [{
		value: "540100",
		text: "拉萨市"
	}, {
		value: "542100",
		text: "昌都地区"
	}, {
		value: "542200",
		text: "山南地区"
	}, {
		value: "542300",
		text: "日喀则地区"
	}, {
		value: "542400",
		text: "那曲地区"
	}, {
		value: "542500",
		text: "阿里地区"
	}, {
		value: "542600",
		text: "林芝地区"
	}]
}, {
	value: '610000',
	text: '陕西省',
	children: [{
		value: "610100",
		text: "西安市"
	}, {
		value: "610200",
		text: "铜川市"
	}, {
		value: "610300",
		text: "宝鸡市"
	}, {
		value: "610400",
		text: "咸阳市"
	}, {
		value: "610500",
		text: "渭南市"
	}, {
		value: "610600",
		text: "延安市"
	}, {
		value: "610700",
		text: "汉中市"
	}, {
		value: "610800",
		text: "榆林市"
	}, {
		value: "610900",
		text: "安康市"
	}, {
		value: "611000",
		text: "商洛市"
	}]
}, {
	value: '620000',
	text: '甘肃省',
	children: [{
		value: "620100",
		text: "兰州市"
	}, {
		value: "620200",
		text: "嘉峪关市"
	}, {
		value: "620300",
		text: "金昌市"
	}, {
		value: "620400",
		text: "白银市"
	}, {
		value: "620500",
		text: "天水市"
	}, {
		value: "620600",
		text: "武威市"
	}, {
		value: "620700",
		text: "张掖市"
	}, {
		value: "620800",
		text: "平凉市"
	}, {
		value: "620900",
		text: "酒泉市"
	}, {
		value: "621000",
		text: "庆阳市"
	}, {
		value: "621100",
		text: "定西市"
	}, {
		value: "621200",
		text: "陇南市"
	}, {
		value: "622900",
		text: "临夏回族自治州"
	}, {
		value: "623000",
		text: "甘南藏族自治州"
	}]
}, {
	value: '630000',
	text: '青海省',
	children: [{
		value: "630100",
		text: "西宁市"
	}, {
		value: "632100",
		text: "海东地区"
	}, {
		value: "632200",
		text: "海北藏族自治州"
	}, {
		value: "632300",
		text: "黄南藏族自治州"
	}, {
		value: "632500",
		text: "海南藏族自治州"
	}, {
		value: "632600",
		text: "果洛藏族自治州"
	}, {
		value: "632700",
		text: "玉树藏族自治州"
	}, {
		value: "632800",
		text: "海西蒙古族藏族自治州"
	}]
}, {
	value: '640000',
	text: '宁夏',
	children: [{
		value: "640100",
		text: "银川市"
	}, {
		value: "640200",
		text: "石嘴山市"
	}, {
		value: "640300",
		text: "吴忠市"
	}, {
		value: "640400",
		text: "固原市"
	}, {
		value: "640500",
		text: "中卫市"
	}]
}, {
	value: '650000',
	text: '新疆',
	children: [{
		value: "650100",
		text: "乌鲁木齐市"
	}, {
		value: "650200",
		text: "克拉玛依市"
	}, {
		value: "652100",
		text: "吐鲁番地区"
	}, {
		value: "652200",
		text: "哈密地区"
	}, {
		value: "652300",
		text: "昌吉回族自治州"
	}, {
		value: "652700",
		text: "博尔塔拉蒙古自治州"
	}, {
		value: "652800",
		text: "巴音郭楞蒙古自治州"
	}, {
		value: "652900",
		text: "阿克苏地区"
	}, {
		value: "653000",
		text: "克孜勒苏柯尔克孜自治州"
	}, {
		value: "653100",
		text: "喀什地区"
	}, {
		value: "653200",
		text: "和田地区"
	}, {
		value: "654000",
		text: "伊犁哈萨克自治州"
	}, {
		value: "654200",
		text: "塔城地区"
	}, {
		value: "654300",
		text: "阿勒泰地区"
	}, {
		value: "659001",
		text: "石河子市"
	}, {
		value: "659002",
		text: "阿拉尔市"
	}, {
		value: "659003",
		text: "图木舒克市"
	}, {
		value: "659004",
		text: "五家渠市"
	}]
}, {
	value: '710000',
	text: '台湾省',
	children: [{
		value: "710100",
		text: "台北市"
	}, {
		value: "710200",
		text: "高雄市"
	}, {
		value: "710300",
		text: "台南市"
	}, {
		value: "710400",
		text: "台中市"
	}, {
		value: "710500",
		text: "金门县"
	}, {
		value: "710600",
		text: "南投县"
	}, {
		value: "710700",
		text: "基隆市"
	}, {
		value: "710800",
		text: "新竹市"
	}, {
		value: "710900",
		text: "嘉义市"
	}, {
		value: "711100",
		text: "新北市"
	}, {
		value: "711200",
		text: "宜兰县"
	}, {
		value: "711300",
		text: "新竹县"
	}, {
		value: "711400",
		text: "桃园县"
	}, {
		value: "711500",
		text: "苗栗县"
	}, {
		value: "711700",
		text: "彰化县"
	}, {
		value: "711900",
		text: "嘉义县"
	}, {
		value: "712100",
		text: "云林县"
	}, {
		value: "712400",
		text: "屏东县"
	}, {
		value: "712500",
		text: "台东县"
	}, {
		value: "712600",
		text: "花莲县"
	}, {
		value: "712700",
		text: "澎湖县"
	}]
}, {
	value: '810000',
	text: '香港',
	children: [{
		value: "810100",
		text: "香港岛"
	}, {
		value: "810200",
		text: "九龙"
	}, {
		value: "810300",
		text: "新界"
	}]
}, {
	value: '820000',
	text: '澳门',
	children: [{
		value: "820100",
		text: "澳门半岛"
	}, {
		value: "820200",
		text: "离岛"
	}]
}, {
	value: '990000',
	text: '海外',
	children: [{
		value: "990100",
		text: "海外"
	}]
}];
define("city", function(){});

var cityData3 = [{
	value: '110000',
	text: '北京市',
	children: [{
		value: "110101",
		text: "北京市",
		children: [{
			value: "110101",
			text: "东城区"
		}, {
			value: "110102",
			text: "西城区"
		}, {
			value: "110103",
			text: "崇文区"
		}, {
			value: "110104",
			text: "宣武区"
		}, {
			value: "110105",
			text: "朝阳区"
		}, {
			value: "110106",
			text: "丰台区"
		}, {
			value: "110107",
			text: "石景山区"
		}, {
			value: "110108",
			text: "海淀区"
		}, {
			value: "110109",
			text: "门头沟区"
		}, {
			value: "110111",
			text: "房山区"
		}, {
			value: "110112",
			text: "通州区"
		}, {
			value: "110113",
			text: "顺义区"
		}, {
			value: "110114",
			text: "昌平区"
		}, {
			value: "110115",
			text: "大兴区"
		}, {
			value: "110116",
			text: "怀柔区"
		}, {
			value: "110117",
			text: "平谷区"
		}, {
			value: "110228",
			text: "密云县"
		}, {
			value: "110229",
			text: "延庆县"
		}, {
			value: "110230",
			text: "其它区"
		}]
	}]
}, {
	value: '120000',
	text: '天津市',
	children: [{
		value: "120100",
		text: "天津市",
		children: [{
			value: "120101",
			text: "和平区"
		}, {
			value: "120102",
			text: "河东区"
		}, {
			value: "120103",
			text: "河西区"
		}, {
			value: "120104",
			text: "南开区"
		}, {
			value: "120105",
			text: "河北区"
		}, {
			value: "120106",
			text: "红桥区"
		}, {
			value: "120107",
			text: "塘沽区"
		}, {
			value: "120108",
			text: "汉沽区"
		}, {
			value: "120109",
			text: "大港区"
		}, {
			value: "120110",
			text: "东丽区"
		}, {
			value: "120111",
			text: "西青区"
		}, {
			value: "120112",
			text: "津南区"
		}, {
			value: "120113",
			text: "北辰区"
		}, {
			value: "120114",
			text: "武清区"
		}, {
			value: "120115",
			text: "宝坻区"
		}, {
			value: "120116",
			text: "滨海新区"
		}, {
			value: "120221",
			text: "宁河县"
		}, {
			value: "120223",
			text: "静海县"
		}, {
			value: "120225",
			text: "蓟县"
		}, {
			value: "120226",
			text: "其它区"
		}]
	}]
}, {
	value: '130000',
	text: '河北省',
	children: [{
		value: "130100",
		text: "石家庄市",
		children: [{
			value: "130102",
			text: "长安区"
		}, {
			value: "130103",
			text: "桥东区"
		}, {
			value: "130104",
			text: "桥西区"
		}, {
			value: "130105",
			text: "新华区"
		}, {
			value: "130107",
			text: "井陉矿区"
		}, {
			value: "130108",
			text: "裕华区"
		}, {
			value: "130121",
			text: "井陉县"
		}, {
			value: "130123",
			text: "正定县"
		}, {
			value: "130124",
			text: "栾城县"
		}, {
			value: "130125",
			text: "行唐县"
		}, {
			value: "130126",
			text: "灵寿县"
		}, {
			value: "130127",
			text: "高邑县"
		}, {
			value: "130128",
			text: "深泽县"
		}, {
			value: "130129",
			text: "赞皇县"
		}, {
			value: "130130",
			text: "无极县"
		}, {
			value: "130131",
			text: "平山县"
		}, {
			value: "130132",
			text: "元氏县"
		}, {
			value: "130133",
			text: "赵县"
		}, {
			value: "130181",
			text: "辛集市"
		}, {
			value: "130182",
			text: "藁城市"
		}, {
			value: "130183",
			text: "晋州市"
		}, {
			value: "130184",
			text: "新乐市"
		}, {
			value: "130185",
			text: "鹿泉市"
		}, {
			value: "130186",
			text: "其它区"
		}]
	}, {
		value: "130200",
		text: "唐山市",
		children: [{
			value: "130202",
			text: "路南区"
		}, {
			value: "130203",
			text: "路北区"
		}, {
			value: "130204",
			text: "古冶区"
		}, {
			value: "130205",
			text: "开平区"
		}, {
			value: "130207",
			text: "丰南区"
		}, {
			value: "130208",
			text: "丰润区"
		}, {
			value: "130223",
			text: "滦县"
		}, {
			value: "130224",
			text: "滦南县"
		}, {
			value: "130225",
			text: "乐亭县"
		}, {
			value: "130227",
			text: "迁西县"
		}, {
			value: "130229",
			text: "玉田县"
		}, {
			value: "130230",
			text: "唐海县"
		}, {
			value: "130281",
			text: "遵化市"
		}, {
			value: "130283",
			text: "迁安市"
		}, {
			value: "130284",
			text: "其它区"
		}]
	}, {
		value: "130300",
		text: "秦皇岛市",
		children: [{
			value: "130302",
			text: "海港区"
		}, {
			value: "130303",
			text: "山海关区"
		}, {
			value: "130304",
			text: "北戴河区"
		}, {
			value: "130321",
			text: "青龙满族自治县"
		}, {
			value: "130322",
			text: "昌黎县"
		}, {
			value: "130323",
			text: "抚宁县"
		}, {
			value: "130324",
			text: "卢龙县"
		}, {
			value: "130398",
			text: "其它区"
		}, {
			value: "130399",
			text: "经济技术开发区"
		}]
	}, {
		value: "130400",
		text: "邯郸市",
		children: [{
			value: "130402",
			text: "邯山区"
		}, {
			value: "130403",
			text: "丛台区"
		}, {
			value: "130404",
			text: "复兴区"
		}, {
			value: "130406",
			text: "峰峰矿区"
		}, {
			value: "130421",
			text: "邯郸县"
		}, {
			value: "130423",
			text: "临漳县"
		}, {
			value: "130424",
			text: "成安县"
		}, {
			value: "130425",
			text: "大名县"
		}, {
			value: "130426",
			text: "涉县"
		}, {
			value: "130427",
			text: "磁县"
		}, {
			value: "130428",
			text: "肥乡县"
		}, {
			value: "130429",
			text: "永年县"
		}, {
			value: "130430",
			text: "邱县"
		}, {
			value: "130431",
			text: "鸡泽县"
		}, {
			value: "130432",
			text: "广平县"
		}, {
			value: "130433",
			text: "馆陶县"
		}, {
			value: "130434",
			text: "魏县"
		}, {
			value: "130435",
			text: "曲周县"
		}, {
			value: "130481",
			text: "武安市"
		}, {
			value: "130482",
			text: "其它区"
		}]
	}, {
		value: "130500",
		text: "邢台市",
		children: [{
			value: "130502",
			text: "桥东区"
		}, {
			value: "130503",
			text: "桥西区"
		}, {
			value: "130521",
			text: "邢台县"
		}, {
			value: "130522",
			text: "临城县"
		}, {
			value: "130523",
			text: "内丘县"
		}, {
			value: "130524",
			text: "柏乡县"
		}, {
			value: "130525",
			text: "隆尧县"
		}, {
			value: "130526",
			text: "任县"
		}, {
			value: "130527",
			text: "南和县"
		}, {
			value: "130528",
			text: "宁晋县"
		}, {
			value: "130529",
			text: "巨鹿县"
		}, {
			value: "130530",
			text: "新河县"
		}, {
			value: "130531",
			text: "广宗县"
		}, {
			value: "130532",
			text: "平乡县"
		}, {
			value: "130533",
			text: "威县"
		}, {
			value: "130534",
			text: "清河县"
		}, {
			value: "130535",
			text: "临西县"
		}, {
			value: "130581",
			text: "南宫市"
		}, {
			value: "130582",
			text: "沙河市"
		}, {
			value: "130583",
			text: "其它区"
		}]
	}, {
		value: "130600",
		text: "保定市",
		children: [{
			value: "130602",
			text: "新市区"
		}, {
			value: "130603",
			text: "北市区"
		}, {
			value: "130604",
			text: "南市区"
		}, {
			value: "130621",
			text: "满城县"
		}, {
			value: "130622",
			text: "清苑县"
		}, {
			value: "130623",
			text: "涞水县"
		}, {
			value: "130624",
			text: "阜平县"
		}, {
			value: "130625",
			text: "徐水县"
		}, {
			value: "130626",
			text: "定兴县"
		}, {
			value: "130627",
			text: "唐县"
		}, {
			value: "130628",
			text: "高阳县"
		}, {
			value: "130629",
			text: "容城县"
		}, {
			value: "130630",
			text: "涞源县"
		}, {
			value: "130631",
			text: "望都县"
		}, {
			value: "130632",
			text: "安新县"
		}, {
			value: "130633",
			text: "易县"
		}, {
			value: "130634",
			text: "曲阳县"
		}, {
			value: "130635",
			text: "蠡县"
		}, {
			value: "130636",
			text: "顺平县"
		}, {
			value: "130637",
			text: "博野县"
		}, {
			value: "130638",
			text: "雄县"
		}, {
			value: "130681",
			text: "涿州市"
		}, {
			value: "130682",
			text: "定州市"
		}, {
			value: "130683",
			text: "安国市"
		}, {
			value: "130684",
			text: "高碑店市"
		}, {
			value: "130698",
			text: "高开区"
		}, {
			value: "130699",
			text: "其它区"
		}]
	}, {
		value: "130700",
		text: "张家口市",
		children: [{
			value: "130702",
			text: "桥东区"
		}, {
			value: "130703",
			text: "桥西区"
		}, {
			value: "130705",
			text: "宣化区"
		}, {
			value: "130706",
			text: "下花园区"
		}, {
			value: "130721",
			text: "宣化县"
		}, {
			value: "130722",
			text: "张北县"
		}, {
			value: "130723",
			text: "康保县"
		}, {
			value: "130724",
			text: "沽源县"
		}, {
			value: "130725",
			text: "尚义县"
		}, {
			value: "130726",
			text: "蔚县"
		}, {
			value: "130727",
			text: "阳原县"
		}, {
			value: "130728",
			text: "怀安县"
		}, {
			value: "130729",
			text: "万全县"
		}, {
			value: "130730",
			text: "怀来县"
		}, {
			value: "130731",
			text: "涿鹿县"
		}, {
			value: "130732",
			text: "赤城县"
		}, {
			value: "130733",
			text: "崇礼县"
		}, {
			value: "130734",
			text: "其它区"
		}]
	}, {
		value: "130800",
		text: "承德市",
		children: [{
			value: "130802",
			text: "双桥区"
		}, {
			value: "130803",
			text: "双滦区"
		}, {
			value: "130804",
			text: "鹰手营子矿区"
		}, {
			value: "130821",
			text: "承德县"
		}, {
			value: "130822",
			text: "兴隆县"
		}, {
			value: "130823",
			text: "平泉县"
		}, {
			value: "130824",
			text: "滦平县"
		}, {
			value: "130825",
			text: "隆化县"
		}, {
			value: "130826",
			text: "丰宁满族自治县"
		}, {
			value: "130827",
			text: "宽城满族自治县"
		}, {
			value: "130828",
			text: "围场满族蒙古族自治县"
		}, {
			value: "130829",
			text: "其它区"
		}]
	}, {
		value: "130900",
		text: "沧州市",
		children: [{
			value: "130902",
			text: "新华区"
		}, {
			value: "130903",
			text: "运河区"
		}, {
			value: "130921",
			text: "沧县"
		}, {
			value: "130922",
			text: "青县"
		}, {
			value: "130923",
			text: "东光县"
		}, {
			value: "130924",
			text: "海兴县"
		}, {
			value: "130925",
			text: "盐山县"
		}, {
			value: "130926",
			text: "肃宁县"
		}, {
			value: "130927",
			text: "南皮县"
		}, {
			value: "130928",
			text: "吴桥县"
		}, {
			value: "130929",
			text: "献县"
		}, {
			value: "130930",
			text: "孟村回族自治县"
		}, {
			value: "130981",
			text: "泊头市"
		}, {
			value: "130982",
			text: "任丘市"
		}, {
			value: "130983",
			text: "黄骅市"
		}, {
			value: "130984",
			text: "河间市"
		}, {
			value: "130985",
			text: "其它区"
		}]
	}, {
		value: "131000",
		text: "廊坊市",
		children: [{
			value: "131002",
			text: "安次区"
		}, {
			value: "131003",
			text: "广阳区"
		}, {
			value: "131022",
			text: "固安县"
		}, {
			value: "131023",
			text: "永清县"
		}, {
			value: "131024",
			text: "香河县"
		}, {
			value: "131025",
			text: "大城县"
		}, {
			value: "131026",
			text: "文安县"
		}, {
			value: "131028",
			text: "大厂回族自治县"
		}, {
			value: "131051",
			text: "开发区"
		}, {
			value: "131052",
			text: "燕郊经济技术开发区"
		}, {
			value: "131081",
			text: "霸州市"
		}, {
			value: "131082",
			text: "三河市"
		}, {
			value: "131083",
			text: "其它区"
		}]
	}, {
		value: "131100",
		text: "衡水市",
		children: [{
			value: "131102",
			text: "桃城区"
		}, {
			value: "131121",
			text: "枣强县"
		}, {
			value: "131122",
			text: "武邑县"
		}, {
			value: "131123",
			text: "武强县"
		}, {
			value: "131124",
			text: "饶阳县"
		}, {
			value: "131125",
			text: "安平县"
		}, {
			value: "131126",
			text: "故城县"
		}, {
			value: "131127",
			text: "景县"
		}, {
			value: "131128",
			text: "阜城县"
		}, {
			value: "131181",
			text: "冀州市"
		}, {
			value: "131182",
			text: "深州市"
		}, {
			value: "131183",
			text: "其它区"
		}]
	}]
}, {
	value: '140000',
	text: '山西省',
	children: [{
		value: "140100",
		text: "太原市",
		children: [{
			value: "140105",
			text: "小店区"
		}, {
			value: "140106",
			text: "迎泽区"
		}, {
			value: "140107",
			text: "杏花岭区"
		}, {
			value: "140108",
			text: "尖草坪区"
		}, {
			value: "140109",
			text: "万柏林区"
		}, {
			value: "140110",
			text: "晋源区"
		}, {
			value: "140121",
			text: "清徐县"
		}, {
			value: "140122",
			text: "阳曲县"
		}, {
			value: "140123",
			text: "娄烦县"
		}, {
			value: "140181",
			text: "古交市"
		}, {
			value: "140182",
			text: "其它区"
		}]
	}, {
		value: "140200",
		text: "大同市",
		children: [{
			value: "140202",
			text: "城区"
		}, {
			value: "140203",
			text: "矿区"
		}, {
			value: "140211",
			text: "南郊区"
		}, {
			value: "140212",
			text: "新荣区"
		}, {
			value: "140221",
			text: "阳高县"
		}, {
			value: "140222",
			text: "天镇县"
		}, {
			value: "140223",
			text: "广灵县"
		}, {
			value: "140224",
			text: "灵丘县"
		}, {
			value: "140225",
			text: "浑源县"
		}, {
			value: "140226",
			text: "左云县"
		}, {
			value: "140227",
			text: "大同县"
		}, {
			value: "140228",
			text: "其它区"
		}]
	}, {
		value: "140300",
		text: "阳泉市",
		children: [{
			value: "140302",
			text: "城区"
		}, {
			value: "140303",
			text: "矿区"
		}, {
			value: "140311",
			text: "郊区"
		}, {
			value: "140321",
			text: "平定县"
		}, {
			value: "140322",
			text: "盂县"
		}, {
			value: "140323",
			text: "其它区"
		}]
	}, {
		value: "140400",
		text: "长治市",
		children: [{
			value: "140421",
			text: "长治县"
		}, {
			value: "140423",
			text: "襄垣县"
		}, {
			value: "140424",
			text: "屯留县"
		}, {
			value: "140425",
			text: "平顺县"
		}, {
			value: "140426",
			text: "黎城县"
		}, {
			value: "140427",
			text: "壶关县"
		}, {
			value: "140428",
			text: "长子县"
		}, {
			value: "140429",
			text: "武乡县"
		}, {
			value: "140430",
			text: "沁县"
		}, {
			value: "140431",
			text: "沁源县"
		}, {
			value: "140481",
			text: "潞城市"
		}, {
			value: "140482",
			text: "城区"
		}, {
			value: "140483",
			text: "郊区"
		}, {
			value: "140484",
			text: "高新区"
		}, {
			value: "140485",
			text: "其它区"
		}]
	}, {
		value: "140500",
		text: "晋城市",
		children: [{
			value: "140502",
			text: "城区"
		}, {
			value: "140521",
			text: "沁水县"
		}, {
			value: "140522",
			text: "阳城县"
		}, {
			value: "140524",
			text: "陵川县"
		}, {
			value: "140525",
			text: "泽州县"
		}, {
			value: "140581",
			text: "高平市"
		}, {
			value: "140582",
			text: "其它区"
		}]
	}, {
		value: "140600",
		text: "朔州市",
		children: [{
			value: "140602",
			text: "朔城区"
		}, {
			value: "140603",
			text: "平鲁区"
		}, {
			value: "140621",
			text: "山阴县"
		}, {
			value: "140622",
			text: "应县"
		}, {
			value: "140623",
			text: "右玉县"
		}, {
			value: "140624",
			text: "怀仁县"
		}, {
			value: "140625",
			text: "其它区"
		}]
	}, {
		value: "140700",
		text: "晋中市",
		children: [{
			value: "140702",
			text: "榆次区"
		}, {
			value: "140721",
			text: "榆社县"
		}, {
			value: "140722",
			text: "左权县"
		}, {
			value: "140723",
			text: "和顺县"
		}, {
			value: "140724",
			text: "昔阳县"
		}, {
			value: "140725",
			text: "寿阳县"
		}, {
			value: "140726",
			text: "太谷县"
		}, {
			value: "140727",
			text: "祁县"
		}, {
			value: "140728",
			text: "平遥县"
		}, {
			value: "140729",
			text: "灵石县"
		}, {
			value: "140781",
			text: "介休市"
		}, {
			value: "140782",
			text: "其它区"
		}]
	}, {
		value: "140800",
		text: "运城市",
		children: [{
			value: "140802",
			text: "盐湖区"
		}, {
			value: "140821",
			text: "临猗县"
		}, {
			value: "140822",
			text: "万荣县"
		}, {
			value: "140823",
			text: "闻喜县"
		}, {
			value: "140824",
			text: "稷山县"
		}, {
			value: "140825",
			text: "新绛县"
		}, {
			value: "140826",
			text: "绛县"
		}, {
			value: "140827",
			text: "垣曲县"
		}, {
			value: "140828",
			text: "夏县"
		}, {
			value: "140829",
			text: "平陆县"
		}, {
			value: "140830",
			text: "芮城县"
		}, {
			value: "140881",
			text: "永济市"
		}, {
			value: "140882",
			text: "河津市"
		}, {
			value: "140883",
			text: "其它区"
		}]
	}, {
		value: "140900",
		text: "忻州市",
		children: [{
			value: "140902",
			text: "忻府区"
		}, {
			value: "140921",
			text: "定襄县"
		}, {
			value: "140922",
			text: "五台县"
		}, {
			value: "140923",
			text: "代县"
		}, {
			value: "140924",
			text: "繁峙县"
		}, {
			value: "140925",
			text: "宁武县"
		}, {
			value: "140926",
			text: "静乐县"
		}, {
			value: "140927",
			text: "神池县"
		}, {
			value: "140928",
			text: "五寨县"
		}, {
			value: "140929",
			text: "岢岚县"
		}, {
			value: "140930",
			text: "河曲县"
		}, {
			value: "140931",
			text: "保德县"
		}, {
			value: "140932",
			text: "偏关县"
		}, {
			value: "140981",
			text: "原平市"
		}, {
			value: "140982",
			text: "其它区"
		}]
	}, {
		value: "141000",
		text: "临汾市",
		children: [{
			value: "141002",
			text: "尧都区"
		}, {
			value: "141021",
			text: "曲沃县"
		}, {
			value: "141022",
			text: "翼城县"
		}, {
			value: "141023",
			text: "襄汾县"
		}, {
			value: "141024",
			text: "洪洞县"
		}, {
			value: "141025",
			text: "古县"
		}, {
			value: "141026",
			text: "安泽县"
		}, {
			value: "141027",
			text: "浮山县"
		}, {
			value: "141028",
			text: "吉县"
		}, {
			value: "141029",
			text: "乡宁县"
		}, {
			value: "141030",
			text: "大宁县"
		}, {
			value: "141031",
			text: "隰县"
		}, {
			value: "141032",
			text: "永和县"
		}, {
			value: "141033",
			text: "蒲县"
		}, {
			value: "141034",
			text: "汾西县"
		}, {
			value: "141081",
			text: "侯马市"
		}, {
			value: "141082",
			text: "霍州市"
		}, {
			value: "141083",
			text: "其它区"
		}]
	}, {
		value: "141100",
		text: "吕梁市",
		children: [{
			value: "141102",
			text: "离石区"
		}, {
			value: "141121",
			text: "文水县"
		}, {
			value: "141122",
			text: "交城县"
		}, {
			value: "141123",
			text: "兴县"
		}, {
			value: "141124",
			text: "临县"
		}, {
			value: "141125",
			text: "柳林县"
		}, {
			value: "141126",
			text: "石楼县"
		}, {
			value: "141127",
			text: "岚县"
		}, {
			value: "141128",
			text: "方山县"
		}, {
			value: "141129",
			text: "中阳县"
		}, {
			value: "141130",
			text: "交口县"
		}, {
			value: "141181",
			text: "孝义市"
		}, {
			value: "141182",
			text: "汾阳市"
		}, {
			value: "141183",
			text: "其它区"
		}]
	}]
}, {
	value: '150000',
	text: '内蒙古',
	children: [{
		value: "150100",
		text: "呼和浩特市",
		children: [{
			value: "150102",
			text: "新城区"
		}, {
			value: "150103",
			text: "回民区"
		}, {
			value: "150104",
			text: "玉泉区"
		}, {
			value: "150105",
			text: "赛罕区"
		}, {
			value: "150121",
			text: "土默特左旗"
		}, {
			value: "150122",
			text: "托克托县"
		}, {
			value: "150123",
			text: "和林格尔县"
		}, {
			value: "150124",
			text: "清水河县"
		}, {
			value: "150125",
			text: "武川县"
		}, {
			value: "150126",
			text: "其它区"
		}]
	}, {
		value: "150200",
		text: "包头市",
		children: [{
			value: "150202",
			text: "东河区"
		}, {
			value: "150203",
			text: "昆都仑区"
		}, {
			value: "150204",
			text: "青山区"
		}, {
			value: "150205",
			text: "石拐区"
		}, {
			value: "150206",
			text: "白云矿区"
		}, {
			value: "150207",
			text: "九原区"
		}, {
			value: "150221",
			text: "土默特右旗"
		}, {
			value: "150222",
			text: "固阳县"
		}, {
			value: "150223",
			text: "达尔罕茂明安联合旗"
		}, {
			value: "150224",
			text: "其它区"
		}]
	}, {
		value: "150300",
		text: "乌海市",
		children: [{
			value: "150302",
			text: "海勃湾区"
		}, {
			value: "150303",
			text: "海南区"
		}, {
			value: "150304",
			text: "乌达区"
		}, {
			value: "150305",
			text: "其它区"
		}]
	}, {
		value: "150400",
		text: "赤峰市",
		children: [{
			value: "150402",
			text: "红山区"
		}, {
			value: "150403",
			text: "元宝山区"
		}, {
			value: "150404",
			text: "松山区"
		}, {
			value: "150421",
			text: "阿鲁科尔沁旗"
		}, {
			value: "150422",
			text: "巴林左旗"
		}, {
			value: "150423",
			text: "巴林右旗"
		}, {
			value: "150424",
			text: "林西县"
		}, {
			value: "150425",
			text: "克什克腾旗"
		}, {
			value: "150426",
			text: "翁牛特旗"
		}, {
			value: "150428",
			text: "喀喇沁旗"
		}, {
			value: "150429",
			text: "宁城县"
		}, {
			value: "150430",
			text: "敖汉旗"
		}, {
			value: "150431",
			text: "其它区"
		}]
	}, {
		value: "150500",
		text: "通辽市",
		children: [{
			value: "150502",
			text: "科尔沁区"
		}, {
			value: "150521",
			text: "科尔沁左翼中旗"
		}, {
			value: "150522",
			text: "科尔沁左翼后旗"
		}, {
			value: "150523",
			text: "开鲁县"
		}, {
			value: "150524",
			text: "库伦旗"
		}, {
			value: "150525",
			text: "奈曼旗"
		}, {
			value: "150526",
			text: "扎鲁特旗"
		}, {
			value: "150581",
			text: "霍林郭勒市"
		}, {
			value: "150582",
			text: "其它区"
		}]
	}, {
		value: "150600",
		text: "鄂尔多斯市",
		children: [{
			value: "150602",
			text: "东胜区"
		}, {
			value: "150621",
			text: "达拉特旗"
		}, {
			value: "150622",
			text: "准格尔旗"
		}, {
			value: "150623",
			text: "鄂托克前旗"
		}, {
			value: "150624",
			text: "鄂托克旗"
		}, {
			value: "150625",
			text: "杭锦旗"
		}, {
			value: "150626",
			text: "乌审旗"
		}, {
			value: "150627",
			text: "伊金霍洛旗"
		}, {
			value: "150628",
			text: "其它区"
		}]
	}, {
		value: "150700",
		text: "呼伦贝尔市",
		children: [{
			value: "150702",
			text: "海拉尔区"
		}, {
			value: "150721",
			text: "阿荣旗"
		}, {
			value: "150722",
			text: "莫力达瓦达斡尔族自治旗"
		}, {
			value: "150723",
			text: "鄂伦春自治旗"
		}, {
			value: "150724",
			text: "鄂温克族自治旗"
		}, {
			value: "150725",
			text: "陈巴尔虎旗"
		}, {
			value: "150726",
			text: "新巴尔虎左旗"
		}, {
			value: "150727",
			text: "新巴尔虎右旗"
		}, {
			value: "150781",
			text: "满洲里市"
		}, {
			value: "150782",
			text: "牙克石市"
		}, {
			value: "150783",
			text: "扎兰屯市"
		}, {
			value: "150784",
			text: "额尔古纳市"
		}, {
			value: "150785",
			text: "根河市"
		}, {
			value: "150786",
			text: "其它区"
		}]
	}, {
		value: "150800",
		text: "巴彦淖尔市",
		children: [{
			value: "150802",
			text: "临河区"
		}, {
			value: "150821",
			text: "五原县"
		}, {
			value: "150822",
			text: "磴口县"
		}, {
			value: "150823",
			text: "乌拉特前旗"
		}, {
			value: "150824",
			text: "乌拉特中旗"
		}, {
			value: "150825",
			text: "乌拉特后旗"
		}, {
			value: "150826",
			text: "杭锦后旗"
		}, {
			value: "150827",
			text: "其它区"
		}]
	}, {
		value: "150900",
		text: "乌兰察布市",
		children: [{
			value: "150902",
			text: "集宁区"
		}, {
			value: "150921",
			text: "卓资县"
		}, {
			value: "150922",
			text: "化德县"
		}, {
			value: "150923",
			text: "商都县"
		}, {
			value: "150924",
			text: "兴和县"
		}, {
			value: "150925",
			text: "凉城县"
		}, {
			value: "150926",
			text: "察哈尔右翼前旗"
		}, {
			value: "150927",
			text: "察哈尔右翼中旗"
		}, {
			value: "150928",
			text: "察哈尔右翼后旗"
		}, {
			value: "150929",
			text: "四子王旗"
		}, {
			value: "150981",
			text: "丰镇市"
		}, {
			value: "150982",
			text: "其它区"
		}]
	}, {
		value: "152200",
		text: "兴安盟",
		children: [{
			value: "152201",
			text: "乌兰浩特市"
		}, {
			value: "152202",
			text: "阿尔山市"
		}, {
			value: "152221",
			text: "科尔沁右翼前旗"
		}, {
			value: "152222",
			text: "科尔沁右翼中旗"
		}, {
			value: "152223",
			text: "扎赉特旗"
		}, {
			value: "152224",
			text: "突泉县"
		}, {
			value: "152225",
			text: "其它区"
		}]
	}, {
		value: "152500",
		text: "锡林郭勒盟",
		children: [{
			value: "152501",
			text: "二连浩特市"
		}, {
			value: "152502",
			text: "锡林浩特市"
		}, {
			value: "152522",
			text: "阿巴嘎旗"
		}, {
			value: "152523",
			text: "苏尼特左旗"
		}, {
			value: "152524",
			text: "苏尼特右旗"
		}, {
			value: "152525",
			text: "东乌珠穆沁旗"
		}, {
			value: "152526",
			text: "西乌珠穆沁旗"
		}, {
			value: "152527",
			text: "太仆寺旗"
		}, {
			value: "152528",
			text: "镶黄旗"
		}, {
			value: "152529",
			text: "正镶白旗"
		}, {
			value: "152530",
			text: "正蓝旗"
		}, {
			value: "152531",
			text: "多伦县"
		}, {
			value: "152532",
			text: "其它区"
		}]
	}, {
		value: "152900",
		text: "阿拉善盟",
		children: [{
			value: "152921",
			text: "阿拉善左旗"
		}, {
			value: "152922",
			text: "阿拉善右旗"
		}, {
			value: "152923",
			text: "额济纳旗"
		}, {
			value: "152924",
			text: "其它区"
		}]
	}]
}, {
	value: '210000',
	text: '辽宁省',
	children: [{
		value: "210100",
		text: "沈阳市",
		children: [{
			value: "210102",
			text: "和平区"
		}, {
			value: "210103",
			text: "沈河区"
		}, {
			value: "210104",
			text: "大东区"
		}, {
			value: "210105",
			text: "皇姑区"
		}, {
			value: "210106",
			text: "铁西区"
		}, {
			value: "210111",
			text: "苏家屯区"
		}, {
			value: "210112",
			text: "东陵区"
		}, {
			value: "210113",
			text: "新城子区"
		}, {
			value: "210114",
			text: "于洪区"
		}, {
			value: "210122",
			text: "辽中县"
		}, {
			value: "210123",
			text: "康平县"
		}, {
			value: "210124",
			text: "法库县"
		}, {
			value: "210181",
			text: "新民市"
		}, {
			value: "210182",
			text: "浑南新区"
		}, {
			value: "210183",
			text: "张士开发区"
		}, {
			value: "210184",
			text: "沈北新区"
		}, {
			value: "210185",
			text: "其它区"
		}]
	}, {
		value: "210200",
		text: "大连市",
		children: [{
			value: "210202",
			text: "中山区"
		}, {
			value: "210203",
			text: "西岗区"
		}, {
			value: "210204",
			text: "沙河口区"
		}, {
			value: "210211",
			text: "甘井子区"
		}, {
			value: "210212",
			text: "旅顺口区"
		}, {
			value: "210213",
			text: "金州区"
		}, {
			value: "210224",
			text: "长海县"
		}, {
			value: "210251",
			text: "开发区"
		}, {
			value: "210281",
			text: "瓦房店市"
		}, {
			value: "210282",
			text: "普兰店市"
		}, {
			value: "210283",
			text: "庄河市"
		}, {
			value: "210297",
			text: "岭前区"
		}, {
			value: "210298",
			text: "其它区"
		}]
	}, {
		value: "210300",
		text: "鞍山市",
		children: [{
			value: "210302",
			text: "铁东区"
		}, {
			value: "210303",
			text: "铁西区"
		}, {
			value: "210304",
			text: "立山区"
		}, {
			value: "210311",
			text: "千山区"
		}, {
			value: "210321",
			text: "台安县"
		}, {
			value: "210323",
			text: "岫岩满族自治县"
		}, {
			value: "210351",
			text: "高新区"
		}, {
			value: "210381",
			text: "海城市"
		}, {
			value: "210382",
			text: "其它区"
		}]
	}, {
		value: "210400",
		text: "抚顺市",
		children: [{
			value: "210402",
			text: "新抚区"
		}, {
			value: "210403",
			text: "东洲区"
		}, {
			value: "210404",
			text: "望花区"
		}, {
			value: "210411",
			text: "顺城区"
		}, {
			value: "210421",
			text: "抚顺县"
		}, {
			value: "210422",
			text: "新宾满族自治县"
		}, {
			value: "210423",
			text: "清原满族自治县"
		}, {
			value: "210424",
			text: "其它区"
		}]
	}, {
		value: "210500",
		text: "本溪市",
		children: [{
			value: "210502",
			text: "平山区"
		}, {
			value: "210503",
			text: "溪湖区"
		}, {
			value: "210504",
			text: "明山区"
		}, {
			value: "210505",
			text: "南芬区"
		}, {
			value: "210521",
			text: "本溪满族自治县"
		}, {
			value: "210522",
			text: "桓仁满族自治县"
		}, {
			value: "210523",
			text: "其它区"
		}]
	}, {
		value: "210600",
		text: "丹东市",
		children: [{
			value: "210602",
			text: "元宝区"
		}, {
			value: "210603",
			text: "振兴区"
		}, {
			value: "210604",
			text: "振安区"
		}, {
			value: "210624",
			text: "宽甸满族自治县"
		}, {
			value: "210681",
			text: "东港市"
		}, {
			value: "210682",
			text: "凤城市"
		}, {
			value: "210683",
			text: "其它区"
		}]
	}, {
		value: "210700",
		text: "锦州市",
		children: [{
			value: "210702",
			text: "古塔区"
		}, {
			value: "210703",
			text: "凌河区"
		}, {
			value: "210711",
			text: "太和区"
		}, {
			value: "210726",
			text: "黑山县"
		}, {
			value: "210727",
			text: "义县"
		}, {
			value: "210781",
			text: "凌海市"
		}, {
			value: "210782",
			text: "北镇市"
		}, {
			value: "210783",
			text: "其它区"
		}]
	}, {
		value: "210800",
		text: "营口市",
		children: [{
			value: "210802",
			text: "站前区"
		}, {
			value: "210803",
			text: "西市区"
		}, {
			value: "210804",
			text: "鲅鱼圈区"
		}, {
			value: "210811",
			text: "老边区"
		}, {
			value: "210881",
			text: "盖州市"
		}, {
			value: "210882",
			text: "大石桥市"
		}, {
			value: "210883",
			text: "其它区"
		}]
	}, {
		value: "210900",
		text: "阜新市",
		children: [{
			value: "210902",
			text: "海州区"
		}, {
			value: "210903",
			text: "新邱区"
		}, {
			value: "210904",
			text: "太平区"
		}, {
			value: "210905",
			text: "清河门区"
		}, {
			value: "210911",
			text: "细河区"
		}, {
			value: "210921",
			text: "阜新蒙古族自治县"
		}, {
			value: "210922",
			text: "彰武县"
		}, {
			value: "210923",
			text: "其它区"
		}]
	}, {
		value: "211000",
		text: "辽阳市",
		children: [{
			value: "211002",
			text: "白塔区"
		}, {
			value: "211003",
			text: "文圣区"
		}, {
			value: "211004",
			text: "宏伟区"
		}, {
			value: "211005",
			text: "弓长岭区"
		}, {
			value: "211011",
			text: "太子河区"
		}, {
			value: "211021",
			text: "辽阳县"
		}, {
			value: "211081",
			text: "灯塔市"
		}, {
			value: "211082",
			text: "其它区"
		}]
	}, {
		value: "211100",
		text: "盘锦市",
		children: [{
			value: "211102",
			text: "双台子区"
		}, {
			value: "211103",
			text: "兴隆台区"
		}, {
			value: "211121",
			text: "大洼县"
		}, {
			value: "211122",
			text: "盘山县"
		}, {
			value: "211123",
			text: "其它区"
		}]
	}, {
		value: "211200",
		text: "铁岭市",
		children: [{
			value: "211202",
			text: "银州区"
		}, {
			value: "211204",
			text: "清河区"
		}, {
			value: "211221",
			text: "铁岭县"
		}, {
			value: "211223",
			text: "西丰县"
		}, {
			value: "211224",
			text: "昌图县"
		}, {
			value: "211281",
			text: "调兵山市"
		}, {
			value: "211282",
			text: "开原市"
		}, {
			value: "211283",
			text: "其它区"
		}]
	}, {
		value: "211300",
		text: "朝阳市",
		children: [{
			value: "211302",
			text: "双塔区"
		}, {
			value: "211303",
			text: "龙城区"
		}, {
			value: "211321",
			text: "朝阳县"
		}, {
			value: "211322",
			text: "建平县"
		}, {
			value: "211324",
			text: "喀喇沁左翼蒙古族自治县"
		}, {
			value: "211381",
			text: "北票市"
		}, {
			value: "211382",
			text: "凌源市"
		}, {
			value: "211383",
			text: "其它区"
		}]
	}, {
		value: "211400",
		text: "葫芦岛市",
		children: [{
			value: "211402",
			text: "连山区"
		}, {
			value: "211403",
			text: "龙港区"
		}, {
			value: "211404",
			text: "南票区"
		}, {
			value: "211421",
			text: "绥中县"
		}, {
			value: "211422",
			text: "建昌县"
		}, {
			value: "211481",
			text: "兴城市"
		}, {
			value: "211482",
			text: "其它区"
		}]
	}]
}, {
	value: '220000',
	text: '吉林省',
	children: [{
		value: "220100",
		text: "长春市",
		children: [{
			value: "220102",
			text: "南关区"
		}, {
			value: "220103",
			text: "宽城区"
		}, {
			value: "220104",
			text: "朝阳区"
		}, {
			value: "220105",
			text: "二道区"
		}, {
			value: "220106",
			text: "绿园区"
		}, {
			value: "220112",
			text: "双阳区"
		}, {
			value: "220122",
			text: "农安县"
		}, {
			value: "220181",
			text: "九台市"
		}, {
			value: "220182",
			text: "榆树市"
		}, {
			value: "220183",
			text: "德惠市"
		}, {
			value: "220184",
			text: "高新技术产业开发区"
		}, {
			value: "220185",
			text: "汽车产业开发区"
		}, {
			value: "220186",
			text: "经济技术开发区"
		}, {
			value: "220187",
			text: "净月旅游开发区"
		}, {
			value: "220188",
			text: "其它区"
		}]
	}, {
		value: "220200",
		text: "吉林市",
		children: [{
			value: "220202",
			text: "昌邑区"
		}, {
			value: "220203",
			text: "龙潭区"
		}, {
			value: "220204",
			text: "船营区"
		}, {
			value: "220211",
			text: "丰满区"
		}, {
			value: "220221",
			text: "永吉县"
		}, {
			value: "220281",
			text: "蛟河市"
		}, {
			value: "220282",
			text: "桦甸市"
		}, {
			value: "220283",
			text: "舒兰市"
		}, {
			value: "220284",
			text: "磐石市"
		}, {
			value: "220285",
			text: "其它区"
		}]
	}, {
		value: "220300",
		text: "四平市",
		children: [{
			value: "220302",
			text: "铁西区"
		}, {
			value: "220303",
			text: "铁东区"
		}, {
			value: "220322",
			text: "梨树县"
		}, {
			value: "220323",
			text: "伊通满族自治县"
		}, {
			value: "220381",
			text: "公主岭市"
		}, {
			value: "220382",
			text: "双辽市"
		}, {
			value: "220383",
			text: "其它区"
		}]
	}, {
		value: "220400",
		text: "辽源市",
		children: [{
			value: "220402",
			text: "龙山区"
		}, {
			value: "220403",
			text: "西安区"
		}, {
			value: "220421",
			text: "东丰县"
		}, {
			value: "220422",
			text: "东辽县"
		}, {
			value: "220423",
			text: "其它区"
		}]
	}, {
		value: "220500",
		text: "通化市",
		children: [{
			value: "220502",
			text: "东昌区"
		}, {
			value: "220503",
			text: "二道江区"
		}, {
			value: "220521",
			text: "通化县"
		}, {
			value: "220523",
			text: "辉南县"
		}, {
			value: "220524",
			text: "柳河县"
		}, {
			value: "220581",
			text: "梅河口市"
		}, {
			value: "220582",
			text: "集安市"
		}, {
			value: "220583",
			text: "其它区"
		}]
	}, {
		value: "220600",
		text: "白山市",
		children: [{
			value: "220602",
			text: "八道江区"
		}, {
			value: "220621",
			text: "抚松县"
		}, {
			value: "220622",
			text: "靖宇县"
		}, {
			value: "220623",
			text: "长白朝鲜族自治县"
		}, {
			value: "220625",
			text: "江源市"
		}, {
			value: "220681",
			text: "临江市"
		}, {
			value: "220682",
			text: "其它区"
		}]
	}, {
		value: "220700",
		text: "松原市",
		children: [{
			value: "220702",
			text: "宁江区"
		}, {
			value: "220721",
			text: "前郭尔罗斯蒙古族自治县"
		}, {
			value: "220722",
			text: "长岭县"
		}, {
			value: "220723",
			text: "乾安县"
		}, {
			value: "220724",
			text: "扶余县"
		}, {
			value: "220725",
			text: "其它区"
		}]
	}, {
		value: "220800",
		text: "白城市",
		children: [{
			value: "220802",
			text: "洮北区"
		}, {
			value: "220821",
			text: "镇赉县"
		}, {
			value: "220822",
			text: "通榆县"
		}, {
			value: "220881",
			text: "洮南市"
		}, {
			value: "220882",
			text: "大安市"
		}, {
			value: "220883",
			text: "其它区"
		}]
	}, {
		value: "222400",
		text: "延边朝鲜族自治州",
		children: [{
			value: "222401",
			text: "延吉市"
		}, {
			value: "222402",
			text: "图们市"
		}, {
			value: "222403",
			text: "敦化市"
		}, {
			value: "222404",
			text: "珲春市"
		}, {
			value: "222405",
			text: "龙井市"
		}, {
			value: "222406",
			text: "和龙市"
		}, {
			value: "222424",
			text: "汪清县"
		}, {
			value: "222426",
			text: "安图县"
		}, {
			value: "222427",
			text: "其它区"
		}]
	}]
}, {
	value: '230000',
	text: '黑龙江省',
	children: [{
		value: "230100",
		text: "哈尔滨市",
		children: [{
			value: "230102",
			text: "道里区"
		}, {
			value: "230103",
			text: "南岗区"
		}, {
			value: "230104",
			text: "道外区"
		}, {
			value: "230106",
			text: "香坊区"
		}, {
			value: "230107",
			text: "动力区"
		}, {
			value: "230108",
			text: "平房区"
		}, {
			value: "230109",
			text: "松北区"
		}, {
			value: "230111",
			text: "呼兰区"
		}, {
			value: "230123",
			text: "依兰县"
		}, {
			value: "230124",
			text: "方正县"
		}, {
			value: "230125",
			text: "宾县"
		}, {
			value: "230126",
			text: "巴彦县"
		}, {
			value: "230127",
			text: "木兰县"
		}, {
			value: "230128",
			text: "通河县"
		}, {
			value: "230129",
			text: "延寿县"
		}, {
			value: "230181",
			text: "阿城市"
		}, {
			value: "230182",
			text: "双城市"
		}, {
			value: "230183",
			text: "尚志市"
		}, {
			value: "230184",
			text: "五常市"
		}, {
			value: "230185",
			text: "阿城市"
		}, {
			value: "230186",
			text: "其它区"
		}]
	}, {
		value: "230200",
		text: "齐齐哈尔市",
		children: [{
			value: "230202",
			text: "龙沙区"
		}, {
			value: "230203",
			text: "建华区"
		}, {
			value: "230204",
			text: "铁锋区"
		}, {
			value: "230205",
			text: "昂昂溪区"
		}, {
			value: "230206",
			text: "富拉尔基区"
		}, {
			value: "230207",
			text: "碾子山区"
		}, {
			value: "230208",
			text: "梅里斯达斡尔族区"
		}, {
			value: "230221",
			text: "龙江县"
		}, {
			value: "230223",
			text: "依安县"
		}, {
			value: "230224",
			text: "泰来县"
		}, {
			value: "230225",
			text: "甘南县"
		}, {
			value: "230227",
			text: "富裕县"
		}, {
			value: "230229",
			text: "克山县"
		}, {
			value: "230230",
			text: "克东县"
		}, {
			value: "230231",
			text: "拜泉县"
		}, {
			value: "230281",
			text: "讷河市"
		}, {
			value: "230282",
			text: "其它区"
		}]
	}, {
		value: "230300",
		text: "鸡西市",
		children: [{
			value: "230302",
			text: "鸡冠区"
		}, {
			value: "230303",
			text: "恒山区"
		}, {
			value: "230304",
			text: "滴道区"
		}, {
			value: "230305",
			text: "梨树区"
		}, {
			value: "230306",
			text: "城子河区"
		}, {
			value: "230307",
			text: "麻山区"
		}, {
			value: "230321",
			text: "鸡东县"
		}, {
			value: "230381",
			text: "虎林市"
		}, {
			value: "230382",
			text: "密山市"
		}, {
			value: "230383",
			text: "其它区"
		}]
	}, {
		value: "230400",
		text: "鹤岗市",
		children: [{
			value: "230402",
			text: "向阳区"
		}, {
			value: "230403",
			text: "工农区"
		}, {
			value: "230404",
			text: "南山区"
		}, {
			value: "230405",
			text: "兴安区"
		}, {
			value: "230406",
			text: "东山区"
		}, {
			value: "230407",
			text: "兴山区"
		}, {
			value: "230421",
			text: "萝北县"
		}, {
			value: "230422",
			text: "绥滨县"
		}, {
			value: "230423",
			text: "其它区"
		}]
	}, {
		value: "230500",
		text: "双鸭山市",
		children: [{
			value: "230502",
			text: "尖山区"
		}, {
			value: "230503",
			text: "岭东区"
		}, {
			value: "230505",
			text: "四方台区"
		}, {
			value: "230506",
			text: "宝山区"
		}, {
			value: "230521",
			text: "集贤县"
		}, {
			value: "230522",
			text: "友谊县"
		}, {
			value: "230523",
			text: "宝清县"
		}, {
			value: "230524",
			text: "饶河县"
		}, {
			value: "230525",
			text: "其它区"
		}]
	}, {
		value: "230600",
		text: "大庆市",
		children: [{
			value: "230602",
			text: "萨尔图区"
		}, {
			value: "230603",
			text: "龙凤区"
		}, {
			value: "230604",
			text: "让胡路区"
		}, {
			value: "230605",
			text: "红岗区"
		}, {
			value: "230606",
			text: "大同区"
		}, {
			value: "230621",
			text: "肇州县"
		}, {
			value: "230622",
			text: "肇源县"
		}, {
			value: "230623",
			text: "林甸县"
		}, {
			value: "230624",
			text: "杜尔伯特蒙古族自治县"
		}, {
			value: "230625",
			text: "其它区"
		}]
	}, {
		value: "230700",
		text: "伊春市",
		children: [{
			value: "230702",
			text: "伊春区"
		}, {
			value: "230703",
			text: "南岔区"
		}, {
			value: "230704",
			text: "友好区"
		}, {
			value: "230705",
			text: "西林区"
		}, {
			value: "230706",
			text: "翠峦区"
		}, {
			value: "230707",
			text: "新青区"
		}, {
			value: "230708",
			text: "美溪区"
		}, {
			value: "230709",
			text: "金山屯区"
		}, {
			value: "230710",
			text: "五营区"
		}, {
			value: "230711",
			text: "乌马河区"
		}, {
			value: "230712",
			text: "汤旺河区"
		}, {
			value: "230713",
			text: "带岭区"
		}, {
			value: "230714",
			text: "乌伊岭区"
		}, {
			value: "230715",
			text: "红星区"
		}, {
			value: "230716",
			text: "上甘岭区"
		}, {
			value: "230722",
			text: "嘉荫县"
		}, {
			value: "230781",
			text: "铁力市"
		}, {
			value: "230782",
			text: "其它区"
		}]
	}, {
		value: "230800",
		text: "佳木斯市",
		children: [{
			value: "230802",
			text: "永红区"
		}, {
			value: "230803",
			text: "向阳区"
		}, {
			value: "230804",
			text: "前进区"
		}, {
			value: "230805",
			text: "东风区"
		}, {
			value: "230811",
			text: "郊区"
		}, {
			value: "230822",
			text: "桦南县"
		}, {
			value: "230826",
			text: "桦川县"
		}, {
			value: "230828",
			text: "汤原县"
		}, {
			value: "230833",
			text: "抚远县"
		}, {
			value: "230881",
			text: "同江市"
		}, {
			value: "230882",
			text: "富锦市"
		}, {
			value: "230883",
			text: "其它区"
		}]
	}, {
		value: "230900",
		text: "七台河市",
		children: [{
			value: "230902",
			text: "新兴区"
		}, {
			value: "230903",
			text: "桃山区"
		}, {
			value: "230904",
			text: "茄子河区"
		}, {
			value: "230921",
			text: "勃利县"
		}, {
			value: "230922",
			text: "其它区"
		}]
	}, {
		value: "231000",
		text: "牡丹江市",
		children: [{
			value: "231002",
			text: "东安区"
		}, {
			value: "231003",
			text: "阳明区"
		}, {
			value: "231004",
			text: "爱民区"
		}, {
			value: "231005",
			text: "西安区"
		}, {
			value: "231024",
			text: "东宁县"
		}, {
			value: "231025",
			text: "林口县"
		}, {
			value: "231081",
			text: "绥芬河市"
		}, {
			value: "231083",
			text: "海林市"
		}, {
			value: "231084",
			text: "宁安市"
		}, {
			value: "231085",
			text: "穆棱市"
		}, {
			value: "231086",
			text: "其它区"
		}]
	}, {
		value: "231100",
		text: "黑河市",
		children: [{
			value: "231102",
			text: "爱辉区"
		}, {
			value: "231121",
			text: "嫩江县"
		}, {
			value: "231123",
			text: "逊克县"
		}, {
			value: "231124",
			text: "孙吴县"
		}, {
			value: "231181",
			text: "北安市"
		}, {
			value: "231182",
			text: "五大连池市"
		}, {
			value: "231183",
			text: "其它区"
		}]
	}, {
		value: "231200",
		text: "绥化市",
		children: [{
			value: "231202",
			text: "北林区"
		}, {
			value: "231221",
			text: "望奎县"
		}, {
			value: "231222",
			text: "兰西县"
		}, {
			value: "231223",
			text: "青冈县"
		}, {
			value: "231224",
			text: "庆安县"
		}, {
			value: "231225",
			text: "明水县"
		}, {
			value: "231226",
			text: "绥棱县"
		}, {
			value: "231281",
			text: "安达市"
		}, {
			value: "231282",
			text: "肇东市"
		}, {
			value: "231283",
			text: "海伦市"
		}, {
			value: "231284",
			text: "其它区"
		}]
	}, {
		value: "232700",
		text: "大兴安岭地区",
		children: [{
			value: "232721",
			text: "呼玛县"
		}, {
			value: "232722",
			text: "塔河县"
		}, {
			value: "232723",
			text: "漠河县"
		}, {
			value: "232724",
			text: "加格达奇区"
		}, {
			value: "232725",
			text: "其它区"
		}]
	}]
}, {
	value: '310000',
	text: '上海市',
	children: [{
		value: '310000',
		text: '上海市',
		children: [{
			value: "310101",
			text: "黄浦区"
		}, {
			value: "310103",
			text: "卢湾区"
		}, {
			value: "310104",
			text: "徐汇区"
		}, {
			value: "310105",
			text: "长宁区"
		}, {
			value: "310106",
			text: "静安区"
		}, {
			value: "310107",
			text: "普陀区"
		}, {
			value: "310108",
			text: "闸北区"
		}, {
			value: "310109",
			text: "虹口区"
		}, {
			value: "310110",
			text: "杨浦区"
		}, {
			value: "310112",
			text: "闵行区"
		}, {
			value: "310113",
			text: "宝山区"
		}, {
			value: "310114",
			text: "嘉定区"
		}, {
			value: "310115",
			text: "浦东新区"
		}, {
			value: "310116",
			text: "金山区"
		}, {
			value: "310117",
			text: "松江区"
		}, {
			value: "310118",
			text: "青浦区"
		}, {
			value: "310119",
			text: "南汇区"
		}, {
			value: "310120",
			text: "奉贤区"
		}, {
			value: "310152",
			text: "川沙区"
		}, {
			value: "310230",
			text: "崇明县"
		}, {
			value: "310231",
			text: "其它区"
		}]
	}]
}, {
	value: '320000',
	text: '江苏省',
	children: [{
		value: "320100",
		text: "南京市",
		children: [{
			value: "320102",
			text: "玄武区"
		}, {
			value: "320103",
			text: "白下区"
		}, {
			value: "320104",
			text: "秦淮区"
		}, {
			value: "320105",
			text: "建邺区"
		}, {
			value: "320106",
			text: "鼓楼区"
		}, {
			value: "320107",
			text: "下关区"
		}, {
			value: "320111",
			text: "浦口区"
		}, {
			value: "320113",
			text: "栖霞区"
		}, {
			value: "320114",
			text: "雨花台区"
		}, {
			value: "320115",
			text: "江宁区"
		}, {
			value: "320116",
			text: "六合区"
		}, {
			value: "320124",
			text: "溧水县"
		}, {
			value: "320125",
			text: "高淳县"
		}, {
			value: "320126",
			text: "其它区"
		}]
	}, {
		value: "320200",
		text: "无锡市",
		children: [{
			value: "320202",
			text: "崇安区"
		}, {
			value: "320203",
			text: "南长区"
		}, {
			value: "320204",
			text: "北塘区"
		}, {
			value: "320205",
			text: "锡山区"
		}, {
			value: "320206",
			text: "惠山区"
		}, {
			value: "320211",
			text: "滨湖区"
		}, {
			value: "320281",
			text: "江阴市"
		}, {
			value: "320282",
			text: "宜兴市"
		}, {
			value: "320296",
			text: "新区"
		}, {
			value: "320297",
			text: "其它区"
		}]
	}, {
		value: "320300",
		text: "徐州市",
		children: [{
			value: "320302",
			text: "鼓楼区"
		}, {
			value: "320303",
			text: "云龙区"
		}, {
			value: "320304",
			text: "九里区"
		}, {
			value: "320305",
			text: "贾汪区"
		}, {
			value: "320311",
			text: "泉山区"
		}, {
			value: "320321",
			text: "丰县"
		}, {
			value: "320322",
			text: "沛县"
		}, {
			value: "320323",
			text: "铜山县"
		}, {
			value: "320324",
			text: "睢宁县"
		}, {
			value: "320381",
			text: "新沂市"
		}, {
			value: "320382",
			text: "邳州市"
		}, {
			value: "320383",
			text: "其它区"
		}]
	}, {
		value: "320400",
		text: "常州市",
		children: [{
			value: "320402",
			text: "天宁区"
		}, {
			value: "320404",
			text: "钟楼区"
		}, {
			value: "320405",
			text: "戚墅堰区"
		}, {
			value: "320411",
			text: "新北区"
		}, {
			value: "320412",
			text: "武进区"
		}, {
			value: "320481",
			text: "溧阳市"
		}, {
			value: "320482",
			text: "金坛市"
		}, {
			value: "320483",
			text: "其它区"
		}]
	}, {
		value: "320500",
		text: "苏州市",
		children: [{
			value: "320502",
			text: "沧浪区"
		}, {
			value: "320503",
			text: "平江区"
		}, {
			value: "320504",
			text: "金阊区"
		}, {
			value: "320505",
			text: "虎丘区"
		}, {
			value: "320506",
			text: "吴中区"
		}, {
			value: "320507",
			text: "相城区"
		}, {
			value: "320581",
			text: "常熟市"
		}, {
			value: "320582",
			text: "张家港市"
		}, {
			value: "320583",
			text: "昆山市"
		}, {
			value: "320584",
			text: "吴江市"
		}, {
			value: "320585",
			text: "太仓市"
		}, {
			value: "320594",
			text: "新区"
		}, {
			value: "320595",
			text: "园区"
		}, {
			value: "320596",
			text: "其它区"
		}]
	}, {
		value: "320600",
		text: "南通市",
		children: [{
			value: "320602",
			text: "崇川区"
		}, {
			value: "320611",
			text: "港闸区"
		}, {
			value: "320612",
			text: "通州区"
		}, {
			value: "320621",
			text: "海安县"
		}, {
			value: "320623",
			text: "如东县"
		}, {
			value: "320681",
			text: "启东市"
		}, {
			value: "320682",
			text: "如皋市"
		}, {
			value: "320683",
			text: "通州市"
		}, {
			value: "320684",
			text: "海门市"
		}, {
			value: "320693",
			text: "开发区"
		}, {
			value: "320694",
			text: "其它区"
		}]
	}, {
		value: "320700",
		text: "连云港市",
		children: [{
			value: "320703",
			text: "连云区"
		}, {
			value: "320705",
			text: "新浦区"
		}, {
			value: "320706",
			text: "海州区"
		}, {
			value: "320721",
			text: "赣榆县"
		}, {
			value: "320722",
			text: "东海县"
		}, {
			value: "320723",
			text: "灌云县"
		}, {
			value: "320724",
			text: "灌南县"
		}, {
			value: "320725",
			text: "其它区"
		}]
	}, {
		value: "320800",
		text: "淮安市",
		children: [{
			value: "320802",
			text: "清河区"
		}, {
			value: "320803",
			text: "楚州区"
		}, {
			value: "320804",
			text: "淮阴区"
		}, {
			value: "320811",
			text: "清浦区"
		}, {
			value: "320826",
			text: "涟水县"
		}, {
			value: "320829",
			text: "洪泽县"
		}, {
			value: "320830",
			text: "盱眙县"
		}, {
			value: "320831",
			text: "金湖县"
		}, {
			value: "320832",
			text: "其它区"
		}]
	}, {
		value: "320900",
		text: "盐城市",
		children: [{
			value: "320902",
			text: "亭湖区"
		}, {
			value: "320903",
			text: "盐都区"
		}, {
			value: "320921",
			text: "响水县"
		}, {
			value: "320922",
			text: "滨海县"
		}, {
			value: "320923",
			text: "阜宁县"
		}, {
			value: "320924",
			text: "射阳县"
		}, {
			value: "320925",
			text: "建湖县"
		}, {
			value: "320981",
			text: "东台市"
		}, {
			value: "320982",
			text: "大丰市"
		}, {
			value: "320983",
			text: "其它区"
		}]
	}, {
		value: "321000",
		text: "扬州市",
		children: [{
			value: "321002",
			text: "广陵区"
		}, {
			value: "321003",
			text: "邗江区"
		}, {
			value: "321011",
			text: "维扬区"
		}, {
			value: "321023",
			text: "宝应县"
		}, {
			value: "321081",
			text: "仪征市"
		}, {
			value: "321084",
			text: "高邮市"
		}, {
			value: "321088",
			text: "江都市"
		}, {
			value: "321092",
			text: "经济开发区"
		}, {
			value: "321093",
			text: "其它区"
		}]
	}, {
		value: "321100",
		text: "镇江市",
		children: [{
			value: "321102",
			text: "京口区"
		}, {
			value: "321111",
			text: "润州区"
		}, {
			value: "321112",
			text: "丹徒区"
		}, {
			value: "321181",
			text: "丹阳市"
		}, {
			value: "321182",
			text: "扬中市"
		}, {
			value: "321183",
			text: "句容市"
		}, {
			value: "321184",
			text: "其它区"
		}]
	}, {
		value: "321200",
		text: "泰州市",
		children: [{
			value: "321202",
			text: "海陵区"
		}, {
			value: "321203",
			text: "高港区"
		}, {
			value: "321281",
			text: "兴化市"
		}, {
			value: "321282",
			text: "靖江市"
		}, {
			value: "321283",
			text: "泰兴市"
		}, {
			value: "321284",
			text: "姜堰市"
		}, {
			value: "321285",
			text: "其它区"
		}]
	}, {
		value: "321300",
		text: "宿迁市",
		children: [{
			value: "321302",
			text: "宿城区"
		}, {
			value: "321311",
			text: "宿豫区"
		}, {
			value: "321322",
			text: "沭阳县"
		}, {
			value: "321323",
			text: "泗阳县"
		}, {
			value: "321324",
			text: "泗洪县"
		}, {
			value: "321325",
			text: "其它区"
		}]
	}]
}, {
	value: '330000',
	text: '浙江省',
	children: [{
		value: "330100",
		text: "杭州市",
		children: [{
			value: "330102",
			text: "上城区"
		}, {
			value: "330103",
			text: "下城区"
		}, {
			value: "330104",
			text: "江干区"
		}, {
			value: "330105",
			text: "拱墅区"
		}, {
			value: "330106",
			text: "西湖区"
		}, {
			value: "330108",
			text: "滨江区"
		}, {
			value: "330109",
			text: "萧山区"
		}, {
			value: "330110",
			text: "余杭区"
		}, {
			value: "330122",
			text: "桐庐县"
		}, {
			value: "330127",
			text: "淳安县"
		}, {
			value: "330182",
			text: "建德市"
		}, {
			value: "330183",
			text: "富阳市"
		}, {
			value: "330185",
			text: "临安市"
		}, {
			value: "330186",
			text: "其它区"
		}]
	}, {
		value: "330200",
		text: "宁波市",
		children: [{
			value: "330203",
			text: "海曙区"
		}, {
			value: "330204",
			text: "江东区"
		}, {
			value: "330205",
			text: "江北区"
		}, {
			value: "330206",
			text: "北仑区"
		}, {
			value: "330211",
			text: "镇海区"
		}, {
			value: "330212",
			text: "鄞州区"
		}, {
			value: "330225",
			text: "象山县"
		}, {
			value: "330226",
			text: "宁海县"
		}, {
			value: "330281",
			text: "余姚市"
		}, {
			value: "330282",
			text: "慈溪市"
		}, {
			value: "330283",
			text: "奉化市"
		}, {
			value: "330284",
			text: "其它区"
		}]
	}, {
		value: "330300",
		text: "温州市",
		children: [{
			value: "330302",
			text: "鹿城区"
		}, {
			value: "330303",
			text: "龙湾区"
		}, {
			value: "330304",
			text: "瓯海区"
		}, {
			value: "330322",
			text: "洞头县"
		}, {
			value: "330324",
			text: "永嘉县"
		}, {
			value: "330326",
			text: "平阳县"
		}, {
			value: "330327",
			text: "苍南县"
		}, {
			value: "330328",
			text: "文成县"
		}, {
			value: "330329",
			text: "泰顺县"
		}, {
			value: "330381",
			text: "瑞安市"
		}, {
			value: "330382",
			text: "乐清市"
		}, {
			value: "330383",
			text: "其它区"
		}]
	}, {
		value: "330400",
		text: "嘉兴市",
		children: [{
			value: "330402",
			text: "南湖区"
		}, {
			value: "330411",
			text: "秀洲区"
		}, {
			value: "330421",
			text: "嘉善县"
		}, {
			value: "330424",
			text: "海盐县"
		}, {
			value: "330481",
			text: "海宁市"
		}, {
			value: "330482",
			text: "平湖市"
		}, {
			value: "330483",
			text: "桐乡市"
		}, {
			value: "330484",
			text: "其它区"
		}]
	}, {
		value: "330500",
		text: "湖州市",
		children: [{
			value: "330502",
			text: "吴兴区"
		}, {
			value: "330503",
			text: "南浔区"
		}, {
			value: "330521",
			text: "德清县"
		}, {
			value: "330522",
			text: "长兴县"
		}, {
			value: "330523",
			text: "安吉县"
		}, {
			value: "330524",
			text: "其它区"
		}]
	}, {
		value: "330600",
		text: "绍兴市",
		children: [{
			value: "330602",
			text: "越城区"
		}, {
			value: "330621",
			text: "柯桥区"
		}, {
			value: "330624",
			text: "新昌县"
		}, {
			value: "330681",
			text: "诸暨市"
		}, {
			value: "330682",
			text: "上虞区"
		}, {
			value: "330683",
			text: "嵊州市"
		}, {
			value: "330684",
			text: "其它区"
		}]
	}, {
		value: "330700",
		text: "金华市",
		children: [{
			value: "330702",
			text: "婺城区"
		}, {
			value: "330703",
			text: "金东区"
		}, {
			value: "330723",
			text: "武义县"
		}, {
			value: "330726",
			text: "浦江县"
		}, {
			value: "330727",
			text: "磐安县"
		}, {
			value: "330781",
			text: "兰溪市"
		}, {
			value: "330782",
			text: "义乌市"
		}, {
			value: "330783",
			text: "东阳市"
		}, {
			value: "330784",
			text: "永康市"
		}, {
			value: "330785",
			text: "其它区"
		}]
	}, {
		value: "330800",
		text: "衢州市",
		children: [{
			value: "330802",
			text: "柯城区"
		}, {
			value: "330803",
			text: "衢江区"
		}, {
			value: "330822",
			text: "常山县"
		}, {
			value: "330824",
			text: "开化县"
		}, {
			value: "330825",
			text: "龙游县"
		}, {
			value: "330881",
			text: "江山市"
		}, {
			value: "330882",
			text: "其它区"
		}]
	}, {
		value: "330900",
		text: "舟山市",
		children: [{
			value: "330902",
			text: "定海区"
		}, {
			value: "330903",
			text: "普陀区"
		}, {
			value: "330921",
			text: "岱山县"
		}, {
			value: "330922",
			text: "嵊泗县"
		}, {
			value: "330923",
			text: "其它区"
		}]
	}, {
		value: "331000",
		text: "台州市",
		children: [{
			value: "331002",
			text: "椒江区"
		}, {
			value: "331003",
			text: "黄岩区"
		}, {
			value: "331004",
			text: "路桥区"
		}, {
			value: "331021",
			text: "玉环县"
		}, {
			value: "331022",
			text: "三门县"
		}, {
			value: "331023",
			text: "天台县"
		}, {
			value: "331024",
			text: "仙居县"
		}, {
			value: "331081",
			text: "温岭市"
		}, {
			value: "331082",
			text: "临海市"
		}, {
			value: "331083",
			text: "其它区"
		}]
	}, {
		value: "331100",
		text: "丽水市",
		children: [{
			value: "331102",
			text: "莲都区"
		}, {
			value: "331121",
			text: "青田县"
		}, {
			value: "331122",
			text: "缙云县"
		}, {
			value: "331123",
			text: "遂昌县"
		}, {
			value: "331124",
			text: "松阳县"
		}, {
			value: "331125",
			text: "云和县"
		}, {
			value: "331126",
			text: "庆元县"
		}, {
			value: "331127",
			text: "景宁畲族自治县"
		}, {
			value: "331181",
			text: "龙泉市"
		}, {
			value: "331182",
			text: "其它区"
		}]
	}]
}, {
	value: '340000',
	text: '安徽省',
	children: [{
		value: "340100",
		text: "合肥市",
		children: [{
			value: "340102",
			text: "瑶海区"
		}, {
			value: "340103",
			text: "庐阳区"
		}, {
			value: "340104",
			text: "蜀山区"
		}, {
			value: "340111",
			text: "包河区"
		}, {
			value: "340121",
			text: "长丰县"
		}, {
			value: "340122",
			text: "肥东县"
		}, {
			value: "340123",
			text: "肥西县"
		}, {
			value: "340151",
			text: "高新区"
		}, {
			value: "340191",
			text: "中区"
		}, {
			value: "340192",
			text: "其它区"
		}, {
			value: "341400",
			text: "巢湖市"
		}, {
			value: "341402",
			text: "居巢区"
		}, {
			value: "341421",
			text: "庐江县"
		}]
	}, {
		value: "340200",
		text: "芜湖市",
		children: [{
			value: "340202",
			text: "镜湖区"
		}, {
			value: "340203",
			text: "弋江区"
		}, {
			value: "340207",
			text: "鸠江区"
		}, {
			value: "340208",
			text: "三山区"
		}, {
			value: "340221",
			text: "芜湖县"
		}, {
			value: "340222",
			text: "繁昌县"
		}, {
			value: "340223",
			text: "南陵县"
		}, {
			value: "340224",
			text: "其它区"
		}, {
			value: "341422",
			text: "无为县"
		}]
	}, {
		value: "340300",
		text: "蚌埠市",
		children: [{
			value: "340302",
			text: "龙子湖区"
		}, {
			value: "340303",
			text: "蚌山区"
		}, {
			value: "340304",
			text: "禹会区"
		}, {
			value: "340311",
			text: "淮上区"
		}, {
			value: "340321",
			text: "怀远县"
		}, {
			value: "340322",
			text: "五河县"
		}, {
			value: "340323",
			text: "固镇县"
		}, {
			value: "340324",
			text: "其它区"
		}]
	}, {
		value: "340400",
		text: "淮南市",
		children: [{
			value: "340402",
			text: "大通区"
		}, {
			value: "340403",
			text: "田家庵区"
		}, {
			value: "340404",
			text: "谢家集区"
		}, {
			value: "340405",
			text: "八公山区"
		}, {
			value: "340406",
			text: "潘集区"
		}, {
			value: "340421",
			text: "凤台县"
		}, {
			value: "340422",
			text: "其它区"
		}]
	}, {
		value: "340500",
		text: "马鞍山市",
		children: [{
			value: "340502",
			text: "金家庄区"
		}, {
			value: "340503",
			text: "花山区"
		}, {
			value: "340504",
			text: "雨山区"
		}, {
			value: "340521",
			text: "当涂县"
		}, {
			value: "340522",
			text: "其它区"
		}, {
			value: "341423",
			text: "含山县"
		}, {
			value: "341424",
			text: "和县"
		}]
	}, {
		value: "340600",
		text: "淮北市",
		children: [{
			value: "340602",
			text: "杜集区"
		}, {
			value: "340603",
			text: "相山区"
		}, {
			value: "340604",
			text: "烈山区"
		}, {
			value: "340621",
			text: "濉溪县"
		}, {
			value: "340622",
			text: "其它区"
		}]
	}, {
		value: "340700",
		text: "铜陵市",
		children: [{
			value: "340702",
			text: "铜官山区"
		}, {
			value: "340703",
			text: "狮子山区"
		}, {
			value: "340711",
			text: "郊区"
		}, {
			value: "340721",
			text: "铜陵县"
		}, {
			value: "340722",
			text: "其它区"
		}]
	}, {
		value: "340800",
		text: "安庆市",
		children: [{
			value: "340802",
			text: "迎江区"
		}, {
			value: "340803",
			text: "大观区"
		}, {
			value: "340811",
			text: "宜秀区"
		}, {
			value: "340822",
			text: "怀宁县"
		}, {
			value: "340823",
			text: "枞阳县"
		}, {
			value: "340824",
			text: "潜山县"
		}, {
			value: "340825",
			text: "太湖县"
		}, {
			value: "340826",
			text: "宿松县"
		}, {
			value: "340827",
			text: "望江县"
		}, {
			value: "340828",
			text: "岳西县"
		}, {
			value: "340881",
			text: "桐城市"
		}, {
			value: "340882",
			text: "其它区"
		}]
	}, {
		value: "341000",
		text: "黄山市",
		children: [{
			value: "341002",
			text: "屯溪区"
		}, {
			value: "341003",
			text: "黄山区"
		}, {
			value: "341004",
			text: "徽州区"
		}, {
			value: "341021",
			text: "歙县"
		}, {
			value: "341022",
			text: "休宁县"
		}, {
			value: "341023",
			text: "黟县"
		}, {
			value: "341024",
			text: "祁门县"
		}, {
			value: "341025",
			text: "其它区"
		}]
	}, {
		value: "341100",
		text: "滁州市",
		children: [{
			value: "341102",
			text: "琅琊区"
		}, {
			value: "341103",
			text: "南谯区"
		}, {
			value: "341122",
			text: "来安县"
		}, {
			value: "341124",
			text: "全椒县"
		}, {
			value: "341125",
			text: "定远县"
		}, {
			value: "341126",
			text: "凤阳县"
		}, {
			value: "341181",
			text: "天长市"
		}, {
			value: "341182",
			text: "明光市"
		}, {
			value: "341183",
			text: "其它区"
		}]
	}, {
		value: "341200",
		text: "阜阳市",
		children: [{
			value: "341202",
			text: "颍州区"
		}, {
			value: "341203",
			text: "颍东区"
		}, {
			value: "341204",
			text: "颍泉区"
		}, {
			value: "341221",
			text: "临泉县"
		}, {
			value: "341222",
			text: "太和县"
		}, {
			value: "341225",
			text: "阜南县"
		}, {
			value: "341226",
			text: "颍上县"
		}, {
			value: "341282",
			text: "界首市"
		}, {
			value: "341283",
			text: "其它区"
		}]
	}, {
		value: "341300",
		text: "宿州市",
		children: [{
			value: "341302",
			text: "埇桥区"
		}, {
			value: "341321",
			text: "砀山县"
		}, {
			value: "341322",
			text: "萧县"
		}, {
			value: "341323",
			text: "灵璧县"
		}, {
			value: "341324",
			text: "泗县"
		}, {
			value: "341325",
			text: "其它区"
		}]
	}, {
		value: "341500",
		text: "六安市",
		children: [{
			value: "341502",
			text: "金安区"
		}, {
			value: "341503",
			text: "裕安区"
		}, {
			value: "341521",
			text: "寿县"
		}, {
			value: "341522",
			text: "霍邱县"
		}, {
			value: "341523",
			text: "舒城县"
		}, {
			value: "341524",
			text: "金寨县"
		}, {
			value: "341525",
			text: "霍山县"
		}, {
			value: "341526",
			text: "其它区"
		}]
	}, {
		value: "341600",
		text: "亳州市",
		children: [{
			value: "341602",
			text: "谯城区"
		}, {
			value: "341621",
			text: "涡阳县"
		}, {
			value: "341622",
			text: "蒙城县"
		}, {
			value: "341623",
			text: "利辛县"
		}, {
			value: "341624",
			text: "其它区"
		}]
	}, {
		value: "341700",
		text: "池州市",
		children: [{
			value: "341702",
			text: "贵池区"
		}, {
			value: "341721",
			text: "东至县"
		}, {
			value: "341722",
			text: "石台县"
		}, {
			value: "341723",
			text: "青阳县"
		}, {
			value: "341724",
			text: "其它区"
		}]
	}, {
		value: "341800",
		text: "宣城市",
		children: [{
			value: "341802",
			text: "宣州区"
		}, {
			value: "341821",
			text: "郎溪县"
		}, {
			value: "341822",
			text: "广德县"
		}, {
			value: "341823",
			text: "泾县"
		}, {
			value: "341824",
			text: "绩溪县"
		}, {
			value: "341825",
			text: "旌德县"
		}, {
			value: "341881",
			text: "宁国市"
		}, {
			value: "341882",
			text: "其它区"
		}]
	}]
}, {
	value: '350000',
	text: '福建省',
	children: [{
		value: "350100",
		text: "福州市",
		children: [{
			value: "350102",
			text: "鼓楼区"
		}, {
			value: "350103",
			text: "台江区"
		}, {
			value: "350104",
			text: "仓山区"
		}, {
			value: "350105",
			text: "马尾区"
		}, {
			value: "350111",
			text: "晋安区"
		}, {
			value: "350121",
			text: "闽侯县"
		}, {
			value: "350122",
			text: "连江县"
		}, {
			value: "350123",
			text: "罗源县"
		}, {
			value: "350124",
			text: "闽清县"
		}, {
			value: "350125",
			text: "永泰县"
		}, {
			value: "350128",
			text: "平潭县"
		}, {
			value: "350181",
			text: "福清市"
		}, {
			value: "350182",
			text: "长乐市"
		}, {
			value: "350183",
			text: "其它区"
		}]
	}, {
		value: "350200",
		text: "厦门市",
		children: [{
			value: "350203",
			text: "思明区"
		}, {
			value: "350205",
			text: "海沧区"
		}, {
			value: "350206",
			text: "湖里区"
		}, {
			value: "350211",
			text: "集美区"
		}, {
			value: "350212",
			text: "同安区"
		}, {
			value: "350213",
			text: "翔安区"
		}, {
			value: "350214",
			text: "其它区"
		}]
	}, {
		value: "350300",
		text: "莆田市",
		children: [{
			value: "350302",
			text: "城厢区"
		}, {
			value: "350303",
			text: "涵江区"
		}, {
			value: "350304",
			text: "荔城区"
		}, {
			value: "350305",
			text: "秀屿区"
		}, {
			value: "350322",
			text: "仙游县"
		}, {
			value: "350323",
			text: "其它区"
		}]
	}, {
		value: "350400",
		text: "三明市",
		children: [{
			value: "350402",
			text: "梅列区"
		}, {
			value: "350403",
			text: "三元区"
		}, {
			value: "350421",
			text: "明溪县"
		}, {
			value: "350423",
			text: "清流县"
		}, {
			value: "350424",
			text: "宁化县"
		}, {
			value: "350425",
			text: "大田县"
		}, {
			value: "350426",
			text: "尤溪县"
		}, {
			value: "350427",
			text: "沙县"
		}, {
			value: "350428",
			text: "将乐县"
		}, {
			value: "350429",
			text: "泰宁县"
		}, {
			value: "350430",
			text: "建宁县"
		}, {
			value: "350481",
			text: "永安市"
		}, {
			value: "350482",
			text: "其它区"
		}]
	}, {
		value: "350500",
		text: "泉州市",
		children: [{
			value: "350502",
			text: "鲤城区"
		}, {
			value: "350503",
			text: "丰泽区"
		}, {
			value: "350504",
			text: "洛江区"
		}, {
			value: "350505",
			text: "泉港区"
		}, {
			value: "350521",
			text: "惠安县"
		}, {
			value: "350524",
			text: "安溪县"
		}, {
			value: "350525",
			text: "永春县"
		}, {
			value: "350526",
			text: "德化县"
		}, {
			value: "350527",
			text: "金门县"
		}, {
			value: "350581",
			text: "石狮市"
		}, {
			value: "350582",
			text: "晋江市"
		}, {
			value: "350583",
			text: "南安市"
		}, {
			value: "350584",
			text: "其它区"
		}]
	}, {
		value: "350600",
		text: "漳州市",
		children: [{
			value: "350602",
			text: "芗城区"
		}, {
			value: "350603",
			text: "龙文区"
		}, {
			value: "350622",
			text: "云霄县"
		}, {
			value: "350623",
			text: "漳浦县"
		}, {
			value: "350624",
			text: "诏安县"
		}, {
			value: "350625",
			text: "长泰县"
		}, {
			value: "350626",
			text: "东山县"
		}, {
			value: "350627",
			text: "南靖县"
		}, {
			value: "350628",
			text: "平和县"
		}, {
			value: "350629",
			text: "华安县"
		}, {
			value: "350681",
			text: "龙海市"
		}, {
			value: "350682",
			text: "其它区"
		}]
	}, {
		value: "350700",
		text: "南平市",
		children: [{
			value: "350702",
			text: "延平区"
		}, {
			value: "350721",
			text: "顺昌县"
		}, {
			value: "350722",
			text: "浦城县"
		}, {
			value: "350723",
			text: "光泽县"
		}, {
			value: "350724",
			text: "松溪县"
		}, {
			value: "350725",
			text: "政和县"
		}, {
			value: "350781",
			text: "邵武市"
		}, {
			value: "350782",
			text: "武夷山市"
		}, {
			value: "350783",
			text: "建瓯市"
		}, {
			value: "350784",
			text: "建阳市"
		}, {
			value: "350785",
			text: "其它区"
		}]
	}, {
		value: "350800",
		text: "龙岩市",
		children: [{
			value: "350802",
			text: "新罗区"
		}, {
			value: "350821",
			text: "长汀县"
		}, {
			value: "350822",
			text: "永定县"
		}, {
			value: "350823",
			text: "上杭县"
		}, {
			value: "350824",
			text: "武平县"
		}, {
			value: "350825",
			text: "连城县"
		}, {
			value: "350881",
			text: "漳平市"
		}, {
			value: "350882",
			text: "其它区"
		}]
	}, {
		value: "350900",
		text: "宁德市",
		children: [{
			value: "350902",
			text: "蕉城区"
		}, {
			value: "350921",
			text: "霞浦县"
		}, {
			value: "350922",
			text: "古田县"
		}, {
			value: "350923",
			text: "屏南县"
		}, {
			value: "350924",
			text: "寿宁县"
		}, {
			value: "350925",
			text: "周宁县"
		}, {
			value: "350926",
			text: "柘荣县"
		}, {
			value: "350981",
			text: "福安市"
		}, {
			value: "350982",
			text: "福鼎市"
		}, {
			value: "350983",
			text: "其它区"
		}]
	}]
}, {
	value: '360000',
	text: '江西省',
	children: [{
		value: "360100",
		text: "南昌市",
		children: [{
			value: "360102",
			text: "东湖区"
		}, {
			value: "360103",
			text: "西湖区"
		}, {
			value: "360104",
			text: "青云谱区"
		}, {
			value: "360105",
			text: "湾里区"
		}, {
			value: "360111",
			text: "青山湖区"
		}, {
			value: "360121",
			text: "南昌县"
		}, {
			value: "360122",
			text: "新建县"
		}, {
			value: "360123",
			text: "安义县"
		}, {
			value: "360124",
			text: "进贤县"
		}, {
			value: "360125",
			text: "红谷滩新区"
		}, {
			value: "360126",
			text: "经济技术开发区"
		}, {
			value: "360127",
			text: "昌北区"
		}, {
			value: "360128",
			text: "其它区"
		}]
	}, {
		value: "360200",
		text: "景德镇市",
		children: [{
			value: "360202",
			text: "昌江区"
		}, {
			value: "360203",
			text: "珠山区"
		}, {
			value: "360222",
			text: "浮梁县"
		}, {
			value: "360281",
			text: "乐平市"
		}, {
			value: "360282",
			text: "其它区"
		}]
	}, {
		value: "360300",
		text: "萍乡市",
		children: [{
			value: "360302",
			text: "安源区"
		}, {
			value: "360313",
			text: "湘东区"
		}, {
			value: "360321",
			text: "莲花县"
		}, {
			value: "360322",
			text: "上栗县"
		}, {
			value: "360323",
			text: "芦溪县"
		}, {
			value: "360324",
			text: "其它区"
		}]
	}, {
		value: "360400",
		text: "九江市",
		children: [{
			value: "360402",
			text: "庐山区"
		}, {
			value: "360403",
			text: "浔阳区"
		}, {
			value: "360421",
			text: "九江县"
		}, {
			value: "360423",
			text: "武宁县"
		}, {
			value: "360424",
			text: "修水县"
		}, {
			value: "360425",
			text: "永修县"
		}, {
			value: "360426",
			text: "德安县"
		}, {
			value: "360427",
			text: "星子县"
		}, {
			value: "360428",
			text: "都昌县"
		}, {
			value: "360429",
			text: "湖口县"
		}, {
			value: "360430",
			text: "彭泽县"
		}, {
			value: "360481",
			text: "瑞昌市"
		}, {
			value: "360482",
			text: "其它区"
		}]
	}, {
		value: "360500",
		text: "新余市",
		children: [{
			value: "360502",
			text: "渝水区"
		}, {
			value: "360521",
			text: "分宜县"
		}, {
			value: "360522",
			text: "其它区"
		}]
	}, {
		value: "360600",
		text: "鹰潭市",
		children: [{
			value: "360602",
			text: "月湖区"
		}, {
			value: "360622",
			text: "余江县"
		}, {
			value: "360681",
			text: "贵溪市"
		}, {
			value: "360682",
			text: "其它区"
		}]
	}, {
		value: "360700",
		text: "赣州市",
		children: [{
			value: "360702",
			text: "章贡区"
		}, {
			value: "360721",
			text: "赣县"
		}, {
			value: "360722",
			text: "信丰县"
		}, {
			value: "360723",
			text: "大余县"
		}, {
			value: "360724",
			text: "上犹县"
		}, {
			value: "360725",
			text: "崇义县"
		}, {
			value: "360726",
			text: "安远县"
		}, {
			value: "360727",
			text: "龙南县"
		}, {
			value: "360728",
			text: "定南县"
		}, {
			value: "360729",
			text: "全南县"
		}, {
			value: "360730",
			text: "宁都县"
		}, {
			value: "360731",
			text: "于都县"
		}, {
			value: "360732",
			text: "兴国县"
		}, {
			value: "360733",
			text: "会昌县"
		}, {
			value: "360734",
			text: "寻乌县"
		}, {
			value: "360735",
			text: "石城县"
		}, {
			value: "360751",
			text: "黄金区"
		}, {
			value: "360781",
			text: "瑞金市"
		}, {
			value: "360782",
			text: "南康市"
		}, {
			value: "360783",
			text: "其它区"
		}]
	}, {
		value: "360800",
		text: "吉安市",
		children: [{
			value: "360802",
			text: "吉州区"
		}, {
			value: "360803",
			text: "青原区"
		}, {
			value: "360821",
			text: "吉安县"
		}, {
			value: "360822",
			text: "吉水县"
		}, {
			value: "360823",
			text: "峡江县"
		}, {
			value: "360824",
			text: "新干县"
		}, {
			value: "360825",
			text: "永丰县"
		}, {
			value: "360826",
			text: "泰和县"
		}, {
			value: "360827",
			text: "遂川县"
		}, {
			value: "360828",
			text: "万安县"
		}, {
			value: "360829",
			text: "安福县"
		}, {
			value: "360830",
			text: "永新县"
		}, {
			value: "360881",
			text: "井冈山市"
		}, {
			value: "360882",
			text: "其它区"
		}]
	}, {
		value: "360900",
		text: "宜春市",
		children: [{
			value: "360902",
			text: "袁州区"
		}, {
			value: "360921",
			text: "奉新县"
		}, {
			value: "360922",
			text: "万载县"
		}, {
			value: "360923",
			text: "上高县"
		}, {
			value: "360924",
			text: "宜丰县"
		}, {
			value: "360925",
			text: "靖安县"
		}, {
			value: "360926",
			text: "铜鼓县"
		}, {
			value: "360981",
			text: "丰城市"
		}, {
			value: "360982",
			text: "樟树市"
		}, {
			value: "360983",
			text: "高安市"
		}, {
			value: "360984",
			text: "其它区"
		}]
	}, {
		value: "361000",
		text: "抚州市",
		children: [{
			value: "361002",
			text: "临川区"
		}, {
			value: "361021",
			text: "南城县"
		}, {
			value: "361022",
			text: "黎川县"
		}, {
			value: "361023",
			text: "南丰县"
		}, {
			value: "361024",
			text: "崇仁县"
		}, {
			value: "361025",
			text: "乐安县"
		}, {
			value: "361026",
			text: "宜黄县"
		}, {
			value: "361027",
			text: "金溪县"
		}, {
			value: "361028",
			text: "资溪县"
		}, {
			value: "361029",
			text: "东乡县"
		}, {
			value: "361030",
			text: "广昌县"
		}, {
			value: "361031",
			text: "其它区"
		}]
	}, {
		value: "361100",
		text: "上饶市",
		children: [{
			value: "361102",
			text: "信州区"
		}, {
			value: "361121",
			text: "上饶县"
		}, {
			value: "361122",
			text: "广丰县"
		}, {
			value: "361123",
			text: "玉山县"
		}, {
			value: "361124",
			text: "铅山县"
		}, {
			value: "361125",
			text: "横峰县"
		}, {
			value: "361126",
			text: "弋阳县"
		}, {
			value: "361127",
			text: "余干县"
		}, {
			value: "361128",
			text: "鄱阳县"
		}, {
			value: "361129",
			text: "万年县"
		}, {
			value: "361130",
			text: "婺源县"
		}, {
			value: "361181",
			text: "德兴市"
		}, {
			value: "361182",
			text: "其它区"
		}]
	}]
}, {
	value: '370000',
	text: '山东省',
	children: [{
		value: "370100",
		text: "济南市",
		children: [{
			value: "370102",
			text: "历下区"
		}, {
			value: "370103",
			text: "市中区"
		}, {
			value: "370104",
			text: "槐荫区"
		}, {
			value: "370105",
			text: "天桥区"
		}, {
			value: "370112",
			text: "历城区"
		}, {
			value: "370113",
			text: "长清区"
		}, {
			value: "370124",
			text: "平阴县"
		}, {
			value: "370125",
			text: "济阳县"
		}, {
			value: "370126",
			text: "商河县"
		}, {
			value: "370181",
			text: "章丘市"
		}, {
			value: "370182",
			text: "其它区"
		}]
	}, {
		value: "370200",
		text: "青岛市",
		children: [{
			value: "370202",
			text: "市南区"
		}, {
			value: "370203",
			text: "市北区"
		}, {
			value: "370205",
			text: "四方区"
		}, {
			value: "370211",
			text: "黄岛区"
		}, {
			value: "370212",
			text: "崂山区"
		}, {
			value: "370213",
			text: "李沧区"
		}, {
			value: "370214",
			text: "城阳区"
		}, {
			value: "370251",
			text: "开发区"
		}, {
			value: "370281",
			text: "胶州市"
		}, {
			value: "370282",
			text: "即墨市"
		}, {
			value: "370283",
			text: "平度市"
		}, {
			value: "370284",
			text: "胶南市"
		}, {
			value: "370285",
			text: "莱西市"
		}, {
			value: "370286",
			text: "其它区"
		}]
	}, {
		value: "370300",
		text: "淄博市",
		children: [{
			value: "370302",
			text: "淄川区"
		}, {
			value: "370303",
			text: "张店区"
		}, {
			value: "370304",
			text: "博山区"
		}, {
			value: "370305",
			text: "临淄区"
		}, {
			value: "370306",
			text: "周村区"
		}, {
			value: "370321",
			text: "桓台县"
		}, {
			value: "370322",
			text: "高青县"
		}, {
			value: "370323",
			text: "沂源县"
		}, {
			value: "370324",
			text: "其它区"
		}]
	}, {
		value: "370400",
		text: "枣庄市",
		children: [{
			value: "370402",
			text: "市中区"
		}, {
			value: "370403",
			text: "薛城区"
		}, {
			value: "370404",
			text: "峄城区"
		}, {
			value: "370405",
			text: "台儿庄区"
		}, {
			value: "370406",
			text: "山亭区"
		}, {
			value: "370481",
			text: "滕州市"
		}, {
			value: "370482",
			text: "其它区"
		}]
	}, {
		value: "370500",
		text: "东营市",
		children: [{
			value: "370502",
			text: "东营区"
		}, {
			value: "370503",
			text: "河口区"
		}, {
			value: "370521",
			text: "垦利县"
		}, {
			value: "370522",
			text: "利津县"
		}, {
			value: "370523",
			text: "广饶县"
		}, {
			value: "370589",
			text: "西城区"
		}, {
			value: "370590",
			text: "东城区"
		}, {
			value: "370591",
			text: "其它区"
		}]
	}, {
		value: "370600",
		text: "烟台市",
		children: [{
			value: "370602",
			text: "芝罘区"
		}, {
			value: "370611",
			text: "福山区"
		}, {
			value: "370612",
			text: "牟平区"
		}, {
			value: "370613",
			text: "莱山区"
		}, {
			value: "370634",
			text: "长岛县"
		}, {
			value: "370681",
			text: "龙口市"
		}, {
			value: "370682",
			text: "莱阳市"
		}, {
			value: "370683",
			text: "莱州市"
		}, {
			value: "370684",
			text: "蓬莱市"
		}, {
			value: "370685",
			text: "招远市"
		}, {
			value: "370686",
			text: "栖霞市"
		}, {
			value: "370687",
			text: "海阳市"
		}, {
			value: "370688",
			text: "其它区"
		}]
	}, {
		value: "370700",
		text: "潍坊市",
		children: [{
			value: "370702",
			text: "潍城区"
		}, {
			value: "370703",
			text: "寒亭区"
		}, {
			value: "370704",
			text: "坊子区"
		}, {
			value: "370705",
			text: "奎文区"
		}, {
			value: "370724",
			text: "临朐县"
		}, {
			value: "370725",
			text: "昌乐县"
		}, {
			value: "370751",
			text: "开发区"
		}, {
			value: "370781",
			text: "青州市"
		}, {
			value: "370782",
			text: "诸城市"
		}, {
			value: "370783",
			text: "寿光市"
		}, {
			value: "370784",
			text: "安丘市"
		}, {
			value: "370785",
			text: "高密市"
		}, {
			value: "370786",
			text: "昌邑市"
		}, {
			value: "370787",
			text: "其它区"
		}]
	}, {
		value: "370800",
		text: "济宁市",
		children: [{
			value: "370802",
			text: "市中区"
		}, {
			value: "370811",
			text: "任城区"
		}, {
			value: "370826",
			text: "微山县"
		}, {
			value: "370827",
			text: "鱼台县"
		}, {
			value: "370828",
			text: "金乡县"
		}, {
			value: "370829",
			text: "嘉祥县"
		}, {
			value: "370830",
			text: "汶上县"
		}, {
			value: "370831",
			text: "泗水县"
		}, {
			value: "370832",
			text: "梁山县"
		}, {
			value: "370881",
			text: "曲阜市"
		}, {
			value: "370882",
			text: "兖州市"
		}, {
			value: "370883",
			text: "邹城市"
		}, {
			value: "370884",
			text: "其它区"
		}]
	}, {
		value: "370900",
		text: "泰安市",
		children: [{
			value: "370902",
			text: "泰山区"
		}, {
			value: "370903",
			text: "岱岳区"
		}, {
			value: "370921",
			text: "宁阳县"
		}, {
			value: "370923",
			text: "东平县"
		}, {
			value: "370982",
			text: "新泰市"
		}, {
			value: "370983",
			text: "肥城市"
		}, {
			value: "370984",
			text: "其它区"
		}]
	}, {
		value: "371000",
		text: "威海市",
		children: [{
			value: "371002",
			text: "环翠区"
		}, {
			value: "371081",
			text: "文登市"
		}, {
			value: "371082",
			text: "荣成市"
		}, {
			value: "371083",
			text: "乳山市"
		}, {
			value: "371084",
			text: "其它区"
		}]
	}, {
		value: "371100",
		text: "日照市",
		children: [{
			value: "371102",
			text: "东港区"
		}, {
			value: "371103",
			text: "岚山区"
		}, {
			value: "371121",
			text: "五莲县"
		}, {
			value: "371122",
			text: "莒县"
		}, {
			value: "371123",
			text: "其它区"
		}]
	}, {
		value: "371200",
		text: "莱芜市",
		children: [{
			value: "371202",
			text: "莱城区"
		}, {
			value: "371203",
			text: "钢城区"
		}, {
			value: "371204",
			text: "其它区"
		}]
	}, {
		value: "371300",
		text: "临沂市",
		children: [{
			value: "371302",
			text: "兰山区"
		}, {
			value: "371311",
			text: "罗庄区"
		}, {
			value: "371312",
			text: "河东区"
		}, {
			value: "371321",
			text: "沂南县"
		}, {
			value: "371322",
			text: "郯城县"
		}, {
			value: "371323",
			text: "沂水县"
		}, {
			value: "371324",
			text: "苍山县"
		}, {
			value: "371325",
			text: "费县"
		}, {
			value: "371326",
			text: "平邑县"
		}, {
			value: "371327",
			text: "莒南县"
		}, {
			value: "371328",
			text: "蒙阴县"
		}, {
			value: "371329",
			text: "临沭县"
		}, {
			value: "371330",
			text: "其它区"
		}]
	}, {
		value: "371400",
		text: "德州市",
		children: [{
			value: "371402",
			text: "德城区"
		}, {
			value: "371421",
			text: "陵县"
		}, {
			value: "371422",
			text: "宁津县"
		}, {
			value: "371423",
			text: "庆云县"
		}, {
			value: "371424",
			text: "临邑县"
		}, {
			value: "371425",
			text: "齐河县"
		}, {
			value: "371426",
			text: "平原县"
		}, {
			value: "371427",
			text: "夏津县"
		}, {
			value: "371428",
			text: "武城县"
		}, {
			value: "371451",
			text: "开发区"
		}, {
			value: "371481",
			text: "乐陵市"
		}, {
			value: "371482",
			text: "禹城市"
		}, {
			value: "371483",
			text: "其它区"
		}]
	}, {
		value: "371500",
		text: "聊城市",
		children: [{
			value: "371502",
			text: "东昌府区"
		}, {
			value: "371521",
			text: "阳谷县"
		}, {
			value: "371522",
			text: "莘县"
		}, {
			value: "371523",
			text: "茌平县"
		}, {
			value: "371524",
			text: "东阿县"
		}, {
			value: "371525",
			text: "冠县"
		}, {
			value: "371526",
			text: "高唐县"
		}, {
			value: "371581",
			text: "临清市"
		}, {
			value: "371582",
			text: "其它区"
		}]
	}, {
		value: "371600",
		text: "滨州市",
		children: [{
			value: "371602",
			text: "滨城区"
		}, {
			value: "371621",
			text: "惠民县"
		}, {
			value: "371622",
			text: "阳信县"
		}, {
			value: "371623",
			text: "无棣县"
		}, {
			value: "371624",
			text: "沾化县"
		}, {
			value: "371625",
			text: "博兴县"
		}, {
			value: "371626",
			text: "邹平县"
		}, {
			value: "371627",
			text: "其它区"
		}]
	}, {
		value: "371700",
		text: "菏泽市",
		children: [{
			value: "371702",
			text: "牡丹区"
		}, {
			value: "371721",
			text: "曹县"
		}, {
			value: "371722",
			text: "单县"
		}, {
			value: "371723",
			text: "成武县"
		}, {
			value: "371724",
			text: "巨野县"
		}, {
			value: "371725",
			text: "郓城县"
		}, {
			value: "371726",
			text: "鄄城县"
		}, {
			value: "371727",
			text: "定陶县"
		}, {
			value: "371728",
			text: "东明县"
		}, {
			value: "371729",
			text: "其它区"
		}]
	}]
}, {
	value: '410000',
	text: '河南省',
	children: [{
		value: "410100",
		text: "郑州市",
		children: [{
			value: "410102",
			text: "中原区"
		}, {
			value: "410103",
			text: "二七区"
		}, {
			value: "410104",
			text: "管城回族区"
		}, {
			value: "410105",
			text: "金水区"
		}, {
			value: "410106",
			text: "上街区"
		}, {
			value: "410108",
			text: "惠济区"
		}, {
			value: "410122",
			text: "中牟县"
		}, {
			value: "410181",
			text: "巩义市"
		}, {
			value: "410182",
			text: "荥阳市"
		}, {
			value: "410183",
			text: "新密市"
		}, {
			value: "410184",
			text: "新郑市"
		}, {
			value: "410185",
			text: "登封市"
		}, {
			value: "410186",
			text: "郑东新区"
		}, {
			value: "410187",
			text: "高新区"
		}, {
			value: "410188",
			text: "其它区"
		}]
	}, {
		value: "410200",
		text: "开封市",
		children: [{
			value: "410202",
			text: "龙亭区"
		}, {
			value: "410203",
			text: "顺河回族区"
		}, {
			value: "410204",
			text: "鼓楼区"
		}, {
			value: "410205",
			text: "禹王台区"
		}, {
			value: "410211",
			text: "金明区"
		}, {
			value: "410221",
			text: "杞县"
		}, {
			value: "410222",
			text: "通许县"
		}, {
			value: "410223",
			text: "尉氏县"
		}, {
			value: "410224",
			text: "开封县"
		}, {
			value: "410225",
			text: "兰考县"
		}, {
			value: "410226",
			text: "其它区"
		}]
	}, {
		value: "410300",
		text: "洛阳市",
		children: [{
			value: "410302",
			text: "老城区"
		}, {
			value: "410303",
			text: "西工区"
		}, {
			value: "410304",
			text: "廛河回族区"
		}, {
			value: "410305",
			text: "涧西区"
		}, {
			value: "410306",
			text: "吉利区"
		}, {
			value: "410307",
			text: "洛龙区"
		}, {
			value: "410322",
			text: "孟津县"
		}, {
			value: "410323",
			text: "新安县"
		}, {
			value: "410324",
			text: "栾川县"
		}, {
			value: "410325",
			text: "嵩县"
		}, {
			value: "410326",
			text: "汝阳县"
		}, {
			value: "410327",
			text: "宜阳县"
		}, {
			value: "410328",
			text: "洛宁县"
		}, {
			value: "410329",
			text: "伊川县"
		}, {
			value: "410381",
			text: "偃师市"
		}, {
			value: "471004",
			text: "高新区"
		}, {
			value: "471005",
			text: "其它区"
		}]
	}, {
		value: "410400",
		text: "平顶山市",
		children: [{
			value: "410402",
			text: "新华区"
		}, {
			value: "410403",
			text: "卫东区"
		}, {
			value: "410404",
			text: "石龙区"
		}, {
			value: "410411",
			text: "湛河区"
		}, {
			value: "410421",
			text: "宝丰县"
		}, {
			value: "410422",
			text: "叶县"
		}, {
			value: "410423",
			text: "鲁山县"
		}, {
			value: "410425",
			text: "郏县"
		}, {
			value: "410481",
			text: "舞钢市"
		}, {
			value: "410482",
			text: "汝州市"
		}, {
			value: "410483",
			text: "其它区"
		}]
	}, {
		value: "410500",
		text: "安阳市",
		children: [{
			value: "410502",
			text: "文峰区"
		}, {
			value: "410503",
			text: "北关区"
		}, {
			value: "410505",
			text: "殷都区"
		}, {
			value: "410506",
			text: "龙安区"
		}, {
			value: "410522",
			text: "安阳县"
		}, {
			value: "410523",
			text: "汤阴县"
		}, {
			value: "410526",
			text: "滑县"
		}, {
			value: "410527",
			text: "内黄县"
		}, {
			value: "410581",
			text: "林州市"
		}, {
			value: "410582",
			text: "其它区"
		}]
	}, {
		value: "410600",
		text: "鹤壁市",
		children: [{
			value: "410602",
			text: "鹤山区"
		}, {
			value: "410603",
			text: "山城区"
		}, {
			value: "410611",
			text: "淇滨区"
		}, {
			value: "410621",
			text: "浚县"
		}, {
			value: "410622",
			text: "淇县"
		}, {
			value: "410623",
			text: "其它区"
		}]
	}, {
		value: "410700",
		text: "新乡市",
		children: [{
			value: "410702",
			text: "红旗区"
		}, {
			value: "410703",
			text: "卫滨区"
		}, {
			value: "410704",
			text: "凤泉区"
		}, {
			value: "410711",
			text: "牧野区"
		}, {
			value: "410721",
			text: "新乡县"
		}, {
			value: "410724",
			text: "获嘉县"
		}, {
			value: "410725",
			text: "原阳县"
		}, {
			value: "410726",
			text: "延津县"
		}, {
			value: "410727",
			text: "封丘县"
		}, {
			value: "410728",
			text: "长垣县"
		}, {
			value: "410781",
			text: "卫辉市"
		}, {
			value: "410782",
			text: "辉县市"
		}, {
			value: "410783",
			text: "其它区"
		}]
	}, {
		value: "410800",
		text: "焦作市",
		children: [{
			value: "410802",
			text: "解放区"
		}, {
			value: "410803",
			text: "中站区"
		}, {
			value: "410804",
			text: "马村区"
		}, {
			value: "410811",
			text: "山阳区"
		}, {
			value: "410821",
			text: "修武县"
		}, {
			value: "410822",
			text: "博爱县"
		}, {
			value: "410823",
			text: "武陟县"
		}, {
			value: "410825",
			text: "温县"
		}, {
			value: "410882",
			text: "沁阳市"
		}, {
			value: "410883",
			text: "孟州市"
		}, {
			value: "410884",
			text: "其它区"
		}]
	}, {
		value: "410900",
		text: "濮阳市",
		children: [{
			value: "410902",
			text: "华龙区"
		}, {
			value: "410922",
			text: "清丰县"
		}, {
			value: "410923",
			text: "南乐县"
		}, {
			value: "410926",
			text: "范县"
		}, {
			value: "410927",
			text: "台前县"
		}, {
			value: "410928",
			text: "濮阳县"
		}, {
			value: "410929",
			text: "其它区"
		}]
	}, {
		value: "411000",
		text: "许昌市",
		children: [{
			value: "410902",
			text: "华龙区"
		}, {
			value: "410922",
			text: "清丰县"
		}, {
			value: "410923",
			text: "南乐县"
		}, {
			value: "410926",
			text: "范县"
		}, {
			value: "410927",
			text: "台前县"
		}, {
			value: "410928",
			text: "濮阳县"
		}, {
			value: "410929",
			text: "其它区"
		}]
	}, {
		value: "411100",
		text: "漯河市",
		children: [{
			value: "411002",
			text: "魏都区"
		}, {
			value: "411023",
			text: "许昌县"
		}, {
			value: "411024",
			text: "鄢陵县"
		}, {
			value: "411025",
			text: "襄城县"
		}, {
			value: "411081",
			text: "禹州市"
		}, {
			value: "411082",
			text: "长葛市"
		}, {
			value: "411083",
			text: "其它区"
		}]
	}, {
		value: "411200",
		text: "三门峡市",
		children: [{
			value: "411102",
			text: "源汇区"
		}, {
			value: "411103",
			text: "郾城区"
		}, {
			value: "411104",
			text: "召陵区"
		}, {
			value: "411121",
			text: "舞阳县"
		}, {
			value: "411122",
			text: "临颍县"
		}, {
			value: "411123",
			text: "其它区"
		}]
	}, {
		value: "411300",
		text: "南阳市",
		children: [{
			value: "411202",
			text: "湖滨区"
		}, {
			value: "411221",
			text: "渑池县"
		}, {
			value: "411222",
			text: "陕县"
		}, {
			value: "411224",
			text: "卢氏县"
		}, {
			value: "411281",
			text: "义马市"
		}, {
			value: "411282",
			text: "灵宝市"
		}, {
			value: "411283",
			text: "其它区"
		}]
	}, {
		value: "411400",
		text: "商丘市",
		children: [{
			value: "411302",
			text: "宛城区"
		}, {
			value: "411303",
			text: "卧龙区"
		}, {
			value: "411321",
			text: "南召县"
		}, {
			value: "411322",
			text: "方城县"
		}, {
			value: "411323",
			text: "西峡县"
		}, {
			value: "411324",
			text: "镇平县"
		}, {
			value: "411325",
			text: "内乡县"
		}, {
			value: "411326",
			text: "淅川县"
		}, {
			value: "411327",
			text: "社旗县"
		}, {
			value: "411328",
			text: "唐河县"
		}, {
			value: "411329",
			text: "新野县"
		}, {
			value: "411330",
			text: "桐柏县"
		}, {
			value: "411381",
			text: "邓州市"
		}, {
			value: "411382",
			text: "其它区"
		}]
	}, {
		value: "411500",
		text: "信阳市",
		children: [{
			value: "411402",
			text: "梁园区"
		}, {
			value: "411403",
			text: "睢阳区"
		}, {
			value: "411421",
			text: "民权县"
		}, {
			value: "411422",
			text: "睢县"
		}, {
			value: "411423",
			text: "宁陵县"
		}, {
			value: "411424",
			text: "柘城县"
		}, {
			value: "411425",
			text: "虞城县"
		}, {
			value: "411426",
			text: "夏邑县"
		}, {
			value: "411481",
			text: "永城市"
		}, {
			value: "411482",
			text: "其它区"
		}]
	}, {
		value: "411600",
		text: "周口市",
		children: [{
			value: "411502",
			text: "浉河区"
		}, {
			value: "411503",
			text: "平桥区"
		}, {
			value: "411521",
			text: "罗山县"
		}, {
			value: "411522",
			text: "光山县"
		}, {
			value: "411523",
			text: "新县"
		}, {
			value: "411524",
			text: "商城县"
		}, {
			value: "411525",
			text: "固始县"
		}, {
			value: "411526",
			text: "潢川县"
		}, {
			value: "411527",
			text: "淮滨县"
		}, {
			value: "411528",
			text: "息县"
		}, {
			value: "411529",
			text: "其它区"
		}]
	}, {
		value: "411700",
		text: "驻马店市",
		children: [{
			value: "411602",
			text: "川汇区"
		}, {
			value: "411621",
			text: "扶沟县"
		}, {
			value: "411622",
			text: "西华县"
		}, {
			value: "411623",
			text: "商水县"
		}, {
			value: "411624",
			text: "沈丘县"
		}, {
			value: "411625",
			text: "郸城县"
		}, {
			value: "411626",
			text: "淮阳县"
		}, {
			value: "411627",
			text: "太康县"
		}, {
			value: "411628",
			text: "鹿邑县"
		}, {
			value: "411681",
			text: "项城市"
		}, {
			value: "411682",
			text: "其它区"
		}]
	}]
}, {
	value: '420000',
	text: '湖北省',
	children: [{
		value: "420100",
		text: "武汉市",
		children: [{
			value: "420102",
			text: "江岸区"
		}, {
			value: "420103",
			text: "江汉区"
		}, {
			value: "420104",
			text: "硚口区"
		}, {
			value: "420105",
			text: "汉阳区"
		}, {
			value: "420106",
			text: "武昌区"
		}, {
			value: "420107",
			text: "青山区"
		}, {
			value: "420111",
			text: "洪山区"
		}, {
			value: "420112",
			text: "东西湖区"
		}, {
			value: "420113",
			text: "汉南区"
		}, {
			value: "420114",
			text: "蔡甸区"
		}, {
			value: "420115",
			text: "江夏区"
		}, {
			value: "420116",
			text: "黄陂区"
		}, {
			value: "420117",
			text: "新洲区"
		}, {
			value: "420118",
			text: "其它区"
		}]
	}, {
		value: "420200",
		text: "黄石市",
		children: [{
			value: "420202",
			text: "黄石港区"
		}, {
			value: "420203",
			text: "西塞山区"
		}, {
			value: "420204",
			text: "下陆区"
		}, {
			value: "420205",
			text: "铁山区"
		}, {
			value: "420222",
			text: "阳新县"
		}, {
			value: "420281",
			text: "大冶市"
		}, {
			value: "420282",
			text: "其它区"
		}]
	}, {
		value: "420300",
		text: "十堰市",
		children: [{
			value: "420302",
			text: "茅箭区"
		}, {
			value: "420303",
			text: "张湾区"
		}, {
			value: "420321",
			text: "郧县"
		}, {
			value: "420322",
			text: "郧西县"
		}, {
			value: "420323",
			text: "竹山县"
		}, {
			value: "420324",
			text: "竹溪县"
		}, {
			value: "420325",
			text: "房县"
		}, {
			value: "420381",
			text: "丹江口市"
		}, {
			value: "420382",
			text: "城区"
		}, {
			value: "420383",
			text: "其它区"
		}]
	}, {
		value: "420500",
		text: "宜昌市",
		children: [{
			value: "420502",
			text: "西陵区"
		}, {
			value: "420503",
			text: "伍家岗区"
		}, {
			value: "420504",
			text: "点军区"
		}, {
			value: "420505",
			text: "猇亭区"
		}, {
			value: "420506",
			text: "夷陵区"
		}, {
			value: "420525",
			text: "远安县"
		}, {
			value: "420526",
			text: "兴山县"
		}, {
			value: "420527",
			text: "秭归县"
		}, {
			value: "420528",
			text: "长阳土家族自治县"
		}, {
			value: "420529",
			text: "五峰土家族自治县"
		}, {
			value: "420551",
			text: "葛洲坝区"
		}, {
			value: "420552",
			text: "开发区"
		}, {
			value: "420581",
			text: "宜都市"
		}, {
			value: "420582",
			text: "当阳市"
		}, {
			value: "420583",
			text: "枝江市"
		}, {
			value: "420584",
			text: "其它区"
		}]
	}, {
		value: "420600",
		text: "襄阳市",
		children: [{
			value: "420602",
			text: "襄城区"
		}, {
			value: "420606",
			text: "樊城区"
		}, {
			value: "420607",
			text: "襄州区"
		}, {
			value: "420624",
			text: "南漳县"
		}, {
			value: "420625",
			text: "谷城县"
		}, {
			value: "420626",
			text: "保康县"
		}, {
			value: "420682",
			text: "老河口市"
		}, {
			value: "420683",
			text: "枣阳市"
		}, {
			value: "420684",
			text: "宜城市"
		}, {
			value: "420685",
			text: "其它区"
		}]
	}, {
		value: "420700",
		text: "鄂州市",
		children: [{
			value: "420702",
			text: "梁子湖区"
		}, {
			value: "420703",
			text: "华容区"
		}, {
			value: "420704",
			text: "鄂城区"
		}, {
			value: "420705",
			text: "其它区"
		}]
	}, {
		value: "420800",
		text: "荆门市",
		children: [{
			value: "420802",
			text: "东宝区"
		}, {
			value: "420804",
			text: "掇刀区"
		}, {
			value: "420821",
			text: "京山县"
		}, {
			value: "420822",
			text: "沙洋县"
		}, {
			value: "420881",
			text: "钟祥市"
		}, {
			value: "420882",
			text: "其它区"
		}]
	}, {
		value: "420900",
		text: "孝感市",
		children: [{
			value: "420902",
			text: "孝南区"
		}, {
			value: "420921",
			text: "孝昌县"
		}, {
			value: "420922",
			text: "大悟县"
		}, {
			value: "420923",
			text: "云梦县"
		}, {
			value: "420981",
			text: "应城市"
		}, {
			value: "420982",
			text: "安陆市"
		}, {
			value: "420984",
			text: "汉川市"
		}, {
			value: "420985",
			text: "其它区"
		}]
	}, {
		value: "421000",
		text: "荆州市",
		children: [{
			value: "421002",
			text: "沙市区"
		}, {
			value: "421003",
			text: "荆州区"
		}, {
			value: "421022",
			text: "公安县"
		}, {
			value: "421023",
			text: "监利县"
		}, {
			value: "421024",
			text: "江陵县"
		}, {
			value: "421081",
			text: "石首市"
		}, {
			value: "421083",
			text: "洪湖市"
		}, {
			value: "421087",
			text: "松滋市"
		}, {
			value: "421088",
			text: "其它区"
		}]
	}, {
		value: "421100",
		text: "黄冈市",
		children: [{
			value: "421102",
			text: "黄州区"
		}, {
			value: "421121",
			text: "团风县"
		}, {
			value: "421122",
			text: "红安县"
		}, {
			value: "421123",
			text: "罗田县"
		}, {
			value: "421124",
			text: "英山县"
		}, {
			value: "421125",
			text: "浠水县"
		}, {
			value: "421126",
			text: "蕲春县"
		}, {
			value: "421127",
			text: "黄梅县"
		}, {
			value: "421181",
			text: "麻城市"
		}, {
			value: "421182",
			text: "武穴市"
		}, {
			value: "421183",
			text: "其它区"
		}]
	}, {
		value: "421200",
		text: "咸宁市",
		children: [{
			value: "421202",
			text: "咸安区"
		}, {
			value: "421221",
			text: "嘉鱼县"
		}, {
			value: "421222",
			text: "通城县"
		}, {
			value: "421223",
			text: "崇阳县"
		}, {
			value: "421224",
			text: "通山县"
		}, {
			value: "421281",
			text: "赤壁市"
		}, {
			value: "421282",
			text: "温泉城区"
		}, {
			value: "421283",
			text: "其它区"
		}]
	}, {
		value: "421300",
		text: "随州市",
		children: [{
			value: "421302",
			text: "曾都区"
		}, {
			value: "421321",
			text: "随县"
		}, {
			value: "421381",
			text: "广水市"
		}, {
			value: "421382",
			text: "其它区"
		}]
	}, {
		value: "422800",
		text: "恩施土家族苗族自治州",
		children: [{
			value: "422801",
			text: "恩施市"
		}, {
			value: "422802",
			text: "利川市"
		}, {
			value: "422822",
			text: "建始县"
		}, {
			value: "422823",
			text: "巴东县"
		}, {
			value: "422825",
			text: "宣恩县"
		}, {
			value: "422826",
			text: "咸丰县"
		}, {
			value: "422827",
			text: "来凤县"
		}, {
			value: "422828",
			text: "鹤峰县"
		}, {
			value: "422829",
			text: "其它区"
		}]
	}, {
		value: "429004",
		text: "仙桃市"
	}, {
		value: "429005",
		text: "潜江市"
	}, {
		value: "429006",
		text: "天门市"
	}, {
		value: "429021",
		text: "神农架林区"
	}]
}, {
	value: '430000',
	text: '湖南省',
	children: [{
		value: "430100",
		text: "长沙市",
		children: [{
			value: "430102",
			text: "芙蓉区"
		}, {
			value: "430103",
			text: "天心区"
		}, {
			value: "430104",
			text: "岳麓区"
		}, {
			value: "430105",
			text: "开福区"
		}, {
			value: "430111",
			text: "雨花区"
		}, {
			value: "430121",
			text: "长沙县"
		}, {
			value: "430122",
			text: "望城县"
		}, {
			value: "430124",
			text: "宁乡县"
		}, {
			value: "430181",
			text: "浏阳市"
		}, {
			value: "430182",
			text: "其它区"
		}]
	}, {
		value: "430200",
		text: "株洲市",
		children: [{
			value: "430202",
			text: "荷塘区"
		}, {
			value: "430203",
			text: "芦淞区"
		}, {
			value: "430204",
			text: "石峰区"
		}, {
			value: "430211",
			text: "天元区"
		}, {
			value: "430221",
			text: "株洲县"
		}, {
			value: "430223",
			text: "攸县"
		}, {
			value: "430224",
			text: "茶陵县"
		}, {
			value: "430225",
			text: "炎陵县"
		}, {
			value: "430281",
			text: "醴陵市"
		}, {
			value: "430282",
			text: "其它区"
		}]
	}, {
		value: "430300",
		text: "湘潭市",
		children: [{
			value: "430302",
			text: "雨湖区"
		}, {
			value: "430304",
			text: "岳塘区"
		}, {
			value: "430321",
			text: "湘潭县"
		}, {
			value: "430381",
			text: "湘乡市"
		}, {
			value: "430382",
			text: "韶山市"
		}, {
			value: "430383",
			text: "其它区"
		}]
	}, {
		value: "430400",
		text: "衡阳市",
		children: [{
			value: "430405",
			text: "珠晖区"
		}, {
			value: "430406",
			text: "雁峰区"
		}, {
			value: "430407",
			text: "石鼓区"
		}, {
			value: "430408",
			text: "蒸湘区"
		}, {
			value: "430412",
			text: "南岳区"
		}, {
			value: "430421",
			text: "衡阳县"
		}, {
			value: "430422",
			text: "衡南县"
		}, {
			value: "430423",
			text: "衡山县"
		}, {
			value: "430424",
			text: "衡东县"
		}, {
			value: "430426",
			text: "祁东县"
		}, {
			value: "430481",
			text: "耒阳市"
		}, {
			value: "430482",
			text: "常宁市"
		}, {
			value: "430483",
			text: "其它区"
		}]
	}, {
		value: "430500",
		text: "邵阳市",
		children: [{
			value: "430502",
			text: "双清区"
		}, {
			value: "430503",
			text: "大祥区"
		}, {
			value: "430511",
			text: "北塔区"
		}, {
			value: "430521",
			text: "邵东县"
		}, {
			value: "430522",
			text: "新邵县"
		}, {
			value: "430523",
			text: "邵阳县"
		}, {
			value: "430524",
			text: "隆回县"
		}, {
			value: "430525",
			text: "洞口县"
		}, {
			value: "430527",
			text: "绥宁县"
		}, {
			value: "430528",
			text: "新宁县"
		}, {
			value: "430529",
			text: "城步苗族自治县"
		}, {
			value: "430581",
			text: "武冈市"
		}, {
			value: "430582",
			text: "其它区"
		}]
	}, {
		value: "430600",
		text: "岳阳市",
		children: [{
			value: "430602",
			text: "岳阳楼区"
		}, {
			value: "430603",
			text: "云溪区"
		}, {
			value: "430611",
			text: "君山区"
		}, {
			value: "430621",
			text: "岳阳县"
		}, {
			value: "430623",
			text: "华容县"
		}, {
			value: "430624",
			text: "湘阴县"
		}, {
			value: "430626",
			text: "平江县"
		}, {
			value: "430681",
			text: "汨罗市"
		}, {
			value: "430682",
			text: "临湘市"
		}, {
			value: "430683",
			text: "其它区"
		}]
	}, {
		value: "430700",
		text: "常德市",
		children: [{
			value: "430702",
			text: "武陵区"
		}, {
			value: "430703",
			text: "鼎城区"
		}, {
			value: "430721",
			text: "安乡县"
		}, {
			value: "430722",
			text: "汉寿县"
		}, {
			value: "430723",
			text: "澧县"
		}, {
			value: "430724",
			text: "临澧县"
		}, {
			value: "430725",
			text: "桃源县"
		}, {
			value: "430726",
			text: "石门县"
		}, {
			value: "430781",
			text: "津市市"
		}, {
			value: "430782",
			text: "其它区"
		}]
	}, {
		value: "430800",
		text: "张家界市",
		children: [{
			value: "430802",
			text: "永定区"
		}, {
			value: "430811",
			text: "武陵源区"
		}, {
			value: "430821",
			text: "慈利县"
		}, {
			value: "430822",
			text: "桑植县"
		}, {
			value: "430823",
			text: "其它区"
		}]
	}, {
		value: "430900",
		text: "益阳市",
		children: [{
			value: "430902",
			text: "资阳区"
		}, {
			value: "430903",
			text: "赫山区"
		}, {
			value: "430921",
			text: "南县"
		}, {
			value: "430922",
			text: "桃江县"
		}, {
			value: "430923",
			text: "安化县"
		}, {
			value: "430981",
			text: "沅江市"
		}, {
			value: "430982",
			text: "其它区"
		}]
	}, {
		value: "431000",
		text: "郴州市",
		children: [{
			value: "431002",
			text: "北湖区"
		}, {
			value: "431003",
			text: "苏仙区"
		}, {
			value: "431021",
			text: "桂阳县"
		}, {
			value: "431022",
			text: "宜章县"
		}, {
			value: "431023",
			text: "永兴县"
		}, {
			value: "431024",
			text: "嘉禾县"
		}, {
			value: "431025",
			text: "临武县"
		}, {
			value: "431026",
			text: "汝城县"
		}, {
			value: "431027",
			text: "桂东县"
		}, {
			value: "431028",
			text: "安仁县"
		}, {
			value: "431081",
			text: "资兴市"
		}, {
			value: "431082",
			text: "其它区"
		}]
	}, {
		value: "431100",
		text: "永州市",
		children: [{
			value: "431102",
			text: "零陵区"
		}, {
			value: "431103",
			text: "冷水滩区"
		}, {
			value: "431121",
			text: "祁阳县"
		}, {
			value: "431122",
			text: "东安县"
		}, {
			value: "431123",
			text: "双牌县"
		}, {
			value: "431124",
			text: "道县"
		}, {
			value: "431125",
			text: "江永县"
		}, {
			value: "431126",
			text: "宁远县"
		}, {
			value: "431127",
			text: "蓝山县"
		}, {
			value: "431128",
			text: "新田县"
		}, {
			value: "431129",
			text: "江华瑶族自治县"
		}, {
			value: "431130",
			text: "其它区"
		}]
	}, {
		value: "431200",
		text: "怀化市",
		children: [{
			value: "431202",
			text: "鹤城区"
		}, {
			value: "431221",
			text: "中方县"
		}, {
			value: "431222",
			text: "沅陵县"
		}, {
			value: "431223",
			text: "辰溪县"
		}, {
			value: "431224",
			text: "溆浦县"
		}, {
			value: "431225",
			text: "会同县"
		}, {
			value: "431226",
			text: "麻阳苗族自治县"
		}, {
			value: "431227",
			text: "新晃侗族自治县"
		}, {
			value: "431228",
			text: "芷江侗族自治县"
		}, {
			value: "431229",
			text: "靖州苗族侗族自治县"
		}, {
			value: "431230",
			text: "通道侗族自治县"
		}, {
			value: "431281",
			text: "洪江市"
		}, {
			value: "431282",
			text: "其它区"
		}]
	}, {
		value: "431300",
		text: "娄底市",
		children: [{
			value: "431302",
			text: "娄星区"
		}, {
			value: "431321",
			text: "双峰县"
		}, {
			value: "431322",
			text: "新化县"
		}, {
			value: "431381",
			text: "冷水江市"
		}, {
			value: "431382",
			text: "涟源市"
		}, {
			value: "431383",
			text: "其它区"
		}]
	}, {
		value: "433100",
		text: "湘西土家族苗族自治州",
		children: [{
			value: "433101",
			text: "吉首市"
		}, {
			value: "433122",
			text: "泸溪县"
		}, {
			value: "433123",
			text: "凤凰县"
		}, {
			value: "433124",
			text: "花垣县"
		}, {
			value: "433125",
			text: "保靖县"
		}, {
			value: "433126",
			text: "古丈县"
		}, {
			value: "433127",
			text: "永顺县"
		}, {
			value: "433130",
			text: "龙山县"
		}, {
			value: "433131",
			text: "其它区"
		}]
	}]
}, {
	value: '440000',
	text: '广东省',
	children: [{
		value: "440100",
		text: "广州市",
		children: [{
			value: "440103",
			text: "荔湾区"
		}, {
			value: "440104",
			text: "越秀区"
		}, {
			value: "440105",
			text: "海珠区"
		}, {
			value: "440106",
			text: "天河区"
		}, {
			value: "440111",
			text: "白云区"
		}, {
			value: "440112",
			text: "黄埔区"
		}, {
			value: "440113",
			text: "番禺区"
		}, {
			value: "440114",
			text: "花都区"
		}, {
			value: "440115",
			text: "南沙区"
		}, {
			value: "440116",
			text: "萝岗区"
		}, {
			value: "440183",
			text: "增城市"
		}, {
			value: "440184",
			text: "从化市"
		}, {
			value: "440188",
			text: "东山区"
		}, {
			value: "440189",
			text: "其它区"
		}]
	}, {
		value: "440200",
		text: "韶关市",
		children: [{
			value: "440203",
			text: "武江区"
		}, {
			value: "440204",
			text: "浈江区"
		}, {
			value: "440205",
			text: "曲江区"
		}, {
			value: "440222",
			text: "始兴县"
		}, {
			value: "440224",
			text: "仁化县"
		}, {
			value: "440229",
			text: "翁源县"
		}, {
			value: "440232",
			text: "乳源瑶族自治县"
		}, {
			value: "440233",
			text: "新丰县"
		}, {
			value: "440281",
			text: "乐昌市"
		}, {
			value: "440282",
			text: "南雄市"
		}, {
			value: "440283",
			text: "其它区"
		}]
	}, {
		value: "440300",
		text: "深圳市",
		children: [{
			value: "440303",
			text: "罗湖区"
		}, {
			value: "440304",
			text: "福田区"
		}, {
			value: "440305",
			text: "南山区"
		}, {
			value: "440306",
			text: "宝安区"
		}, {
			value: "440307",
			text: "龙岗区"
		}, {
			value: "440308",
			text: "盐田区"
		}, {
			value: "440309",
			text: "其它区"
		}]
	}, {
		value: "440400",
		text: "珠海市",
		children: [{
			value: "440402",
			text: "香洲区"
		}, {
			value: "440403",
			text: "斗门区"
		}, {
			value: "440404",
			text: "金湾区"
		}, {
			value: "440486",
			text: "金唐区"
		}, {
			value: "440487",
			text: "南湾区"
		}, {
			value: "440488",
			text: "其它区"
		}]
	}, {
		value: "440500",
		text: "汕头市",
		children: [{
			value: "440507",
			text: "龙湖区"
		}, {
			value: "440511",
			text: "金平区"
		}, {
			value: "440512",
			text: "濠江区"
		}, {
			value: "440513",
			text: "潮阳区"
		}, {
			value: "440514",
			text: "潮南区"
		}, {
			value: "440515",
			text: "澄海区"
		}, {
			value: "440523",
			text: "南澳县"
		}, {
			value: "440524",
			text: "其它区"
		}]
	}, {
		value: "440600",
		text: "佛山市",
		children: [{
			value: "440604",
			text: "禅城区"
		}, {
			value: "440605",
			text: "南海区"
		}, {
			value: "440606",
			text: "顺德区"
		}, {
			value: "440607",
			text: "三水区"
		}, {
			value: "440608",
			text: "高明区"
		}, {
			value: "440609",
			text: "其它区"
		}]
	}, {
		value: "440700",
		text: "江门市",
		children: [{
			value: "440703",
			text: "蓬江区"
		}, {
			value: "440704",
			text: "江海区"
		}, {
			value: "440705",
			text: "新会区"
		}, {
			value: "440781",
			text: "台山市"
		}, {
			value: "440783",
			text: "开平市"
		}, {
			value: "440784",
			text: "鹤山市"
		}, {
			value: "440785",
			text: "恩平市"
		}, {
			value: "440786",
			text: "其它区"
		}]
	}, {
		value: "440800",
		text: "湛江市",
		children: [{
			value: "440802",
			text: "赤坎区"
		}, {
			value: "440803",
			text: "霞山区"
		}, {
			value: "440804",
			text: "坡头区"
		}, {
			value: "440811",
			text: "麻章区"
		}, {
			value: "440823",
			text: "遂溪县"
		}, {
			value: "440825",
			text: "徐闻县"
		}, {
			value: "440881",
			text: "廉江市"
		}, {
			value: "440882",
			text: "雷州市"
		}, {
			value: "440883",
			text: "吴川市"
		}, {
			value: "440884",
			text: "其它区"
		}]
	}, {
		value: "440900",
		text: "茂名市",
		children: [{
			value: "440902",
			text: "茂南区"
		}, {
			value: "440903",
			text: "茂港区"
		}, {
			value: "440923",
			text: "电白县"
		}, {
			value: "440981",
			text: "高州市"
		}, {
			value: "440982",
			text: "化州市"
		}, {
			value: "440983",
			text: "信宜市"
		}, {
			value: "440984",
			text: "其它区"
		}]
	}, {
		value: "441200",
		text: "肇庆市",
		children: [{
			value: "441202",
			text: "端州区"
		}, {
			value: "441203",
			text: "鼎湖区"
		}, {
			value: "441223",
			text: "广宁县"
		}, {
			value: "441224",
			text: "怀集县"
		}, {
			value: "441225",
			text: "封开县"
		}, {
			value: "441226",
			text: "德庆县"
		}, {
			value: "441283",
			text: "高要市"
		}, {
			value: "441284",
			text: "四会市"
		}, {
			value: "441285",
			text: "其它区"
		}]
	}, {
		value: "441300",
		text: "惠州市",
		children: [{
			value: "441302",
			text: "惠城区"
		}, {
			value: "441303",
			text: "惠阳区"
		}, {
			value: "441322",
			text: "博罗县"
		}, {
			value: "441323",
			text: "惠东县"
		}, {
			value: "441324",
			text: "龙门县"
		}, {
			value: "441325",
			text: "其它区"
		}]
	}, {
		value: "441400",
		text: "梅州市",
		children: [{
			value: "441402",
			text: "梅江区"
		}, {
			value: "441421",
			text: "梅县"
		}, {
			value: "441422",
			text: "大埔县"
		}, {
			value: "441423",
			text: "丰顺县"
		}, {
			value: "441424",
			text: "五华县"
		}, {
			value: "441426",
			text: "平远县"
		}, {
			value: "441427",
			text: "蕉岭县"
		}, {
			value: "441481",
			text: "兴宁市"
		}, {
			value: "441482",
			text: "其它区"
		}]
	}, {
		value: "441500",
		text: "汕尾市",
		children: [{
			value: "441502",
			text: "城区"
		}, {
			value: "441521",
			text: "海丰县"
		}, {
			value: "441523",
			text: "陆河县"
		}, {
			value: "441581",
			text: "陆丰市"
		}, {
			value: "441582",
			text: "其它区"
		}]
	}, {
		value: "441600",
		text: "河源市",
		children: [{
			value: "441602",
			text: "源城区"
		}, {
			value: "441621",
			text: "紫金县"
		}, {
			value: "441622",
			text: "龙川县"
		}, {
			value: "441623",
			text: "连平县"
		}, {
			value: "441624",
			text: "和平县"
		}, {
			value: "441625",
			text: "东源县"
		}, {
			value: "441626",
			text: "其它区"
		}]
	}, {
		value: "441700",
		text: "阳江市",
		children: [{
			value: "441702",
			text: "江城区"
		}, {
			value: "441721",
			text: "阳西县"
		}, {
			value: "441723",
			text: "阳东县"
		}, {
			value: "441781",
			text: "阳春市"
		}, {
			value: "441782",
			text: "其它区"
		}]
	}, {
		value: "441800",
		text: "清远市",
		children: [{
			value: "441802",
			text: "清城区"
		}, {
			value: "441821",
			text: "佛冈县"
		}, {
			value: "441823",
			text: "阳山县"
		}, {
			value: "441825",
			text: "连山壮族瑶族自治县"
		}, {
			value: "441826",
			text: "连南瑶族自治县"
		}, {
			value: "441827",
			text: "清新县"
		}, {
			value: "441881",
			text: "英德市"
		}, {
			value: "441882",
			text: "连州市"
		}, {
			value: "441883",
			text: "其它区"
		}]
	}, {
		value: "441900",
		text: "东莞市"
	}, {
		value: "442000",
		text: "中山市"
	}, {
		value: "445100",
		text: "潮州市",
		children: [{
			value: "445102",
			text: "湘桥区"
		}, {
			value: "445121",
			text: "潮安县"
		}, {
			value: "445122",
			text: "饶平县"
		}, {
			value: "445185",
			text: "枫溪区"
		}, {
			value: "445186",
			text: "其它区"
		}]
	}, {
		value: "445200",
		text: "揭阳市",
		children: [{
			value: "445202",
			text: "榕城区"
		}, {
			value: "445221",
			text: "揭东县"
		}, {
			value: "445222",
			text: "揭西县"
		}, {
			value: "445224",
			text: "惠来县"
		}, {
			value: "445281",
			text: "普宁市"
		}, {
			value: "445284",
			text: "东山区"
		}, {
			value: "445285",
			text: "其它区"
		}]
	}, {
		value: "445300",
		text: "云浮市",
		children: [{
			value: "445302",
			text: "云城区"
		}, {
			value: "445321",
			text: "新兴县"
		}, {
			value: "445322",
			text: "郁南县"
		}, {
			value: "445323",
			text: "云安县"
		}, {
			value: "445381",
			text: "罗定市"
		}, {
			value: "445382",
			text: "其它区"
		}]
	}]
}, {
	value: '450000',
	text: '广西壮族',
	children: [{
		value: "450100",
		text: "南宁市",
		children: [{
			value: "450102",
			text: "兴宁区"
		}, {
			value: "450103",
			text: "青秀区"
		}, {
			value: "450105",
			text: "江南区"
		}, {
			value: "450107",
			text: "西乡塘区"
		}, {
			value: "450108",
			text: "良庆区"
		}, {
			value: "450109",
			text: "邕宁区"
		}, {
			value: "450122",
			text: "武鸣县"
		}, {
			value: "450123",
			text: "隆安县"
		}, {
			value: "450124",
			text: "马山县"
		}, {
			value: "450125",
			text: "上林县"
		}, {
			value: "450126",
			text: "宾阳县"
		}, {
			value: "450127",
			text: "横县"
		}, {
			value: "450128",
			text: "其它区"
		}]
	}, {
		value: "450200",
		text: "柳州市",
		children: [{
			value: "450202",
			text: "城中区"
		}, {
			value: "450203",
			text: "鱼峰区"
		}, {
			value: "450204",
			text: "柳南区"
		}, {
			value: "450205",
			text: "柳北区"
		}, {
			value: "450221",
			text: "柳江县"
		}, {
			value: "450222",
			text: "柳城县"
		}, {
			value: "450223",
			text: "鹿寨县"
		}, {
			value: "450224",
			text: "融安县"
		}, {
			value: "450225",
			text: "融水苗族自治县"
		}, {
			value: "450226",
			text: "三江侗族自治县"
		}, {
			value: "450227",
			text: "其它区"
		}]
	}, {
		value: "450300",
		text: "桂林市",
		children: [{
			value: "450302",
			text: "秀峰区"
		}, {
			value: "450303",
			text: "叠彩区"
		}, {
			value: "450304",
			text: "象山区"
		}, {
			value: "450305",
			text: "七星区"
		}, {
			value: "450311",
			text: "雁山区"
		}, {
			value: "450321",
			text: "阳朔县"
		}, {
			value: "450322",
			text: "临桂县"
		}, {
			value: "450323",
			text: "灵川县"
		}, {
			value: "450324",
			text: "全州县"
		}, {
			value: "450325",
			text: "兴安县"
		}, {
			value: "450326",
			text: "永福县"
		}, {
			value: "450327",
			text: "灌阳县"
		}, {
			value: "450328",
			text: "龙胜各族自治县"
		}, {
			value: "450329",
			text: "资源县"
		}, {
			value: "450330",
			text: "平乐县"
		}, {
			value: "450331",
			text: "荔浦县"
		}, {
			value: "450332",
			text: "恭城瑶族自治县"
		}, {
			value: "450333",
			text: "其它区"
		}]
	}, {
		value: "450400",
		text: "梧州市",
		children: [{
			value: "450403",
			text: "万秀区"
		}, {
			value: "450404",
			text: "蝶山区"
		}, {
			value: "450405",
			text: "长洲区"
		}, {
			value: "450421",
			text: "苍梧县"
		}, {
			value: "450422",
			text: "藤县"
		}, {
			value: "450423",
			text: "蒙山县"
		}, {
			value: "450481",
			text: "岑溪市"
		}, {
			value: "450482",
			text: "其它区"
		}]
	}, {
		value: "450500",
		text: "北海市",
		children: [{
			value: "450502",
			text: "海城区"
		}, {
			value: "450503",
			text: "银海区"
		}, {
			value: "450512",
			text: "铁山港区"
		}, {
			value: "450521",
			text: "合浦县"
		}, {
			value: "450522",
			text: "其它区"
		}]
	}, {
		value: "450600",
		text: "防城港市",
		children: [{
			value: "450602",
			text: "港口区"
		}, {
			value: "450603",
			text: "防城区"
		}, {
			value: "450621",
			text: "上思县"
		}, {
			value: "450681",
			text: "东兴市"
		}, {
			value: "450682",
			text: "其它区"
		}]
	}, {
		value: "450700",
		text: "钦州市",
		children: [{
			value: "450702",
			text: "钦南区"
		}, {
			value: "450703",
			text: "钦北区"
		}, {
			value: "450721",
			text: "灵山县"
		}, {
			value: "450722",
			text: "浦北县"
		}, {
			value: "450723",
			text: "其它区"
		}]
	}, {
		value: "450800",
		text: "贵港市",
		children: [{
			value: "450802",
			text: "港北区"
		}, {
			value: "450803",
			text: "港南区"
		}, {
			value: "450804",
			text: "覃塘区"
		}, {
			value: "450821",
			text: "平南县"
		}, {
			value: "450881",
			text: "桂平市"
		}, {
			value: "450882",
			text: "其它区"
		}]
	}, {
		value: "450900",
		text: "玉林市",
		children: [{
			value: "450902",
			text: "玉州区"
		}, {
			value: "450921",
			text: "容县"
		}, {
			value: "450922",
			text: "陆川县"
		}, {
			value: "450923",
			text: "博白县"
		}, {
			value: "450924",
			text: "兴业县"
		}, {
			value: "450981",
			text: "北流市"
		}, {
			value: "450982",
			text: "其它区"
		}]
	}, {
		value: "451000",
		text: "百色市",
		children: [{
			value: "451002",
			text: "右江区"
		}, {
			value: "451021",
			text: "田阳县"
		}, {
			value: "451022",
			text: "田东县"
		}, {
			value: "451023",
			text: "平果县"
		}, {
			value: "451024",
			text: "德保县"
		}, {
			value: "451025",
			text: "靖西县"
		}, {
			value: "451026",
			text: "那坡县"
		}, {
			value: "451027",
			text: "凌云县"
		}, {
			value: "451028",
			text: "乐业县"
		}, {
			value: "451029",
			text: "田林县"
		}, {
			value: "451030",
			text: "西林县"
		}, {
			value: "451031",
			text: "隆林各族自治县"
		}, {
			value: "451032",
			text: "其它区"
		}]
	}, {
		value: "451100",
		text: "贺州市",
		children: [{
				value: "451102",
				text: "八步区"
			}, {
				value: "451121",
				text: "昭平县"
			}, {
				value: "451122",
				text: "钟山县"
			}, {
				value: "451123",
				text: "富川瑶族自治县"
			},

			{
				value: "451124",
				text: "其它区"
			}
		]
	}, {
		value: "451200",
		text: "河池市",
		children: [{
			value: "451202",
			text: "金城江区"
		}, {
			value: "451221",
			text: "南丹县"
		}, {
			value: "451222",
			text: "天峨县"
		}, {
			value: "451223",
			text: "凤山县"
		}, {
			value: "451224",
			text: "东兰县"
		}, {
			value: "451225",
			text: "罗城仫佬族自治县"
		}, {
			value: "451226",
			text: "环江毛南族自治县"
		}, {
			value: "451227",
			text: "巴马瑶族自治县"
		}, {
			value: "451228",
			text: "都安瑶族自治县"
		}, {
			value: "451229",
			text: "大化瑶族自治县"
		}, {
			value: "451281",
			text: "宜州市"
		}, {
			value: "451282",
			text: "其它区"
		}]
	}, {
		value: "451300",
		text: "来宾市",
		children: [{
			value: "451302",
			text: "兴宾区"
		}, {
			value: "451321",
			text: "忻城县"
		}, {
			value: "451322",
			text: "象州县"
		}, {
			value: "451323",
			text: "武宣县"
		}, {
			value: "451324",
			text: "金秀瑶族自治县"
		}, {
			value: "451381",
			text: "合山市"
		}, {
			value: "451382",
			text: "其它区"
		}]
	}, {
		value: "451400",
		text: "崇左市",
		children: [{
			value: "451402",
			text: "江洲区"
		}, {
			value: "451421",
			text: "扶绥县"
		}, {
			value: "451422",
			text: "宁明县"
		}, {
			value: "451423",
			text: "龙州县"
		}, {
			value: "451424",
			text: "大新县"
		}, {
			value: "451425",
			text: "天等县"
		}, {
			value: "451481",
			text: "凭祥市"
		}, {
			value: "451482",
			text: "其它区"
		}]
	}]
}, {
	value: '460000',
	text: '海南省',
	children: [{
		value: "460100",
		text: "海口市",
		children: [{
			value: "460105",
			text: "秀英区"
		}, {
			value: "460106",
			text: "龙华区"
		}, {
			value: "460107",
			text: "琼山区"
		}, {
			value: "460108",
			text: "美兰区"
		}, {
			value: "460109",
			text: "其它区"
		}]
	}, {
		value: "460200",
		text: "三亚市"
	}, {
		value: "469001",
		text: "五指山市"
	}, {
		value: "469002",
		text: "琼海市"
	}, {
		value: "469003",
		text: "儋州市"
	}, {
		value: "469005",
		text: "文昌市"
	}, {
		value: "469006",
		text: "万宁市"
	}, {
		value: "469007",
		text: "东方市"
	}, {
		value: "469025",
		text: "定安县"
	}, {
		value: "469026",
		text: "屯昌县"
	}, {
		value: "469027",
		text: "澄迈县"
	}, {
		value: "469028",
		text: "临高县"
	}, {
		value: "469030",
		text: "白沙黎族自治县"
	}, {
		value: "469031",
		text: "昌江黎族自治县"
	}, {
		value: "469033",
		text: "乐东黎族自治县"
	}, {
		value: "469034",
		text: "陵水黎族自治县"
	}, {
		value: "469035",
		text: "保亭黎族苗族自治县"
	}, {
		value: "469036",
		text: "琼中黎族苗族自治县"
	}, {
		value: "469037",
		text: "西沙群岛"
	}, {
		value: "469038",
		text: "南沙群岛"
	}, {
		value: "469039",
		text: "中沙群岛的岛礁及其海域"
	}]
}, {
	value: '500000',
	text: '重庆',
	children: [{
		value: '500000',
		text: '重庆',
		children: [{
			value: "500101",
			text: "万州区"
		}, {
			value: "500102",
			text: "涪陵区"
		}, {
			value: "500103",
			text: "渝中区"
		}, {
			value: "500104",
			text: "大渡口区"
		}, {
			value: "500105",
			text: "江北区"
		}, {
			value: "500106",
			text: "沙坪坝区"
		}, {
			value: "500107",
			text: "九龙坡区"
		}, {
			value: "500108",
			text: "南岸区"
		}, {
			value: "500109",
			text: "北碚区"
		}, {
			value: "500110",
			text: "万盛区"
		}, {
			value: "500111",
			text: "双桥区"
		}, {
			value: "500112",
			text: "渝北区"
		}, {
			value: "500113",
			text: "巴南区"
		}, {
			value: "500114",
			text: "黔江区"
		}, {
			value: "500115",
			text: "长寿区"
		}, {
			value: "500222",
			text: "綦江县"
		}, {
			value: "500223",
			text: "潼南县"
		}, {
			value: "500224",
			text: "铜梁县"
		}, {
			value: "500225",
			text: "大足县"
		}, {
			value: "500226",
			text: "荣昌县"
		}, {
			value: "500227",
			text: "璧山县"
		}, {
			value: "500228",
			text: "梁平县"
		}, {
			value: "500229",
			text: "城口县"
		}, {
			value: "500230",
			text: "丰都县"
		}, {
			value: "500231",
			text: "垫江县"
		}, {
			value: "500232",
			text: "武隆县"
		}, {
			value: "500233",
			text: "忠县"
		}, {
			value: "500234",
			text: "开县"
		}, {
			value: "500235",
			text: "云阳县"
		}, {
			value: "500236",
			text: "奉节县"
		}, {
			value: "500237",
			text: "巫山县"
		}, {
			value: "500238",
			text: "巫溪县"
		}, {
			value: "500240",
			text: "石柱土家族自治县"
		}, {
			value: "500241",
			text: "秀山土家族苗族自治县"
		}, {
			value: "500242",
			text: "酉阳土家族苗族自治县"
		}, {
			value: "500243",
			text: "彭水苗族土家族自治县"
		}, {
			value: "500381",
			text: "江津区"
		}, {
			value: "500382",
			text: "合川区"
		}, {
			value: "500383",
			text: "永川区"
		}, {
			value: "500384",
			text: "南川区"
		}, {
			value: "500385",
			text: "其它区"
		}]
	}]
}, {
	value: '510000',
	text: '四川省',
	children: [{
		value: "510100",
		text: "成都市",
		children: [{
			value: "510104",
			text: "锦江区"
		}, {
			value: "510105",
			text: "青羊区"
		}, {
			value: "510106",
			text: "金牛区"
		}, {
			value: "510107",
			text: "武侯区"
		}, {
			value: "510108",
			text: "成华区"
		}, {
			value: "510112",
			text: "龙泉驿区"
		}, {
			value: "510113",
			text: "青白江区"
		}, {
			value: "510114",
			text: "新都区"
		}, {
			value: "510115",
			text: "温江区"
		}, {
			value: "510121",
			text: "金堂县"
		}, {
			value: "510122",
			text: "双流县"
		}, {
			value: "510124",
			text: "郫县"
		}, {
			value: "510129",
			text: "大邑县"
		}, {
			value: "510131",
			text: "蒲江县"
		}, {
			value: "510132",
			text: "新津县"
		}, {
			value: "510181",
			text: "都江堰市"
		}, {
			value: "510182",
			text: "彭州市"
		}, {
			value: "510183",
			text: "邛崃市"
		}, {
			value: "510184",
			text: "崇州市"
		}, {
			value: "510185",
			text: "其它区"
		}]
	}, {
		value: "510300",
		text: "自贡市",
		children: [{
			value: "510302",
			text: "自流井区"
		}, {
			value: "510303",
			text: "贡井区"
		}, {
			value: "510304",
			text: "大安区"
		}, {
			value: "510311",
			text: "沿滩区"
		}, {
			value: "510321",
			text: "荣县"
		}, {
			value: "510322",
			text: "富顺县"
		}, {
			value: "510323",
			text: "其它区"
		}]
	}, {
		value: "510400",
		text: "攀枝花市",
		children: [{
			value: "510402",
			text: "东区"
		}, {
			value: "510403",
			text: "西区"
		}, {
			value: "510411",
			text: "仁和区"
		}, {
			value: "510421",
			text: "米易县"
		}, {
			value: "510422",
			text: "盐边县"
		}, {
			value: "510423",
			text: "其它区"
		}]
	}, {
		value: "510500",
		text: "泸州市",
		children: [{
			value: "510502",
			text: "江阳区"
		}, {
			value: "510503",
			text: "纳溪区"
		}, {
			value: "510504",
			text: "龙马潭区"
		}, {
			value: "510521",
			text: "泸县"
		}, {
			value: "510522",
			text: "合江县"
		}, {
			value: "510524",
			text: "叙永县"
		}, {
			value: "510525",
			text: "古蔺县"
		}, {
			value: "510526",
			text: "其它区"
		}]
	}, {
		value: "510600",
		text: "德阳市",
		children: [{
			value: "510603",
			text: "旌阳区"
		}, {
			value: "510623",
			text: "中江县"
		}, {
			value: "510626",
			text: "罗江县"
		}, {
			value: "510681",
			text: "广汉市"
		}, {
			value: "510682",
			text: "什邡市"
		}, {
			value: "510683",
			text: "绵竹市"
		}, {
			value: "510684",
			text: "其它区"
		}]
	}, {
		value: "510700",
		text: "绵阳市",
		children: [{
			value: "510703",
			text: "涪城区"
		}, {
			value: "510704",
			text: "游仙区"
		}, {
			value: "510722",
			text: "三台县"
		}, {
			value: "510723",
			text: "盐亭县"
		}, {
			value: "510724",
			text: "安县"
		}, {
			value: "510725",
			text: "梓潼县"
		}, {
			value: "510726",
			text: "北川羌族自治县"
		}, {
			value: "510727",
			text: "平武县"
		}, {
			value: "510751",
			text: "高新区"
		}, {
			value: "510781",
			text: "江油市"
		}, {
			value: "510782",
			text: "其它区"
		}]
	}, {
		value: "510800",
		text: "广元市",
		children: [{
			value: "510802",
			text: "利州区"
		}, {
			value: "510811",
			text: "元坝区"
		}, {
			value: "510812",
			text: "朝天区"
		}, {
			value: "510821",
			text: "旺苍县"
		}, {
			value: "510822",
			text: "青川县"
		}, {
			value: "510823",
			text: "剑阁县"
		}, {
			value: "510824",
			text: "苍溪县"
		}, {
			value: "510825",
			text: "其它区"
		}]
	}, {
		value: "510900",
		text: "遂宁市",
		children: [{
			value: "510903",
			text: "船山区"
		}, {
			value: "510904",
			text: "安居区"
		}, {
			value: "510921",
			text: "蓬溪县"
		}, {
			value: "510922",
			text: "射洪县"
		}, {
			value: "510923",
			text: "大英县"
		}, {
			value: "510924",
			text: "其它区"
		}]
	}, {
		value: "511000",
		text: "内江市",
		children: [{
			value: "511002",
			text: "市中区"
		}, {
			value: "511011",
			text: "东兴区"
		}, {
			value: "511024",
			text: "威远县"
		}, {
			value: "511025",
			text: "资中县"
		}, {
			value: "511028",
			text: "隆昌县"
		}, {
			value: "511029",
			text: "其它区"
		}]
	}, {
		value: "511100",
		text: "乐山市",
		children: [{
			value: "511102",
			text: "市中区"
		}, {
			value: "511111",
			text: "沙湾区"
		}, {
			value: "511112",
			text: "五通桥区"
		}, {
			value: "511113",
			text: "金口河区"
		}, {
			value: "511123",
			text: "犍为县"
		}, {
			value: "511124",
			text: "井研县"
		}, {
			value: "511126",
			text: "夹江县"
		}, {
			value: "511129",
			text: "沐川县"
		}, {
			value: "511132",
			text: "峨边彝族自治县"
		}, {
			value: "511133",
			text: "马边彝族自治县"
		}, {
			value: "511181",
			text: "峨眉山市"
		}, {
			value: "511182",
			text: "其它区"
		}]
	}, {
		value: "511300",
		text: "南充市",
		children: [{
			value: "511302",
			text: "顺庆区"
		}, {
			value: "511303",
			text: "高坪区"
		}, {
			value: "511304",
			text: "嘉陵区"
		}, {
			value: "511321",
			text: "南部县"
		}, {
			value: "511322",
			text: "营山县"
		}, {
			value: "511323",
			text: "蓬安县"
		}, {
			value: "511324",
			text: "仪陇县"
		}, {
			value: "511325",
			text: "西充县"
		}, {
			value: "511381",
			text: "阆中市"
		}, {
			value: "511382",
			text: "其它区"
		}]
	}, {
		value: "511400",
		text: "眉山市",
		children: [{
			value: "511402",
			text: "东坡区"
		}, {
			value: "511421",
			text: "仁寿县"
		}, {
			value: "511422",
			text: "彭山县"
		}, {
			value: "511423",
			text: "洪雅县"
		}, {
			value: "511424",
			text: "丹棱县"
		}, {
			value: "511425",
			text: "青神县"
		}, {
			value: "511426",
			text: "其它区"
		}]
	}, {
		value: "511500",
		text: "宜宾市",
		children: [{
			value: "511502",
			text: "翠屏区"
		}, {
			value: "511521",
			text: "宜宾县"
		}, {
			value: "511522",
			text: "南溪县"
		}, {
			value: "511523",
			text: "江安县"
		}, {
			value: "511524",
			text: "长宁县"
		}, {
			value: "511525",
			text: "高县"
		}, {
			value: "511526",
			text: "珙县"
		}, {
			value: "511527",
			text: "筠连县"
		}, {
			value: "511528",
			text: "兴文县"
		}, {
			value: "511529",
			text: "屏山县"
		}, {
			value: "511530",
			text: "其它区"
		}]
	}, {
		value: "511600",
		text: "广安市",
		children: [{
			value: "511602",
			text: "广安区"
		}, {
			value: "511621",
			text: "岳池县"
		}, {
			value: "511622",
			text: "武胜县"
		}, {
			value: "511623",
			text: "邻水县"
		}, {
			value: "511681",
			text: "华蓥市"
		}, {
			value: "511682",
			text: "市辖区"
		}, {
			value: "511683",
			text: "其它区"
		}]
	}, {
		value: "511700",
		text: "达州市",
		children: [{
			value: "511702",
			text: "通川区"
		}, {
			value: "511721",
			text: "达县"
		}, {
			value: "511722",
			text: "宣汉县"
		}, {
			value: "511723",
			text: "开江县"
		}, {
			value: "511724",
			text: "大竹县"
		}, {
			value: "511725",
			text: "渠县"
		}, {
			value: "511781",
			text: "万源市"
		}, {
			value: "511782",
			text: "其它区"
		}]
	}, {
		value: "511800",
		text: "雅安市",
		children: [{
			value: "511802",
			text: "雨城区"
		}, {
			value: "511821",
			text: "名山县"
		}, {
			value: "511822",
			text: "荥经县"
		}, {
			value: "511823",
			text: "汉源县"
		}, {
			value: "511824",
			text: "石棉县"
		}, {
			value: "511825",
			text: "天全县"
		}, {
			value: "511826",
			text: "芦山县"
		}, {
			value: "511827",
			text: "宝兴县"
		}, {
			value: "511828",
			text: "其它区"
		}]
	}, {
		value: "511900",
		text: "巴中市",
		children: [{
			value: "511902",
			text: "巴州区"
		}, {
			value: "511921",
			text: "通江县"
		}, {
			value: "511922",
			text: "南江县"
		}, {
			value: "511923",
			text: "平昌县"
		}, {
			value: "511924",
			text: "其它区"
		}]
	}, {
		value: "512000",
		text: "资阳市",
		children: [{
			value: "512002",
			text: "雁江区"
		}, {
			value: "512021",
			text: "安岳县"
		}, {
			value: "512022",
			text: "乐至县"
		}, {
			value: "512081",
			text: "简阳市"
		}, {
			value: "512082",
			text: "其它区"
		}]
	}, {
		value: "513200",
		text: "阿坝藏族羌族自治州",
		children: [{
			value: "513221",
			text: "汶川县"
		}, {
			value: "513222",
			text: "理县"
		}, {
			value: "513223",
			text: "茂县"
		}, {
			value: "513224",
			text: "松潘县"
		}, {
			value: "513225",
			text: "九寨沟县"
		}, {
			value: "513226",
			text: "金川县"
		}, {
			value: "513227",
			text: "小金县"
		}, {
			value: "513228",
			text: "黑水县"
		}, {
			value: "513229",
			text: "马尔康县"
		}, {
			value: "513230",
			text: "壤塘县"
		}, {
			value: "513231",
			text: "阿坝县"
		}, {
			value: "513232",
			text: "若尔盖县"
		}, {
			value: "513233",
			text: "红原县"
		}, {
			value: "513234",
			text: "其它区"
		}]
	}, {
		value: "513300",
		text: "甘孜藏族自治州",
		children: [{
			value: "513321",
			text: "康定县"
		}, {
			value: "513322",
			text: "泸定县"
		}, {
			value: "513323",
			text: "丹巴县"
		}, {
			value: "513324",
			text: "九龙县"
		}, {
			value: "513325",
			text: "雅江县"
		}, {
			value: "513326",
			text: "道孚县"
		}, {
			value: "513327",
			text: "炉霍县"
		}, {
			value: "513328",
			text: "甘孜县"
		}, {
			value: "513329",
			text: "新龙县"
		}, {
			value: "513330",
			text: "德格县"
		}, {
			value: "513331",
			text: "白玉县"
		}, {
			value: "513332",
			text: "石渠县"
		}, {
			value: "513333",
			text: "色达县"
		}, {
			value: "513334",
			text: "理塘县"
		}, {
			value: "513335",
			text: "巴塘县"
		}, {
			value: "513336",
			text: "乡城县"
		}, {
			value: "513337",
			text: "稻城县"
		}, {
			value: "513338",
			text: "得荣县"
		}, {
			value: "513339",
			text: "其它区"
		}]
	}, {
		value: "513400",
		text: "凉山彝族自治州",
		children: [{
			value: "513401",
			text: "西昌市"
		}, {
			value: "513422",
			text: "木里藏族自治县"
		}, {
			value: "513423",
			text: "盐源县"
		}, {
			value: "513424",
			text: "德昌县"
		}, {
			value: "513425",
			text: "会理县"
		}, {
			value: "513426",
			text: "会东县"
		}, {
			value: "513427",
			text: "宁南县"
		}, {
			value: "513428",
			text: "普格县"
		}, {
			value: "513429",
			text: "布拖县"
		}, {
			value: "513430",
			text: "金阳县"
		}, {
			value: "513431",
			text: "昭觉县"
		}, {
			value: "513432",
			text: "喜德县"
		}, {
			value: "513433",
			text: "冕宁县"
		}, {
			value: "513434",
			text: "越西县"
		}, {
			value: "513435",
			text: "甘洛县"
		}, {
			value: "513436",
			text: "美姑县"
		}, {
			value: "513437",
			text: "雷波县"
		}, {
			value: "513438",
			text: "其它区"
		}]
	}]
}, {
	value: '520000',
	text: '贵州省',
	children: [{
		value: "520100",
		text: "贵阳市",
		children: [{
			value: "520102",
			text: "南明区"
		}, {
			value: "520103",
			text: "云岩区"
		}, {
			value: "520111",
			text: "花溪区"
		}, {
			value: "520112",
			text: "乌当区"
		}, {
			value: "520113",
			text: "白云区"
		}, {
			value: "520114",
			text: "小河区"
		}, {
			value: "520121",
			text: "开阳县"
		}, {
			value: "520122",
			text: "息烽县"
		}, {
			value: "520123",
			text: "修文县"
		}, {
			value: "520151",
			text: "金阳开发区"
		}, {
			value: "520181",
			text: "清镇市"
		}, {
			value: "520182",
			text: "其它区"
		}]
	}, {
		value: "520200",
		text: "六盘水市",
		children: [{
			value: "520201",
			text: "钟山区"
		}, {
			value: "520203",
			text: "六枝特区"
		}, {
			value: "520221",
			text: "水城县"
		}, {
			value: "520222",
			text: "盘县"
		}, {
			value: "520223",
			text: "其它区"
		}]
	}, {
		value: "520300",
		text: "遵义市",
		children: [{
			value: "520302",
			text: "红花岗区"
		}, {
			value: "520303",
			text: "汇川区"
		}, {
			value: "520321",
			text: "遵义县"
		}, {
			value: "520322",
			text: "桐梓县"
		}, {
			value: "520323",
			text: "绥阳县"
		}, {
			value: "520324",
			text: "正安县"
		}, {
			value: "520325",
			text: "道真仡佬族苗族自治县"
		}, {
			value: "520326",
			text: "务川仡佬族苗族自治县"
		}, {
			value: "520327",
			text: "凤冈县"
		}, {
			value: "520328",
			text: "湄潭县"
		}, {
			value: "520329",
			text: "余庆县"
		}, {
			value: "520330",
			text: "习水县"
		}, {
			value: "520381",
			text: "赤水市"
		}, {
			value: "520382",
			text: "仁怀市"
		}, {
			value: "520383",
			text: "其它区"
		}]
	}, {
		value: "520400",
		text: "安顺市",
		children: [{
			value: "520402",
			text: "西秀区"
		}, {
			value: "520421",
			text: "平坝县"
		}, {
			value: "520422",
			text: "普定县"
		}, {
			value: "520423",
			text: "镇宁布依族苗族自治县"
		}, {
			value: "520424",
			text: "关岭布依族苗族自治县"
		}, {
			value: "520425",
			text: "紫云苗族布依族自治县"
		}, {
			value: "520426",
			text: "其它区"
		}]
	}, {
		value: "522200",
		text: "铜仁地区",
		children: [{
			value: "522201",
			text: "铜仁市"
		}, {
			value: "522222",
			text: "江口县"
		}, {
			value: "522223",
			text: "玉屏侗族自治县"
		}, {
			value: "522224",
			text: "石阡县"
		}, {
			value: "522225",
			text: "思南县"
		}, {
			value: "522226",
			text: "印江土家族苗族自治县"
		}, {
			value: "522227",
			text: "德江县"
		}, {
			value: "522228",
			text: "沿河土家族自治县"
		}, {
			value: "522229",
			text: "松桃苗族自治县"
		}, {
			value: "522230",
			text: "万山特区"
		}, {
			value: "522231",
			text: "其它区"
		}]
	}, {
		value: "522300",
		text: "黔西南布依族苗族自治州",
		children: [{
			value: "522301",
			text: "兴义市"
		}, {
			value: "522322",
			text: "兴仁县"
		}, {
			value: "522323",
			text: "普安县"
		}, {
			value: "522324",
			text: "晴隆县"
		}, {
			value: "522325",
			text: "贞丰县"
		}, {
			value: "522326",
			text: "望谟县"
		}, {
			value: "522327",
			text: "册亨县"
		}, {
			value: "522328",
			text: "安龙县"
		}, {
			value: "522329",
			text: "其它区"
		}]
	}, {
		value: "522400",
		text: "毕节地区",
		children: [{
			value: "522401",
			text: "毕节市"
		}, {
			value: "522422",
			text: "大方县"
		}, {
			value: "522423",
			text: "黔西县"
		}, {
			value: "522424",
			text: "金沙县"
		}, {
			value: "522425",
			text: "织金县"
		}, {
			value: "522426",
			text: "纳雍县"
		}, {
			value: "522427",
			text: "威宁彝族回族苗族自治县"
		}, {
			value: "522428",
			text: "赫章县"
		}, {
			value: "522429",
			text: "其它区"
		}]
	}, {
		value: "522600",
		text: "黔东南苗族侗族自治州",
		children: [{
			value: "522601",
			text: "凯里市"
		}, {
			value: "522622",
			text: "黄平县"
		}, {
			value: "522623",
			text: "施秉县"
		}, {
			value: "522624",
			text: "三穗县"
		}, {
			value: "522625",
			text: "镇远县"
		}, {
			value: "522626",
			text: "岑巩县"
		}, {
			value: "522627",
			text: "天柱县"
		}, {
			value: "522628",
			text: "锦屏县"
		}, {
			value: "522629",
			text: "剑河县"
		}, {
			value: "522630",
			text: "台江县"
		}, {
			value: "522631",
			text: "黎平县"
		}, {
			value: "522632",
			text: "榕江县"
		}, {
			value: "522633",
			text: "从江县"
		}, {
			value: "522634",
			text: "雷山县"
		}, {
			value: "522635",
			text: "麻江县"
		}, {
			value: "522636",
			text: "丹寨县"
		}, {
			value: "522637",
			text: "其它区"
		}]
	}, {
		value: "522700",
		text: "黔南布依族苗族自治州",
		children: [{
			value: "522701",
			text: "都匀市"
		}, {
			value: "522702",
			text: "福泉市"
		}, {
			value: "522722",
			text: "荔波县"
		}, {
			value: "522723",
			text: "贵定县"
		}, {
			value: "522725",
			text: "瓮安县"
		}, {
			value: "522726",
			text: "独山县"
		}, {
			value: "522727",
			text: "平塘县"
		}, {
			value: "522728",
			text: "罗甸县"
		}, {
			value: "522729",
			text: "长顺县"
		}, {
			value: "522730",
			text: "龙里县"
		}, {
			value: "522731",
			text: "惠水县"
		}, {
			value: "522732",
			text: "三都水族自治县"
		}, {
			value: "522733",
			text: "其它区"
		}]
	}]
}, {
	value: '530000',
	text: '云南省',
	children: [{
		value: "530100",
		text: "昆明市",
		children: [{
			value: "530102",
			text: "五华区"
		}, {
			value: "530103",
			text: "盘龙区"
		}, {
			value: "530111",
			text: "官渡区"
		}, {
			value: "530112",
			text: "西山区"
		}, {
			value: "530113",
			text: "东川区"
		}, {
			value: "530121",
			text: "呈贡县"
		}, {
			value: "530122",
			text: "晋宁县"
		}, {
			value: "530124",
			text: "富民县"
		}, {
			value: "530125",
			text: "宜良县"
		}, {
			value: "530126",
			text: "石林彝族自治县"
		}, {
			value: "530127",
			text: "嵩明县"
		}, {
			value: "530128",
			text: "禄劝彝族苗族自治县"
		}, {
			value: "530129",
			text: "寻甸回族彝族自治县"
		}, {
			value: "530181",
			text: "安宁市"
		}, {
			value: "530182",
			text: "其它区"
		}]
	}, {
		value: "530300",
		text: "曲靖市",
		children: [{
			value: "530302",
			text: "麒麟区"
		}, {
			value: "530321",
			text: "马龙县"
		}, {
			value: "530322",
			text: "陆良县"
		}, {
			value: "530323",
			text: "师宗县"
		}, {
			value: "530324",
			text: "罗平县"
		}, {
			value: "530325",
			text: "富源县"
		}, {
			value: "530326",
			text: "会泽县"
		}, {
			value: "530328",
			text: "沾益县"
		}, {
			value: "530381",
			text: "宣威市"
		}, {
			value: "530382",
			text: "其它区"
		}]
	}, {
		value: "530400",
		text: "玉溪市",
		children: [{
			value: "530402",
			text: "红塔区"
		}, {
			value: "530421",
			text: "江川县"
		}, {
			value: "530422",
			text: "澄江县"
		}, {
			value: "530423",
			text: "通海县"
		}, {
			value: "530424",
			text: "华宁县"
		}, {
			value: "530425",
			text: "易门县"
		}, {
			value: "530426",
			text: "峨山彝族自治县"
		}, {
			value: "530427",
			text: "新平彝族傣族自治县"
		}, {
			value: "530428",
			text: "元江哈尼族彝族傣族自治县"
		}, {
			value: "530429",
			text: "其它区"
		}]
	}, {
		value: "530500",
		text: "保山市",
		children: [{
			value: "530502",
			text: "隆阳区"
		}, {
			value: "530521",
			text: "施甸县"
		}, {
			value: "530522",
			text: "腾冲县"
		}, {
			value: "530523",
			text: "龙陵县"
		}, {
			value: "530524",
			text: "昌宁县"
		}, {
			value: "530525",
			text: "其它区"
		}]
	}, {
		value: "530600",
		text: "昭通市",
		children: [{
			value: "530602",
			text: "昭阳区"
		}, {
			value: "530621",
			text: "鲁甸县"
		}, {
			value: "530622",
			text: "巧家县"
		}, {
			value: "530623",
			text: "盐津县"
		}, {
			value: "530624",
			text: "大关县"
		}, {
			value: "530625",
			text: "永善县"
		}, {
			value: "530626",
			text: "绥江县"
		}, {
			value: "530627",
			text: "镇雄县"
		}, {
			value: "530628",
			text: "彝良县"
		}, {
			value: "530629",
			text: "威信县"
		}, {
			value: "530630",
			text: "水富县"
		}, {
			value: "530631",
			text: "其它区"
		}]
	}, {
		value: "530700",
		text: "丽江市",
		children: [{
			value: "530702",
			text: "古城区"
		}, {
			value: "530721",
			text: "玉龙纳西族自治县"
		}, {
			value: "530722",
			text: "永胜县"
		}, {
			value: "530723",
			text: "华坪县"
		}, {
			value: "530724",
			text: "宁蒗彝族自治县"
		}, {
			value: "530725",
			text: "其它区"
		}]
	}, {
		value: "530800",
		text: "普洱市",
		children: [{
			value: "530802",
			text: "思茅区"
		}, {
			value: "530821",
			text: "宁洱哈尼族彝族自治县"
		}, {
			value: "530822",
			text: "墨江哈尼族自治县"
		}, {
			value: "530823",
			text: "景东彝族自治县"
		}, {
			value: "530824",
			text: "景谷傣族彝族自治县"
		}, {
			value: "530825",
			text: "镇沅彝族哈尼族拉祜族自治县"
		}, {
			value: "530826",
			text: "江城哈尼族彝族自治县"
		}, {
			value: "530827",
			text: "孟连傣族拉祜族佤族自治县"
		}, {
			value: "530828",
			text: "澜沧拉祜族自治县"
		}, {
			value: "530829",
			text: "西盟佤族自治县"
		}, {
			value: "530830",
			text: "其它区"
		}]
	}, {
		value: "530900",
		text: "临沧市",
		children: [{
			value: "530902",
			text: "临翔区"
		}, {
			value: "530921",
			text: "凤庆县"
		}, {
			value: "530922",
			text: "云县"
		}, {
			value: "530923",
			text: "永德县"
		}, {
			value: "530924",
			text: "镇康县"
		}, {
			value: "530925",
			text: "双江拉祜族佤族布朗族傣族自治县"
		}, {
			value: "530926",
			text: "耿马傣族佤族自治县"
		}, {
			value: "530927",
			text: "沧源佤族自治县"
		}, {
			value: "530928",
			text: "其它区"
		}]
	}, {
		value: "532300",
		text: "楚雄彝族自治州",
		children: [{
			value: "532301",
			text: "楚雄市"
		}, {
			value: "532322",
			text: "双柏县"
		}, {
			value: "532323",
			text: "牟定县"
		}, {
			value: "532324",
			text: "南华县"
		}, {
			value: "532325",
			text: "姚安县"
		}, {
			value: "532326",
			text: "大姚县"
		}, {
			value: "532327",
			text: "永仁县"
		}, {
			value: "532328",
			text: "元谋县"
		}, {
			value: "532329",
			text: "武定县"
		}, {
			value: "532331",
			text: "禄丰县"
		}, {
			value: "532332",
			text: "其它区"
		}]
	}, {
		value: "532500",
		text: "红河哈尼族彝族自治州",
		children: [{
			value: "532501",
			text: "个旧市"
		}, {
			value: "532502",
			text: "开远市"
		}, {
			value: "532522",
			text: "蒙自县"
		}, {
			value: "532523",
			text: "屏边苗族自治县"
		}, {
			value: "532524",
			text: "建水县"
		}, {
			value: "532525",
			text: "石屏县"
		}, {
			value: "532526",
			text: "弥勒县"
		}, {
			value: "532527",
			text: "泸西县"
		}, {
			value: "532528",
			text: "元阳县"
		}, {
			value: "532529",
			text: "红河县"
		}, {
			value: "532530",
			text: "金平苗族瑶族傣族自治县"
		}, {
			value: "532531",
			text: "绿春县"
		}, {
			value: "532532",
			text: "河口瑶族自治县"
		}, {
			value: "532533",
			text: "其它区"
		}]
	}, {
		value: "532600",
		text: "文山壮族苗族自治州",
		children: [{
			value: "532621",
			text: "文山县"
		}, {
			value: "532622",
			text: "砚山县"
		}, {
			value: "532623",
			text: "西畴县"
		}, {
			value: "532624",
			text: "麻栗坡县"
		}, {
			value: "532625",
			text: "马关县"
		}, {
			value: "532626",
			text: "丘北县"
		}, {
			value: "532627",
			text: "广南县"
		}, {
			value: "532628",
			text: "富宁县"
		}, {
			value: "532629",
			text: "其它区"
		}]
	}, {
		value: "532800",
		text: "西双版纳傣族自治州",
		children: [{
			value: "532801",
			text: "景洪市"
		}, {
			value: "532822",
			text: "勐海县"
		}, {
			value: "532823",
			text: "勐腊县"
		}, {
			value: "532824",
			text: "其它区"
		}]
	}, {
		value: "532900",
		text: "大理白族自治州",
		children: [{
			value: "532901",
			text: "大理市"
		}, {
			value: "532922",
			text: "漾濞彝族自治县"
		}, {
			value: "532923",
			text: "祥云县"
		}, {
			value: "532924",
			text: "宾川县"
		}, {
			value: "532925",
			text: "弥渡县"
		}, {
			value: "532926",
			text: "南涧彝族自治县"
		}, {
			value: "532927",
			text: "巍山彝族回族自治县"
		}, {
			value: "532928",
			text: "永平县"
		}, {
			value: "532929",
			text: "云龙县"
		}, {
			value: "532930",
			text: "洱源县"
		}, {
			value: "532931",
			text: "剑川县"
		}, {
			value: "532932",
			text: "鹤庆县"
		}, {
			value: "532933",
			text: "其它区"
		}]
	}, {
		value: "533100",
		text: "德宏傣族景颇族自治州",
		children: [{
			value: "533102",
			text: "瑞丽市"
		}, {
			value: "533103",
			text: "潞西市"
		}, {
			value: "533122",
			text: "梁河县"
		}, {
			value: "533123",
			text: "盈江县"
		}, {
			value: "533124",
			text: "陇川县"
		}, {
			value: "533125",
			text: "其它区"
		}]
	}, {
		value: "533300",
		text: "怒江傈僳族自治州",
		children: [{
			value: "533321",
			text: "泸水县"
		}, {
			value: "533323",
			text: "福贡县"
		}, {
			value: "533324",
			text: "贡山独龙族怒族自治县"
		}, {
			value: "533325",
			text: "兰坪白族普米族自治县"
		}, {
			value: "533326",
			text: "其它区"
		}]
	}, {
		value: "533400",
		text: "迪庆藏族自治州",
		children: [{
			value: "533421",
			text: "香格里拉县"
		}, {
			value: "533422",
			text: "德钦县"
		}, {
			value: "533423",
			text: "维西傈僳族自治县"
		}, {
			value: "533424",
			text: "其它区"
		}]
	}]
}, {
	value: '540000',
	text: '西藏',
	children: [{
		value: "540100",
		text: "拉萨市",
		children: [{
			value: "540102",
			text: "城关区"
		}, {
			value: "540121",
			text: "林周县"
		}, {
			value: "540122",
			text: "当雄县"
		}, {
			value: "540123",
			text: "尼木县"
		}, {
			value: "540124",
			text: "曲水县"
		}, {
			value: "540125",
			text: "堆龙德庆县"
		}, {
			value: "540126",
			text: "达孜县"
		}, {
			value: "540127",
			text: "墨竹工卡县"
		}, {
			value: "540128",
			text: "其它区"
		}]
	}, {
		value: "542100",
		text: "昌都地区",
		children: [{
			value: "542121",
			text: "昌都县"
		}, {
			value: "542122",
			text: "江达县"
		}, {
			value: "542123",
			text: "贡觉县"
		}, {
			value: "542124",
			text: "类乌齐县"
		}, {
			value: "542125",
			text: "丁青县"
		}, {
			value: "542126",
			text: "察雅县"
		}, {
			value: "542127",
			text: "八宿县"
		}, {
			value: "542128",
			text: "左贡县"
		}, {
			value: "542129",
			text: "芒康县"
		}, {
			value: "542132",
			text: "洛隆县"
		}, {
			value: "542133",
			text: "边坝县"
		}, {
			value: "542134",
			text: "其它区"
		}]
	}, {
		value: "542200",
		text: "山南地区",
		children: [{
			value: "542221",
			text: "乃东县"
		}, {
			value: "542222",
			text: "扎囊县"
		}, {
			value: "542223",
			text: "贡嘎县"
		}, {
			value: "542224",
			text: "桑日县"
		}, {
			value: "542225",
			text: "琼结县"
		}, {
			value: "542226",
			text: "曲松县"
		}, {
			value: "542227",
			text: "措美县"
		}, {
			value: "542228",
			text: "洛扎县"
		}, {
			value: "542229",
			text: "加查县"
		}, {
			value: "542231",
			text: "隆子县"
		}, {
			value: "542232",
			text: "错那县"
		}, {
			value: "542233",
			text: "浪卡子县"
		}, {
			value: "542234",
			text: "其它区"
		}]
	}, {
		value: "542300",
		text: "日喀则地区",
		children: [{
			value: "542301",
			text: "日喀则市"
		}, {
			value: "542322",
			text: "南木林县"
		}, {
			value: "542323",
			text: "江孜县"
		}, {
			value: "542324",
			text: "定日县"
		}, {
			value: "542325",
			text: "萨迦县"
		}, {
			value: "542326",
			text: "拉孜县"
		}, {
			value: "542327",
			text: "昂仁县"
		}, {
			value: "542328",
			text: "谢通门县"
		}, {
			value: "542329",
			text: "白朗县"
		}, {
			value: "542330",
			text: "仁布县"
		}, {
			value: "542331",
			text: "康马县"
		}, {
			value: "542332",
			text: "定结县"
		}, {
			value: "542333",
			text: "仲巴县"
		}, {
			value: "542334",
			text: "亚东县"
		}, {
			value: "542335",
			text: "吉隆县"
		}, {
			value: "542336",
			text: "聂拉木县"
		}, {
			value: "542337",
			text: "萨嘎县"
		}, {
			value: "542338",
			text: "岗巴县"
		}, {
			value: "542339",
			text: "其它区"
		}]
	}, {
		value: "542400",
		text: "那曲地区",
		children: [{
			value: "542421",
			text: "那曲县"
		}, {
			value: "542422",
			text: "嘉黎县"
		}, {
			value: "542423",
			text: "比如县"
		}, {
			value: "542424",
			text: "聂荣县"
		}, {
			value: "542425",
			text: "安多县"
		}, {
			value: "542426",
			text: "申扎县"
		}, {
			value: "542427",
			text: "索县"
		}, {
			value: "542428",
			text: "班戈县"
		}, {
			value: "542429",
			text: "巴青县"
		}, {
			value: "542430",
			text: "尼玛县"
		}, {
			value: "542431",
			text: "其它区"
		}]
	}, {
		value: "542500",
		text: "阿里地区",
		children: [{
			value: "542521",
			text: "普兰县"
		}, {
			value: "542522",
			text: "札达县"
		}, {
			value: "542523",
			text: "噶尔县"
		}, {
			value: "542524",
			text: "日土县"
		}, {
			value: "542525",
			text: "革吉县"
		}, {
			value: "542526",
			text: "改则县"
		}, {
			value: "542527",
			text: "措勤县"
		}, {
			value: "542528",
			text: "其它区"
		}]
	}, {
		value: "542600",
		text: "林芝地区",
		children: [{
			value: "542621",
			text: "林芝县"
		}, {
			value: "542622",
			text: "工布江达县"
		}, {
			value: "542623",
			text: "米林县"
		}, {
			value: "542624",
			text: "墨脱县"
		}, {
			value: "542625",
			text: "波密县"
		}, {
			value: "542626",
			text: "察隅县"
		}, {
			value: "542627",
			text: "朗县"
		}, {
			value: "542628",
			text: "其它区"
		}]
	}]
}, {
	value: '610000',
	text: '陕西省',
	children: [{
		value: "610100",
		text: "西安市",
		children: [{
			value: "610102",
			text: "新城区"
		}, {
			value: "610103",
			text: "碑林区"
		}, {
			value: "610104",
			text: "莲湖区"
		}, {
			value: "610111",
			text: "灞桥区"
		}, {
			value: "610112",
			text: "未央区"
		}, {
			value: "610113",
			text: "雁塔区"
		}, {
			value: "610114",
			text: "阎良区"
		}, {
			value: "610115",
			text: "临潼区"
		}, {
			value: "610116",
			text: "长安区"
		}, {
			value: "610122",
			text: "蓝田县"
		}, {
			value: "610124",
			text: "周至县"
		}, {
			value: "610125",
			text: "户县"
		}, {
			value: "610126",
			text: "高陵县"
		}, {
			value: "610127",
			text: "其它区"
		}]
	}, {
		value: "610200",
		text: "铜川市",
		children: [{
			value: "610202",
			text: "王益区"
		}, {
			value: "610203",
			text: "印台区"
		}, {
			value: "610204",
			text: "耀州区"
		}, {
			value: "610222",
			text: "宜君县"
		}, {
			value: "610223",
			text: "其它区"
		}]
	}, {
		value: "610300",
		text: "宝鸡市",
		children: [{
			value: "610302",
			text: "渭滨区"
		}, {
			value: "610303",
			text: "金台区"
		}, {
			value: "610304",
			text: "陈仓区"
		}, {
			value: "610322",
			text: "凤翔县"
		}, {
			value: "610323",
			text: "岐山县"
		}, {
			value: "610324",
			text: "扶风县"
		}, {
			value: "610326",
			text: "眉县"
		}, {
			value: "610327",
			text: "陇县"
		}, {
			value: "610328",
			text: "千阳县"
		}, {
			value: "610329",
			text: "麟游县"
		}, {
			value: "610330",
			text: "凤县"
		}, {
			value: "610331",
			text: "太白县"
		}, {
			value: "610332",
			text: "其它区"
		}]
	}, {
		value: "610400",
		text: "咸阳市",
		children: [{
			value: "610402",
			text: "秦都区"
		}, {
			value: "610403",
			text: "杨陵区"
		}, {
			value: "610404",
			text: "渭城区"
		}, {
			value: "610422",
			text: "三原县"
		}, {
			value: "610423",
			text: "泾阳县"
		}, {
			value: "610424",
			text: "乾县"
		}, {
			value: "610425",
			text: "礼泉县"
		}, {
			value: "610426",
			text: "永寿县"
		}, {
			value: "610427",
			text: "彬县"
		}, {
			value: "610428",
			text: "长武县"
		}, {
			value: "610429",
			text: "旬邑县"
		}, {
			value: "610430",
			text: "淳化县"
		}, {
			value: "610431",
			text: "武功县"
		}, {
			value: "610481",
			text: "兴平市"
		}, {
			value: "610482",
			text: "其它区"
		}]
	}, {
		value: "610500",
		text: "渭南市",
		children: [{
			value: "610502",
			text: "临渭区"
		}, {
			value: "610521",
			text: "华县"
		}, {
			value: "610522",
			text: "潼关县"
		}, {
			value: "610523",
			text: "大荔县"
		}, {
			value: "610524",
			text: "合阳县"
		}, {
			value: "610525",
			text: "澄城县"
		}, {
			value: "610526",
			text: "蒲城县"
		}, {
			value: "610527",
			text: "白水县"
		}, {
			value: "610528",
			text: "富平县"
		}, {
			value: "610581",
			text: "韩城市"
		}, {
			value: "610582",
			text: "华阴市"
		}, {
			value: "610583",
			text: "其它区"
		}]
	}, {
		value: "610600",
		text: "延安市",
		children: [{
			value: "610602",
			text: "宝塔区"
		}, {
			value: "610621",
			text: "延长县"
		}, {
			value: "610622",
			text: "延川县"
		}, {
			value: "610623",
			text: "子长县"
		}, {
			value: "610624",
			text: "安塞县"
		}, {
			value: "610625",
			text: "志丹县"
		}, {
			value: "610626",
			text: "吴起县"
		}, {
			value: "610627",
			text: "甘泉县"
		}, {
			value: "610628",
			text: "富县"
		}, {
			value: "610629",
			text: "洛川县"
		}, {
			value: "610630",
			text: "宜川县"
		}, {
			value: "610631",
			text: "黄龙县"
		}, {
			value: "610632",
			text: "黄陵县"
		}, {
			value: "610633",
			text: "其它区"
		}]
	}, {
		value: "610700",
		text: "汉中市",
		children: [{
			value: "610702",
			text: "汉台区"
		}, {
			value: "610721",
			text: "南郑县"
		}, {
			value: "610722",
			text: "城固县"
		}, {
			value: "610723",
			text: "洋县"
		}, {
			value: "610724",
			text: "西乡县"
		}, {
			value: "610725",
			text: "勉县"
		}, {
			value: "610726",
			text: "宁强县"
		}, {
			value: "610727",
			text: "略阳县"
		}, {
			value: "610728",
			text: "镇巴县"
		}, {
			value: "610729",
			text: "留坝县"
		}, {
			value: "610730",
			text: "佛坪县"
		}, {
			value: "610731",
			text: "其它区"
		}]
	}, {
		value: "610800",
		text: "榆林市",
		children: [{
			value: "610802",
			text: "榆阳区"
		}, {
			value: "610821",
			text: "神木县"
		}, {
			value: "610822",
			text: "府谷县"
		}, {
			value: "610823",
			text: "横山县"
		}, {
			value: "610824",
			text: "靖边县"
		}, {
			value: "610825",
			text: "定边县"
		}, {
			value: "610826",
			text: "绥德县"
		}, {
			value: "610827",
			text: "米脂县"
		}, {
			value: "610828",
			text: "佳县"
		}, {
			value: "610829",
			text: "吴堡县"
		}, {
			value: "610830",
			text: "清涧县"
		}, {
			value: "610831",
			text: "子洲县"
		}, {
			value: "610832",
			text: "其它区"
		}]
	}, {
		value: "610900",
		text: "安康市",
		children: [{
			value: "610902",
			text: "汉滨区"
		}, {
			value: "610921",
			text: "汉阴县"
		}, {
			value: "610922",
			text: "石泉县"
		}, {
			value: "610923",
			text: "宁陕县"
		}, {
			value: "610924",
			text: "紫阳县"
		}, {
			value: "610925",
			text: "岚皋县"
		}, {
			value: "610926",
			text: "平利县"
		}, {
			value: "610927",
			text: "镇坪县"
		}, {
			value: "610928",
			text: "旬阳县"
		}, {
			value: "610929",
			text: "白河县"
		}, {
			value: "610930",
			text: "其它区"
		}]
	}, {
		value: "611000",
		text: "商洛市",
		children: [{
			value: "611002",
			text: "商州区"
		}, {
			value: "611021",
			text: "洛南县"
		}, {
			value: "611022",
			text: "丹凤县"
		}, {
			value: "611023",
			text: "商南县"
		}, {
			value: "611024",
			text: "山阳县"
		}, {
			value: "611025",
			text: "镇安县"
		}, {
			value: "611026",
			text: "柞水县"
		}, {
			value: "611027",
			text: "其它区"
		}]
	}]
}, {
	value: '620000',
	text: '甘肃省',
	children: [{
		value: "620100",
		text: "兰州市",
		children: [{
			value: "620102",
			text: "城关区"
		}, {
			value: "620103",
			text: "七里河区"
		}, {
			value: "620104",
			text: "西固区"
		}, {
			value: "620105",
			text: "安宁区"
		}, {
			value: "620111",
			text: "红古区"
		}, {
			value: "620121",
			text: "永登县"
		}, {
			value: "620122",
			text: "皋兰县"
		}, {
			value: "620123",
			text: "榆中县"
		}, {
			value: "620124",
			text: "其它区"
		}]
	}, {
		value: "620200",
		text: "嘉峪关市",
		children: [{
			value: "620302",
			text: "金川区"
		}, {
			value: "620321",
			text: "永昌县"
		}, {
			value: "620322",
			text: "其它区"
		}]
	}, {
		value: "620300",
		text: "金昌市",
		children: [{
			value: "620302",
			text: "金川区"
		}, {
			value: "620321",
			text: "永昌县"
		}, {
			value: "620322",
			text: "其它区"
		}]
	}, {
		value: "620400",
		text: "白银市",
		children: [{
			value: "620402",
			text: "白银区"
		}, {
			value: "620403",
			text: "平川区"
		}, {
			value: "620421",
			text: "靖远县"
		}, {
			value: "620422",
			text: "会宁县"
		}, {
			value: "620423",
			text: "景泰县"
		}, {
			value: "620424",
			text: "其它区"
		}]
	}, {
		value: "620500",
		text: "天水市",
		children: [{
			value: "620502",
			text: "秦州区"
		}, {
			value: "620503",
			text: "麦积区"
		}, {
			value: "620521",
			text: "清水县"
		}, {
			value: "620522",
			text: "秦安县"
		}, {
			value: "620523",
			text: "甘谷县"
		}, {
			value: "620524",
			text: "武山县"
		}, {
			value: "620525",
			text: "张家川回族自治县"
		}, {
			value: "620526",
			text: "其它区"
		}]
	}, {
		value: "620600",
		text: "武威市",
		children: [{
			value: "620602",
			text: "凉州区"
		}, {
			value: "620621",
			text: "民勤县"
		}, {
			value: "620622",
			text: "古浪县"
		}, {
			value: "620623",
			text: "天祝藏族自治县"
		}, {
			value: "620624",
			text: "其它区"
		}]
	}, {
		value: "620700",
		text: "张掖市",
		children: [{
			value: "620702",
			text: "甘州区"
		}, {
			value: "620721",
			text: "肃南裕固族自治县"
		}, {
			value: "620722",
			text: "民乐县"
		}, {
			value: "620723",
			text: "临泽县"
		}, {
			value: "620724",
			text: "高台县"
		}, {
			value: "620725",
			text: "山丹县"
		}, {
			value: "620726",
			text: "其它区"
		}]
	}, {
		value: "620800",
		text: "平凉市",
		children: [{
			value: "620802",
			text: "崆峒区"
		}, {
			value: "620821",
			text: "泾川县"
		}, {
			value: "620822",
			text: "灵台县"
		}, {
			value: "620823",
			text: "崇信县"
		}, {
			value: "620824",
			text: "华亭县"
		}, {
			value: "620825",
			text: "庄浪县"
		}, {
			value: "620826",
			text: "静宁县"
		}, {
			value: "620827",
			text: "其它区"
		}]
	}, {
		value: "620900",
		text: "酒泉市",
		children: [{
			value: "620902",
			text: "肃州区"
		}, {
			value: "620921",
			text: "金塔县"
		}, {
			value: "620922",
			text: "安西县"
		}, {
			value: "620923",
			text: "肃北蒙古族自治县"
		}, {
			value: "620924",
			text: "阿克塞哈萨克族自治县"
		}, {
			value: "620981",
			text: "玉门市"
		}, {
			value: "620982",
			text: "敦煌市"
		}, {
			value: "620983",
			text: "其它区"
		}]
	}, {
		value: "621000",
		text: "庆阳市",
		children: [{
			value: "621002",
			text: "西峰区"
		}, {
			value: "621021",
			text: "庆城县"
		}, {
			value: "621022",
			text: "环县"
		}, {
			value: "621023",
			text: "华池县"
		}, {
			value: "621024",
			text: "合水县"
		}, {
			value: "621025",
			text: "正宁县"
		}, {
			value: "621026",
			text: "宁县"
		}, {
			value: "621027",
			text: "镇原县"
		}, {
			value: "621028",
			text: "其它区"
		}]
	}, {
		value: "621100",
		text: "定西市",
		children: [{
			value: "621102",
			text: "安定区"
		}, {
			value: "621121",
			text: "通渭县"
		}, {
			value: "621122",
			text: "陇西县"
		}, {
			value: "621123",
			text: "渭源县"
		}, {
			value: "621124",
			text: "临洮县"
		}, {
			value: "621125",
			text: "漳县"
		}, {
			value: "621126",
			text: "岷县"
		}, {
			value: "621127",
			text: "其它区"
		}]
	}, {
		value: "621200",
		text: "陇南市",
		children: [{
			value: "621202",
			text: "武都区"
		}, {
			value: "621221",
			text: "成县"
		}, {
			value: "621222",
			text: "文县"
		}, {
			value: "621223",
			text: "宕昌县"
		}, {
			value: "621224",
			text: "康县"
		}, {
			value: "621225",
			text: "西和县"
		}, {
			value: "621226",
			text: "礼县"
		}, {
			value: "621227",
			text: "徽县"
		}, {
			value: "621228",
			text: "两当县"
		}, {
			value: "621229",
			text: "其它区"
		}]
	}, {
		value: "622900",
		text: "临夏回族自治州",
		children: [{
			value: "622901",
			text: "临夏市"
		}, {
			value: "622921",
			text: "临夏县"
		}, {
			value: "622922",
			text: "康乐县"
		}, {
			value: "622923",
			text: "永靖县"
		}, {
			value: "622924",
			text: "广河县"
		}, {
			value: "622925",
			text: "和政县"
		}, {
			value: "622926",
			text: "东乡族自治县"
		}, {
			value: "622927",
			text: "积石山保安族东乡族撒拉族自治县"
		}, {
			value: "622928",
			text: "其它区"
		}]
	}, {
		value: "623000",
		text: "甘南藏族自治州",
		children: [{
			value: "623001",
			text: "合作市"
		}, {
			value: "623021",
			text: "临潭县"
		}, {
			value: "623022",
			text: "卓尼县"
		}, {
			value: "623023",
			text: "舟曲县"
		}, {
			value: "623024",
			text: "迭部县"
		}, {
			value: "623025",
			text: "玛曲县"
		}, {
			value: "623026",
			text: "碌曲县"
		}, {
			value: "623027",
			text: "夏河县"
		}, {
			value: "623028",
			text: "其它区"
		}]
	}]
}, {
	value: '630000',
	text: '青海省',
	children: [{
		value: "630100",
		text: "西宁市",
		children: [{
			value: "630102",
			text: "城东区"
		}, {
			value: "630103",
			text: "城中区"
		}, {
			value: "630104",
			text: "城西区"
		}, {
			value: "630105",
			text: "城北区"
		}, {
			value: "630121",
			text: "大通回族土族自治县"
		}, {
			value: "630122",
			text: "湟中县"
		}, {
			value: "630123",
			text: "湟源县"
		}, {
			value: "630124",
			text: "其它区"
		}]
	}, {
		value: "632100",
		text: "海东地区",
		children: [{
			value: "632121",
			text: "平安县"
		}, {
			value: "632122",
			text: "民和回族土族自治县"
		}, {
			value: "632123",
			text: "乐都县"
		}, {
			value: "632126",
			text: "互助土族自治县"
		}, {
			value: "632127",
			text: "化隆回族自治县"
		}, {
			value: "632128",
			text: "循化撒拉族自治县"
		}, {
			value: "632129",
			text: "其它区"
		}]
	}, {
		value: "632200",
		text: "海北藏族自治州",
		children: [{
			value: "632221",
			text: "门源回族自治县"
		}, {
			value: "632222",
			text: "祁连县"
		}, {
			value: "632223",
			text: "海晏县"
		}, {
			value: "632224",
			text: "刚察县"
		}, {
			value: "632225",
			text: "其它区"
		}]
	}, {
		value: "632300",
		text: "黄南藏族自治州",
		children: [{
			value: "632321",
			text: "同仁县"
		}, {
			value: "632322",
			text: "尖扎县"
		}, {
			value: "632323",
			text: "泽库县"
		}, {
			value: "632324",
			text: "河南蒙古族自治县"
		}, {
			value: "632325",
			text: "其它区"
		}]
	}, {
		value: "632500",
		text: "海南藏族自治州",
		children: [{
			value: "632521",
			text: "共和县"
		}, {
			value: "632522",
			text: "同德县"
		}, {
			value: "632523",
			text: "贵德县"
		}, {
			value: "632524",
			text: "兴海县"
		}, {
			value: "632525",
			text: "贵南县"
		}, {
			value: "632526",
			text: "其它区"
		}]
	}, {
		value: "632600",
		text: "果洛藏族自治州",
		children: [{
			value: "632621",
			text: "玛沁县"
		}, {
			value: "632622",
			text: "班玛县"
		}, {
			value: "632623",
			text: "甘德县"
		}, {
			value: "632624",
			text: "达日县"
		}, {
			value: "632625",
			text: "久治县"
		}, {
			value: "632626",
			text: "玛多县"
		}, {
			value: "632627",
			text: "其它区"
		}]
	}, {
		value: "632700",
		text: "玉树藏族自治州",
		children: [{
			value: "632721",
			text: "玉树县"
		}, {
			value: "632722",
			text: "杂多县"
		}, {
			value: "632723",
			text: "称多县"
		}, {
			value: "632724",
			text: "治多县"
		}, {
			value: "632725",
			text: "囊谦县"
		}, {
			value: "632726",
			text: "曲麻莱县"
		}, {
			value: "632727",
			text: "其它区"
		}]
	}, {
		value: "632800",
		text: "海西蒙古族藏族自治州",
		children: [{
			value: "632801",
			text: "格尔木市"
		}, {
			value: "632802",
			text: "德令哈市"
		}, {
			value: "632821",
			text: "乌兰县"
		}, {
			value: "632822",
			text: "都兰县"
		}, {
			value: "632823",
			text: "天峻县"
		}, {
			value: "632824",
			text: "其它区"
		}]
	}]
}, {
	value: '640000',
	text: '宁夏',
	children: [{
		value: "640100",
		text: "银川市",
		children: [{
			value: "640104",
			text: "兴庆区"
		}, {
			value: "640105",
			text: "西夏区"
		}, {
			value: "640106",
			text: "金凤区"
		}, {
			value: "640121",
			text: "永宁县"
		}, {
			value: "640122",
			text: "贺兰县"
		}, {
			value: "640181",
			text: "灵武市"
		}, {
			value: "640182",
			text: "其它区"
		}]
	}, {
		value: "640200",
		text: "石嘴山市",
		children: [{
			value: "640202",
			text: "大武口区"
		}, {
			value: "640205",
			text: "惠农区"
		}, {
			value: "640221",
			text: "平罗县"
		}, {
			value: "640222",
			text: "其它区"
		}]
	}, {
		value: "640300",
		text: "吴忠市",
		children: [{
			value: "640302",
			text: "利通区"
		}, {
			value: "640303",
			text: "红寺堡区"
		}, {
			value: "640323",
			text: "盐池县"
		}, {
			value: "640324",
			text: "同心县"
		}, {
			value: "640381",
			text: "青铜峡市"
		}, {
			value: "640382",
			text: "其它区"
		}]
	}, {
		value: "640400",
		text: "固原市",
		children: [{
			value: "640402",
			text: "原州区"
		}, {
			value: "640422",
			text: "西吉县"
		}, {
			value: "640423",
			text: "隆德县"
		}, {
			value: "640424",
			text: "泾源县"
		}, {
			value: "640425",
			text: "彭阳县"
		}, {
			value: "640426",
			text: "其它区"
		}]
	}, {
		value: "640500",
		text: "中卫市",
		children: [{
			value: "640502",
			text: "沙坡头区"
		}, {
			value: "640521",
			text: "中宁县"
		}, {
			value: "640522",
			text: "海原县"
		}, {
			value: "640523",
			text: "其它区"
		}]
	}]
}, {
	value: '650000',
	text: '新疆',
	children: [{
		value: "650100",
		text: "乌鲁木齐市",
		children: [{
			value: "650102",
			text: "天山区"
		}, {
			value: "650103",
			text: "沙依巴克区"
		}, {
			value: "650104",
			text: "新市区"
		}, {
			value: "650105",
			text: "水磨沟区"
		}, {
			value: "650106",
			text: "头屯河区"
		}, {
			value: "650107",
			text: "达坂城区"
		}, {
			value: "650108",
			text: "东山区"
		}, {
			value: "650109",
			text: "米东区"
		}, {
			value: "650121",
			text: "乌鲁木齐县"
		}, {
			value: "650122",
			text: "其它区"
		}]
	}, {
		value: "650200",
		text: "克拉玛依市",
		children: [{
			value: "650202",
			text: "独山子区"
		}, {
			value: "650203",
			text: "克拉玛依区"
		}, {
			value: "650204",
			text: "白碱滩区"
		}, {
			value: "650205",
			text: "乌尔禾区"
		}, {
			value: "650206",
			text: "其它区"
		}]
	}, {
		value: "652100",
		text: "吐鲁番地区",
		children: [{
			value: "652101",
			text: "吐鲁番市"
		}, {
			value: "652122",
			text: "鄯善县"
		}, {
			value: "652123",
			text: "托克逊县"
		}, {
			value: "652124",
			text: "其它区"
		}]
	}, {
		value: "652200",
		text: "哈密地区",
		children: [{
			value: "652201",
			text: "哈密市"
		}, {
			value: "652222",
			text: "巴里坤哈萨克自治县"
		}, {
			value: "652223",
			text: "伊吾县"
		}, {
			value: "652224",
			text: "其它区"
		}]
	}, {
		value: "652300",
		text: "昌吉回族自治州",
		children: [{
			value: "652301",
			text: "昌吉市"
		}, {
			value: "652302",
			text: "阜康市"
		}, {
			value: "652303",
			text: "米泉市"
		}, {
			value: "652323",
			text: "呼图壁县"
		}, {
			value: "652324",
			text: "玛纳斯县"
		}, {
			value: "652325",
			text: "奇台县"
		}, {
			value: "652327",
			text: "吉木萨尔县"
		}, {
			value: "652328",
			text: "木垒哈萨克自治县"
		}, {
			value: "652329",
			text: "其它区"
		}]
	}, {
		value: "652700",
		text: "博尔塔拉蒙古自治州",
		children: [{
			value: "652701",
			text: "博乐市"
		}, {
			value: "652722",
			text: "精河县"
		}, {
			value: "652723",
			text: "温泉县"
		}, {
			value: "652724",
			text: "其它区"
		}]
	}, {
		value: "652800",
		text: "巴音郭楞蒙古自治州",
		children: [{
			value: "652801",
			text: "库尔勒市"
		}, {
			value: "652822",
			text: "轮台县"
		}, {
			value: "652823",
			text: "尉犁县"
		}, {
			value: "652824",
			text: "若羌县"
		}, {
			value: "652825",
			text: "且末县"
		}, {
			value: "652826",
			text: "焉耆回族自治县"
		}, {
			value: "652827",
			text: "和静县"
		}, {
			value: "652828",
			text: "和硕县"
		}, {
			value: "652829",
			text: "博湖县"
		}, {
			value: "652830",
			text: "其它区"
		}]
	}, {
		value: "652900",
		text: "阿克苏地区",
		children: [{
			value: "652901",
			text: "阿克苏市"
		}, {
			value: "652922",
			text: "温宿县"
		}, {
			value: "652923",
			text: "库车县"
		}, {
			value: "652924",
			text: "沙雅县"
		}, {
			value: "652925",
			text: "新和县"
		}, {
			value: "652926",
			text: "拜城县"
		}, {
			value: "652927",
			text: "乌什县"
		}, {
			value: "652928",
			text: "阿瓦提县"
		}, {
			value: "652929",
			text: "柯坪县"
		}, {
			value: "652930",
			text: "其它区"
		}]
	}, {
		value: "653000",
		text: "克孜勒苏柯尔克孜自治州",
		children: [{
			value: "653001",
			text: "阿图什市"
		}, {
			value: "653022",
			text: "阿克陶县"
		}, {
			value: "653023",
			text: "阿合奇县"
		}, {
			value: "653024",
			text: "乌恰县"
		}, {
			value: "653025",
			text: "其它区"
		}]
	}, {
		value: "653100",
		text: "喀什地区",
		children: [{
			value: "653101",
			text: "喀什市"
		}, {
			value: "653121",
			text: "疏附县"
		}, {
			value: "653122",
			text: "疏勒县"
		}, {
			value: "653123",
			text: "英吉沙县"
		}, {
			value: "653124",
			text: "泽普县"
		}, {
			value: "653125",
			text: "莎车县"
		}, {
			value: "653126",
			text: "叶城县"
		}, {
			value: "653127",
			text: "麦盖提县"
		}, {
			value: "653128",
			text: "岳普湖县"
		}, {
			value: "653129",
			text: "伽师县"
		}, {
			value: "653130",
			text: "巴楚县"
		}, {
			value: "653131",
			text: "塔什库尔干塔吉克自治县"
		}, {
			value: "653132",
			text: "其它区"
		}]
	}, {
		value: "653200",
		text: "和田地区",
		children: [{
			value: "653201",
			text: "和田市"
		}, {
			value: "653221",
			text: "和田县"
		}, {
			value: "653222",
			text: "墨玉县"
		}, {
			value: "653223",
			text: "皮山县"
		}, {
			value: "653224",
			text: "洛浦县"
		}, {
			value: "653225",
			text: "策勒县"
		}, {
			value: "653226",
			text: "于田县"
		}, {
			value: "653227",
			text: "民丰县"
		}, {
			value: "653228",
			text: "其它区"
		}]
	}, {
		value: "654000",
		text: "伊犁哈萨克自治州",
		children: [{
			value: "654002",
			text: "伊宁市"
		}, {
			value: "654003",
			text: "奎屯市"
		}, {
			value: "654021",
			text: "伊宁县"
		}, {
			value: "654022",
			text: "察布查尔锡伯自治县"
		}, {
			value: "654023",
			text: "霍城县"
		}, {
			value: "654024",
			text: "巩留县"
		}, {
			value: "654025",
			text: "新源县"
		}, {
			value: "654026",
			text: "昭苏县"
		}, {
			value: "654027",
			text: "特克斯县"
		}, {
			value: "654028",
			text: "尼勒克县"
		}, {
			value: "654029",
			text: "其它区"
		}]
	}, {
		value: "654200",
		text: "塔城地区",
		children: [{
			value: "654201",
			text: "塔城市"
		}, {
			value: "654202",
			text: "乌苏市"
		}, {
			value: "654221",
			text: "额敏县"
		}, {
			value: "654223",
			text: "沙湾县"
		}, {
			value: "654224",
			text: "托里县"
		}, {
			value: "654225",
			text: "裕民县"
		}, {
			value: "654226",
			text: "和布克赛尔蒙古自治县"
		}, {
			value: "654227",
			text: "其它区"
		}]
	}, {
		value: "654300",
		text: "阿勒泰地区",
		children: [{
			value: "654301",
			text: "阿勒泰市"
		}, {
			value: "654321",
			text: "布尔津县"
		}, {
			value: "654322",
			text: "富蕴县"
		}, {
			value: "654323",
			text: "福海县"
		}, {
			value: "654324",
			text: "哈巴河县"
		}, {
			value: "654325",
			text: "青河县"
		}, {
			value: "654326",
			text: "吉木乃县"
		}, {
			value: "654327",
			text: "其它区"
		}]
	}, {
		value: "659001",
		text: "石河子市"
	}, {
		value: "659002",
		text: "阿拉尔市"
	}, {
		value: "659003",
		text: "图木舒克市"
	}, {
		value: "659004",
		text: "五家渠市"
	}]
}, {
	value: '710000',
	text: '台湾省',
	children: [{
		value: "710100",
		text: "台北市",
		children: [{
			value: "710101",
			text: "中正区"
		}, {
			value: "710102",
			text: "大同区"
		}, {
			value: "710103",
			text: "中山区"
		}, {
			value: "710104",
			text: "松山区"
		}, {
			value: "710105",
			text: "大安区"
		}, {
			value: "710106",
			text: "万华区"
		}, {
			value: "710107",
			text: "信义区"
		}, {
			value: "710108",
			text: "士林区"
		}, {
			value: "710109",
			text: "北投区"
		}, {
			value: "710110",
			text: "内湖区"
		}, {
			value: "710111",
			text: "南港区"
		}, {
			value: "710112",
			text: "文山区"
		}, {
			value: "710113",
			text: "其它区"
		}]
	}, {
		value: "710200",
		text: "高雄市",
		children: [{
			value: "710201",
			text: "新兴区"
		}, {
			value: "710202",
			text: "前金区"
		}, {
			value: "710203",
			text: "芩雅区"
		}, {
			value: "710204",
			text: "盐埕区"
		}, {
			value: "710205",
			text: "鼓山区"
		}, {
			value: "710206",
			text: "旗津区"
		}, {
			value: "710207",
			text: "前镇区"
		}, {
			value: "710208",
			text: "三民区"
		}, {
			value: "710209",
			text: "左营区"
		}, {
			value: "710210",
			text: "楠梓区"
		}, {
			value: "710211",
			text: "小港区"
		}, {
			value: "710212",
			text: "其它区"
		}]
	}, {
		value: "710300",
		text: "台南市",
		children: [{
			value: "710301",
			text: "中西区"
		}, {
			value: "710302",
			text: "东区"
		}, {
			value: "710303",
			text: "南区"
		}, {
			value: "710304",
			text: "北区"
		}, {
			value: "710305",
			text: "安平区"
		}, {
			value: "710306",
			text: "安南区"
		}, {
			value: "710307",
			text: "其它区"
		}]
	}, {
		value: "710400",
		text: "台中市",
		children: [{
			value: "710401",
			text: "中区"
		}, {
			value: "710402",
			text: "东区"
		}, {
			value: "710403",
			text: "南区"
		}, {
			value: "710404",
			text: "西区"
		}, {
			value: "710405",
			text: "北区"
		}, {
			value: "710406",
			text: "北屯区"
		}, {
			value: "710407",
			text: "西屯区"
		}, {
			value: "710408",
			text: "南屯区"
		}, {
			value: "710409",
			text: "其它区"
		}]
	}, {
		value: "710500",
		text: "金门县"
	}, {
		value: "710600",
		text: "南投县"
	}, {
		value: "710700",
		text: "基隆市",
		children: [{
			value: "710701",
			text: "仁爱区"
		}, {
			value: "710702",
			text: "信义区"
		}, {
			value: "710703",
			text: "中正区"
		}, {
			value: "710704",
			text: "中山区"
		}, {
			value: "710705",
			text: "安乐区"
		}, {
			value: "710706",
			text: "暖暖区"
		}, {
			value: "710707",
			text: "七堵区"
		}, {
			value: "710708",
			text: "其它区"
		}]
	}, {
		value: "710800",
		text: "新竹市",
		children: [{
			value: "710801",
			text: "东区"
		}, {
			value: "710802",
			text: "北区"
		}, {
			value: "710803",
			text: "香山区"
		}, {
			value: "710804",
			text: "其它区"
		}]
	}, {
		value: "710900",
		text: "嘉义市",
		children: [{
			value: "710901",
			text: "东区"
		}, {
			value: "710902",
			text: "西区"
		}, {
			value: "710903",
			text: "其它区"
		}]
	}, {
		value: "711100",
		text: "新北市"
	}, {
		value: "711200",
		text: "宜兰县"
	}, {
		value: "711300",
		text: "新竹县"
	}, {
		value: "711400",
		text: "桃园县"
	}, {
		value: "711500",
		text: "苗栗县"
	}, {
		value: "711700",
		text: "彰化县"
	}, {
		value: "711900",
		text: "嘉义县"
	}, {
		value: "712100",
		text: "云林县"
	}, {
		value: "712400",
		text: "屏东县"
	}, {
		value: "712500",
		text: "台东县"
	}, {
		value: "712600",
		text: "花莲县"
	}, {
		value: "712700",
		text: "澎湖县"
	}]
}, {
	value: '810000',
	text: '香港',
	children: [{
		value: "810100",
		text: "香港岛",
		children: [{
			value: "810101",
			text: "中西区"
		}, {
			value: "810102",
			text: "湾仔"
		}, {
			value: "810103",
			text: "东区"
		}, {
			value: "810104",
			text: "南区"
		}]
	}, {
		value: "810200",
		text: "九龙",
		children: [{
			value: "810201",
			text: "九龙城区"
		}, {
			value: "810202",
			text: "油尖旺区"
		}, {
			value: "810203",
			text: "深水埗区"
		}, {
			value: "810204",
			text: "黄大仙区"
		}, {
			value: "810205",
			text: "观塘区"
		}]
	}, {
		value: "810300",
		text: "新界",
		children: [{
			value: "810301",
			text: "北区"
		}, {
			value: "810302",
			text: "大埔区"
		}, {
			value: "810303",
			text: "沙田区"
		}, {
			value: "810304",
			text: "西贡区"
		}, {
			value: "810305",
			text: "元朗区"
		}, {
			value: "810306",
			text: "屯门区"
		}, {
			value: "810307",
			text: "荃湾区"
		}, {
			value: "810308",
			text: "葵青区"
		}, {
			value: "810309",
			text: "离岛区"
		}]
	}]
}, {
	value: '820000',
	text: '澳门',
	children: [{
		value: "820100",
		text: "澳门半岛"
	}, {
		value: "820200",
		text: "离岛"
	}]
}, {
	value: '990000',
	text: '海外',
	children: [{
		value: "990100",
		text: "海外"
	}]
}];
define("city_data", function(){});

function onLine(onFn,offFn){
	var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
};

EventUtil.addHandler(window, "online", onFn);
EventUtil.addHandler(window, "offline", offFn);
}
;
define("onLine", function(){});

/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define('vue',e):t.Vue=e()}(this,function(){function t(e,n,r){if(i(e,n))return void(e[n]=r);if(e._isVue)return void t(e._data,n,r);var s=e.__ob__;if(!s)return void(e[n]=r);if(s.convert(n,r),s.dep.notify(),s.vms)for(var o=s.vms.length;o--;){var a=s.vms[o];a._proxy(n),a._digest()}return r}function e(t,e){if(i(t,e)){delete t[e];var n=t.__ob__;if(!n)return void(t._isVue&&(delete t._data[e],t._digest()));if(n.dep.notify(),n.vms)for(var r=n.vms.length;r--;){var s=n.vms[r];s._unproxy(e),s._digest()}}}function i(t,e){return Oi.call(t,e)}function n(t){return Ti.test(t)}function r(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function s(t){return null==t?"":t.toString()}function o(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e}function a(t){return"true"===t?!0:"false"===t?!1:t}function h(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function l(t){return t.replace(Ni,c)}function c(t,e){return e?e.toUpperCase():""}function u(t){return t.replace(ji,"$1-$2").toLowerCase()}function f(t){return t.replace(Ei,c)}function p(t,e){return function(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}}function d(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n}function v(t,e){for(var i=Object.keys(e),n=i.length;n--;)t[i[n]]=e[i[n]];return t}function m(t){return null!==t&&"object"==typeof t}function g(t){return Si.call(t)===Fi}function _(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}function y(t,e){var i,n,r,s,o,a=function h(){var a=Date.now()-s;e>a&&a>=0?i=setTimeout(h,e-a):(i=null,o=t.apply(r,n),i||(r=n=null))};return function(){return r=this,n=arguments,s=Date.now(),i||(i=setTimeout(a,e)),o}}function b(t,e){for(var i=t.length;i--;)if(t[i]===e)return i;return-1}function w(t){var e=function i(){return i.cancelled?void 0:t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}function C(t,e){return t==e||(m(t)&&m(e)?JSON.stringify(t)===JSON.stringify(e):!1)}function $(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=Object.create(null)}function k(){var t,e=en.slice(hn,on).trim();if(e){t={};var i=e.match(vn);t.name=i[0],i.length>1&&(t.args=i.slice(1).map(x))}t&&(nn.filters=nn.filters||[]).push(t),hn=on+1}function x(t){if(mn.test(t))return{value:o(t),dynamic:!1};var e=h(t),i=e===t;return{value:i?t:e,dynamic:i}}function A(t){var e=dn.get(t);if(e)return e;for(en=t,ln=cn=!1,un=fn=pn=0,hn=0,nn={},on=0,an=en.length;an>on;on++)if(sn=rn,rn=en.charCodeAt(on),ln)39===rn&&92!==sn&&(ln=!ln);else if(cn)34===rn&&92!==sn&&(cn=!cn);else if(124===rn&&124!==en.charCodeAt(on+1)&&124!==en.charCodeAt(on-1))null==nn.expression?(hn=on+1,nn.expression=en.slice(0,on).trim()):k();else switch(rn){case 34:cn=!0;break;case 39:ln=!0;break;case 40:pn++;break;case 41:pn--;break;case 91:fn++;break;case 93:fn--;break;case 123:un++;break;case 125:un--}return null==nn.expression?nn.expression=en.slice(0,on).trim():0!==hn&&k(),dn.put(t,nn),nn}function O(t){return t.replace(_n,"\\$&")}function T(){var t=O(An.delimiters[0]),e=O(An.delimiters[1]),i=O(An.unsafeDelimiters[0]),n=O(An.unsafeDelimiters[1]);bn=new RegExp(i+"((?:.|\\n)+?)"+n+"|"+t+"((?:.|\\n)+?)"+e,"g"),wn=new RegExp("^"+i+"((?:.|\\n)+?)"+n+"$"),yn=new $(1e3)}function N(t){yn||T();var e=yn.get(t);if(e)return e;if(!bn.test(t))return null;for(var i,n,r,s,o,a,h=[],l=bn.lastIndex=0;i=bn.exec(t);)n=i.index,n>l&&h.push({value:t.slice(l,n)}),r=wn.test(i[0]),s=r?i[1]:i[2],o=s.charCodeAt(0),a=42===o,s=a?s.slice(1):s,h.push({tag:!0,value:s.trim(),html:r,oneTime:a}),l=n+i[0].length;return l<t.length&&h.push({value:t.slice(l)}),yn.put(t,h),h}function j(t,e){return t.length>1?t.map(function(t){return E(t,e)}).join("+"):E(t[0],e,!0)}function E(t,e,i){return t.tag?t.oneTime&&e?'"'+e.$eval(t.value)+'"':S(t.value,i):'"'+t.value+'"'}function S(t,e){if(Cn.test(t)){var i=A(t);return i.filters?"this._applyFilters("+i.expression+",null,"+JSON.stringify(i.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}function F(t,e,i,n){R(t,1,function(){e.appendChild(t)},i,n)}function D(t,e,i,n){R(t,1,function(){B(t,e)},i,n)}function P(t,e,i){R(t,-1,function(){z(t)},e,i)}function R(t,e,i,n,r){var s=t.__v_trans;if(!s||!s.hooks&&!qi||!n._isCompiled||n.$parent&&!n.$parent._isCompiled)return i(),void(r&&r());var o=e>0?"enter":"leave";s[o](i,r)}function L(t){if("string"==typeof t){t=document.querySelector(t)}return t}function H(t){if(!t)return!1;var e=t.ownerDocument.documentElement,i=t.parentNode;return e===t||e===i||!(!i||1!==i.nodeType||!e.contains(i))}function I(t,e){var i=t.getAttribute(e);return null!==i&&t.removeAttribute(e),i}function M(t,e){var i=I(t,":"+e);return null===i&&(i=I(t,"v-bind:"+e)),i}function V(t,e){return t.hasAttribute(e)||t.hasAttribute(":"+e)||t.hasAttribute("v-bind:"+e)}function B(t,e){e.parentNode.insertBefore(t,e)}function W(t,e){e.nextSibling?B(t,e.nextSibling):e.parentNode.appendChild(t)}function z(t){t.parentNode.removeChild(t)}function U(t,e){e.firstChild?B(t,e.firstChild):e.appendChild(t)}function J(t,e){var i=t.parentNode;i&&i.replaceChild(e,t)}function q(t,e,i,n){t.addEventListener(e,i,n)}function Q(t,e,i){t.removeEventListener(e,i)}function G(t){var e=t.className;return"object"==typeof e&&(e=e.baseVal||""),e}function Z(t,e){Mi&&!/svg$/.test(t.namespaceURI)?t.className=e:t.setAttribute("class",e)}function X(t,e){if(t.classList)t.classList.add(e);else{var i=" "+G(t)+" ";i.indexOf(" "+e+" ")<0&&Z(t,(i+e).trim())}}function Y(t,e){if(t.classList)t.classList.remove(e);else{for(var i=" "+G(t)+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");Z(t,i.trim())}t.className||t.removeAttribute("class")}function K(t,e){var i,n;if(it(t)&&at(t.content)&&(t=t.content),t.hasChildNodes())for(tt(t),n=e?document.createDocumentFragment():document.createElement("div");i=t.firstChild;)n.appendChild(i);return n}function tt(t){for(var e;e=t.firstChild,et(e);)t.removeChild(e);for(;e=t.lastChild,et(e);)t.removeChild(e)}function et(t){return t&&(3===t.nodeType&&!t.data.trim()||8===t.nodeType)}function it(t){return t.tagName&&"template"===t.tagName.toLowerCase()}function nt(t,e){var i=An.debug?document.createComment(t):document.createTextNode(e?" ":"");return i.__v_anchor=!0,i}function rt(t){if(t.hasAttributes())for(var e=t.attributes,i=0,n=e.length;n>i;i++){var r=e[i].name;if(Nn.test(r))return l(r.replace(Nn,""))}}function st(t,e,i){for(var n;t!==e;)n=t.nextSibling,i(t),t=n;i(e)}function ot(t,e,i,n,r){function s(){if(a++,o&&a>=h.length){for(var t=0;t<h.length;t++)n.appendChild(h[t]);r&&r()}}var o=!1,a=0,h=[];st(t,e,function(t){t===e&&(o=!0),h.push(t),P(t,i,s)})}function at(t){return t&&11===t.nodeType}function ht(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function lt(t,e){var i=t.tagName.toLowerCase(),n=t.hasAttributes();if(jn.test(i)||En.test(i)){if(n)return ct(t,e)}else{if(gt(e,"components",i))return{id:i};var r=n&&ct(t,e);if(r)return r}}function ct(t,e){var i=t.getAttribute("is");if(null!=i){if(gt(e,"components",i))return t.removeAttribute("is"),{id:i}}else if(i=M(t,"is"),null!=i)return{id:i,dynamic:!0}}function ut(e,n){var r,s,o;for(r in n)s=e[r],o=n[r],i(e,r)?m(s)&&m(o)&&ut(s,o):t(e,r,o);return e}function ft(t,e){var i=Object.create(t||null);return e?v(i,vt(e)):i}function pt(t){if(t.components)for(var e,i=t.components=vt(t.components),n=Object.keys(i),r=0,s=n.length;s>r;r++){var o=n[r];jn.test(o)||En.test(o)||(e=i[o],g(e)&&(i[o]=wi.extend(e)))}}function dt(t){var e,i,n=t.props;if(Di(n))for(t.props={},e=n.length;e--;)i=n[e],"string"==typeof i?t.props[i]=null:i.name&&(t.props[i.name]=i);else if(g(n)){var r=Object.keys(n);for(e=r.length;e--;)i=n[r[e]],"function"==typeof i&&(n[r[e]]={type:i})}}function vt(t){if(Di(t)){for(var e,i={},n=t.length;n--;){e=t[n];var r="function"==typeof e?e.options&&e.options.name||e.id:e.name||e.id;r&&(i[r]=e)}return i}return t}function mt(t,e,n){function r(i){var r=Sn[i]||Fn;o[i]=r(t[i],e[i],n,i)}pt(e),dt(e);var s,o={};if(e["extends"]&&(t="function"==typeof e["extends"]?mt(t,e["extends"].options,n):mt(t,e["extends"],n)),e.mixins)for(var a=0,h=e.mixins.length;h>a;a++){var l=e.mixins[a],c=l.prototype instanceof wi?l.options:l;t=mt(t,c,n)}for(s in t)r(s);for(s in e)i(t,s)||r(s);return o}function gt(t,e,i,n){if("string"==typeof i){var r,s=t[e],o=s[i]||s[r=l(i)]||s[r.charAt(0).toUpperCase()+r.slice(1)];return o}}function _t(){this.id=Dn++,this.subs=[]}function yt(t){Hn=!1,t(),Hn=!0}function bt(t){if(this.value=t,this.dep=new _t,_(t,"__ob__",this),Di(t)){var e=Pi?wt:Ct;e(t,Rn,Ln),this.observeArray(t)}else this.walk(t)}function wt(t,e){t.__proto__=e}function Ct(t,e,i){for(var n=0,r=i.length;r>n;n++){var s=i[n];_(t,s,e[s])}}function $t(t,e){if(t&&"object"==typeof t){var n;return i(t,"__ob__")&&t.__ob__ instanceof bt?n=t.__ob__:Hn&&(Di(t)||g(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new bt(t)),n&&e&&n.addVm(e),n}}function kt(t,e,i){var n=new _t,r=Object.getOwnPropertyDescriptor(t,e);if(!r||r.configurable!==!1){var s=r&&r.get,o=r&&r.set,a=$t(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):i;if(_t.target&&(n.depend(),a&&a.dep.depend(),Di(e)))for(var r,o=0,h=e.length;h>o;o++)r=e[o],r&&r.__ob__&&r.__ob__.dep.depend();return e},set:function(e){var r=s?s.call(t):i;e!==r&&(o?o.call(t,e):i=e,a=$t(e),n.notify())}})}}function xt(t){t.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=Mn++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=mt(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function At(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function Ot(t){var e=t.trim();return"0"===t.charAt(0)&&isNaN(t)?!1:n(e)?h(e):"*"+e}function Tt(t){function e(){var e=t[c+1];return u===Xn&&"'"===e||u===Yn&&'"'===e?(c++,n="\\"+e,p[Bn](),!0):void 0}var i,n,r,s,o,a,h,l=[],c=-1,u=Jn,f=0,p=[];for(p[Wn]=function(){void 0!==r&&(l.push(r),r=void 0)},p[Bn]=function(){void 0===r?r=n:r+=n},p[zn]=function(){p[Bn](),f++},p[Un]=function(){if(f>0)f--,u=Zn,p[Bn]();else{if(f=0,r=Ot(r),r===!1)return!1;p[Wn]()}};null!=u;)if(c++,i=t[c],"\\"!==i||!e()){if(s=At(i),h=er[u],o=h[s]||h["else"]||tr,o===tr)return;if(u=o[0],a=p[o[1]],a&&(n=o[2],n=void 0===n?i:n,a()===!1))return;if(u===Kn)return l.raw=t,l}}function Nt(t){var e=Vn.get(t);return e||(e=Tt(t),e&&Vn.put(t,e)),e}function jt(t,e){return It(e).get(t)}function Et(e,i,n){var r=e;if("string"==typeof i&&(i=Tt(i)),!i||!m(e))return!1;for(var s,o,a=0,h=i.length;h>a;a++)s=e,o=i[a],"*"===o.charAt(0)&&(o=It(o.slice(1)).get.call(r,r)),h-1>a?(e=e[o],m(e)||(e={},t(s,o,e))):Di(e)?e.$set(o,n):o in e?e[o]=n:t(e,o,n);return!0}function St(){}function Ft(t,e){var i=vr.length;return vr[i]=e?t.replace(lr,"\\n"):t,'"'+i+'"'}function Dt(t){var e=t.charAt(0),i=t.slice(1);return sr.test(i)?t:(i=i.indexOf('"')>-1?i.replace(ur,Pt):i,e+"scope."+i)}function Pt(t,e){return vr[e]}function Rt(t){ar.test(t),vr.length=0;var e=t.replace(cr,Ft).replace(hr,"");return e=(" "+e).replace(pr,Dt).replace(ur,Pt),Lt(e)}function Lt(t){try{return new Function("scope","return "+t+";")}catch(e){return St}}function Ht(t){var e=Nt(t);return e?function(t,i){Et(t,e,i)}:void 0}function It(t,e){t=t.trim();var i=nr.get(t);if(i)return e&&!i.set&&(i.set=Ht(i.exp)),i;var n={exp:t};return n.get=Mt(t)&&t.indexOf("[")<0?Lt("scope."+t):Rt(t),e&&(n.set=Ht(t)),nr.put(t,n),n}function Mt(t){return fr.test(t)&&!dr.test(t)&&"Math."!==t.slice(0,5)}function Vt(){gr.length=0,_r.length=0,yr={},br={},wr=!1}function Bt(){for(var t=!0;t;)t=!1,Wt(gr),Wt(_r),gr.length?t=!0:(Li&&An.devtools&&Li.emit("flush"),Vt())}function Wt(t){for(var e=0;e<t.length;e++){var i=t[e],n=i.id;yr[n]=null,i.run()}t.length=0}function zt(t){var e=t.id;if(null==yr[e]){var i=t.user?_r:gr;yr[e]=i.length,i.push(t),wr||(wr=!0,Yi(Bt))}}function Ut(t,e,i,n){n&&v(this,n);var r="function"==typeof e;if(this.vm=t,t._watchers.push(this),this.expression=e,this.cb=i,this.id=++Cr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Ki,this.newDepIds=new Ki,this.prevError=null,r)this.getter=e,this.setter=void 0;else{var s=It(e,this.twoWay);this.getter=s.get,this.setter=s.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function Jt(t,e){var i=void 0,n=void 0;e||(e=$r,e.clear());var r=Di(t),s=m(t);if((r||s)&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r)for(i=t.length;i--;)Jt(t[i],e);else if(s)for(n=Object.keys(t),i=n.length;i--;)Jt(t[n[i]],e)}}function qt(t){return it(t)&&at(t.content)}function Qt(t,e){var i=e?t:t.trim(),n=xr.get(i);if(n)return n;var r=document.createDocumentFragment(),s=t.match(Tr),o=Nr.test(t),a=jr.test(t);if(s||o||a){var h=s&&s[1],l=Or[h]||Or.efault,c=l[0],u=l[1],f=l[2],p=document.createElement("div");for(p.innerHTML=u+t+f;c--;)p=p.lastChild;for(var d;d=p.firstChild;)r.appendChild(d)}else r.appendChild(document.createTextNode(t));return e||tt(r),xr.put(i,r),r}function Gt(t){if(qt(t))return Qt(t.innerHTML);if("SCRIPT"===t.tagName)return Qt(t.textContent);for(var e,i=Zt(t),n=document.createDocumentFragment();e=i.firstChild;)n.appendChild(e);return tt(n),n}function Zt(t){if(!t.querySelectorAll)return t.cloneNode();var e,i,n,r=t.cloneNode(!0);if(Er){var s=r;if(qt(t)&&(t=t.content,s=r.content),i=t.querySelectorAll("template"),i.length)for(n=s.querySelectorAll("template"),e=n.length;e--;)n[e].parentNode.replaceChild(Zt(i[e]),n[e])}if(Sr)if("TEXTAREA"===t.tagName)r.value=t.value;else if(i=t.querySelectorAll("textarea"),i.length)for(n=r.querySelectorAll("textarea"),e=n.length;e--;)n[e].value=i[e].value;return r}function Xt(t,e,i){var n,r;return at(t)?(tt(t),e?Zt(t):t):("string"==typeof t?i||"#"!==t.charAt(0)?r=Qt(t,i):(r=Ar.get(t),r||(n=document.getElementById(t.slice(1)),n&&(r=Gt(n),Ar.put(t,r)))):t.nodeType&&(r=Gt(t)),r&&e?Zt(r):r)}function Yt(t,e,i,n,r,s){this.children=[],this.childFrags=[],this.vm=e,this.scope=r,this.inserted=!1,this.parentFrag=s,s&&s.childFrags.push(this),this.unlink=t(e,i,n,r,this);var o=this.single=1===i.childNodes.length&&!i.childNodes[0].__v_anchor;o?(this.node=i.childNodes[0],this.before=Kt,this.remove=te):(this.node=nt("fragment-start"),this.end=nt("fragment-end"),this.frag=i,U(this.node,i),i.appendChild(this.end),this.before=ee,this.remove=ie),this.node.__v_frag=this}function Kt(t,e){this.inserted=!0;var i=e!==!1?D:B;i(this.node,t,this.vm),H(this.node)&&this.callHook(ne)}function te(){this.inserted=!1;var t=H(this.node),e=this;this.beforeRemove(),P(this.node,this.vm,function(){t&&e.callHook(re),e.destroy()})}function ee(t,e){this.inserted=!0;var i=this.vm,n=e!==!1?D:B;st(this.node,this.end,function(e){n(e,t,i)}),H(this.node)&&this.callHook(ne)}function ie(){this.inserted=!1;var t=this,e=H(this.node);this.beforeRemove(),ot(this.node,this.end,this.vm,this.frag,function(){e&&t.callHook(re),t.destroy()})}function ne(t){!t._isAttached&&H(t.$el)&&t._callHook("attached")}function re(t){t._isAttached&&!H(t.$el)&&t._callHook("detached")}function se(t,e){this.vm=t;var i,n="string"==typeof e;n||it(e)&&!e.hasAttribute("v-if")?i=Xt(e,!0):(i=document.createDocumentFragment(),i.appendChild(e)),this.template=i;var r,s=t.constructor.cid;if(s>0){var o=s+(n?e:ht(e));r=Pr.get(o),r||(r=De(i,t.$options,!0),Pr.put(o,r))}else r=De(i,t.$options,!0);this.linker=r}function oe(t,e,i){var n=t.node.previousSibling;if(n){for(t=n.__v_frag;!(t&&t.forId===i&&t.inserted||n===e);){if(n=n.previousSibling,!n)return;t=n.__v_frag}return t}}function ae(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;)e=e.nextSibling;return e.__vue__}function he(t){for(var e=-1,i=new Array(Math.floor(t));++e<t;)i[e]=e;return i}function le(t,e,i,n){return n?"$index"===n?t:n.charAt(0).match(/\w/)?jt(i,n):i[n]:e||i}function ce(t,e,i){for(var n,r,s,o=e?[]:null,a=0,h=t.options.length;h>a;a++)if(n=t.options[a],s=i?n.hasAttribute("selected"):n.selected){if(r=n.hasOwnProperty("_value")?n._value:n.value,!e)return r;o.push(r)}return o}function ue(t,e){for(var i=t.length;i--;)if(C(t[i],e))return i;return-1}function fe(t,e){var i=e.map(function(t){var e=t.charCodeAt(0);return e>47&&58>e?parseInt(t,10):1===t.length&&(e=t.toUpperCase().charCodeAt(0),e>64&&91>e)?e:is[t]});return i=[].concat.apply([],i),function(e){return i.indexOf(e.keyCode)>-1?t.call(this,e):void 0}}function pe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function de(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ve(t){return function(e){return e.target===e.currentTarget?t.call(this,e):void 0}}function me(t){if(as[t])return as[t];var e=ge(t);return as[t]=as[e]=e,e}function ge(t){t=u(t);var e=l(t),i=e.charAt(0).toUpperCase()+e.slice(1);hs||(hs=document.createElement("div"));var n,r=rs.length;if("filter"!==e&&e in hs.style)return{kebab:t,camel:e};for(;r--;)if(n=ss[r]+i,n in hs.style)return{kebab:rs[r]+t,camel:n}}function _e(t){var e=[];if(Di(t))for(var i=0,n=t.length;n>i;i++){var r=t[i];if(r)if("string"==typeof r)e.push(r);else for(var s in r)r[s]&&e.push(s)}else if(m(t))for(var o in t)t[o]&&e.push(o);return e}function ye(t,e,i){if(e=e.trim(),-1===e.indexOf(" "))return void i(t,e);for(var n=e.split(/\s+/),r=0,s=n.length;s>r;r++)i(t,n[r])}function be(t,e,i){function n(){++s>=r?i():t[s].call(e,n)}var r=t.length,s=0;t[0].call(e,n)}function we(t,e,i){for(var r,s,o,a,h,c,f,p=[],d=Object.keys(e),v=d.length;v--;)s=d[v],r=e[s]||ks,h=l(s),xs.test(h)&&(f={name:s,path:h,options:r,mode:$s.ONE_WAY,raw:null},o=u(s),null===(a=M(t,o))&&(null!==(a=M(t,o+".sync"))?f.mode=$s.TWO_WAY:null!==(a=M(t,o+".once"))&&(f.mode=$s.ONE_TIME)),null!==a?(f.raw=a,c=A(a),a=c.expression,f.filters=c.filters,n(a)&&!c.filters?f.optimizedLiteral=!0:f.dynamic=!0,f.parentPath=a):null!==(a=I(t,o))&&(f.raw=a),p.push(f));return Ce(p)}function Ce(t){return function(e,n){e._props={};for(var r,s,l,c,f,p=e.$options.propsData,d=t.length;d--;)if(r=t[d],f=r.raw,s=r.path,l=r.options,e._props[s]=r,p&&i(p,s)&&ke(e,r,p[s]),null===f)ke(e,r,void 0);else if(r.dynamic)r.mode===$s.ONE_TIME?(c=(n||e._context||e).$get(r.parentPath),ke(e,r,c)):e._context?e._bindDir({name:"prop",def:Os,prop:r},null,null,n):ke(e,r,e.$get(r.parentPath));else if(r.optimizedLiteral){var v=h(f);c=v===f?a(o(f)):v,ke(e,r,c)}else c=l.type!==Boolean||""!==f&&f!==u(r.name)?f:!0,ke(e,r,c)}}function $e(t,e,i,n){var r=e.dynamic&&Mt(e.parentPath),s=i;void 0===s&&(s=Ae(t,e)),s=Te(e,s,t);var o=s!==i;Oe(e,s,t)||(s=void 0),r&&!o?yt(function(){n(s)}):n(s)}function ke(t,e,i){$e(t,e,i,function(i){kt(t,e.path,i)})}function xe(t,e,i){$e(t,e,i,function(i){t[e.path]=i})}function Ae(t,e){var n=e.options;if(!i(n,"default"))return n.type===Boolean?!1:void 0;var r=n["default"];return m(r),"function"==typeof r&&n.type!==Function?r.call(t):r}function Oe(t,e,i){if(!t.options.required&&(null===t.raw||null==e))return!0;var n=t.options,r=n.type,s=!r,o=[];if(r){Di(r)||(r=[r]);for(var a=0;a<r.length&&!s;a++){var h=Ne(e,r[a]);o.push(h.expectedType),s=h.valid}}if(!s)return!1;var l=n.validator;return!l||l(e)}function Te(t,e,i){var n=t.options.coerce;return n&&"function"==typeof n?n(e):e}function Ne(t,e){var i,n;return e===String?(n="string",i=typeof t===n):e===Number?(n="number",i=typeof t===n):e===Boolean?(n="boolean",i=typeof t===n):e===Function?(n="function",i=typeof t===n):e===Object?(n="object",i=g(t)):e===Array?(n="array",i=Di(t)):i=t instanceof e,{valid:i,expectedType:n}}function je(t){Ts.push(t),Ns||(Ns=!0,Yi(Ee))}function Ee(){for(var t=document.documentElement.offsetHeight,e=0;e<Ts.length;e++)Ts[e]();return Ts=[],Ns=!1,t}function Se(t,e,i,n){this.id=e,this.el=t,this.enterClass=i&&i.enterClass||e+"-enter",this.leaveClass=i&&i.leaveClass||e+"-leave",this.hooks=i,this.vm=n,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=i&&i.type;var r=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){r[t]=p(r[t],r)})}function Fe(t){if(/svg$/.test(t.namespaceURI)){var e=t.getBoundingClientRect();return!(e.width||e.height)}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function De(t,e,i){var n=i||!e._asComponent?Ve(t,e):null,r=n&&n.terminal||ri(t)||!t.hasChildNodes()?null:qe(t.childNodes,e);return function(t,e,i,s,o){var a=d(e.childNodes),h=Pe(function(){n&&n(t,e,i,s,o),r&&r(t,a,i,s,o)},t);return Le(t,h)}}function Pe(t,e){e._directives=[];var i=e._directives.length;t();var n=e._directives.slice(i);n.sort(Re);for(var r=0,s=n.length;s>r;r++)n[r]._bind();return n}function Re(t,e){return t=t.descriptor.def.priority||zs,e=e.descriptor.def.priority||zs,t>e?-1:t===e?0:1}function Le(t,e,i,n){function r(r){He(t,e,r),i&&n&&He(i,n)}return r.dirs=e,r}function He(t,e,i){for(var n=e.length;n--;)e[n]._teardown()}function Ie(t,e,i,n){var r=we(e,i,t),s=Pe(function(){r(t,n)},t);return Le(t,s)}function Me(t,e,i){var n,r,s=e._containerAttrs,o=e._replacerAttrs;return 11!==t.nodeType&&(e._asComponent?(s&&i&&(n=ti(s,i)),o&&(r=ti(o,e))):r=ti(t.attributes,e)),e._containerAttrs=e._replacerAttrs=null,function(t,e,i){var s,o=t._context;o&&n&&(s=Pe(function(){n(o,e,null,i)},o));var a=Pe(function(){r&&r(t,e)},t);return Le(t,a,o,s)}}function Ve(t,e){var i=t.nodeType;return 1!==i||ri(t)?3===i&&t.data.trim()?We(t,e):null:Be(t,e)}function Be(t,e){if("TEXTAREA"===t.tagName){var i=N(t.value);i&&(t.setAttribute(":value",j(i)),t.value="")}var n,r=t.hasAttributes(),s=r&&d(t.attributes);return r&&(n=Xe(t,s,e)),n||(n=Ge(t,e)),n||(n=Ze(t,e)),!n&&r&&(n=ti(s,e)),n}function We(t,e){if(t._skip)return ze;var i=N(t.wholeText);if(!i)return null;for(var n=t.nextSibling;n&&3===n.nodeType;)n._skip=!0,n=n.nextSibling;for(var r,s,o=document.createDocumentFragment(),a=0,h=i.length;h>a;a++)s=i[a],r=s.tag?Ue(s,e):document.createTextNode(s.value),o.appendChild(r);return Je(i,o,e)}function ze(t,e){z(e)}function Ue(t,e){function i(e){if(!t.descriptor){var i=A(t.value);t.descriptor={name:e,def:bs[e],expression:i.expression,filters:i.filters}}}var n;return t.oneTime?n=document.createTextNode(t.value):t.html?(n=document.createComment("v-html"),i("html")):(n=document.createTextNode(" "),i("text")),n}function Je(t,e){return function(i,n,r,o){for(var a,h,l,c=e.cloneNode(!0),u=d(c.childNodes),f=0,p=t.length;p>f;f++)a=t[f],h=a.value,a.tag&&(l=u[f],a.oneTime?(h=(o||i).$eval(h),a.html?J(l,Xt(h,!0)):l.data=s(h)):i._bindDir(a.descriptor,l,r,o));J(n,c)}}function qe(t,e){for(var i,n,r,s=[],o=0,a=t.length;a>o;o++)r=t[o],i=Ve(r,e),n=i&&i.terminal||"SCRIPT"===r.tagName||!r.hasChildNodes()?null:qe(r.childNodes,e),s.push(i,n);return s.length?Qe(s):null}function Qe(t){return function(e,i,n,r,s){for(var o,a,h,l=0,c=0,u=t.length;u>l;c++){o=i[c],a=t[l++],h=t[l++];var f=d(o.childNodes);a&&a(e,o,n,r,s),h&&h(e,f,n,r,s)}}}function Ge(t,e){var i=t.tagName.toLowerCase();if(!jn.test(i)){var n=gt(e,"elementDirectives",i);return n?Ke(t,i,"",e,n):void 0}}function Ze(t,e){var i=lt(t,e);if(i){var n=rt(t),r={name:"component",ref:n,expression:i.id,def:Hs.component,modifiers:{literal:!i.dynamic}},s=function(t,e,i,s,o){n&&kt((s||t).$refs,n,null),t._bindDir(r,e,i,s,o)};return s.terminal=!0,s}}function Xe(t,e,i){if(null!==I(t,"v-pre"))return Ye;if(t.hasAttribute("v-else")){var n=t.previousElementSibling;if(n&&n.hasAttribute("v-if"))return Ye}for(var r,s,o,a,h,l,c,u,f,p,d=0,v=e.length;v>d;d++)r=e[d],s=r.name.replace(Bs,""),(h=s.match(Vs))&&(f=gt(i,"directives",h[1]),f&&f.terminal&&(!p||(f.priority||Us)>p.priority)&&(p=f,c=r.name,a=ei(r.name),o=r.value,l=h[1],u=h[2]));return p?Ke(t,l,o,i,p,c,u,a):void 0}function Ye(){}function Ke(t,e,i,n,r,s,o,a){var h=A(i),l={name:e,arg:o,expression:h.expression,filters:h.filters,raw:i,attr:s,modifiers:a,def:r};"for"!==e&&"router-view"!==e||(l.ref=rt(t));var c=function(t,e,i,n,r){l.ref&&kt((n||t).$refs,l.ref,null),t._bindDir(l,e,i,n,r)};return c.terminal=!0,c}function ti(t,e){function i(t,e,i){var n=i&&ni(i),r=!n&&A(s);v.push({name:t,attr:o,raw:a,def:e,arg:l,modifiers:c,expression:r&&r.expression,filters:r&&r.filters,interp:i,hasOneTime:n})}for(var n,r,s,o,a,h,l,c,u,f,p,d=t.length,v=[];d--;)if(n=t[d],r=o=n.name,s=a=n.value,f=N(s),l=null,c=ei(r),r=r.replace(Bs,""),f)s=j(f),l=r,i("bind",bs.bind,f);else if(Ws.test(r))c.literal=!Is.test(r),i("transition",Hs.transition);else if(Ms.test(r))l=r.replace(Ms,""),i("on",bs.on);else if(Is.test(r))h=r.replace(Is,""),"style"===h||"class"===h?i(h,Hs[h]):(l=h,i("bind",bs.bind));else if(p=r.match(Vs)){if(h=p[1],l=p[2],"else"===h)continue;u=gt(e,"directives",h,!0),u&&i(h,u)}return v.length?ii(v):void 0}function ei(t){var e=Object.create(null),i=t.match(Bs);if(i)for(var n=i.length;n--;)e[i[n].slice(1)]=!0;return e}function ii(t){return function(e,i,n,r,s){for(var o=t.length;o--;)e._bindDir(t[o],i,n,r,s)}}function ni(t){for(var e=t.length;e--;)if(t[e].oneTime)return!0}function ri(t){return"SCRIPT"===t.tagName&&(!t.hasAttribute("type")||"text/javascript"===t.getAttribute("type"))}function si(t,e){return e&&(e._containerAttrs=ai(t)),it(t)&&(t=Xt(t)),e&&(e._asComponent&&!e.template&&(e.template="<slot></slot>"),e.template&&(e._content=K(t),t=oi(t,e))),at(t)&&(U(nt("v-start",!0),t),t.appendChild(nt("v-end",!0))),t}function oi(t,e){var i=e.template,n=Xt(i,!0);if(n){var r=n.firstChild,s=r.tagName&&r.tagName.toLowerCase();return e.replace?(t===document.body,n.childNodes.length>1||1!==r.nodeType||"component"===s||gt(e,"components",s)||V(r,"is")||gt(e,"elementDirectives",s)||r.hasAttribute("v-for")||r.hasAttribute("v-if")?n:(e._replacerAttrs=ai(r),hi(t,r),r)):(t.appendChild(n),t)}}function ai(t){return 1===t.nodeType&&t.hasAttributes()?d(t.attributes):void 0}function hi(t,e){for(var i,n,r=t.attributes,s=r.length;s--;)i=r[s].name,n=r[s].value,e.hasAttribute(i)||Js.test(i)?"class"===i&&!N(n)&&(n=n.trim())&&n.split(/\s+/).forEach(function(t){X(e,t)}):e.setAttribute(i,n)}function li(t,e){if(e){for(var i,n,r=t._slotContents=Object.create(null),s=0,o=e.children.length;o>s;s++)i=e.children[s],(n=i.getAttribute("slot"))&&(r[n]||(r[n]=[])).push(i);for(n in r)r[n]=ci(r[n],e);if(e.hasChildNodes()){var a=e.childNodes;if(1===a.length&&3===a[0].nodeType&&!a[0].data.trim())return;r["default"]=ci(e.childNodes,e)}}}function ci(t,e){var i=document.createDocumentFragment();t=d(t);for(var n=0,r=t.length;r>n;n++){var s=t[n];!it(s)||s.hasAttribute("v-if")||s.hasAttribute("v-for")||(e.removeChild(s),s=Xt(s,!0)),i.appendChild(s)}return i}function ui(t){function e(){}function n(t,e){var i=new Ut(e,t,null,{lazy:!0});return function(){return i.dirty&&i.evaluate(),_t.target&&i.depend(),i.value}}Object.defineProperty(t.prototype,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),t.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},t.prototype._initProps=function(){var t=this.$options,e=t.el,i=t.props;e=t.el=L(e),this._propsUnlinkFn=e&&1===e.nodeType&&i?Ie(this,e,i,this._scope):null},t.prototype._initData=function(){var t=this.$options.data,e=this._data=t?t():{};g(e)||(e={});var n,r,s=this._props,o=Object.keys(e);for(n=o.length;n--;)r=o[n],s&&i(s,r)||this._proxy(r);$t(e,this)},t.prototype._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,r,s;for(n=Object.keys(e),s=n.length;s--;)r=n[s],r in t||this._unproxy(r);for(n=Object.keys(t),s=n.length;s--;)r=n[s],i(this,r)||this._proxy(r);e.__ob__.removeVm(this),$t(t,this),this._digest()},t.prototype._proxy=function(t){if(!r(t)){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(i){e._data[t]=i}})}},t.prototype._unproxy=function(t){r(t)||delete this[t]},t.prototype._digest=function(){for(var t=0,e=this._watchers.length;e>t;t++)this._watchers[t].update(!0)},t.prototype._initComputed=function(){var t=this.$options.computed;if(t)for(var i in t){var r=t[i],s={enumerable:!0,configurable:!0};"function"==typeof r?(s.get=n(r,this),s.set=e):(s.get=r.get?r.cache!==!1?n(r.get,this):p(r.get,this):e,s.set=r.set?p(r.set,this):e),Object.defineProperty(this,i,s)}},t.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=p(t[e],this)},t.prototype._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)kt(this,e,t[e])}}function fi(t){function e(t,e){for(var i,n,r,s=e.attributes,o=0,a=s.length;a>o;o++)i=s[o].name,Qs.test(i)&&(i=i.replace(Qs,""),n=s[o].value,Mt(n)&&(n+=".apply(this, $arguments)"),r=(t._scope||t._context).$eval(n,!0),r._fromParent=!0,t.$on(i.replace(Qs),r))}function i(t,e,i){if(i){var r,s,o,a;for(s in i)if(r=i[s],Di(r))for(o=0,a=r.length;a>o;o++)n(t,e,s,r[o]);else n(t,e,s,r)}}function n(t,e,i,r,s){var o=typeof r;if("function"===o)t[e](i,r,s);else if("string"===o){var a=t.$options.methods,h=a&&a[r];h&&t[e](i,h,s)}else r&&"object"===o&&n(t,e,i,r.handler,r)}function r(){this._isAttached||(this._isAttached=!0,this.$children.forEach(s))}function s(t){!t._isAttached&&H(t.$el)&&t._callHook("attached")}function o(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(a))}function a(t){t._isAttached&&!H(t.$el)&&t._callHook("detached")}t.prototype._initEvents=function(){var t=this.$options;t._asComponent&&e(this,t.el),i(this,"$on",t.events),i(this,"$watch",t.watch)},t.prototype._initDOMHooks=function(){this.$on("hook:attached",r),this.$on("hook:detached",o)},t.prototype._callHook=function(t){this.$emit("pre-hook:"+t);var e=this.$options[t];if(e)for(var i=0,n=e.length;n>i;i++)e[i].call(this);this.$emit("hook:"+t)}}function pi(){}function di(t,e,i,n,r,s){this.vm=e,this.el=i,this.descriptor=t,this.name=t.name,this.expression=t.expression,this.arg=t.arg,this.modifiers=t.modifiers,this.filters=t.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=n,this._scope=r,this._frag=s}function vi(t){t.prototype._updateRef=function(t){var e=this.$options._ref;if(e){var i=(this._scope||this._context).$refs;t?i[e]===this&&(i[e]=null):i[e]=this}},t.prototype._compile=function(t){var e=this.$options,i=t;if(t=si(t,e),this._initElement(t),1!==t.nodeType||null===I(t,"v-pre")){var n=this._context&&this._context.$options,r=Me(t,e,n);li(this,e._content);var s,o=this.constructor;e._linkerCachable&&(s=o.linker,s||(s=o.linker=De(t,e)));var a=r(this,t,this._scope),h=s?s(this,t):De(t,e)(this,t);this._unlinkFn=function(){a(),h(!0)},e.replace&&J(i,t),this._isCompiled=!0,this._callHook("compiled")}},t.prototype._initElement=function(t){at(t)?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},t.prototype._bindDir=function(t,e,i,n,r){this._directives.push(new di(t,this,e,i,n,r))},t.prototype._destroy=function(t,e){if(this._isBeingDestroyed)return void(e||this._cleanup());var i,n,r=this,s=function(){!i||n||e||r._cleanup()};t&&this.$el&&(n=!0,this.$remove(function(){
n=!1,s()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var o,a=this.$parent;for(a&&!a._isBeingDestroyed&&(a.$children.$remove(this),this._updateRef(!0)),o=this.$children.length;o--;)this.$children[o].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),o=this._watchers.length;o--;)this._watchers[o].teardown();this.$el&&(this.$el.__vue__=null),i=!0,s()},t.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function mi(t){t.prototype._applyFilters=function(t,e,i,n){var r,s,o,a,h,l,c,u,f;for(l=0,c=i.length;c>l;l++)if(r=i[n?c-l-1:l],s=gt(this.$options,"filters",r.name,!0),s&&(s=n?s.write:s.read||s,"function"==typeof s)){if(o=n?[t,e]:[t],h=n?2:1,r.args)for(u=0,f=r.args.length;f>u;u++)a=r.args[u],o[u+h]=a.dynamic?this.$get(a.value):a.value;t=s.apply(this,o)}return t},t.prototype._resolveComponent=function(e,i){var n;if(n="function"==typeof e?e:gt(this.$options,"components",e,!0))if(n.options)i(n);else if(n.resolved)i(n.resolved);else if(n.requested)n.pendingCallbacks.push(i);else{n.requested=!0;var r=n.pendingCallbacks=[i];n.call(this,function(e){g(e)&&(e=t.extend(e)),n.resolved=e;for(var i=0,s=r.length;s>i;i++)r[i](e)},function(t){})}}}function gi(t){function i(t){return JSON.parse(JSON.stringify(t))}t.prototype.$get=function(t,e){var i=It(t);if(i){if(e){var n=this;return function(){n.$arguments=d(arguments);var t=i.get.call(n,n);return n.$arguments=null,t}}try{return i.get.call(this,this)}catch(r){}}},t.prototype.$set=function(t,e){var i=It(t,!0);i&&i.set&&i.set.call(this,this,e)},t.prototype.$delete=function(t){e(this._data,t)},t.prototype.$watch=function(t,e,i){var n,r=this;"string"==typeof t&&(n=A(t),t=n.expression);var s=new Ut(r,t,e,{deep:i&&i.deep,sync:i&&i.sync,filters:n&&n.filters,user:!i||i.user!==!1});return i&&i.immediate&&e.call(r,s.value),function(){s.teardown()}},t.prototype.$eval=function(t,e){if(Gs.test(t)){var i=A(t),n=this.$get(i.expression,e);return i.filters?this._applyFilters(n,null,i.filters):n}return this.$get(t,e)},t.prototype.$interpolate=function(t){var e=N(t),i=this;return e?1===e.length?i.$eval(e[0].value)+"":e.map(function(t){return t.tag?i.$eval(t.value):t.value}).join(""):t},t.prototype.$log=function(t){var e=t?jt(this._data,t):this._data;if(e&&(e=i(e)),!t){var n;for(n in this.$options.computed)e[n]=i(this[n]);if(this._props)for(n in this._props)e[n]=i(this[n])}console.log(e)}}function _i(t){function e(t,e,n,r,s,o){e=i(e);var a=!H(e),h=r===!1||a?s:o,l=!a&&!t._isAttached&&!H(t.$el);return t._isFragment?(st(t._fragmentStart,t._fragmentEnd,function(i){h(i,e,t)}),n&&n()):h(t.$el,e,t,n),l&&t._callHook("attached"),t}function i(t){return"string"==typeof t?document.querySelector(t):t}function n(t,e,i,n){e.appendChild(t),n&&n()}function r(t,e,i,n){B(t,e),n&&n()}function s(t,e,i){z(t),i&&i()}t.prototype.$nextTick=function(t){Yi(t,this)},t.prototype.$appendTo=function(t,i,r){return e(this,t,i,r,n,F)},t.prototype.$prependTo=function(t,e,n){return t=i(t),t.hasChildNodes()?this.$before(t.firstChild,e,n):this.$appendTo(t,e,n),this},t.prototype.$before=function(t,i,n){return e(this,t,i,n,r,D)},t.prototype.$after=function(t,e,n){return t=i(t),t.nextSibling?this.$before(t.nextSibling,e,n):this.$appendTo(t.parentNode,e,n),this},t.prototype.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var i=this._isAttached&&H(this.$el);i||(e=!1);var n=this,r=function(){i&&n._callHook("detached"),t&&t()};if(this._isFragment)ot(this._fragmentStart,this._fragmentEnd,this,this._fragment,r);else{var o=e===!1?s:P;o(this.$el,this,r)}return this}}function yi(t){function e(t,e,n){var r=t.$parent;if(r&&n&&!i.test(e))for(;r;)r._eventsCount[e]=(r._eventsCount[e]||0)+n,r=r.$parent}t.prototype.$on=function(t,i){return(this._events[t]||(this._events[t]=[])).push(i),e(this,t,1),this},t.prototype.$once=function(t,e){function i(){n.$off(t,i),e.apply(this,arguments)}var n=this;return i.fn=e,this.$on(t,i),this},t.prototype.$off=function(t,i){var n;if(!arguments.length){if(this.$parent)for(t in this._events)n=this._events[t],n&&e(this,t,-n.length);return this._events={},this}if(n=this._events[t],!n)return this;if(1===arguments.length)return e(this,t,-n.length),this._events[t]=null,this;for(var r,s=n.length;s--;)if(r=n[s],r===i||r.fn===i){e(this,t,-1),n.splice(s,1);break}return this},t.prototype.$emit=function(t){var e="string"==typeof t;t=e?t:t.name;var i=this._events[t],n=e||!i;if(i){i=i.length>1?d(i):i;var r=e&&i.some(function(t){return t._fromParent});r&&(n=!1);for(var s=d(arguments,1),o=0,a=i.length;a>o;o++){var h=i[o],l=h.apply(this,s);l!==!0||r&&!h._fromParent||(n=!0)}}return n},t.prototype.$broadcast=function(t){var e="string"==typeof t;if(t=e?t:t.name,this._eventsCount[t]){var i=this.$children,n=d(arguments);e&&(n[0]={name:t,source:this});for(var r=0,s=i.length;s>r;r++){var o=i[r],a=o.$emit.apply(o,n);a&&o.$broadcast.apply(o,n)}return this}},t.prototype.$dispatch=function(t){var e=this.$emit.apply(this,arguments);if(e){var i=this.$parent,n=d(arguments);for(n[0]={name:t,source:this};i;)e=i.$emit.apply(i,n),i=e?i.$parent:null;return this}};var i=/^hook:/}function bi(t){function e(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}t.prototype.$mount=function(t){return this._isCompiled?void 0:(t=L(t),t||(t=document.createElement("div")),this._compile(t),this._initDOMHooks(),H(this.$el)?(this._callHook("attached"),e.call(this)):this.$once("hook:attached",e),this)},t.prototype.$destroy=function(t,e){this._destroy(t,e)},t.prototype.$compile=function(t,e,i,n){return De(t,this.$options,!0)(this,t,e,i,n)}}function wi(t){this._init(t)}function Ci(t,e,i){return i=i?parseInt(i,10):0,e=o(e),"number"==typeof e?t.slice(i,i+e):t}function $i(t,e,i){if(t=Ks(t),null==e)return t;if("function"==typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var n,r,s,o,a="in"===i?3:2,h=Array.prototype.concat.apply([],d(arguments,a)),l=[],c=0,u=t.length;u>c;c++)if(n=t[c],s=n&&n.$value||n,o=h.length){for(;o--;)if(r=h[o],"$key"===r&&xi(n.$key,e)||xi(jt(s,r),e)){l.push(n);break}}else xi(n,e)&&l.push(n);return l}function ki(t){function e(t,e,i){var r=n[i];return r&&("$key"!==r&&(m(t)&&"$value"in t&&(t=t.$value),m(e)&&"$value"in e&&(e=e.$value)),t=m(t)?jt(t,r):t,e=m(e)?jt(e,r):e),t===e?0:t>e?s:-s}var i=null,n=void 0;t=Ks(t);var r=d(arguments,1),s=r[r.length-1];"number"==typeof s?(s=0>s?-1:1,r=r.length>1?r.slice(0,-1):r):s=1;var o=r[0];return o?("function"==typeof o?i=function(t,e){return o(t,e)*s}:(n=Array.prototype.concat.apply([],r),i=function(t,r,s){return s=s||0,s>=n.length-1?e(t,r,s):e(t,r,s)||i(t,r,s+1)}),t.slice().sort(i)):t}function xi(t,e){var i;if(g(t)){var n=Object.keys(t);for(i=n.length;i--;)if(xi(t[n[i]],e))return!0}else if(Di(t)){for(i=t.length;i--;)if(xi(t[i],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}function Ai(i){function n(t){return new Function("return function "+f(t)+" (options) { this._init(options) }")()}i.options={directives:bs,elementDirectives:Ys,filters:eo,transitions:{},components:{},partials:{},replace:!0},i.util=In,i.config=An,i.set=t,i["delete"]=e,i.nextTick=Yi,i.compiler=qs,i.FragmentFactory=se,i.internalDirectives=Hs,i.parsers={path:ir,text:$n,template:Fr,directive:gn,expression:mr},i.cid=0;var r=1;i.extend=function(t){t=t||{};var e=this,i=0===e.cid;if(i&&t._Ctor)return t._Ctor;var s=t.name||e.options.name,o=n(s||"VueComponent");return o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.cid=r++,o.options=mt(e.options,t),o["super"]=e,o.extend=e.extend,An._assetTypes.forEach(function(t){o[t]=e[t]}),s&&(o.options.components[s]=o),i&&(t._Ctor=o),o},i.use=function(t){if(!t.installed){var e=d(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}},i.mixin=function(t){i.options=mt(i.options,t)},An._assetTypes.forEach(function(t){i[t]=function(e,n){return n?("component"===t&&g(n)&&(n.name||(n.name=e),n=i.extend(n)),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}),v(i.transition,Tn)}var Oi=Object.prototype.hasOwnProperty,Ti=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,Ni=/-(\w)/g,ji=/([a-z\d])([A-Z])/g,Ei=/(?:^|[-_\/])(\w)/g,Si=Object.prototype.toString,Fi="[object Object]",Di=Array.isArray,Pi="__proto__"in{},Ri="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),Li=Ri&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Hi=Ri&&window.navigator.userAgent.toLowerCase(),Ii=Hi&&Hi.indexOf("trident")>0,Mi=Hi&&Hi.indexOf("msie 9.0")>0,Vi=Hi&&Hi.indexOf("android")>0,Bi=Hi&&/(iphone|ipad|ipod|ios)/i.test(Hi),Wi=Bi&&Hi.match(/os ([\d_]+)/),zi=Wi&&Wi[1].split("_"),Ui=zi&&Number(zi[0])>=9&&Number(zi[1])>=3&&!window.indexedDB,Ji=void 0,qi=void 0,Qi=void 0,Gi=void 0;if(Ri&&!Mi){var Zi=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,Xi=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;Ji=Zi?"WebkitTransition":"transition",qi=Zi?"webkitTransitionEnd":"transitionend",Qi=Xi?"WebkitAnimation":"animation",Gi=Xi?"webkitAnimationEnd":"animationend"}var Yi=function(){function t(){n=!1;var t=i.slice(0);i=[];for(var e=0;e<t.length;e++)t[e]()}var e,i=[],n=!1;if("undefined"==typeof MutationObserver||Ui){var r=Ri?window:"undefined"!=typeof global?global:{};e=r.setImmediate||setTimeout}else{var s=1,o=new MutationObserver(t),a=document.createTextNode(s);o.observe(a,{characterData:!0}),e=function(){s=(s+1)%2,a.data=s}}return function(r,s){var o=s?function(){r.call(s)}:r;i.push(o),n||(n=!0,e(t,0))}}(),Ki=void 0;"undefined"!=typeof Set&&Set.toString().match(/native code/)?Ki=Set:(Ki=function(){this.set=Object.create(null)},Ki.prototype.has=function(t){return void 0!==this.set[t]},Ki.prototype.add=function(t){this.set[t]=1},Ki.prototype.clear=function(){this.set=Object.create(null)});var tn=$.prototype;tn.put=function(t,e){var i,n=this.get(t,!0);return n||(this.size===this.limit&&(i=this.shift()),n={key:t},this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size++),n.value=e,i},tn.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},tn.get=function(t,e){var i=this._keymap[t];if(void 0!==i)return i===this.tail?e?i:i.value:(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i,e?i:i.value)};var en,nn,rn,sn,on,an,hn,ln,cn,un,fn,pn,dn=new $(1e3),vn=/[^\s'"]+|'[^']*'|"[^"]*"/g,mn=/^in$|^-?\d+/,gn=Object.freeze({parseDirective:A}),_n=/[-.*+?^${}()|[\]\/\\]/g,yn=void 0,bn=void 0,wn=void 0,Cn=/[^|]\|[^|]/,$n=Object.freeze({compileRegex:T,parseText:N,tokensToExp:j}),kn=["{{","}}"],xn=["{{{","}}}"],An=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return kn},set:function(t){kn=t,T()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return xn},set:function(t){xn=t,T()},configurable:!0,enumerable:!0}}),On=void 0,Tn=Object.freeze({appendWithTransition:F,beforeWithTransition:D,removeWithTransition:P,applyTransition:R}),Nn=/^v-ref:/,jn=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,En=/^(slot|partial|component)$/i,Sn=An.optionMergeStrategies=Object.create(null);Sn.data=function(t,e,i){return i?t||e?function(){var n="function"==typeof e?e.call(i):e,r="function"==typeof t?t.call(i):void 0;return n?ut(n,r):r}:void 0:e?"function"!=typeof e?t:t?function(){return ut(e.call(this),t.call(this))}:e:t},Sn.el=function(t,e,i){if(i||!e||"function"==typeof e){var n=e||t;return i&&"function"==typeof n?n.call(i):n}},Sn.init=Sn.created=Sn.ready=Sn.attached=Sn.detached=Sn.beforeCompile=Sn.compiled=Sn.beforeDestroy=Sn.destroyed=Sn.activate=function(t,e){return e?t?t.concat(e):Di(e)?e:[e]:t},An._assetTypes.forEach(function(t){Sn[t+"s"]=ft}),Sn.watch=Sn.events=function(t,e){if(!e)return t;if(!t)return e;var i={};v(i,t);for(var n in e){var r=i[n],s=e[n];r&&!Di(r)&&(r=[r]),i[n]=r?r.concat(s):[s]}return i},Sn.props=Sn.methods=Sn.computed=function(t,e){if(!e)return t;if(!t)return e;var i=Object.create(null);return v(i,t),v(i,e),i};var Fn=function(t,e){return void 0===e?t:e},Dn=0;_t.target=null,_t.prototype.addSub=function(t){this.subs.push(t)},_t.prototype.removeSub=function(t){this.subs.$remove(t)},_t.prototype.depend=function(){_t.target.addDep(this)},_t.prototype.notify=function(){for(var t=d(this.subs),e=0,i=t.length;i>e;e++)t[e].update()};var Pn=Array.prototype,Rn=Object.create(Pn);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Pn[t];_(Rn,t,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":r=n;break;case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&o.observeArray(r),o.dep.notify(),s})}),_(Pn,"$set",function(t,e){return t>=this.length&&(this.length=Number(t)+1),this.splice(t,1,e)[0]}),_(Pn,"$remove",function(t){if(this.length){var e=b(this,t);return e>-1?this.splice(e,1):void 0}});var Ln=Object.getOwnPropertyNames(Rn),Hn=!0;bt.prototype.walk=function(t){for(var e=Object.keys(t),i=0,n=e.length;n>i;i++)this.convert(e[i],t[e[i]])},bt.prototype.observeArray=function(t){for(var e=0,i=t.length;i>e;e++)$t(t[e])},bt.prototype.convert=function(t,e){kt(this.value,t,e)},bt.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)},bt.prototype.removeVm=function(t){this.vms.$remove(t)};var In=Object.freeze({defineReactive:kt,set:t,del:e,hasOwn:i,isLiteral:n,isReserved:r,_toString:s,toNumber:o,toBoolean:a,stripQuotes:h,camelize:l,hyphenate:u,classify:f,bind:p,toArray:d,extend:v,isObject:m,isPlainObject:g,def:_,debounce:y,indexOf:b,cancellable:w,looseEqual:C,isArray:Di,hasProto:Pi,inBrowser:Ri,devtools:Li,isIE:Ii,isIE9:Mi,isAndroid:Vi,isIos:Bi,iosVersionMatch:Wi,iosVersion:zi,hasMutationObserverBug:Ui,get transitionProp(){return Ji},get transitionEndEvent(){return qi},get animationProp(){return Qi},get animationEndEvent(){return Gi},nextTick:Yi,get _Set(){return Ki},query:L,inDoc:H,getAttr:I,getBindAttr:M,hasBindAttr:V,before:B,after:W,remove:z,prepend:U,replace:J,on:q,off:Q,setClass:Z,addClass:X,removeClass:Y,extractContent:K,trimNode:tt,isTemplate:it,createAnchor:nt,findRef:rt,mapNodeRange:st,removeNodeRange:ot,isFragment:at,getOuterHTML:ht,mergeOptions:mt,resolveAsset:gt,checkComponentAttr:lt,commonTagRE:jn,reservedTagRE:En,warn:On}),Mn=0,Vn=new $(1e3),Bn=0,Wn=1,zn=2,Un=3,Jn=0,qn=1,Qn=2,Gn=3,Zn=4,Xn=5,Yn=6,Kn=7,tr=8,er=[];er[Jn]={ws:[Jn],ident:[Gn,Bn],"[":[Zn],eof:[Kn]},er[qn]={ws:[qn],".":[Qn],"[":[Zn],eof:[Kn]},er[Qn]={ws:[Qn],ident:[Gn,Bn]},er[Gn]={ident:[Gn,Bn],0:[Gn,Bn],number:[Gn,Bn],ws:[qn,Wn],".":[Qn,Wn],"[":[Zn,Wn],eof:[Kn,Wn]},er[Zn]={"'":[Xn,Bn],'"':[Yn,Bn],"[":[Zn,zn],"]":[qn,Un],eof:tr,"else":[Zn,Bn]},er[Xn]={"'":[Zn,Bn],eof:tr,"else":[Xn,Bn]},er[Yn]={'"':[Zn,Bn],eof:tr,"else":[Yn,Bn]};var ir=Object.freeze({parsePath:Nt,getPath:jt,setPath:Et}),nr=new $(1e3),rr="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",sr=new RegExp("^("+rr.replace(/,/g,"\\b|")+"\\b)"),or="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",ar=new RegExp("^("+or.replace(/,/g,"\\b|")+"\\b)"),hr=/\s/g,lr=/\n/g,cr=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,ur=/"(\d+)"/g,fr=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,pr=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,dr=/^(?:true|false|null|undefined|Infinity|NaN)$/,vr=[],mr=Object.freeze({parseExpression:It,isSimplePath:Mt}),gr=[],_r=[],yr={},br={},wr=!1,Cr=0;Ut.prototype.get=function(){this.beforeGet();var t,e=this.scope||this.vm;try{t=this.getter.call(e,e)}catch(i){}return this.deep&&Jt(t),this.preProcess&&(t=this.preProcess(t)),this.filters&&(t=e._applyFilters(t,null,this.filters,!1)),this.postProcess&&(t=this.postProcess(t)),this.afterGet(),t},Ut.prototype.set=function(t){var e=this.scope||this.vm;this.filters&&(t=e._applyFilters(t,this.value,this.filters,!0));try{this.setter.call(e,e,t)}catch(i){}var n=e.$forContext;if(n&&n.alias===this.expression){if(n.filters)return;n._withLock(function(){e.$key?n.rawValue[e.$key]=t:n.rawValue.$set(e.$index,t)})}},Ut.prototype.beforeGet=function(){_t.target=this},Ut.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ut.prototype.afterGet=function(){_t.target=null;for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Ut.prototype.update=function(t){this.lazy?this.dirty=!0:this.sync||!An.async?this.run():(this.shallow=this.queued?t?this.shallow:!1:!!t,this.queued=!0,zt(this))},Ut.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||(m(t)||this.deep)&&!this.shallow){var e=this.value;this.value=t;this.prevError;this.cb.call(this.vm,t,e)}this.queued=this.shallow=!1}},Ut.prototype.evaluate=function(){var t=_t.target;this.value=this.get(),this.dirty=!1,_t.target=t},Ut.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Ut.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var $r=new Ki,kr={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(t){this.el[this.attr]=s(t)}},xr=new $(1e3),Ar=new $(1e3),Or={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Or.td=Or.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Or.option=Or.optgroup=[1,'<select multiple="multiple">',"</select>"],Or.thead=Or.tbody=Or.colgroup=Or.caption=Or.tfoot=[1,"<table>","</table>"],Or.g=Or.defs=Or.symbol=Or.use=Or.image=Or.text=Or.circle=Or.ellipse=Or.line=Or.path=Or.polygon=Or.polyline=Or.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var Tr=/<([\w:-]+)/,Nr=/&#?\w+?;/,jr=/<!--/,Er=function(){if(Ri){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}return!1}(),Sr=function(){if(Ri){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}return!1}(),Fr=Object.freeze({cloneNode:Zt,parseTemplate:Xt}),Dr={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=nt("v-html"),J(this.el,this.anchor))},update:function(t){t=s(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)z(this.nodes[e]);var i=Xt(t,!0,!0);this.nodes=d(i.childNodes),B(i,this.anchor)}};Yt.prototype.callHook=function(t){var e,i;for(e=0,i=this.childFrags.length;i>e;e++)this.childFrags[e].callHook(t);for(e=0,i=this.children.length;i>e;e++)t(this.children[e])},Yt.prototype.beforeRemove=function(){var t,e;for(t=0,e=this.childFrags.length;e>t;t++)this.childFrags[t].beforeRemove(!1);for(t=0,e=this.children.length;e>t;t++)this.children[t].$destroy(!1,!0);var i=this.unlink.dirs;for(t=0,e=i.length;e>t;t++)i[t]._watcher&&i[t]._watcher.teardown()},Yt.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Pr=new $(5e3);se.prototype.create=function(t,e,i){var n=Zt(this.template);return new Yt(this.linker,this.vm,n,t,e,i)};var Rr=700,Lr=800,Hr=850,Ir=1100,Mr=1500,Vr=1500,Br=1750,Wr=2100,zr=2200,Ur=2300,Jr=0,qr={priority:zr,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var t=this.expression.match(/(.*) (?:in|of) (.*)/);if(t){var e=t[1].match(/\((.*),(.*)\)/);e?(this.iterator=e[1].trim(),this.alias=e[2].trim()):this.alias=t[1].trim(),this.expression=t[2]}if(this.alias){this.id="__v-for__"+ ++Jr;var i=this.el.tagName;this.isOption=("OPTION"===i||"OPTGROUP"===i)&&"SELECT"===this.el.parentNode.tagName,this.start=nt("v-for-start"),this.end=nt("v-for-end"),J(this.el,this.end),B(this.start,this.end),this.cache=Object.create(null),this.factory=new se(this.vm,this.el)}},update:function(t){this.diff(t),this.updateRef(),this.updateModel()},diff:function(t){var e,n,r,s,o,a,h=t[0],l=this.fromObject=m(h)&&i(h,"$key")&&i(h,"$value"),c=this.params.trackBy,u=this.frags,f=this.frags=new Array(t.length),p=this.alias,d=this.iterator,v=this.start,g=this.end,_=H(v),y=!u;for(e=0,n=t.length;n>e;e++)h=t[e],s=l?h.$key:null,o=l?h.$value:h,a=!m(o),r=!y&&this.getCachedFrag(o,e,s),r?(r.reused=!0,r.scope.$index=e,s&&(r.scope.$key=s),d&&(r.scope[d]=null!==s?s:e),(c||l||a)&&yt(function(){r.scope[p]=o})):(r=this.create(o,p,e,s),r.fresh=!y),f[e]=r,y&&r.before(g);if(!y){var b=0,w=u.length-f.length;for(this.vm._vForRemoving=!0,e=0,n=u.length;n>e;e++)r=u[e],r.reused||(this.deleteCachedFrag(r),this.remove(r,b++,w,_));this.vm._vForRemoving=!1,b&&(this.vm._watchers=this.vm._watchers.filter(function(t){return t.active}));var C,$,k,x=0;for(e=0,n=f.length;n>e;e++)r=f[e],C=f[e-1],$=C?C.staggerCb?C.staggerAnchor:C.end||C.node:v,r.reused&&!r.staggerCb?(k=oe(r,v,this.id),k===C||k&&oe(k,v,this.id)===C||this.move(r,$)):this.insert(r,x++,$,_),r.reused=r.fresh=!1}},create:function(t,e,i,n){var r=this._host,s=this._scope||this.vm,o=Object.create(s);o.$refs=Object.create(s.$refs),o.$els=Object.create(s.$els),o.$parent=s,o.$forContext=this,yt(function(){kt(o,e,t)}),kt(o,"$index",i),n?kt(o,"$key",n):o.$key&&_(o,"$key",null),this.iterator&&kt(o,this.iterator,null!==n?n:i);var a=this.factory.create(r,o,this._frag);return a.forId=this.id,this.cacheFrag(t,a,i,n),a},updateRef:function(){var t=this.descriptor.ref;if(t){var e,i=(this._scope||this.vm).$refs;this.fromObject?(e={},this.frags.forEach(function(t){e[t.scope.$key]=ae(t)})):e=this.frags.map(ae),i[t]=e}},updateModel:function(){if(this.isOption){var t=this.start.parentNode,e=t&&t.__v_model;e&&e.forceUpdate()}},insert:function(t,e,i,n){t.staggerCb&&(t.staggerCb.cancel(),t.staggerCb=null);var r=this.getStagger(t,e,null,"enter");if(n&&r){var s=t.staggerAnchor;s||(s=t.staggerAnchor=nt("stagger-anchor"),s.__v_frag=t),W(s,i);var o=t.staggerCb=w(function(){t.staggerCb=null,t.before(s),z(s)});setTimeout(o,r)}else{var a=i.nextSibling;a||(W(this.end,i),a=this.end),t.before(a)}},remove:function(t,e,i,n){if(t.staggerCb)return t.staggerCb.cancel(),void(t.staggerCb=null);var r=this.getStagger(t,e,i,"leave");if(n&&r){var s=t.staggerCb=w(function(){t.staggerCb=null,t.remove()});setTimeout(s,r)}else t.remove()},move:function(t,e){e.nextSibling||this.end.parentNode.appendChild(this.end),t.before(e.nextSibling,!1)},cacheFrag:function(t,e,n,r){var s,o=this.params.trackBy,a=this.cache,h=!m(t);r||o||h?(s=le(n,r,t,o),a[s]||(a[s]=e)):(s=this.id,i(t,s)?null===t[s]&&(t[s]=e):Object.isExtensible(t)&&_(t,s,e)),e.raw=t},getCachedFrag:function(t,e,i){var n,r=this.params.trackBy,s=!m(t);if(i||r||s){var o=le(e,i,t,r);n=this.cache[o]}else n=t[this.id];return n&&(n.reused||n.fresh),n},deleteCachedFrag:function(t){var e=t.raw,n=this.params.trackBy,r=t.scope,s=r.$index,o=i(r,"$key")&&r.$key,a=!m(e);if(n||o||a){var h=le(s,o,e,n);this.cache[h]=null}else e[this.id]=null,t.raw=null},getStagger:function(t,e,i,n){n+="Stagger";var r=t.node.__v_trans,s=r&&r.hooks,o=s&&(s[n]||s.stagger);return o?o.call(t,e,i):e*parseInt(this.params[n]||this.params.stagger,10)},_preProcess:function(t){return this.rawValue=t,t},_postProcess:function(t){if(Di(t))return t;if(g(t)){for(var e,i=Object.keys(t),n=i.length,r=new Array(n);n--;)e=i[n],r[n]={$key:e,$value:t[e]};return r}return"number"!=typeof t||isNaN(t)||(t=he(t)),t||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var t,e=this.frags.length;e--;)t=this.frags[e],this.deleteCachedFrag(t),t.destroy()}},Qr={priority:Wr,terminal:!0,bind:function(){var t=this.el;if(t.__vue__)this.invalid=!0;else{var e=t.nextElementSibling;e&&null!==I(e,"v-else")&&(z(e),this.elseEl=e),this.anchor=nt("v-if"),J(t,this.anchor)}},update:function(t){this.invalid||(t?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new se(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new se(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},Gr={bind:function(){var t=this.el.nextElementSibling;t&&null!==I(t,"v-else")&&(this.elseEl=t)},update:function(t){this.apply(this.el,t),this.elseEl&&this.apply(this.elseEl,!t)},apply:function(t,e){function i(){t.style.display=e?"":"none"}H(t)?R(t,e?1:-1,i,this.vm):i()}},Zr={bind:function(){var t=this,e=this.el,i="range"===e.type,n=this.params.lazy,r=this.params.number,s=this.params.debounce,a=!1;if(Vi||i||(this.on("compositionstart",function(){a=!0}),this.on("compositionend",function(){a=!1,n||t.listener()})),this.focused=!1,i||n||(this.on("focus",function(){t.focused=!0}),this.on("blur",function(){t.focused=!1,t._frag&&!t._frag.inserted||t.rawListener()})),this.listener=this.rawListener=function(){if(!a&&t._bound){var n=r||i?o(e.value):e.value;t.set(n),Yi(function(){t._bound&&!t.focused&&t.update(t._watcher.value)})}},s&&(this.listener=y(this.listener,s)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery){var h=jQuery.fn.on?"on":"bind";jQuery(e)[h]("change",this.rawListener),n||jQuery(e)[h]("input",this.listener)}else this.on("change",this.rawListener),n||this.on("input",this.listener);!n&&Mi&&(this.on("cut",function(){Yi(t.listener)}),this.on("keyup",function(e){46!==e.keyCode&&8!==e.keyCode||t.listener()})),(e.hasAttribute("value")||"TEXTAREA"===e.tagName&&e.value.trim())&&(this.afterBind=this.listener)},update:function(t){t=s(t),t!==this.el.value&&(this.el.value=t)},unbind:function(){var t=this.el;if(this.hasjQuery){var e=jQuery.fn.off?"off":"unbind";jQuery(t)[e]("change",this.listener),jQuery(t)[e]("input",this.listener)}}},Xr={bind:function(){var t=this,e=this.el;this.getValue=function(){if(e.hasOwnProperty("_value"))return e._value;var i=e.value;return t.params.number&&(i=o(i)),i},this.listener=function(){t.set(t.getValue())},this.on("change",this.listener),e.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){this.el.checked=C(t,this.getValue())}},Yr={bind:function(){var t=this,e=this,i=this.el;this.forceUpdate=function(){e._watcher&&e.update(e._watcher.get())};var n=this.multiple=i.hasAttribute("multiple");this.listener=function(){var t=ce(i,n);t=e.params.number?Di(t)?t.map(o):o(t):t,e.set(t)},this.on("change",this.listener);var r=ce(i,n,!0);(n&&r.length||!n&&null!==r)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){Yi(t.forceUpdate)}),H(i)||Yi(this.forceUpdate)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var i,n,r=this.multiple&&Di(t),s=e.options,o=s.length;o--;)i=s[o],n=i.hasOwnProperty("_value")?i._value:i.value,i.selected=r?ue(t,n)>-1:C(t,n)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},Kr={bind:function(){function t(){var t=i.checked;return t&&i.hasOwnProperty("_trueValue")?i._trueValue:!t&&i.hasOwnProperty("_falseValue")?i._falseValue:t}var e=this,i=this.el;this.getValue=function(){return i.hasOwnProperty("_value")?i._value:e.params.number?o(i.value):i.value},this.listener=function(){var n=e._watcher.value;if(Di(n)){var r=e.getValue();i.checked?b(n,r)<0&&n.push(r):n.$remove(r)}else e.set(t())},this.on("change",this.listener),i.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){var e=this.el;Di(t)?e.checked=b(t,this.getValue())>-1:e.hasOwnProperty("_trueValue")?e.checked=C(t,e._trueValue):e.checked=!!t}},ts={text:Zr,radio:Xr,select:Yr,checkbox:Kr},es={priority:Lr,twoWay:!0,handlers:ts,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite;var t,e=this.el,i=e.tagName;if("INPUT"===i)t=ts[e.type]||ts.text;else if("SELECT"===i)t=ts.select;else{if("TEXTAREA"!==i)return;t=ts.text}e.__v_model=this,t.bind.call(this),this.update=t.update,this._unbind=t.unbind},checkFilters:function(){var t=this.filters;if(t)for(var e=t.length;e--;){var i=gt(this.vm.$options,"filters",t[e].name);("function"==typeof i||i.read)&&(this.hasRead=!0),i.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},is={esc:27,tab:9,enter:13,space:32,"delete":[8,46],up:38,left:37,right:39,down:40},ns={priority:Rr,acceptStatement:!0,keyCodes:is,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){q(t.el.contentWindow,t.arg,t.handler,t.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(t){if(this.descriptor.raw||(t=function(){}),"function"==typeof t){this.modifiers.stop&&(t=pe(t)),this.modifiers.prevent&&(t=de(t)),this.modifiers.self&&(t=ve(t));var e=Object.keys(this.modifiers).filter(function(t){return"stop"!==t&&"prevent"!==t&&"self"!==t&&"capture"!==t});e.length&&(t=fe(t,e)),this.reset(),this.handler=t,this.iframeBind?this.iframeBind():q(this.el,this.arg,this.handler,this.modifiers.capture)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&Q(t,this.arg,this.handler)},unbind:function(){this.reset()}},rs=["-webkit-","-moz-","-ms-"],ss=["Webkit","Moz","ms"],os=/!important;?$/,as=Object.create(null),hs=null,ls={deep:!0,update:function(t){"string"==typeof t?this.el.style.cssText=t:Di(t)?this.handleObject(t.reduce(v,{})):this.handleObject(t||{})},handleObject:function(t){var e,i,n=this.cache||(this.cache={});for(e in n)e in t||(this.handleSingle(e,null),delete n[e]);for(e in t)i=t[e],i!==n[e]&&(n[e]=i,this.handleSingle(e,i))},handleSingle:function(t,e){if(t=me(t))if(null!=e&&(e+=""),e){var i=os.test(e)?"important":"";i?(e=e.replace(os,"").trim(),this.el.style.setProperty(t.kebab,e,i)):this.el.style[t.camel]=e}else this.el.style[t.camel]=""}},cs="http://www.w3.org/1999/xlink",us=/^xlink:/,fs=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,ps=/^(?:value|checked|selected|muted)$/,ds=/^(?:draggable|contenteditable|spellcheck)$/,vs={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},ms={priority:Hr,bind:function(){var t=this.arg,e=this.el.tagName;t||(this.deep=!0);var i=this.descriptor,n=i.interp;n&&(i.hasOneTime&&(this.expression=j(n,this._scope||this.vm)),(fs.test(t)||"name"===t&&("PARTIAL"===e||"SLOT"===e))&&(this.el.removeAttribute(t),this.invalid=!0))},update:function(t){
if(!this.invalid){var e=this.arg;this.arg?this.handleSingle(e,t):this.handleObject(t||{})}},handleObject:ls.handleObject,handleSingle:function(t,e){var i=this.el,n=this.descriptor.interp;if(this.modifiers.camel&&(t=l(t)),!n&&ps.test(t)&&t in i){var r="value"===t&&null==e?"":e;i[t]!==r&&(i[t]=r)}var s=vs[t];if(!n&&s){i[s]=e;var o=i.__v_model;o&&o.listener()}return"value"===t&&"TEXTAREA"===i.tagName?void i.removeAttribute(t):void(ds.test(t)?i.setAttribute(t,e?"true":"false"):null!=e&&e!==!1?"class"===t?(i.__v_trans&&(e+=" "+i.__v_trans.id+"-transition"),Z(i,e)):us.test(t)?i.setAttributeNS(cs,t,e===!0?"":e):i.setAttribute(t,e===!0?"":e):i.removeAttribute(t))}},gs={priority:Mr,bind:function(){if(this.arg){var t=this.id=l(this.arg),e=(this._scope||this.vm).$els;i(e,t)?e[t]=this.el:kt(e,t,this.el)}},unbind:function(){var t=(this._scope||this.vm).$els;t[this.id]===this.el&&(t[this.id]=null)}},_s={bind:function(){}},ys={bind:function(){var t=this.el;this.vm.$once("pre-hook:compiled",function(){t.removeAttribute("v-cloak")})}},bs={text:kr,html:Dr,"for":qr,"if":Qr,show:Gr,model:es,on:ns,bind:ms,el:gs,ref:_s,cloak:ys},ws={deep:!0,update:function(t){t?"string"==typeof t?this.setClass(t.trim().split(/\s+/)):this.setClass(_e(t)):this.cleanup()},setClass:function(t){this.cleanup(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];n&&ye(this.el,n,X)}this.prevKeys=t},cleanup:function(t){var e=this.prevKeys;if(e)for(var i=e.length;i--;){var n=e[i];(!t||t.indexOf(n)<0)&&ye(this.el,n,Y)}}},Cs={priority:Vr,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__||(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=K(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=nt("v-component"),J(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+u(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(t){this.literal||this.setComponent(t)},setComponent:function(t,e){if(this.invalidatePending(),t){var i=this;this.resolveComponent(t,function(){i.mountComponent(e)})}else this.unbuild(!0),this.remove(this.childVM,e),this.childVM=null},resolveComponent:function(t,e){var i=this;this.pendingComponentCb=w(function(n){i.ComponentName=n.options.name||("string"==typeof t?t:null),i.Component=n,e()}),this.vm._resolveComponent(t,this.pendingComponentCb)},mountComponent:function(t){this.unbuild(!0);var e=this,i=this.Component.options.activate,n=this.getCached(),r=this.build();i&&!n?(this.waitingFor=r,be(i,r,function(){e.waitingFor===r&&(e.waitingFor=null,e.transition(r,t))})):(n&&r._updateRef(),this.transition(r,t))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(t){var e=this.getCached();if(e)return e;if(this.Component){var i={name:this.ComponentName,el:Zt(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};t&&v(i,t);var n=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=n),n}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(t){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var e=this.childVM;return!e||this.keepAlive?void(e&&(e._inactive=!0,e._updateRef(!0))):void e.$destroy(!1,t)},remove:function(t,e){var i=this.keepAlive;if(t){this.pendingRemovals++,this.pendingRemovalCb=e;var n=this;t.$remove(function(){n.pendingRemovals--,i||t._cleanup(),!n.pendingRemovals&&n.pendingRemovalCb&&(n.pendingRemovalCb(),n.pendingRemovalCb=null)})}else e&&e()},transition:function(t,e){var i=this,n=this.childVM;switch(n&&(n._inactive=!0),t._inactive=!1,this.childVM=t,i.params.transitionMode){case"in-out":t.$before(i.anchor,function(){i.remove(n,e)});break;case"out-in":i.remove(n,function(){t.$before(i.anchor,e)});break;default:i.remove(n),t.$before(i.anchor,e)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}},$s=An._propBindingModes,ks={},xs=/^[$_a-zA-Z]+[\w$]*$/,As=An._propBindingModes,Os={bind:function(){var t=this.vm,e=t._context,i=this.descriptor.prop,n=i.path,r=i.parentPath,s=i.mode===As.TWO_WAY,o=this.parentWatcher=new Ut(e,r,function(e){xe(t,i,e)},{twoWay:s,filters:i.filters,scope:this._scope});if(ke(t,i,o.value),s){var a=this;t.$once("pre-hook:created",function(){a.childWatcher=new Ut(t,n,function(t){o.set(t)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},Ts=[],Ns=!1,js="transition",Es="animation",Ss=Ji+"Duration",Fs=Qi+"Duration",Ds=Ri&&window.requestAnimationFrame,Ps=Ds?function(t){Ds(function(){Ds(t)})}:function(t){setTimeout(t,50)},Rs=Se.prototype;Rs.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,X(this.el,this.enterClass),t(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,je(this.enterNextTick))},Rs.enterNextTick=function(){var t=this;this.justEntered=!0,Ps(function(){t.justEntered=!1});var e=this.enterDone,i=this.getCssTransitionType(this.enterClass);this.pendingJsCb?i===js&&Y(this.el,this.enterClass):i===js?(Y(this.el,this.enterClass),this.setupCssCb(qi,e)):i===Es?this.setupCssCb(Gi,e):e()},Rs.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,Y(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Rs.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,X(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():je(this.leaveNextTick)))},Rs.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===js?qi:Gi;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},Rs.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),Y(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Rs.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,Q(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(Y(this.el,this.enterClass),Y(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Rs.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},Rs.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=w(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},Rs.getCssTransitionType=function(t){if(!(!qi||document.hidden||this.hooks&&this.hooks.css===!1||Fe(this.el))){var e=this.type||this.typeCache[t];if(e)return e;var i=this.el.style,n=window.getComputedStyle(this.el),r=i[Ss]||n[Ss];if(r&&"0s"!==r)e=js;else{var s=i[Fs]||n[Fs];s&&"0s"!==s&&(e=Es)}return e&&(this.typeCache[t]=e),e}},Rs.setupCssCb=function(t,e){this.pendingCssEvent=t;var i=this,n=this.el,r=this.pendingCssCb=function(s){s.target===n&&(Q(n,t,r),i.pendingCssEvent=i.pendingCssCb=null,!i.pendingJsCb&&e&&e())};q(n,t,r)};var Ls={priority:Ir,update:function(t,e){var i=this.el,n=gt(this.vm.$options,"transitions",t);t=t||"v",e=e||"v",i.__v_trans=new Se(i,t,n,this.vm),Y(i,e+"-transition"),X(i,t+"-transition")}},Hs={style:ls,"class":ws,component:Cs,prop:Os,transition:Ls},Is=/^v-bind:|^:/,Ms=/^v-on:|^@/,Vs=/^v-([^:]+)(?:$|:(.*)$)/,Bs=/\.[^\.]+/g,Ws=/^(v-bind:|:)?transition$/,zs=1e3,Us=2e3;Ye.terminal=!0;var Js=/[^\w\-:\.]/,qs=Object.freeze({compile:De,compileAndLinkProps:Ie,compileRoot:Me,transclude:si,resolveSlots:li}),Qs=/^v-on:|^@/;di.prototype._bind=function(){var t=this.name,e=this.descriptor;if(("cloak"!==t||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var i=e.attr||"v-"+t;this.el.removeAttribute(i)}var n=e.def;if("function"==typeof n?this.update=n:v(this,n),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(e.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var r=this;this.update?this._update=function(t,e){r._locked||r.update(t,e)}:this._update=pi;var s=this._preProcess?p(this._preProcess,this):null,o=this._postProcess?p(this._postProcess,this):null,a=this._watcher=new Ut(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:s,postProcess:o,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(a.value)}},di.prototype._setupParams=function(){if(this.params){var t=this.params;this.params=Object.create(null);for(var e,i,n,r=t.length;r--;)e=u(t[r]),n=l(e),i=M(this.el,e),null!=i?this._setupParamWatcher(n,i):(i=I(this.el,e),null!=i&&(this.params[n]=""===i?!0:i))}},di.prototype._setupParamWatcher=function(t,e){var i=this,n=!1,r=(this._scope||this.vm).$watch(e,function(e,r){if(i.params[t]=e,n){var s=i.paramWatchers&&i.paramWatchers[t];s&&s.call(i,e,r)}else n=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(r)},di.prototype._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!Mt(t)){var e=It(t).get,i=this._scope||this.vm,n=function(t){i.$event=t,e.call(i,i),i.$event=null};return this.filters&&(n=i._applyFilters(n,null,this.filters)),this.update(n),!0}},di.prototype.set=function(t){this.twoWay&&this._withLock(function(){this._watcher.set(t)})},di.prototype._withLock=function(t){var e=this;e._locked=!0,t.call(e),Yi(function(){e._locked=!1})},di.prototype.on=function(t,e,i){q(this.el,t,e,i),(this._listeners||(this._listeners=[])).push([t,e])},di.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var t,e=this._listeners;if(e)for(t=e.length;t--;)Q(this.el,e[t][0],e[t][1]);var i=this._paramUnwatchFns;if(i)for(t=i.length;t--;)i[t]();this.vm=this.el=this._watcher=this._listeners=null}};var Gs=/[^|]\|[^|]/;xt(wi),ui(wi),fi(wi),vi(wi),mi(wi),gi(wi),_i(wi),yi(wi),bi(wi);var Zs={priority:Ur,params:["name"],bind:function(){var t=this.params.name||"default",e=this.vm._slotContents&&this.vm._slotContents[t];e&&e.hasChildNodes()?this.compile(e.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(t,e,i){if(t&&e){if(this.el.hasChildNodes()&&1===t.childNodes.length&&1===t.childNodes[0].nodeType&&t.childNodes[0].hasAttribute("v-if")){var n=document.createElement("template");n.setAttribute("v-else",""),n.innerHTML=this.el.innerHTML,n._context=this.vm,t.appendChild(n)}var r=i?i._scope:this._scope;this.unlink=e.$compile(t,i,r,this._frag)}t?J(this.el,t):z(this.el)},fallback:function(){this.compile(K(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},Xs={priority:Br,params:["name"],paramWatchers:{name:function(t){Qr.remove.call(this),t&&this.insert(t)}},bind:function(){this.anchor=nt("v-partial"),J(this.el,this.anchor),this.insert(this.params.name)},insert:function(t){var e=gt(this.vm.$options,"partials",t,!0);e&&(this.factory=new se(this.vm,e),Qr.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},Ys={slot:Zs,partial:Xs},Ks=qr._postProcess,to=/(\d{3})(?=\d)/g,eo={orderBy:ki,filterBy:$i,limitBy:Ci,json:{read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,arguments.length>1?e:2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},capitalize:function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},uppercase:function(t){return t||0===t?t.toString().toUpperCase():""},lowercase:function(t){return t||0===t?t.toString().toLowerCase():""},currency:function(t,e,i){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",i=null!=i?i:2;var n=Math.abs(t).toFixed(i),r=i?n.slice(0,-1-i):n,s=r.length%3,o=s>0?r.slice(0,s)+(r.length>3?",":""):"",a=i?n.slice(-1-i):"",h=0>t?"-":"";return h+e+o+r.slice(s).replace(to,"$1,")+a},pluralize:function(t){var e=d(arguments,1),i=e.length;if(i>1){var n=t%10-1;return n in e?e[n]:e[i-1]}return e[0]+(1===t?"":"s")},debounce:function(t,e){return t?(e||(e=300),y(t,e)):void 0}};return Ai(wi),wi.version="1.0.26",setTimeout(function(){An.devtools&&Li&&Li.emit("init",wi)},0),wi});
//# sourceMappingURL=vue.min.js.map;
define('Ios',[], function () {
    var u = navigator.userAgent;
    var IosMethod_7 = function (config) { ImagePagerStringPath(config); } //Ios 系统 7（包括7）一下的执行方法
    var IosMethod = function (config) { window.webkit.messageHandlers.ImagePagerStringPath.postMessage(config); } //Ios  7以上的执行方法
    //判断苹果手机的种类
    function IosType()
    {
        if (u.match(/iPhone/i)) {
            return Consts._IosType.iPhone;
        }
        else if (u.match(/iPod/i)) {
            return Consts._IosType.iPod;
        }
        else if (u.match(/iPad/i)) {
            return Consts._IosType.iPad;
        }
        else { return null}
    }



    //Ios版本
    function molieIosEdition()
    {
        // var aa = "Mozilla/5.0(iPhone;CPU iPhone OS 811_422_133 like MAC OS X)";
        var reg = /OS ([^_]*)_([^_]*)_([^_]*) like Mac OS X/gi;
        var Tp = [];
        u.replace(reg, function (a, b, c, e) {
            Tp[0] = b;
            Tp[1] = c;
            Tp[2] = e;
        })
        return Tp;
    }


    function method(config)
    {
        var EditionType = molieIosEdition();
        if (EditionType[0] <= 7) {

            IosMethod_7(config);
        }
        else {
            IosMethod(config);
        }
    }
    //出口方法
    //config   
    //id  图片的父级id
    //MethodName   安卓 Ios 执行的方法名称
    function addMethod(config) {
       var configs = JSON.stringify(config);
            if (config.MethodName) {
                IosMethod_7 = function (config) { eval(config.MethodName + "(" + configs + ")"); }
                IosMethod = function (config) { eval("window.webkit.messageHandlers." + config.MethodName + ".postMessage(" + configs + ")"); }
            }
            method(configs);
    }
    return {
        IosType: IosType,
        molieIosEdition: molieIosEdition,
        addMethod:addMethod
    }

});
define('Android',[], function () {
    var u = navigator.userAgent;
    var androidFn = function (ImgAry, i) { nativeMethod.ImagePagerStringPath({ "ImgAry": ImgAry, "i": i }); } //安卓手机执行方法
    //安卓版本
    function moblieAndroidEdition() {
        //var aaa = "Mozilla/5.0(Linux;Android 6111111.444440.14141;)";
        var reg = /Android ([^.]*).([^.]*).([^;]*);/gi;
        var Tp = [];
        u.replace(rg, function (a, b, c, e) {
            Tp[0] = b;
            Tp[1] = c;
            Tp[2] = e;
        })
        return Tp;
    }
    function method(config) {
        androidFn(config);
    }
    //出口方法
    //config   
    //id  图片的父级id
    //MethodName   安卓 Ios 执行的方法名称
    function addMethod(config) {
        if (config.MethodName) {
            androidFn = function (config) { eval("nativeMethod." + config.MethodName + "(" + config + ")"); }
        }
        method(config);
    }

    return {
        moblieAndroidEdition: moblieAndroidEdition,
        addMethod: addMethod
    }
});
define('molieInit',['Ios', 'Android','zepto'], function (Ios, Ad) {

    var u = navigator.userAgent;
    //判断手机是哪种类型
    function moblieType() {
        if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
            return Consts._browseType.Android;
        }
        else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            return Consts._browseType.Ios;
        }
        return 0;

    }

    //根据不用手机执行不同的方法
    function moblieTypeFn(Fn) {
        if (typeof (Fn) === 'function') {
            switch (moblieType()) {
                case Consts._browseType.Android:
                    Fn();
                    break;
                case Consts._browseType.Ios:
                    Fn();
                    break;
                default:
                    break;
            }
        }
        else {
            console.log("参数必须为方法");
        }
    }
    
    //微信内核执行方法
	function wechatMethod(fn){
		var isWechat = !!/MicroMessenger/i.test(u);
		if(isWechat){
			return true;
		}else{
			return false;
		}
		
	}
	
    //手机获取版本的方法
    function moblieEdition() {
        switch (moblieType()) {
            case Consts._browseType.Android:
                return Ad.moblieAndroidEdition();
                break;
            case Consts._browseType.Ios:
                return Ios.molieIosEdition();
                break;
            default:
                return null;
                break;
        }
    }
    
    

    //添加方法
    function addMethod(config)
    {
        switch (moblieType()) {
            case Consts._browseType.Android:
                return Ad.addMethod(config);
                break;
            case Consts._browseType.Ios:
                return Ios.addMethod(config);
                break;
            default:
                return null;
                break;
        }
    }
     


    return {
        moblieType: moblieType,  //手机的类型
        moblieTypeFn: moblieTypeFn, //根据不用手机执行不同的方法
        IosType: Ios.IosType,   //判断苹果手机的种类  iPhone   ipend
        //手机的版本 
        //返回的是数组   (8_0_1)  [8][0][1]
        moblieEdition: moblieEdition, 
        //获取Ios的版本    
        //返回的是数组   (8_0_1)  [8][0][1]
        IosEdition: Ios.molieIosEdition,
        //获取安卓的版本
        //返回的是数组   (8.0.1)  [8][0][1]
        AndroidEdtition:Ad.moblieAndroidEdition, 
       
        //添加方法
        //config 参数 对象形式
        // {MethodName:方法名称}
        //ImagePagerStringPath  默认方法名
        addMethod:addMethod,

        //给安卓添加方法
        //config 参数 对象形式
        // {MethodName:方法名称}
        //ImagePagerStringPath
        //AndroidAddMethod: Ad.addMethod,
        //给Ios添加方法
        //config 参数 对象形式
        // {MethodName:方法名称}
       // IosAddMethod: Ios.addMethod,
       wechatMethod: wechatMethod

    }
})

;
define('booksMethod',['molieInit'], function (m) {

    var androidFn = function (config) { nativeMethod.ImagePagerStringPath(config); } //安卓手机执行方法
    var IosMethod_7 = function (config) { ImagePagerStringPath(config); } //Ios 系统 7（包括7）一下的执行方法
    var IosMethod = function (config) { window.webkit.messageHandlers.ImagePagerStringPath.postMessage(config); } //Ios  7以上的执行方法

    //根据手机类型执行不同的方法
    function booksInit(type,config) {
        var moblieType = m.moblieType(); //判断手机类型
        switch (moblieType) {
            case Consts._browseType.Android:
                androidMethod(type, config);
                break;
            case Consts._browseType.Ios:
                iosMethod(type, config);
                break;
            default: console.log(moblieType);
        }
    }

    //安卓的执行方法
    function androidMethod(type, config) {
        androidFn(type, config);
    }

    //IOS的执行方法
    function iosMethod(type, config) {
        var EditionType = m.IosEdition();
        if (EditionType[0] <= 7) {

            IosMethod_7(type, config);
        }
        else {
            IosMethod(type, config);
        }

    }

    /* 出口方法
     * config   
     * type 必须 安卓 Ios 执行的方法名称
     * parameterName 参数名
     * parameterValue 参数值
    */ 
    function Init(type,config) {
        if (type) {
            if (config) {
                config = (typeof config) === "string" ? config : JSON.stringify(config)
                androidFn = function (type, config) { eval("nativeMethod." + type + "('" + config + "')"); }
                IosMethod_7 = function (type, config) { eval(type + "('" + config + "')"); }
                IosMethod = function (type, config) { eval("window.webkit.messageHandlers." + type + ".postMessage('" + config + "')"); }
            } else {
                androidFn = function (type, config) { eval("nativeMethod." + type + "()"); }
                IosMethod_7 = function (type, config) { eval(type + "('none')"); }
                IosMethod = function (type, config) { eval("window.webkit.messageHandlers." + type + ".postMessage('none')"); }
            }
        } else {
            alert("必须传入类型");
            return false;
        }


        booksInit(type,config);
    }

    return {
       /* 调用方法
        * booksInit(type,{参数名:参数值,参数名2:参数值2,...参数名n:参数值n})
        * 有两个参数
        * type 方法类型名
        * obj  参数列表
        */ 
        booksInit: Init
    }
});
require(['vue', 'booksMethod'], function(vue, bk) {
	var Height = 120;
	var vm = new vue({
		el: '#RutList',
		data: {
			arr: [],
			conmoent: [],
			onLine: true,
		}
	})
	if(mui.os.ios) {
		$("header").css({
			"padding-top": "20px",
			"height": "64px"
		});
		$(".ct-scroll").css({
			"padding-top": "64px"
		});$('#top').css({'padding-top':'3px'})
		Height = 100;
	}
	//设置高度
	$('.mui-slider-item').height($(window).height() - Height);

	mui('#slider').scroll({
		scrollY: false, //是否竖向滚动
		scrollX: true, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	})
	mui('.mui-scroll-wrapper').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
	//判断是否有网络
	onLine(function() {
			vm.onLine = true;
		}, function() {
			vm.onLine = false;
		})
		//返回
	mui.back = function() {
			if(vm.onLine) {
				bk.booksInit('exitHtml');
			} else {
				mui.toast('网络未连接，请检查网络！');
			}
		}
		//顶部切换require
	var TopSwitch = (function() {
		if($('#segmentedControl').children('div')) {
			var BlankContent = {
				index: 0,
				name: $('#segmentedControl').children('div').eq(0).data('name'),
			}

		}
		document.getElementById('slider').addEventListener('slide', function(e) {
			if(e.detail.slideNumber === 0) {
				BlankContent.index = e.detail.slideNumber;
				BlankContent.name = $(this).children('#segmentedControl').children('div:first-child').data('name');
				//mui('.mui-scroll-wrapper').scroll().refresh();
				//mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0);
			} else if(e.detail.slideNumber === 1) {
				BlankContent.index = e.detail.slideNumber;
				BlankContent.name = $(this).children('#segmentedControl').children('div:last-child').data('name');
				//mui('.mui-scroll-wrapper').scroll().refresh();
				//mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0);
			}

		});

		return {
			BlankContent: BlankContent,
		}
	})()

	/*   IosSelect 效果
	 *    需要   银行的数据   跟   需要添加方法的DOM
	 */

	/*需要添加IOS select效果的元素
	 * showBankDom  点击的Id
	 * bankIdDom    显示选择后的Id
	 * title        select显示的标题
	 * data         数据（如果需要添加ajax请求就赋""） 否则请用[ {'id': '10001', 'value': '工商银行'}, {'id': '10002', 'value': '工商银行'}]  形式进行添加
	 */
	var blank = [{
			"showBankDom": document.querySelector('#showUserPicker0'),
			"bankIdDom": document.querySelector('#bankId0'),
			"banktype": 1,
			"title": "选择银行",
			"data": "",
			//			"dataUrl": Consts.OKRUrl148 + "api/BankApi"
			"dataUrl": '../../js/gulp/JSON/BankIndex.json',
		}, {
			"showBankDom": document.querySelector('#showUserPicker1'),
			"bankIdDom": document.querySelector('#bankId1'),
			"banktype": 2,
			"title": "选择省会",
			"data": "",
			//			"dataUrl": Consts.OKRUrl + "api/FXAreaInfoApi?CountryCode=6541"
			"dataUrl": '../../js/gulp/JSON/BankSwift.json',
		}, //{
		//		"showBankDom": document.querySelector('#showUserPicker2'),
		//		"bankIdDom": document.querySelector('#bankId2'),
		//		"banktype": 3,
		//		"title": "选择城市",
		//		"data": "",
		//		"dataUrl": Consts.OKRUrl + "api/FXAreaInfoApi?ProvinceCode="
		//	}
	];

	/*	//缓存勾选中的省份、城市、银行 用于查询
		//blank 银行    capital 省份        city 城市
		//Nationwide  为全国银行的
		var Nationwide = {
			blank: -1,
			capital: -1,
			city: -1
		}; //全国银行

		function SelectCallBack(selectObj) {
			switch(parseInt(TopSwitch.BlankContent.index)) {
				case 0:
					if(banktype == 1) {
						Nationwide.blank = selectObj.bankid;
						//									 	 Nationwide.capital = -1;
						//									 	 Nationwide.city = -1;
						//									 	 $('#bankId1').text('请选择省会');
						//									 	 $('#bankId2').text('请选择城市');
					} else if(banktype == 2) {
						Nationwide.capital = selectObj.code;
						Nationwide.city = -1;
						$('#bankId2').text('请选择城市');
					} else if(banktype == 3) {
						Nationwide.city = selectObj.code;
					}
					break;
				case 1:

					break;
				default:
					break;
			}
		}*/

	//缓存当前银行的类型  1为银行   2位地方省会   3位外资城市
	//默认为全国银行
	var banktype = null;

	//new了后指针指向blankparrten 不new 指针指向window
	//	 blankparrten(blank,{data:function(_this){
	//	  			banktype = blank[$(_this).attr('id').replace('showBank','')].banktype;
	//	  	     	return  BankData.BankType(_this);	
	//	  }});

	blankparrten(blank, {
		bol: true
	});

	function BlankParrtenFn(_this) {
		if(vm.onLine) {
			banktype = blank[$(_this).attr('id').replace('showUserPicker', '')].banktype;
			BankData.BankType(_this);
		} else {
			mui.toast("网络未连接，请检查网络！");
		}
	}

	var BankData = {
		//银行
		BankFn: function(_this) {
			var data, bodyMessage;
			$('.load-index').css('display', 'block');
			var Url = blank[$(_this).attr('id').replace('showUserPicker', '')].dataUrl;
			$.getJSON(Url, function(data) {
				BlankAsyncFn(_this, data, 'BankId', 'ChineseName');
			});

		},
		//省份
		CapitalFn: function(_this) {
			if(!BlankQuery.PlaceQuery()) return false;
			var data, bodyMessage;
			$('.load-index').css('display', 'block');
			var Url = blank[$(_this).attr('id').replace('showUserPicker', '')].dataUrl;
			$.getJSON(Url, function(data) {
				var arry = new Array();
				//排除相同的城市
				for(var i = 0; i < data.length; i++) {
					var ET = {
						Abbr: '',
						Code: '',
						EngName: '',
						Name: '',
						ParentCode: '',
						RegionCode: '',
						no: [],
						ChildAreas: []
					}
					var shuzu = [];
					for(var j = 0; j < data[i].ChildAreas.length; j++) {
						shuzu.push(data[i].ChildAreas[j].Code);
						if(data[i].Name != data[i].ChildAreas[j].Name) {
							ET.no.push(data[i].ChildAreas[j]);
						}
					}
					//市级城市从小到大排序
					shuzu.sort(function(a, b) {
						return a - b
					});
					for(var t = 0; t < shuzu.length; t++) {
						for(var y = 0; y < ET.no.length; y++) {
							if(shuzu[t] == ET.no[y].Code) {
								ET.ChildAreas.push(ET.no[y]);
							}
						}
					}
					if(data[i].Name != '中国') {
						ET.Abbr = data[i].Abbr;
						ET.Code = data[i].Code;
						ET.EngName = data[i].EngName;
						ET.Name = data[i].Name;
						ET.ParentCode = data[i].ParentCode;
						ET.RegionCode = data[i].RegionCode;
						arry.push(ET);
					}
				}
				var arr = [];
				var TextHtml = [];

				//省级城市从小到大排序
				for(var m = 0; m < arry.length; m++) {
					arr.push(arry[m].Code);
				}
				arr.sort(function(a, b) {
					return a - b
				});
				for(var n = 0; n < arr.length; n++) {
					for(var l = 0; l < arry.length; l++) {
						if(arr[n] == arry[l].Code) {
							TextHtml.push(arry[l]);
						}
					}
				}
				BlankAsyncFn(_this, TextHtml, 'Code', 'Name');
			})
		},
		//
		//		//城市
		//		City: function(_this) {
		//			if(!BlankQuery.CityQuery()) return false;
		//			var data, bodyMessage;
		//			//loadingimg.ImgShow();
		//			$.ajax({
		//				url: blank[$(_this).attr('id').replace('showUserPicker', '')].dataUrl + Nationwide.capital,
		//				//data:,
		//				//async: false,
		//				type: "GET",
		//				dataType: "JSON",
		//				success: function(data) {
		//					data = eval("(" + data + ")");
		//
		//					if(data.code == 0) {
		//						bodyMessage = eval('(' + data.bodyMessage + ')');
		//					} else {
		//						console.log(data.message);
		//						return false;
		//					}
		//					BlankAsyncFn(_this, bodyMessage, 'Code', 'Name');
		//					//loadingimg.ImgHide();
		//				}
		//			})
		//		},

		//银行的类型
		//1  为银行
		//2 为省会
		//3 为城市
		BankType: function(_this) {

			switch(parseInt(banktype)) {
				case 1:
					this.BankFn(_this);
					break;
				case 2:
					this.CapitalFn(_this);
					break;
				case 3:
					this.City(_this);
					break;
				default:
					break;
			}

		}
	}

	/*银行查询的IOS select效果
	 * showBankDom  点击的Id
	 * bankIdDom    显示选择后的Id
	 * title        select显示的标题
	 * data         数据
	 * id           该选项id的使用的名称    如：{bankid:12}  id是bankid
	 * value        该选项名字的使用的名称 如:{ChineseName:"中国银行"} value是ChineseName  
	 */
	function BlankClick(showBankDom, bankIdDom, title, data, id, value, _this) {
		var bankId = showBankDom.dataset['id'];
		var bankName = showBankDom.dataset['value'];
		var userPicker = new mui.PopPicker();
		var text = [];
		switch(title) {
			case '选择银行':
				for(var i = 0; i < data.length; i++) {
					var ET = {
						bankId: '',
						text: '',
						banktype: ''
					};
					ET.bankId = data[i].BankId;
					ET.text = data[i].ChineseName;
					ET.banktype = data[i].BankType;
					text.push(ET);
				}
				break;
			case '选择省会':
				for(var n = 0; n < data.length; n++) {
					var ET = {
						children: [],
						text: '',
						value: ''
					};
					for(var m = 0; m < data[n].ChildAreas.length; m++) {
						var Xx = {
							text: '',
							value: ''
						}
						Xx.text = data[n].ChildAreas[m].Name;
						Xx.value = data[n].ChildAreas[m].Code;
						ET.children.push(Xx);
					}
					ET.text = data[n].Name;
					ET.value = data[n].Code;
					text.push(ET);
				}
				break;
			default:
				break;
		}
		userPicker.setData(text);

		//二级联动
		if(title == '选择省会') {
			var cityPicker = new mui.PopPicker({
				layer: 2
			});
			cityPicker.setData(text);
			var cityResult = document.getElementById('bankId1');
			cityPicker.show(function(items) {
				cityResult.innerText = items[0].text + "/" + items[1].text;
				if(!!SelectCallBack) SelectCallBack(items[0], items[1]);
				//返回 false 可以阻止选择框的关闭
				//return false;
			}, false);
			$('.load-index').css('display', 'none');
		} else {
			var userResult = $(_this).children().children().slice()[0];
			userPicker.show(function(items) {
				userResult.innerText = items[0].text;
				if(!!SelectCallBack) SelectCallBack(items[0]);
			}, false);
			$('.load-index').css('display', 'none');
		}
	}

	//添加IOS select效果的元素  以及 ajax	
	//blank  需要添加方法的集合
	//callback  返回的其他属性
	// callback.ajax   返回的data数据
	function blankparrten(blank, callback) {
		var _this = this;
		_this.data = callback.data || "";
		//循环添加方法
		for(var ii = 0; ii < blank.length; ii++) {
			if(!!blank[ii].showBankDom) {
				blank[ii].showBankDom.addEventListener('tap', function() {

					//异步执行就要给bol 参数  
					// BlankParrtenFn  方法    执行的方法
					if(callback.bol) {
						BlankParrtenFn(this);
					}

					//必须同步执行
					else {
						var CallBackData = _this.data(this);
						if(CallBackData.data) {
							blank[this.dataset.number].data = CallBackData.data;
							id = CallBackData.id;
							value = CallBackData.value;
						} else {
							return false;
						}
						BlankClick(blank[this.dataset.number].showBankDom, blank[this.dataset.number].bankIdDom, blank[this.dataset.number].title, blank[this.dataset.number].data, id, value);
					}

				})
			}
		}
	}

	/* data         数据
	 * id           该选项id的使用的名称    如：{bankid:12}  id是bankid
	 * value        该选项名字的使用的名称 如:{ChineseName:"中国银行"} value是ChineseName  */
	function BlankAsyncFn(_this, data, id, value) {
		var Number = _this.dataset.number;
		if(data.length > 0) {
			blank[Number].data = data;
			id = id;
			value = value;
		} else {
			return false;
		}
		BlankClick(blank[Number].showBankDom, blank[Number].bankIdDom, blank[Number].title, blank[Number].data, id, value, _this);
	}

	//查询判断
	var BlankQuery = {

		//查询省份先判断银行是否选择
		PlaceQuery: function() {
			switch(parseInt(TopSwitch.BlankContent.index)) {
				case 0:
					if(Nationwide.blank == -1) {
						mui.alert('请先选择银行！');
						return false;
					} else {
						return true
					};
					break;
				default:
					return false;
					break;
			}
		},
		//查询城市先判断银行或者省份是否选择
		CityQuery: function() {
			switch(parseInt(TopSwitch.BlankContent.index)) {
				case 0:
					if(Nationwide.blank == -1 || Nationwide.capital == -1) {
						mui.alert('请先选择银行或者省份！');
						return false;
					} else {
						return true
					};
					break;
				default:
					return false;
					break;
			}
		}
	}

	//缓存勾选中的省份、城市、银行 用于查询
	//blank 银行    capital 省份        city 城市
	//Nationwide  为全国银行的
	var Nationwide = {
		blank: -1,
		capital: -1,
		city: -1
	}; //全国银行

	function SelectCallBack(items, itemd) {
		switch(parseInt(TopSwitch.BlankContent.index)) {
			case 0:
				if(banktype == 1) {
					Nationwide.blank = items.bankId;
					Nationwide.capital = -1;
						$('#bankId1').text('请选择银行/城市');
					//									 	 Nationwide.capital = -1;
					//									 	 Nationwide.city = -1;
					//									 	 $('#bankId1').text('请选择省会');
					//									 	 $('#bankId2').text('请选择城市');
				} else if(banktype == 2) {
					Nationwide.capital = items.value;
					Nationwide.city = itemd.value;
				
				} //else if(banktype == 3) {
				//					Nationwide.city = selectObj.code;
				//				}
				break;
			case 1:

				break;
			default:
				break;
		}
	}

	//全国银行
	//var Nationwide = {
	//	blank:-1,      //银行的id
	//	capital:-1,    //省份的id
	//	city:-1,       //城市的id
	//	blankname:null//地方银行查询 的银行名称
	//}; 
	if(!!Nationwide) {
		Nationwide.blankname = null //地方银行查询 的银行名称

	} else {
		var Nationwide = {
			blank: -1,
			capital: -1,
			city: -1,
			blankname: null
		};
	}

	//pageIndex   当前的页码
	//pagesize    每页放多少条记录
	//Finish      当前的城市的银行  是否加载完成了 0是还有   1是已经加载完
	//slideUpBol  是否触发的加载更多  是的话执行动画结束时的运动    0 不是   1 是
	//scrollEndBol   在滚动结束的时候  ajax是否执行完成     为执行完成为0     执行完成为1
	var PageData = []; //分页的属性

	// 根据不同的选择  执行不同的方法
	var Seachs = {

		//银行查询
		'Categories': function() {
			if(Nationwide.blank >= 0 && Nationwide.capital >= 0 && Nationwide.city >= 0) {
				myscroll1.AjaxHtml();
			} else {
				mui.alert("请选择银行和城市信息后查询！");
				$('.load-index').css('display', 'none');
				return;
			}
		},

		'Places': function() {
			Nationwide.blankcentent = $('.Place .Place-input input').val().trim();
			if(Nationwide.blankcentent.length <= 0) {
				mui.alert("请输入您要查询的银行！");
				$('.load-index').css('display', 'none');
				return;

			} else if(IsSpecialCharacter(Nationwide.blankcentent)) {

				myscroll2.AjaxHtml();
			} else {
				mui.alert("内容包含特殊字符！");
				$('.load-index').css('display', 'none');
				return;
			}

		}

	}

	//点击搜索
	$('.Inquiry').on('tap', function() {
		if(vm.onLine) {
			switch(TopSwitch.BlankContent.name) {
				case 'Categories': //全国银行查询
					$('.load-index').css('display', 'block');
					Seachs.Categories();
					break;
				case 'Places':
					$('.load-index').css('display', 'block');
					Seachs.Places(); //地方银行查询
					break;
				default:
					break;

			}
		} else {
			mui.toast("网络未连接，请检查网络！");
		}

	})

	// wrapscroll  要加方法的DOM
	// pullUp  上拉加载的DOM
	function MyScrollLoad(wrapscroll, pullUp) {
		var _this = this;
		_this.myScroll = null; //IosSelect的fn
		var pullUp = $("#" + pullUp); //加载更多的DOM

		//初始化执行
		_this.loaded = function() {
			_this.myScroll = new IScroll('#' + wrapscroll, {
				probeType: 3,
				bounce: false,
				mouseWheel: true,
				BanTop: false
			});
			//,preventDefault:false
			_this.PullUpShowHide();
			//给 PageData 添加默认值  
			if(PageData.length <= 0) {
				for(var ii = 0; ii < $('#segmentedControl').children().length; ii++) {
					PageData.push(JSON.parse('{"pageIndex":1,"pagesize":20,"Finish":0,"scrollEndBol":1,"slideUpBol":0}'));
				}
			}
			//	_this.myScroll.on("slideDown",function(){
			//		if(_this.y > 40){
			//			mui.alert("slideDown");
			//			upIcon.removeClass("reverse_icon")
			//		}
			//	});
			//	
			_this.myScroll.on("slideUp", function() {
				this.bounce = true;
				if(this.maxScrollY - this.y > 40) {
					PageData[TopSwitch.BlankContent.index].slideUpBol = 1;
					_this.AjaxAppend();
				}

			});

			//滚动效果结束后执行
			_this.myScroll.on("scrollEnd", function() {
				if(_this.myScroll.options.bounce && PageData[TopSwitch.BlankContent.index].slideUpBol == 1) {
					if(PageData[TopSwitch.BlankContent.index].scrollEndBol == 0) {
						pullUp.children('span').eq(1).text('加载中，请稍后');
						_this.pullUpFn.pullUpShowFn();
					}
				}

			});

		}

		//每次加载完数据时候 重新赋高度等一些值
		_this.RefreshLoads = function() {
			_this.myScroll.refresh();
		}

		//内容超过页面的高度显示加载更多
		_this.PullUpShowHide = function() {
			if(_this.myScroll.scrollerHeight <= _this.myScroll.wrapperHeight) {
				pullUp.hide();
			} else {
				pullUp.show();
			}
		}

		//Ajax 数据加载
		//Type  类型是点击查询的 还是加载更多的
		_this.ArticleAjaxs = function(Type) {
			switch(parseInt(TopSwitch.BlankContent.index)) {
				case 0: //全国银行查询
					_this.NationalSeach(Type);
					break;
				case 1: //地方银行查询
					_this.PlaceSeach(Type);
					break;
				default:
					console.log(TopSwitch.BlankContent.index);
					break;
			}
		}

		//全国银行的查询的Ajax
		_this.NationalSeach = function(Type) {
			//Nationwide.blank,   //银行的id
			//Nationwide.capital //省份的id
			//Nationwide.city     //城市的id
			//PageData[TopSwitch.BlankContent.index].pageIndex  //当前页码
			// mui.alert(PageData[TopSwitch.BlankContent.index].pageIndex);

			if(PageData[TopSwitch.BlankContent.index].Finish == 0) {
				//loadingimg.ImgShow();
				_this.myScroll.options.bounce = true;
				if(Type == 1) {
					//_this.pullUpFn.pullUpShowFn();
					PageData[TopSwitch.BlankContent.index].scrollEndBol = 0;
				} else {
					//loadingimg.ImgShow();
				}
				$.ajax({
					url: Consts.OKRUrl148 + "api/BankTranslationApi?bankId=" + Nationwide.blank + "&areaId=" + Nationwide.city + "&pageIndex=" + PageData[TopSwitch.BlankContent.index].pageIndex + "&keywords=''&pageSize=" + PageData[TopSwitch.BlankContent.index].pagesize,
					type: "get",
					complete: function(xhr, ts) {},
					success: function(data) {
						$('.load-index').css('display', 'none');
						var bodyMessage = eval('(' + data.bodyMessage + ')');

						//bodyMessage.TotalCount 总条数

						if(Math.ceil(bodyMessage.TotalCount / PageData[TopSwitch.BlankContent.index].pagesize) <= PageData[TopSwitch.BlankContent.index].pageIndex) {
							PageData[TopSwitch.BlankContent.index].Finish = 1;
							_this.myScroll.options.bounce = false;
						}

						if(data.code == 0) {
							var datas = bodyMessage.PageDatas;
							if(datas == 0) {
								mui.alert('该城市没有这个银行');
							}
							vm.arr = datas;
							/*switch (parseInt(Type)){
							    case 0:
							        _this.AjaxHtmlsCallBack(_this.html(bodyMessage));
							        break;
							    case 1:
							        _this.AjaxAppendsCallBack(_this.html(bodyMessage));
							        break;
							    default:
							        break;
							}*/
						} else {
							console.log(data.message);
						}
						// loadingimg.ImgHide();

						//_this.ScorllEndFn();
					},
					error: function() {
						_this.ScorllEndFn();
					}

				});
			}
		}

		//地方银行的查询的Ajax
		_this.PlaceSeach = function(Type) {
			if(PageData[TopSwitch.BlankContent.index].Finish == 0) {
				_this.myScroll.options.bounce = true;

				if(Type == 1) {
					//_this.pullUpFn.pullUpShowFn();
					PageData[TopSwitch.BlankContent.index].scrollEndBol = 0;
				} else {
					//loadingimg.ImgShow();
				}

				$.ajax({
					url: Consts.OKRUrl148 + "api/BankTranslationApi?bankId=0&areaId=0&keywords=" + Nationwide.blankcentent + "&pageIndex=" + PageData[TopSwitch.BlankContent.index].pageIndex + "&pageSize=" + PageData[TopSwitch.BlankContent.index].pagesize,
					type: "get",
					complete: function(xhr, ts) {},
					success: function(data) {
						$('.load-index').css('display', 'none');
						var bodyMessage = eval('(' + data.bodyMessage + ')');
						//bodyMessage.TotalCount 总条数

						if(Math.ceil(bodyMessage.TotalCount / PageData[TopSwitch.BlankContent.index].pagesize) <= PageData[TopSwitch.BlankContent.index].pageIndex) {
							PageData[TopSwitch.BlankContent.index].Finish = 1;
							_this.myScroll.options.bounce = false;
						}
						if(data.code == 0) {
							//查询出来有数据的情况
							if(bodyMessage.PageDatas.length > 0) {
								pullUp.show();
								switch(parseInt(Type)) {
									case 0:
										vm.conmoent = bodyMessage.PageDatas;
										//_this.AjaxHtmlsCallBack(_this.html(bodyMessage));
										break;
									case 1:
										_this.AjaxAppendsCallBack(vm.conmoent = bodyMessage.PageDatas);
										break;
									default:
										break;
								}
							}
							//查询出来没有数据的情况
							else {
								//_this.AjaxHtmlsCallBack('<img src="../../../img/error/zhanwu.png" style="display:block; margin:0 auto;" />');
								mui.alert('请输入正确的银行名称');
							}
						} else {
							console.log(data.message);
						}
						_this.ScorllEndFn();
					},
					error: function() {
						//_this.ScorllEndFn();
						mui.toast('请求超时');
						$(".load-index").css('display', 'none');
					}
				})

			}

		}

		//对页面的赋值
		//type  0是点击查询   1是加载更多
		_this.page_return = function(type) {
			switch(parseInt(type)) {
				case 0:
					PageData[TopSwitch.BlankContent.index].pageIndex = 1;
					break;
				case 1:
					PageData[TopSwitch.BlankContent.index].pageIndex += 1;
					break;
				default:
					break;
			}
		}

		//添加的html代码的组合
		//data  数据
		_this.html = function(data) {
			/* var html = "";
			 //					    AreaId: 6543
			 //						BankId: 4
			 //						ChineseAddress: "北京市东城区东直门内大街2号"
			 //						ChineseName: "东直门内支行"
			 //						EnglishAddress: "No.2, Mennei Street, Dongzhimen, Dongcheng District, Beijing City"
			 //						EnglishName: "Beijing Dongzhimennei Subbranch"
			 //						Id: 32538
			 //						Telephone: ""
			 //						ZipCode: ""
			 // data = JSON.parse(data);
			 $.each(data.PageDatas,function(){
			     html +='<article>'
			         +'	<div class="title">'
			         +'		<h4>'+this.ChineseName+'<span>'+this.ZipCode+'</span></h4>'
			         +'		<p>'+this.EnglishName+'</p>'
			         +'	</div>'
			         +'	<div class="content">'
			         +'		<h4>'+this.ChineseAddress+'</h4>'
			         +'		<p>'+this.EnglishAddress+'</p>'
			         +'	</div>'
			         +'</article>';
			 });
			 return html;*/
		}

		_this.pullUpFn = {
			pullUpShowFn: function() {
				pullUp.css('bottom', '15px');
			},
			pullUpHideFn: function() {
				pullUp.css('bottom', '-40px');
			}
		}

		//   加载更多
		_this.AjaxAppends = function() {
				_this.page_return(1);
				_this.ArticleAjaxs(1);
			}
			//  重新赋值
		_this.AjaxHtmls = function() {
			PageData[TopSwitch.BlankContent.index].Finish = 0;
			_this.page_return(0);
			_this.ArticleAjaxs(0);
		}

		//加载更多的添加方法
		_this.AjaxAppendsCallBack = function(ajaxhtml) {
			ajaxhtml && $('.RutList').children('div').eq(TopSwitch.BlankContent.index).append(ajaxhtml);
		}

		//重新赋值的添加方法
		_this.AjaxHtmlsCallBack = function(ajaxhtml) {
			if(ajaxhtml) {
				$('.RutList').children('div').eq(TopSwitch.BlankContent.index).removeClass('AddBg');
				$('.RutList').children('div').eq(TopSwitch.BlankContent.index).html(ajaxhtml);
			} else {
				$('.RutList').children('div').eq(TopSwitch.BlankContent.index).addClass('AddBg');

			}

		}

		_this.ScorllEndFn = function() {
			PageData[TopSwitch.BlankContent.index].scrollEndBol = 1;
			PageData[TopSwitch.BlankContent.index].slideUpBol = 0;
			pullUp.children('span').eq(1).text('加载更多');
			_this.pullUpFn.pullUpHideFn();
			//loadingimg.ImgHide();
			_this.RefreshLoads();
			_this.PullUpShowHide();
		}

	}
	MyScrollLoad.prototype = {
		//初始化方法
		init: function() {
			this.loaded();
		},
		//重新加载
		RefreshLoad: function() {
			this.RefreshLoads();
		},
		// 加载更多并且重新载入滚动条数据
		AjaxAppend: function() {
			this.AjaxAppends();

		},

		//  重新赋值并且重新载入滚动条数据
		AjaxHtml: function() {
			this.AjaxHtmls();
		}
	}

	var myscroll1 = new MyScrollLoad('wrapscroll', 'scroller-pullUp');
	myscroll1.init();

	var myscroll2 = new MyScrollLoad('wrapscroll1', 'scroller-pullUp1');
	myscroll2.init();

	//切换的时候重新读取高度    
	$('#segmentedControl').children('div').on("tap", function() {
		// $('#wrapscroll').children('div').eq(TopSwitch.BlankContent.index).height('auto').siblings().height('0px');
		//mui('.ct-back-scr').pullRefresh().refresh();
		//mui('.ct-back-scr').pullRefresh().scrollTo(0, 0);
	})

	//去掉默认的  e.preventDefault() 时     input不会失去焦点      
	//让input失去焦点
	$(document).on('touchstart', function(e) {
		if($(e.target).attr('class') != 'Place-inputext') {
			$('.Place-inputext').blur();
		}
	})

});
define("translation", function(){});

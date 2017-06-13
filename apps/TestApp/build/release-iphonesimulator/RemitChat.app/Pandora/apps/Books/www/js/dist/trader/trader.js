
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

(function($, window, document) {
	var STATE_BEFORECHANGEOFFSET = 'beforeChangeOffset';
	var STATE_AFTERCHANGEOFFSET = 'afterChangeOffset';

	var EVENT_PULLSTART = 'pullstart';
	var EVENT_PULLING = 'pulling';
	var EVENT_BEFORECHANGEOFFSET = STATE_BEFORECHANGEOFFSET;
	var EVENT_AFTERCHANGEOFFSET = STATE_AFTERCHANGEOFFSET;
	var EVENT_DRAGENDAFTERCHANGEOFFSET = 'dragEndAfterChangeOffset';

	var CLASS_TRANSITIONING = $.className('transitioning');
	var CLASS_PULL_TOP_TIPS = $.className('pull-top-tips');
	var CLASS_PULL_BOTTOM_TIPS = $.className('pull-bottom-tips');
	var CLASS_PULL_LOADING = $.className('pull-loading');
	var CLASS_SCROLL = $.className('scroll');

	var CLASS_PULL_TOP_ARROW = $.className('pull-loading') + ' ' + $.className('icon') + ' ' + $.className('icon-pulldown');
	var CLASS_PULL_TOP_ARROW_REVERSE = CLASS_PULL_TOP_ARROW + ' ' + $.className('reverse');
	var CLASS_PULL_TOP_SPINNER = $.className('pull-loading') + ' ' + $.className('spinner');
	var CLASS_HIDDEN = $.className('hidden');

	var SELECTOR_PULL_LOADING = '.' + CLASS_PULL_LOADING;
	$.PullToRefresh = $.Class.extend({
		init: function(element, options) {
			this.element = element;
			this.options = $.extend(true, {
				down: {
					height: 75,
					callback: false,
				},
				up: {
					auto: false,
					offset: 100, //距离底部高度(到达该高度即触发)
					show: true,
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了',
					callback: false
				},
				preventDefaultException: {
					tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
				}
			}, options);
			this.stopped = this.isNeedRefresh = this.isDragging = false;
			this.state = STATE_BEFORECHANGEOFFSET;
			this.isInScroll = this.element.classList.contains(CLASS_SCROLL);
			this.initPullUpTips();

			this.initEvent();
		},
		_preventDefaultException: function(el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true;
				}
			}
			return false;
		},
		initEvent: function() {
			if ($.isFunction(this.options.down.callback)) {
				this.element.addEventListener('touchstart', this);
				this.element.addEventListener('drag', this);
				this.element.addEventListener('dragend', this);
			}
			if (this.pullUpTips) {
				this.element.addEventListener('dragup', this);
				if (this.isInScroll) {
					this.element.addEventListener('scrollbottom', this);
				} else {
					window.addEventListener('scroll', this);
				}
			}
		},
		handleEvent: function(e) {
			switch (e.type) {
				case 'touchstart':
					this.isInScroll && this._canPullDown() && e.target && !this._preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
					break;
				case 'drag':
					this._drag(e);
					break;
				case 'dragend':
					this._dragend(e);
					break;
				case 'webkitTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'dragup':
				case 'scroll':
					this._dragup(e);
					break;
				case 'scrollbottom':
					this.pullUpLoading(e);
					break;
			}
		},
		initPullDownTips: function() {
			var self = this;
			if ($.isFunction(self.options.down.callback)) {
				self.pullDownTips = (function() {
					var element = document.querySelector('.' + CLASS_PULL_TOP_TIPS);
					if (element) {
						element.parentNode.removeChild(element);
					}
					if (!element) {
						element = document.createElement('div');
						element.classList.add(CLASS_PULL_TOP_TIPS);
						element.innerHTML = '<div class="mui-pull-top-wrapper"><span class="mui-pull-loading mui-icon mui-icon-pulldown"></span></div>';
						element.addEventListener('webkitTransitionEnd', self);
					}
					self.pullDownTipsIcon = element.querySelector(SELECTOR_PULL_LOADING);
					document.body.appendChild(element);
					return element;
				}());
			}
		},
		initPullUpTips: function() {
			var self = this;
			if ($.isFunction(self.options.up.callback)) {
				self.pullUpTips = (function() {
					var element = self.element.querySelector('.' + CLASS_PULL_BOTTOM_TIPS);
					if (!element) {
						element = document.createElement('div');
						element.classList.add(CLASS_PULL_BOTTOM_TIPS);
						if (!self.options.up.show) {
							element.classList.add(CLASS_HIDDEN);
						}
						element.innerHTML = '<div class="mui-pull-bottom-wrapper"><span class="mui-pull-loading">' + self.options.up.contentdown + '</span></div>';
						self.element.appendChild(element);
					}
					self.pullUpTipsIcon = element.querySelector(SELECTOR_PULL_LOADING);
					return element;
				}());
			}
		},
		_transitionEnd: function(e) {
			if (e.target === this.pullDownTips && this.removing) {
				this.removePullDownTips();
			}
		},
		_dragup: function(e) {
			var self = this;
			if (self.loading) {
				return;
			}
			if (e && e.detail && $.gestures.session.drag) {
				self.isDraggingUp = true;
			} else {
				if (!self.isDraggingUp) { //scroll event
					return;
				}
			}
			if (!self.isDragging) {
				if (self._canPullUp()) {
					self.pullUpLoading(e);
				}
			}
		},
		_canPullUp: function() {
			if (this.removing) {
				return false;
			}
			if (this.isInScroll) {
				var scrollId = this.element.parentNode.getAttribute('data-scroll');
				if (scrollId) {
					var scrollApi = $.data[scrollId];
					return scrollApi.y === scrollApi.maxScrollY;
				}
			}
			return window.pageYOffset + window.innerHeight + this.options.up.offset >= document.documentElement.scrollHeight;
		},
		_canPullDown: function() {
			if (this.removing) {
				return false;
			}
			if (this.isInScroll) {
				var scrollId = this.element.parentNode.getAttribute('data-scroll');
				if (scrollId) {
					var scrollApi = $.data[scrollId];
					return scrollApi.y === 0;
				}
			}
			return document.body.scrollTop === 0;
		},
		_drag: function(e) {
			if (this.loading || this.stopped) {
				e.stopPropagation();
				e.detail.gesture.preventDefault();
				return;
			}
			var detail = e.detail;
			if (!this.isDragging) {
				if (detail.direction === 'down' && this._canPullDown()) {
					if (document.querySelector('.' + CLASS_PULL_TOP_TIPS)) {
						e.stopPropagation();
						e.detail.gesture.preventDefault();
						return;
					}
					this.isDragging = true;
					this.removing = false;
					this.startDeltaY = detail.deltaY;
					$.gestures.session.lockDirection = true; //锁定方向
					$.gestures.session.startDirection = detail.direction;
					this._pullStart(this.startDeltaY);
				}
			}
			if (this.isDragging) {
				e.stopPropagation();
				e.detail.gesture.preventDefault();
				var deltaY = detail.deltaY - this.startDeltaY;
				deltaY = Math.min(deltaY, 1.5 * this.options.down.height);
				this.deltaY = deltaY;
				this._pulling(deltaY);
				var state = deltaY > this.options.down.height ? STATE_AFTERCHANGEOFFSET : STATE_BEFORECHANGEOFFSET;
				if (this.state !== state) {
					this.state = state;
					if (this.state === STATE_AFTERCHANGEOFFSET) {
						this.removing = false;
						this.isNeedRefresh = true;
					} else {
						this.removing = true;
						this.isNeedRefresh = false;
					}
					this['_' + state](deltaY);
				}
				if ($.os.ios && parseFloat($.os.version) >= 8) {
					var clientY = detail.gesture.touches[0].clientY;
					if ((clientY + 10) > window.innerHeight || clientY < 10) {
						this._dragend(e);
						return;
					}
				}
			}
		},
		_dragend: function(e) {
			var self = this;
			if (self.isDragging) {
				self.isDragging = false;
				self._dragEndAfterChangeOffset(self.isNeedRefresh);
			}
			if (self.isPullingUp) {
				if (self.pullingUpTimeout) {
					clearTimeout(self.pullingUpTimeout);
				}
				self.pullingUpTimeout = setTimeout(function() {
					self.isPullingUp = false;
				}, 1000);
			}
		},
		_pullStart: function(startDeltaY) {
			this.pullStart(startDeltaY);
			$.trigger(this.element, EVENT_PULLSTART, {
				api: this,
				startDeltaY: startDeltaY
			});
		},
		_pulling: function(deltaY) {
			this.pulling(deltaY);
			$.trigger(this.element, EVENT_PULLING, {
				api: this,
				deltaY: deltaY
			});
		},
		_beforeChangeOffset: function(deltaY) {
			this.beforeChangeOffset(deltaY);
			$.trigger(this.element, EVENT_BEFORECHANGEOFFSET, {
				api: this,
				deltaY: deltaY
			});
		},
		_afterChangeOffset: function(deltaY) {
			this.afterChangeOffset(deltaY);
			$.trigger(this.element, EVENT_AFTERCHANGEOFFSET, {
				api: this,
				deltaY: deltaY
			});
		},
		_dragEndAfterChangeOffset: function(isNeedRefresh) {
			this.dragEndAfterChangeOffset(isNeedRefresh);
			$.trigger(this.element, EVENT_DRAGENDAFTERCHANGEOFFSET, {
				api: this,
				isNeedRefresh: isNeedRefresh
			});
		},
		removePullDownTips: function() {
			if (this.pullDownTips) {
				try {
					this.pullDownTips.parentNode && this.pullDownTips.parentNode.removeChild(this.pullDownTips);
					this.pullDownTips = null;
					this.removing = false;
				} catch (e) {}
			}
		},
		pullStart: function(startDeltaY) {
			this.initPullDownTips(startDeltaY);
		},
		pulling: function(deltaY) {
			this.pullDownTips.style.webkitTransform = 'translate3d(0,' + deltaY + 'px,0)';
		},
		beforeChangeOffset: function(deltaY) {
			this.pullDownTipsIcon.className = CLASS_PULL_TOP_ARROW;
		},
		afterChangeOffset: function(deltaY) {
			this.pullDownTipsIcon.className = CLASS_PULL_TOP_ARROW_REVERSE;
		},
		dragEndAfterChangeOffset: function(isNeedRefresh) {
			if (isNeedRefresh) {
				this.pullDownTipsIcon.className = CLASS_PULL_TOP_SPINNER;
				this.pullDownLoading();
			} else {
				this.pullDownTipsIcon.className = CLASS_PULL_TOP_ARROW;
				this.endPullDownToRefresh();
			}
		},
		pullDownLoading: function() {
			if (this.loading) {
				return;
			}
			if (!this.pullDownTips) {
				this.initPullDownTips();
				this.dragEndAfterChangeOffset(true);
				return;
			}
			this.loading = true;
			this.pullDownTips.classList.add(CLASS_TRANSITIONING);
			this.pullDownTips.style.webkitTransform = 'translate3d(0,' + this.options.down.height + 'px,0)';
			this.options.down.callback.apply(this);
		},
		pullUpLoading: function(e) {
			if (this.loading || this.finished) {
				return;
			}
			this.loading = true;
			this.isDraggingUp = false;
			this.pullUpTips.classList.remove(CLASS_HIDDEN);
			e && e.detail && e.detail.gesture && e.detail.gesture.preventDefault();
			this.pullUpTipsIcon.innerHTML = this.options.up.contentrefresh;
			this.options.up.callback.apply(this);
		},
		endPullDownToRefresh: function() {
			this.loading = false;
			this.pullUpTips && this.pullUpTips.classList.remove(CLASS_HIDDEN);
			this.pullDownTips.classList.add(CLASS_TRANSITIONING);
			this.pullDownTips.style.webkitTransform = 'translate3d(0,0,0)';
			if (this.deltaY <= 0) {
				this.removePullDownTips();
			} else {
				this.removing = true;
			}
		},
		endPullUpToRefresh: function(finished) {
			if (finished) {
				this.finished = true;
				this.pullUpTipsIcon.innerHTML = this.options.up.contentnomore;
				this.element.removeEventListener('dragup', this);
				window.removeEventListener('scroll', this);
			} else {
				this.pullUpTipsIcon.innerHTML = this.options.up.contentdown;
			}
			this.loading = false;
		},
		setStopped: function(stopped) {
			if (stopped != this.stopped) {
				this.stopped = stopped;
				this.pullUpTips && this.pullUpTips.classList[stopped ? 'add' : 'remove'](CLASS_HIDDEN);
			}
		},
		refresh: function(isReset) {
			if (isReset && this.finished && this.pullUpTipsIcon) {
				this.pullUpTipsIcon.innerHTML = this.options.up.contentdown;
				this.element.addEventListener('dragup', this);
				window.addEventListener('scroll', this);
				this.finished = false;
			}
		}
	});
	$.fn.pullToRefresh = function(options) {
		var pullRefreshApis = [];
		options = options || {};
		this.each(function() {
			var self = this;
			var pullRefreshApi = null;
			var id = self.getAttribute('data-pullToRefresh');
			if (!id) {
				id = ++$.uuid;
				$.data[id] = pullRefreshApi = new $.PullToRefresh(self, options);
				self.setAttribute('data-pullToRefresh', id);
			} else {
				pullRefreshApi = $.data[id];
			}
			if (options.up && options.up.auto) { //如果设置了auto，则自动上拉一次
				pullRefreshApi.pullUpLoading();
			}
			pullRefreshApis.push(pullRefreshApi);
		});
		return pullRefreshApis.length === 1 ? pullRefreshApis[0] : pullRefreshApis;
	}
})(mui, window, document);
define("pullToRefresh", function(){});

(function($) {
	var CLASS_PULL_TOP_TIPS = $.className('pull-top-tips');

	$.PullToRefresh = $.PullToRefresh.extend({
		init: function(element, options) {
			this._super(element, options);
			this.options = $.extend(true, {
				down: {
					tips: {
						colors: ['008000', 'd8ad44', 'd00324', 'dc00b8', '017efc'],
						size: 200, //width=height=size;x=y=size/2;radius=size/4
						lineWidth: 15,
						duration: 1000,
						tail_duration: 1000 * 2.5
					}
				}
			}, this.options);
			this.options.down.tips.color = this.options.down.tips.colors[0];
			this.options.down.tips.colors = this.options.down.tips.colors.map(function(color) {
				return {
					r: parseInt(color.substring(0, 2), 16),
					g: parseInt(color.substring(2, 4), 16),
					b: parseInt(color.substring(4, 6), 16)
				};
			});
		},
		initPullDownTips: function() {
			var self = this;
			if ($.isFunction(self.options.down.callback)) {
				self.pullDownTips = (function() {
					var element = document.querySelector('.' + CLASS_PULL_TOP_TIPS);
					if (element) {
						element.parentNode.removeChild(element);
					}
					if (!element) {
						element = document.createElement('div');
						element.classList.add(CLASS_PULL_TOP_TIPS);
						element.innerHTML = '<div class="mui-pull-top-wrapper"><div class="mui-pull-top-canvas"><canvas id="pullDownTips" width="' + self.options.down.tips.size + '" height="' + self.options.down.tips.size + '"></canvas></div></div>';
						element.addEventListener('webkitTransitionEnd', self);
						document.body.appendChild(element);
					}
					self.pullDownCanvas = document.getElementById("pullDownTips");
					self.pullDownCanvasCtx = self.pullDownCanvas.getContext('2d');
					self.canvasUtils.init(self.pullDownCanvas, self.options.down.tips);
					return element;
				}());
			}
		},
		removePullDownTips: function() {
			this._super();
			this.canvasUtils.stopSpin();
		},
		pulling: function(deltaY) {
			var ratio = Math.min(deltaY / (this.options.down.height * 1.5), 1);
			var ratioPI = Math.min(1, ratio * 2);
			this.pullDownTips.style.webkitTransform = 'translate3d(0,' + (deltaY < 0 ? 0 : deltaY) + 'px,0)';
			this.pullDownCanvas.style.opacity = ratioPI;
			this.pullDownCanvas.style.webkitTransform = 'rotate(' + 300 * ratio + 'deg)';
			var canvas = this.pullDownCanvas;
			var ctx = this.pullDownCanvasCtx;
			var size = this.options.down.tips.size;
			ctx.lineWidth = this.options.down.tips.lineWidth;
			ctx.fillStyle = '#' + this.options.down.tips.color;
			ctx.strokeStyle = '#' + this.options.down.tips.color;
			ctx.stroke();
			ctx.clearRect(0, 0, size, size);
			//fixed android 4.1.x
			canvas.style.display = 'none'; // Detach from DOM
			canvas.offsetHeight; // Force the detach
			canvas.style.display = 'inherit'; // Reattach to DOM
			this.canvasUtils.drawArcedArrow(ctx, size / 2 + 0.5, size / 2, size / 4, 0 * Math.PI, 5 / 3 * Math.PI * ratioPI, false, 1, 2, 0.7853981633974483, 25, this.options.down.tips.lineWidth, this.options.down.tips.lineWidth);
		},

		beforeChangeOffset: function(deltaY) {},
		afterChangeOffset: function(deltaY) {},
		dragEndAfterChangeOffset: function(isNeedRefresh) {
			if (isNeedRefresh) {
				this.canvasUtils.startSpin();
				this.pullDownLoading();
			} else {
				this.canvasUtils.stopSpin();
				this.endPullDownToRefresh();
			}
		},
		canvasUtils: (function() {
			var canvasObj = null,
				ctx = null,
				size = 200,
				lineWidth = 15,
				tick = 0,
				startTime = 0,
				frameTime = 0,
				timeLast = 0,
				oldStep = 0,
				acc = 0,
				head = 0,
				tail = 180,
				rad = Math.PI / 180,
				duration = 1000,
				tail_duration = 1000 * 2.5,
				colors = ['35ad0e', 'd8ad44', 'd00324', 'dc00b8', '017efc'],
				rAF = null;

			function easeLinear(currentIteration, startValue, changeInValue, totalIterations) {
				return changeInValue * currentIteration / totalIterations + startValue;
			}

			function easeInOutQuad(currentIteration, startValue, changeInValue, totalIterations) {
				if ((currentIteration /= totalIterations / 2) < 1) {
					return changeInValue / 2 * currentIteration * currentIteration + startValue;
				}
				return -changeInValue / 2 * ((--currentIteration) * (currentIteration - 2) - 1) + startValue;
			}

			function minmax(value, v0, v1) {
				var min = Math.min(v0, v1);
				var max = Math.max(v0, v1);
				if (value < min)
					return min;
				if (value > max)
					return min;
				return value;
			}
			var drawHead = function(ctx, x0, y0, x1, y1, x2, y2, style) {
				
				if (typeof(x0) == 'string') x0 = parseInt(x0);
				if (typeof(y0) == 'string') y0 = parseInt(y0);
				if (typeof(x1) == 'string') x1 = parseInt(x1);
				if (typeof(y1) == 'string') y1 = parseInt(y1);
				if (typeof(x2) == 'string') x2 = parseInt(x2);
				if (typeof(y2) == 'string') y2 = parseInt(y2);
				var radius = 3;
				var twoPI = 2 * Math.PI;
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x0, y0);
				ctx.lineTo(x1, y1);
				ctx.lineTo(x2, y2);
				switch (style) {
					case 0:
						var backdist = Math.sqrt(((x2 - x0) * (x2 - x0)) + ((y2 - y0) * (y2 - y0)));
						ctx.arcTo(x1, y1, x0, y0, .55 * backdist);
						ctx.fill();
						break;
					case 1:
						ctx.beginPath();
						ctx.moveTo(x0, y0);
						ctx.lineTo(x1, y1);
						ctx.lineTo(x2, y2);
						ctx.lineTo(x0, y0);
						ctx.fill();
						break;
					case 2:
						ctx.stroke();
						break;
					case 3:
						var cpx = (x0 + x1 + x2) / 3;
						var cpy = (y0 + y1 + y2) / 3;
						ctx.quadraticCurveTo(cpx, cpy, x0, y0);
						ctx.fill();
						break;
					case 4:
						var cp1x, cp1y, cp2x, cp2y, backdist;
						var shiftamt = 5;
						if (x2 == x0) {
							backdist = y2 - y0;
							cp1x = (x1 + x0) / 2;
							cp2x = (x1 + x0) / 2;
							cp1y = y1 + backdist / shiftamt;
							cp2y = y1 - backdist / shiftamt;
						} else {
							backdist = Math.sqrt(((x2 - x0) * (x2 - x0)) + ((y2 - y0) * (y2 - y0)));
							var xback = (x0 + x2) / 2;
							var yback = (y0 + y2) / 2;
							var xmid = (xback + x1) / 2;
							var ymid = (yback + y1) / 2;
							var m = (y2 - y0) / (x2 - x0);
							var dx = (backdist / (2 * Math.sqrt(m * m + 1))) / shiftamt;
							var dy = m * dx;
							cp1x = xmid - dx;
							cp1y = ymid - dy;
							cp2x = xmid + dx;
							cp2y = ymid + dy;
						}
						ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x0, y0);
						ctx.fill();
						break;
				}
				ctx.restore();
			};
			var drawArcedArrow = function(ctx, x, y, r, startangle, endangle, anticlockwise, style, which, angle, d, lineWidth, lineRatio) {
				
				style = typeof(style) != 'undefined' ? style : 3;
				which = typeof(which) != 'undefined' ? which : 1;
				angle = typeof(angle) != 'undefined' ? angle : Math.PI / 8;
				lineWidth = lineWidth || 1;
				lineRatio = lineRatio || 10;
				d = typeof(d) != 'undefined' ? d : 10;
				ctx.save();
				ctx.lineWidth = lineWidth;
				ctx.beginPath();
				ctx.arc(x, y, r, startangle, endangle, anticlockwise);
				ctx.stroke();
				var sx, sy, lineangle, destx, desty;
				if (which & 1) {
					sx = Math.cos(startangle) * r + x;
					sy = Math.sin(startangle) * r + y;
					lineangle = Math.atan2(x - sx, sy - y);
					if (anticlockwise) {
						destx = sx + 10 * Math.cos(lineangle);
						desty = sy + 10 * Math.sin(lineangle);
					} else {
						destx = sx - 10 * Math.cos(lineangle);
						desty = sy - 10 * Math.sin(lineangle);
					}
					drawArrow(ctx, sx, sy, destx, desty, style, 2, angle, d);
				}
				if (which & 2) {
					sx = Math.cos(endangle) * r + x;
					sy = Math.sin(endangle) * r + y;
					lineangle = Math.atan2(x - sx, sy - y);
					if (anticlockwise) {
						destx = sx - 10 * Math.cos(lineangle);
						desty = sy - 10 * Math.sin(lineangle);
					} else {
						destx = sx + 10 * Math.cos(lineangle);
						desty = sy + 10 * Math.sin(lineangle);
					}
					drawArrow(ctx, sx - lineRatio * Math.sin(endangle), sy + lineRatio * Math.cos(endangle), destx - lineRatio * Math.sin(endangle), desty + lineRatio * Math.cos(endangle), style, 2, angle, d)
				}
				ctx.restore();
			}
			var drawArrow = function(ctx, x1, y1, x2, y2, style, which, angle, d) {
				
				if (typeof(x1) == 'string') x1 = parseInt(x1);
				if (typeof(y1) == 'string') y1 = parseInt(y1);
				if (typeof(x2) == 'string') x2 = parseInt(x2);
				if (typeof(y2) == 'string') y2 = parseInt(y2);
				style = typeof(style) != 'undefined' ? style : 3;
				which = typeof(which) != 'undefined' ? which : 1;
				angle = typeof(angle) != 'undefined' ? angle : Math.PI / 8;
				d = typeof(d) != 'undefined' ? d : 10;
				var toDrawHead = typeof(style) != 'function' ? drawHead : style;
				var dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
				var ratio = (dist - d / 3) / dist;
				var tox, toy, fromx, fromy;
				if (which & 1) {
					tox = Math.round(x1 + (x2 - x1) * ratio);
					toy = Math.round(y1 + (y2 - y1) * ratio);
				} else {
					tox = x2;
					toy = y2;
				}
				if (which & 2) {
					fromx = x1 + (x2 - x1) * (1 - ratio);
					fromy = y1 + (y2 - y1) * (1 - ratio);
				} else {
					fromx = x1;
					fromy = y1;
				}
				ctx.beginPath();
				ctx.moveTo(fromx, fromy);
				ctx.lineTo(tox, toy);
				ctx.stroke();
				var lineangle = Math.atan2(y2 - y1, x2 - x1);
				var h = Math.abs(d / Math.cos(angle));
				if (which & 1) {
					var angle1 = lineangle + Math.PI + angle;
					var topx = x2 + Math.cos(angle1) * h;
					var topy = y2 + Math.sin(angle1) * h;
					var angle2 = lineangle + Math.PI - angle;
					var botx = x2 + Math.cos(angle2) * h;
					var boty = y2 + Math.sin(angle2) * h;
					toDrawHead(ctx, topx, topy, x2, y2, botx, boty, style);
				}
				if (which & 2) {
					var angle1 = lineangle + angle;
					var topx = x1 + Math.cos(angle1) * h;
					var topy = y1 + Math.sin(angle1) * h;
					var angle2 = lineangle - angle;
					var botx = x1 + Math.cos(angle2) * h;
					var boty = y1 + Math.sin(angle2) * h;
					toDrawHead(ctx, topx, topy, x1, y1, botx, boty, style);
				}
			};

			var spinColors = function(currentIteration, totalIterations) {
				var step = currentIteration % totalIterations;
				if (step < oldStep)
					colors.push(colors.shift());
				var c0 = colors[0],
					c1 = colors[1],
					r = minmax(easeLinear(step, c0.r, c1.r - c0.r, totalIterations), c0.r, c1.r),
					g = minmax(easeLinear(step, c0.g, c1.g - c0.g, totalIterations), c0.g, c1.g),
					b = minmax(easeLinear(step, c0.b, c1.b - c0.b, totalIterations), c0.b, c1.b);

				oldStep = step;
				return "rgb(" + parseInt(r) + "," + parseInt(g) + "," + parseInt(b) + ")";
			}

			var spin = function(t) {
				var timeCurrent = t || (new Date).getTime();
				if (!startTime) {
					startTime = timeCurrent;
				}
				tick = timeCurrent - startTime;
				acc = easeInOutQuad((tick + tail_duration / 2) % tail_duration, 0, duration, tail_duration);
				head = easeLinear((tick + acc) % duration, 0, 360, duration);
				tail = 20 + Math.abs(easeLinear((tick + tail_duration / 2) % tail_duration, -300, 600, tail_duration));

				ctx.lineWidth = lineWidth;
				ctx.lineCap = "round";

				ctx.strokeStyle = spinColors(tick, duration);
				ctx.clearRect(0, 0, size, size);
				//fixed android 4.1.x
				canvasObj.style.display = 'none'; // Detach from DOM
				canvasObj.offsetHeight; // Force the detach
				canvasObj.style.display = 'inherit'; // Reattach to DOM
				ctx.beginPath();
				ctx.arc(size / 2, size / 2, size / 4, parseInt(head - tail) % 360 * rad, parseInt(head) % 360 * rad, false);
				ctx.stroke();

				rAF = requestAnimationFrame(spin);
			};
			var startSpin = function() {
				startTime = 0;
				oldStep = 0;
				rAF = requestAnimationFrame(spin);
			};
			var stopSpin = function() {
				rAF && cancelAnimationFrame(rAF);
			}
			var init = function(canvas, options) {
				canvasObj = canvas;
				ctx = canvasObj.getContext('2d');
				var options = $.extend(true, {}, options);
				colors = options.colors;
				duration = options.duration;
				tail_duration = options.tail_duration;
				size = options.size;
				lineWidth = options.lineWidth;
			};
			return {
				init: init,
				drawArcedArrow: drawArcedArrow,
				startSpin: startSpin,
				stopSpin: stopSpin
			};
		})()
	});
})(mui);
define("material", function(){});

/*
 Highstock JS v4.2.5 (2016-05-06)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(L,ga){typeof module==="object"&&module.exports?module.exports=L.document?ga(L):ga:L.Highcharts=ga(L)})(typeof window!=="undefined"?window:this,function(L){function ga(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw Error(c);L.console&&console.log(c)}function xb(a,b,c){this.options=b;this.elem=a;this.prop=c}function z(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&
Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function K(a,b){return parseInt(a,b||10)}function Ca(a){return typeof a==="string"}function ea(a){return a&&typeof a==="object"}function Ja(a){return Object.prototype.toString.call(a)==="[object Array]"}function za(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);
break}}function v(a){return a!==t&&a!==null}function X(a,b,c){var d,e;if(Ca(b))v(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(v(b)&&ea(b))for(d in b)a.setAttribute(d,b[d]);return e}function ua(a){return Ja(a)?a:[a]}function Za(a,b,c){if(b)return setTimeout(a,b,c);a.call(0,c)}function N(a,b){if(Ka&&!ja&&b&&b.opacity!==t)b.filter="alpha(opacity="+b.opacity*100+")";A(a.style,b)}function fa(a,b,c,d,e){a=H.createElement(a);b&&A(a,b);e&&N(a,{padding:0,border:"none",margin:0});
c&&N(a,c);d&&d.appendChild(a);return a}function ma(a,b){var c=function(){};c.prototype=new a;A(c.prototype,b);return c}function Oa(a,b,c){return Array((b||2)+1-String(a).length).join(c||0)+a}function eb(a){return(fb&&fb(a)||yb||0)*6E4}function La(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=R.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:
-1,e!==null&&(e=B.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=na(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function zb(a){return Y.pow(10,V(Y.log(a)/Y.LN10))}function Ab(a,b,c,d,e){var f,g=a,c=q(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function nb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].safeI=e;a.sort(function(a,
c){d=b(a,c);return d===0?a.safeI-c.safeI:d});for(e=0;e<c;e++)delete a[e].safeI}function Ma(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Da(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Pa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Ua(a){ob||(ob=fa(Va));a&&ob.appendChild(a);ob.innerHTML=""}function ka(a,b){return parseFloat(a.toPrecision(b||14))}function $a(a,b){b.renderer.globalAnimation=q(a,b.animation)}function gb(a){return ea(a)?
z(a):{duration:a?500:0}}function Ob(){var a=R.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";ba=a.Date||L.Date;yb=b&&a.timezoneOffset;fb=b&&a.getTimezoneOffset;pb=function(a,c,d,h,i,j){var k;b?(k=ba.UTC.apply(0,arguments),k+=eb(k)):k=(new ba(a,c,q(d,1),q(h,0),q(i,0),q(j,0))).getTime();return k};Bb=c+"Minutes";Cb=c+"Hours";Db=c+"Day";ab=c+"Date";hb=c+"Month";ib=c+"FullYear";Pb=d+"Milliseconds";Qb=d+"Seconds";Rb=d+"Minutes";Sb=d+"Hours";qb=d+"Date";Eb=d+"Month";Fb=d+"FullYear"}function va(a){if(!(this instanceof
va))return new va(a);this.init(a)}function Z(){}function bb(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Tb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:q(b.y,f?4:c?14:-6),x:q(b.x,f?c?-6:6:0)};this.textAlign=
b.textAlign||(f?c?"right":"left":"center")}function Gb(a){var b=a.options,c=b.navigator,d=c.enabled,b=b.scrollbar,e=b.enabled,f=d?c.height:0,g=e?b.height:0;this.handles=[];this.scrollbarButtons=[];this.elementsToDestroy=[];this.chart=a;this.setBaseSeries();this.height=f;this.scrollbarHeight=g;this.scrollbarEnabled=e;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=b;this.outlineHeight=f+g;this.init()}function Hb(a){this.init(a)}var t,H=L.document,Y=Math,y=Y.round,V=Y.floor,Ea=
Y.ceil,w=Y.max,G=Y.min,S=Y.abs,ca=Y.cos,la=Y.sin,Aa=Y.PI,pa=Aa*2/360,Na=L.navigator&&L.navigator.userAgent||"",Ub=L.opera,Ka=/(msie|trident|edge)/i.test(Na)&&!Ub,rb=H&&H.documentMode===8,sb=!Ka&&/AppleWebKit/.test(Na),Wa=/Firefox/.test(Na),jb=/(Mobile|Android|Windows Phone)/.test(Na),Qa="http://www.w3.org/2000/svg",ja=H&&H.createElementNS&&!!H.createElementNS(Qa,"svg").createSVGRect,Zb=Wa&&parseInt(Na.split("Firefox/")[1],10)<4,qa=H&&!ja&&!Ka&&!!H.createElement("canvas").getContext,Xa,cb,Vb={},Ib=
0,ob,R,na,M,ra=function(){},$=[],kb=0,Va="div",$b=/^[0-9]+$/,tb=["plotTop","marginRight","marginBottom","plotLeft"],ba,pb,yb,fb,Bb,Cb,Db,ab,hb,ib,Pb,Qb,Rb,Sb,qb,Eb,Fb,I={},B;B=L.Highcharts?ga(16,!0):{win:L};B.seriesTypes=I;var Ra=[],wa,sa,o,Fa,Jb,ta,E,T,O,db,Sa;xb.prototype={dSetter:function(){var a=this.paths[0],b=this.paths[1],c=[],d=this.now,e=a.length,f;if(d===1)c=this.toD;else if(e===b.length&&d<1)for(;e--;)f=parseFloat(a[e]),c[e]=isNaN(f)?a[e]:d*parseFloat(b[e]-f)+f;else c=b;this.elem.attr("d",
c)},update:function(){var a=this.elem,b=this.prop,c=this.now,d=this.options.step;if(this[b+"Setter"])this[b+"Setter"]();else a.attr?a.element&&a.attr(b,c):a.style[b]=c+this.unit;d&&d.call(a,c,this)},run:function(a,b,c){var d=this,e=function(a){return e.stopped?!1:d.step(a)},f;this.startTime=+new ba;this.start=a;this.end=b;this.unit=c;this.now=this.start;this.pos=0;e.elem=this.elem;if(e()&&Ra.push(e)===1)e.timerId=setInterval(function(){for(f=0;f<Ra.length;f++)Ra[f]()||Ra.splice(f--,1);Ra.length||
clearInterval(e.timerId)},13)},step:function(a){var b=+new ba,c,d=this.options;c=this.elem;var e=d.complete,f=d.duration,g=d.curAnim,h;if(c.attr&&!c.element)c=!1;else if(a||b>=f+this.startTime){this.now=this.end;this.pos=1;this.update();a=g[this.prop]=!0;for(h in g)g[h]!==!0&&(a=!1);a&&e&&e.call(c);c=!1}else this.pos=d.easing((b-this.startTime)/f),this.now=this.start+(this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?
7:3,g,b=b.split(" "),c=[].concat(c),h=a.isArea,i=h?2:1,j=function(a){for(g=a.length;g--;)(a[g]==="M"||a[g]==="L")&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=c.slice(0,f).concat(c),h&&(c=c.concat(c.slice(c.length-f)));a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=b.slice().splice(b.length/i-f,f*i),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),[].splice.apply(b,[b.length/i,0].concat(d));return[b,c]}};var A=B.extend=function(a,b){var c;a||(a=
{});for(c in b)a[c]=b[c];return a},C=B.isNumber=function(a){return typeof a==="number"&&!isNaN(a)},q=B.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==t&&c!==null)return c},U=B.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};na=function(a,b,c){if(!C(b))return R.lang.invalidDate||"";var a=q(a,"%Y-%m-%d %H:%M:%S"),d=new ba(b-eb(b)),e,f=d[Cb](),g=d[Db](),h=d[ab](),i=d[hb](),j=d[ib](),k=R.lang,
l=k.weekdays,m=k.shortWeekdays,d=A({a:m?m[g]:l[g].substr(0,3),A:l[g],d:Oa(h),e:Oa(h,2," "),w:g,b:k.shortMonths[i],B:k.months[i],m:Oa(i+1),y:j.toString().substr(2,2),Y:j,H:Oa(f),k:f,I:Oa(f%12||12),l:f%12||12,M:Oa(d[Bb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Oa(d.getSeconds()),L:Oa(y(b%1E3),3)},B.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};M={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};B.numberFormat=function(a,b,c,d){var a=+a||0,b=+b,e=R.lang,f=(a.toString().split(".")[1]||"").length,g,h,i=Math.abs(a);b===-1?b=Math.min(f,20):C(b)||(b=2);g=String(K(i.toFixed(b)));h=g.length>3?g.length%3:0;c=q(c,e.decimalPoint);d=q(d,e.thousandsSep);a=a<0?"-":"";a+=h?g.substr(0,h)+d:"";a+=g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d);b&&(d=Math.abs(i-g+Math.pow(10,-Math.max(b,f)-1)),a+=c+d.toFixed(b).slice(2));return a};Math.easeInOutSine=function(a){return-0.5*
(Math.cos(Math.PI*a)-1)};wa=function(a,b){var c;if(b==="width")return Math.min(a.offsetWidth,a.scrollWidth)-wa(a,"padding-left")-wa(a,"padding-right");else if(b==="height")return Math.min(a.offsetHeight,a.scrollHeight)-wa(a,"padding-top")-wa(a,"padding-bottom");return(c=L.getComputedStyle(a,void 0))&&K(c.getPropertyValue(b))};sa=function(a,b){return b.indexOf?b.indexOf(a):[].indexOf.call(b,a)};Fa=function(a,b){return[].filter.call(a,b)};ta=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],
a[d],d,a);return c};Jb=function(a){var b=H.documentElement,a=a.getBoundingClientRect();return{top:a.top+(L.pageYOffset||b.scrollTop)-(b.clientTop||0),left:a.left+(L.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};Sa=function(a){for(var b=Ra.length;b--;)if(Ra[b].elem===a)Ra[b].stopped=!0};o=function(a,b){return Array.prototype.forEach.call(a,b)};E=function(a,b,c){function d(b){b.target=b.srcElement||L;c.call(a,b)}var e=a.hcEvents=a.hcEvents||{};if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){if(!a.hcEventsIE)a.hcEventsIE=
{};a.hcEventsIE[c.toString()]=d;a.attachEvent("on"+b,d)}e[b]||(e[b]=[]);e[b].push(c)};T=function(a,b,c){function d(b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&(c=a.hcEventsIE[c.toString()],a.detachEvent("on"+b,c))}function e(){var c,e,f;if(a.nodeName)for(f in b?(c={},c[b]=!0):c=g,c)if(g[f])for(e=g[f].length;e--;)d(f,g[f][e])}var f,g=a.hcEvents,h;if(g)b?(f=g[b]||[],c?(h=sa(c,f),h>-1&&(f.splice(h,1),g[b]=f),d(b,c)):(e(),g[b]=[])):(e(),a.hcEvents={})};O=function(a,b,c,d){var e;
e=a.hcEvents;var f,g,c=c||{};if(H.createEvent&&(a.dispatchEvent||a.fireEvent))e=H.createEvent("Events"),e.initEvent(b,!0,!0),e.target=a,A(e,c),a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(b,e);else if(e){e=e[b]||[];f=e.length;if(!c.preventDefault)c.preventDefault=function(){c.defaultPrevented=!0};c.target=a;if(!c.type)c.type=b;for(b=0;b<f;b++)g=e[b],g.call(a,c)===!1&&c.preventDefault()}d&&!c.defaultPrevented&&d(c)};db=function(a,b,c){var d,e="",f,g,h;ea(c)||(d=arguments,c={duration:d[2],easing:d[3],
complete:d[4]});if(!C(c.duration))c.duration=400;c.easing=typeof c.easing==="function"?c.easing:Math[c.easing]||Math.easeInOutSine;c.curAnim=z(b);for(h in b)g=new xb(a,c,h),f=null,h==="d"?(g.paths=g.initPath(a,a.d,b.d),g.toD=b.d,d=0,f=1):a.attr?d=a.attr(h):(d=parseFloat(wa(a,h))||0,h!=="opacity"&&(e="px")),f||(f=b[h]),f.match&&f.match("px")&&(f=f.replace(/px/g,"")),g.run(d,f,e)};if(L.jQuery)L.jQuery.fn.highcharts=function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (B[Ca(a[0])?a.shift():
"Chart"])(this[0],a[0],a[1]),this):$[X(this[0],"data-highcharts-chart")]};H&&!H.defaultView&&(wa=function(a,b){var c;c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return K(a.style[b]);b==="opacity"&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-2*wa(a,"padding"),0);c=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];b==="filter"&&(c=c.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/100}));return c===""?1:K(c)});Array.prototype.forEach||
(o=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c});Array.prototype.indexOf||(sa=function(a,b){var c,d=0;if(b)for(c=b.length;d<c;d++)if(b[d]===a)return d;return-1});Array.prototype.filter||(Fa=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c});B.Fx=xb;B.inArray=sa;B.each=o;B.grep=Fa;B.offset=Jb;B.map=ta;B.addEvent=E;B.removeEvent=T;B.fireEvent=O;B.animate=db;B.animObject=gb;B.stop=Sa;R={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,
canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/stock/4.2.5/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"},widthAdjust:-44},
subtitle:{text:"",align:"center",style:{color:"#555555"},widthAdjust:-44},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===null?"":B.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",
fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",
inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ja,backgroundColor:"rgba(249, 249, 249, .85)",
borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:jb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",
padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var W=R.plotOptions,da=W.line;Ob();va.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[K(a[1]),K(a[2]),K(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
parse:function(a){return[K(a[1],16),K(a[2],16),K(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[K(a[1]),K(a[2]),K(a[3]),1]}}],init:function(a){var b,c,d,e;if((this.input=a)&&a.stops)this.stops=ta(a.stops,function(a){return new va(a[1])});else for(d=this.parsers.length;d--&&!c;)e=this.parsers[d],(b=e.regex.exec(a))&&(c=e.parse(b));this.rgba=c||[]},get:function(a){var b=this.input,c=this.rgba,d;this.stops?(d=z(b),d.stops=[].concat(d.stops),
o(this.stops,function(b,c){d.stops[c]=[d.stops[c][0],b.get(a)]})):d=c&&C(c[0])?a==="rgb"||!a&&c[3]===1?"rgb("+c[0]+","+c[1]+","+c[2]+")":a==="a"?c[3]:"rgba("+c.join(",")+")":b;return d},brighten:function(a){var b,c=this.rgba;if(this.stops)o(this.stops,function(b){b.brighten(a)});else if(C(a)&&a!==0)for(b=0;b<3;b++)c[b]+=K(a*255),c[b]<0&&(c[b]=0),c[b]>255&&(c[b]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};Z.prototype={opacity:1,textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
init:function(a,b){this.element=b==="span"?fa(b):H.createElementNS(Qa,b);this.renderer=a},animate:function(a,b,c){b=q(b,this.renderer.globalAnimation,!0);Sa(this);if(b){if(c)b.complete=c;db(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,m,n,p,r=[],s;a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;k=a.stops;n=c.radialReference;Ja(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});
f==="radialGradient"&&n&&!v(g.gradientUnits)&&(h=g,g=z(g,d.getRadialAttr(n,h),{gradientUnits:"userSpaceOnUse"}));for(p in g)p!=="id"&&r.push(p,g[p]);for(p in k)r.push(k[p]);r=r.join(",");i[r]?n=i[r].attr("id"):(g.id=n="highcharts-"+Ib++,i[r]=j=d.createElement(f).attr(g).add(d.defs),j.radAttr=h,j.stops=[],o(k,function(a){a[1].indexOf("rgba")===0?(e=va(a[1]),l=e.get("rgb"),m=e.get("a")):(l=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":l,"stop-opacity":m}).add(j);j.stops.push(a)}));
s="url("+d.url+"#"+n+")";c.setAttribute(b,s);c.gradient=r;a.toString=function(){return s}}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==t&&!Ka;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(sb||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),o(a.split(/\s?,\s?/g),function(a){var d=
b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&o(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);X(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/w(K(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==t&&(d=a,a={},a[d]=b);if(typeof a===
"string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(h=this[d+"Setter"]||this._defaultSetter,h.call(this,b,d,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b,h))}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&
c();return g},updateShadows:function(a,b,c){for(var d=this.shadows,e=d.length;e--;)c.call(d[e],a==="height"?Math.max(b-(d[e].cutHeight||0),0):a==="d"?this.d:b,a,d[e])},addClass:function(a){var b=this.element,c=X(b,"class")||"";c.indexOf(a)===-1&&X(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=q(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",
a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a){var b,c={},d,e=this.strokeWidth||0;d=y(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()===
"text"&&K(a.width)||this.textWidth;b&&(a=A(b,c));this.styles=a;e&&(qa||!ja&&this.renderer.forExport)&&delete a.width;if(Ka&&!ja)N(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";X(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;cb&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=ba.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(Na.indexOf("Android")===
-1||ba.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,
d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(v(c)||v(d))&&a.push("scale("+q(c,1)+" "+q(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;
if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Ca(c))this.alignTo=d=c||"renderer",za(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=q(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=y(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=y(g);this[this.placed?
"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a,b){var c,d=this.renderer,e,f,g,h=this.element,i=this.styles;e=this.textStr;var j,k=h.style,l,m=d.cache,n=d.cacheKeys,p;f=q(b,this.rotation);g=f*pa;e!==t&&(p=["",f||0,i&&i.fontSize,h.style.width].join(","),p=e===""||$b.test(e)?"num:"+e.toString().length+p:e+p);p&&!a&&(c=m[p]);if(!c){if(h.namespaceURI===Qa||d.forExport){try{l=this.fakeTS&&function(a){o(h.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=
a})},Wa&&k.textShadow?(j=k.textShadow,k.textShadow=""):l&&l("none"),c=h.getBBox?A({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight},j?k.textShadow=j:l&&l("")}catch(r){}if(!c||c.width<0)c={width:0,height:0}}else c=this.htmlGetBBox();if(d.isSVG){d=c.width;e=c.height;if(Ka&&i&&i.fontSize==="11px"&&e.toPrecision(3)==="16.9")c.height=e=14;if(f)c.width=S(e*la(g))+S(d*ca(g)),c.height=S(e*ca(g))+S(d*la(g))}if(p){for(;n.length>250;)delete m[n.shift()];m[p]||n.push(p);m[p]=c}}return c},show:function(a){return this.attr({visibility:a?
"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=
a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;Sa(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&o(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,
d=b;a.alignTo&&za(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=q(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+q(a.offsetX,1)+", "+q(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;X(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:"none"});if(c)X(f,"height",w(X(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):
g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=q(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b,c=this["stroke-width"];c===
"inherit"&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=K(a[b])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},
opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=H.createElementNS(Qa,"title"),this.element.appendChild(b));b.firstChild&&b.removeChild(b.firstChild);b.appendChild(H.createTextNode(String(q(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):
a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;if(v(a))g.zIndex=a,a=+a,this[b]===a&&(e=!1),this[b]=a;if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=e.zIndex,e!==g&&(K(f)>a||!v(a)&&v(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,
b,c){c.setAttribute(b,a)}};Z.prototype.yGetter=Z.prototype.xGetter;Z.prototype.translateXSetter=Z.prototype.translateYSetter=Z.prototype.rotationSetter=Z.prototype.verticalAlignSetter=Z.prototype.scaleXSetter=Z.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};Z.prototype["stroke-widthSetter"]=Z.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],Z.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",
this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var xa=function(){this.init.apply(this,arguments)};xa.prototype={Element:Z,init:function(a,b,c,d,e,f){var g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&X(g,"xmlns",Qa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Wa||sb)&&H.getElementsByTagName("base").length?
L.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(H.createTextNode("Created with Highstock 4.2.5"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);var h;if(Wa&&a.getBoundingClientRect)this.subPixelFix=b=function(){N(a,{left:0,top:0});h=a.getBoundingClientRect();N(a,{left:Ea(h.left)-h.left+"px",
top:Ea(h.top)-h.top+"px"})},b(),E(L,"resize",b)},getStyle:function(a){return this.style=A({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Pa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&T(L,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=
new this.Element;b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=q(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j,k=X(b,"x"),l=a.styles,m=a.textWidth,n=l&&l.lineHeight,p=l&&l.textShadow,r=l&&l.textOverflow==="ellipsis",s=g.length,F=m&&!a.added&&this.box,u=function(a){return n?K(n):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?
a.style.fontSize:l&&l.fontSize||c.style.fontSize||12,a).h},x=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};s--;)b.removeChild(g[s]);!f&&!p&&!r&&e.indexOf(" ")===-1?b.appendChild(H.createTextNode(x(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,F&&F.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):
[e],e=Fa(e,function(a){return a!==""}),o(e,function(e,f){var g,n=0,e=e.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");o(g,function(e){if(e!==""||g.length===1){var p={},s=H.createElementNS(Qa,"tspan"),F;h.test(e)&&(F=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),X(s,"style",F));i.test(e)&&!d&&(X(s,"onclick",'location.href="'+e.match(i)[1]+'"'),N(s,{cursor:"pointer"}));e=x(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){s.appendChild(H.createTextNode(e));
if(n)p.dx=0;else if(f&&k!==null)p.x=k;X(s,p);b.appendChild(s);!n&&f&&(!ja&&d&&N(s,{display:"block"}),X(s,"dy",u(s)));if(m){for(var p=e.replace(/([^\^])-/g,"$1- ").split(" "),q=g.length>1||f||p.length>1&&l.whiteSpace!=="nowrap",o,D,v=[],w=u(s),t=1,y=a.rotation,A=e,B=A.length;(q||r)&&(p.length||v.length);)a.rotation=0,o=a.getBBox(!0),D=o.width,!ja&&c.forExport&&(D=c.measureSpanWidth(s.firstChild.data,a.styles)),o=D>m,j===void 0&&(j=o),r&&j?(B/=2,A===""||!o&&B<0.5?p=[]:(A=e.substring(0,A.length+(o?-1:
1)*Ea(B)),p=[A+(m>3?"\u2026":"")],s.removeChild(s.firstChild))):!o||p.length===1?(p=v,v=[],p.length&&(t++,s=H.createElementNS(Qa,"tspan"),X(s,{dy:w,x:k}),F&&X(s,"style",F),b.appendChild(s)),D>m&&(m=D)):(s.removeChild(s.firstChild),v.unshift(p.pop())),p.length&&s.appendChild(H.createTextNode(p.join(" ").replace(/- /g,"-")));a.rotation=y}n++}}})}),j&&a.attr("title",a.textStr),F&&F.removeChild(b),p&&a.applyTextShadow&&a.applyTextShadow(p))},getContrast:function(a){a=va(a).rgba;return a[0]+a[1]+a[2]>
384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,m,n,p,r,s,a={x1:0,y1:0,x2:0,y2:1},e=z({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=z(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);p=f.style;delete f.style;g=z(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);
r=g.style;delete g.style;h=z(e,{style:{color:"#CCC"}},h);s=h.style;delete h.style;E(j.element,Ka?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(p)});E(j.element,Ka?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],m=[n,p,r][k],j.attr(l).css(m))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(r):a===3&&j.attr(h).css(s):j.attr(e).css(n)};return j.on("click",function(a){k!==3&&d.call(j,a)}).attr(e).css(A({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=
y(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=y(a[2])+b%2/2);return a},path:function(a){var b={fill:"none"};Ja(a)?b.d=a:ea(a)&&A(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=ea(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,c){c.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(ea(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,
b,c,d,e,f){var e=ea(a)?a.r:e,g=this.createElement("rect"),a=ea(a)?a:a===t?{}:{x:a,y:b,width:w(c,0),height:w(d,0)};if(f!==t)g.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a,b,c){X(c,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[q(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return v(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,
b,c,d,e){var f={preserveAspectRatio:"none"};arguments.length>1&&A(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g=this,h,i=this.symbols[a],i=i&&i(y(b),y(c),d,e,f),j=/^url\((.*?)\)$/,k,l;if(i)h=this.path(i),A(h,{symbolName:a,x:b,y:c,width:d,height:e}),f&&A(h,f);else if(j.test(a))l=function(a,b){a.element&&
(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(y((d-b[0])/2),y((e-b[1])/2)))},k=a.match(j)[1],a=Vb[k]||f&&f.width&&f.height&&[f.width,f.height],h=this.image(k).attr({x:b,y:c}),h.isImg=!0,a?l(h,a):(h.attr({width:0,height:0}),fa("img",{onload:function(){this.width===0&&(N(this,{position:"absolute",top:"-999em"}),H.body.appendChild(this));l(h,Vb[k]=[this.width,this.height]);this.parentNode&&this.parentNode.removeChild(this);g.imgCount--;if(!g.imgCount&&$[g.chartIndex].onload)$[g.chartIndex].onload()},
src:k}),this.imgCount++);return h},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,
c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=ca(f),j=la(f),k=ca(g),g=la(g),e=e.end-f<Aa?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=G(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+
c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+Ib++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=qa||!ja&&this.forExport,f={};if(d&&(this.allowHTML||
!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;!a&&b&&L.getComputedStyle&&(b=b.element||b,a=(c=L.getComputedStyle(b,
""))&&c.fontSize);a=/px/.test(a)?K(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:y(a*1.2);d=y(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=w(d*ca(b*pa),4));return{x:-a/3*la(b*pa),y:d}},label:function(a,b,c,d,e,f,g,h,i){var j=this,k=j.g(i),l=j.text("",0,0,g).attr({zIndex:1}),m,n,p=0,r=3,s=0,F,u,q,D,Q=0,ha={},w,B,Kb,G,C;Kb=function(){var a,b;a=l.element.style;n=(F===void 0||u===void 0||k.styles.textAlign)&&v(l.textStr)&&l.getBBox();k.width=(F||n.width||0)+2*r+s;k.height=(u||
n.height||0)+2*r;w=r+j.fontMetrics(a&&a.fontSize,l).b;if(B){if(!m)a=Q,b=(h?-w:0)+Q,k.box=m=d?j.symbol(d,a,b,k.width,k.height,ha):j.rect(a,b,k.width,k.height,0,ha["stroke-width"]),m.isImg||m.attr("fill","none"),m.add(k);m.isImg||m.attr(A({width:y(k.width),height:y(k.height)},ha));ha=null}};G=function(){var a=k.styles,a=a&&a.textAlign,b=s+r,c;c=h?0:w;if(v(F)&&n&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(F-n.width);if(b!==l.x||c!==l.y)l.attr("x",b),c!==t&&l.attr("y",c);l.x=b;l.y=c};C=function(a,
b){m?m.attr(a,b):ha[a]=b};k.onAdd=function(){l.add(k);k.attr({text:a||a===0?a:"",x:b,y:c});m&&v(e)&&k.attr({anchorX:e,anchorY:f})};k.widthSetter=function(a){F=a};k.heightSetter=function(a){u=a};k.paddingSetter=function(a){if(v(a)&&a!==r)r=k.padding=a,G()};k.paddingLeftSetter=function(a){v(a)&&a!==s&&(s=a,G())};k.alignSetter=function(a){a={left:0,center:0.5,right:1}[a];a!==p&&(p=a,n&&k.attr({x:q}))};k.textSetter=function(a){a!==t&&l.textSetter(a);Kb();G()};k["stroke-widthSetter"]=function(a,b){a&&
(B=!0);Q=a%2/2;C(b,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,b){b==="fill"&&a&&(B=!0);C(b,a)};k.anchorXSetter=function(a,b){e=a;C(b,y(a)-Q-q)};k.anchorYSetter=function(a,b){f=a;C(b,a-D)};k.xSetter=function(a){k.x=a;p&&(a-=p*((F||n.width)+2*r));q=y(a);k.attr("translateX",q)};k.ySetter=function(a){D=k.y=y(a);k.attr("translateY",D)};var H=k.css;return A(k,{css:function(a){if(a){var b={},a=z(a);o(k.textProps,function(c){a[c]!==t&&(b[c]=a[c],delete a[c])});l.css(b)}return H.call(k,a)},getBBox:function(){return{width:n.width+
2*r,height:n.height+2*r,x:n.x-r,y:n.y-r}},shadow:function(a){m&&m.shadow(a);return k},destroy:function(){T(k.element,"mouseenter");T(k.element,"mouseleave");l&&(l=l.destroy());m&&(m=m.destroy());Z.prototype.destroy.call(k);k=j=Kb=G=C=null}})}};Xa=xa;A(Z.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=A(this.styles,a);N(this.element,
a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,j=this.styles;N(b,{marginLeft:c,marginTop:d});i&&o(i,function(a){N(a,{marginLeft:c+1,marginTop:d+
1})});this.inverted&&o(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var i=this.rotation,k=K(this.textWidth),l=j&&j.whiteSpace,m=[i,g,b.innerHTML,this.textWidth,this.textAlign].join(",");if(m!==this.cTT){j=a.fontMetrics(b.style.fontSize).b;v(i)&&this.setSpanRotation(i,h,j);if(b.offsetWidth>k&&/[ \-]/.test(b.textContent||b.innerText))N(b,{width:k+"px",display:"block",whiteSpace:l||"normal"}),this.hasTextWidth=!0;else if(this.hasTextWidth)N(b,{width:"",display:"",whiteSpace:l||
"nowrap"}),this.hasTextWidth=!1;this.getSpanCorrection(this.hasTextWidth?k:b.offsetWidth,j,h,i,g)}N(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(sb)j=b.offsetHeight;this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Ka?"-ms-transform":sb?"-webkit-transform":Wa?"MozTransform":Ub?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Wa?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";N(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=
-a*c;this.yCorr=-b}});A(xa.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer,g=f.isSVG,h=function(a,b){o(["opacity","visibility"],function(c){U(a,c+"Setter",function(a,c,d,e){a.call(this,c,d,e);b[d]=c})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};g&&h(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};
d.attr({text:a,x:y(b),y:y(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(g)d.add=function(a){var b,c=f.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;o(g.reverse(),function(a){var d,e=X(a.element,"class");e&&(e={className:e});b=a.div=a.div||fa(Va,e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",opacity:a.opacity},b||c);d=b.style;A(a,
{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0}});h(a,d)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var lb,aa;if(!ja&&!qa)aa={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Va;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),
'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=fa(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,e=a&&a.inverted,d=a?a.element||a:d;if(a)this.parentGroup=a;e&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:Z.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=ca(a*pa),c=la(a*pa);N(this.element,
{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var f=d?ca(d*pa):1,g=d?la(d*pa):0,h=q(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),N(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=
a.length,c=[];b--;)if(C(a[b]))c[b]=y(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,za(c,b),c.push(b),b.destroyClip=function(){za(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:rb?"inherit":"rect(auto)"});return b.css(a)},css:Z.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&
Ua(a)},destroy:function(){this.destroyClip&&this.destroyClip();return Z.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=L.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=K(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,m,n,p;k&&typeof k.value!=="string"&&(k="x");m=k;if(a){n=q(a.width,3);p=(a.opacity||
0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=fa(g.prepVML(j),null,{left:K(i.left)+q(a.offsetX,1),top:K(i.top)+q(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',p*e,'"/>'];fa(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:ra,
setAttr:function(a,b){rb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||fa(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,
c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!=="none",this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},"fill-opacitySetter":function(a,b,c){fa(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:ra,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-y(la(a*pa)+1)+"px";c.top=y(ca(a*pa))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,
b,c){c.stroked=!!a;this[b]=a;C(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&o(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,rb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,
b,c){c.style[b]=a}},aa["stroke-opacitySetter"]=aa["fill-opacitySetter"],B.VMLElement=aa=ma(Z,aa),aa.prototype.ySetter=aa.prototype.widthSetter=aa.prototype.heightSetter=aa.prototype.xSetter,aa={Element:aa,isIE8:Na.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Va).css(A(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=
0;this.setSize(b,c,!1);if(!H.namespaces.hcv){H.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{H.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){H.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=ea(a);return A(e,
{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+y(a?e:d)+"px,"+y(a?f:b)+"px,"+y(a?b:f)+"px,"+y(a?d:e)+"px)"};!a&&rb&&c==="DIV"&&A(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){o(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,
f,g=/^rgba/,h,i,j="none";a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,m=a.linearGradient||a.radialGradient,n,p,r,s,q,u="",a=a.stops,x,D=[],Q=function(){h=['<fill colors="'+D.join(",")+'" opacity="',r,'" o:opacity2="',p,'" type="',i,'" ',u,'focus="100%" method="any" />'];fa(e.prepVML(h),null,null,b)};n=a[0];x=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);x[0]<1&&a.push([1,x[1]]);o(a,function(a,b){g.test(a[1])?(f=va(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);D.push(a[0]*
100+"% "+k);b?(r=l,s=k):(p=l,q=k)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,u='angle="'+(90-Y.atan((m-a)/(n-c))*180/Aa)+'"',Q();else{var j=m.r,ha=j*2,v=j*2,w=m.cx,t=m.cy,y=b.radialReference,A,j=function(){y&&(A=d.getBBox(),w+=(y[0]-A.x)/A.width-0.5,t+=(y[1]-A.y)/A.height-0.5,ha*=y[2]/A.width,v*=y[2]/A.height);u='src="'+R.global.VMLRadialGradientURL+'" size="'+ha+","+v+'" origin="0.5,0.5" position="'+w+","+t+'" color2="'+q+'" ';Q()};d.added?j():
d.onAdd=j;j=s}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=va(a),d[c+"-opacitySetter"](f.get("a"),c,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):
a=a.replace("<","<hcv:");return a},text:xa.prototype.html,path:function(a){var b={coordsize:"10 10"};Ja(a)?b.d=a:ea(a)&&A(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(ea(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Va).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>
1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):xa.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;N(a,{flip:"x",left:K(d.width)-(e?K(e.top):1),top:K(d.height)-(e?K(e.left):1),rotation:-90});o(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=ca(f),i=la(f),j=ca(g),k=la(g);if(g-f===0)return["x"];f=["wa",
a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return xa.prototype.symbols[!v(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}},B.VMLRenderer=lb=function(){this.init.apply(this,arguments)},lb.prototype=z(xa.prototype,aa),Xa=lb;xa.prototype.measureSpanWidth=
function(a,b){var c=H.createElement("span"),d;d=H.createTextNode(a);c.appendChild(d);N(c,b);this.box.appendChild(c);d=c.offsetWidth;Ua(c);return d};var Wb;if(qa)B.CanVGRenderer=aa=function(){Qa="http://www.w3.org/1999/xhtml"},aa.prototype.symbols={},Wb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){if(b.length===0){var e=H.getElementsByTagName("head")[0],f=H.createElement("script");f.type="text/javascript";f.src=d;f.onload=a;e.appendChild(f)}b.push(c)}}}(),
Xa=aa;bb.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],j=f===h[h.length-1],e=d?q(d[f],e[f],f):f,d=this.label,h=h.info,k;a.isDatetimeAxis&&h&&(k=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);this.isFirst=i;this.isLast=j;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:j,dateTimeLabelFormat:k,value:a.isLog?ka(a.lin2log(e)):e});v(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=v(b)&&
g.enabled?c.renderer.text(b,0,0,g.useHTML).css(z(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,e=b.chart.spacing,f=q(b.labelLeft,G(b.pos,e[3])),e=q(b.labelRight,w(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],j=g.getBBox().width,k=b.getSlotWidth(),l=k,m=1,n,
p={};if(h)h<0&&c-i*j<f?n=y(c/ca(h*pa)-f):h>0&&c+i*j>e&&(n=y((d-c)/ca(h*pa)));else if(d=c+(1-i)*j,c-i*j<f?l=a.x+l*(1-i)-f:d>e&&(l=e-a.x+l*i,m=-1),l=G(k,l),l<k&&b.labelAlign==="center"&&(a.x+=m*(k-l-i*(k-G(j,l)))),j>l||b.autoRotation&&g.styles.width)n=l;if(n){p.width=n;if(!b.options.labels.style.textOverflow)p.textOverflow="ellipsis";g.css(p)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+
(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,m=i.tickRotCorr||{x:0,y:0},n=e.y;v(n)||(n=i.side===0?c.rotation?-8:-c.getBBox().height:i.side===2?m.y+8:ca(c.rotation*pa)*(m.y-c.getBBox(!1,0).height/2));a=a+e.x+m.x-(f&&d?f*j*(k?-1:1):0);b=b+n-(f&&!d?f*j*(k?1:-1):0);l&&(c=g/(h||1)%l,i.opposite&&
(c=l-c-1),b+=c*(i.labelOffset/l));return{x:a,y:y(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":"tick",p=e[m+"LineWidth"],r=e[m+"LineColor"],s=e[m+"LineDashStyle"],m=d.tickSize(n),n=e[n+"Color"],F=this.mark,u=k.step,o=!0,D=d.tickmarkOffset,Q=this.getPosition(g,j,D,b),ha=Q.x,
Q=Q.y,v=g&&ha===d.pos+d.len||!g&&Q===d.pos?-1:1,c=q(c,1);this.isActive=!0;if(p){j=d.getPlotLinePath(j+D,p*v,b,!0);if(l===t){l={stroke:r,"stroke-width":p};if(s)l.dashstyle=s;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=p?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(m)d.opposite&&(m[0]=-m[0]),h=this.getMarkPath(ha,Q,m[0],m[1]*v,g,f),F?F.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:n,"stroke-width":m[1],opacity:c}).add(d.axisGroup);
if(i&&C(ha))i.xy=Q=this.getLabelPosition(ha,Q,i,g,k,D,a,u),this.isFirst&&!this.isLast&&!q(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!q(e.showLastLabel,1)?o=!1:g&&!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&this.handleOverflow(Q),u&&a%u&&(o=!1),o&&C(Q.y)?(Q.opacity=c,i[this.isNew?"attr":"animate"](Q),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Pa(this,this.axis)}};B.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};B.PlotLineOrBand.prototype={render:function(){var a=
this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,j=v(i)&&v(h),k=d.value,l=d.dashStyle,m=a.svgElem,n=[],p,r=d.color,s=q(d.zIndex,0),F=d.events,u={},o=b.chart.renderer,n=b.log2lin;b.isLog&&(i=n(i),h=n(h),k=n(k));if(g){if(n=b.getPlotLinePath(k,g),u={stroke:r,"stroke-width":g},l)u.dashstyle=l}else if(j){n=b.getPlotBandPath(i,h,d);if(r)u.fill=r;if(d.borderWidth)u.stroke=d.borderColor,u["stroke-width"]=d.borderWidth}else return;u.zIndex=s;if(m)if(n)m.show(),m.animate({d:n});
else{if(m.hide(),f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=m=o.path(n).attr(u).add(),F))for(p in d=function(b){m.on(b,function(c){F[b].apply(a,[c])})},F)d(p);e&&v(e.text)&&n&&n.length&&b.width>0&&b.height>0&&!n.flat?(e=z({align:c&&j&&"center",x:c?!j&&4:10,verticalAlign:!c&&j&&"middle",y:c?j?16:10:j?6:-4,rotation:c&&!j&&90},e),this.renderLabel(e,n,j,s)):f&&f.hide();return a},renderLabel:function(a,b,c,d){var e=this.label,f=this.axis.chart.renderer;if(!e)e={align:a.textAlign||a.align,
rotation:a.rotation},e.zIndex=d,this.label=e=f.text(a.text,0,0,a.useHTML).attr(e).css(a.style).add();d=[b[1],b[4],c?b[6]:b[1]];b=[b[2],b[5],c?b[7]:b[2]];c=Ma(d);f=Ma(b);e.align(a,!1,{x:c,y:f,width:Da(d)-c,height:Da(b)-f});e.show()},destroy:function(){za(this.axis.plotLinesAndBands,this);delete this.axis;Pa(this)}};var J=B.Axis=function(){this.init.apply(this,arguments)};J.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",
week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",
style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return B.numberFormat(this.total,-1)},style:z(W.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=d.visible!==
!1;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=v(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=
q(d.crosshair,ua(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;sa(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===t)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)E(this,f,d[f]);if(this.isLog)this.val2lin=this.log2lin,this.lin2val=this.lin2log},setOptions:function(a){this.options=z(this.defaultOptions,
this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],z(R[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=R.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=La(h,this);else if(c)g=b;else if(d)g=na(d,b);else if(f&&a>=1E3)for(;f--&&g===t;)c=Math.pow(1E3,f+1),a>=c&&b*10%
c===0&&e[f]!==null&&(g=B.numberFormat(b/c,-1)+e[f]);g===t&&(g=S(b)>=1E4?B.numberFormat(b,-1):B.numberFormat(b,-1,t,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();o(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d=c.options,e=d.threshold,f;a.hasVisibleSeries=!0;a.isLog&&e<=0&&(e=null);if(a.isXAxis){if(d=c.xData,d.length)c=Ma(d),!C(c)&&!(c instanceof
ba)&&(d=Fa(d,function(a){return C(a)}),c=Ma(d)),a.dataMin=G(q(a.dataMin,d[0]),c),a.dataMax=w(q(a.dataMax,d[0]),Da(d))}else{c.getExtremes();f=c.dataMax;c=c.dataMin;if(v(c)&&v(f))a.dataMin=G(q(a.dataMin,c),c),a.dataMax=w(q(a.dataMax,f),f);if(v(e))a.threshold=e;if(!d.softThreshold||a.isLog)a.softThreshold=!1}}})},translate:function(a,b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,j=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,k=g.minPixelPadding,e=(g.isOrdinal||g.isBroken||g.isLog&&e)&&g.lin2val;if(!j)j=
g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=k,a=a/j+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*j+i+h*k+(C(f)?j*f*g.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,
l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=G(w(b,a),c):m=!0;return a},e=q(e,this.translate(a,null,null,c)),a=c=y(e+i);i=j=y(k-e-i);C(e)?this.horiz?(i=h,j=k-this.bottom,a=c=n(a,g,g+this.width)):(a=g,c=l-this.right,i=j=n(i,h,h+this.height)):m=!0;return m&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ka(V(b/a)*a),f=ka(Ea(c/a)*a),g=[];if(b===c&&C(b))return[b];for(b=e;b<=f;){g.push(b);b=ka(b+a);if(b===
d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-e)%c;b<=f;b+=c)d.push(b);d.length!==
0&&this.trimTicks(d,a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j,k;if(this.isXAxis&&this.minRange===t&&!this.isLog)v(a.min)||v(a.max)?this.minRange=null:(o(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===t||h<f)f=h}),this.minRange=G(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){k=this.minRange;d=(k-c+b)/2;d=[b-d,q(a.min,b-d)];
if(e)d[2]=this.dataMin;b=Da(d);c=[b+k,q(a.max,b+k)];if(e)c[2]=this.dataMax;c=Ma(c);c-b<k&&(d[0]=c-k,d[1]=q(a.min,c-k),b=Da(d))}this.min=b;this.max=c},getClosest:function(){var a;o(this.series,function(b){var c=b.closestPointRange;!b.noSharedTooltip&&v(c)&&(a=v(a)?G(a,c):c)});return a},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA,k=b.isXAxis;if(k||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):(e=b.getClosest(),
o(b.series,function(a){var c=i?1:k?q(a.options.pointRange,e,0):b.axisPointRange||0,a=a.options.pointPlacement;d=w(d,c);b.single||(f=w(f,Ca(a)?0:c/2),g=w(g,a==="on"?0:c))})),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=G(d,c),k)b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=
this,c=b.chart,d=b.options,e=b.isLog,f=b.log2lin,g=b.isDatetimeAxis,h=b.isXAxis,i=b.isLinked,j=d.maxPadding,k=d.minPadding,l=d.tickInterval,m=d.tickPixelInterval,n=b.categories,p=b.threshold,r=b.softThreshold,s,F,u,x;!g&&!n&&!i&&this.getTickAmount();u=q(b.userMin,d.min);x=q(b.userMax,d.max);i?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=q(c.min,c.dataMin),b.max=q(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ga(11,1)):(!r&&v(p)&&(b.dataMin>=p?(s=p,k=0):b.dataMax<=
p&&(F=p,j=0)),b.min=q(u,s,b.dataMin),b.max=q(x,F,b.dataMax));if(e)!a&&G(b.min,q(b.dataMin,b.min))<=0&&ga(10,1),b.min=ka(f(b.min),15),b.max=ka(f(b.max),15);if(b.range&&v(b.max))b.userMin=b.min=u=w(b.min,b.minFromRange()),b.userMax=x=b.max,b.range=null;O(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!n&&!b.axisPointRange&&!b.usePercentage&&!i&&v(b.min)&&v(b.max)&&(f=b.max-b.min))!v(u)&&k&&(b.min-=f*k),!v(x)&&j&&(b.max+=f*j);if(C(d.floor))b.min=w(b.min,d.floor);if(C(d.ceiling))b.max=
G(b.max,d.ceiling);if(r&&v(b.dataMin))if(p=p||0,!v(u)&&b.min<p&&b.dataMin>=p)b.min=p;else if(!v(x)&&b.max>p&&b.dataMax<=p)b.max=p;b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:i&&!l&&m===b.linkedParent.options.tickPixelInterval?l=b.linkedParent.tickInterval:q(l,this.tickAmount?(b.max-b.min)/w(this.tickAmount-1,1):void 0,n?1:(b.max-b.min)*m/w(b.len,m));h&&!a&&o(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&
b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange&&!l)b.tickInterval=w(b.pointRange,b.tickInterval);a=q(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!l&&b.tickInterval<a)b.tickInterval=a;if(!g&&!e&&!l)b.tickInterval=Ab(b.tickInterval,null,zb(b.tickInterval),q(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();
this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,
this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&v(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},
trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;if(b)this.min=d;else for(;this.min-f>a[0];)a.shift();if(c)this.max=e;else for(;this.max+f<a[a.length-1];)a.pop();a.length===0&&v(d)&&a.push((e+d)/2)},alignToOthers:function(){var a={},b,c=this.options;this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&o(this.chart[this.coll],function(c){var e=c.options,e=[c.horiz?e.left:e.top,e.width,e.height,e.pane].join(",");c.series.length&&(a[e]?b=!0:a[e]=1)});return b},getTickAmount:function(){var a=
this.options,b=a.tickAmount,c=a.tickPixelInterval;!v(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Ea(this.len/c)+1);if(b<4)this.finalTickAmt=b,b=5;this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(ka(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());
if(v(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=t}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;o(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=q(c,!0);o(f.series,function(a){delete a.kdTree});e=A(e,{min:a,max:b});O(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,
f=G(c,q(e.min,c)),e=w(d,q(e.max,d));this.allowZoomOutside||(v(c)&&a<=f&&(a=f),v(d)&&b>=e&&(b=e));this.displayBtn=a!==t||b!==t;this.setExtremes(a,b,!1,t,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=q(b.width,a.plotWidth-c+(b.offsetRight||0)),f=q(b.height,a.plotHeight),g=q(b.top,a.plotTop),b=q(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight));c.test(g)&&(g=Math.round(parseFloat(g)/100*a.plotHeight+
a.plotTop));this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=w(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?ka(b(this.min)):this.min,max:a?ka(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,d=b?c(this.min):this.min,b=b?c(this.max):this.max;a===null?a=b<0?b:d:d>a?a=d:b<
a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(q(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],d=q(b[a+"Width"],a==="tick"&&this.isXAxis?1:0);if(d&&c)return b[a+"Position"]==="inside"&&(c=-c),[c,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=
this.horiz,c=this.tickInterval,d=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),f,g=a.rotation,h=this.labelMetrics(),i,j=Number.MAX_VALUE,k,l=function(a){a/=e||1;a=a>1?Ea(a):1;return a*c};b?(k=!a.staggerLines&&!a.step&&(v(g)?[g]:e<q(a.autoRotationLimit,80)&&a.autoRotation))&&o(k,function(a){var b;if(a===g||a&&a>=-90&&a<=90)i=l(S(h.h/la(pa*a))),b=i+S(a/360),b<j&&(j=b,f=a,d=i)}):a.step||(d=l(h.h));this.autoRotation=k;this.labelRotation=q(f,g);return d},getSlotWidth:function(){var a=this.chart,
b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=a.margin[3];return b&&(c.step||0)<2&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/d||!b&&(e&&e-a.spacing[3]||a.chartWidth*0.33)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=this.getSlotWidth(),h=w(1,y(g-2*(e.padding||5))),i={},j=this.labelMetrics(),k=e.style.textOverflow,l,m=0,n,p;if(!Ca(e.rotation))i.rotation=e.rotation||
0;if(this.autoRotation)o(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength}),m>h&&m>j.h?i.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(l={width:h+"px"},!k)){l.textOverflow="clip";for(n=c.length;!f&&n--;)if(p=c[n],h=d[p].label)if(h.styles.textOverflow==="ellipsis"?h.css({textOverflow:"clip"}):d[p].labelLength>g&&h.css({width:g+"px"}),h.getBBox().height>this.len/c.length-(j.h-j.f))h.specCss={textOverflow:"ellipsis"}}if(i.rotation&&(l={width:(m>a.chartHeight*0.5?a.chartHeight*
0.33:a.chartHeight)+"px"},!k))l.textOverflow="ellipsis";if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))i.align=this.labelAlign;o(c,function(a){var b=(a=d[a])&&a.label;if(b)b.attr(i),l&&b.css(z(l,b.specCss)),delete b.specCss,a.rotation=i.rotation});this.tickRotCorr=b.rotCorr(j.b,this.labelRotation||0,this.side!==0)},hasData:function(){return this.hasVisibleSeries||v(this.min)&&v(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,
e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,m,n=0,p=d.title,r=d.labels,s=0,F=a.opposite,u=b.axisOffset,b=b.clipOffset,x=[-1,1,1,-1][h],D,Q=a.axisParent,ha=this.tickSize("tick");j=a.hasData();a.showAxis=k=j||q(d.showEmpty,!0);a.staggerLines=a.horiz&&r.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(Q),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(Q),a.labelGroup=c.g("axis-labels").attr({zIndex:r.zIndex||7}).addClass("highcharts-"+
a.coll.toLowerCase()+"-labels").add(Q);if(j||a.isLinked){if(o(e,function(b){f[b]?f[b].addLabel():f[b]=new bb(a,b)}),a.renderUnsquish(),r.reserveSpace!==!1&&(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign||a.labelAlign==="center")&&o(e,function(a){s=w(f[a].getLabelSize(),s)}),a.staggerLines)s*=a.staggerLines,a.labelOffset=s*(a.opposite?-1:1)}else for(D in f)f[D].destroy(),delete f[D];if(p&&p.text&&p.enabled!==!1){if(!a.axisTitle)(D=p.textAlign)||(D=(g?{low:"left",middle:"center",high:"right"}:
{low:F?"right":"left",middle:"center",high:F?"left":"right"})[p.align]),a.axisTitle=c.text(p.text,0,0,p.useHTML).attr({zIndex:7,rotation:p.rotation||0,align:D}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(p.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=a.axisTitle.getBBox()[g?"height":"width"],m=p.offset,n=v(m)?0:q(p.margin,g?5:10);a.axisTitle[k?"show":"hide"](!0)}a.offset=x*q(d.offset,u[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===0?-a.labelMetrics().h:h===2?a.tickRotCorr.y:
0;n=Math.abs(s)+n;s&&(n-=c,n+=x*(g?q(r.y,a.tickRotCorr.y+x*8):r.x));a.axisTitleMargin=q(m,n);u[h]=w(u[h],a.axisTitleMargin+l+x*a.offset,n,j&&e.length&&ha?ha[0]:0);d=d.offset?0:V(d.lineWidth/2)*2;b[i]=w(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],
a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,j=e.y||0,k=K(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?k:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+j-(g?this.height:0)+h:d+j}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.lin2log,g=a.isLinked,h=a.tickPositions,
i=a.axisTitle,j=a.ticks,k=a.minorTicks,l=a.alternateBands,m=d.stackLabels,n=d.alternateGridColor,p=a.tickmarkOffset,r=d.lineWidth,s,q=b.hasRendered&&C(a.oldMin),u=a.showAxis,x=gb(c.globalAnimation),D,Q;a.labelEdge.length=0;a.overlap=!1;o([j,k,l],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||g){a.minorTickInterval&&!a.categories&&o(a.getMinorTickPositions(),function(b){k[b]||(k[b]=new bb(a,b,"minor"));q&&k[b].isNew&&k[b].render(null,!0);k[b].render(null,!1,1)});if(h.length&&(o(h,function(b,
c){if(!g||b>=a.min&&b<=a.max)j[b]||(j[b]=new bb(a,b)),q&&j[b].isNew&&j[b].render(c,!0,0.1),j[b].render(c)}),p&&(a.min===0||a.single)))j[-1]||(j[-1]=new bb(a,-1,null,!0)),j[-1].render(-1);n&&o(h,function(c,d){Q=h[d+1]!==t?h[d+1]+p:a.max-p;if(d%2===0&&c<a.max&&Q<=a.max+(b.polar?-p:p))l[c]||(l[c]=new B.PlotLineOrBand(a)),D=c+p,l[c].options={from:e?f(D):D,to:e?f(Q):Q,color:n},l[c].render(),l[c].isActive=!0});if(!a._addedPlotLB)o((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),
a._addedPlotLB=!0}o([j,k,l],function(a){var c,d,e=[],f=x.duration;for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);Za(function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])},a===l||!b.hasRendered||!f?0:f)});if(r)s=a.getLinePath(r),a.axisLine?a.axisLine.animate({d:s}):a.axisLine=c.path(s).attr({stroke:d.lineColor,"stroke-width":r,zIndex:7}).add(a.axisGroup),a.axisLine[u?"show":"hide"](!0);if(i&&u)i[i.isNew?"attr":"animate"](a.getTitlePosition()),
i.isNew=!1;m&&m.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),o(this.plotLinesAndBands,function(a){a.render()}));o(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||T(b);for(d in c)Pa(c[d]),c[d]=null;o([b.ticks,b.minorTicks,b.alternateBands],function(a){Pa(a)});for(a=e.length;a--;)e[a].destroy();o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&
(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e,f;if(!this.crosshair||(v(b)||!q(d.snap,!0))===!1)this.hideCrosshair();else if(q(d.snap,!0)?v(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:q(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else if(e=this.categories&&!this.isRadial,
f=q(d.width,e?this.transA:1),this.cross)this.cross.attr({d:c,visibility:"visible","stroke-width":f});else{e={"pointer-events":"none","stroke-width":f,stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:q(d.zIndex,2)};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};A(J.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0);
d&&c?(d.flat=d.toString()===c.toString(),d.push(c[4],c[5],c[1],c[2])):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new B.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,
e=b.length;e--;)b[e].id===a&&b[e].destroy();o([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&za(b,b[e])})}});J.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=R.global.useUTC,h,i=new ba(b-eb(b)),j=a.unitRange,k=a.count;if(v(b)){i[Pb](j>=M.second?0:k*V(i.getMilliseconds()/k));if(j>=M.second)i[Qb](j>=M.minute?0:k*V(i.getSeconds()/k));if(j>=M.minute)i[Rb](j>=M.hour?0:k*V(i[Bb]()/k));if(j>=M.hour)i[Sb](j>=M.day?0:k*V(i[Cb]()/k));
if(j>=M.day)i[qb](j>=M.month?1:k*V(i[ab]()/k));j>=M.month&&(i[Eb](j>=M.year?0:k*V(i[hb]()/k)),h=i[ib]());j>=M.year&&(h-=h%k,i[Fb](h));if(j===M.week)i[qb](i[ab]()-i[Db]()+q(d,1));b=1;if(yb||fb)i=i.getTime(),i=new ba(i+eb(i));h=i[ib]();for(var d=i.getTime(),l=i[hb](),m=i[ab](),n=!g||!!fb,p=(M.day+(g?eb(i):i.getTimezoneOffset()*6E4))%M.day;d<c;)e.push(d),j===M.year?d=pb(h+b*k,0):j===M.month?d=pb(h,l+b*k):n&&(j===M.day||j===M.week)?d=pb(h,l,m+b*k*(j===M.day?1:7)):d+=j*k,b++;e.push(d);o(Fa(e,function(a){return j<=
M.hour&&a%M.day===p}),function(a){f[a]="day"})}e.info=A(a,{higherRanks:f,totalRange:j*k});return e};J.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=M[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=M[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+M[c[g+1][0]])/2)break;e===M.year&&
a<5*e&&(f=[1,2,5]);c=Ab(a/e,f,d[0]==="year"?w(zb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};J.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=this.lin2log,h=this.log2lin,i=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=y(a),i=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),j,k,l,m,n,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!n;f++){k=e.length;for(j=0;j<k&&!n;j++)l=h(g(f)*e[j]),l>b&&(!d||m<=c)&&m!==t&&i.push(m),m>c&&
(n=!0),m=l}else if(b=g(b),c=g(c),a=e[d?"minorTickInterval":"tickInterval"],a=q(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=Ab(a,null,zb(a)),i=ta(this.getLinearTickPositions(a,b,c),h),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return i};J.prototype.log2lin=function(a){return Y.log(a)/Y.LN10};J.prototype.lin2log=function(a){return Y.pow(10,a)};var Lb=B.Tooltip=function(){this.init.apply(this,arguments)};Lb.prototype=
{init:function(a,b){var c=b.borderWidth,d=b.style,e=K(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});qa||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);
clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(S(a-f.x)>1||S(b-f.y)>1),h=e.followPointer||e.len>1;A(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?t:g?(2*f.anchorX+c)/3:c,anchorY:h?t:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=q(a,this.options.hideDelay,500);if(!this.isHidden)this.hideTimer=
Za(function(){b.label[a?"fadeOut":"hide"]();b.isHidden=!0},a)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,j,k,a=ua(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===t&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(o(a,function(a){j=a.series.yAxis;k=a.series.xAxis;h+=a.plotX+(!e&&k?k.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&j?j.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>
1&&b?b.chartY-f:e?d.plotHeight-h:i]);return ta(c,y)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],j=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],k=!this.followPointer&&q(c.ttBelow,!d.inverted===!!c.negative),l=function(a,b,c,d,h,i){var j=c<d-e,m=d+e+c<b,l=d-e-c;d+=e;if(k&&m)f[a]=d;else if(!k&&j)f[a]=l;else if(j)f[a]=G(i-c,l-g<0?l:l-g);else if(m)f[a]=w(h,d+g+c>b?d:
d+g);else return!1},m=function(a,b,c,d){var g;d<e||d>b-e?g=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return g},n=function(a){var b=i;i=j;j=b;h=a},p=function(){l.apply(0,i)!==!1?m.apply(0,j)===!1&&!h&&(n(!0),p()):h?f.x=f.y=0:(n(!0),p())};(d.inverted||this.len>1)&&n();p();return f},defaultFormatter:function(a){var b=this.points||ua(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=
this.chart,d=this.label,e=this.options,f,g,h,i={},j,k=[];j=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;clearTimeout(this.hideTimer);this.followPointer=ua(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&o(i,function(a){a.setState()}),o(a,function(a){a.setState("hover");k.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=k,this.len=k.length,a=a[0]):i=a.getLabelConfig();
j=j.call(i,this);i=a.series;this.distance=q(i.tooltipOptions.distance,16);j===!1?this.hide():(this.isHidden&&(Sa(d),d.attr("opacity",1).show()),d.attr({text:j}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);O(c,"tooltipRefresh",{text:j,x:f+c.plotLeft,y:g+c.plotTop,borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,
c.width,c.height,a);this.move(y(c.x),y(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=na("%m-%d %H:%M:%S.%L",a.x);for(f in M){if(e===M.week&&+na("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}if(M[f]>e){f=i;break}if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=
b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&C(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return La(c,{point:a,series:d})},bodyFormatter:function(a){return ta(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};
var oa;cb=H&&H.documentElement.ontouchstart!==t;var Ya=B.Pointer=function(a,b){this.init(a,b)};Ya.prototype={init:function(a,b){var c=b.chart,d=c.events,e=qa?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(B.Tooltip&&b.tooltip.enabled)a.tooltip=new Lb(a,b.tooltip),this.followTouchMove=q(b.tooltip.followTouchMove,
!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||L.event;if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Jb(this.chart.container);d.pageX===t?(c=w(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return A(a,{chartX:y(c),chartY:y(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};o(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":
"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,g=b.hoverSeries,h,i=[Number.MAX_VALUE,Number.MAX_VALUE],j,k,l=[],m=[],n;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];g&&(e?g.noSharedTooltip:g.directTouch)&&f?m=[f]:(o(c,function(b){j=b.noSharedTooltip&&e;k=!e&&b.directTouch;b.visible&&!j&&!k&&q(b.options.enableMouseTracking,!0)&&(n=b.searchPoint(a,!j&&b.kdDimensions===1))&&l.push(n)}),
o(l,function(a){a&&o(["dist","distX"],function(b,c){if(C(a[b])){var d=a[b]===i[c]&&a.series.group.zIndex>=m[c].series.group.zIndex;if(a[b]<i[c]||d)i[c]=a[b],m[c]=a}})}));if(e)for(h=l.length;h--;)(l[h].clientX!==m[1].clientX||l[h].series.noSharedTooltip)&&l.splice(h,1);if(m[0]&&(m[0]!==this.prevKDPoint||d&&d.isHidden))if(e&&!m[0].series.noSharedTooltip)l.length&&d&&d.refresh(l,a),o(l,function(b){b.onMouseOver(a,b!==(g&&g.directTouch&&f||m[0]))}),this.prevKDPoint=m[1];else{d&&d.refresh(m[0],a);if(!g||
!g.directTouch)m[0].onMouseOver(a);this.prevKDPoint=m[0]}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if($[oa])$[oa].pointer.onDocumentMouseMove(a)},E(H,"mousemove",this._onDocumentMouseMove);o(e?l:[q(f,m[1])],function(c){o(b.axes,function(b){(!c||c.series[b.coll]===b)&&b.drawCrosshair(a,c)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=
c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;a&&h&&o(ua(h),function(b){b.series.isCartesian&&b.plotX===void 0&&(a=!1)});if(a)g&&h&&(g.refresh(h),e&&(e.setState(e.state,!0),o(c.axes,function(a){q(a.crosshair&&a.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()})));else{if(e)e.onMouseOut();f&&o(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);if(this._onDocumentMouseMove)T(H,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;o(c.axes,function(a){a.hideCrosshair()});
this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;o(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,m=this.selectionMarker,n=this.mouseDownX,p=this.mouseDownY,r=c.panKey&&a[c.panKey+"Key"];if(!m||!m.touch)if(d<h?d=h:d>h+j&&(d=h+j),e<i?e=i:e>i+k&&(e=i+k),this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(p-e,2)),this.hasDragged>10){l=b.isInsidePlot(n-h,p-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!r&&!m)this.selectionMarker=m=b.renderer.rect(h,i,
f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();m&&f&&(d-=n,m.attr({width:S(d),x:(d>0?0:d)+n}));m&&g&&(d=e-p,m.attr({height:S(d),y:(d>0?0:d)+p}));l&&!m&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,j=f.attr?f.attr("height"):f.height,k;if(this.hasDragged||
d)o(c.axes,function(c){if(c.zoomEnabled&&v(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type==="touchend"?c.minPixelPadding:0,p=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+j)-n);e[c.coll].push({axis:c,min:G(p,f),max:w(p,f)});k=!0}}),k&&O(c,"selection",e,function(a){c.zoom(A(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)N(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=
this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){$[oa]&&$[oa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(a){var b=$[oa];if(b&&(a.relatedTarget||a.toElement))b.pointer.reset(),
b.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;if(!v(oa)||!$[oa]||!$[oa].mouseIsDown)oa=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=X(a,"class")){if(c.indexOf(b)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}a=a.parentNode}},
onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,a=a.relatedTarget||a.toElement;if(b&&a&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&!this.inClass(a,"highcharts-series-"+b.index))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(O(c.series,"click",A(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(A(a,this.getCoordinates(a)),
b.isInsidePlot(a.chartX-d,a.chartY-e)&&O(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};E(b,"mouseleave",a.onContainerMouseLeave);kb===1&&E(H,"mouseup",a.onDocumentMouseUp);if(cb)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},kb===1&&E(H,"touchend",a.onDocumentTouchEnd)},
destroy:function(){var a;T(this.chart.container,"mouseleave",this.onContainerMouseLeave);kb||(T(H,"mouseup",this.onDocumentMouseUp),T(H,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};A(B.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=
this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],p,r,s=h||1,q=i.inverted,o=i.bounds[a?"h":"v"],x=b.length===1,D=b[0][l],v=c[0][l],w=!x&&b[1][l],y=!x&&c[1][l],t,c=function(){!x&&S(D-w)>20&&(s=h||S(v-y)/S(D-w));r=(n-v)/s+D;p=i["plot"+(a?"Width":"Height")]/s};c();b=r;b<o.min?(b=o.min,t=!0):b+p>o.max&&(b=o.max-p,t=!0);t?(v-=0.8*(v-g[j][0]),x||(y-=0.8*(y-g[j][1])),c()):g[j]=[v,y];q||(f[j]=r-n,f[m]=p);f=q?1/s:s;e[m]=p;e[j]=b;d[q?a?"scaleY":"scaleX":"scale"+
k]=s;d["translate"+k]=f*n+(v-f*D)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,j={},k=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!k&&a.preventDefault();ta(e,function(a){return b.normalize(a)});if(a.type==="touchstart")o(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&
d[1].chartY],o(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(q(a.options.min,a.dataMin)),f=a.toPixels(q(a.options.max,a.dataMax)),g=G(e,f),e=w(e,f);b.min=G(a.pos,g-d);b.max=w(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=A({destroy:ra,touch:!0},c.plotBox);b.pinchTranslate(d,e,j,i,l,g);b.hasPinched=h;b.scaleGroups(j,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,
0)}},touch:function(a,b){var c=this.chart,d;oa=c.index;if(a.touches.length===1)if(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu){b&&this.runPointActions(a);if(a.type==="touchmove")c=this.pinchDown,d=c[0]?Math.sqrt(Math.pow(c[0].chartX-a.chartX,2)+Math.pow(c[0].chartY-a.chartY,2))>=4:!1;q(d,!0)&&this.pinch(a)}else b&&this.reset();else a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},
onDocumentTouchEnd:function(a){$[oa]&&$[oa].pointer.drop(a)}});if(L.PointerEvent||L.MSPointerEvent){var Ga={},Mb=!!L.PointerEvent,ac=function(){var a,b=[];b.item=function(a){return this[a]};for(a in Ga)Ga.hasOwnProperty(a)&&b.push({pageX:Ga[a].pageX,pageY:Ga[a].pageY,target:Ga[a].target});return b},Nb=function(a,b,c,d){if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&$[oa])d(a),d=$[oa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:ra,touches:ac()})};A(Ya.prototype,
{onContainerPointerDown:function(a){Nb(a,"onContainerTouchStart","touchstart",function(a){Ga[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Nb(a,"onContainerTouchMove","touchmove",function(a){Ga[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!Ga[a.pointerId].target)Ga[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Nb(a,"onDocumentTouchEnd","touchend",function(a){delete Ga[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,
Mb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Mb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(H,Mb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});U(Ya.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&N(b.container,{"-ms-touch-action":"none","touch-action":"none"})});U(Ya.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});U(Ya.prototype,"destroy",function(a){this.batchMSEvents(T);
a.call(this)})}var ub=B.Legend=function(a,b){this.init(a,b)};ub.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=z(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=q(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=q(b.symbolWidth,16),c.pages=[],c.render(),E(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,
d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==t&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-
e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;o(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Ua(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,e=this.titleHeight;if(b)c=b.translateY,o(this.allItems,function(f){var g=f.checkbox,h;g&&(h=c+e+g.y+(a||0)+3,N(g,
{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:h+"px",display:h>c-6&&h<c+d-6?"":"none"}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?
La(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?q(d.itemDistance,20):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,p=this.itemMarginTop,r=this.initialItemX,s=a.legendItem,o=a.series&&a.series.drawLegendSymbol?a.series:a,u=o.options,u=this.createCheckboxForItem&&u&&u.showCheckbox,x=d.useHTML;if(!s){a.legendGroup=
c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=s=c.text("",l?f+g:-g,this.baseline||0,x).css(z(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,s),this.baseline=this.fontMetrics.f+3+p,s.attr("y",this.baseline);o.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,s,x,h,i);u&&this.createCheckboxForItem(a)}this.colorizeItem(a,a.visible);this.setText(a);c=s.getBBox();f=a.checkboxOffset=
d.itemWidth||a.legendItemWidth||f+g+c.width+k+(u?20:0);this.itemHeight=g=y(a.legendItemHeight||c.height);if(e&&this.itemX-r+f>(m||b.chartWidth-2*j-r-d.x))this.itemX=r,this.itemY+=p+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=w(this.maxItemWidth,f);this.lastItemY=p+this.itemY+n;this.lastLineHeight=w(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=p+g+n,this.lastLineHeight=g);this.offsetWidth=m||w((e?this.itemX-r-k:f)+j,this.offsetWidth)},
getAllItems:function(){var a=[];o(this.chart.series,function(b){var c=b.options;if(q(c.showInLegend,!v(c.linkedTo)?t:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);this.display&&!d.floating&&o([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!v(a[g])&&(c[tb[g]]=w(c[tb[g]],c.legend[(g+1)%2?"legendHeight":
"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+q(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,m=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();nb(e,function(a,b){return(a.options&&a.options.legendIndex||
0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;o(e,function(b){a.renderItem(b)});g=(j.width||a.offsetWidth)+k;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=k;if(l||m){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:m||"none"}).add(d).shadow(j.shadow),i.isNew=!0;i[f?
"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;o(e,function(b){a.positionItem(b)});f&&d.align(A({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=q(j.animation,!0),l=j.arrowSize||12,m=this.nav,n=this.pages,p=this.padding,r,s=this.allItems,F=function(a){i.attr({height:a});
if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+p+"px,9999px,"+(p+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);g&&(f=G(f,g));n.length=0;if(a>f&&j.enabled!==!1){this.clipHeight=h=w(f-20-this.titleHeight-p,0);this.currentPage=q(this.currentPage,1);this.fullHeight=a;o(s,function(a,b){var c=a._legendItemPos[1],d=y(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(r||c)!==n[e-1])n.push(r||c),e++;b===s.length-1&&c+d-n[e-1]>h&&n.push(c);c!==r&&(r=c)});if(!i)i=b.clipRect=d.clipRect(0,
p,9999,0),b.contentGroup.clip(i);F(h);if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(m),this.pager=d.text("",15,10).css(j.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(m);b.scroll(0);a=f}else if(m)F(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,
f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==t&&$a(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),
this.currentPage=e,this.positionCheckboxes(c)}};aa=B.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline-y(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=
b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=c=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).add(f),c.isMarker=!0}};(/Trident\/7\.0/.test(Na)||Wa)&&U(ub.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});var Ba=B.Chart=function(){this.getArgs.apply(this,arguments)};B.chart=function(a,b,c){return new Ba(a,b,c)};Ba.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);
if(Ca(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(a,b){var c,d=a.series;a.series=null;c=z(R,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=$.length;$.push(f);kb++;d.reflow!==!1&&E(f,"load",function(){f.initReflow()});
if(e)for(g in e)E(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=qa?!1:q(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=I[a.type||b.type||b.defaultSeriesType])||ga(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,
j=this.isDirtyBox,k=c.length,l=k,m=this.renderer,n=m.isHidden(),p=[];$a(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;o(c,function(a){a.isDirty&&a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&O(a,"updatedData")});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=
null,o(b,function(a){a.setScale()});this.getMargins();i&&(o(b,function(a){a.isDirty&&(j=!0)}),o(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,p.push(function(){O(a,"afterSetExtremes",A(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();o(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();O(this,"redraw");n&&this.cloneRenderTo(!0);o(p,function(a){a.call()})},get:function(a){var b=this.axes,
c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ua(b.xAxis||{}),b=b.yAxis=ua(b.yAxis||{});o(c,function(a,b){a.index=b;a.isX=!0});o(b,function(a,b){a.index=b});c=c.concat(b);o(c,function(b){new J(a,b)})},getSelectedPoints:function(){var a=[];o(this.series,
function(b){a=a.concat(Fa(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Fa(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=z(e.title,a);g=e.subtitle=z(e.subtitle,b),e=g;o([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||
4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox;if(c&&(c.css({width:(f.width||h.width+f.widthAdjust)+"px"}).align(A({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,h),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h.width+e.widthAdjust)+"px"}).align(A({y:b+(f.margin-13)+g.fontMetrics(e.style.fontSize,c).b},e),!1,h),!e.floating&&!e.verticalAlign&&
(b=Ea(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&q(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!v(b))this.containerWidth=wa(c,"width");if(!v(a))this.containerHeight=wa(c,"height");this.chartWidth=w(0,b||this.containerWidth||600);this.chartHeight=w(0,q(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=
this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Ua(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),N(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),H.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options,c=b.chart,d,e;a=this.renderTo;var f="highcharts-"+Ib++;if(!a)this.renderTo=
a=c.renderTo;if(Ca(a))this.renderTo=a=H.getElementById(a);a||ga(13,!0);d=K(X(a,"data-highcharts-chart"));C(d)&&$[d]&&$[d].hasRendered&&$[d].destroy();X(a,"data-highcharts-chart",this.index);a.innerHTML="";!c.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();d=this.chartWidth;e=this.chartHeight;this.container=a=fa(Va,{className:"highcharts-container"+(c.className?" "+c.className:""),id:f},A({position:"relative",overflow:"hidden",width:d+"px",height:e+"px",textAlign:"left",lineHeight:"normal",
zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=new (B[c.renderer]||Xa)(a,d,e,c.style,c.forExport,b.exporting&&b.exporting.allowHTML);qa&&this.renderer.create(this,a,d,e);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!v(c[0]))this.plotTop=w(this.plotTop,d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&
(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&o(a.axes,function(a){a.visible&&a.getOffset()});o(tb,function(d,e){v(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||wa(d,"width"),f=c.height||wa(d,"height"),c=a?a.target:L;if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===
L||c===H)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=Za(function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null},a?100:0);b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};E(L,"resize",b);E(a,"destroy",function(){T(L,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g=d.renderer;d.isResizing+=1;$a(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(v(a))d.chartWidth=e=w(0,
y(a)),d.hasUserSize=!!e;if(v(b))d.chartHeight=f=w(0,y(b));a=g.globalAnimation;(a?db:N)(d.container,{width:e+"px",height:f+"px"},a);d.setChartSize(!0);g.setSize(e,f,c);d.maxTicks=null;o(d.axes,function(a){a.isDirty=!0;a.setScale()});o(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;O(d,"resize");Za(function(){d&&O(d,"endResize",null,function(){d.isResizing-=1})},gb(a).duration)},setChartSize:function(a){var b=
this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=y(this.plotLeft);this.plotTop=j=y(this.plotTop);this.plotWidth=k=w(0,y(d-i-this.marginRight));this.plotHeight=l=w(0,y(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};
d=2*V(this.plotBorderWidth/2);b=Ea(w(d,h[3])/2);c=Ea(w(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-w(d,h[1])/2-b),height:w(0,V(this.plotSizeY-w(d,h[2])/2-c))};a||o(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;o(tb,function(b,c){a[b]=q(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,
f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,n,p=this.plotLeft,r=this.plotTop,s=this.plotWidth,q=this.plotHeight,o=this.plotBox,x=this.clipRect,D=this.clipBox;n=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-n,height:d-n}));else{e={fill:j||"none"};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?
f.animate(o):this.plotBackground=b.rect(p,r,s,q,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(o):this.plotBGImage=b.image(l,p,r,s,q).add();x?x.animate({width:D.width,height:D.height}):this.clipRect=b.clipRect(D);if(m)g?(g.strokeWidth=-m,g.animate(g.crisp({x:p,y:r,width:s,height:q}))):this.plotBorder=b.rect(p,r,s,q,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:"none",zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,
e,f;o(["inverted","angular","polar"],function(g){c=I[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=I[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;o(b,function(a){a.linkedSeries.length=0});o(b,function(b){var d=b.options.linkedTo;if(Ca(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d,b.visible=q(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){o(this.series,
function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&o(b.items,function(c){var d=A(b.style,c.style),e=K(d.left)+a.plotLeft,f=K(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new ub(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=
21;o(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.05;if(f||g)this.maxTicks=null,o(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&o(a,function(a){a.visible&&a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&
!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)L.location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;O(a,"destroy");$[a.index]=t;kb--;a.renderTo.removeAttribute("data-highcharts-chart");T(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),
function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",T(d),f&&Ua(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ja&&L==L.top&&H.readyState!=="complete"||qa&&!L.canvg?(qa?Wb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):H.attachEvent("onreadystatechange",function(){H.detachEvent("onreadystatechange",a.firstRender);H.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();
O(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();o(b.series||[],function(b){a.initSeries(b)});a.linkSeries();O(a,"beforeRender");if(B.Pointer)a.pointer=new Ya(a,b);a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){var a=this;o([this.callback].concat(this.callbacks),function(b){b&&a.index!==void 0&&b.apply(a,[a])});O(a,"load");this.onload=null},splashArray:function(a,b){var c=b[a],c=ea(c)?c:[c,c,c,c];return[q(b[a+
"Top"],c[0]),q(b[a+"Right"],c[1]),q(b[a+"Bottom"],c[2]),q(b[a+"Left"],c[3])]}};var bc=B.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[q(e[0],"50%"),q(e[1],"50%"),a.size||"100%",a.innerSize||0],f=G(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);e[3]>e[2]&&(e[3]=e[2]);return e}},Ha=function(){};Ha.prototype={init:function(a,
b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ha.prototype.optionsToObject.call(this,a);A(this,a);this.options=this.options?A(this.options,a):a;if(d)this.y=this[d];this.isNull=this.x===null||
this.y===null;if(this.x===void 0&&c)this.x=b===void 0?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(C(a)||a===null)b[e[0]]=a;else if(Ja(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;){if(!d||a[g]!==void 0)b[e[h]]=a[g];g++;h++}}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},
destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),za(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)T(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,
y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=q(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";o(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return La(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;
(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});O(this,a,b,c)},visible:!0};var P=B.Series=function(){};P.prototype={isCartesian:!0,type:"line",pointClass:Ha,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x",
"y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return q(a.options.index,a._i)-q(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();A(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(qa)b.animation=!1;e=b.events;for(d in e)E(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();o(c.parallelArrays,function(a){c[a+"Data"]=
[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;nb(f,g);this.yAxis&&nb(this.yAxis.series,g);o(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;o(a.axisTypes||[],function(e){o(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==t&&b[e]===d.id||b[e]===t&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ga(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,
d=arguments,e=C(b)?function(d){var e=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=e}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};o(c.parallelArrays,e)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=q(b,a.pointStart,0);this.pointInterval=c=q(this.pointInterval,a.pointInterval,1);d&&(a=new ba(b),d==="day"?a=+a[qb](a[ab]()+c):d==="month"?a=+a[Eb](a[hb]()+c):d==="year"&&(a=+a[Fb](a[ib]()+c)),c=a-b);this.xIncrement=
b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=z(e,c.series,a);this.tooltipOptions=z(R.tooltip,R.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||
c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&v(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(v(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||W[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=
this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:aa.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,m=l&&!!l.categories,n=i.turboThreshold,p=this.xData,r=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=q(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)o(a,function(a,b){f[b].update&&a!==i.data[b]&&f[b].update(a,
!1,null,!1)});else{e.xIncrement=null;e.colorCounter=0;o(this.parallelArrays,function(a){e[a+"Data"].length=0});if(n&&h>n){for(c=0;k===null&&c<h;)k=a[c],c++;if(C(k)){m=q(i.pointStart,0);k=q(i.pointInterval,1);for(c=0;c<h;c++)p[c]=m,r[c]=a[c],m+=k;e.xIncrement=m}else if(Ja(k))if(s)for(c=0;c<h;c++)k=a[c],p[c]=k[0],r[c]=k.slice(1,s+1);else for(c=0;c<h;c++)k=a[c],p[c]=k[0],r[c]=k[1];else ga(12)}else for(c=0;c<h;c++)if(a[c]!==t&&(k={series:e},e.pointClass.prototype.applyOptions.apply(k,[a[c]]),e.updateParallelArrays(k,
c),m&&v(k.name)))l.names[k.x]=k.name;Ca(r[0])&&ga(14,!0);e.data=[];e.options.data=e.userOptions.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}i.legendType==="point"&&(this.processData(),this.generatePoints());b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=this.getExtremesFromAll||j.getExtremesFromAll,l=this.isCartesian,
j=h&&h.val2lin,m=h&&h.isLog,n,p;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),n=a.min,p=a.max;if(l&&this.sorted&&!k&&(!i||d>i||this.forceCrop))if(b[d-1]<n||b[0]>p)b=[],c=[];else if(b[0]<n||b[d-1]>p)e=this.cropData(this.xData,this.yData,n,p),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length||1;--i;)d=m?j(b[i])-j(b[i-1]):b[i]-b[i-1],d>0&&(g===t||d<g)?g=d:d<0&&this.requireSorting&&ga(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=
c;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=q(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=w(0,i-h);break}for(c=i;c<e;c++)if(a[c]>d){g=c+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],m;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=
h+m,j?(l[m]=(new f).init(this,[d[m]].concat(ua(e[m]))),l[m].dataGroup=this.groupMap[m]):(b[i]?k=b[i]:a[i]!==t&&(b[i]=k=(new f).init(this,a[i],d[m])),l[m]=k),l[m].index=i;if(b&&(g!==(c=b.length)||j))for(m=0;m<c;m++)if(m===h&&!j&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=t;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<
d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==t&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=Ma(e);this.dataMax=Da(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,
j=i==="between"||C(i),k=a.threshold,l=a.startFromThreshold?k:0,m,n,p,r,s=Number.MAX_VALUE,a=0;a<g;a++){var o=f[a],u=o.x,x=o.y;n=o.low;var D=b&&e.stacks[(this.negStacks&&x<(l?0:k)?"-":"")+this.stackKey];if(e.isLog&&x!==null&&x<=0)o.y=x=null,ga(10);o.plotX=m=ka(G(w(-1E5,c.translate(u,0,0,0,1,i,this.type==="flags")),1E5));if(b&&this.visible&&!o.isNull&&D&&D[u])r=this.getStackIndicator(r,u,this.index),D=D[u],x=D.points[r.key],n=x[0],x=x[1],n===l&&(n=q(k,e.min)),e.isLog&&n<=0&&(n=null),o.total=o.stackTotal=
D.total,o.percentage=D.total&&o.y/D.total*100,o.stackY=x,D.setOffset(this.pointXOffset||0,this.barW||0);o.yBottom=v(n)?e.translate(n,0,1,0,1):null;h&&(x=this.modifyValue(x,o));o.plotY=n=typeof x==="number"&&x!==Infinity?G(w(-1E5,e.translate(x,0,1,0,1)),1E5):t;o.isInside=n!==t&&n>=0&&n<=e.len&&m>=0&&m<=c.len;o.clientX=j?c.translate(u,0,0,0,1):m;o.negative=o.y<(k||0);o.category=d&&d[o.x]!==t?d[o.x]:o.x;o.isNull||(p!==void 0&&(s=G(s,S(m-p))),p=m)}this.closestPointRangePx=s},getValidPoints:function(a,
b){var c=this.chart;return Fa(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,g=f||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(","),i=b[h],j=b[h+"m"];if(!i){if(a)g.width=0,b[h+"m"]=j=d.clipRect(-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight);b[h]=i=d.clipRect(g)}a&&(i.count+=1);if(c.clip!==
!1)this.group.clip(a||f?i:b.clipRect),this.markerGroup.clip(j),this.sharedClipKey=h;a||(i.count-=1,i.count<=0&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,d;if(c&&!ea(c))c=W[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();O(this,"afterAnimate")},
drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,m=this.pointAttr[""],n,p,r,s=this.markerGroup,o=q(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,k=g.graphic,n=g.marker||{},p=!!g.marker,a=o&&n.enabled===t||n.enabled,r=g.isInside,a&&C(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=q(n.symbol,this.symbol),j=i.indexOf("url")===
0,k)k[r?"show":"hide"](!0).attr(a).animate(A({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(r&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,p?n:l).attr(a).add(s)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=q(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=W[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor,
i={stroke:g,fill:g},j=a.points||[],k,l=[],m,n=a.pointAttrToOptions;f=a.hasPointSpecificOptions;var p=c.lineColor,r=c.fillColor;k=b.turboThreshold;var s=a.zones,F=a.zoneAxis||"y",u,x;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||va(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||va(e.negativeColor||h).brighten(e.brightness).get());l[""]=a.convertAttribs(c,i);o(["hover","select"],function(b){l[b]=
a.convertAttribs(d[b],l[""])});a.pointAttr=l;g=j.length;if(!k||g<k||f)for(;g--;){k=j[g];if((c=k.options&&k.options.marker||k.options)&&c.enabled===!1)c.radius=0;i=null;if(s.length){f=0;for(i=s[f];k[F]>=i.value;)i=s[++f];k.color=k.fillColor=i=q(i.color,a.color)}f=b.colorByPoint||k.color;if(k.options)for(x in n)v(c[n[x]])&&(f=!0);if(f){c=c||{};m=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker||k.negative&&!f.fillColor&&!e.fillColor)f[a.pointAttrToOptions.fill]=f.color||!k.options.color&&e[k.negative&&
h?"negativeColor":"color"]||va(k.color).brighten(f.brightness||e.brightness).get();u={color:k.color};if(!r)u.fillColor=k.color;if(!p)u.lineColor=k.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;if(i&&!e.fillColor)f.fillColor=i;m[""]=a.convertAttribs(A(u,c),l[""]);m.hover=a.convertAttribs(d.hover,l.hover,m[""]);m.select=a.convertAttribs(d.select,l.select,m[""])}else m=l;k.pointAttr=m}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(Na),d,e=a.data||[],f,g,h;O(a,"destroy");
T(a);o(a.axisTypes||[],function(b){if(h=a[b])za(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof Z&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;za(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,g,h=[],i,a=a||d.points;(g=a.reversed)&&
a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);e.connectNulls&&!b&&!c&&(a=this.getValidPoints(a));o(a,function(g,k){var l=g.plotX,m=g.plotY,n=a[k-1];if((g.leftCliff||n&&n.rightCliff)&&!c)i=!0;g.isNull&&!v(b)&&k>0?i=!e.connectNulls:g.isNull&&!b?i=!0:(k===0||i?n=["M",g.plotX,g.plotY]:d.getPointSpline?n=d.getPointSpline(a,g,k):f?(n=f===1?["L",n.plotX,m]:f===2?["L",(n.plotX+l)/2,n.plotY,"L",(n.plotX+l)/2,m]:["L",l,n.plotY],n.push("L",l,m)):n=["L",l,m],h.push.apply(h,n),i=!1)});return d.graphPath=
h},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=(this.gappedPath||this.getGraphPath).call(this),g=this.fillGraph&&this.color||"none";o(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});o(c,function(c,i){var j=c[0],k=a[j];if(k)k.animate({d:f});else if((d||g)&&f.length)k={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?k.dashstyle=c[2]:e&&(k["stroke-linecap"]=k["stroke-linejoin"]=
"round"),a[j]=a.chart.renderer.path(f).attr(k).add(a.group).shadow(i<2&&b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,j=this.area,k=w(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],m,n=l.reversed,p=b.inverted,r=l.horiz,s,F,u,x=!1;if(d.length&&(i||j)&&l.min!==t)i&&i.hide(),j&&j.hide(),m=l.getExtremes(),o(d,function(d,o){e=n?r?b.plotWidth:0:r?0:l.toPixels(m.min);e=G(w(q(f,e),0),k);f=G(w(y(l.toPixels(q(d.value,
m.max),!0)),0),k);x&&(e=f=l.toPixels(m.max));s=Math.abs(e-f);F=G(e,f);u=w(e,f);if(l.isXAxis){if(h={x:p?u:F,y:0,width:s,height:k},!r)h.x=b.plotHeight-h.x}else if(h={x:0,y:p?u:F,width:k,height:s},r)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:n?F:u,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[o]?g[o].animate(h):(g[o]=c.clipRect(h),i&&a["zoneGraph"+o].clip(g[o]),j&&a["zoneArea"+o].clip(g[o]));x=d.value>m.max}),this.clips=
g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};o(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)E(c,"resize",a),E(b,"destroy",function(){T(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({zIndex:d||0.1}).add(e),f.addClass("highcharts-series-"+this.index));f.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=
this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&gb(d.animation).duration,f=a.visible?"inherit":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:
!1;a.drawGraph&&(a.drawGraph(),a.applyZones());o(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)a.animationTimeout=Za(function(){a.afterAnimate()},e);a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,
d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:q(d&&d.left,a.plotLeft),translateY:q(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
e,f){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[e%f],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,c=b.kdDimensions;delete b.kdTree;Za(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,j,k){var l=b.point,m=d.kdAxisArray[j%k],n,p,r=l;p=v(a[e])&&v(l[e])?Math.pow(a[e]-l[e],2):null;n=v(a[f])&&v(l[f])?Math.pow(a[f]-l[f],2):null;
n=(p||0)+(n||0);l.dist=v(n)?Math.sqrt(n):Number.MAX_VALUE;l.distX=v(p)?Math.sqrt(p):Number.MAX_VALUE;m=a[m]-l[m];n=m<0?"left":"right";p=m<0?"right":"left";b[n]&&(n=c(a,b[n],j+1,k),r=n[g]<r[g]?n:l);b[p]&&Math.sqrt(m*m)<r[g]&&(a=c(a,b[p],j+1,k),r=a[g]<r[g]?a:r);return r}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Tb.prototype={destroy:function(){Pa(this,this.axis)},
render:function(a){var b=this.options,c=b.format,c=c?La(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=S(g-c),h=d.xAxis[0].translate(this.x)+
a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};Ba.prototype.getStacks=function(){var a=this;o(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});o(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+q(b.options.stack,"")})};J.prototype.buildStacks=
function(){var a=this.series,b,c=q(this.options.reversedStacks,!0),d=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=d;e--;)a[c?e:d-e-1].setStackedPoints();for(e=d;e--;)b=a[c?e:d-e-1],b.setStackCliffs&&b.setStackCliffs();if(this.usePercentage)for(e=0;e<d;e++)a[e].setPercentStacks()}};J.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,
a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};J.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),delete a[b][c]):(a[b][c].total=null,a[b][c].cum=0)};J.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};P.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==
!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,j="-"+i,k=this.negStacks,l=this.yAxis,m=l.stacks,n=l.oldStacks,p,r,s,o,u,x,D;l.stacksTouched+=1;for(u=0;u<d;u++){x=a[u];D=b[u];p=this.getStackIndicator(p,x,this.index);o=p.key;s=(r=k&&D<(g?0:f))?j:i;m[s]||(m[s]={});if(!m[s][x])n[s]&&n[s][x]?(m[s][x]=n[s][x],m[s][x].total=null):m[s][x]=new Tb(l,
l.options.stackLabels,r,x,h);s=m[s][x];if(D!==null)s.points[o]=s.points[this.index]=[q(s.cum,g)],s.touched=l.stacksTouched,p.index>0&&this.singleStacks===!1&&(s.points[o][0]=s.points[this.index+","+x+",0"][0]);e==="percent"?(r=r?i:j,k&&m[r]&&m[r][x]?(r=m[r][x],s.total=r.total=w(r.total,s.total)+S(D)||0):s.total=ka(s.total+(S(D)||0))):s.total=ka(s.total+(D||0));s.cum=q(s.cum,g)+(D||0);if(D!==null)s.points[o].push(s.cum),c[u]=s.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=c;l.oldStacks=
{}}};P.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData,e;o([b,"-"+b],function(b){var f;for(var g=d.length,h,i;g--;)if(h=d[g],e=a.getStackIndicator(e,h,a.index),f=(i=c[b]&&c[b][h])&&i.points[e.key],h=f)i=i.total?100/i.total:0,h[0]=ka(h[0]*i),h[1]=ka(h[1]*i),a.stackedYData[g]=h[1]})};P.prototype.getStackIndicator=function(a,b,c){!v(a)||a.x!==b?a={x:b,index:0}:a.index++;a.key=[c,b,a.index].join(",");return a};A(Ba.prototype,{addSeries:function(a,b,c){var d,
e=this;a&&(b=q(b,!0),O(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options,a=z(a,{index:this[e].length,isX:b});new J(this,a);f[e]=ua(f[e]||{});f[e].push(a);q(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&N(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=
d=fa(Va,{className:"highcharts-loading"},A(e.style,{zIndex:10,display:"none"}),b.container),b.loadingSpan=fa("span",null,e.labelStyle,d),E(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)N(d,{opacity:0,display:""}),db(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&db(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){N(b,{display:"none"})}});this.loadingShown=
!1}});A(Ha.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(f.y===null&&h)f.graphic=h.destroy();if(ea(a)&&!Ja(a))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;k.data[i]=ea(k.data[i])&&!Ja(k.data[i])?f.options:a;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;if(k.legendType===
"point")j.isDirtyLegend=!0;b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,l=g.xAxis&&g.xAxis.names,b=q(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(sa(this,this.series.data),a,b)}});A(P.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,j=e.chart,k=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,m=["graph","area"],h=f.data,n,p=e.xData;$a(d,j);if(c){for(d=e.zones.length;d--;)m.push("zoneGraph"+
d,"zoneArea"+d);o(m,function(a){if(e[a])e[a].shift=l+(f.step?2:1)})}if(i)i.isArea=!0;b=q(b,!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);m=i.x;d=p.length;if(e.requireSorting&&m<p[d-1])for(n=!0;d&&p[d-1]>m;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(k&&i.name)k[m]=i.name;h.splice(d,0,a);n&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,
"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),j.redraw())},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){g&&g.length===e.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};$a(c,h);b=q(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart;O(c,"remove",null,function(){c.destroy();
d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();q(a,!0)&&d.redraw(b)})},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=I[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;o(h,function(a){h[a]=c[a];delete c[a]});a=z(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=t;A(this,I[a.type||f].prototype);o(h,function(a){c[a]=h[a]});this.init(d,
a);d.linkSeries();q(b,!0)&&d.redraw(!1)}});A(J.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=z(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=t;this.init(c,A(a,{events:t}));c.isDirtyBox=!0;q(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);za(b.axes,this);za(b[c],this);b.options[c].splice(this.options.index,1);o(b[c],function(a,b){a.options.index=b});
this.destroy();b.isDirtyBox=!0;q(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var Ia=ma(P);I.line=Ia;W.area=z(da,{softThreshold:!1,threshold:0});var ya=ma(P,{type:"area",singleStacks:!1,getStackPoints:function(){var a=[],b=[],c=this.xAxis,d=this.yAxis,e=d.stacks[this.stackKey],f={},g=this.points,h=this.index,i=d.series,j=i.length,k,l=q(d.options.reversedStacks,!0)?1:-1,m,n;if(this.options.stacking){for(m=0;m<g.length;m++)f[g[m].x]=
g[m];for(n in e)e[n].total!==null&&b.push(n);b.sort(function(a,b){return a-b});k=ta(i,function(){return this.visible});o(b,function(g,i){var n=0,q,u;if(f[g]&&!f[g].isNull)a.push(f[g]),o([-1,1],function(a){var c=a===1?"rightNull":"leftNull",d=0,n=e[b[i+a]];if(n)for(m=h;m>=0&&m<j;)q=n.points[m],q||(m===h?f[g][c]=!0:k[m]&&(u=e[g].points[m])&&(d-=u[1]-u[0])),m+=l;f[g][a===1?"rightCliff":"leftCliff"]=d});else{for(m=h;m>=0&&m<j;){if(q=e[g].points[m]){n=q[1];break}m+=l}n=d.toPixels(n,!0);a.push({isNull:!0,
plotX:c.toPixels(g,!0),plotY:n,yBottom:n})}})}return a},getGraphPath:function(a){var b=P.prototype.getGraphPath,c=this.options,d=c.stacking,e=this.yAxis,f,g,h=[],i=[],j=this.index,k,l=e.stacks[this.stackKey],m=c.threshold,n=e.getThreshold(c.threshold),p,c=c.connectNulls||d==="percent",r=function(b,c,f){var g=a[b],b=d&&l[g.x].points[j],p=g[f+"Null"]||0,f=g[f+"Cliff"]||0,r,o,g=!0;f||p?(r=(p?b[0]:b[1])+f,o=b[0]+f,g=!!p):!d&&a[c]&&a[c].isNull&&(r=o=m);r!==void 0&&(i.push({plotX:k,plotY:r===null?n:e.getThreshold(r),
isNull:g}),h.push({plotX:k,plotY:o===null?n:e.getThreshold(o)}))},a=a||this.points;d&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,k=q(a[f].rectPlotX,a[f].plotX),p=q(a[f].yBottom,n),!g||c){c||r(f,f-1,"left");if(!g||d||!c)i.push(a[f]),h.push({x:f,plotX:k,plotY:p});c||r(f,f+1,"right")}f=b.call(this,i,!0,!0);h.reversed=!0;g=b.call(this,h,!0,!0);g.length&&(g[0]="L");f=f.concat(g);b=b.call(this,i,!1,c);this.areaPath=f;return b},drawGraph:function(){this.areaPath=[];P.prototype.drawGraph.apply(this);
var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];o(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});o(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):(g={fill:d[2]||d[1],zIndex:0},d[2]||(g["fill-opacity"]=q(c.fillOpacity,0.75)),a[f]=a.chart.renderer.path(b).attr(g).add(a.group))})},drawLegendSymbol:aa.drawRectangle});I.area=ya;W.spline=z(da);Ia=ma(P,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-
1],c=a[c+1],g,h,i,j;if(f&&!f.isNull&&c&&!c.isNull){a=f.plotY;i=c.plotX;var c=c.plotY,k=0;g=(1.5*d+f.plotX)/2.5;h=(1.5*e+a)/2.5;i=(1.5*d+i)/2.5;j=(1.5*e+c)/2.5;i!==g&&(k=(j-h)*(i-d)/(i-g)+e-j);h+=k;j+=k;h>a&&h>e?(h=w(a,e),j=2*e-h):h<a&&h<e&&(h=G(a,e),j=2*e-h);j>c&&j>e?(j=w(c,e),h=2*e-j):j<c&&j<e&&(j=G(c,e),h=2*e-j);b.rightContX=i;b.rightContY=j}b=["C",q(f.rightContX,f.plotX),q(f.rightContY,f.plotY),q(g,d),q(h,e),d,e];f.rightContX=f.rightContY=null;return b}});I.spline=Ia;W.areaspline=z(W.area);ya=
ya.prototype;Ia=ma(Ia,{type:"areaspline",getStackPoints:ya.getStackPoints,getGraphPath:ya.getGraphPath,setStackCliffs:ya.setStackCliffs,drawGraph:ya.drawGraph,drawLegendSymbol:aa.drawRectangle});I.areaspline=Ia;W.column=z(da,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,
y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});Ia=ma(P,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){P.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=
c.reversed,f,g={},h=0;b.grouping===!1?h=1:o(a.chart.series,function(b){var c=b.options,e=b.yAxis,i;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===t&&(g[f]=h++),i=g[f]):c.grouping!==!1&&(i=h++),b.columnIndex=i});var i=G(S(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=i*b.groupPadding,k=(i-2*j)/h,b=G(b.maxPointWidth||c.len,q(b.pointWidth,k*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(k-b)/2+(j+((a.columnIndex||
0)+(e?1:0))*k-i/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,b,c,d){var e=this.chart,f=this.borderWidth,g=-(f%2?0.5:0),f=f%2?0.5:1;e.inverted&&e.renderer.isVML&&(f+=1);c=Math.round(a+c)+g;a=Math.round(a)+g;c-=a;d=Math.round(b+d)+f;g=S(b)<=0.5&&d>0.5;b=Math.round(b)+f;d-=b;g&&d&&(b-=1,d+=1);return{x:a,y:b,width:c,height:d}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=q(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),
g=q(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,j=a.barW=w(i,1+2*d),k=a.pointXOffset=h.offset;b.inverted&&(f-=0.5);c.pointPadding&&(j=Ea(j));P.prototype.translate.apply(a);o(a.points,function(c){var d=G(q(c.yBottom,f),9E4),h=999+S(d),h=G(w(-h,c.plotY),e.len+h),p=c.plotX+k,r=j,o=G(h,d),F,u=w(h,d)-o;S(u)<g&&g&&(u=g,F=!e.reversed&&!c.negative||e.reversed&&c.negative,o=S(o-f)>g?d-g:f-(F?g:0));c.barX=p;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-p-r/2,u]:[p+r/
2,h+e.pos-b.plotTop,u];c.shapeType="rect";c.shapeArgs=a.crispCol(p,o,r,u)})},getSymbol:ra,drawLegendSymbol:aa.drawRectangle,drawGraph:ra,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;o(a.points,function(h){var i=h.graphic,j;if(C(h.plotY)&&h.y!==null)f=h.shapeArgs,j=v(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],i?(Sa(i),i.attr(j).attr(g)[b.pointCount<e?"animate":"attr"](z(f))):h.graphic=
d[h.shapeType](f).attr(j).attr(g).add(h.group||a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(i)h.graphic=i.destroy()})},animate:function(a){var b=this,c=this.yAxis,d=b.options,e=this.chart.inverted,f={};if(ja)a?(f.scaleY=0.001,a=G(c.pos+c.len,w(c.pos,c.toPixels(d.threshold))),e?f.translateX=a-c.len:f.translateY=a,b.group.attr(f)):(f[e?"translateX":"translateY"]=c.pos,b.group.animate(f,A(gb(b.options.animation),{step:function(a,c){b.group.attr({scaleY:w(0.001,c.pos)})}})),b.animate=
null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0});P.prototype.remove.apply(a,arguments)}});I.column=Ia;W.bar=z(W.column);ya=ma(Ia,{type:"bar",inverted:!0});I.bar=ya;W.scatter=z(da,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});ya=ma(P,{type:"scatter",
sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&P.prototype.drawGraph.call(this)}});I.scatter=ya;W.pie=z(da,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,
slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});da={type:"pie",isCartesian:!1,pointClass:ma(Ha,{init:function(){Ha.prototype.init.apply(this,arguments);var a=this,b;a.name=q(a.name,"Slice");b=function(b){a.slice(b.type==="select")};E(a,"select",b);E(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,b=q(b,f);if(a!==c.visible){c.visible=c.options.visible=a=a===t?!c.visible:a;d.options.data[sa(c,
d.data)]=c.options;o(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;$a(c,d.chart);q(b,!0);this.sliced=this.options.sliced=a=v(a)?a:!this.sliced;d.options.data[sa(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},
haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)o(c,function(a){var c=
a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){P.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();
var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=Aa/180*(i-90),i=(this.endAngleRad=Aa/180*(q(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,n=k.length,p;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=Y.asin(G((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*ca(h)*(a[2]/2+l)};for(m=0;m<n;m++){p=k[m];f=j+b*i;if(!c||p.visible)b+=p.percentage/100;g=j+b*i;p.shapeType="arc";p.shapeArgs={x:a[0],y:a[1],
r:a[2]/2,innerR:a[3]/2,start:y(f*1E3)/1E3,end:y(g*1E3)/1E3};h=(g+f)/2;h>1.5*Aa?h-=2*Aa:h<-Aa/2&&(h+=2*Aa);p.slicedTranslation={translateX:y(ca(h)*d),translateY:y(la(h)*d)};f=ca(h)*a[2]/2;g=la(h)*a[2]/2;p.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];p.half=h<-Aa/2||h>Aa/2?1:0;p.angle=h;e=G(e,l/2);p.labelPos=[a[0]+f+ca(h)*l,a[1]+g+la(h)*l,a[0]+f+ca(h)*e,a[1]+g+la(h)*e,a[0]+f,a[1]+g,l<0?"center":p.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,
f,g,h,i;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);o(a.points,function(j){if(j.y!==null){d=j.graphic;h=j.shapeArgs;f=j.shadowGroup;g=j.pointAttr[j.selected?"select":""];if(!g.stroke)g.stroke=g.fill;if(e&&!f)f=j.shadowGroup=b.g("shadow").add(a.shadowGroup);c=j.sliced?j.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.setRadialReference(a.center).attr(g).animate(A(h,c));else{i={"stroke-linejoin":"round"};if(!j.visible)i.visibility="hidden";j.graphic=d=b[j.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,
f)}}})},searchPoint:ra,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:aa.drawRectangle,getCenter:bc.getCenter,getSymbol:ra};da=ma(P,da);I.pie=da;P.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j,k=q(d.defer,!0),l=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),j=a.plotGroup("dataLabelsGroup","data-labels",k&&!h?"hidden":
"visible",d.zIndex||6),k&&(j.attr({opacity:+h}),h||E(a,"afterAnimate",function(){a.visible&&j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,o(e,function(e){var h,k=e.dataLabel,r,o,F=e.connector,u=!0,x,D={};f=e.dlOptions||e.options&&e.options.dataLabels;h=q(f&&f.enabled,g.enabled)&&e.y!==null;if(k&&!h)e.dataLabel=k.destroy();else if(h){d=z(g,f);x=d.style;h=d.rotation;r=e.getLabelConfig();i=d.format?La(d.format,r):d.formatter.call(r,d);x.color=q(d.color,x.color,a.color,"black");
if(k)if(v(i))k.attr({text:i}),u=!1;else{if(e.dataLabel=k=k.destroy(),F)e.connector=F.destroy()}else if(v(i)){k={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(x.color==="contrast")D.color=d.inside||d.distance<0||b.stacking?l.getContrast(e.color||a.color):"#000000";if(c)D.cursor=c;for(o in k)k[o]===t&&delete k[o];k=e.dataLabel=l[h?"text":"label"](i,0,-9999,d.shape,null,null,d.useHTML).attr(k).css(A(x,D)).add(j).shadow(d.shadow)}k&&
a.alignDataLabel(e,k,d,null,u)}})};P.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=q(a.plotX,-9999),i=q(a.plotY,-9999),j=b.getBBox(),k=f.renderer.fontMetrics(c.style.fontSize).b,l=c.rotation,m=c.align,n=this.visible&&(a.series.forceDL||f.isInsidePlot(h,y(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)),p=q(c.overflow,"justify")==="justify";if(n)d=A({x:g?f.plotWidth-i:h,y:y(g?f.plotHeight-h:i),width:0,height:0},d),A(c,{width:j.width,height:j.height}),l?(p=!1,g=f.renderer.rotCorr(k,
l),g={x:d.x+c.x+d.width/2+g.x,y:d.y+c.y+{top:0,middle:0.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](g).attr({align:m}),h=(l+720)%360,h=h>180&&h<360,m==="left"?g.y-=h?j.height:0:m==="center"?(g.x-=j.width/2,g.y-=j.height/2):m==="right"&&(g.x-=j.width,g.y-=h?0:j.height)):(b.align(c,null,d),g=b.alignAttr),p?this.justifyDataLabel(b,c,g,j,d,e):q(c.crop,!0)&&(n=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)),c.shape&&!l&&b.attr({anchorX:a.plotX,anchorY:a.plotY});if(!n)Sa(b),
b.attr({y:-9999}),b.placed=!1};P.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k,l=a.box?0:a.padding||0;j=c.x+l;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width-l;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y+l;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height-l;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(I.pie)I.pie.prototype.drawDataLabels=
function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=q(e.connectorPadding,10),g=q(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,l=q(e.softConnector,!0),m=e.distance,n=a.center,p=n[2]/2,r=n[1],s=m>0,F,u,x,D=[[],[]],v,t,A,B,z,C=[0,0,0,0],H=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){P.prototype.drawDataLabels.apply(a);o(b,function(a){if(a.dataLabel&&a.visible)D[a.half].push(a),a.dataLabel._pos=null});for(B=2;B--;){var E=[],L=[],K=D[B],I=K.length,
J;if(I){a.sortByAngle(K,B-0.5);for(z=b=0;!b&&K[z];)b=K[z]&&K[z].dataLabel&&(K[z].dataLabel.getBBox().height||21),z++;if(m>0){u=G(r+p+m,d.plotHeight);for(z=w(0,r-p-m);z<=u;z+=b)E.push(z);u=E.length;if(I>u){c=[].concat(K);c.sort(H);for(z=I;z--;)c[z].rank=z;for(z=I;z--;)K[z].rank>=u&&K.splice(z,1);I=K.length}for(z=0;z<I;z++){c=K[z];x=c.labelPos;c=9999;var N,M;for(M=0;M<u;M++)N=S(E[M]-x[1]),N<c&&(c=N,J=M);if(J<z&&E[z]!==null)J=z;else for(u<I-z+J&&E[z]!==null&&(J=u-I+z);E[J]===null;)J++;L.push({i:J,y:E[J]});
E[J]=null}L.sort(H)}for(z=0;z<I;z++){c=K[z];x=c.labelPos;F=c.dataLabel;A=c.visible===!1?"hidden":"inherit";c=x[1];if(m>0){if(u=L.pop(),J=u.i,t=u.y,c>t&&E[J+1]!==null||c<t&&E[J-1]!==null)t=G(w(0,c),d.plotHeight)}else t=c;v=e.justify?n[0]+(B?-1:1)*(p+m):a.getX(t===r-p-m||t===r+p+m?c:t,B);F._attr={visibility:A,align:x[6]};F._pos={x:v+e.x+({left:f,right:-f}[x[6]]||0),y:t+e.y-10};F.connX=v;F.connY=t;if(this.options.size===null)u=F.width,v-u<f?C[3]=w(y(u-v+f),C[3]):v+u>h-f&&(C[1]=w(y(v+u-h+f),C[1])),t-
b/2<0?C[0]=w(y(-t+b/2),C[0]):t+b/2>i&&(C[2]=w(y(t+b/2-i),C[2]))}}}if(Da(C)===0||this.verifyDataLabelOverflow(C))this.placeDataLabels(),s&&g&&o(this.points,function(b){j=b.connector;x=b.labelPos;if((F=b.dataLabel)&&F._pos&&b.visible)A=F._attr.visibility,v=F.connX,t=F.connY,k=l?["M",v+(x[6]==="left"?5:-5),t,"C",v,t,2*x[2]-x[4],2*x[3]-x[5],x[2],x[3],"L",x[4],x[5]]:["M",v+(x[6]==="left"?5:-5),t,"L",x[2],x[3],"L",x[4],x[5]],j?(j.animate({d:k}),j.attr("visibility",A)):b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,
stroke:e.connectorColor||b.color||"#606060",visibility:A}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},I.pie.prototype.placeDataLabels=function(){o(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999})})},I.pie.prototype.alignDataLabel=ra,I.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=w(b[2]-w(a[1],a[3]),
e):(f=w(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=w(G(f,b[2]-w(a[0],a[2])),e):(f=w(G(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=Math.min(/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),f),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(I.column)I.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=q(a.below,a.plotY>q(this.translatedThreshold,
g.yAxis.len)),j=q(c.inside,!!this.options.stacking);if(h){d=z(h);if(d.y<0)d.height+=d.y,d.y=0;h=d.y+d.height-g.yAxis.len;h>0&&(d.height-=h);f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width});if(!j)f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)}c.align=q(c.align,!f||j?"center":i?"right":"left");c.verticalAlign=q(c.verticalAlign,f||j?"middle":i?"top":"bottom");P.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,
d=a.pick,e=a.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels,f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,j,k,l,m,n,p,r;for(e=0;e<b;e++)if(d=
a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<b;e++){j=a[e];for(d=e+1;d<b;++d)if(k=a[d],j&&k&&j.placed&&k.placed&&j.newOpacity!==0&&k.newOpacity!==0&&(l=j.alignAttr,m=k.alignAttr,n=j.parentGroup,p=k.parentGroup,r=2*(j.box?0:j.padding),l=!(m.x+p.translateX>l.x+n.translateX+(j.width-r)||m.x+p.translateX+(k.width-r)<l.x+n.translateX||m.y+p.translateY>l.y+n.translateY+(j.height-r)||m.y+p.translateY+(k.height-r)<l.y+n.translateY)))(j.labelrank<
k.labelrank?j:k).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b);a.isOld=!0}})}})(B);var mb=B.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==t&&d!==b.hoverPoint)d.onMouseOver(a)};o(a.points,function(a){if(a.graphic)a.graphic.element.point=
a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)o(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),cb))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},m=function(){if(f.hoverSeries!==
a)a.onMouseOver()},n="rgba(192,192,192,"+(ja?1.0E-4:0.002)+")";if(e&&!c)for(k=e+1;k--;)d[k]==="M"&&d.splice(k+1,0,d[k+1]-i,d[k+2],"L"),(k&&d[k]==="M"||k===e)&&d.splice(k,0,"L",d[k-2]+i,d[k-1]);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),o([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);
if(cb)a.on("touchstart",m)}))}};if(I.column)Ia.prototype.drawTracker=mb.drawTrackerPoint;if(I.pie)I.pie.prototype.drawTracker=mb.drawTrackerPoint;if(I.scatter)ya.prototype.drawTracker=mb.drawTrackerPoint;A(ub.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()},b={browserEvent:b};
a.firePointEvent?a.firePointEvent("legendItemClick",b,c):O(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=fa("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){O(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});R.legend.itemStyle.cursor="pointer";A(Ba.prototype,{showResetZoom:function(){var a=this,b=R.lang,c=a.options.chart.resetZoomButton,
d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;O(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?o(this.axes,function(a){b=a.zoom()}):o(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?
"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&ea(e))this.resetZoomButton=e.destroy();b&&this.redraw(q(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&o(d,function(a){a.setState()});o(b==="xy"?[1,0]:[1],function(b){var b=c[b?"xAxis":"yAxis"][0],d=b.horiz,h=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",i=c[d],j=(b.pointRange||
0)/2,k=b.getExtremes(),l=b.toValue(i-h,!0)+j,j=b.toValue(i+b.len-h,!0)-j,i=i>h;if(b.series.length&&(i||l>G(k.dataMin,k.min))&&(!i||j<w(k.dataMax,k.max)))b.setExtremes(l,j,!1,!1,{trigger:"pan"}),e=!0;c[d]=h});e&&c.redraw(!1);N(c.container,{cursor:"move"})}});A(Ha.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=q(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[sa(c,d.data)]=c.options;c.setState(a&&"select");
b||o(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[sa(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=
this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||sa(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=z(this.series.options.point,this.options).events,b;this.events=a;for(b in a)E(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=V(this.plotX),d=this.plotY,e=this.series,f=e.options.states,g=W[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,
l=this.marker||{},m=e.chart,n=e.halo,p,a=a||"";p=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&p.r,this.graphic.attr(z(p,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=
k=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(p).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),k.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(m.seriesGroup);n.attr(A({fill:this.color||e.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted,f=Math.floor(this.plotX);
return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:f)-a,d.translateY+(e?b.xAxis.len-f:this.plotY)-a,a*2,a*2)}});A(P.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&O(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&O(this,"mouseOut");c&&!a.stickyTracking&&
(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=
a===t?!h:a)?"show":"hide";o(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&o(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});o(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();O(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=
a=a===t?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;O(this,a?"select":"unselect")},drawTracker:mb.drawTrackerGraph});U(P.prototype,"init",function(a){var b;a.apply(this,Array.prototype.slice.call(arguments,1));(b=this.xAxis)&&b.options.ordinal&&E(this,"updatedData",function(){delete b.ordinalIndex})});U(J.prototype,"getTimeTicks",function(a,b,c,d,e,f,g,h){var i=0,j,k,l={},m,n,p,o=[],q=-Number.MAX_VALUE,F=this.options.tickPixelInterval;if(!this.options.ordinal&&!this.options.breaks||
!f||f.length<3||c===t)return a.call(this,b,c,d,e);n=f.length;for(j=0;j<n;j++){p=j&&f[j-1]>d;f[j]<c&&(i=j);if(j===n-1||f[j+1]-f[j]>g*5||p){if(f[j]>q){for(k=a.call(this,b,f[i],f[j],e);k.length&&k[0]<=q;)k.shift();k.length&&(q=k[k.length-1]);o=o.concat(k)}i=j+1}if(p)break}a=k.info;if(h&&a.unitRange<=M.hour){j=o.length-1;for(i=1;i<j;i++)na("%d",o[i])!==na("%d",o[i-1])&&(l[o[i]]="day",m=!0);m&&(l[o[0]]="day");a.higherRanks=l}o.info=a;if(h&&v(F)){h=a=o.length;j=[];var u;for(m=[];h--;)i=this.translate(o[h]),
u&&(m[h]=u-i),j[h]=u=i;m.sort();m=m[V(m.length/2)];m<F*0.6&&(m=null);h=o[a-1]>d?a-1:a;for(u=void 0;h--;)i=j[h],d=u-i,u&&d<F*0.8&&(m===null||d<m*0.8)?(l[o[h]]&&!l[o[h+1]]?(d=h+1,u=i):d=h,o.splice(d,1)):u=i}return o});A(J.prototype,{beforeSetTickPositions:function(){var a,b=[],c=!1,d,e=this.getExtremes(),f=e.min,g=e.max,h,i=this.isXAxis&&!!this.options.breaks;if((e=this.options.ordinal)||i){o(this.series,function(c,d){if(c.visible!==!1&&(c.takeOrdinalPosition!==!1||i))if(b=b.concat(c.processedXData),
a=b.length,b.sort(function(a,b){return a-b}),a)for(d=a-1;d--;)b[d]===b[d+1]&&b.splice(d,1)});a=b.length;if(a>2){d=b[1]-b[0];for(h=a-1;h--&&!c;)b[h+1]-b[h]!==d&&(c=!0);if(!this.options.keepOrdinalPadding&&(b[0]-f>d||g-b[b.length-1]>d))c=!0}c?(this.ordinalPositions=b,d=this.val2lin(w(f,b[0]),!0),h=w(this.val2lin(G(g,b[b.length-1]),!0),1),this.ordinalSlope=g=(g-f)/(h-d),this.ordinalOffset=f-d*g):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=t}this.isOrdinal=e&&c;this.groupIntervalFactor=
null},val2lin:function(a,b){var c=this.ordinalPositions,d;if(c){var e=c.length,f;for(d=e;d--;)if(c[d]===a){f=d;break}for(d=e-1;d--;)if(a>c[d]||d===0){c=(a-c[d])/(c[d+1]-c[d]);f=d+c;break}d=b?f:this.ordinalSlope*(f||0)+this.ordinalOffset}else d=a;return d},lin2val:function(a,b){var c=this.ordinalPositions;if(c){var d=this.ordinalSlope,e=this.ordinalOffset,f=c.length-1,g,h;if(b)a<0?a=c[0]:a>f?a=c[f]:(f=V(a),h=a-f);else for(;f--;)if(g=d*f+e,a>=g){d=d*(f+1)+e;h=(a-g)/(d-g);break}c=h!==t&&c[f]!==t?c[f]+
(h?h*(c[f+1]-c[f]):0):a}else c=a;return c},getExtendedPositions:function(){var a=this.chart,b=this.series[0].currentDataGrouping,c=this.ordinalIndex,d=b?b.count+b.unitName:"raw",e=this.getExtremes(),f,g;if(!c)c=this.ordinalIndex={};if(!c[d])f={series:[],getExtremes:function(){return{min:e.dataMin,max:e.dataMax}},options:{ordinal:!0},val2lin:J.prototype.val2lin},o(this.series,function(c){g={xAxis:f,xData:c.xData,chart:a,destroyGroupedData:ra};g.options={dataGrouping:b?{enabled:!0,forced:!0,approximation:"open",
units:[[b.unitName,[b.count]]]}:{enabled:!1}};c.processData.apply(g);f.series.push(g)}),this.beforeSetTickPositions.apply(f),c[d]=f.ordinalPositions;return c[d]},getGroupIntervalFactor:function(a,b,c){var d,c=c.processedXData,e=c.length,f=[];d=this.groupIntervalFactor;if(!d){for(d=0;d<e-1;d++)f[d]=c[d+1]-c[d];f.sort(function(a,b){return a-b});f=f[V(e/2)];a=w(a,c[0]);b=G(b,c[e-1]);this.groupIntervalFactor=d=e*f/(b-a)}return d},postProcessTickInterval:function(a){var b=this.ordinalSlope;return b?this.options.breaks?
this.closestPointRange:a/(b/this.closestPointRange):a}});U(Ba.prototype,"pan",function(a,b){var c=this.xAxis[0],d=b.chartX,e=!1;if(c.options.ordinal&&c.series.length){var f=this.mouseDownX,g=c.getExtremes(),h=g.dataMax,i=g.min,j=g.max,k=this.hoverPoints,l=c.closestPointRange,f=(f-d)/(c.translationSlope*(c.ordinalSlope||l)),m={ordinalPositions:c.getExtendedPositions()},l=c.lin2val,n=c.val2lin,p;if(m.ordinalPositions){if(S(f)>1)k&&o(k,function(a){a.setState()}),f<0?(k=m,p=c.ordinalPositions?c:m):(k=
c.ordinalPositions?c:m,p=m),m=p.ordinalPositions,h>m[m.length-1]&&m.push(h),this.fixedRange=j-i,f=c.toFixedRange(null,null,l.apply(k,[n.apply(k,[i,!0])+f,!0]),l.apply(p,[n.apply(p,[j,!0])+f,!0])),f.min>=G(g.dataMin,i)&&f.max<=w(h,j)&&c.setExtremes(f.min,f.max,!0,!1,{trigger:"pan"}),this.mouseDownX=d,N(this.container,{cursor:"move"})}else e=!0}else e=!0;e&&a.apply(this,Array.prototype.slice.call(arguments,1))});P.prototype.gappedPath=function(){var a=this.options.gapSize,b=this.points.slice(),c=b.length-
1;if(a&&c>0)for(;c--;)b[c+1].x-b[c].x>this.closestPointRange*a&&b.splice(c+1,0,{isNull:!0});return this.getGraphPath(b)};(function(a){a(B)})(function(a){function b(){return Array.prototype.slice.call(arguments,1)}function c(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,d(this.pointArrayMap,["y"]))}var d=a.pick,e=a.wrap,f=a.each,g=a.extend,h=a.fireEvent,i=a.Axis,j=a.Series;g(i.prototype,{isInBreak:function(a,b){var c=a.repeat||Infinity,d=a.from,e=a.to-a.from,c=b>=d?
(b-d)%c:c-(d-b)%c;return a.inclusive?c<=e:c<e&&c!==0},isInAnyBreak:function(a,b){var c=this.options.breaks,e=c&&c.length,f,g,h;if(e){for(;e--;)this.isInBreak(c[e],a)&&(f=!0,g||(g=d(c[e].showPoints,this.isXAxis?!1:!0)));h=f&&b?f&&!g:f}return h}});e(i.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var b=this.tickPositions,c=this.tickPositions.info,d=[],e;for(e=0;e<b.length;e++)this.isInAnyBreak(b[e])||d.push(b[e]);this.tickPositions=
d;this.tickPositions.info=c}});e(i.prototype,"init",function(a,b,c){if(c.breaks&&c.breaks.length)c.ordinal=!1;a.call(this,b,c);if(this.options.breaks){var d=this;d.isBroken=!0;this.val2lin=function(a){var b=a,c,e;for(e=0;e<d.breakArray.length;e++)if(c=d.breakArray[e],c.to<=a)b-=c.len;else if(c.from>=a)break;else if(d.isInBreak(c,a)){b-=a-c.from;break}return b};this.lin2val=function(a){var b,c;for(c=0;c<d.breakArray.length;c++)if(b=d.breakArray[c],b.from>=a)break;else b.to<a?a+=b.len:d.isInBreak(b,
a)&&(a+=b.len);return a};this.setExtremes=function(a,b,c,d,e){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange;i.prototype.setExtremes.call(this,a,b,c,d,e)};this.setAxisTranslation=function(a){i.prototype.setAxisTranslation.call(this,a);var b=d.options.breaks,a=[],c=[],e=0,f,g,k=d.userMin||d.min,j=d.userMax||d.max,l,m;for(m in b)g=b[m],f=g.repeat||Infinity,d.isInBreak(g,k)&&(k+=g.to%f-k%f),d.isInBreak(g,j)&&(j-=j%f-g.from%f);for(m in b){g=b[m];
l=g.from;for(f=g.repeat||Infinity;l-f>k;)l-=f;for(;l<k;)l+=f;for(;l<j;l+=f)a.push({value:l,move:"in"}),a.push({value:l+(g.to-g.from),move:"out",size:g.breakSize})}a.sort(function(a,b){return a.value===b.value?(a.move==="in"?0:1)-(b.move==="in"?0:1):a.value-b.value});b=0;l=k;for(m in a){g=a[m];b+=g.move==="in"?1:-1;if(b===1&&g.move==="in")l=g.value;b===0&&(c.push({from:l,to:g.value,len:g.value-l-(g.size||0)}),e+=g.value-l-(g.size||0))}d.breakArray=c;h(d,"afterBreaks");d.transA*=(j-d.min)/(j-k-e);d.min=
k;d.max=j}}});e(j.prototype,"generatePoints",function(a){a.apply(this,b(arguments));var c=this.xAxis,d=this.yAxis,e=this.points,f,g=e.length,h=this.options.connectNulls,i;if(c&&d&&(c.options.breaks||d.options.breaks))for(;g--;)if(f=e[g],i=f.y===null&&h===!1,!i&&(c.isInAnyBreak(f.x,!0)||d.isInAnyBreak(f.y,!0)))e.splice(g,1),this.data[g]&&this.data[g].destroyElements()});a.Series.prototype.drawBreaks=function(a,b){var c=this,e=c.points,g,i,j,o;f(b,function(b){g=a.breakArray||[];i=a.isXAxis?a.min:d(c.options.threshold,
a.min);f(e,function(c){o=d(c["stack"+b.toUpperCase()],c[b]);f(g,function(b){j=!1;if(i<b.from&&o>b.to||i>b.from&&o<b.from)j="pointBreak";else if(i<b.from&&o>b.from&&o<b.to||i>b.from&&o>b.to&&o<b.from)j="pointInBreak";j&&h(a,j,{point:c,brk:b})})})})};e(a.seriesTypes.column.prototype,"drawPoints",c);e(a.Series.prototype,"drawPoints",c)});var ia=P.prototype,cc=ia.processData,dc=ia.generatePoints,ec=ia.destroy,fc={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L",
"%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},Xb={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},
areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},Yb=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],Ta={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=
a.length,a=Ta.sum(a);C(a)&&b&&(a/=b);return a},open:function(a){return a.length?a[0]:a.hasNulls?null:t},high:function(a){return a.length?Da(a):a.hasNulls?null:t},low:function(a){return a.length?Ma(a):a.hasNulls?null:t},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:t},ohlc:function(a,b,c,d){a=Ta.open(a);b=Ta.high(b);c=Ta.low(c);d=Ta.close(d);if(C(a)||C(b)||C(c)||C(d))return[a,b,c,d]},range:function(a,b){a=Ta.low(a);b=Ta.high(b);if(C(a)||C(b))return[a,b]}};ia.groupData=function(a,
b,c,d){var e=this.data,f=this.options.data,g=[],h=[],i=[],j=a.length,k,l,m=!!b,n=[[],[],[],[]],d=typeof d==="function"?d:Ta[d],p=this.pointArrayMap,o=p&&p.length,q,v=0;for(q=0;q<=j;q++)if(a[q]>=c[0])break;for(;q<=j;q++){for(;c[1]!==t&&a[q]>=c[1]||q===j;)if(k=c.shift(),l=d.apply(0,n),l!==t&&(g.push(k),h.push(l),i.push({start:v,length:n[0].length})),v=q,n[0]=[],n[1]=[],n[2]=[],n[3]=[],q===j)break;if(q===j)break;if(p){k=this.cropStart+q;k=e&&e[k]||this.pointClass.prototype.applyOptions.apply({series:this},
[f[k]]);var u;for(l=0;l<o;l++)if(u=k[p[l]],C(u))n[l].push(u);else if(u===null)n[l].hasNulls=!0}else if(k=m?b[q]:null,C(k))n[0].push(k);else if(k===null)n[0].hasNulls=!0}return[g,h,i]};ia.processData=function(){var a=this.chart,b=this.options.dataGrouping,c=this.allowDG!==!1&&b&&q(b.enabled,a.options._stock),d;this.forceCrop=c;this.groupPixelWidth=null;this.hasProcessed=!0;if(cc.apply(this,arguments)!==!1&&c){this.destroyGroupedData();var e=this.processedXData,f=this.processedYData,g=a.plotSizeX,a=
this.xAxis,h=a.options.ordinal,i=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(i){d=!0;this.points=null;var j=a.getExtremes(),c=j.min,j=j.max,h=h&&a.getGroupIntervalFactor(c,j,this)||1,g=i*(j-c)/g*h,i=a.getTimeTicks(a.normalizeTimeTickInterval(g,b.units||Yb),Math.min(c,e[0]),Math.max(j,e[e.length-1]),a.options.startOfWeek,e,this.closestPointRange),e=ia.groupData.apply(this,[e,f,i,b.approximation]),f=e[0],h=e[1];if(b.smoothed){b=f.length-1;for(f[b]=Math.min(f[b],j);b--&&b>0;)f[b]+=
g/2;f[0]=Math.max(f[0],c)}this.currentDataGrouping=i.info;this.closestPointRange=i.info.totalRange;this.groupMap=e[2];if(v(f[0])&&f[0]<a.dataMin){if(a.min===a.dataMin)a.min=f[0];a.dataMin=f[0]}this.processedXData=f;this.processedYData=h}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=d}};ia.destroyGroupedData=function(){var a=this.groupedData;o(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};ia.generatePoints=function(){dc.apply(this);this.destroyGroupedData();
this.groupedData=this.hasGroupedData?this.points:null};U(Lb.prototype,"tooltipFooterHeaderFormatter",function(a,b,c){var d=b.series,e=d.tooltipOptions,f=d.options.dataGrouping,g=e.xDateFormat,h,i=d.xAxis;return i&&i.options.type==="datetime"&&f&&C(b.key)?(a=d.currentDataGrouping,f=f.dateTimeLabelFormats,a?(i=f[a.unitName],a.count===1?g=i[0]:(g=i[1],h=i[2])):!g&&f&&(g=this.getXDateFormat(b,e,i)),g=na(g,b.key),h&&(g+=na(h,b.key+a.totalRange-1)),La(e[(c?"footer":"header")+"Format"],{point:A(b,{key:g}),
series:d})):a.call(this,b,c)});ia.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();ec.apply(this)};U(ia,"setOptions",function(a,b){var c=a.call(this,b),d=this.type,e=this.chart.options.plotOptions,f=W[d].dataGrouping;if(Xb[d])f||(f=z(fc,Xb[d])),c.dataGrouping=z(f,e.series&&e.series.dataGrouping,e[d].dataGrouping,b.dataGrouping);if(this.chart.options._stock)this.requireSorting=!0;return c});U(J.prototype,"setScale",function(a){a.call(this);o(this.series,function(a){a.hasProcessed=
!1})});J.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,c,d=0,e=!1,f;for(c=b;c--;)(f=a[c].options.dataGrouping)&&(d=w(d,f.groupPixelWidth));for(c=b;c--;)if((f=a[c].options.dataGrouping)&&a[c].hasProcessed)if(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&f.forced)e=!0;return e?d:0};J.prototype.setDataGrouping=function(a,b){var c,b=q(b,!0);a||(a={forced:!1,units:null});if(this instanceof J)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},
!1);else o(this.chart.options.series,function(b){b.dataGrouping=a},!1);b&&this.chart.redraw()};W.ohlc=z(W.column,{lineWidth:1,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'},states:{hover:{lineWidth:3}},threshold:null});da=ma(I.column,{type:"ohlc",pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"high",
pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},upColorProp:"stroke",getAttribs:function(){I.column.prototype.getAttribs.apply(this,arguments);var a=this.options,b=a.states,a=a.upColor||this.color,c=z(this.pointAttr),d=this.upColorProp;c[""][d]=a;c.hover[d]=b.hover.upColor||a;c.select[d]=b.select.upColor||a;o(this.points,function(a){if(a.open<a.close&&!a.options.color)a.pointAttr=c})},translate:function(){var a=this.yAxis;I.column.prototype.translate.apply(this);o(this.points,function(b){if(b.open!==
null)b.plotOpen=a.translate(b.open,0,1,0,1);if(b.close!==null)b.plotClose=a.translate(b.close,0,1,0,1)})},drawPoints:function(){var a=this,b=a.chart,c,d,e,f,g,h,i,j;o(a.points,function(k){if(k.plotY!==t)i=k.graphic,c=k.pointAttr[k.selected?"selected":""]||a.pointAttr[""],f=c["stroke-width"]%2/2,j=y(k.plotX)-f,g=y(k.shapeArgs.width/2),h=["M",j,y(k.yBottom),"L",j,y(k.plotY)],k.open!==null&&(d=y(k.plotOpen)+f,h.push("M",j,d,"L",j-g,d)),k.close!==null&&(e=y(k.plotClose)+f,h.push("M",j,e,"L",j+g,e)),i?
i.attr(c).animate({d:h}):k.graphic=b.renderer.path(h).attr(c).add(a.group)})},animate:null});I.ohlc=da;W.candlestick=z(W.column,{lineColor:"black",lineWidth:1,states:{hover:{lineWidth:2}},tooltip:W.ohlc.tooltip,threshold:null,upColor:"white"});da=ma(da,{type:"candlestick",pointAttrToOptions:{fill:"color",stroke:"lineColor","stroke-width":"lineWidth"},upColorProp:"fill",getAttribs:function(){I.ohlc.prototype.getAttribs.apply(this,arguments);var a=this.options,b=a.states,c=a.upLineColor||a.lineColor,
d=b.hover.upLineColor||c,e=b.select.upLineColor||c;o(this.points,function(a){if(a.open<a.close){if(a.lineColor)a.pointAttr=z(a.pointAttr),c=a.lineColor;a.pointAttr[""].stroke=c;a.pointAttr.hover.stroke=d;a.pointAttr.select.stroke=e}})},drawPoints:function(){var a=this,b=a.chart,c,d=a.pointAttr[""],e,f,g,h,i,j,k,l,m,n,p;o(a.points,function(o){m=o.graphic;if(o.plotY!==t)c=o.pointAttr[o.selected?"selected":""]||d,k=c["stroke-width"]%2/2,l=y(o.plotX)-k,e=o.plotOpen,f=o.plotClose,g=Y.min(e,f),h=Y.max(e,
f),p=y(o.shapeArgs.width/2),i=y(g)!==y(o.plotY),j=h!==o.yBottom,g=y(g)+k,h=y(h)+k,n=[],n.push("M",l-p,h,"L",l-p,g,"L",l+p,g,"L",l+p,h,"Z","M",l,g,"L",l,i?y(o.plotY):g,"M",l,h,"L",l,j?y(o.yBottom):h),m?m.attr(c).animate({d:n}):o.graphic=b.renderer.path(n).attr(c).add(a.group).shadow(a.options.shadow)})}});I.candlestick=da;var vb=xa.prototype.symbols;W.flags=z(W.column,{fillColor:"white",lineWidth:1,pointRange:0,shape:"flag",stackDistance:12,states:{hover:{lineColor:"black",fillColor:"#FCFFC5"}},style:{fontSize:"11px",
fontWeight:"bold",textAlign:"center"},tooltip:{pointFormat:"{point.text}<br/>"},threshold:null,y:-30});I.flags=ma(I.column,{type:"flags",sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:P.prototype.init,pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth",r:"radius"},translate:function(){I.column.prototype.translate.apply(this);var a=this.options,b=this.chart,c=this.points,d=c.length-1,e,f,g=a.onSeries;e=g&&b.get(g);
var a=a.onKey||"y",g=e&&e.options.step,h=e&&e.points,i=h&&h.length,j=this.xAxis,k=j.getExtremes(),l,m,n;if(e&&e.visible&&i){e=e.currentDataGrouping;m=h[i-1].x+(e?e.totalRange:0);c.sort(function(a,b){return a.x-b.x});for(a="plot"+a[0].toUpperCase()+a.substr(1);i--&&c[d];)if(e=c[d],l=h[i],l.x<=e.x&&l[a]!==void 0){if(e.x<=m)e.plotY=l[a],l.x<e.x&&!g&&(n=h[i+1])&&n[a]!==t&&(e.plotY+=(e.x-l.x)/(n.x-l.x)*(n[a]-l[a]));d--;i++;if(d<0)break}}o(c,function(a,d){var e;if(a.plotY===t)a.x>=k.min&&a.x<=k.max?a.plotY=
b.chartHeight-j.bottom-(j.opposite?j.height:0)+j.offset-b.plotTop:a.shapeArgs={};if((f=c[d-1])&&f.plotX===a.plotX){if(f.stackIndex===t)f.stackIndex=0;e=f.stackIndex+1}a.stackIndex=e})},drawPoints:function(){var a,b=this.pointAttr[""],c=this.points,d=this.chart,e=d.renderer,f,g,h=this.options,i=h.y,j,k,l,m,n,p,o=this.yAxis;for(k=c.length;k--;)if(l=c[k],a=l.plotX>this.xAxis.len,f=l.plotX,f>0&&(f-=q(l.lineWidth,h.lineWidth)%2),m=l.stackIndex,j=l.options.shape||h.shape,g=l.plotY,g!==t&&(g=l.plotY+i-(m!==
t&&m*h.stackDistance)),n=m?t:l.plotX,p=m?t:l.plotY,m=l.graphic,g!==t&&f>=0&&!a)a=l.pointAttr[l.selected?"select":""]||b,m?m.attr({x:f,y:g,r:a.r,anchorX:n,anchorY:p}):l.graphic=e.label(l.options.title||h.title||"A",f,g,j,n,p,h.useHTML).css(z(h.style,l.style)).attr(a).attr({align:j==="flag"?"left":"center",width:h.width,height:h.height}).add(this.markerGroup).shadow(h.shadow),l.tooltipPos=d.inverted?[o.len+o.pos-d.plotLeft-g,this.xAxis.len-f]:[f,g];else if(m)l.graphic=m.destroy()},drawTracker:function(){var a=
this.points;mb.drawTrackerPoint.apply(this);o(a,function(b){var c=b.graphic;c&&E(c.element,"mouseover",function(){if(b.stackIndex>0&&!b.raised)b._y=c.y,c.attr({y:b._y-8}),b.raised=!0;o(a,function(a){if(a!==b&&a.raised&&a.graphic)a.graphic.attr({y:a._y}),a.raised=!1})})})},animate:ra,buildKDTree:ra,setClip:ra});vb.flag=function(a,b,c,d,e){return["M",e&&e.anchorX||a,e&&e.anchorY||b,"L",a,b+d,a,b,a+c,b,a+c,b+d,a,b+d,"Z"]};o(["circle","square"],function(a){vb[a+"pin"]=function(b,c,d,e,f){var g=f&&f.anchorX,
f=f&&f.anchorY;a==="circle"&&e>d&&(b-=y((e-d)/2),d=e);b=vb[a](b,c,d,e);g&&f&&b.push("M",g,c>f?c:c+e,"L",g,f);return b}});Xa===B.VMLRenderer&&o(["flag","circlepin","squarepin"],function(a){lb.prototype.symbols[a]=vb[a]});var da=[].concat(Yb),wb=function(a){var b=Fa(arguments,function(a){return C(a)});if(b.length)return Math[a].apply(0,b)};da[4]=["day",[1,2,3,4]];da[5]=["week",[1,2,3]];A(R,{navigator:{handles:{backgroundColor:"#ebe7e8",borderColor:"#b2b1b6"},height:40,margin:25,maskFill:"rgba(128,179,236,0.3)",
maskInside:!0,outlineColor:"#b2b1b6",outlineWidth:1,series:{type:I.areaspline===t?"line":"areaspline",color:"#4572A7",compare:null,fillOpacity:0.05,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:da},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",lineColor:null,lineWidth:1,marker:{enabled:!1},pointRange:0,shadow:!1,threshold:null},xAxis:{tickWidth:0,lineWidth:0,gridLineColor:"#EEE",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#888"},
x:3,y:-4},crosshair:!1},yAxis:{gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:0.1,maxPadding:0.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickWidth:0}},scrollbar:{height:jb?20:14,barBackgroundColor:"#bfc8d1",barBorderRadius:0,barBorderWidth:1,barBorderColor:"#bfc8d1",buttonArrowColor:"#666",buttonBackgroundColor:"#ebe7e8",buttonBorderColor:"#bbb",buttonBorderRadius:0,buttonBorderWidth:1,minWidth:6,rifleColor:"#666",trackBackgroundColor:"#eeeeee",trackBorderColor:"#eeeeee",trackBorderWidth:1,
liveRedraw:ja&&!jb}});Gb.prototype={drawHandle:function(a,b){var c=this.chart.renderer,d=this.elementsToDestroy,e=this.handles,f=this.navigatorOptions.handles,f={fill:f.backgroundColor,stroke:f.borderColor,"stroke-width":1},g;this.rendered||(e[b]=c.g("navigator-handle-"+["left","right"][b]).css({cursor:"ew-resize"}).attr({zIndex:10-b}).add(),g=c.rect(-4.5,0,9,16,0,1).attr(f).add(e[b]),d.push(g),g=c.path(["M",-1.5,4,"L",-1.5,12,"M",0.5,4,"L",0.5,12]).attr(f).add(e[b]),d.push(g));e[b][this.rendered?
"animate":"attr"]({translateX:this.scrollerLeft+this.scrollbarHeight+parseInt(a,10),translateY:this.top+this.height/2-8})},drawScrollbarButton:function(a){var b=this.chart.renderer,c=this.elementsToDestroy,d=this.scrollbarButtons,e=this.scrollbarHeight,f=this.scrollbarOptions,g;this.rendered||(d[a]=b.g().add(this.scrollbarGroup),g=b.rect(-0.5,-0.5,e+1,e+1,f.buttonBorderRadius,f.buttonBorderWidth).attr({stroke:f.buttonBorderColor,"stroke-width":f.buttonBorderWidth,fill:f.buttonBackgroundColor}).add(d[a]),
c.push(g),g=b.path(["M",e/2+(a?-1:1),e/2-3,"L",e/2+(a?-1:1),e/2+3,e/2+(a?2:-2),e/2]).attr({fill:f.buttonArrowColor}).add(d[a]),c.push(g));a&&d[a].attr({translateX:this.scrollerWidth-e})},render:function(a,b,c,d){var e=this.chart,f=e.renderer,g,h,i,j,k=this.scrollbarGroup,l=this.navigatorGroup,m=this.scrollbar,l=this.xAxis,n=this.scrollbarTrack,p=this.scrollbarHeight,o=this.scrollbarEnabled,s=this.navigatorOptions,t=this.scrollbarOptions,u=t.minWidth,x=this.height,D=this.top,z=this.navigatorEnabled,
A=s.outlineWidth,B=A/2,E=0,H=this.outlineHeight,K=t.barBorderRadius,J=t.barBorderWidth,I=D+B,L=this.rendered;if(C(a)&&C(b)&&(!this.hasDragged||v(c))){this.navigatorLeft=g=q(l.left,e.plotLeft+p);this.navigatorWidth=h=q(l.len,e.plotWidth-2*p);this.scrollerLeft=i=g-p;this.scrollerWidth=j=j=h+2*p;c=q(c,l.translate(a));d=q(d,l.translate(b));if(!C(c)||S(c)===Infinity)c=0,d=j;if(!(l.translate(d,!0)-l.translate(c,!0)<e.xAxis[0].minRange)){this.zoomedMax=G(w(c,d,0),h);this.zoomedMin=G(w(this.fixedWidth?this.zoomedMax-
this.fixedWidth:G(c,d),0),h);this.range=this.zoomedMax-this.zoomedMin;c=y(this.zoomedMax);b=y(this.zoomedMin);a=c-b;if(!L){if(z)this.navigatorGroup=l=f.g("navigator").attr({zIndex:3}).add(),this.leftShade=f.rect().attr({fill:s.maskFill}).add(l),s.maskInside?this.leftShade.css({cursor:"ew-resize"}):this.rightShade=f.rect().attr({fill:s.maskFill}).add(l),this.outline=f.path().attr({"stroke-width":A,stroke:s.outlineColor}).add(l);if(o)this.scrollbarGroup=k=f.g("scrollbar").add(),m=t.trackBorderWidth,
this.scrollbarTrack=n=f.rect().attr({x:0,y:-m%2/2,fill:t.trackBackgroundColor,stroke:t.trackBorderColor,"stroke-width":m,r:t.trackBorderRadius||0,height:p}).add(k),this.scrollbar=m=f.rect().attr({y:-J%2/2,height:p,fill:t.barBackgroundColor,stroke:t.barBorderColor,"stroke-width":J,r:K}).add(k),this.scrollbarRifles=f.path().attr({stroke:t.rifleColor,"stroke-width":1}).add(k)}f=L?"animate":"attr";if(z){this.leftShade[f](s.maskInside?{x:g+b,y:D,width:c-b,height:x}:{x:g,y:D,width:b,height:x});if(this.rightShade)this.rightShade[f]({x:g+
c,y:D,width:h-c,height:x});this.outline[f]({d:["M",i,I,"L",g+b-B,I,g+b-B,I+H,"L",g+c-B,I+H,"L",g+c-B,I,i+j,I].concat(s.maskInside?["M",g+b+B,I,"L",g+c-B,I]:[])});this.drawHandle(b+B,0);this.drawHandle(c+B,1)}if(o&&k)this.drawScrollbarButton(0),this.drawScrollbarButton(1),k[f]({translateX:i,translateY:y(I+x)}),n[f]({width:j}),g=p+b,h=a-J,h<u&&(E=(u-h)/2,h=u,g-=E),this.scrollbarPad=E,m[f]({x:V(g)+J%2/2,width:h}),u=p+b+a/2-0.5,this.scrollbarRifles.attr({visibility:a>12?"visible":"hidden"})[f]({d:["M",
u-3,p/4,"L",u-3,2*p/3,"M",u,p/4,"L",u,2*p/3,"M",u+3,p/4,"L",u+3,2*p/3]});this.scrollbarPad=E;this.rendered=!0}}},addEvents:function(){var a=this.chart,b=a.container,c=this.mouseDownHandler,d=this.mouseMoveHandler,e=this.mouseUpHandler,f;f=[[b,"mousedown",c],[b,"mousemove",d],[H,"mouseup",e]];cb&&f.push([b,"touchstart",c],[b,"touchmove",d],[H,"touchend",e]);o(f,function(a){E.apply(null,a)});this._events=f;this.series&&E(this.series.xAxis,"foundExtremes",function(){a.scroller.modifyNavigatorAxisExtremes()});
E(a,"redraw",function(){var a=this.scroller,b;if(a)(b=a.baseSeries.xAxis)&&a.render(b.min,b.max)})},removeEvents:function(){o(this._events,function(a){T.apply(null,a)});this._events=t;this.navigatorEnabled&&this.baseSeries&&T(this.baseSeries,"updatedData",this.updatedDataHandler)},init:function(){var a=this,b=a.chart,c,d,e=a.scrollbarHeight,f=a.navigatorOptions,g=a.height,h=a.top,i,j=a.baseSeries;a.mouseDownHandler=function(d){var d=b.pointer.normalize(d),e=a.zoomedMin,f=a.zoomedMax,h=a.top,j=a.scrollbarHeight,
k=a.scrollerLeft,l=a.scrollerWidth,o=a.navigatorLeft,q=a.navigatorWidth,v=a.scrollbarPad,t=a.range,w=d.chartX,y=d.chartY,d=b.xAxis[0],z,A=jb?10:7;if(y>h&&y<h+g+j)if((h=!a.scrollbarEnabled||y<h+g)&&Y.abs(w-e-o)<A)a.grabbedLeft=!0,a.otherHandlePos=f,a.fixedExtreme=d.max,b.fixedRange=null;else if(h&&Y.abs(w-f-o)<A)a.grabbedRight=!0,a.otherHandlePos=e,a.fixedExtreme=d.min,b.fixedRange=null;else if(w>o+e-v&&w<o+f+v)a.grabbedCenter=w,a.fixedWidth=t,i=w-e;else if(w>k&&w<k+l){f=h?w-o-t/2:w<o?e-t*0.2:w>k+
l-j?e+t*0.2:w<o+e?e-t:f;if(f<0)f=0;else if(f+t>=q)f=q-t,z=a.getUnionExtremes().dataMax;if(f!==e)a.fixedWidth=t,e=c.toFixedRange(f,f+t,null,z),d.setExtremes(e.min,e.max,!0,!1,{trigger:"navigator"})}};a.mouseMoveHandler=function(c){var d=a.scrollbarHeight,e=a.navigatorLeft,f=a.navigatorWidth,g=a.scrollerLeft,h=a.scrollerWidth,j=a.range,k,l;if(!c.touches||c.touches[0].pageX!==0)c=b.pointer.normalize(c),k=c.chartX,k<e?k=e:k>g+h-d&&(k=g+h-d),a.grabbedLeft?(l=!0,a.render(0,0,k-e,a.otherHandlePos)):a.grabbedRight?
(l=!0,a.render(0,0,a.otherHandlePos,k-e)):a.grabbedCenter&&(l=!0,k<i?k=i:k>f+i-j&&(k=f+i-j),a.render(0,0,k-i,k-i+j)),l&&a.scrollbarOptions.liveRedraw&&setTimeout(function(){a.mouseUpHandler(c)},0),a.hasDragged=l};a.mouseUpHandler=function(d){var e,f;if(a.hasDragged){if(a.zoomedMin===a.otherHandlePos)e=a.fixedExtreme;else if(a.zoomedMax===a.otherHandlePos)f=a.fixedExtreme;if(a.zoomedMax===a.navigatorWidth)f=a.getUnionExtremes().dataMax;e=c.toFixedRange(a.zoomedMin,a.zoomedMax,e,f);v(e.min)&&b.xAxis[0].setExtremes(e.min,
e.max,!0,!1,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:d})}if(d.type!=="mousemove")a.grabbedLeft=a.grabbedRight=a.grabbedCenter=a.fixedWidth=a.fixedExtreme=a.otherHandlePos=a.hasDragged=i=null};var k=b.xAxis.length,l=b.yAxis.length;b.extraBottomMargin=a.outlineHeight+f.margin;a.navigatorEnabled?(a.xAxis=c=new J(b,z({breaks:j&&j.xAxis.options.breaks,ordinal:j&&j.xAxis.options.ordinal},f.xAxis,{id:"navigator-x-axis",isX:!0,type:"datetime",index:k,height:g,offset:0,offsetLeft:e,offsetRight:-e,
keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1})),a.yAxis=d=new J(b,z(f.yAxis,{id:"navigator-y-axis",alignTicks:!1,height:g,offset:0,index:l,zoomEnabled:!1})),j||f.series.data?a.addBaseSeries():b.series.length===0&&U(b,"redraw",function(c,d){if(b.series.length>0&&!a.series)a.setBaseSeries(),b.redraw=c;c.call(b,d)})):a.xAxis=c={translate:function(a,c){var d=b.xAxis[0],f=d.getExtremes(),g=b.plotWidth-2*e,h=wb("min",d.options.min,f.dataMin),d=wb("max",d.options.max,
f.dataMax)-h;return c?a*d/g+h:g*(a-h)/d},toFixedRange:J.prototype.toFixedRange};if(j&&j.xAxis&&this.navigatorOptions.adaptToUpdatedData!==!1)E(j,"updatedData",this.updatedDataHandler),E(j.xAxis,"foundExtremes",function(){j.xAxis&&this.chart.scroller.modifyBaseAxisExtremes()}),j.userOptions.events=A(j.userOptions.event,{updatedData:this.updatedDataHandler});U(b,"getMargins",function(b){var e=this.legend,f=e.options;b.apply(this,[].slice.call(arguments,1));a.top=h=a.navigatorOptions.top||this.chartHeight-
a.height-a.scrollbarHeight-this.spacing[2]-(f.verticalAlign==="bottom"&&f.enabled&&!f.floating?e.legendHeight+q(f.margin,10):0);if(c&&d)c.options.top=d.options.top=h,c.setAxisSize(),d.setAxisSize()});a.addEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;if(!a||b.dataMin!==null)f={dataMin:q(d&&d.min,wb("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:q(d&&d.max,wb("max",e.max,b.dataMax,c.dataMax,c.max))};return f},setBaseSeries:function(a){var b=
this.chart,a=a||b.options.navigator.baseSeries;this.series&&this.series.remove();this.baseSeries=b.series[a]||typeof a==="string"&&b.get(a)||b.series[0];this.xAxis&&this.addBaseSeries()},addBaseSeries:function(){var a=this.baseSeries,b=a?a.options:{},a=b.data,c=this.navigatorOptions.series,d;d=c.data;this.hasNavigatorData=!!d;b=z(b,c,{enableMouseTracking:!1,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",name:"Navigator",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0});
b.data=d||a.slice(0);this.series=this.chart.initSeries(b)},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;if(a.getExtremes&&(b=this.getUnionExtremes(!0))&&(b.dataMin!==a.min||b.dataMax!==a.max))a.min=b.dataMin,a.max=b.dataMax},modifyBaseAxisExtremes:function(){var a=this.baseSeries.xAxis,b=a.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=this.stickToMin,f=this.stickToMax,g,h,i=this.series,j=!!a.setExtremes;e&&(h=c,g=h+b);f&&(g=d,e||(h=w(g-b,i?i.xData[0]:-Number.MAX_VALUE)));if(j&&
(e||f)&&C(h))a.min=a.userMin=h,a.max=a.userMax=g;this.stickToMin=this.stickToMax=null},updatedDataHandler:function(){var a=this.chart.scroller,b=a.baseSeries,c=a.series;a.stickToMin=b.xAxis.min<=b.xData[0];a.stickToMax=a.zoomedMax>=a.navigatorWidth;if(c&&!a.hasNavigatorData&&(c.options.pointStart=b.xData[0],c.setData(b.options.data,!1),c.graph&&b.graph))c.graph.shift=b.graph.shift},destroy:function(){this.removeEvents();o([this.xAxis,this.yAxis,this.leftShade,this.rightShade,this.outline,this.scrollbarTrack,
this.scrollbarRifles,this.scrollbarGroup,this.scrollbar],function(a){a&&a.destroy&&a.destroy()});this.xAxis=this.yAxis=this.leftShade=this.rightShade=this.outline=this.scrollbarTrack=this.scrollbarRifles=this.scrollbarGroup=this.scrollbar=null;o([this.scrollbarButtons,this.handles,this.elementsToDestroy],function(a){Pa(a)})}};B.Scroller=Gb;U(J.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,g=e.navigator,e=e.rangeSelector,h;if(this.isXAxis&&(g&&g.enabled||e&&e.enabled))if(f===
"x")d.resetZoomButton="blocked";else if(f==="y")h=!1;else if(f==="xy")d=this.previousZoom,v(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom);return h!==t?h:a.call(this,b,c)});U(Ba.prototype,"init",function(a,b,c){E(this,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=new Gb(this)});a.call(this,b,c)});U(P.prototype,"addPoint",function(a,b,c,d,e){var f=this.options.turboThreshold;f&&this.xData.length>f&&ea(b)&&
!Ja(b)&&this.chart.scroller&&ga(20,!0);a.call(this,b,c,d,e)});A(R,{rangeSelector:{buttonTheme:{width:28,height:18,fill:"#f7f7f7",padding:2,r:0,"stroke-width":0,style:{color:"#444",cursor:"pointer",fontWeight:"normal"},zIndex:7,states:{hover:{fill:"#e7e7e7"},select:{fill:"#e7f0f9",style:{color:"black",fontWeight:"bold"}}}},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666"}}});R.lang=z(R.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});Hb.prototype={clickButton:function(a,
b){var c=this,d=c.selected,e=c.chart,f=c.buttons,g=c.buttonOptions[a],h=e.xAxis[0],i=e.scroller&&e.scroller.getUnionExtremes()||h||{},j=i.dataMin,k=i.dataMax,l,m=h&&y(G(h.max,q(k,h.max))),n=g.type,p,i=g._range,r,s,v,u=g.dataGrouping;if(!(j===null||k===null||a===c.selected)){e.fixedRange=i;if(u)this.forcedDataGrouping=!0,J.prototype.setDataGrouping.call(h||{chart:this.chart},u,!1);if(n==="month"||n==="year")if(h){if(n={range:g,max:m,dataMin:j,dataMax:k},l=h.minFromRange.call(n),C(n.newMax))m=n.newMax}else i=
g;else if(i)l=w(m-i,j),m=G(l+i,k);else if(n==="ytd")if(h){if(k===t)j=Number.MAX_VALUE,k=Number.MIN_VALUE,o(e.series,function(a){a=a.xData;j=G(a[0],j);k=w(a[a.length-1],k)}),b=!1;m=new ba(k);l=m.getFullYear();l=r=w(j||0,ba.UTC(l,0,1));m=m.getTime();m=G(k||m,m)}else{E(e,"beforeRender",function(){c.clickButton(a)});return}else n==="all"&&h&&(l=j,m=k);f[d]&&f[d].setState(0);if(f[a])f[a].setState(2),c.lastSelected=a;h?(h.setExtremes(l,m,q(b,1),0,{trigger:"rangeSelectorButton",rangeSelectorButton:g}),c.setSelected(a)):
(p=e.options.xAxis[0],v=p.range,p.range=i,s=p.min,p.min=r,c.setSelected(a),E(e,"load",function(){p.range=v;p.min=s}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,d=c.buttons||[].concat(b.defaultButtons),e=c.selected,f=b.blurInputs=
function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&O(a,"blur");c&&c.blur&&O(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=d;E(a.container,"mousedown",f);E(a,"resize",f);o(d,b.computeButtonRange);e!==t&&d[e]&&this.clickButton(e,!1);E(a,"load",function(){E(a.xAxis[0],"setExtremes",function(c){this.max-this.min!==a.fixedRange&&c.trigger!=="rangeSelectorButton"&&c.trigger!=="updatedData"&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1)});E(a.xAxis[0],"afterSetExtremes",
function(){b.updateButtonStates(!0)})})},updateButtonStates:function(a){var b=this,c=this.chart,d=c.xAxis[0],e=c.scroller&&c.scroller.getUnionExtremes()||d,f=e.dataMin,g=e.dataMax,h=b.selected,i=b.options.allButtonsEnabled,j=b.buttons;a&&c.fixedRange!==y(d.max-d.min)&&(j[h]&&j[h].setState(0),b.setSelected(null));o(b.buttonOptions,function(a,e){var m=y(d.max-d.min),n=a._range,o=a.type,q=a.count||1,s=n>g-f,t=n<d.minRange,u=a.type==="all"&&d.max-d.min>=g-f&&j[e].state!==2,v=a.type==="ytd"&&na("%Y",f)===
na("%Y",g),w=c.renderer.forExport&&e===h,n=n===m,z=!d.hasVisibleSeries;if((o==="month"||o==="year")&&m>={month:28,year:365}[o]*864E5*q&&m<={month:31,year:366}[o]*864E5*q)n=!0;w||n&&e!==h&&e===b.lastSelected?(b.setSelected(e),j[e].setState(2)):!i&&(s||t||u||v||z)?j[e].setState(3):j[e].state===3&&j[e].setState(0)})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if(b==="month"||b==="year")a._range=
{month:30,year:365}[b]*864E5*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector;if(v(b))this[a+"Input"].HCTime=b;this[a+"Input"].value=na(c.inputEditDateFormat||"%Y-%m-%d",this[a+"Input"].HCTime);this[a+"DateBox"].attr({text:na(c.inputDateFormat||"%b %e, %Y",this[a+"Input"].HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];N(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},
hideInput:function(a){N(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=j.value,b=(g.inputDateParser||ba.parse)(a),e=d.xAxis[0],f=e.dataMin,h=e.dataMax;if(b!==j.previousValue)j.previousValue=b,C(b)||(b=a.split("-"),b=ba.UTC(K(b[0]),K(b[1])-1,K(b[2]))),C(b)&&(R.global.useUTC||(b+=(new ba).getTimezoneOffset()*6E4),i?b>c.maxInput.HCTime?b=t:b<f&&(b=f):b<c.minInput.HCTime?b=t:b>h&&(b=h),b!==t&&d.xAxis[0].setExtremes(i?b:e.min,i?e.max:
b,t,t,{trigger:"rangeSelectorInput"}))}var c=this,d=c.chart,e=d.renderer.style,f=d.renderer,g=d.options.rangeSelector,h=c.div,i=a==="min",j,k,l=this.inputGroup;this[a+"Label"]=k=f.label(R.lang[i?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).attr({padding:2}).css(z(e,g.labelStyle)).add(l);l.offset+=k.width+5;this[a+"DateBox"]=f=f.label("",l.offset).attr({padding:2,width:g.inputBoxWidth||90,height:g.inputBoxHeight||17,stroke:g.inputBoxBorderColor||"silver","stroke-width":1}).css(z({textAlign:"center",
color:"#444"},e,g.inputStyle)).on("click",function(){c.showInput(a);c[a+"Input"].focus()}).add(l);l.offset+=f.width+(i?10:0);this[a+"Input"]=j=fa("input",{name:a,className:"highcharts-range-selector",type:"text"},A({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:e.fontSize,fontFamily:e.fontFamily,left:"-9em",top:d.plotTop+"px"},g.inputStyle),h);j.onfocus=function(){c.showInput(a)};j.onblur=function(){c.hideInput(a)};j.onchange=b;j.onkeypress=function(a){a.keyCode===
13&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=q((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},render:function(a,b){var c=this,d=c.chart,e=d.renderer,f=d.container,g=d.options,h=g.exporting&&g.exporting.enabled!==!1&&g.navigation&&g.navigation.buttonOptions,i=g.rangeSelector,j=c.buttons,g=R.lang,k=c.div,k=c.inputGroup,l=i.buttonTheme,m=i.buttonPosition||{},n=i.inputEnabled,p=l&&l.states,r=d.plotLeft,s,t=this.getPosition(),
u=c.group,w=c.rendered;if(!w&&(c.group=u=e.g("range-selector-buttons").add(),c.zoomText=e.text(g.rangeSelectorZoom,q(m.x,r),15).css(i.labelStyle).add(u),s=q(m.x,r)+c.zoomText.getBBox().width+5,o(c.buttonOptions,function(a,b){j[b]=e.button(a.text,s,0,function(){c.clickButton(b);c.isActive=!0},l,p&&p.hover,p&&p.select,p&&p.disabled).css({textAlign:"center"}).add(u);s+=j[b].width+q(i.buttonSpacing,5);c.selected===b&&j[b].setState(2)}),c.updateButtonStates(),n!==!1))c.div=k=fa("div",null,{position:"relative",
height:0,zIndex:1}),f.parentNode.insertBefore(k,f),c.inputGroup=k=e.g("input-group").add(),k.offset=0,c.drawInput("min"),c.drawInput("max");u[w?"animate":"attr"]({translateY:t.buttonTop});n!==!1&&(k.align(A({y:t.inputTop,width:k.offset,x:h&&t.inputTop<(h.y||0)+h.height-d.spacing[0]?-40:0},i.inputPosition),!0,d.spacingBox),v(n)||(d=u.getBBox(),k[k.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b));c.rendered=!0},destroy:function(){var a=this.minInput,b=this.maxInput,
c=this.chart,d=this.blurInputs,e;T(c.container,"mousedown",d);T(c,"resize",d);Pa(this.buttons);if(a)a.onfocus=a.onblur=a.onchange=null;if(b)b.onfocus=b.onblur=b.onchange=null;for(e in this)this[e]&&e!=="chart"&&(this[e].destroy?this[e].destroy():this[e].nodeType&&Ua(this[e])),this[e]=null}};J.prototype.toFixedRange=function(a,b,c,d){var e=this.chart&&this.chart.fixedRange,a=q(c,this.translate(a,!0)),b=q(d,this.translate(b,!0)),c=e&&(b-a)/e;c>0.7&&c<1.3&&(d?a=b-e:b=a+e);C(a)||(a=b=void 0);return{min:a,
max:b}};J.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],c,d=this.max,e,f,g=function(a,c){var d=new ba(a);d["set"+b](d["get"+b]()+c);return d.getTime()-a};C(a)?(c=this.max-a,f=a):c=d+g(d,-a.count);e=q(this.dataMin,Number.MIN_VALUE);C(c)||(c=e);if(c<=e)c=e,f===void 0&&(f=g(c,a.count)),this.newMax=G(c+f,this.dataMax);C(d)||(c=void 0);return c};U(Ba.prototype,"init",function(a,b,c){E(this,"init",function(){if(this.options.rangeSelector.enabled)this.rangeSelector=
new Hb(this)});a.call(this,b,c)});B.RangeSelector=Hb;Ba.prototype.callbacks.push(function(a){function b(){d=a.xAxis[0].getExtremes();C(d.min)&&f.render(d.min,d.max)}function c(a){f.render(a.min,a.max)}var d,e=a.scroller,f=a.rangeSelector;e&&(d=a.xAxis[0].getExtremes(),e.render(d.min,d.max));f&&(E(a.xAxis[0],"afterSetExtremes",c),E(a,"resize",b),b());E(a,"destroy",function(){f&&(T(a,"resize",b),T(a.xAxis[0],"afterSetExtremes",c))})});B.StockChart=B.stockChart=function(a,b,c){var d=Ca(a)||a.nodeName,
e=arguments[d?1:0],f=e.series,g,h=q(e.navigator&&e.navigator.enabled,!0)?{startOnTick:!1,endOnTick:!1}:null,i={marker:{enabled:!1,radius:2}},j={shadow:!1,borderWidth:0};e.xAxis=ta(ua(e.xAxis||{}),function(a){return z({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},a,{type:"datetime",categories:null},h)});e.yAxis=ta(ua(e.yAxis||{}),function(a){g=q(a.opposite,!0);return z({labels:{y:-2},opposite:g,showLastLabel:!1,title:{text:null}},a)});e.series=
null;e=z({chart:{panning:!0,pinchType:"x"},navigator:{enabled:!0},scrollbar:{enabled:!0},rangeSelector:{enabled:!0},title:{text:null,style:{fontSize:"16px"}},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:i,spline:i,area:i,areaspline:i,arearange:i,areasplinerange:i,column:j,columnrange:j,candlestick:j,ohlc:j}},e,{_stock:!0,chart:{inverted:!1}});e.series=f;return d?new Ba(a,e,c):new Ba(e,b)};U(Ya.prototype,"init",function(a,b,c){var d=c.chart.pinchType||"";a.call(this,b,c);
this.pinchX=this.pinchHor=d.indexOf("x")!==-1;this.pinchY=this.pinchVert=d.indexOf("y")!==-1;this.hasZoom=this.hasZoom||this.pinchHor||this.pinchVert});U(J.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;if(this.chart.options._stock&&this.coll==="yAxis"&&(c=c.top+","+c.height,!b[c]&&d.enabled)){if(d.x===15)d.x=0;if(d.align===void 0)d.align="right";b[c]=1;return"right"}return a.call(this,[].slice.call(arguments,1))});U(J.prototype,
"getPlotLinePath",function(a,b,c,d,e,f){var g=this,h=this.isLinked&&!this.series?this.linkedParent.series:this.series,i=g.chart,j=i.renderer,k=g.left,l=g.top,m,n,p,r,s=[],t=[],u,x;if(g.coll==="colorAxis")return a.apply(this,[].slice.call(arguments,1));t=g.isXAxis?v(g.options.yAxis)?[i.yAxis[g.options.yAxis]]:ta(h,function(a){return a.yAxis}):v(g.options.xAxis)?[i.xAxis[g.options.xAxis]]:ta(h,function(a){return a.xAxis});o(g.isXAxis?i.yAxis:i.xAxis,function(a){if(v(a.options.id)?a.options.id.indexOf("navigator")===
-1:1){var b=a.isXAxis?"yAxis":"xAxis",b=v(a.options[b])?i[b][a.options[b]]:i[b][0];g===b&&t.push(a)}});u=t.length?[]:[g.isXAxis?i.yAxis[0]:i.xAxis[0]];o(t,function(a){sa(a,u)===-1&&u.push(a)});x=q(f,g.translate(b,null,null,d));C(x)&&(g.horiz?o(u,function(a){var b;n=a.pos;r=n+a.len;m=p=y(x+g.transB);if(m<k||m>k+g.width)e?m=p=G(w(k,m),k+g.width):b=!0;b||s.push("M",m,n,"L",p,r)}):o(u,function(a){var b;m=a.pos;p=m+a.len;n=r=y(l+g.height-x);if(n<l||n>l+g.height)e?n=r=G(w(l,n),g.top+g.height):b=!0;b||s.push("M",
m,n,"L",p,r)}));return s.length>0?j.crispPolyLine(s,c||1):null});J.prototype.getPlotBandPath=function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0),e=[],f;if(d&&c&&d.toString()!==c.toString())for(f=0;f<d.length;f+=6)e.push("M",d[f+1],d[f+2],"L",d[f+4],d[f+5],c[f+4],c[f+5],c[f+1],c[f+2]);else e=null;return e};xa.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=y(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=
y(a[c+2])+b%2/2);return a};if(Xa===B.VMLRenderer)lb.prototype.crispPolyLine=xa.prototype.crispPolyLine;U(J.prototype,"hideCrosshair",function(a,b){a.call(this,b);if(this.crossLabel)this.crossLabel=this.crossLabel.hide()});U(J.prototype,"drawCrosshair",function(a,b,c){var d,e;a.call(this,b,c);if(v(this.crosshair.label)&&this.crosshair.label.enabled){var a=this.chart,f=this.options.crosshair.label,g=this.horiz,h=this.opposite,i=this.left,j=this.top,k=this.crossLabel,l,m=f.format,n="",o=this.options.tickPosition===
"inside",r=this.crosshair.snap!==!1;l=g?"center":h?this.labelAlign==="right"?"right":"left":this.labelAlign==="left"?"left":"center";if(!k)k=this.crossLabel=a.renderer.label(null,null,null,f.shape||"callout").attr({align:f.align||l,zIndex:12,fill:f.backgroundColor||this.series[0]&&this.series[0].color||"gray",padding:q(f.padding,8),stroke:f.borderColor||"","stroke-width":f.borderWidth||0,r:q(f.borderRadius,3)}).css(A({color:"white",fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)).add();
g?(l=r?c.plotX+i:b.chartX,j+=h?0:this.height):(l=h?this.width+i:0,j=r?c.plotY+j:b.chartY);!m&&!f.formatter&&(this.isDatetimeAxis&&(n="%b %d, %Y"),m="{value"+(n?":"+n:"")+"}");b=r?c[this.isXAxis?"x":"y"]:this.toValue(g?b.chartX:b.chartY);k.attr({text:m?La(m,{value:b}):f.formatter.call(this,b),anchorX:g?l:this.opposite?0:a.chartWidth,anchorY:g?this.opposite?a.chartHeight:0:j,x:l,y:j,visibility:"visible"});b=k.getBBox();if(g){if(o&&!h||!o&&h)j=k.y-b.height}else j=k.y-b.height/2;g?(d=i-b.x,e=i+this.width-
b.x):(d=this.labelAlign==="left"?i:0,e=this.labelAlign==="right"?i+this.width:a.chartWidth);k.translateX<d&&(l+=d-k.translateX);k.translateX+b.width>=e&&(l-=k.translateX+b.width-e);k.attr({x:l,y:j,visibility:"visible"})}});var gc=ia.init,hc=ia.processData,ic=Ha.prototype.tooltipFormatter;ia.init=function(){gc.apply(this,arguments);this.setCompare(this.options.compare)};ia.setCompare=function(a){this.modifyValue=a==="value"||a==="percent"?function(b,c){var d=this.compareValue;if(b!==t&&(b=a==="value"?
b-d:b=100*(b/d)-100,c))c.change=b;return b}:null;if(this.chart.hasRendered)this.isDirty=!0};ia.processData=function(){var a,b=-1,c,d,e,f;hc.apply(this,arguments);if(this.xAxis&&this.processedYData){c=this.processedXData;d=this.processedYData;e=d.length;this.pointArrayMap&&(b=sa(this.pointValKey||"y",this.pointArrayMap));for(a=0;a<e;a++)if(f=b>-1?d[a][b]:d[a],C(f)&&c[a]>=this.xAxis.min&&f!==0){this.compareValue=f;break}}};U(ia,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));
if(this.modifyValue)b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=Ma(b),this.dataMax=Da(b)});J.prototype.setCompare=function(a,b){this.isXAxis||(o(this.series,function(b){b.setCompare(a)}),q(b,!0)&&this.chart.redraw())};Ha.prototype.tooltipFormatter=function(a){a=a.replace("{point.change}",(this.change>0?"+":"")+B.numberFormat(this.change,q(this.series.tooltipOptions.changeDecimals,2)));return ic.apply(this,[a])};U(P.prototype,"render",function(a){if(this.chart.options._stock&&
this.xAxis)!this.clipBox&&this.animate?(this.clipBox=z(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]&&(Sa(this.chart[this.sharedClipKey]),this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}));a.call(this)});A(B,{Color:va,Point:Ha,Tick:bb,Renderer:Xa,SVGElement:Z,SVGRenderer:xa,arrayMin:Ma,arrayMax:Da,charts:$,correctFloat:ka,dateFormat:na,error:ga,format:La,pathAnim:void 0,getOptions:function(){return R},
hasBidiBug:Zb,isTouchDevice:jb,setOptions:function(a){R=z(!0,R,a);Ob();return R},addEvent:E,removeEvent:T,createElement:fa,discardElement:Ua,css:N,each:o,map:ta,merge:z,splat:ua,stableSort:nb,extendClass:ma,pInt:K,svg:ja,canvas:qa,vml:!ja&&!qa,product:"Highstock",version:"4.2.5"});return B});
define("highcharts", function(){});

// 参数id （canvas DOM ID）
// 参数lines (颜色数组：几个颜色对应几个背景色块)
function waves(id, lines) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    //canvas.width = canvas.parentNode.offsetWidth;
    //canvas.height = canvas.parentNode.offsetHeight;


    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout  
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
		        window.webkitRequestAnimationFrame ||
		        window.mozRequestAnimationFrame ||
		        function (callback) {
		            window.setTimeout(callback, 1000 / 60);
		        };
    })();
    //初始角度为0  
    var step = 0;
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        step++;
        //画3个不同颜色的矩形  
        for (var j = lines.length - 1; j >= 0; j--) {
            ctx.fillStyle = lines[j];
            //每个矩形的角度都不同，每个之间相差45度  
            var angle = (step + j * 90) * Math.PI / 180;
            var deltaHeight = Math.sin(angle) * 50;
            var deltaHeightRight = Math.cos(angle) * 50;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2 + deltaHeight);
            ctx.bezierCurveTo(canvas.width / 2, canvas.height / 2 + deltaHeight - 50, canvas.width / 2, canvas.height / 2 + deltaHeightRight - 50, canvas.width, canvas.height / 2 + deltaHeightRight);
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.lineTo(0, canvas.height / 2 + deltaHeight);
            ctx.closePath();
            ctx.fill();
        }
        requestAnimFrame(loop);
    }
    loop();
};
define("waves", function(){});

// 获取地址栏参数 参数为参数名
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
};
define("getQueryString", function(){});

/**
 * @license Highcharts JS v3.0.6 (2013-10-04)
 * Plugin for displaying a message when there is no data visible in chart.
 *
 * (c) 2010-2013 Highsoft AS
 * Author: Øystein Moseng
 *
 * License: www.highcharts.com/license
 */

(function (H) { // docs

    var seriesTypes = H.seriesTypes,
        chartPrototype = H.Chart.prototype,
        defaultOptions = H.getOptions(),
        extend = H.extend;

    // Add language option
    extend(defaultOptions.lang, {
        noData: 'No data to display'
    });

    // Add default display options for message
    defaultOptions.noData = {
        position: {
            x: 0,
            y: 0,
            align: 'center',
            verticalAlign: 'middle'
        },
        attr: {
        },
        style: {
            fontWeight: 'bold',
            fontSize: '12px',
            color: '#60606a'
        }
    };

    /**
     * Define hasData functions for series. These return true if there are data points on this series within the plot area
     */
    function hasDataPie() {
        return !!this.points.length; /* != 0 */
    }

    seriesTypes.pie.prototype.hasData = hasDataPie;

    if (seriesTypes.gauge) {
        seriesTypes.gauge.prototype.hasData = hasDataPie;
    }

    if (seriesTypes.waterfall) {
        seriesTypes.waterfall.prototype.hasData = hasDataPie;
    }

    H.Series.prototype.hasData = function () {
        return this.dataMax !== undefined && this.dataMin !== undefined;
    };

    /**
     * Display a no-data message.
     *
     * @param {String} str An optional message to show in place of the default one 
     */
    chartPrototype.showNoData = function (str) {
        var chart = this,
            options = chart.options,
            text = str || options.lang.noData,
            noDataOptions = options.noData;

        if (!chart.noDataLabel) {
            chart.noDataLabel = chart.renderer.label(text, 0, 0, null, null, null, null, null, 'no-data')
                .attr(noDataOptions.attr)
                .css(noDataOptions.style)
                .add();
            chart.noDataLabel.align(extend(chart.noDataLabel.getBBox(), noDataOptions.position), false, 'plotBox');
        }
    };

    /**
     * Hide no-data message 
     */
    chartPrototype.hideNoData = function () {
        var chart = this;
        if (chart.noDataLabel) {
            chart.noDataLabel = chart.noDataLabel.destroy();
        }
    };

    /**
     * Returns true if there are data points within the plot area now
     */
    chartPrototype.hasData = function () {
        var chart = this,
            series = chart.series,
            i = series.length;

        while (i--) {
            if (series[i].hasData() && !series[i].options.isInternal) {
                return true;
            }
        }

        return false;
    };

    /**
     * Show no-data message if there is no data in sight. Otherwise, hide it.
     */
    function handleNoData() {
        var chart = this;
        if (chart.hasData()) {
            chart.hideNoData();
        } else {
            chart.showNoData();
        }
    }

    /**
     * Add event listener to handle automatic display of no-data message
     */
    chartPrototype.callbacks.push(function (chart) {
        H.addEvent(chart, 'load', handleNoData);
        H.addEvent(chart, 'redraw', handleNoData);
    });

}(Highcharts));
define("noData", function(){});

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
require(['vue','booksMethod'], function (vue,bk) { 
	var headerH = 144;
	if(mui.os.ios) {
		$("header").css({"padding-top":"20px !important","height":"124px !important"})
		$("#canvas").css({"top":"64px"})
		headerH = 164;
		//$("#domBar").css({"top":"124px"})
	}
	else{
		//$("#domBar").css({"top":"104px"})
	}
	$("body").show();
	
	//初始化滚动条
//	mui('#domBar').progressbar({
//		progress: 0
//	}).show();
	
	$("body").show();
    // 实例化Vue.js
    var vm = new vue({
        el: '#trader',
        data: {
            sm: [],
            comment: [],
            currentTradeData: [],
            historyTradeData:[],
            // 当前持仓,状态（1：公开;2：单号公开;3：手数公开;4：开仓时间公开;5：开仓价公开;6：当前价公开;7：止盈公开;8：止损公开;9：盈亏公开;）
        	// 格式：以“|”隔开
            Cswitch:[],
            // 交易历史记录,状态（1：公开;2：单号公开;3：手数公开;4：开仓时间公开;5：平仓时间公开;6：开/平仓价公开;7：止盈公开;8：止损公开;9：盈亏公开;）
        	// 格式：以“|”隔开
            Hswitch:[],
            totalCount: 0,
            onLine:true,
            newYear:"",
            bar:0
        }
    });

    // 定义对象存储（当前页码、总页码、每页数量）
    var contest = {
        tradeUserId:GetQueryString("tradeUserId"),
        index:0,
        current: {
            type: 2,
            totalPages: 0,
            pageIndex: 1,
            pageSize: 10
        },
        history: {
            type: 1,
            totalPages: 0,
            pageIndex: 1,
            pageSize: 10
        }
    }

    getTradeStatisModel();
	
	//判断网络状态
	onLine(function onLine(){
		vm.onLine = true;
	},function offLine(){
		vm.onLine = false;
	})
	
	// 返回
    mui.back = function() {
    	if(window.history.length <= 1) {
    		if(vm.onLine) {
    			bk.booksInit("exitHtml");
    		} else {
    			mui.toast("网络未连接，请检查网络！")
    		}
    	} else {
    		history.go(-1);
    	}
    }
	
    // 头部背景动画
    var lines = ["rgba(95,210,248, 0.4)", "rgba(95,210,248, 0.4)"];
    waves("canvas", lines)

    // 月度表，年份
//  $(".rank-year").on("tap", function () {
//      $(this).children("ul").toggle()
//  })

    // 月度表，年份选择
//  $(".rank-year").on("tap", "ul li", function () {
//      $(this).parents(".rank-year").children("p").find("em").text($(this).text())
//      getTradeMonthOverview($(this).text());
//  })
	//设置高度
	$('.mui-slider-item').height($(window).height() - headerH);
	
    // 评论跳转
    $("body").on("tap", ".book_ment_more", function () {
    	if(vm.onLine){
	    	//打开页面
			mui.openWindow({
			    url: 'tradercomments.html?tradeUserId=' + contest.tradeUserId, 
				id:'tradercomments'
			});
		}else{
			mui.toast("网络未连接，请检查网络！")
		}
    })

    // 发表评论跳转
    $("body").on("tap", ".book_ment_publish", function () {
    	if(vm.onLine){
    		//打开页面
			mui.openWindow({
			    url: 'commentsSubmit.html?tradeUserId=' + contest.tradeUserId, 
				id:'commentsSubmit'
			});
		}else{
			mui.toast("网络未连接，请检查网络！");
		}
    })

	// 打开用户账号列表
    $(".rank-info-zh").on("tap", function () {
    	if(vm.onLine){
	    	if(vm.sm.TradeGroupAccounts.length <= 1){ return false};
	        var id = $(this).data("id");
	        //打开页面
			mui.openWindow({
			    url: 'traderUser.html?uId=' + id + "&tradeUserId=" + contest.tradeUserId, 
				id:'traderUser'
			});
		}else{
    		mui.toast("网络未连接，请检查网络！")
    	}
    })
      
    // 菜单切换  
	document.getElementById("slider").addEventListener('slide',function(e){
		contest.index = e.detail.slideNumber;		
	})
	
	mui('.mui-scroll-wrapper').scroll({
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});

	//加载进程条
//  dombartime();
//  function dombartime(){
//  	var cleardombar=setTimeout(dombartime,10);
//  	if(vm.bar < 5){
//  		mui('#domBar').progressbar().setProgress(vm.bar * 25);
//  	}else{
//  		mui('#domBar').progressbar().setProgress(vm.bar * 25);
//  		mui('#domBar').progressbar().hide();
//  		clearTimeout(cleardombar);
//  	}
//  }
//  
	
	//循环初始化所有下拉刷新，上拉加载。
	$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
		if(index){ 
			mui(pullRefreshEl).pullToRefresh({
				up: {
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了',
					callback: pullUpAction
				}
			});
		}
	});
    //点赞动作
    $("body").on('tap', ".book_zag", function () {
    	if(vm.onLine){
        	postSupports($(this));
        }else{
    		mui.toast("网络未连接，请检查网络！")
    	}
    })
	

	
    // 点赞
    function postSupports($this) {
        var uId = localStorage.getItem("uId");
        var commentId = $this.parents(".comment_read").data("commentid");
        var bookzan = parseInt($this.children('em').text());

        $.ajax({
            type: 'GET',
            url: Consts.OKRUrl148 + 'api/BookApiMobile?aid=' + commentId + '&uid=' + uId,
            dataType: 'json',
            success: function (data) {
                if (data.code == "0") {
                    if (!($this.children('strong').hasClass('animation'))) {
                        $this.children('strong').addClass('animation');
                        var vule=$this.parents(".comment_read").index();
                       	vm.comment[vule].Supports++;
                    }
                } else {
                    mui.toast("您已经赞过了！")
                }
            },
            error: function (xhr, type) {
                mui.toast('网络错误！')
            }
        })
    }

    //评论内容过多时，隐藏一部分
    function comment_mach() {
        $commentp = $(".comment p").last();
        $commentpspan = $commentp.children('span');
        if ($commentpspan.height() > $commentp.height()) {

            $commentp.siblings('.commetn_icon_show').addClass('active_icon');
        }
        //PullY.refresh();
    }

    // 上拉加载更多回调方法
    function pullUpAction() {
    	if(vm.onLine){
	        switch (contest.index) {
	            case 0:
	                contest.index = 0;
	                break;
	            case 1:
	                if (++contest.current.pageIndex <= contest.current.totalPages) {
	                    getTradeCurrentPage(contest.current.pageIndex, contest.current.type, contest.current.pageSize,this);
	                } else {
	                    this.endPullUpToRefresh(true);
	                }
	                break;
	            case 2:
	                if (++contest.history.pageIndex <= contest.history.totalPages) {
	                    getTradeCurrentPage(contest.history.pageIndex, contest.history.type, contest.history.pageSize,this);
	                }else {
	                    this.endPullUpToRefresh(true);
	                }
	                break;
	        }
        }else{
			mui.toast("网络未连接，请检查网络！")
		}
    }

    /*提取交易平台Json文件*/
    function getTradePlatformUrl(val) {
        var url;
        $.ajax({
            type: "get",
            url: '../../js/dev/trader/tradePlatform.json',
            dataType: 'json',
            async: false,
            success: function (data) {
                var trades = data.tradePlatform;
                for (var i in trades){
                    if (trades[i].platform == val) {
                        url =  trades[i].headimg;
                        break;
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                mui.toast('请求超时')
            }            
        })
        return url;
    }
    //公共图表参数
    var options = {
        colors: ['#14a4ff', '#ffba14'],//颜色列表
        title: {
            text: null //标题设置为空
        },
        credits: {
            enabled: false //版权隐藏
        },
        lang: {
            noData: "暂无数据"
        },
        noData: {
            //position: {   
            //    align: 'right',  
            //    verticalAlign: 'bottom'  
            //},  
            attr: {
                stroke: '#cccccc'
            },
            style: {
                fontWeight: '100',
                fontSize: '1.8rem',
                color: '#ddd'
            }
        }
    }
    //拆线图表方法（参数DomID、数据）
    function lineChart(id, data) {
        var pieOptions = {
            title: {
                align:'left',
                text:"总收益浮动趋势"
            },
            chart: {
                renderTo: id
            },
            xAxis: {
                title: null,
                tickInterval: data.length ? Math.ceil(data.time.length / 8) : 0,//x轴刻度跨度
                tickWidth: 1,
                gridLineWidth: 1,
                gridLineColor: "#ecf1f3",
                minPadding: 0,
                labels: {
                    formatter: function () { return data.time[this.value]; }
                }
            },
            yAxis: {
                title: null,
                gridLineWidth: 1,
                gridLineColor: "#ecf1f3",
                minPadding: 0,
                startOnTick: false,
                labels: {
                    formatter:function(){
                    	var value = this.value;
                    	if (Math.abs(value) > 1000) {
				            return "$" + (value / 1000) + "K";
				        } else if(Math.abs(value) > 1000000) {
				            return "$" + (value / 10000) + "W";
				        }else{
				        	 return value;
				        }
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {//填充区域图
                    threshold: null,//为空时，起点为Y轴最小值
                    lineWidth: 1,//线条的宽度
                    marker: {
                        enabled: false
                    },
                    fillOpacity: 0.15//填充区域的透明度
                }
            },
            tooltip: {
                formatter: function () {
                    var a, b, color, s;
                    if (this.y >= 0) {
                        a = '总盈利';
                        color = "#41ae1a";
                    } else {
                        a = '总亏损';
                        color = "#ff0000";
                    }
                    if (status === 0) {
                        s = data.time[this.x] + ' ' + a + ' <span style="color:' + color + '">$' + this.y + '</span>';
                    } else {
                        s = '截止至' + data.time[this.x] + ' 的' + a + ' <span style="color:' + color + '">$' + this.y + '</span>';
                    }
                    return s;
                }
            },
            series: [{
                name: '',
                type: 'area',
                data: data.profit
            }]
        };
        var t = $.extend({}, options, pieOptions);
        new Highcharts.Chart(t);
        
    }

    //柱形图表方法（参数DomID、数据）
    function columnChart(id, data) {
        var pieOptions = {
            title: {
                align: 'left',
                text: "月收益分析"
            },
            chart: {
                renderTo: id,
                type: "column"
            },
            xAxis: {
                title: null,
                //tickInterval: 5,//x轴刻度跨度
                tickWidth: 1,
                gridLineWidth: 1,
                gridLineColor: "#ecf1f3",
                minPadding: 0,
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                crosshair: true
            },
            yAxis: {
                title: null,
                gridLineWidth: 1,
                gridLineColor: "#ecf1f3",
                //minPadding: 0,
                startOnTick: false,
                labels: {
                    formatter:function(){
                    	var value = this.value;
                    	if (Math.abs(value) > 1000) {
				            return "$" + (value / 1000) + "K";
				        } else if(Math.abs(value) > 1000000) {
				            return "$" + (value / 10000) + "W";
				        }else{
				        	 return value;
				        }
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
//	            series: {
//	                borderWidth: 0,
//	                dataLabels: {
//	                    enabled: true,
//	                    format: '{point.y:.2f}'
//	                }
//	            }
            },
            tooltip: {
                formatter: function () {
                    var s = "<span>" + this.x + "</span>";
                    if (~this.color.indexOf("#ff1a30")) {
                        s += "<table><tr><td>总亏损：</td></tr><tr><td><b>" + this.y + "</b></td></tr></table>";
                    } else {
                        s += "<table><tr><td>总盈利：</td></tr><tr><td><b>" + this.y + "</b></td></tr></table>";
                    }
                    return s;
                }
            },
            series: [{
                name: 'Tokyo',
                data: data
            }]
        };
        var t = $.extend({}, options, pieOptions);
        new Highcharts.Chart(t);
        //PullY.refresh();
    }
    //数值较大时，转化单位K
    vue.filter('money', function (value) { 
    	if(!value){return 0;}
        if (Math.abs(value) > 1000) {
        	var val = value > 0 ? ("$" + (value/1000).toFixed(2)) : ("-$" + Math.abs((value/1000).toFixed(2)))
            return val + "K";
        } else if(Math.abs(value) > 1000000) {
        	var val = value > 0 ? ("$" + (value/10000).toFixed(2)) : ("-$" + Math.abs((value/10000).toFixed(2)))
            return val + "W";
        }
        else{
        	var val = value > 0 ? ("$" + value.toFixed(2)) : ("-$" + Math.abs(value.toFixed(2)))
        	 return val;
        }
    })
	//时间格式化
	vue.filter('formatTime', function (value) { 
        return dateFormat(new Date(value.replace(/-/g, "/")), "MM月dd日");
    })
	//时间格式化
	vue.filter('formatDate', function (value) { 
        return dateFormat(new Date(value.replace(/-/g, "/")), "yyyy-MM-dd");
    })
	//保留两们小数
	vue.filter('tofixed', function (value) { 
        return value.toFixed(2);
    })

    /*获取指定用户交易统计信息*/
    function getTradeStatisModel() {
        $.ajax({
            type: "get",
            url: Consts.OKRUrl148 + 'api/TradeOrderApi?tradeUserId=' + contest.tradeUserId,
            dataType: 'json',
            success: function (res) {
                if (res.code == "0") {
                    var objModel = eval('(' + res.bodyMessage + ')');
                    vm.Cswitch = objModel.TCurrentStatus.split("|");
                    vm.Hswitch = objModel.THistoryStatus.split("|");
                    vm.sm = objModel;
                    
                    //window.history.pushState({ "data": objModel }, "", "");
                    vue.filter('brokerImg', function (value) {
                        var url = getTradePlatformUrl(value);
                        return '../../img/brokerHeadImg/' + url;
                    })

                    vm.bar++;

                    /*获取指定时间段内交易概况列表信息(包括总收益概况.日收益概况.日手数概况)*/
                    getTradeOverview();

                    /*获取评论列表*/
                    getComment(1);
                    
                    if(!!parseInt(vm.Hswitch[0])){
                    	getTradeCurrentPage(1, 1, contest.history.pageSize);
                    }else{
                    	vm.historyTradeData = "unpublished";
                        $(".mui-pull-bottom-tips").eq(1).hide();
                        vm.bar++;
                    }
                    
                    if(!!parseInt(vm.Cswitch[0])){
                    	getTradeCurrentPage(1, 2, contest.current.pageSize);
                    }else{
                    	vm.currentTradeData = "unpublished";
                        $(".mui-pull-bottom-tips").eq(0).hide();
                        vm.bar++;
                    }
                    
                } else {
                	vm.bar++;
                    mui.toast('暂无交易信息！')
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                mui.toast('请求超时')
            }
        });
    }

    /*总收益浮动趋势*/
    function getTradeOverview() {
        $.ajax({
            type: "get",
            url: Consts.OKRUrl148 + 'api/TradeChartOrderApi?tradeUserId=' + contest.tradeUserId + '&isAll=true',
            dataType: 'json',
            success: function (res) {
                if (res.code == "0") {
                    var obj = eval('(' + res.bodyMessage + ')');
					if (obj.length) {
	                    var timeOne = parseInt(obj[0].TradeTime.substr(0, 4));
	                    var newYear = parseInt(obj[obj.length - 1].TradeTime.substr(0, 4));
	                    vm.newYear = newYear;
	                    var interval = newYear - timeOne;
	                    var mYearArray = [];
	                    if (interval > 0) {
	                        for (var y = 0; y <= interval; y++) {
	                        	var yearArray = {};
	                            yearArray.text = newYear - y;
	                            mYearArray.push(yearArray);
	                        }
	                    } else {
	                    	var yearArray = {};
	                        yearArray.text = newYear;
	                        mYearArray.push(yearArray);
	                    }
	                }
	                
	                var picker = new mui.PopPicker();
					picker.setData(mYearArray);
					$(".rank-year").on("tap",function(){
						$("input").blur();
						var $this = $(this);
						picker.show(function (selectItems) {
							$this.find("em").text(selectItems[0].text);
							getTradeMonthOverview(selectItems[0].text);
						})
					})
										
                    /*获取指定时间段内交易月度概况列表信息*/
                    getTradeMonthOverview(newYear);
					
                    /*交易总收益概况概况图表*/
                    var overviewData = {
                        profit: [],
                        time: []
                    }
					vm.bar++;
                    $(obj).each(function (i, item) {
                        overviewData.profit[i] = item.UptotalProfit;
                        overviewData.time[i] = dateFormat(new Date(item.TradeTime.replace(/-/g, "/")), 'MM-dd');
                    });
                    lineChart("chartLine", overviewData);

                } else {
                	vm.bar++;
                	lineChart("chartLine", []);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                mui.toast('请求超时')
            }                    
        });
    }

    /*月收益数据（参数年份）*/
    function getTradeMonthOverview(year) {
        if (year > 0) {
            $.ajax({
                type: "get",
                url: Consts.OKRUrl148 + 'api/TradeChartOrderApi?tradeUserId=' + contest.tradeUserId + '&startTime=' + year + '-01-01&endTime=' + (parseInt(year) + 1) + '-01-01',
                dataType: 'json',
                success: function (res) {
                    if (res.code == "0") {
                        var obj = eval('(' + res.bodyMessage + ')');
                        /*处理柱形图数据*/
                        var cData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (var i = 0; i < obj.length; i++) {
                            var date = new Date(Date.parse(obj[i].TradeTime.replace(/-/g, "/")));
                            var m = date.getMonth();
                            cData[m] = obj[i].TotalProfit;
                        }
						vm.bar++;
                        var d = columnColor(cData);
                        columnChart("chartColumn", d);
                    } else {
                    	vm.bar++;
                        columnChart("chartColumn", []);
                    }
                },
	            error: function (XMLHttpRequest, textStatus, errorThrown) {
	                mui.toast('请求超时')
	            }                
            });
        }
    }

    /*处理柱形图柱形条颜色*/
    function columnColor(data) {
        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i]) < 0) {
                data[i] = { color: "#ff1a30", y: data[i] }
            } else {
                data[i] = { color: "#14b971", y: parseFloat(data[i]) }
            }
        }
        return data;
    }

    /*获取评论列表*/
    function getComment(pageIndex) {    
        $.ajax({
            type: "get",
            url: Consts.OKRUrl148 + 'api/CommentApi?type=7&aboutId=' + contest.tradeUserId + '&scoreType=0&returnReply=true&pageIndex=' + pageIndex + '&pageSize=3',
            dataType: 'json',
            success: function (res) {
                if (res.code == "0") {
                    var obj = eval('(' + res.bodyMessage + ')');
                    vm.totalCount = obj.TotalCount;
                    vm.comment = obj.PageDatas;
                    comment_mach();
                    vm.bar++;                                       
                }else{
                	vm.bar++;
                }
                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                mui.toast('请求超时')
            }            
        });
    }

    /*获取指定用户ID当前持仓订单分页 ticketType订单类型(1:历史订单; 2:当前持仓单; 3:当前挂单;)*/
    function getTradeCurrentPage(pageIndex, ticketType, pageSize,_this) {
        $.ajax({
            type: "get",
            url: Consts.OKRUrl148 + 'api/TradeOrderApi?tradeUserId=' + contest.tradeUserId + '&tradeType=-1&ticketType=' + ticketType + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&openSTime=""&openETime=""&closeSTime=""&closeETime=""',
            dataType: 'json',
            success: function (res) {
                if (res.code == "0") {
                    var obj = eval('(' + res.bodyMessage + ')');
                    var objList = obj.PageDatas;
                    switch (ticketType) {
                        case 1:
                            vm.historyTradeData = vm.historyTradeData.concat(objList);
                            if(vm.historyTradeData.length < pageSize){$(".mui-pull-bottom-tips").eq(1).hide()}
                            contest.history.totalPages = obj.TotalPages;
                            break;
                        case 2:
                            vm.currentTradeData = vm.currentTradeData.concat(objList);
                            if(vm.currentTradeData.length < pageSize){$(".mui-pull-bottom-tips").eq(0).hide()}
                            contest.current.totalPages = obj.TotalPages;
                            break;
                        case 3:
                            //vm.currentTradeData = objList;
                            break;
                        default:;
                    }
                    vm.bar++;
                    if(_this){
                    	_this.endPullUpToRefresh();
                    }
                    vue.filter('time', function (value) {
                        return dateFormat(new Date(value), "MM-dd HH:mm:ss");
                    })
                } else {
                	vm.bar++;
                    switch (ticketType) {
                        case 1:
                            vm.historyTradeData = "no";
                            $(".mui-pull-bottom-tips").eq(1).hide();
                            break;
                        case 2:
                            vm.currentTradeData = "no";
                            $(".mui-pull-bottom-tips").eq(0).hide();
                            break;
                        case 3:
                            //vm.currentTradeData = objList;
                            break;
                        default:;
                    }                   
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                mui.toast('请求超时')
            }            
        });
    }



    // 对Date的扩展，将 Date 转化为指定格式的String   
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
    // 例子：   
    // (new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423   
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
    function dateFormat(date, fmt) {
        //author: meizz   
        var o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "H+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds()             //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

});
define("trader", function(){});

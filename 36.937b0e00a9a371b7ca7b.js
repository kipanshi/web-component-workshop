(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{230:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"c",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};function o(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}function i(e,n,t,r){return new(t||(t=Promise))(function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(c,a)}u((r=r.apply(e,n||[])).next())})}function c(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}},231:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return u}),t.d(n,"d",function(){return s}),t.d(n,"e",function(){return a}),t.d(n,"f",function(){return c}),t.d(n,"g",function(){return f}),t.d(n,"h",function(){return d}),t.d(n,"i",function(){return b}),t.d(n,"j",function(){return l}),t.d(n,"k",function(){return h});var r=t(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function o(e,n,t,o,i){return r.a(this,void 0,void 0,function(){var c;return r.c(this,function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(n,t,i,o)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"==typeof t?n.ownerDocument.createElement(t):t,o&&o.forEach(function(e){return c.classList.add(e)}),i&&Object.assign(c,i),n.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,c]}})})}function i(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}function c(){var e=window.TapticEngine;e&&e.selection()}function a(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function u(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function s(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}function l(e,n){return null!==n.closest(e)}function d(e){var n;return"string"==typeof e&&e.length>0?((n={"ion-color":!0})["ion-color-"+e]=!0,n):void 0}function h(e,n){var t;return(t={})[n]=!0,t[n+"-"+e]=!!e,t}function f(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return n[e]=!0}),n}function b(e,n,t,o){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||-1!==n.indexOf("://")?[3,2]:(i=e.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(n,o)];case 2:return[2,!1]}})})}},232:function(e,n,t){"use strict";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function r(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function o(e){return!!e.shadowRoot&&!!e.attachShadow}function i(e){var n=e.closest("ion-item");return n?n.querySelector("ion-label"):null}function c(e,n,t,r,i){if(e||o(n)){var c=n.querySelector("input.aux-input");c||((c=n.ownerDocument.createElement("input")).type="hidden",c.classList.add("aux-input"),n.appendChild(c)),c.disabled=i,c.name=t,c.value=r||""}}function a(e,n,t){return Math.max(e,Math.min(n,t))}function u(e){return e.timeStamp||Date.now()}function s(e){if(e){var n=e.changedTouches;if(n&&n.length>0){var t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function l(e,n){var t="rtl"===e.document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(e,n){var t=e._original||e;return{_original:e,emit:h(t.emit.bind(t),n)}}function h(e,n){var t;return void 0===n&&(n=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(t),t=setTimeout.apply(void 0,[e,n].concat(r))}}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return u}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return i}),t.d(n,"e",function(){return c}),t.d(n,"f",function(){return d}),t.d(n,"g",function(){return l}),t.d(n,"h",function(){return a}),t.d(n,"i",function(){return h}),t.d(n,"j",function(){return s}),t.d(n,"k",function(){return p});var f={ipad:function(e){return y(e,/iPad/i)},iphone:function(e){return y(e,/iPhone/i)},ios:function(e){return y(e,/iPad|iPhone|iPod/i)},android:function(e){return y(e,/android|sink/i)},phablet:function(e){var n=e.innerWidth,t=e.innerHeight,r=Math.min(n,t),o=Math.max(n,t);return r>390&&r<520&&o>620&&o<800},tablet:function(e){var n=e.innerWidth,t=e.innerHeight,r=Math.min(n,t),o=Math.max(n,t);return r>460&&r<820&&o>780&&o<1400},cordova:k,capacitor:v,electron:function(e){return y(e,/electron/)},pwa:function(e){return e.matchMedia("(display-mode: standalone)").matches},mobile:m,desktop:function(e){return!m(e)},hybrid:function(e){return k(e)||v(e)}};function b(e){return function(e){e.Ionic=e.Ionic||{};var n=e.Ionic.platforms;if(null==n){n=e.Ionic.platforms=function(e){return Object.keys(f).filter(function(n){return f[n](e)})}(e);var t=e.document.documentElement.classList;n.forEach(function(e){return t.add("plt-"+e)})}return n}(e)}function p(e,n){return b(e).includes(n)}function m(e){return function(e,n){return e.matchMedia(n).matches}(e,"(any-pointer:coarse)")}function k(e){return!!(e.cordova||e.phonegap||e.PhoneGap)}function v(e){var n=e.Capacitor;return!(!n||!n.isNative)}function y(e,n){return n.test(e.navigator.userAgent)}},65:function(e,n,t){"use strict";t.r(n),t.d(n,"IonCheckbox",function(){return c});var r=t(3),o=t(232),i=t(231),c=function(){function e(){var e=this;this.inputId="ion-cb-"+a++,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.hostData=function(){var e=this.inputId+"-lbl",n=Object(o.d)(this.el);return n&&(n.id=e),{role:"checkbox","aria-disabled":this.disabled?"true":null,"aria-checked":""+this.checked,"aria-labelledby":e,class:Object.assign({},Object(i.h)(this.color),{"in-item":Object(i.j)("ion-item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){return Object(o.e)(!0,this.el,this.name,this.checked?this.value:"",this.disabled),[Object(r.b)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},Object(r.b)("path","md"===this.mode?{d:"M1.73,12.91 8.1,19.28 22.79,4.59"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8"})),Object(r.b)("button",{type:"button",onClick:this.onClick,onKeyUp:this.onKeyUp,onFocus:this.onFocus,onBlur:this.onBlur})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return':host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--height:26px;--width:26px;--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));--background:var(--ion-item-background,var(--ion-background-color,#fff))}:host(.checkbox-disabled){opacity:.3}:host(.checkbox-key) .checkbox-icon:after{border-radius:50%;left:-9px;top:-9px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}:host(.in-item){margin:10px 8px 9px 0;display:block;position:static}:host(.in-item[slot=start]){margin:8px 16px 8px 2px}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=0}}]);
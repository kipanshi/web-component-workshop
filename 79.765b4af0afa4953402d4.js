(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{182:function(t,e,n){"use strict";n.r(e),n.d(e,"IonToggle",function(){return a});var o=n(230),r=n(3),i=n(231),c=n(232),a=function(){function t(){this.inputId="ion-tg-"+s++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.onClick=function(){this.checked=!this.checked},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var t,e=this;return o.c(this,function(o){switch(o.label){case 0:return t=this,[4,n.e(0).then(n.bind(null,236))];case 1:return t.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:function(t){return e.onStart(t)},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(t){return this.pivotX=t.currentX,this.activated=!0,t.event.preventDefault(),!0},t.prototype.onMove=function(t){var e=t.currentX;u(this.checked,e-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=e,Object(i.f)())},t.prototype.onEnd=function(t){u(this.checked,t.currentX-this.pivotX,4)&&(this.checked=!this.checked,Object(i.f)()),this.activated=!1},t.prototype.getValue=function(){return this.value||""},t.prototype.hostData=function(){var t=this.inputId+"-lbl",e=Object(c.d)(this.el);return e&&(e.id=t),{role:"checkbox",tabindex:"0","aria-disabled":this.disabled?"true":null,"aria-checked":""+this.checked,"aria-labelledby":t,class:Object.assign({},Object(i.h)(this.color),{"in-item":Object(i.j)("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},t.prototype.render=function(){var t=this.getValue();return Object(c.e)(!0,this.el,this.name,this.checked?t:"",this.disabled),Object(r.b)("div",{class:"toggle-icon"},Object(r.b)("div",{class:"toggle-inner"}))},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"keyup",method:"onKeyUp"},{name:"focus",method:"onFocus"},{name:"blur",method:"onBlur"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toggle-md-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.toggle-key.sc-ion-toggle-md-h   input.sc-ion-toggle-md{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-md-h, input.sc-ion-toggle-md{pointer-events:none}input.sc-ion-toggle-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.sc-ion-toggle-md-h{--background:var(--ion-color-medium-tint,#a2a4ab);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:var(--ion-background-color,#fff);--handle-background-checked:var(--ion-color-primary,#3880ff);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:rgba(var(--ion-color-base-rgb),.5)}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-md{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner.sc-ion-toggle-md{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:var(--background-checked)}.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}.toggle-disabled.sc-ion-toggle-md-h{opacity:.3}.in-item[slot].sc-ion-toggle-md-h{margin:0;padding:12px 0 12px 16px;cursor:pointer}.in-item[slot=start].sc-ion-toggle-md-h{padding:12px 18px 12px 2px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function u(t,e,n){var o="rtl"===document.dir;return t?!o&&n>e||o&&-n<e:!o&&-n<e||o&&n>e}var s=0},230:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return c});
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
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(t,e,n,o){return new(n||(n=Promise))(function(r,i){function c(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(c,a)}u((o=o.apply(t,e||[])).next())})}function c(t,e){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}},231:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return h}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return p}),n.d(e,"j",function(){return l}),n.d(e,"k",function(){return f});var o=n(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function r(t,e,n,r,i){return o.a(this,void 0,void 0,function(){var c;return o.c(this,function(o){switch(o.label){case 0:if(t)return[2,t.attachViewToDom(e,n,i,r)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"==typeof n?e.ownerDocument.createElement(n):n,r&&r.forEach(function(t){return c.classList.add(t)}),i&&Object.assign(c,i),e.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,c]}})})}function i(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}function c(){var t=window.TapticEngine;t&&t.selection()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}function l(t,e){return null!==e.closest(t)}function d(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function f(t,e){var n;return(n={})[e]=!0,n[e+"-"+t]=!!t,n}function h(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}function p(t,e,n,r){return o.a(this,void 0,void 0,function(){var i;return o.c(this,function(o){switch(o.label){case 0:return null==e||"#"===e[0]||-1!==e.indexOf("://")?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return o.sent(),[2,i.push(e,r)];case 2:return[2,!1]}})})}},232:function(t,e,n){"use strict";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function o(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function r(t){return!!t.shadowRoot&&!!t.attachShadow}function i(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function c(t,e,n,o,i){if(t||r(e)){var c=e.querySelector("input.aux-input");c||((c=e.ownerDocument.createElement("input")).type="hidden",c.classList.add("aux-input"),e.appendChild(c)),c.disabled=i,c.name=n,c.value=o||""}}function a(t,e,n){return Math.max(t,Math.min(e,n))}function u(t){return t.timeStamp||Date.now()}function s(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}}function f(t,e){var n;return void 0===e&&(e=0),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(o))}}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return a}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return s}),n.d(e,"k",function(){return g});var h={ipad:function(t){return y(t,/iPad/i)},iphone:function(t){return y(t,/iPhone/i)},ios:function(t){return y(t,/iPad|iPhone|iPod/i)},android:function(t){return y(t,/android|sink/i)},phablet:function(t){var e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),r=Math.max(e,n);return o>390&&o<520&&r>620&&r<800},tablet:function(t){var e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),r=Math.max(e,n);return o>460&&o<820&&r>780&&r<1400},cordova:m,capacitor:v,electron:function(t){return y(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:b,desktop:function(t){return!b(t)},hybrid:function(t){return m(t)||v(t)}};function p(t){return function(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;if(null==e){e=t.Ionic.platforms=function(t){return Object.keys(h).filter(function(e){return h[e](t)})}(t);var n=t.document.documentElement.classList;e.forEach(function(t){return n.add("plt-"+t)})}return e}(t)}function g(t,e){return p(t).includes(e)}function b(t){return function(t,e){return t.matchMedia(e).matches}(t,"(any-pointer:coarse)")}function m(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function v(t){var e=t.Capacitor;return!(!e||!e.isNative)}function y(t,e){return e.test(t.navigator.userAgent)}}}]);
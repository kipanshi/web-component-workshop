(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{230:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return l});
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
var i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function r(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function o(n,t,e,i){return new(e||(e=Promise))(function(r,o){function l(n){try{c(i.next(n))}catch(n){o(n)}}function s(n){try{c(i.throw(n))}catch(n){o(n)}}function c(n){n.done?r(n.value):new e(function(t){t(n.value)}).then(l,s)}c((i=i.apply(n,t||[])).next())})}function l(n,t){var e,i,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;l;)try{if(e=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,i=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(n,l)}catch(n){o=[6,n],i=0}finally{e=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},231:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o}),e.d(t,"c",function(){return c}),e.d(t,"d",function(){return a}),e.d(t,"e",function(){return s}),e.d(t,"f",function(){return l}),e.d(t,"g",function(){return p}),e.d(t,"h",function(){return f}),e.d(t,"i",function(){return h}),e.d(t,"j",function(){return u}),e.d(t,"k",function(){return d});var i=e(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function r(n,t,e,r,o){return i.a(this,void 0,void 0,function(){var l;return i.c(this,function(i){switch(i.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,r)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return l="string"==typeof e?t.ownerDocument.createElement(e):e,r&&r.forEach(function(n){return l.classList.add(n)}),o&&Object.assign(l,o),t.appendChild(l),l.componentOnReady?[4,l.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,l]}})})}function o(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}function l(){var n=window.TapticEngine;n&&n.selection()}function s(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function c(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function u(n,t){return null!==t.closest(n)}function f(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function d(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=!!n,e}function p(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}function h(n,t,e,r){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(o=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return i.sent(),[2,o.push(t,r)];case 2:return[2,!1]}})})}},69:function(n,t,e){"use strict";e.r(t),e.d(t,"IonInfiniteScroll",function(){return l}),e.d(t,"IonInfiniteScrollContent",function(){return s});var i=e(230),r=e(3),o=e(231),l=function(){function n(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return n.prototype.thresholdChanged=function(n){n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(n){this.disabled&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)},n.prototype.componentDidLoad=function(){return i.a(this,void 0,void 0,function(){var n,t,e=this;return i.c(this,function(i){switch(i.label){case 0:return(n=this.el.closest("ion-content"))?[4,n.componentOnReady()]:[3,3];case 1:return i.sent(),t=this,[4,n.getScrollElement()];case 2:t.scrollEl=i.sent(),i.label=3;case 3:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write(function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)}),[2]}})})},n.prototype.componentDidUnload=function(){this.scrollEl=void 0},n.prototype.onScroll=function(){var n=this.scrollEl;if(!n||!this.canStart())return 1;var t=this.el.offsetHeight;if(0===t)return 2;var e=n.scrollTop,i=n.offsetHeight,r=0!==this.thrPc?i*this.thrPc:this.thrPx;if(("bottom"===this.position?n.scrollHeight-t-e-r-i:e-t-r)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},n.prototype.complete=function(){var n=this,t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var e=t.scrollHeight-t.scrollTop;requestAnimationFrame(function(){n.queue.read(function(){var i=t.scrollHeight-e;requestAnimationFrame(function(){n.queue.write(function(){t.scrollTop=i,n.isBusy=!1})})})})}},n.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},n.prototype.enableScrollEvents=function(n){this.scrollEl&&this.enableListener(this,"scroll",n,this.scrollEl)},n.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),n}(),s=function(){function n(){}return n.prototype.componentDidLoad=function(){void 0===this.loadingSpinner&&(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},n.prototype.hostData=function(){return{class:Object(o.k)(this.mode,"infinite-scroll-content")}},n.prototype.render=function(){return Object(r.b)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(r.b)("div",{class:"infinite-loading-spinner"},Object(r.b)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(r.b)("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),n}()}}]);
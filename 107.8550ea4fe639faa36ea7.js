(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{230:function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return i}),e.d(t,"c",function(){return u});
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
var r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function o(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function i(n,t,e,r){return new(e||(e=Promise))(function(o,i){function u(n){try{a(r.next(n))}catch(n){i(n)}}function c(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(u,c)}a((r=r.apply(n,t||[])).next())})}function u(n,t){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(n,u)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}},231:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return f}),e.d(t,"e",function(){return c}),e.d(t,"f",function(){return u}),e.d(t,"g",function(){return d}),e.d(t,"h",function(){return s}),e.d(t,"i",function(){return b}),e.d(t,"j",function(){return l}),e.d(t,"k",function(){return p});var r=e(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function o(n,t,e,o,i){return r.a(this,void 0,void 0,function(){var u;return r.c(this,function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,i,o)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?t.ownerDocument.createElement(e):e,o&&o.forEach(function(n){return u.classList.add(n)}),i&&Object.assign(u,i),t.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function i(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}function u(){var n=window.TapticEngine;n&&n.selection()}function c(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function f(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function l(n,t){return null!==t.closest(n)}function s(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function p(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=!!n,e}function d(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}function b(n,t,e,o){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(i=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(t,o)];case 2:return[2,!1]}})})}},72:function(n,t,e){"use strict";e.r(t),e.d(t,"IonText",function(){return i});var r=e(3),o=e(231),i=function(){function n(){}return n.prototype.hostData=function(){return{class:Object(o.h)(this.color)}},n.prototype.render=function(){return Object(r.b)("slot",null)},Object.defineProperty(n,"is",{get:function(){return"ion-text"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".ion-color.sc-ion-text-h{color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),n}()}}]);
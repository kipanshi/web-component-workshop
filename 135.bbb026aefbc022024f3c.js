(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{164:function(n,o,r){"use strict";r.r(o),r.d(o,"IonChip",function(){return i});var t=r(3),e=r(231),i=function(){function n(){this.outline=!1}return n.prototype.hostData=function(){return{"ion-activatable":!0,class:Object.assign({},Object(e.h)(this.color),{"chip-outline":this.outline})}},n.prototype.render=function(){return[Object(t.b)("slot",null),"md"===this.mode?Object(t.b)("ion-ripple-effect",null):null]},Object.defineProperty(n,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"},outline:{type:Boolean,attr:"outline"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-chip-md-h{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px;padding:7px 12px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-chip-md-h:focus{outline:none}.sc-ion-chip-md-h:focus, .sc-ion-chip-md-h:hover{--background:rgba(0,0,0,0.16)}.activated.sc-ion-chip-md-h{--background:rgba(0,0,0,0.2)}.ion-color.sc-ion-chip-md-h{background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}.ion-color.sc-ion-chip-md-h:focus, .ion-color.sc-ion-chip-md-h:hover{background:rgba(var(--ion-color-base-rgb),.12)}.ion-color.activated.sc-ion-chip-md-h{background:rgba(var(--ion-color-base-rgb),.16)}.chip-outline.sc-ion-chip-md-h{border-width:1px;border-style:solid}.chip-outline.sc-ion-chip-md-h:not(.ion-color){border-color:rgba(0,0,0,.32);background:transparent}.chip-outline.ion-color.sc-ion-chip-md-h{border-color:rgba(var(--ion-color-base-rgb),.32)}.chip-outline.sc-ion-chip-md-h:not(.ion-color):focus, .chip-outline.sc-ion-chip-md-h:not(.ion-color):hover{background:rgba(0,0,0,.04)}.chip-outline.activated.sc-ion-chip-md-h:not(.ion-color){background:rgba(0,0,0,.08)}.sc-ion-chip-md-s > ion-icon{font-size:20px}.sc-ion-chip-md-h:not(.ion-color) .sc-ion-chip-md-s > ion-icon{color:rgba(0,0,0,.54)}.sc-ion-chip-md-s > ion-icon:first-child{margin:-4px 8px -4px -4px}.sc-ion-chip-md-s > ion-icon:last-child{margin:-4px -4px -4px 8px}.sc-ion-chip-md-s > ion-avatar{width:24px;height:24px}.sc-ion-chip-md-s > ion-avatar:first-child{margin:-4px 8px -4px -8px}.sc-ion-chip-md-s > ion-avatar:last-child{margin:-4px -8px -4px 8px}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),n}()},230:function(n,o,r){"use strict";r.d(o,"b",function(){return e}),r.d(o,"a",function(){return i}),r.d(o,"c",function(){return c});
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
var t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var r in o)o.hasOwnProperty(r)&&(n[r]=o[r])})(n,o)};function e(n,o){function r(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}function i(n,o,r,t){return new(r||(r=Promise))(function(e,i){function c(n){try{a(t.next(n))}catch(n){i(n)}}function u(n){try{a(t.throw(n))}catch(n){i(n)}}function a(n){n.done?e(n.value):new r(function(o){o(n.value)}).then(c,u)}a((t=t.apply(n,o||[])).next())})}function c(n,o){var r,t,e,i,c={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,t&&(e=2&i[0]?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,t=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(e=(e=c.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){c.label=i[1];break}if(6===i[0]&&c.label<e[1]){c.label=e[1],e=i;break}if(e&&c.label<e[2]){c.label=e[2],c.ops.push(i);break}e[2]&&c.ops.pop(),c.trys.pop();continue}i=o.call(n,c)}catch(n){i=[6,n],t=0}finally{r=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}},231:function(n,o,r){"use strict";r.d(o,"a",function(){return e}),r.d(o,"b",function(){return i}),r.d(o,"c",function(){return a}),r.d(o,"d",function(){return l}),r.d(o,"e",function(){return u}),r.d(o,"f",function(){return c}),r.d(o,"g",function(){return d}),r.d(o,"h",function(){return p}),r.d(o,"i",function(){return h}),r.d(o,"j",function(){return s}),r.d(o,"k",function(){return f});var t=r(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function e(n,o,r,e,i){return t.a(this,void 0,void 0,function(){var c;return t.c(this,function(t){switch(t.label){case 0:if(n)return[2,n.attachViewToDom(o,r,i,e)];if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"==typeof r?o.ownerDocument.createElement(r):r,e&&e.forEach(function(n){return c.classList.add(n)}),i&&Object.assign(c,i),o.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2,c]}})})}function i(n,o){if(o){if(n)return n.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()}function c(){var n=window.TapticEngine;n&&n.selection()}function u(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function l(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function s(n,o){return null!==o.closest(n)}function p(n){var o;return"string"==typeof n&&n.length>0?((o={"ion-color":!0})["ion-color-"+n]=!0,o):void 0}function f(n,o){var r;return(r={})[o]=!0,r[o+"-"+n]=!!n,r}function d(n){var o={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return o[n]=!0}),o}function h(n,o,r,e){return t.a(this,void 0,void 0,function(){var i;return t.c(this,function(t){switch(t.label){case 0:return null==o||"#"===o[0]||-1!==o.indexOf("://")?[3,2]:(i=n.document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return t.sent(),[2,i.push(o,e)];case 2:return[2,!1]}})})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"IonRange",function(){return s});var r=t(230),i=t(3),o=t(232),a=t(231),s=function(){function e(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0}return e.prototype.debounceChanged=function(){this.ionChange=Object(o.f)(this.ionChange,this.debounce)},e.prototype.minChanged=function(){this.noUpdate||this.updateRatio()},e.prototype.maxChanged=function(){this.noUpdate||this.updateRatio()},e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()},e.prototype.valueChanged=function(e){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:e})},e.prototype.componentWillLoad=function(){this.updateRatio(),this.debounceChanged(),this.emitStyle()},e.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){var e,n=this;return r.c(this,function(r){switch(r.label){case 0:return e=this,[4,t.e(0).then(t.bind(null,236))];case 1:return e.gesture=r.sent().createGesture({el:this.rangeSlider,queue:this.queue,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(e){return n.onEnd(e)}}),this.gesture.setDisabled(this.disabled),[2]}})})},e.prototype.keyChng=function(e){var n=this.step;n=n>0?n:1,n/=this.max-this.min,e.detail.isIncrease||(n*=-1),"A"===e.detail.knob?this.ratioA+=n:this.ratioB+=n,this.updateValue()},e.prototype.handleKeyboard=function(e,n){var t=this.step;t=t>0?t:1,t/=this.max-this.min,n||(t*=-1),"A"===e?this.ratioA+=t:this.ratioB+=t,this.updateValue()},e.prototype.getValue=function(){var e=this.value||0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e},e.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},e.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},e.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},e.prototype.onStart=function(e){this.fireFocus();var n=this.rect=this.rangeSlider.getBoundingClientRect(),t=e.currentX,r=Object(o.h)(0,(t-n.left)/n.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-r)<Math.abs(this.ratioB-r)?"A":"B",this.update(t)},e.prototype.onMove=function(e){this.update(e.currentX)},e.prototype.onEnd=function(e){this.update(e.currentX),this.pressedKnob=void 0,this.fireBlur()},e.prototype.update=function(e){var n=this.rect,t=Object(o.h)(0,(e-n.left)/n.width,1);this.snaps&&(t=d(u(t,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=t:this.ratioB=t,this.updateValue()},Object.defineProperty(e.prototype,"valA",{get:function(){return u(this.ratioA,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valB",{get:function(){return u(this.ratioB,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ratioLower",{get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!0,configurable:!0}),e.prototype.updateRatio=function(){var e=this.getValue(),n=this.min,t=this.max;this.dualKnobs?(this.ratioA=d(e.lower,n,t),this.ratioB=d(e.upper,n,t)):this.ratioA=d(e,n,t)},e.prototype.updateValue=function(){this.noUpdate=!0;var e=this.valA,n=this.valB;this.value=this.dualKnobs?{lower:Math.min(e,n),upper:Math.max(e,n)}:e,this.noUpdate=!1},e.prototype.hostData=function(){return{class:Object.assign({},Object(a.h)(this.color),{"in-item":Object(a.j)("ion-item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}},e.prototype.render=function(){var e=this,n=this,t=n.min,r=n.max,o=n.step,a=n.ratioLower,s=n.ratioUpper,u=100*a+"%",l=100-100*s+"%",h=[];if(this.snaps)for(var b=t;b<=r;b+=o){var p=d(b,t,r);h.push({ratio:p,active:p>=a&&p<=s,left:100*p+"%"})}return[Object(i.b)("slot",{name:"start"}),Object(i.b)("div",{class:"range-slider",ref:function(n){return e.rangeSlider=n}},h.map(function(e){return Object(i.b)("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})}),Object(i.b)("div",{class:"range-bar",role:"presentation"}),Object(i.b)("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:u,right:l}}),c({knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:t,max:r}),this.dualKnobs&&c({knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:t,max:r})),Object(i.b)("slot",{name:"end"})]},Object.defineProperty(e,"is",{get:function(){return"ion-range"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max",watchCallbacks:["maxChanged"]},min:{type:Number,attr:"min",watchCallbacks:["minChanged"]},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},queue:{context:"queue"},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionIncrease",method:"keyChng"},{name:"ionDecrease",method:"keyChng"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-range-md-h{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.range-disabled.sc-ion-range-md-h{pointer-events:none}.sc-ion-range-md-s > ion-label{-ms-flex:initial;flex:initial}.sc-ion-range-md-s > ion-icon[slot]{font-size:24px}.range-slider.sc-ion-range-md{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab}.range-pressed.sc-ion-range-md-h   .range-slider.sc-ion-range-md{cursor:-webkit-grabbing;cursor:grabbing}.range-pin.sc-ion-range-md{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle.sc-ion-range-md{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle.sc-ion-range-md:active, .range-knob-handle.sc-ion-range-md:focus{outline:none}.range-bar.sc-ion-range-md{left:0;top:calc((var(--height) - var(--bar-height)) / 2);width:100%;height:var(--bar-height);background:var(--bar-background)}.range-bar.sc-ion-range-md, .range-knob.sc-ion-range-md{position:absolute;pointer-events:none}.range-knob.sc-ion-range-md{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow)}.range-pressed.sc-ion-range-md-h   .range-bar-active.sc-ion-range-md{will-change:left,right}.range-pressed.sc-ion-range-md-h   .range-knob-handle.sc-ion-range-md{will-change:left}.in-item.sc-ion-range-md-h{width:100%}.sc-ion-range-md-h.in-item .sc-ion-range-md-s > ion-label{-ms-flex-item-align:center;align-self:center}.sc-ion-range-md-h{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding:8px 14px;font-size:12px}.ion-color.sc-ion-range-md-h   .range-bar.sc-ion-range-md{background:rgba(var(--ion-color-base-rgb),.26)}.ion-color.sc-ion-range-md-h   .range-bar-active.sc-ion-range-md, .ion-color.sc-ion-range-md-h   .range-knob.sc-ion-range-md, .ion-color.sc-ion-range-md-h   .range-pin.sc-ion-range-md, .ion-color.sc-ion-range-md-h   .range-pin.sc-ion-range-md:before, .ion-color.sc-ion-range-md-h   .range-tick.sc-ion-range-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.range-has-pin.sc-ion-range-md-h{padding-top:28px}.range-bar-active.sc-ion-range-md{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob.sc-ion-range-md{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick.sc-ion-range-md{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active.sc-ion-range-md{background:transparent}.range-pin.sc-ion-range-md{padding:8px 0;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin.sc-ion-range-md, .range-pin.sc-ion-range-md:before{background:var(--pin-background)}.range-pin.sc-ion-range-md:before{left:50%;top:3px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:0;margin-left:-13px;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:"";z-index:-1}.range-knob-pressed.sc-ion-range-md   .range-pin.sc-ion-range-md{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}.sc-ion-range-md-h:not(.range-has-pin)   .range-knob-pressed.sc-ion-range-md   .range-knob.sc-ion-range-md{-webkit-transform:scale(1);transform:scale(1)}.range-disabled.sc-ion-range-md-h   .range-bar.sc-ion-range-md, .range-disabled.sc-ion-range-md-h   .range-bar-active.sc-ion-range-md, .range-disabled.sc-ion-range-md-h   .range-knob.sc-ion-range-md, .range-disabled.sc-ion-range-md-h   .range-tick.sc-ion-range-md{background-color:var(--ion-background-color-step-250,#bfbfbf)}.range-disabled.sc-ion-range-md-h   .range-knob.sc-ion-range-md{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function c(e){var n=e.knob,t=e.value,r=e.min,o=e.max,a=e.disabled,s=e.handleKeyboard;return Object(i.b)("div",{onKeyDown:function(e){var t=e.key;"ArrowLeft"===t||"ArrowDown"===t?(s(n,!1),e.preventDefault(),e.stopPropagation()):"ArrowRight"!==t&&"ArrowUp"!==t||(s(n,!0),e.preventDefault(),e.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-pressed":e.pressed,"range-knob-min":t===r,"range-knob-max":t===o},style:{left:100*e.ratio+"%"},role:"slider",tabindex:a?-1:0,"aria-valuemin":r,"aria-valuemax":o,"aria-disabled":a?"true":null,"aria-valuenow":t},e.pin&&Object(i.b)("div",{class:"range-pin",role:"presentation"},Math.round(t)),Object(i.b)("div",{class:"range-knob",role:"presentation"}))}function u(e,n,t,r){var i=(t-n)*e;return r>0&&(i=Math.round(i/r)*r+n),Object(o.h)(n,i,t)}function d(e,n,t){return Object(o.h)(0,(e-n)/(t-n),1)}},230:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return o}),t.d(n,"c",function(){return a});
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
var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};function i(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}function o(e,n,t,r){return new(t||(t=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new t(function(n){n(e.value)}).then(a,s)}c((r=r.apply(e,n||[])).next())})}function a(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},231:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o}),t.d(n,"c",function(){return c}),t.d(n,"d",function(){return u}),t.d(n,"e",function(){return s}),t.d(n,"f",function(){return a}),t.d(n,"g",function(){return b}),t.d(n,"h",function(){return l}),t.d(n,"i",function(){return p}),t.d(n,"j",function(){return d}),t.d(n,"k",function(){return h});var r=t(230);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */function i(e,n,t,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(n,t,o,i)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof t?n.ownerDocument.createElement(t):t,i&&i.forEach(function(e){return a.classList.add(e)}),o&&Object.assign(a,o),n.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}function a(){var e=window.TapticEngine;e&&e.selection()}function s(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function c(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function u(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}function d(e,n){return null!==n.closest(e)}function l(e){var n;return"string"==typeof e&&e.length>0?((n={"ion-color":!0})["ion-color-"+e]=!0,n):void 0}function h(e,n){var t;return(t={})[n]=!0,t[n+"-"+e]=!!e,t}function b(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return n[e]=!0}),n}function p(e,n,t,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||-1!==n.indexOf("://")?[3,2]:(o=e.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(n,i)];case 2:return[2,!1]}})})}},232:function(e,n,t){"use strict";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function r(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function i(e){return!!e.shadowRoot&&!!e.attachShadow}function o(e){var n=e.closest("ion-item");return n?n.querySelector("ion-label"):null}function a(e,n,t,r,o){if(e||i(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=o,a.name=t,a.value=r||""}}function s(e,n,t){return Math.max(e,Math.min(n,t))}function c(e){return e.timeStamp||Date.now()}function u(e){if(e){var n=e.changedTouches;if(n&&n.length>0){var t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function d(e,n){var t="rtl"===e.document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function l(e,n){var t=e._original||e;return{_original:e,emit:h(t.emit.bind(t),n)}}function h(e,n){var t;return void 0===n&&(n=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(t),t=setTimeout.apply(void 0,[e,n].concat(r))}}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return c}),t.d(n,"c",function(){return i}),t.d(n,"d",function(){return o}),t.d(n,"e",function(){return a}),t.d(n,"f",function(){return l}),t.d(n,"g",function(){return d}),t.d(n,"h",function(){return s}),t.d(n,"i",function(){return h}),t.d(n,"j",function(){return u}),t.d(n,"k",function(){return f});var b={ipad:function(e){return y(e,/iPad/i)},iphone:function(e){return y(e,/iPhone/i)},ios:function(e){return y(e,/iPad|iPhone|iPod/i)},android:function(e){return y(e,/android|sink/i)},phablet:function(e){var n=e.innerWidth,t=e.innerHeight,r=Math.min(n,t),i=Math.max(n,t);return r>390&&r<520&&i>620&&i<800},tablet:function(e){var n=e.innerWidth,t=e.innerHeight,r=Math.min(n,t),i=Math.max(n,t);return r>460&&r<820&&i>780&&i<1400},cordova:m,capacitor:v,electron:function(e){return y(e,/electron/)},pwa:function(e){return e.matchMedia("(display-mode: standalone)").matches},mobile:g,desktop:function(e){return!g(e)},hybrid:function(e){return m(e)||v(e)}};function p(e){return function(e){e.Ionic=e.Ionic||{};var n=e.Ionic.platforms;if(null==n){n=e.Ionic.platforms=function(e){return Object.keys(b).filter(function(n){return b[n](e)})}(e);var t=e.document.documentElement.classList;n.forEach(function(e){return t.add("plt-"+e)})}return n}(e)}function f(e,n){return p(e).includes(n)}function g(e){return function(e,n){return e.matchMedia(n).matches}(e,"(any-pointer:coarse)")}function m(e){return!!(e.cordova||e.phonegap||e.PhoneGap)}function v(e){var n=e.Capacitor;return!(!n||!n.isNative)}function y(e,n){return n.test(e.navigator.userAgent)}}}]);
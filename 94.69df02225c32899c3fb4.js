(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{220:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"DeckgoSlideCode",function(){return d});var o=n(234),r=n(4),a=n(238),i=n(241),s="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var l,c,u=(function(e){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,o=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,o.util.encode(e.content),e.alias):"Array"===o.util.type(e)?e.map(o.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,t){var n=o.util.type(e);switch(t=t||{},n){case"Object":if(t[o.util.objId(e)])return t[o.util.objId(e)];var r={};for(var a in t[o.util.objId(e)]=r,e)e.hasOwnProperty(a)&&(r[a]=o.util.clone(e[a],t));return r;case"Array":return t[o.util.objId(e)]?t[o.util.objId(e)]:(r=[],t[o.util.objId(e)]=r,e.forEach(function(e,n){r[n]=o.util.clone(e,t)}),r)}return e}},languages:{extend:function(e,t){var n=o.util.clone(o.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var a=(r=r||o.languages)[e];if(2==arguments.length){for(var i in n=arguments[1])n.hasOwnProperty(i)&&(a[i]=n[i]);return a}var s={};for(var l in a)if(a.hasOwnProperty(l)){if(l==t)for(var i in n)n.hasOwnProperty(i)&&(s[i]=n[i]);s[l]=a[l]}return o.languages.DFS(o.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,t,n,r){for(var a in r=r||{},e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"!==o.util.type(e[a])||r[o.util.objId(e[a])]?"Array"!==o.util.type(e[a])||r[o.util.objId(e[a])]||(r[o.util.objId(e[a])]=!0,o.languages.DFS(e[a],t,a,r)):(r[o.util.objId(e[a])]=!0,o.languages.DFS(e[a],t,null,r)))}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",r);for(var a,i=r.elements||e.querySelectorAll(r.selector),s=0;a=i[s++];)o.highlightElement(a,!0===t,r.callback)},highlightElement:function(n,r,a){for(var i,s,l=n;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=o.languages[i]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,n.parentNode&&/pre/i.test((l=n.parentNode).nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var c={element:n,language:i,grammar:s,code:n.textContent};if(o.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(o.hooks.run("before-highlight",c),c.element.textContent=c.code,o.hooks.run("after-highlight",c)),void o.hooks.run("complete",c);if(o.hooks.run("before-highlight",c),r&&t.Worker){var u=new Worker(o.filename);u.onmessage=function(e){c.highlightedCode=e.data,o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(c.element),o.hooks.run("after-highlight",c),o.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=o.highlight(c.code,c.grammar,c.language),o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(n),o.hooks.run("after-highlight",c),o.hooks.run("complete",c)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return o.hooks.run("before-tokenize",a),a.tokens=o.tokenize(a.code,a.grammar),o.hooks.run("after-tokenize",a),r.stringify(o.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,r,a,i,s){var l=o.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==s)return;var u=n[c];u="Array"===o.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var g=u[d],p=g.inside,h=!!g.lookbehind,f=!!g.greedy,m=0,b=g.alias;if(f&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var v=r,k=a;v<t.length;k+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof l)){if(f&&v!=t.length-1){if(g.lastIndex=k,!(z=g.exec(e)))break;for(var x=z.index+(h?z[1].length:0),S=z.index+z[0].length,A=v,P=k,j=t.length;A<j&&(P<S||!t[A].type&&!t[A-1].greedy);++A)x>=(P+=t[A].length)&&(++v,k=P);if(t[v]instanceof l)continue;F=A-v,w=e.slice(k,P),z.index-=k}else{g.lastIndex=0;var z=g.exec(w),F=1}if(z){h&&(m=z[1]?z[1].length:0),S=(x=z.index+m)+(z=z[0].slice(m)).length;var L=w.slice(0,x),C=w.slice(S),O=[v,F];L&&(++v,k+=L.length,O.push(L));var E=new l(c,p?o.tokenize(z,p):z,b,z,f);if(O.push(E),C&&O.push(C),Array.prototype.splice.apply(t,O),1!=F&&o.matchGrammar(e,t,n,v,k,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,t,n){var r=[e],a=t.rest;if(a){for(var i in a)t[i]=a[i];delete t.rest}return o.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=o.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=o.hooks.all[e];if(n&&n.length)for(var r,a=0;r=n[a++];)r(t)}}},r=o.Token=function(e,t,n,o,r){this.type=e,this.content=t,this.alias=n,this.length=0|(o||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===o.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var a={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var i="Array"===o.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}o.hooks.run("wrap",a);var s=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(s?" "+s:"")+">"+a.content+"</"+a.tag+">"},!t.document)return t.addEventListener?(o.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,a=n.immediateClose;t.postMessage(o.highlight(n.code,o.languages[r],r)),a&&t.close()},!1),t.Prism):t.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(o.filename=a.src,o.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(o.highlightAll):window.setTimeout(o.highlightAll,16):document.addEventListener("DOMContentLoaded",o.highlightAll))),t.Prism}();e.exports&&(e.exports=n),void 0!==s&&(s.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var o,r=t.getAttribute("data-src"),a=t,i=/\blang(?:uage)?-([\w-]+)\b/i;a&&!i.test(a.className);)a=a.parentNode;if(a&&(o=(t.className.match(i)||[,""])[1]),!o){var s=(r.match(/\.(\w+)$/)||[,""])[1];o=e[s]||s}var l=document.createElement("code");l.className="language-"+o,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l)):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),o=document.createElement("a");return o.textContent=t.getAttribute("data-download-link-label")||"Download",o.setAttribute("download",""),o.href=n,o}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}(c={exports:{}},c.exports),c.exports);!function(e){e[e.SWIPE=0]="SWIPE",e[e.SCROLL=1]="SCROLL"}(l||(l={}));var d=function(){function e(){this.anchor="// DeckDeckGo",this.anchorZoom="// DeckDeckGoZoom",this.hideAnchor=!0,this.language="javascript",this.anchorOffsetTop=0,this.startX=null,this.action=null}return e.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){return o.b(this,function(e){switch(e.label){case 0:return[4,a.a.hideLazyLoadImages(this.el)];case 1:return e.sent(),this.slideDidLoad.emit(),[4,this.loadLanguage()];case 2:return e.sent(),[4,this.fetchCode()];case 3:return e.sent(),[4,this.parseSlottedCode()];case 4:return e.sent(),[2]}})})},e.prototype.loadLanguage=function(){var e=this;return new Promise(function(t){return o.a(e,void 0,void 0,function(){var e,n=this;return o.b(this,function(r){switch(r.label){case 0:return document&&"javascript"!==this.language?document.querySelector("[deckdeckgo-prims='"+this.language+"']")?[4,this.parseSlottedCode()]:[3,2]:(t(),[2]);case 1:return r.sent(),t(),[2];case 2:return(e=document.createElement("script")).onload=function(){return o.a(n,void 0,void 0,function(){return o.b(this,function(e){switch(e.label){case 0:return[4,this.parseSlottedCode()];case 1:return e.sent(),[2]}})})},e.src="https://unpkg.com/prismjs@latest/components/prism-"+this.language+".js",e.setAttribute("deckdeckgo-prims",this.language),e.defer=!0,document.head.appendChild(e),t(),[2]}})})})},e.prototype.parseSlottedCode=function(){var e=this.el.querySelector("[slot='code']");return e?this.parseCode(e.innerHTML):new Promise(function(e){e()})},e.prototype.beforeSwipe=function(e){var t=this;return new Promise(function(n){return o.a(t,void 0,void 0,function(){var t;return o.b(this,function(o){switch(o.label){case 0:return[4,this.scrollToNext(e)];case 1:return(t=o.sent())?[4,this.zoomCode(!1)]:[3,3];case 2:o.sent(),o.label=3;case 3:return n(t),[2]}})})})},e.prototype.scrollToNext=function(e){var t=this;return new Promise(function(n){return o.a(t,void 0,void 0,function(){var t,r,a,i,s,l=this;return o.b(this,function(o){switch(o.label){case 0:return t=this.el.shadowRoot.querySelectorAll("span.deckgo-code-anchor"),r=!0,t?(a=e?Array.from(t):Array.from(t).reverse(),(i=a.find(function(t){return e?t.offsetTop>l.anchorOffsetTop:t.offsetTop<l.anchorOffsetTop}))?(i.scrollIntoView({block:"start",behavior:"smooth"}),r=!1,this.anchorOffsetTop=i.offsetTop,[4,this.zoomCode(this.hasLineZoom(i.textContent))]):[3,2]):[3,4];case 1:return o.sent(),[3,3];case 2:e||(s=this.el.shadowRoot.querySelector("code"))&&s.firstElementChild&&(s.firstElementChild.scrollIntoView({block:"center",behavior:"smooth"}),this.anchorOffsetTop=0),o.label=3;case 3:return[3,5];case 4:this.anchorOffsetTop=0,o.label=5;case 5:return 0!==this.anchorOffsetTop?[3,7]:[4,this.zoomCode(!1)];case 6:o.sent(),o.label=7;case 7:return n(r),[2]}})})})},e.prototype.zoomCode=function(e){var t=this;return new Promise(function(n){var o=t.el.shadowRoot.querySelector("div.deckgo-code-container");o&&o.style.setProperty("--zoom-code",e?"1.3":"1");var r=t.el.querySelector("[slot='title']");r&&r.style.setProperty("opacity",e?"0":"1"),n()})},e.prototype.lazyLoadImages=function(){return a.a.lazyLoadImages(this.el)},e.prototype.fetchCode=function(){return o.a(this,void 0,void 0,function(){var e,t;return o.b(this,function(n){switch(n.label){case 0:if(!this.srcFile)return[2];n.label=1;case 1:return n.trys.push([1,5,,6]),[4,fetch(this.srcFile)];case 2:return[4,n.sent().text()];case 3:return e=n.sent(),[4,this.parseCode(e)];case 4:return n.sent(),[3,6];case 5:return n.sent(),(t=this.el.shadowRoot.querySelector("div.deckgo-code-container"))&&e&&(t.children[0].innerHTML=e),[3,6];case 6:return[2]}})})},e.prototype.parseCode=function(e){var t=this;return new Promise(function(n){return o.a(t,void 0,void 0,function(){var t,r;return o.b(this,function(o){switch(o.label){case 0:if(!(t=this.el.shadowRoot.querySelector("div.deckgo-code-container")))return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),r=u.highlight(e,u.languages[this.language]),t.children[0].innerHTML=r,[4,this.addAnchors()];case 2:case 3:return o.sent(),[3,4];case 4:return n(),[2]}})})})},e.prototype.addAnchors=function(){var e=this;return new Promise(function(t){var n=e.el.shadowRoot.querySelectorAll("span.comment");if(n){var o=Array.from(n).filter(function(t){return e.hasLineAnchor(t.innerHTML)});o&&o.forEach(function(t){t.classList.add("deckgo-code-anchor"),e.hideAnchor&&t.classList.add("deckgo-code-anchor-hidden")})}t()})},e.prototype.hasLineAnchor=function(e){return e&&this.anchor&&-1===e.indexOf("@Prop")&&e.split(" ").join("").indexOf(this.anchor.split(" ").join(""))>-1},e.prototype.render=function(){var e=this;return Object(r.b)("div",{class:"deckgo-slide",onTouchStart:function(t){return e.touchScrollStart(t)},onTouchMove:function(t){return e.touchScrollMove(t)},onTouchEnd:function(){return e.touchScrollEnd()}},Object(r.b)("slot",{name:"title"}),Object(r.b)("div",{class:"deckgo-code-container",onScroll:function(){return e.emitScrolling()}},Object(r.b)("code",null)),Object(r.b)("slot",{name:"code"}))},e.prototype.touchScrollStart=function(e){this.startX=i.a.unifyEvent(e).clientX},e.prototype.touchScrollMove=function(e){if(!this.action){var t=i.a.unifyEvent(e).clientX,n=this.startX>t,o=this.startX<t;this.action=n||o?l.SWIPE:l.SCROLL,n||o?this.lockScroll():(this.scrolling.emit(),this.unlockScroll())}},e.prototype.touchScrollEnd=function(){this.action=null,this.unlockScroll()},e.prototype.lockScroll=function(){this.el.shadowRoot.querySelector("div.deckgo-code-container").style.setProperty("overflow-y","hidden")},e.prototype.unlockScroll=function(){this.el.shadowRoot.querySelector("div.deckgo-code-container").style.removeProperty("overflow-y")},e.prototype.emitScrolling=function(){this.action===l.SCROLL&&this.scrolling.emit()},e.prototype.hasLineZoom=function(e){return e&&this.anchorZoom&&-1===e.indexOf("@Prop")&&e.split(" ").join("").indexOf(this.anchorZoom.split(" ").join(""))>-1},e.prototype.hostData=function(){return{class:{"deckgo-slide-container":!0}}},Object.defineProperty(e,"is",{get:function(){return"deckgo-slide-code"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{anchor:{type:String,attr:"anchor"},anchorZoom:{type:String,attr:"anchor-zoom"},beforeSwipe:{method:!0},el:{elementRef:!0},hideAnchor:{type:Boolean,attr:"hide-anchor"},language:{type:String,attr:"language",watchCallbacks:["loadLanguage"]},lazyLoadImages:{method:!0},srcFile:{type:String,attr:"src-file"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"slideDidLoad",method:"slideDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"scrolling",method:"scrolling",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}:host{background:var(--background);color:var(--color);height:100%}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,16px) var(--slide-padding-end,32px) var(--slide-padding-bottom,16px) var(--slide-padding-start,32px);width:calc(100vw - var(--slide-padding-start, 32px) - var(--slide-padding-end, 32px));height:calc(100% - var(--slide-padding-top, 16px) - var(--slide-padding-bottom, 16px));-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,32px);padding-inline-start:var(--slide-padding-start,32px)}@media print{div.deckgo-slide{padding:0}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-code-container{overflow-y:auto;width:100%;color:var(--code-color,inherit);margin-bottom:var(--code-margin-bottom,64px);-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform:scale(var(--zoom-code,1));transform:scale(var(--zoom-code,1))}div.deckgo-code-container code{white-space:pre-wrap;overflow-y:scroll;font-size:var(--code-font-size);font-family:var(--code-font-family)}div.deckgo-code-container code div:empty{min-height:1rem}div.deckgo-code-container code span.deckgo-code-anchor-hidden{visibility:hidden}::slotted([slot=title]){-webkit-transition:opacity .5s ease-in;transition:opacity .5s ease-in}::slotted([slot=code]){display:none}@media print{div.deckgo-slide{height:100%}}div.deckgo-code-container code .language-css .token.string,div.deckgo-code-container code .style .token.string,div.deckgo-code-container code .token.entity,div.deckgo-code-container code .token.operator,div.deckgo-code-container code .token.url{background:inherit}"},enumerable:!0,configurable:!0}),e}()}.call(this,n(2))},234:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});function o(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,s)}l((o=o.apply(e,t||[])).next())})}function r(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}},238:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(234),r=function(){function e(){}return e.hideRevealElements=function(e,t){var n=this;return new Promise(function(o){if(n.isMobile())o();else{var r=e.querySelectorAll(t?"[slot] > li:not(:first-child), [slot] > p:not(:first-child), [slot] > span:not(:first-child), [slot] > img:not(:first-child)":"[slot] > li, [slot] > p, [slot] > span, [slot] > img");r?Array.from(r).forEach(function(e){e.style.setProperty("visibility","hidden"),e.classList.add("deckgo-reveal")}):o()}})},e.showRevealElement=function(e){return new Promise(function(t){var n=e.querySelectorAll("[slot] > li, [slot] > p, [slot] > span, [slot] > img"),o=!0;if(n){var r=Array.from(n).find(function(e){return"hidden"===e.style.getPropertyValue("visibility")});r&&(r.style.setProperty("visibility","initial"),o=!1)}t(o)})},e.hideRevealElement=function(e){return new Promise(function(t){var n=e.querySelectorAll("[slot] > li, [slot] > p, [slot] > span, [slot] > img"),o=!0;if(n){var r=Array.from(n).reverse().find(function(e){var t=e.style.getPropertyValue("visibility");return!t||"initial"===t});r&&(r.style.setProperty("visibility","hidden"),o=!1)}t(o)})},e.beforeSwipe=function(e,t,n){var r=this;return new Promise(function(a){return o.a(r,void 0,void 0,function(){var r;return o.b(this,function(o){switch(o.label){case 0:return n?t?[4,this.showRevealElement(e)]:[3,2]:[3,5];case 1:return r=o.sent(),[3,4];case 2:return[4,this.hideRevealElement(e)];case 3:r=o.sent(),o.label=4;case 4:return a(r),[3,6];case 5:a(!0),o.label=6;case 6:return[2]}})})})},e.hideLazyLoadImages=function(e){var t=this;return new Promise(function(n){var o=t.getAllImages(e);o?((o=o.filter(function(e){return e.getAttribute("data-src")})).forEach(function(e){e.style.setProperty("visibility","hidden")}),n()):n()})},e.lazyLoadImages=function(e){return o.a(this,void 0,void 0,function(){var t=this;return o.b(this,function(n){return[2,new Promise(function(n){t.getAllImages(e).forEach(function(e){e.getAttribute("data-src")&&(e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","initial")),e.style.setProperty("pointer-events","none")}),n()})]})})},e.getAllImages=function(e){var t=e.querySelectorAll("[slot] > img"),n=e.shadowRoot.querySelectorAll("img");return Array.from(t).concat(Array.from(n))},e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e}();
/*! Built with http://stenciljs.com */},241:function(e,t,n){"use strict";n.d(t,"a",function(){return o});
/*! Built with http://stenciljs.com */
var o=function(){function e(){}return e.unifyEvent=function(e){return e.changedTouches?e.changedTouches[0]:e},e}()}}]);
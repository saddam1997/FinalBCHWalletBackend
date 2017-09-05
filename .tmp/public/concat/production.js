/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*
 AngularJS v1.6.5
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x){'use strict';function pe(a){if(G(a))t(a.objectMaxDepth)&&(Lc.objectMaxDepth=Tb(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Lc}function Tb(a){return W(a)&&0<a}function K(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.5/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==
typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function oa(a){if(null==a||Za(a))return!1;if(I(a)||C(a)||z&&a instanceof z)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function p(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in
a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(Mc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)wa.call(a,c)&&b.call(d,a[c],c,a);return a}function Nc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Ub(a){return function(b,d){a(d,b)}}function qe(){return++sb}function Vb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=
b[e];if(G(g)||E(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],n=g[m];d&&G(n)?ia(n)?a[m]=new Date(n.valueOf()):$a(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Wb(n)?a[m]=n.clone():(G(a[m])||(a[m]=I(n)?[]:{}),Vb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function O(a){return Vb(a,xa.call(arguments,1),!1)}function re(a){return Vb(a,xa.call(arguments,1),!0)}function Q(a){return parseInt(a,10)}function Xb(a,b){return O(Object.create(a),b)}function B(){}
function ab(a){return a}function aa(a){return function(){return a}}function Yb(a){return E(a.toString)&&a.toString!==la}function v(a){return"undefined"===typeof a}function t(a){return"undefined"!==typeof a}function G(a){return null!==a&&"object"===typeof a}function Mc(a){return null!==a&&"object"===typeof a&&!Oc(a)}function C(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ia(a){return"[object Date]"===la.call(a)}function Zb(a){switch(la.call(a)){case "[object Error]":return!0;
case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function E(a){return"function"===typeof a}function $a(a){return"[object RegExp]"===la.call(a)}function Za(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function La(a){return"boolean"===typeof a}function se(a){return a&&W(a.length)&&te.test(la.call(a))}function Wb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ue(a){var b={};a=a.split(",");var d;for(d=
0;d<a.length;d++)b[a[d]]=!0;return b}function ya(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Mc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)wa.call(a,g)&&(b[g]=e(a[g],c));d?b.$$hashKey=d:delete b.$$hashKey;
return b}function e(a,b){if(!G(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if(Za(a)||bb(a))throw za("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Oc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Tb(d)?d:NaN;if(b){if(se(b)||"[object ArrayBuffer]"===la.call(b))throw za("cpta");if(a===b)throw za("cpi");I(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function $b(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?$b(a.getTime(),b.getTime()):!1;if($a(a))return $a(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||Za(a)||Za(b)||I(b)||ia(b)||$a(b))return!1;d=R();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&t(b[c])&&!E(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(xa.call(b,d))}function Qa(a,b){var d=2<arguments.length?xa.call(arguments,2):[];return!E(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Pc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Za(b)?d="$WINDOW":b&&x.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!v(a))return W(b)||(b=b?2:null),JSON.stringify(a,Pc,b)}function Qc(a){return C(a)?JSON.parse(a):a}function Rc(a,b){a=a.replace(ve,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return ba(d)?b:d}function ac(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Rc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function Aa(a){a=z(a).clone().empty();var b=z("<div>").append(a).html();try{return a[0].nodeType===Ma?N(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+N(b)})}catch(d){return N(b)}}function Sc(a){try{return decodeURIComponent(a)}catch(b){}}function Tc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=
a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Sc(e),t(e)&&(f=t(f)?Sc(f):!0,wa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function bc(a){var b=[];p(a,function(a,c){I(a)?p(a,function(a){b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))}):b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))});return b.length?b.join("&"):""}function fb(a){return ma(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function we(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,C(d=a.getAttribute(d)))return d;return null}function xe(a,b){var d,c,e={};p(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ye?(e.strictDi=null!==we(d,"strict-di"),
b(d,c?[c]:[],e)):x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){G(d)||(d={});d=O({strictDi:!1},d);var c=function(){a=z(a);if(a.injector()){var c=a[0]===x.document?"document":Aa(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=gb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;x&&e.test(x.name)&&(d.debugInfoEnabled=!0,x.name=x.name.replace(e,""));if(x&&!f.test(x.name))return c();x.name=x.name.replace(f,"");fa.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};E(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function ze(){x.name=
"NG_ENABLE_DEBUG_INFO!"+x.name;x.location.reload()}function Ae(a){a=fa.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Be,function(a,c){return(c?b:"")+a.toLowerCase()})}function Ce(){var a;if(!Wc){var b=tb();(ta=v(b)?x.jQuery:b?x[b]:void 0)&&ta.fn.on?(z=ta,O(ta.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),a=ta.cleanData,ta.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=ta._data(f,"events"))&&c.$destroy&&ta(f).triggerHandler("$destroy");a(b)}):z=S;fa.element=z;Wc=!0}}function hb(a,b,d){if(!a)throw za("areq",b||"?",d||"required");return a}function ub(a,b,d){d&&I(a)&&(a=a[a.length-1]);hb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Oa(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Xc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?Qa(e,a):a}function vb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=z(xa.call(a,0,e))),c.push(b);return c||a}function R(){return Object.create(null)}function cc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Yb(a)||I(a)||ia(a)?eb(a):a.toString()}return a}function De(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=K("$injector"),c=K("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||K;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);return p}}function b(a,c,d){d||(d=e);return function(b,e){e&&E(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return p}}if(!g)throw d("nomod",f);var e=[],q=[],F=[],M=a("$injector","invoke","push",q),p={_invokeQueue:e,_configBlocks:q,
_runBlocks:F,info:function(a){if(t(a)){if(!G(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",q),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider",
"component"),config:M,run:function(a){F.push(a);return this}};k&&M(k);return p})}})}function ra(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(G(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ee(a,b){var d=[];Tb(b)&&(a=fa.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Pc(a,b);if(G(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Fe(a){O(a,{errorHandlingConfig:pe,bootstrap:Uc,copy:Ia,extend:O,merge:re,equals:sa,
element:z,forEach:p,injector:gb,noop:B,bind:Qa,toJson:eb,fromJson:Qc,identity:ab,isUndefined:v,isDefined:t,isString:C,isFunction:E,isObject:G,isNumber:W,isElement:Wb,isArray:I,version:Ge,isDate:ia,lowercase:N,uppercase:wb,callbacks:{$$counter:0},getTestability:Ae,reloadWithDebugInfo:ze,$$minErr:K,$$csp:Ja,$$encodeUriSegment:fb,$$encodeUriQuery:ma,$$stringify:cc});dc=De(x);dc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:He});a.provider("$compile",Yc).directive({a:Ie,input:Zc,
textarea:Zc,form:Je,script:Ke,select:Le,option:Me,ngBind:Ne,ngBindHtml:Oe,ngBindTemplate:Pe,ngClass:Qe,ngClassEven:Re,ngClassOdd:Se,ngCloak:Te,ngController:Ue,ngForm:Ve,ngHide:We,ngIf:Xe,ngInclude:Ye,ngInit:Ze,ngNonBindable:$e,ngPluralize:af,ngRepeat:bf,ngShow:cf,ngStyle:df,ngSwitch:ef,ngSwitchWhen:ff,ngSwitchDefault:gf,ngOptions:hf,ngTransclude:jf,ngModel:kf,ngList:lf,ngChange:mf,pattern:$c,ngPattern:$c,required:ad,ngRequired:ad,minlength:bd,ngMinlength:bd,maxlength:cd,ngMaxlength:cd,ngValue:nf,
ngModelOptions:of}).directive({ngInclude:pf}).directive(xb).directive(dd);a.provider({$anchorScroll:qf,$animate:rf,$animateCss:sf,$$animateJs:tf,$$animateQueue:uf,$$AnimateRunner:vf,$$animateAsyncRun:wf,$browser:xf,$cacheFactory:yf,$controller:zf,$document:Af,$$isDocumentHidden:Bf,$exceptionHandler:Cf,$filter:ed,$$forceReflow:Df,$interpolate:Ef,$interval:Ff,$http:Gf,$httpParamSerializer:Hf,$httpParamSerializerJQLike:If,$httpBackend:Jf,$xhrFactory:Kf,$jsonpCallbacks:Lf,$location:Mf,$log:Nf,$parse:Of,
$rootScope:Pf,$q:Qf,$$q:Rf,$sce:Sf,$sceDelegate:Tf,$sniffer:Uf,$templateCache:Vf,$templateRequest:Wf,$$testability:Xf,$timeout:Yf,$window:Zf,$$rAF:$f,$$jqLite:ag,$$Map:bg,$$cookieReader:cg})}]).info({angularVersion:"1.6.5"})}function ib(a,b){return b.toUpperCase()}function yb(a){return a.replace(dg,ib)}function ec(a){a=a.nodeType;return 1===a||!a||9===a}function fd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(fc.test(a)){d=e.appendChild(b.createElement("div"));c=(eg.exec(a)||["",""])[1].toLowerCase();
c=pa[c]||pa._default;d.innerHTML=c[1]+a.replace(fg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function S(a){if(a instanceof S)return a;var b;C(a)&&(a=P(a),b=!0);if(!(this instanceof S)){if(b&&"<"!==a.charAt(0))throw gc("nosel");return new S(a)}if(b){b=x.document;var d;a=(d=gg.exec(a))?[b.createElement(d[1])]:(d=fd(a,b))?d.childNodes:
[];hc(this,a)}else E(a)?gd(a):hc(this,a)}function ic(a){return a.cloneNode(!0)}function zb(a,b){!b&&ec(a)&&z.cleanData([a]);a.querySelectorAll&&z.cleanData(a.querySelectorAll("*"))}function hd(a,b,d,c){if(t(c))throw gc("offargs");var e=(c=Ab(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];t(d)&&cb(c||[],d);t(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};p(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}
function jc(a,b){var d=a.ng339,c=d&&jb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),hd(a)),delete jb[d],a.ng339=void 0))}function Ab(a,b){var d=a.ng339,d=d&&jb[d];b&&!d&&(a.ng339=d=++hg,d=jb[d]={events:{},data:{},handle:void 0});return d}function kc(a,b,d){if(ec(a)){var c,e=t(d),f=!e&&b&&!G(b),g=!b;a=(a=Ab(a,!f))&&a.data;if(e)a[yb(b)]=d;else{if(g)return a;if(f)return a&&a[yb(b)];for(c in b)a[yb(c)]=b[c]}}}function Cb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",P((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(b)+" "," ")))})}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=P(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",P(d))}}function hc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=
b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(t(d=z.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}function ig(a,
b){b=b||x;if("complete"===b.document.readyState)b.setTimeout(a);else z(b).on("load",a)}function gd(a){function b(){x.document.removeEventListener("DOMContentLoaded",b);x.removeEventListener("load",b);a()}"complete"===x.document.readyState?x.setTimeout(a):(x.document.addEventListener("DOMContentLoaded",b),x.addEventListener("load",b))}function kd(a,b){var d=Hb[b.toLowerCase()];return d&&ld[ya(a)]&&d}function jg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
b[d||c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||kg;1<g&&(f=ra(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function kg(a,b,d){d.call(a,b)}function lg(a,b,d){var c=
b.relatedTarget;c&&(c===a||mg.call(a,c))||d.call(a,b)}function ag(){this.$get=function(){return O(S,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)}})}}function Sa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||qe)():d+":"+a}function md(){this._keys=[];this._values=
[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(ng,"");return a.match(og)||a.match(pg)}function qg(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function gb(a,b){function d(a){return function(b,c){if(G(b))p(b,Ub(a));else return a(b,c)}}function c(a,b){Oa(a,"service");if(E(b)||I(b))b=q.instantiate(b);if(!b.$get)throw Ka("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=w.invoke(b,this);if(v(c))throw Ka("undef",
a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){hb(v(a)||I(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=q.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);try{C(a)?(c=dc(a),w.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(q.invoke(a)):I(a)?b.push(q.invoke(a)):ub(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&
e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ka("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ka("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(g){throw a[b]===h&&delete a[b],g;}finally{l.shift()}}function e(a,c,g){var f=[];a=gb.$$annotate(a,b,g);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ka("itkn",l);f.push(c&&c.hasOwnProperty(l)?
c[l]:d(l,g))}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ba||"function"!==typeof d)d=!1;else{var g=d.$$ngIsClass;La(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,
annotate:gb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Ib,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,aa(b),!1)}),constant:d(function(a,b){Oa(a,"constant");n[a]=b;F[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=w.invoke(d,c);return w.invoke(b,null,{$delegate:a})}}}},
q=n.$injector=k(n,function(a,b){fa.isString(b)&&l.push(b);throw Ka("unpr",l.join(" <- "));}),F={},M=k(F,function(a,b){var c=q.get(a+"Provider",b);return w.invoke(c.$get,c,void 0,a)}),w=M;n.$injectorProvider={$get:aa(M)};w.modules=q.modules=R();var u=g(a),w=M.get("$injector");w.strictDi=b;p(u,function(a){a&&w.invoke(a)});return w}function qf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ya(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Wb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=C(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},
function(a,b){a===b&&""===a||ig(function(){c.$evalAsync(g)})});return g}]}function kb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function rg(a){C(a)&&(a=a.split(" "));var b=R();p(a,function(a){a.length&&(b[a]=!0)});return b}function Ca(a){return G(a)?a:{}}function sg(a,b,d,c){function e(a){try{a.apply(null,xa.call(arguments,1))}finally{if(M--,0===M)for(;w.length;)try{w.pop()()}catch(b){d.error(b)}}}function f(){y=null;k()}function g(){u=
D();u=v(u)?null:u;sa(u,L)&&(u=L);A=L=u}function k(){var a=A;g();if(na!==h.url()||a!==u)na=h.url(),A=u,p(H,function(a){a(h.url(),u)})}var h=this,l=a.location,m=a.history,n=a.setTimeout,q=a.clearTimeout,F={};h.isMock=!1;var M=0,w=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){M++};h.notifyWhenNoOutstandingRequests=function(a){0===M?a():w.push(a)};var u,A,na=l.href,s=b.find("base"),y=null,D=c.history?function(){try{return m.state}catch(a){}}:B;g();h.url=function(b,d,e){v(e)&&
(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=A===e;if(na===b&&(!c.history||f))return h;var k=na&&ja(na)===ja(b);na=b;A=e;!c.history||k&&f?(k||(y=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g());y&&(y=b);return h}return y||l.href.replace(/%27/g,"'")};h.state=function(){return u};var H=[],Z=!1,L=null;h.onUrlChange=function(b){if(!Z){if(c.history)z(a).on("popstate",
f);z(a).on("hashchange",f);Z=!0}H.push(b);return b};h.$$applicationDestroyed=function(){z(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=s.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b){var c;M++;c=n(function(){delete F[c];e(a)},b||0);F[c]=!0;return c};h.defer.cancel=function(a){return F[a]?(delete F[a],q(a),e(B),!0):!1}}function xf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new sg(a,c,b,d)}]}
function yf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(q?q===a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw K("$cacheFactory")("iid",a);var g=0,k=O({},c,{id:a}),h=R(),l=c&&c.capacity||Number.MAX_VALUE,m=R(),n=null,q=null;return b[a]={put:function(a,b){if(!v(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(q.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===q&&(q=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=R();g=0;m=R();n=q=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return O({},k,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Vf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Yc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=R();p(a,function(a,g){if(a in n)e[g]=n[a];else{var f=a.match(d);if(!f)throw ga("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(n[a]=e[g])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==N(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!I(b)&&G(b)&&p(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=ue("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=R();this.directive=function na(b,d){hb(b,"name");Oa(b,"directive");C(b)?(c(b),hb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(f[b],function(g,
f){try{var h=a.invoke(g);E(h)?h={compile:aa(h)}:!h.compile&&h.link&&(h.compile=aa(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!C(l)||!/[EACM]/.test(l)))throw ga("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):p(b,Ub(na));return this};this.component=function s(a,b){function c(a){function e(b){return E(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:tg(b.controller)||b.controllerAs||"$ctrl",template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};p(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!C(a))return p(a,Ub(Qa(this,s))),this;var d=b.controller||function(){};p(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,
c)};this.aHrefSanitizationWhitelist=function(a){return t(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var q=!0;this.debugInfoEnabled=function(a){return t(a)?(q=a,this):q};var F=!1;this.preAssignBindingsEnabled=function(a){return t(a)?(F=a,this):F};var M=10;this.onChangesTtl=function(a){return arguments.length?(M=a,this):M};var w=!0;this.commentDirectivesEnabled=
function(a){return arguments.length?(w=a,this):w};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,L,T,J,U,Y){function r(){try{if(!--Ca)throw ja=void 0,ga("infchng",M);T.$apply(function(){for(var a=[],b=0,c=ja.length;b<c;++b)try{ja[b]()}catch(d){a.push(d)}ja=void 0;if(a.length)throw a;})}finally{Ca++}}
function ca(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],this[g]=b[g]}else this.$attr={};this.$$element=a}function Ta(a,b,c){za.innerHTML="<span "+b+">";b=za.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Da(a,b){try{a.addClass(b)}catch(c){}}function da(a,b,c,d,e){a instanceof z||(a=z(a));var g=K(a,b,a,c,d,e);da.$$addScopeClass(a);var f=null;return function(b,c,d){if(!a)throw ga("multilink");hb(b,"scope");e&&e.needsNewScope&&
(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==ya(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==f?z(ka(f,z("<div>").append(a).html())):c?Ra.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function K(a,b,c,d,e,g){function f(a,c,d,e){var g,k,
l,m,q,n,D;if(H)for(D=Array(c.length),m=0;m<h.length;m+=3)g=h[m],D[g]=c[g];else D=c;m=0;for(q=h.length;m<q;)k=D[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(z(k),l)):l=a,n=c.transcludeOnThisElement?V(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?V(a,b):null,c(g,l,k,d,n)):g&&g(a,k.childNodes,void 0,e)}for(var h=[],k=I(a)||a instanceof z,l,m,q,n,H,D=0;D<a.length;D++){l=new ca;11===Ba&&lb(a,D,k);m=mc(a[D],[],l,0===D?d:void 0,e);(g=m.length?X(m,a[D],l,b,c,null,[],[],g):null)&&
g.scope&&da.$$addScopeClass(l.$$element);l=g&&g.terminal||!(q=a[D].childNodes)||!q.length?null:K(q,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);if(g||l)h.push(D,g,l),n=!0,H=H||g;g=null}return n?f:null}function lb(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Ma)for(;;){g=e?d.nextSibling:a[b+1];if(!g||g.nodeType!==Ma)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);c&&g===a[b+1]&&a.splice(b+1,1)}}function V(a,b,c){function d(e,g,f,h,k){e||(e=
a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h})}var e=d.$$slots=R(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?V(a,b.$$slots[g],c):null;return d}function mc(a,b,c,d,e){var g=c.$attr,f;switch(a.nodeType){case 1:f=ya(a);Q(b,Ea(f),"E",d,e);for(var h,l,m,q,n=a.attributes,H=0,D=n&&n.length;H<D;H++){var F=!1,u=!1;h=n[H];l=h.name;m=h.value;h=Ea(l);(q=Na.test(h))&&(l=l.replace(od,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));
(h=h.match(Oa))&&ba(h[1])&&(F=l,u=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));h=Ea(l.toLowerCase());g[h]=l;if(q||!c.hasOwnProperty(h))c[h]=m,kd(a,h)&&(c[h]=!0);va(a,b,m,h,q);Q(b,h,"A",d,e,F,u)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Ka)break;g=a.className;G(g)&&(g=g.animVal);if(C(g)&&""!==g)for(;a=k.exec(g);)h=Ea(a[2]),Q(b,h,"C",d,e)&&(c[h]=P(a[3])),g=g.substr(a.index+a[0].length);break;case Ma:pa(b,a.nodeValue);break;case 8:if(!Ja)break;
nc(a,b,c,d,e)}b.sort(ma);return b}function nc(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ea(f[1]);Q(b,h,"M",d,e)&&(c[h]=P(f[2]))}}catch(k){}}function pd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function qd(a,b,c){return function(d,e,g,f,h){e=pd(e[0],b,c);return a(d,e,g,f,h)}}function S(a,b,c,d,e,g){var f;return a?
da(b,c,d,e,g):function(){f||(f=da(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function X(a,b,d,e,g,f,h,k,l){function m(a,b,c,d){if(a){c&&(a=qd(a,c,d));a.require=s.require;a.directiveName=Y;if(L===s||s.$$isolateScope)a=ta(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=qd(b,c,d));b.require=s.require;b.directiveName=Y;if(L===s||s.$$isolateScope)b=ta(b,{isolateScope:!0});k.push(b)}}function q(a,e,g,f,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);U&&(e=T);c||(c=U?ha.parent():ha);if(d){var g=
l.$$slots[d];if(g)return g(a,b,e,c,t);if(v(g))throw ga("noslot",d,Aa(ha));}else return l(a,b,e,c,t)}var n,s,J,y,Z,T,w,ha;b===g?(f=d,ha=d.$$element):(ha=z(g),f=new ca(ha,d));Z=e;L?y=e.$new(!0):H&&(Z=e.$parent);l&&(w=m,w.$$boundTransclude=l,w.isSlotFilled=function(a){return!!l.$$slots[a]});u&&(T=ea(ha,f,w,u,y,e,L));L&&(da.$$addScopeInfo(ha,y,!0,!(M&&(M===L||M===L.$$originalDirective))),da.$$addScopeClass(ha,!0),y.$$isolateBindings=L.$$isolateBindings,s=qa(e,f,y,y.$$isolateBindings,L),s.removeWatches&&
y.$on("$destroy",s.removeWatches));for(n in T){s=u[n];J=T[n];var Y=s.$$bindings.bindToController;if(F){J.bindingInfo=Y?qa(Z,f,J.instance,Y,s):{};var r=J();r!==J.instance&&(J.instance=r,ha.data("$"+s.name+"Controller",r),J.bindingInfo.removeWatches&&J.bindingInfo.removeWatches(),J.bindingInfo=qa(Z,f,J.instance,Y,s))}else J.instance=J(),ha.data("$"+s.name+"Controller",J.instance),J.bindingInfo=qa(Z,f,J.instance,Y,s)}p(u,function(a,b){var c=a.require;a.bindToController&&!I(c)&&G(c)&&O(T[b].instance,
W(b,c,ha,T))});p(T,function(a){var b=a.instance;if(E(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(E(b.$onInit))try{b.$onInit()}catch(e){c(e)}E(b.$doCheck)&&(Z.$watch(function(){b.$doCheck()}),b.$doCheck());E(b.$onDestroy)&&Z.$on("$destroy",function(){b.$onDestroy()})});n=0;for(s=h.length;n<s;n++)J=h[n],ua(J,J.isolateScope?y:e,ha,f,J.require&&W(J.directiveName,J.require,ha,T),w);var t=e;L&&(L.template||null===L.templateUrl)&&(t=y);a&&a(t,g.childNodes,void 0,l);for(n=
k.length-1;0<=n;n--)J=k[n],ua(J,J.isolateScope?y:e,ha,f,J.require&&W(J.directiveName,J.require,ha,T),w);p(T,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,H=l.newScopeDirective,u=l.controllerDirectives,L=l.newIsolateScopeDirective,M=l.templateDirective,J=l.nonTlbTranscludeDirective,Z=!1,T=!1,U=l.hasElementTranscludeDirective,y=d.$$element=z(b),s,Y,w,r=e,t,Pa=!1,Ta=!1,V,x=0,Da=a.length;x<Da;x++){s=a[x];var B=s.$$start,C=s.$$end;B&&(y=pd(b,B,C));w=void 0;
if(n>s.priority)break;if(V=s.scope)s.templateUrl||(G(V)?(aa("new/isolated scope",L||H,s,y),L=s):aa("new/isolated scope",L,s,y)),H=H||s;Y=s.name;if(!Pa&&(s.replace&&(s.templateUrl||s.template)||s.transclude&&!s.$$tlb)){for(V=x+1;Pa=a[V++];)if(Pa.transclude&&!Pa.$$tlb||Pa.replace&&(Pa.templateUrl||Pa.template)){Ta=!0;break}Pa=!0}!s.templateUrl&&s.controller&&(u=u||R(),aa("'"+Y+"' controller",u[Y],s,y),u[Y]=s);if(V=s.transclude)if(Z=!0,s.$$tlb||(aa("transclusion",J,s,y),J=s),"element"===V)U=!0,n=s.priority,
w=y,y=d.$$element=z(da.$$createComment(Y,d[Y])),b=y[0],oa(g,xa.call(w,0),b),w[0].$$parentNode=w[0].parentNode,r=S(Ta,w,e,n,f&&f.name,{nonTlbTranscludeDirective:J});else{var K=R();if(G(V)){w=[];var N=R(),lb=R();p(V,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;N[a]=b;K[b]=null;lb[b]=c});p(y.contents(),function(a){var b=N[Ea(ya(a))];b?(lb[b]=!0,K[b]=K[b]||[],K[b].push(a)):w.push(a)});p(lb,function(a,b){if(!a)throw ga("reqslot",b);});for(var lc in K)K[lc]&&(K[lc]=S(Ta,K[lc],e))}else w=z(ic(b)).contents();
y.empty();r=S(Ta,w,e,void 0,void 0,{needsNewScope:s.$$isolateScope||s.$$newScope});r.$$slots=K}if(s.template)if(T=!0,aa("template",M,s,y),M=s,V=E(s.template)?s.template(y,d):s.template,V=Ha(V),s.replace){f=s;w=fc.test(V)?rd(ka(s.templateNamespace,P(V))):[];b=w[0];if(1!==w.length||1!==b.nodeType)throw ga("tplrt",Y,"");oa(g,y,b);Da={$attr:{}};V=mc(b,[],Da);var nc=a.splice(x+1,a.length-(x+1));(L||H)&&$(V,L,H);a=a.concat(V).concat(nc);fa(d,Da);Da=a.length}else y.html(V);if(s.templateUrl)T=!0,aa("template",
M,s,y),M=s,s.replace&&(f=s),q=ia(a.splice(x,a.length-x),y,d,g,Z&&r,h,k,{controllerDirectives:u,newScopeDirective:H!==s&&H,newIsolateScopeDirective:L,templateDirective:M,nonTlbTranscludeDirective:J}),Da=a.length;else if(s.compile)try{t=s.compile(y,d,r);var Q=s.$$originalDirective||s;E(t)?m(null,Qa(Q,t),B,C):t&&m(Qa(Q,t.pre),Qa(Q,t.post),B,C)}catch(ba){c(ba,Aa(y))}s.terminal&&(q.terminal=!0,n=Math.max(n,s.priority))}q.scope=H&&!0===H.scope;q.transcludeOnThisElement=Z;q.templateOnThisElement=T;q.transclude=
r;l.hasElementTranscludeDirective=U;return q}function W(a,b,c,d){var e;if(C(b)){var g=b.match(l);b=b.substring(g[0].length);var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h)}if(!e&&!g)throw ga("ctreq",b,a);}else if(I(b))for(e=[],f=0,g=b.length;f<g;f++)e[f]=W(a,b[f],c,d);else G(b)&&(e={},p(b,function(b,g){e[g]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,g,f){var h=R(),k;for(k in d){var l=d[k],m={$scope:l===
f||l.$$isolateScope?e:g,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=L(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Xb(a[d],{$$isolateScope:b,$$newScope:c})}function Q(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,q=h.length;n<q;n++)if(c=h[n],(v(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Xb(c,{$$start:k,
$$end:l}));if(!c.$$bindings){var H=m=c,D=c.name,F={isolateScope:null,bindToController:null};G(H.scope)&&(!0===H.bindToController?(F.bindToController=d(H.scope,D,!0),F.isolateScope={}):F.isolateScope=d(H.scope,D,!1));G(H.bindToController)&&(F.bindToController=d(H.bindToController,D,!0));if(F.bindToController&&!H.controller)throw ga("noctrl",D);m=m.$$bindings=F;G(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ba(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),
d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;p(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,d,g,f,h,k,l){var m=[],n,q,F=b[0],s=a.shift(),L=Xb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=E(s.templateUrl)?s.templateUrl(b,
d):s.templateUrl,u=s.templateNamespace;b.empty();e(J).then(function(c){var e,H;c=Ha(c);if(s.replace){c=fc.test(c)?rd(ka(u,P(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ga("tplrt",s.name,J);c={$attr:{}};oa(g,b,e);var D=mc(e,[],c);G(s.scope)&&$(D,!0);a=D.concat(a);fa(d,c)}else e=F,b.html(c);a.unshift(L);n=X(a,e,d,f,b,s,h,k,l);p(g,function(a,c){a===e&&(g[c]=b[0])});for(q=K(b[0].childNodes,f);m.length;){c=m.shift();H=m.shift();var y=m.shift(),M=m.shift(),D=b[0];if(!c.$$destroyed){if(H!==F){var Z=
H.className;l.hasElementTranscludeDirective&&s.replace||(D=ic(e));oa(y,z(H),D);Da(z(D),Z)}H=n.transcludeOnThisElement?V(c,n.transclude,M):M;n(q,c,D,g,H)}}m=null}).catch(function(a){Zb(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=V(b,n.transclude,e)),n(q,b,c,d,a)))}}function ma(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function aa(a,b,c,d){function e(a){return a?" (module: "+a+")":
""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,Aa(d));}function pa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ka(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=x.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";
return c.childNodes[0].childNodes;default:return b}}function ra(a,b){if("srcdoc"===b)return J.HTML;var c=ya(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return J.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return J.RESOURCE_URL}function va(a,c,d,e,g){var f=ra(a,e),k=h[e]||g,l=b(d,!g,f,k);if(l){if("multiple"===e&&"select"===ya(a))throw ga("selmulti",Aa(a));if(m.test(e))throw ga("nodomevents");c.push({priority:100,
compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=R());var h=g[e];h!==d&&(l=h&&b(h,!0,f,k),d=h);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function oa(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&
(a.context=c);break}g&&g.replaceChild(c,d);a=x.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);z.hasData(d)&&(z.data(c,z.data(d)),z(d).off("$destroy"));z.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ta(a,b){return O(function(){return a.apply(null,arguments)},a,b)}function ua(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,Aa(d))}}function qa(a,c,d,e,g){function f(b,c,e){E(d.$onChanges)&&!$b(c,e)&&(ja||(a.$$postDigest(r),ja=[]),m||(m={},
ja.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;p(e,function(e,h){var m=e.attrName,q=e.optional,H,D,F,s;switch(e.mode){case "@":q||wa.call(c,m)||(d[h]=c[m]=void 0);q=c.$observe(m,function(a){if(C(a)||La(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;H=c[m];C(H)?d[h]=b(H)(a):La(H)&&(d[h]=H);l[h]=new Jb(oc,d[h]);k.push(q);break;case "=":if(!wa.call(c,m)){if(q)break;c[m]=void 0}if(q&&!c[m])break;D=n(c[m]);s=D.literal?sa:$b;F=D.assign||
function(){H=d[h]=D(a);throw ga("nonassign",c[m],m,g.name);};H=d[h]=D(a);q=function(b){s(b,d[h])||(s(b,H)?F(a,b=d[h]):d[h]=b);return H=b};q.$stateful=!0;q=e.collection?a.$watchCollection(c[m],q):a.$watch(n(c[m],q),null,D.literal);k.push(q);break;case "<":if(!wa.call(c,m)){if(q)break;c[m]=void 0}if(q&&!c[m])break;D=n(c[m]);var L=D.literal,J=d[h]=D(a);l[h]=new Jb(oc,d[h]);q=a.$watch(D,function(a,b){if(b===a){if(b===J||L&&sa(b,J))return;b=J}f(h,a,b);d[h]=a},L);k.push(q);break;case "&":D=c.hasOwnProperty(m)?
n(c[m]):B;if(D===B&&q)break;d[h]=function(b){return D(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ia=/^\w/,za=x.document.createElement("div"),Ja=w,Ka=u,Ca=M,ja;ca.prototype={$normalize:Ea,$addClass:function(a){a&&0<a.length&&U.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&U.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&U.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&
U.removeClass(this.$$element,c)},$set:function(a,b,d,e){var g=kd(this.$$element[0],a),f=td[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));g=ya(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=b=Y(b,"src"===a);else if("img"===g&&"srcset"===a&&t(b)){for(var g="",f=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<
k;l++)var m=2*l,g=g+Y(P(f[m]),!0),g=g+(" "+P(f[m+1]));f=P(f[2*l]).split(/\s/);g+=Y(P(f[0]),!0);2===f.length&&(g+=" "+P(f[1]));this[a]=b=g}!1!==d&&(null===b||v(b)?this.$$element.removeAttr(e):Ia.test(e)?this.$$element.attr(e,b):Ta(this.$$element[0],e,b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=R()),e=d[a]||(d[a]=[]);e.push(b);T.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||v(c[a])||b(c[a])});return function(){cb(e,
b)}}};var Fa=b.startSymbol(),Ga=b.endSymbol(),Ha="{{"===Fa&&"}}"===Ga?ab:function(a){return a.replace(/\{\{/g,Fa).replace(/}}/g,Ga)},Na=/^ngAttr[A-Z]/,Oa=/^(.+)Start$/;da.$$addBindingInfo=q?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:B;da.$$addBindingClass=q?function(a){Da(a,"ng-binding")}:B;da.$$addScopeInfo=q?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:B;da.$$addScopeClass=q?function(a,b){Da(a,b?"ng-isolate-scope":
"ng-scope")}:B;da.$$createComment=function(a,b){var c="";q&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return x.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function Ea(a){return a.replace(od,"").replace(ug,ib)}function sd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=z(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=
a[b];(8===d.nodeType||d.nodeType===Ma&&""===d.nodeValue.trim())&&vg.call(a,b,1)}return a}function tg(a,b){if(b&&C(b))return b;if(C(a)){var d=ud.exec(a);if(d)return d[3]}}function zf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Oa(b,"controller");G(b)?O(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!G(a.$scope))throw K("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,
g,k,h){var l,m,n;k=!0===k;h&&C(h)&&(n=h);if(C(f)){h=f.match(ud);if(!h)throw vd("ctrlfmt",f);m=h[1];n=n||h[3];f=a.hasOwnProperty(m)?a[m]:Xc(g.$scope,m,!0)||(b?Xc(c,m,!0):void 0);if(!f)throw vd("ctrlreg",m);ub(f,m,!0)}if(k)return k=(I(f)?f[f.length-1]:f).prototype,l=Object.create(k||null),n&&e(g,n,l,m||f.name),O(function(){var a=d.invoke(f,l,g,m);a!==l&&(G(a)||E(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function Af(){this.$get=
["$window",function(a){return z(a.document)}]}function Bf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Cf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function pc(a){return G(a)?ia(a)?a.toISOString():eb(a):a}function Hf(){this.$get=function(){return function(a){if(!a)return"";var b=
[];Nc(a,function(a,c){null===a||v(a)||(I(a)?p(a,function(a){b.push(ma(c)+"="+ma(pc(a)))}):b.push(ma(c)+"="+ma(pc(a))))});return b.join("&")}}}function If(){this.$get=function(){return function(a){function b(a,e,f){null===a||v(a)||(I(a)?p(a,function(a,c){b(a,e+"["+(G(a)?c:"")+"]")}):G(a)&&!ia(a)?Nc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ma(e)+"="+ma(pc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function qc(a,b){if(C(a)){var d=a.replace(wg,"").trim();if(d){var c=
b("Content-Type");(c=c&&0===c.indexOf(wd))||(c=(c=d.match(xg))&&yg[c[0]].test(d));if(c)try{a=Qc(d)}catch(e){throw rc("baddata",a,e);}}}return a}function xd(a){var b=R(),d;C(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=N(P(a.substr(0,d)));a=P(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):G(a)&&p(a,function(a,d){var f=N(d),g=P(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(E(c))return c(a,
b,d);p(c,function(c){a=c(a,b,d)});return a}function Gf(){var a=this.defaults={transformResponse:[qc],transformRequest:[function(a){return G(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(sc),put:ra(sc),patch:ra(sc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return t(a)?
(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,k,h,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var g=b[c++],f=b[c++];a=a.then(g,f)}b.length=0;return a}function e(a,b){var c,d={};p(a,function(a,e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function g(a){var b=O({},a);b.data=zd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>
a?b:h.reject(b)}if(!G(b))throw K("$http")("badreq",b);if(!C(m.valueOf(b.url)))throw K("$http")("badreq",b.url);var f=O({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=function(b){var c=a.headers,d=O({},b.headers),g,f,h,c=O({},c.common,c[N(b.method)]);a:for(g in c){f=N(g);for(h in d)if(N(h)===f)continue a;d[g]=c[g]}return e(d,ra(b))}(b);f.method=wb(f.method);f.paramSerializer=
C(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;c.$$incOutstandingRequestCount();var k=[],n=[];b=h.resolve(f);p(u,function(a){(a.request||a.requestError)&&k.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,k);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);v(d)&&p(c,function(a,b){"content-type"===N(b)&&delete c[b]});v(b.withCredentials)&&!v(a.withCredentials)&&(b.withCredentials=a.withCredentials);
return q(b,d).then(g,g)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(B)})}function q(c,d){function g(a){if(a){var c={};p(a,function(a,d){c[d]=function(c){function d(){a(c)}b?k.$applyAsync(d):k.$$phase?d():k.$apply(d)}});return c}}function l(a,c,d,e){function g(){q(c,a,d,e)}J&&(200<=a&&300>a?J.put(ca,[a,c,xd(d),e]):J.remove(ca));b?k.$applyAsync(g):(g(),k.$$phase||k.$apply())}function q(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),
config:c,statusText:e})}function H(a){q(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=h.defer(),T=L.promise,J,U,Y=c.headers,r="jsonp"===N(c.method),ca=c.url;r?ca=m.getTrustedResourceUrl(ca):C(ca)||(ca=m.valueOf(ca));ca=F(ca,c.paramSerializer(c.params));r&&(ca=M(ca,c.jsonpCallbackParam));n.pendingRequests.push(c);T.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=G(c.cache)?
c.cache:G(a.cache)?a.cache:w);J&&(U=J.get(ca),t(U)?U&&E(U.then)?U.then(H,H):I(U)?q(U[1],U[0],ra(U[2]),U[3]):q(U,200,{},"OK"):J.put(ca,T));v(U)&&((U=Ad(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Y[c.xsrfHeaderName||a.xsrfHeaderName]=U),e(c.method,ca,d,l,Y,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return T}function F(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function M(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw rc("badjsonp",
a);if((new RegExp("[&?]"+b+"=")).test(a))throw rc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var w=g("$http");a.paramSerializer=C(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];p(d,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){p(arguments,function(a){n[a]=function(b,c){return n(O({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){n[a]=function(b,c,d){return n(O({},
d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Kf(){this.$get=function(){return function(){return new x.XMLHttpRequest}}}function Jf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return zg(a,c,a.defer,b,d[0])}]}function zg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",
m);e.body.removeChild(f);f=null;var g=-1,F="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),F=a.type,g="error"===a.type?404:200);d&&d(g,F)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,n,q,F,M,w){function u(){na&&na();s&&s.abort()}k=k||a.url();if("jsonp"===N(e))var A=c.createCallback(k),na=f(k,A,function(a,b){var e=200===a&&c.getResponse(A);t(D)&&d.cancel(D);na=s=null;l(a,e,"",b);c.removeCallback(A)});else{var s=
b(e,k);s.open(e,k,!0);p(m,function(a,b){t(a)&&s.setRequestHeader(b,a)});s.onload=function(){var a=s.statusText||"",b="response"in s?s.response:s.responseText,c=1223===s.status?204:s.status;0===c&&(c=b?200:"file"===ua(k).protocol?404:0);var e=s.getAllResponseHeaders();t(D)&&d.cancel(D);na=s=null;l(c,b,e,a)};e=function(){t(D)&&d.cancel(D);na=s=null;l(-1,null,null,"")};s.onerror=e;s.onabort=e;s.ontimeout=e;p(M,function(a,b){s.addEventListener(b,a)});p(w,function(a,b){s.upload.addEventListener(b,a)});
q&&(s.withCredentials=!0);if(F)try{s.responseType=F}catch(y){if("json"!==F)throw y;}s.send(v(h)?null:h)}if(0<n)var D=d(u,n);else n&&E(n.then)&&n.then(u)}}function Ef(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(q,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,q,n){function A(a){try{var b=a;a=q?e.getTrusted(q,b):e.valueOf(b);return n&&!t(a)?a:cc(a)}catch(d){c(Fa.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var p;h||(h=g(f),p=aa(h),p.exp=f,p.expressions=[],p.$$watchDelegate=k);return p}n=!!n;var s,y,D=0,H=[],Z=[];p=f.length;for(var L=[],T=[];D<p;)if(-1!==(s=f.indexOf(a,D))&&-1!==(y=f.indexOf(b,s+l)))D!==s&&L.push(g(f.substring(D,s))),D=f.substring(s+l,y),H.push(D),Z.push(d(D,A)),D=y+m,T.push(L.length),L.push("");else{D!==p&&L.push(g(f.substring(D)));
break}q&&1<L.length&&Fa.throwNoconcat(f);if(!h||H.length){var J=function(a){for(var b=0,c=H.length;b<c;b++){if(n&&v(a[b]))return;L[T[b]]=a[b]}return L.join("")};return O(function(a){var b=0,d=H.length,e=Array(d);try{for(;b<d;b++)e[b]=Z[b](a);return J(e)}catch(g){c(Fa.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Z,function(d,e){var g=J(d);E(b)&&b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),q=new RegExp(b.replace(/./g,
f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Ff(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,h,l,m){function n(){q?f.apply(null,F):f(u)}var q=4<arguments.length,F=q?xa.call(arguments,4):[],p=b.setInterval,w=b.clearInterval,u=0,A=t(m)&&!m,r=(A?c:d).defer(),s=r.promise;l=t(l)?l:0;s.$$intervalId=p(function(){A?e.defer(n):a.$evalAsync(n);r.notify(u++);0<l&&u>=l&&(r.resolve(u),w(s.$$intervalId),delete g[s.$$intervalId]);
A||a.$apply()},h);g[s.$$intervalId]=r;return s}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=!0,g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function tc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=fb(a[b]);return a.join("/")}function Bd(a,b){var d=ua(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Q(d.port)||Ag[d.protocol]||null}function Cd(a,b){if(Bg.test(a))throw mb("badpath",
a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ua(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Tc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function uc(a,b){return a.slice(0,b.length)===b}function va(a,b){if(uc(b,a))return b.substr(a.length)}function ja(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function nb(a){return a.replace(/(#.+)|#$/,"$1")}function vc(a,b,d){this.$$html5=
!0;d=d||"";Bd(a,this);this.$$parse=function(a){var d=va(b,a);if(!C(d))throw mb("ipthprfx",a,b);Cd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=bc(this.$$search),d=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=tc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;t(f=va(a,c))?(g=f,g=d&&t(f=va(d,f))?b+(va("/",f)||f):a+g):
t(f=va(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function wc(a,b,d){Bd(a,this);this.$$parse=function(c){var e=va(a,c)||va(b,c),f;v(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",v(e)&&(a=c,this.replace())):(f=va(d,e),v(f)&&(f=e));Cd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;uc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=bc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=tc(this.$$path)+
(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return ja(a)===ja(b)?(this.$$parse(b),!0):!1}}function Dd(a,b,d){this.$$html5=!0;wc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===ja(c)?f=c:(g=va(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=bc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=
tc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Kb(a){return function(){return this[a]}}function Ed(a,b){return function(d){if(v(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Mf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return t(b)?(a=b,this):a};this.html5Mode=function(a){if(La(a))return b.enabled=a,this;if(G(a)){La(a.enabled)&&(b.enabled=a.enabled);La(a.requireBase)&&(b.requireBase=
a.requireBase);if(La(a.rewriteLinks)||C(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b,d){var e=l.url(),g=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f;}}function h(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),q;if(b.enabled){if(!m&&b.requireBase)throw mb("nobase");q=n.substring(0,
n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?vc:Dd}else q=ja(n),m=wc;var F=q.substr(0,ja(q).lastIndexOf("/")+1);l=new m(q,F,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=z(a.target);"a"!==ya(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!C(e)||!v(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");G(e)&&
"[object SVGAnimatedString]"===e.toString()&&(e=ua(e.animVal).href);p.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});nb(l.absUrl())!==nb(n)&&c.url(l.absUrl(),!0);var w=!0;c.onUrlChange(function(a,b){uc(a,F)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=nb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===
a&&(g?(l.$$parse(c),l.$$state=e,k(c,!1,e)):(w=!1,h(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(w||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=nb(c.url()),b=nb(l.absUrl()),g=c.state(),f=l.$$replace,m=a!==b||l.$$html5&&e.history&&g!==l.$$state;if(w||m)w=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=g):(m&&k(b,f,g===l.$$state?null:l.$$state),
h(a,g)))})}l.$$replace=!1});return l}]}function Nf(){var a=!0,b=this;this.debugEnabled=function(b){return t(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){Zb(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||B;return function(){var a=[];p(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}
var f=Ba||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Cg(a){return a+""}function Dg(a,b){return"undefined"!==typeof a?a:b}function Fd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Eg(a,b){switch(a.type){case r.MemberExpression:if(a.computed)return!1;break;case r.UnaryExpression:return 1;case r.BinaryExpression:return"+"!==
a.operator?1:!1;case r.CallExpression:return!1}return void 0===b?Gd:b}function X(a,b,d){var c,e,f=a.isPure=Eg(a,d);switch(a.type){case r.Program:c=!0;p(a.body,function(a){X(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:X(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:X(a.left,b,f);X(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=
a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:X(a.left,b,f);X(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:X(a.test,b,f);X(a.alternate,b,f);X(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:X(a.object,b,f);a.computed&&X(a.property,b,f);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=[a];break;case r.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];p(a.arguments,function(a){X(a,b,f);c=c&&a.constant;a.constant||e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case r.AssignmentExpression:X(a.left,b,f);X(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:c=!0;e=[];p(a.elements,function(a){X(a,b,f);c=c&&a.constant;a.constant||e.push.apply(e,a.toWatch)});a.constant=
c;a.toWatch=e;break;case r.ObjectExpression:c=!0;e=[];p(a.properties,function(a){X(a.value,b,f);c=c&&a.value.constant&&!a.computed;a.value.constant||e.push.apply(e,a.value.toWatch);a.computed&&(X(a.key,b,f),a.key.constant||e.push.apply(e,a.key.toWatch))});a.constant=c;a.toWatch=e;break;case r.ThisExpression:a.constant=!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Hd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}
function Id(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Jd(a){if(1===a.body.length&&Id(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Kd(a){this.$filter=a}function Ld(a){this.$filter=a}function xc(a,b,d){this.ast=new r(a,d);this.astCompiler=d.csp?new Ld(b):new Kd(b)}function yc(a){return E(a.valueOf)?a.valueOf():Fg.call(a)}function Of(){var a=R(),b={"true":!0,"false":!1,"null":null,
undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=yc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,g.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&yc(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=g.length;n<p;n++)l[n]=
f,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],g[c].isPure)))m[c]=k,l[c]=k&&yc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function k(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;E(b)&&b(a,c,d);t(a)&&d.$$postDigest(function(){t(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function h(a,b,c,d){function e(a){var b=!0;p(a,function(a){t(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},
function(a,c,d){f=a;E(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==h&&c!==k?function(c,e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){e=a(c,d,e,g);c=b(e,c,d);return t(e)?c:e},d=!a.inputs;c&&c!==g?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=g,e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===
Gd?function(b){return a(b)}:a}));return e}var n={csp:Ja().noUnsafeEval,literals:Ia(b),isIdentifierStart:E(d)&&d,isIdentifierContinue:E(c)&&c};return function(b,c){var d,f,p;switch(typeof b){case "string":return p=b=b.trim(),d=a[p],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new zc(n),d=(new xc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?d.$$watchDelegate=d.literal?h:k:d.inputs&&(d.$$watchDelegate=g),a[p]=d),m(d,c);case "function":return m(b,c);default:return m(B,c)}}}]}
function Qf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Md(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Rf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Md(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Md(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};
this.reject=function(b){m(a,b)};this.notify=function(b){q(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!t&&s.length;){var a=s.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):v(c)?"undefined":"string"!==typeof c?Ee(c,void 0):c);Zb(a.value)?b(a.value,c):b(c)}}}function k(b){!d||b.pending||2!==b.status||b.pur||(0===t&&0===s.length&&a(g),s.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=
!0,++t,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var k=0,l=f.length;k<l;++k){b.pur=!0;e=f[k][0];c=f[k][b.status];try{E(c)?h(e,c(b.value)):1===b.status?h(e,b.value):m(e,b.value)}catch(n){m(e,n)}}}finally{--t,d&&0===t&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?n(a,A("qcycle",b)):l(a,b))}function l(a,b){function c(b){f||(f=!0,l(a,b))}function d(b){f||(f=!0,n(a,b))}function e(b){q(a,b)}var g,f=!1;try{if(G(b)||E(b))g=b.then;E(g)?(a.$$state.status=-1,g.call(b,
c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function q(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,g=0,f=e.length;g<f;g++){c=e[g][0];a=e[g][3];try{q(c,E(a)?a(d):d)}catch(h){b(h)}}})}function F(a){var b=new f;m(b,a);return b}function r(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return F(e)}return d&&E(d.then)?d.then(function(){return b(a)},
F):b(a)}function w(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function u(a){if(!E(a))throw A("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var A=K("$q",TypeError),t=0,s=[];O(f.prototype,{then:function(a,b,c){if(v(a)&&v(b)&&v(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return r(b,
y,a)},function(b){return r(b,F,a)},b)}});var y=w;u.prototype=f.prototype;u.defer=c;u.reject=F;u.when=w;u.resolve=y;u.all=function(a){var b=new f,c=0,d=I(a)?[]:{};p(a,function(a,e){c++;w(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};u.race=function(a){var b=c();p(a,function(a){w(a).then(b.resolve,b.reject)});return b.promise};return u}function $f(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||
a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Pf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=K("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(A.$$phase)throw d("inprog",A.$$phase);A.$$phase=a}function q(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function F(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function w(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function u(){null===e&&(e=k.defer(function(){A.$apply(w)}))}
m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!d};
c=null;E(b)||(l.fn=B);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;q(this,1);return function(){var a=cb(k,l);0<=a&&(q(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,f)):b(e,d,f)}var d=Array(a.length),e=Array(a.length),g=[],f=this,h=!1,k=!0;if(!a.length){var l=!0;f.$evalAsync(function(){l&&b(e,e,f)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,g){e[0]=a;d[0]=
c;b(e,a===c?e:d,g)});p(a,function(a,b){var k=f.$watch(a,function(a,g){e[b]=a;d[b]=g;h||(h=!0,f.$evalAsync(c))});g.push(k)});return function(){for(;g.length;)g.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(G(e))if(oa(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},s=0,l++);a=0;for(b in e)wa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===
g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)wa.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],q={},p=!0,s=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)wa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,q,p,F=b,y,u=[],v,x;n("$digest");k.$$checkUrlChange();this===A&&null!==e&&(k.defer.cancel(e),
w());c=null;do{p=!1;y=this;for(q=0;q<t.length;q++){try{x=t[q],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}t.length=0;a:do{if(q=y.$$watchers)for(q.$$digestWatchIndex=q.length;q.$$digestWatchIndex--;)try{if(a=q[q.$$digestWatchIndex])if(m=a.get,(g=m(y))!==(h=a.last)&&!(a.eq?sa(g,h):ba(g)&&ba(h)))p=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===r?g:h,y),5>F&&(v=4-F,u[v]||(u[v]=[]),u[v].push({msg:E(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){p=!1;break a}}catch(B){f(B)}if(!(q=
y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(q=y.$$nextSibling);)y=y.$parent}while(y=q);if((p||t.length)&&!F--)throw A.$$phase=null,d("infdig",b,u);}while(p||t.length);for(A.$$phase=null;D<s.length;)try{s[D++]()}catch(G){f(G)}s.length=D=0;k.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===A&&k.$$applicationDestroyed();q(this,-this.$$watchersCount);for(var b in this.$$listenerCount)F(this,
this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=B;this.$on=this.$watch=this.$watchGroup=function(){return B};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,
b)},$evalAsync:function(a,b){A.$$phase||t.length||k.defer(function(){t.length&&A.$digest()});t.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){s.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{A.$$phase=null}}catch(b){f(b)}finally{try{A.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,F(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var A=new m,t=A.$$asyncQueue=[],s=A.$$postDigestQueue=[],y=A.$$applyAsyncQueue=[],D=0;return A}]}function He(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return t(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ua(d).href;return""===f||f.match(e)?d:"unsafe:"+
f}}}function Gg(a){if("self"===a)return a;if(C(a)){if(-1<a.indexOf("***"))throw qa("iwcard",a);a=Nd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if($a(a))return new RegExp("^"+a.source+"$");throw qa("imatcher");}function Od(a){var b=[];t(a)&&p(a,function(a){b.push(Gg(a))});return b}function Tf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Od(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&
(b=Od(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?Ad(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw qa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),k={};k[ka.HTML]=e(g);k[ka.CSS]=e(g);k[ka.URL]=
e(g);k[ka.JS]=e(g);k[ka.RESOURCE_URL]=e(k[ka.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw qa("icontext",a,b);if(null===b||v(b)||""===b)return b;if("string"!==typeof b)throw qa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||v(e)||""===e)return e;var g=k.hasOwnProperty(d)?k[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=ua(e.toString()),n,q,p=!1;n=0;for(q=a.length;n<q;n++)if(c(a[n],g)){p=!0;break}if(p)for(n=
0,q=b.length;n<q;n++)if(c(b[n],g)){p=!1;break}if(p)return e;throw qa("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw qa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Sf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw qa("iequirks");var c=ra(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=
c.getTrusted=function(a,b){return b},c.valueOf=ab);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;p(ka,function(a,b){var d=N(b);c[("parse_as_"+d).replace(Ac,ib)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Ac,ib)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Ac,ib)]=function(b){return g(a,b)}});return c}]}function Uf(){this.$get=["$window","$document",function(a,b){var d={},
c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Q((/android (\d+)/.exec(N((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&Ba)return!1;if(v(d[a])){var b=
g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ja(),transitions:h,animations:l,android:e}}]}function Wf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!C(k)||v(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==qc}):l===qc&&(l=null);return c.get(k,O({cache:d,transformResponse:l},
a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(k,a.data);return a.data},function(a){h||(a=Hg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function Xf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=fa.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+Nd(b)+"(\\s|\\||$)")).test(c)&&
g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Yf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,
h,l){E(f)||(l=h,h=f,f=B);var m=xa.call(arguments,3),n=t(l)&&!l,q=(n?c:d).defer(),p=q.promise,r;r=b.defer(function(){try{q.resolve(f.apply(null,m))}catch(b){q.reject(b),e(b)}finally{delete g[p.$$timeoutId]}n||a.$apply()},h);p.$$timeoutId=r;g[r]=q;return p}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ua(a){Ba&&(ea.setAttribute("href",
a),a=ea.href);ea.setAttribute("href",a);return{href:ea.href,protocol:ea.protocol?ea.protocol.replace(/:$/,""):"",host:ea.host,search:ea.search?ea.search.replace(/^\?/,""):"",hash:ea.hash?ea.hash.replace(/^#/,""):"",hostname:ea.hostname,port:ea.port,pathname:"/"===ea.pathname.charAt(0)?ea.pathname:"/"+ea.pathname}}function Ad(a){a=C(a)?ua(a):a;return a.protocol===Pd.protocol&&a.host===Pd.host}function Zf(){this.$get=aa(x)}function Qd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),v(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function cg(){this.$get=Qd}function ed(a){function b(d,c){if(G(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",
Rd);b("date",Sd);b("filter",Ig);b("json",Jg);b("limitTo",Kg);b("lowercase",Lg);b("number",Td);b("orderBy",Ud);b("uppercase",Mg)}function Ig(){return function(a,b,d,c){if(!oa(a)){if(null==a)return a;throw K("filter")("notarray",a);}c=c||"$";var e;switch(Bc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Ng(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Ng(a,b,d,c){var e=G(a)&&d in a;!0===b?b=sa:E(b)||(b=function(a,
b){if(v(a))return!1;if(null===a||null===b)return a===b;if(G(b)||G(a)&&!Yb(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!G(f)?Ga(f,a[d],b,d,!1):Ga(f,a,b,d,c)}}function Ga(a,b,d,c,e,f){var g=Bc(a),k=Bc(b);if("string"===k&&"!"===b.charAt(0))return!Ga(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return Ga(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Ga(a[h],b,d,c,!0))return!0;return f?!1:Ga(a,b,d,c,!1)}if("object"===
k){for(h in b)if(f=b[h],!E(f)&&!v(f)&&(g=h===c,!Ga(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Bc(a){return null===a?"null":typeof a}function Rd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){v(c)&&(c=b.CURRENCY_SYM);v(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Vd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Td(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Vd(a,b.PATTERNS[0],b.GROUP_SEP,
b.DECIMAL_SEP,c)}}function Og(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Wd))&&(a=a.replace(Wd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Cc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Cc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Xd&&(d=d.splice(0,Xd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Pg(a,b,d,c){var e=a.d,f=e.length-a.i;b=v(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,
d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Vd(a,b,d,c,e){if(!C(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=Og(k);Pg(g,e,b.minFrac,b.maxFrac);
h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Lb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<
b;)a=Cc+a;d&&(a=a.substr(a.length-b));return e+a}function $(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Lb(f,b,c,e)}}function ob(a,b,d){return function(c,e){var f=c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Yd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Zd(a){return function(b){var d=Yd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Lb(b,a)}}function Dc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Sd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Q(b[9]+b[10]),g=Q(b[9]+b[11]));k.call(a,Q(b[1]),Q(b[2])-1,Q(b[3]));f=Q(b[4]||0)-f;g=Q(b[5]||0)-g;k=Q(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;C(c)&&(c=Qg.test(c)?Q(c):b(c));W(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Rg.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Rc(f,m),c=ac(c,f,!0));p(k,function(b){h=Sg[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jg(){return function(a,b){v(b)&&(b=2);return eb(a,b)}}function Kg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):Q(b);if(ba(b))return a;W(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:Q(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Ec(a,d,d+b):0===d?Ec(a,b,a.length):Ec(a,Math.max(0,d+b),d)}}function Ec(a,b,d){return C(a)?a.slice(b,d):xa.call(a,b,d)}function Ud(a){function b(b){return b.map(function(b){var c=1,d=ab;if(E(b))d=b;else if(C(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(G(h)&&(h=a.index),G(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c=d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!oa(a))throw K("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&
(f=["+"]);var h=b(f),l=g?-1:1,m=E(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(E(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Yb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*h[d].descending*
l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ua(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return aa(a)}function Mb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Nb;this.$$element=a;this.$$animate=c;$d(this)}function $d(a){a.$$classCache={};
a.$$classCache[ae]=!(a.$$classCache[pb]=a.$$element.hasClass(pb))}function be(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,pb+c,!0===d);b(a,ae+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){v(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),ce(this.$pending)&&(this.$pending=void 0));La(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=ce(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function ce(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Fc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Va(a,b,d,c,e,f){var g=N(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=P(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&
c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(de[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===
d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Ob(a,b){return function(d,c){var e,f;if(ia(d))return d;if(C(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Tg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,
ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function qb(a,b,d,c){return function(e,f,g,k,h,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return t(a)&&!ia(a)?d(a)||void 0:a}Gc(e,f,g,k);Va(e,f,g,k,h,l);var p=k&&k.$options.getOption("timezone"),r;k.$$parserName=a;k.$parsers.push(function(a){if(k.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),p&&(a=ac(a,p)),a});k.$formatters.push(function(a){if(a&&
!ia(a))throw rb("datefmt",a);if(n(a))return(r=a)&&p&&(r=ac(r,p,!0)),m("date")(a,c,p);r=null;return""});if(t(g.min)||g.ngMin){var w;k.$validators.min=function(a){return!n(a)||v(w)||d(a)>=w};g.$observe("min",function(a){w=q(a);k.$validate()})}if(t(g.max)||g.ngMax){var u;k.$validators.max=function(a){return!n(a)||v(u)||d(a)<=u};g.$observe("max",function(a){u=q(a);k.$validate()})}}}function Gc(a,b,d,c){(c.$$hasNativeValidators=G(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
return c.badInput||c.typeMismatch?void 0:a})}function ee(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Ug.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw rb("numfmt",b);b=b.toString()}return b})}function Wa(a){t(a)&&!W(a)&&(a=parseFloat(a));return ba(a)?void 0:a}function Hc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function fe(a,b,d){a=Number(a);
var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Hc(a):0,k=e?Hc(b):0,h=f?Hc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function ge(a,b,d,c,e){if(t(c)){a=a(c);if(!a.constant)throw rb("constexpr",d,c);return a(b)}return e}function Ic(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;
c.push(e)}return c}function c(a){var b=a;I(a)?b=a.map(c).join(" "):G(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);else if(G(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&v(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var f;return["$parse",function(g){return{restrict:"AC",link:function(k,h,l){function m(a,b){var c=[];p(a,function(a){if(0<b||A[a])A[a]=(A[a]||0)+b,A[a]===+(0<b)&&c.push(a)});return c.join(" ")}
function n(a){if(a===b){var c=s,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=s,c=m(c&&c.split(" "),-1),l.$removeClass(c);v=a}function q(a){a=c(a);a!==s&&r(a)}function r(a){if(v===b){var c=s&&s.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);l.$addClass(c);l.$removeClass(g)}s=a}var t=l[a].trim(),w=":"===t.charAt(0)&&":"===t.charAt(1),t=g(t,w?e:c),u=w?q:r,A=h.data("$classCounts"),v=!0,s;A||(A=R(),h.data("$classCounts",A));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&1})),
k.$watch(f,n));k.$watch(t,u,w)}}}]}function Pb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=Nb;this.$options=Qb;this.$$parsedNgModel=e(d.ngModel);
this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;$d(this);Vg(this)}function Vg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===
a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,B))}return b})}function Jc(a){this.$$options=a}function he(a,b){p(b,function(b,c){t(a[c])||(a[c]=b)})}function Ha(a,b){a.prop("selected",b);a.attr("selected",b)}var Lc={objectMaxDepth:5},Wg=/^\/(.+)\/([a-z]*)$/,wa=Object.prototype.hasOwnProperty,
N=function(a){return C(a)?a.toLowerCase():a},wb=function(a){return C(a)?a.toUpperCase():a},Ba,z,ta,xa=[].slice,vg=[].splice,Xg=[].push,la=Object.prototype.toString,Oc=Object.getPrototypeOf,za=K("ng"),fa=x.angular||(x.angular={}),dc,sb=0;Ba=x.document.documentMode;var ba=Number.isNaN||function(a){return a!==a};B.$inject=[];ab.$inject=[];var I=Array.isArray,te=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,P=function(a){return C(a)?a.trim():a},Nd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ja=function(){if(!t(Ja.rules)){var a=x.document.querySelector("[ng-csp]")||x.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ja.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ja;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ja.rules},tb=function(){if(t(tb.name_))return tb.name_;var a,b,d=Na.length,
c,e;for(b=0;b<d;++b)if(c=Na[b],a=x.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return tb.name_=e},ve=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ye=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof x.HTMLScriptElement||b instanceof x.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(x.document),Be=/[A-Z]/g,Wc=!1,Ma=3,Ge={full:"1.6.5",major:1,minor:6,dot:5,codeName:"toffee-salinization"};S.expando="ng339";var jb=S.cache={},hg=1;S._data=function(a){return this.cache[a[this.expando]]||{}};var dg=/-([a-z])/g,Yg=/^-ms-/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},gc=K("jqLite"),gg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
fc=/<|&#?\w+;/,eg=/<([\w:-]+)/,fg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,pa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pa.optgroup=pa.option;pa.tbody=pa.tfoot=pa.colgroup=pa.caption=pa.thead;pa.th=pa.td;var mg=x.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Ra=S.prototype={ready:gd,toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?z(this[a]):z(this[this.length+a])},length:0,push:Xg,sort:[].sort,splice:[].splice},Hb={};p("multiple selected checked disabled readOnly required open".split(" "),function(a){Hb[N(a)]=a});var ld={};p("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};p({data:kc,removeData:jc,hasData:function(a){for(var b in jb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)jc(a[b])}},function(a,b){S[b]=a});p({data:kc,inheritedData:Fb,scope:function(a){return z.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return z.data(a,"$isolateScope")||z.data(a,"$isolateScopeNoTemplate")},controller:id,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=yb(b.replace(Yg,"ms-"));if(t(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c&&a.getAttribute){var c=N(b),e=Hb[c];if(t(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(t(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(v(d)){var c=a.nodeType;return 1===c||c===Ma?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(v(b)){if(a.multiple&&"select"===ya(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(v(b))return a.innerHTML;zb(a,!0);a.innerHTML=b},empty:jd},function(a,b){S.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&v(2===a.length&&a!==Cb&&a!==id?b:c)){if(G(b)){for(e=0;e<g;e++)if(a===kc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=v(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});p({removeData:jc,on:function(a,b,d,c){if(t(c))throw gc("onargs");if(ec(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=jg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Bb[b]?(k(Bb[b],lg),k(b,void 0,!0)):k(b)}},
off:hd,one:function(a,b,d){a=z(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;zb(a);p(new S(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new S(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new S(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=z(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new S(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&p(b.split(" "),function(b){var e=d;v(e)&&(e=!Cb(a,b));
(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:ic,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:B,type:f,target:a},b.type&&(c=O(c,b)),b=ra(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){S.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)v(f)?(f=a(this[g],b,c,e),t(f)&&(f=z(f))):hc(f,a(this[g],b,c,e));return t(f)?f:this}});S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off;var Zg=Object.create(null);md.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return ba(a)?Zg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Ib=md,bg=[function(){this.$get=[function(){return Ib}]}],og=/^([^(]+?)=>/,pg=/^[^(]*\(\s*([^)]*)\)/m,$g=/,/,ah=/^\s*(_?)(\S+?)\1\s*$/,ng=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ka=K("$injector");gb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw C(d)&&d||(d=a.name||qg(a)),Ka("strictdi",d);b=nd(a);p(b[1].split($g),function(a){a.replace(ah,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,ub(a[b],"fn"),c=a.slice(0,b)):ub(a,"fn",
!0);return c};var ie=K("$animate"),tf=function(){this.$get=B},uf=function(){var a=new Ib,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=C(b)?b.split(" "):I(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=rg(b.attr("class")),e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.delete(b)}});b.length=0}return{enabled:B,
on:B,off:B,pin:B,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},rf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw ie("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=E(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,ie("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):
c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(c,d,h,l){d=d&&z(d);h=h&&z(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",Ca(l))},move:function(c,d,h,l){d=d&&z(d);h=h&&z(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",Ca(l))},leave:function(b,c){return a.push(b,"leave",Ca(c),function(){b.remove()})},addClass:function(b,c,d){d=Ca(d);d.addClass=kb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ca(d);
d.removeClass=kb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ca(f);f.addClass=kb(f.addClass,c);f.removeClass=kb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ca(m);m.from=m.from?O(m.from,c):c;m.to=m.to?O(m.to,d):d;m.tempClasses=kb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],wf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=
[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},vf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&
b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:B,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},sf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",
function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},ga=K("$compile"),oc=new function(){};Yc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=
function(){return this.previousValue===oc};var od=/^((?:x|data)[:\-_])/i,ug=/[:\-_]+(.)/g,vd=K("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Df=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof z&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",sc={"Content-Type":wd+";charset=utf-8"},xg=/^\[|^\{(?!\{)/,yg={"[":/]$/,"{":/}$/},wg=/^\)]\}',?\n/,rc=K("$http"),Fa=fa.$interpolateMinErr=K("$interpolate");Fa.throwNoconcat=function(a){throw Fa("noconcat",
a);};Fa.interr=function(a,b){return Fa("interr",a,b.toString())};var Lf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=fa.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},bh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,
Ag={http:80,https:443,ftp:21},mb=K("$location"),Bg=/^\s*[\\/]{2,}/,ch={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Kb("$$absUrl"),url:function(a){if(v(a))return this.$$url;var b=bh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Kb("$$protocol"),host:Kb("$$host"),port:Kb("$$port"),path:Ed("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a)||W(a))a=a.toString(),this.$$search=Tc(a);else if(G(a))a=Ia(a,{}),p(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw mb("isrcharg");break;default:v(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Ed("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};p([Dd,wc,vc],function(a){a.prototype=Object.create(ch);a.prototype.state=function(b){if(!arguments.length)return this.$$state;
if(a!==vc||!this.$$html5)throw mb("nostate");this.$$state=v(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Xa=K("$parse"),Fg={}.constructor.prototype.valueOf,Rb=R();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Rb[a]=!0});var dh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},zc=function(a){this.options=a};zc.prototype={constructor:zc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),
'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Rb[b],e=Rb[d];Rb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",
this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;
var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=t(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Xa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=dh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal=
"Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Id(a))throw Xa("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),
b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),
b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),
b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):
this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):
"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",
a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),
b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Xa("syntax",b.text,a,b.index+
1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Xa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Xa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},
expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},$locals:{type:r.LocalsExpression}}};var Gd=2;Kd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(a,b.$filter);var d="",c;this.stage="assign";if(c=Jd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign",
"s,v,l");c=Hd(a.body);b.stage="inputs";p(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,
Cg,Dg,Fd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;p(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;
p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,n;c=c||B;if(!f&&t(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:p(a.body,
function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?
this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,
g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,
"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],p(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){p(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+
")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];p(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=
[];n=!1;p(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),p(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(p(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;case r.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,
b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(C(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Xa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
Ld.prototype={compile:function(a){var b=this;X(a,b.$filter);var d,c;if(d=Jd(a))c=this.recurse(d);d=Hd(a.body);var e;d&&(e=[],p(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];p(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?B:1===a.body.length?f[0]:function(a,b){var c;p(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,
a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),
b);case r.Identifier:return f.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case r.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,c,
d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),q;if(null!=n.value){q=[];for(var p=0;p<g.length;++p)q.push(g[p](a,c,d,f));q=n.value.apply(n.context,q)}return b?{value:q}:q};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),function(a,
c,d,e){for(var f=[],q=0;q<g.length;++q)f.push(g[q](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],p(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},q=0;q<g.length;++q)g[q].computed?f[g[q].key(a,c,d,e)]=g[q].value(a,c,d,e):f[g[q].key]=g[q].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?
{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,
e,f,g);k=Fd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(t(k)?k:0)-(t(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,
f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,
g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,
b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};xc.prototype={constructor:xc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression);b.constant=
a.constant;return b}};var qa=K("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Ac=/_([a-z])/g,Hg=K("$compile"),ea=x.document.createElement("a"),Pd=ua(x.location.href);Qd.$inject=["$document"];ed.$inject=["$provide"];var Xd=22,Wd=".",Cc="0";Rd.$inject=["$locale"];Td.$inject=["$locale"];var Sg={yyyy:$("FullYear",4,0,!1,!0),yy:$("FullYear",2,0,!0,!0),y:$("FullYear",1,0,!1,!0),MMMM:ob("Month"),MMM:ob("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),LLLL:ob("Month",!1,!0),
dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))},ww:Zd(2),w:Zd(1),G:Dc,GG:Dc,GGG:Dc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
Rg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Qg=/^-?\d+$/;Sd.$inject=["$locale"];var Lg=aa(N),Mg=aa(wb);Ud.$inject=["$parse"];var Ie=aa({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),xb={};p(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ea("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});xb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(td,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Wg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=Ea("ng-"+a);xb[b]=
function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===la.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Nb={$addControl:B,$$renameControl:function(a,b){a.$name=b},$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B,$setSubmitted:B};Mb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Mb.prototype={$rollbackViewValue:function(){p(this.$$controls,
function(a){a.$rollbackViewValue()})},$commitViewValue:function(){p(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Oa(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];p(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);p(this.$error,function(b,d){this.$setValidity(d,
null,a)},this);p(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=Nb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Ya);this.$$animate.addClass(this.$$element,Sb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Ya,Sb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;p(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){p(this.$$controls,
function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};be({clazz:Mb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var je=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||B}return{name:"form",restrict:a?"EAC":"E",require:["form",
"^^?form"],controller:Mb,compile:function(d,f){d.addClass(Ya).addClass(pb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var p=g?c(n.$name):B;g&&(p(a,n),e.$observe(g,function(b){n.$name!==
b&&(p(a,void 0),n.$$parentForm.$$renameControl(n,b),p=c(n.$name),p(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);p(a,void 0);O(n,Nb)})}}}}}]},Je=je(),Ve=je(!0),Tg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,eh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,fh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Ug=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,ke=/^(\d{4,})-(\d{2})-(\d{2})$/,le=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kc=/^(\d{4,})-W(\d\d)$/,me=/^(\d{4,})-(\d\d)$/,ne=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,de=R();p(["date","datetime-local","month","time","week"],function(a){de[a]=!0});var oe={text:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Fc(c)},date:qb("date",ke,Ob(ke,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":qb("datetimelocal",le,Ob(le,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:qb("time",ne,Ob(ne,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:qb("week",Kc,function(a,b){if(ia(a))return a;if(C(a)){Kc.lastIndex=0;var d=Kc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Yd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:qb("month",me,Ob(me,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Gc(a,b,d,c);ee(c);Va(a,b,d,c,e,f);var g,
k;if(t(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||v(g)||a>=g},d.$observe("min",function(a){g=Wa(a);c.$validate()});if(t(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||v(k)||a<=k},d.$observe("max",function(a){k=Wa(a);c.$validate()});if(t(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||v(h)||fe(b,g||0,h)};d.$observe("step",function(a){h=Wa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Fc(c);c.$$parserName=
"url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||eh.test(d)}},email:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Fc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||fh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==P(d.ngTrim);v(d.name)&&b.attr("name",++sb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=P(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=P(a));b[0].checked=a===c.$viewValue};
d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function k(a){n=Wa(a);ba(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){q=Wa(a);ba(c.$modelValue)||(m?(a=b.val(),q<a&&(b.val(q),a=q<n?n:q),c.$setViewValue(a)):c.$validate())}function l(a){p=Wa(a);ba(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Gc(a,b,d,c);ee(c);Va(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&
"range"===b[0].type,n=m?0:void 0,q=m?100:void 0,p=m?1:void 0,r=b[0].validity;a=t(d.min);e=t(d.max);f=t(d.step);var w=c.$render;c.$render=m&&t(r.rangeUnderflow)&&t(r.rangeOverflow)?function(){w();c.$setViewValue(b.val())}:w;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||v(n)||b>=n},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||v(q)||b<=q},g("max",h));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,
b){return c.$isEmpty(b)||v(p)||fe(b,n||0,p)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=ge(k,a,"ngTrueValue",d.ngTrueValue,!0),l=ge(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:B,button:B,submit:B,reset:B,file:B},Zc=["$browser","$sniffer","$filter",
"$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(oe[N(g.type)]||oe.text)(e,f,g,k[0],b,a,d,c)}}}}],gh=/^(true|false|\d+)$/,nf=function(){function a(a,d,c){var e=t(c)?c:9===Ba?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return gh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ne=["$compile",function(a){return{restrict:"AC",
compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=cc(a)})}}}}],Pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=v(a)?"":a})}}}}],Oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,
e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],mf=aa({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Qe=Ic("",!0),Se=Ic("Odd",0),Re=Ic("Even",1),Te=Ua({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],dd={},hh={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Ea("ng-"+a);dd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};hh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Xe=["$animate","$compile",
function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=vb(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],Ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,n,q){var p=0,r,w,u,A=function(){w&&(w.remove(),w=null);r&&(r.$destroy(),r=null);u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(f,function(f){var m=function(a){!1===a||!t(k)||k&&!c.$eval(k)||b()},y=++p;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&y===p){var b=c.$new();n.template=a;a=q(b,function(a){A();d.enter(a,null,e).done(m)});
r=b;u=a;r.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||y!==p||(A(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(A(),n.template=null)})}}}}],pf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?(d.empty(),a(fd(e.template,x.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ze=Ua({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),lf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?P(e):e;c.$parsers.push(function(a){if(!v(a)){var b=[];a&&p(a.split(g),function(a){a&&b.push(f?P(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},pb="ng-valid",ae="ng-invalid",Ya="ng-pristine",Sb="ng-dirty",rb=K("ngModel");Pb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Pb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);E(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){E(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw rb("nonassign",this.$$attr.ngModel,Aa(this.$$element));},$render:B,$isEmpty:function(a){return v(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Sb);this.$$animate.addClass(this.$$element,Ya)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Ya);this.$$animate.addClass(this.$$element,Sb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ba(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;p(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(p(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!E(h.then))throw rb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},B):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName||"parse";if(v(h.$$parserValid))f(a,null);else return h.$$parserValid||(p(h.$validators,function(a,
b){f(b,null)}),p(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=
v(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),v(a)){this.$$parserValid=!1;break}ba(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);p(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};be({clazz:Pb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var kf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pb,priority:1,compile:function(b){b.addClass(Ya).addClass("ng-untouched").addClass(pb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=
f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];if(k.$options.getOption("updateOn"))c.on(k.$options.getOption("updateOn"),function(a){k.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Qb,ih=/(\s+|^)default(\s+|$)/;Jc.prototype=
{getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=O({},a);p(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=P(d.replace(ih,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],he(a,this.$$options));he(a,Qb.$$options);return new Jc(a)}};Qb=new Jc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,
timezone:null});var of=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Qb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},$e=Ua({terminal:!0,priority:1E3}),jh=K("ngOptions"),kh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
hf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!p&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(kh);if(!n)throw jh("iexp",a,Aa(b));var q=n[5]||n[7],p=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:q);var w=a&&d(a)||b,t=r&&d(r),A=r?function(a,b){return t(c,b)}:function(a){return Sa(a)},
v=function(a,b){return A(a,z(a,b))},s=d(n[2]||n[1]),y=d(n[3]||""),D=d(n[4]||""),H=d(n[8]),x={},z=p?function(a,b){x[p]=b;x[q]=a;return x}:function(a){x[q]=a;return x};return{trackBy:r,getTrackByValue:v,getWatchables:d(H,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=z(l,k),l=A(l,k);b.push(l);if(n[2]||n[1])l=s(c,k),b.push(l);n[4]&&(k=D(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=H(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var q=d===
g?n:g[n],p=z(d[q],q),t=w(c,p),q=A(t,p),u=s(c,p),F=y(c,p),p=D(c,p),t=new e(q,t,u,F,p);a.push(t);b[q]=t}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return r?Ia(a.viewValue):a.viewValue}}}}}var e=x.document.createElement("option"),f=x.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=B},post:function(d,k,h,l){function m(a){var b=(a=A.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var q=l[0],r=l[1],v=h.multiple;l=0;for(var w=k.children(),u=w.length;l<u;l++)if(""===w[l].value){q.hasEmptyOption=!0;q.emptyOption=w.eq(l);break}k.empty();l=!!q.emptyOption;z(e.cloneNode(!1)).val("?");var A,x=c(h.ngOptions,k,d),s=b[0].createDocumentFragment();q.generateUnknownOptionValue=function(a){return"?"};v?(q.writeValue=
function(a){if(A){var b=a&&a.map(m)||[];A.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},q.readValue=function(){var a=k.val()||[],b=[];p(a,function(a){(a=A.selectValueMap[a])&&!a.disabled&&b.push(A.getViewValueFromOption(a))});return b},x.trackBy&&d.$watchCollection(function(){if(I(r.$viewValue))return r.$viewValue.map(function(a){return x.getTrackByValue(a)})},function(){r.$render()})):(q.writeValue=function(a){if(A){var b=k[0].options[k[0].selectedIndex],
c=A.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(q.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):q.selectUnknownOrEmptyOption(a)}},q.readValue=function(){var a=A.selectValueMap[k.val()];return a&&!a.disabled?(q.unselectEmptyOption(),q.removeUnknownOption(),A.getViewValueFromOption(a)):null},x.trackBy&&d.$watch(function(){return x.getTrackByValue(r.$viewValue)},function(){r.$render()}));
l&&(a(q.emptyOption)(d),k.prepend(q.emptyOption),8===q.emptyOption[0].nodeType?(q.hasEmptyOption=!1,q.registerOption=function(a,b){""===b.val()&&(q.hasEmptyOption=!0,q.emptyOption=b,q.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){var a=q.$isEmptyOptionSelected();q.hasEmptyOption=!1;q.emptyOption=void 0;a&&r.$render()}))}):q.emptyOption.removeClass("ng-scope"));d.$watchCollection(x.getWatchables,function(){var a=A&&q.readValue();if(A)for(var b=A.items.length-1;0<=b;b--){var c=
A.items[b];t(c.group)?Gb(c.element.parentNode):Gb(c.element)}A=x.getOptions();var d={};A.items.forEach(function(a){var b;if(t(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),s.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);n(a,c)}else b=e.cloneNode(!1),s.appendChild(b),n(a,b)});k[0].appendChild(s);r.$render();r.$isEmpty(a)||(b=q.readValue(),(x.trackBy||v?sa(a,b):a===b)||(r.$setViewValue(b),r.$render()))})}}}}],af=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),n=k.offset||0,q=f.$eval(m)||{},r={},t=b.startSymbol(),w=b.endSymbol(),u=t+l+"-"+n+w,A=fa.noop,x;p(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),q[c]=g.attr(k.$attr[b]))});p(q,function(a,d){r[d]=b(a.replace(c,u))});f.$watch(l,function(b){var c=parseFloat(b),e=ba(c);e||c in q||(c=a.pluralCat(c-n));c===x||e&&ba(x)||(A(),e=r[c],v(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),A=B,h()):A=f.$watch(e,h),x=c)})}}}],bf=["$parse","$animate","$compile",function(a,b,d){var c=K("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",k);var m=l[1],n=l[2],q=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw c("badident",q);var u,v,x,s,y={$id:Sa};r?u=a(r):(x=function(a,b){return Sa(b)},s=function(a){return a});return function(a,d,f,g,l){u&&(v=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=
d;return u(a,y)});var m=R();a.$watchCollection(n,function(f){var g,n,r=d[0],u,y=R(),F,z,E,B,G,C,I;q&&(a[q]=f);if(oa(f))G=f,n=v||x;else for(I in n=v||s,G=[],f)wa.call(f,I)&&"$"!==I.charAt(0)&&G.push(I);F=G.length;I=Array(F);for(g=0;g<F;g++)if(z=f===G?g:G[g],E=f[z],B=n(z,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw p(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,B,E);I[g]={id:B,scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=vb(C.clone);b.leave(B);if(B[0].parentNode)for(g=
0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<F;g++)if(z=f===G?g:G[g],E=f[z],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(vb(C.clone),null,r);r=C.clone[C.clone.length-1];e(C.scope,g,t,E,w,z,F)}else l(function(a,c){C.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;e(C.scope,g,t,E,w,z,F)});m=y})}}}}],cf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],We=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],df=Ua(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),ef=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var r=vb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&p(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],ff=Ua({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});p(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),gf=Ua({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),lh=K("ngTransclude"),
jf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw lh("orphan",Aa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Ma||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&
h()}}}}],Ke=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],mh={$setViewValue:B,$render:B},nh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Ib;e.selectValueMap={};e.ngModelCtrl=mh;
e.multiple=!1;e.unknownOption=z(x.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ha(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ha(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Sa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ha(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ha(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=B});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ha(z(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Sa(b),a.val(c in e.selectValueMap?
c:b),Ha(z(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Oa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var p,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");t(r)&&(e.removeOption(p),delete e.selectValueMap[r],
d=!0);r=Sa(a);p=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");t(p)&&(e.removeOption(p),d=!0);p=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Le=function(){return{restrict:"E",require:["select","?ngModel"],controller:nh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){p(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ha(z(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||sa(g,f.$viewValue)||(g=ra(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=B},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;t(d.ngValue)||(t(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=
function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw K("ngPattern")("noregexp",f,a,Aa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||v(e)||e.test(b)}}}}},cd=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Q(a);e=ba(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Q(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};x.angular.bootstrap?x.console&&console.log("WARNING: Tried to load angular more than once."):
(Ce(),Fe(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),z(function(){xe(x.document,Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

$( document ).ready(function() {
    
    if (window.innerWidth > 699) {
        var img = '<img src="/images/hero.svg" class="hero-items" />';
        $(".background").append(img);
    }
    
    $(window).on('resize', function() {
	var test = $(".hero-items").length;
	console.log(test)
	if (window.innerWidth > 699 && test <= 0) {
	        var img = '<img src="/images/hero.svg" class="hero-items" />';
	        $(".background").append(img);
	    }
    });
    
    $(".crsl-items").carousel({ visible: 4, itemMinWidth: 236, itemMargin: 31, navigation: $(this).data('navigation') });
    
    window.setInterval(function() {
	var count = parseInt($(".counter span").text()) + 10;
	$(".counter span").text(count);
    }, 1000);
    
    
    $(".showcase").on("mouseenter", "li.col a", function() {
	var bw = $(this).children(".bw");
	bw.fadeOut(500);
    });
    $(".showcase").on("mouseleave", "li.col a", function() {
	var bw = $(this).children(".bw");
	bw.fadeIn(500);
    });

});
/* bignumber.js v1.5.0 https://github.com/MikeMcl/bignumber.js/LICENCE */
(function(global) {
    var MAX = 1000000000,
        MAX_POWER = 1000000,
        DECIMAL_PLACES = 20,
        ROUNDING_MODE = 4,
        TO_EXP_NEG = -7,
        TO_EXP_POS = 21,
        MIN_EXP = -MAX,
        MAX_EXP = MAX,
        ERRORS = true,
        parse = parseInt,
        P = BigNumber.prototype,
        DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",
        outOfRange, id = 0,
        isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        trim = String.prototype.trim || function() {
            return this.replace(/^\s+|\s+$/g, "")
        },
        ONE = BigNumber(1);

    function BigNumber(n, b) {
        var e, i, isNum, digits, valid, orig, x = this;
        if (!(x instanceof BigNumber)) {
            return new BigNumber(n, b)
        }
        if (n instanceof BigNumber) {
            id = 0;
            if (b !== e) {
                n += ""
            } else {
                x.s = n.s;
                x.e = n.e;
                x.c = (n = n.c) ? n.slice() : n;
                return
            }
        }
        if (typeof n != "string") {
            n = (isNum = typeof n == "number" || Object.prototype.toString.call(n) == "[object Number]") && n === 0 && 1 / n < 0 ? "-0" : n + ""
        }
        orig = n;
        if (b === e && isValid.test(n)) {
            x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1
        } else {
            if (b == 10) {
                return setMode(n, DECIMAL_PLACES, ROUNDING_MODE)
            }
            n = trim.call(n).replace(/^\+(?!-)/, "");
            x.s = n.charAt(0) == "-" ? (n = n.replace(/^-(?!-)/, ""), -1) : 1;
            if (b != null) {
                if ((b == (b | 0) || !ERRORS) && !(outOfRange = !(b >= 2 && b < 65))) {
                    digits = "[" + DIGITS.slice(0, b = b | 0) + "]+";
                    n = n.replace(/\.$/, "").replace(/^\./, "0.");
                    if (valid = new RegExp("^" + digits + "(?:\\." + digits + ")?$", b < 37 ? "i" : "").test(n)) {
                        if (isNum) {
                            if (n.replace(/^0\.0*|\./, "").length > 15) {
                                ifExceptionsThrow(orig, 0)
                            }
                            isNum = !isNum
                        }
                        n = convert(n, 10, b, x.s)
                    } else {
                        if (n != "Infinity" && n != "NaN") {
                            ifExceptionsThrow(orig, 1, b);
                            n = "NaN"
                        }
                    }
                } else {
                    ifExceptionsThrow(b, 2);
                    valid = isValid.test(n)
                }
            } else {
                valid = isValid.test(n)
            }
            if (!valid) {
                x.c = x.e = null;
                if (n != "Infinity") {
                    if (n != "NaN") {
                        ifExceptionsThrow(orig, 3)
                    }
                    x.s = null
                }
                id = 0;
                return
            }
        }
        if ((e = n.indexOf(".")) > -1) {
            n = n.replace(".", "")
        }
        if ((i = n.search(/e/i)) > 0) {
            if (e < 0) {
                e = i
            }
            e += +n.slice(i + 1);
            n = n.substring(0, i)
        } else {
            if (e < 0) {
                e = n.length
            }
        }
        for (i = 0; n.charAt(i) == "0"; i++) {}
        b = n.length;
        if (isNum && b > 15 && n.slice(i).length > 15) {
            ifExceptionsThrow(orig, 0)
        }
        id = 0;
        if ((e -= i + 1) > MAX_EXP) {
            x.c = x.e = null
        } else {
            if (i == b || e < MIN_EXP) {
                x.c = [x.e = 0]
            } else {
                for (; n.charAt(--b) == "0";) {}
                x.e = e;
                x.c = [];
                for (e = 0; i <= b; x.c[e++] = +n.charAt(i++)) {}
            }
        }
    }
    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.config = function() {
        var v, p, i = 0,
            r = {},
            a = arguments,
            o = a[0],
            c = "config",
            inRange = function(n, lo, hi) {
                return !((outOfRange = n < lo || n > hi) || parse(n) != n && n !== 0)
            },
            has = o && typeof o == "object" ? function() {
                if (o.hasOwnProperty(p)) {
                    return (v = o[p]) != null
                }
            } : function() {
                if (a.length > i) {
                    return (v = a[i++]) != null
                }
            };
        if (has(p = "DECIMAL_PLACES")) {
            if (inRange(v, 0, MAX)) {
                DECIMAL_PLACES = v | 0
            } else {
                ifExceptionsThrow(v, p, c)
            }
        }
        r[p] = DECIMAL_PLACES;
        if (has(p = "ROUNDING_MODE")) {
            if (inRange(v, 0, 8)) {
                ROUNDING_MODE = v | 0
            } else {
                ifExceptionsThrow(v, p, c)
            }
        }
        r[p] = ROUNDING_MODE;
        if (has(p = "EXPONENTIAL_AT")) {
            if (inRange(v, -MAX, MAX)) {
                TO_EXP_NEG = -(TO_EXP_POS = ~~(v < 0 ? -v : +v))
            } else {
                if (!outOfRange && v && inRange(v[0], -MAX, 0) && inRange(v[1], 0, MAX)) {
                    TO_EXP_NEG = ~~v[0];
                    TO_EXP_POS = ~~v[1]
                } else {
                    ifExceptionsThrow(v, p, c, 1)
                }
            }
        }
        r[p] = [TO_EXP_NEG, TO_EXP_POS];
        if (has(p = "RANGE")) {
            if (inRange(v, -MAX, MAX) && ~~v) {
                MIN_EXP = -(MAX_EXP = ~~(v < 0 ? -v : +v))
            } else {
                if (!outOfRange && v && inRange(v[0], -MAX, -1) && inRange(v[1], 1, MAX)) {
                    MIN_EXP = ~~v[0], MAX_EXP = ~~v[1]
                } else {
                    ifExceptionsThrow(v, p, c, 1, 1)
                }
            }
        }
        r[p] = [MIN_EXP, MAX_EXP];
        if (has(p = "ERRORS")) {
            if (v === !!v || v === 1 || v === 0) {
                parse = (outOfRange = id = 0, ERRORS = !!v) ? parseInt : parseFloat
            } else {
                ifExceptionsThrow(v, p, c, 0, 0, 1)
            }
        }
        r[p] = ERRORS;
        return r
    };

    function ifExceptionsThrow(arg, i, j, isArray, isRange, isErrors) {
        if (ERRORS) {
            var error, method = ["new BigNumber", "cmp", "div", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "times", "toFr"][id ? id < 0 ? -id : id : 1 / id < 0 ? 1 : 0] + "()",
                message = outOfRange ? " out of range" : " not a" + (isRange ? " non-zero" : "n") + " integer";
            message = ([method + " number type has more than 15 significant digits", method + " not a base " + j + " number", method + " base" + message, method + " not a number"][i] || j + "() " + i + (isErrors ? " not a boolean or binary digit" : message + (isArray ? " or not [" + (outOfRange ? " negative, positive" : " integer, integer") + " ]" : ""))) + ": " + arg;
            outOfRange = id = 0;
            error = new Error(message);
            error.name = "BigNumber Error";
            throw error
        }
    }

    function convert(nStr, baseOut, baseIn, sign) {
        var e, dvs, dvd, nArr, fracArr, fracBN;

        function strToArr(str, bIn) {
            var j, i = 0,
                strL = str.length,
                arrL, arr = [0];
            for (bIn = bIn || baseIn; i < strL; i++) {
                for (arrL = arr.length, j = 0; j < arrL; arr[j] *= bIn, j++) {}
                for (arr[0] += DIGITS.indexOf(str.charAt(i)), j = 0; j < arr.length; j++) {
                    if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) {
                            arr[j + 1] = 0
                        }
                        arr[j + 1] += arr[j] / baseOut ^ 0;
                        arr[j] %= baseOut
                    }
                }
            }
            return arr.reverse()
        }

        function arrToStr(arr) {
            var i = 0,
                arrL = arr.length,
                str = "";
            for (; i < arrL; str += DIGITS.charAt(arr[i++])) {}
            return str
        }
        if (baseIn < 37) {
            nStr = nStr.toLowerCase()
        }
        if ((e = nStr.indexOf(".")) > -1) {
            e = nStr.length - e - 1;
            dvs = strToArr(new BigNumber(baseIn)["pow"](e)["toF"](), 10);
            nArr = nStr.split(".");
            dvd = strToArr(nArr[1]);
            nArr = strToArr(nArr[0]);
            fracBN = divide(dvd, dvs, dvd.length - dvs.length, sign, baseOut, nArr[nArr.length - 1] & 1);
            fracArr = fracBN.c;
            if (e = fracBN.e) {
                for (; ++e; fracArr.unshift(0)) {}
                nStr = arrToStr(nArr) + "." + arrToStr(fracArr)
            } else {
                if (fracArr[0]) {
                    if (nArr[e = nArr.length - 1] < baseOut - 1) {
                        ++nArr[e];
                        nStr = arrToStr(nArr)
                    } else {
                        nStr = new BigNumber(arrToStr(nArr), baseOut)["plus"](ONE)["toS"](baseOut)
                    }
                } else {
                    nStr = arrToStr(nArr)
                }
            }
        } else {
            nStr = arrToStr(strToArr(nStr))
        }
        return nStr
    }

    function divide(dvd, dvs, exp, s, base, isOdd) {
        var dvsL, dvsT, next, cmp, remI, dvsZ = dvs.slice(),
            dvdI = dvsL = dvs.length,
            dvdL = dvd.length,
            rem = dvd.slice(0, dvsL),
            remL = rem.length,
            quo = new BigNumber(ONE),
            qc = quo.c = [],
            qi = 0,
            dig = DECIMAL_PLACES + (quo.e = exp) + 1;
        quo.s = s;
        s = dig < 0 ? 0 : dig;
        for (; remL++ < dvsL; rem.push(0)) {}
        dvsZ.unshift(0);
        do {
            for (next = 0; next < base; next++) {
                if (dvsL != (remL = rem.length)) {
                    cmp = dvsL > remL ? 1 : -1
                } else {
                    for (remI = -1, cmp = 0; ++remI < dvsL;) {
                        if (dvs[remI] != rem[remI]) {
                            cmp = dvs[remI] > rem[remI] ? 1 : -1;
                            break
                        }
                    }
                }
                if (cmp < 0) {
                    for (dvsT = remL == dvsL ? dvs : dvsZ; remL;) {
                        if (rem[--remL] < dvsT[remL]) {
                            for (remI = remL; remI && !rem[--remI]; rem[remI] = base - 1) {}--rem[remI];
                            rem[remL] += base
                        }
                        rem[remL] -= dvsT[remL]
                    }
                    for (; !rem[0]; rem.shift()) {}
                } else {
                    break
                }
            }
            qc[qi++] = cmp ? next : ++next;
            rem[0] && cmp ? (rem[remL] = dvd[dvdI] || 0) : (rem = [dvd[dvdI]])
        } while ((dvdI++ < dvdL || rem[0] != null) && s--);
        if (!qc[0] && qi != 1) {
            --quo.e;
            qc.shift()
        }
        if (qi > dig) {
            rnd(quo, DECIMAL_PLACES, base, isOdd, rem[0] != null)
        }
        if (quo.e > MAX_EXP) {
            quo.c = quo.e = null
        } else {
            if (quo.e < MIN_EXP) {
                quo.c = [quo.e = 0]
            }
        }
        return quo
    }

    function format(n, d, exp) {
        var i = d - (n = new BigNumber(n))["e"],
            c = n.c;
        if (!c) {
            return n.toS()
        }
        if (c.length > ++d) {
            rnd(n, i, 10)
        }
        i = c[0] == 0 ? i + 1 : exp ? d : n.e + i + 1;
        for (; c.length < i; c.push(0)) {}
        i = n.e;
        return exp == 1 || exp == 2 && (--d < i || i <= TO_EXP_NEG) ? (n.s < 0 && c[0] ? "-" : "") + (c.length > 1 ? (c.splice(1, 0, "."), c.join("")) : c[0]) + (i < 0 ? "e" : "e+") + i : n.toS()
    }

    function rnd(x, dp, base, isOdd, r) {
        var xc = x.c,
            isNeg = x.s < 0,
            half = base / 2,
            i = x.e + dp + 1,
            next = xc[i],
            more = r || i < 0 || xc[i + 1] != null;
        r = ROUNDING_MODE < 4 ? (next != null || more) && (ROUNDING_MODE == 0 || ROUNDING_MODE == 2 && !isNeg || ROUNDING_MODE == 3 && isNeg) : next > half || next == half && (ROUNDING_MODE == 4 || more || ROUNDING_MODE == 6 && (xc[i - 1] & 1 || !dp && isOdd) || ROUNDING_MODE == 7 && !isNeg || ROUNDING_MODE == 8 && isNeg);
        if (i < 1 || !xc[0]) {
            xc.length = 0;
            xc.push(0);
            if (r) {
                xc[0] = 1;
                x.e = -dp
            } else {
                x.e = 0
            }
            return x
        }
        xc.length = i--;
        if (r) {
            for (--base; ++xc[i] > base;) {
                xc[i] = 0;
                if (!i--) {
                    ++x.e;
                    xc.unshift(1)
                }
            }
        }
        for (i = xc.length; !xc[--i]; xc.pop()) {}
        return x
    }

    function setMode(x, dp, rm) {
        var r = ROUNDING_MODE;
        ROUNDING_MODE = rm;
        x = new BigNumber(x);
        x.c && rnd(x, dp, 10);
        ROUNDING_MODE = r;
        return x
    }
    P.abs = P.absoluteValue = function() {
        var x = new BigNumber(this);
        if (x.s < 0) {
            x.s = 1
        }
        return x
    };
    P.ceil = function() {
        return setMode(this, 0, 2)
    };
    P.comparedTo = P.cmp = function(y, b) {
        var a, x = this,
            xc = x.c,
            yc = (id = -id, y = new BigNumber(y, b))["c"],
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;
        if (!i || !j) {
            return null
        }
        a = xc && !xc[0], b = yc && !yc[0];
        if (a || b) {
            return a ? b ? 0 : -j : i
        }
        if (i != j) {
            return i
        }
        if (a = i < 0, b = k == l, !xc || !yc) {
            return b ? 0 : !xc ^ a ? 1 : -1
        }
        if (!b) {
            return k > l ^ a ? 1 : -1
        }
        for (i = -1, j = (k = xc.length) < (l = yc.length) ? k : l; ++i < j;) {
            if (xc[i] != yc[i]) {
                return xc[i] > yc[i] ^ a ? 1 : -1
            }
        }
        return k == l ? 0 : k > l ^ a ? 1 : -1
    };
    P.decimalPlaces = P.dp = function() {
        var dp;
        if (this["c"]) {
            dp = this["c"].length - this["e"] - 1;
            return dp < 0 ? 0 : dp
        }
        return null
    };
    P.dividedBy = P.div = function(y, b) {
        var xc = this["c"],
            xe = this["e"],
            xs = this["s"],
            yc = (id = 2, y = new BigNumber(y, b))["c"],
            ye = y.e,
            ys = y.s,
            s = xs == ys ? 1 : -1;
        return !xe && (!xc || !xc[0]) || !ye && (!yc || !yc[0]) ? new BigNumber(!xs || !ys || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0) : divide(xc, yc, xe - ye, s, 10)
    };
    P.equals = P.eq = function(n, b) {
        id = 3;
        return this["cmp"](n, b) === 0
    };
    P.floor = function() {
        return setMode(this, 0, 3)
    };
    P.greaterThan = P.gt = function(n, b) {
        id = 4;
        return this["cmp"](n, b) > 0
    };
    P.greaterThanOrEqualTo = P.gte = function(n, b) {
        id = 5;
        return (b = this["cmp"](n, b)) == 1 || b === 0
    };
    P.isFinite = P.isF = function() {
        return !!this["c"]
    };
    P.isNaN = function() {
        return !this["s"]
    };
    P.isNegative = P.isNeg = function() {
        return this["s"] < 0
    };
    P.isZero = P.isZ = function() {
        return !!this["c"] && this["c"][0] == 0
    };
    P.lessThan = P.lt = function(n, b) {
        id = 6;
        return this["cmp"](n, b) < 0
    };
    P.lessThanOrEqualTo = P.lte = function(n, b) {
        id = 7;
        return (b = this["cmp"](n, b)) == -1 || b === 0
    };
    P.minus = function(y, b) {
        var d, i, j, xLTy, x = this,
            a = x.s;
        b = (id = 8, y = new BigNumber(y, b))["s"];
        if (!a || !b) {
            return new BigNumber(NaN)
        }
        if (a != b) {
            return y.s = -b, x.plus(y)
        }
        var xc = x.c,
            xe = x.e,
            yc = y.c,
            ye = y.e;
        if (!xe || !ye) {
            if (!xc || !yc) {
                return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN)
            }
            if (!xc[0] || !yc[0]) {
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0)
            }
        }
        if (xc = xc.slice(), a = xe - ye) {
            d = (xLTy = a < 0) ? (a = -a, xc) : (ye = xe, yc);
            for (d.reverse(), b = a; b--; d.push(0)) {}
            d.reverse()
        } else {
            j = ((xLTy = xc.length < yc.length) ? xc : yc).length;
            for (a = b = 0; b < j; b++) {
                if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break
                }
            }
        }
        if (xLTy) {
            d = xc, xc = yc, yc = d;
            y.s = -y.s
        }
        if ((b = -((j = xc.length) - yc.length)) > 0) {
            for (; b--; xc[j++] = 0) {}
        }
        for (b = yc.length; b > a;) {
            if (xc[--b] < yc[b]) {
                for (i = b; i && !xc[--i]; xc[i] = 9) {}--xc[i];
                xc[b] += 10
            }
            xc[b] -= yc[b]
        }
        for (; xc[--j] == 0; xc.pop()) {}
        for (; xc[0] == 0; xc.shift(), --ye) {}
        if (ye < MIN_EXP || !xc[0]) {
            if (!xc[0]) {
                y.s = ROUNDING_MODE == 3 ? -1 : 1
            }
            xc = [ye = 0]
        }
        return y.c = xc, y.e = ye, y
    };
    P.modulo = P.mod = function(y, b) {
        var x = this,
            xc = x.c,
            yc = (id = 9, y = new BigNumber(y, b))["c"],
            i = x.s,
            j = y.s;
        b = !i || !j || yc && !yc[0];
        if (b || xc && !xc[0]) {
            return new BigNumber(b ? NaN : x)
        }
        x.s = y.s = 1;
        b = y.cmp(x) == 1;
        x.s = i, y.s = j;
        return b ? new BigNumber(x) : (i = DECIMAL_PLACES, j = ROUNDING_MODE, DECIMAL_PLACES = 0, ROUNDING_MODE = 1, x = x.div(y), DECIMAL_PLACES = i, ROUNDING_MODE = j, this["minus"](x.times(y)))
    };
    P.negated = P.neg = function() {
        var x = new BigNumber(this);
        return x.s = -x.s || null, x
    };
    P.plus = function(y, b) {
        var d, x = this,
            a = x.s;
        b = (id = 10, y = new BigNumber(y, b))["s"];
        if (!a || !b) {
            return new BigNumber(NaN)
        }
        if (a != b) {
            return y.s = -b, x.minus(y)
        }
        var xe = x.e,
            xc = x.c,
            ye = y.e,
            yc = y.c;
        if (!xe || !ye) {
            if (!xc || !yc) {
                return new BigNumber(a / 0)
            }
            if (!xc[0] || !yc[0]) {
                return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0)
            }
        }
        if (xc = xc.slice(), a = xe - ye) {
            d = a > 0 ? (ye = xe, yc) : (a = -a, xc);
            for (d.reverse(); a--; d.push(0)) {}
            d.reverse()
        }
        if (xc.length - yc.length < 0) {
            d = yc, yc = xc, xc = d
        }
        for (a = yc.length, b = 0; a; b = (xc[--a] = xc[a] + yc[a] + b) / 10 ^ 0, xc[a] %= 10) {}
        if (b) {
            xc.unshift(b);
            if (++ye > MAX_EXP) {
                xc = ye = null
            }
        }
        for (a = xc.length; xc[--a] == 0; xc.pop()) {}
        return y.c = xc, y.e = ye, y
    };
    P.toPower = P.pow = function(e) {
        var i = e * 0 == 0 ? e | 0 : e,
            x = new BigNumber(this),
            y = new BigNumber(ONE);
        if ((((outOfRange = e < -MAX_POWER || e > MAX_POWER) && (i = e * 1 / 0)) || parse(e) != e && e !== 0 && !(i = NaN)) && !ifExceptionsThrow(e, "exponent", "pow") || !i) {
            return new BigNumber(Math.pow(x.toS(), i))
        }
        for (i = i < 0 ? -i : i;;) {
            if (i & 1) {
                y = y.times(x)
            }
            i >>= 1;
            if (!i) {
                break
            }
            x = x.times(x)
        }
        return e < 0 ? ONE.div(y) : y
    };
    P.round = function(dp, rm) {
        dp = dp == null || (((outOfRange = dp < 0 || dp > MAX) || parse(dp) != dp) && !ifExceptionsThrow(dp, "decimal places", "round")) ? 0 : dp | 0;
        rm = rm == null || (((outOfRange = rm < 0 || rm > 8) || parse(rm) != rm && rm !== 0) && !ifExceptionsThrow(rm, "mode", "round")) ? ROUNDING_MODE : rm | 0;
        return setMode(this, dp, rm)
    };
    P.squareRoot = P.sqrt = function() {
        var n, r, re, t, x = this,
            c = x.c,
            s = x.s,
            e = x.e,
            dp = DECIMAL_PLACES,
            rm = ROUNDING_MODE,
            half = new BigNumber("0.5");
        if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0)
        }
        s = Math.sqrt(x.toS());
        ROUNDING_MODE = 1;
        if (s == 0 || s == 1 / 0) {
            n = c.join("");
            if (!(n.length + e & 1)) {
                n += "0"
            }
            r = new BigNumber(Math.sqrt(n) + "");
            if (!r.c) {
                r.c = [1]
            }
            r.e = (((e + 1) / 2) | 0) - (e < 0 || e & 1)
        } else {
            r = new BigNumber(n = s.toString())
        }
        re = r.e;
        s = re + (DECIMAL_PLACES += 4);
        if (s < 3) {
            s = 0
        }
        e = s;
        for (;;) {
            t = r;
            r = half.times(t.plus(x.div(t)));
            if (t.c.slice(0, s).join("") === r.c.slice(0, s).join("")) {
                c = r.c;
                s = s - (n && r.e < re);
                if (c[s] == 9 && c[s - 1] == 9 && c[s - 2] == 9 && (c[s - 3] == 9 || n && c[s - 3] == 4)) {
                    if (n && c[s - 3] == 9) {
                        t = r.round(dp, 0);
                        if (t.times(t)["eq"](x)) {
                            ROUNDING_MODE = rm;
                            DECIMAL_PLACES = dp;
                            return t
                        }
                    }
                    DECIMAL_PLACES += 4;
                    s += 4;
                    n = ""
                } else {
                    if (!c[e] && !c[e - 1] && !c[e - 2] && (!c[e - 3] || c[e - 3] == 5)) {
                        if (c.length > e - 2) {
                            c.length = e - 2
                        }
                        if (!r.times(r)["eq"](x)) {
                            while (c.length < e - 3) {
                                c.push(0)
                            }
                            c[e - 3]++
                        }
                    }
                    ROUNDING_MODE = rm;
                    rnd(r, DECIMAL_PLACES = dp, 10);
                    return r
                }
            }
        }
    };
    P.times = function(y, b) {
        var c, x = this,
            xc = x.c,
            yc = (id = 11, y = new BigNumber(y, b))["c"],
            i = x.e,
            j = y.e,
            a = x.s;
        y.s = a == (b = y.s) ? 1 : -1;
        if (!i && (!xc || !xc[0]) || !j && (!yc || !yc[0])) {
            return new BigNumber(!a || !b || xc && !xc[0] && !yc || yc && !yc[0] && !xc ? NaN : !xc || !yc ? y.s / 0 : y.s * 0)
        }
        y.e = i + j;
        if ((a = xc.length) < (b = yc.length)) {
            c = xc, xc = yc, yc = c, j = a, a = b, b = j
        }
        for (j = a + b, c = []; j--; c.push(0)) {}
        for (i = b - 1; i > -1; i--) {
            for (b = 0, j = a + i; j > i; b = c[j] + yc[i] * xc[j - i - 1] + b, c[j--] = b % 10 | 0, b = b / 10 | 0) {}
            if (b) {
                c[j] = (c[j] + b) % 10
            }
        }
        b && ++y.e;
        !c[0] && c.shift();
        for (j = c.length; !c[--j]; c.pop()) {}
        y.c = y.e > MAX_EXP ? (y.e = null) : y.e < MIN_EXP ? [y.e = 0] : c;
        return y
    };
    P.toExponential = P.toE = function(dp) {
        return format(this, (dp == null || ((outOfRange = dp < 0 || dp > MAX) || parse(dp) != dp && dp !== 0) && !ifExceptionsThrow(dp, "decimal places", "toE")) && this["c"] ? this["c"].length - 1 : dp | 0, 1)
    };
    P.toFixed = P.toF = function(dp) {
        var n, str, d, x = this;
        if (!(dp == null || ((outOfRange = dp < 0 || dp > MAX) || parse(dp) != dp && dp !== 0) && !ifExceptionsThrow(dp, "decimal places", "toF"))) {
            d = x.e + (dp | 0)
        }
        n = TO_EXP_NEG, dp = TO_EXP_POS;
        TO_EXP_NEG = -(TO_EXP_POS = 1 / 0);
        if (d == str) {
            str = x.toS()
        } else {
            str = format(x, d);
            if (x.s < 0 && x.c) {
                if (!x.c[0]) {
                    str = str.replace(/^-/, "")
                } else {
                    if (str.indexOf("-") < 0) {
                        str = "-" + str
                    }
                }
            }
        }
        TO_EXP_NEG = n, TO_EXP_POS = dp;
        return str
    };
    P.toFraction = P.toFr = function(maxD) {
        var q, frac, n0, d0, d2, n, e, n1 = d0 = new BigNumber(ONE),
            d1 = n0 = new BigNumber("0"),
            x = this,
            xc = x.c,
            exp = MAX_EXP,
            dp = DECIMAL_PLACES,
            rm = ROUNDING_MODE,
            d = new BigNumber(ONE);
        if (!xc) {
            return x.toS()
        }
        e = d.e = xc.length - x.e - 1;
        if (maxD == null || (!(id = 12, n = new BigNumber(maxD))["s"] || (outOfRange = n.cmp(n1) < 0 || !n.c) || (ERRORS && n.e < n.c.length - 1)) && !ifExceptionsThrow(maxD, "max denominator", "toFr") || (maxD = n)["cmp"](d) > 0) {
            maxD = e > 0 ? d : n1
        }
        MAX_EXP = 1 / 0;
        n = new BigNumber(xc.join(""));
        for (DECIMAL_PLACES = 0, ROUNDING_MODE = 1;;) {
            q = n.div(d);
            d2 = d0.plus(q.times(d1));
            if (d2.cmp(maxD) == 1) {
                break
            }
            d0 = d1, d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2
        }
        d2 = maxD.minus(d0)["div"](d1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        DECIMAL_PLACES = e * 2;
        ROUNDING_MODE = rm;
        frac = n1.div(d1)["minus"](x)["abs"]()["cmp"](n0.div(d0)["minus"](x)["abs"]()) < 1 ? [n1.toS(), d1.toS()] : [n0.toS(), d0.toS()];
        return MAX_EXP = exp, DECIMAL_PLACES = dp, frac
    };
    P.toPrecision = P.toP = function(sd) {
        return sd == null || (((outOfRange = sd < 1 || sd > MAX) || parse(sd) != sd) && !ifExceptionsThrow(sd, "precision", "toP")) ? this["toS"]() : format(this, --sd | 0, 2)
    };
    P.toString = P.toS = function(b) {
        var u, str, strL, x = this,
            xe = x.e;
        if (xe === null) {
            str = x.s ? "Infinity" : "NaN"
        } else {
            if (b === u && (xe <= TO_EXP_NEG || xe >= TO_EXP_POS)) {
                return format(x, x.c.length - 1, 1)
            } else {
                str = x.c.join("");
                if (xe < 0) {
                    for (; ++xe; str = "0" + str) {}
                    str = "0." + str
                } else {
                    if (strL = str.length, xe > 0) {
                        if (++xe > strL) {
                            for (xe -= strL; xe--; str += "0") {}
                        } else {
                            if (xe < strL) {
                                str = str.slice(0, xe) + "." + str.slice(xe)
                            }
                        }
                    } else {
                        if (u = str.charAt(0), strL > 1) {
                            str = u + "." + str.slice(1)
                        } else {
                            if (u == "0") {
                                return u
                            }
                        }
                    }
                }
                if (b != null) {
                    if (!(outOfRange = !(b >= 2 && b < 65)) && (b == (b | 0) || !ERRORS)) {
                        str = convert(str, b | 0, 10, x.s);
                        if (str == "0") {
                            return str
                        }
                    } else {
                        ifExceptionsThrow(b, "base", "toS")
                    }
                }
            }
        }
        return x.s < 0 ? "-" + str : str
    };
    P.toNumber = P.toN = function() {
        var x = this;
        return +x || (x.s ? 0 * x.s : NaN)
    };
    P.valueOf = P.toJSON = function() {
        return this["toS"]()
    };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = BigNumber
    } else {
        if (typeof define == "function" && define.amd) {
            define(function() {
                return BigNumber
            })
        } else {
            global.BigNumber = BigNumber
        }
    }
})(this);
/*
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else {
        factory(jQuery)
    }
}(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                if (options && options.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.")
                }
                return
            }
            var validator = $.data(this[0], "validator");
            if (validator) {
                return validator
            }
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options, this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                this.validateDelegate(":submit", "click", function(event) {
                    if (validator.settings.submitHandler) {
                        validator.submitButton = event.target
                    }
                    if ($(event.target).hasClass("cancel")) {
                        validator.cancelSubmit = true
                    }
                    if ($(event.target).attr("formnovalidate") !== undefined) {
                        validator.cancelSubmit = true
                    }
                });
                this.submit(function(event) {
                    if (validator.settings.debug) {
                        event.preventDefault()
                    }

                    function handle() {
                        var hidden, result;
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) {
                                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm)
                            }
                            result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                            if (validator.submitButton) {
                                hidden.remove()
                            }
                            if (result !== undefined) {
                                return result
                            }
                            return false
                        }
                        return true
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle()
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false
                        }
                        return handle()
                    } else {
                        validator.focusInvalid();
                        return false
                    }
                })
            }
            return validator
        },
        valid: function() {
            var valid, validator;
            if ($(this[0]).is("form")) {
                valid = this.validate().form()
            } else {
                valid = true;
                validator = $(this[0].form).validate();
                this.each(function() {
                    valid = validator.element(this) && valid
                })
            }
            return valid
        },
        removeAttrs: function(attributes) {
            var result = {},
                $element = this;
            $.each(attributes.split(/\s/), function(index, value) {
                result[value] = $element.attr(value);
                $element.removeAttr(value)
            });
            return result
        },
        rules: function(command, argument) {
            var element = this[0],
                settings, staticRules, existingRules, data, param, filtered;
            if (command) {
                settings = $.data(element.form, "validator").settings;
                staticRules = settings.rules;
                existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        delete existingRules.messages;
                        staticRules[element.name] = existingRules;
                        if (argument.messages) {
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages)
                        }
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules
                        }
                        filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                            if (method === "required") {
                                $(element).removeAttr("aria-required")
                            }
                        });
                        return filtered
                }
            }
            data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
                $(element).attr("aria-required", "true")
            }
            if (data.remote) {
                param = data.remote;
                delete data.remote;
                data = $.extend(data, {
                    remote: param
                })
            }
            return data
        }
    });
    $.extend($.expr[":"], {
        blank: function(a) {
            return !$.trim("" + $(a).val())
        },
        filled: function(a) {
            return !!$.trim("" + $(a).val())
        },
        unchecked: function(a) {
            return !$(a).prop("checked")
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init()
    };
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args)
            }
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1)
        }
        if (params.constructor !== Array) {
            params = [params]
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return n
            })
        });
        return source
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.hideThese(this.errorsFor(element))
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element)
                }
            },
            onkeyup: function(element, event) {
                if (event.which === 9 && this.elementValue(element) === "") {
                    return
                } else {
                    if (element.name in this.submitted || element === this.lastElement) {
                        this.element(element)
                    }
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted) {
                    this.element(element)
                } else {
                    if (element.parentNode.name in this.submitted) {
                        this.element(element.parentNode)
                    }
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass)
                } else {
                    $(element).addClass(errorClass).removeClass(validClass)
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass)
                } else {
                    $(element).removeClass(errorClass).addClass(validClass)
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {}),
                    rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/)
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key
                    })
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value)
                });

                function delegate(event) {
                    var validator = $.data(this[0].form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, ""),
                        settings = validator.settings;
                    if (settings[eventType] && !this.is(settings.ignore)) {
                        settings[eventType].call(validator, this[0], event)
                    }
                }
                $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", delegate).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);
                if (this.settings.invalidHandler) {
                    $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                }
                $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this])
                }
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i])
                }
                return this.valid()
            },
            element: function(element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    result = true;
                this.lastElement = checkElement;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name]
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);
                    result = this.check(checkElement) !== false;
                    if (result) {
                        delete this.invalid[checkElement.name]
                    } else {
                        this.invalid[checkElement.name] = true
                    }
                }
                $(element).attr("aria-invalid", !result);
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers)
                }
                this.showErrors();
                return result
            },
            showErrors: function(errors) {
                if (errors) {
                    $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) {
                        this.errorList.push({
                            message: errors[name],
                            element: this.findByName(name)[0]
                        })
                    }
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            },
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm()
                }
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(obj) {
                var count = 0,
                    i;
                for (i in obj) {
                    count++
                }
                return count
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name
                }).length === 1 && lastActive
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    if (!this.name && validator.settings.debug && window.console) {
                        console.error("%o has no name assigned", this)
                    }
                    if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
                        return false
                    }
                    rulesCache[this.name] = true;
                    return true
                })
            },
            clean: function(selector) {
                return $(selector)[0]
            },
            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element)
            },
            elementValue: function(element) {
                var val, $element = $(element),
                    type = element.type;
                if (type === "radio" || type === "checkbox") {
                    return $("input[name='" + element.name + "']:checked").val()
                } else {
                    if (type === "number" && typeof element.validity !== "undefined") {
                        return element.validity.badInput ? false : $element.val()
                    }
                }
                val = $element.val();
                if (typeof val === "string") {
                    return val.replace(/\r/g, "")
                }
                return val
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules(),
                    rulesCount = $.map(rules, function(n, i) {
                        return i
                    }).length,
                    dependencyMismatch = false,
                    val = this.elementValue(element),
                    result, method, rule;
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        result = $.validator.methods[method].call(this, val, element, rule.parameters);
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue
                        }
                        dependencyMismatch = false;
                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e)
                        }
                        throw e
                    }
                }
                if (dependencyMismatch) {
                    return
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element)
                }
                return true
            },
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg")
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method])
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i]
                    }
                }
                return undefined
            },
            defaultMessage: function(element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>")
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element)
                } else {
                    if (theregex.test(message)) {
                        message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters)
                    }
                }
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper))
                }
                return toToggle
            },
            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.showLabel(error.element, error.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i])
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(element, message) {
                var place, group, errorID, error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    error.html(message)
                } else {
                    error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                    place = error;
                    if (this.settings.wrapper) {
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place)
                    } else {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement(place, $(element))
                        } else {
                            place.insertAfter(element)
                        }
                    }
                    if (error.is("label")) {
                        error.attr("for", elementID)
                    } else {
                        if (error.parents("label[for='" + elementID + "']").length === 0) {
                            errorID = error.attr("id").replace(/(:|\.|\[|\])/g, "\\$1");
                            if (!describedBy) {
                                describedBy = errorID
                            } else {
                                if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
                                    describedBy += " " + errorID
                                }
                            }
                            $(element).attr("aria-describedby", describedBy);
                            group = this.groups[element.name];
                            if (group) {
                                $.each(this.groups, function(name, testgroup) {
                                    if (testgroup === group) {
                                        $("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"))
                                    }
                                })
                            }
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success)
                    } else {
                        this.settings.success(error, element)
                    }
                }
                this.toShow = this.toShow.add(error)
            },
            errorsFor: function(element) {
                var name = this.idOrName(element),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                if (describer) {
                    selector = selector + ", #" + describer.replace(/\s+/g, ", #")
                }
                return this.errors().filter(selector)
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name)
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) {
                    element = this.findByName(element.name)
                }
                return $(element).not(this.settings.ignore)[0]
            },
            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type)
            },
            findByName: function(name) {
                return $(this.currentForm).find("[name='" + name + "']")
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", element).length;
                    case "input":
                        if (this.checkable(element)) {
                            return this.findByName(element.name).filter(":checked").length
                        }
                }
                return value.length
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true
            },
            dependTypes: {
                "boolean": function(param) {
                    return param
                },
                string: function(param, element) {
                    return !!$(param, element.form).length
                },
                "function": function(param, element) {
                    return param(element)
                }
            },
            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch"
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    this.pending[element.name] = true
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[element.name];
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false
                } else {
                    if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                        $(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                }
            },
            previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules
            } else {
                $.extend(this.classRuleSettings, className)
            }
        },
        classRules: function(element) {
            var rules = {},
                classes = $(element).attr("class");
            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this])
                    }
                })
            }
            return rules
        },
        attributeRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                if (method === "required") {
                    value = element.getAttribute(method);
                    if (value === "") {
                        value = true
                    }
                    value = !!value
                } else {
                    value = $element.attr(method)
                }
                if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
                    value = Number(value)
                }
                if (value || value === 0) {
                    rules[method] = value
                } else {
                    if (type === method && type !== "range") {
                        rules[method] = true
                    }
                }
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength
            }
            return rules
        },
        dataRules: function(element) {
            var method, value, rules = {},
                $element = $(element);
            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                if (value !== undefined) {
                    rules[method] = value
                }
            }
            return rules
        },
        staticRules: function(element) {
            var rules = {},
                validator = $.data(element.form, "validator");
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {}
            }
            return rules
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true
                    } else {
                        delete rules[prop]
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter
            });
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this])
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])]
                    } else {
                        if (typeof rules[this] === "string") {
                            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                            rules[this] = [Number(parts[0]), Number(parts[1])]
                        }
                    }
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min != null && rules.max != null) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max
                }
                if (rules.minlength != null && rules.maxlength != null) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength
                }
            }
            return rules
        },
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true
                });
                data = transformed
            }
            return data
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name))
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) {
                    return "dependency-mismatch"
                }
                if (element.nodeName.toLowerCase() === "select") {
                    var val = $(element).val();
                    return val && val.length > 0
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0
                }
                return $.trim(value).length > 0
            },
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
            },
            url: function(value, element) {
                return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString())
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
            },
            number: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value)
            },
            creditcard: function(value, element) {
                if (this.optional(element)) {
                    return "dependency-mismatch"
                }
                if (/[^0-9 \-]+/.test(value)) {
                    return false
                }
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false,
                    n, cDigit;
                value = value.replace(/\D/g, "");
                if (value.length < 13 || value.length > 19) {
                    return false
                }
                for (n = value.length - 1; n >= 0; n--) {
                    cDigit = value.charAt(n);
                    nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9) {
                            nDigit -= 9
                        }
                    }
                    nCheck += nDigit;
                    bEven = !bEven
                }
                return (nCheck % 10) === 0
            },
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param
            },
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param
            },
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1])
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1])
            },
            equalTo: function(value, element, param) {
                var target = $(param);
                if (this.settings.onfocusout) {
                    target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        $(element).valid()
                    })
                }
                return value === target.val()
            },
            remote: function(value, element, param) {
                if (this.optional(element)) {
                    return "dependency-mismatch"
                }
                var previous = this.previousValue(element),
                    validator, data;
                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {}
                }
                previous.originalMessage = this.settings.messages[element.name].remote;
                this.settings.messages[element.name].remote = previous.message;
                param = typeof param === "string" && {
                    url: param
                } || param;
                if (previous.old === value) {
                    return previous.valid
                }
                previous.old = value;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    url: param,
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true",
                            errors, message, submitted;
                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            delete validator.invalid[element.name];
                            validator.showErrors()
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, "remote");
                            errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors)
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid)
                    }
                }, param));
                return "pending"
            }
        }
    });
    $.format = function deprecated() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var pendingRequests = {},
        ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort()
                }
                pendingRequests[port] = xhr
            }
        })
    } else {
        ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort()
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port]
            }
            return ajax.apply(this, arguments)
        }
    }
    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments)
                }
            })
        }
    })
}));
(function($, document, Math, undefined) {
    var svgElement = function(tag, attrs) {
        var elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
        $(elem).attr(attrs);
        return elem
    };
    var svgSupported = "createElementNS" in document && svgElement("svg", {}).createSVGRect;
    var peity = $.fn.peity = function(type, options) {
        if (svgSupported) {
            this.each(function() {
                var $this = $(this);
                var chart = $this.data("peity");
                if (chart) {
                    if (type) {
                        chart.type = type
                    }
                    $.extend(chart.opts, options)
                } else {
                    chart = new Peity($this, type, $.extend({}, peity.defaults[type], options));
                    $this.change(function() {
                        chart.draw()
                    }).data("peity", chart)
                }
                chart.draw()
            })
        }
        return this
    };
    var Peity = function($el, type, opts) {
        this.$el = $el;
        this.type = type;
        this.opts = opts
    };
    var PeityPrototype = Peity.prototype;
    PeityPrototype.draw = function() {
        peity.graphers[this.type].call(this, this.opts)
    };
    PeityPrototype.fill = function() {
        var fill = this.opts.fill;
        return $.isFunction(fill) ? fill : function(_, i) {
            return fill[i % fill.length]
        }
    };
    PeityPrototype.prepare = function(width, height) {
        if (!this.svg) {
            this.$el.hide().after(this.svg = svgElement("svg", {
                "class": "peity"
            }))
        }
        return $(this.svg).empty().data("peity", this).attr({
            height: height,
            width: width
        })
    };
    PeityPrototype.values = function() {
        return $.map(this.$el.text().split(this.opts.delimiter), function(value) {
            return parseFloat(value)
        })
    };
    peity.defaults = {};
    peity.graphers = {};
    peity.register = function(type, defaults, grapher) {
        this.defaults[type] = defaults;
        this.graphers[type] = grapher
    };
    peity.register("pie", {
        fill: ["#ff9900", "#fff4dd", "#ffc66e"],
        radius: 8
    }, function(opts) {
        if (!opts.delimiter) {
            var delimiter = this.$el.text().match(/[^0-9\.]/);
            opts.delimiter = delimiter ? delimiter[0] : ","
        }
        var values = $.map(this.values(), function(n) {
            return n > 0 ? n : 0
        });
        if (opts.delimiter == "/") {
            var v1 = values[0];
            var v2 = values[1];
            values = [v1, Math.max(0, v2 - v1)]
        }
        var i = 0;
        var length = values.length;
        var sum = 0;
        for (; i < length; i++) {
            sum += values[i]
        }
        if (!sum) {
            length = 2;
            sum = 1;
            values = [0, 1]
        }
        var diameter = opts.radius * 2,
            width = opts.width || diameter,
            height = opts.height || diameter,
            $svg = this.prepare(width, height),
            cx = width / 2,
            cy = height / 2;
        var radius = Math.min(cx, cy),
            innerRadius = opts.innerRadius;
        var pi = Math.PI;
        var fill = this.fill();
        var scale = this.scale = function(value, radius) {
            var radians = value / sum * pi * 2 - pi / 2;
            return [radius * Math.cos(radians) + cx, radius * Math.sin(radians) + cy]
        };
        var cumulative = 0;
        for (i = 0; i < length; i++) {
            var value = values[i],
                portion = value / sum,
                node;
            if (portion == 0) {
                continue
            }
            if (portion == 1) {
                if (innerRadius) {
                    var x2 = cx - 0.01,
                        y1 = cy - radius,
                        y2 = cy - innerRadius;
                    node = svgElement("path", {
                        d: ["M", cx, y1, "A", radius, radius, 0, 1, 1, x2, y1, "L", x2, y2, "A", innerRadius, innerRadius, 0, 1, 0, cx, y2].join(" ")
                    })
                } else {
                    node = svgElement("circle", {
                        cx: cx,
                        cy: cy,
                        r: radius
                    })
                }
            } else {
                var cumulativePlusValue = cumulative + value;
                var d = ["M"].concat(scale(cumulative, radius), "A", radius, radius, 0, portion > 0.5 ? 1 : 0, 1, scale(cumulativePlusValue, radius), "L");
                if (innerRadius) {
                    d = d.concat(scale(cumulativePlusValue, innerRadius), "A", innerRadius, innerRadius, 0, portion > 0.5 ? 1 : 0, 0, scale(cumulative, innerRadius))
                } else {
                    d.push(cx, cy)
                }
                cumulative += value;
                node = svgElement("path", {
                    d: d.join(" ")
                })
            }
            $(node).attr("fill", fill.call(this, value, i, values));
            $svg.append(node)
        }
    });
    peity.register("donut", $.extend(true, {}, peity.defaults.pie), function(opts) {
        if (!opts.innerRadius) {
            opts.innerRadius = opts.radius * 0.5
        }
        peity.graphers.pie.call(this, opts)
    });
    peity.register("line", {
        delimiter: ",",
        fill: "#c6d9fd",
        height: 16,
        min: 0,
        stroke: "#4d89f9",
        strokeWidth: 1,
        width: 32
    }, function(opts) {
        var values = this.values();
        if (values.length == 1) {
            values.push(values[0])
        }
        var max = Math.max.apply(Math, opts.max == undefined ? values : values.concat(opts.max)),
            min = Math.min.apply(Math, opts.min == undefined ? values : values.concat(opts.min)),
            width = opts.width,
            height = opts.height,
            $svg = this.prepare(width, height),
            strokeWidth = opts.strokeWidth,
            diff = max - min;
        height -= strokeWidth;
        var xScale = this.x = function(input) {
            return input * (width / (values.length - 1))
        };
        var yScale = this.y = function(input) {
            var y = height;
            if (diff) {
                y -= ((input - min) / diff) * height
            }
            return y + strokeWidth / 2
        };
        var zero = yScale(Math.max(min, 0)),
            coords = [0, zero];
        for (var i = 0; i < values.length; i++) {
            coords.push(xScale(i), yScale(values[i]))
        }
        coords.push(width, zero);
        $svg.append(svgElement("polygon", {
            fill: opts.fill,
            points: coords.join(" ")
        }));
        if (strokeWidth) {
            $svg.append(svgElement("polyline", {
                fill: "transparent",
                points: coords.slice(2, coords.length - 2).join(" "),
                stroke: opts.stroke,
                "stroke-width": strokeWidth,
                "stroke-linecap": "square"
            }))
        }
    });
    peity.register("bar", {
        delimiter: ",",
        fill: ["#4D89F9"],
        height: 16,
        min: 0,
        padding: 0.1,
        width: 32
    }, function(opts) {
        var values = this.values(),
            max = Math.max.apply(Math, opts.max == undefined ? values : values.concat(opts.max)),
            min = Math.min.apply(Math, opts.min == undefined ? values : values.concat(opts.min)),
            width = opts.width,
            height = opts.height,
            $svg = this.prepare(width, height),
            diff = max - min,
            padding = opts.padding,
            fill = this.fill();
        var xScale = this.x = function(input) {
            return input * width / values.length
        };
        var yScale = this.y = function(input) {
            return height - (diff ? ((input - min) / diff) * height : 1)
        };
        for (var i = 0; i < values.length; i++) {
            var x = xScale(i + padding),
                w = xScale(i + 1 - padding) - x,
                value = values[i],
                valueY = yScale(value),
                y1 = valueY,
                y2 = valueY,
                h;
            if (!diff) {
                h = 1
            } else {
                if (value < 0) {
                    y1 = yScale(Math.min(max, 0))
                } else {
                    y2 = yScale(Math.max(min, 0))
                }
            }
            h = y2 - y1;
            if (h == 0) {
                h = 1;
                if (max > 0 && diff) {
                    y1--
                }
            }
            $svg.append(svgElement("rect", {
                fill: fill.call(this, value, i, values),
                x: x,
                y: y1,
                width: w,
                height: h
            }))
        }
    })
})(jQuery, document, Math);
window.Modernizr = (function(window, document, undefined) {
    var version = "2.8.3",
        Modernizr = {},
        enableClasses = true,
        docElement = document.documentElement,
        mod = "modernizr",
        modElem = document.createElement(mod),
        mStyle = modElem.style,
        inputElem = document.createElement("input"),
        smile = ":)",
        toString = {}.toString,
        prefixes = " -webkit- -moz- -o- -ms- ".split(" "),
        omPrefixes = "Webkit Moz O ms",
        cssomPrefixes = omPrefixes.split(" "),
        domPrefixes = omPrefixes.toLowerCase().split(" "),
        ns = {
            svg: "http://www.w3.org/2000/svg"
        },
        tests = {},
        inputs = {},
        attrs = {},
        classes = [],
        slice = classes.slice,
        featureName, injectElementWithStyles = function(rule, callback, nodes, testnames) {
            var style, ret, node, docOverflow, div = document.createElement("div"),
                body = document.body,
                fakeBody = body || document.createElement("body");
            if (parseInt(nodes, 10)) {
                while (nodes--) {
                    node = document.createElement("div");
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node)
                }
            }
            style = ["&#173;", '<style id="s', mod, '">', rule, "</style>"].join("");
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
                fakeBody.style.background = "";
                fakeBody.style.overflow = "hidden";
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = "hidden";
                docElement.appendChild(fakeBody)
            }
            ret = callback(div, rule);
            if (!body) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow
            } else {
                div.parentNode.removeChild(div)
            }
            return !!ret
        },
        isEventSupported = (function() {
            var TAGNAMES = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };

            function isEventSupported(eventName, element) {
                element = element || document.createElement(TAGNAMES[eventName] || "div");
                eventName = "on" + eventName;
                var isSupported = eventName in element;
                if (!isSupported) {
                    if (!element.setAttribute) {
                        element = document.createElement("div")
                    }
                    if (element.setAttribute && element.removeAttribute) {
                        element.setAttribute(eventName, "");
                        isSupported = is(element[eventName], "function");
                        if (!is(element[eventName], "undefined")) {
                            element[eventName] = undefined
                        }
                        element.removeAttribute(eventName)
                    }
                }
                element = null;
                return isSupported
            }
            return isEventSupported
        })(),
        _hasOwnProperty = ({}).hasOwnProperty,
        hasOwnProp;
    if (!is(_hasOwnProperty, "undefined") && !is(_hasOwnProperty.call, "undefined")) {
        hasOwnProp = function(object, property) {
            return _hasOwnProperty.call(object, property)
        }
    } else {
        hasOwnProp = function(object, property) {
            return ((property in object) && is(object.constructor.prototype[property], "undefined"))
        }
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {
            var target = this;
            if (typeof target != "function") {
                throw new TypeError()
            }
            var args = slice.call(arguments, 1),
                bound = function() {
                    if (this instanceof bound) {
                        var F = function() {};
                        F.prototype = target.prototype;
                        var self = new F();
                        var result = target.apply(self, args.concat(slice.call(arguments)));
                        if (Object(result) === result) {
                            return result
                        }
                        return self
                    } else {
                        return target.apply(that, args.concat(slice.call(arguments)))
                    }
                };
            return bound
        }
    }

    function setCss(str) {
        mStyle.cssText = str
    }

    function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ";") + (str2 || ""))
    }

    function is(obj, type) {
        return typeof obj === type
    }

    function contains(str, substr) {
        return !!~("" + str).indexOf(substr)
    }

    function testProps(props, prefixed) {
        for (var i in props) {
            var prop = props[i];
            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                return prefixed == "pfx" ? prop : true
            }
        }
        return false
    }

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {
                if (elem === false) {
                    return props[i]
                }
                if (is(item, "function")) {
                    return item.bind(elem || obj)
                }
                return item
            }
        }
        return false
    }

    function testPropsAll(prop, prefixed, elem) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
        if (is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed)
        } else {
            props = (prop + " " + (domPrefixes).join(ucProp + " ") + ucProp).split(" ");
            return testDOMProps(props, prefixed, elem)
        }
    }
    tests.flexbox = function() {
        return testPropsAll("flexWrap")
    };
    tests.canvas = function() {
        var elem = document.createElement("canvas");
        return !!(elem.getContext && elem.getContext("2d"))
    };
    tests.canvastext = function() {
        return !!(Modernizr.canvas && is(document.createElement("canvas").getContext("2d").fillText, "function"))
    };
    tests.webgl = function() {
        return !!window.WebGLRenderingContext
    };
    tests.touch = function() {
        var bool;
        if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            bool = true
        } else {
            injectElementWithStyles(["@media (", prefixes.join("touch-enabled),("), mod, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(node) {
                bool = node.offsetTop === 9
            })
        }
        return bool
    };
    tests.geolocation = function() {
        return "geolocation" in navigator
    };
    tests.postmessage = function() {
        return !!window.postMessage
    };
    tests.websqldatabase = function() {
        return !!window.openDatabase
    };
    tests.indexedDB = function() {
        return !!testPropsAll("indexedDB", window)
    };
    tests.hashchange = function() {
        return isEventSupported("hashchange", window) && (document.documentMode === undefined || document.documentMode > 7)
    };
    tests.history = function() {
        return !!(window.history && history.pushState)
    };
    tests.draganddrop = function() {
        var div = document.createElement("div");
        return ("draggable" in div) || ("ondragstart" in div && "ondrop" in div)
    };
    tests.websockets = function() {
        return "WebSocket" in window || "MozWebSocket" in window
    };
    tests.rgba = function() {
        setCss("background-color:rgba(150,255,150,.5)");
        return contains(mStyle.backgroundColor, "rgba")
    };
    tests.hsla = function() {
        setCss("background-color:hsla(120,40%,100%,.5)");
        return contains(mStyle.backgroundColor, "rgba") || contains(mStyle.backgroundColor, "hsla")
    };
    tests.multiplebgs = function() {
        setCss("background:url(https://),url(https://),red url(https://)");
        return (/(url\s*\(.*?){3}/).test(mStyle.background)
    };
    tests.backgroundsize = function() {
        return testPropsAll("backgroundSize")
    };
    tests.borderimage = function() {
        return testPropsAll("borderImage")
    };
    tests.borderradius = function() {
        return testPropsAll("borderRadius")
    };
    tests.boxshadow = function() {
        return testPropsAll("boxShadow")
    };
    tests.textshadow = function() {
        return document.createElement("div").style.textShadow === ""
    };
    tests.opacity = function() {
        setCssAll("opacity:.55");
        return (/^0.55$/).test(mStyle.opacity)
    };
    tests.cssanimations = function() {
        return testPropsAll("animationName")
    };
    tests.csscolumns = function() {
        return testPropsAll("columnCount")
    };
    tests.cssgradients = function() {
        var str1 = "background-image:",
            str2 = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            str3 = "linear-gradient(left top,#9f9, white);";
        setCss((str1 + "-webkit- ".split(" ").join(str2 + str1) + prefixes.join(str3 + str1)).slice(0, -str1.length));
        return contains(mStyle.backgroundImage, "gradient")
    };
    tests.cssreflections = function() {
        return testPropsAll("boxReflect")
    };
    tests.csstransforms = function() {
        return !!testPropsAll("transform")
    };
    tests.csstransforms3d = function() {
        var ret = !!testPropsAll("perspective");
        if (ret && "webkitPerspective" in docElement.style) {
            injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(node, rule) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3
            })
        }
        return ret
    };
    tests.csstransitions = function() {
        return testPropsAll("transition")
    };
    tests.fontface = function() {
        var bool;
        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
            var style = document.getElementById("smodernizr"),
                sheet = style.sheet || style.styleSheet,
                cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || "") : "";
            bool = /src/i.test(cssText) && cssText.indexOf(rule.split(" ")[0]) === 0
        });
        return bool
    };
    tests.generatedcontent = function() {
        var bool;
        injectElementWithStyles(["#", mod, "{font:0/0 a}#", mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(""), function(node) {
            bool = node.offsetHeight >= 3
        });
        return bool
    };
    tests.video = function() {
        var elem = document.createElement("video"),
            bool = false;
        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "");
                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            }
        } catch (e) {}
        return bool
    };
    tests.audio = function() {
        var elem = document.createElement("audio"),
            bool = false;
        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "");
                bool.mp3 = elem.canPlayType("audio/mpeg;").replace(/^no$/, "");
                bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "");
                bool.m4a = (elem.canPlayType("audio/x-m4a;") || elem.canPlayType("audio/aac;")).replace(/^no$/, "")
            }
        } catch (e) {}
        return bool
    };
    tests.localstorage = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true
        } catch (e) {
            return false
        }
    };
    tests.sessionstorage = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true
        } catch (e) {
            return false
        }
    };
    tests.webworkers = function() {
        return !!window.Worker
    };
    tests.applicationcache = function() {
        return !!window.applicationCache
    };
    tests.svg = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, "svg").createSVGRect
    };
    tests.inlinesvg = function() {
        var div = document.createElement("div");
        div.innerHTML = "<svg/>";
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg
    };
    tests.smil = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, "animate")))
    };
    tests.svgclippaths = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, "clipPath")))
    };

    function webforms() {
        Modernizr.input = (function(props) {
            for (var i = 0, len = props.length; i < len; i++) {
                attrs[props[i]] = !!(props[i] in inputElem)
            }
            if (attrs.list) {
                attrs.list = !!(document.createElement("datalist") && window.HTMLDataListElement)
            }
            return attrs
        })("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        Modernizr.inputtypes = (function(props) {
            for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {
                inputElem.setAttribute("type", inputElemType = props[i]);
                bool = inputElem.type !== "text";
                if (bool) {
                    inputElem.value = smile;
                    inputElem.style.cssText = "position:absolute;visibility:hidden;";
                    if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
                        docElement.appendChild(inputElem);
                        defaultView = document.defaultView;
                        bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== "textfield" && (inputElem.offsetHeight !== 0);
                        docElement.removeChild(inputElem)
                    } else {
                        if (/^(search|tel)$/.test(inputElemType)) {} else {
                            if (/^(url|email)$/.test(inputElemType)) {
                                bool = inputElem.checkValidity && inputElem.checkValidity() === false
                            } else {
                                bool = inputElem.value != smile
                            }
                        }
                    }
                }
                inputs[props[i]] = !!bool
            }
            return inputs
        })("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
            featureName = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();
            classes.push((Modernizr[featureName] ? "" : "no-") + featureName)
        }
    }
    Modernizr.input || webforms();
    Modernizr.addTest = function(feature, test) {
        if (typeof feature == "object") {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    Modernizr.addTest(key, feature[key])
                }
            }
        } else {
            feature = feature.toLowerCase();
            if (Modernizr[feature] !== undefined) {
                return Modernizr
            }
            test = typeof test == "function" ? test() : test;
            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += " " + (test ? "" : "no-") + feature
            }
            Modernizr[feature] = test
        }
        return Modernizr
    };
    setCss("");
    modElem = inputElem = null;
    (function(window, document) {
        var version = "3.7.0";
        var options = window.html5 || {};
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        var supportsHtml5Styles;
        var expando = "_html5shiv";
        var expanID = 0;
        var expandoData = {};
        var supportsUnknownElements;
        (function() {
            try {
                var a = document.createElement("a");
                a.innerHTML = "<xyz></xyz>";
                supportsHtml5Styles = ("hidden" in a);
                supportsUnknownElements = a.childNodes.length == 1 || (function() {
                    (document.createElement)("a");
                    var frag = document.createDocumentFragment();
                    return (typeof frag.cloneNode == "undefined" || typeof frag.createDocumentFragment == "undefined" || typeof frag.createElement == "undefined")
                }())
            } catch (e) {
                supportsHtml5Styles = true;
                supportsUnknownElements = true
            }
        }());

        function addStyleSheet(ownerDocument, cssText) {
            var p = ownerDocument.createElement("p"),
                parent = ownerDocument.getElementsByTagName("head")[0] || ownerDocument.documentElement;
            p.innerHTML = "x<style>" + cssText + "</style>";
            return parent.insertBefore(p.lastChild, parent.firstChild)
        }

        function getElements() {
            var elements = html5.elements;
            return typeof elements == "string" ? elements.split(" ") : elements
        }

        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data
            }
            return data
        }

        function createElement(nodeName, ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document
            }
            if (supportsUnknownElements) {
                return ownerDocument.createElement(nodeName)
            }
            if (!data) {
                data = getExpandoData(ownerDocument)
            }
            var node;
            if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode()
            } else {
                if (saveClones.test(nodeName)) {
                    node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode()
                } else {
                    node = data.createElem(nodeName)
                }
            }
            return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node
        }

        function createDocumentFragment(ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document
            }
            if (supportsUnknownElements) {
                return ownerDocument.createDocumentFragment()
            }
            data = data || getExpandoData(ownerDocument);
            var clone = data.frag.cloneNode(),
                i = 0,
                elems = getElements(),
                l = elems.length;
            for (; i < l; i++) {
                clone.createElement(elems[i])
            }
            return clone
        }

        function shivMethods(ownerDocument, data) {
            if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag()
            }
            ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
                    return data.createElem(nodeName)
                }
                return createElement(nodeName, ownerDocument, data)
            };
            ownerDocument.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + getElements().join().replace(/[\w\-]+/g, function(nodeName) {
                data.createElem(nodeName);
                data.frag.createElement(nodeName);
                return 'c("' + nodeName + '")'
            }) + ");return n}")(html5, data.frag)
        }

        function shivDocument(ownerDocument) {
            if (!ownerDocument) {
                ownerDocument = document
            }
            var data = getExpandoData(ownerDocument);
            if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
            }
            if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data)
            }
            return ownerDocument
        }
        var html5 = {
            elements: options.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: version,
            shivCSS: (options.shivCSS !== false),
            supportsUnknownElements: supportsUnknownElements,
            shivMethods: (options.shivMethods !== false),
            type: "default",
            shivDocument: shivDocument,
            createElement: createElement,
            createDocumentFragment: createDocumentFragment
        };
        window.html5 = html5;
        shivDocument(document)
    }(this, document));
    Modernizr._version = version;
    Modernizr._prefixes = prefixes;
    Modernizr._domPrefixes = domPrefixes;
    Modernizr._cssomPrefixes = cssomPrefixes;
    Modernizr.hasEvent = isEventSupported;
    Modernizr.testProp = function(prop) {
        return testProps([prop])
    };
    Modernizr.testAllProps = testPropsAll;
    Modernizr.testStyles = injectElementWithStyles;
    Modernizr.prefixed = function(prop, obj, elem) {
        if (!obj) {
            return testPropsAll(prop, "pfx")
        } else {
            return testPropsAll(prop, obj, elem)
        }
    };
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (enableClasses ? " js " + classes.join(" ") : "");
    return Modernizr
})(this, this.document);
(function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) {
                    y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
        }
        var j = j || B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function(a) {
            return "[object Array]" == o.call(a)
        },
        x = [],
        y = {},
        z = {
            timeout: function(a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        },
        A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                },
                e, f, g;
            for (f = 0; f < d; f++) {
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g))
            }
            for (f = 0; f < b; f++) {
                c = x[f](c)
            }
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) {
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h)
                    } else {
                        if (Object(a) === a) {
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) {
                                        a.hasOwnProperty(c) && b++
                                    }
                                    return b
                                }(), a) {
                                a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l()
                                } : j[n] = function(a) {
                                    return function() {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b), l()
                                    }
                                }(k[n])), g(a[n], j, b, n, h))
                            }
                        }
                    }
                } else {
                    !c && l()
                }
            }
            var h = !!a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) {
            g(a, 0, l, 0)
        } else {
            if (w(a)) {
                for (i = 0; i < a.length; i++) {
                    j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l)
                }
            } else {
                Object(a) === a && h(a, l)
            }
        }
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 10000, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"),
            l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) {
            k.setAttribute(o, d[o])
        }
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"),
            j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) {
            e.setAttribute(j, d[j])
        }
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function(undefined) {
    var moment, VERSION = "2.8.4",
        globalScope = typeof global !== "undefined" ? global : this,
        oldGlobalMoment, round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i, YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        locales = {},
        momentProperties = [],
        hasModule = (typeof module !== "undefined" && module && module.exports),
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        parseTokenOneOrTwoDigits = /\d\d?/,
        parseTokenOneToThreeDigits = /\d{1,3}/,
        parseTokenOneToFourDigits = /\d{1,4}/,
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/,
        parseTokenDigits = /\d+/,
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,
        parseTokenT = /T/i,
        parseTokenOffsetMs = /[\+\-]?\d+/,
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
        parseTokenOneDigit = /\d/,
        parseTokenTwoDigits = /\d\d/,
        parseTokenThreeDigits = /\d{3}/,
        parseTokenFourDigits = /\d{4}/,
        parseTokenSixDigits = /[+-]?\d{6}/,
        parseTokenSignedNumber = /[+-]?\d+/,
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        isoFormat = "YYYY-MM-DDTHH:mm:ssZ",
        isoDates = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        isoTimes = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,
        proxyGettersAndSetters = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        unitMillisecondFactors = {
            Milliseconds: 1,
            Seconds: 1000,
            Minutes: 60000,
            Hours: 3600000,
            Days: 86400000,
            Months: 2592000000,
            Years: 31536000000
        },
        unitAliases = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        },
        camelFunctions = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        },
        formatFunctions = {},
        relativeTimeThresholds = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        ordinalizeTokens = "DDD w W M D d".split(" "),
        paddedTokens = "M D H h m s w W".split(" "),
        formatTokenFunctions = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(format) {
                return this.localeData().monthsShort(this, format)
            },
            MMMM: function(format) {
                return this.localeData().months(this, format)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(format) {
                return this.localeData().weekdaysMin(this, format)
            },
            ddd: function(format) {
                return this.localeData().weekdaysShort(this, format)
            },
            dddd: function(format) {
                return this.localeData().weekdays(this, format)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return leftZeroFill(this.year() % 100, 2)
            },
            YYYY: function() {
                return leftZeroFill(this.year(), 4)
            },
            YYYYY: function() {
                return leftZeroFill(this.year(), 5)
            },
            YYYYYY: function() {
                var y = this.year(),
                    sign = y >= 0 ? "+" : "-";
                return sign + leftZeroFill(Math.abs(y), 6)
            },
            gg: function() {
                return leftZeroFill(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return leftZeroFill(this.weekYear(), 4)
            },
            ggggg: function() {
                return leftZeroFill(this.weekYear(), 5)
            },
            GG: function() {
                return leftZeroFill(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return leftZeroFill(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return leftZeroFill(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), true)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), false)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return toInt(this.milliseconds() / 100)
            },
            SS: function() {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return leftZeroFill(this.milliseconds(), 3)
            },
            SSSS: function() {
                return leftZeroFill(this.milliseconds(), 3)
            },
            Z: function() {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-"
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2)
            },
            ZZ: function() {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-"
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        },
        deprecations = {},
        lists = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];

    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2:
                return a != null ? a : b;
            case 3:
                return a != null ? a : b != null ? b : c;
            default:
                throw new Error("Implement me")
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b)
    }

    function defaultParsingFlags() {
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false
        }
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg)
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (firstTime) {
                printMsg(msg);
                firstTime = false
            }
            return fn.apply(this, arguments)
        }, fn)
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true
        }
    }

    function padToken(func, count) {
        return function(a) {
            return leftZeroFill(func.call(this, a), count)
        }
    }

    function ordinalizeToken(func, period) {
        return function(a) {
            return this.localeData().ordinal(func.call(this, a), period)
        }
    }
    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + "o"] = ordinalizeToken(formatTokenFunctions[i], i)
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2)
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);

    function Locale() {}

    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config)
        }
        copyConfig(this, config);
        this._d = new Date(+config._d)
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000;
        this._days = +days + weeks * 7;
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = moment.localeData();
        this._bubble()
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i]
            }
        }
        if (hasOwnProp(b, "toString")) {
            a.toString = b.toString
        }
        if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf
        }
        return a
    }

    function copyConfig(to, from) {
        var i, prop, val;
        if (typeof from._isAMomentObject !== "undefined") {
            to._isAMomentObject = from._isAMomentObject
        }
        if (typeof from._i !== "undefined") {
            to._i = from._i
        }
        if (typeof from._f !== "undefined") {
            to._f = from._f
        }
        if (typeof from._l !== "undefined") {
            to._l = from._l
        }
        if (typeof from._strict !== "undefined") {
            to._strict = from._strict
        }
        if (typeof from._tzm !== "undefined") {
            to._tzm = from._tzm
        }
        if (typeof from._isUTC !== "undefined") {
            to._isUTC = from._isUTC
        }
        if (typeof from._offset !== "undefined") {
            to._offset = from._offset
        }
        if (typeof from._pf !== "undefined") {
            to._pf = from._pf
        }
        if (typeof from._locale !== "undefined") {
            to._locale = from._locale
        }
        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== "undefined") {
                    to[prop] = val
                }
            }
        }
        return to
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number)
        } else {
            return Math.floor(number)
        }
    }

    function leftZeroFill(number, targetLength, forceSign) {
        var output = "" + Math.abs(number),
            sign = number >= 0;
        while (output.length < targetLength) {
            output = "0" + output
        }
        return (sign ? (forceSign ? "+" : "") : "-") + output
    }

    function positiveMomentsDifference(base, other) {
        var res = {
            milliseconds: 0,
            months: 0
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months
        }
        res.milliseconds = +other - +(base.clone().add(res.months, "M"));
        return res
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other)
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months
        }
        return res
    }

    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period).");
                tmp = val;
                val = period;
                period = tmp
            }
            val = typeof val === "string" ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this
        }
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding)
        }
        if (days) {
            rawSetter(mom, "Date", rawGetter(mom, "Date") + days * isAdding)
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, "Month") + months * isAdding)
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months)
        }
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === "[object Array]"
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === "[object Date]" || input instanceof Date
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++
            }
        }
        return diffs + lengthDiff
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, "$1");
            units = unitAliases[units] || camelFunctions[lowered] || lowered
        }
        return units
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp, prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop]
                }
            }
        }
        return normalizedInput
    }

    function makeList(field) {
        var count, setter;
        if (field.indexOf("week") === 0) {
            count = 7;
            setter = "day"
        } else {
            if (field.indexOf("month") === 0) {
                count = 12;
                setter = "month"
            } else {
                return
            }
        }
        moment[field] = function(format, index) {
            var i, getter, method = moment._locale[field],
                results = [];
            if (typeof format === "number") {
                index = format;
                format = undefined
            }
            getter = function(i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || "")
            };
            if (index != null) {
                return getter(index)
            } else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i))
                }
                return results
            }
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber)
            } else {
                value = Math.ceil(coercedNumber)
            }
        }
        return value
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 24 || (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 || m._a[SECOND] !== 0 || m._a[MILLISECOND] !== 0)) ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE
            }
            m._pf.overflow = overflow
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
            if (m._strict) {
                m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0 && m._pf.bigHour === undefined
            }
        }
        return m._isValid
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key
    }

    function chooseLocale(names) {
        var i = 0,
            j, next, locale, split;
        while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join("-"));
                if (locale) {
                    return locale
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    break
                }
                j--
            }
            i++
        }
        return null
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require("./locale/" + name);
                moment.locale(oldLocale)
            } catch (e) {}
        }
        return locales[name]
    }

    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ? +input : +moment(input)) - (+res);
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res
        } else {
            return moment(input).local()
        }
    }
    extend(Locale.prototype, {
        set: function(config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === "function") {
                    this[i] = prop
                } else {
                    this["_" + i] = prop
                }
            }
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(m) {
            return this._months[m.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(m) {
            return this._monthsShort[m.month()]
        },
        monthsParse: function(monthName, format, strict) {
            var i, mom, regex;
            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = []
            }
            for (i = 0; i < 12; i++) {
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
                    this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i")
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                    this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")
                }
                if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
                    return i
                } else {
                    if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
                        return i
                    } else {
                        if (!strict && this._monthsParse[i].test(monthName)) {
                            return i
                        }
                    }
                }
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(m) {
            return this._weekdays[m.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(m) {
            return this._weekdaysShort[m.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(m) {
            return this._weekdaysMin[m.day()]
        },
        weekdaysParse: function(weekdayName) {
            var i, mom, regex;
            if (!this._weekdaysParse) {
                this._weekdaysParse = []
            }
            for (i = 0; i < 7; i++) {
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                    this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")
                }
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i
                }
            }
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
                    return val.slice(1)
                });
                this._longDateFormat[key] = output
            }
            return output
        },
        isPM: function(input) {
            return ((input + "").toLowerCase().charAt(0) === "p")
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? "pm" : "PM"
            } else {
                return isLower ? "am" : "AM"
            }
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(key, mom, now) {
            var output = this._calendar[key];
            return typeof output === "function" ? output.apply(mom, [now]) : output
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === "function") ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
        },
        pastFuture: function(diff, output) {
            var format = this._relativeTime[diff > 0 ? "future" : "past"];
            return typeof format === "function" ? format(output) : format.replace(/%s/i, output)
        },
        ordinal: function(number) {
            return this._ordinal.replace("%d", number)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(string) {
            return string
        },
        postformat: function(string) {
            return string
        },
        week: function(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    });

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "")
        }
        return input.replace(/\\/g, "")
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i, length;
        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]]
            } else {
                array[i] = removeFormattingTokens(array[i])
            }
        }
        return function(mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i]
            }
            return output
        }
    }

    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate()
        }
        format = expandFormat(format, m.localeData());
        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format)
        }
        return formatFunctions[format](m)
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1
        }
        return format
    }

    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
            case "Q":
                return parseTokenOneDigit;
            case "DDDD":
                return parseTokenThreeDigits;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
            case "Y":
            case "G":
            case "g":
                return parseTokenSignedNumber;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
            case "S":
                if (strict) {
                    return parseTokenOneDigit
                }
            case "SS":
                if (strict) {
                    return parseTokenTwoDigits
                }
            case "SSS":
                if (strict) {
                    return parseTokenThreeDigits
                }
            case "DDD":
                return parseTokenOneToThreeDigits;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return parseTokenWord;
            case "a":
            case "A":
                return config._locale._meridiemParse;
            case "x":
                return parseTokenOffsetMs;
            case "X":
                return parseTokenTimestampMs;
            case "Z":
            case "ZZ":
                return parseTokenTimezone;
            case "T":
                return parseTokenT;
            case "SSSS":
                return parseTokenDigits;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return parseTokenOneOrTwoDigits;
            case "Do":
                return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
            default:
                a = new RegExp(regexpEscape(unescapeFormat(token.replace("\\", "")), "i"));
                return a
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || "";
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + "").match(parseTimezoneChunker) || ["-", 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);
        return parts[0] === "+" ? -minutes : minutes
    }

    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;
        switch (token) {
            case "Q":
                if (input != null) {
                    datePartArray[MONTH] = (toInt(input) - 1) * 3
                }
                break;
            case "M":
            case "MM":
                if (input != null) {
                    datePartArray[MONTH] = toInt(input) - 1
                }
                break;
            case "MMM":
            case "MMMM":
                a = config._locale.monthsParse(input, token, config._strict);
                if (a != null) {
                    datePartArray[MONTH] = a
                } else {
                    config._pf.invalidMonth = input
                }
                break;
            case "D":
            case "DD":
                if (input != null) {
                    datePartArray[DATE] = toInt(input)
                }
                break;
            case "Do":
                if (input != null) {
                    datePartArray[DATE] = toInt(parseInt(input.match(/\d{1,2}/)[0], 10))
                }
                break;
            case "DDD":
            case "DDDD":
                if (input != null) {
                    config._dayOfYear = toInt(input)
                }
                break;
            case "YY":
                datePartArray[YEAR] = moment.parseTwoDigitYear(input);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                datePartArray[YEAR] = toInt(input);
                break;
            case "a":
            case "A":
                config._isPm = config._locale.isPM(input);
                break;
            case "h":
            case "hh":
                config._pf.bigHour = true;
            case "H":
            case "HH":
                datePartArray[HOUR] = toInt(input);
                break;
            case "m":
            case "mm":
                datePartArray[MINUTE] = toInt(input);
                break;
            case "s":
            case "ss":
                datePartArray[SECOND] = toInt(input);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                datePartArray[MILLISECOND] = toInt(("0." + input) * 1000);
                break;
            case "x":
                config._d = new Date(toInt(input));
                break;
            case "X":
                config._d = new Date(parseFloat(input) * 1000);
                break;
            case "Z":
            case "ZZ":
                config._useUTC = true;
                config._tzm = timezoneMinutesFromString(input);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                a = config._locale.weekdaysParse(input);
                if (a != null) {
                    config._w = config._w || {};
                    config._w.d = a
                } else {
                    config._pf.invalidWeekday = input
                }
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                token = token.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                token = token.substr(0, 2);
                if (input) {
                    config._w = config._w || {};
                    config._w[token] = toInt(input)
                }
                break;
            case "gg":
            case "GG":
                config._w = config._w || {};
                config._w[token] = moment.parseTwoDigitYear(input)
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1)
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);
            if (w.d != null) {
                weekday = w.d;
                if (weekday < dow) {
                    ++week
                }
            } else {
                if (w.e != null) {
                    weekday = w.e + dow
                } else {
                    weekday = dow
                }
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear
    }

    function dateFromConfig(config) {
        var i, date, input = [],
            currentDate, yearToUse;
        if (config._d) {
            return
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config)
        }
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true
            }
            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate()
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i]
        }
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i]
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0
        }
        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm)
        }
        if (config._nextDay) {
            config._a[HOUR] = 24
        }
    }

    function dateFromObject(config) {
        var normalizedInput;
        if (config._d) {
            return
        }
        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day || normalizedInput.date, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];
        dateFromConfig(config)
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()]
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()]
        }
    }

    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return
        }
        config._a = [];
        config._pf.empty = true;
        var string = "" + config._i,
            i, parsedInput, tokens, token, skipped, stringLength = string.length,
            totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped)
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length
            }
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false
                } else {
                    config._pf.unusedTokens.push(token)
                }
                addTimeToArrayFromToken(token, parsedInput, config)
            } else {
                if (config._strict && !parsedInput) {
                    config._pf.unusedTokens.push(token)
                }
            }
        }
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string)
        }
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined
        }
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12
        }
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0
        }
        dateFromConfig(config);
        checkOverflow(config)
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4
        })
    }

    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function makeDateFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return
        }
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue
            }
            currentScore += tempConfig._pf.charsLeftOver;
            currentScore += tempConfig._pf.unusedTokens.length * 10;
            tempConfig._pf.score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig
            }
        }
        extend(config, bestMoment || tempConfig)
    }

    function parseISO(config) {
        var i, l, string = config._i,
            match = isoRegex.exec(string);
        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += "Z"
            }
            makeDateFromStringAndFormat(config)
        } else {
            config._isValid = false
        }
    }

    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config)
        }
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i))
        }
        return res
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched;
        if (input === undefined) {
            config._d = new Date()
        } else {
            if (isDate(input)) {
                config._d = new Date(+input)
            } else {
                if ((matched = aspNetJsonRegex.exec(input)) !== null) {
                    config._d = new Date(+matched[1])
                } else {
                    if (typeof input === "string") {
                        makeDateFromString(config)
                    } else {
                        if (isArray(input)) {
                            config._a = map(input.slice(0), function(obj) {
                                return parseInt(obj, 10)
                            });
                            dateFromConfig(config)
                        } else {
                            if (typeof(input) === "object") {
                                dateFromObject(config)
                            } else {
                                if (typeof(input) === "number") {
                                    config._d = new Date(input)
                                } else {
                                    moment.createFromInputFallback(config)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        var date = new Date(y, m, d, h, M, s, ms);
        if (y < 1970) {
            date.setFullYear(y)
        }
        return date
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y)
        }
        return date
    }

    function parseWeekday(input, locale) {
        if (typeof input === "string") {
            if (!isNaN(input)) {
                input = parseInt(input, 10)
            } else {
                input = locale.weekdaysParse(input);
                if (typeof input !== "number") {
                    return null
                }
            }
        }
        return input
    }

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as("s")),
            minutes = round(duration.as("m")),
            hours = round(duration.as("h")),
            days = round(duration.as("d")),
            months = round(duration.as("M")),
            years = round(duration.as("y")),
            args = seconds < relativeTimeThresholds.s && ["s", seconds] || minutes === 1 && ["m"] || minutes < relativeTimeThresholds.m && ["mm", minutes] || hours === 1 && ["h"] || hours < relativeTimeThresholds.h && ["hh", hours] || days === 1 && ["d"] || days < relativeTimeThresholds.d && ["dd", days] || months === 1 && ["M"] || months < relativeTimeThresholds.M && ["MM", months] || years === 1 && ["y"] || ["yy", years];
        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args)
    }

    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;
        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7
        }
        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7
        }
        adjustedMoment = moment(mom).add(daysToDayOfWeek, "d");
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        }
    }

    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(),
            daysToAdd, dayOfYear;
        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
        }
    }

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;
        config._locale = config._locale || moment.localeData(config._l);
        if (input === null || (format === undefined && input === "")) {
            return moment.invalid({
                nullInput: true
            })
        }
        if (typeof input === "string") {
            config._i = input = config._locale.preparse(input)
        }
        if (moment.isMoment(input)) {
            return new Moment(input, true)
        } else {
            if (format) {
                if (isArray(format)) {
                    makeDateFromStringAndArray(config)
                } else {
                    makeDateFromStringAndFormat(config)
                }
            } else {
                makeDateFromInput(config)
            }
        }
        res = new Moment(config);
        if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = undefined
        }
        return res
    }
    moment = function(input, format, locale, strict) {
        var c;
        if (typeof(locale) === "boolean") {
            strict = locale;
            locale = undefined
        }
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();
        return makeMoment(c)
    };
    moment.suppressDeprecationWarnings = false;
    moment.createFromInputFallback = deprecate("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""))
    });

    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0]
        }
        if (!moments.length) {
            return moment()
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i]
            }
        }
        return res
    }
    moment.min = function() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args)
    };
    moment.max = function() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args)
    };
    moment.utc = function(input, format, locale, strict) {
        var c;
        if (typeof(locale) === "boolean") {
            strict = locale;
            locale = undefined
        }
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();
        return makeMoment(c).utc()
    };
    moment.unix = function(input) {
        return moment(input * 1000)
    };
    moment.duration = function(input, key) {
        var duration = input,
            match = null,
            sign, ret, parseIso, diffRes;
        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            }
        } else {
            if (typeof input === "number") {
                duration = {};
                if (key) {
                    duration[key] = input
                } else {
                    duration.milliseconds = input
                }
            } else {
                if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
                    sign = (match[1] === "-") ? -1 : 1;
                    duration = {
                        y: 0,
                        d: toInt(match[DATE]) * sign,
                        h: toInt(match[HOUR]) * sign,
                        m: toInt(match[MINUTE]) * sign,
                        s: toInt(match[SECOND]) * sign,
                        ms: toInt(match[MILLISECOND]) * sign
                    }
                } else {
                    if (!!(match = isoDurationRegex.exec(input))) {
                        sign = (match[1] === "-") ? -1 : 1;
                        parseIso = function(inp) {
                            var res = inp && parseFloat(inp.replace(",", "."));
                            return (isNaN(res) ? 0 : res) * sign
                        };
                        duration = {
                            y: parseIso(match[2]),
                            M: parseIso(match[3]),
                            d: parseIso(match[4]),
                            h: parseIso(match[5]),
                            m: parseIso(match[6]),
                            s: parseIso(match[7]),
                            w: parseIso(match[8])
                        }
                    } else {
                        if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
                            diffRes = momentsDifference(moment(duration.from), moment(duration.to));
                            duration = {};
                            duration.ms = diffRes.milliseconds;
                            duration.M = diffRes.months
                        }
                    }
                }
            }
        }
        ret = new Duration(duration);
        if (moment.isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale
        }
        return ret
    };
    moment.version = VERSION;
    moment.defaultFormat = isoFormat;
    moment.ISO_8601 = function() {};
    moment.momentProperties = momentProperties;
    moment.updateOffset = function() {};
    moment.relativeTimeThreshold = function(threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold]
        }
        relativeTimeThresholds[threshold] = limit;
        return true
    };
    moment.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", function(key, value) {
        return moment.locale(key, value)
    });
    moment.locale = function(key, values) {
        var data;
        if (key) {
            if (typeof(values) !== "undefined") {
                data = moment.defineLocale(key, values)
            } else {
                data = moment.localeData(key)
            }
            if (data) {
                moment.duration._locale = moment._locale = data
            }
        }
        return moment._locale._abbr
    };
    moment.defineLocale = function(name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale()
            }
            locales[name].set(values);
            moment.locale(name);
            return locales[name]
        } else {
            delete locales[name];
            return null
        }
    };
    moment.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", function(key) {
        return moment.localeData(key)
    });
    moment.localeData = function(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr
        }
        if (!key) {
            return moment._locale
        }
        if (!isArray(key)) {
            locale = loadLocale(key);
            if (locale) {
                return locale
            }
            key = [key]
        }
        return chooseLocale(key)
    };
    moment.isMoment = function(obj) {
        return obj instanceof Moment || (obj != null && hasOwnProp(obj, "_isAMomentObject"))
    };
    moment.isDuration = function(obj) {
        return obj instanceof Duration
    };
    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i])
    }
    moment.normalizeUnits = function(units) {
        return normalizeUnits(units)
    };
    moment.invalid = function(flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags)
        } else {
            m._pf.userInvalidated = true
        }
        return m
    };
    moment.parseZone = function() {
        return moment.apply(null, arguments).parseZone()
    };
    moment.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000)
    };
    extend(moment.fn = Moment.prototype, {
        clone: function() {
            return moment(this)
        },
        valueOf: function() {
            return +this._d + ((this._offset || 0) * 60000)
        },
        unix: function() {
            return Math.floor(+this / 1000)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ("function" === typeof Date.prototype.toISOString) {
                    return this.toDate().toISOString()
                } else {
                    return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }
            } else {
                return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }
        },
        toArray: function() {
            var m = this;
            return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()]
        },
        isValid: function() {
            return isValid(this)
        },
        isDSTShifted: function() {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0
            }
            return false
        },
        parsingFlags: function() {
            return extend({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(keepLocalTime) {
            return this.zone(0, keepLocalTime)
        },
        local: function(keepLocalTime) {
            if (this._isUTC) {
                this.zone(0, keepLocalTime);
                this._isUTC = false;
                if (keepLocalTime) {
                    this.add(this._dateTzOffset(), "m")
                }
            }
            return this
        },
        format: function(inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output)
        },
        add: createAdder(1, "add"),
        subtract: createAdder(-1, "subtract"),
        diff: function(input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 60000,
                diff, output, daysAdjust;
            units = normalizeUnits(units);
            if (units === "year" || units === "month") {
                diff = (this.daysInMonth() + that.daysInMonth()) * 43200000;
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                daysAdjust = (this - moment(this).startOf("month")) - (that - moment(that).startOf("month"));
                daysAdjust -= ((this.zone() - moment(this).startOf("month").zone()) - (that.zone() - moment(that).startOf("month").zone())) * 60000;
                output += daysAdjust / diff;
                if (units === "year") {
                    output = output / 12
                }
            } else {
                diff = (this - that);
                output = units === "second" ? diff / 1000 : units === "minute" ? diff / 60000 : units === "hour" ? diff / 3600000 : units === "day" ? (diff - zoneDiff) / 86400000 : units === "week" ? (diff - zoneDiff) / 604800000 : diff
            }
            return asFloat ? output : absRound(output)
        },
        from: function(time, withoutSuffix) {
            return moment.duration({
                to: this,
                from: time
            }).locale(this.locale()).humanize(!withoutSuffix)
        },
        fromNow: function(withoutSuffix) {
            return this.from(moment(), withoutSuffix)
        },
        calendar: function(time) {
            var now = time || moment(),
                sod = makeAs(now, this).startOf("day"),
                diff = this.diff(sod, "days", true),
                format = diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(format, this, moment(now)))
        },
        isLeapYear: function() {
            return isLeapYear(this.year())
        },
        isDST: function() {
            return (this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone())
        },
        day: function(input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, "d")
            } else {
                return day
            }
        },
        month: makeAccessor("Month", true),
        startOf: function(units) {
            units = normalizeUnits(units);
            switch (units) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            if (units === "week") {
                this.weekday(0)
            } else {
                if (units === "isoWeek") {
                    this.isoWeekday(1)
                }
            }
            if (units === "quarter") {
                this.month(Math.floor(this.month() / 3) * 3)
            }
            return this
        },
        endOf: function(units) {
            units = normalizeUnits(units);
            if (units === undefined || units === "millisecond") {
                return this
            }
            return this.startOf(units).add(1, (units === "isoWeek" ? "week" : units)).subtract(1, "ms")
        },
        isAfter: function(input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== "undefined" ? units : "millisecond");
            if (units === "millisecond") {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units)
            }
        },
        isBefore: function(input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== "undefined" ? units : "millisecond");
            if (units === "millisecond") {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs
            }
        },
        isSame: function(input, units) {
            var inputMs;
            units = normalizeUnits(units || "millisecond");
            if (units === "millisecond") {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units))
            }
        },
        min: deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(other) {
            other = moment.apply(null, arguments);
            return other < this ? this : other
        }),
        max: deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(other) {
            other = moment.apply(null, arguments);
            return other > this ? this : other
        }),
        zone: function(input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input)
                }
                if (Math.abs(input) < 16) {
                    input = input * 60
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateTzOffset()
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.subtract(localAdjust, "m")
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this, moment.duration(offset - input, "m"), 1, false)
                    } else {
                        if (!this._changeInProgress) {
                            this._changeInProgress = true;
                            moment.updateOffset(this, true);
                            this._changeInProgress = null
                        }
                    }
                }
            } else {
                return this._isUTC ? offset : this._dateTzOffset()
            }
            return this
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            if (this._tzm) {
                this.zone(this._tzm)
            } else {
                if (typeof this._i === "string") {
                    this.zone(this._i)
                }
            }
            return this
        },
        hasAlignedHourOffset: function(input) {
            if (!input) {
                input = 0
            } else {
                input = moment(input).zone()
            }
            return (this.zone() - input) % 60 === 0
        },
        daysInMonth: function() {
            return daysInMonth(this.year(), this.month())
        },
        dayOfYear: function(input) {
            var dayOfYear = round((moment(this).startOf("day") - moment(this).startOf("year")) / 86400000) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), "d")
        },
        quarter: function(input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3)
        },
        weekYear: function(input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), "y")
        },
        isoWeekYear: function(input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), "y")
        },
        week: function(input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, "d")
        },
        isoWeek: function(input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, "d")
        },
        weekday: function(input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, "d")
        },
        isoWeekday: function(input) {
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7)
        },
        isoWeeksInYear: function() {
            return weeksInYear(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
        },
        get: function(units) {
            units = normalizeUnits(units);
            return this[units]()
        },
        set: function(units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === "function") {
                this[units](value)
            }
            return this
        },
        locale: function(key) {
            var newLocaleData;
            if (key === undefined) {
                return this._locale._abbr
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData
                }
                return this
            }
        },
        lang: deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
            if (key === undefined) {
                return this.localeData()
            } else {
                return this.locale(key)
            }
        }),
        localeData: function() {
            return this._locale
        },
        _dateTzOffset: function() {
            return Math.round(this._d.getTimezoneOffset() / 15) * 15
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;
        if (typeof value === "string") {
            value = mom.localeData().monthsParse(value);
            if (typeof value !== "number") {
                return mom
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom
    }

    function rawGetter(mom, unit) {
        return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]()
    }

    function rawSetter(mom, unit, value) {
        if (unit === "Month") {
            return rawMonthSetter(mom, value)
        } else {
            return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value)
        }
    }

    function makeAccessor(unit, keepTime) {
        return function(value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this
            } else {
                return rawGetter(this, unit)
            }
        }
    }
    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor("Milliseconds", false);
    moment.fn.second = moment.fn.seconds = makeAccessor("Seconds", false);
    moment.fn.minute = moment.fn.minutes = makeAccessor("Minutes", false);
    moment.fn.hour = moment.fn.hours = makeAccessor("Hours", true);
    moment.fn.date = makeAccessor("Date", true);
    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor("Date", true));
    moment.fn.year = makeAccessor("FullYear", true);
    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor("FullYear", true));
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;
    moment.fn.toJSON = moment.fn.toISOString;

    function daysToYears(days) {
        return days * 400 / 146097
    }

    function yearsToDays(years) {
        return years * 146097 / 400
    }
    extend(moment.duration.fn = Duration.prototype, {
        _bubble: function() {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;
            data.milliseconds = milliseconds % 1000;
            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;
            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;
            hours = absRound(minutes / 60);
            data.hours = hours % 24;
            days += absRound(hours / 24);
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));
            months += absRound(days / 30);
            days %= 30;
            years += absRound(months / 12);
            months %= 12;
            data.days = days;
            data.months = months;
            data.years = years
        },
        abs: function() {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);
            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);
            return this
        },
        weeks: function() {
            return absRound(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + this._days * 86400000 + (this._months % 12) * 2592000000 + toInt(this._months / 12) * 31536000000
        },
        humanize: function(withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());
            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output)
            }
            return this.localeData().postformat(output)
        },
        add: function(input, val) {
            var dur = moment.duration(input, val);
            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;
            this._bubble();
            return this
        },
        subtract: function(input, val) {
            var dur = moment.duration(input, val);
            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;
            this._bubble();
            return this
        },
        get: function(units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + "s"]()
        },
        as: function(units) {
            var days, months;
            units = normalizeUnits(units);
            if (units === "month" || units === "year") {
                days = this._days + this._milliseconds / 86400000;
                months = this._months + daysToYears(days) * 12;
                return units === "month" ? months : months / 12
            } else {
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case "week":
                        return days / 7 + this._milliseconds / 604800000;
                    case "day":
                        return days + this._milliseconds / 86400000;
                    case "hour":
                        return days * 24 + this._milliseconds / 3600000;
                    case "minute":
                        return days * 24 * 60 + this._milliseconds / 60000;
                    case "second":
                        return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    case "millisecond":
                        return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + units)
                }
            }
        },
        lang: moment.fn.lang,
        locale: moment.fn.locale,
        toIsoString: deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
            if (!this.asSeconds()) {
                return "P0D"
            }
            return (this.asSeconds() < 0 ? "-" : "") + "P" + (years ? years + "Y" : "") + (months ? months + "M" : "") + (days ? days + "D" : "") + ((hours || minutes || seconds) ? "T" : "") + (hours ? hours + "H" : "") + (minutes ? minutes + "M" : "") + (seconds ? seconds + "S" : "")
        },
        localeData: function() {
            return this._locale
        }
    });
    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function() {
            return this._data[name]
        }
    }
    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase())
        }
    }
    moment.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    };
    moment.duration.fn.asSeconds = function() {
        return this.as("s")
    };
    moment.duration.fn.asMinutes = function() {
        return this.as("m")
    };
    moment.duration.fn.asHours = function() {
        return this.as("h")
    };
    moment.duration.fn.asDays = function() {
        return this.as("d")
    };
    moment.duration.fn.asWeeks = function() {
        return this.as("weeks")
    };
    moment.duration.fn.asMonths = function() {
        return this.as("M")
    };
    moment.duration.fn.asYears = function() {
        return this.as("y")
    };
    moment.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? "th" : (b === 1) ? "st" : (b === 2) ? "nd" : (b === 3) ? "rd" : "th";
            return number + output
        }
    });

    function makeGlobal(shouldDeprecate) {
        if (typeof ender !== "undefined") {
            return
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", moment)
        } else {
            globalScope.moment = moment
        }
    }
    if (hasModule) {
        module.exports = moment
    } else {
        if (typeof define === "function" && define.amd) {
            define("moment", function(require, exports, module) {
                if (module.config && module.config() && module.config().noGlobal === true) {
                    globalScope.moment = oldGlobalMoment
                }
                return moment
            });
            makeGlobal(true)
        } else {
            makeGlobal()
        }
    }
}).call(this);
(function($, moment) {
    var updateInterval = 1000,
        paused = false,
        $livestamps = $([]),
        init = function() {
            livestampGlobal.resume()
        },
        prep = function($el, timestamp) {
            var oldData = $el.data("livestampdata");
            if (typeof timestamp == "number") {
                timestamp *= 1000
            }
            $el.removeAttr("data-livestamp").removeData("livestamp");
            timestamp = moment(timestamp);
            if (moment.isMoment(timestamp) && !isNaN(+timestamp)) {
                var newData = $.extend({}, {
                    original: $el.contents()
                }, oldData);
                newData.moment = moment(timestamp);
                $el.data("livestampdata", newData).empty();
                $livestamps.push($el[0])
            }
        },
        run = function() {
            if (paused) {
                return
            }
            livestampGlobal.update();
            setTimeout(run, updateInterval)
        },
        livestampGlobal = {
            update: function() {
                $("[data-livestamp]").each(function() {
                    var $this = $(this);
                    prep($this, $this.data("livestamp"))
                });
                var toRemove = [];
                $livestamps.each(function() {
                    var $this = $(this),
                        data = $this.data("livestampdata");
                    if (data === undefined) {
                        toRemove.push(this)
                    } else {
                        if (moment.isMoment(data.moment)) {
                            var from = $this.html(),
                                to = data.moment.fromNow();
                            if (from != to) {
                                var e = $.Event("change.livestamp");
                                $this.trigger(e, [from, to]);
                                if (!e.isDefaultPrevented()) {
                                    $this.html(to)
                                }
                            }
                        }
                    }
                });
                $livestamps = $livestamps.not(toRemove)
            },
            pause: function() {
                paused = true
            },
            resume: function() {
                paused = false;
                run()
            },
            interval: function(interval) {
                if (interval === undefined) {
                    return updateInterval
                }
                updateInterval = interval
            }
        },
        livestampLocal = {
            add: function($el, timestamp) {
                if (typeof timestamp == "number") {
                    timestamp *= 1000
                }
                timestamp = moment(timestamp);
                if (moment.isMoment(timestamp) && !isNaN(+timestamp)) {
                    $el.each(function() {
                        prep($(this), timestamp)
                    });
                    livestampGlobal.update()
                }
                return $el
            },
            destroy: function($el) {
                $livestamps = $livestamps.not($el);
                $el.each(function() {
                    var $this = $(this),
                        data = $this.data("livestampdata");
                    if (data === undefined) {
                        return $el
                    }
                    $this.html(data.original ? data.original : "").removeData("livestampdata")
                });
                return $el
            },
            isLivestamp: function($el) {
                return $el.data("livestampdata") !== undefined
            }
        };
    $.livestamp = livestampGlobal;
    $(init);
    $.fn.livestamp = function(method, options) {
        if (!livestampLocal[method]) {
            options = method;
            method = "add"
        }
        return livestampLocal[method](this, options)
    }
})(jQuery, moment);
/*
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery")
} + function($) {
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }
        return false
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function() {
            called = true
        });
        var callback = function() {
            if (!called) {
                $($el).trigger($.support.transition.end)
            }
        };
        setTimeout(callback, duration);
        return this
    };
    $(function() {
        $.support.transition = transitionEnd();
        if (!$.support.transition) {
            return
        }
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) {
                    return e.handleObj.handler.apply(this, arguments)
                }
            }
        }
    })
}(jQuery); + function($) {
    var dismiss = '[data-dismiss="alert"]';
    var Alert = function(el) {
        $(el).on("click", dismiss, this.close)
    };
    Alert.VERSION = "3.2.0";
    Alert.prototype.close = function(e) {
        var $this = $(this);
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
        }
        var $parent = $(selector);
        if (e) {
            e.preventDefault()
        }
        if (!$parent.length) {
            $parent = $this.hasClass("alert") ? $this : $this.parent()
        }
        $parent.trigger(e = $.Event("close.bs.alert"));
        if (e.isDefaultPrevented()) {
            return
        }
        $parent.removeClass("in");

        function removeElement() {
            $parent.detach().trigger("closed.bs.alert").remove()
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(150) : removeElement()
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.alert");
            if (!data) {
                $this.data("bs.alert", (data = new Alert(this)))
            }
            if (typeof option == "string") {
                data[option].call($this)
            }
        })
    }
    var old = $.fn.alert;
    $.fn.alert = Plugin;
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this
    };
    $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close)
}(jQuery); + function($) {
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false
    };
    Button.VERSION = "3.2.0";
    Button.DEFAULTS = {
        loadingText: "loading..."
    };
    Button.prototype.setState = function(state) {
        var d = "disabled";
        var $el = this.$element;
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        state = state + "Text";
        if (data.resetText == null) {
            $el.data("resetText", $el[val]())
        }
        $el[val](data[state] == null ? this.options[state] : data[state]);
        setTimeout($.proxy(function() {
            if (state == "loadingText") {
                this.isLoading = true;
                $el.addClass(d).attr(d, d)
            } else {
                if (this.isLoading) {
                    this.isLoading = false;
                    $el.removeClass(d).removeAttr(d)
                }
            }
        }, this), 0)
    };
    Button.prototype.toggle = function() {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            if ($input.prop("type") == "radio") {
                if ($input.prop("checked") && this.$element.hasClass("active")) {
                    changed = false
                } else {
                    $parent.find(".active").removeClass("active")
                }
            }
            if (changed) {
                $input.prop("checked", !this.$element.hasClass("active")).trigger("change")
            }
        }
        if (changed) {
            this.$element.toggleClass("active")
        }
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.button");
            var options = typeof option == "object" && option;
            if (!data) {
                $this.data("bs.button", (data = new Button(this, options)))
            }
            if (option == "toggle") {
                data.toggle()
            } else {
                if (option) {
                    data.setState(option)
                }
            }
        })
    }
    var old = $.fn.button;
    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
        $.fn.button = old;
        return this
    };
    $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target);
        if (!$btn.hasClass("btn")) {
            $btn = $btn.closest(".btn")
        }
        Plugin.call($btn, "toggle");
        e.preventDefault()
    })
}(jQuery); + function($) {
    var Carousel = function(element, options) {
        this.$element = $(element).on("keydown.bs.carousel", $.proxy(this.keydown, this));
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = options;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        this.options.pause == "hover" && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
    };
    Carousel.VERSION = "3.2.0";
    Carousel.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: true
    };
    Carousel.prototype.keydown = function(e) {
        switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        e.preventDefault()
    };
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
        return this
    };
    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children(".item");
        return this.$items.index(item || this.$active)
    };
    Carousel.prototype.to = function(pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (pos > (this.$items.length - 1) || pos < 0) {
            return
        }
        if (this.sliding) {
            return this.$element.one("slid.bs.carousel", function() {
                that.to(pos)
            })
        }
        if (activeIndex == pos) {
            return this.pause().cycle()
        }
        return this.slide(pos > activeIndex ? "next" : "prev", $(this.$items[pos]))
    };
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true);
        if (this.$element.find(".next, .prev").length && $.support.transition) {
            this.$element.trigger($.support.transition.end);
            this.cycle(true)
        }
        this.interval = clearInterval(this.interval);
        return this
    };
    Carousel.prototype.next = function() {
        if (this.sliding) {
            return
        }
        return this.slide("next")
    };
    Carousel.prototype.prev = function() {
        if (this.sliding) {
            return
        }
        return this.slide("prev")
    };
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active");
        var $next = next || $active[type]();
        var isCycling = this.interval;
        var direction = type == "next" ? "left" : "right";
        var fallback = type == "next" ? "first" : "last";
        var that = this;
        if (!$next.length) {
            if (!this.options.wrap) {
                return
            }
            $next = this.$element.find(".item")[fallback]()
        }
        if ($next.hasClass("active")) {
            return (this.sliding = false)
        }
        var relatedTarget = $next[0];
        var slideEvent = $.Event("slide.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) {
            return
        }
        this.sliding = true;
        isCycling && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
            $nextIndicator && $nextIndicator.addClass("active")
        }
        var slidEvent = $.Event("slid.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        if ($.support.transition && this.$element.hasClass("slide")) {
            $next.addClass(type);
            $next[0].offsetWidth;
            $active.addClass(direction);
            $next.addClass(direction);
            $active.one("bsTransitionEnd", function() {
                $next.removeClass([type, direction].join(" ")).addClass("active");
                $active.removeClass(["active", direction].join(" "));
                that.sliding = false;
                setTimeout(function() {
                    that.$element.trigger(slidEvent)
                }, 0)
            }).emulateTransitionEnd($active.css("transition-duration").slice(0, -1) * 1000)
        } else {
            $active.removeClass("active");
            $next.addClass("active");
            this.sliding = false;
            this.$element.trigger(slidEvent)
        }
        isCycling && this.cycle();
        return this
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.carousel");
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
            var action = typeof option == "string" ? option : options.slide;
            if (!data) {
                $this.data("bs.carousel", (data = new Carousel(this, options)))
            }
            if (typeof option == "number") {
                data.to(option)
            } else {
                if (action) {
                    data[action]()
                } else {
                    if (options.interval) {
                        data.pause().cycle()
                    }
                }
            }
        })
    }
    var old = $.fn.carousel;
    $.fn.carousel = Plugin;
    $.fn.carousel.Constructor = Carousel;
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old;
        return this
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        if (!$target.hasClass("carousel")) {
            return
        }
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr("data-slide-to");
        if (slideIndex) {
            options.interval = false
        }
        Plugin.call($target, options);
        if (slideIndex) {
            $target.data("bs.carousel").to(slideIndex)
        }
        e.preventDefault()
    });
    $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            Plugin.call($carousel, $carousel.data())
        })
    })
}(jQuery); + function($) {
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = $(this.options.parent)
        }
        if (this.options.toggle) {
            this.toggle()
        }
    };
    Collapse.VERSION = "3.2.0";
    Collapse.DEFAULTS = {
        toggle: true
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height"
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) {
            return
        }
        var startEvent = $.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
            return
        }
        var actives = this.$parent && this.$parent.find("> .panel > .in");
        if (actives && actives.length) {
            var hasData = actives.data("bs.collapse");
            if (hasData && hasData.transitioning) {
                return
            }
            Plugin.call(actives, "hide");
            hasData || actives.data("bs.collapse", null)
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse")
        };
        if (!$.support.transition) {
            return complete.call(this)
        }
        var scrollSize = $.camelCase(["scroll", dimension].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
    };
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) {
            return
        }
        var startEvent = $.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
            return
        }
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        if (!$.support.transition) {
            return complete.call(this)
        }
        this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(350)
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.collapse");
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data && options.toggle && option == "show") {
                option = !option
            }
            if (!data) {
                $this.data("bs.collapse", (data = new Collapse(this, options)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this
    };
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var href;
        var $this = $(this);
        var target = $this.attr("data-target") || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        var $target = $(target);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $this.data();
        var parent = $this.attr("data-parent");
        var $parent = parent && $(parent);
        if (!data || !data.transitioning) {
            if ($parent) {
                $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass("collapsed")
            }
            $this[$target.hasClass("in") ? "addClass" : "removeClass"]("collapsed")
        }
        Plugin.call($target, option)
    })
}(jQuery); + function($) {
    var backdrop = ".dropdown-backdrop";
    var toggle = '[data-toggle="dropdown"]';
    var Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle)
    };
    Dropdown.VERSION = "3.2.0";
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if ($this.is(".disabled, :disabled")) {
            return
        }
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        clearMenus();
        if (!isActive) {
            if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus)
            }
            var relatedTarget = {
                relatedTarget: this
            };
            $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) {
                return
            }
            $this.trigger("focus");
            $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget)
        }
        return false
    };
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27)/.test(e.keyCode)) {
            return
        }
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".disabled, :disabled")) {
            return
        }
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27) {
                $parent.find(toggle).trigger("focus")
            }
            return $this.trigger("click")
        }
        var desc = " li:not(.divider):visible a";
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
        if (!$items.length) {
            return
        }
        var index = $items.index($items.filter(":focus"));
        if (e.keyCode == 38 && index > 0) {
            index--
        }
        if (e.keyCode == 40 && index < $items.length - 1) {
            index++
        }
        if (!~index) {
            index = 0
        }
        $items.eq(index).trigger("focus")
    };

    function clearMenus(e) {
        if (e && e.which === 3) {
            return
        }
        $(backdrop).remove();
        $(toggle).each(function() {
            var $parent = getParent($(this));
            var relatedTarget = {
                relatedTarget: this
            };
            if (!$parent.hasClass("open")) {
                return
            }
            $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) {
                return
            }
            $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget)
        })
    }

    function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "")
        }
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent()
    }

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.dropdown");
            if (!data) {
                $this.data("bs.dropdown", (data = new Dropdown(this)))
            }
            if (typeof option == "string") {
                data[option].call($this)
            }
        })
    }
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old;
        return this
    };
    $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)
}(jQuery); + function($) {
    var Modal = function(element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$backdrop = this.isShown = null;
        this.scrollbarWidth = 0;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        }
    };
    Modal.VERSION = "3.2.0";
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    };
    Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) {
            return
        }
        this.isShown = true;
        this.checkScrollbar();
        this.$body.addClass("modal-open");
        this.setScrollbar();
        this.escape();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body)
            }
            that.$element.show().scrollTop(0);
            if (transition) {
                that.$element[0].offsetWidth
            }
            that.$element.addClass("in").attr("aria-hidden", false);
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                that.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : that.$element.trigger("focus").trigger(e)
        })
    };
    Modal.prototype.hide = function(e) {
        if (e) {
            e.preventDefault()
        }
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) {
            return
        }
        this.isShown = false;
        this.$body.removeClass("modal-open");
        this.resetScrollbar();
        this.escape();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    };
    Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus")
            }
        }, this))
    };
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else {
            if (!this.isShown) {
                this.$element.off("keyup.dismiss.bs.modal")
            }
        }
    };
    Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
            that.$element.trigger("hidden.bs.modal")
        })
    };
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    Modal.prototype.backdrop = function(callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                if (e.target !== e.currentTarget) {
                    return
                }
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this));
            if (doAnimate) {
                this.$backdrop[0].offsetWidth
            }
            this.$backdrop.addClass("in");
            if (!callback) {
                return
            }
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(150) : callback()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var callbackRemove = function() {
                    that.removeBackdrop();
                    callback && callback()
                };
                $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(150) : callbackRemove()
            } else {
                if (callback) {
                    callback()
                }
            }
        }
    };
    Modal.prototype.checkScrollbar = function() {
        if (document.body.clientWidth >= window.innerWidth) {
            return
        }
        this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
    };
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css("padding-right") || 0), 10);
        if (this.scrollbarWidth) {
            this.$body.css("padding-right", bodyPad + this.scrollbarWidth)
        }
    };
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    };
    Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth
    };

    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) {
                $this.data("bs.modal", (data = new Modal(this, options)))
            }
            if (typeof option == "string") {
                data[option](_relatedTarget)
            } else {
                if (options.show) {
                    data.show(_relatedTarget)
                }
            }
        })
    }
    var old = $.fn.modal;
    $.fn.modal = Plugin;
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function() {
        $.fn.modal = old;
        return this
    };
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, "")));
        var option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        if ($this.is("a")) {
            e.preventDefault()
        }
        $target.one("show.bs.modal", function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
                return
            }
            $target.one("hidden.bs.modal", function() {
                $this.is(":visible") && $this.trigger("focus")
            })
        });
        Plugin.call($target, option, this)
    })
}(jQuery); + function($) {
    var Tooltip = function(element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", element, options)
    };
    Tooltip.VERSION = "3.2.0";
    Tooltip.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        var triggers = this.options.trigger.split(" ");
        for (var i = triggers.length; i--;) {
            var trigger = triggers[i];
            if (trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else {
                if (trigger != "manual") {
                    var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
                    var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
                    this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                    this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? (this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        })) : this.fixTitle()
    };
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    };
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);
        if (options.delay && typeof options.delay == "number") {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }
        return options
    };
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {};
        var defaults = this.getDefaults();
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) {
                options[key] = value
            }
        });
        return options
    };
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self)
        }
        clearTimeout(self.timeout);
        self.hoverState = "in";
        if (!self.options.delay || !self.options.delay.show) {
            return self.show()
        }
        self.timeout = setTimeout(function() {
            if (self.hoverState == "in") {
                self.show()
            }
        }, self.options.delay.show)
    };
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self)
        }
        clearTimeout(self.timeout);
        self.hoverState = "out";
        if (!self.options.delay || !self.options.delay.hide) {
            return self.hide()
        }
        self.timeout = setTimeout(function() {
            if (self.hoverState == "out") {
                self.hide()
            }
        }, self.options.delay.hide)
    };
    Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var inDom = $.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !inDom) {
                return
            }
            var that = this;
            var $tip = this.tip();
            var tipId = this.getUID(this.type);
            this.setContent();
            $tip.attr("id", tipId);
            this.$element.attr("aria-describedby", tipId);
            if (this.options.animation) {
                $tip.addClass("fade")
            }
            var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
            var autoToken = /\s?auto?\s?/i;
            var autoPlace = autoToken.test(placement);
            if (autoPlace) {
                placement = placement.replace(autoToken, "") || "top"
            }
            $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement).data("bs." + this.type, this);
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            var pos = this.getPosition();
            var actualWidth = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement;
                var $parent = this.$element.parent();
                var parentDim = this.getPosition($parent);
                placement = placement == "bottom" && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? "top" : placement == "top" && pos.top - parentDim.scroll - actualHeight < 0 ? "bottom" : placement == "right" && pos.right + actualWidth > parentDim.width ? "left" : placement == "left" && pos.left - actualWidth < parentDim.left ? "right" : placement;
                $tip.removeClass(orgPlacement).addClass(placement)
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            var complete = function() {
                that.$element.trigger("shown.bs." + that.type);
                that.hoverState = null
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(150) : complete()
        }
    };
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        var marginTop = parseInt($tip.css("margin-top"), 10);
        var marginLeft = parseInt($tip.css("margin-left"), 10);
        if (isNaN(marginTop)) {
            marginTop = 0
        }
        if (isNaN(marginLeft)) {
            marginLeft = 0
        }
        offset.top = offset.top + marginTop;
        offset.left = offset.left + marginLeft;
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0);
        $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (placement == "top" && actualHeight != height) {
            offset.top = offset.top + height - actualHeight
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        if (delta.left) {
            offset.left += delta.left
        } else {
            offset.top += delta.top
        }
        var arrowDelta = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowPosition = delta.left ? "left" : "top";
        var arrowOffsetPosition = delta.left ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
    };
    Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
        this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : "")
    };
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
        $tip.removeClass("fade in top bottom left right")
    };
    Tooltip.prototype.hide = function() {
        var that = this;
        var $tip = this.tip();
        var e = $.Event("hide.bs." + this.type);
        this.$element.removeAttr("aria-describedby");

        function complete() {
            if (that.hoverState != "in") {
                $tip.detach()
            }
            that.$element.trigger("hidden.bs." + that.type)
        }
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
            return
        }
        $tip.removeClass("in");
        $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(150) : complete();
        this.hoverState = null;
        return this
    };
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || typeof($e.attr("data-original-title")) != "string") {
            $e.attr("data-original-title", $e.attr("title") || "").attr("title", "")
        }
    };
    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    };
    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        var isBody = el.tagName == "BODY";
        return $.extend({}, (typeof el.getBoundingClientRect == "function") ? el.getBoundingClientRect() : null, {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
            width: isBody ? $(window).width() : $element.outerWidth(),
            height: isBody ? $(window).height() : $element.outerHeight()
        }, isBody ? {
            top: 0,
            left: 0
        } : $element.offset())
    };
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == "bottom" ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "top" ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "left" ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        }
    };
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return delta
        }
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            if (topEdgeOffset < viewportDimensions.top) {
                delta.top = viewportDimensions.top - topEdgeOffset
            } else {
                if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                    delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
                }
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding;
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            if (leftEdgeOffset < viewportDimensions.left) {
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else {
                if (rightEdgeOffset > viewportDimensions.width) {
                    delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
                }
            }
        }
        return delta
    };
    Tooltip.prototype.getTitle = function() {
        var title;
        var $e = this.$element;
        var o = this.options;
        title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
        return title
    };
    Tooltip.prototype.getUID = function(prefix) {
        do {
            prefix += ~~(Math.random() * 1000000)
        } while (document.getElementById(prefix));
        return prefix
    };
    Tooltip.prototype.tip = function() {
        return (this.$tip = this.$tip || $(this.options.template))
    };
    Tooltip.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"))
    };
    Tooltip.prototype.validate = function() {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    };
    Tooltip.prototype.enable = function() {
        this.enabled = true
    };
    Tooltip.prototype.disable = function() {
        this.enabled = false
    };
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    Tooltip.prototype.toggle = function(e) {
        var self = this;
        if (e) {
            self = $(e.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                $(e.currentTarget).data("bs." + this.type, self)
            }
        }
        self.tip().hasClass("in") ? self.leave(self) : self.enter(self)
    };
    Tooltip.prototype.destroy = function() {
        clearTimeout(this.timeout);
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tooltip");
            var options = typeof option == "object" && option;
            if (!data && option == "destroy") {
                return
            }
            if (!data) {
                $this.data("bs.tooltip", (data = new Tooltip(this, options)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old;
        return this
    }
}(jQuery); + function($) {
    var Popover = function(element, options) {
        this.init("popover", element, options)
    };
    if (!$.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    Popover.VERSION = "3.2.0";
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
    Popover.prototype.constructor = Popover;
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    };
    Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
        $tip.find(".popover-content").empty()[this.options.html ? (typeof content == "string" ? "html" : "append") : "text"](content);
        $tip.removeClass("fade top bottom left right in");
        if (!$tip.find(".popover-title").html()) {
            $tip.find(".popover-title").hide()
        }
    };
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content)
    };
    Popover.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"))
    };
    Popover.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = $(this.options.template)
        }
        return this.$tip
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.popover");
            var options = typeof option == "object" && option;
            if (!data && option == "destroy") {
                return
            }
            if (!data) {
                $this.data("bs.popover", (data = new Popover(this, options)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }
    var old = $.fn.popover;
    $.fn.popover = Plugin;
    $.fn.popover.Constructor = Popover;
    $.fn.popover.noConflict = function() {
        $.fn.popover = old;
        return this
    }
}(jQuery); + function($) {
    function ScrollSpy(element, options) {
        var process = $.proxy(this.process, this);
        this.$body = $("body");
        this.$scrollElement = $(element).is("body") ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", process);
        this.refresh();
        this.process()
    }
    ScrollSpy.VERSION = "3.2.0";
    ScrollSpy.DEFAULTS = {
        offset: 10
    };
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    ScrollSpy.prototype.refresh = function() {
        var offsetMethod = "offset";
        var offsetBase = 0;
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = "position";
            offsetBase = this.$scrollElement.scrollTop()
        }
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        var self = this;
        this.$body.find(this.selector).map(function() {
            var $el = $(this);
            var href = $el.data("target") || $el.attr("href");
            var $href = /^#./.test(href) && $(href);
            return ($href && $href.length && $href.is(":visible") && [
                [$href[offsetMethod]().top + offsetBase, href]
            ]) || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            self.offsets.push(this[0]);
            self.targets.push(this[1])
        })
    };
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;
        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }
        if (activeTarget && scrollTop <= offsets[0]) {
            return activeTarget != (i = targets[0]) && this.activate(i)
        }
        for (i = offsets.length; i--;) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
        }
    };
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target;
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
            active = active.closest("li.dropdown").addClass("active")
        }
        active.trigger("activate.bs.scrollspy")
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.scrollspy");
            var options = typeof option == "object" && option;
            if (!data) {
                $this.data("bs.scrollspy", (data = new ScrollSpy(this, options)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }
    var old = $.fn.scrollspy;
    $.fn.scrollspy = Plugin;
    $.fn.scrollspy.Constructor = ScrollSpy;
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old;
        return this
    };
    $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            Plugin.call($spy, $spy.data())
        })
    })
}(jQuery); + function($) {
    var Tab = function(element) {
        this.element = $(element)
    };
    Tab.VERSION = "3.2.0";
    Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
        }
        if ($this.parent("li").hasClass("active")) {
            return
        }
        var previous = $ul.find(".active:last a")[0];
        var e = $.Event("show.bs.tab", {
            relatedTarget: previous
        });
        $this.trigger(e);
        if (e.isDefaultPrevented()) {
            return
        }
        var $target = $(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function() {
            $this.trigger({
                type: "shown.bs.tab",
                relatedTarget: previous
            })
        })
    };
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $.support.transition && $active.hasClass("fade");

        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            element.addClass("active");
            if (transition) {
                element[0].offsetWidth;
                element.addClass("in")
            } else {
                element.removeClass("fade")
            }
            if (element.parent(".dropdown-menu")) {
                element.closest("li.dropdown").addClass("active")
            }
            callback && callback()
        }
        transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(150) : next();
        $active.removeClass("in")
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tab");
            if (!data) {
                $this.data("bs.tab", (data = new Tab(this)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }
    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function() {
        $.fn.tab = old;
        return this
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault();
        Plugin.call($(this), "show")
    })
}(jQuery); + function($) {
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);
        this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(element);
        this.affixed = this.unpin = this.pinnedOffset = null;
        this.checkPosition()
    };
    Affix.VERSION = "3.2.0";
    Affix.RESET = "affix affix-top affix-bottom";
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    };
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return (this.pinnedOffset = position.top - scrollTop)
    };
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    };
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) {
            return
        }
        var scrollHeight = $(document).height();
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        if (typeof offset != "object") {
            offsetBottom = offsetTop = offset
        }
        if (typeof offsetTop == "function") {
            offsetTop = offset.top(this.$element)
        }
        if (typeof offsetBottom == "function") {
            offsetBottom = offset.bottom(this.$element)
        }
        var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? "bottom" : offsetTop != null && (scrollTop <= offsetTop) ? "top" : false;
        if (this.affixed === affix) {
            return
        }
        if (this.unpin != null) {
            this.$element.css("top", "")
        }
        var affixType = "affix" + (affix ? "-" + affix : "");
        var e = $.Event(affixType + ".bs.affix");
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
            return
        }
        this.affixed = affix;
        this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
        this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace("affix", "affixed")));
        if (affix == "bottom") {
            this.$element.offset({
                top: scrollHeight - this.$element.height() - offsetBottom
            })
        }
    };

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.affix");
            var options = typeof option == "object" && option;
            if (!data) {
                $this.data("bs.affix", (data = new Affix(this, options)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }
    var old = $.fn.affix;
    $.fn.affix = Plugin;
    $.fn.affix.Constructor = Affix;
    $.fn.affix.noConflict = function() {
        $.fn.affix = old;
        return this
    };
    $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this);
            var data = $spy.data();
            data.offset = data.offset || {};
            if (data.offsetBottom) {
                data.offset.bottom = data.offsetBottom
            }
            if (data.offsetTop) {
                data.offset.top = data.offsetTop
            }
            Plugin.call($spy, data)
        })
    })
}(jQuery);
self = (typeof window !== "undefined") ? window : ((typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) ? self : {});
var Prism = (function() {
    var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
    var _ = self.Prism = {
        util: {
            encode: function(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias)
                } else {
                    if (_.util.type(tokens) === "Array") {
                        return tokens.map(_.util.encode)
                    } else {
                        return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    }
                }
            },
            type: function(o) {
                return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1]
            },
            clone: function(o) {
                var type = _.util.type(o);
                switch (type) {
                    case "Object":
                        var clone = {};
                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = _.util.clone(o[key])
                            }
                        }
                        return clone;
                    case "Array":
                        return o.slice()
                }
                return o
            }
        },
        languages: {
            extend: function(id, redef) {
                var lang = _.util.clone(_.languages[id]);
                for (var key in redef) {
                    lang[key] = redef[key]
                }
                return lang
            },
            insertBefore: function(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];
                if (arguments.length == 2) {
                    insert = arguments[1];
                    for (var newToken in insert) {
                        if (insert.hasOwnProperty(newToken)) {
                            grammar[newToken] = insert[newToken]
                        }
                    }
                    return grammar
                }
                var ret = {};
                for (var token in grammar) {
                    if (grammar.hasOwnProperty(token)) {
                        if (token == before) {
                            for (var newToken in insert) {
                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken]
                                }
                            }
                        }
                        ret[token] = grammar[token]
                    }
                }
                _.languages.DFS(_.languages, function(key, value) {
                    if (value === root[inside] && key != inside) {
                        this[key] = ret
                    }
                });
                return root[inside] = ret
            },
            DFS: function(o, callback, type) {
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);
                        if (_.util.type(o[i]) === "Object") {
                            _.languages.DFS(o[i], callback)
                        } else {
                            if (_.util.type(o[i]) === "Array") {
                                _.languages.DFS(o[i], callback, i)
                            }
                        }
                    }
                }
            }
        },
        highlightAll: function(async, callback) {
            var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (var i = 0, element; element = elements[i++];) {
                _.highlightElement(element, async === true, callback)
            }
        },
        highlightElement: function(element, async, callback) {
            var language, grammar, parent = element;
            while (parent && !lang.test(parent.className)) {
                parent = parent.parentNode
            }
            if (parent) {
                language = (parent.className.match(lang) || [, ""])[1];
                grammar = _.languages[language]
            }
            if (!grammar) {
                return
            }
            element.className = element.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
            parent = element.parentNode;
            if (/pre/i.test(parent.nodeName)) {
                parent.className = parent.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language
            }
            var code = element.textContent;
            if (!code) {
                return
            }
            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };
            _.hooks.run("before-highlight", env);
            if (async && self.Worker) {
                var worker = new Worker(_.filename);
                worker.onmessage = function(evt) {
                    env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);
                    _.hooks.run("before-insert", env);
                    env.element.innerHTML = env.highlightedCode;
                    callback && callback.call(env.element);
                    _.hooks.run("after-highlight", env)
                };
                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code
                }))
            } else {
                env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
                _.hooks.run("before-insert", env);
                env.element.innerHTML = env.highlightedCode;
                callback && callback.call(element);
                _.hooks.run("after-highlight", env)
            }
        },
        highlight: function(text, grammar, language) {
            var tokens = _.tokenize(text, grammar);
            return Token.stringify(_.util.encode(tokens), language)
        },
        tokenize: function(text, grammar, language) {
            var Token = _.Token;
            var strarr = [text];
            var rest = grammar.rest;
            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token]
                }
                delete grammar.rest
            }
            tokenloop: for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue
                }
                var patterns = grammar[token];
                patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
                for (var j = 0; j < patterns.length; ++j) {
                    var pattern = patterns[j],
                        inside = pattern.inside,
                        lookbehind = !!pattern.lookbehind,
                        lookbehindLength = 0,
                        alias = pattern.alias;
                    pattern = pattern.pattern || pattern;
                    for (var i = 0; i < strarr.length; i++) {
                        var str = strarr[i];
                        if (strarr.length > text.length) {
                            break tokenloop
                        }
                        if (str instanceof Token) {
                            continue
                        }
                        pattern.lastIndex = 0;
                        var match = pattern.exec(str);
                        if (match) {
                            if (lookbehind) {
                                lookbehindLength = match[1].length
                            }
                            var from = match.index - 1 + lookbehindLength,
                                match = match[0].slice(lookbehindLength),
                                len = match.length,
                                to = from + len,
                                before = str.slice(0, from + 1),
                                after = str.slice(to + 1);
                            var args = [i, 1];
                            if (before) {
                                args.push(before)
                            }
                            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias);
                            args.push(wrapped);
                            if (after) {
                                args.push(after)
                            }
                            Array.prototype.splice.apply(strarr, args)
                        }
                    }
                }
            }
            return strarr
        },
        hooks: {
            all: {},
            add: function(name, callback) {
                var hooks = _.hooks.all;
                hooks[name] = hooks[name] || [];
                hooks[name].push(callback)
            },
            run: function(name, env) {
                var callbacks = _.hooks.all[name];
                if (!callbacks || !callbacks.length) {
                    return
                }
                for (var i = 0, callback; callback = callbacks[i++];) {
                    callback(env)
                }
            }
        }
    };
    var Token = _.Token = function(type, content, alias) {
        this.type = type;
        this.content = content;
        this.alias = alias
    };
    Token.stringify = function(o, language, parent) {
        if (typeof o == "string") {
            return o
        }
        if (Object.prototype.toString.call(o) == "[object Array]") {
            return o.map(function(element) {
                return Token.stringify(element, language, o)
            }).join("")
        }
        var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language: language,
            parent: parent
        };
        if (env.type == "comment") {
            env.attributes.spellcheck = "true"
        }
        if (o.alias) {
            var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
            Array.prototype.push.apply(env.classes, aliases)
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
            attributes += name + '="' + (env.attributes[name] || "") + '"'
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '" ' + attributes + ">" + env.content + "</" + env.tag + ">"
    };
    if (!self.document) {
        if (!self.addEventListener) {
            return self.Prism
        }
        self.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code;
            self.postMessage(JSON.stringify(_.util.encode(_.tokenize(code, _.languages[lang]))));
            self.close()
        }, false);
        return self.Prism
    }
    var script = document.getElementsByTagName("script");
    script = script[script.length - 1];
    if (script) {
        _.filename = script.src;
        if (document.addEventListener && !script.hasAttribute("data-manual")) {
            document.addEventListener("DOMContentLoaded", _.highlightAll)
        }
    }
    return self.Prism
})();
if (typeof module !== "undefined" && module.exports) {
    module.exports = Prism
}
Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/g,
    prolog: /<\?.+?\?>/,
    doctype: /<!DOCTYPE.+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,
        inside: {
            tag: {
                pattern: /^<\/?[\w:-]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
                inside: {
                    punctuation: /=|>|"/g
                }
            },
            punctuation: /\/?>/g,
            "attr-name": {
                pattern: /[\w:-]+/g,
                inside: {
                    namespace: /^[\w-]+?:/
                }
            }
        }
    },
    entity: /\&#?[\da-z]{1,8};/gi
};
Prism.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
        env.attributes.title = env.content.replace(/&amp;/, "&")
    }
});
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//g,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
        inside: {
            punctuation: /[;:]/g
        }
    },
    url: /url\((["']?).*?\1\)/gi,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
    property: /(\b|\B)[\w-]+(?=\s*:)/ig,
    string: /("|')(\\?.)*?\1/g,
    important: /\B!important\b/gi,
    punctuation: /[\{\};:]/g,
    "function": /[-a-z0-9]+(?=\()/ig
};
if (Prism.languages.markup) {
    Prism.languages.insertBefore("markup", "tag", {
        style: {
            pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/ig,
            inside: {
                tag: {
                    pattern: /<style[\w\W]*?>|<\/style>/ig,
                    inside: Prism.languages.markup.tag.inside
                },
                rest: Prism.languages.css
            },
            alias: "language-css"
        }
    });
    Prism.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|').+?\1/ig,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/ig,
                    inside: Prism.languages.markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/gi,
                    inside: Prism.languages.css
                }
            },
            alias: "language-css"
        }
    }, Prism.languages.markup.tag)
}
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//g,
        lookbehind: true
    }, {
        pattern: /(^|[^\\:])\/\/.*?(\r?\n|$)/g,
        lookbehind: true
    }],
    string: /("|')(\\?.)*?\1/g,
    "class-name": {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,
        lookbehind: true,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
    "boolean": /\b(true|false)\b/g,
    "function": {
        pattern: /[a-z0-9_]+\(/ig,
        inside: {
            punctuation: /\(/
        }
    },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g
});
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    }
});
if (Prism.languages.markup) {
    Prism.languages.insertBefore("markup", "tag", {
        script: {
            pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/ig,
            inside: {
                tag: {
                    pattern: /<script[\w\W]*?>|<\/script>/ig,
                    inside: Prism.languages.markup.tag.inside
                },
                rest: Prism.languages.javascript
            },
            alias: "language-javascript"
        }
    })
}
Prism.languages.java = Prism.languages.extend("clike", {
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,
    operator: {
        pattern: /(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/gm,
        lookbehind: true
    }
});
Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/ig,
    constant: /\b[A-Z0-9_]{2,}\b/g,
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g,
        lookbehind: true
    }
});
Prism.languages.insertBefore("php", "keyword", {
    delimiter: /(\?>|<\?php|<\?)/ig,
    variable: /(\$\w+)\b/ig,
    "package": {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
        lookbehind: true,
        inside: {
            punctuation: /\\/
        }
    }
});
Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/g,
        lookbehind: true
    }
});
if (Prism.languages.markup) {
    Prism.hooks.add("before-highlight", function(env) {
        if (env.language !== "php") {
            return
        }
        env.tokenStack = [];
        env.backupCode = env.code;
        env.code = env.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/ig, function(match) {
            env.tokenStack.push(match);
            return "{{{PHP" + env.tokenStack.length + "}}}"
        })
    });
    Prism.hooks.add("before-insert", function(env) {
        if (env.language === "php") {
            env.code = env.backupCode;
            delete env.backupCode
        }
    });
    Prism.hooks.add("after-highlight", function(env) {
        if (env.language !== "php") {
            return
        }
        for (var i = 0, t; t = env.tokenStack[i]; i++) {
            env.highlightedCode = env.highlightedCode.replace("{{{PHP" + (i + 1) + "}}}", Prism.highlight(t, env.grammar, "php"))
        }
        env.element.innerHTML = env.highlightedCode
    });
    Prism.hooks.add("wrap", function(env) {
        if (env.language === "php" && env.type === "markup") {
            env.content = env.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>')
        }
    });
    Prism.languages.insertBefore("php", "comment", {
        markup: {
            pattern: /<[^?]\/?(.*?)>/g,
            inside: Prism.languages.markup
        },
        php: /\{\{\{PHP[0-9]+\}\}\}/g
    })
}
Prism.languages.insertBefore("php", "variable", {
    "this": /\$this/g,
    global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,
    scope: {
        pattern: /\b[\w\\]+::/g,
        inside: {
            keyword: /(static|self|parent)/,
            punctuation: /(::|\\)/
        }
    }
});
Prism.languages.c = Prism.languages.extend("clike", {
    string: /("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/g,
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//g
});
Prism.languages.insertBefore("c", "string", {
    property: {
        pattern: /((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/gi,
        lookbehind: true,
        inside: {
            string: {
                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/g,
                lookbehind: true,
            }
        }
    }
});
delete Prism.languages.c["class-name"];
delete Prism.languages.c["boolean"];
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
        lookbehind: true
    },
    string: /"""[\s\S]+?"""|("|')(\\?.)*?\1/g,
    keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,
    "boolean": /\b(True|False)\b/g,
    number: /\b-?(0x)?\d*\.?[\da-f]+\b/g,
    operator: /[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g
};
Prism.languages.http = {
    "request-line": {
        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,
        inside: {
            property: /^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/g,
            "attr-name": /:\w+/g
        }
    },
    "response-status": {
        pattern: /^HTTP\/1.[01] [0-9]+.*/g,
        inside: {
            property: /[0-9]+[A-Z\s-]+$/ig
        }
    },
    keyword: /^[\w-]+:(?=.+)/gm
};
var httpLanguages = {
    "application/json": Prism.languages.javascript,
    "application/xml": Prism.languages.markup,
    "text/xml": Prism.languages.markup,
    "text/html": Prism.languages.markup
};
for (var contentType in httpLanguages) {
    if (httpLanguages[contentType]) {
        var options = {};
        options[contentType] = {
            pattern: new RegExp("(content-type:\\s*" + contentType + "[\\w\\W]*?)\\n\\n[\\w\\W]*", "gi"),
            lookbehind: true,
            inside: {
                rest: httpLanguages[contentType]
            }
        };
        Prism.languages.insertBefore("http", "keyword", options)
    }
}
Prism.languages.ruby = Prism.languages.extend("clike", {
    comment: /#[^\r\n]*(\r?\n|$)/g,
    keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
    builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g
});
Prism.languages.insertBefore("ruby", "keyword", {
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    },
    variable: /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
    symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g
});
Prism.languages.csharp = Prism.languages.extend("clike", {
    keyword: /\b(abstract|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/g,
    string: /@?("|')(\\?.)*?\1/g,
    preprocessor: /^\s*#.*/gm,
    number: /\b-?(0x)?\d*\.?\d+\b/g
});
Prism.languages.swift = Prism.languages.extend("clike", {
    keyword: /\b(as|associativity|break|case|class|continue|convenience|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|final|for|func|get|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|required|return|right|safe|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned|unsafe|var|weak|where|while|willSet|__COLUMN__|__FILE__|__FUNCTION__|__LINE__)\b/g,
    number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/gi,
    constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/g,
    atrule: /\@\b(IBOutlet|IBDesignable|IBAction|IBInspectable|class_protocol|exported|noreturn|NSCopying|NSManaged|objc|UIApplicationMain|auto_closure)\b/g,
    builtin: /\b([A-Z]\S+|abs|advance|alignof|alignofValue|assert|contains|count|countElements|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lazy|lexicographicalCompare|map|max|maxElement|min|minElement|numericCast|overlaps|partition|prefix|print|println|reduce|reflect|reverse|sizeof|sizeofValue|sort|sorted|split|startsWith|stride|strideof|strideofValue|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|withExtendedLifetime|withUnsafeMutablePointer|withUnsafeMutablePointers|withUnsafePointer|withUnsafePointers|withVaList)\b/g
});
Prism.languages.objectivec = Prism.languages.extend("c", {
    keyword: /(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/g,
    string: /(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/g,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/g
});
/*
 * jQuery Password Strength plugin for Twitter Bootstrap
 *
 * Copyright (c) 2008-2013 Tane Piper
 * Copyright (c) 2013 Alejandro Blanco
 * Dual licensed under the MIT and GPL licenses.
 */
(function(jQuery)

    {
        var rulesEngine = {};
        try {
            if (!jQuery && module && module.exports) {
                var jQuery = require("jquery"),
                    jsdom = require("jsdom").jsdom;
                jQuery = jQuery(jsdom().parentWindow)
            }
        } catch (ignore) {}(function($, rulesEngine) {
            var validation = {};
            rulesEngine.forbiddenSequences = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "qwertyuiop", "asdfghjkl", "zxcvbnm", "!@#$%^&*()_+"];
            validation.wordNotEmail = function(options, word, score) {
                if (word.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)) {
                    return score
                }
                return 0
            };
            validation.wordLength = function(options, word, score) {
                var wordlen = word.length,
                    lenScore = Math.pow(wordlen, options.rules.raisePower);
                if (wordlen < options.common.minChar) {
                    lenScore = (lenScore + score)
                }
                return lenScore
            };
            validation.wordSimilarToUsername = function(options, word, score) {
                var username = $(options.common.usernameField).val();
                if (username && word.toLowerCase().match(username.toLowerCase())) {
                    return score
                }
                return 0
            };
            validation.wordTwoCharacterClasses = function(options, word, score) {
                if (word.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) || (word.match(/([a-zA-Z])/) && word.match(/([0-9])/)) || (word.match(/(.[!,@,#,$,%,\^,&,*,?,_,~])/) && word.match(/[a-zA-Z0-9_]/))) {
                    return score
                }
                return 0
            };
            validation.wordRepetitions = function(options, word, score) {
                if (word.match(/(.)\1\1/)) {
                    return score
                }
                return 0
            };
            validation.wordSequences = function(options, word, score) {
                var found = false,
                    j;
                if (word.length > 2) {
                    $.each(rulesEngine.forbiddenSequences, function(idx, seq) {
                        var sequences = [seq, seq.split("").reverse().join("")];
                        $.each(sequences, function(idx, sequence) {
                            for (j = 0; j < (word.length - 2); j += 1) {
                                if (sequence.indexOf(word.toLowerCase().substring(j, j + 3)) > -1) {
                                    found = true
                                }
                            }
                        })
                    });
                    if (found) {
                        return score
                    }
                }
                return 0
            };
            validation.wordLowercase = function(options, word, score) {
                return word.match(/[a-z]/) && score
            };
            validation.wordUppercase = function(options, word, score) {
                return word.match(/[A-Z]/) && score
            };
            validation.wordOneNumber = function(options, word, score) {
                return word.match(/\d+/) && score
            };
            validation.wordThreeNumbers = function(options, word, score) {
                return word.match(/(.*[0-9].*[0-9].*[0-9])/) && score
            };
            validation.wordOneSpecialChar = function(options, word, score) {
                return word.match(/.[!,@,#,$,%,\^,&,*,?,_,~]/) && score
            };
            validation.wordTwoSpecialChar = function(options, word, score) {
                return word.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/) && score
            };
            validation.wordUpperLowerCombo = function(options, word, score) {
                return word.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && score
            };
            validation.wordLetterNumberCombo = function(options, word, score) {
                return word.match(/([a-zA-Z])/) && word.match(/([0-9])/) && score
            };
            validation.wordLetterNumberCharCombo = function(options, word, score) {
                return word.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/) && score
            };
            rulesEngine.validation = validation;
            rulesEngine.executeRules = function(options, word) {
                var totalScore = 0;
                $.each(options.rules.activated, function(rule, active) {
                    if (active) {
                        var score = options.rules.scores[rule],
                            funct = rulesEngine.validation[rule],
                            result, errorMessage;
                        if (!$.isFunction(funct)) {
                            funct = options.rules.extra[rule]
                        }
                        if ($.isFunction(funct)) {
                            result = funct(options, word, score);
                            if (result) {
                                totalScore += result
                            }
                            if (result < 0 || (!$.isNumeric(result) && !result)) {
                                errorMessage = options.ui.spanError(options, rule);
                                if (errorMessage.length > 0) {
                                    options.instances.errors.push(errorMessage)
                                }
                            }
                        }
                    }
                });
                return totalScore
            }
        }(jQuery, rulesEngine));
        try {
            if (module && module.exports) {
                module.exports = rulesEngine
            }
        } catch (ignore) {}
        var defaultOptions = {};
        defaultOptions.common = {};
        defaultOptions.common.minChar = 6;
        defaultOptions.common.usernameField = "#username";
        defaultOptions.common.userInputs = [];
        defaultOptions.common.onLoad = undefined;
        defaultOptions.common.onKeyUp = undefined;
        defaultOptions.common.zxcvbn = false;
        defaultOptions.common.debug = false;
        defaultOptions.rules = {};
        defaultOptions.rules.extra = {};
        defaultOptions.rules.scores = {
            wordNotEmail: -100,
            wordLength: -50,
            wordSimilarToUsername: -100,
            wordSequences: -50,
            wordTwoCharacterClasses: 2,
            wordRepetitions: -25,
            wordLowercase: 1,
            wordUppercase: 3,
            wordOneNumber: 3,
            wordThreeNumbers: 5,
            wordOneSpecialChar: 3,
            wordTwoSpecialChar: 5,
            wordUpperLowerCombo: 2,
            wordLetterNumberCombo: 2,
            wordLetterNumberCharCombo: 2
        };
        defaultOptions.rules.activated = {
            wordNotEmail: true,
            wordLength: true,
            wordSimilarToUsername: true,
            wordSequences: true,
            wordTwoCharacterClasses: false,
            wordRepetitions: false,
            wordLowercase: true,
            wordUppercase: true,
            wordOneNumber: true,
            wordThreeNumbers: true,
            wordOneSpecialChar: true,
            wordTwoSpecialChar: true,
            wordUpperLowerCombo: true,
            wordLetterNumberCombo: true,
            wordLetterNumberCharCombo: true
        };
        defaultOptions.rules.raisePower = 1.4;
        defaultOptions.ui = {};
        defaultOptions.ui.bootstrap2 = false;
        defaultOptions.ui.showProgressBar = true;
        defaultOptions.ui.showPopover = false;
        defaultOptions.ui.showStatus = false;
        defaultOptions.ui.spanError = function(options, key) {
            var text = options.ui.errorMessages[key];
            if (!text) {
                return ""
            }
            return '<span style="color: #d52929">' + text + "</span>"
        };
        defaultOptions.ui.errorMessages = {
            wordLength: "Your password is too short",
            wordNotEmail: "Do not use your email as your password",
            wordSimilarToUsername: "Your password cannot contain your username",
            wordTwoCharacterClasses: "Use different character classes",
            wordRepetitions: "Too many repetitions",
            wordSequences: "Your password contains sequences"
        };
        defaultOptions.ui.verdicts = ["Weak", "Normal", "Medium", "Strong", "Very Strong"];
        defaultOptions.ui.showVerdicts = true;
        defaultOptions.ui.showVerdictsInsideProgressBar = false;
        defaultOptions.ui.showErrors = false;
        defaultOptions.ui.container = undefined;
        defaultOptions.ui.viewports = {
            progress: undefined,
            verdict: undefined,
            errors: undefined
        };
        defaultOptions.ui.scores = [14, 26, 38, 50];
        var ui = {};
        (function($, ui) {
            var barClasses = ["danger", "warning", "success"],
                statusClasses = ["error", "warning", "success"];
            ui.getContainer = function(options, $el) {
                var $container;
                $container = $(options.ui.container);
                if (!($container && $container.length === 1)) {
                    $container = $el.parent()
                }
                return $container
            };
            ui.findElement = function($container, viewport, cssSelector) {
                if (viewport) {
                    return $container.find(viewport).find(cssSelector)
                }
                return $container.find(cssSelector)
            };
            ui.getUIElements = function(options, $el) {
                var $container, result;
                if (options.instances.viewports) {
                    return options.instances.viewports
                }
                $container = ui.getContainer(options, $el);
                result = {};
                result.$progressbar = ui.findElement($container, options.ui.viewports.progress, "div.progress");
                if (options.ui.showVerdictsInsideProgressBar) {
                    result.$verdict = result.$progressbar.find("span.password-verdict")
                }
                if (!options.ui.showPopover) {
                    if (!options.ui.showVerdictsInsideProgressBar) {
                        result.$verdict = ui.findElement($container, options.ui.viewports.verdict, "span.password-verdict")
                    }
                    result.$errors = ui.findElement($container, options.ui.viewports.errors, "ul.error-list")
                }
                options.instances.viewports = result;
                return result
            };
            ui.initProgressBar = function(options, $el) {
                var $container = ui.getContainer(options, $el),
                    progressbar = "<div class='progress'><div class='";
                if (!options.ui.bootstrap2) {
                    progressbar += "progress-"
                }
                progressbar += "bar'>";
                if (options.ui.showVerdictsInsideProgressBar) {
                    progressbar += "<span class='password-verdict'></span>"
                }
                progressbar += "</div></div>";
                if (options.ui.viewports.progress) {
                    $container.find(options.ui.viewports.progress).append(progressbar)
                } else {
                    $(progressbar).insertAfter($el)
                }
            };
            ui.initHelper = function(options, $el, html, viewport) {
                var $container = ui.getContainer(options, $el);
                if (viewport) {
                    $container.find(viewport).append(html)
                } else {
                    $(html).insertAfter($el)
                }
            };
            ui.initVerdict = function(options, $el) {
                ui.initHelper(options, $el, "<span class='password-verdict'></span>", options.ui.viewports.verdict)
            };
            ui.initErrorList = function(options, $el) {
                ui.initHelper(options, $el, "<ul class='error-list'></ul>", options.ui.viewports.errors)
            };
            ui.initPopover = function(options, $el) {
                $el.popover("destroy");
                $el.popover({
                    html: true,
                    placement: "bottom",
                    trigger: "manual",
                    content: " "
                })
            };
            ui.initUI = function(options, $el) {
                if (options.ui.showPopover) {
                    ui.initPopover(options, $el)
                } else {
                    if (options.ui.showErrors) {
                        ui.initErrorList(options, $el)
                    }
                    if (options.ui.showVerdicts && !options.ui.showVerdictsInsideProgressBar) {
                        ui.initVerdict(options, $el)
                    }
                }
                if (options.ui.showProgressBar) {
                    ui.initProgressBar(options, $el)
                }
            };
            ui.possibleProgressBarClasses = ["danger", "warning", "success"];
            ui.updateProgressBar = function(options, $el, cssClass, percentage) {
                var $progressbar = ui.getUIElements(options, $el).$progressbar,
                    $bar = $progressbar.find(".progress-bar"),
                    cssPrefix = "progress-";
                if (options.ui.bootstrap2) {
                    $bar = $progressbar.find(".bar");
                    cssPrefix = ""
                }
                $.each(ui.possibleProgressBarClasses, function(idx, value) {
                    $bar.removeClass(cssPrefix + "bar-" + value)
                });
                $bar.addClass(cssPrefix + "bar-" + barClasses[cssClass]);
                $bar.css("width", percentage + "%")
            };
            ui.updateVerdict = function(options, $el, text) {
                var $verdict = ui.getUIElements(options, $el).$verdict;
                $verdict.text(text)
            };
            ui.updateErrors = function(options, $el) {
                var $errors = ui.getUIElements(options, $el).$errors,
                    html = "";
                $.each(options.instances.errors, function(idx, err) {
                    html += "<li>" + err + "</li>"
                });
                $errors.html(html)
            };
            ui.updatePopover = function(options, $el, verdictText) {
                var popover = $el.data("bs.popover"),
                    html = "",
                    hide = true;
                if (options.ui.showVerdicts && !options.ui.showVerdictsInsideProgressBar && verdictText.length > 0) {
                    html = "<h5><span class='password-verdict'>" + verdictText + "</span></h5>";
                    hide = false
                }
                if (options.ui.showErrors) {
                    html += "<div>Errors:<ul class='error-list' style='margin-bottom: 0;'>";
                    $.each(options.instances.errors, function(idx, err) {
                        html += "<li>" + err + "</li>";
                        hide = false
                    });
                    html += "</ul></div>"
                }
                if (hide) {
                    $el.popover("hide");
                    return
                }
                if (options.ui.bootstrap2) {
                    popover = $el.data("popover")
                }
                if (popover.$arrow && popover.$arrow.parents("body").length > 0) {
                    $el.find("+ .popover .popover-content").html(html)
                } else {
                    popover.options.content = html;
                    $el.popover("show")
                }
            };
            ui.updateFieldStatus = function(options, $el, cssClass) {
                var targetClass = options.ui.bootstrap2 ? ".control-group" : ".form-group",
                    $container = $el.parents(targetClass).first();
                $.each(statusClasses, function(idx, css) {
                    if (!options.ui.bootstrap2) {
                        css = "has-" + css
                    }
                    $container.removeClass(css)
                });
                cssClass = statusClasses[cssClass];
                if (!options.ui.bootstrap2) {
                    cssClass = "has-" + cssClass
                }
                $container.addClass(cssClass)
            };
            ui.percentage = function(score, maximun) {
                var result = Math.floor(100 * score / maximun);
                result = result < 0 ? 0 : result;
                result = result > 100 ? 100 : result;
                return result
            };
            ui.getVerdictAndCssClass = function(options, score) {
                var cssClass, verdictText, level;
                if (score <= 0) {
                    cssClass = 0;
                    level = -1;
                    verdictText = options.ui.verdicts[0]
                } else {
                    if (score < options.ui.scores[0]) {
                        cssClass = 0;
                        level = 0;
                        verdictText = options.ui.verdicts[0]
                    } else {
                        if (score < options.ui.scores[1]) {
                            cssClass = 0;
                            level = 1;
                            verdictText = options.ui.verdicts[1]
                        } else {
                            if (score < options.ui.scores[2]) {
                                cssClass = 1;
                                level = 2;
                                verdictText = options.ui.verdicts[2]
                            } else {
                                if (score < options.ui.scores[3]) {
                                    cssClass = 1;
                                    level = 3;
                                    verdictText = options.ui.verdicts[3]
                                } else {
                                    cssClass = 2;
                                    level = 4;
                                    verdictText = options.ui.verdicts[4]
                                }
                            }
                        }
                    }
                }
                return [verdictText, cssClass, level]
            };
            ui.updateUI = function(options, $el, score) {
                var cssClass, barPercentage, verdictText;
                cssClass = ui.getVerdictAndCssClass(options, score);
                verdictText = cssClass[0];
                cssClass = cssClass[1];
                if (options.ui.showProgressBar) {
                    barPercentage = ui.percentage(score, options.ui.scores[3]);
                    ui.updateProgressBar(options, $el, cssClass, barPercentage);
                    if (options.ui.showVerdictsInsideProgressBar) {
                        ui.updateVerdict(options, $el, verdictText)
                    }
                }
                if (options.ui.showStatus) {
                    ui.updateFieldStatus(options, $el, cssClass)
                }
                if (options.ui.showPopover) {
                    ui.updatePopover(options, $el, verdictText)
                } else {
                    if (options.ui.showVerdicts && !options.ui.showVerdictsInsideProgressBar) {
                        ui.updateVerdict(options, $el, verdictText)
                    }
                    if (options.ui.showErrors) {
                        ui.updateErrors(options, $el)
                    }
                }
            }
        }(jQuery, ui));
        var methods = {};
        (function($, methods) {
            var onKeyUp, applyToAll;
            onKeyUp = function(event) {
                var $el = $(event.target),
                    options = $el.data("pwstrength-bootstrap"),
                    word = $el.val(),
                    userInputs, verdictText, verdictLevel, score;
                if (options === undefined) {
                    return
                }
                options.instances.errors = [];
                if (options.common.zxcvbn) {
                    userInputs = [];
                    $.each(options.common.userInputs, function(idx, selector) {
                        userInputs.push($(selector).val())
                    });
                    userInputs.push($(options.common.usernameField).val());
                    score = zxcvbn(word, userInputs).entropy
                } else {
                    score = rulesEngine.executeRules(options, word)
                }
                ui.updateUI(options, $el, score);
                verdictText = ui.getVerdictAndCssClass(options, score);
                verdictLevel = verdictText[2];
                verdictText = verdictText[0];
                if (options.common.debug) {
                    console.log(score + " - " + verdictText)
                }
                if ($.isFunction(options.common.onKeyUp)) {
                    options.common.onKeyUp(event, {
                        score: score,
                        verdictText: verdictText,
                        verdictLevel: verdictLevel
                    })
                }
            };
            methods.init = function(settings) {
                this.each(function(idx, el) {
                    var clonedDefaults = $.extend(true, {}, defaultOptions),
                        localOptions = $.extend(true, clonedDefaults, settings),
                        $el = $(el);
                    localOptions.instances = {};
                    $el.data("pwstrength-bootstrap", localOptions);
                    $el.on("keyup", onKeyUp);
                    $el.on("change", onKeyUp);
                    $el.on("onpaste", onKeyUp);
                    ui.initUI(localOptions, $el);
                    if ($.trim($el.val())) {
                        $el.trigger("keyup")
                    }
                    if ($.isFunction(localOptions.common.onLoad)) {
                        localOptions.common.onLoad()
                    }
                });
                return this
            };
            methods.destroy = function() {
                this.each(function(idx, el) {
                    var $el = $(el),
                        options = $el.data("pwstrength-bootstrap"),
                        elements = ui.getUIElements(options, $el);
                    elements.$progressbar.remove();
                    elements.$verdict.remove();
                    elements.$errors.remove();
                    $el.removeData("pwstrength-bootstrap")
                })
            };
            methods.forceUpdate = function() {
                this.each(function(idx, el) {
                    var event = {
                        target: el
                    };
                    onKeyUp(event)
                })
            };
            methods.addRule = function(name, method, score, active) {
                this.each(function(idx, el) {
                    var options = $(el).data("pwstrength-bootstrap");
                    options.rules.activated[name] = active;
                    options.rules.scores[name] = score;
                    options.rules.extra[name] = method
                })
            };
            applyToAll = function(rule, prop, value) {
                this.each(function(idx, el) {
                    $(el).data("pwstrength-bootstrap").rules[prop][rule] = value
                })
            };
            methods.changeScore = function(rule, score) {
                applyToAll.call(this, rule, "scores", score)
            };
            methods.ruleActive = function(rule, active) {
                applyToAll.call(this, rule, "activated", active)
            };
            $.fn.pwstrength = function(method) {
                var result;
                if (methods[method]) {
                    result = methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
                } else {
                    if (typeof method === "object" || !method) {
                        result = methods.init.apply(this, arguments)
                    } else {
                        $.error("Method " + method + " does not exist on jQuery.pwstrength-bootstrap")
                    }
                }
                return result
            }
        }(jQuery, methods))
    }(jQuery));
$(document).ready(function() {
    $("kbd").on("click", function() {
        if ($(window).width() >= 767) {
            $(this).selectText()
        }
    });
    $("[data-toggle=offcanvas]").click(function() {
        $(".row-offcanvas").toggleClass("active")
    })
});
$.fn.selectText = function() {
    return $(this).each(function(index, el) {
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(el);
            range.select()
        } else {
            if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(el);
                window.getSelection().addRange(range)
            }
        }
    })
};

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var trident = ua.indexOf("Trident/");
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
    }
    if (trident > 0) {
        var rv = ua.indexOf("rv:");
        return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10)
    }
    return false
}
$(document).ready(function() {
    if (!Modernizr.input.placeholder || detectIE()) {
        $("input[placeholder]").each(function() {
            $(this).attr("title", $(this).attr("placeholder"));
            $(this).tooltip({
                html: true,
                container: "body"
            })
        })
    }
});
Number.prototype.number_with_delimiter = function(precision) {
    var number = this + "",
        delimiter = ",",
        precision = precision || 2;
    var split = number.split(".");
    split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
    if (split.length == 1) {
        split[split.length] = "00"
    }
    while (split[1].length < precision) {
        split[1] = split[1].concat("0")
    }
    while (split[1].length > precision) {
        split[1] = split[1].substring(0, precision)
    }
    return split.join(".")
};
BigNumber.prototype.number_with_delimiter = function(precision) {
    var number = this + "",
        delimiter = ",",
        precision = precision || 2;
    var split = number.split(".");
    split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
    if (split.length == 1) {
        split[split.length] = "00"
    }
    while (split[1].length < precision) {
        split[1] = split[1].concat("0")
    }
    while (split[1].length > precision) {
        split[1] = split[1].substring(0, precision)
    }
    return split.join(".")
};
Number.prototype.integer_with_delimiter = function(delimiter) {
    var number = this + "",
        delimiter = delimiter || ",";
    var split = number.split(".");
    split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
    return split.join(".")
};
(function($) {
    var defaults = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: false,
            getWidthFrom: ""
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;
                if (scrollTop <= etse) {
                    if (s.currentTop !== null) {
                        s.stickyElement.css("position", "").css("top", "");
                        s.stickyElement.parent().removeClass(s.className);
                        s.currentTop = null
                    }
                } else {
                    var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSpacing
                    } else {
                        newTop = s.topSpacing
                    }
                    if (s.currentTop != newTop) {
                        s.stickyElement.css("position", "fixed").css("top", newTop);
                        if (typeof s.getWidthFrom !== "undefined") {
                            s.stickyElement.css("width", $(s.getWidthFrom).width())
                        }
                        s.stickyElement.parent().addClass(s.className);
                        s.currentTop = newTop
                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height()
        },
        methods = {
            init: function(options) {
                var o = $.extend(defaults, options);
                return this.each(function() {
                    var stickyElement = $(this);
                    var stickyId = stickyElement.attr("id");
                    var wrapper = $("<div></div>").attr("id", stickyId + "-sticky-wrapper").addClass(o.wrapperClassName);
                    stickyElement.wrapAll(wrapper);
                    if (o.center) {
                        stickyElement.parent().css({
                            width: stickyElement.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        })
                    }
                    if (stickyElement.css("float") == "right") {
                        stickyElement.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        })
                    }
                    var stickyWrapper = stickyElement.parent();
                    stickyWrapper.css("height", stickyElement.outerHeight());
                    sticked.push({
                        topSpacing: o.topSpacing,
                        bottomSpacing: o.bottomSpacing,
                        stickyElement: stickyElement,
                        currentTop: null,
                        stickyWrapper: stickyWrapper,
                        className: o.className,
                        getWidthFrom: o.getWidthFrom
                    })
                })
            },
            update: scroller,
            unstick: function(options) {
                return this.each(function() {
                    var unstickyElement = $(this);
                    removeIdx = -1;
                    for (var i = 0; i < sticked.length; i++) {
                        if (sticked[i].stickyElement.get(0) == unstickyElement.get(0)) {
                            removeIdx = i
                        }
                    }
                    if (removeIdx != -1) {
                        sticked.splice(removeIdx, 1);
                        unstickyElement.unwrap();
                        unstickyElement.removeAttr("style")
                    }
                })
            }
        };
    if (window.addEventListener) {
        window.addEventListener("scroll", scroller, false);
        window.addEventListener("resize", resizer, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onscroll", scroller);
            window.attachEvent("onresize", resizer)
        }
    }
    $.fn.sticky = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof method === "object" || !method) {
                return methods.init.apply(this, arguments)
            } else {
                $.error("Method " + method + " does not exist on jQuery.sticky")
            }
        }
    };
    $.fn.unstick = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof method === "object" || !method) {
                return methods.unstick.apply(this, arguments)
            } else {
                $.error("Method " + method + " does not exist on jQuery.sticky")
            }
        }
    };
    $(function() {
        setTimeout(scroller, 0)
    })
})(jQuery);

function gethumanhashes(hps) {
    var human_form = hps + " H/s";
    if (hps < 1000) {
        human_form = hps + " H/s"
    } else {
        if (hps < 1000000) {
            human_form = (hps / 1000).toFixed(2) + " KH/s"
        } else {
            if (hps < 1000000000) {
                human_form = (hps / 1000000).toFixed(2) + " MH/s"
            } else {
                if (hps < 1000000000000) {
                    human_form = (hps / 1000000000).toFixed(2) + " GH/s"
                } else {
                    if (hps < 1000000000000000) {
                        human_form = (hps / 1000000000000).toFixed(2) + " TH/s"
                    } else {
                        human_form = (hps / 1000000000000000).toFixed(2) + " PH/s"
                    }
                }
            }
        }
    }
    return human_form
}
$(document).ready(function() {
    $.noty.defaults = {
        layout: "topCenter",
        theme: "defaultTheme",
        type: "error",
        text: "",
        dismissQueue: true,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500
        },
        timeout: 8500,
        force: false,
        modal: false,
        maxVisible: 5,
        killer: false,
        closeWith: ["click"],
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {}
        },
        buttons: false
    };
    $("form *[type=submit]").click(function() {
        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
        $(this).attr("clicked", "true")
    });
    $.validator.addMethod("alphaNumeric", function(value, element) {
        return this.optional(element) || /^[0-9a-zA-Z]+$/.test(value)
    }, "Secret PIN must contain only numbers and letters");
    $.validator.setDefaults({
        onkeyup: false,
        onclick: false,
        onfocusout: false,
        onfocusin: false,
        onkeydown: false,
        onsubmit: true,
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            "user[email]": {
                email: true,
                required: true
            },
            subject: {
                minlength: 2,
                required: true
            },
            pin_new: {
                minlength: 8,
                alphaNumeric: true,
                required: true
            },
            pin_new_confirm: {
                equalTo: "#pin_new",
                required: true
            },
            "user[password]": {
                minlength: 8,
                required: true
            },
            "user[password_confirmation]": {
                equalTo: "#user_password",
                required: true
            },
            "contact[email]": {
                required: true,
                email: true
            },
            "contact[name]": {
                required: true,
                minlength: 1
            },
            "contact[message]": {
                minlength: 10,
                required: true
            },
            amount: {
                number: true,
                required: true
            }
        },
        messages: {
            "user[password]": {
                required: "Please enter your password.",
                minlength: jQuery.validator.format("Passwords must be at least {0} characters."),
            },
            "user[password_confirmation]": {
                required: "Please confirm your password.",
                equalTo: "Password and confirmed password fields do not match."
            },
            pin_new: {
                required: "Please enter a Secret PIN.",
                minlength: jQuery.validator.format("Secret PIN must be at least {0} character."),
            },
            pin_new_confirm: {
                equalTo: "Secret PINs do not match.",
                required: "Please confirm your Secret PIN."
            },
            "user[email]": {
                required: "Please enter your email address."
            },
            "contact[email]": {
                required: "Please enter your email address."
            },
            "contact[message]": {
                required: "Please enter a message.",
                minlength: "Message is too short."
            },
            "contact[name]": {
                required: "Please enter your name."
            },
            payment_address: {
                required: "Please enter a valid payment (destination) address."
            },
            amount: {
                required: "Please enter an amount of coins to send.",
                number: "Amount must be a number."
            },
            pin_current: {
                required: "Please enter your Secret PIN."
            }
        },
        submitHandler: function() {
            var sbutton = $("*[type=submit][clicked=true]");
            if (sbutton.hasClass("api-submit") == false) {
                sbutton.addClass("disabled");
                sbutton.parents("form").get(0).submit()
            }
        },
        errorPlacement: function(error, element) {
            noty({
                text: error.text()
            })
        }
    });
    $("form").each(function() {
        $(this).validate()
    })
});

function methodAccessed(prog_lang, params, method, version) {
    var plength = params.length;
    var curl_url = "https://block.io/api/v" + String(version) + "/";
    if (method == "create_forwarding_address") {
        curl_url = "https://pf.block.io/api/v" + String(version) + "/"
    }
    var methods = {
        ruby: "BlockIo.",
        python: "block_io.",
        nodejs: "block_io.",
        php: "$block_io->",
        curl: curl_url
    };
    var args = "";
    if (prog_lang == "ruby") {
        args = " "
    }
    if (prog_lang == "python") {
        args = "("
    }
    if (prog_lang == "curl") {
        args = "/?"
    }
    if (prog_lang == "nodejs") {
        args = "({"
    }
    if (prog_lang == "php") {
        args = "(array("
    }
    for (i = 0; i < plength; i++) {
        params[i]["name"] = encodeHTML(params[i]["name"]);
        if (params[i]["name"] == "url") {
            params[i]["value"] = encodeURI(encodeHTMLURL(params[i]["value"]))
        } else {
            params[i]["value"] = encodeHTML(params[i]["value"])
        }
        if (prog_lang == "curl") {
            if (i >= 1) {
                args += "&amp;"
            }
            args += params[i]["name"] + "=" + params[i]["value"]
        }
        if (params[i]["name"] != "api_key") {
            if (prog_lang == "ruby") {
                if (i > 1) {
                    args += ", "
                }
                args += ":" + params[i]["name"] + " => '" + params[i]["value"] + "'"
            }
            if (prog_lang == "php") {
                if (i > 1) {
                    args += ", "
                }
                args += "'" + params[i]["name"] + "' => '" + params[i]["value"] + "'"
            }
            if (prog_lang == "nodejs") {
                if (i > 1) {
                    args += ", "
                }
                args += "'" + params[i]["name"] + "': '" + params[i]["value"] + "'"
            }
            if (prog_lang == "python") {
                if (i > 1) {
                    args += ", "
                }
                args += params[i]["name"] + "='" + params[i]["value"] + "'"
            }
        }
    }
    if (prog_lang == "ruby") {
        args += ""
    }
    if (prog_lang == "python") {
        args += ")"
    }
    if (prog_lang == "curl") {
        args += ""
    }
    if (prog_lang == "nodejs") {
        args += "},console.log);"
    }
    if (prog_lang == "php") {
        args += "))"
    }
    return methods[prog_lang] + method + args
}

function encodeHTML(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
}

function encodeHTMLURL(s) {
    return s.replace(/</g, "&lt;").replace(/"/g, "&quot;")
}
$(document).ready(function() {
    $(".api-form").submit(function(e) {
        var postData = $(this).serializeArray();
        for (i = 0; i < postData.length; i++) {
            postData[i].value = encodeHTML(postData[i].value)
        }
        var formURL = $(this).attr("action");
        var rand_id = $(this).attr("id");
        var prog_lang = $(this).attr("prog-lang");
        var api_call = $(this).attr("api-call");
        var thisform = $(this);
        var version = $(this).attr("version");

        function updateResponses(textStatus, jqXHR) {
            var status_class = "text-success";
            if (textStatus != "success") {
                status_class = "text-danger"
            }
            var action_or_method = "Method";
            if (prog_lang == "curl") {
                action_or_method = "Action"
            }
            $("#response-" + rand_id + " .api-url").html("<p><h4>Executed " + action_or_method + '</h4> <pre class="notranslate"><code id="url-' + rand_id + '" class="language-ruby">' + methodAccessed(prog_lang, postData, api_call, version) + "</code></pre></p>");
            $("#response-" + rand_id + " .api-response").html('<h4 class="notranslate">Response: ' + jqXHR.status + ' <span class="' + status_class + '">' + textStatus.toUpperCase() + '</span></h4><pre class="notranslate"><code id="code-' + rand_id + '" class="language-ruby">' + jqXHR.responseText + "</code></pre>");
            $("#response-" + rand_id).show();
            thisform.closest("form").find(":submit").attr("disabled", false);
            Prism.highlightElement($("#code-" + rand_id)[0]);
            Prism.highlightElement($("#url-" + rand_id)[0])
        }
        $.ajax({
            url: formURL,
            type: "GET",
            data: postData,
            beforeSend: function(jqXHR, settings) {
                jqXHR.url = settings.url
            },
            success: function(data, textStatus, jqXHR) {
                updateResponses(textStatus, jqXHR)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                updateResponses(textStatus, jqXHR)
            }
        });
        e.preventDefault();
        $(this).closest("form").find(":submit").attr("disabled", "disabled")
    })
});

function reloadPage(firstTime) {
    if (firstTime === undefined) {
        firstTime = false
    }
    extraParams = "?time=" + (Math.random().toString(16).slice(2));
    if (firstTime) {
        extraParams += "&show_intro=true"
    }
    clean_url = document.URL.split("?")[0].split("#");
    window.location.replace(clean_url[0] + extraParams)
}
var curNetwork = "";

function assignClickEvents(curNetwork) {
    $("#pf-understand-button").unbind().click(function() {
        $("#pf-actual-body").removeClass("hidden");
        $("#pf-warning-body").addClass("hidden")
    });
    $(".withdrawbutton").unbind();
    $(".withdrawbutton").click(function() {
        // var avail_bal_str = $(this).closest("div").find(".available_balance").text();
        // $("#withdraw-bal-available-def").text(avail_bal_str);
        // $("#from-user-ids-def").text($(this).closest("div").find(".from_user_ids").text());
        // $("#withdraw-from-def").text($(this).closest("div").find(".withdraw_from").text());
        // if (BigNumber(avail_bal_str.replace(/,/g, "")) > 0) {
        //     $("#modalWithdrawAmount" + curNetwork).modal("show")
        // }
        $("#modalWithdrawAmount" + curNetwork).modal("show")
    });
    $(".depositbutton").unbind().click(function() {
        $("#outer-deposit-address").text($(this).closest("div").find(".outer_deposit_address").text());
        $("#modalDeposit" + curNetwork).modal("show")
    });
    $(".pfbutton").unbind().click(function() {
        var thisButton = $(this);
        thisButton.attr("disabled", true);
        var toLabel = $(this).closest("div").find(".from_labels").text();
        var toAddress = $(this).closest("div").find(".outer_deposit_address").text();
        var curApiKey = $("#curApiKey").text();
        noty({
            text: "Generating a Forwarding Address for <strong>" + toLabel + "</strong>...",
            type: "warning",
            layout: "topCenter",
            closeWith: ["click"]
        });
        var jqxhr = $.post("https://pf.block.io/api/v2/create_forwarding_address", "api_key=" + curApiKey + "&to_address=" + toAddress, function(data) {
            $(".pf-forwarding-address").text(data.data.forwarding_address);
            $(".pf-forwarding-private-key").text(data.data.forwarding_private_key);
            $(".pf-to-address").text(toAddress);
            $(".pf-to-label").text(toLabel);
            $("#pfQrcodeDiv").empty();
            $("#pfQrcodeDiv").qrcode({
                render: "canvas",
                width: 200,
                height: 200,
                size: 200,
                ecLevel: "L",
                text: data.data.forwarding_address
            });
            $("#modalPf" + curNetwork).modal("show")
        }, "json").fail(function() {
            noty({
                text: "Forwarding Address Generation Failed.",
                type: "error",
                layout: "topCenter",
                closeWith: ["click"]
            });
            console.log("error")
        }).always(function() {
            pf_executing = false;
            thisButton.attr("disabled", false)
        })
    });
    $(".archivalbutton").click(function() {
        $(this).closest("div").find("form")[0].submit()
    });
    $(".checkbalancebutton").click(function() {
        var curAddress = $(this).closest("div").find(".withdraw_from").text();
        var balanceElementId = "";
        refreshBalance(balanceElementId, curAddress, $(this).find("i"))
    });
    $(".poptip").tooltip({
        html: true,
        container: "body"
    })
}

function refreshBalance(balanceElementId, address, curButton) {
    curButton.prop("disabled", true);
    curButton.addClass("fa-spin");
    var curApiKey = $("#curApiKey").text();
    var curPrecision = parseInt($("#curPrecision").text());
    $.getJSON("/api/v2/get_address_balance/?api_key=" + curApiKey + "&address=" + address).done(function(json) {
        curButton.prop("disabled", false);
        curButton.removeClass("fa-spin");
        var curBalance = BigNumber(json.data.available_balance).number_with_delimiter(curPrecision);
        var curPendingReceived = BigNumber(json.data.pending_received_balance).number_with_delimiter(curPrecision);
        $("#balances_" + address).find("kbd").text(curBalance);
        if (BigNumber(json.data.available_balance) == 0) {
            $("#balances_" + address).find("kbd").removeClass("text-success").addClass("text-muted")
        }
        $("#balances_" + address).find(".currency_symbol").removeClass("hidden");
        if (BigNumber(json.data.pending_received_balance) > 0) {
            $("#balances_" + address).find(".pending_amount").text("+" + curPendingReceived)
        }
    }).fail(function(jqxhr, textStatus, error) {
        curButton.prop("disabled", false);
        curButton.removeClass("fa-spin");
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err)
    })
}

function populateTxTable(jqXHR) {
    var minConfs = parseInt($("#minConfirmations").text());
    var precision = parseInt($("#precision").text());
    var currencySymbol = $(".currency_symbol:first").text();
    var response = JSON.parse(jqXHR.responseText);
    var rows = "";
    if (response.data["txs"].length) {
        $("#txHistoryContainer").removeClass("hidden")
    }
    $.each(response.data["txs"], function(i) {
        var curobj = response.data["txs"][i];
        rows += "<tr>";
        if (curobj.amounts_sent) {
            curobj.time -= 1
        }
        rows += '<td class="hidden">' + curobj.time + "</td>";
        var tooltip = 'poptip" data-toggle=tooltip title="Confirmations: ' + BigNumber(curobj.confirmations).number_with_delimiter(0).split(".")[0] + "<br>(Recommended: " + minConfs + ')" data-placement=right';
        rows += '<td class="vert-align">';
        if (curobj.from_green_address == true) {
            rows += '<i class="fa fa-bolt ';
            if (curobj.confirmations < minConfs) {
                rows += "text-success"
            } else {
                rows += "text-muted"
            }
            rows += " " + tooltip + "></i>"
        } else {
            if (curobj.confirmations < minConfs) {
                rows += '<i class="fa fa-warning text-danger ' + tooltip + "></i>"
            } else {
                rows += '<i class="fa fa-check text-muted ' + tooltip + "></i>"
            }
        }
        rows += "</td>";
        rows += '<td class="vert-align"><span data-livestamp="' + curobj.time + '"></span></td>';
        rows += '<td class="text-right">';
        curtype = "amounts_received";
        cursign = "+";
        curcolor = "text-success";
        if (curobj.amounts_sent) {
            curtype = "amounts_sent";
            cursign = "-";
            curcolor = "text-danger"
        }
        var sum = BigNumber(0);
        if (curtype == "amounts_sent") {
            sum = BigNumber(curobj.total_amount_sent).absoluteValue()
        } else {
            $.each(curobj[curtype], function(i) {
                sum = sum.plus(BigNumber(curobj[curtype][i]["amount"]).absoluteValue())
            })
        }
        rows += '<span class="' + curcolor + '"><kbd class="selectable-plain-no-color ' + curcolor + '">' + cursign + sum.number_with_delimiter(precision) + "</kbd></span> ";
        rows += '<span class="text-muted">' + currencySymbol + "</span>";
        rows += "</td>";
        rows += '<td class="vert-align poptip" data-toggle=tooltip data-original-title="" title="Network Confidence: ' + (curobj.confidence * 100) + '%"><span class="donut">' + parseInt(curobj.confidence * 100) + "/100</span></td>";
        rows += '<td class="vert-align"><a href="https://chain.so/tx/' + response.data["network"] + "/" + curobj.txid + '" target="_blank" rel="noreferrer" class="btn btn-xs btn-default">View</a></td>';
        rows += "</tr>"
    });
    $("#txTable tbody").append(rows);
    sortTxTable();
    $(".donut").peity("donut")
}

function sortTxTable() {
    var rows = $("#txTable tbody tr").get();
    rows.sort(function(a, b) {
        var A = parseInt($(a).children("td").eq(0).text());
        var B = parseInt($(b).children("td").eq(0).text());
        if (A < B) {
            return -1
        }
        if (A > B) {
            return 1
        }
        return 0
    });
    rows = rows.reverse();
    $.each(rows, function(index, row) {
        $("#txTable").children("tbody").append(row)
    });
    $(".poptip").tooltip({
        html: true,
        container: "body"
    })
}
document.addEventListener("DOMContentLoaded", function() {
    $(".logoutlink").click(function() {
        $("#signerout")[0].submit()
    });
    $("#modalEPTButton").click(function() {
        $("#modalExampleProcessTransactions").modal("show")
    });
    $("#modalECWButton").click(function() {
        $("#modalExampleCreateWallets").modal("show")
    });
    $("#modalEUGAButton").click(function() {
        $("#modalExampleUseGreenAddresses").modal("show")
    });
    if ($("#shex").length) {
        $("#username").val($("#shex").text());
        setTimeout(function() {
            $("#username").val($("#shex").text())
        }, 7500)
    }
    if ($("#firsttime").length) {
        $("#modalIntro").modal("show")
    }
    if ($("#reloader").length) {
        setTimeout(reloadPage, 5000)
    }
    $("#mnemonicShowV1").click(function() {
        $("#modalMnemonic").modal("show")
    });
    $("table.COINtable").each(function() {
        $(this).dataTable({
            bLengthChange: false,
            bInfo: false,
            bFilter: true
        })
    });
    $("#modalTestnets").click(function() {
        $("#modalTestnetDesc").modal("show")
    });
    $("#modalAKs").click(function() {
        $("#modalApiKeys").modal("show")
    });
    curNetwork = $.trim($(".cur_network").text());
    $("table.COINtable").on("page.dt", function() {
        setTimeout(function() {
            assignClickEvents(curNetwork)
        }, 2500)
    });
    assignClickEvents(curNetwork);
    $(".createaddressbutton").click(function() {
        $("#modalCreateAddress" + curNetwork).modal("show")
    });
    $(".reloadbutton").click(function() {
        reloadPage()
    });
    $("#withdrawalButton").click(function() {
        var api_key = $(this).closest("form").find("[name='api_key']").val();
        var from_user_ids = $(this).closest("form").find("[name='from_user_ids']").val();
        var payment_address = $(this).closest("form").find("[name='" + $(this).closest("form").find(".payment_address_id").text() + "']").val();
        var amount = $(this).closest("form").find("[name='" + $(this).closest("form").find(".amount_id").text() + "']").val().replace(/,/g, "");
        var pin_current = $(this).closest("form").find("[name='" + $(this).closest("form").find(".pin_current_id").text() + "']").val();
        var csrf_token = $(this).closest("form").find("[name='authenticity_token']").val();
        var avail_bal = BigNumber($("#withdraw-bal-available-def").text().replace(/,/g, ""));
        executeWithdrawal(api_key, from_user_ids, payment_address, amount, pin_current, csrf_token, avail_bal)
    });
    $("#modalWithdrawAmount" + curNetwork).on("show.bs.modal", function(e) {
        var from_user_ids = $("#from-user-ids-def").text();
        $("#from_user_ids_" + curNetwork).attr("value", from_user_ids);
        var withdraw_from_text = "";
        if (from_user_ids.length == "") {
            withdraw_from_text = "Withdrawing from ANY addresses."
        } else {
            withdraw_from_text = "Withdrawing from " + $("#withdraw-from-def").text()
        }
        $("#withdraw-from").html('<i class="fa fa-info-sign" style="margin-right: 5px;"></i> <kbd class="selectable-plain">' + withdraw_from_text + "</kbd>");
        $("#withdraw-bal-available").text($("#withdraw-bal-available-def").text())
    });
    $("#modalDeposit" + curNetwork).on("show.bs.modal", function(e) {
        $(".deposit-address").html($("#outer-deposit-address").text());
        var dep_addr = $("#outer-deposit-address").text();
        $("#qrcodeDiv").empty();
        $("#qrcodeDiv").qrcode({
            render: "canvas",
            width: 200,
            height: 200,
            size: 200,
            ecLevel: "L",
            text: dep_addr
        })
    });
    $("#cancelSecretsButton").click(function() {
        overwriteMnemonic()
    });
    $("#saveSecretsButton").click(function() {
        sendSecrets()
    });
    $("#changeSecretButton").click(function() {
        var pin_set = ($(this).closest("form").find(".go_pin_set").text() == "true");
        var mnemonic = $(this).closest("form").find("[name='" + $(this).closest("form").find(".go_mnemonic_id").text() + "']").val();
        var pin_current = $(this).closest("form").find("[name='" + $(this).closest("form").find(".go_pin_current_id").text() + "']").val();
        var pin_new = $(this).closest("form").find("[name='" + $(this).closest("form").find(".go_pin_new_id").text() + "']").val();
        var pin_new_confirm = $(this).closest("form").find("[name='" + $(this).closest("form").find(".go_pin_new_confirm_id").text() + "']").val();
        var csrf_token = $(this).closest("form").find("[name='authenticity_token']").val();
        var pubkeys_a = $(this).closest("form").find(".go_pubkeys").text().split(",");
        var secrets_a = $(this).closest("form").find(".go_secrets").text().split(",");
        var networks_a = $(this).closest("form").find(".go_networks").text().split(",");
        var secrets = {};
        var pubkeys = {};
        for (var i = 0; i < networks_a.length; i++) {
            secrets[$.trim(networks_a[i])] = $.trim(secrets_a[i]);
            pubkeys[$.trim(networks_a[i])] = $.trim(pubkeys_a[i])
        }
        goChanger({
            pin_set: pin_set,
            mnemonic: mnemonic,
            pin_current: pin_current,
            pin_new: pin_new,
            pin_new_confirm: pin_new_confirm,
            secrets: JSON.stringify(secrets),
            pubkeys: JSON.stringify(pubkeys),
            csrf_token: csrf_token
        })
    });
    if ($("#myTab").length) {
        $("#myTab li:eq(0) a").tab("show")
    }
    $("#isPayingAttention").click(function() {
        if (this.checked) {
            $("#saveSecretsButton").removeClass("disabled")
        } else {
            $("#saveSecretsButton").addClass("disabled")
        }
    });
    $("#modalMnemonic").on("hidden.bs.modal", function() {
        noty({
            text: "You cancelled the PIN change.",
            type: "error",
            layout: "topCenter",
            closeWith: ["click"]
        });
        $("#changeSecretButton").removeClass("disabled")
    });
    $(".noty_info").each(function() {
        if ($(this).find(".noty_inner_text").length) {
            var new_location = $(this).find(".noty_location").text();
            noty({
                text: $(this).find(".noty_outer_text").html(),
                type: $(this).find(".noty_type").text(),
                modal: true,
                layout: $(this).find(".noty_layout").text(),
                buttons: [{
                    addClass: "btn btn-success btn-sm",
                    text: $(this).find(".noty_inner_text").text(),
                    onClick: function($noty) {
                        $noty.close();
                        window.location = new_location
                    }
                }]
            })
        } else {
            if ($(this).find(".noty_outer_text").length) {
                noty({
                    text: $(this).find(".noty_outer_text").html(),
                    type: $(this).find(".noty_type").text(),
                    layout: $(this).find(".noty_layout").text()
                })
            }
        }
    });
    $(".api_init").each(function() {
        var rand_id = $(this).text();
        $("#try-" + rand_id).click(function() {
            $("." + rand_id).toggle();
            $("#hide-" + rand_id).toggle();
            $("#try-" + rand_id).toggle()
        });
        $("#hide-" + rand_id).click(function() {
            $("." + rand_id).toggle();
            $("#try-" + rand_id).toggle();
            $("#hide-" + rand_id).toggle()
        });
        $(".submitter-" + rand_id).click(function() {
            $("#response-" + rand_id).hide()
        })
    });
    if ($("#pwdcontainer").length || $("#pincontainer").length) {
        var container = "#pwdcontainer";
        var userInputs = ["#user_email", "#user_current_password"];
        var inputField = "#user_password";
        if ($("#pincontainer").length) {
            container = "#pincontainer";
            userInputs = ["[name='" + $(".go_pin_current_id").text() + "']"];
            inputField = "[name='" + $(".go_pin_new_id").text() + "']"
        }
        "use strict";
        var options = {};
        options.ui = {
            container: container,
            viewports: {
                progress: ".pwstrength_viewport_progress",
                verdict: ".pwstrength_viewport_verdict"
            }
        };
        options.common = {
            onLoad: function() {},
            minChar: 8,
            showVerdicts: false,
            zxcvbn: true,
            userInputs: userInputs
        };
        if ($(inputField).length) {
            $(inputField).pwstrength(options)
        }
    }
    $("pre").addClass("notranslate");
    if ($(".maintenance-notice").length) {
        noty({
            text: "<strong>Maintenance Notice</strong>: " + $(".maintenance-notice").text() + ". Services will be unavailable during this time. Thank you for understanding.",
            type: "warning",
            layout: "topCenter"
        })
    }
    if ($("#txTable").length) {
        var curApiKey = $("#curApiKey").text();
        // $.ajax({
        //     type: "GET",
        //     url: ("/api/v2/get_transactions/?api_key=" + curApiKey + "&type=received"),
        //     dataType: "json",
        //     success: function(data, textStatus, jqXHR) {
        //         populateTxTable(jqXHR)
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         console.log("Failed to retrieve received transactions.")
        //     }
        // });
        // $.ajax({
        //     type: "GET",
        //     url: ("/api/v2/get_transactions/?api_key=" + curApiKey + "&type=sent"),
        //     dataType: "json",
        //     success: function(data, textStatus, jqXHR) {
        //         populateTxTable(jqXHR)
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         console.log("Failed to retrieve sent transactions.")
        //     }
        // })
    }
    $(".donut").peity("donut");
    $(".disableonclick").click(function() {
        $(this).attr("disabled", true);
        $(this).closest("form")[0].submit()
    });
    $(".poptip").tooltip({
        html: true,
        container: "body"
    })
});
$(document).ready(function() {
    if ($("#jplist-addrs").length) {
        // $("#jplist-addrs").jplist({
        //     itemsBox: ".list",
        //     itemPath: ".list-item",
        //     panelPath: ".jplist-panel",
        //     redrawCallback: function(collection, $dataview, statuses) {
        //         assignClickEvents(curNetwork)
        //     }
        // })
    }
    if ($("#network_fee_display").length) {
        $("#priority_selector").change(function() {
            $("#priority").text($("#priority_selector").val());
            $("#estimated-network-fee").text($("#priority_" + $("#priority").text()).text());
            $("#network_fee_display").text($("#estimated-network-fee").text());
            $("#network_fee_display").removeClass("text-muted");
            $("#network_fee_display").addClass("text-warning")
        }).change()
    }
});

function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data
}
QR8bitByte.prototype = {
    getLength: function(buffer) {
        return this.data.length
    },
    write: function(buffer) {
        for (var i = 0; i < this.data.length; i++) {
            buffer.put(this.data.charCodeAt(i), 8)
        }
    }
};

function QRCode(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = new Array()
}
QRCode.prototype = {
    addData: function(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null
    },
    isDark: function(row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
            throw new Error(row + "," + col)
        }
        return this.modules[row][col]
    },
    getModuleCount: function() {
        return this.moduleCount
    },
    make: function() {
        if (this.typeNumber < 1) {
            var typeNumber = 1;
            for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
                var buffer = new QRBitBuffer();
                var totalDataCount = 0;
                for (var i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].dataCount
                }
                for (var i = 0; i < this.dataList.length; i++) {
                    var data = this.dataList[i];
                    buffer.put(data.mode, 4);
                    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
                    data.write(buffer)
                }
                if (buffer.getLengthInBits() <= totalDataCount * 8) {
                    break
                }
            }
            this.typeNumber = typeNumber
        }
        this.makeImpl(false, this.getBestMaskPattern())
    },
    makeImpl: function(test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for (var row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);
            for (var col = 0; col < this.moduleCount; col++) {
                this.modules[row][col] = null
            }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this.typeNumber >= 7) {
            this.setupTypeNumber(test)
        }
        if (this.dataCache == null) {
            this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)
        }
        this.mapData(this.dataCache, maskPattern)
    },
    setupPositionProbePattern: function(row, col) {
        for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r) {
                continue
            }
            for (var c = -1; c <= 7; c++) {
                if (col + c <= -1 || this.moduleCount <= col + c) {
                    continue
                }
                if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || (0 <= c && c <= 6 && (r == 0 || r == 6)) || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
                    this.modules[row + r][col + c] = true
                } else {
                    this.modules[row + r][col + c] = false
                }
            }
        }
    },
    getBestMaskPattern: function() {
        var minLostPoint = 0;
        var pattern = 0;
        for (var i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(this);
            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i
            }
        }
        return pattern
    },
    createMovieClip: function(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for (var row = 0; row < this.modules.length; row++) {
            var y = row * cs;
            for (var col = 0; col < this.modules[row].length; col++) {
                var x = col * cs;
                var dark = this.modules[row][col];
                if (dark) {
                    qr_mc.beginFill(0, 100);
                    qr_mc.moveTo(x, y);
                    qr_mc.lineTo(x + cs, y);
                    qr_mc.lineTo(x + cs, y + cs);
                    qr_mc.lineTo(x, y + cs);
                    qr_mc.endFill()
                }
            }
        }
        return qr_mc
    },
    setupTimingPattern: function() {
        for (var r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
                continue
            }
            this.modules[r][6] = (r % 2 == 0)
        }
        for (var c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
                continue
            }
            this.modules[6][c] = (c % 2 == 0)
        }
    },
    setupPositionAdjustPattern: function() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for (var i = 0; i < pos.length; i++) {
            for (var j = 0; j < pos.length; j++) {
                var row = pos[i];
                var col = pos[j];
                if (this.modules[row][col] != null) {
                    continue
                }
                for (var r = -2; r <= 2; r++) {
                    for (var c = -2; c <= 2; c++) {
                        if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
                            this.modules[row + r][col + c] = true
                        } else {
                            this.modules[row + r][col + c] = false
                        }
                    }
                }
            }
        }
    },
    setupTypeNumber: function(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (var i = 0; i < 18; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod
        }
        for (var i = 0; i < 18; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod
        }
    },
    setupTypeInfo: function(test, maskPattern) {
        var data = (this.errorCorrectLevel << 3) | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for (var i = 0; i < 15; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            if (i < 6) {
                this.modules[i][8] = mod
            } else {
                if (i < 8) {
                    this.modules[i + 1][8] = mod
                } else {
                    this.modules[this.moduleCount - 15 + i][8] = mod
                }
            }
        }
        for (var i = 0; i < 15; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            if (i < 8) {
                this.modules[8][this.moduleCount - i - 1] = mod
            } else {
                if (i < 9) {
                    this.modules[8][15 - i - 1 + 1] = mod
                } else {
                    this.modules[8][15 - i - 1] = mod
                }
            }
        }
        this.modules[this.moduleCount - 8][8] = (!test)
    },
    mapData: function(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) {
                col--
            }
            while (true) {
                for (var c = 0; c < 2; c++) {
                    if (this.modules[row][col - c] == null) {
                        var dark = false;
                        if (byteIndex < data.length) {
                            dark = (((data[byteIndex] >>> bitIndex) & 1) == 1)
                        }
                        var mask = QRUtil.getMask(maskPattern, row, col - c);
                        if (mask) {
                            dark = !dark
                        }
                        this.modules[row][col - c] = dark;
                        bitIndex--;
                        if (bitIndex == -1) {
                            byteIndex++;
                            bitIndex = 7
                        }
                    }
                }
                row += inc;
                if (row < 0 || this.moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break
                }
            }
        }
    }
};
QRCode.PAD0 = 236;
QRCode.PAD1 = 17;
QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer)
    }
    var totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")")
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4)
    }
    while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false)
    }
    while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break
        }
        buffer.put(QRCode.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break
        }
        buffer.put(QRCode.PAD1, 8)
    }
    return QRCode.createBytes(buffer, rsBlocks)
};
QRCode.createBytes = function(buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
            dcdata[r][i] = 255 & buffer.buffer[i + offset]
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0
        }
    }
    var totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
        totalCodeCount += rsBlocks[i].totalCount
    }
    var data = new Array(totalCodeCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
            if (i < dcdata[r].length) {
                data[index++] = dcdata[r][i]
            }
        }
    }
    for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
            if (i < ecdata[r].length) {
                data[index++] = ecdata[r][i]
            }
        }
    }
    return data
};
var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
};
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
var QRUtil = {
    PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
    ],
    G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
    getBCHTypeInfo: function(data) {
        var d = data << 10;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15)))
        }
        return ((data << 10) | d) ^ QRUtil.G15_MASK
    },
    getBCHTypeNumber: function(data) {
        var d = data << 12;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18)))
        }
        return (data << 12) | d
    },
    getBCHDigit: function(data) {
        var digit = 0;
        while (data != 0) {
            digit++;
            data >>>= 1
        }
        return digit
    },
    getPatternPosition: function(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1]
    },
    getMask: function(maskPattern, i, j) {
        switch (maskPattern) {
            case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return i % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return j % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return (i * j) % 2 + (i * j) % 3 == 0;
            case QRMaskPattern.PATTERN110:
                return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return ((i * j) % 3 + (i + j) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + maskPattern)
        }
    },
    getErrorCorrectPolynomial: function(errorCorrectLength) {
        var a = new QRPolynomial([1], 0);
        for (var i = 0; i < errorCorrectLength; i++) {
            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0))
        }
        return a
    },
    getLengthInBits: function(mode, type) {
        if (1 <= type && type < 10) {
            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + mode)
            }
        } else {
            if (type < 27) {
                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 12;
                    case QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + mode)
                }
            } else {
                if (type < 41) {
                    switch (mode) {
                        case QRMode.MODE_NUMBER:
                            return 14;
                        case QRMode.MODE_ALPHA_NUM:
                            return 13;
                        case QRMode.MODE_8BIT_BYTE:
                            return 16;
                        case QRMode.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + mode)
                    }
                } else {
                    throw new Error("type:" + type)
                }
            }
        }
    },
    getLostPoint: function(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var dark = qrCode.isDark(row, col);
                for (var r = -1; r <= 1; r++) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue
                    }
                    for (var c = -1; c <= 1; c++) {
                        if (col + c < 0 || moduleCount <= col + c) {
                            continue
                        }
                        if (r == 0 && c == 0) {
                            continue
                        }
                        if (dark == qrCode.isDark(row + r, col + c)) {
                            sameCount++
                        }
                    }
                }
                if (sameCount > 5) {
                    lostPoint += (3 + sameCount - 5)
                }
            }
        }
        for (var row = 0; row < moduleCount - 1; row++) {
            for (var col = 0; col < moduleCount - 1; col++) {
                var count = 0;
                if (qrCode.isDark(row, col)) {
                    count++
                }
                if (qrCode.isDark(row + 1, col)) {
                    count++
                }
                if (qrCode.isDark(row, col + 1)) {
                    count++
                }
                if (qrCode.isDark(row + 1, col + 1)) {
                    count++
                }
                if (count == 0 || count == 4) {
                    lostPoint += 3
                }
            }
        }
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount - 6; col++) {
                if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
                    lostPoint += 40
                }
            }
        }
        for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount - 6; row++) {
                if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
                    lostPoint += 40
                }
            }
        }
        var darkCount = 0;
        for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount; row++) {
                if (qrCode.isDark(row, col)) {
                    darkCount++
                }
            }
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint
    }
};
var QRMath = {
    glog: function(n) {
        if (n < 1) {
            throw new Error("glog(" + n + ")")
        }
        return QRMath.LOG_TABLE[n]
    },
    gexp: function(n) {
        while (n < 0) {
            n += 255
        }
        while (n >= 256) {
            n -= 255
        }
        return QRMath.EXP_TABLE[n]
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i
}
for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8]
}
for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i
}

function QRPolynomial(num, shift) {
    if (num.length == undefined) {
        throw new Error(num.length + "/" + shift)
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
        offset++
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
        this.num[i] = num[i + offset]
    }
}
QRPolynomial.prototype = {
    get: function(index) {
        return this.num[index]
    },
    getLength: function() {
        return this.num.length
    },
    multiply: function(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for (var i = 0; i < this.getLength(); i++) {
            for (var j = 0; j < e.getLength(); j++) {
                num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)))
            }
        }
        return new QRPolynomial(num, 0)
    },
    mod: function(e) {
        if (this.getLength() - e.getLength() < 0) {
            return this
        }
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for (var i = 0; i < this.getLength(); i++) {
            num[i] = this.get(i)
        }
        for (var i = 0; i < e.getLength(); i++) {
            num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio)
        }
        return new QRPolynomial(num, 0).mod(e)
    }
};

function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount
}
QRRSBlock.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
];
QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel)
    }
    var length = rsBlock.length / 3;
    var list = new Array();
    for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
            list.push(new QRRSBlock(totalCount, dataCount))
        }
    }
    return list
};
QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
            return undefined
    }
};

function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0
}
QRBitBuffer.prototype = {
    get: function(index) {
        var bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1
    },
    put: function(num, length) {
        for (var i = 0; i < length; i++) {
            this.putBit(((num >>> (length - i - 1)) & 1) == 1)
        }
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0)
        }
        if (bit) {
            this.buffer[bufIndex] |= (128 >>> (this.length % 8))
        }
        this.length++
    }
};
(function($) {
    $.fn.qrcode = function(options) {
        if (typeof options === "string") {
            options = {
                text: options
            }
        }
        options = $.extend({}, {
            render: "canvas",
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: QRErrorCorrectLevel.H,
            background: "#ffffff",
            foreground: "#000000"
        }, options);
        var createCanvas = function() {
            var qrcode = new QRCode(options.typeNumber, options.correctLevel);
            qrcode.addData(options.text);
            qrcode.make();
            var canvas = document.createElement("canvas");
            canvas.width = options.width;
            canvas.height = options.height;
            var ctx = canvas.getContext("2d");
            var tileW = options.width / qrcode.getModuleCount();
            var tileH = options.height / qrcode.getModuleCount();
            for (var row = 0; row < qrcode.getModuleCount(); row++) {
                for (var col = 0; col < qrcode.getModuleCount(); col++) {
                    ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background;
                    var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h)
                }
            }
            return canvas
        };
        var createTable = function() {
            var qrcode = new QRCode(options.typeNumber, options.correctLevel);
            qrcode.addData(options.text);
            qrcode.make();
            var $table = $("<table></table>").css("width", options.width + "px").css("height", options.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", options.background);
            var tileW = options.width / qrcode.getModuleCount();
            var tileH = options.height / qrcode.getModuleCount();
            for (var row = 0; row < qrcode.getModuleCount(); row++) {
                var $row = $("<tr></tr>").css("height", tileH + "px").appendTo($table);
                for (var col = 0; col < qrcode.getModuleCount(); col++) {
                    $("<td></td>").css("width", tileW + "px").css("background-color", qrcode.isDark(row, col) ? options.foreground : options.background).appendTo($row)
                }
            }
            return $table
        };
        return this.each(function() {
            var element = options.render == "canvas" ? createCanvas() : createTable();
            $(element).appendTo(this)
        })
    }
})(jQuery);
! function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else {
        factory(root.jQuery)
    }
}(this, function($) {
    /*
     @package noty - jQuery Notification Plugin
     @version version: 2.3.2
     @contributors https://github.com/needim/noty/graphs/contributors

     @documentation Examples and Documentation - http://needim.github.com/noty/

     @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
     */
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F()
        }
    }
    var NotyObject = {
        init: function(options) {
            this.options = $.extend({}, $.noty.defaults, options);
            this.options.layout = (this.options.custom) ? $.noty.layouts.inline : $.noty.layouts[this.options.layout];
            if ($.noty.themes[this.options.theme]) {
                this.options.theme = $.noty.themes[this.options.theme]
            } else {
                options.themeClassName = this.options.theme
            }
            delete options.layout;
            delete options.theme;
            this.options = $.extend({}, this.options, this.options.layout.options);
            this.options.id = "noty_" + (new Date().getTime() * Math.floor(Math.random() * 1000000));
            this.options = $.extend({}, this.options, options);
            this._build();
            return this
        },
        _build: function() {
            var $bar = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
            $bar.append(this.options.template).find(".noty_text").html(this.options.text);
            this.$bar = (this.options.layout.parent.object !== null) ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append($bar) : $bar;
            if (this.options.themeClassName) {
                this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type)
            }
            if (this.options.buttons) {
                this.options.closeWith = [];
                this.options.timeout = false;
                var $buttons = $("<div/>").addClass("noty_buttons");
                (this.options.layout.parent.object !== null) ? this.$bar.find(".noty_bar").append($buttons): this.$bar.append($buttons);
                var self = this;
                $.each(this.options.buttons, function(i, button) {
                    var $button = $("<button/>").addClass((button.addClass) ? button.addClass : "gray").html(button.text).attr("id", button.id ? button.id : "button-" + i).appendTo(self.$bar.find(".noty_buttons")).on("click", function() {
                        if ($.isFunction(button.onClick)) {
                            button.onClick.call($button, self)
                        }
                    })
                })
            }
            this.$message = this.$bar.find(".noty_message");
            this.$closeButton = this.$bar.find(".noty_close");
            this.$buttons = this.$bar.find(".noty_buttons");
            $.noty.store[this.options.id] = this
        },
        show: function() {
            var self = this;
            (self.options.custom) ? self.options.custom.find(self.options.layout.container.selector).append(self.$bar): $(self.options.layout.container.selector).append(self.$bar);
            if (self.options.theme && self.options.theme.style) {
                self.options.theme.style.apply(self)
            }($.type(self.options.layout.css) === "function") ? this.options.layout.css.apply(self.$bar): self.$bar.css(this.options.layout.css || {});
            self.$bar.addClass(self.options.layout.addClass);
            self.options.layout.container.style.apply($(self.options.layout.container.selector));
            self.showing = true;
            if (self.options.theme && self.options.theme.style) {
                self.options.theme.callback.onShow.apply(this)
            }
            if ($.inArray("click", self.options.closeWith) > -1) {
                self.$bar.css("cursor", "pointer").one("click", function(evt) {
                    self.stopPropagation(evt);
                    if (self.options.callback.onCloseClick) {
                        self.options.callback.onCloseClick.apply(self)
                    }
                    self.close()
                })
            }
            if ($.inArray("hover", self.options.closeWith) > -1) {
                self.$bar.one("mouseenter", function() {
                    self.close()
                })
            }
            if ($.inArray("button", self.options.closeWith) > -1) {
                self.$closeButton.one("click", function(evt) {
                    self.stopPropagation(evt);
                    self.close()
                })
            }
            if ($.inArray("button", self.options.closeWith) == -1) {
                self.$closeButton.remove()
            }
            if (self.options.callback.onShow) {
                self.options.callback.onShow.apply(self)
            }
            if (typeof self.options.animation.open == "string") {
                self.$bar.css("height", self.$bar.innerHeight());
                self.$bar.show().addClass(self.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    if (self.options.callback.afterShow) {
                        self.options.callback.afterShow.apply(self)
                    }
                    self.showing = false;
                    self.shown = true
                })
            } else {
                self.$bar.animate(self.options.animation.open, self.options.animation.speed, self.options.animation.easing, function() {
                    if (self.options.callback.afterShow) {
                        self.options.callback.afterShow.apply(self)
                    }
                    self.showing = false;
                    self.shown = true
                })
            }
            if (self.options.timeout) {
                self.$bar.delay(self.options.timeout).promise().done(function() {
                    self.close()
                })
            }
            return this
        },
        close: function() {
            if (this.closed) {
                return
            }
            if (this.$bar && this.$bar.hasClass("i-am-closing-now")) {
                return
            }
            var self = this;
            if (this.showing) {
                self.$bar.queue(function() {
                    self.close.apply(self)
                });
                return
            }
            this.$bar.dequeue();
            if (!this.shown && !this.showing) {
                var queue = [];
                $.each($.noty.queue, function(i, n) {
                    if (n.options.id != self.options.id) {
                        queue.push(n)
                    }
                });
                $.noty.queue = queue;
                return
            }
            self.$bar.addClass("i-am-closing-now");
            if (self.options.callback.onClose) {
                self.options.callback.onClose.apply(self)
            }
            if (typeof self.options.animation.close == "string") {
                self.$bar.addClass(self.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    if (self.options.callback.afterClose) {
                        self.options.callback.afterClose.apply(self)
                    }
                    self.closeCleanUp()
                })
            } else {
                self.$bar.clearQueue().stop().animate(self.options.animation.close, self.options.animation.speed, self.options.animation.easing, function() {
                    if (self.options.callback.afterClose) {
                        self.options.callback.afterClose.apply(self)
                    }
                }).promise().done(function() {
                    self.closeCleanUp()
                })
            }
        },
        closeCleanUp: function() {
            var self = this;
            if (self.options.modal) {
                $.notyRenderer.setModalCount(-1);
                if ($.notyRenderer.getModalCount() == 0) {
                    $(".noty_modal").fadeOut("fast", function() {
                        $(this).remove()
                    })
                }
            }
            $.notyRenderer.setLayoutCountFor(self, -1);
            if ($.notyRenderer.getLayoutCountFor(self) == 0) {
                $(self.options.layout.container.selector).remove()
            }
            if (typeof self.$bar !== "undefined" && self.$bar !== null) {
                if (typeof self.options.animation.close == "string") {
                    self.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0);
                    self.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        self.$bar.remove();
                        self.$bar = null;
                        self.closed = true;
                        if (self.options.theme.callback && self.options.theme.callback.onClose) {
                            self.options.theme.callback.onClose.apply(self)
                        }
                    })
                } else {
                    self.$bar.remove();
                    self.$bar = null;
                    self.closed = true
                }
            }
            delete $.noty.store[self.options.id];
            if (self.options.theme.callback && self.options.theme.callback.onClose) {
                self.options.theme.callback.onClose.apply(self)
            }
            if (!self.options.dismissQueue) {
                $.noty.ontap = true;
                $.notyRenderer.render()
            }
            if (self.options.maxVisible > 0 && self.options.dismissQueue) {
                $.notyRenderer.render()
            }
        },
        setText: function(text) {
            if (!this.closed) {
                this.options.text = text;
                this.$bar.find(".noty_text").html(text)
            }
            return this
        },
        setType: function(type) {
            if (!this.closed) {
                this.options.type = type;
                this.options.theme.style.apply(this);
                this.options.theme.callback.onShow.apply(this)
            }
            return this
        },
        setTimeout: function(time) {
            if (!this.closed) {
                var self = this;
                this.options.timeout = time;
                self.$bar.delay(self.options.timeout).promise().done(function() {
                    self.close()
                })
            }
            return this
        },
        stopPropagation: function(evt) {
            evt = evt || window.event;
            if (typeof evt.stopPropagation !== "undefined") {
                evt.stopPropagation()
            } else {
                evt.cancelBubble = true
            }
        },
        closed: false,
        showing: false,
        shown: false
    };
    $.notyRenderer = {};
    $.notyRenderer.init = function(options) {
        var notification = Object.create(NotyObject).init(options);
        if (notification.options.killer) {
            $.noty.closeAll()
        }(notification.options.force) ? $.noty.queue.unshift(notification): $.noty.queue.push(notification);
        $.notyRenderer.render();
        return ($.noty.returns == "object") ? notification : notification.options.id
    };
    $.notyRenderer.render = function() {
        var instance = $.noty.queue[0];
        if ($.type(instance) === "object") {
            if (instance.options.dismissQueue) {
                if (instance.options.maxVisible > 0) {
                    if ($(instance.options.layout.container.selector + " li").length < instance.options.maxVisible) {
                        $.notyRenderer.show($.noty.queue.shift())
                    } else {}
                } else {
                    $.notyRenderer.show($.noty.queue.shift())
                }
            } else {
                if ($.noty.ontap) {
                    $.notyRenderer.show($.noty.queue.shift());
                    $.noty.ontap = false
                }
            }
        } else {
            $.noty.ontap = true
        }
    };
    $.notyRenderer.show = function(notification) {
        if (notification.options.modal) {
            $.notyRenderer.createModalFor(notification);
            $.notyRenderer.setModalCount(+1)
        }
        if (notification.options.custom) {
            if (notification.options.custom.find(notification.options.layout.container.selector).length == 0) {
                notification.options.custom.append($(notification.options.layout.container.object).addClass("i-am-new"))
            } else {
                notification.options.custom.find(notification.options.layout.container.selector).removeClass("i-am-new")
            }
        } else {
            if ($(notification.options.layout.container.selector).length == 0) {
                $("body").append($(notification.options.layout.container.object).addClass("i-am-new"))
            } else {
                $(notification.options.layout.container.selector).removeClass("i-am-new")
            }
        }
        $.notyRenderer.setLayoutCountFor(notification, +1);
        notification.show()
    };
    $.notyRenderer.createModalFor = function(notification) {
        if ($(".noty_modal").length == 0) {
            var modal = $("<div/>").addClass("noty_modal").addClass(notification.options.theme).data("noty_modal_count", 0);
            if (notification.options.theme.modal && notification.options.theme.modal.css) {
                modal.css(notification.options.theme.modal.css)
            }
            modal.prependTo($("body")).fadeIn("fast");
            if ($.inArray("backdrop", notification.options.closeWith) > -1) {
                modal.on("click", function(e) {
                    $.noty.closeAll()
                })
            }
        }
    };
    $.notyRenderer.getLayoutCountFor = function(notification) {
        return $(notification.options.layout.container.selector).data("noty_layout_count") || 0
    };
    $.notyRenderer.setLayoutCountFor = function(notification, arg) {
        return $(notification.options.layout.container.selector).data("noty_layout_count", $.notyRenderer.getLayoutCountFor(notification) + arg)
    };
    $.notyRenderer.getModalCount = function() {
        return $(".noty_modal").data("noty_modal_count") || 0
    };
    $.notyRenderer.setModalCount = function(arg) {
        return $(".noty_modal").data("noty_modal_count", $.notyRenderer.getModalCount() + arg)
    };
    $.fn.noty = function(options) {
        options.custom = $(this);
        return $.notyRenderer.init(options)
    };
    $.noty = {};
    $.noty.queue = [];
    $.noty.ontap = true;
    $.noty.layouts = {};
    $.noty.themes = {};
    $.noty.returns = "object";
    $.noty.store = {};
    $.noty.get = function(id) {
        return $.noty.store.hasOwnProperty(id) ? $.noty.store[id] : false
    };
    $.noty.close = function(id) {
        return $.noty.get(id) ? $.noty.get(id).close() : false
    };
    $.noty.setText = function(id, text) {
        return $.noty.get(id) ? $.noty.get(id).setText(text) : false
    };
    $.noty.setType = function(id, type) {
        return $.noty.get(id) ? $.noty.get(id).setType(type) : false
    };
    $.noty.clearQueue = function() {
        $.noty.queue = []
    };
    $.noty.closeAll = function() {
        $.noty.clearQueue();
        $.each($.noty.store, function(id, noty) {
            noty.close()
        })
    };
    var windowAlert = window.alert;
    $.noty.consumeAlert = function(options) {
        window.alert = function(text) {
            if (options) {
                options.text = text
            } else {
                options = {
                    text: text
                }
            }
            $.notyRenderer.init(options)
        }
    };
    $.noty.stopConsumeAlert = function() {
        window.alert = windowAlert
    };
    $.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: true,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500
        },
        timeout: false,
        force: false,
        modal: false,
        maxVisible: 5,
        killer: false,
        closeWith: ["click"],
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        },
        buttons: false
    };
    $(window).on("resize", function() {
        $.each($.noty.layouts, function(index, layout) {
            layout.container.style.apply($(layout.container.selector))
        })
    });
    window.noty = function noty(options) {
        return jQuery.notyRenderer.init(options)
    };
    $.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: "ul#noty_bottom_layout_container",
            style: function() {
                $(this).css({
                    bottom: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    };
    $.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function() {
                $(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                $(this).css({
                    left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: "ul#noty_bottomLeft_layout_container",
            style: function() {
                $(this).css({
                    bottom: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                if (window.innerWidth < 600) {
                    $(this).css({
                        left: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: "ul#noty_bottomRight_layout_container",
            style: function() {
                $(this).css({
                    bottom: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                if (window.innerWidth < 600) {
                    $(this).css({
                        right: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: "ul#noty_center_layout_container",
            style: function() {
                $(this).css({
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                var dupe = $(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                $("body").append(dupe);
                dupe.find(".i-am-closing-now").remove();
                dupe.find("li").css("display", "block");
                var actual_height = dupe.height();
                dupe.remove();
                if ($(this).hasClass("i-am-new")) {
                    $(this).css({
                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px",
                        top: ($(window).height() - actual_height) / 2 + "px"
                    })
                } else {
                    $(this).animate({
                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px",
                        top: ($(window).height() - actual_height) / 2 + "px"
                    }, 500)
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: "ul#noty_centerLeft_layout_container",
            style: function() {
                $(this).css({
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                var dupe = $(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                $("body").append(dupe);
                dupe.find(".i-am-closing-now").remove();
                dupe.find("li").css("display", "block");
                var actual_height = dupe.height();
                dupe.remove();
                if ($(this).hasClass("i-am-new")) {
                    $(this).css({
                        top: ($(window).height() - actual_height) / 2 + "px"
                    })
                } else {
                    $(this).animate({
                        top: ($(window).height() - actual_height) / 2 + "px"
                    }, 500)
                }
                if (window.innerWidth < 600) {
                    $(this).css({
                        left: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: "ul#noty_centerRight_layout_container",
            style: function() {
                $(this).css({
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                var dupe = $(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                $("body").append(dupe);
                dupe.find(".i-am-closing-now").remove();
                dupe.find("li").css("display", "block");
                var actual_height = dupe.height();
                dupe.remove();
                if ($(this).hasClass("i-am-new")) {
                    $(this).css({
                        top: ($(window).height() - actual_height) / 2 + "px"
                    })
                } else {
                    $(this).animate({
                        top: ($(window).height() - actual_height) / 2 + "px"
                    }, 500)
                }
                if (window.innerWidth < 600) {
                    $(this).css({
                        right: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: "ul.noty_inline_layout_container",
            style: function() {
                $(this).css({
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    };
    $.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function() {
                $(this).css({
                    top: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    };
    $.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: "ul#noty_topCenter_layout_container",
            style: function() {
                $(this).css({
                    top: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                $(this).css({
                    left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: "ul#noty_topLeft_layout_container",
            style: function() {
                $(this).css({
                    top: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                if (window.innerWidth < 600) {
                    $(this).css({
                        left: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: "ul#noty_topRight_layout_container",
            style: function() {
                $(this).css({
                    top: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 10000000
                });
                if (window.innerWidth < 600) {
                    $(this).css({
                        right: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    $.noty.themes.bootstrapTheme = {
        name: "bootstrapTheme",
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 10000,
                opacity: 0.6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            var containerSelector = this.options.layout.container.selector;
            $(containerSelector).addClass("list-group");
            this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>');
            this.$closeButton.addClass("close");
            this.$bar.addClass("list-group-item").css("padding", "0px");
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.addClass("list-group-item-info");
                    break;
                case "warning":
                    this.$bar.addClass("list-group-item-warning");
                    break;
                case "error":
                    this.$bar.addClass("list-group-item-danger");
                    break;
                case "information":
                    this.$bar.addClass("list-group-item-info");
                    break;
                case "success":
                    this.$bar.addClass("list-group-item-success");
                    break
            }
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            })
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    };
    $.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function() {
                if (this.options.dismissQueue) {
                    var selector = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                        case "top":
                            $(selector).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            $(selector).last().css({
                                borderRadius: "0px 0px 5px 5px"
                            });
                            break;
                        case "topCenter":
                        case "topLeft":
                        case "topRight":
                        case "bottomCenter":
                        case "bottomLeft":
                        case "bottomRight":
                        case "center":
                        case "centerLeft":
                        case "centerRight":
                        case "inline":
                            $(selector).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            $(selector).first().css({
                                "border-top-left-radius": "5px",
                                "border-top-right-radius": "5px"
                            });
                            $(selector).last().css({
                                "border-bottom-left-radius": "5px",
                                "border-bottom-right-radius": "5px"
                            });
                            break;
                        case "bottom":
                            $(selector).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            $(selector).first().css({
                                borderRadius: "5px 5px 0px 0px"
                            });
                            break;
                        default:
                            break
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 10000,
                opacity: 0.6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            });
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            });
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            });
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            });
            this.$buttons.find("button").css({
                marginLeft: 5
            });
            this.$buttons.find("button:first").css({
                marginLeft: 0
            });
            this.$bar.on({
                mouseenter: function() {
                    $(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    $(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            });
            switch (this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderRadius: "0px 0px 5px 5px",
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderRadius: "5px 5px 0px 0px",
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "red",
                        borderColor: "darkred",
                        color: "#FFF"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#57B7E2",
                        borderColor: "#0B90C4",
                        color: "#FFF"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "lightgreen",
                        borderColor: "#50C24E",
                        color: "darkgreen"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break
            }
        },
        callback: {
            onShow: function() {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            },
            onClose: function() {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            }
        }
    };
    $.noty.themes.relax = {
        name: "relax",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 10000,
                opacity: 0.6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "2px"
            });
            this.$message.css({
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "10px",
                width: "auto",
                position: "relative"
            });
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            });
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            });
            this.$buttons.find("button").css({
                marginLeft: 5
            });
            this.$buttons.find("button:first").css({
                marginLeft: 0
            });
            this.$bar.on({
                mouseenter: function() {
                    $(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    $(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            });
            switch (this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderTop: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderBottom: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#dedede",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "#FF8181",
                        borderColor: "#e25353",
                        color: "#FFF"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#78C5E7",
                        borderColor: "#3badd6",
                        color: "#FFF"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "#BCF5BC",
                        borderColor: "#7cdd77",
                        color: "darkgreen"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break
            }
        },
        callback: {
            onShow: function() {},
            onClose: function() {}
        }
    }
});

angular.module('blockappmodule', ['ngStorage','blockappmodule.service'])
.controller('dashboardCtrl', function($scope,UserService,$localStorage,$sessionStorage) {
  $scope.dashboardTest="dashboardTest1";

  $scope.createNewAddress = function() {
      var userDetails={
        email:"test@gmail.com"
      }
      UserService.createNewAddress(userDetails).
        then(function(response) {
            console.log("Response :: " + angular.toJson(response));
            if (response.status == 200) {
              alert("address created Succesfully");
            }
      });
  };
})
.controller('loginCtrl', function($scope,UserService,$localStorage,$sessionStorage,$window) {
  $scope.loginTest="loginTest1";

  $scope.loginUser = function() {
    $scope.loginUserDetails={
        "email": $scope.email,
        "password": $scope.password
    };
    alert("posting data "+angular.toJson($scope.loginUserDetails));
    UserService.userLogin($scope.loginUserDetails).
      then(function(response) {
          console.log(response);
          if (response.status == 200) {
            //alert("reponse 2000 "+response.data.id);
            $scope.loginIdtest=response.data.id;


          }
    });

  };
})


;

/* ========================================================================
 * Bootstrap: tab.js v3.3.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.1'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);
/*! responsiveCarousel.JS - v1.2.0
 * http://basilio.github.com/responsiveCarousel
 *
 * Copyright (c) 2013 Basilio C‡ceres <basilio.caceres@gmail.com>;
 * Licensed under the MIT license */

(function(e){"use strict";e.fn.carousel=function(t){var n,r;n={infinite:true,visible:1,speed:"fast",overflow:false,autoRotate:false,navigation:e(this).data("navigation"),itemMinWidth:0,itemEqualHeight:false,itemMargin:0,itemClassActive:"crsl-active",imageWideClass:"wide-image",carousel:true};return e(this).each(function(){r=e(this);if(e.isEmptyObject(t)===false)e.extend(n,t);if(e.isEmptyObject(e(r).data("crsl"))===false)e.extend(n,e(r).data("crsl"));n.isTouch="ontouchstart"in document.documentElement||navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)?true:false;r.init=function(){n.total=e(r).find(".crsl-item").length;n.itemWidth=e(r).outerWidth();n.visibleDefault=n.visible;n.swipeDistance=null;n.swipeMinDistance=100;n.startCoords={};n.endCoords={};e(r).css({width:"100%"});e(r).find(".crsl-item").css({position:"relative","float":"left",overflow:"hidden",height:"auto"});e(r).find("."+n.imageWideClass).each(function(){e(this).css({display:"block",width:"100%",height:"auto"})});e(r).find(".crsl-item iframe").attr({width:"100%"});if(n.carousel)e(r).find(".crsl-item:first-child").addClass(n.itemClassActive);if(n.carousel&&n.infinite&&n.visible<n.total)e(r).find(".crsl-item:first-child").before(e(".crsl-item:last-child",r));if(n.overflow===false){e(r).css({overflow:"hidden"})}else{e("html, body").css({"overflow-x":"hidden"})}e(r).trigger("initCarousel",[n,r]);r.testPreload();r.config();r.initRotate();r.triggerNavs()};r.testPreload=function(){if(e(r).find("img").length>0){var t=e(r).find("img").length,i=1;e(r).find("img").each(function(){r.preloadImage(this,i,t);i++})}else{e(r).trigger("loadedCarousel",[n,r])}};r.preloadImage=function(t,i,s){var o=new Image,u={};u.src=e(t).attr("src")!==undefined?t.src:"";u.alt=e(t).attr("alt")!==undefined?t.alt:"";e(o).attr(u);e(o).on("load",function(){if(i===1)e(r).trigger("loadingImagesCarousel",[n,r]);if(i===s)e(r).trigger("loadedImagesCarousel",[n,r])})};r.config=function(){n.itemWidth=Math.floor((e(r).outerWidth()-n.itemMargin*(n.visibleDefault-1))/n.visibleDefault);if(n.itemWidth<=n.itemMinWidth){n.visible=Math.floor((e(r).outerWidth()-n.itemMargin*(n.visible-1))/n.itemMinWidth)===1?Math.floor(e(r).outerWidth()/n.itemMinWidth):Math.floor((e(r).outerWidth()-n.itemMargin)/n.itemMinWidth);n.visible=n.visible<1?1:n.visible;n.itemWidth=n.visible===1?Math.floor(e(r).outerWidth()):Math.floor((e(r).outerWidth()-n.itemMargin*(n.visible-1))/n.visible)}else{n.visible=n.visibleDefault}if(n.carousel){r.wrapWidth=Math.floor((n.itemWidth+n.itemMargin)*n.total);r.wrapMargin=r.wrapMarginDefault=n.infinite&&n.visible<n.total?parseInt((n.itemWidth+n.itemMargin)*-1,10):0;if(n.infinite&&n.visible<n.total&&e(r).find(".crsl-item."+n.itemClassActive).index()===0){e(r).find(".crsl-item:first-child").before(e(".crsl-item:last-child",r));r.wrapMargin=r.wrapMarginDefault=parseInt((n.itemWidth+n.itemMargin)*-1,10)}e(r).find(".crsl-wrap").css({width:r.wrapWidth+"px",marginLeft:r.wrapMargin})}else{r.wrapWidth=e(r).outerWidth();e(r).find(".crsl-wrap").css({width:r.wrapWidth+n.itemMargin+"px"});e("#"+n.navigation).hide()}e(r).find(".crsl-item").css({width:n.itemWidth+"px",marginRight:n.itemMargin+"px"});r.equalHeights();if(n.carousel){if(n.visible>=n.total){n.autoRotate=false;e("#"+n.navigation).hide()}else{e("#"+n.navigation).show()}}};r.equalHeights=function(){if(n.itemEqualHeight!==false){var t=0;e(r).find(".crsl-item").each(function(){e(this).css({height:"auto"});if(e(this).outerHeight()>t){t=e(this).outerHeight()}});e(r).find(".crsl-item").css({height:t+"px"})}return true};r.initRotate=function(){if(n.autoRotate!==false){r.rotateTime=window.setInterval(function(){r.rotate()},n.autoRotate)}};r.triggerNavs=function(){e("#"+n.navigation).delegate(".previous, .next","click",function(t){t.preventDefault();r.prepareExecute();if(e(this).hasClass("previous")&&r.testPrevious(r.itemActive)){r.previous()}else if(e(this).hasClass("next")&&r.testNext()){r.next()}else{return}})};r.prepareExecute=function(){if(n.autoRotate){clearInterval(r.rotateTime)}r.preventAnimateEvent();r.itemActive=e(r).find(".crsl-item."+n.itemClassActive);return true};r.preventAnimateEvent=function(){if(e(r).find(".crsl-wrap:animated").length>0){return false}};r.rotate=function(){r.preventAnimateEvent();r.itemActive=e(r).find(".crsl-item."+n.itemClassActive);r.next();return true};r.testPrevious=function(t){return e(".crsl-wrap",r).find(".crsl-item").index(t)>0};r.testNext=function(){return!n.infinite&&r.wrapWidth>=(n.itemWidth+n.itemMargin)*(n.visible+1)-r.wrapMargin||n.infinite};r.previous=function(){r.wrapMargin=n.infinite?r.wrapMarginDefault+e(r.itemActive).outerWidth(true):r.wrapMargin+e(r.itemActive).outerWidth(true);var t=e(r.itemActive).index();var i=e(r.itemActive).prev(".crsl-item");var s="previous";e(r).trigger("beginCarousel",[n,r,s]);e(r).find(".crsl-wrap").animate({marginLeft:r.wrapMargin+"px"},n.speed,function(){e(r.itemActive).removeClass(n.itemClassActive);e(i).addClass(n.itemClassActive);if(n.infinite){e(this).css({marginLeft:r.wrapMarginDefault}).find(".crsl-item:first-child").before(e(".crsl-item:last-child",r))}else{if(r.testPrevious(i)===false)e("#"+n.navigation).find(".previous").addClass("previous-inactive");if(r.testNext())e("#"+n.navigation).find(".next").removeClass("next-inactive")}e(this).trigger("endCarousel",[n,r,s])})};r.next=function(){r.wrapMargin=n.infinite?r.wrapMarginDefault-e(r.itemActive).outerWidth(true):r.wrapMargin-e(r.itemActive).outerWidth(true);var t=e(r.itemActive).index();var i=e(r.itemActive).next(".crsl-item");var s="next";e(r).trigger("beginCarousel",[n,r,s]);e(r).find(".crsl-wrap").animate({marginLeft:r.wrapMargin+"px"},n.speed,function(){e(r.itemActive).removeClass(n.itemClassActive);e(i).addClass(n.itemClassActive);if(n.infinite){e(this).css({marginLeft:r.wrapMarginDefault}).find(".crsl-item:last-child").after(e(".crsl-item:first-child",r))}else{if(r.testPrevious(i))e("#"+n.navigation).find(".previous").removeClass("previous-inactive");if(r.testNext()===false)e("#"+n.navigation).find(".next").addClass("next-inactive")}e(this).trigger("endCarousel",[n,r,s])})};var i=false,s;e(window).on("mouseleave",function(t){if(t.target)s=t.target;else if(t.srcElement)s=t.srcElement;if(e(r).attr("id")&&e(s).parents(".crsl-items").attr("id")===e(r).attr("id")||e(s).parents(".crsl-items").data("navigation")===e(r).data("navigation")){i=true}else{i=false}return false});e(window).on("keydown",function(e){if(i===true){if(e.keyCode===37){r.prepareExecute();r.previous()}else if(e.keyCode===39){r.prepareExecute();r.next()}}return});if(n.isTouch){e(r).on("touchstart",function(t){e(r).addClass("touching");n.startCoords=t.originalEvent.targetTouches[0];n.endCoords=t.originalEvent.targetTouches[0];e(".touching").on("touchmove",function(e){n.endCoords=e.originalEvent.targetTouches[0];if(Math.abs(parseInt(n.endCoords.pageX-n.startCoords.pageX,10))>Math.abs(parseInt(n.endCoords.pageY-n.startCoords.pageY,10))){e.preventDefault();e.stopPropagation()}})}).on("touchend",function(t){t.preventDefault();t.stopPropagation();n.swipeDistance=n.endCoords.pageX-n.startCoords.pageX;if(n.swipeDistance>=n.swipeMinDistance){r.previous()}else if(n.swipeDistance<=-n.swipeMinDistance){r.next()}e(".touching").off("touchmove").removeClass("touching")})}e(r).on("loadedCarousel loadedImagesCarousel",function(){r.equalHeights()});e(window).on("carouselResizeEnd",function(){if(n.itemWidth!==e(r).outerWidth())r.config()});e(window).ready(function(){e(r).trigger("prepareCarousel",[n,r]);r.init();e(window).on("resize",function(){if(this.carouselResizeTo)clearTimeout(this.carouselResizeTo);this.carouselResizeTo=setTimeout(function(){e(this).trigger("carouselResizeEnd")},10)})});e(window).load(function(){r.testPreload();r.config()})})}})(jQuery)
(function(){var e;e=function(){var e,t;return t=document.createElement("script"),t.src="https://alive-blockioinc.netdna-ssl.com/js/zxcvbn.min.js",t.type="text/javascript",t.async=!0,e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e)},null!=window.attachEvent?window.attachEvent("onload",e):window.addEventListener("load",e,!1)}).call(this);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-90922629-1', 'auto');
ga('send', 'pageview');

// $(document).ready(function(){
//     LeadDyno.key = "e675c09ce3426ec6c8dda67ae18abb234c0179cf";
//     LeadDyno.recordVisit();
//     LeadDyno.autoWatch();
// });

(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();

$(document).ready(function(){
    window._fbq = window._fbq || [];
    window._fbq.push(['track', '6019153155679', {'value':'0.00','currency':'USD'}]);
});




function signUp() {

	 var email = $("#user_email").val();
	 var password = $("#user_password").val();
	 var confirmpass = $("#user_password_confirmation").val();

	
	 if( password !=confirmpass )
		 return;
	 //alert("clear all validation")
	 var sendInfo = {email: email,password: password};
	 	console.log(sendInfo.email+ " ::: "+ sendInfo.password);
	       $.ajax({
	    	   beforeSend: function(xhrObj){
	    	        xhrObj.setRequestHeader("Content-Type","application/json");
	    	        xhrObj.setRequestHeader("Accept","application/json");
	    	    },
	           type: "POST",
	           url: "http://localhost:1337/user/create",
	           dataType: "json",

	           success: function (msg) {
	               if (msg) {
	                   alert("User created Succesfully !!"+JSON.stringify(msg));
										window.location.href = "/signin";

	               } else {
	                   alert("Cannot created !"+JSON.stringify(msg));
	               }
	           },
						  error: function(XMLHttpRequest, textStatus, errorThrown) {
						     alert(textStatus+"  some error  "+errorThrown);
						  }



						 ,

	           data: JSON.stringify(sendInfo)
	       });

}

/*! ngstorage 0.3.10 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["angular"],b):a.hasOwnProperty("angular")?b(a.angular):"object"==typeof exports&&(module.exports=b(require("angular")))}(this,function(a){"use strict";function b(b){return function(){var c="ngStorage-";this.setKeyPrefix=function(a){if("string"!=typeof a)throw new TypeError("[ngStorage] - "+b+"Provider.setKeyPrefix() expects a String.");c=a};var d=a.toJson,e=a.fromJson;this.setSerializer=function(a){if("function"!=typeof a)throw new TypeError("[ngStorage] - "+b+"Provider.setSerializer expects a function.");d=a},this.setDeserializer=function(a){if("function"!=typeof a)throw new TypeError("[ngStorage] - "+b+"Provider.setDeserializer expects a function.");e=a},this.get=function(a){return e(window[b].getItem(c+a))},this.set=function(a,e){return window[b].setItem(c+a,d(e))},this.$get=["$rootScope","$window","$log","$timeout","$document",function(f,g,h,i,j){function k(a){var b;try{b=g[a]}catch(c){b=!1}if(b&&"localStorage"===a){var d="__"+Math.round(1e7*Math.random());try{localStorage.setItem(d,d),localStorage.removeItem(d)}catch(c){b=!1}}return b}var l,m,n=c.length,o=k(b)||(h.warn("This browser does not support Web Storage!"),{setItem:a.noop,getItem:a.noop,removeItem:a.noop}),p={$default:function(b){for(var c in b)a.isDefined(p[c])||(p[c]=a.copy(b[c]));return p.$sync(),p},$reset:function(a){for(var b in p)"$"===b[0]||delete p[b]&&o.removeItem(c+b);return p.$default(a)},$sync:function(){for(var a,b=0,d=o.length;d>b;b++)(a=o.key(b))&&c===a.slice(0,n)&&(p[a.slice(n)]=e(o.getItem(a)))},$apply:function(){var b;if(m=null,!a.equals(p,l)){b=a.copy(l),a.forEach(p,function(e,f){a.isDefined(e)&&"$"!==f[0]&&(o.setItem(c+f,d(e)),delete b[f])});for(var e in b)o.removeItem(c+e);l=a.copy(p)}}};return p.$sync(),l=a.copy(p),f.$watch(function(){m||(m=i(p.$apply,100,!1))}),g.addEventListener&&g.addEventListener("storage",function(b){if(b.key){var d=j[0];d.hasFocus&&d.hasFocus()||c!==b.key.slice(0,n)||(b.newValue?p[b.key.slice(n)]=e(b.newValue):delete p[b.key.slice(n)],l=a.copy(p),f.$apply())}}),g.addEventListener&&g.addEventListener("beforeunload",function(){p.$apply()}),p}]}}return a=a&&a.module?a:window.angular,a.module("ngStorage",[]).provider("$localStorage",b("localStorage")).provider("$sessionStorage",b("sessionStorage"))});

angular.module('blockappmodule.service', [])
  .factory('UserService', function($http) {
    function UserService() {}

    // UserService.getLoyaltyPointsApproval = function() {
    //   return $http.get(constants.projectName + '/getRedeemProductForApproval?statusId=4', {
    //     headers: {
    //       'Content-Type': 'application/json;charset=UTF-8'
    //     }
    //   }).then(function(response) {
    //
    //     var data = response.data;
    //
    //     return response.data;
    //
    //   });
    // };
    UserService.userLogin = function(userDetails) {
      alert("posting data "+angular.toJson(userDetails));
      return $http.post('http://localhost:1337/session/create', userDetails, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
      
        return response;
      });
    };
    UserService.createNewAddress = function(userDetails) {
      return $http.post('http://localhost:1337/user/createNewAddressApi', userDetails, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(function(response) {
        //alert(angular.toJson(response));
        return response;
      });
    };
    UserService.sendAmountToAddress = function(userDetails) {
      return $http.post('http://localhost:1337/user/createNewAddressApi', userDetails, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(function(response) {
        //alert(angular.toJson(response));
        return response;
      });
    };

    return UserService;
  });


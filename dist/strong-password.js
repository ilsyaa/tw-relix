!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var n in s)("object"==typeof exports?exports:t)[n]=s[n]}}(self,(()=>(()=>{"use strict";var t={737:(t,e)=>{
/*
 * HSBasePlugin
 * @author: Ilsyaa
 * @license: Licensed under MIT
 * Copyright 2024 velixs.com
 */
Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e,s){this.el=t,this.options=e,this.events=s,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var s;t.push({id:(null===(s=null==e?void 0:e.el)||void 0===s?void 0:s.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=s},983:function(t,e,s){
/*
 * HSStrongPassword
 * @author: Ilsyaa
 * @license: Licensed under MIT
 * Copyright 2024 velixs.com
 */
var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}),o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++)for(var i in e=arguments[s])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=s(969),a=function(t){function e(e,s){var n=t.call(this,e,s)||this;n.isOpened=!1,n.strength=0,n.passedRules=new Set;var i=e.getAttribute("data-hs-strong-password"),r=i?JSON.parse(i):{},a=o(o({},r),s);return n.target=(null==a?void 0:a.target)?"string"==typeof(null==a?void 0:a.target)?document.querySelector(a.target):a.target:null,n.hints=(null==a?void 0:a.hints)?"string"==typeof(null==a?void 0:a.hints)?document.querySelector(a.hints):a.hints:null,n.stripClasses=(null==a?void 0:a.stripClasses)||null,n.minLength=(null==a?void 0:a.minLength)||6,n.mode=(null==a?void 0:a.mode)||"default",n.popoverSpace=(null==a?void 0:a.popoverSpace)||10,n.checksExclude=(null==a?void 0:a.checksExclude)||[],n.availableChecks=["lowercase","uppercase","numbers","special-characters","min-length"].filter((function(t){return!n.checksExclude.includes(t)})),n.specialCharactersSet=(null==a?void 0:a.specialCharactersSet)||"!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~",n.target&&n.init(),n}return i(e,t),e.prototype.init=function(){this.createCollection(window.$hsStrongPasswordCollection,this),this.availableChecks.length&&this.build()},e.prototype.build=function(){var t=this;this.buildStrips(),this.hints&&this.buildHints(),this.setStrength(this.target.value),this.target.addEventListener("input",(function(e){t.setStrength(e.target.value)}))},e.prototype.buildStrips=function(){if(this.el.innerHTML="",this.stripClasses)for(var t=0;t<this.availableChecks.length;t++){var e=(0,r.htmlToElement)("<div></div>");(0,r.classToClassList)(this.stripClasses,e),this.el.append(e)}},e.prototype.buildHints=function(){var t=this;this.weakness=this.hints.querySelector("[data-hs-strong-password-hints-weakness-text]")||null,this.rules=Array.from(this.hints.querySelectorAll("[data-hs-strong-password-hints-rule-text]"))||null,this.rules.forEach((function(e){var s,n=e.getAttribute("data-hs-strong-password-hints-rule-text");(null===(s=t.checksExclude)||void 0===s?void 0:s.includes(n))&&e.remove()})),this.weakness&&this.buildWeakness(),this.rules&&this.buildRules(),"popover"===this.mode&&(this.target.addEventListener("focus",(function(){t.isOpened=!0,t.hints.classList.remove("hidden"),t.hints.classList.add("block"),t.recalculateDirection()})),this.target.addEventListener("blur",(function(){t.isOpened=!1,t.hints.classList.remove("block","bottom-full","top-full"),t.hints.classList.add("hidden"),t.hints.style.marginTop="",t.hints.style.marginBottom=""})))},e.prototype.buildWeakness=function(){var t=this;this.checkStrength(this.target.value),this.setWeaknessText(),this.target.addEventListener("input",(function(){return setTimeout((function(){return t.setWeaknessText()}))}))},e.prototype.buildRules=function(){var t=this;this.setRulesText(),this.target.addEventListener("input",(function(){return setTimeout((function(){return t.setRulesText()}))}))},e.prototype.setWeaknessText=function(){var t=this.weakness.getAttribute("data-hs-strong-password-hints-weakness-text"),e=JSON.parse(t);this.weakness.textContent=e[this.strength]},e.prototype.setRulesText=function(){var t=this;this.rules.forEach((function(e){var s=e.getAttribute("data-hs-strong-password-hints-rule-text");t.checkIfPassed(e,t.passedRules.has(s))}))},e.prototype.togglePopover=function(){var t=this.el.querySelector(".popover");t&&t.classList.toggle("show")},e.prototype.checkStrength=function(t){var e=new Set,s={lowercase:/[a-z]+/,uppercase:/[A-Z]+/,numbers:/[0-9]+/,"special-characters":new RegExp("[".concat(this.specialCharactersSet,"]"))},n=0;return this.availableChecks.includes("lowercase")&&t.match(s.lowercase)&&(n+=1,e.add("lowercase")),this.availableChecks.includes("uppercase")&&t.match(s.uppercase)&&(n+=1,e.add("uppercase")),this.availableChecks.includes("numbers")&&t.match(s.numbers)&&(n+=1,e.add("numbers")),this.availableChecks.includes("special-characters")&&t.match(s["special-characters"])&&(n+=1,e.add("special-characters")),this.availableChecks.includes("min-length")&&t.length>=this.minLength&&(n+=1,e.add("min-length")),t.length||(n=0),n===this.availableChecks.length?this.el.classList.add("accepted"):this.el.classList.remove("accepted"),this.strength=n,this.passedRules=e,{strength:this.strength,rules:this.passedRules}},e.prototype.checkIfPassed=function(t,e){void 0===e&&(e=!1);var s=t.querySelector("[data-check]"),n=t.querySelector("[data-uncheck]");e?(t.classList.add("active"),s.classList.remove("hidden"),n.classList.add("hidden")):(t.classList.remove("active"),s.classList.add("hidden"),n.classList.remove("hidden"))},e.prototype.setStrength=function(t){var e=this.checkStrength(t),s=e.strength,n={strength:s,rules:e.rules};this.hideStrips(s),this.fireEvent("change",n),(0,r.dispatch)("change.hs.strongPassword",this.el,n)},e.prototype.hideStrips=function(t){Array.from(this.el.children).forEach((function(e,s){s<t?e.classList.add("passed"):e.classList.remove("passed")}))},e.prototype.recalculateDirection=function(){(0,r.isEnoughSpace)(this.hints,this.target,"bottom",this.popoverSpace)?(this.hints.classList.remove("bottom-full"),this.hints.classList.add("top-full"),this.hints.style.marginBottom="",this.hints.style.marginTop="".concat(this.popoverSpace,"px")):(this.hints.classList.remove("top-full"),this.hints.classList.add("bottom-full"),this.hints.style.marginTop="",this.hints.style.marginBottom="".concat(this.popoverSpace,"px"))},e.getInstance=function(t){var e=window.$hsStrongPasswordCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return e?e.element:null},e.autoInit=function(){window.$hsStrongPasswordCollection||(window.$hsStrongPasswordCollection=[]),document.querySelectorAll("[data-hs-strong-password]:not(.--prevent-on-load-init)").forEach((function(t){if(!window.$hsStrongPasswordCollection.find((function(e){var s;return(null===(s=null==e?void 0:e.element)||void 0===s?void 0:s.el)===t}))){var s=t.getAttribute("data-hs-strong-password"),n=s?JSON.parse(s):{};new e(t,n)}}))},e}(s(737).default);window.addEventListener("load",(function(){a.autoInit()})),document.addEventListener("scroll",(function(){if(!window.$hsStrongPasswordCollection)return!1;var t=window.$hsStrongPasswordCollection.find((function(t){return t.element.isOpened}));t&&t.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSStrongPassword=a),e.default=a},969:function(t,e){var s=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getClassPropertyAlt=e.getClassProperty=void 0;e.getClassProperty=function(t,e,s){return void 0===s&&(s=""),(window.getComputedStyle(t).getPropertyValue(e)||s).replace(" ","")};e.getClassPropertyAlt=function(t,e,s){void 0===s&&(s="");var n="";return t.classList.forEach((function(t){t.includes(e)&&(n=t)})),n.match(/:(.*)]/)?n.match(/:(.*)]/)[1]:s};e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isEnoughSpace=function(t,e,s,n,i){void 0===s&&(s="auto"),void 0===n&&(n=10),void 0===i&&(i=null);var o=e.getBoundingClientRect(),r=i?i.getBoundingClientRect():null,a=window.innerHeight,l=r?o.top-r.top:o.top,c=(i?r.bottom:a)-o.bottom,u=t.clientHeight+n;return"bottom"===s?c>=u:"top"===s?l>=u:l>=u||c>=u};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var n=function(t){return!!t&&("none"===window.getComputedStyle(t).display||n(t.parentElement))};e.isParentOrElementHidden=n;e.debounce=function(t,e){var n;return void 0===e&&(e=200),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){t.apply(s,i)}),e)}};e.dispatch=function(t,e,s){void 0===s&&(s=null);var n=new CustomEvent(t,{detail:{payload:s},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(n)};e.afterTransition=function(t,e){var s=function(){e(),t.removeEventListener("transitionend",s,!0)};"all 0s ease 0s"!==window.getComputedStyle(t,null).getPropertyValue("transition")?t.addEventListener("transitionend",s,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,s){void 0===s&&(s=" "),t.split(s).forEach((function(t){return e.classList.add(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var s=function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,s),o.exports}(983);return s})()));
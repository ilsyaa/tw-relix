!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(()=>(()=>{"use strict";var t={737:(t,e)=>{
/*
 * HSBasePlugin
 * @author: Ilsyaa
 * @license: Licensed under MIT
 * Copyright 2024 velixs.com
 */
Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},941:function(t,e,n){
/*
 * HSButtonRipple
 * @author: Ilsyaa
 * @license: Licensed under MIT
 * Copyright 2024 velixs.com
 */
var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e){var n=t.call(this,e,{})||this;return n.rippleWrapper,n.init(),n}return i(e,t),e.prototype.init=function(){this.createCollection(window.$hsButtonRippleCollection,this),this.setDefaultStyles(),this.rippleWrapper=this.el.appendChild(this.createWrapperRippleElement()),this.event()},e.prototype.event=function(){var t=this;this.el.addEventListener("click",(function(e){t.createEffectRipple(e)}))},e.prototype.createEffectRipple=function(t){var e,n,o,i,r,l,s,p,u=t.currentTarget,c=u.getBoundingClientRect(),a=(e=t.clientX,n=u.offsetWidth,o=c.left,i=t.clientY,r=u.offsetHeight,l=c.top,s=e-o>n/2?0:n,p=i-l>r/2?0:r,Math.hypot(s-(e-o),p-(i-l))),f=document.createElement("span");!function(t,e,n,o){t.style.borderRadius="50%",t.style.pointerEvents="none",t.style.position="absolute",t.style.left=o.clientX-e.left-n+"px",t.style.top=o.clientY-e.top-n+"px",t.style.width=t.style.height=2*n+"px"}(f,c,a,t),function(t){t.animate([{transform:"scale(0)",opacity:1},{transform:"scale(1.5)",opacity:0}],{duration:500,easing:"linear"})}(f),this.rippleWrapper.appendChild(f),setTimeout((function(){return f.remove()}),500)},e.prototype.createWrapperRippleElement=function(){var t=document.createElement("span");return t.classList.add("hs-ripple"),t.style.position="absolute",t.style.overflow="hidden",t.style.inset="0",t.style.pointerEvents="none",t.style.zIndex="0",t.style.borderRadius="inherit",t},e.prototype.setDefaultStyles=function(){this.el.style.position="relative"},e.getInstance=function(t,e){void 0===e&&(e=!1);var n=window.$hsButtonRippleCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element.el:null},e.autoInit=function(){window.$hsButtonRippleCollection||(window.$hsButtonRippleCollection=[]),document.querySelectorAll("[data-hs-ripple]").forEach((function(t){window.$hsButtonRippleCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e}(n(737).default);window.addEventListener("load",(function(){r.autoInit()})),"undefined"!=typeof window&&(window.HSButtonRipple=r),e.default=r}},e={};var n=function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(941);return n})()));
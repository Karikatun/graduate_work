!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("DOMContentLoaded",()=>{"use strict";let e=n(1),t=n(2),o=n(3),l=n(4),c=n(5);e(),t(),o(),l(),c()})},function(e,t){e.exports=function(){let e=document.querySelector(".fixed-gift"),t=document.querySelector(".popup-gift");e.addEventListener("click",function(){e.style.display="none",t.style.display="block"}),t.addEventListener("click",function(e){(e.target&&e.target.classList.contains("popup-close")||e.target.classList.contains("popup-gift"))&&(t.style.display="none",document.body.style.overflow="")})}},function(e,t){e.exports=function(){let e=0,t=document.querySelector(".main-slider").querySelectorAll(".main-slider-item");function n(n){n>t.length&&(e=1),n<1&&(e=t.length),t.forEach(e=>e.style.display="none"),t[e-1].style.display="block",t.forEach(e=>e.classList.add("animated","fadeInDown"))}n(e),setTimeout(function t(){n(e+=1),setTimeout(t,4e3)})}},function(e,t){e.exports=function(){let e=1,t=document.querySelectorAll(".feedback-slider-item"),n=document.querySelector(".main-prev-btn"),o=document.querySelector(".main-next-btn");function l(n){n>t.length&&(e=1),n<1&&(e=t.length),t.forEach(e=>e.style.display="none"),t[e-1].style.display="block",t[e-1].classList.contains("fadeInLeft")?(t[e-1].classList.remove("fadeInLeft"),t[e-1].classList.add("fadeInRight")):t.forEach(e=>e.classList.add("animated","fadeInRight"))}l(e),n.addEventListener("click",()=>{l(e-=1),t[e-1].classList.replace("fadeInRight","fadeInLeft")}),o.addEventListener("click",()=>{l(e+=1)}),setTimeout(function t(){l(e+=1),setTimeout(t,8e3)})}},function(e,t){e.exports=function(){let e=document.querySelector(".often-questions").querySelector(".container"),t=e.querySelectorAll(".accordion-heading"),n=e.querySelectorAll(".accordion-block"),o=e.querySelectorAll("span");function l(){for(let e=0;e<n.length;e++)n[e].style.display="none",n[e].classList.contains("fadeIn")&&n[e].classList.replace("fadeIn","fadeOut"),o[e].style.color="black",o[e].style.borderBottom="2px dotted #333"}function c(e){"none"===n[e].style.display&&(n[e].style.display="block",n[e].classList.contains("fadeOut")&&n[e].classList.replace("fadeOut","fadeIn"))}n.forEach(e=>e.classList.add("animated","fadeIn")),l();for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{"none"===n[e].style.display?(l(),o[e].style.color="pink",o[e].style.borderBottom="none",c(e)):(o[e].style.color="black",o[e].style.borderBottom="2px dotted #333",l())})}},function(e,t){e.exports=function(){document.querySelectorAll(".button-consultation");let e=document.querySelector(".popup-consultation");window.addEventListener("click",t=>{t.target&&t.target.classList.contains("button-consultation")&&(e.style.display="block")}),e.addEventListener("click",function(t){(t.target&&t.target.classList.contains("popup-close")||t.target.classList.contains("popup-consultation"))&&(e.style.display="none",document.body.style.overflow="")})}}]);
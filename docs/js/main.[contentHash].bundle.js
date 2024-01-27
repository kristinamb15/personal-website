!function(){"use strict";var e={275:function(e,t,o){o.d(t,{k:function(){return k}});class r{constructor(e){this.options={root:null,threshold:.5},this.targets=e}setRoot(e){this.options.root=e}setThreshold(e){this.options.threshold=e}animateIn(e,t=!1,o=""){this.callback=(r,n)=>{r.forEach(((r,a)=>{let s;s=t?a:1,r.isIntersecting&&(setTimeout((()=>{""!=o?(r.target.querySelector("[class$=--front]").classList.add(e),r.target.querySelector("[class$=--back]").classList.add(o)):r.target.classList.add(e),r.target.classList.replace("u-hidden","u-visible"),r.target.classList.contains("u-disable-hover")&&setTimeout((()=>{r.target.classList.remove("u-disable-hover")}),1200)}),250*s),n.unobserve(r.target))}))}}changeElement(e,t){this.callback=o=>{o.forEach((o=>{o.isIntersecting?e.classList.replace(t[0],t[1]):e.classList.replace(t[1],t[0])}))}}toggleElement(e,t){this.callback=o=>{o.forEach((o=>{o.isIntersecting,e.classList.toggle(t)}))}}createObserver(){const e=new IntersectionObserver(this.callback,this.options);this.targets.length>1?this.targets.forEach((t=>e.observe(t))):e.observe(this.targets)}}const n={page:document.querySelector("body"),loader:document.querySelector(".loader"),left:document.querySelector(".overlay__left"),right:document.querySelector(".overlay__right"),k:document.querySelector("#k"),bOut:document.querySelector("#b-out"),bInTop:document.querySelector("#b-in-top"),bInBottom:document.querySelector("#b-in-bottom")},a={degree:document.querySelector(".about__education"),research:document.querySelector(".about__research"),photo:document.querySelector(".about__photo"),text:document.querySelector(".about__text")},s=document.querySelectorAll('[id^="tech__web"]'),c=document.querySelectorAll('[id^="tech__other"]'),i=document.querySelectorAll('[id^="card"]'),l=document.getElementById("scroll-btn"),d=document.querySelector(".footer"),u=document.querySelector(".header"),m=["u-visible","u-hidden"],h=["scroll-btn--dark","scroll-btn--light"],b=document.getElementById("nav-check"),g=document.querySelectorAll(".navigation__item"),v=[document.querySelector(".navigation__x--top"),document.querySelector(".navigation__x--bottom")],y=["TopForward","BottomForward"],p=["TopReverse","BottomReverse"],f=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},S=(e,t)=>{"add"===e?v.map(((e,o)=>{e.classList.add(t[o])})):"remove"===e&&v.map(((e,o)=>{e.classList.remove(t[o])}))},w=()=>{S("remove",y),setTimeout((()=>{S("add",p)}),1)},I=()=>{b.checked=!1,w();document.getElementById("nav-"+event.target.id).scrollIntoView(!0)},q=()=>(k(q,"Slide loader panels"),n.left.classList.add("loader-left"),n.right.classList.add("loader-right"),document.querySelector(".loader-right")),L=()=>(k(L,"Draw SVG"),n.k.classList.add("draw-k"),n.bOut.classList.add("draw-b-out"),n.bInTop.classList.add("draw-b-in-top"),n.bInBottom.classList.add("draw-b-in-bottom"),document.querySelector(".draw-b-in-bottom")),_=()=>{n.page.style.overflow="hidden",k(n.page,"Make page invisible"),k(_,"Begin loader actions"),L().onanimationend=()=>{k(L,"Draw Animation Ended"),q().onanimationend=setTimeout((()=>{n.page.style.removeProperty("overflow"),k(n.page,"Make page visible")}),1300),q().onanimationend=setTimeout((()=>{k(q,"Slide Animation Ended"),n.loader.innerHTML="",n.loader.remove()}),2e3)}},k=(e,t="Logger output")=>{false};window.onload=()=>{k(document.readyState,"Window loaded"),k(document.readyState,"Ready State status"),_()};const E=new r([a.research,a.text]);E.animateIn("moveInLeft"),E.createObserver(),k(E,"About me animations - left");const O=new r([a.photo,a.degree]);O.animateIn("moveInRight"),O.createObserver(),k(O,"About me animations - right");const T=new r(s);T.animateIn("moveInUp"),T.createObserver(),k(T,"Used on this page animations");const x=new r(c);x.animateIn("moveInUp"),x.createObserver(),k(x,"Other stuff I work with animations");const B=new r(i);B.animateIn("rotateInFront",!1,"rotateInBack"),B.createObserver(),k(B,"Projects animations");const A=new r(d);A.changeElement(l,h),A.createObserver(),k(A,"Change color of scroll button in footer");const R=new r(u);R.changeElement(l,m),R.createObserver(),k(R,"Change visibility of scroll button in header"),l.addEventListener("click",f),k(l,"Scroll button functionality"),g.forEach((e=>e.addEventListener("click",I))),k(g,"Nav menu functionality"),b.addEventListener("click",(e=>{e.target.checked?(S("remove",p),setTimeout((()=>{S("add",y)}),1)):w()})),window.onbeforeunload=()=>{history.scrollRestoration="manual",f()}}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o(275)}();
(self.webpackChunktest_angular_ionic=self.webpackChunktest_angular_ionic||[]).push([[1855],{1855:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ion_modal:()=>v});var o=r(6304),a=r(1035),i=r(5466),n=r(6560),s=r(4486),d=r(8802),l=r(382),p=r(7853),c=r(3401),h=r(3580),m=r(6269),f=r(4751);r(7286);const b=(e,t)=>{const r=1/(1-t);return e*r+-t*r},g=e=>{const{currentBreakpoint:t,backdropBreakpoint:r}=e,o=void 0===r||r<t?`calc(var(--backdrop-opacity) * ${t})`:"0",a=(0,h.c)("backdropAnimation").fromTo("opacity",0,o);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:a}},u=e=>{const{currentBreakpoint:t,backdropBreakpoint:r}=e,o=`calc(var(--backdrop-opacity) * ${b(t,r)})`,a=[{offset:0,opacity:o},{offset:1,opacity:0}],i=[{offset:0,opacity:o},{offset:r,opacity:0},{offset:1,opacity:0}],n=(0,h.c)("backdropAnimation").keyframes(0!==r?i:a);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:n}},w=(e,t)=>{const{presentingEl:r,currentBreakpoint:o}=t,a=(0,s.g)(e),{wrapperAnimation:i,backdropAnimation:n}=void 0!==o?g(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)"),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};n.addElement(a.querySelector("ion-backdrop")).beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,h.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(r){const e=window.innerWidth<768,t="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,o=(0,s.g)(r),a=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),l=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",o=`translateY(${t?"-10px":e}) scale(0.93)`;a.afterStyles({transform:o}).beforeAddWrite(()=>l.style.setProperty("background-color","black")).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:o,borderRadius:"10px 10px 0 0"}]),d.addAnimation(a)}else if(d.addAnimation(n),t){const e=`translateY(-10px) scale(${t?.93:1})`;a.afterStyles({transform:e}).addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:e}]);const r=(0,h.c)().afterStyles({transform:e}).addElement(o.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:e}]);d.addAnimation([a,r])}else i.fromTo("opacity","0","1")}else d.addAnimation(n);return d},y=(e,t,r=500)=>{const{presentingEl:o,currentBreakpoint:a}=t,i=(0,s.g)(e),{wrapperAnimation:n,backdropAnimation:d}=void 0!==a?u(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};d.addElement(i.querySelector("ion-backdrop")),n.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const l=(0,h.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(n);if(o){const e=window.innerWidth<768,t="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,r=(0,s.g)(o),a=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{1===e&&(o.style.setProperty("overflow",""),Array.from(i.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&i.style.setProperty("background-color",""))}),i=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",r=`translateY(${t?"-10px":e}) scale(0.93)`;a.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:r,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(a)}else if(l.addAnimation(d),t){const e=`translateY(-10px) scale(${t?.93:1})`;a.addElement(r.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:e},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const o=(0,h.c)().addElement(r.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:e},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([a,o])}else n.fromTo("opacity","1","0")}else l.addAnimation(d);return l},k=(e,t)=>{const{currentBreakpoint:r}=t,o=(0,s.g)(e),{wrapperAnimation:a,backdropAnimation:i}=void 0!==r?g(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)"),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return i.addElement(o.querySelector("ion-backdrop")).beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(o.querySelector(".modal-wrapper")),(0,h.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,a])},x=(e,t)=>{const{currentBreakpoint:r}=t,o=(0,s.g)(e),{wrapperAnimation:a,backdropAnimation:i}=void 0!==r?u(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return i.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelector(".modal-wrapper")),(0,h.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,a])};let v=class{constructor(e){(0,a.r)(this,e),this.didPresent=(0,a.e)(this,"ionModalDidPresent",7),this.willPresent=(0,a.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,a.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionModalDidDismiss",7),this.didPresentShorthand=(0,a.e)(this,"didPresent",7),this.willPresentShorthand=(0,a.e)(this,"willPresent",7),this.willDismissShorthand=(0,a.e)(this,"willDismiss",7),this.didDismissShorthand=(0,a.e)(this,"didDismiss",7),this.modalIndex=A++,this.coreDelegate=(0,n.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:e,el:t,destroyTriggerInteraction:r}=this;r&&r();const o=void 0!==e?document.getElementById(e):null;o&&(this.destroyTriggerInteraction=((e,t)=>{const r=()=>{t.present()};return e.addEventListener("click",r),()=>{e.removeEventListener("click",r)}})(o,t))},this.onBackdropTap=()=>{this.dismiss(void 0,l.B)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,r=E[e.type];if(t&&r){const o=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}connectedCallback(){(0,l.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,this.isSheetModal=void 0!==e&&void 0!==t,void 0===e||void 0===t||e.includes(t)||console.warn("[Ionic Warning]: Your breakpoints array must include the initialBreakpoint value.")}componentDidLoad(){!0===this.isOpen&&(0,s.r)(()=>this.present()),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const t=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:t,delegate:this.workingDelegate=t?this.delegate||this.coreDelegate:this.delegate}}present(){var e=this;return(0,o.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:r,delegate:o}=e.getDelegate(!0);e.usersElement=yield(0,n.a)(o,e.el,e.component,["ion-page"],t,r),yield(0,c.e)(e.usersElement),(0,a.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,l.d)(e,"modalEnter",w,k,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():e.swipeToClose&&e.initSwipeToClose(),"undefined"!=typeof window&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,s.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(d.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;if("ios"!==(0,i.b)(this))return;const t=this.leaveAnimation||i.c.get("modalLeave",y),r=this.animation=t(this.el,{presentingEl:this.presentingElement});this.gesture=((e,t,r)=>{const o=e.offsetHeight;let a=!1;const i=(0,f.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content, ion-footer")},onStart:()=>{t.progressStart(!0,a?1:0)},onMove:e=>{const r=(0,s.k)(1e-4,e.deltaY/o,.9999);t.progressStep(r)},onEnd:e=>{const n=e.velocityY,d=(0,s.k)(1e-4,e.deltaY/o,.9999),l=(e.deltaY+1e3*n)/o>=.5;let p=l?-.001:.001;l?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),p+=(0,m.g)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),p+=(0,m.g)([0,0],[1,0],[.68,.28],[1,1],d)[0]);const c=((e,t)=>(0,s.k)(400,e/Math.abs(1.1*t),500))(l?d*o:(1-d)*o,n);a=l,i.enable(!1),t.onFinish(()=>{l||i.enable(!0)}).progressEnd(l?1:0,p,c),l&&r()}});return i})(this.el,r,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,o.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){var e,t=this;const{wrapperEl:r,initialBreakpoint:a,backdropBreakpoint:n}=this;if(!r||void 0===a)return;const d=this.enterAnimation||i.c.get("modalEnter",w),l=this.animation=d(this.el,{presentingEl:this.presentingElement,currentBreakpoint:a,backdropBreakpoint:n});l.progressStart(!0,1);const p=(null===(e=this.breakpoints)||void 0===e?void 0:e.sort((e,t)=>e-t))||[];this.gesture=((e,t,r,o,a,i,n=[],d,l)=>{const p={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==a?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-a,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},c=e.querySelector("ion-content"),h=r.clientHeight;let m=o,g=0;const u=i.childAnimations.find(e=>"wrapperAnimation"===e.id),w=i.childAnimations.find(e=>"backdropAnimation"===e.id),y=n[n.length-1];u&&w&&(u.keyframes([...p.WRAPPER_KEYFRAMES]),w.keyframes([...p.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-m),t.style.setProperty("pointer-events",m>a?"auto":"none")),c&&m!==y&&(c.scrollY=!1);const k=(0,f.createGesture)({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target.closest("ion-content");return 1!==m||!t},onStart:()=>{c&&(c.scrollY=!1),(0,s.r)(()=>{e.focus()}),i.progressStart(!0,1-m)},onMove:e=>{g=(0,s.k)(1e-4,1-m+e.deltaY/h,.9999),i.progressStep(g)},onEnd:e=>{const r=m-(e.deltaY+100*e.velocityY)/h,o=n.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e),f=0!==o;m=0,u&&w&&(u.keyframes([{offset:0,transform:`translateY(${100*g}%)`},{offset:1,transform:`translateY(${100*(1-o)}%)`}]),w.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${b(1-g,a)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${b(o,a)})`}]),i.progressStep(0)),k.enable(!1),i.onFinish(()=>{f&&(u&&w?(0,s.r)(()=>{u.keyframes([...p.WRAPPER_KEYFRAMES]),w.keyframes([...p.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-o),m=o,l(m),c&&m===n[n.length-1]&&(c.scrollY=!0),t.style.setProperty("pointer-events",m>a?"auto":"none"),k.enable(!0)}):k.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),f||d()}});return k})(this.el,this.backdropEl,r,a,n,l,p,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,o.Z)(function*(){yield t.dismiss(void 0,"gesture"),t.gestureAnimationDismissing=!1}))},e=>{this.currentBreakpoint=e}),this.gesture.enable(!0)}dismiss(e,t){var r=this;return(0,o.Z)(function*(){if(r.gestureAnimationDismissing&&"gesture"!==t)return!1;"undefined"!=typeof window&&r.keyboardOpenCallback&&window.removeEventListener(d.KEYBOARD_DID_OPEN,r.keyboardOpenCallback),void 0!==r.currentTransition&&(yield r.currentTransition);const o=l.h.get(r)||[];r.currentTransition=(0,l.f)(r,e,t,"modalLeave",y,x,{presentingEl:r.presentingElement,currentBreakpoint:r.currentBreakpoint||r.initialBreakpoint,backdropBreakpoint:r.backdropBreakpoint});const a=yield r.currentTransition;if(a){const{delegate:e}=r.getDelegate();yield(0,n.d)(e,r.usersElement),r.animation&&r.animation.destroy(),r.gesture&&r.gesture.destroy(),o.forEach(e=>e.destroy())}return r.currentTransition=void 0,r.animation=void 0,a})()}onDidDismiss(){return(0,l.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.g)(this.el,"ionModalWillDismiss")}render(){const{handle:e,isSheetModal:t,presentingElement:r,htmlAttributes:o}=this,n=!1!==e&&t,s=(0,i.b)(this),{modalId:d}=this,l=void 0!==r&&"ios"===s;return(0,a.h)(a.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[s]:!0,"modal-default":!l&&!t,"modal-card":l,"modal-sheet":t,"overlay-hidden":!0},(0,p.g)(this.cssClass)),id:d,onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,a.h)("ion-backdrop",{ref:e=>this.backdropEl=e,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===s&&(0,a.h)("div",{class:"modal-shadow"}),(0,a.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:e=>this.wrapperEl=e},n&&(0,a.h)("div",{class:"modal-handle",part:"handle"}),(0,a.h)("slot",null)))}get el(){return(0,a.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}};const E={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let A=0;v.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);
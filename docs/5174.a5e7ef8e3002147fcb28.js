(self.webpackChunkstatic_angular_ionic=self.webpackChunkstatic_angular_ionic||[]).push([[5174],{5174:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ion_route:()=>l,ion_route_redirect:()=>u,ion_router:()=>j,ion_router_link:()=>Z});var r=n(6304),o=n(1035),i=n(4486),s=n(5466),a=n(7853);let l=class{constructor(t){(0,o.r)(this,t),this.ionRouteDataChanged=(0,o.e)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length){for(const o of n)if(t[o]!==e[o])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},u=class{constructor(t){(0,o.r)(this,t),this.ionRouteRedirectChanged=(0,o.e)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}};const c="root",h="forward",d=t=>"/"+t.filter(t=>t.length>0).join("/"),f=t=>{let e,n=[""];if(null!=t){const r=t.indexOf("?");r>-1&&(e=t.substring(r+1),t=t.substring(0,r)),n=t.split("/").map(t=>t.trim()).filter(t=>t.length>0),0===n.length&&(n=[""])}return{segments:n,queryString:e}},g=function(){var t=(0,r.Z)(function*(t,e,n,r,o=!1,s){try{const a=v(t);if(r>=e.length||!a)return o;yield new Promise(t=>(0,i.c)(a,t));const l=e[r],u=yield a.setRouteId(l.id,l.params,n,s);return u.changed&&(n=c,o=!0),o=yield g(u.element,e,n,r+1,o,s),u.markVisible&&(yield u.markVisible()),o}catch(a){return console.error(a),!1}});return function(e,n,r,o){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(function*(t){const e=[];let n,r=t;for(;n=v(r);){const t=yield n.getRouteId();if(!t)break;r=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}});return function(e){return t.apply(this,arguments)}}(),p=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",v=t=>{if(!t)return;if(t.matches(p))return t;const e=t.querySelector(p);return null!=e?e:void 0},b=(t,e)=>e.find(e=>((t,e)=>{const{from:n,to:r}=e;if(void 0===r)return!1;if(n.length>t.length)return!1;for(let o=0;o<n.length;o++){const e=n[o];if("*"===e)return!0;if(e!==t[o])return!1}return n.length===t.length})(t,e)),y=(t,e)=>{const n=Math.min(t.length,e.length);let r=0;for(let o=0;o<n;o++){const n=t[o],i=e[o];if(n.id.toLowerCase()!==i.id)break;if(n.params){const t=Object.keys(n.params);if(t.length===i.segments.length){const e=t.map(t=>`:${t}`);for(let t=0;t<e.length&&e[t].toLowerCase()===i.segments[t];t++)r++}}r++}return r},w=(t,e)=>{const n=new k(t);let r,o=!1;for(let i=0;i<e.length;i++){const t=e[i].segments;if(""===t[0])o=!0;else{for(const e of t){const t=n.next();if(":"===e[0]){if(""===t)return null;r=r||[],(r[i]||(r[i]={}))[e.slice(1)]=t}else if(t!==e)return null}o=!1}}return o&&o!==(""===n.next())?null:r?e.map((t,e)=>({id:t.id,segments:t.segments,params:R(t.params,r[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave})):e},R=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,C=(t,e)=>{let n=null,r=0;for(const o of e){const e=w(t,o);if(null!==e){const t=S(e);t>r&&(r=t,n=e)}}return n},S=t=>{let e=1,n=1;for(const r of t)for(const t of r.segments)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e};class k{constructor(t){this.segments=t.slice()}next(){return this.segments.length>0?this.segments.shift():""}}const E=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,D=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=E(t,"to");return{from:f(E(t,"from")).segments,to:null==e?void 0:f(e)}}),L=t=>N(P(t)),P=t=>Array.from(t.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(t=>{const e=E(t,"component");return{segments:f(E(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:P(t)}}),N=t=>{const e=[];for(const n of t)O([],e,n);return e},O=(t,e,n)=>{if(t=[...t,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],0!==n.children.length)for(const r of n.children)O(t,e,r);else e.push(t)};let j=class{constructor(t){(0,o.r)(this,t),this.ionRouteWillChange=(0,o.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,o.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}componentWillLoad(){var t=this;return(0,r.Z)(function*(){yield v(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",()=>t(),{once:!0})});const e=yield t.runGuards(t.getSegments());if(!0!==e){if("object"==typeof e){const{redirect:n}=e,r=f(n);t.setSegments(r.segments,c,r.queryString),yield t.writeNavStateRoot(r.segments,c)}}else yield t.onRoutesChanged()})()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,i.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,i.o)(this.onRoutesChanged.bind(this),100))}onPopState(){var t=this;return(0,r.Z)(function*(){const e=t.historyDirection();let n=t.getSegments();const r=yield t.runGuards(n);if(!0!==r){if("object"!=typeof r)return!1;n=f(r.redirect).segments}return t.writeNavStateRoot(n,e)})()}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}canTransition(){var t=this;return(0,r.Z)(function*(){const e=yield t.runGuards();return!0===e||"object"==typeof e&&e.redirect})()}push(t,e="forward",n){var o=this;return(0,r.Z)(function*(){var r;if(t.startsWith(".")){const e=null!==(r=o.previousPath)&&void 0!==r?r:"/",n=new URL(t,`https://host/${e}`);t=n.pathname+n.search}let i=f(t);const s=yield o.runGuards(i.segments);if(!0!==s){if("object"!=typeof s)return!1;i=f(s.redirect)}return o.setSegments(i.segments,e,i.queryString),o.writeNavStateRoot(i.segments,e,n)})()}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){var t=this;return(0,r.Z)(function*(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.segments));const n=e.map(t=>t.id);console.debug(`%c ${d(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(L(t.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${d(e.from)}`,"font-weight: bold"," TO: ",`$c ${d(e.to.segments)}`,"font-weight: bold");console.groupEnd()})(D(t.el))})()}navChanged(t){var e=this;return(0,r.Z)(function*(){if(e.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:n,outlet:r}=yield m(window.document.body),o=((t,e)=>{let n=null,r=0;for(const o of e){const e=y(t,o);e>r&&(n=o,r=e)}return n?n.map((e,n)=>{var r;return{id:e.id,segments:e.segments,params:R(e.params,null===(r=t[n])||void 0===r?void 0:r.params)}}):null})(n,L(e.el));if(!o)return console.warn("[ion-router] no matching URL for ",n.map(t=>t.id)),!1;const i=(t=>{const e=[];for(const n of t)for(const t of n.segments)if(":"===t[0]){const r=n.params&&n.params[t.slice(1)];if(!r)return null;e.push(r)}else""!==t&&e.push(t);return e})(o);return i?(e.setSegments(i,t),yield e.safeWriteNavState(r,o,c,i,null,n.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)})()}onRedirectChanged(){const t=this.getSegments();t&&b(t,D(this.el))&&this.writeNavStateRoot(t,c)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),c)}historyDirection(){var t;const e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));const n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?h:n<r?"back":c}writeNavStateRoot(t,e,n){var o=this;return(0,r.Z)(function*(){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const r=D(o.el),i=b(t,r);let s=null;if(i){const{segments:n,queryString:r}=i.to;o.setSegments(n,e,r),s=i.from,t=n}const a=L(o.el),l=C(t,a);return l?o.safeWriteNavState(document.body,l,e,t,s,0,n):(console.error("[ion-router] the path does not match any route"),!1)})()}safeWriteNavState(t,e,n,o,i,s=0,a){var l=this;return(0,r.Z)(function*(){const r=yield l.lock();let u=!1;try{u=yield l.writeNavState(t,e,n,o,i,s,a)}catch(c){console.error(c)}return r(),u})()}lock(){var t=this;return(0,r.Z)(function*(){const e=t.waitPromise;let n;return t.waitPromise=new Promise(t=>n=t),void 0!==e&&(yield e),n})()}runGuards(t=this.getSegments(),e){var n=this;return(0,r.Z)(function*(){if(void 0===e&&(e=f(n.previousPath).segments),!t||!e)return!0;const r=L(n.el),o=C(e,r),i=o&&o[o.length-1].beforeLeave,s=!i||(yield i());if(!1===s||"object"==typeof s)return s;const a=C(t,r),l=a&&a[a.length-1].beforeEnter;return!l||l()})()}writeNavState(t,e,n,o,i,s=0,a){var l=this;return(0,r.Z)(function*(){if(l.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;l.busy=!0;const r=l.routeChangeEvent(o,i);r&&l.ionRouteWillChange.emit(r);const u=yield g(t,e,n,s,!1,a);return l.busy=!1,r&&l.ionRouteDidChange.emit(r),u})()}setSegments(t,e,n){this.state++,((t,e,n,r,o,i,s)=>{const a=((t,e,n)=>{let r=d(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r})([...f(this.root).segments,...r],n,s);o===h?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,0,this.useHash,t,e,this.state,n)}getSegments(){return((t,e,n)=>{const r=f(this.root).segments,o=n?t.hash.slice(1):t.pathname;return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(r,f(o).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,r=d(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?d(e):null,to:r}}get el(){return(0,o.i)(this)}},Z=class{constructor(t){(0,o.r)(this,t),this.routerDirection="forward",this.onClick=t=>{(0,a.o)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=(0,s.b)(this),e={href:this.href,rel:this.rel,target:this.target};return(0,o.h)(o.H,{onClick:this.onClick,class:(0,a.c)(this.color,{[t]:!0,"ion-activatable":!0})},(0,o.h)("a",Object.assign({},e),(0,o.h)("slot",null)))}};Z.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);
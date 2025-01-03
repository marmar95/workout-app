import{a,c as D,h as P,g as B}from"./index.2d3b0b4a.js";const p={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function T(e,r=p){return a(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}const K={size:{type:[String,Number],default:"1em"},color:String};function j(e){return{cSize:a(()=>e.size in p?`${p[e.size]}px`:e.size),classes:a(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var _=D({name:"QSpinner",props:{...K,thickness:{type:Number,default:5}},setup(e){const{cSize:r,classes:u}=j(e);return()=>P("svg",{class:u.value+" q-spinner-mat",width:r.value,height:r.value,viewBox:"25 25 50 50"},[P("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function w(e){return e.appContext.config.globalProperties.$router!==void 0}function U(e){return e.isUnmounted===!0||e.isDeactivated===!0}function R(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function $(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function M(e,r){for(const u in r){const t=r[u],s=e[u];if(typeof t=="string"){if(t!==s)return!1}else if(Array.isArray(s)===!1||s.length!==t.length||t.some((g,d)=>g!==s[d]))return!1}return!0}function L(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((u,t)=>u===r[t]):e.length===1&&e[0]===r}function N(e,r){return Array.isArray(e)===!0?L(e,r):Array.isArray(r)===!0?L(r,e):e===r}function Q(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const u in e)if(N(e[u],r[u])===!1)return!1;return!0}const V={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},F={...V,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function G({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const u=B(),{props:t,proxy:s,emit:g}=u,d=w(u),h=a(()=>t.disable!==!0&&t.href!==void 0),C=r===!0?a(()=>d===!0&&t.disable!==!0&&h.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""):a(()=>d===!0&&h.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),f=a(()=>C.value===!0?x(t.to):null),o=a(()=>f.value!==null),k=a(()=>h.value===!0||o.value===!0),O=a(()=>t.type==="a"||k.value===!0?"a":t.tag||e||"div"),b=a(()=>h.value===!0?{href:t.href,target:t.target}:o.value===!0?{href:f.value.href,target:t.target}:{}),y=a(()=>{if(o.value===!1)return-1;const{matched:n}=f.value,{length:i}=n,l=n[i-1];if(l===void 0)return-1;const c=s.$route.matched;if(c.length===0)return-1;const v=c.findIndex($.bind(null,l));if(v!==-1)return v;const z=R(n[i-2]);return i>1&&R(l)===z&&c[c.length-1].path!==z?c.findIndex($.bind(null,n[i-2])):v}),m=a(()=>o.value===!0&&y.value!==-1&&M(s.$route.params,f.value.params)),S=a(()=>m.value===!0&&y.value===s.$route.matched.length-1&&Q(s.$route.params,f.value.params)),I=a(()=>o.value===!0?S.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":m.value===!0?` ${t.activeClass}`:"":"");function x(n){try{return s.$router.resolve(n)}catch{}return null}function A(n,{returnRouterError:i,to:l=t.to,replace:c=t.replace}={}){if(t.disable===!0)return n.preventDefault(),Promise.resolve(!1);if(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.button!==void 0&&n.button!==0||t.target==="_blank")return Promise.resolve(!1);n.preventDefault();const v=s.$router[c===!0?"replace":"push"](l);return i===!0?v:v.then(()=>{}).catch(()=>{})}function q(n){if(o.value===!0){const i=l=>A(n,l);g("click",n,i),n.defaultPrevented!==!0&&i()}else g("click",n)}return{hasRouterLink:o,hasHrefLink:h,hasLink:k,linkTag:O,resolvedLink:f,linkIsActive:m,linkIsExactActive:S,linkClass:I,linkAttrs:b,getLink:x,navigateToRouterLink:A,navigateOnClick:q}}export{_ as Q,G as a,U as b,H as c,T as d,V as e,F as u,w as v};

import{c as i,s as o,a as $,t as w,r as u}from"../chunks/disclose-version.DMV4TKfw.js";import{u as j,j as d,g as k,r as v,k as q,l as S,m as x,n as T,o as f,t as z,q as A,s as B,p as C,v as D,f as E}from"../chunks/runtime.CrvI8-1v.js";import{s as g}from"../chunks/render.DAA8VB4N.js";import{s as F}from"../chunks/entry.BemUzqBl.js";function G(){const e=k,s=e.l.u;s&&(s.b.length&&j(()=>{m(e),v(s.b)}),d(()=>{const r=q(()=>s.m.map(S));return()=>{for(const t of r)typeof t=="function"&&t()}}),s.a.length&&d(()=>{m(e),v(s.a)}))}function m(e){if(e.l.s)for(const s of e.l.s)x(s);T(e.s)}function H(e,s,r){if(e==null)return s(void 0),f;const t=e.subscribe(s,r);return t.unsubscribe?()=>t.unsubscribe():t}function I(e,s,r){const t=r[s]??(r[s]={store:null,source:A(void 0),unsubscribe:f});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=f;else{var n=!0;t.unsubscribe=H(e,a=>{n?t.source.v=a:B(t.source,a)}),n=!1}return x(t.source)}function J(){const e={};return z(()=>{for(var s in e)e[s].unsubscribe()}),e}const K=()=>{const e=F;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},L={subscribe(e){return K().page.subscribe(e)}};var M=w('<div class="flex flex-col items-center justify-center flex-grow"><div class="font-extralight italic text-2xl pb-24 opacity-50"> </div> <div class="max-w-md flex flex-col items-center"><h1 class="font-bold"> </h1> <p class="text-sm pt-24"><span class="opacity-50">Try going</span> <a href="/" class="border-b border-olive hover:opacity-100 hover:border-b-2 hover:font-medium opacity-50">home</a></p></div></div>');function R(e,s){C(s,!1);const r=J(),t=()=>I(L,"$page",r);G();var n=M(),a=i(n),_=i(a);u(a);var l=o(o(a,!0)),c=i(l),h=i(c);u(c);var b=o(o(c,!0)),y=i(b);o(o(y,!0)),u(b),u(l),u(n),D(()=>{var p;g(_,t().status),g(h,(p=t().error)==null?void 0:p.message)}),$(e,n),E()}export{R as component};

import{_ as l,e as u,u as k,f as d,g as e,o,c as a,b as i,w as T,h as r,t as c,i as x,N as g,F,r as I,j as L,k as v,l as y}from"./app.6662d0ca.js";const b={key:0,class:"home-hero"},A={key:0,class:"figure"},B=["src","alt"],C={key:1,id:"main-title",class:"title"},N={key:2,class:"description"},w=u({setup(h){const{site:s,frontmatter:t}=k(),_=d(()=>{const{heroImage:p,heroText:n,tagline:f,actionLink:$,actionText:H}=t.value;return p||n||f||$&&H}),m=d(()=>t.value.heroText||s.value.title);return(p,n)=>e(_)?(o(),a("header",b,[e(t).heroImage?(o(),a("figure",A,[i("img",{class:"image",src:e(T)(e(t).heroImage),alt:e(t).heroAlt},null,8,B)])):r("v-if",!0),e(m)?(o(),a("h1",C,c(e(m)),1)):r("v-if",!0),e(t).tagline?(o(),a("p",N,c(e(t).tagline),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var V=l(w,[["__scopeId","data-v-630fe728"]]);const j={key:0,class:"home-features"},D={class:"wrapper"},S={class:"container"},E={class:"features"},q={key:0,class:"title"},z={key:1,class:"details"},G=u({setup(h){const{frontmatter:s}=k(),t=d(()=>s.value.features&&s.value.features.length>0),_=d(()=>s.value.features?s.value.features:[]);return(m,p)=>e(t)?(o(),a("div",j,[i("div",D,[i("div",S,[i("div",E,[(o(!0),a(F,null,I(e(_),(n,f)=>(o(),a("section",{key:f,class:"feature"},[n.title?(o(),a("h2",q,c(n.title),1)):r("v-if",!0),n.details?(o(),a("p",z,c(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var J=l(G,[["__scopeId","data-v-245bde66"]]);const K={key:0,class:"footer"},M={class:"container"},O={class:"text"},P=u({setup(h){const{frontmatter:s}=k();return(t,_)=>e(s).footer?(o(),a("footer",K,[i("div",M,[i("p",O,c(e(s).footer),1)])])):r("v-if",!0)}});var Q=l(P,[["__scopeId","data-v-bff49316"]]);const R={class:"home","aria-labelledby":"main-title"},U={class:"home-content"},W=u({setup(h){return(s,t)=>{const _=L("Content");return o(),a("main",R,[v(V),y(s.$slots,"hero",{},void 0,!0),v(J),i("div",U,[v(_)]),y(s.$slots,"features",{},void 0,!0),v(Q),y(s.$slots,"footer",{},void 0,!0)])}}});var Y=l(W,[["__scopeId","data-v-40a20ed2"]]);export{Y as default};
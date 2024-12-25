import{H3Event as C,getRequestURL as ee,getResponseHeaders as te,getRequestWebStream as re,eventHandler as ne}from"h3";import{getContext as oe}from"unctx";import{AsyncLocalStorage as ae}from"node:async_hooks";import{isPlainArray as se,isPlainObject as A,defer as ie,useRouter as y,pick as ue,ScriptOnce as T,TSR_DEFERRED_PROMISE as L,createControlledPromise as ce,RouterProvider as le,createMemoryHistory as de,useRouterState as S,useMatch as me,rootRouteId as pe,ErrorComponent as fe,Link as E,createRootRouteWithContext as he,Outlet as ye,ScrollRestoration as _e,createFileRoute as _,lazyFn as ge,lazyRouteComponent as g,createRouter as Se}from"@tanstack/react-router";import{jsxs as m,Fragment as f,jsx as i}from"react/jsx-runtime";import*as R from"react";import{createElement as D}from"react";import x from"jsesc";import Re from"tiny-invariant";import{Transform as xe,PassThrough as be}from"node:stream";import{isbot as M}from"isbot";import b from"react-dom/server";import{Context as W}from"@tanstack/react-cross-context";import{QueryClient as we}from"@tanstack/react-query";import{routerWithQueryClient as ve}from"@tanstack/react-router-with-query";import{ReactQueryDevtools as Ce}from"@tanstack/react-query-devtools";import{TanStackRouterDevtools as Te}from"@tanstack/router-devtools";function Ee(e,t,r){if(!r.router.isServer)return t;r.match.extracted=r.match.extracted||[];const n=r.match.extracted;return H(t,(o,s)=>{const u=o instanceof ReadableStream?"stream":o instanceof Promise?"promise":void 0;if(u==="stream"){const[c,l]=o.tee(),d={dataType:e,type:u,path:s,id:n.length,matchIndex:r.match.index,streamState:Le({stream:l})};return n.push(d),c}else if(u==="promise"){ie(o);const c={dataType:e,type:u,path:s,id:n.length,matchIndex:r.match.index,promiseState:o};n.push(c)}return o})}function He(e){const t=y(),r=t.state.matches[e.matchIndex];if(!t.isServer)return null;const n=r.extracted,[a,o]=["__beforeLoadContext","loaderData"].map(s=>n?n.reduce((u,c)=>c.dataType!==s?P(u,["temp",...c.path],void 0):u,{temp:r[s]}).temp:r[s]);if(a!==void 0||o!==void 0||n?.length){const s=`__TSR__.initMatch(${x({index:e.matchIndex,__beforeLoadContext:t.options.transformer.stringify(a),loaderData:t.options.transformer.stringify(o),extracted:n?Object.fromEntries(n.map(u=>[u.id,ue(u,["type","path"])])):{}},{isScriptContext:!0,wrap:!0,json:!0})})`;return m(f,{children:[i(T,{children:s}),n?n.map(u=>u.type==="stream"?i($e,{entry:u},u.id):i(Pe,{entry:u},u.id)):null]})}return null}function H(e,t,r=[]){if(se(e))return e.map((a,o)=>H(a,t,[...r,`${o}`]));if(A(e)){const a={};for(const o in e)a[o]=H(e[o],t,[...r,o]);return a}const n=t(e,r);return n!==e?n:e}function Pe({entry:e}){return i("div",{className:"tsr-once",children:i(R.Suspense,{fallback:null,children:i(ke,{entry:e})})})}function ke({entry:e}){const t=y();if(e.promiseState[L].status==="pending")throw e.promiseState;const r=`__TSR__.resolvePromise(${x({...e,value:e.promiseState[L]},{isScriptContext:!0,wrap:!0,json:!0})})`;return t.injectScript(r),i(f,{})}function $e({entry:e}){Re(e.streamState,"StreamState should be defined");const t=y();return i(B,{streamState:e.streamState,children:r=>{const n=r?`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.enqueue(new TextEncoder().encode(${x(r.toString(),{isScriptContext:!0,wrap:!0,json:!0})}))`:`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.close()`;return t.injectScript(n),i(f,{})}})}function Le({stream:e}){const t={promises:[]},r=e.getReader(),n=a=>(t.promises[a]=ce(),r.read().then(({done:o,value:s})=>{if(o){t.promises[a].resolve(null),r.releaseLock();return}return t.promises[a].resolve(s),n(a+1)}));return n(0).catch(a=>{console.error("stream read error",a)}),t}function B({streamState:e,children:t,__index:r=0}){const n=e.promises[r];if(!n)return null;if(n.status==="pending")throw n;const a=n.value;return m(f,{children:[t(a),i("div",{className:"tsr-once",children:i(R.Suspense,{fallback:null,children:i(B,{streamState:e,__index:r+1,children:t})})})]})}function P(e,t,r){if(t.length===0)return r;const[n,...a]=t;return Array.isArray(e)?e.map((o,s)=>s===Number(n)?P(o,a,r):o):A(e)?{...e,[n]:P(e[n],a,r)}:e}function I(e){e.router.AfterEachMatch=He,e.router.serializer=n=>x(n,{isScriptContext:!0,wrap:!0,json:!0});const t=W.get("TanStackRouterHydrationContext",{}),r=R.useMemo(()=>{var n,a;return{router:e.router.dehydrate(),payload:(a=(n=e.router.options).dehydrate)==null?void 0:a.call(n)}},[e.router]);return i(t.Provider,{value:r,children:i(le,{router:e.router})})}function Me(e){let t;const r=F(e),n={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(r,{...n,body:e.node.req.body}):new Request(r,{...n,get body(){return t||(t=We(e),t)}})}function Ie(e){return e.web??={request:Me(e),url:F(e)},e.web.request}function qe(){return Ne()}const N=Symbol("$HTTPEvent");function Ae(e){return typeof e=="object"&&(e instanceof C||e?.[N]instanceof C||e?.__is_event__===!0)}function k(e){return function(...t){let r=t[0];if(Ae(r))t[0]=r instanceof C||r.__is_event__?r:r[N];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(r=qe(),!r)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(r)}return e(...t)}}const F=k(ee),De=k(te),We=k(re);function Be(){return oe("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:ae})}function Ne(){return Be().use().event}function Fe(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function q(...e){return e.reduce((t,r)=>{const n=Fe(r);for(const[a,o]of n.entries())t.set(a,o);return t},new Headers)}function Oe({createRouter:e,getRouterManifest:t}){return r=>ne(async n=>{const a=Ie(n),o=new URL(a.url),s=o.href.replace(o.origin,""),u=de({initialEntries:[s]}),c=e();c.serializeLoaderData=Ee,t&&(c.manifest=t()),c.update({history:u}),await c.load();const l=je({event:n,router:c});return await r({request:a,router:c,responseHeaders:l})})}function je(e){e.event.__tsrHeadersSent=!0;let t=q(De(e.event),{"Content-Type":"text/html; charset=UTF-8"},...e.router.state.matches.map(n=>n.headers));const{redirect:r}=e.router.state;return r&&(t=q(t,r.headers,{Location:r.href})),t}function ze(e){const t=O(()=>e.injectedHtml.map(r=>r()).join(""));return new xe({transform(r,n,a){t.transform(r,this.push.bind(this)).then(()=>a()).catch(o=>a(o))},flush(r){t.flush(this.push.bind(this)).then(()=>r()).catch(n=>r(n))}})}function Ue(e){const t=O(()=>e.injectedHtml.map(n=>n()).join("")),r=new TextEncoder;return new TransformStream({transform(n,a){return t.transform(n,o=>(a.enqueue(r.encode(o)),!0))},flush(n){return t.flush(a=>(n.enqueue(a),!0))}})}const Qe=/(<body)/,Ge=/(<\/body>)/,Je=/(<\/html>)/,Ve=/(<\/[a-zA-Z][\w:.-]*?>)/g,Ze=new TextDecoder;function O(e){let t=!1,r="",n="";return{async transform(a,o){const s=r+Ze.decode(a),u=s.match(Qe),c=s.match(Ge),l=s.match(Je);try{if(u&&(t=!0),!t){o(s),r="";return}const d=e();if(c&&l&&c.index<l.index){const p=c.index+c[0].length,h=l.index+l[0].length,v=s.slice(0,p)+d+s.slice(p,h)+s.slice(h);o(v),r=""}else{let p,h=0;for(;(p=Ve.exec(s))!==null;)h=p.index+p[0].length;if(h>0){const v=s.slice(0,h)+d+n;o(v),r=s.slice(h)}else r=s,n+=d}}catch(d){throw console.error("Error transforming HTML:",d),d}},async flush(a){r&&a(r)}}}const Ke=async({request:e,router:t,responseHeaders:r})=>{if(typeof b.renderToReadableStream=="function"){const n=await b.renderToReadableStream(i(I,{router:t}),{signal:e.signal});M(e.headers.get("User-Agent"))&&await n.allReady;const o=[Ue(t)].reduce((s,u)=>s.pipeThrough(u),n);return new Response(o,{status:t.state.statusCode,headers:r})}if(typeof b.renderToPipeableStream=="function"){const n=new be;try{const s=b.renderToPipeableStream(i(I,{router:t}),{...M(e.headers.get("User-Agent"))?{onAllReady(){s.pipe(n)}}:{onShellReady(){s.pipe(n)}},onError:(u,c)=>{console.log("Error in renderToPipeableStream:",u,c)}})}catch(s){console.log("Error in renderToPipeableStream:",s)}const o=[ze(t)].reduce((s,u)=>s.pipe(u),n);return new Response(o,{status:t.state.statusCode,headers:r})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")},Xe=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/","/_layout","/deferred"],preloads:["\\_build\\assets\\client-9W9AZ3fn.js","\\_build\\assets\\client-Bh7on54W.js"]},"/":{filePath:"index.tsx"},"/_layout":{filePath:"_layout.tsx",children:["/_layout/_layout-2"]},"/deferred":{filePath:"deferred.tsx"},"/_layout/_layout-2":{filePath:"_layout/_layout-2.tsx",parent:"/_layout",children:["/_layout/_layout-2/layout-a","/_layout/_layout-2/layout-b"]},"/_layout/_layout-2/layout-a":{filePath:"_layout/_layout-2/layout-a.tsx",parent:"/_layout/_layout-2"},"/_layout/_layout-2/layout-b":{filePath:"_layout/_layout-2/layout-b.tsx",parent:"/_layout/_layout-2"}}});function Ye(e){return globalThis.MANIFEST[e]}function et(){const e=Xe(),t=e.routes.__root__=e.routes.__root__||{};t.assets=t.assets||[];const r=Ye("client");return t.assets.push({tag:"script",attrs:{src:r.inputs[r.handler]?.output.path,type:"module",async:!0,suppressHydrationWarning:!0}}),e}function tt(){const e=et();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([t,r])=>{const{preloads:n,assets:a}=r;return[t,{preloads:n,assets:a}]}))}}function j({tag:e,attrs:t,children:r}){switch(e){case"title":return i("title",{...t,suppressHydrationWarning:!0,children:r});case"meta":return i("meta",{...t,suppressHydrationWarning:!0});case"link":return i("link",{...t,suppressHydrationWarning:!0});case"style":return i("style",{...t,dangerouslySetInnerHTML:{__html:r}});case"script":return t&&t.src?i("script",{...t,suppressHydrationWarning:!0}):typeof r=="string"?i("script",{...t,dangerouslySetInnerHTML:{__html:r},suppressHydrationWarning:!0}):null;default:return null}}const rt=()=>{const e=y(),t=S({select:o=>o.matches.map(s=>s.meta).filter(Boolean)}),r=R.useMemo(()=>{const o=[],s={};let u;return[...t].reverse().forEach(c=>{[...c].reverse().forEach(l=>{if(l)if(l.title)u||(u={tag:"title",children:l.title});else{const d=l.name??l.property;if(d){if(s[d])return;s[d]=!0}o.push({tag:"meta",attrs:{...l}})}})}),u&&o.push(u),o.reverse(),o},[t]),n=S({select:o=>o.matches.map(s=>s.links).filter(Boolean).flat(1).map(s=>({tag:"link",attrs:{...s}})),structuralSharing:!0}),a=S({select:o=>{const s=[];return o.matches.map(u=>e.looseRoutesById[u.routeId]).forEach(u=>{var c,l,d;return(d=(l=(c=e.manifest)==null?void 0:c.routes[u.id])==null?void 0:l.preloads)==null?void 0:d.filter(Boolean).forEach(p=>{s.push({tag:"link",attrs:{rel:"modulepreload",href:p}})})}),s},structuralSharing:!0});return at([...r,...a,...n],o=>JSON.stringify(o))},nt=()=>{const e=y(),t=rt(),r=R.useContext(W.get("TanStackRouterHydrationContext",{}));return m(f,{children:[t.map((n,a)=>D(j,{...n,key:`tsr-meta-${JSON.stringify(n)}`})),m(f,{children:[i(T,{log:!1,children:'__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};'}),i(T,{children:`__TSR__.dehydrated = ${x(e.options.transformer.stringify(r),{isScriptContext:!0,wrap:!0,json:!0})}`})]})]})},ot=()=>i(f,{children:nt()});function at(e,t){const r=new Set;return e.filter(n=>{const a=t(n);return r.has(a)?!1:(r.add(a),!0)})}const st=()=>{const e=y(),t=S({select:a=>{const o=[];return a.matches.map(s=>e.looseRoutesById[s.routeId]).forEach(s=>{var u,c,l;return(l=(c=(u=e.manifest)==null?void 0:u.routes[s.id])==null?void 0:c.assets)==null?void 0:l.filter(d=>d.tag==="script").forEach(d=>{o.push({tag:"script",attrs:d.attrs,children:d.children})})}),o},structuralSharing:!0}),{scripts:r}=S({select:a=>({scripts:a.matches.map(o=>o.scripts).filter(Boolean).flat(1).map(({children:o,...s})=>({tag:"script",attrs:{...s,suppressHydrationWarning:!0},children:o}))})}),n=[...r,...t];return i(f,{children:n.map((a,o)=>D(j,{...a,key:`tsr-scripts-${a.tag}-${o}`}))})};function z({error:e}){const t=y(),r=me({strict:!1,select:n=>n.id===pe});return console.error(e),m("div",{className:"min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6",children:[i(fe,{error:e}),m("div",{className:"flex gap-2 items-center flex-wrap",children:[i("button",{onClick:()=>{t.invalidate()},className:"px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",children:"Try Again"}),r?i(E,{to:"/",className:"px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",children:"Home"}):i(E,{to:"/",className:"px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",onClick:n=>{n.preventDefault(),window.history.back()},children:"Go Back"})]})]})}function U({children:e}){return m("div",{className:"space-y-2 p-2",children:[i("div",{className:"text-gray-600 dark:text-gray-400",children:e||i("p",{children:"The page you are looking for does not exist."})}),i("p",{className:"flex items-center gap-2 flex-wrap",children:i(E,{to:"/",className:"bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm",children:"Go Home"})})]})}const it="/_build/assets/app-eFpPO7oP.css",ut=({title:e,description:t,keywords:r,image:n})=>[{title:e},{name:"description",content:t},{name:"keywords",content:r},{name:"twitter:title",content:e},{name:"twitter:description",content:t},{name:"twitter:creator",content:"@tannerlinsley"},{name:"twitter:site",content:"@tannerlinsley"},{name:"og:type",content:"website"},{name:"og:title",content:e},{name:"og:description",content:t},...n?[{name:"twitter:image",content:n},{name:"twitter:card",content:"summary_large_image"},{name:"og:image",content:n}]:[]],w=he()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},...ut({title:"TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",description:"TanStack Start is a type-safe, client-first, full-stack React framework. "})],links:[{rel:"stylesheet",href:it},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Serif:ital@0;1&display=swap"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/futura-font@1.0.0/styles.min.css"},{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"manifest",href:"/site.webmanifest",color:"#fffff"},{rel:"icon",href:"/favicon.ico"}]}),errorComponent:e=>i(Q,{children:i(z,{...e})}),notFoundComponent:()=>i(U,{}),component:ct});function ct(){return i(Q,{children:i(ye,{})})}function Q({children:e}){return m("html",{children:[i("head",{children:i(ot,{})}),m("body",{children:[e,i(_e,{}),i(Te,{position:"bottom-right"}),i(Ce,{buttonPosition:"bottom-left"}),i(st,{})]})]})}const lt=()=>import("./assets/deferred-_oFpZdcr.js"),dt=()=>import("./assets/deferred-_oFpZdcr.js"),G=_("/deferred")({loader:ge(dt,"loader"),component:g(lt,"component",()=>G.ssr)}),mt=()=>import("./assets/_layout-ClbD_m1f.js"),J=_("/_layout")({component:g(mt,"component",()=>J.ssr)}),pt=()=>import("./assets/index-CwcDcgRg.js"),V=_("/")({component:g(pt,"component",()=>V.ssr)}),ft=()=>import("./assets/_layout-2-B-EA8QsU.js"),Z=_("/_layout/_layout-2")({component:g(ft,"component",()=>Z.ssr)}),ht=()=>import("./assets/layout-b-CK0h5wO7.js"),K=_("/_layout/_layout-2/layout-b")({component:g(ht,"component",()=>K.ssr)}),yt=()=>import("./assets/layout-a-DGkktjJC.js"),X=_("/_layout/_layout-2/layout-a")({component:g(yt,"component",()=>X.ssr)}),_t=G.update({id:"/deferred",path:"/deferred",getParentRoute:()=>w}),Y=J.update({id:"/_layout",getParentRoute:()=>w}),gt=V.update({id:"/",path:"/",getParentRoute:()=>w}),$=Z.update({id:"/_layout-2",getParentRoute:()=>Y}),St=K.update({id:"/layout-b",path:"/layout-b",getParentRoute:()=>$}),Rt=X.update({id:"/layout-a",path:"/layout-a",getParentRoute:()=>$}),xt={LayoutLayout2LayoutARoute:Rt,LayoutLayout2LayoutBRoute:St},bt=$._addFileChildren(xt),wt={LayoutLayout2Route:bt},vt=Y._addFileChildren(wt),Ct={IndexRoute:gt,LayoutRoute:vt,DeferredRoute:_t},Tt=w._addFileChildren(Ct)._addFileTypes();function Et(){const e=new we;return ve(Se({routeTree:Tt,context:{queryClient:e},defaultPreload:"intent",defaultErrorComponent:z,defaultNotFoundComponent:()=>i(U,{})}),e)}const zt=Oe({createRouter:Et,getRouterManifest:tt})(Ke);export{zt as default};

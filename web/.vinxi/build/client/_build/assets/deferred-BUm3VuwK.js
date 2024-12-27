import{S as z,p as U,r as v,s as E,a as C,n as V,i as T,b as M,t as W,f as K,c as $,d as _,e as A,g as f,u as G,j as d}from"./client-DUHRMBPS.js";var J=class extends z{constructor(e,t){super(),this.options=t,this.#s=e,this.#r=null,this.#i=U(),this.options.experimental_prefetchInRender||this.#i.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(t)}#s;#e=void 0;#p=void 0;#t=void 0;#a;#c;#i;#r;#v;#l;#d;#o;#h;#n;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),k(this.#e,this.options)?this.#u():this.updateResult(),this.#R())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return I(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return I(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#g(),this.#O(),this.#e.removeObserver(this)}setOptions(e,t){const s=this.options,r=this.#e;if(this.options=this.#s.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof v(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#C(),this.#e.setOptions(this.options),s._defaulted&&!E(this.options,s)&&this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const o=this.hasListeners();o&&L(this.#e,r,this.options,s)&&this.#u(),this.updateResult(t),o&&(this.#e!==r||v(this.options.enabled,this.#e)!==v(s.enabled,this.#e)||C(this.options.staleTime,this.#e)!==C(s.staleTime,this.#e))&&this.#y();const u=this.#b();o&&(this.#e!==r||v(this.options.enabled,this.#e)!==v(s.enabled,this.#e)||u!==this.#n)&&this.#m(u)}getOptimisticResult(e){const t=this.#s.getQueryCache().build(this.#s,e),s=this.createResult(t,e);return Y(this,s)&&(this.#t=s,this.#c=this.options,this.#a=this.#e.state),s}getCurrentResult(){return this.#t}trackResult(e,t){const s={};return Object.keys(e).forEach(r=>{Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),t?.(r),e[r])})}),s}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#s.defaultQueryOptions(e),s=this.#s.getQueryCache().build(this.#s,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#u({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#u(e){this.#C();let t=this.#e.fetch(this.options,e);return e?.throwOnError||(t=t.catch(V)),t}#y(){this.#g();const e=C(this.options.staleTime,this.#e);if(T||this.#t.isStale||!M(e))return;const s=W(this.#t.dataUpdatedAt,e)+1;this.#o=setTimeout(()=>{this.#t.isStale||this.updateResult()},s)}#b(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#m(e){this.#O(),this.#n=e,!(T||v(this.options.enabled,this.#e)===!1||!M(this.#n)||this.#n===0)&&(this.#h=setInterval(()=>{(this.options.refetchIntervalInBackground||K.isFocused())&&this.#u()},this.#n))}#R(){this.#y(),this.#m(this.#b())}#g(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}#O(){this.#h&&(clearInterval(this.#h),this.#h=void 0)}createResult(e,t){const s=this.#e,r=this.options,o=this.#t,u=this.#a,i=this.#c,a=e!==s?e.state:this.#p,{state:c}=e;let n={...c},g=!1,l;if(t._optimisticResults){const h=this.hasListeners(),b=!h&&k(e,t),m=h&&L(e,s,t,r);(b||m)&&(n={...n,...$(c.data,e.options)}),t._optimisticResults==="isRestoring"&&(n.fetchStatus="idle")}let{error:D,errorUpdatedAt:j,status:y}=n;if(t.select&&n.data!==void 0)if(o&&n.data===u?.data&&t.select===this.#v)l=this.#l;else try{this.#v=t.select,l=t.select(n.data),l=_(o?.data,l,t),this.#l=l,this.#r=null}catch(h){this.#r=h}else l=n.data;if(t.placeholderData!==void 0&&l===void 0&&y==="pending"){let h;if(o?.isPlaceholderData&&t.placeholderData===i?.placeholderData)h=o.data;else if(h=typeof t.placeholderData=="function"?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,t.select&&h!==void 0)try{h=t.select(h),this.#r=null}catch(b){this.#r=b}h!==void 0&&(y="success",l=_(o?.data,h,t),g=!0)}this.#r&&(D=this.#r,l=this.#l,j=Date.now(),y="error");const S=n.fetchStatus==="fetching",x=y==="pending",Q=y==="error",F=x&&S,P=l!==void 0,p={status:y,fetchStatus:n.fetchStatus,isPending:x,isSuccess:y==="success",isError:Q,isInitialLoading:F,isLoading:F,data:l,dataUpdatedAt:n.dataUpdatedAt,error:D,errorUpdatedAt:j,failureCount:n.fetchFailureCount,failureReason:n.fetchFailureReason,errorUpdateCount:n.errorUpdateCount,isFetched:n.dataUpdateCount>0||n.errorUpdateCount>0,isFetchedAfterMount:n.dataUpdateCount>a.dataUpdateCount||n.errorUpdateCount>a.errorUpdateCount,isFetching:S,isRefetching:S&&!x,isLoadingError:Q&&!P,isPaused:n.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:Q&&P,isStale:w(e,t),refetch:this.refetch,promise:this.#i};if(this.options.experimental_prefetchInRender){const h=O=>{p.status==="error"?O.reject(p.error):p.data!==void 0&&O.resolve(p.data)},b=()=>{const O=this.#i=p.promise=U();h(O)},m=this.#i;switch(m.status){case"pending":e.queryHash===s.queryHash&&h(m);break;case"fulfilled":(p.status==="error"||p.data!==m.value)&&b();break;case"rejected":(p.status!=="error"||p.error!==m.reason)&&b();break}}return p}updateResult(e){const t=this.#t,s=this.createResult(this.#e,this.options);if(this.#a=this.#e.state,this.#c=this.options,this.#a.data!==void 0&&(this.#d=this.#e),E(s,t))return;this.#t=s;const r={},o=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options,i=typeof u=="function"?u():u;if(i==="all"||!i&&!this.#f.size)return!0;const R=new Set(i??this.#f);return this.options.throwOnError&&R.add("error"),Object.keys(this.#t).some(a=>{const c=a;return this.#t[c]!==t[c]&&R.has(c)})};e?.listeners!==!1&&o()&&(r.listeners=!0),this.#S({...r,...e})}#C(){const e=this.#s.getQueryCache().build(this.#s,this.options);if(e===this.#e)return;const t=this.#e;this.#e=e,this.#p=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#R()}#S(e){A.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#t)}),this.#s.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function X(e,t){return v(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function k(e,t){return X(e,t)||e.state.data!==void 0&&I(e,t,t.refetchOnMount)}function I(e,t,s){if(v(t.enabled,e)!==!1){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&w(e,t)}return!1}function L(e,t,s,r){return(e!==t||v(r.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&w(e,s)}function w(e,t){return v(t.enabled,e)!==!1&&e.isStaleByTime(C(t.staleTime,e))}function Y(e,t){return!E(e.getCurrentResult(),t)}var q=f.createContext(!1),Z=()=>f.useContext(q);q.Provider;function ee(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var te=f.createContext(ee()),se=()=>f.useContext(te);function re(e,t){return typeof e=="function"?e(...t):!!e}function B(){}var ie=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},ne=e=>{f.useEffect(()=>{e.clearReset()},[e])},ae=({result:e,errorResetBoundary:t,throwOnError:s,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&re(s,[e.error,r]),oe=(e,t)=>t.state.data===void 0,he=e=>{e.suspense&&(e.staleTime===void 0&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},ue=(e,t)=>e.isLoading&&e.isFetching&&!t,ce=(e,t)=>e?.suspense&&t.isPending,H=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function le(e,t,s){const r=G(),o=Z(),u=se(),i=r.defaultQueryOptions(e);r.getDefaultOptions().queries?._experimental_beforeQuery?.(i),i._optimisticResults=o?"isRestoring":"optimistic",he(i),ie(i,u),ne(u);const R=!r.getQueryCache().get(i.queryHash),[a]=f.useState(()=>new t(r,i)),c=a.getOptimisticResult(i);if(f.useSyncExternalStore(f.useCallback(n=>{const g=o?B:a.subscribe(A.batchCalls(n));return a.updateResult(),g},[a,o]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),f.useEffect(()=>{a.setOptions(i,{listeners:!1})},[i,a]),ce(i,c))throw H(i,a,u);if(ae({result:c,errorResetBoundary:u,throwOnError:i.throwOnError,query:r.getQueryCache().get(i.queryHash)}))throw c.error;return r.getDefaultOptions().queries?._experimental_afterQuery?.(i,c),i.experimental_prefetchInRender&&!T&&ue(c,o)&&(R?H(i,a,u):r.getQueryCache().get(i.queryHash)?.promise)?.catch(B).finally(()=>{a.updateResult()}),i.notifyOnChangeProps?c:a.trackResult(c)}function de(e,t){return le({...e,enabled:!0,suspense:!0,throwOnError:oe,placeholderData:void 0},J)}const N=()=>({queryKey:["deferred"],queryFn:async()=>(await new Promise(e=>setTimeout(e,3e3)),{message:"Hello deferred from the server!",status:"success",time:new Date})});function fe(){const e=de(N());return d.jsxs("div",{children:[d.jsx("h1",{children:"Deferred Query"}),d.jsxs("div",{children:["Status: ",e.data.status]}),d.jsxs("div",{children:["Message: ",e.data.message]}),d.jsxs("div",{children:["Time: ",e.data.time.toISOString()]})]})}const ye=function(){const[t,s]=f.useState(0);return d.jsxs("div",{className:"p-2",children:[d.jsx(f.Suspense,{fallback:"Loading Middleman...",children:d.jsx(fe,{})}),d.jsxs("div",{children:["Count: ",t]}),d.jsx("div",{children:d.jsx("button",{onClick:()=>s(t+1),children:"Increment"})})]})},be=({context:e})=>{e.queryClient.prefetchQuery(N())};export{ye as component,be as loader};
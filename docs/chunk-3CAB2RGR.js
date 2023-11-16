import{B as w,Ba as R,Ca as p,I as F,K as M,O as d,P as B,S as D,T as f,X as H,Y as $,Z as q,a as _,da as j,m as g,o as c,q as A,u as V,ua as J,v as P,w as U,z as G,za as L}from"./chunk-CIOQFN67.js";var C=class{},X=(()=>{class i extends C{getTranslation(e){return g({})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=d({token:i,factory:i.\u0275fac})}return i})(),T=class{},z=(()=>{class i{handle(e){return e.key}static \u0275fac=function(t){return new(t||i)};static \u0275prov=d({token:i,factory:i.\u0275fac})}return i})();function y(i,r){if(i===r)return!0;if(i===null||r===null)return!1;if(i!==i&&r!==r)return!0;let e=typeof i,t=typeof r,n,s,a;if(e==t&&e=="object")if(Array.isArray(i)){if(!Array.isArray(r))return!1;if((n=i.length)==r.length){for(s=0;s<n;s++)if(!y(i[s],r[s]))return!1;return!0}}else{if(Array.isArray(r))return!1;a=Object.create(null);for(s in i){if(!y(i[s],r[s]))return!1;a[s]=!0}for(s in r)if(!(s in a)&&typeof r[s]<"u")return!1;return!0}return!1}function u(i){return typeof i<"u"&&i!==null}function I(i){return i&&typeof i=="object"&&!Array.isArray(i)}function Q(i,r){let e=Object.assign({},i);return I(i)&&I(r)&&Object.keys(r).forEach(t=>{I(r[t])?t in i?e[t]=Q(i[t],r[t]):Object.assign(e,{[t]:r[t]}):Object.assign(e,{[t]:r[t]})}),e}var v=class{},W=(()=>{class i extends v{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){let n;return typeof e=="string"?n=this.interpolateString(e,t):typeof e=="function"?n=this.interpolateFunction(e,t):n=e,n}getValue(e,t){let n=typeof t=="string"?t.split("."):[t];t="";do t+=n.shift(),u(e)&&u(e[t])&&(typeof e[t]=="object"||!n.length)?(e=e[t],t=""):n.length?t+=".":e=void 0;while(n.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(n,s)=>{let a=this.getValue(t,s);return u(a)?a:n}):e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=d({token:i,factory:i.\u0275fac})}return i})(),b=class{},Z=(()=>{class i extends b{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=j(i)))(n||i)}})();static \u0275prov=d({token:i,factory:i.\u0275fac})}return i})(),S=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new p;onLangChange=new p;onDefaultLangChange=new p},N=new D("USE_STORE"),O=new D("USE_DEFAULT_LANG"),x=new D("DEFAULT_LANGUAGE"),K=new D("USE_EXTEND"),E=(()=>{class i{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new p;_onLangChange=new p;_onDefaultLangChange=new p;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,n,s,a,l=!0,o=!1,h=!1,m){this.store=e,this.currentLoader=t,this.compiler=n,this.parser=s,this.missingTranslationHandler=a,this.useDefaultLang=l,this.isolate=o,this.extend=h,m&&this.setDefaultLang(m)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(w(1)).subscribe(n=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return g(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe(w(1)).subscribe(n=>{this.changeLang(e)}),t):(this.changeLang(e),g(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(F(1),w(1));return this.loadingTranslations=t.pipe(A(n=>this.compiler.compileTranslations(n,e)),F(1),w(1)),this.loadingTranslations.subscribe({next:n=>{this.translations[e]=this.extend&&this.translations[e]?_(_({},n),this.translations[e]):n,this.updateLangs(),this.pending=!1},error:n=>{this.pending=!1}}),t}setTranslation(e,t,n=!1){t=this.compiler.compileTranslations(t,e),(n||this.extend)&&this.translations[e]?this.translations[e]=Q(this.translations[e],t):this.translations[e]=t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{this.langs.indexOf(t)===-1&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,n){let s;if(t instanceof Array){let a={},l=!1;for(let o of t)a[o]=this.getParsedResult(e,o,n),c(a[o])&&(l=!0);if(l){let o=t.map(h=>c(a[h])?a[h]:g(a[h]));return U(o).pipe(A(h=>{let m={};return h.forEach((Y,k)=>{m[t[k]]=Y}),m}))}return a}if(e&&(s=this.parser.interpolate(this.parser.getValue(e,t),n)),typeof s>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),n)),typeof s>"u"){let a={key:t,translateService:this};typeof n<"u"&&(a.interpolateParams=n),s=this.missingTranslationHandler.handle(a)}return typeof s<"u"?s:t}get(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(G(n=>(n=this.getParsedResult(n,e,t),c(n)?n:g(n))));{let n=this.getParsedResult(this.translations[this.currentLang],e,t);return c(n)?n:g(n)}}getStreamOnTranslationChange(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" required');return V(P(()=>this.get(e,t)),this.onTranslationChange.pipe(M(n=>{let s=this.getParsedResult(n.translations,e,t);return typeof s.subscribe=="function"?s:g(s)})))}stream(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" required');return V(P(()=>this.get(e,t)),this.onLangChange.pipe(M(n=>{let s=this.getParsedResult(n.translations,e,t);return c(s)?s:g(s)})))}instant(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" required');let n=this.getParsedResult(this.translations[this.currentLang],e,t);if(c(n)){if(e instanceof Array){let s={};return e.forEach((a,l)=>{s[e[l]]=e[l]}),s}return e}else return n}set(e,t,n=this.currentLang){this.translations[n][e]=this.compiler.compile(t,n),this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(t){return new(t||i)(f(S),f(C),f(b),f(v),f(T),f(O),f(N),f(K),f(x))};static \u0275prov=d({token:i,factory:i.\u0275fac})}return i})(),he=(()=>{class i{translateService;element;_ref;key;lastParams;currentParams;onLangChangeSub;onDefaultLangChangeSub;onTranslationChangeSub;set translate(e){e&&(this.key=e,this.checkNodes())}set translateParams(e){y(this.currentParams,e)||(this.currentParams=e,this.checkNodes(!0))}constructor(e,t,n){this.translateService=e,this.element=t,this._ref=n,this.onTranslationChangeSub||(this.onTranslationChangeSub=this.translateService.onTranslationChange.subscribe(s=>{s.lang===this.translateService.currentLang&&this.checkNodes(!0,s.translations)})),this.onLangChangeSub||(this.onLangChangeSub=this.translateService.onLangChange.subscribe(s=>{this.checkNodes(!0,s.translations)})),this.onDefaultLangChangeSub||(this.onDefaultLangChangeSub=this.translateService.onDefaultLangChange.subscribe(s=>{this.checkNodes(!0)}))}ngAfterViewChecked(){this.checkNodes()}checkNodes(e=!1,t){let n=this.element.nativeElement.childNodes;n.length||(this.setContent(this.element.nativeElement,this.key),n=this.element.nativeElement.childNodes);for(let s=0;s<n.length;++s){let a=n[s];if(a.nodeType===3){let l;if(e&&(a.lastKey=null),u(a.lookupKey))l=a.lookupKey;else if(this.key)l=this.key;else{let o=this.getContent(a),h=o.trim();h.length&&(a.lookupKey=h,o!==a.currentValue?(l=h,a.originalContent=o||a.originalContent):a.originalContent?l=a.originalContent.trim():o!==a.currentValue&&(l=h,a.originalContent=o||a.originalContent))}this.updateValue(l,a,t)}}}updateValue(e,t,n){if(e){if(t.lastKey===e&&this.lastParams===this.currentParams)return;this.lastParams=this.currentParams;let s=a=>{a!==e&&(t.lastKey=e),t.originalContent||(t.originalContent=this.getContent(t)),t.currentValue=u(a)?a:t.originalContent||e,this.setContent(t,this.key?t.currentValue:t.originalContent.replace(e,t.currentValue)),this._ref.markForCheck()};if(u(n)){let a=this.translateService.getParsedResult(n,e,this.currentParams);c(a)?a.subscribe({next:s}):s(a)}else this.translateService.get(e,this.currentParams).subscribe(s)}}getContent(e){return u(e.textContent)?e.textContent:e.data}setContent(e,t){u(e.textContent)?e.textContent=t:e.data=t}ngOnDestroy(){this.onLangChangeSub&&this.onLangChangeSub.unsubscribe(),this.onDefaultLangChangeSub&&this.onDefaultLangChangeSub.unsubscribe(),this.onTranslationChangeSub&&this.onTranslationChangeSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)(L(E),L(J),L(R))};static \u0275dir=$({type:i,selectors:[["","translate",""],["","ngx-translate",""]],inputs:{translate:"translate",translateParams:"translateParams"}})}return i})(),fe=(()=>{class i{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,n){let s=a=>{this.value=a!==void 0?a:e,this.lastKey=e,this._ref.markForCheck()};if(n){let a=this.translate.getParsedResult(n,e,t);c(a.subscribe)?a.subscribe(s):s(a)}this.translate.get(e,t).subscribe(s)}transform(e,...t){if(!e||!e.length)return e;if(y(e,this.lastKey)&&y(t,this.lastParams))return this.value;let n;if(u(t[0])&&t.length)if(typeof t[0]=="string"&&t[0].length){let s=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{n=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else typeof t[0]=="object"&&!Array.isArray(t[0])&&(n=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,n),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,n,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||i)(L(E,16),L(R,16))};static \u0275pipe=q({name:"translate",type:i,pure:!1});static \u0275prov=d({token:i,factory:i.\u0275fac})}return i})(),ge=(()=>{class i{static forRoot(e={}){return{ngModule:i,providers:[e.loader||{provide:C,useClass:X},e.compiler||{provide:b,useClass:Z},e.parser||{provide:v,useClass:W},e.missingTranslationHandler||{provide:T,useClass:z},S,{provide:N,useValue:e.isolate},{provide:O,useValue:e.useDefaultLang},{provide:K,useValue:e.extend},{provide:x,useValue:e.defaultLanguage},E]}}static forChild(e={}){return{ngModule:i,providers:[e.loader||{provide:C,useClass:X},e.compiler||{provide:b,useClass:Z},e.parser||{provide:v,useClass:W},e.missingTranslationHandler||{provide:T,useClass:z},{provide:N,useValue:e.isolate},{provide:O,useValue:e.useDefaultLang},{provide:K,useValue:e.extend},{provide:x,useValue:e.defaultLanguage},E]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=H({type:i});static \u0275inj=B({})}return i})();export{C as a,E as b,he as c,fe as d,ge as e};

import{c as S,j as o,k as q,l as N,m as E,n as F,o as k,p as D,q as L,r as z,s as A,u as G}from"./chunk-WYYOAN2M.js";import{I as i,J as C,Ka as O,P as a,Qa as y,X as l,Y as M,Z as s,da as I,ia as P,na as w,u as v}from"./chunk-G6FVORLT.js";var J=(()=>{let e=class e{constructor(n){this.fb=n,this.logIn=this.fb.group({email:[null,[o.required,o.pattern(/\S+\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,3}$/)]],password:[null,[o.required,o.pattern(/^[A-Za-z0-9]{5,}$/)]]},{updateOn:"change"})}submit(n){n.valid&&console.log(n.value)}};e.\u0275fac=function(r){return new(r||e)(C(L))},e.\u0275cmp=v({type:e,selectors:[["app-log-in"]],standalone:!0,features:[w],decls:14,vars:15,consts:[[1,"py-5"],[1,"container","fx-middle"],[1,"p-4","rounded-3"],["priority","","height","32","width","154","ngSrc","assets/media/logos/Main-Logo.svg","alt","SaintStream"],["translate","auth.logIn.titleDescription",1,"mb-4"],[3,"formGroup","ngSubmit"],["form","ngForm"],["formControlName","email",3,"type","label","errors","submitted","touched","required","patternEmail"],["formControlName","password",3,"type","label","errors","submitted","touched","required","patternPassword"],["routerLink","/auth/forgot-password","translate","auth.logIn.forgotPassword",1,"d-block","text-center","my-3"],["type","submit","translate","auth.forms.logIn",1,"btn","btn-success","w-100","mb-3"],[1,"text-center"],["translate","auth.logIn.don'tHaveAccount"],["routerLink","/auth/sign-up","translate","auth.forms.register"]],template:function(r,t){if(r&1&&(l(0,"section",0)(1,"div",1)(2,"div",2),s(3,"img",3)(4,"p",4),l(5,"form",5,6),I("ngSubmit",function(){return t.submit(t.logIn)}),s(7,"app-input-text",7)(8,"app-input-text",8)(9,"a",9)(10,"button",10),l(11,"div",11),s(12,"span",12)(13,"a",13),M()()()()()),r&2){let u=P(6),d,p,g,c,_,f,b,h;i(5),a("formGroup",t.logIn),i(2),a("type","email")("label","email")("errors",(d=t.logIn.get("email"))==null?null:d.errors)("submitted",u.submitted)("touched",(p=t.logIn.get("email"))==null?null:p.touched)("required",(g=t.logIn.get("email"))==null?null:g.getError("required"))("patternEmail",(c=t.logIn.get("email"))==null?null:c.getError("pattern")),i(1),a("type","password")("label","password")("errors",(_=t.logIn.get("password"))==null?null:_.errors)("submitted",u.submitted)("touched",(f=t.logIn.get("password"))==null?null:f.touched)("required",(b=t.logIn.get("password"))==null?null:b.getError("required"))("patternPassword",(h=t.logIn.get("password"))==null?null:h.getError("pattern"))}},dependencies:[G,y,S,O,A,z,E,q,N,D,F,k],styles:["section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;border:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] + p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--genres-color)}@media screen and (min-width: 768px){section[_ngcontent-%COMP%]{background-color:#09080b}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:60%;background-color:var(--main-color);border:1px solid var(--border-color)}}"]});let m=e;return m})();export{J as LogInComponent};
import{a as V,b as i,c as D,d as Z,e as $,f as j,g as B,h as H,i as J,j as K,p as Q}from"./chunk-NFQNMKCA.js";import{A as s,B as A,Ca as L,H as m,Ja as R,K as _,L as f,P as n,Q as o,R as g,X as z,Y as G,aa as C,ba as p,fa as I,m as F}from"./chunk-VBDSVXC6.js";function W(l,a){l&1&&(n(0,"span",21),p(1,"This field is required"),o())}function X(l,a){if(l&1&&_(0,W,2,0,"span",20),l&2){let b=G(),t=C(7),r;f(0,(t.submitted||(r=b.signUp.get("privacyTerms"))!=null&&r.touched)&&((r=b.signUp.get("privacyTerms"))!=null&&r.getError("required"))?0:-1)}}var le=(()=>{let a=class a{constructor(t){this.fb=t,this.signUp=this.fb.group({firstName:[null,[i.required,i.pattern(/^\w{3,}$/)]],email:[null,[i.required,i.pattern(/\S+\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,3}$/)]],password:[null,[i.required,i.pattern(/^[A-Za-z0-9]{5,}$/)]],confirmPassword:[null,[i.required]],privacyTerms:[null,[i.required]]},{updateOn:"change"})}submit(t){t.valid&&t.get("confirmPassword")?.value===t.get("password")?.value&&console.log(t.value)}};a.\u0275fac=function(r){return new(r||a)(A(J))},a.\u0275cmp=F({type:a,selectors:[["app-sign-up"]],standalone:!0,features:[I],decls:27,vars:30,consts:[[1,"py-5"],[1,"container","fx-middle"],[1,"p-4","rounded-3"],["priority","","height","32","width","154","ngSrc","assets/media/logos/Main-Logo.svg","alt","SaintStream"],[1,"mb-4"],[3,"formGroup","ngSubmit"],["form","ngForm"],["formControlName","firstName",3,"type","label","errors","submitted","touched","required","patternFirstName"],["formControlName","email",3,"type","label","errors","submitted","touched","required","patternEmail"],["formControlName","password",3,"type","label","errors","submitted","touched","required","patternPassword"],["formControlName","confirmPassword",3,"type","label","errors","submitted","touched","required","patternConfirmPassword"],[1,"form-group","my-4"],[1,"fx"],[1,"position-relative"],["formControlName","privacyTerms","type","checkbox","id","checkbox"],["for","checkbox"],[1,"mb-0"],["type","submit",1,"btn","btn-success","w-100","mb-3"],[1,"text-center"],["routerLink","/auth/log-in"],["class","text-danger mt-1 d-inline-block"],[1,"text-danger","mt-1","d-inline-block"]],template:function(r,e){if(r&1&&(n(0,"section",0)(1,"div",1)(2,"div",2),g(3,"img",3),n(4,"p",4),p(5,"Register to enjoy the features"),o(),n(6,"form",5,6),z("ngSubmit",function(){return e.submit(e.signUp)}),g(8,"app-input-text",7)(9,"app-input-text",8)(10,"app-input-text",9)(11,"app-input-text",10),n(12,"div",11)(13,"div",12)(14,"div",13),g(15,"input",14)(16,"label",15),o(),n(17,"p",16),p(18,"I agree to our Privacy Policy and Term & conditions"),o()(),_(19,X,1,1),o(),n(20,"button",17),p(21,"Register"),o(),n(22,"div",18)(23,"span"),p(24,"Already have an account? "),o(),n(25,"a",19),p(26,"Login"),o()()()()()()),r&2){let d=C(7),P,M,v,O,h,y,w,U,S,N,q,x,E,k,T,c,u;s(6),m("formGroup",e.signUp),s(2),m("type","firstName")("label","First Name")("errors",(P=e.signUp.get("firstName"))==null?null:P.errors)("submitted",d.submitted)("touched",(M=e.signUp.get("firstName"))==null?null:M.touched)("required",(v=e.signUp.get("firstName"))==null?null:v.getError("required"))("patternFirstName",(O=e.signUp.get("firstName"))==null?null:O.getError("pattern")),s(1),m("type","email")("label","Email")("errors",(h=e.signUp.get("email"))==null?null:h.errors)("submitted",d.submitted)("touched",(y=e.signUp.get("email"))==null?null:y.touched)("required",(w=e.signUp.get("email"))==null?null:w.getError("required"))("patternEmail",(U=e.signUp.get("email"))==null?null:U.getError("pattern")),s(1),m("type","password")("label","Password")("errors",(S=e.signUp.get("password"))==null?null:S.errors)("submitted",d.submitted)("touched",(N=e.signUp.get("password"))==null?null:N.touched)("required",(q=e.signUp.get("password"))==null?null:q.getError("required"))("patternPassword",(x=e.signUp.get("password"))==null?null:x.getError("pattern")),s(1),m("type","password")("label","Confirm Password")("errors",(E=e.signUp.get("confirmPassword"))==null?null:E.errors)("submitted",d.submitted)("touched",(k=e.signUp.get("confirmPassword"))==null?null:k.touched)("required",(T=e.signUp.get("confirmPassword"))==null?null:T.getError("required"))("patternConfirmPassword",((c=e.signUp.get("confirmPassword"))==null?null:c.value)!==((c=e.signUp.get("password"))==null?null:c.value)),s(8),f(19,d.submitted||(u=e.signUp.get("privacyTerms"))!=null&&u.errors&&((u=e.signUp.get("privacyTerms"))!=null&&u.touched)?19:-1)}},dependencies:[Q,K,R,L,$,V,D,Z,H,j,B],styles:['section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;border:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--genres-color)}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:28px;height:28px;position:absolute;top:0;left:0;border-radius:50%;cursor:pointer;background-color:transparent;border:1px solid var(--border-color)}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{content:"";position:absolute;top:8px;left:7px;opacity:0;width:12px;height:6px;border:2px solid #fff;border-top:none;border-right:none;transform:rotate(-45deg)}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{visibility:hidden}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-color:#00925d;background-color:#00925d}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{opacity:1}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-inline-start:25px}@media screen and (min-width: 768px){section[_ngcontent-%COMP%]{background-color:#09080b}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:60%;background-color:var(--main-color);border:1px solid var(--border-color)}}']});let l=a;return l})();export{le as SignUpComponent};
import{Ma as h,q as s,t as a}from"./chunk-APVRS7FU.js";var p=(()=>{let t=class t{constructor(e){this.http=e,this.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTY2ZTJkNjhmODAyMTY2Y2YwYzE1ZDk0MjMwZDA3YSIsInN1YiI6IjY1MWIyYmIyOTNiZDY5MDExYjhlZjVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tZ2iJsSrapyyR4IWVUH-CYG5nDoXCmSDc9x3kdyHRM",accept:"application/json"},this.url="https://api.themoviedb.org/3/"}getGenres(e){return this.http.get(this.url+`genre/${e}/list?language=en`,{headers:this.headers})}getMedia(e,r,n=1){return this.http.get(this.url+`${e}/${r}?language=en-US&page=${n}`,{headers:this.headers})}getPeople(){return this.http.get(this.url+"trending/person/day?language=en-US",{headers:this.headers})}};t.\u0275fac=function(r){return new(r||t)(a(h))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{p as a};
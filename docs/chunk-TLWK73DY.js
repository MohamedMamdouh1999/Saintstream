import{a as f,b as M,c as I,d as y,e as G}from"./chunk-234P6PGU.js";import{b as v}from"./chunk-5WAFK4RJ.js";import{a as g}from"./chunk-65YQGTPQ.js";import{Ia as n,O as p,Qa as l,Ra as d,Sa as u,T as m,W as h,gb as c,ya as o,za as a}from"./chunk-CKSJ4H6S.js";var b=(()=>{let s=class s{constructor(e){this.http=e,this.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTY2ZTJkNjhmODAyMTY2Y2YwYzE1ZDk0MjMwZDA3YSIsInN1YiI6IjY1MWIyYmIyOTNiZDY5MDExYjhlZjVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tZ2iJsSrapyyR4IWVUH-CYG5nDoXCmSDc9x3kdyHRM",accept:"application/json"},this.url="https://api.themoviedb.org/3/"}getPeople(){return this.http.get(this.url+"trending/person/day?language=en-US",{headers:this.headers})}getGenres(e,t){return this.http.get(this.url+`genre/${e}/list?language=${t}`,{headers:this.headers})}getMedia(e,t,i=1){return this.http.get(this.url+`${e}/${t}?language=en-US&page=${i}`,{headers:this.headers})}};s.\u0275fac=function(t){return new(t||s)(m(g))},s.\u0275prov=p({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();var k=(()=>{let s=class s{constructor(e,t){this.translate=e,this.http=t,e.onLangChange.subscribe({next:()=>{this.translate.currentLang==="ar"?(this.getGenres("movie","ar"),this.getGenres("tv","ar")):(this.getGenres("movie","en"),this.getGenres("tv","en"))}}),this.getPeople(),this.getMedia("movie","upcoming"),this.getMedia("movie","popular"),this.getMedia("movie","top_rated"),this.getMedia("tv","top_rated")}getPeople(){this.http.getPeople().subscribe({next:e=>this.people=e.results})}getMedia(e,t){this.http.getMedia(e,t).subscribe({next:i=>{t==="upcoming"?this.releaseMovies=i.results:t==="popular"?this.popularMovies=i.results:e==="movie"&&t==="top_rated"?this.movies=i.results:e==="tv"&&t==="top_rated"&&(this.series=i.results)}})}getGenres(e,t){this.http.getGenres(e,t).subscribe({next:i=>{e==="movie"?this.movieGenres=i.genres:e==="tv"&&(this.tvGenres=i.genres)}})}};s.\u0275fac=function(t){return new(t||s)(a(v),a(b))},s.\u0275cmp=h({type:s,selectors:[["app-home"]],standalone:!0,features:[c],decls:7,vars:11,consts:[[1,"mt-3","mb-5"],[1,"container"],[3,"title","medias","genres"],[3,"medias"],[3,"people"]],template:function(t,i){t&1&&(l(0,"main",0)(1,"div",1),u(2,"app-media-inset-info",2)(3,"app-media-popular",3)(4,"app-media-outset-info",2)(5,"app-media-outset-info",2)(6,"app-media-people",4),d()()),t&2&&(o(2),n("title","home.just-release")("medias",i.releaseMovies)("genres",i.movieGenres),o(1),n("medias",i.popularMovies),o(1),n("title","home.movies")("medias",i.movies)("genres",i.movieGenres),o(1),n("title","home.series")("medias",i.series)("genres",i.tvGenres),o(1),n("people",i.people))},dependencies:[G,y,I,f,M]});let r=s;return r})();export{k as HomeComponent};

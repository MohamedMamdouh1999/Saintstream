import{a as M}from"./chunk-H37AOARX.js";import{e as h,f,g as u,h as c,t as v,u as y}from"./chunk-OWUM4EZF.js";import{J as s,K as m,Q as r,Y as n,Z as l,_ as p,oa as g,u as d}from"./chunk-APVRS7FU.js";var R=(()=>{let o=class o{constructor(e){this.http=e,this.getGenres(),this.getSeries("on_the_air"),this.getSeries("airing_today"),this.getSeries("top_rated"),this.getSeries("popular"),this.getPeople()}getGenres(){this.http.getGenres("tv").subscribe({next:e=>this.genres=e.genres})}getSeries(e){this.http.getMedia("tv",e).subscribe({next:i=>{e==="on_the_air"?this.onTheAir=i.results:e==="airing_today"?this.airingToday=i.results:e==="top_rated"?this.topRated=i.results:e==="popular"&&(this.popular=i.results)}})}getPeople(){this.http.getPeople().subscribe({next:e=>{this.actors=e.results.filter(i=>i.gender===2),this.actresses=e.results.filter(i=>i.gender===1)}})}};o.\u0275fac=function(i){return new(i||o)(m(M))},o.\u0275cmp=d({type:o,selectors:[["app-series"]],standalone:!0,features:[g],decls:8,vars:14,consts:[[1,"mb-5"],[3,"medias","genres"],[1,"container"],[3,"title","medias","genres"],[3,"type","medias"],[3,"title","people"]],template:function(i,t){i&1&&(n(0,"main",0),p(1,"app-media-intro",1),n(2,"div",2),p(3,"app-media-inset-info",3)(4,"app-media-popular",4)(5,"app-media-outset-info",3)(6,"app-media-people",5)(7,"app-media-people",5),l()()),i&2&&(s(1),r("medias",t.onTheAir)("genres",t.genres),s(2),r("title","pages.airingToday")("medias",t.airingToday)("genres",t.genres),s(1),r("type","series")("medias",t.popular),s(1),r("title","pages.topRated")("medias",t.topRated)("genres",t.genres),s(1),r("title","actors")("people",t.actors),s(1),r("title","actresses")("people",t.actresses))},dependencies:[y,v,c,u,h,f]});let a=o;return a})();export{R as SeriesComponent};
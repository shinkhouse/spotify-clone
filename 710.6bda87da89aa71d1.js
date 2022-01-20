"use strict";(self.webpackChunkspotify_clone=self.webpackChunkspotify_clone||[]).push([[710],{9710:(F,n,i)=>{i.r(n),i.d(n,{HomeModule:()=>A});var a=i(9808),l=i(4996),e=i(5e3),c=i(4004),u=i(2340),m=i(520);let g=(()=>{class o{constructor(t){this.http=t,this.browseUrl=`${u.X.baseAPIUrl}/browse`}getAllFeaturedPlaylists(t={limit:50}){return this.http.get(`${this.browseUrl}/featured-playlists`,{params:t})}getAllCategories(t={limit:50}){return this.http.get(`${this.browseUrl}/categories`,{params:t}).pipe((0,c.U)(r=>r.categories))}getCategoryPlaylists(t,r={limit:50}){return this.http.get(`${this.browseUrl}/categories/${t}/playlists`,{params:r}).pipe((0,c.U)(C=>C.playlists))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=i(6874),p=i(8525);function f(o,s){if(1&o&&(e._UZ(0,"spotify-music-card",4),e.ALo(1,"titlecase")),2&o){const t=s.$implicit;e.MGl("cardLink","/playlist/",t.id,""),e.Q6J("imageSource",null==t.images[0]?null:t.images[0].url)("cardTitle",t.name)("cardSubtitle",e.lcZ(1,4,t.description))}}function h(o,s){if(1&o&&(e._UZ(0,"spotify-music-card",5),e.ALo(1,"titlecase")),2&o){const t=s.$implicit;e.MGl("cardLink","/genre/",t.id,""),e.Q6J("imageSource",null==t.icons[0]?null:t.icons[0].url)("cardTitle",t.name)("cardSubtitle",e.lcZ(1,5,t.description))("showPlayButton",!1)}}const y=[{path:"",component:(()=>{class o{constructor(t){this.browseService=t}ngOnInit(){this.getFeaturedPlaylists(),this.getCategories()}getGreetingMessage(){const r=(new Date).getHours();return r<12?"Good Morning":r<18?"Good Afternoon":"Good Evening"}getFeaturedPlaylists(){this.browseService.getAllFeaturedPlaylists().subscribe(t=>{this.featuredPlaylists=t})}getCategories(){this.browseService.getAllCategories().subscribe(t=>{this.categories=t,console.log(this.categories)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:12,vars:3,consts:[[1,"page-container"],[1,"cards-container"],["imageShape","square",3,"cardLink","imageSource","cardTitle","cardSubtitle",4,"ngFor","ngForOf"],["imageShape","square",3,"imageSource","cardLink","cardTitle","cardSubtitle","showPlayButton",4,"ngFor","ngForOf"],["imageShape","square",3,"cardLink","imageSource","cardTitle","cardSubtitle"],["imageShape","square",3,"imageSource","cardLink","cardTitle","cardSubtitle","showPlayButton"]],template:function(t,r){1&t&&(e._UZ(0,"spotify-topbar"),e.TgZ(1,"div",0),e.TgZ(2,"h1"),e._uU(3),e.qZA(),e.TgZ(4,"h2"),e._uU(5,"Featured Playlists"),e.qZA(),e.TgZ(6,"div",1),e.YNc(7,f,2,6,"spotify-music-card",2),e.qZA(),e.TgZ(8,"h2"),e._uU(9,"Categories"),e.qZA(),e.TgZ(10,"div",1),e.YNc(11,h,2,7,"spotify-music-card",3),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(r.getGreetingMessage()),e.xp6(4),e.Q6J("ngForOf",null==r.featuredPlaylists?null:r.featuredPlaylists.playlists.items),e.xp6(4),e.Q6J("ngForOf",null==r.categories?null:r.categories.items))},directives:[d.o,a.sg,p.x],pipes:[a.rS],styles:[""]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(y)],l.Bz]}),o})();var S=i(4130),Z=i(3555);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,v,S.z,Z.U]]}),o})()}}]);
"use strict";(self.webpackChunkspotify_clone=self.webpackChunkspotify_clone||[]).push([[608],{6608:(U,l,i)=>{i.r(l),i.d(l,{UserModule:()=>A});var s=i(9808),c=i(4996),t=i(5e3),p=i(564),u=i(6874),a=i(7093),g=i(8525);function m(e,r){if(1&e&&(t._UZ(0,"spotify-music-card",11),t.ALo(1,"titlecase")),2&e){const o=r.$implicit;t.MGl("cardLink","/artist/",o.id,""),t.Q6J("imageSource",null==o.images[0]?null:o.images[0].url)("cardTitle",o.name)("cardSubtitle",t.lcZ(1,4,o.type))}}function f(e,r){if(1&e&&(t._UZ(0,"spotify-music-card",12),t.ALo(1,"titlecase")),2&e){const o=r.$implicit;t.Q6J("imageSource",null==o.album.images[0]?null:o.album.images[0].url)("cardTitle",o.name)("cardSubtitle",t.lcZ(1,3,o.artists[0].name))}}const d=[{path:":user",component:(()=>{class e{constructor(o){this.spotify=o}ngOnInit(){this.getProfile(),this.getTopArtists(),this.getTopTracks()}getProfile(){this.spotify.getMe().subscribe(o=>{this.profile=o})}getTopArtists(){this.spotify.getTopArtists().subscribe(o=>{this.topArtists=o})}getTopTracks(){this.spotify.getTopTracks().subscribe(o=>{this.topTracks=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user"]],decls:24,vars:8,consts:[["fxLayout","column",1,"page-container"],[1,"profile-info"],["fxLayout","row","fxLayoutGap","16px"],[3,"src"],["fxLayout","column"],["fxFlex",""],[1,"group-type"],["fxLayout","row"],[1,"cards-container"],["imageShape","round",3,"cardLink","imageSource","cardTitle","cardSubtitle",4,"ngFor","ngForOf"],["imageShape","square",3,"imageSource","cardTitle","cardSubtitle",4,"ngFor","ngForOf"],["imageShape","round",3,"cardLink","imageSource","cardTitle","cardSubtitle"],["imageShape","square",3,"imageSource","cardTitle","cardSubtitle"]],template:function(o,n){1&o&&(t._UZ(0,"spotify-topbar"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t._UZ(4,"img",3),t.TgZ(5,"div",4),t._UZ(6,"div",5),t.TgZ(7,"h6",6),t._uU(8),t.qZA(),t.TgZ(9,"h1"),t._uU(10),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"span"),t._uU(13),t.ALo(14,"number"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",4),t.TgZ(16,"h2"),t._uU(17,"Top Artists"),t.qZA(),t.TgZ(18,"div",8),t.YNc(19,m,2,6,"spotify-music-card",9),t.qZA(),t.TgZ(20,"h2"),t._uU(21,"Top Tracks"),t.qZA(),t.TgZ(22,"div",8),t.YNc(23,f,2,5,"spotify-music-card",10),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("src",n.profile.images[0].url,t.LSH),t.xp6(4),t.Oqu(n.profile.type),t.xp6(2),t.Oqu(n.profile.display_name),t.xp6(3),t.hij("",t.lcZ(14,6,n.profile.followers.total)," followers"),t.xp6(6),t.Q6J("ngForOf",null==n.topArtists?null:n.topArtists.items),t.xp6(4),t.Q6J("ngForOf",null==n.topTracks?null:n.topTracks.items))},directives:[u.o,a.xw,a.SQ,a.yH,s.sg,g.x],pipes:[s.JJ,s.rS],styles:[".profile-info[_ngcontent-%COMP%]{margin-bottom:16px}.profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:72px;font-weight:900;letter-spacing:-.04em;line-height:96px;text-transform:none}.profile-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:230px;height:230px;border-radius:230px}.profile-info[_ngcontent-%COMP%]   .dot-spacer[_ngcontent-%COMP%]{margin:0 4px}.profile-info[_ngcontent-%COMP%]   .group-type[_ngcontent-%COMP%]{text-transform:uppercase}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),e})();var y=i(4130),Z=i(9764),h=i(3555);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,T,y.z,Z.o9,h.U]]}),e})()}}]);
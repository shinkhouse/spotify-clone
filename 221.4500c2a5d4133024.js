"use strict";(self.webpackChunkspotify_clone=self.webpackChunkspotify_clone||[]).push([[221],{8221:(M,r,o)=>{o.r(r),o.d(r,{PlaylistModule:()=>U});var a=o(9808),e=o(4996),t=o(5e3),g=o(8578),u=o(1843),y=o(6874),d=o(3322),p=o(7093),f=o(4994);function m(l,i){if(1&l&&t._UZ(0,"img",12),2&l){const n=t.oxw(2);t.Q6J("src",n.playlistInfo.images[0].url,t.LSH)}}function Z(l,i){if(1&l&&(t.TgZ(0,"div",4),t.TgZ(1,"div",5),t.YNc(2,m,1,1,"img",6),t.TgZ(3,"div",7),t._UZ(4,"div",8),t.TgZ(5,"h6",9),t._uU(6),t.qZA(),t.TgZ(7,"h1"),t._uU(8),t.qZA(),t.TgZ(9,"div",10),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.TgZ(12,"span",11),t._uU(13,"\u2022"),t.qZA(),t.TgZ(14,"span"),t._uU(15),t.ALo(16,"number"),t.qZA(),t.TgZ(17,"span",11),t._uU(18,"\u2022"),t.qZA(),t.TgZ(19,"span"),t._uU(20),t.ALo(21,"number"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",n.playlistInfo&&n.playlistInfo.images),t.xp6(4),t.Oqu(n.playlistInfo.type),t.xp6(2),t.Oqu(n.playlistInfo.name),t.xp6(3),t.Oqu(n.playlistInfo.owner.display_name),t.xp6(4),t.hij("",t.lcZ(16,6,n.playlistInfo.followers.total)," likes"),t.xp6(5),t.hij("",t.lcZ(21,8,n.playlistInfo.tracks.items.length)," songs")}}function x(l,i){if(1&l&&t._UZ(0,"img",18),2&l){const n=t.oxw().$implicit;t.Q6J("src",n.track.album.images[0].url,t.LSH)}}function h(l,i){1&l&&(t.ynx(0),t._uU(1,", "),t.BQk())}function T(l,i){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.YNc(2,h,2,0,"ng-container",19),t.qZA()),2&l){const n=i.$implicit,s=t.oxw().$implicit;t.xp6(1),t.Oqu(n.name),t.xp6(1),t.Q6J("ngIf",s.track.artists.length>1)}}function A(l,i){if(1&l&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"div",16),t.YNc(5,x,1,1,"img",17),t.TgZ(6,"div",7),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.TgZ(9,"div",10),t.YNc(10,T,3,2,"span",15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td",14),t._uU(17),t.ALo(18,"duration"),t.qZA(),t.qZA()),2&l){const n=i.$implicit,s=i.index;t.xp6(2),t.Oqu(s+1),t.xp6(3),t.Q6J("ngIf",n.track.album.images),t.xp6(3),t.Oqu(n.track.name),t.xp6(2),t.Q6J("ngForOf",n.track.artists),t.xp6(2),t.Oqu(n.track.album.name),t.xp6(2),t.Oqu(t.lcZ(15,7,n.added_at)),t.xp6(3),t.Oqu(t.lcZ(18,9,n.track.duration_ms))}}function _(l,i){if(1&l&&(t.TgZ(0,"div",13),t.TgZ(1,"table"),t.TgZ(2,"thead"),t.TgZ(3,"tr"),t.TgZ(4,"th"),t._uU(5,"#"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Title"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Album"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Date Added"),t.qZA(),t.TgZ(12,"th",14),t._uU(13,"Track Length"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,A,19,11,"tr",15),t.qZA(),t.qZA(),t.qZA()),2&l){const n=t.oxw();t.xp6(15),t.Q6J("ngForOf",null==n.playlistInfo.tracks?null:n.playlistInfo.tracks.items)}}const v=function(l){return{"background-color":l}},I=[{path:"",component:(()=>{class l{constructor(n,s,k,b){this.router=n,this.route=s,this.playlistService=k,this.colors=b,this.playlistId="",this.playlistInfo=null,this.playlistTracks=null,this.backgroundColor="#009688",this.blockId="",this.route.paramMap.subscribe(c=>{this.playlistInfo=null,this.playlistTracks=null,console.log(c.params.playlistId),this.playlistId=c.params.playlistId,this.getPlaylistById(),this.getPlaylistTracks()})}ngOnInit(){}getPlaylistById(){this.playlistService.getById(this.playlistId).subscribe(n=>{this.playlistInfo=n,this.getAlbumColors(this.playlistInfo.images[0].url)})}getPlaylistTracks(){this.playlistService.getTracks(this.playlistId).subscribe(n=>{this.playlistTracks=n})}getAlbumColors(n){this.colors.getAlbumColors(n).subscribe(s=>{this.playlistInfo.colors=s,this.backgroundColor=s[0]})}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(e.F0),t.Y36(e.gz),t.Y36(g.r),t.Y36(u.x))},l.\u0275cmp=t.Xpm({type:l,selectors:[["spotify-playlist"]],decls:5,vars:5,consts:[[1,"background-section",3,"ngStyle"],["fxLayout","column",1,"page-container"],["class","playlist-header-info",4,"ngIf"],["class","playlist-tracks","fxFlex","",4,"ngIf"],[1,"playlist-header-info"],["fxLayout","row","fxLayoutGap","16px"],[3,"src",4,"ngIf"],["fxLayout","column"],["fxFlex",""],[1,"group-type"],["fxLayout","row"],[1,"dot-spacer"],[3,"src"],["fxFlex","",1,"playlist-tracks"],[1,"duration"],[4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","16px"],["class","album-image",3,"src",4,"ngIf"],[1,"album-image",3,"src"],[4,"ngIf"]],template:function(n,s){1&n&&(t._UZ(0,"spotify-topbar"),t._UZ(1,"div",0),t.TgZ(2,"div",1),t.YNc(3,Z,22,10,"div",2),t.YNc(4,_,16,1,"div",3),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(3,v,s.backgroundColor)),t.xp6(2),t.Q6J("ngIf",s.playlistInfo),t.xp6(1),t.Q6J("ngIf",s.playlistInfo))},directives:[y.o,a.PC,d.Zl,p.xw,a.O5,p.SQ,p.yH,a.sg,p.Wh],pipes:[a.JJ,a.uU,f.u],styles:[".background-section[_ngcontent-%COMP%]{height:500px}.playlist-header-info[_ngcontent-%COMP%]{padding:36px}.playlist-header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:72px;font-weight:900;letter-spacing:-.04em;line-height:96px;text-transform:none}.playlist-header-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:230px;height:230px}.playlist-header-info[_ngcontent-%COMP%]   .dot-spacer[_ngcontent-%COMP%]{margin:0 4px}.playlist-header-info[_ngcontent-%COMP%]   .group-type[_ngcontent-%COMP%]{text-transform:uppercase}.playlist-tracks[_ngcontent-%COMP%]{padding:36px}"]}),l})()}];let P=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[e.Bz.forChild(I)],e.Bz]}),l})();var C=o(2155),q=o(4130),O=o(6113);let U=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[a.ez,P,C.o9,q.z,O.Q]]}),l})()}}]);
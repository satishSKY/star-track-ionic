webpackJsonp([2],{147:function(l,n,u){"use strict";function t(l){return r._29(0,[(l()(),r._5(0,null,null,17,"a",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==r._18(l,6).close()&&t}if("click"===n){t=!1!==o.goToDetail(l.context.$implicit)&&t}return t},_.b,_.a)),r._4(1097728,null,3,s.a,[c.a,d.a,r.k,r.F,[2,f.a]],null,null),r._25(335544320,1,{contentLabel:0}),r._25(603979776,2,{_buttons:1}),r._25(603979776,3,{_icons:1}),r._4(16384,null,0,b.a,[],null,null),r._4(16384,null,0,h.a,[m.a],{menuClose:[0,"menuClose"]},null),(l()(),r._27(2,["\n      "])),(l()(),r._5(0,null,1,8,"ion-label",[],null,null,null,null,null)),r._4(16384,[[1,4]],0,p.a,[d.a,r.k,r.F,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),r._27(null,["\n        "])),(l()(),r._5(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),r._27(null,["",""])),(l()(),r._27(null,["\n        "])),(l()(),r._5(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),r._27(null,["by ",""])),(l()(),r._27(null,["\n      "])),(l()(),r._27(2,["\n    "]))],function(l,n){l(n,6,0,"")},function(l,n){l(n,12,0,n.context.$implicit.trackName),l(n,15,0,n.context.$implicit.artistName)})}function o(l){return r._29(0,[(l()(),r._5(0,null,null,10,"ion-header",[],null,null,null,null,null)),r._4(16384,null,0,g.a,[d.a,r.k,r.F,[2,k.a]],null,null),(l()(),r._27(null,["\n  "])),(l()(),r._5(0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,v.b,v.a)),r._4(49152,null,0,F.a,[y.a,[2,k.a],[2,C.a],d.a,r.k,r.F],null,null),(l()(),r._27(3,["\n    "])),(l()(),r._5(0,null,3,2,"ion-title",[],null,null,null,M.b,M.a)),r._4(49152,null,0,P.a,[d.a,r.k,r.F,[2,w.a],[2,F.a]],null,null),(l()(),r._27(0,["Favorites"])),(l()(),r._27(3,["\n  "])),(l()(),r._27(null,["\n"])),(l()(),r._27(null,["\n\n\n"])),(l()(),r._5(0,null,null,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,L.b,L.a)),r._4(4374528,null,0,O.a,[d.a,x.a,I.a,r.k,r.F,y.a,B.a,r.z,[2,k.a],[2,C.a]],null,null),(l()(),r._27(1,["\n  "])),(l()(),r._5(0,null,1,5,"ion-list",[],null,null,null,null,null)),r._4(16384,null,0,D.a,[d.a,r.k,r.F,x.a,N.g,I.a],null,null),(l()(),r._27(null,["\n    "])),(l()(),r._1(16777216,null,null,1,null,t)),r._4(802816,null,0,j.g,[r.P,r.M,r.s],{ngForOf:[0,"ngForOf"]},null),(l()(),r._27(null,["\n  "])),(l()(),r._27(1,["\n"])),(l()(),r._27(null,["\n"]))],function(l,n){l(n,19,0,n.component.favorites)},function(l,n){l(n,3,0,r._18(n,4)._hidden,r._18(n,4)._sbPadding),l(n,12,0,r._18(n,13).statusbarPadding,r._18(n,13)._hasRefresher)})}function e(l){return r._29(0,[(l()(),r._5(0,null,null,1,"page-menu-list",[],null,null,null,o,z)),r._4(49152,null,0,i,[C.a,E.a,R.a],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var i=(u(0),u(62),u(72),this&&this.__decorate,this&&this.__metadata,function(){function l(l,n,u){this.navCtrl=l,this.storage=n,this.event=u,this.favorites=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.getKeys(),this.event.subscribe("songAdded",function(n){l.favorites.push(n)}),this.event.subscribe("songRemoved",function(n){l.favorites.splice(l.favorites.indexOf(n),1)})},l.prototype.getKeys=function(){var l=this;this.storage.forEach(function(n){l.favorites.push(n)})},l.prototype.goToDetail=function(l){this.navCtrl.parent._child.push("TrackDetailPage",{id:l.trackId,track:l})},l}()),a=(u(0),u(62),this&&this.__decorate,function(){function l(){}return l}()),r=u(0),_=u(153),s=u(40),c=u(26),d=u(1),f=u(41),b=u(70),h=u(90),m=u(11),p=u(42),g=u(71),k=u(8),v=u(154),F=u(24),y=u(6),C=u(14),M=u(155),P=u(63),w=u(33),L=u(156),O=u(34),x=u(3),I=u(7),B=u(25),D=u(77),N=u(9),j=u(23),E=u(73),R=u(46),S=[],z=r._3({encapsulation:2,styles:S,data:{}}),T=r._2("page-menu-list",i,e,{},{},[]);u.d(n,"MenuListPageModuleNgFactory",function(){return H});var A=u(0),K=u(23),$=u(32),Y=u(64),Z=u(113),J=u(114),V=u(65),q=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])};return function(n,u){function t(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}}(),G=function(l){function n(n){return l.call(this,n,[Z.a,J.a,T],[])||this}return q(n,l),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new K.i(this.parent.get(A.u))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new $.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new $.a),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new K.b,this._ɵba_1=new $.j,this._FormsModule_2=new $.d,this._ReactiveFormsModule_3=new $.i,this._IonicModule_4=new Y.a,this._IonicPageModule_5=new Y.b,this._MenuListPageModule_6=new a,this._LAZY_LOADED_TOKEN_10=i,this._MenuListPageModule_6},n.prototype.getInternal=function(l,n){return l===K.b?this._CommonModule_0:l===$.j?this._ɵba_1:l===$.d?this._FormsModule_2:l===$.i?this._ReactiveFormsModule_3:l===Y.a?this._IonicModule_4:l===Y.b?this._IonicPageModule_5:l===a?this._MenuListPageModule_6:l===K.j?this._NgLocalization_7:l===$.k?this._ɵi_8:l===$.a?this._FormBuilder_9:l===V.a?this._LAZY_LOADED_TOKEN_10:n},n.prototype.destroyInternal=function(){},n}(A._0),H=new A.w(G,a)},153:function(l,n,u){"use strict";function t(l){return c._29(0,[(l()(),c._5(0,null,null,1,"ion-icon",[["name","reorder"],["role","img"]],[[2,"hide",null]],null,null,null,null)),c._4(147456,null,0,d.a,[f.a,c.k,c.F],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"reorder")},function(l,n){l(n,0,0,c._18(n,1)._hidden)})}function o(l){return c._29(0,[(l()(),c._5(0,null,null,1,"ion-reorder",[],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==c._18(l,1).onClick(u)&&t}return t},t,h)),c._4(49152,null,0,s,[c.k],null,null)],null,null)}function e(l){return m._29(0,[(l()(),m._5(0,null,null,2,"ion-label",[],null,null,null,null,null)),m._4(16384,[[1,4]],0,p.a,[g.a,m.k,m.F,[8,null],[8,null],[8,null],[8,null]],null,null),m._17(null,2)],null,null)}function i(l){return m._29(0,[(l()(),m._5(0,null,null,1,"ion-reorder",[],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==m._18(l,1).onClick(u)&&t}return t},t,h)),m._4(49152,null,0,s,[m.k],null,null)],null,null)}function a(l){return m._29(2,[m._25(671088640,1,{viewLabel:0}),m._17(null,0),(l()(),m._5(0,null,null,8,"div",[["class","item-inner"]],null,null,null,null,null)),(l()(),m._5(0,null,null,4,"div",[["class","input-wrapper"]],null,null,null,null,null)),m._17(null,1),(l()(),m._1(16777216,null,null,1,null,e)),m._4(16384,null,0,k.h,[m.P,m.M],{ngIf:[0,"ngIf"]},null),m._17(null,3),m._17(null,4),(l()(),m._1(16777216,null,null,1,null,i)),m._4(16384,null,0,k.h,[m.P,m.M],{ngIf:[0,"ngIf"]},null),(l()(),m._5(0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,6,0,u._viewLabel),l(n,10,0,u._hasReorder)},null)}function r(l){return m._29(0,[(l()(),m._5(0,null,null,4,"ion-list-header",[["class","item"]],null,null,null,a,M)),m._4(1097728,null,3,v.a,[F.a,g.a,m.k,m.F,[2,y.a]],null,null),m._25(335544320,1,{contentLabel:0}),m._25(603979776,2,{_buttons:1}),m._25(603979776,3,{_icons:1})],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var _=(u(0),u(115)),s=function(){function l(l){this.elementRef=l,l.nativeElement.$ionComponent=this}return l.prototype.getReorderNode=function(){return _.a(this.elementRef.nativeElement,null)},l.prototype.onClick=function(l){l.preventDefault(),l.stopPropagation()},l}(),c=u(0),d=u(39),f=u(1),b=[],h=c._3({encapsulation:2,styles:b,data:{}});c._2("ion-reorder",s,o,{},{},[]);u.d(n,"a",function(){return M}),n.b=a;var m=u(0),p=u(42),g=u(1),k=u(23),v=u(40),F=u(26),y=u(41),C=[],M=m._3({encapsulation:2,styles:C,data:{}});m._2("ion-list-header,ion-item,[ion-item],ion-item-divider",v.a,r,{color:"color",mode:"mode"},{},["[item-start],[item-left],ion-checkbox:not([item-end]):not([item-right])","ion-label","*","ion-select,ion-input,ion-textarea,ion-datetime,ion-range,[item-content]","[item-end],[item-right],ion-radio,ion-toggle"])},154:function(l,n,u){"use strict";function t(l){return e._29(0,[(l()(),e._5(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),e._4(278528,null,0,i.f,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e._5(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.backButtonClick(u)&&t}return t},r.b,r.a)),e._4(278528,null,0,i.f,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._4(1097728,null,0,_.a,[[8,"bar-button"],s.a,e.k,e.F],null,null),(l()(),e._5(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._4(278528,null,0,i.f,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._4(147456,null,0,c.a,[s.a,e.k,e.F],{name:[0,"name"]},null),(l()(),e._5(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),e._4(278528,null,0,i.f,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e._27(null,["",""])),e._17(null,0),e._17(null,1),e._17(null,2),(l()(),e._5(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),e._4(278528,null,0,i.f,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._17(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,e._18(n,7)._hidden),l(n,10,0,u._backText)})}function o(l){return e._29(0,[(l()(),e._5(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,t,m)),e._4(49152,null,0,a.a,[d.a,[2,f.a],[2,b.a],s.a,e.k,e.F],null,null)],null,function(l,n){l(n,0,0,e._18(n,1)._hidden,e._18(n,1)._sbPadding)})}u.d(n,"a",function(){return m}),n.b=t;var e=u(0),i=u(23),a=u(24),r=u(112),_=u(15),s=u(1),c=u(39),d=u(6),f=u(8),b=u(14),h=[],m=e._3({encapsulation:2,styles:h,data:{}});e._2("ion-navbar",a.a,o,{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},155:function(l,n,u){"use strict";function t(l){return e._29(2,[(l()(),e._5(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),e._4(278528,null,0,i.f,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._17(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}function o(l){return e._29(0,[(l()(),e._5(0,null,null,1,"ion-title",[],null,null,null,t,d)),e._4(49152,null,0,a.a,[r.a,e.k,e.F,[2,_.a],[2,s.a]],null,null)],null,null)}u.d(n,"a",function(){return d}),n.b=t;var e=u(0),i=u(23),a=u(63),r=u(1),_=u(33),s=u(24),c=[],d=e._3({encapsulation:2,styles:c,data:{}});e._2("ion-title",a.a,o,{color:"color",mode:"mode"},{},["*"])},156:function(l,n,u){"use strict";function t(l){return e._29(2,[e._25(402653184,1,{_fixedContent:0}),e._25(402653184,2,{_scrollContent:0}),(l()(),e._5(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),e._17(null,0),(l()(),e._5(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),e._17(null,1),e._17(null,2)],null,null)}function o(l){return e._29(0,[(l()(),e._5(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,t,h)),e._4(4374528,null,0,i.a,[a.a,r.a,_.a,e.k,e.F,s.a,c.a,e.z,[2,d.a],[2,f.a]],null,null)],null,function(l,n){l(n,0,0,e._18(n,1).statusbarPadding,e._18(n,1)._hasRefresher)})}u.d(n,"a",function(){return h}),n.b=t;var e=u(0),i=u(34),a=u(1),r=u(3),_=u(7),s=u(6),c=u(25),d=u(8),f=u(14),b=[],h=e._3({encapsulation:2,styles:b,data:{}});e._2("ion-content",i.a,o,{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])}});
//# sourceMappingURL=/Users/mhartington/GitHub/StarTrack-Ionic/www/build/2.main.js.map
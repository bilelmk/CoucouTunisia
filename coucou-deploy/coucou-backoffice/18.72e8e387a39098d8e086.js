(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Sg2w:function(t,e,c){"use strict";c.r(e),c.d(e,"CbClientsModule",(function(){return j}));var n=c("ofXK");class i{constructor(t,e,c){this.offset=t,this.limit=e,this.key=c}}var s=c("fXoL"),a=c("+f/V"),l=c("zWtS"),o=c("+0xr"),r=c("M9IT"),b=c("NFeN");function m(t,e){1&t&&(s.Tb(0,"mat-header-cell"),s.Ic(1,"Phone Number"),s.Sb())}function f(t,e){if(1&t&&(s.Tb(0,"mat-cell"),s.Tb(1,"p",22),s.Ic(2),s.Sb(),s.Sb()),2&t){const t=e.$implicit;s.Bb(2),s.Kc(" ",t.phone," ")}}function u(t,e){1&t&&(s.Tb(0,"mat-header-cell"),s.Ic(1,"First name"),s.Sb())}function d(t,e){if(1&t&&(s.Tb(0,"mat-cell"),s.Tb(1,"p",22),s.Ic(2),s.Sb(),s.Sb()),2&t){const t=e.$implicit;s.Bb(2),s.Kc(" ",t.firstName," ")}}function h(t,e){1&t&&(s.Tb(0,"mat-header-cell"),s.Ic(1,"Last name"),s.Sb())}function g(t,e){if(1&t&&(s.Tb(0,"mat-cell"),s.Tb(1,"p",22),s.Ic(2),s.Sb(),s.Sb()),2&t){const t=e.$implicit;s.Bb(2),s.Kc(" ",t.lastName," ")}}function p(t,e){1&t&&(s.Tb(0,"mat-header-cell"),s.Ic(1,"Active"),s.Sb())}function S(t,e){1&t&&(s.Tb(0,"mat-icon",25),s.Ic(1,"remove_circle"),s.Sb())}function v(t,e){1&t&&(s.Tb(0,"mat-icon",26),s.Ic(1,"check_circle"),s.Sb())}function T(t,e){if(1&t&&(s.Tb(0,"mat-cell",22),s.Tb(1,"div",22),s.Gc(2,S,2,0,"mat-icon",23),s.Gc(3,v,2,0,"mat-icon",24),s.Sb(),s.Sb()),2&t){const t=e.$implicit;s.Bb(2),s.nc("ngIf",!t.active),s.Bb(1),s.nc("ngIf",t.active)}}function I(t,e){1&t&&(s.Tb(0,"mat-header-cell"),s.Ic(1,"Actions"),s.Sb())}function w(t,e){if(1&t){const t=s.Ub();s.Tb(0,"mat-cell",22),s.Tb(1,"div",27),s.bc("click",(function(){s.xc(t);const c=e.$implicit;return s.fc(2).toggleActiveStatus(c)})),s.Tb(2,"mat-icon"),s.Ic(3,"flaky"),s.Sb(),s.Sb(),s.Tb(4,"div",27),s.bc("click",(function(){s.xc(t);const c=e.$implicit;return s.fc(2).openDetailsDialog(c)})),s.Tb(5,"mat-icon"),s.Ic(6,"visibility"),s.Sb(),s.Sb(),s.Sb()}}function y(t,e){1&t&&s.Ob(0,"mat-header-row",28)}function C(t,e){1&t&&s.Ob(0,"mat-row",29)}function G(t,e){if(1&t){const t=s.Ub();s.Tb(0,"div",9),s.Tb(1,"table",10),s.Rb(2,11),s.Gc(3,m,2,0,"mat-header-cell",12),s.Gc(4,f,3,1,"mat-cell",13),s.Qb(),s.Rb(5,14),s.Gc(6,u,2,0,"mat-header-cell",12),s.Gc(7,d,3,1,"mat-cell",13),s.Qb(),s.Rb(8,15),s.Gc(9,h,2,0,"mat-header-cell",12),s.Gc(10,g,3,1,"mat-cell",13),s.Qb(),s.Rb(11,16),s.Gc(12,p,2,0,"mat-header-cell",12),s.Gc(13,T,4,2,"mat-cell",17),s.Qb(),s.Rb(14,18),s.Gc(15,I,2,0,"mat-header-cell",12),s.Gc(16,w,7,0,"mat-cell",17),s.Qb(),s.Gc(17,y,1,0,"mat-header-row",19),s.Gc(18,C,1,0,"mat-row",20),s.Sb(),s.Tb(19,"mat-paginator",21),s.bc("page",(function(e){s.xc(t);const c=s.fc();return c.pageEvent=e,c.onPaginationChange(e)})),s.Sb(),s.Sb()}if(2&t){const t=s.fc();s.Bb(1),s.nc("dataSource",t.dataSource),s.Bb(16),s.nc("matHeaderRowDef",t.displayedColumns),s.Bb(1),s.nc("matRowDefColumns",t.displayedColumns),s.Bb(1),s.nc("length",t.recordsNumber)("pageSize",t.limit)}}function D(t,e){1&t&&(s.Tb(0,"div",32),s.Ob(1,"img",33),s.Tb(2,"div",34),s.Tb(3,"p"),s.Ic(4,"No record found"),s.Sb(),s.Sb(),s.Sb())}function N(t,e){1&t&&(s.Tb(0,"div",32),s.Ob(1,"img",35),s.Tb(2,"div",34),s.Tb(3,"p"),s.Ic(4,"Server error"),s.Sb(),s.Sb(),s.Sb())}function R(t,e){if(1&t&&(s.Tb(0,"div",30),s.Gc(1,D,5,0,"div",31),s.Gc(2,N,5,0,"div",31),s.Sb()),2&t){const t=s.fc();s.Bb(1),s.nc("ngIf",0==(null==t.clients?null:t.clients.length)&&!t.error),s.Bb(1),s.nc("ngIf",t.error)}}let k=(()=>{class t{constructor(t,e){this.clientsService=t,this.spinnerService=e,this.displayedColumns=["firstName","lastName","phone","active","buttons"],this.clients=[],this.error=!1,this.loading=!1,this.limit=10,this.offset=0,this.key=""}ngOnInit(){this.getRecords()}onPaginationChange(t){this.offset=this.limit*t.pageIndex,this.getRecords()}getRecords(){this.loading=!0,this.spinnerService.activate();let t=new i(this.offset,this.limit,this.key);this.clientsService.getAll(t).subscribe(t=>{this.loading=!1,this.recordsNumber=t.data.count,this.clients=t.data.rows,this.dataSource=this.clients,this.spinnerService.deactivate()},t=>{this.loading=!1,this.error=!0,this.spinnerService.deactivate()})}search(t){this.offset=0,this.key=t.value,this.getRecords()}toggleActiveStatus(t){}openDetailsDialog(t){}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(a.a),s.Nb(l.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-cb-clients"]],decls:12,vars:2,consts:[[1,"page"],[1,"row","mt-3","mb-3","justify-content-between","align-items-center"],[1,"title"],[1,"material-icons","title-icon"],[1,"ml-5"],[1,"search",3,"input"],["key",""],["class","row",4,"ngIf"],["class","row justify-content-center align-items-center","style"," height: 70vh !important;",4,"ngIf"],[1,"row"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","phone"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","active"],["class","cell-text",4,"matCellDef"],["matColumnDef","buttons"],["class","text-center",4,"matHeaderRowDef"],["class","contact",4,"matRowDef","matRowDefColumns"],[1,"full-width",3,"length","pageSize","page"],[1,"cell-text"],["class","icon-danger",4,"ngIf"],["class","icon-success",4,"ngIf"],[1,"icon-danger"],[1,"icon-success"],[1,"cell-btn",3,"click"],[1,"text-center"],[1,"contact"],[1,"row","justify-content-center","align-items-center",2,"height","70vh !important"],["class","col-12 row justify-content-center align-items-center",4,"ngIf"],[1,"col-12","row","justify-content-center","align-items-center"],["src","assets/img/no-record.png"],[1,"col-12","text-center"],["src","assets/img/error.png"]],template:function(t,e){if(1&t){const t=s.Ub();s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"div"),s.Tb(3,"p",2),s.Tb(4,"span",3),s.Ic(5,"people"),s.Sb(),s.Ic(6," Liste des clients "),s.Sb(),s.Sb(),s.Tb(7,"div",4),s.Tb(8,"input",5,6),s.bc("input",(function(){s.xc(t);const c=s.tc(9);return e.search(c)})),s.Sb(),s.Sb(),s.Sb(),s.Gc(10,G,20,5,"div",7),s.Gc(11,R,3,2,"div",8),s.Sb()}2&t&&(s.Bb(10),s.nc("ngIf",(null==e.clients?null:e.clients.length)>0),s.Bb(1),s.nc("ngIf",0==(null==e.clients?null:e.clients.length)&&e.error))},directives:[n.k,o.j,o.c,o.e,o.b,o.g,o.i,r.a,o.d,o.a,b.a,o.f,o.h],styles:[""]}),t})();var B=c("tyNb");const x=[{path:"",component:k}];let j=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,B.e.forChild(x),o.l,r.b,b.b]]}),t})()}}]);
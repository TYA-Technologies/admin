(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{x2I5:function(t,e,c){"use strict";c.r(e),c.d(e,"DatasetGdbModule",(function(){return p}));var a=c("ofXK"),n=c("CjdU"),s=c("fXoL"),o=c("aceb"),r=c("ExIg"),d=c("3Pt+");const l=["tplCellName"];function i(t,e){if(1&t){const t=s.ec();s.dc(0,"input",4),s.kc("ngModelChange",(function(c){return s.Dc(t),e.row.datasetName=c}))("change",(function(){s.Dc(t);const c=e.row;return s.mc().changeDatasetName(c)})),s.cc()}2&t&&s.sc("ngModel",e.row.datasetName)}let u=(()=>{class t{constructor(t){this.datasetService=t,this.columns=[],this.rows=[],this.actions=[{name:"quick-edit"}]}ngOnInit(){this.columns=[{name:"T\xean",prop:"datasetId"},{name:"M\xf4 t\u1ea3",prop:"datasetName",cellTemplate:this.tplCellName}],this.datasetService.getManyGDB().subscribe(t=>this.rows=t)}changeDatasetName(t){this.datasetService.updateDatasetName(t.datasetId,t.datasetName).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(n.a))},t.\u0275cmp=s.Rb({type:t,selectors:[["ga-dataset-gdb"]],viewQuery:function(t,e){var c;1&t&&s.Jc(l,!0),2&t&&s.zc(c=s.lc())&&(e.tplCellName=c.first)},decls:9,vars:2,consts:[[1,"row"],[1,"col-md-12"],["columnMode","force",1,"material","striped","mt-2",3,"columns","rows"],["tplCellName",""],["nbInput","","fieldSize","small","fullWidth","",3,"ngModel","ngModelChange","change"]],template:function(t,e){1&t&&(s.dc(0,"div",0),s.dc(1,"div",1),s.dc(2,"nb-card"),s.dc(3,"nb-card-header"),s.Oc(4,"Dataset t\u1eeb GDB"),s.cc(),s.dc(5,"nb-card-body"),s.Yb(6,"ngn-datatable",2),s.cc(),s.cc(),s.cc(),s.cc(),s.Mc(7,i,1,1,"ng-template",null,3,s.Nc)),2&t&&(s.Lb(6),s.sc("columns",e.columns)("rows",e.rows))},directives:[o.r,o.t,o.q,r.d,o.G,d.b,d.j,d.m],styles:[""]}),t})();var m=c("tyNb");let p=(()=>{class t{}return t.\u0275mod=s.Vb({type:t}),t.\u0275inj=s.Ub({factory:function(e){return new(e||t)},imports:[[a.c,d.g,o.u,o.H,r.e,m.g.forChild([{path:"",component:u}])],m.g]}),t})()}}]);
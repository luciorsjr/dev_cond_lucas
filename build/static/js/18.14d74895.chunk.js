(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{733:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var c=r(681),n=r(679),a=r(683),i=r(1),o=r(678),s=r(680),l=r(682),d=r(32);function u(){var e=Object(l.a)(),t=Object(i.useState)(!0),r=Object(a.a)(t,2),u=r[0],j=r[1],b=Object(i.useState)([]),O=Object(a.a)(b,2),x=O[0],h=O[1],f=Object(i.useState)(!1),p=Object(a.a)(f,2),v=p[0],m=p[1],k=Object(i.useState)(!1),y=Object(a.a)(k,2),g=y[0],w=y[1],C=Object(i.useState)(""),S=Object(a.a)(C,2),A=S[0],D=S[1],E=Object(i.useState)(""),F=Object(a.a)(E,2),W=F[0],I=F[1],P=Object(i.useState)(""),T=Object(a.a)(P,2),J=T[0],N=T[1];Object(i.useEffect)((function(){_()}),[]);var _=function(){var t=Object(n.a)(Object(c.a)().mark((function t(){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,e.getWall();case 3:r=t.sent,j(!1),""===r.error?h(r.list):h(r.error);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){m(!1)},z=function(){var t=Object(n.a)(Object(c.a)().mark((function t(r){var n;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Tem certeza que deseja excluir?")){t.next=5;break}return t.next=3,e.removeWall(r);case 3:""===(n=t.sent).error?_():alert(n.error);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(n.a)(Object(c.a)().mark((function t(){var r,n;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!A||!W){t.next=16;break}if(w(!0),n={title:A,body:W},""!==J){t.next=9;break}return t.next=6,e.addWall(n);case 6:r=t.sent,t.next=12;break;case 9:return t.next=11,e.updateWall(J,n);case 11:r=t.sent;case 12:w(!1),""===r.error?(m(!1),_()):alert(r.error),t.next=17;break;case 16:alert("Preencha os campos!");case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.K,{children:Object(d.jsxs)(o.m,{children:[Object(d.jsx)("h2",{children:"Mural de Avisos"}),Object(d.jsxs)(o.h,{children:[Object(d.jsx)(o.l,{children:Object(d.jsxs)(o.e,{color:"primary",onClick:function(){N(""),D(""),I(""),m(!0)},children:[Object(d.jsx)(s.a,{name:"cil-check"}),"Novo Aviso"]})}),Object(d.jsx)(o.i,{children:Object(d.jsx)(o.p,{items:x,fields:[{label:"T\xedtulo",key:"title"},{label:"Data de Cria\xe7\xe3o",key:"datecreated",_style:{width:"200px"}},{label:"A\xe7\xf5es",key:"actions",_style:{width:"1px"}}],loading:u,noItemsViewSlot:" ",hover:!0,striped:!0,bordered:!0,pagination:!0,itemsPerPage:5,scopedSlots:{actions:function(e){return Object(d.jsx)("td",{children:Object(d.jsxs)(o.f,{children:[Object(d.jsx)(o.e,{color:"info",onClick:function(){return function(e){var t=x.findIndex((function(t){return t.id===e}));N(x[t].id),D(x[t].title),I(x[t].body),m(!0)}(e.id)},children:"Editar"}),Object(d.jsx)(o.e,{color:"danger",onClick:function(){return z(e.id)},children:"Excluir"})]})})}}})})]})]})}),Object(d.jsxs)(o.F,{show:v,onClose:q,children:[Object(d.jsxs)(o.I,{closeButton:!0,children:[""===J?"Novo":"Editar"," Aviso"]}),Object(d.jsxs)(o.G,{children:[Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-title",children:"Titulo do Aviso"}),Object(d.jsx)(o.y,{type:"text",id:"modal-title",placeholder:"Digite um t\xedtulo para o aviso",value:A,onChange:function(e){return D(e.target.value)},disabled:g})]}),Object(d.jsxs)(o.x,{children:[Object(d.jsx)(o.D,{htmlFor:"modal-body",children:"Corpo do Aviso"}),Object(d.jsx)(o.R,{id:"modal-body",placeholder:"Digite o conteudo do aviso",value:W,onChange:function(e){return I(e.target.value)},disabled:g})]})]}),Object(d.jsxs)(o.H,{children:[Object(d.jsx)(o.e,{color:"primary",onClick:B,disabled:g,children:g?"Carregando...":"Salvar"}),Object(d.jsx)(o.e,{color:"secondary",onClick:q,disabled:g,children:g?"Carregando...":"Cancelar"})]})]})]})}}}]);
//# sourceMappingURL=18.14d74895.chunk.js.map
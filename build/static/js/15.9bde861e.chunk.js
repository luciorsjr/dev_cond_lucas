(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{735:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r(681),a=r(679),c=r(683),i=r(1),s=r(678),o=r(680),u=r(682),d=r(32);function l(){var e=Object(u.a)(),t=Object(i.useState)(!0),r=Object(c.a)(t,2),l=r[0],j=r[1],b=Object(i.useState)([]),O=Object(c.a)(b,2),h=O[0],f=O[1],x=Object(i.useState)(!1),p=Object(c.a)(x,2),v=p[0],m=p[1],k=Object(i.useState)(!1),g=Object(c.a)(k,2),w=g[0],y=g[1],_=Object(i.useState)(""),S=Object(c.a)(_,2),C=S[0],R=S[1],F=Object(i.useState)([]),D=Object(c.a)(F,2),E=D[0],I=D[1],P=Object(i.useState)([]),U=Object(c.a)(P,2),A=U[0],J=U[1],L=Object(i.useState)(0),N=Object(c.a)(L,2),q=N[0],z=N[1],B=Object(i.useState)(0),G=Object(c.a)(B,2),H=G[0],K=G[1],T=Object(i.useState)(""),V=Object(c.a)(T,2),M=V[0],Q=V[1];Object(i.useEffect)((function(){W(),X(),Y()}),[]);var W=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.next=3,e.getReservations();case 3:r=t.sent,j(!1),""===r.error?f(r.list):f(r.error);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUnits();case 2:""===(r=t.sent).error&&I(r.list);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAreas();case 2:""===(r=t.sent).error&&J(r.list);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(){m(!1)},$=function(){var t=Object(a.a)(Object(n.a)().mark((function t(r){var a;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Tem certeza que deseja excluir?")){t.next=5;break}return t.next=3,e.removeReservation(r);case 3:""===(a=t.sent).error?W():alert(a.error);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ee=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var r,a;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(q&&H&&M)){t.next=16;break}if(y(!0),a={id_unit:q,id_area:H,reservation_date:M},""!==C){t.next=9;break}return t.next=6,e.addReservation(a);case 6:r=t.sent,t.next=12;break;case 9:return t.next=11,e.updateReservation(C,a);case 11:r=t.sent;case 12:y(!1),""===r.error?(m(!1),W()):alert(r.error),t.next=17;break;case 16:alert("Preencha os campos!");case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.K,{children:Object(d.jsxs)(s.m,{children:[Object(d.jsx)("h2",{children:"Reservas"}),Object(d.jsxs)(s.h,{children:[Object(d.jsx)(s.l,{children:Object(d.jsxs)(s.e,{color:"primary",onClick:function(){R(""),z(E[0].id),K(A[0].id),Q(),m(!0)},disabled:0===E.length||0===A.length,children:[Object(d.jsx)(o.a,{name:"cil-check"}),"Nova Reserva"]})}),Object(d.jsx)(s.i,{children:Object(d.jsx)(s.p,{items:h,fields:[{label:"Unidade",key:"name_unit",sorter:!1},{label:"\xc1rea",key:"name_area",sorter:!1},{label:"Data da reserva",key:"reservation_date"},{label:"A\xe7\xf5es",key:"actions",_style:{width:"1px"},sorter:!1,filter:!1}],loading:l,noItemsViewSlot:" ",columnFilter:!0,sorter:!0,hover:!0,striped:!0,bordered:!0,pagination:!0,itemsPerPage:10,scopedSlots:{reservation_date:function(e){return Object(d.jsx)("td",{children:e.reservation_date_formatted})},actions:function(e){return Object(d.jsx)("td",{children:Object(d.jsxs)(s.f,{children:[Object(d.jsx)(s.e,{color:"info",onClick:function(){return function(e){var t=h.findIndex((function(t){return t.id===e}));R(h[t].id),z(h[t].id_unit),K(h[t].id_area),Q(h[t].reservation_date),m(!0)}(e.id)},disabled:0===E.length||0===A.length,children:"Editar"}),Object(d.jsx)(s.e,{color:"danger",onClick:function(){return $(e.id)},children:"Excluir"})]})})}}})})]})]})}),Object(d.jsxs)(s.F,{show:v,onClose:Z,children:[Object(d.jsxs)(s.I,{closeButton:!0,children:[""===C?"Nova":"Editar"," Reserva"]}),Object(d.jsxs)(s.G,{children:[Object(d.jsxs)(s.x,{children:[Object(d.jsx)(s.D,{htmlFor:"modal_unit",children:"Unidade"}),Object(d.jsx)(s.L,{id:"modal-unit",custom:!0,onChange:function(e){return z(e.target.value)},value:q,children:E.map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:e.name},t)}))})]}),Object(d.jsxs)(s.x,{children:[Object(d.jsx)(s.D,{htmlFor:"modal_area",children:"\xc1rea"}),Object(d.jsx)(s.L,{id:"modal-area",custom:!0,onChange:function(e){return K(e.target.value)},value:H,children:A.map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:e.title},t)}))})]}),Object(d.jsxs)(s.x,{children:[Object(d.jsx)(s.D,{htmlFor:"modal-date",children:"Data da Reserva"}),Object(d.jsx)(s.y,{type:"text",id:"modal-date",value:M,onChange:function(e){return Q(e.target.value)},disabled:w})]})]}),Object(d.jsxs)(s.H,{children:[Object(d.jsx)(s.e,{color:"primary",onClick:ee,disabled:w,children:w?"Carregando...":"Salvar"}),Object(d.jsx)(s.e,{color:"secondary",onClick:Z,disabled:w,children:w?"Carregando...":"Cancelar"})]})]})]})}}}]);
//# sourceMappingURL=15.9bde861e.chunk.js.map
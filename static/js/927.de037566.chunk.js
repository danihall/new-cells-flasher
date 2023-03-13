"use strict";(self.webpackChunkcells_flasher_react=self.webpackChunkcells_flasher_react||[]).push([[927],{8368:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(6836),l=n(184),a=["ArtMainLayout_game__4ojcY",t.Z["margin-top"]].join(" "),s=function(e){var r=e.children;return(0,l.jsx)("div",{className:a,children:r})}},9384:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(1413);function l(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a="Button_button__JBBzO",s=n(184),i=["children"],o=function(e){var r=e.children,n=l(e,i);return(0,s.jsx)("button",(0,t.Z)((0,t.Z)({className:a},n),{},{children:r}))}},886:function(e,r,n){n.d(r,{n:function(){return m},Z:function(){return p}});var t=n(1413),l=n(3433),a=n(9439),s=n(2791),i=n(9434),o={_check:function(e,r){return r[e[0]]===r[e[1]]&&r[e[1]]===r[e[2]]&&e},horizontal:function(e){var r=e.i,n=e.cells,t=[r,r+1,r+2];return this._check(t,n)},vertical:function(e){var r=e.i,n=e.cells_per_row,t=e.cells,l=[r,r+n,r+2*n];return this._check(l,t)},diagonalRight:function(e){var r=e.i,n=e.cells_per_row,t=e.cells;if(n-r%n<3)return!1;var l=[r,r+n+1,r+2*n+2];return this._check(l,t)},diagonalLeft:function(e){var r=e.i,n=e.cells_per_row,t=e.cells;if(r%n<2)return!1;var l=[r,r+n-1,r+2*n-2];return this._check(l,t)}},c=function(e,r){var n=[],t={i:0,cells:e,cells_per_row:r};return e.forEach((function(e,r,l){!e||r>=l.length-2||(t.i=r,[o.horizontal(t),o.vertical(t),o.diagonalRight(t),o.diagonalLeft(t)].forEach((function(e){e&&e.length&&n.push(e)})))})),n.flat()},u=n(1887),f=n(7119),d=n(1637),h=n(8325),_={cells:"CellsController_cells__tOX0j","player-x":"CellsController_player-x__Aau8H","player-o":"CellsController_player-o__MSW80","is--winner-move":"CellsController_is--winner-move__yF+Ky",flash:"CellsController_flash__750Kn"},v=n(184),m=function(e){var r=e.cellsPerRow,n=e.forceCellsArray,o=void 0===n?null:n,h=e.isPlayable,m=void 0===h||h,p=(0,i.oR)(),x=(0,s.useState)(o||(0,u.V)(r)),j=(0,a.Z)(x,2),y=j[0],g=j[1],Z=(0,s.useState)(!0),w=(0,a.Z)(Z,2),b=w[0],A=w[1],C=(0,s.useState)(o?Array.from(new Set(c(o,r))):[]),S=(0,a.Z)(C,2),k=S[0],P=S[1],O=(0,s.useState)(!1),R=(0,a.Z)(O,2),N=R[0],D=R[1],M=(0,i.I0)(),T=(0,s.useCallback)((function(e){return function(){var n=p.getState(),t=n.linesAreDrawn,a=n.countdownIsReached;if(t&&!a&&!y[e]){var s=(0,l.Z)(y);s[e]=b?"x":"o";var i=c(s,r);P(Array.from(new Set([].concat((0,l.Z)(k),(0,l.Z)(i))))),g(s),A(!b),M((0,f.q2)(s)),M((0,d.Bh)())}}}),[y]),F=(0,s.useCallback)((function(e,r,n){if(r)return[_["player-".concat(r)],e.indexOf(n)>=0?_["is--winner-move"]:""].join(" ")}),[]),L={"--cells-per-row":r};return(0,v.jsx)("div",(0,t.Z)((0,t.Z)({},(0,t.Z)({style:L,className:_.cells},m&&{onPointerDown:function(){return D(!0)},onPointerUp:function(){return D(!1)},onPointerLeave:function(){return D(!1)}})),{},{children:y.map((function(e,r){return(0,v.jsx)("div",(0,t.Z)((0,t.Z)({},(0,t.Z)({className:F(k,e,r),key:r.toString()},m&&{onPointerMove:N?T(r):void 0,onClick:T(r)})),{},{children:e}))}))}))},p=function(){var e=(0,i.v9)(f.pi),r=(0,i.v9)(h.$C);return(0,v.jsx)(m,{cellsPerRow:e},r+e)}},7149:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(2791),l=n(844),a={toast:"ToastMessage_toast__hy1BO",slideUp:"ToastMessage_slideUp__g5bH0",success:"ToastMessage_success__ZwIRW",error:"ToastMessage_error__1aR33"},s=n(184),i=function(e){var r=e.type,n=e.text,i=(0,t.useRef)(null);return(0,t.useEffect)((function(){(0,l.D2)(i.current)}),[r,n]),(0,s.jsx)("div",{ref:i,className:"".concat(a.toast," ").concat(a[r]),children:n})}},844:function(e,r,n){n.d(r,{D2:function(){return l},hC:function(){return a}});var t=function(e){var r;if(e)return null===(r=e.getAnimations())||void 0===r?void 0:r[0]},l=function(e){var r=t(e);null===r||void 0===r||r.cancel(),null===r||void 0===r||r.play()},a=function(e){var r=t(e);null===r||void 0===r||r.pause()}},6927:function(e,r,n){n.r(r),n.d(r,{default:function(){return A}});var t=n(7689),l=n(7292),a=n(1087),s=n(6836),i=n(8368),o=n(9384),c=n(886),u={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},f={dateStyle:"full",timeStyle:"short",timeZone:"Europe/Paris"},d=/\//g,h=function(e,r){var n=Intl.DateTimeFormat("fr",r).format(new Date(e));return r.dateStyle?n:n.replace(d,"-")},_="DateTime_datetime__WdgMQ",v=n(184),m=function(e){var r=e.date;return(0,v.jsx)("time",{className:_,dateTime:h(r,u),children:h(r,f)})},p="Separator_separator__cpSDq",x=function(){return(0,v.jsx)("hr",{className:p})},j="Subtitle_h2-text__F00x8",y=function(e){var r=e.children;return(0,v.jsx)("h2",{children:(0,v.jsx)("span",{className:j,children:r})})},g=n(7149),Z={"stored-art":"RegisteredArts_stored-art__JbALt",header:"RegisteredArts_header__Lhi-2"},w=function(e){var r=e.storedArts,n=(0,t.nA)(),u=[Z["stored-art"],s.Z["margin-top"]].join(" "),f=(0,a.qd)(),d=function(e){e.preventDefault(),f(e.currentTarget)};return(0,v.jsxs)(v.Fragment,{children:[r.map((function(e,r){var n=e.name,t=e.cells,a=e.date,f=e.description,h=Math.sqrt(t.length);return(0,v.jsxs)("div",{className:u,children:[r>0?(0,v.jsx)(x,{}):null,(0,v.jsxs)("div",{className:Z.header,children:[(0,v.jsx)(y,{children:n}),(0,v.jsx)(m,{date:a})]}),f?(0,v.jsx)(l.Z,{children:f}):null,(0,v.jsx)(i.Z,{children:(0,v.jsx)(c.n,{cellsPerRow:h,forceCellsArray:t,isPlayable:!1})}),(0,v.jsxs)("form",{className:s.Z["margin-top"],onSubmit:d,method:"delete",children:[(0,v.jsx)("input",{type:"hidden",name:"entry_name",value:n}),(0,v.jsx)(o.Z,{type:"submit",name:n,children:"Delete Art"})]})]},n)})),n?(0,v.jsx)(g.Z,{type:n.ok?"success":"error",text:n.text}):null]})},b=n(2769),A=function(){var e=(0,t.f_)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.Z,{children:"Previous Arts"}),e&&e.length?(0,v.jsx)(w,{storedArts:e}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Z,{children:"There are no stored Arts!"}),(0,v.jsx)(g.Z,{type:"success",text:"All stored Arts were deleted!"})]})]})}}}]);
//# sourceMappingURL=927.de037566.chunk.js.map
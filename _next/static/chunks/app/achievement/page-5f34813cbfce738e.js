(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{9497:function(e,s,a){Promise.resolve().then(a.bind(a,4517))},4517:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return t}});var n=a(7437),i=a(2265);function l(e){var s;return(0,n.jsx)("div",{className:"card shadow border-0 rounded-4 mb-2",children:(0,n.jsx)("div",{className:"card-body p-5",children:(0,n.jsxs)("div",{className:"row align-items-center gx-5",children:[(0,n.jsx)("div",{className:"col text-center text-lg-start mb-4 mb-lg-0",children:null===(s=e.place)||void 0===s?void 0:s.map(e=>(0,n.jsxs)("div",{className:"bg-light p-4 rounded-4 mb-2",children:[(0,n.jsxs)("div",{className:"text-primary fw-bolder mb-2",children:[e.number,(0,n.jsx)("sup",{children:e.symbol})," ",e.name]}),(0,n.jsx)("div",{className:"text-primary small mb-2",children:e.type}),(0,n.jsx)("div",{className:"small text-muted",children:e.company})]},e.number+e.name))}),(0,n.jsx)("div",{className:"col-lg-8",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-primary fw-bolder mb-2",children:e.title}),(0,n.jsx)("div",{className:"text-muted",dangerouslySetInnerHTML:{__html:e.description}})]})})]})})})}function t(){let[e,s]=(0,i.useState)([]),a=async()=>{let e=await fetch("./data/achievement.json");return await e.json()};return(0,i.useEffect)(()=>{a().then(e=>{s(e.achievements)})},[]),(0,n.jsxs)("div",{className:"container px-5 mb-5",id:"page-award",children:[(0,n.jsx)("div",{className:"text-center mb-5",children:(0,n.jsx)("h1",{className:"display-5 fw-bolder mb-0",children:(0,n.jsx)("span",{className:"text-gradient d-inline",children:"Achievement and Award"})})}),(0,n.jsx)("div",{className:"row gx-5 justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-11 col-xl-9 col-xxl-8",children:(0,n.jsx)("section",{className:"mb-4",children:e.map(e=>{var s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"d-flex align-items-center justify-content-between mb-4",children:(0,n.jsx)("h2",{className:"text-primary fw-bolder mb-0",children:e.year})},e.id),null===(s=e.award)||void 0===s?void 0:s.map(e=>(0,n.jsx)(l,{title:e.title,description:e.description,place:e.place},e.id))]})})})})})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=9497)}),_N_E=e.O()}]);
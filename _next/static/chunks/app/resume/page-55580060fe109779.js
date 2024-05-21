(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{1621:function(e,s,a){Promise.resolve().then(a.bind(a,866))},866:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return n}});var l=a(7437),i=a(2265);function d(e){return(0,l.jsx)("div",{className:"card shadow border-0 rounded-4 mb-5",children:(0,l.jsx)("div",{className:"card-body p-5",children:(0,l.jsxs)("div",{className:"row align-items-center gx-5",children:[(0,l.jsx)("div",{className:"col text-center text-lg-start mb-4 mb-lg-0",children:(0,l.jsxs)("div",{className:"bg-light p-4 rounded-4",children:[(0,l.jsx)("div",{className:"text-primary fw-bolder mb-2",children:e.year}),(0,l.jsx)("div",{className:"small fw-bolder",children:e.position}),(0,l.jsx)("div",{className:"small text-muted",children:e.company}),(0,l.jsx)("div",{className:"small text-muted",children:e.address})]})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:e.jobdesc.map(e=>(0,l.jsx)("li",{children:e},e))})})})]})})})}function c(e){return(0,l.jsx)("div",{className:"card shadow border-0 rounded-4 mb-2",children:(0,l.jsx)("div",{className:"card-body py-2 px-5",children:(0,l.jsxs)("div",{className:"row align-items-center gx-5",children:[(0,l.jsx)("div",{className:"col text-center text-lg-start mb-4 mb-lg-0",children:(0,l.jsx)("div",{className:"bg-light p-4 rounded-4",children:(0,l.jsx)("div",{className:"text-secondary fw-bolder mb-2",children:e.year})})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("ul",{children:e.data.map(e=>(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"small fw-bolder",children:e.title}),(0,l.jsx)("div",{children:e.description})]},e.title))})})]})})})}function n(){let[e,s]=(0,i.useState)([]),[a,n]=(0,i.useState)([]),[r,t]=(0,i.useState)([]),[m,x]=(0,i.useState)([]),o=async()=>{let e=await fetch("./data/experience.json");return await e.json()},h=async()=>{let e=await fetch("./data/training.json");return await e.json()},j=async()=>{let e=await fetch("./data/skills.json");return await e.json()};return(0,i.useEffect)(()=>{o().then(e=>{s(e.experience)}),h().then(e=>{n(e.training)}),j().then(e=>{t(e.softSkills),x(e.hardSkills)})},[]),(0,l.jsxs)("div",{className:"container px-5 mb-5",id:"page-resume",children:[(0,l.jsx)("div",{className:"text-center mb-5",children:(0,l.jsx)("h1",{className:"display-5 fw-bolder mb-0",children:(0,l.jsx)("span",{className:"text-gradient d-inline",children:"Resume"})})}),(0,l.jsx)("div",{className:"row gx-5 justify-content-center",children:(0,l.jsxs)("div",{className:"col-lg-11 col-xl-9 col-xxl-8",children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-between mb-4",children:(0,l.jsx)("h2",{className:"text-primary fw-bolder mb-0",children:"Experience"})}),e.map(e=>(0,l.jsx)(d,{year:e.year,position:e.position,company:e.company,address:e.address,jobdesc:e.jobdesc},e.year))]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{className:"text-secondary fw-bolder mb-4",children:"Education"}),(0,l.jsx)("div",{className:"card shadow border-0 rounded-4 mb-5",children:(0,l.jsx)("div",{className:"card-body p-5",children:(0,l.jsxs)("div",{className:"row align-items-center gx-5",children:[(0,l.jsx)("div",{className:"col text-center text-lg-start mb-4 mb-lg-0",children:(0,l.jsxs)("div",{className:"bg-light p-4 rounded-4",children:[(0,l.jsx)("div",{className:"text-secondary fw-bolder mb-2",children:"2012 – 2016"}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)("div",{className:"small fw-bolder",children:"GPA [3,51 of 4,00]"})})]})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"small fw-bolder",children:"Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari (MAAB)"}),(0,l.jsx)("div",{className:"small text-muted",children:"Bachelor of Computer Science"}),(0,l.jsx)("div",{className:"small text-muted",children:"Informatics Engineering - Information Technology"})]})})]})})})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{className:"text-secondary fw-bolder mb-4",children:"Training and Certificate"}),a.map(e=>(0,l.jsx)(c,{year:e.year,data:e.data},e.year))]}),(0,l.jsx)("div",{className:"pb-5"}),(0,l.jsx)("section",{children:(0,l.jsx)("div",{className:"card shadow border-0 rounded-4 mb-5",children:(0,l.jsxs)("div",{className:"card-body p-5",children:[(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsxs)("div",{className:"d-flex align-items-center mb-4",children:[(0,l.jsx)("div",{className:"feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3",children:(0,l.jsx)("i",{className:"bi bi-tools"})}),(0,l.jsx)("h3",{className:"fw-bolder mb-0",children:(0,l.jsx)("span",{className:"text-gradient d-inline",children:"Professional Skills"})})]}),(0,l.jsx)("div",{className:"d-flex  flex-wrap justify-content-center",children:r.map(e=>(0,l.jsx)("div",{className:"col-4 px-2 mb-4",children:(0,l.jsx)("div",{className:"d-flex align-items-center bg-light rounded-4 p-3 h-100",children:e})},e))})]}),(0,l.jsxs)("div",{className:"mb-0",children:[(0,l.jsxs)("div",{className:"d-flex align-items-center mb-4",children:[(0,l.jsx)("div",{className:"feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3",children:(0,l.jsx)("i",{className:"bi bi-code-slash"})}),(0,l.jsx)("h3",{className:"fw-bolder mb-0",children:(0,l.jsx)("span",{className:"text-gradient d-inline",children:"Languages"})})]}),(0,l.jsx)("div",{className:"d-flex  flex-wrap justify-content-center",children:m.map(e=>(0,l.jsx)("div",{className:"col-4 px-2 mb-4",children:(0,l.jsx)("div",{className:"d-flex align-items-center bg-light rounded-4 p-3 h-100",children:e})},e))})]})]})})})]})})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=1621)}),_N_E=e.O()}]);
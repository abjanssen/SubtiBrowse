"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1266],{91392:(e,t,r)=>{r.d(t,{KM:()=>f,en:()=>p,kb:()=>x,se:()=>g});var n=r(7552),a=r(75785),l=r(68446),o=r(36422),i=r(99546),s=r(95095),c=r(48231),m=r(90257);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(null,arguments)}const d=(0,a.n9)()((()=>({vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none",userSelect:"none"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none",userSelect:"none"}}))),f=(0,l.observer)((function({model:e}){const{viewWidth:t,borderY:r}=e,{classes:a}=d();return n.createElement("svg",{width:t,height:r,className:a.htext},n.createElement(g,{model:e}))})),g=(0,l.observer)((function({model:e}){const{viewWidth:t,borderX:r,borderY:a,hview:l,htextRotation:d,hticks:f}=e,{offsetPx:g,width:p,dynamicBlocks:x,bpPerPx:y}=l,u=x.contentBlocks,w=(0,m.rQ)(u,t,g),k=(0,c.A)(),v={...(0,o.getSnapshot)(l),width:p,staticBlocks:l.staticBlocks},P=f.map((e=>[e,(0,s.eB)({refName:e.refName,coord:e.base,self:v})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-g]));return n.createElement(n.Fragment,null,u.filter((e=>!w.has(e.key))).map((e=>{const t=e.offsetPx,r=Math.floor(t-l.offsetPx);return n.createElement("text",h({transform:`rotate(${d},${r},0)`,key:JSON.stringify(e),x:r,y:1,fontSize:11,dominantBaseline:"hanging",textAnchor:"end"},(0,i.getFillProps)(k.palette.text.primary)),e.refName)})),P.map((([e,t])=>t>0&&t<p?n.createElement("line",h({key:`line-${JSON.stringify(e)}`,x1:t,x2:t,y1:0,y2:"major"===e.type?6:4,strokeWidth:1},(0,i.getFillProps)(k.palette.text.primary))):null)),P.filter((e=>"major"===e[0].type)).map((([e,t])=>t>10&&t<p?n.createElement("text",h({x:t-7,y:0,transform:`rotate(${d},${t},0)`,key:`text-${JSON.stringify(e)}`,fontSize:11,dominantBaseline:"middle",textAnchor:"end"},(0,i.getFillProps)(k.palette.text.primary)),(0,i.getTickDisplayStr)(e.base+1,y)):null)),n.createElement("text",h({y:a-12,x:(t-r)/2,textAnchor:"middle",fontSize:11,dominantBaseline:"hanging"},(0,i.getFillProps)(k.palette.text.primary)),l.assemblyNames.join(",")))})),p=(0,l.observer)((function({model:e}){const{borderX:t,viewHeight:r}=e,{classes:a}=d();return n.createElement("svg",{className:a.vtext,width:t,height:r},n.createElement(x,{model:e}))})),x=(0,l.observer)((function({model:e}){const{viewHeight:t,borderX:r,borderY:a,vview:l,vtextRotation:d,vticks:f}=e,{offsetPx:g,width:p,dynamicBlocks:x,bpPerPx:y}=l,u=x.contentBlocks,w=(0,m.rQ)(u,t,g),k=(0,c.A)(),v={...(0,o.getSnapshot)(l),width:p,staticBlocks:l.staticBlocks},P=f.map((e=>[e,(0,s.eB)({refName:e.refName,coord:e.base,self:v})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-g]));return n.createElement(n.Fragment,null,u.filter((e=>!w.has(e.key))).map((e=>{const a=e.offsetPx,l=r,o=Math.floor(t-a+g);return n.createElement("text",h({transform:`rotate(${d},${l},${a})`,key:JSON.stringify(e),x:l,y:o,fontSize:11,textAnchor:"end"},(0,i.getFillProps)(k.palette.text.primary)),e.refName)})),P.map((([e,a])=>a>0?n.createElement("line",h({key:`line-${JSON.stringify(e)}`,y1:t-a,y2:t-a,x1:r,x2:r-("major"===e.type?6:4),strokeWidth:1},(0,i.getStrokeProps)(k.palette.grey[400]))):null)),P.filter((e=>"major"===e[0].type)).map((([e,a])=>a>10&&a<t?n.createElement("text",h({y:t-a-3,x:r-7,key:`text-${JSON.stringify(e)}`,textAnchor:"end",dominantBaseline:"hanging",fontSize:11},(0,i.getFillProps)(k.palette.text.primary)),(0,i.getTickDisplayStr)(e.base+1,y)):null)),n.createElement("text",h({y:(t-a)/2,x:12,transform:`rotate(-90,12,${(t-a)/2})`,textAnchor:"middle",fontSize:11},(0,i.getFillProps)(k.palette.text.primary)),l.assemblyNames.join(",")))}))},86495:(e,t,r)=>{r.d(t,{A:()=>c,z:()=>s});var n=r(7552),a=r(68446),l=r(48231),o=r(99546);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(null,arguments)}const s=(0,a.observer)((function({model:e,children:t}){const{viewWidth:r,viewHeight:a,hview:s,vview:c}=e,m=s.dynamicBlocks.contentBlocks,h=c.dynamicBlocks.contentBlocks;if(!m.length||!h.length)return null;const d=s.displayedRegionsTotalPx-s.offsetPx,f=c.displayedRegionsTotalPx-c.offsetPx,g=m[0].offsetPx-s.offsetPx,p=h[0].offsetPx-c.offsetPx,x=(0,l.A)(),y=x.palette.divider,u=Math.max(g,0),w=Math.max(a-f,0),k=Math.min(d-g,r),v=Math.min(a-p-w,a);let P=1/0,b=1/0;return n.createElement(n.Fragment,null,n.createElement("rect",i({x:u,y:w,width:k,height:v},(0,o.getFillProps)(x.palette.background.default))),n.createElement("g",null,m.map((e=>{const t=e.offsetPx-s.offsetPx,r=Math.floor(t)!==Math.floor(P);return r&&(P=t),r?n.createElement("line",i({key:JSON.stringify(e),x1:t,y1:0,x2:t,y2:a},(0,o.getStrokeProps)(y))):null})),h.map((e=>{const t=a-(e.offsetPx-c.offsetPx),l=Math.floor(t)!==Math.floor(b);return l&&(b=t),l?n.createElement("line",i({key:JSON.stringify(e),x1:0,y1:t,x2:r,y2:t},(0,o.getStrokeProps)(y))):null})),n.createElement("line",i({x1:d,y1:0,x2:d,y2:a},(0,o.getStrokeProps)(y))),n.createElement("line",i({x1:0,y1:a-f,x2:r,y2:a-f},(0,o.getStrokeProps)(y)))),t)}));function c({model:e,children:t}){const{viewWidth:r,viewHeight:a}=e;return n.createElement("svg",{width:r,height:a,style:{background:"rgba(0,0,0,0.12)"}},n.createElement(s,{model:e},t))}},11266:(e,t,r)=>{r.d(t,{renderToSvg:()=>f});var n=r(7552),a=r(42489),l=r(99546),o=r(48407),i=r(49823),s=r(36422),c=r(86495),m=r(91392),h=r(48231);function d({width:e,height:t}){const r=(0,h.A)();return n.createElement("rect",{x:0,y:0,width:e,height:t,fill:(0,l.stripAlpha)(r.palette.background.default)})}async function f(e,t){await(0,a.when)((()=>e.initialized));const{themeName:r="default",Wrapper:h=(({children:e})=>e)}=t,{createRootFn:f}=(0,s.getRoot)(e),g=(0,l.getSession)(e),p=g.allThemes?.()[r],{width:x,borderX:y,viewWidth:u,viewHeight:w,tracks:k,height:v}=e,P=await Promise.all(k.map((async e=>{const r=e.displays[0];return await(0,a.when)((()=>void 0===r.ready||r.ready)),{track:e,result:await r.renderSvg({...t,theme:p})}}))),b=x+100;return(0,l.renderToStaticMarkup)(n.createElement(o.A,{theme:(0,i.createJBrowseTheme)(p)},n.createElement(h,null,n.createElement("svg",{width:x,height:v,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,b,v].toString()},n.createElement(d,{width:b,height:v}),n.createElement(m.kb,{model:e}),n.createElement("g",{transform:`translate(${y} 0)`},n.createElement(c.z,{model:e}),n.createElement("defs",null,n.createElement("clipPath",{id:"clip-ruler"},n.createElement("rect",{x:0,y:0,width:u,height:w}))),n.createElement("g",{clipPath:"url(#clip-ruler)"},P.map((({result:e},t)=>n.createElement("g",{key:t},e))))),n.createElement("g",{transform:`translate(${y} ${w})`},n.createElement(m.se,{model:e}))))),f)}}}]);
//# sourceMappingURL=1266.865fa844.chunk.js.map
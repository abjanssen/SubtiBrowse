"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8856],{28856:(t,e,i)=>{i.d(e,{doAfterAttach:()=>c});var o=i(36422),n=i(99546),a=i(95095),s=i(82727),r=i(42489),f=i(30385);function c(t){(0,o.addDisposer)(t,(0,r.autorun)((()=>{const e=(0,n.getContainingView)(t);if(!e.initialized)return;const i=t.mainCanvas?.getContext("2d"),o=t.cigarClickMapCanvas?.getContext("2d");if(!i||!o)return;const a=e.middleComparativeHeight,s=e.width;i.clearRect(0,0,s,a),o.clearRect(0,0,s,a),(0,f.Ww)(t,i,o)}))),(0,o.addDisposer)(t,(0,r.autorun)((()=>{(0,n.getContainingView)(t).initialized&&(0,f.C4)(t)}))),(0,o.addDisposer)(t,(0,r.reaction)((()=>{const e=(0,n.getContainingView)(t);return{bpPerPx:e.views.map((t=>t.bpPerPx)),displayedRegions:JSON.stringify(e.views.map((t=>t.displayedRegions))),features:t.features,initialized:e.initialized}}),(({initialized:e})=>{if(!e)return;const{assemblyManager:i}=(0,n.getSession)(t),r=(0,n.getContainingView)(t).views.map((t=>({...(0,o.getSnapshot)(t),width:t.width,staticBlocks:t.staticBlocks,interRegionPaddingWidth:t.interRegionPaddingWidth,minimumBlockWidth:t.minimumBlockWidth}))),f=[],c=t.features||[];for(const t of c){const e=t.get("mate");let o=t.get("start"),n=t.get("end");const c=e.start,l=e.end;-1===t.get("strand")&&([n,o]=[o,n]);const d=i.get(t.get("assemblyName")),g=i.get(e.assemblyName),h=t.get("refName"),m=e.refName,u=d?.getCanonicalRefName(h)||h,C=g?.getCanonicalRefName(m)||m,b=r[0],p=r[1],v=(0,a.eB)({self:b,refName:u,coord:o}),w=(0,a.eB)({self:b,refName:u,coord:n}),M=(0,a.eB)({self:p,refName:C,coord:c}),x=(0,a.eB)({self:p,refName:C,coord:l});if(void 0===v||void 0===w||void 0===M||void 0===x)continue;const P=t.get("CIGAR");f.push({p11:v,p12:w,p21:M,p22:x,f:t,cigar:s.aF.parseCigar(P)})}t.setFeatPositions(f)}),{fireImmediately:!0}))}},79610:(t,e,i)=>{i.d(e,{$2:()=>s,Eg:()=>c,WT:()=>r,f0:()=>f,mr:()=>a});var o=i(99546),n=i(30385);function a({feature:t,ctx:e,offsets:i,cb:n,height:a,drawCurves:r,oobLimit:f,viewWidth:c,hideTiny:l}){const{p11:d,p12:g,p21:h,p22:m}=t,u=d.offsetPx-i[0],C=g.offsetPx-i[0],b=h.offsetPx-i[1],p=m.offsetPx-i[1],v=Math.abs(C-u),w=Math.abs(p-b),M=a,x=(M-0)/2,P=Math.min(b,p),k=Math.max(b,p);(0,o.doesIntersect2)(P,k,-f,c+f)&&(v<=1&&w<=1?l||(e.beginPath(),e.moveTo(u,0),r?e.bezierCurveTo(u,x,b,x,b,M):e.lineTo(b,M),e.stroke()):(s(e,u,C,0,p,b,M,x,r),n(e)))}function s(t,e,i,o,n,a,s,r,f){f?function(t,e,i,o,n,a,s,r){const f=Math.abs(e-i),c=Math.abs(e-i);if(f<5&&c<5&&i<e&&Math.abs(e-n)>100){const t=e;e=i,i=t}t.beginPath(),t.moveTo(e,o),t.lineTo(i,o),t.bezierCurveTo(i,r,n,r,n,s),t.lineTo(a,s),t.bezierCurveTo(a,r,e,r,e,o),t.closePath(),t.fill()}(t,e,i,o,n,a,s,r):function(t,e,i,o,n,a,s){t.beginPath(),t.moveTo(e,o),t.lineTo(i,o),t.lineTo(n,s),t.lineTo(a,s),t.closePath(),t.fill()}(t,e,i,o,n,a,s)}function r(t,e){const i=(0,o.getContainingView)(e),a=(0,o.getContainingTrack)(e),s=e.clickMapCanvas,r=e.cigarClickMapCanvas;if(!s||!r)return;const f=s.getBoundingClientRect(),c=s.getContext("2d"),l=r.getContext("2d");if(!c||!l)return;const d=t.clientX-f.left,g=t.clientY-f.top,[h,m,u]=c.getImageData(d,g,1,1).data,C=Math.floor(n.xx/e.numFeats),b=(0,n.OX)(h,m,u,C),p=e.featPositions[b];if(p){const{f:t}=p;e.setClickId(t.id());const n=(0,o.getSession)(e);(0,o.isSessionModelWithWidgets)(n)&&n.showWidget(n.addWidget("BaseFeatureWidget","baseFeature",{view:i,track:a,featureData:t.toJSON()}))}return p}function f(t,e,i){t.preventDefault();const o=e.clickMapCanvas,a=e.cigarClickMapCanvas;if(!o||!a)return;const s=o.getBoundingClientRect(),r=o.getContext("2d"),f=a.getContext("2d");if(!r||!f)return;const{clientX:c,clientY:l}=t,d=c-s.left,g=l-s.top,[h,m,u]=r.getImageData(d,g,1,1).data,C=Math.floor(n.xx/e.numFeats),b=(0,n.OX)(h,m,u,C),p=e.featPositions[b];p&&(e.setClickId(p.f.id()),i({clientX:c,clientY:l,feature:p}))}function c(t,e,i){const n=t.toJSON(),a=n.mate,s=n.end-n.start,r=a.end-a.start,f=n.identity,c=n.name,l=a.name;return[`Loc1: ${(0,o.assembleLocString)(n)}`,`Loc2: ${(0,o.assembleLocString)(a)}`,`Inverted: ${-1===n.strand}`,`Query len: ${s.toLocaleString("en-US")}`,`Target len: ${r.toLocaleString("en-US")}`,f?`Identity: ${f.toPrecision(2)}`:"",e?`CIGAR operator: ${e}${i}`:"",c?`Name 1: ${c}`:"",l?`Name 1: ${l}`:""].filter((t=>!!t)).join("<br/>")}},30385:(t,e,i)=>{i.d(e,{C4:()=>g,OX:()=>l,Ww:()=>d,xx:()=>a});var o=i(99546),n=i(79610);const a=16581375;function s(t){return`rgb(${Math.floor(t/65025)%255},${Math.floor(t/255)%255},${t%255})`}const r={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},f=3,c=1600;function l(t,e,i,o){return Math.floor((255*t*255+255*e+i-1)/o)}function d(t,e,i){const l=(0,o.getContainingView)(t),d=l.drawCurves,g=l.drawCIGAR,h=l.middleComparativeHeight,m=l.width,u=l.views.map((t=>t.bpPerPx));i&&(i.imageSmoothingEnabled=!1),e.beginPath();const C=t.featPositions,b=l.views.map((t=>t.offsetPx)),p=Math.floor(a/C.length);e.fillStyle=r.M,e.strokeStyle=r.M;for(const{p11:t,p12:i,p21:o,p22:n}of C){const a=t.offsetPx-b[0],s=i.offsetPx-b[0],r=o.offsetPx-b[1],l=n.offsetPx-b[1],g=Math.abs(s-a),u=Math.abs(l-r),C=0,p=h,v=(p-C)/2;g<=f&&u<=f&&r<m+c&&r>-c&&(e.moveTo(a,C),d?e.bezierCurveTo(a,v,r,v,r,p):e.lineTo(r,p))}e.stroke(),e.fillStyle=r.M,e.strokeStyle=r.M;for(const{p11:t,p12:p,p21:v,p22:w,f:M,cigar:x}of C){const C=t.offsetPx-b[0],P=p.offsetPx-b[0],k=v.offsetPx-b[1],S=w.offsetPx-b[1],T=Math.abs(P-C),y=Math.abs(S-k),N=Math.min(k,S),$=Math.max(k,S),I=0,W=h,R=(W-I)/2;if(!(T<=f&&y<=f)&&(0,o.doesIntersect2)(N,$,-c,l.width+c)){const t=M.get("strand"),o=-1===t?P:C,f=o<(-1===t?C:P)?1:-1,c=(k<S?1:-1)*t;let l=o,h=-1===t?S:k;if(x.length&&g){let t=!1,o=0,g=0;const C=Math.floor(a/x.length);for(let a=0;a<x.length;a+=2){const b=a*C+1,p=+x[a],v=x[a+1];t||(o=l,g=h);const w=p/u[0],M=p/u[1];if("M"===v||"="===v||"X"===v?(l+=w*f,h+=M*c):"D"===v||"N"===v?l+=w*f:"I"===v&&(h+=M*c),!(Math.max(o,g,l,h)<0||Math.min(o,g,l,h)>m)){const f=a<x.length-2;Math.abs(l-o)<=1&&Math.abs(h-g)<=1&&f?t=!0:(e.fillStyle=r[t&&w>1||M>1?v:"M"],t=!1,(0,n.$2)(e,o,l,I,h,g,W,R,d),i&&(i.fillStyle=s(b),(0,n.$2)(i,o,l,I,h,g,W,R,d)))}}}else(0,n.$2)(e,C,P,I,S,k,W,R,d)}}const v=t.clickMapCanvas?.getContext("2d");if(v){v.imageSmoothingEnabled=!1,v.clearRect(0,0,m,h);for(let t=0;t<C.length;t++){const e=C[t],i=t*p+1;v.fillStyle=s(i),(0,n.mr)({cb:t=>{t.fill()},feature:e,ctx:v,drawCurves:d,offsets:b,oobLimit:c,viewWidth:l.width,hideTiny:!0,height:h})}}}function g(t){const{clickId:e,mouseoverId:i}=t,a=(0,o.getContainingView)(t),s=a.drawCurves,r=a.middleComparativeHeight,f=a.width,l=t.mouseoverCanvas?.getContext("2d"),d=a.views.map((t=>t.offsetPx));if(!l)return;l.resetTransform(),l.scale(1,1),l.clearRect(0,0,f,r);const g=t.featMap[i||""];g&&(l.fillStyle="rgb(0,0,0,0.1)",(0,n.mr)({cb:t=>{t.fill()},feature:g,ctx:l,oobLimit:c,viewWidth:a.width,drawCurves:s,offsets:d,height:r}));const h=t.featMap[e||""];h&&(l.strokeStyle="rgb(0, 0, 0, 0.9)",(0,n.mr)({cb:t=>{t.stroke()},feature:h,ctx:l,oobLimit:c,viewWidth:a.width,drawCurves:s,offsets:d,height:r}))}}}]);
//# sourceMappingURL=8856.4593419f.chunk.js.map
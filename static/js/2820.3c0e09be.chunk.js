"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2820],{12820:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(99834),o=n(7706),i=n(99546),a=n(35904);const c="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;class l extends a.default{async setupPre(e){const t=(0,s.openLocation)(this.getConf("deltaLocation"),this.pluginManager),n=await t.readFile(e);return function(e){let t="",n="",s=0,o=0,i=0,a=0,l=0,r=0,u=[],h=0,f=0,p=!1;const d=[],g=new RegExp(/^>(\S+)\s+(\S+)\s+(\d+)\s+(\d+)/);let w=0,b=0;for(;w<e.length;){const x=e.indexOf("\n",w);if(-1===x)break;const k=e.subarray(w,x),m=(c?.decode(k)||k.toString()).trim();if(w=x+1,b++,m){const e=g.exec(m);if(null!==e){t=e[1],n=e[2],p=!0;continue}if(!p)continue;const c=m.split(" ");if(7===c.length){const e=+c[0],t=+c[1],n=+c[2],p=+c[3];l=e<t&&n<p||e>t&&n>p?1:-1,i=+(e<t?e:t)-1,a=+(t>e?t:e),s=+(n<p?n:p)-1,o=+(p>n?p:n),h=f=0,r=+c[4],u=[]}else if(1===c.length){const e=+c[0];if(0===e){let e=0;const c=[];if(a-i-h!=o-s-f)throw new Error(`inconsistent alignment on line ${b}`);u.push(a-i-h<<4);for(const t of u){const n=t>>4;e+=n,c.push(n+"MID".charAt(15&u[b]))}d.push({qname:n,qstart:s,qend:o,tname:t,tstart:i,tend:a,strand:l,extra:{numMatches:e-r,blockLen:e,mappingQual:0,NM:r,cg:c.join("")}})}else if(e>0){const t=e-1;h+=t+1,f+=t,t>0&&u.push(t<<4),u.length>0&&2==(15&u[u.length-1])?u[u.length-1]+=16:u.push(18)}else{const t=-e-1;h+=t,f+=t+1,t>0&&u.push(t<<4),u.length>0&&1==(15&u[u.length-1])?u[u.length-1]+=16:u.push(17)}}}}return d}((0,i.isGzip)(n)?await(0,o.unzip)(n):n)}}}}]);
//# sourceMappingURL=2820.3c0e09be.chunk.js.map
"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7409],{27409:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(68120),n=s(68584),r=s(46377),i=s(99834),o=s(32595),d=s(66885),c=s(6434),l=s(52645),f=s(77744);class h extends r.BaseFeatureDataAdapter{constructor(e,t,s){super(e,t,s);const r=(0,n.readConfObject)(e,"gffGzLocation"),o=(0,n.readConfObject)(e,["index","indexType"]),d=(0,n.readConfObject)(e,["index","location"]),c=(0,n.readConfObject)(e,"dontRedispatch");this.dontRedispatch=c||["chromosome","contig","region"],this.gff=new a.wD({filehandle:(0,i.openLocation)(r,this.pluginManager),csiFilehandle:"CSI"===o?(0,i.openLocation)(d,this.pluginManager):void 0,tbiFilehandle:"CSI"!==o?(0,i.openLocation)(d,this.pluginManager):void 0,chunkCacheSize:52428800,renameRefSeqs:e=>e})}async getRefNames(e={}){return this.gff.getReferenceSequenceNames(e)}async getHeader(){return this.gff.getHeader()}getFeatures(e,t={}){return(0,d.ObservableCreate)((async s=>{const a=await this.gff.getMetadata();await this.getFeaturesHelper(e,t,a,s,!0)}),t.stopToken)}async getFeaturesHelper(e,t,s,a,n,r=e){try{const i=[];if(await this.gff.getLines(e.refName,e.start,e.end,((e,t)=>{i.push(this.parseLine(s.columnNumbers,e,t))})),n&&i.length){let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const e of i){const t=e.fields[2];if(!this.dontRedispatch.includes(t)){const t=e.start-1;t<n&&(n=t),e.end>r&&(r=e.end)}}if(r>e.end||n<e.start)return void await this.getFeaturesHelper({...e,start:n,end:r},t,s,a,!1,e)}const d=i.map((e=>(e.fields[8]&&"."!==e.fields[8]?e.fields[8].includes("_lineHash")||(e.fields[8]+=`;_lineHash=${e.lineHash}`):e.fields[8]=`_lineHash=${e.lineHash}`,e.fields.join("\t")))).join("\n");for(const e of(0,l.g)(d))for(const t of e){const e=new c.A({data:(0,f.d)(t),id:`${this.id}-offset-${t.attributes?._lineHash?.[0]}`});(0,o.R6)(e.get("start"),e.get("end"),r.start,r.end)&&a.next(e)}a.complete()}catch(e){a.error(e)}}parseLine(e,t,s){const a=t.split("\t");return{start:+a[e.start-1],end:+a[e.end-1],lineHash:s,fields:a}}freeResources(){}}},77744:(e,t,s)=>{function a(e){const{end:t,start:s,child_features:n,derived_features:r,attributes:i,type:o,source:d,phase:c,seq_id:l,score:f,strand:h}=e;let u;"+"===h?u=1:"-"===h?u=-1:"."===h&&(u=0);const p=new Set(["start","end","seq_id","score","type","source","phase","strand"]),g=i||{},b={};for(const e of Object.keys(g)){let t=e.toLowerCase();if(p.has(t)&&(t+="2"),g[e]&&"_lineHash"!==e){let s=g[e];Array.isArray(s)&&1===s.length&&([s]=s),b[t]=s}}return{...b,start:s-1,end:t,strand:u,type:o,source:d,refName:l,derived_features:r,phase:null===c?void 0:Number(c),score:null===f?void 0:f,subfeatures:n.flatMap((e=>e.map((e=>a(e)))))}}s.d(t,{d:()=>a})}}]);
//# sourceMappingURL=7409.ea231b42.chunk.js.map
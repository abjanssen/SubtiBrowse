"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3550],{21169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var o=a(7552),r=a(1343),n=a(48171),s=a(29499),l=a(22679),i=a(56089),c=a(33371),u=a(33248),d=a(58507),p=a(5401),m=a(49823),v=a(75785),h=a(68446);const A=(0,v.n9)()((e=>({formElt:{margin:e.spacing(3),width:400},dialogContent:{width:"80em"},root:{padding:4}})));function f(e){return o.createElement("div",null,o.createElement(r.A,e))}function b({children:e}){return o.createElement("div",null,o.createElement(n.A,null,e))}const g=(0,h.observer)((function({handleClose:e,model:t}){const{classes:a}=A(),{upperCaseCDS:r}=t,[n,v]=(0,o.useState)(`${t.intronBp}`),[h,g]=(0,o.useState)(`${t.upDownBp}`),C=!Number.isNaN(+n),y=!Number.isNaN(+h);return o.createElement(m.Dialog,{maxWidth:"xl",open:!0,onClose:()=>{e()},title:"Feature sequence settings"},o.createElement(s.A,{className:a.dialogContent},o.createElement(f,{label:"Number of intronic bases around splice site to display",className:a.formElt,value:n,helperText:C?"":"Not a number",error:!C,onChange:e=>{v(e.target.value)}}),o.createElement(f,{label:"Number of bases up/down stream of feature to display",className:a.formElt,value:h,helperText:y?"":"Not a number",error:!y,onChange:e=>{g(e.target.value)}}),o.createElement(b,null,o.createElement(l.A,null,"Sequence capitalization"),o.createElement(i.A,{value:r?"cds":"unchanged",onChange:e=>{t.setUpperCaseCDS("cds"===e.target.value)}},o.createElement(c.A,{value:"cds",control:o.createElement(u.A,{className:a.root,size:"small"}),label:"Capitalize CDS and lower case everything else"}),o.createElement(c.A,{value:"unchanged",control:o.createElement(u.A,{className:a.root,size:"small"}),label:"Capitalization from reference genome sequence"})))),o.createElement(d.A,null,o.createElement(p.A,{onClick:()=>{t.setIntronBp(+n),t.setUpDownBp(+h),e()},disabled:!C||!y,color:"primary",variant:"contained"},"Submit"),o.createElement(p.A,{onClick:()=>{e()},color:"secondary",autoFocus:!0,variant:"contained"},"Cancel")))}))},33248:(e,t,a)=>{a.d(t,{A:()=>N});var o=a(7552),r=a(93878),n=a(70799),s=a(72639),l=a(15110),i=a(74893),c=a(69500);const u=(0,i.A)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=(0,i.A)((0,c.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var p=a(55270),m=a(51148),v=a(60129);const h=(0,m.Ay)("span",{shouldForwardProp:p.A})({position:"relative",display:"flex"}),A=(0,m.Ay)(u)({transform:"scale(1)"}),f=(0,m.Ay)(d)((0,v.A)((({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})))),b=function(e){const{checked:t=!1,classes:a={},fontSize:o}=e,r={...e,checked:t};return(0,c.jsxs)(h,{className:a.root,ownerState:r,children:[(0,c.jsx)(A,{fontSize:o,className:a.background,ownerState:r}),(0,c.jsx)(f,{fontSize:o,className:a.dot,ownerState:r})]})};var g=a(15622),C=a(4402),y=a(39006),S=a(38127),w=a(4785);const k=(0,m.Ay)(l.A,{shouldForwardProp:e=>(0,p.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"medium"!==a.size&&t[`size${(0,g.A)(a.size)}`],t[`color${(0,g.A)(a.color)}`]]}})((0,v.A)((({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${S.A.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter((([,e])=>e&&e.main)).map((([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.hoverOpacity)}}}))),...Object.entries(e.palette).filter((([,e])=>e&&e.main)).map((([t])=>({props:{color:t},style:{[`&.${S.A.checked}`]:{color:(e.vars||e).palette[t].main}}}))),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})))),E=(0,c.jsx)(b,{checked:!0}),z=(0,c.jsx)(b,{}),N=o.forwardRef((function(e,t){const a=(0,w.b)({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:l=E,color:i="primary",icon:u=z,name:d,onChange:p,size:m="medium",className:v,disableRipple:h=!1,...A}=a,f={...a,disableRipple:h,color:i,size:m},b=(e=>{const{classes:t,color:a,size:o}=e,r={root:["root",`color${(0,g.A)(a)}`,"medium"!==o&&`size${(0,g.A)(o)}`]};return{...t,...(0,n.A)(r,S.q,t)}})(f),N=(0,y.A)();let R=s;const x=(0,C.A)(p,N&&N.onChange);let j=d;var $,M;return N&&(void 0===R&&($=N.value,R="object"==typeof(M=a.value)&&null!==M?$===M:String($)===String(M)),void 0===j&&(j=N.name)),(0,c.jsx)(k,{type:"radio",icon:o.cloneElement(u,{fontSize:z.props.fontSize??m}),checkedIcon:o.cloneElement(l,{fontSize:E.props.fontSize??m}),ownerState:f,classes:b,name:j,checked:R,onChange:x,ref:t,className:(0,r.A)(b.root,v),...A})}))},38127:(e,t,a)=>{a.d(t,{A:()=>s,q:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiRadio",e)}const s=(0,o.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,a)=>{a.d(t,{A:()=>m});var o=a(7552),r=a(93878),n=a(70799),s=a(83867),l=a(87625),i=a(51584),c=a(77259),u=a(76258),d=a(89456),p=a(69500);const m=o.forwardRef((function(e,t){const{actions:a,children:m,className:v,defaultValue:h,name:A,onChange:f,value:b,...g}=e,C=o.useRef(null),y=(e=>{const{classes:t,row:a,error:o}=e,r={root:["root",a&&"row",o&&"error"]};return(0,n.A)(r,l.B,t)})(e),[S,w]=(0,c.A)({controlled:b,default:h,name:"RadioGroup"});o.useImperativeHandle(a,(()=>({focus:()=>{let e=C.current.querySelector("input:not(:disabled):checked");e||(e=C.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const k=(0,i.A)(t,C),E=(0,d.A)(A),z=o.useMemo((()=>({name:E,onChange(e){w(e.target.value),f&&f(e,e.target.value)},value:S})),[E,f,w,S]);return(0,p.jsx)(u.A.Provider,{value:z,children:(0,p.jsx)(s.A,{role:"radiogroup",ref:k,className:(0,r.A)(y.root,v),...g,children:m})})}))},76258:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext(void 0)},87625:(e,t,a)=>{a.d(t,{A:()=>s,B:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiRadioGroup",e)}const s=(0,o.A)("MuiRadioGroup",["root","row","error"])},39006:(e,t,a)=>{a.d(t,{A:()=>n});var o=a(7552),r=a(76258);function n(){return o.useContext(r.A)}}}]);
//# sourceMappingURL=3550.031cd41e.chunk.js.map
"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3550],{21169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var o=a(7552),r=a(49823),n=a(1343),s=a(48171),l=a(29499),i=a(22679),c=a(56089),d=a(33371),u=a(33248),p=a(58507),m=a(5401),v=a(68446);const h=(0,a(75785).n9)()((e=>({formElt:{margin:e.spacing(3),width:400},dialogContent:{width:"80em"},root:{padding:4}})));function A(e){return o.createElement("div",null,o.createElement(n.A,e))}function b({children:e}){return o.createElement("div",null,o.createElement(s.A,null,e))}const f=(0,v.observer)((function({handleClose:e,model:t}){const{classes:a}=h(),{upperCaseCDS:n}=t,[s,v]=(0,o.useState)(`${t.intronBp}`),[f,g]=(0,o.useState)(`${t.upDownBp}`),C=!Number.isNaN(+s),y=!Number.isNaN(+f);return o.createElement(r.Dialog,{maxWidth:"xl",open:!0,onClose:()=>{e()},title:"Feature sequence settings"},o.createElement(l.A,{className:a.dialogContent},o.createElement(A,{label:"Number of intronic bases around splice site to display",className:a.formElt,value:s,helperText:C?"":"Not a number",error:!C,onChange:e=>{v(e.target.value)}}),o.createElement(A,{label:"Number of bases up/down stream of feature to display",className:a.formElt,value:f,helperText:y?"":"Not a number",error:!y,onChange:e=>{g(e.target.value)}}),o.createElement(b,null,o.createElement(i.A,null,"Sequence capitalization"),o.createElement(c.A,{value:n?"cds":"unchanged",onChange:e=>{t.setUpperCaseCDS("cds"===e.target.value)}},o.createElement(d.A,{value:"cds",control:o.createElement(u.A,{className:a.root,size:"small"}),label:"Capitalize CDS and lower case everything else"}),o.createElement(d.A,{value:"unchanged",control:o.createElement(u.A,{className:a.root,size:"small"}),label:"Capitalization from reference genome sequence"})))),o.createElement(p.A,null,o.createElement(m.A,{onClick:()=>{t.setIntronBp(+s),t.setUpDownBp(+f),e()},disabled:!C||!y,color:"primary",variant:"contained"},"Submit"),o.createElement(m.A,{onClick:()=>{e()},color:"secondary",autoFocus:!0,variant:"contained"},"Cancel")))}))},33248:(e,t,a)=>{a.d(t,{A:()=>x});var o=a(7552),r=a(93878),n=a(70799),s=a(963),l=a(15110),i=a(74893),c=a(69500);const d=(0,i.A)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=(0,i.A)((0,c.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var p=a(55270),m=a(51148),v=a(84893);const h=(0,m.Ay)("span",{shouldForwardProp:p.A})({position:"relative",display:"flex"}),A=(0,m.Ay)(d)({transform:"scale(1)"}),b=(0,m.Ay)(u)((0,v.A)((({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})))),f=function(e){const{checked:t=!1,classes:a={},fontSize:o}=e,r={...e,checked:t};return(0,c.jsxs)(h,{className:a.root,ownerState:r,children:[(0,c.jsx)(A,{fontSize:o,className:a.background,ownerState:r}),(0,c.jsx)(b,{fontSize:o,className:a.dot,ownerState:r})]})};var g=a(15622),C=a(4402),y=a(33960),S=a(39006),w=a(38127),k=a(58520),E=a(4785);const z=(0,m.Ay)(l.A,{shouldForwardProp:e=>(0,p.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"medium"!==a.size&&t[`size${(0,g.A)(a.size)}`],t[`color${(0,g.A)(a.color)}`]]}})((0,v.A)((({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${w.A.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter((0,k.A)()).map((([t])=>({props:{color:t,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.hoverOpacity)}}}))),...Object.entries(e.palette).filter((0,k.A)()).map((([t])=>({props:{color:t,disabled:!1},style:{[`&.${w.A.checked}`]:{color:(e.vars||e).palette[t].main}}}))),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})))),N=(0,c.jsx)(f,{checked:!0}),R=(0,c.jsx)(f,{}),x=o.forwardRef((function(e,t){const a=(0,E.b)({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:l=N,color:i="primary",icon:d=R,name:u,onChange:p,size:m="medium",className:v,disabled:h,disableRipple:A=!1,...b}=a,f=(0,y.A)();let k=h;f&&void 0===k&&(k=f.disabled),k??=!1;const x={...a,disabled:k,disableRipple:A,color:i,size:m},j=(e=>{const{classes:t,color:a,size:o}=e,r={root:["root",`color${(0,g.A)(a)}`,"medium"!==o&&`size${(0,g.A)(o)}`]};return{...t,...(0,n.A)(r,w.q,t)}})(x),$=(0,S.A)();let M=s;const B=(0,C.A)(p,$&&$.onChange);let q=u;var O,D;return $&&(void 0===M&&(O=$.value,M="object"==typeof(D=a.value)&&null!==D?O===D:String(O)===String(D)),void 0===q&&(q=$.name)),(0,c.jsx)(z,{type:"radio",icon:o.cloneElement(d,{fontSize:R.props.fontSize??m}),checkedIcon:o.cloneElement(l,{fontSize:N.props.fontSize??m}),disabled:k,ownerState:x,classes:j,name:q,checked:M,onChange:B,ref:t,className:(0,r.A)(j.root,v),...b})}))},38127:(e,t,a)=>{a.d(t,{A:()=>s,q:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiRadio",e)}const s=(0,o.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,a)=>{a.d(t,{A:()=>m});var o=a(7552),r=a(93878),n=a(70799),s=a(83867),l=a(87625),i=a(51584),c=a(77259),d=a(76258),u=a(89456),p=a(69500);const m=o.forwardRef((function(e,t){const{actions:a,children:m,className:v,defaultValue:h,name:A,onChange:b,value:f,...g}=e,C=o.useRef(null),y=(e=>{const{classes:t,row:a,error:o}=e,r={root:["root",a&&"row",o&&"error"]};return(0,n.A)(r,l.B,t)})(e),[S,w]=(0,c.A)({controlled:f,default:h,name:"RadioGroup"});o.useImperativeHandle(a,(()=>({focus:()=>{let e=C.current.querySelector("input:not(:disabled):checked");e||(e=C.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const k=(0,i.A)(t,C),E=(0,u.A)(A),z=o.useMemo((()=>({name:E,onChange(e){w(e.target.value),b&&b(e,e.target.value)},value:S})),[E,b,w,S]);return(0,p.jsx)(d.A.Provider,{value:z,children:(0,p.jsx)(s.A,{role:"radiogroup",ref:k,className:(0,r.A)(y.root,v),...g,children:m})})}))},76258:(e,t,a)=>{a.d(t,{A:()=>o});const o=a(7552).createContext(void 0)},87625:(e,t,a)=>{a.d(t,{A:()=>s,B:()=>n});var o=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiRadioGroup",e)}const s=(0,o.A)("MuiRadioGroup",["root","row","error"])},39006:(e,t,a)=>{a.d(t,{A:()=>n});var o=a(7552),r=a(76258);function n(){return o.useContext(r.A)}}}]);
//# sourceMappingURL=3550.ca6bbf0f.chunk.js.map
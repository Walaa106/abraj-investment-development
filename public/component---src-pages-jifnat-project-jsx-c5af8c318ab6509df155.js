"use strict";(self.webpackChunkgatsby_starter=self.webpackChunkgatsby_starter||[]).push([[821],{6229:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(7294),r=n(5245),l=n(3163),a=n(3905),o=["branding","links"],s=["links"];function c(e){var t=e.branding,n=e.links,s=(0,r.Z)(e,o),c=i.useState(!1),u=c[0],h=c[1];return(0,a.BX)("header",Object.assign({py:"0"},s,{children:[(0,a.tZ)("div",{variant:"container",children:(0,a.BX)("div",{display:"flex",alignItems:"center",children:[t&&(0,a.BX)("a",{href:"/",display:"flex",alignItems:"center",_hover:{color:"primary"},children:[t.icon&&(0,a.tZ)(l.JO,{name:t.icon,size:"5",mr:"2"}),(0,a.tZ)("img",{src:"/images/logo.png",w:"100",alt:"Abraj Investment & Development"})]}),(0,a.tZ)(d,{links:n,display:"none|grid"}),(0,a.tZ)("button",{display:"flex|none",p:"2",size:"14",mr:"auto",onClick:function(){return h(!u)},children:(0,a.tZ)(l.JO,{name:"menu-alt",size:"10"})})]})}),(0,a.tZ)("div",{position:"absolute",zIndex:"1000",bg:"background",top:"24",left:"4",right:"4",px:"4",rounded:"xl",overflow:"scroll",boxShadow:"3xl",border:"1px solid",borderColor:"border",transform:"scale("+(u?1:.95)+")",visibility:u?"visible":"hidden",opacity:u?1:0,transition:"all .25s ease-in",transformOrigin:"100% 0",maxHeight:"95vh",display:"block|none",children:(0,a.tZ)(d,{links:n,py:"8"})})]}))}function d(e){var t=e.links,n=(0,r.Z)(e,s);return t.length?(0,a.tZ)("div",Object.assign({display:"grid",col:"1|repeat("+t.length+", auto)",gap:"8|10|12",mr:"auto"},n,{children:t.map((function(e,t){return(0,a.BX)("li",{sx:{display:"block",float:"left",padding:"1rem",position:"relative",transitionDuration:"0.5s",":hover > ul, :focus-within > ul ":{visibility:"visible",opacity:"1",display:"block"}},children:[(0,a.tZ)("a",{variant:"text",href:e.href,textAlign:"left|center",fontSize:"xl|md",px:"4|0","aria-haspopup":!!(e.subMenu&&e.subMenu.length>0),fontFamily:"Tajawal",children:e.title},t),e.subMenu&&e.subMenu.length>0?(0,a.tZ)("ul",{"aria-label":"submenu",sx:{listStyle:"none",m:0,p:0,boxShadow:"0 0 43px -7px rgb(170 176 197 / 45%)",background:"#fff",borderRadius:"12px",visibility:"hidden",opacity:"0",display:"none",minWidth:"12rem",position:"absolute",transition:"all 0.5s ease",marginTop:"1rem",zIndex:"99999",left:"0",":hover":{visibility:"visible",opacity:"1",display:"block"}},children:e.subMenu.map((function(e){return(0,a.tZ)("li",{sx:{clear:"both",width:"100%",padding:"1rem"},children:(0,a.BX)("a",{href:e.link,sx:{fontSize:".91rem",color:"primary"},fontFamily:"Tajawal",display:"flex",alignItems:"center",children:[(0,a.tZ)("span",{mr:"2",background:"#E9F7FF",p:"3px 4px 0",borderRadius:"50%",children:e.icon}),e.name]})},e.name)}))}):null]},t)}))})):null}var u=["name","copyright","links","iconLinks","children"];function h(e){var t=e.name,n=e.copyright,i=e.links,o=e.iconLinks,s=e.children,c=(0,r.Z)(e,u);return(0,a.tZ)("section",Object.assign({py:[8,10,12]},c,{children:(0,a.BX)("div",{variant:"container",children:[(0,a.BX)("div",{display:"flex",alignItems:"center",flexDirection:"column|row",justifyContent:"space-between",children:[(0,a.BX)("div",{maxW:"none|300",children:[t&&(0,a.tZ)("img",{src:"/images/logo.png",sx:{width:"240px"},alt:"dopamina logo"})," ",s]}),(null==i?void 0:i.length)&&(0,a.tZ)("div",{display:"grid",col:"2|repeat("+i.length+", auto)",gap:"4|8|16|20",mt:"4|4|0",w:"full|auto",children:i.map((function(e,t){return(0,a.BX)("div",{display:"flex",flexDirection:"column",alignItems:"flex-start",children:[(0,a.tZ)("a",{target:"_blank",rel:"noreferrer",href:e.href,textAlign:"center",variant:"heading.h5",fontFamily:"Tajawal",_hover:{color:"primary"},children:e.title}),e.items.map((function(e,t){return(0,a.tZ)("a",{target:"_blank",rel:"noreferrer",href:e.href,variant:"text",display:"flex",mt:"2",fontFamily:"Tajawal",children:e.title},t)}))]},t)}))})]}),n&&(0,a.BX)("div",{display:"flex",alignItems:"center",justifyContent:"space-between",borderTopWidth:1,textAlign:"center",pt:"4|5|6",mt:"4|5|6",children:[(0,a.tZ)("p",{variant:"text.sm",my:"0",children:n}),(null==o?void 0:o.length)&&(0,a.tZ)("div",{display:"grid",col:"4",gap:"4",mt:"4|0",children:o.map((function(e,t){return(0,a.BX)("a",{href:e.href,color:"text",target:"_blank",rel:"noreferrer",children:[e.name,(0,a.tZ)(l.TX,{children:e.title})]},t)}))})]})]})}))}var f=[{title:"الصفحة الرئيسية",href:"/"},{title:"عنا",href:"/about-us"},{title:"مشاريع",href:"/future-projects",subMenu:[{name:"مبنى أبراج",link:"abrja-building"},{name:"مشروع جفنات",link:"jifnat-project"},{name:"مشاريع مستقبلية",link:"future-projects"}]},{title:"اتصل بنا",href:"#"}],p=[{}],m=[{title:"الصفحة الرئيسية",href:"/home",items:[{title:"عنا",href:"/about-us"},{title:"مشاريعنا",href:"/our-projects"},{title:"تواصل معنا",href:"/contact-us"}]},{title:"شارع طوكيو 15، رام الله",href:"#",items:[{title:"info@abraj.ps",href:"#"},{title:"tel: 02-2987424",href:"#"},{title:"fax: 02-2987434",href:"#"}]}];function g(e){var t=e.children,n=e.props;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(c,{minH:"500|0",branding:{name:""},links:f,buttonLink:{title:"Subscribe",href:"#"}}),(0,a.tZ)("section",Object.assign({pb:"6|8|12"},n,{children:t})),(0,a.tZ)(h,{name:"Dopamina",links:m,iconLinks:p,copyright:"Copyright © "+(new Date).getFullYear()+" Abraj Investment & Development. All rights reserved."})]})}},9159:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});n(7294);var i=n(6229),r=n(3905);function l(){return(0,r.tZ)(i.Z,{children:(0,r.tZ)("iframe",{src:"/images/jifnat-proposal.pdf",title:"dummy",style:{width:"100%",height:"600px"}})})}},5245:function(e,t,n){function i(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=component---src-pages-jifnat-project-jsx-c5af8c318ab6509df155.js.map
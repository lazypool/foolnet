"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[476],{36086:function(un,Z,l){l.d(Z,{Z:function(){return P}});var B=l(87462),w=l(62435),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},z=i,k=l(42135),N=function(F,I){return w.createElement(k.Z,(0,B.Z)({},F,{ref:I,icon:z}))},P=w.forwardRef(N)},86476:function(un,Z,l){l.d(Z,{Z:function(){return kn}});var B=l(4942),w=l(36086),i=l(62435),z=l(12057),k=l(93967),N=l.n(k),P=l(98787),M=l(69760),F=l(36728),I=l(53124),W=l(54548),pn=l(10274),mn=l(14747),vn=l(45503),H=l(91945);const hn=n=>{const{paddingXXS:t,lineWidth:e,tagPaddingHorizontal:o,componentCls:r,calc:a}=n,s=a(o).sub(e).equal(),v=a(t).sub(e).equal();return{[r]:Object.assign(Object.assign({},(0,mn.Wf)(n)),{display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:s,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:`${(0,W.bf)(n.lineWidth)} ${n.lineType} ${n.colorBorder}`,borderRadius:n.borderRadiusSM,opacity:1,transition:`all ${n.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:n.defaultColor},[`${r}-close-icon`]:{marginInlineStart:v,fontSize:n.tagIconSize,color:n.colorTextDescription,cursor:"pointer",transition:`all ${n.motionDurationMid}`,"&:hover":{color:n.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${n.iconCls}-close, ${n.iconCls}-close:hover`]:{color:n.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${n.iconCls} + span, > span + ${n.iconCls}`]:{marginInlineStart:s}}),[`${r}-borderless`]:{borderColor:"transparent",background:n.tagBorderlessBg}}},L=n=>{const{lineWidth:t,fontSizeIcon:e,calc:o}=n,r=n.fontSizeSM;return(0,vn.TS)(n,{tagFontSize:r,tagLineHeight:(0,W.bf)(o(n.lineHeightSM).mul(r).equal()),tagIconSize:o(e).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:n.defaultBg})},D=n=>({defaultBg:new pn.C(n.colorFillQuaternary).onBackground(n.colorBgContainer).toHexString(),defaultColor:n.colorText});var V=(0,H.I$)("Tag",n=>{const t=L(n);return hn(t)},D),fn=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e},Cn=i.forwardRef((n,t)=>{const{prefixCls:e,style:o,className:r,checked:a,onChange:s,onClick:v}=n,c=fn(n,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:p}=i.useContext(I.E_),b=j=>{s==null||s(!a),v==null||v(j)},C=g("tag",e),[h,u,O]=V(C),m=N()(C,`${C}-checkable`,{[`${C}-checkable-checked`]:a},p==null?void 0:p.className,r,u,O);return h(i.createElement("span",Object.assign({},c,{ref:t,style:Object.assign(Object.assign({},o),p==null?void 0:p.style),className:m,onClick:b})))}),yn=l(98719);const bn=n=>(0,yn.Z)(n,(t,e)=>{let{textColor:o,lightBorderColor:r,lightColor:a,darkColor:s}=e;return{[`${n.componentCls}${n.componentCls}-${t}`]:{color:o,background:a,borderColor:r,"&-inverse":{color:n.colorTextLightSolid,background:s,borderColor:s},[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}});var xn=(0,H.bk)(["Tag","preset"],n=>{const t=L(n);return bn(t)},D);function On(n){return typeof n!="string"?n:n.charAt(0).toUpperCase()+n.slice(1)}const E=(n,t,e)=>{const o=On(e);return{[`${n.componentCls}${n.componentCls}-${t}`]:{color:n[`color${e}`],background:n[`color${o}Bg`],borderColor:n[`color${o}Border`],[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}};var jn=(0,H.bk)(["Tag","status"],n=>{const t=L(n);return[E(t,"success","Success"),E(t,"processing","Info"),E(t,"error","Error"),E(t,"warning","Warning")]},D),Sn=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};const $n=(n,t)=>{const{prefixCls:e,className:o,rootClassName:r,style:a,children:s,icon:v,color:c,onClose:g,closeIcon:p,closable:b,bordered:C=!0}=n,h=Sn(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:u,direction:O,tag:m}=i.useContext(I.E_),[j,x]=i.useState(!0);i.useEffect(()=>{"visible"in h&&x(h.visible)},[h.visible]);const R=(0,P.o2)(c),S=(0,P.yT)(c),A=R||S,Fn=Object.assign(Object.assign({backgroundColor:c&&!A?c:void 0},m==null?void 0:m.style),a),y=u("tag",e),[Hn,Ln,Dn]=V(y),Rn=N()(y,m==null?void 0:m.className,{[`${y}-${c}`]:A,[`${y}-has-color`]:c&&!A,[`${y}-hidden`]:!j,[`${y}-rtl`]:O==="rtl",[`${y}-borderless`]:!C},o,r,Ln,Dn),cn=$=>{$.stopPropagation(),g==null||g($),!$.defaultPrevented&&x(!1)},[,An]=(0,M.Z)(b,p!=null?p:m==null?void 0:m.closeIcon,$=>$===null?i.createElement(z.Z,{className:`${y}-close-icon`,onClick:cn}):i.createElement("span",{className:`${y}-close-icon`,onClick:cn},$),null,!1),Mn=typeof h.onClick=="function"||s&&s.type==="a",dn=v||null,Wn=dn?i.createElement(i.Fragment,null,dn,s&&i.createElement("span",null,s)):s,gn=i.createElement("span",Object.assign({},h,{ref:t,className:Rn,style:Fn}),Wn,An,R&&i.createElement(xn,{key:"preset",prefixCls:y}),S&&i.createElement(jn,{key:"status",prefixCls:y}));return Hn(Mn?i.createElement(F.Z,{component:"Tag"},gn):gn)},Q=i.forwardRef($n);Q.CheckableTag=Cn;var Tn=Q,X=l(85956),U=l(1322),wn=l(17542),f=l(30168),K=l(56590),T=l(35360),G,J,Y,q,_,nn,en,tn,on,rn,Nn=(0,K.kc)(function(n,t){var e=n.token,o=n.prefixCls,r=n.responsive,a=n.css,s=n.stylish,v=n.isDarkMode,c=n.cx,g=t.rowNum,p=t.hasLink,b="".concat(o,"-features"),C="".concat(b,"-cover"),h="".concat(b,"-description"),u="".concat(b,"-title"),O="".concat(b,"-img"),m=20,j=function(S){return a(G||(G=(0,f.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),S,S,S*(22/24))},x=a(J||(J=(0,f.Z)([`
      transition: all `," ",`;
    `])),e.motionDurationSlow,e.motionEaseInOutCirc);return{cell:a(Y||(Y=(0,f.Z)([`
        overflow: hidden;
      `]))),container:a(q||(q=(0,f.Z)([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),x,e.colorFillContent,e.colorFillQuaternary,(0,T.$n)(.5,e.colorFillContent),(0,T.$n)(.5,e.colorFillQuaternary),e.colorBorder,e.boxShadowSecondary,C,m*g,O,j(100),h,u,p?14:20),title:c(u,x,a(_||(_=(0,f.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),e.lineHeightHeading3,e.colorText)),desc:c(h,x,a(nn||(nn=(0,f.Z)([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),e.colorTextSecondary,e.colorTextDescription,v?e.colorPrimary:e.colorPrimaryBgHover)),imgContainer:c(C,x,a(en||(en=(0,f.Z)([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),e.colorFillContent,j(24),e.gradientColor1,e.gradientColor2,e.colorBgContainer,(0,T.m4)(e.gradientColor2,.3),(0,T.m4)(e.gradientColor2,.3),(0,T.m4)(e.gradientColor1,.3))),img:c(O,x,a(tn||(tn=(0,f.Z)([`
          `,`;
          color: `,`;
        `])),j(20),e.colorWhite)),link:a(on||(on=(0,f.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),x,s.resetLinkColor,e.colorTextDescription,e.colorPrimaryHover),blur:a(rn||(rn=(0,f.Z)([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),s.heroBlurBall,v?.05:.08,r.mobile)}}),d=l(86074),Pn=function(t){var e=t.image,o=t.className,r=t.title,a=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return e.startsWith("http")||a.test(e)?(0,d.jsx)("img",{className:o,src:e,alt:r}):(0,d.jsx)(U.Z,{className:o,children:e})},In=function(t){var e=t.imageType,o=t.row,r=t.column,a=t.hero,s=t.description,v=t.image,c=t.title,g=t.link,p=t.imageStyle,b=t.openExternal,C=o||7,h=Nn({rowNum:C,hasLink:!!g}),u=h.styles,O=h.theme;return(0,d.jsxs)("div",{className:u.container,style:{gridRow:"span ".concat(C),gridColumn:"span ".concat(r||1),cursor:g?"pointer":"default"},onClick:function(){g&&(b?window.open(g):X.history.push(g))},children:[(0,d.jsxs)("div",{className:u.cell,children:[v&&(0,d.jsx)(U.Z,{"image-style":e,className:u.imgContainer,style:p,children:(0,d.jsx)(Pn,{className:u.img,image:v,title:c})}),c&&(0,d.jsxs)(wn.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:u.title,children:[c,e==="soon"?(0,d.jsx)(Tn,{color:O.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),s&&(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:s},className:u.desc}),g&&(0,d.jsx)("div",{className:u.link,children:(0,d.jsxs)(X.Link,{to:g,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,d.jsx)(w.Z,{})]})})]}),a&&(0,d.jsx)("div",{className:u.blur})]})},En=In,ln,an,Zn=(0,K.kc)(function(n){var t=n.token,e=n.prefixCls,o=n.responsive,r=n.css,a=n.cx,s="".concat(e,"-features");return{container:a(s,r(ln||(ln=(0,f.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),t.contentMaxWidth,o({mobile:r(an||(an=(0,f.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function sn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,o)}return e}function Bn(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?sn(Object(e),!0).forEach(function(o){(0,B.Z)(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):sn(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var zn=function(t){var e=t.items,o=t.style,r=Zn(),a=r.styles;return e!=null&&e.length?(0,d.jsx)("div",{className:a.container,style:o,children:e.map(function(s){return(0,d.jsx)(En,Bn({},s),s.title)})}):null},kn=zn}}]);

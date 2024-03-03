"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[476],{36086:function(ge,E,l){l.d(E,{Z:function(){return P}});var B=l(87462),w=l(62435),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},z=i,k=l(42135),N=function(F,I){return w.createElement(k.Z,(0,B.Z)({},F,{ref:I,icon:z}))},P=w.forwardRef(N)},86476:function(ge,E,l){l.d(E,{Z:function(){return ze}});var B=l(4942),w=l(36086),i=l(62435),z=l(12057),k=l(93967),N=l.n(k),P=l(98787),M=l(69760),F=l(36728),I=l(53124),W=l(54548),ue=l(10274),pe=l(14747),me=l(45503),H=l(92030);const ve=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:a}=e,s=a(o).sub(n).equal(),v=a(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},(0,pe.Wf)(e)),{display:"inline-block",height:"auto",paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,W.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:v,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},L=e=>{const{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM;return(0,me.TS)(e,{tagFontSize:r,tagLineHeight:(0,W.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},D=e=>({defaultBg:new ue.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var V=(0,H.I$)("Tag",e=>{const t=L(e);return ve(t)},D),he=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},fe=i.forwardRef((e,t)=>{const{prefixCls:n,style:o,className:r,checked:a,onChange:s,onClick:v}=e,c=he(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:p}=i.useContext(I.E_),b=j=>{s==null||s(!a),v==null||v(j)},C=g("tag",n),[h,u,O]=V(C),m=N()(C,`${C}-checkable`,{[`${C}-checkable-checked`]:a},p==null?void 0:p.className,r,u,O);return h(i.createElement("span",Object.assign({},c,{ref:t,style:Object.assign(Object.assign({},o),p==null?void 0:p.style),className:m,onClick:b})))}),Ce=l(98719);const ye=e=>(0,Ce.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:a,darkColor:s}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var be=(0,H.bk)(["Tag","preset"],e=>{const t=L(e);return ye(t)},D);function xe(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const Z=(e,t,n)=>{const o=xe(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Oe=(0,H.bk)(["Tag","status"],e=>{const t=L(e);return[Z(t,"success","Success"),Z(t,"processing","Info"),Z(t,"error","Error"),Z(t,"warning","Warning")]},D),je=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Se=(e,t)=>{const{prefixCls:n,className:o,rootClassName:r,style:a,children:s,icon:v,color:c,onClose:g,closeIcon:p,closable:b,bordered:C=!0}=e,h=je(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:u,direction:O,tag:m}=i.useContext(I.E_),[j,x]=i.useState(!0);i.useEffect(()=>{"visible"in h&&x(h.visible)},[h.visible]);const R=(0,P.o2)(c),S=(0,P.yT)(c),A=R||S,ke=Object.assign(Object.assign({backgroundColor:c&&!A?c:void 0},m==null?void 0:m.style),a),y=u("tag",n),[Fe,He,Le]=V(y),De=N()(y,m==null?void 0:m.className,{[`${y}-${c}`]:A,[`${y}-has-color`]:c&&!A,[`${y}-hidden`]:!j,[`${y}-rtl`]:O==="rtl",[`${y}-borderless`]:!C},o,r,He,Le),ie=$=>{$.stopPropagation(),g==null||g($),!$.defaultPrevented&&x(!1)},[,Re]=(0,M.Z)({closable:b,closeIcon:p!=null?p:m==null?void 0:m.closeIcon,customCloseIconRender:$=>$===null?i.createElement(z.Z,{className:`${y}-close-icon`,onClick:ie}):i.createElement("span",{className:`${y}-close-icon`,onClick:ie},$),defaultCloseIcon:null,defaultClosable:!1}),Ae=typeof h.onClick=="function"||s&&s.type==="a",ce=v||null,Me=ce?i.createElement(i.Fragment,null,ce,s&&i.createElement("span",null,s)):s,de=i.createElement("span",Object.assign({},h,{ref:t,className:De,style:ke}),Me,Re,R&&i.createElement(be,{key:"preset",prefixCls:y}),S&&i.createElement(Oe,{key:"status",prefixCls:y}));return Fe(Ae?i.createElement(F.Z,{component:"Tag"},de):de)},Q=i.forwardRef(Se);Q.CheckableTag=fe;var $e=Q,U=l(85956),X=l(1322),Te=l(17542),f=l(30168),K=l(56590),T=l(35360),G,J,Y,q,_,ee,ne,te,oe,re,we=(0,K.kc)(function(e,t){var n=e.token,o=e.prefixCls,r=e.responsive,a=e.css,s=e.stylish,v=e.isDarkMode,c=e.cx,g=t.rowNum,p=t.hasLink,b="".concat(o,"-features"),C="".concat(b,"-cover"),h="".concat(b,"-description"),u="".concat(b,"-title"),O="".concat(b,"-img"),m=20,j=function(S){return a(G||(G=(0,f.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),S,S,S*(22/24))},x=a(J||(J=(0,f.Z)([`
      transition: all `," ",`;
    `])),n.motionDurationSlow,n.motionEaseInOutCirc);return{cell:a(Y||(Y=(0,f.Z)([`
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
      `])),x,n.colorFillContent,n.colorFillQuaternary,(0,T.$n)(.5,n.colorFillContent),(0,T.$n)(.5,n.colorFillQuaternary),n.colorBorder,n.boxShadowSecondary,C,m*g,O,j(100),h,u,p?14:20),title:c(u,x,a(_||(_=(0,f.Z)([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),n.lineHeightHeading3,n.colorText)),desc:c(h,x,a(ee||(ee=(0,f.Z)([`
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
        `])),n.colorTextSecondary,n.colorTextDescription,v?n.colorPrimary:n.colorPrimaryBgHover)),imgContainer:c(C,x,a(ne||(ne=(0,f.Z)([`
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
        `])),n.colorFillContent,j(24),n.gradientColor1,n.gradientColor2,n.colorBgContainer,(0,T.m4)(n.gradientColor2,.3),(0,T.m4)(n.gradientColor2,.3),(0,T.m4)(n.gradientColor1,.3))),img:c(O,x,a(te||(te=(0,f.Z)([`
          `,`;
          color: `,`;
        `])),j(20),n.colorWhite)),link:a(oe||(oe=(0,f.Z)([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),x,s.resetLinkColor,n.colorTextDescription,n.colorPrimaryHover),blur:a(re||(re=(0,f.Z)([`
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
      `])),s.heroBlurBall,v?.05:.08,r.mobile)}}),d=l(86074),Ne=function(t){var n=t.image,o=t.className,r=t.title,a=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return n.startsWith("http")||a.test(n)?(0,d.jsx)("img",{className:o,src:n,alt:r}):(0,d.jsx)(X.Z,{className:o,children:n})},Pe=function(t){var n=t.imageType,o=t.row,r=t.column,a=t.hero,s=t.description,v=t.image,c=t.title,g=t.link,p=t.imageStyle,b=t.openExternal,C=o||7,h=we({rowNum:C,hasLink:!!g}),u=h.styles,O=h.theme;return(0,d.jsxs)("div",{className:u.container,style:{gridRow:"span ".concat(C),gridColumn:"span ".concat(r||1),cursor:g?"pointer":"default"},onClick:function(){g&&(b?window.open(g):U.history.push(g))},children:[(0,d.jsxs)("div",{className:u.cell,children:[v&&(0,d.jsx)(X.Z,{"image-style":n,className:u.imgContainer,style:p,children:(0,d.jsx)(Ne,{className:u.img,image:v,title:c})}),c&&(0,d.jsxs)(Te.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:u.title,children:[c,n==="soon"?(0,d.jsx)($e,{color:O.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),s&&(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:s},className:u.desc}),g&&(0,d.jsx)("div",{className:u.link,children:(0,d.jsxs)(U.Link,{to:g,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,d.jsx)(w.Z,{})]})})]}),a&&(0,d.jsx)("div",{className:u.blur})]})},Ie=Pe,le,ae,Ze=(0,K.kc)(function(e){var t=e.token,n=e.prefixCls,o=e.responsive,r=e.css,a=e.cx,s="".concat(n,"-features");return{container:a(s,r(le||(le=(0,f.Z)([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),t.contentMaxWidth,o({mobile:r(ae||(ae=(0,f.Z)([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}});function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?se(Object(n),!0).forEach(function(o){(0,B.Z)(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Be=function(t){var n=t.items,o=t.style,r=Ze(),a=r.styles;return n!=null&&n.length?(0,d.jsx)("div",{className:a.container,style:o,children:n.map(function(s){return(0,d.jsx)(Ie,Ee({},s),s.title)})}):null},ze=Be}}]);

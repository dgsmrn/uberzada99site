(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{166:e=>{e.exports={hero:"page_hero__XSXTq",container:"page_container__8hAa2",form:"page_form__SCKWK",form__label:"page_form__label__xQ39s",form__small:"page_form__small__u7YD8",form__button:"page_form__button__lB_Td",selectTypeForm:"page_selectTypeForm__YKQxi",active:"page_active__tR_Wc"}},649:(e,r,a)=>{"use strict";a.d(r,{A:()=>s});var t=a(5155),o=a(8336),n=a.n(o),l=a(1394);function s(e){let{label:r,description:a,typeStyle:o,value:s,onInputChange:i,id:c}=e,d=r.replace(" ","").toLowerCase();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:d,className:n().form__label,children:r}),(0,t.jsx)("small",{className:n().form__small,children:a}),(0,t.jsx)("input",{type:"text",name:d,id:d,className:n()[o],onInput:e=>{let r=e.target.value,a=r.replace(/[^0-9]/g,"");if(0==r.length||0==a.length||"00"===a)return i(c,"");i(c,(0,l.A)(a,o))},value:s,required:!0})]})}},1394:(e,r,a)=>{"use strict";function t(e,r){var a;let t=String(Number(null===(a=e.match(/\d/g))||void 0===a?void 0:a.join("")));if("inteiro"==r)return t;let n=(t=t.padStart(3,"0")).substring(0,t.length-2)+","+t.substring(t.length-2),l=n;return(n.length>=7&&(l=o(l,6)),n.length>=10&&(l=o(l,10)),n.length>=13&&(l=o(l,14)),"percentual"==r)?"% ".concat(l):"fracao"==r?l:"dinheiro"==r?"R$ "+l:""}function o(e,r){return e.substring(0,e.length-r)+"."+e.substring(e.length-r)}a.d(r,{A:()=>t})},1544:e=>{e.exports={resultado:"page_resultado__BHB7w","fade-in":"page_fade-in__PPEpZ",show:"page_show__KrkpZ"}},2862:e=>{e.exports={primary:"style_primary__OFutt",secondary:"style_secondary__L0RSF",tertiary:"style_tertiary__0QyuM"}},4274:(e,r,a)=>{Promise.resolve().then(a.bind(a,4427))},4427:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>h});var t=a(5155),o=a(2115),n=a(166),l=a.n(n),s=a(649),i=a(1394);let c=[{id:1,label:"Valor desejado",description:"Qual lucro l\xedquido que voc\xea deseja? descontando o combust\xedvel.",typeStyle:"dinheiro"},{id:2,label:"Dias Trabalhados",description:"Quantos dias voc\xea ir\xe1 trabalhar?",typeStyle:"inteiro"},{id:3,label:"Valor Combust\xedvel",description:"Quanto voc\xea est\xe1 pagando no combust\xedvel atualmente?",typeStyle:"dinheiro"},{id:4,label:"Consumo (Km/L)",description:"Seu carro faz quantos Km por litro?",typeStyle:"fracao"},{id:5,label:"Ganho M\xednimo por Km",description:"Qual o valor m\xednimo por Km que voc\xea aceita nas corridas?",typeStyle:"dinheiro"},{id:6,label:"Ganho por hora",description:"Quanto voc\xea quer ganhar por hora trabalhada?",typeStyle:"dinheiro"}];var d=a(9586),u=a(1544),m=a.n(u);function p(e){let{result:r,show:a}=e;return(0,t.jsxs)("section",{className:"".concat(m().resultado," ").concat(m()["fade-in"]," ").concat(a&&m().show),id:"resultado",children:[(0,t.jsxs)("p",{children:["Para um lucro l\xedquido de ",(0,t.jsx)("span",{children:r.valorDesejado}),", j\xe1 descontando o combust\xedvel."]}),(0,t.jsxs)("p",{children:["Voc\xea dever\xe1 finalizar o dia com o valor de ",(0,t.jsx)("span",{children:r.valorDiaTela}),"."]}),(0,t.jsxs)("p",{children:["Percorrer\xe1 aproximadamente ",(0,t.jsxs)("span",{children:[r.kmRodado," Km"]}),"."]}),(0,t.jsxs)("p",{children:["Aceitando corridas com o valor m\xednimo por Km de ",(0,t.jsx)("span",{children:r.ganhoMinimoKm})]}),(0,t.jsxs)("p",{children:["Desejando ganhar por hora ",(0,t.jsx)("span",{children:r.ganhoHora})]}),(0,t.jsxs)("p",{children:["Demorar\xe1 aproximadamente ",(0,t.jsxs)("span",{children:[r.tempoH," hs"]})," para bater o valor desejado."]})]})}var _=a(6593);function h(){let[e,r]=(0,o.useState)(null),[a,n]=(0,o.useState)(()=>{{let e=localStorage.getItem("simpleInputs");return e?JSON.parse(e):{1:"",2:"",3:"",4:"",5:"",6:""}}}),[u,m]=(0,o.useState)(!1);(0,o.useEffect)(()=>{localStorage.getItem("simpleInputs")!==JSON.stringify(a)&&localStorage.setItem("simpleInputs",JSON.stringify(a))},[a]);let h=(e,r)=>{n(a=>({...a,[e]:r}))};return(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{className:l().hero,children:(0,t.jsx)(d.A,{level:"1",type:"primary",children:"Realize um c\xe1lculo simples, apenas descontando o valor do combust\xedvel."})}),(0,t.jsxs)("section",{className:l().container,children:[(0,t.jsxs)("form",{className:l().form,onSubmit:e=>{e.preventDefault();let t=(0,_.qD)(a["1"]),o=Number(a["2"]),n=(0,_.qD)(a["3"]),l=(0,_.qD)(a["4"]),s=(0,_.qD)(a["5"]),c=(0,_.qD)(a["6"]);if(t&&o&&n&&l&&s&&c){let e=t/o,a=(e/(s-n/l)).toFixed(2),d=(e+Number(a)/l*n).toFixed(2),u=Number(d)/c;r({valorDesejado:(0,i.A)(t.toFixed(2),"dinheiro"),valorDiaTela:(0,i.A)(d,"dinheiro"),kmRodado:(0,i.A)(a,"fracao"),ganhoMinimoKm:(0,i.A)(s.toFixed(2),"dinheiro"),ganhoHora:(0,i.A)(c.toFixed(2),"dinheiro"),tempoH:(0,_.fU)(u)}),m(!1),setTimeout(()=>{m(!0)},500)}},children:[c.map(e=>(0,t.jsx)(s.A,{id:e.id,label:e.label,description:e.description,typeStyle:e.typeStyle,value:a[e.id],onInputChange:h},e.id)),(0,t.jsx)("button",{className:l().form__button,children:"Bora rodar!"})]}),null!=e&&(0,t.jsx)(p,{result:e,show:u})]})]})}},6593:(e,r,a)=>{"use strict";function t(e,r,a,t,o){let n=e/r,l=a/t,s=o/r;return{calculoKm:n,calculoCombustivel:l,calculoViagemMinima:l+s+n,calculoLucro:s}}function o(e,r,a,t,o,n,l,s,i,c,d,u,m,p){let _=r/o,h=a/100*e/12/o,f=t/100*e/12/o,g=n/o,b=p/12/o,x=l/s,v=i/c,y=d/u,j=m/o,S=j+_+h+f+g+x+v+y+b;return{calculoKm:_,calculoIpva:h,calculoDepreciacao:f,calculoSeguro:g,calculoPneu:x,calculoTrocaOleo:v,calculoCombustivel:y,calculoViagemMinima:S,calculoLucro:j,calculoManutencao:b}}function n(e,r,a,t,o,n,l,s,i,c,d,u,m){let p=r/100*e/12/t,_=a/100*e/12/t,h=o/t,f=m/12/t,g=n/l,b=s/i,x=c/d,v=u/t,y=v+p+_+h+g+b+x+f;return{calculoIpva:p,calculoDepreciacao:_,calculoSeguro:h,calculoPneu:g,calculoTrocaOleo:b,calculoCombustivel:x,calculoViagemMinima:y,calculoLucro:v,calculoManutencao:f}}function l(e){if(void 0==e)return 0;let r=e.match(/\d/g);return r?Number(r.join(""))/100:0}function s(e){let r=Math.floor(e),a=Math.round((e-r)*60);return(r<10?"0"+r:r)+":"+(a<10?"0"+a:a)}a.d(r,{Tt:()=>n,fU:()=>s,g0:()=>o,qD:()=>l,zM:()=>t})},8336:e=>{e.exports={form__label:"style_form__label__sJQyz",form__small:"style_form__small__f5GZl"}},9586:(e,r,a)=>{"use strict";a.d(r,{A:()=>l});var t=a(5155),o=a(2862),n=a.n(o);function l(e){let{type:r,level:a,children:o}=e;return(0,t.jsx)("h".concat(a),{className:n()[r],children:o})}}},e=>{var r=r=>e(e.s=r);e.O(0,[320,441,684,358],()=>r(4274)),_N_E=e.O()}]);
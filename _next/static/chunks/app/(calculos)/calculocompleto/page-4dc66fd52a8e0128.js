(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{3786:(e,o,a)=>{Promise.resolve().then(a.bind(a,3071))},3071:(e,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>m});var l=a(5155),i=a(166),r=a.n(i);let t=[{id:1,label:"Valor do Aluguel (R$)",description:"Qual o valor mensal do aluguel?",typeStyle:"dinheiro",typeForm:["Alugado"]},{id:2,label:"Km Rodados (Km)",description:"Quantos Km pretende rodar no m\xeas?",typeStyle:"fracao",typeForm:["Alugado","Financiado","Quitado"]},{id:3,label:"Valor Combust\xedvel (R$)",description:"Quanto voc\xea est\xe1 pagando no combust\xedvel atualmente?",typeStyle:"dinheiro",typeForm:["Alugado","Financiado","Quitado"]},{id:4,label:"Consumo (Km/L)",description:"Seu carro faz quantos Km por litro?",typeStyle:"fracao",typeForm:["Alugado","Financiado","Quitado"]},{id:5,label:"Valor Mensal Desejado (R$)",description:"Qual lucro l\xedquido mensal que voc\xea deseja?",typeStyle:"dinheiro",typeForm:["Alugado","Financiado","Quitado"]},{id:6,label:"Valor do Autom\xf3vel (R$)",description:"Qual o valor venal do autom\xf3vel?",typeStyle:"dinheiro",typeForm:["Financiado","Quitado"]},{id:7,label:"Valor da Parcela (R$)",description:"Qual o valor da parcela?",typeStyle:"dinheiro",typeForm:["Financiado"]},{id:8,label:"Valor do IPVA (R$)",description:"Qual a al\xedquota do seu estado? (%)",typeStyle:"dinheiro",typeForm:["Financiado","Quitado"]},{id:9,label:"Deprecia\xe7\xe3o do Autom\xf3vel (R$)",description:"Qual a deprecia\xe7\xe3o anual do ve\xedculo?",typeStyle:"dinheiro",typeForm:["Financiado","Quitado"]},{id:10,label:"Valor do Seguro (R$)",description:"Qual o valor mensal do seguro?",typeStyle:"dinheiro",typeForm:["Financiado","Quitado"]},{id:11,label:"Custo dos Pneus (R$)",description:"Qual o valor do jogo de pneus? (4pneus)",typeStyle:"dinheiro",typeForm:["Financiado","Quitado"]},{id:12,label:"Vida \xdatil dos Pneus (Km)",description:"Quantos Km suporta a rodagem dos pneus?",typeStyle:"fracao",typeForm:["Financiado","Quitado"]},{id:13,label:"Custo do \xd3leo (R$)",description:"Qual o valor da troca de \xd3leo?",typeStyle:"dinheiro",typeForm:["Financiado","Quitado"]},{id:14,label:"Frequ\xeancia da Troca de \xd3leo (Km)",description:"Quantos Km ocorre a troca de \xf3leo?",typeStyle:"fracao",typeForm:["Financiado","Quitado"]}];var n=a(1812),c=a(2115),s=a(7711),d=a(1427),u=a(5280);function m(){let[e,o]=(0,c.useState)(null),[a,i]=(0,c.useState)(()=>localStorage.getItem("typeform")||"Alugado"),m=e=>{let a=e.currentTarget.textContent;o(null),i(a)},[p,h]=(0,c.useState)(()=>{{let e=localStorage.getItem("completeInputs");return e?JSON.parse(e):{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:"",11:"",12:"",13:"",14:""}}}),x=(e,o)=>{h(a=>({...a,[e]:o}))},[_,g]=(0,c.useState)(!1);(0,c.useEffect)(()=>{localStorage.getItem("completeInputs")!==JSON.stringify(p)&&localStorage.setItem("completeInputs",JSON.stringify(p))},[p]),(0,c.useEffect)(()=>{localStorage.getItem("typeform")!==a&&localStorage.setItem("typeform",a)},[a]);let j=null!=e&&"Alugado"==a,y=null!=e&&"Financiado"==a,f=null!=e&&"Quitado"==a;return(0,l.jsxs)("main",{children:[(0,l.jsx)("section",{className:r().hero,children:(0,l.jsx)(u.A,{level:"1",type:"primary",children:"Realize um c\xe1lculo completo, descontando v\xe1rios custos."})}),(0,l.jsxs)("section",{className:r().container,children:[(0,l.jsxs)("div",{className:r().selectTypeForm,children:[(0,l.jsx)("h3",{children:"Selecione a situa\xe7\xe3o atual do seu ve\xedculo:"}),(0,l.jsx)("ul",{children:["Alugado","Financiado","Quitado"].map((e,o)=>(0,l.jsx)("li",{onClick:m,className:"".concat(a==e&&r().active),children:e},o))})]}),(0,l.jsxs)("form",{className:r().form,onSubmit:e=>{e.preventDefault();let l=(0,s.q)(p["1"]),i=(0,s.q)(p["2"]),r=(0,s.q)(p["3"]),t=(0,s.q)(p["4"]),n=(0,s.q)(p["5"]),c=(0,s.q)(p["6"]),u=(0,s.q)(p["7"]),m=(0,s.q)(p["8"]),h=(0,s.q)(p["9"]),x=(0,s.q)(p["10"]),_=(0,s.q)(p["11"]),j=(0,s.q)(p["12"]),y=(0,s.q)(p["13"]),f=(0,s.q)(p["14"]);if("Alugado"===a){if(l&&i&&r&&t&&n){let{calculoKm:e,calculoCombustivel:a,calculoViagemMinima:c,calculoLucro:s}=function(e,o,a,l,i){let r=e/o,t=a/l,n=i/o;return{calculoKm:r,calculoCombustivel:t,calculoViagemMinima:t+n+r,calculoLucro:n}}(l,i,r,t,n);o({calculoKm:(0,d.A)(e.toFixed(2),"dinheiro"),calculoCombustivel:(0,d.A)(a.toFixed(2),"dinheiro"),calculoViagemMinima:(0,d.A)(c.toFixed(2),"dinheiro"),valorMensalDesejado:(0,d.A)(n.toFixed(2),"dinheiro"),kmRodado:(0,d.A)(i.toFixed(2),"fracao"),calculoLucro:(0,d.A)(s.toFixed(2),"dinheiro")}),g(!1),setTimeout(()=>{g(!0)},500)}}else if("Financiado"===a){if(c&&u&&m&&h&&i&&x&&_&&j&&y&&f&&r&&t&&n){let{calculoKm:e,calculoIpva:a,calculoDepreciacao:l,calculoSeguro:s,calculoPneu:p,calculoTrocaOleo:v,calculoCombustivel:F,calculoViagemMinima:A,calculoLucro:b}=function(e,o,a,l,i,r,t,n,c,s,d,u,m){let p=o/i,h=a/100*e/12/i,x=l/100*e/12/i,_=r/i,g=t/n,j=c/s,y=d/u,f=m/i;return{calculoKm:p,calculoIpva:h,calculoDepreciacao:x,calculoSeguro:_,calculoPneu:g,calculoTrocaOleo:j,calculoCombustivel:y,calculoViagemMinima:f+p+h+x+_+g+j+y,calculoLucro:f}}(c,u,m,h,i,x,_,j,y,f,r,t,n);o({calculoKm:(0,d.A)(e.toFixed(2),"dinheiro"),calculoIpva:(0,d.A)(a.toFixed(2),"dinheiro"),calculoDepreciacao:(0,d.A)(l.toFixed(2),"dinheiro"),calculoSeguro:(0,d.A)(s.toFixed(2),"dinheiro"),calculoPneu:(0,d.A)(p.toFixed(2),"dinheiro"),calculoTrocaOleo:(0,d.A)(v.toFixed(2),"dinheiro"),calculoCombustivel:(0,d.A)(F.toFixed(2),"dinheiro"),calculoViagemMinima:(0,d.A)(A.toFixed(2),"dinheiro"),kmRodado:(0,d.A)(i.toFixed(2),"fracao"),calculoLucro:(0,d.A)(b.toFixed(2),"dinheiro")}),g(!1),setTimeout(()=>{g(!0)},500)}}else if("Quitado"===a&&c&&m&&h&&i&&x&&_&&j&&y&&f&&r&&t&&n){let{calculoIpva:e,calculoDepreciacao:a,calculoSeguro:l,calculoPneu:s,calculoTrocaOleo:u,calculoCombustivel:p,calculoViagemMinima:v,calculoLucro:F}=function(e,o,a,l,i,r,t,n,c,s,d,u){let m=o/100*e/12/l,p=a/100*e/12/l,h=i/l,x=r/t,_=n/c,g=s/d,j=u/l;return{calculoIpva:m,calculoDepreciacao:p,calculoSeguro:h,calculoPneu:x,calculoTrocaOleo:_,calculoCombustivel:g,calculoViagemMinima:j+m+p+h+x+_+g,calculoLucro:j}}(c,m,h,i,x,_,j,y,f,r,t,n);o({calculoIpva:(0,d.A)(e.toFixed(2),"dinheiro"),calculoDepreciacao:(0,d.A)(a.toFixed(2),"dinheiro"),calculoSeguro:(0,d.A)(l.toFixed(2),"dinheiro"),calculoPneu:(0,d.A)(s.toFixed(2),"dinheiro"),calculoTrocaOleo:(0,d.A)(u.toFixed(2),"dinheiro"),calculoCombustivel:(0,d.A)(p.toFixed(2),"dinheiro"),calculoViagemMinima:(0,d.A)(v.toFixed(2),"dinheiro"),kmRodado:(0,d.A)(i.toFixed(2),"fracao"),calculoLucro:(0,d.A)(F.toFixed(2),"dinheiro")}),g(!1),setTimeout(()=>{g(!0)},500)}},children:[t.filter(e=>{var o;return null===(o=e.typeForm)||void 0===o?void 0:o.includes(a)}).map(e=>(0,l.jsx)(n.A,{id:e.id,label:e.label,description:e.description,typeStyle:e.typeStyle,value:p[e.id],onInputChange:x},e.id)),(0,l.jsx)("button",{className:r().form__button,children:"Bora rodar!"})]}),j&&(0,l.jsxs)("section",{className:"".concat(r().resultado," ").concat(r()["fade-in"]," ").concat(_&&r().show),id:"resultado",children:[(0,l.jsxs)("p",{children:["Custo Km Rodado: ",(0,l.jsx)("span",{children:e.calculoKm})]}),(0,l.jsxs)("p",{children:["Custo Combust\xedvel por Km: ",(0,l.jsx)("span",{children:e.calculoCombustivel})]}),(0,l.jsxs)("p",{children:["Custo M\xednimo por Km: ",(0,l.jsx)("span",{children:e.calculoViagemMinima})]}),(0,l.jsxs)("p",{children:["Para obter um lucro l\xedquido de ",(0,l.jsx)("span",{children:e.valorMensalDesejado})]}),(0,l.jsxs)("p",{children:["Rodando ",(0,l.jsx)("span",{children:e.kmRodado})," Km no m\xeas, voc\xea deve aceitar viagens com tarifas de no m\xednimo, ",(0,l.jsx)("span",{children:e.calculoViagemMinima})," por Km."]}),(0,l.jsxs)("p",{children:["Aceitando valores superiores a este, seu lucro por Km ser\xe1 de ",(0,l.jsx)("span",{children:e.calculoLucro})]})]}),y&&(0,l.jsxs)("section",{className:"".concat(r().resultado," ").concat(r()["fade-in"]," ").concat(_&&r().show),id:"resultado",children:[(0,l.jsxs)("p",{children:["Custo do Km Rodado: ",(0,l.jsx)("span",{children:e.calculoKm})]}),(0,l.jsxs)("p",{children:["Custo IPVA por KM: ",(0,l.jsx)("span",{children:e.calculoIpva})]}),(0,l.jsxs)("p",{children:["Custo Deprecia\xe7\xe3o por Km: ",(0,l.jsx)("span",{children:e.calculoDepreciacao})]}),(0,l.jsxs)("p",{children:["Custo do Seguro por KM: ",(0,l.jsx)("span",{children:e.calculoSeguro})]}),(0,l.jsxs)("p",{children:["Custo Pneu por Km: ",(0,l.jsx)("span",{children:e.calculoPneu})]}),(0,l.jsxs)("p",{children:["Custo Troca de \xd3leo por Km: ",(0,l.jsx)("span",{children:e.calculoTrocaOleo})," "]}),(0,l.jsxs)("p",{children:["Custo Combust\xedvel por Km: ",(0,l.jsx)("span",{children:e.calculoCombustivel})]}),(0,l.jsxs)("p",{children:["Custo m\xednimo por Km: ",(0,l.jsx)("span",{children:e.calculoViagemMinima})]}),(0,l.jsxs)("p",{children:["Rodando ",(0,l.jsx)("span",{children:e.kmRodado})," Km no m\xeas voc\xea deve aceitar viagens com tarifas de no m\xednimo, ",(0,l.jsx)("span",{children:e.calculoViagemMinima})," por Km."]}),(0,l.jsxs)("p",{children:["Aceitando valores superiores a este, seu lucro por Km ser\xe1 de ",(0,l.jsx)("span",{children:e.calculoLucro})]})]}),f&&(0,l.jsxs)("section",{className:"".concat(r().resultado," ").concat(r()["fade-in"]," ").concat(_&&r().show),id:"resultado",children:[(0,l.jsxs)("p",{children:["Custo IPVA por KM: ",(0,l.jsx)("span",{children:e.calculoIpva})]}),(0,l.jsxs)("p",{children:["Custo Deprecia\xe7\xe3o por Km: ",(0,l.jsx)("span",{children:e.calculoDepreciacao})]}),(0,l.jsxs)("p",{children:["Custo do Seguro por KM: ",(0,l.jsx)("span",{children:e.calculoSeguro})]}),(0,l.jsxs)("p",{children:["Custo Pneu por Km: ",(0,l.jsx)("span",{children:e.calculoPneu})]}),(0,l.jsxs)("p",{children:["Custo Troca de \xd3leo por Km: ",(0,l.jsx)("span",{children:e.calculoTrocaOleo})," "]}),(0,l.jsxs)("p",{children:["Custo Combust\xedvel por Km: ",(0,l.jsx)("span",{children:e.calculoCombustivel})]}),(0,l.jsxs)("p",{children:["Custo m\xednimo por Km: ",(0,l.jsx)("span",{children:e.calculoViagemMinima})]}),(0,l.jsxs)("p",{children:["Rodando ",(0,l.jsx)("span",{children:e.kmRodado})," Km no m\xeas voc\xea deve aceitar viagens com tarifas de no m\xednimo, ",(0,l.jsx)("span",{children:e.calculoViagemMinima})," por Km."]}),(0,l.jsxs)("p",{children:["Aceitando valores superiores a este, seu lucro por Km ser\xe1 de ",(0,l.jsx)("span",{children:e.calculoLucro})]})]})]})]})}},7711:(e,o,a)=>{"use strict";function l(e){let o=e.match(/\d/g);return o?Number(o.join(""))/100:0}function i(e){let o=Math.floor(e),a=Math.round((e-o)*60);return(o<10?"0"+o:o)+":"+(a<10?"0"+a:a)}a.d(o,{f:()=>i,q:()=>l})},1812:(e,o,a)=>{"use strict";a.d(o,{A:()=>n});var l=a(5155),i=a(8336),r=a.n(i),t=a(1427);function n(e){let{label:o,description:a,typeStyle:i,value:n,onInputChange:c,id:s}=e,d=o.replace(" ","").toLowerCase();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{htmlFor:d,className:r().form__label,children:o}),(0,l.jsx)("small",{className:r().form__small,children:a}),(0,l.jsx)("input",{type:"text",name:d,id:d,className:r()[i],onInput:e=>{let o=e.target.value,a=o.replace(/[^0-9]/g,"");if(0==o.length||0==a.length||"00"===a)return c(s,"");c(s,(0,t.A)(a,i))},value:n,required:!0})]})}},1427:(e,o,a)=>{"use strict";function l(e,o){var a;let l=String(Number(null===(a=e.match(/\d/g))||void 0===a?void 0:a.join("")));if("inteiro"==o)return l;let r=(l=l.padStart(3,"0")).substring(0,l.length-2)+","+l.substring(l.length-2),t=r;return(r.length>=7&&(t=i(t,6)),r.length>=10&&(t=i(t,10)),r.length>=13&&(t=i(t,14)),"fracao"==o)?t:"dinheiro"==o?"R$ "+t:""}function i(e,o){return e.substring(0,e.length-o)+"."+e.substring(e.length-o)}a.d(o,{A:()=>l})},5280:(e,o,a)=>{"use strict";a.d(o,{A:()=>t});var l=a(5155),i=a(481),r=a.n(i);function t(e){let{type:o,level:a,children:i}=e;return(0,l.jsx)("h".concat(a),{className:r()[o],children:i})}},166:e=>{e.exports={hero:"page_hero__XSXTq",container:"page_container__8hAa2",form:"page_form__SCKWK",form__label:"page_form__label__xQ39s",form__small:"page_form__small__u7YD8",form__button:"page_form__button__lB_Td",resultado:"page_resultado__O_cQE","fade-in":"page_fade-in__28z06",show:"page_show__xBRzw",selectTypeForm:"page_selectTypeForm__YKQxi",active:"page_active__tR_Wc"}},8336:e=>{e.exports={form__label:"style_form__label__sJQyz",form__small:"style_form__small__f5GZl"}},481:e=>{e.exports={primary:"style_primary__OFutt",secondary:"style_secondary__L0RSF",tertiary:"style_tertiary__0QyuM"}}},e=>{var o=o=>e(e.s=o);e.O(0,[240,441,517,358],()=>o(3786)),_N_E=e.O()}]);
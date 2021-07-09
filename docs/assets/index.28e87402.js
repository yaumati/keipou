import{o as e,c as o,r as n,a as t,b as s,t as r,F as l,d as a,e as c,f as d,g as i,h as m,i as p,j as u}from"./vendor.1a7cbfd7.js";const g={mounted(){console.log("main mounted()")},unmounted(){console.log("main unmounted()")}};g.render=function(t,s,r,l,a,c){const d=n("router-view");return e(),o(d)};const h={mounted(){console.log("home mounted()")},unmounted(){console.log("home unmounted()")}},f={class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},w=t("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Home ",-1);h.render=function(n,t,s,r,l,a){return e(),o("div",f,[w])};const x={props:{grid:Object}},v={key:0},b=t("svg",{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},null,-1),y={key:1},k={viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},A=t("circle",{cx:"64",cy:"64",r:"56.0",fill:"none",stroke:"black","stroke-width":"4"},null,-1),P={x:"24",y:"92","font-size":"80","font-weight":"bold",fill:"black"},B={key:2},C={viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},R=t("circle",{cx:"64",cy:"64",r:"58.0",fill:"black"},null,-1),N={x:"24",y:"92","font-size":"78","font-weight":"bold",fill:"white"};x.render=function(n,a,c,d,i,m){return e(),o(l,null,["none"===c.grid.side?(e(),o("div",v,[b])):s("",!0),"red"===c.grid.side?(e(),o("div",y,[(e(),o("svg",k,[A,t("text",P,r(c.grid.name),1)]))])):"black"===c.grid.side?(e(),o("div",B,[(e(),o("svg",C,[R,t("text",N,r(c.grid.name),1)]))])):s("",!0)],64)};const K={components:{Piece:x},props:{fen:{type:String,default:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1"}},mounted(){console.log("board mounted()")},unmounted(){console.log("board unmounted()")},setup(e){const o={r:"車",n:"馬",h:"馬",b:"象",e:"象",a:"士",k:"將",c:"砲",p:"卒",R:"車",N:"馬",H:"馬",B:"相",E:"相",A:"仕",K:"帥",C:"炮",P:"兵"};return{grids:function(e){let n=e.split(" "),t=[];if(n.length>0){let e=n[0].split("/");if(10===e.length)for(let n of e){let e=n.split("");for(let n of e)if(n.match(/\d/))for(let e=0;e<Number(n);e++)t.push({name:".",side:"none"});else{let e="none";n===n.toUpperCase()&&(e="red"),n===n.toLowerCase()&&(e="black"),t.push({name:o[n],side:e})}}}return t}(e.fen)}}},S={class:"grid grid-cols-9 mx-auto m-5 w-72 h-80 bg-gray-200"},D={class:"w-8"};K.render=function(s,r,c,d,i,m){const p=n("Piece");return e(),o("div",S,[(e(!0),o(l,null,a(d.grids,(n=>(e(),o("div",null,[t("div",D,[t(p,{grid:n},null,8,["grid"])])])))),256))])};const j={components:{Board:K}},z={class:""};j.render=function(s,r,l,a,c,d){const i=n("Board");return e(),o("div",z,[t(i,{fen:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1",class:"mt-8"}),t(i,{fen:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1",class:"mt-8"}),t(i,{fen:"2baka3/3P3N1/bN7/7nc/9/4C1P2/P5n1P/B3R3B/4Apr2/2RAK3c r - - 0 1",class:"mt-8"}),t(i,{fen:"4k4/9/3aP3b/p8/9/6n2/2P3p2/4R4/3p1p3/4K4 r - - 0 1",class:"mt-8"}),t(i,{fen:"C3kab2/4a4/n3c1n2/p2Np1p2/1R4P2/1R7/P3P4/4B4/2Cp1p3/c1rAK1N2 r - - 0 1",class:"mt-8"})])};const I={mounted(){console.log("one mounted()")},unmounted(){console.log("one unmounted()")}},F={class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},G=t("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," 1 ",-1);I.render=function(n,t,s,r,l,a){return e(),o("div",F,[G])};const H={mounted(){console.log("two mounted()")},unmounted(){console.log("two unmounted()")}},Z={class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},E=t("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," 2 ",-1);H.render=function(n,t,s,r,l,a){return e(),o("div",Z,[E])};const O={components:{FolderIcon:c,DocumentIcon:d},data:()=>({data:{}}),mounted(){console.log("pous mounted()"),fetch("https://api.github.com/repos/yaumati/keipou/contents/public/棋譜").then((e=>e.json())).then((e=>{this.data=e,console.log(e)})).catch((e=>console.error(e)))},unmounted(){console.log("pous unmounted()")}},L=t("div",{class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"棋譜")],-1),M={class:"py-2 px-4 sm:px-6"},T={class:"flex divide-x divide-gray-200"},U={class:"w-0 flex-1 flex"},V={href:"/",class:"relative w-0 flex-1 inline-flex py-2 text-sm text-gray-700 font-medium border border-transparent"},q={class:"ml-2"};O.render=function(s,c,d,i,m,p){const u=n("FolderIcon"),g=n("DocumentIcon");return e(),o(l,null,[L,t("ul",M,[(e(!0),o(l,null,a(m.data,(n=>(e(),o("li",null,[t("div",T,[t("div",U,[t("a",V,["dir"===n.type?(e(),o(u,{key:0,class:"w-5 h-5 text-gray-600","aria-hidden":"true"})):(e(),o(g,{key:1,class:"w-5 h-5 text-gray-600","aria-hidden":"true"})),t("span",q,r(n.name),1)])])])])))),256))])],64)};const J={},Q={class:"min-h-screen bg-gray-50"},W=i('<div class="pt-6 pb-6"><div class="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-7xl md:px-8"><div class="grid grid-cols-1 gap-4 items-start md:grid-cols-3 md:gap-8"><div class="grid grid-cols-1 gap-4 md:col-span-2"><section aria-labelledby="section-1-title"><h2 class="sr-only" id="section-1-title">Section title</h2><div class="rounded-lg bg-white overflow-hidden shadow"><div class="p-6"> 12345 </div></div></section></div><div class="grid grid-cols-1 gap-4"><section aria-labelledby="section-2-title"><h2 class="sr-only" id="section-2-title">Section title</h2><div class="rounded-lg bg-white overflow-hidden shadow"><div class="p-6"> ABCDE </div></div></section></div></div></div></div>',1);J.render=function(n,t){return e(),o("div",Q,[W])};const X={mounted(){console.log("svgs mounted()")},unmounted(){console.log("svgs unmounted()")}},Y=t("div",{class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},[t("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"SVGs")],-1),$=t("div",null,[t("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"32",cy:"32",r:"30.0",fill:"none",stroke:"url(#gradient)","stroke-width":"2",filter:"url(#shadow)"}),t("defs",null,[t("linearGradient",{id:"gradient"},[t("stop",{offset:"0%","stop-color":"red"}),t("stop",{offset:"100%","stop-color":"orange"})]),t("filter",{id:"shadow"},[t("feDropShadow",{dx:"0.3",dy:"0.3",stdDeviation:"0.35"})])]),t("path",{d:"M35.4,39.69c-.22,5.57-.49,9.83-.76,12.8a15.84,15.84,0,0,1-.48,1.95c-.22.27-1.25-.22-3-1.46-4.64-1.35-7.51-2.92-8.42-4.86-.87-.87-.81-1.08.16-.76,3.89,2,6.48,2.49,7.67,1.62.64-.81,1-3.72,1.08-8.8a2.35,2.35,0,0,0-1.95.22c-4.43,2.37-6.8,4-7.13,5A3.26,3.26,0,0,1,20,47.25a15.46,15.46,0,0,1-9.4.81c-.81-.21-.92-.48-.22-.81C12.82,46.12,15.69,45,19,43.8c3.73-1.19,7.78-4,12.32-8.43-.11-.54-.22-1-.27-1.45a27.66,27.66,0,0,0-3.51,1.89c-1.89,1.13-3.14,1.94-3.78,2.37A4.22,4.22,0,0,0,22.22,40a3.18,3.18,0,0,1-2.7,1.35,41.88,41.88,0,0,1-4.81.21c-1.24-.1-1.35-.37-.27-1C16,39.86,18,39,20.38,37.91a39,39,0,0,0,8.75-6.37,2,2,0,0,1,.6-.59A7.19,7.19,0,0,0,28,29.49c-1.51,1.19-3.19,2.37-5,3.51a33.91,33.91,0,0,1-4.37,2.37,2.43,2.43,0,0,1-1.52-.1c-.48-.17-.32-.49.49-.92a85.27,85.27,0,0,0,8-5.78,11,11,0,0,0,1-1.13,12.82,12.82,0,0,0-1.84.75c-1,.65-1.51.87-1.73.65a5.41,5.41,0,0,1-.75-1.08,10.78,10.78,0,0,0-1-1.35,8.7,8.7,0,0,1-3-5.18c-.32-.71-.27-1,.11-1a9.21,9.21,0,0,0,1.78-.38,83.17,83.17,0,0,1,8.16-1.73c.54-.1,1.08-.16,1.72-.27A17.1,17.1,0,0,1,32.21,16a3,3,0,0,0,1.3-2c-.54-1.13-1.73-1.56-3.57-1.24-3.08,1.24-4.75,2.43-5,3.73-.1.81-.86,1.4-2.16,1.62a21.94,21.94,0,0,0-3.18.81,6.61,6.61,0,0,1-2.86.21c-1.41-.1-1.14-.59.75-1.62,1.41-1,3-1.94,4.65-3s3.45-2.27,5.56-3.73,3.56-2.43,4.86-3.24c0-.21.65.17,1.67,1.14s1,1.62.38,1.73c-1.3.43-1.94.75-1.89.91-.11.22.33.33,1.3.33.81,0,2.05.75,3.67,2.32,1,.38,1.19.81.54,1.13a8.47,8.47,0,0,0-1.57,1.35,10.78,10.78,0,0,0-1.29.76c1-.11,2.05-.16,3.24-.22a8.87,8.87,0,0,1,5.83.92c1.51.92,2.05,1.35,1.67,1.41a77,77,0,0,0-5.23,6c-.54.92-1.08,1.35-1.62,1.14-.76-.11-1.57-.16-2.44-.22-2.1,0-3.94.06-5.29.16a7.6,7.6,0,0,0-1.35,1.08,7.14,7.14,0,0,0,2.38,2c1.19.7,2,2.32,2.43,4.7a.25.25,0,0,0,.27.22,59.87,59.87,0,0,0,6-5.46c.33-.65.65-.54,1.19.22A8,8,0,0,0,44,31.16c.44.54.44.87,0,1A7,7,0,0,0,42,33.21a15.61,15.61,0,0,1-3,2,2.62,2.62,0,0,0-1.4,1.14c.65.54,1.3,1,2,1.56,1.3,1.14,2.32,2.05,3.29,2.92a16.55,16.55,0,0,0,5.46,2.7c2.43,1,4.32,1.94,5.56,2.59s1.67,1.13,1.67,1.46-.48.54-1.18.54A38,38,0,0,1,43.88,48c-.49,0-.76-.76-.87-2.38a4.25,4.25,0,0,0-2.7-3.51,8.09,8.09,0,0,1-3.67-2.59c-.43-.38-.87-.76-1.3-1.19A11.82,11.82,0,0,0,35.4,39.69Zm-5.94-17.6c.21-.86.43-1.57.64-2.27a2.92,2.92,0,0,1-.81.22A38.86,38.86,0,0,0,23,21.66a1,1,0,0,0-.76.86,3.55,3.55,0,0,0,.38,2c.33.92.76,1.19,1.35,1,1.3-.44,2.81-.81,4.48-1.19A19,19,0,0,0,29.46,22.09Zm3.78-1a12.22,12.22,0,0,0-.65,2.05,1.77,1.77,0,0,0-.16.59c1.35-.21,2.75-.32,4.37-.43a3.48,3.48,0,0,0,2.49-2.1c.48-1.14.16-1.84-.87-2.11a33.94,33.94,0,0,0-4.64.16.72.72,0,0,1-.06.65A2.46,2.46,0,0,0,33.24,21.12Z",fill:"red",filter:"url(#shadow)"})])],-1),_=t("div",null,[t("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"32",cy:"32",r:"30.0",stroke:"black","stroke-width":"2"}),t("text",{x:"8",y:"48","font-size":"48","font-weight":"bold",fill:"white"},"象")])],-1),ee=t("div",null,[t("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"32",cy:"32",r:"30.0",fill:"none",stroke:"red","stroke-width":"3"}),t("text",{x:"8",y:"48","font-size":"46","font-weight":"bold",fill:"red"},"相")])],-1);X.render=function(n,t,s,r,a,c){return e(),o(l,null,[Y,$,_,ee],64)};const oe=[{path:"/",name:"Home",component:h},{path:"/board",name:"Board",component:K},{path:"/games",name:"Games",component:j},{path:"/one",name:"One",component:I},{path:"/two",name:"Two",component:H},{path:"/pous",name:"Pous",component:O},{path:"/rows",name:"Rows",component:J},{path:"/svgs",name:"Svgs",component:X}],ne=m({history:p(),routes:oe});const te=u(g);te.use(ne),te.mount("#app");

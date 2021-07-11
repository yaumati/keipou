import{o as e,c as t,r as o,a as n,b as s,t as i,F as d,d as r,e as a,f as l,g as c,h as p,i as g,j as h}from"./vendor.1a7cbfd7.js";const m={mounted(){console.log("main mounted()")},unmounted(){console.log("main unmounted()")}};m.render=function(n,s,i,d,r,a){const l=o("router-view");return e(),t(l)};const u={mounted(){console.log("home mounted()")},unmounted(){console.log("home unmounted()")}},x={class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},f=n("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Home ",-1);u.render=function(o,n,s,i,d,r){return e(),t("div",x,[f])};const w={props:{grid:Object},emits:["onTapped"],computed:{computedName(){return this.grid.name}},methods:{onTapped(){this.$emit("onTapped",{index:this.grid.index})}},data:()=>({})},b={viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},v={key:0,cx:"64",cy:"64",r:"54.0",fill:"none",stroke:"white","stroke-width":"4"},y={key:1,cx:"64",cy:"64",r:"60.0",fill:"none",stroke:"black","stroke-width":"6","stroke-dasharray":"15,5"},k={viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},A=n("circle",{cx:"64",cy:"64",r:"64.0",fill:"white"},null,-1),P=n("circle",{cx:"64",cy:"64",r:"54.0",fill:"none",stroke:"black","stroke-width":"4"},null,-1),C={x:"26",y:"90","font-size":"78","font-weight":"bold",fill:"black"},B={key:0,cx:"64",cy:"64",r:"62.0",fill:"none",stroke:"black","stroke-width":"6","stroke-dasharray":"15,5"},T={viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},N=n("circle",{cx:"64",cy:"64",r:"64.0",fill:"white"},null,-1),R=n("circle",{cx:"64",cy:"64",r:"56.0",fill:"black"},null,-1),K={x:"26",y:"90","font-size":"75","font-weight":"bold",fill:"white"},S={key:0,cx:"64",cy:"64",r:"62.0",fill:"none",stroke:"black","stroke-width":"6","stroke-dasharray":"15,5"};w.render=function(o,r,a,l,c,p){return e(),t(d,null,["none"===a.grid.side?(e(),t("div",{key:0,onClick:r[1]||(r[1]=(...e)=>p.onTapped&&p.onTapped(...e))},[(e(),t("svg",b,[a.grid.tapped?(e(),t("circle",v)):s("",!0),a.grid.tapped?(e(),t("circle",y)):s("",!0)]))])):s("",!0),"red"===a.grid.side?(e(),t("div",{key:1,onClick:r[2]||(r[2]=(...e)=>p.onTapped&&p.onTapped(...e))},[(e(),t("svg",k,[A,P,n("text",C,i(a.grid.name),1),a.grid.tapped?(e(),t("circle",B)):s("",!0)]))])):"black"===a.grid.side?(e(),t("div",{key:2,onClick:r[3]||(r[3]=(...e)=>p.onTapped&&p.onTapped(...e))},[(e(),t("svg",T,[N,R,n("text",K,i(p.computedName),1),a.grid.tapped?(e(),t("circle",S)):s("",!0)]))])):s("",!0)],64)};const D={r:"車",n:"馬",h:"馬",b:"象",e:"象",a:"士",k:"將",c:"砲",p:"卒",R:"車",N:"馬",H:"馬",B:"相",E:"相",A:"仕",K:"帥",C:"炮",P:"兵"},G={components:{Piece:w},methods:{onTapped(e){if(this.grids[e.index].tapped){this.grids[e.index].tapped=!1;let t=this.taps.indexOf(e.index);t>-1&&this.taps.splice(t,1)}else this.grids[e.index].tapped=!0,this.taps.push(e.index);2===this.taps.length&&("none"!==this.grids[this.taps[0]].side&&(this.grids[this.taps[1]].code=this.grids[this.taps[0]].code,this.grids[this.taps[1]].name=this.grids[this.taps[0]].name,this.grids[this.taps[1]].side=this.grids[this.taps[0]].side,this.grids[this.taps[0]].code=".",this.grids[this.taps[0]].name="　",this.grids[this.taps[0]].side="none"),this.grids.forEach((function(e){e.tapped=!1})),this.taps=[])},fenToGrids(e){let t=e.split(" "),o=[];if(t.length>0){let e=t[0].split("/");if(10===e.length)for(let t of e){let e=t.split("");for(let t of e)if(t.match(/\d/))for(let e=0;e<Number(t);e++)o.push({index:o.length,code:".",name:"　",side:"none",tapped:!1});else{let e=t===t.toUpperCase()?"red":"black";o.push({index:o.length,code:t,name:D[t],side:e,tapped:!1})}}}return o}},props:{fen:{type:String,default:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1"}},data:()=>({grids:[],taps:[]}),mounted(){this.grids=this.fenToGrids(this.fen),console.log("board mounted()")},unmounted(){console.log("board unmounted()")}},O={class:"grid grid-cols-9 mx-auto m-5 w-72 h-80 bg-board bg-no-repeat"},j={class:"w-8"};G.render=function(s,i,a,l,c,p){const g=o("Piece");return e(),t("div",O,[(e(!0),t(d,null,r(c.grids,(o=>(e(),t("div",{key:o.index},[n("div",j,[n(g,{grid:o,onOnTapped:p.onTapped},null,8,["grid","onOnTapped"])])])))),128))])};const z={components:{Board:G}},I={class:"grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto m-5 gap-4"};z.render=function(s,i,d,r,a,l){const c=o("Board");return e(),t("div",I,[n(c,{fen:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1"}),n(c,{fen:"9/9/9/9/9/9/9/9/9/9 r - - 0 1"}),n(c,{fen:"rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1"}),n(c,{fen:"2baka3/3P3N1/bN7/7nc/9/4C1P2/P5n1P/B3R3B/4Apr2/2RAK3c r - - 0 1"}),n(c,{fen:"4k4/9/3aP3b/p8/9/6n2/2P3p2/4R4/3p1p3/4K4 r - - 0 1"}),n(c,{fen:"C3kab2/4a4/n3c1n2/p2Np1p2/1R4P2/1R7/P3P4/4B4/2Cp1p3/c1rAK1N2 r - - 0 1"})])};const E={mounted(){console.log("one mounted()")},unmounted(){console.log("one unmounted()")}},F={class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},H=n("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," 1 ",-1);E.render=function(o,n,s,i,d,r){return e(),t("div",F,[H])};const Z={mounted(){console.log("two mounted()")},unmounted(){console.log("two unmounted()")}},M={class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},U=n("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," 2 ",-1);Z.render=function(o,n,s,i,d,r){return e(),t("div",M,[U])};const V={components:{FolderIcon:a,DocumentIcon:l},data:()=>({data:{}}),mounted(){console.log("pous mounted()"),fetch("https://api.github.com/repos/yaumati/keipou/contents/public/棋譜").then((e=>e.json())).then((e=>{this.data=e,console.log(e)})).catch((e=>console.error(e)))},unmounted(){console.log("pous unmounted()")}},$=n("div",{class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},[n("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"棋譜")],-1),q={class:"py-2 px-4 sm:px-6"},J={class:"flex divide-x divide-gray-200"},L={class:"w-0 flex-1 flex"},Q={href:"/",class:"relative w-0 flex-1 inline-flex py-2 text-sm text-gray-700 font-medium border border-transparent"},W={class:"ml-2"};V.render=function(s,a,l,c,p,g){const h=o("FolderIcon"),m=o("DocumentIcon");return e(),t(d,null,[$,n("ul",q,[(e(!0),t(d,null,r(p.data,(o=>(e(),t("li",null,[n("div",J,[n("div",L,[n("a",Q,["dir"===o.type?(e(),t(h,{key:0,class:"w-5 h-5 text-gray-600","aria-hidden":"true"})):(e(),t(m,{key:1,class:"w-5 h-5 text-gray-600","aria-hidden":"true"})),n("span",W,i(o.name),1)])])])])))),256))])],64)};const X={},Y={class:"min-h-screen bg-gray-50"},_=c('<div class="pt-6 pb-6"><div class="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-7xl md:px-8"><div class="grid grid-cols-1 gap-4 items-start md:grid-cols-3 md:gap-8"><div class="grid grid-cols-1 gap-4 md:col-span-2"><section aria-labelledby="section-1-title"><h2 class="sr-only" id="section-1-title">Section title</h2><div class="rounded-lg bg-white overflow-hidden shadow"><div class="p-6"> 12345 </div></div></section></div><div class="grid grid-cols-1 gap-4"><section aria-labelledby="section-2-title"><h2 class="sr-only" id="section-2-title">Section title</h2><div class="rounded-lg bg-white overflow-hidden shadow"><div class="p-6"> ABCDE </div></div></section></div></div></div></div>',1);X.render=function(o,n){return e(),t("div",Y,[_])};const ee={mounted(){console.log("svgs mounted()")},unmounted(){console.log("svgs unmounted()")}},te=n("div",{class:"bg-white px-4 py-5 border-b border-gray-200 sm:px-6"},[n("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"SVGs")],-1),oe=n("div",null,[n("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[n("circle",{cx:"32",cy:"32",r:"30.0",fill:"none",stroke:"url(#gradient)","stroke-width":"2",filter:"url(#shadow)"}),n("defs",null,[n("linearGradient",{id:"gradient"},[n("stop",{offset:"0%","stop-color":"red"}),n("stop",{offset:"100%","stop-color":"orange"})]),n("filter",{id:"shadow"},[n("feDropShadow",{dx:"0.3",dy:"0.3",stdDeviation:"0.35"})])]),n("path",{d:"M35.4,39.69c-.22,5.57-.49,9.83-.76,12.8a15.84,15.84,0,0,1-.48,1.95c-.22.27-1.25-.22-3-1.46-4.64-1.35-7.51-2.92-8.42-4.86-.87-.87-.81-1.08.16-.76,3.89,2,6.48,2.49,7.67,1.62.64-.81,1-3.72,1.08-8.8a2.35,2.35,0,0,0-1.95.22c-4.43,2.37-6.8,4-7.13,5A3.26,3.26,0,0,1,20,47.25a15.46,15.46,0,0,1-9.4.81c-.81-.21-.92-.48-.22-.81C12.82,46.12,15.69,45,19,43.8c3.73-1.19,7.78-4,12.32-8.43-.11-.54-.22-1-.27-1.45a27.66,27.66,0,0,0-3.51,1.89c-1.89,1.13-3.14,1.94-3.78,2.37A4.22,4.22,0,0,0,22.22,40a3.18,3.18,0,0,1-2.7,1.35,41.88,41.88,0,0,1-4.81.21c-1.24-.1-1.35-.37-.27-1C16,39.86,18,39,20.38,37.91a39,39,0,0,0,8.75-6.37,2,2,0,0,1,.6-.59A7.19,7.19,0,0,0,28,29.49c-1.51,1.19-3.19,2.37-5,3.51a33.91,33.91,0,0,1-4.37,2.37,2.43,2.43,0,0,1-1.52-.1c-.48-.17-.32-.49.49-.92a85.27,85.27,0,0,0,8-5.78,11,11,0,0,0,1-1.13,12.82,12.82,0,0,0-1.84.75c-1,.65-1.51.87-1.73.65a5.41,5.41,0,0,1-.75-1.08,10.78,10.78,0,0,0-1-1.35,8.7,8.7,0,0,1-3-5.18c-.32-.71-.27-1,.11-1a9.21,9.21,0,0,0,1.78-.38,83.17,83.17,0,0,1,8.16-1.73c.54-.1,1.08-.16,1.72-.27A17.1,17.1,0,0,1,32.21,16a3,3,0,0,0,1.3-2c-.54-1.13-1.73-1.56-3.57-1.24-3.08,1.24-4.75,2.43-5,3.73-.1.81-.86,1.4-2.16,1.62a21.94,21.94,0,0,0-3.18.81,6.61,6.61,0,0,1-2.86.21c-1.41-.1-1.14-.59.75-1.62,1.41-1,3-1.94,4.65-3s3.45-2.27,5.56-3.73,3.56-2.43,4.86-3.24c0-.21.65.17,1.67,1.14s1,1.62.38,1.73c-1.3.43-1.94.75-1.89.91-.11.22.33.33,1.3.33.81,0,2.05.75,3.67,2.32,1,.38,1.19.81.54,1.13a8.47,8.47,0,0,0-1.57,1.35,10.78,10.78,0,0,0-1.29.76c1-.11,2.05-.16,3.24-.22a8.87,8.87,0,0,1,5.83.92c1.51.92,2.05,1.35,1.67,1.41a77,77,0,0,0-5.23,6c-.54.92-1.08,1.35-1.62,1.14-.76-.11-1.57-.16-2.44-.22-2.1,0-3.94.06-5.29.16a7.6,7.6,0,0,0-1.35,1.08,7.14,7.14,0,0,0,2.38,2c1.19.7,2,2.32,2.43,4.7a.25.25,0,0,0,.27.22,59.87,59.87,0,0,0,6-5.46c.33-.65.65-.54,1.19.22A8,8,0,0,0,44,31.16c.44.54.44.87,0,1A7,7,0,0,0,42,33.21a15.61,15.61,0,0,1-3,2,2.62,2.62,0,0,0-1.4,1.14c.65.54,1.3,1,2,1.56,1.3,1.14,2.32,2.05,3.29,2.92a16.55,16.55,0,0,0,5.46,2.7c2.43,1,4.32,1.94,5.56,2.59s1.67,1.13,1.67,1.46-.48.54-1.18.54A38,38,0,0,1,43.88,48c-.49,0-.76-.76-.87-2.38a4.25,4.25,0,0,0-2.7-3.51,8.09,8.09,0,0,1-3.67-2.59c-.43-.38-.87-.76-1.3-1.19A11.82,11.82,0,0,0,35.4,39.69Zm-5.94-17.6c.21-.86.43-1.57.64-2.27a2.92,2.92,0,0,1-.81.22A38.86,38.86,0,0,0,23,21.66a1,1,0,0,0-.76.86,3.55,3.55,0,0,0,.38,2c.33.92.76,1.19,1.35,1,1.3-.44,2.81-.81,4.48-1.19A19,19,0,0,0,29.46,22.09Zm3.78-1a12.22,12.22,0,0,0-.65,2.05,1.77,1.77,0,0,0-.16.59c1.35-.21,2.75-.32,4.37-.43a3.48,3.48,0,0,0,2.49-2.1c.48-1.14.16-1.84-.87-2.11a33.94,33.94,0,0,0-4.64.16.72.72,0,0,1-.06.65A2.46,2.46,0,0,0,33.24,21.12Z",fill:"red",filter:"url(#shadow)"})])],-1),ne=n("div",null,[n("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[n("circle",{cx:"32",cy:"32",r:"30.0",stroke:"black","stroke-width":"2"}),n("text",{x:"8",y:"48","font-size":"48","font-weight":"bold",fill:"white"},"象")])],-1),se=n("div",null,[n("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[n("circle",{cx:"32",cy:"32",r:"30.0",fill:"none",stroke:"red","stroke-width":"3"}),n("text",{x:"8",y:"48","font-size":"46","font-weight":"bold",fill:"red"},"相")])],-1);ee.render=function(o,n,s,i,r,a){return e(),t(d,null,[te,oe,ne,se],64)};const ie=[{path:"/",name:"Home",component:u},{path:"/board",name:"Board",component:G},{path:"/games",name:"Games",component:z},{path:"/one",name:"One",component:E},{path:"/two",name:"Two",component:Z},{path:"/pous",name:"Pous",component:V},{path:"/rows",name:"Rows",component:X},{path:"/svgs",name:"Svgs",component:ee}],de=p({history:g(),routes:ie});const re=h(m);re.use(de),re.mount("#app");

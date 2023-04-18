import{_ as k,m as h,a as c,r as x,o as n,c as l,d as b,b as t,e as p,t as d,F as g,l as y,H as w,K as P,w as f,f as T,I as S,p as I,h as V}from"./index-2dbe31a9.js";import{P as $}from"./PageHeader-528a39d8.js";import{c as o}from"./cart-b5463768.js";import{S as L}from"./sweetalert2.all-7b106dbc.js";const{VITE_APP_URL:E,VITE_APP_PATH:q}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"tachibanazushi",BASE_URL:"/tachibana/",MODE:"production",DEV:!1,PROD:!0},U={data(){return{likes:[]}},methods:{...h(o,["getCart"]),...h(o,["updateCartItem"]),...h(o,["deleteCartItem"]),...h(o,["useCoupon"]),...h(o,["addToCart"]),getLikes(){this.$http.get(`${E}v2/api/${q}/products/all`).then(s=>{const i=s.data.products,v=Object.keys(i).length,_=[];for(;_.length<5;){const r=Math.floor(Math.random()*v);_.includes(r)||_.push(r)}this.likes=_.map(r=>i[r])}).catch(()=>{L.fire({toast:!0,title:'<span style="color: #ff0000">獲取顧客常看商品錯誤</span>',icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})}},components:{PageHeader:$},computed:{...c(o,["carts"]),...c(o,["total"]),...c(o,["final_total"]),...c(o,["copuon"]),...c(o,["hasCoupon"]),...c(o,["order"])},mounted(){this.getLikes()},watch:{}},u=s=>(I("data-v-5a650d34"),s=s(),V(),s),A={class:"section-cart bg-darkTwo py-8"},N={class:"container"},D={class:"bg-dark p-4 text-center"},H=T('<ul class="step d-flex mb-4 border-bottom border-3 border-primary" data-v-5a650d34><li class="text-center bg-primary py-2 stepList flex-fill" data-v-5a650d34><i class="bi bi-1-square" data-v-5a650d34></i> 購物車 </li><li class="text-center py-2 flex-fill" data-v-5a650d34><i class="bi bi-2-square" data-v-5a650d34></i> 結帳資訊 </li><li class="text-center py-2 flex-fill" data-v-5a650d34><i class="bi bi-3-square" data-v-5a650d34></i> 付款方式 </li></ul>',1),R={key:0,class:"cart-info table-responsive"},B={class:"table table-dark table-hover align-middle caption-top"},M={class:"pb-4 text-white"},O={class:"text-danger"},j=u(()=>t("thead",null,[t("tr",null,[t("td"),t("td"),t("td",{class:"text-start"},"品名"),t("td",null,"數量"),t("td",{class:"text-end pe-4"},"金額")])],-1)),z=["onClick"],F=u(()=>t("i",{class:"bi bi-x-square text-primary"},null,-1)),W=[F],K={class:"img bg-darkTwo d-flex justify-content-center align-items-center"},G=["src"],J={class:"text-start"},Q=["onUpdate:modelValue","onChange"],X=["value"],Y={class:"text-end"},Z={class:"input-group mb-4"},tt={class:"text-end total"},et={class:"d-flex justify-content-between mt-4 next"},st=u(()=>t("i",{class:"bi bi-arrow-left-square"},null,-1)),ot=u(()=>t("i",{class:"bi bi-arrow-right-square"},null,-1)),at={key:1},nt=u(()=>t("p",{class:"text-center py-8"},"購物車無選購商品，快去選購！",-1)),lt={class:"bg-dark mt-4 py-4"},it=u(()=>t("p",{class:"like text-center py-2 mb-4 bg-darkTwo"},"其他顧客都在看",-1)),dt={class:"row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-6"},rt={class:"box bg-dark text-white"},ct={class:"title p-3"},pt={class:"bgOrange ms-auto"},ut=["src","alt"],_t={class:"price bg-danger py-1 px-2 ms-3"},ht={class:"mark d-flex justify-content-evenly align-items-center"},bt=["onClick"];function mt(s,i,v,_,r,gt){const C=x("PageHeader"),m=x("RouterLink");return n(),l(g,null,[b(C),t("section",A,[t("div",N,[t("div",D,[H,!s.carts.length==0?(n(),l("div",R,[t("table",B,[t("caption",M,[p(" 購物車中有 "),t("span",O,d(s.carts.length),1),p(" 項商品 ")]),j,t("tbody",null,[(n(!0),l(g,null,y(s.carts,e=>(n(),l("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn delCart my-auto text-center",onClick:a=>s.deleteCartItem(e),"data-swal-toast-template":"#my-template"},W,8,z)]),t("td",null,[t("div",K,[t("img",{src:e.product.imageUrl,alt:"orderProImg",class:"cartProImg p-2"},null,8,G)])]),t("td",J,d(e.product.title),1),t("td",null,[w(t("select",{name:"",id:"",class:"form-select py-0","onUpdate:modelValue":a=>e.qty=a,onChange:a=>s.updateCartItem(e)},[(n(),l(g,null,y(20,a=>t("option",{value:a,key:a},d(a),9,X)),64))],40,Q),[[S,e.qty]])]),t("td",Y," NT$ "+d(e.total.toLocaleString("zh-TW")),1)]))),128))])]),t("div",Z,[w(t("input",{type:"text",class:"form-control text-white",placeholder:"輸入OPENSUSHI享8折優惠","onUpdate:modelValue":i[0]||(i[0]=e=>s.copuon.code=e)},null,512),[[P,s.copuon.code]]),t("button",{class:"btn btn-primary btn-lg text-white",type:"button",id:"button-addon2",onClick:i[1]||(i[1]=e=>s.useCoupon())}," 使用 ")]),t("div",tt,[p(" 總金額："),t("span",null,"NT$ "+d(s.final_total.toLocaleString("zh-TW")),1)]),t("div",et,[b(m,{to:"products",type:"button",class:"btn btn-outline-light btn-lg"},{default:f(()=>[st,p(" 繼續購物 ")]),_:1}),b(m,{to:"shoppingCartCheck",type:"button",class:"btn btn-danger text-white btn-lg"},{default:f(()=>[p(" 結帳去 "),ot]),_:1})])])):(n(),l("div",at,[nt,b(m,{to:"products",type:"button",class:"btn btn-outline-primary text-white btn-lg"},{default:f(()=>[p(" 繼續購物 ")]),_:1}),t("div",lt,[it,t("div",dt,[(n(!0),l(g,null,y(r.likes,e=>(n(),l("div",{class:"col",key:e.id},[t("div",rt,[t("h3",ct,d(e.title),1),t("div",pt,[t("img",{src:e.imageUrl,alt:e.title,class:"pic"},null,8,ut)]),t("span",_t," NT$ "+d(e.price),1),t("div",ht,[b(m,{to:`product/${e.id}`,type:"button",class:"bi bi-search border border-3 px-2 rounded-3"},null,8,["to"]),t("button",{type:"button",class:"bi bi-cart-dash border border-primary border-3 bg-primary px-2 rounded-3 text-white",onClick:a=>s.addToCart(e.id,s.qty)},null,8,bt)])])]))),128))])])]))])])])],64)}const wt=k(U,[["render",mt],["__scopeId","data-v-5a650d34"]]);export{wt as default};

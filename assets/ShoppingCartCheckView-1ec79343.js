import{_ as P,m as c,L as S,M as T,N as E,a as i,r as m,o as b,c as f,d as a,b as e,w as y,F as V,l as F,t as h,e as n,f as I,n as g,H as L,K as N,g as q,p as D,h as U}from"./index-f4935e05.js";import{P as $}from"./PageHeader-5a5118e8.js";import{c as l}from"./cart-9b562778.js";import{S as x}from"./sweetalert2.all-82dbf304.js";const{VITE_APP_URL:A,VITE_APP_PATH:j}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"tachibanazushi",BASE_URL:"/tachibana/",MODE:"production",DEV:!1,PROD:!0},B={data(){return{likes:[]}},methods:{...c(l,["getCart"]),...c(l,["updateCartItem"]),...c(l,["deleteCartItem"]),...c(l,["useCoupon"]),...c(l,["addToCart"]),onSubmit(){const s=this.order;this.$http.post(`${A}/v2/api/${j}/order`,{data:s}).then(t=>{const v=t.data.orderId;this.$refs.form.resetForm(),this.$router.push(`/shoppingCartPay/${v}`),x.fire({toast:!0,title:"已送出訂單",icon:"success",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#F25C05"}),this.order.message=""}).catch(()=>{x.fire({toast:!0,title:'<span style="color: #ff0000">訂單送出失敗</span>',icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"}},components:{PageHeader:$,VForm:S,VField:T,ErrorMessage:E},computed:{...i(l,["carts"]),...i(l,["total"]),...i(l,["final_total"]),...i(l,["copuon"]),...i(l,["hasCoupon"]),...i(l,["order"])},mounted(){this.getCart()},watch:{}},r=s=>(D("data-v-1e2deb2c"),s=s(),U(),s),H={class:"section-cart bg-darkTwo py-8"},M={class:"container"},R={class:"bg-dark p-4"},z=I('<ul class="step d-flex mb-4 border-bottom border-3 border-primary" data-v-1e2deb2c><li class="text-center py-2 flex-fill" data-v-1e2deb2c><i class="bi bi-check-square text-success" data-v-1e2deb2c></i> 購物車 </li><li class="text-center py-2 flex-fill bg-primary stepList" data-v-1e2deb2c><i class="bi bi-2-square" data-v-1e2deb2c></i> 結帳資訊 </li><li class="text-center py-2 flex-fill" data-v-1e2deb2c><i class="bi bi-3-square" data-v-1e2deb2c></i> 付款方式 </li></ul>',1),O={class:"row"},W={class:"col-lg-8 order-2 order-lg-1"},K=r(()=>e("p",{class:"py-2 border-bottom border-3 info"},[n(" 收件人資訊 "),e("span",{class:"marked"},"* 為必填項目")],-1)),G={class:"col-6"},J=r(()=>e("label",{for:"name",class:"form-label"},[n("姓名"),e("span",{class:"marked"},"＊")],-1)),Q={class:"col-6"},X=r(()=>e("label",{for:"tel",class:"form-label"},[n("電話"),e("span",{class:"marked"},"＊")],-1)),Y={class:"col-12"},Z=r(()=>e("label",{for:"address",class:"form-label"},[n("地址"),e("span",{class:"marked"},"＊")],-1)),ee={class:"col-12"},se=r(()=>e("label",{for:"email",class:"form-label"},[n("信箱"),e("span",{class:"marked"},"＊")],-1)),te={class:"col-12"},oe=r(()=>e("label",{for:"message",class:"form-label"},"備註",-1)),ae={class:"col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0"},le=r(()=>e("p",{class:"cart border-bottom border-3 py-2"},"購買明細",-1)),re={class:"img bg-darkTwo d-flex justify-content-center align-items-center"},de=["src"],ne={class:"orderBody d-flex flex-column justify-content-around flex-fill"},ie={class:"ordertext d-flex justify-content-between ps-3"},ce={class:"title"},me={class:"num"},ue={class:"d-flex justify-content-between ps-3 align-items-center"},pe={key:0,class:"px-1 bg-primary text-monospace useCoupon"},_e={class:"total ms-auto"},be={class:"amount d-flex justify-content-between my-2"},fe=r(()=>e("span",null,"總金額：",-1)),he={class:"d-flex justify-content-between next"},ge=r(()=>e("i",{class:"bi bi-arrow-left-square"},null,-1)),ve=r(()=>e("i",{class:"bi bi-arrow-right-square"},null,-1));function ye(s,t,v,Ve,xe,u){const k=m("PageHeader"),p=m("VField"),_=m("ErrorMessage"),w=m("VForm"),C=m("RouterLink");return b(),f(V,null,[a(k),e("section",H,[e("div",M,[e("div",R,[z,e("div",O,[e("div",W,[K,a(w,{ref:"form",onSubmit:u.onSubmit,class:"row g-4 text-white py-3"},{default:y(({errors:o})=>[e("div",G,[J,a(p,{id:"name",name:"姓名",type:"text",class:g(["form-control text-20",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.order.user.name,"onUpdate:modelValue":t[0]||(t[0]=d=>s.order.user.name=d)},null,8,["class","modelValue"]),a(_,{name:"姓名",class:"invalid-feedback"})]),e("div",Q,[X,a(p,{id:"tel",name:"電話",type:"text",class:g(["form-control text-20",{"is-invalid":o.電話}]),placeholder:"請輸入手機號碼",rules:u.isPhone,modelValue:s.order.user.tel,"onUpdate:modelValue":t[1]||(t[1]=d=>s.order.user.tel=d)},null,8,["class","rules","modelValue"]),a(_,{name:"電話",class:"invalid-feedback"})]),e("div",Y,[Z,a(p,{id:"address",name:"地址",type:"text",class:g(["form-control text-20",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.order.user.address,"onUpdate:modelValue":t[2]||(t[2]=d=>s.order.user.address=d)},null,8,["class","modelValue"]),a(_,{name:"地址",class:"invalid-feedback"})]),e("div",ee,[se,a(p,{id:"email",name:"email",type:"email",class:g(["form-control text-20",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.order.user.email,"onUpdate:modelValue":t[3]||(t[3]=d=>s.order.user.email=d)},null,8,["class","modelValue"]),a(_,{name:"email",class:"invalid-feedback"})]),e("div",te,[oe,L(e("textarea",{name:"備註",id:"message",cols:"10",rows:"10",class:"w-100 ps-2 py-1","onUpdate:modelValue":t[4]||(t[4]=d=>s.order.message=d)},null,512),[[N,s.order.message]])])]),_:1},8,["onSubmit"])]),e("div",ae,[le,(b(!0),f(V,null,F(s.carts,o=>(b(),f("div",{key:o.id,class:"d-flex py-4 border-bottom border-darkTwo border-3 justify-content-around"},[e("div",re,[e("img",{src:o.product.imageUrl,alt:"orderProImg",class:"cartProImg p-2"},null,8,de)]),e("div",ne,[e("div",ie,[e("p",ce,h(o.product.title),1),e("p",me,"× "+h(o.qty),1)]),e("div",ue,[o.coupon?(b(),f("p",pe," 已使用優惠券 ")):q("",!0),e("p",_e," NT$ "+h(o.final_total.toLocaleString("zh-TW")),1)])])]))),128)),e("div",be,[fe,e("span",null,"NT$ "+h(s.final_total.toLocaleString("zh-TW")),1)])])]),e("div",he,[a(C,{to:"shoppingCart",type:"button",class:"btn btn-outline-light btn-lg"},{default:y(()=>[ge,n(" 回上頁 ")]),_:1}),e("button",{type:"submit",class:"btn btn-danger text-white btn-lg",onClick:t[5]||(t[5]=(...o)=>u.onSubmit&&u.onSubmit(...o))},[n(" 送出訂單 "),ve])])])])])],64)}const Se=P(B,[["render",ye],["__scopeId","data-v-1e2deb2c"]]);export{Se as default};

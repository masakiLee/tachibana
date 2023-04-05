import{S as c}from"./sweetalert2.all-82dbf304.js";import{_ as h,r as _,o as u,c as m,b as e,d as n,w as i,t as a,p as b,h as g}from"./index-f4935e05.js";const{VITE_APP_URL:d,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"tachibanazushi",BASE_URL:"/tachibana/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{productLength:"",orderLength:"",articleLength:"",couponLength:""}},components:{},methods:{getProducts(){this.$http.get(`${d}v2/api/${l}/admin/products/all`).then(t=>{const p=t.data.products;this.productLength=Object.keys(p).length}).catch(t=>{c.fire({toast:!0,title:`${t.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})},getOrder(){this.$http.get(`${d}v2/api/${l}/admin/orders`).then(t=>{this.orderLength=t.data.orders.length}).catch(t=>{c.fire({toast:!0,title:`${t.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})},getArticles(){this.$http.get(`${d}v2/api/${l}/admin/articles`).then(t=>{this.articleLength=t.data.articles.length}).catch(t=>{c.fire({toast:!0,title:`${t.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})},getCoupon(){this.$http.get(`${d}v2/api/${l}/admin/coupons`).then(t=>{this.couponLength=t.data.coupons.length}).catch(t=>{c.fire({toast:!0,title:`${t.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${t}`,this.getProducts(),this.getOrder(),this.getArticles(),this.getCoupon()}},o=t=>(b("data-v-b83964e0"),t=t(),g(),t),k={class:"index"},$={class:"container"},x={class:"row py-8"},L={class:"product border border-dark border-3 p-3 bg-darkTwo"},v=o(()=>e("i",{class:"bi bi-box-seam-fill d-block text-center"},null,-1)),w=o(()=>e("p",{class:"title"},"商品數",-1)),C={class:"num"},P={class:"product border border-dark border-3 p-3 bg-darkTwo"},A=o(()=>e("i",{class:"bi bi-receipt-cutoff d-block text-center"},null,-1)),D=o(()=>e("p",{class:"title"},"訂單數",-1)),E={class:"num"},T={class:"product border border-dark border-3 p-3 bg-darkTwo"},I=o(()=>e("i",{class:"bi bi-chat-square-text-fill d-block text-center"},null,-1)),V=o(()=>e("p",{class:"title"},"文章數",-1)),B={class:"num"},S={class:"product border border-dark border-3 p-3 bg-darkTwo"},R=o(()=>e("i",{class:"bi bi-bookmark-star-fill d-block text-center"},null,-1)),y=o(()=>e("p",{class:"title"},"Coupon數",-1)),O={class:"num"};function F(t,p,U,z,s,H){const r=_("RouterLink");return u(),m("div",k,[e("div",$,[e("div",x,[n(r,{to:"/admin/products",class:"col-md-3 text-center mb-3"},{default:i(()=>[e("div",L,[v,w,e("p",C,a(s.productLength),1)])]),_:1}),n(r,{to:"/admin/order",class:"col-md-3 text-center mb-3"},{default:i(()=>[e("div",P,[A,D,e("p",E,a(s.orderLength),1)])]),_:1}),n(r,{to:"/admin/article",class:"col-md-3 text-center mb-3"},{default:i(()=>[e("div",T,[I,V,e("p",B,a(s.articleLength),1)])]),_:1}),n(r,{to:"/admin/coupon",class:"col-md-3 text-center mb-3"},{default:i(()=>[e("div",S,[R,y,e("p",O,a(s.couponLength),1)])]),_:1})])])])}const q=h(f,[["render",F],["__scopeId","data-v-b83964e0"]]);export{q as default};

import{b as m}from"./bootstrap.bundle.min-e075a593.js";import{_ as d,r,o as _,c as v,b as e,d as i,w as c,e as l,p as b,h as g,F as f}from"./index-f4935e05.js";const k={data(){return{navbarList:""}},methods:{logout(){document.cookie=`LoginToken=;expires=${new Date};`,this.$router.push("/logIn")},navChange(){this.navbarList.toggle()},closeNav(){this.navbarList.hide()}},components:{},mounted(){this.navbarList=new m.Collapse(this.$refs.navbarList,{toggle:!1})}},x=n=>(b("data-v-98fcc34e"),n=n(),g(),n),$={class:"bg-dark"},w={class:"navbar navbar-expand-lg navbar-light bg-darkTwo"},A={class:"container-fluid"},L=x(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),N=[L],C={class:"navbar-collapse collapse",ref:"navbarList"},I={class:"navbar-nav ms-auto text-center"},V={class:"nav-item"},T={class:"nav-item"},P={class:"nav-item"},y={class:"nav-item"};function E(n,t,u,p,h,s){const o=r("routerLink");return _(),v("div",$,[e("nav",w,[e("div",A,[i(o,{to:"/admin/index",class:"py-2"},{default:c(()=>[l("TACHIBANA SUSHI")]),_:1}),e("button",{class:"navbar-toggler collapsed",type:"button",onClick:t[0]||(t[0]=a=>s.navChange()),"aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},N),e("div",C,[e("ul",I,[e("li",V,[i(o,{to:"/admin/products",class:"text-white nav-link",onClick:t[1]||(t[1]=a=>s.closeNav())},{default:c(()=>[l("商品")]),_:1})]),e("li",T,[i(o,{to:"/admin/article",class:"text-white nav-link",onClick:t[2]||(t[2]=a=>s.closeNav())},{default:c(()=>[l("文章")]),_:1})]),e("li",P,[i(o,{to:"/admin/order",class:"text-white nav-link",onClick:t[3]||(t[3]=a=>s.closeNav())},{default:c(()=>[l("訂單")]),_:1})]),e("li",y,[i(o,{to:"/admin/coupon",class:"text-white nav-link",onClick:t[4]||(t[4]=a=>s.closeNav())},{default:c(()=>[l("優惠券")]),_:1})]),e("button",{type:"button",class:"btn btn-danger text-white",onClick:t[5]||(t[5]=(...a)=>s.logout&&s.logout(...a))}," 退出後台 ")])],512)])])])}const R=d(k,[["render",E],["__scopeId","data-v-98fcc34e"]]);const{VITE_APP_URL:S}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"tachibanazushi",BASE_URL:"/tachibana/",MODE:"production",DEV:!1,PROD:!0},B={data(){return{}},components:{AdminNav:R},methods:{checkLogin(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=n,this.$http.post(`${S}/v2/api/user/check`).then(()=>{}).catch(t=>{t.response.data.success||this.$router.push("/logIn")})}},mounted(){this.checkLogin()}};function D(n,t,u,p,h,s){const o=r("AdminNav"),a=r("RouterView");return _(),v(f,null,[i(o),i(a)],64)}const z=d(B,[["render",D],["__scopeId","data-v-d9b546d2"]]);export{z as default};
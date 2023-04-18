import{P as x}from"./PaginationType-e5eb635b.js";import{b as g}from"./bootstrap.bundle.min-9ccc90e8.js";import{_ as f,o as a,c as r,b as t,t as d,g as C,F as $,l as k,H as O,O as M,e as y,r as p,d as u,p as P,h as T}from"./index-0e2b8556.js";import{S as h}from"./sweetalert2.all-d1f684b7.js";const E={props:["order"],emits:["update-paid"],data(){return{tempOrder:{}}},methods:{},mounted(){this.orderModal=new g.Modal(this.$refs.orderModal,{keyboard:!1})},watch:{order(){this.tempOrder=this.order}}},S={class:"modal fade",tabindex:"-1",ref:"orderModal"},V={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},F={class:"modal-content"},A=t("div",{class:"modal-header bg-primary text-white"},[t("span",null,"訂單細節"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body text-dark"},I=t("h3",{class:"mb-2"},"用戶資料",-1),L={key:0,class:"table"},N=t("th",{style:{width:"80px"}},"姓名",-1),U=t("th",null,"Email",-1),z=t("th",null,"電話",-1),R=t("th",null,"地址",-1),H=t("h3",{class:"mb-2"},"選購商品",-1),W={class:"table"},j=t("thead",null,[t("tr")],-1),q={class:"text-end"},G={class:"d-flex justify-content-end"},J={class:"form-check"},K={class:"form-check-label",for:"flexCheckDefault"},Q={key:0},X={key:1},Y={class:"modal-footer"},Z=t("button",{type:"button",class:"btn btn-secondary text-white","data-bs-dismiss":"modal"}," 取消 ",-1);function tt(o,e,s,c,n,l){return a(),r("div",S,[t("div",V,[t("div",F,[A,t("div",B,[I,s.order.user?(a(),r("table",L,[t("tbody",null,[t("tr",null,[N,t("td",null,d(s.order.user.name),1)]),t("tr",null,[U,t("td",null,d(s.order.user.email),1)]),t("tr",null,[z,t("td",null,d(s.order.user.tel),1)]),t("tr",null,[R,t("td",null,d(s.order.user.address),1)])])])):C("",!0),H,t("table",W,[j,t("tbody",null,[(a(!0),r($,null,k(s.order.products,i=>(a(),r("tr",{key:i.id},[t("th",null,d(i.product.title),1),t("td",null,d(i.qty)+" / "+d(i.product.unit),1),t("td",q,"NT$ "+d(i.final_total.toLocaleString("zh-TW")),1)]))),128))])]),t("div",G,[t("div",J,[O(t("input",{class:"form-check-input",type:"checkbox",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=i=>n.tempOrder.is_paid=i)},null,512),[[M,n.tempOrder.is_paid]]),t("label",K,[n.tempOrder.is_paid?(a(),r("span",Q,"已付款")):(a(),r("span",X,"未付款"))])])])]),t("div",Y,[Z,t("button",{type:"button",class:"btn btn-primary text-white",onClick:e[1]||(e[1]=i=>o.$emit("update-paid",n.tempOrder))}," 修改付款狀態 ")])])])],512)}const et=f(E,[["render",tt]]),ot={props:["orderData"],emits:["del-item"],data(){return{}},methods:{},mounted(){this.orderDelModal=new g.Modal(this.$refs.orderDelModal,{keyboard:!1})}},st={ref:"orderDelModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},dt={class:"modal-dialog modal-dialog-centered"},at={class:"modal-content border-0"},rt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除訂單")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),nt={class:"modal-body text-dark"},it={class:"text-danger text-dark"},lt=t("p",null,"(刪除後將無法恢復)。",-1),ct={class:"modal-footer"},_t=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ht(o,e,s,c,n,l){return a(),r("div",st,[t("div",dt,[t("div",at,[rt,t("div",nt,[y(" 是否刪除 訂單編號："),t("strong",it,d(s.orderData.id),1),lt]),t("div",ct,[_t,t("button",{type:"button",class:"btn btn-danger text-white",onClick:e[0]||(e[0]=i=>o.$emit("del-item"))}," 確認刪除 ")])])])],512)}const pt=f(ot,[["render",ht]]);const{VITE_APP_URL:m,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"tachibanazushi",BASE_URL:"/tachibana/",MODE:"production",DEV:!1,PROD:!0},ut={data(){return{orders:[],page:{},tempOrder:{},isNew:!1}},components:{OrderModal:et,OrderDelModal:pt,PaginationType:x},methods:{getOrder(o=1){this.$http.get(`${m}v2/api/${b}/admin/orders/?page=${o}`).then(e=>{this.orders=e.data.orders,this.page=e.data.pagination,this.orders=e.data.orders.map(s=>{const c=s.create_at,l=new Date(c*1e3).toLocaleDateString();return{...s,dateString:l}}),e.data.success&&h.fire({toast:!0,title:"取得訂單成功",icon:"success",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#F25C05"})}).catch(e=>{h.fire({toast:!0,title:`${e.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})},openModal(o,e){o==="edit"?(this.tempOrder={...e},this.$refs.modal.orderModal.show()):o==="delete"&&(this.tempOrder={...e},this.$refs.delModal.orderDelModal.show())},updatePaid(o){const e=`${m}v2/api/${b}/admin/order/${o.id}`,s={is_paid:o.is_paid};this.$http.put(e,{data:s}).then(c=>{this.$refs.modal.orderModal.hide(),this.getOrder(),h.fire({toast:!0,title:`${c.data.message}`,icon:"success",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#F25C05"})}).catch(c=>{h.fire({toast:!0,title:`${c.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})},delOrder(){const o=`${m}v2/api/${b}/admin/order/${this.tempOrder.id}`;this.$http.delete(o).then(e=>{this.$refs.delModal.orderDelModal.hide(),this.getOrder(),h.fire({toast:!0,title:`${e.data.message}`,icon:"success",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#F25C05"})}).catch(e=>{h.fire({toast:!0,title:`${e.response.data.message}`,icon:"error",position:"top-end",showConfirmButton:!1,timer:1500,background:"#F2ECDD",color:"#000000"})})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${o}`,this.getOrder()}},mt=o=>(P("data-v-32aa7ef5"),o=o(),T(),o),bt={class:"order"},ft={class:"container text-dark"},gt=mt(()=>t("h2",{class:"py-8"},[t("i",{class:"bi bi-receipt-cutoff pe-3"}),y("訂單管理頁面 ")],-1)),$t={class:"row"},kt={class:"order-card border border-dark border-3"},yt={class:"paid border-bottom p-3 border-dark border-opacity-25"},vt={key:0,class:"isPaid bg-darkTwo text-white p-2"},wt={key:1,class:"NotPaid bg-darkTwo text-white p-2 bg-opacity-50"},Dt={class:"p-3"},xt={class:"order-list"},Ct={class:"order-list"},Ot={class:"order-list"},Mt=["onClick"],Pt=["onClick"];function Tt(o,e,s,c,n,l){const i=p("OrderModal"),v=p("OrderDelModal"),w=p("PaginationType");return a(),r("section",bt,[t("div",ft,[gt,t("div",$t,[(a(!0),r($,null,k(n.orders,_=>(a(),r("div",{class:"col-md-6 col-xl-4 mb-4",key:_.id},[t("div",kt,[t("div",yt,[_.is_paid?(a(),r("span",vt,"已付款")):(a(),r("span",wt,"未付款"))]),t("ul",Dt,[t("li",xt,"訂單編號："+d(_.id),1),t("li",Ct,"購買時間："+d(_.dateString),1),t("li",Ot,"總金額："+d(_.total.toLocaleString("zh-TW")),1)]),t("button",{type:"button",class:"btn btn-primary text-white w-50 btn-lg",onClick:D=>l.openModal("edit",_)}," 修改",8,Mt),t("button",{type:"button",class:"btn btn-danger text-white w-50 btn-lg",onClick:D=>l.openModal("delete",_)}," 刪除 ",8,Pt)])]))),128))]),u(i,{ref:"modal",order:n.tempOrder,onUpdatePaid:l.updatePaid},null,8,["order","onUpdatePaid"]),u(v,{ref:"delModal","order-data":n.tempOrder,onDelItem:l.delOrder},null,8,["order-data","onDelItem"]),u(w,{pages:n.page,onChangePage:l.getOrder},null,8,["pages","onChangePage"])])])}const At=f(ut,[["render",Tt],["__scopeId","data-v-32aa7ef5"]]);export{At as default};
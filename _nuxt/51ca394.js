(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{378:function(t,e,o){var content=o(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("3a421021",content,!0,{sourceMap:!1})},379:function(t,e,o){var content=o(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("4eeb8cd2",content,!0,{sourceMap:!1})},459:function(t,e,o){"use strict";o(378)},460:function(t,e,o){var n=o(20)((function(i){return i[1]}));n.push([t.i,".ptxt[data-v-daa9bc7a]{color:#fff;font-size:30px}.ptxt[data-v-daa9bc7a],.ptxt1[data-v-daa9bc7a]{font-weight:600}.ptxt1[data-v-daa9bc7a]{color:#212122;font-size:16px}.dui[data-v-daa9bc7a]{align-items:center;background-color:rgba(106,129,151,.6);border-radius:3px;display:flex;flex-direction:column;justify-content:center;margin-top:1rem;min-height:200px;padding:10px 15px;width:100%;z-index:2}.tpr[data-v-daa9bc7a]{height:350px}.ma[data-v-daa9bc7a]{margin:0 auto;width:90%}.divs[data-v-daa9bc7a]{min-height:100vh;width:100%}.btn3[data-v-daa9bc7a]{color:#002fa7;font-size:30px;font-weight:700;text-align:center}input[data-v-daa9bc7a]{margin-bottom:10px}input[type=OTP][data-v-daa9bc7a],input[type=phone][data-v-daa9bc7a]{background-color:#212122;border:2px solid #212122;border-radius:3px;color:#fff;font-weight:600;height:40px;padding-left:15px;width:212px}input[data-v-daa9bc7a]:focus{border:2px solid #212122;outline:0;transition:.8s}[data-v-daa9bc7a]::-moz-placeholder{color:#7f7e7e;left:20px;position:absolute;top:8px}[data-v-daa9bc7a]::placeholder{color:#7f7e7e;left:20px;position:absolute;top:8px}input:focus~input[type=email][data-v-daa9bc7a]::-moz-placeholder{background-color:#002fa7;color:#fff;left:10px;position:absolute;top:7px}input:focus~input[type=email][data-v-daa9bc7a]::placeholder{background-color:#002fa7;color:#fff;left:10px;position:absolute;top:7px}[data-v-daa9bc7a]::-ms-reveal{filter:invert(100%)}button[data-v-daa9bc7a]{background:#212122;border:2px solid #212122;border-radius:3px;box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3);color:#fff;cursor:pointer;font-weight:600;height:38px;width:200px}button[data-v-daa9bc7a]:active{box-shadow:3px 2px 22px 1px rgba(0,0,0,.24);transform:scale(1.05)}.pops[data-v-daa9bc7a]{display:flex;flex-wrap:wrap;justify-content:space-between}.bt[data-v-daa9bc7a]{background:#002fa7;border:2px solid #002fa7;border-radius:20px;box-shadow:0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3);color:#fff;cursor:pointer;flex:0 0 40%;font-weight:600;height:38px;max-width:40%}.bt[data-v-daa9bc7a]:active{box-shadow:3px 2px 22px 1px rgba(0,0,0,.24);transform:scale(1.05)}@media only screen and (max-width:650px){.tpr[data-v-daa9bc7a]{height:50px}}@media only screen and (max-width:500px){.pops[data-v-daa9bc7a]{display:block}.bt[data-v-daa9bc7a]{flex:0 0 100%;margin-top:5px;max-width:100%}}",""]),n.locals={},t.exports=n},461:function(t,e,o){"use strict";o(379)},462:function(t,e,o){var n=o(20)((function(i){return i[1]}));n.push([t.i,".description{opacity:1!important}",""]),n.locals={},t.exports=n},601:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(52),o(155)),c=o(41),d=o(100),l={layout:"default2",data:function(){return{phone:"",appVerifier:"",otp:"",seen:!1,s1:!0,at:[]}},methods:{sendOtp:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=t).s1=!1,10==o.phone.length){e.next=6;break}Object(r.Message)({showClose:!0,message:"Phone Number is Invalid!",type:"warning"}),e.next=18;break;case 6:return o.seen=!0,Object(r.Message)({showClose:!0,message:"Otp sent Succcessfully!",type:"success"}),data={phone:o.phone},"https://selby.in/api/sendOtp",n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)},e.next=13,fetch("https://selby.in/api/sendOtp",n);case 13:return c=e.sent,e.next=16,c.json();case 16:e.sent,c.ok?Object(r.Message)({showClose:!0,message:"Otp sent Succcessfully!",type:"success"}):Object(r.Message)({showClose:!0,message:"Otp not sent!",type:"warning"});case 18:case"end":return e.stop()}}),e)})))()},verifyOtp:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(6!=(o=t).otp.length){e.next=17;break}return e.prev=2,e.next=5,c.a.collection("otp").getFirstListItem('phone="'.concat(o.phone,'" && otp="').concat(o.otp,'"'),{});case 5:e.sent,d.set("setUser",o.phone),t.$store.commit("phone",o.phone),o.$router.push("/Logindetails"),o.saved(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),Object(r.Message)({showClose:!0,message:"Invalid Otp!",type:"warning"});case 15:e.next=18;break;case 17:Object(r.Message)({showClose:!0,message:"Invalid Otp!",type:"warning"});case 18:case"end":return e.stop()}}),e,null,[[2,12]])})))()}},mounted:function(){}},f=(o(459),o(461),o(16)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"divs",staticStyle:{"background-image":"url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/31/full/1704044517-9976.jpg?im=FeatureCrop,size=(826,465)')","background-size":"cover","background-repeat":"no-repeat","background-position":"center"}},[e("div",{staticClass:"features-5",staticStyle:{position:"relative"}},[e("div",{staticClass:"ma"},[e("div",{staticClass:"row",staticStyle:{display:"flex","justify-content":"center"}},[e("div",{staticClass:"col-lg-4 col-12"},[e("div",{staticClass:"tpr"}),t._v(" "),e("div",{staticClass:"dui"},[e("p",{staticClass:"ptxt"},[t._v("LOGIN")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticStyle:{"margin-top":"2rem"},attrs:{type:"Phone",placeholder:"Enter Phone No"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),1==t.seen?e("input",{directives:[{name:"model",rawName:"v-model",value:t.otp,expression:"otp"}],attrs:{type:"OTP",placeholder:"Enter OTP"},domProps:{value:t.otp},on:{input:function(e){e.target.composing||(t.otp=e.target.value)}}}):t._e(),e("br"),t._v(" "),e("br"),t._v(" "),0==t.seen?e("button",{attrs:{type:"submit",value:"Send OTP"},on:{click:function(e){return t.sendOtp()}}},[t._v("\n              Generate OTP")]):t._e(),e("br"),t._v(" "),e("div",{staticClass:"pops"},[1==t.seen?e("button",{staticClass:"bt",attrs:{type:"submit",value:"Verify"},on:{click:t.verifyOtp}},[t._v("\n                Verify OTP")]):t._e(),e("br"),t._v(" "),1==t.seen?e("button",{staticClass:"bt",attrs:{type:"submit",value:"Resend OTP"},on:{click:function(e){return t.sendOtp()}}},[t._v("\n                Resend OTP\n              ")]):t._e()])])])])])])])}),[],!1,null,"daa9bc7a",null);e.default=component.exports}}]);
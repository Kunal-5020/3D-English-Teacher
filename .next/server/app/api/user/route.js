"use strict";(()=>{var e={};e.id=356,e.ids=[356],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},4482:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>g,originalPathname:()=>f,patchFetch:()=>v,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>h});var s={};t.r(s),t.d(s,{POST:()=>u});var a=t(5419),n=t(9108),o=t(9678),i=t(9087);async function u(e){try{let{user:r}=await e.json();return(0,i.gt)(r),new Response(JSON.stringify({message:"User data saved successfully!"}),{status:200,headers:{"Content-Type":"application/json"}})}catch(e){return console.error("Error saving user data:",e),new Response(JSON.stringify({error:"Failed to save user data."}),{status:500,headers:{"Content-Type":"application/json"}})}}let p=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/user/route",pathname:"/api/user",filename:"route",bundlePath:"app/api/user/route"},resolvedPagePath:"C:\\Users\\kunal\\OneDrive\\Desktop\\test2\\3D-English-Teacher\\src\\app\\api\\user\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:d,headerHooks:g,staticGenerationBailout:h}=p,f="/api/user/route";function v(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:l})}},5419:(e,r,t)=>{e.exports=t(517)},9087:(e,r,t)=>{t.d(r,{gt:()=>i,is:()=>u});var s=t(7147),a=t.n(s),n=t(1017);let o=t.n(n)().join(process.cwd(),"src","app","storage","userData.json");function i(e){a().writeFileSync(o,JSON.stringify(e,null,2),"utf8"),console.log("saved")}function u(){return a().existsSync(o)?JSON.parse(a().readFileSync(o,"utf8")):null}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638],()=>t(4482));module.exports=s})();
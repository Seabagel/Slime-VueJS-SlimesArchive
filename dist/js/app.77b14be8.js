(function(e){function t(t){for(var r,s,o=t[0],i=t[1],u=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"050a":function(e,t,n){"use strict";n("32ce")},"22e3":function(e,t,n){},"32ce":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("ebf8"),a=n.n(c),s=Object(r["e"])("img",{alt:"logo",src:a.a},null,-1),o=Object(r["e"])("h1",{alt:"app_name"},"Mama Slime Archives",-1),i={key:0},u={key:1},l=Object(r["e"])("img",{src:"https://cdn-images-1.medium.com/max/800/0*zzg_YoHtb5wXe98Z.gif",alt:""},null,-1),p=[l];function f(e,t,n,c,a,l){var f=Object(r["l"])("HelloWorld");return Object(r["h"])(),Object(r["d"])(r["a"],null,[s,o,a.messages.length>0?(Object(r["h"])(),Object(r["d"])("div",i,[Object(r["e"])("ul",null,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(a.messages,(function(e){return Object(r["h"])(),Object(r["d"])("li",{key:e},[Object(r["g"])(f,{message:e},null,8,["message"])])})),128))])])):Object(r["c"])("",!0),0==a.messages.length?(Object(r["h"])(),Object(r["d"])("div",u,p)):Object(r["c"])("",!0)],64)}var b=n("1da1"),d=(n("96cf"),n("99af"),function(e){return Object(r["j"])("data-v-424009cc"),e=e(),Object(r["i"])(),e}),m={class:"message-box"},j={class:"basic-grid"},O={class:"profile-pic"},g=["src"],h={class:"profileContent"},v={class:"profile-info"},y={class:"user-color"},w=d((function(){return Object(r["e"])("div",{class:"basic-grid"},null,-1)}));function x(e,t,n,c,a,s){return Object(r["h"])(),Object(r["d"])("div",m,[Object(r["e"])("div",j,[Object(r["e"])("div",O,[Object(r["e"])("img",{src:n.message.pictureURL,alt:""},null,8,g)]),Object(r["e"])("div",h,[Object(r["e"])("div",v,[Object(r["e"])("span",y,Object(r["m"])(n.message.username),1),Object(r["f"])(" "+Object(r["m"])(n.message.timestamp),1)]),Object(r["f"])(" "+Object(r["m"])(n.message.msgbody),1)])]),w])}var _={name:"HelloWorld",props:{message:Object}},k=(n("eda5"),n("d959")),P=n.n(k);const R=P()(_,[["render",x],["__scopeId","data-v-424009cc"]]);var S=R,A=n("a18f"),M={name:"App",data:function(){return{messages:[]}},components:{HelloWorld:S},methods:{createEntryAPI:function(e,t,n,r,c){var a=this;return Object(b["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,A("/api/create_entry?message_id=".concat(e,"&username=").concat(t,"&msgbody=").concat(n,"&timestamp=").concat(r,"&pictureURL=").concat(c));case 2:return s.next=4,s.sent.json().then((function(e){a.messages.push(e)}));case 4:case"end":return s.stop()}}),s)})))()},readEntriesAPI:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A("/api/read_entries");case 2:return t.next=4,t.sent.json().then((function(t){console.log(t),e.messages=t}));case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.readEntriesAPI();case 1:case"end":return t.stop()}}),t)})))()}};n("050a");const H=P()(M,[["render",f]]);var I=H;Object(r["b"])(I).mount("#app")},ebf8:function(e,t,n){e.exports=n.p+"img/mama.c762e616.jpg"},eda5:function(e,t,n){"use strict";n("22e3")}});
//# sourceMappingURL=app.77b14be8.js.map
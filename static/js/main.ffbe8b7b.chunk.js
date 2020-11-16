(this["webpackJsonpeth2.0-deposit-contract-status"]=this["webpackJsonpeth2.0-deposit-contract-status"]||[]).push([[0],{195:function(e,t,n){},198:function(e,t,n){},210:function(e,t){},233:function(e,t){},235:function(e,t){},250:function(e,t){},325:function(e,t){},327:function(e,t){},363:function(e,t){},365:function(e,t){},371:function(e,t){},451:function(e,t,n){"use strict";n.r(t);var a=n(6),o=n.n(a),l=n(188),s=n.n(l),i=(n(195),n(17)),r=n.n(i),u=n(189),c=n(99),p=n(190),y=(n(197),n(198),n(98)),d=n.n(y),m="wss://mainnet.infura.io/ws/v3/810e7e7563ad46f38bd40bd8b332b322",b="0x00000000219ab540356cBB839Cbe05303d7705Fa",f=new d.a.providers.WebsocketProvider(m),h=new(new d.a(f).eth.Contract)([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes",name:"pubkey",type:"bytes"},{indexed:!1,internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{indexed:!1,internalType:"bytes",name:"amount",type:"bytes"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"bytes",name:"index",type:"bytes"}],name:"DepositEvent",type:"event"},{inputs:[{internalType:"bytes",name:"pubkey",type:"bytes"},{internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{internalType:"bytes",name:"signature",type:"bytes"},{internalType:"bytes32",name:"deposit_data_root",type:"bytes32"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"get_deposit_count",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[],name:"get_deposit_root",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"}]);h.options.address=b;var v=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],l=t[1],s=Object(a.useState)(!0),i=Object(c.a)(s,2),y=i[0],d=i[1];function m(){return(m=Object(u.a)(r.a.mark((function e(){var t,n,a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),t={},e.next=5,h.methods.get_deposit_count().call();case 5:return n=e.sent,a=parseInt(n.substring(2).match(/../g).reverse().join(""),16),t.totalCallCount=a,console.log("Total count : ",a),e.next=11,h.getPastEvents("DepositEvent",{fromBlock:11052984});case 11:o=e.sent,console.log("---------------"),t.invalidRegistry=[],s=0,o.forEach((function(e){var n=e.returnValues.amount,a=parseInt(n.substring(2).match(/../g).reverse().join(""),16);a>=32e9?s++:(console.log("TxHash : ",e.transactionHash),console.log("Block number :",e.blockNumber),console.log("Amount : ",a),console.log("---------------"),t.invalidRegistry.push({transactionHash:e.transactionHash,blockNumber:e.blockNumber,amount:a}))})),t.validCount=s,console.log("Total count : ",a),console.log("Valid Count : "+s),l(t);case 20:return e.prev=20,d(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,,20,23]])})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]);var b={};return b=y?o.a.createElement("p",null,"Loading..."):o.a.createElement("div",null,o.a.createElement("div",{style:{maxWidth:"300px"}},o.a.createElement(p.a,{value:n.validCount,maxValue:16384,text:"".concat((n.validCount/16384*100).toFixed(2),"%")})),o.a.createElement("p",null,n.validCount," validators registered, more ",Math.max(16384-n.validCount,0)," needed to fill 16384"),o.a.createElement("p",null,"Invalid Registry (",n.invalidRegistry.length,") :"),o.a.createElement("table",{className:"styled-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Transaction Hash"),o.a.createElement("th",null,"Block"),o.a.createElement("th",null,"Amount"))),o.a.createElement("tbody",null,n.invalidRegistry.map((function(e,t){var n="https://etherscan.io/tx/".concat(e.transactionHash);return o.a.createElement("tr",{key:t},o.a.createElement("td",null,t+1),o.a.createElement("td",null,o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:n},e.transactionHash)),o.a.createElement("td",null,e.blockNumber),o.a.createElement("td",null,(e.amount/1e9).toFixed(6),"\xa0ETH"))}))))),o.a.createElement("div",{style:{position:"absolute",left:"50%",transform:"translate(-50%, 0%)",paddingTop:"30px"}},b)},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,452)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),l(e),s(e)}))};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),g()}},[[451,1,2]]]);
//# sourceMappingURL=main.ffbe8b7b.chunk.js.map
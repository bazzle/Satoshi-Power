!function(){"use strict";const e={buildElement:(e,n)=>{const t=document.createElement(e);return t.classList.add(n),t},getPercentage:e=>Math.floor(100*e)};function n(n,t,a){this.unitName=t,this.unitPrice=n/1e8,this.unitPercentage=e.getPercentage(this.unitPrice),this.smallUnitName=a,this.smallUnitPrice=this.unitName===this.smallUnitName?this.unitPrice:100*n/1e8,this.smallUnitPercentage=e.getPercentage(this.smallUnitPrice),this.smallestUnitKilled=this.unitName!=this.smallUnitName&&this.smallUnitPercentage>100}function t(e,t,a){switch(e){case"ARS":{const e=new n(t,"Argentine Peso","Argentine Peso");Object.assign(a,e);break}case"AUD":{const e=new n(t,"Australian Dollar","Australian Cent");Object.assign(a,e);break}case"BRL":{const e=new n(t,"Brazilian Real","Brazilian Centavo");Object.assign(a,e);break}case"CAD":{const e=new n(t,"Canadian Dollar","Canadian Cent");Object.assign(a,e);break}case"CHF":{const e=new n(t,"Swiss Franc","Swiss Rappen");Object.assign(a,e);break}case"CLP":{const e=new n(t,"Chilean Peso","Chilean Peso");Object.assign(a,e);break}case"CNY":{const e=new n(t,"Chinese Yuan","Chinese Fen");Object.assign(a,e);break}case"CZK":{const e=new n(t,"Czech Koruna","Czech Haléř");Object.assign(a,e);break}case"DKK":{const e=new n(t,"Danish Krone","Danish Øre");Object.assign(a,e);break}case"EUR":{const e=new n(t,"Euro","Euro Cent");Object.assign(a,e);break}case"GBP":{const e=new n(t,"Pound Sterling","British Penny");Object.assign(a,e);break}case"HKD":{const e=new n(t,"Hong Kong Dollar","Hong Kong Cent");Object.assign(a,e);break}case"HRK":{const e=new n(t,"Croatian Kuna","Croatian Lipa");Object.assign(a,e);break}case"HUF":{const e=new n(t,"Hungarian Forint","Hungarian Forint");Object.assign(a,e);break}case"INR":{const e=new n(t,"Indian Rupee","Indian Paisa");Object.assign(a,e);break}case"ISK":{const e=new n(t,"Icelandic Króna","Icelandic Króna");Object.assign(a,e);break}case"JPY":{const e=new n(t,"Japanese Yen","Japanese Yen");Object.assign(a,e);break}case"KRW":{const e=new n(t,"South Korean Won","South Korean Won");Object.assign(a,e);break}case"NZD":{const e=new n(t,"New Zealand Dollar","New Zealand Cent");Object.assign(a,e);break}case"PLN":{const e=new n(t,"Polish Złoty","Polish Grosz");Object.assign(a,e);break}case"RON":{const e=new n(t,"Romanian Leu","Romanian Ban");Object.assign(a,e);break}case"RUB":{const e=new n(t,"Russian Ruble","Russian Kopek");Object.assign(a,e);break}case"SEK":{const e=new n(t,"Swedish Krona","Swedish Öre");Object.assign(a,e);break}case"SGD":{const e=new n(t,"Singapore Dollar","Singapore Cent");Object.assign(a,e);break}case"THB":{const e=new n(t,"Thai Baht","Thai Satang");Object.assign(a,e);break}case"TRY":{const e=new n(t,"Turkish Lira","Turkish Kuruş");Object.assign(a,e);break}case"TWD":{const e=new n(t,"New Taiwan Dollar","Taiwanese Cent");Object.assign(a,e);break}case"USD":{const e=new n(t,"United States Dollar","United States Cent");Object.assign(a,e);break}}}const a=document.getElementById("js-app"),s=e.buildElement("ul","o-currencygrid"),i=n=>{const t=n>100?100:n,a=e.buildElement("span","c-currencyitem__percentage-bar");return a.style.width=t+"%",a};function c(n){const t=window.matchMedia("(max-width: 600px)"),a=n.unitName,c=n.unitPercentage,r=n.smallUnitName,o=n.smallUnitPercentage,l=n.smallestUnitKilled;let u,b=c<1?`${a} <1%`:`${a} ${c}%`,d=`${r} ${o}%`;const m=e.buildElement("li","c-currencyitem");u=e.buildElement("div","c-currencyitem__main");const g=e.buildElement("span","c-currencyitem__text");if(u.append(g),u.append(i(o)),g.innerText=d,m.append(u),l){m.setAttribute("tabindex",0),m.classList.add("c-currencyitem--killed");const h=e.buildElement("div","c-currencyitem__secondary"),p=e.buildElement("span","c-currencyitem__text");function w(){function e(){g.innerText=b}function n(){g.innerText=d}t.matches?(m.append(h),m.removeEventListener("mouseenter",e),m.removeEventListener("mouseleave",n)):(h.remove(),m.addEventListener("mouseenter",e),m.addEventListener("mouseleave",n))}let j;h.append(p),p.innerText=b,h.append(i(c)),w(),window.addEventListener("resize",(()=>{clearTimeout(j),j=setTimeout((()=>{w()}),200)}))}s.append(m)}let r;!async function(){try{r=await fetch("https://blockchain.info/ticker"),r=await r.json()}catch(e){console.log("No data")}finally{a.append(s),function(e){for(const n in e){let a=e[n];const s=a.symbol,i=a.sell;["15m","buy","last"].forEach((e=>{delete a[e]})),t(s,i,a)}}(r),e=r,(e=Object.entries(e)).sort(((e,n)=>e[1].smallUnitPercentage-n[1].smallUnitPercentage)),r=Object.fromEntries(e);for(const e in r)c(r[e])}var e}(),function(){const n="npub1y73ajm09j3wra8jj9e3h8rkj3xculh520m9plgc6j57rkg7g0yyqt5p5dt",t=`${n.substring(0,15)}...${n.slice(-15)}`,a=e.buildElement("span","c-nostr-copy__message");a.innerHTML="Copied";const s=document.getElementById("js-nostr-key"),i=document.getElementById("js-nostr-copy"),c=document.querySelector(".js-copy-icon");s.innerText=t,i.addEventListener("click",(()=>{navigator.clipboard.writeText(n).then((function(){console.log("copied"),i.append(a),c.remove(),console.log("copied"),setTimeout((()=>{i.append(c),a.remove()}),2e3)})).catch((function(e){console.error("Failed to copy text to clipboard: ",e)}))}))}()}();
//# sourceMappingURL=main.js.map

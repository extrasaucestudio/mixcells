(function(){const r=document.createElement("link").relList;
if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};
return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();
function s(n){let r=0;const o=i=>{r=i,n.innerHTML=`Voir nos forfaits`};n.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    
    <img src="/vite.svg" class="logo" alt="Voyance Francophone" />
    <h1>Voyance Francophone!</h1>
    <p class="read-the-docs">
    <strong>Bienvenue</strong>
    
    </p>
    <div id="myNav" class="card">
    xxxxxxxxx
    <button id="counter" type="button"></button>
  
    </div>
  
  <!--
  <div class="card">
  <a href="https://buy.stripe.com/14k8yn6fvdPVgdW4gi" target="_blank">
  <button id="myNav" type="button"></button>
</a>
  </div>
  
  -->
     
    
    
  </div>
`;s(document.querySelector("#counter"));

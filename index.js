import{a as p,S as y,i as l}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="50613433-846385d44e3ce175ad59ef638";function b(t){const o={key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:o}).then(n=>n.data.hits)}const c=document.querySelector(".gallery");let a;function L(t){const o=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:r,views:i,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new y(".gallery a")}function S(){c.innerHTML=""}function q(){document.querySelector(".loader").style.display="inline-block"}function P(){document.querySelector(".loader").style.display="none"}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');let f="";u.addEventListener("submit",t=>{t.preventDefault();const o=v.value.trim();if(o===""){l.info({title:"Warning",message:"Please enter a search term."});return}f=o,S(),$()});function $(){q(),b(f).then(t=>{if(t.length===0){l.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again."});return}L(t)}).catch(t=>{l.error({title:"Error",message:"An error occurred. Please try again later."}),console.error(t)}).finally(()=>{P()})}
//# sourceMappingURL=index.js.map

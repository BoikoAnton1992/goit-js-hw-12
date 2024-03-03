import{a as y,i as v,S as w}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const b="42554743-967d4a87bc85b22a32926b61b",L="https://pixabay.com/api/";async function E(t,o,i){const s=`${L}?key=${b}&q=${t}&page=${o}&per_page=${i}`;return await y.get(s).then(({data:e})=>e).catch(e=>{console.error("Error while fetching images from pixabay:",e.message)})}const S=document.querySelector(".gallery");function x(t){const o=t.map(({webformatURL:i,likes:s,views:e,comments:r,downloads:n,largeImageURL:A,tags:p})=>`
   <div class="gallery-item">
  <a href="${A}" class="gallery-link">
    <img src="${i}" class="gallery-image" alt="${p}"/>
  </a>
  <div class="gallery-info">
    <div class="info-container">
 <h4 class="info-title">Likes:</h4>
    <p class="info-p">${s}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Views:</h4>
    <p class="info-p">${e}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Comments:</h4>
    <p class="info-p">${r}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Downloads:</h4>
    <p class="info-p">${n}</p>
    </div>
  </div>
</div>
        `).join("");S.insertAdjacentHTML("beforeend",o)}const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",q=document.querySelector(".search"),f=document.querySelector(".loader"),B=document.querySelector(".input-container"),c=document.querySelector(".load-more"),I=document.querySelector(".gallery"),d=15;let a,m;function u(t){t.classList.remove("is-hidden")}function l(t){t.classList.add("is-hidden")}function M(){I.innerHTML=null}function g(){return l(c),l(f),v.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:U,theme:"dark",close:!1})}function Y(){new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function J(){const t=document.querySelector(".gallery-item");if(a===1)return;const o=t.getBoundingClientRect();window.scrollBy({behavior:"smooth",top:(o.height+24)*2})}async function h(){u(f);const t=await E(m,a,d);if(t.hits.length<1)return g();x(t.hits),Y(),l(f),a*d<t.totalHits?u(c):(l(c),g()),J()}B.addEventListener("submit",t=>{t.preventDefault(),M(),m=q.value.trim(),a=1,h()});c.addEventListener("click",()=>{a++,h()});
//# sourceMappingURL=commonHelpers.js.map

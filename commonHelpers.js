import{a as y,S as v,i as w}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const b="42554743-967d4a87bc85b22a32926b61b",E="https://pixabay.com/api/";async function L(t,o,n){const s=`${E}?key=${b}&q=${t}&page=${o}&per_page=${n}`;return await y.get(s).then(({data:e})=>e).catch(e=>{console.error("Error while fetching images from pixabay:",e.message)})}function S(t){return t.map(({webformatURL:o,likes:n,views:s,comments:e,downloads:r,largeImageURL:i,tags:p})=>`
   <div class="gallery-item">
  <a href="${i}" class="gallery-link">
    <img src="${o}" class="gallery-image" alt="${p}"/>
  </a>
  <div class="gallery-info">
    <div class="info-container">
 <h4 class="info-title">Likes:</h4>
    <p class="info-p">${n}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Views:</h4>
    <p class="info-p">${s}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Comments:</h4>
    <p class="info-p">${e}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Downloads:</h4>
    <p class="info-p">${r}</p>
    </div>
  </div>
</div>
        `).join("")}const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",x=new v(".gallery a",{captionsData:"alt",captionDelay:250}),q=document.querySelector(".search"),d=document.querySelector(".loader"),B=document.querySelector(".input-container"),a=document.querySelector(".load-more"),h=document.querySelector(".gallery"),g=15;let c,u;function m(t){t.classList.remove("is-hidden")}function l(t){t.classList.add("is-hidden")}function I(){h.innerHTML=null}function f(){return l(a),l(d),w.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:U,theme:"dark",close:!1})}function M(){const t=document.querySelector(".gallery-item");if(c===1)return;const o=t.getBoundingClientRect();window.scrollBy({behavior:"smooth",top:(o.height+24)*2})}async function A(){if(u.trim()===""){f();return}m(d);const t=await L(u,c,g);if(t.hits.length<1)return f();const o=S(t.hits);h.insertAdjacentHTML("beforeend",o),x.refresh(),l(d),c*g<t.totalHits?m(a):(l(a),f()),M()}B.addEventListener("submit",t=>{t.preventDefault(),I(),l(a),u=q.value.trim(),c=1,A()});a.addEventListener("click",()=>{c++,A()});
//# sourceMappingURL=commonHelpers.js.map

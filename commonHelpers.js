import{a as m,i as A,S as h}from"./assets/vendor-483db976.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="42554743-967d4a87bc85b22a32926b61b",y="https://pixabay.com/api/";async function v(t,s){const i=`${y}?key=${p}&q=${t}&page=${s}&per_page=18`;return await m.get(i).then(({data:o})=>o.hits).catch(o=>{console.error("Error while fetching images from pixabay:",o.message)})}const w=document.querySelector(".gallery");function L(t){const s=t.map(({webformatURL:i,likes:o,views:e,comments:r,downloads:n,largeImageURL:u,tags:g})=>`
   <div class="gallery-item">
  <a href="${u}" class="gallery-link">
    <img src="${i}" class="gallery-image" alt="${g}"/>
  </a>
  <div class="gallery-info">
    <div class="info-container">
 <h4 class="info-title">Likes:</h4>
    <p class="info-p">${o}</p>
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
        `).join("");w.insertAdjacentHTML("beforeend",s)}const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",E=document.querySelector(".search"),c=document.querySelector(".loader"),S=document.querySelector(".input-container"),x=document.querySelector(".load-more"),U=document.querySelector(".gallery");let a,l;function q(){c.classList.remove("is-hidden")}function f(){c.classList.add("is-hidden")}function M(){U.innerHTML=null}function Y(){return f(),A.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:b,theme:"dark",close:!1})}function I(){new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function d(){q();const t=await v(l,a);if(t.length<1)return Y();L(t),I(),f()}S.addEventListener("submit",t=>{t.preventDefault(),M(),l=E.value.trim(),a=1,d()});x.addEventListener("click",()=>{a++,d()});
//# sourceMappingURL=commonHelpers.js.map

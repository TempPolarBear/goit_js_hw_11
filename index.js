import{a as d,S as m,i as n}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="56898199-01c5f5b99e8faa07dd762a3d2";function y(o){return d.get("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:f})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span>${t}</span>
    </p>

    <p class="info-item">
      <b>Views</b>
      <span>${i}</span>
    </p>

    <p class="info-item">
      <b>Comments</b>
      <span>${p}</span>
    </p>

    <p class="info-item">
      <b>Downloads</b>
      <span>${f}</span>
    </p>
  </div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function q(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search query!",position:"topRight"});return}L(),q(),y(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(()=>{n.error({message:"Something went wrong!",position:"topRight"})}).finally(()=>{S()}),l.reset()});
//# sourceMappingURL=index.js.map

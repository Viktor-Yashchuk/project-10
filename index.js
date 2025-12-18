import{i as T,a as $,S as O,N as I,P as H,K as W,A as J,R as Q,M as X}from"./assets/vendor-DiZI_0QC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=s(i);fetch(i.href,c)}})();const o={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},Z=document.querySelector(".burger-btn"),g=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const ee=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),j=document.querySelector(".mobile-burger-menu-top-line"),N=document.querySelector(".mobile-burger-menu-mid-line"),F=document.querySelector(".mobile-burger-menu-bot-line"),te=document.querySelector(".header"),R=e=>{e.key==="Escape"&&v()},se=()=>{j.classList.toggle("top-line"),N.classList.toggle("mid-line"),F.classList.toggle("bot-line")},ie=()=>{j.classList.remove("top-line"),N.classList.remove("mid-line"),F.classList.remove("bot-line")},ae=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",R),g.classList.toggle("is-open"),g.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),se()},v=()=>{document.body.style.overflow="",g.classList.remove("is-open"),document.removeEventListener("keydown",R),ie()},oe=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||v()},ne=e=>{e.target.closest(".header-logo, .burger-btn")||v()};Z.addEventListener("click",ae);te.addEventListener("click",ne);g.addEventListener("click",oe);ee.forEach(e=>{e.addEventListener("click",v)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",g.classList.remove("is-open"),v())});const l="/project-10/",D=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",z=()=>h==="mobile"||h==="tablet"?8:9;let f,a=1,b,h=D(),p=z();const y=()=>h==="mobile",V=e=>T.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function E(){const e=Math.ceil(b/p);if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${a===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${l}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,a===1){for(let s=1;s<=Math.min(3,e);s++)t+=m(s);e>3&&(t+='<li class="dots">…</li>',t+=m(e))}else if(a===e){t+=m(1),e>3&&(t+='<li class="dots">…</li>');for(let s=e-2;s<=e;s++)s>1&&(t+=m(s))}else{t+=m(1),a>3&&(t+='<li class="dots">…</li>');for(let s=a-1;s<=a+1;s+=1)s>1&&s<e&&(t+=m(s));a<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=m(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${a===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${l}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,o.petsPagination.style.display="flex",o.petsPagination.innerHTML=t}function m(e){return`
    <li>
      <button
        class="pagination-btn ${a===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const ce=async e=>{const t=e.target.closest("button");if(!t)return;const s=Math.ceil(b/p);t.dataset.action==="prev"&&a>1&&(a-=1),t.dataset.action==="next"&&a<s&&(a+=1),t.dataset.page&&(a=+t.dataset.page);const n=o.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:n,behavior:"smooth"}),B(),await w(a,f),E()};o.petsPagination.addEventListener("click",ce);const re=async()=>await $("https://paw-hut.b.goit.study/api/categories"),le=e=>{e.unshift({name:"Всі"});const t=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((s,n)=>t.indexOf(s.name)-t.indexOf(n.name)),e.map(s=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${s._id}" type="button">${s.name}</button></li>`).join("")},de=async()=>{try{const e=await re();o.ctgsList.innerHTML=le(e.data);const t=document.querySelector(".pets-ctgs-btn");t.classList.add("active"),t.dataset.id="all",t.setAttribute("aria-pressed","true")}catch(e){V(e.message)}},ue=async(e,t)=>{const s={page:e,limit:p};return t&&(s.categoryId=t),await $("https://paw-hut.b.goit.study/api/animals",{params:s})},C=e=>e.map(t=>`<li class="pets-item" role="listitem">
    <img class="pets-img" src="${t.image}" alt="${t.species}">
    <p class="pets-species">${t.species}</p>
    <h3 class="pets-name">${t.name}</h3>
    <ul class="pets-own-ctgs-list">${t.categories.map(s=>`<li class="pets-own-ctgs-item"><p>${s.name}</p></li>`).join("")}</ul>
    <ul class="pets-info">
    <li><p>${t.age}</p></li>
    <li><p>${t.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${t.shortDescription}</p>
    <button class="pets-modal-btn" type="submit">Дізнатись більше</button>
</li>`).join(""),w=async(e,t)=>{try{fe();const s=await ue(e,t);ge(),y()?o.petsList.insertAdjacentHTML("beforeend",C(s.data.animals)):o.petsList.innerHTML=C(s.data.animals),b=s.data.totalItems,o.petsList.querySelectorAll(".pets-item").forEach((i,c)=>{const r=s.data.animals[c];r&&(i.dataset.description=r.description||"",i.dataset.health=r.healthStatus||"",i.dataset.behavior=r.behavior||"")})}catch(s){V(s.message)}},K=()=>o.petsList.innerHTML="",pe=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(s=>{s.classList.remove("active"),s.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},me=async e=>{e.target.nodeName==="BUTTON"&&(q(),B(),pe(e.target),f=e.target.dataset.id==="all"?void 0:e.target.dataset.id,a=1,K(),await w(a,f),y()&&b>p?x():y()||E())};o.ctgsList.addEventListener("click",me);const be=async()=>{a++,await w(a,f),a*p>=b&&q()};o.petsLoadBtn.addEventListener("click",be);const q=()=>{o.petsLoadBtn.style.display="none"},x=()=>{o.petsLoadBtn.style.display="block"},ge=()=>{o.petsLoader.style.display="none"},fe=()=>{o.petsLoader.style.display="block"},B=()=>{o.petsPagination.style.display="none"},he=()=>{const e=D();e!==h&&(K(),q(),B(),h=e,p=z(),a=1,w(a,f),e==="mobile"&&a*p<b?x():e!=="mobile"&&E())};window.addEventListener("resize",he);const ye=async()=>{await de(),await w(a),y()&&b>p?x():y()||E()};ye();function ve(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="24" height="24">
        <use href="${l}sprite.svg#icon-close"></use></svg></button>
        <div class="details-modal-body">
          <div class="details-modal-left">
            <img class="details-modal-img" src="${e.image}" alt="${e.species}" />
          </div>
          <div class="details-modal-right">
            <p class="details-modal-species">${e.species}</p>
            <h3 id="details-modal-title" class="details-modal-name">${e.name}</h3>
            <div class="details-modal-info">
              <p>${e.age}</p>
              <p>${e.gender}</p>
            </div>

            <h4 class="details-modal-subtitle">Опис:</h4>
            <p id="details-modal-description" class="details-modal-description">${e.description||"—"}</p>

            <h4 class="details-modal-subtitle">Здоровʼя:</h4>
            <p class="details-modal-health">${e.health||"—"}</p>

            <h4 class="details-modal-subtitle">Поведінка:</h4>
            <p class="details-modal-behavior">${e.behavior||"—"}</p>

            <button class="details-modal-adopt-btn" type="button" data-details-modal-adopt>Взяти додому</button>
          </div>
        </div>
      </div>
    </div>`}function U(e){const t=ve(e);document.body.insertAdjacentHTML("beforeend",t),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const s=document.querySelector("[data-details-modal-backdrop]"),n=s.querySelector("[data-details-modal-close]"),i=s.querySelector("[data-details-modal-adopt]");n.addEventListener("click",()=>k(s)),s.addEventListener("click",r=>{r.target===s&&k(s)});function c(r){r.key==="Escape"&&(k(s),window.removeEventListener("keydown",c))}window.addEventListener("keydown",c),i.addEventListener("click",()=>{k(s)})}function k(e){e.remove(),document.body.classList.remove("body-lock")}o.petsList.addEventListener("click",e=>{var i,c,r,d,L;const t=e.target.closest(".pets-modal-btn");if(!t)return;const s=t.closest(".pets-item"),n={image:((i=s.querySelector(".pets-img"))==null?void 0:i.src)||"",species:((c=s.querySelector(".pets-species"))==null?void 0:c.textContent)||"",name:((r=s.querySelector(".pets-name"))==null?void 0:r.textContent)||"",age:((d=s.querySelector(".pets-info p:nth-child(1)"))==null?void 0:d.textContent)||"",gender:((L=s.querySelector(".pets-info p:nth-child(2)"))==null?void 0:L.textContent)||"",description:s.dataset.description||"",health:s.dataset.health||"",behavior:s.dataset.behavior||""};U(n)});o.petsList.addEventListener("keydown",e=>{var s,n,i,c,r;const t=e.target.closest(".pets-modal-btn");if(t&&(e.key==="Enter"||e.key===" ")){e.preventDefault();const d=t.closest(".pets-item"),L={image:((s=d.querySelector(".pets-img"))==null?void 0:s.src)||"",species:((n=d.querySelector(".pets-species"))==null?void 0:n.textContent)||"",name:((i=d.querySelector(".pets-name"))==null?void 0:i.textContent)||"",age:((c=d.querySelector(".pets-info p:nth-child(1)"))==null?void 0:c.textContent)||"",gender:((r=d.querySelector(".pets-info p:nth-child(2)"))==null?void 0:r.textContent)||"",description:d.dataset.description||"",health:d.dataset.health||"",behavior:d.dataset.behavior||""};U(L)}});const M=document.querySelector(".about-swiper-button-next"),P=document.querySelector(".about-swiper-button-prev"),we=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],Le=we.map(({id:e,description:t})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${l}about-us/desktop/slide-p${e}-desk.webp 1x, ${l}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${l}about-us/tablet/slide-p${e}-tab.webp 1x, ${l}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${l}about-us/mobile/slide-p${e}-mob.webp 1x, ${l}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${l}about-us/mobile/slide-p${e}-mob.webp"
              alt="slide"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${t}</p>
          </div>
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=Le;const u=new O(".about-mySwiper",{modules:[I,H,W],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function Y(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}Y();window.addEventListener("resize",Y);const _=()=>{u.isEnd?M.classList.add("about-btn-disabled"):M.classList.remove("about-btn-disabled"),u.isBeginning?P.classList.add("about-btn-disabled"):P.classList.remove("about-btn-disabled")};u.on("slideChange",_);_();const G=document.querySelector(".about");u.on("slideChangeTransitionStart",()=>{G&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});u.on("slideChangeTransitionEnd",()=>{const e=u.slides[u.activeIndex],t=e.querySelector(".about-id");t&&t.classList.add("show");const s=e.querySelector(".about-overlay");s&&s.classList.add("fade-out")});const ke=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const s=u.slides[u.activeIndex],n=s.querySelector(".about-id"),i=s.querySelector(".about-overlay");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show")),i&&(i.classList.remove("fade-out"),i.offsetWidth,i.classList.add("fade-out"))}})},{threshold:.7});ke.observe(G);document.addEventListener("DOMContentLoaded",()=>{new J(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const t=e.target.closest(".ac-trigger");t&&setTimeout(()=>{window.innerWidth<375&&t.scrollIntoView({behavior:"smooth",block:"start"})},450)});$.defaults.baseURL="https://paw-hut.b.goit.study";const Se=async()=>(await $.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",$e);async function $e(){try{const e=await Se();Ee(e.feedbacks),document.querySelectorAll(".rating").forEach(t=>{const s=t.dataset.score;new Q(t,{score:s,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${l}icons/filled.svg`,starOff:`${l}icons/outline.svg`,starHalf:`${l}icons/half.svg`}).init()})}catch{T.error({message:"Error",position:"center"})}}const Ee=e=>{const t=e.map(s=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${s.rate}"></div>
                <p class="success-item-desc">${s.description}</p>
            </div>
            <p class="success-item-author">${s.author}</p>
        </li>`).join("");o.successList.innerHTML=t},S=new O(".success-swiper",{modules:[I,H,W,X],spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},pagination:{el:".success-swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2,pagination:{dynamicBullets:!0,dynamicMainBullets:1}}}});S.on("slideChange",()=>{S.isEnd?o.successBtnForward.classList.add("success-btn-disabled"):o.successBtnForward.classList.remove("success-btn-disabled")});S.on("slideChange",()=>{S.isBeginning?o.successBtnBack.classList.add("success-btn-disabled"):o.successBtnBack.classList.remove("success-btn-disabled")});const qe=o.successAnimation,A=30;for(let e=0;e<A;e++){const t=document.createElement("div");t.classList.add("paw"),t.style.animationDelay=`${(A-e)*.25}s`;const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),s.appendChild(n),t.appendChild(s),qe.appendChild(t)}
//# sourceMappingURL=index.js.map

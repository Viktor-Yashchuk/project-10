import{i as K,a as C,S as F,N as V,P as U,K as Y,A as _}from"./assets/vendor-DAtLxqiX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const r={ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},G=document.querySelector(".burger-btn"),g=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const J=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),B=document.querySelector(".mobile-burger-menu-top-line"),A=document.querySelector(".mobile-burger-menu-mid-line"),T=document.querySelector(".mobile-burger-menu-bot-line"),Q=document.querySelector(".header"),I=e=>{e.key==="Escape"&&y()},X=()=>{B.classList.toggle("top-line"),A.classList.toggle("mid-line"),T.classList.toggle("bot-line")},Z=()=>{B.classList.remove("top-line"),A.classList.remove("mid-line"),T.classList.remove("bot-line")},ee=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",I),g.classList.toggle("is-open"),g.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),X()},y=()=>{document.body.style.overflow="",g.classList.remove("is-open"),document.removeEventListener("keydown",I),Z()},te=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||y()},se=e=>{e.target.closest(".header-logo, .burger-btn")||y()};G.addEventListener("click",ee);Q.addEventListener("click",se);g.addEventListener("click",te);J.forEach(e=>{e.addEventListener("click",y)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",g.classList.remove("is-open"),y())});const O=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",W=()=>h==="mobile"||h==="tablet"?8:9;let f,o=1,b,h=O(),u=W();const v=()=>h==="mobile",H=e=>K.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function k(){const e=Math.ceil(b/u);if(e<=1)return;let t="";if(t+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${o===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,o===1){for(let s=1;s<=Math.min(3,e);s++)t+=p(s);e>3&&(t+='<li class="dots">…</li>',t+=p(e))}else if(o===e){t+=p(1),e>3&&(t+='<li class="dots">…</li>');for(let s=e-2;s<=e;s++)s>1&&(t+=p(s))}else{t+=p(1),o>3&&(t+='<li class="dots">…</li>');for(let s=o-1;s<=o+1;s+=1)s>1&&s<e&&(t+=p(s));o<e-2&&(t+='<li class="dots">…</li>'),e>1&&(t+=p(e))}t+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${o===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,r.petsPagination.style.display="flex",r.petsPagination.innerHTML=t}function p(e){return`
    <li>
      <button
        class="pagination-btn ${o===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const ie=async e=>{const t=e.target.closest("button");if(!t)return;const s=Math.ceil(b/u);t.dataset.action==="prev"&&o>1&&(o-=1),t.dataset.action==="next"&&o<s&&(o+=1),t.dataset.page&&(o=+t.dataset.page);const n=r.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:n,behavior:"smooth"}),$(),await w(o,f),k()};r.petsPagination.addEventListener("click",ie);const oe=async()=>await C("https://paw-hut.b.goit.study/api/categories"),ae=e=>{e.unshift({name:"Всі"});const t=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((s,n)=>t.indexOf(s.name)-t.indexOf(n.name)),e.map(s=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${s._id}" type="button">${s.name}</button></li>`).join("")},ne=async()=>{try{const e=await oe();r.ctgsList.innerHTML=ae(e.data);const t=document.querySelector(".pets-ctgs-btn");t.classList.add("active"),t.dataset.id="all",t.setAttribute("aria-pressed","true")}catch(e){H(e.message)}},re=async(e,t)=>{const s={page:e,limit:u};return t&&(s.categoryId=t),await C("https://paw-hut.b.goit.study/api/animals",{params:s})},x=e=>e.map(t=>`<li class="pets-item" role="listitem">
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
</li>`).join(""),w=async(e,t)=>{try{pe();const s=await re(e,t);ue(),v()?r.petsList.insertAdjacentHTML("beforeend",x(s.data.animals)):r.petsList.innerHTML=x(s.data.animals),b=s.data.totalItems,r.petsList.querySelectorAll(".pets-item").forEach((i,a)=>{const l=s.data.animals[a];i.dataset.description=l.description||"",i.dataset.health=l.healthStatus||"",i.dataset.behavior=l.behavior||""})}catch(s){H(s.message)}},j=()=>r.petsList.innerHTML="",le=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(s=>{s.classList.remove("active"),s.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},ce=async e=>{e.target.nodeName==="BUTTON"&&(E(),$(),le(e.target),f=e.target.dataset.id==="all"?void 0:e.target.dataset.id,o=1,j(),await w(o,f),v()&&b>u?q():v()||k())};r.ctgsList.addEventListener("click",ce);const de=async()=>{o++,await w(o,f),o*u>=b&&E()};r.petsLoadBtn.addEventListener("click",de);const E=()=>{r.petsLoadBtn.style.display="none"},q=()=>{r.petsLoadBtn.style.display="block"},ue=()=>{r.petsLoader.style.display="none"},pe=()=>{r.petsLoader.style.display="block"},$=()=>{r.petsPagination.style.display="none"},me=()=>{const e=O();e!==h&&(j(),E(),$(),h=e,u=W(),o=1,w(o,f),e==="mobile"&&o*u<b?q():e!=="mobile"&&k())};window.addEventListener("resize",me);const be=async()=>{await ne(),await w(o),v()&&b>u?q():v()||k()};be();function ge(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="24" height="24">
        <use href="/img/sprite.svg#icon-close"></use></svg></button>
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
    </div>`}function N(e){const t=ge(e);document.body.insertAdjacentHTML("beforeend",t),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const s=document.querySelector("[data-details-modal-backdrop]"),n=s.querySelector("[data-details-modal-close]"),i=s.querySelector("[data-details-modal-adopt]");n.addEventListener("click",()=>S(s)),s.addEventListener("click",l=>{l.target===s&&S(s)});function a(l){l.key==="Escape"&&(S(s),window.removeEventListener("keydown",a))}window.addEventListener("keydown",a),i.addEventListener("click",()=>{S(s)})}function S(e){e.remove(),document.body.classList.remove("body-lock")}r.petsList.addEventListener("click",e=>{var i,a,l,c,L;const t=e.target.closest(".pets-modal-btn");if(!t)return;const s=t.closest(".pets-item"),n={image:((i=s.querySelector(".pets-img"))==null?void 0:i.src)||"",species:((a=s.querySelector(".pets-species"))==null?void 0:a.textContent)||"",name:((l=s.querySelector(".pets-name"))==null?void 0:l.textContent)||"",age:((c=s.querySelector(".pets-info p:nth-child(1)"))==null?void 0:c.textContent)||"",gender:((L=s.querySelector(".pets-info p:nth-child(2)"))==null?void 0:L.textContent)||"",description:s.dataset.description||"",health:s.dataset.health||"",behavior:s.dataset.behavior||""};N(n)});r.petsList.addEventListener("keydown",e=>{var s,n,i,a,l;const t=e.target.closest(".pets-modal-btn");if(t&&(e.key==="Enter"||e.key===" ")){e.preventDefault();const c=t.closest(".pets-item"),L={image:((s=c.querySelector(".pets-img"))==null?void 0:s.src)||"",species:((n=c.querySelector(".pets-species"))==null?void 0:n.textContent)||"",name:((i=c.querySelector(".pets-name"))==null?void 0:i.textContent)||"",age:((a=c.querySelector(".pets-info p:nth-child(1)"))==null?void 0:a.textContent)||"",gender:((l=c.querySelector(".pets-info p:nth-child(2)"))==null?void 0:l.textContent)||"",description:c.dataset.description||"",health:c.dataset.health||"",behavior:c.dataset.behavior||""};N(L)}});const P=document.querySelector(".about-swiper-button-next"),M=document.querySelector(".about-swiper-button-prev"),fe=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],m="/project-10/",he=fe.map(({id:e,description:t})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${m}about-us/desktop/slide-p${e}-desk.webp 1x, ${m}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${m}about-us/tablet/slide-p${e}-tab.webp 1x, ${m}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${m}about-us/mobile/slide-p${e}-mob.webp 1x, ${m}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${m}about-us/mobile/slide-p${e}-mob.webp"
              alt="slide"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${t}</p>
          </div>
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=he;const d=new F(".about-mySwiper",{modules:[V,U,Y],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function z(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}z();window.addEventListener("resize",z);const D=()=>{d.isEnd?P.classList.add("about-btn-disabled"):P.classList.remove("about-btn-disabled"),d.isBeginning?M.classList.add("about-btn-disabled"):M.classList.remove("about-btn-disabled")};d.on("slideChange",D);D();const R=document.querySelector(".about");d.on("slideChangeTransitionStart",()=>{R&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});d.on("slideChangeTransitionEnd",()=>{const e=d.slides[d.activeIndex],t=e.querySelector(".about-id");t&&t.classList.add("show");const s=e.querySelector(".about-overlay");s&&s.classList.add("fade-out")});const ve=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const s=d.slides[d.activeIndex],n=s.querySelector(".about-id"),i=s.querySelector(".about-overlay");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show")),i&&(i.classList.remove("fade-out"),i.offsetWidth,i.classList.add("fade-out"))}})},{threshold:.7});ve.observe(R);document.addEventListener("DOMContentLoaded",()=>{new _(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const t=e.target.closest(".ac-trigger");t&&setTimeout(()=>{window.innerWidth<375&&t.scrollIntoView({behavior:"smooth",block:"start"})},450)});
//# sourceMappingURL=index.js.map

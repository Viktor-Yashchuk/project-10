import{i as I,a as $,S as C,b as j,N as H,P as N,K as W,A as X,R as Z,M as ee}from"./assets/vendor-6LYjMKHJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const r={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},te=document.querySelector(".burger-btn"),f=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const se=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),D=document.querySelector(".mobile-burger-menu-top-line"),F=document.querySelector(".mobile-burger-menu-mid-line"),R=document.querySelector(".mobile-burger-menu-bot-line"),ae=document.querySelector(".header"),z=e=>{e.key==="Escape"&&w()},oe=()=>{D.classList.toggle("top-line"),F.classList.toggle("mid-line"),R.classList.toggle("bot-line")},ie=()=>{D.classList.remove("top-line"),F.classList.remove("mid-line"),R.classList.remove("bot-line")},ne=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",z),f.classList.toggle("is-open"),f.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),oe()},w=()=>{document.body.style.overflow="",f.classList.remove("is-open"),document.removeEventListener("keydown",z),ie()},re=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||w()},ce=e=>{e.target.closest(".header-logo, .burger-btn")||w()};te.addEventListener("click",ne);ae.addEventListener("click",ce);f.addEventListener("click",re);se.forEach(e=>{e.addEventListener("click",w)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",f.classList.remove("is-open"),w())});const d="/project-10/",V=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",K=()=>y==="mobile"||y==="tablet"?8:9;let h,n=1,g,y=V(),p=K();const v=()=>y==="mobile",U=e=>I.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function q(){const e=Math.ceil(g/p);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${n===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${d}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,n===1){for(let t=1;t<=Math.min(3,e);t++)s+=b(t);e>3&&(s+='<li class="dots">…</li>',s+=b(e))}else if(n===e){s+=b(1),e>3&&(s+='<li class="dots">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=b(t))}else{s+=b(1),n>3&&(s+='<li class="dots">…</li>');for(let t=n-1;t<=n+1;t+=1)t>1&&t<e&&(s+=b(t));n<e-2&&(s+='<li class="dots">…</li>'),e>1&&(s+=b(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${n===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${d}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,r.petsPagination.style.display="flex",r.petsPagination.innerHTML=s}function b(e){return`
    <li>
      <button
        class="pagination-btn ${n===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const le=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(g/p);s.dataset.action==="prev"&&n>1&&(n-=1),s.dataset.action==="next"&&n<t&&(n+=1),s.dataset.page&&(n=+s.dataset.page);const i=r.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:i,behavior:"smooth"}),M(),await L(n,h),q()};r.petsPagination.addEventListener("click",le);const de=async()=>await $("https://paw-hut.b.goit.study/api/categories"),ue=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,i)=>s.indexOf(t.name)-s.indexOf(i.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},pe=async()=>{try{const e=await de();r.ctgsList.innerHTML=ue(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){U(e.message)}},me=async(e,s)=>{const t={page:e,limit:p};return s&&(t.categoryId=s),await $("https://paw-hut.b.goit.study/api/animals",{params:t})},P=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
    <img class="pets-img" src="${s.image}" alt="${s.species}">
    <p class="pets-species">${s.species}</p>
    <h3 class="pets-name">${s.name}</h3>
    <ul class="pets-own-ctgs-list">${s.categories.map(t=>`<li class="pets-own-ctgs-item"><p>${t.name}</p></li>`).join("")}</ul>
    <ul class="pets-info">
    <li><p>${s.age}</p></li>
    <li><p>${s.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${s.shortDescription}</p>
    <button class="pets-modal-btn" type="submit">Дізнатись більше</button>
</li>`).join(""),L=async(e,s)=>{try{ye();const t=await me(e,s);he(),v()?r.petsList.insertAdjacentHTML("beforeend",P(t.data.animals)):r.petsList.innerHTML=P(t.data.animals),g=t.data.totalItems,r.petsList.querySelectorAll(".pets-item").forEach((a,o)=>{const c=t.data.animals[o];c&&(a.dataset.description=c.description||"",a.dataset.health=c.healthStatus||"",a.dataset.behavior=c.behavior||"")})}catch(t){U(t.message)}},_=()=>r.petsList.innerHTML="",be=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},ge=async e=>{e.target.nodeName==="BUTTON"&&(x(),M(),be(e.target),h=e.target.dataset.id==="all"?void 0:e.target.dataset.id,n=1,_(),await L(n,h),v()&&g>p?B():v()||q())};r.ctgsList.addEventListener("click",ge);const fe=async()=>{n++,await L(n,h),n*p>=g&&x()};r.petsLoadBtn.addEventListener("click",fe);const x=()=>{r.petsLoadBtn.style.display="none"},B=()=>{r.petsLoadBtn.style.display="block"},he=()=>{r.petsLoader.style.display="none"},ye=()=>{r.petsLoader.style.display="block"},M=()=>{r.petsPagination.style.display="none"},ve=()=>{const e=V();e!==y&&(_(),x(),M(),y=e,p=K(),n=1,L(n,h),e==="mobile"&&n*p<g?B():e!=="mobile"&&q())};window.addEventListener("resize",ve);const we=async()=>{await pe(),await L(n),v()&&g>p?B():v()||q()};we();function Le(){return`
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button class="order-modal-close-btn" type="button" aria-label="Закрити" data-order-modal-close>
          <svg class="icon-close" width="24" height="24">
            <use href="${d}sprite.svg#icon-close"></use>
          </svg>
        </button>

        <h2 id="order-modal-title" class="order-modal-title">Залишіть заявку на знайомство</h2>

        <form class="order-modal-form" novalidate method="post" data-order-modal-form>
          <label class="order-modal-label" for="username">
            Ім’я*
            <input
              class="order-modal-input"
              type="text"
              id="username"
              name="username"
              placeholder="Андрій"
              required
              autocomplete="off"
            />
          </label>

          <label class="order-modal-label" for="phone">
            Телефон*
            <input
              class="order-modal-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (095) 555 99 22"
              required
              autocomplete="off"
            />
          </label>

          <label class="order-modal-label" for="message">
            Напишіть ваш коментар
            <textarea
              class="order-modal-input-textarea"
              name="message"
              id="message"
              placeholder="введіть текст"
              autocomplete="off"
            ></textarea>
          </label>

          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`}function ke(e){const s=Le();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),i=t.querySelector("[data-order-modal-close]"),a=t.querySelector("[data-order-modal-form]");i.addEventListener("click",()=>k(t)),t.addEventListener("click",o=>{o.target===t&&k(t)}),window.addEventListener("keydown",o=>{o.key==="Escape"&&k(t)}),a.addEventListener("submit",async o=>{o.preventDefault();const c=new FormData(a),l={name:c.get("username"),phone:c.get("phone"),comment:c.get("message"),animalId:e};try{if(!(await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).ok)throw new Error("Помилка відправки заявки");C.fire({icon:"success",title:"Заявку надіслано!",text:"Ми скоро з вами зв’яжемося."}),a.reset(),k(t)}catch(m){C.fire({icon:"error",title:"Помилка",text:m.message})}})}function k(e){e.remove(),document.body.classList.remove("body-lock")}function Se(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${d}sprite.svg#icon-close2"></use></svg></button>
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
    </div>`}function J(e){const s=Se(e);document.body.insertAdjacentHTML("beforeend",s),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),i=t.querySelector("[data-details-modal-close]"),a=t.querySelector("[data-details-modal-adopt]");i.addEventListener("click",()=>S(t)),t.addEventListener("click",c=>{c.target===t&&S(t)});function o(c){c.key==="Escape"&&(S(t),window.removeEventListener("keydown",o))}window.addEventListener("keydown",o),a.addEventListener("click",()=>{S(t),ke(e.id)})}function S(e){e.remove(),document.body.classList.remove("body-lock")}r.petsList.addEventListener("click",e=>{var a,o,c,l,m;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),i={id:t.dataset.id,image:((a=t.querySelector(".pets-img"))==null?void 0:a.src)||"",species:((o=t.querySelector(".pets-species"))==null?void 0:o.textContent)||"",name:((c=t.querySelector(".pets-name"))==null?void 0:c.textContent)||"",age:((l=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:l.textContent)||"",gender:((m=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:m.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};J(i)});r.petsList.addEventListener("keydown",e=>{var t,i,a,o,c;const s=e.target.closest(".pets-modal-btn");if(s&&(e.key==="Enter"||e.key===" ")){e.preventDefault();const l=s.closest(".pets-item"),m={id:l.dataset.id,image:((t=l.querySelector(".pets-img"))==null?void 0:t.src)||"",species:((i=l.querySelector(".pets-species"))==null?void 0:i.textContent)||"",name:((a=l.querySelector(".pets-name"))==null?void 0:a.textContent)||"",age:((o=l.querySelector(".pets-info p:nth-child(1)"))==null?void 0:o.textContent)||"",gender:((c=l.querySelector(".pets-info p:nth-child(2)"))==null?void 0:c.textContent)||"",description:l.dataset.description||"",health:l.dataset.health||"",behavior:l.dataset.behavior||""};J(m)}});const A=document.querySelector(".about-swiper-button-next"),O=document.querySelector(".about-swiper-button-prev"),Ee=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],$e=Ee.map(({id:e,description:s})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${d}about-us/desktop/slide-p${e}-desk.webp 1x, ${d}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${d}about-us/tablet/slide-p${e}-tab.webp 1x, ${d}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${d}about-us/mobile/slide-p${e}-mob.webp 1x, ${d}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${d}about-us/mobile/slide-p${e}-mob.webp"
              alt="slide"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${s}</p>
          </div>
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=$e;const u=new j(".about-mySwiper",{modules:[H,N,W],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function Y(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}Y();window.addEventListener("resize",Y);const G=()=>{u.isEnd?A.classList.add("about-btn-disabled"):A.classList.remove("about-btn-disabled"),u.isBeginning?O.classList.add("about-btn-disabled"):O.classList.remove("about-btn-disabled")};u.on("slideChange",G);G();const Q=document.querySelector(".about");u.on("slideChangeTransitionStart",()=>{Q&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});u.on("slideChangeTransitionEnd",()=>{const e=u.slides[u.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const qe=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=u.slides[u.activeIndex],i=t.querySelector(".about-id"),a=t.querySelector(".about-overlay");i&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show")),a&&(a.classList.remove("fade-out"),a.offsetWidth,a.classList.add("fade-out"))}})},{threshold:.7});qe.observe(Q);document.addEventListener("DOMContentLoaded",()=>{new X(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const s=e.target.closest(".ac-trigger");s&&setTimeout(()=>{window.innerWidth<375&&s.scrollIntoView({behavior:"smooth",block:"start"})},450)});$.defaults.baseURL="https://paw-hut.b.goit.study";const xe=async()=>(await $.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",Be);async function Be(){try{const e=await xe();Me(e.feedbacks),document.querySelectorAll(".rating").forEach(s=>{const t=s.dataset.score;new Z(s,{score:t,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${d}icons/filled.svg`,starOff:`${d}icons/outline.svg`,starHalf:`${d}icons/half.svg`}).init()})}catch{I.error({message:"Error",position:"center"})}}const Me=e=>{const s=e.map(t=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");r.successList.innerHTML=s},E=new j(".success-swiper",{modules:[H,N,W,ee],spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},pagination:{el:".success-swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2,pagination:{dynamicBullets:!0,dynamicMainBullets:1}}}});E.on("slideChange",()=>{E.isEnd?r.successBtnForward.classList.add("success-btn-disabled"):r.successBtnForward.classList.remove("success-btn-disabled")});E.on("slideChange",()=>{E.isBeginning?r.successBtnBack.classList.add("success-btn-disabled"):r.successBtnBack.classList.remove("success-btn-disabled")});const Ce=r.successAnimation,T=30;for(let e=0;e<T;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(T-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(i),s.appendChild(t),Ce.appendChild(s)}
//# sourceMappingURL=index.js.map

import{i as ee,a as N,S as E,b as te,N as se,P as ae,K as oe,A as we,R as Le,M as ke}from"./assets/vendor-6LYjMKHJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const c={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},Se=document.querySelector(".burger-btn"),q=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const Ee=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),ie=document.querySelector(".mobile-burger-menu-top-line"),ne=document.querySelector(".mobile-burger-menu-mid-line"),re=document.querySelector(".mobile-burger-menu-bot-line"),$e=document.querySelector(".header"),ce=e=>{e.key==="Escape"&&M()},qe=()=>{ie.classList.toggle("top-line"),ne.classList.toggle("mid-line"),re.classList.toggle("bot-line")},xe=()=>{ie.classList.remove("top-line"),ne.classList.remove("mid-line"),re.classList.remove("bot-line")},Ce=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",ce),q.classList.toggle("is-open"),q.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),qe()},M=()=>{document.body.style.overflow="",q.classList.remove("is-open"),document.removeEventListener("keydown",ce),xe()},Be=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||M()},Me=e=>{e.target.closest(".header-logo, .burger-btn")||M()};Se.addEventListener("click",Ce);$e.addEventListener("click",Me);q.addEventListener("click",Be);Ee.forEach(e=>{e.addEventListener("click",M)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",q.classList.remove("is-open"),M())});const j=document.querySelectorAll(".header-nav-link"),Pe=document.querySelectorAll(".footer-nav-list a"),Ae=document.querySelectorAll("section[id]");let R=null,$=!1;const W=()=>{j.forEach(e=>{e.classList.remove("is-active","is-inactive")}),R=null};window.addEventListener("scroll",()=>{window.scrollY===0&&(W(),$=!1)});const le=e=>{W(),R=e,e.classList.add("is-active")},de=e=>{$=!0;const s=e.getAttribute("href").slice(1),t=document.querySelector(`.header-nav-link[href="#${s}"]`);t&&(le(t),j.forEach(o=>{o!==t&&o.classList.add("is-inactive")}));const i=document.getElementById(s);i&&i.scrollIntoView({behavior:"smooth"})};j.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),de(e)})});Pe.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),de(e)})});const Xe=new IntersectionObserver(e=>{e.forEach(s=>{if(!s.isIntersecting)return;const t=s.target.id,i=document.querySelector(`.header-nav-link[href="#${t}"]`);if(!i){W(),$=!1;return}if(!$){le(i);return}i===R&&(j.forEach(o=>o.classList.remove("is-inactive")),$=!1)})},{threshold:.3});Ae.forEach(e=>Xe.observe(e));const u="/project-10/",ue=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",me=()=>C==="mobile"||C==="tablet"?8:9;let x,r=1,k,C=ue(),w=me();const B=()=>C==="mobile",pe=e=>ee.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function F(){const e=Math.ceil(k/w);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${r===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${u}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,r===1){for(let t=1;t<=Math.min(3,e);t++)s+=L(t);e>3&&(s+='<li class="dots">…</li>',s+=L(e))}else if(r===e){s+=L(1),e>3&&(s+='<li class="dots">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=L(t))}else{s+=L(1),r>3&&(s+='<li class="dots">…</li>');for(let t=r-1;t<=r+1;t+=1)t>1&&t<e&&(s+=L(t));r<e-2&&(s+='<li class="dots">…</li>'),e>1&&(s+=L(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${r===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${u}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,c.petsPagination.style.display="flex",c.petsPagination.innerHTML=s}function L(e){return`
    <li>
      <button
        class="pagination-btn ${r===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const Oe=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(k/w);s.dataset.action==="prev"&&r>1&&(r-=1),s.dataset.action==="next"&&r<t&&(r+=1),s.dataset.page&&(r=+s.dataset.page);const i=c.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:i,behavior:"smooth"}),K(),await P(r,x),F()};c.petsPagination.addEventListener("click",Oe);const Ie=async()=>await N("https://paw-hut.b.goit.study/api/categories"),Te=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,i)=>s.indexOf(t.name)-s.indexOf(i.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},De=async()=>{try{const e=await Ie();c.ctgsList.innerHTML=Te(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){pe(e.message)}},Ne=async(e,s)=>{const t={page:e,limit:w};return s&&(t.categoryId=s),await N("https://paw-hut.b.goit.study/api/animals",{params:t})},Y=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
    <img class="pets-img" src="${s.image}" alt="${s.species}" loading="lazy" decoding="async">
    <p class="pets-species">${s.species}</p>
    <h3 class="pets-name">${s.name}</h3>
    <ul class="pets-own-ctgs-list">${s.categories.map(t=>`<li class="pets-own-ctgs-item"><p>${t.name}</p></li>`).join("")}</ul>
    <ul class="pets-info">
    <li><p>${s.age}</p></li>
    <li><p>${s.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${s.shortDescription}</p>
    <button class="pets-modal-btn" type="button">Дізнатись більше</button>
</li>`).join(""),P=async(e,s)=>{try{Re();const t=await Ne(e,s);He(),B()?c.petsList.insertAdjacentHTML("beforeend",Y(t.data.animals)):c.petsList.innerHTML=Y(t.data.animals),k=t.data.totalItems,c.petsList.querySelectorAll(".pets-item").forEach((o,n)=>{const d=t.data.animals[n];d&&(o.dataset.description=d.description||"",o.dataset.health=d.healthStatus||"",o.dataset.behavior=d.behavior||"")})}catch(t){pe(t.message)}},be=()=>c.petsList.innerHTML="",je=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},Fe=async e=>{e.target.nodeName==="BUTTON"&&(_(),K(),je(e.target),x=e.target.dataset.id==="all"?void 0:e.target.dataset.id,r=1,be(),await P(r,x),B()&&k>w?V():B()||F())};c.ctgsList.addEventListener("click",Fe);const ze=async()=>{r++,await P(r,x),r*w>=k&&_()};c.petsLoadBtn.addEventListener("click",ze);const _=()=>{c.petsLoadBtn.style.display="none"},V=()=>{c.petsLoadBtn.style.display="block"},He=()=>{c.petsLoader.style.display="none"},Re=()=>{c.petsLoader.style.display="block"},K=()=>{c.petsPagination.style.display="none"},We=()=>{const e=ue();e!==C&&(be(),_(),K(),C=e,w=me(),r=1,P(r,x),e==="mobile"&&r*w<k?V():e!=="mobile"&&F())};window.addEventListener("resize",We);const _e=async()=>{await De(),await P(r),B()&&k>w?V():B()||F()};_e();function Ve(){return`
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal container" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button class="order-modal-close-btn" type="button" aria-label="Закрити" data-order-modal-close>
          <svg class="icon-close" width="14" height="14">
            <use href="${u}sprite.svg#icon-close2"></use>
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
              placeholder="Ваше Ім'я"
              required
              minlength="2"
              maxlength="30"
              autocomplete="off"
            />
            <span class="error-message">Ім’я має містити лише літери, пробіли, апострофи та дефіси.</span>
          </label>

          <label class="order-modal-label" for="phone">
            Телефон*
            <input
              class="order-modal-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (0XX) XXX XX XX"
              required
              maxlength="19"
              inputmode="numeric"
              autocomplete="off"
              aria-describedby="phone-error"
            />
            <span id="phone-error" class="error-message">Формат: +38 (0XX) XXX XX XX</span>
          </label>

          <label class="order-modal-label" for="message">
            Коментар
            <textarea
              class="order-modal-input-textarea"
              name="message"
              id="message"
              placeholder="Напишіть ваш коментар"
              maxlength="300"
              autocomplete="off"
            ></textarea>
            <span id="comment-error" class="error-message"></span>
            <span id="comment-counter" class="counter"></span>
          </label>
          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`}function Ke(e){const s=Ve();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),i=t.querySelector("[data-order-modal-close]"),o=t.querySelector("[data-order-modal-form]"),n=t.querySelector("#username"),d=/[^a-zA-Z\u0400-\u04FF\s'’`-]/g;function m(a){return a.replace(d,"").replace(/\s+/g," ").replace(/-+/g,"-").trim()}n.addEventListener("input",a=>{const l=a.target,h=l.value,b=l.selectionStart,S=m(h);if(S===h)return;l.value=S;const X=h.length-S.length,y=Math.max(0,b-X);l.setSelectionRange(y,y)}),n.addEventListener("paste",a=>{a.preventDefault();const l=(a.clipboardData||window.clipboardData).getData("text"),h=m(l),b=a.target,S=b.selectionStart,X=b.selectionEnd,y=b.value.slice(0,S),O=b.value.slice(X);b.value=m(y+h+O);const f=(y+h).length;b.setSelectionRange(f,f)}),n.addEventListener("blur",a=>{a.target.value=m(a.target.value)});const p=t.querySelector("#phone");p.addEventListener("focus",()=>{p.value.trim()===""&&(p.value="+38 (0")}),p.addEventListener("input",()=>{let a=p.value.replace(/\D/g,"");a.startsWith("380")||(a.startsWith("0")?a="380"+a.slice(1):a.startsWith("3")?a=a:a.length>0&&(a="380"+a));let l="+38 (0";a.length>3&&(l+=a.substring(3,5)),a.length>5&&(l+=") "+a.substring(5,8)),a.length>8&&(l+=" "+a.substring(8,10)),a.length>10&&(l+=" "+a.substring(10,12)),p.value=l});function he(a){return a.replace(/\D/g,"").slice(0,12)}const g=t.querySelector("#message"),A=t.querySelector("#comment-error"),ye=t.querySelector("#comment-counter");function z(){const a=g.value.trim().length;ye.textContent=`${a}/300`,a===0?(A.textContent="",g.classList.remove("invalid")):a<5?(A.textContent="Коментар має бути не менше 5 символів",g.classList.add("invalid")):a>300?(A.textContent="Коментар має бути не більше 300 символів",g.classList.add("invalid")):(A.textContent="",g.classList.remove("invalid"))}g.addEventListener("input",z),g.addEventListener("blur",z);const U=t.querySelectorAll(".order-modal-input, .order-modal-input-textarea");U.forEach(a=>{a.addEventListener("input",()=>{a.value=a.value.trim(),a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")}),a.addEventListener("blur",()=>{a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")})}),i.addEventListener("click",()=>I(t)),t.addEventListener("click",a=>{a.target===t&&I(t)}),window.addEventListener("keydown",a=>{a.key==="Escape"&&I(t)}),o.addEventListener("submit",async a=>{a.preventDefault(),U.forEach(f=>f.dispatchEvent(new Event("blur")));const l=m(n.value),h=(l.match(/[a-zA-Z\u0400-\u04FF]/g)||[]).length>=2;if(!l||!h){E.fire({icon:"warning",title:"Перевірте ім’я",text:"Ім’я має містити щонайменше 2 літери.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),n.focus();return}const b=he(p.value);if(!/^380\d{9}$/.test(b)){E.fire({icon:"warning",title:"Перевірте телефон",text:"Формат телефону має бути 380XXXXXXXXX",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),p.focus();return}if(g.value.trim(),z(),g.classList.contains("invalid")){g.focus();return}if(!o.checkValidity()){E.fire({icon:"warning",title:"Перевірте форму",text:"Будь ласка, заповніть усі поля правильно.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"});return}const y=(new FormData(o).get("message")||"").trim(),O={name:l,phone:b,animalId:e};y!==""&&(O.comment=y);try{const f=await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}),H=await f.json().catch(()=>null);if(!f.ok)throw new Error((H==null?void 0:H.message)||"Помилка відправки заявки");E.fire({icon:"success",title:`Вітаємо, ${l}! Заявку надіслано!😻Ваш пухнастик буде скоро з вами.`,html:`
    <div class="dog-container">
      <div class="dog">
        <div class="dog-head">
          <div class="dog-ears ears-left"></div>
          <div class="dog-ears ears-right"></div>
          <div class="dog-eyes"></div>
          <div class="dog-mouth">
            <div class="dog-nose"></div>
            <div class="dog-tongue"></div>
          </div>
        </div>
        <div class="dog-tail"></div>
        <div class="dog-body">
          <div class="dog-foot"></div>
        </div>
        <a href="https://github.com/Viktor-Yashchuk/project-10" 
                target="_blank"
                rel="noopener noreferrer"
                class="ball" 
                style="cursor: pointer; text-decoration: none;">
            No Bugs Just Pugs</a>
		   </div>
      </div> `,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)",showClass:{popup:"animate__animated animate__bounceIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),I(t)}catch(f){E.fire({icon:"error",title:"Помилка",text:f.message,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"})}})}function I(e){const s=e.querySelector("[data-order-modal-form]");s&&s.reset(),e.remove(),document.body.classList.remove("body-lock")}function Ue(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${u}sprite.svg#icon-close2"></use></svg></button>
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
    </div>`}function Ye(e){const s=Ue(e);document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),i=t.querySelector(".details-modal"),o=t.querySelector("[data-details-modal-close]"),n=t.querySelector("[data-details-modal-adopt]");i.setAttribute("tabindex","-1"),i.focus(),o.addEventListener("click",()=>T(t)),t.addEventListener("click",m=>{m.target===t&&T(t)});function d(m){m.key==="Escape"&&(T(t),window.removeEventListener("keydown",d))}window.addEventListener("keydown",d),n.addEventListener("click",()=>{T(t),Ke(e.id)})}function T(e){e.remove(),document.body.classList.remove("body-lock")}c.petsList.addEventListener("click",e=>{var o,n,d,m,p;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),i={id:t.dataset.id,image:((o=t.querySelector(".pets-img"))==null?void 0:o.src)||"",species:((n=t.querySelector(".pets-species"))==null?void 0:n.textContent)||"",name:((d=t.querySelector(".pets-name"))==null?void 0:d.textContent)||"",age:((m=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:m.textContent)||"",gender:((p=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:p.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};Ye(i)});const J=document.querySelector(".about-swiper-button-next"),Z=document.querySelector(".about-swiper-button-prev"),Je=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],Ze=Je.map(({id:e,description:s})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${u}about-us/desktop/slide-p${e}-desk.webp 1x, ${u}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${u}about-us/tablet/slide-p${e}-tab.webp 1x, ${u}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${u}about-us/mobile/slide-p${e}-mob.webp 1x, ${u}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${u}about-us/mobile/slide-p${e}-mob.webp"
              alt="slide" loading="lazy" decoding="async"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${s}</p>
          </div>
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=Ze;const v=new te(".about-mySwiper",{modules:[se,ae,oe],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function ge(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}ge();window.addEventListener("resize",ge);const fe=()=>{v.isEnd?J.classList.add("about-btn-disabled"):J.classList.remove("about-btn-disabled"),v.isBeginning?Z.classList.add("about-btn-disabled"):Z.classList.remove("about-btn-disabled")};v.on("slideChange",fe);fe();const ve=document.querySelector(".about");v.on("slideChangeTransitionStart",()=>{ve&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});v.on("slideChangeTransitionEnd",()=>{const e=v.slides[v.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const Ge=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=v.slides[v.activeIndex],i=t.querySelector(".about-id"),o=t.querySelector(".about-overlay");i&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show")),o&&(o.classList.remove("fade-out"),o.offsetWidth,o.classList.add("fade-out"))}})},{threshold:.7});Ge.observe(ve);document.addEventListener("DOMContentLoaded",()=>{new we(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const s=e.target.closest(".ac-trigger");s&&setTimeout(()=>{window.innerWidth<375&&s.scrollIntoView({behavior:"smooth",block:"start"})},450)});const Qe=document.querySelector(".faq-ajax-loader"),G=30;for(let e=0;e<G;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(G-e)*.25+5}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(i),s.appendChild(t),Qe.appendChild(s)}N.defaults.baseURL="https://paw-hut.b.goit.study";const et=async()=>(await N.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",tt);async function tt(){try{const e=await et();st(e.feedbacks),document.querySelectorAll(".rating").forEach(s=>{const t=s.dataset.score;new Le(s,{score:t,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${u}icons/filled.svg`,starOff:`${u}icons/outline.svg`,starHalf:`${u}icons/half.svg`}).init()})}catch{ee.error({message:"Error",position:"center"})}}const st=e=>{const s=e.map(t=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");c.successList.innerHTML=s},D=new te(".success-swiper",{modules:[se,ae,oe,ke],spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},pagination:{el:".success-swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2,pagination:{dynamicBullets:!0,dynamicMainBullets:1}}}});D.on("slideChange",()=>{D.isEnd?c.successBtnForward.classList.add("success-btn-disabled"):c.successBtnForward.classList.remove("success-btn-disabled")});D.on("slideChange",()=>{D.isBeginning?c.successBtnBack.classList.add("success-btn-disabled"):c.successBtnBack.classList.remove("success-btn-disabled")});const at=c.successAnimation,Q=30;for(let e=0;e<Q;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(Q-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(i),s.appendChild(t),at.appendChild(s)}
//# sourceMappingURL=index.js.map

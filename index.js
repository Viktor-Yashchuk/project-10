import{i as G,a as F,S as q,b as Q,N as ee,P as ue,K as te,A as me,R as pe,M as be}from"./assets/vendor-BG3zRxPs.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const o={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),successPagination:document.querySelector(".success-pagination"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination"),faqListEl:document.querySelector("#faqList"),aboutSection:document.querySelector(".about"),aboutBtnForward:document.querySelector(".about-swiper-button-next"),aboutBtnBack:document.querySelector(".about-swiper-button-prev"),aboutSwiperWrapper:document.querySelector(".about-swiper-wrapper"),aboutPaginationElem:document.querySelector(".about .swiper-pagination"),header:document.querySelector(".header"),headerBurgerBtn:document.querySelector(".burger-btn"),headerMobileMenu:document.querySelector(".mobile-menu"),headerMobileLinks:document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),headerBurgerTopLine:document.querySelector(".mobile-burger-menu-top-line"),headerBurgerMidLine:document.querySelector(".mobile-burger-menu-mid-line"),headerBurgerBotLine:document.querySelector(".mobile-burger-menu-bot-line")},se=e=>{e.key==="Escape"&&M()},ge=()=>{o.headerBurgerTopLine.classList.toggle("top-line"),o.headerBurgerMidLine.classList.toggle("mid-line"),o.headerBurgerBotLine.classList.toggle("bot-line")},fe=()=>{o.headerBurgerTopLine.classList.remove("top-line"),o.headerBurgerMidLine.classList.remove("mid-line"),o.headerBurgerBotLine.classList.remove("bot-line")},he=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",se),o.headerMobileMenu.classList.toggle("is-open"),o.headerMobileMenu.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),ge()},M=()=>{document.body.style.overflow="",o.headerMobileMenu.classList.remove("is-open"),document.removeEventListener("keydown",se),fe()},ve=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||M()},ye=e=>{e.target.closest(".header-logo, .burger-btn")||M()};o.headerBurgerBtn.addEventListener("click",he);o.header.addEventListener("click",ye);o.headerMobileMenu.addEventListener("click",ve);o.headerMobileLinks.forEach(e=>{e.addEventListener("click",M)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",o.headerMobileMenu.classList.remove("is-open"),M())});const N=document.querySelectorAll(".header-nav-link"),we=document.querySelectorAll(".footer-nav-list a"),Le=document.querySelectorAll("section[id]");let $=null,D=!1,j=null;const ke=()=>{N.forEach(e=>{e.classList.remove("is-active","is-inactive")}),$=null},Se=e=>{N.forEach(s=>{s.classList.remove("is-active","is-inactive")}),e.classList.add("is-active"),$=e},Ee=e=>{var r;const s=(r=e.getAttribute("href"))==null?void 0:r.slice(1);if(!s)return;const t=document.getElementById(s);if(!t)return;if(($==null?void 0:$.getAttribute("href"))===`#${s}`){t.scrollIntoView({behavior:"smooth",block:"start"}),e.blur();return}D=!0,j=s;const i=document.querySelector(`.header-nav-link[href="#${s}"]`);i&&(N.forEach(c=>{c.classList.toggle("is-active",c===i),c.classList.toggle("is-inactive",c!==i)}),$=i),t.scrollIntoView({behavior:"smooth",block:"start"}),e.blur()};[...N,...we].forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),Ee(e)})});window.addEventListener("scroll",()=>{window.scrollY===0&&(ke(),D=!1,j=null)});const $e=new IntersectionObserver(e=>{e.forEach(s=>{if(!s.isIntersecting)return;const t=s.target.id,n=document.querySelector(`.header-nav-link[href="#${t}"]`);n&&(D&&t!==j||(D=!1,j=null,Se(n)))})},{threshold:.35});Le.forEach(e=>$e.observe(e));const p="/No-Bugs-Just-Pugs/",ae=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",oe=()=>B==="mobile"||B==="tablet"?8:9;let x,d=1,k,B=ae(),w=oe();const C=()=>B==="mobile",ie=e=>G.error({title:"",message:`Помилка бекенду від "GoIt": 
    ${e}`,position:"topRight",iconUrl:`${p}public/error.svg`,messageColor:"#fafafb",messageSize:"16",titleWeight:"700",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3,maxWidth:432,theme:"dark",close:!0,class:"my-toast"});function W(){const e=Math.ceil(k/w);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${d===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${p}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,d===1){for(let t=1;t<=Math.min(3,e);t++)s+=L(t);e>3&&(s+='<li class="dots" aria-label="Крапочки пагінації">…</li>',s+=L(e))}else if(d===e){s+=L(1),e>3&&(s+='<li class="dots" aria-label="Крапочки пагінації">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=L(t))}else{s+=L(1),d>3&&(s+='<li class="dots aria-label="Крапочки пагінації"">…</li>');for(let t=d-1;t<=d+1;t+=1)t>1&&t<e&&(s+=L(t));d<e-2&&(s+='<li class="dots" aria-label="Крапочки пагінації">…</li>'),e>1&&(s+=L(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${d===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${p}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,o.petsPagination.style.display="flex",o.petsPagination.innerHTML=s}function L(e){return`
    <li>
      <button
        class="pagination-btn ${d===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const qe=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(k/w);s.dataset.action==="prev"&&d>1&&(d-=1),s.dataset.action==="next"&&d<t&&(d+=1),s.dataset.page&&(d=+s.dataset.page);const n=o.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:n,behavior:"smooth"}),V(),await P(d,x),W()};o.petsPagination.addEventListener("click",qe);const xe=async()=>await F("https://paw-hut.b.goit.study/api/categories"),Be=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,n)=>s.indexOf(t.name)-s.indexOf(n.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},Ce=async()=>{try{const e=await xe();o.ctgsList.innerHTML=Be(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){ie(e.message)}},Me=async(e,s)=>{const t={page:e,limit:w};return s&&(t.categoryId=s),await F("https://paw-hut.b.goit.study/api/animals",{params:t})},K=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
    <img class="pets-img" src="${s.image}" alt="Фото ${s.species} на ім'я ${s.name}" loading="lazy" decoding="async">
    <p class="pets-species">${s.species}</p>
    <h3 class="pets-name">${s.name}</h3>
    <ul class="pets-own-ctgs-list">${s.categories.map(t=>`<li class="pets-own-ctgs-item"><p>${t.name}</p></li>`).join("")}</ul>
    <ul class="pets-info">
    <li><p>${s.age}</p></li>
    <li><p>${s.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${s.shortDescription}</p>
    <button class="pets-modal-btn" type="button" aria-label="Дізнатись більше про ${s.name}">Дізнатись більше</button>
</li>`).join(""),P=async(e,s)=>{try{Te();const t=await Me(e,s);Xe(),C()?o.petsList.insertAdjacentHTML("beforeend",K(t.data.animals)):o.petsList.innerHTML=K(t.data.animals),k=t.data.totalItems,o.petsList.querySelectorAll(".pets-item").forEach((i,r)=>{const c=t.data.animals[r];c&&(i.dataset.description=c.description||"",i.dataset.health=c.healthStatus||"",i.dataset.behavior=c.behavior||"")})}catch(t){ie(t.message)}},ne=()=>o.petsList.innerHTML="",Pe=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},Ae=async e=>{e.target.nodeName==="BUTTON"&&(R(),V(),Pe(e.target),x=e.target.dataset.id==="all"?void 0:e.target.dataset.id,d=1,ne(),await P(d,x),C()&&k>w?_():C()||W())};o.ctgsList.addEventListener("click",Ae);const Ie=async()=>{d++,await P(d,x),d*w>=k&&R()};o.petsLoadBtn.addEventListener("click",Ie);const R=()=>{o.petsLoadBtn.style.display="none"},_=()=>{o.petsLoadBtn.style.display="block"},Xe=()=>{o.petsLoader.style.display="none"},Te=()=>{o.petsLoader.style.display="block"},V=()=>{o.petsPagination.style.display="none"},Oe=()=>{const e=ae();e!==B&&(ne(),R(),V(),B=e,w=oe(),d=1,P(d,x),e==="mobile"&&d*w<k?_():e!=="mobile"&&W())};window.addEventListener("resize",Oe);const De=async()=>{await Ce(),await P(d),C()&&k>w?_():C()||W()};De();function je(){return`
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal container" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button class="order-modal-close-btn" type="button" aria-label="Закрити" data-order-modal-close>
          <svg class="icon-close" width="14" height="14">
            <use href="${p}sprite.svg#icon-close2"></use>
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
              aria-describedby="username-error"
            />
            <span id="username-error" class="error-message">Ім’я має містити лише літери, пробіли, апострофи та дефіси.</span>
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
              aria-describedby="comment-error comment-counter"
            ></textarea>
            <span id="comment-error" class="error-message"></span>
            <span id="comment-counter" class="counter"></span>
          </label>
          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`}function Fe(e){const s=je();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),n=t.querySelector("[data-order-modal-close]"),i=t.querySelector("[data-order-modal-form]"),r=t.querySelector("#username"),c=/[^a-zA-Z\u0400-\u04FF\s'’`-]/g;function l(a){return a.replace(c,"").replace(/\s+/g," ").replace(/-+/g,"-").trim()}r.addEventListener("input",a=>{const m=a.target,v=m.value,g=m.selectionStart,E=l(v);if(E===v)return;m.value=E;const I=v.length-E.length,y=Math.max(0,g-I);m.setSelectionRange(y,y)}),r.addEventListener("paste",a=>{a.preventDefault();const m=(a.clipboardData||window.clipboardData).getData("text"),v=l(m),g=a.target,E=g.selectionStart,I=g.selectionEnd,y=g.value.slice(0,E),X=g.value.slice(I);g.value=l(y+v+X);const f=(y+v).length;g.setSelectionRange(f,f)}),r.addEventListener("blur",a=>{a.target.value=l(a.target.value)});const u=t.querySelector("#phone");u.addEventListener("focus",()=>{u.value.trim()===""&&(u.value="+38 (0")}),u.addEventListener("input",()=>{let a=u.value.replace(/\D/g,"");a.startsWith("380")||(a.startsWith("0")?a="380"+a.slice(1):a.startsWith("3")?a=a:a.length>0&&(a="380"+a));let m="+38 (0";a.length>3&&(m+=a.substring(3,5)),a.length>5&&(m+=") "+a.substring(5,8)),a.length>8&&(m+=" "+a.substring(8,10)),a.length>10&&(m+=" "+a.substring(10,12)),u.value=m});function S(a){return a.replace(/\D/g,"").slice(0,12)}const b=t.querySelector("#message"),A=t.querySelector("#comment-error"),de=t.querySelector("#comment-counter");function z(){const a=b.value.trim().length;de.textContent=`${a}/300`,a===0?(A.textContent="",b.classList.remove("invalid")):a<5?(A.textContent="Коментар має бути не менше 5 символів",b.classList.add("invalid")):a>300?(A.textContent="Коментар має бути не більше 300 символів",b.classList.add("invalid")):(A.textContent="",b.classList.remove("invalid"))}b.addEventListener("input",z),b.addEventListener("blur",z);const U=t.querySelectorAll(".order-modal-input, .order-modal-input-textarea");U.forEach(a=>{a.addEventListener("input",()=>{a.value=a.value.trim(),a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")}),a.addEventListener("blur",()=>{a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")})}),n.addEventListener("click",()=>T(t)),t.addEventListener("click",a=>{a.target===t&&T(t)}),window.addEventListener("keydown",a=>{a.key==="Escape"&&T(t)}),i.addEventListener("submit",async a=>{a.preventDefault(),U.forEach(f=>f.dispatchEvent(new Event("blur")));const m=l(r.value),v=(m.match(/[a-zA-Z\u0400-\u04FF]/g)||[]).length>=2;if(!m||!v){q.fire({icon:"warning",title:"Перевірте ім’я",text:"Ім’я має містити щонайменше 2 літери.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),r.focus();return}const g=S(u.value);if(!/^380\d{9}$/.test(g)){q.fire({icon:"warning",title:"Перевірте телефон",text:"Формат телефону має бути 380XXXXXXXXX",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),u.focus();return}if(b.value.trim(),z(),b.classList.contains("invalid")){b.focus();return}if(!i.checkValidity()){q.fire({icon:"warning",title:"Перевірте форму",text:"Будь ласка, заповніть усі поля правильно.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"});return}const y=(new FormData(i).get("message")||"").trim(),X={name:m,phone:g,animalId:e};y!==""&&(X.comment=y);try{const f=await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)}),H=await f.json().catch(()=>null);if(!f.ok)throw new Error((H==null?void 0:H.message)||"Помилка відправки заявки");q.fire({icon:"success",title:`Вітаємо, ${m}! Заявку надіслано!😻Ваш пухнастик буде скоро з вами.`,html:`
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
      </div> `,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)",showClass:{popup:"animate__animated animate__bounceIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),T(t)}catch(f){q.fire({icon:"error",title:"Помилка",text:f.message,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"})}})}function T(e){const s=e.querySelector("[data-order-modal-form]");s&&s.reset(),e.remove(),document.body.classList.remove("body-lock")}function Ne(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description" aria-label="Деталі про тваринку">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${p}sprite.svg#icon-close2"></use></svg></button>
        <div class="details-modal-body">
          <div class="details-modal-left">
            <img class="details-modal-img" src="${e.image}" alt="Фото ${e.species} на ім'я ${e.name}" />
          </div>
          <div class="details-modal-right">
            <p class="details-modal-species">${e.species}</p>
            <h3 id="details-modal-title" class="details-modal-name">${e.name}</h3>
            <div class="details-modal-info">
              <p>${e.age}</p>
              <p>${e.gender}</p>
            </div>

            <h4 id="details-description-title" class="details-modal-subtitle">Опис:</h4>
            <p id="details-modal-description" class="details-modal-description"  aria-labelledby="details-description-title">${e.description||"—"}</p>

            <h4 id="details-health-title" class="details-modal-subtitle">Здоровʼя:</h4>
            <p class="details-modal-health" aria-labelledby="details-health-title">${e.health||"—"}</p>

            <h4 id="details-behavior-title" class="details-modal-subtitle">Поведінка:</h4>
            <p class="details-modal-behavior" aria-labelledby="details-behavior-title">${e.behavior||"—"}</p>

            <button class="details-modal-adopt-btn" type="button" data-details-modal-adopt aria-label="Взяти тваринку додому">Взяти додому</button>
          </div>
        </div>
      </div>
    </div>`}function We(e){const s=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'],t=e.querySelectorAll(s.join(","));if(t.length===0)return;const n=t[0],i=t[t.length-1];e.addEventListener("keydown",r=>{r.key==="Tab"&&(r.shiftKey?document.activeElement===n&&(r.preventDefault(),i.focus()):document.activeElement===i&&(r.preventDefault(),n.focus())),r.key===" "&&document.activeElement===e&&r.preventDefault()})}function ze(e){const s=Ne(e);document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),n=t.querySelector(".details-modal"),i=t.querySelector("[data-details-modal-close]"),r=t.querySelector("[data-details-modal-adopt]");n.setAttribute("tabindex","-1"),n.focus(),We(n),i.addEventListener("click",()=>O(t)),t.addEventListener("click",l=>{l.target===t&&O(t)});function c(l){l.key==="Escape"&&(O(t),window.removeEventListener("keydown",c))}window.addEventListener("keydown",c),r.addEventListener("click",()=>{O(t),Fe(e.id)})}function O(e){e.remove(),document.body.classList.remove("body-lock")}o.petsList.addEventListener("click",e=>{var i,r,c,l,u;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),n={id:t.dataset.id,image:((i=t.querySelector(".pets-img"))==null?void 0:i.src)||"",species:((r=t.querySelector(".pets-species"))==null?void 0:r.textContent)||"",name:((c=t.querySelector(".pets-name"))==null?void 0:c.textContent)||"",age:((l=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:l.textContent)||"",gender:((u=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:u.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};ze(n)});const J=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],He=J.map(({id:e,description:s})=>`<div class="swiper-slide about-slide" role="group" aria-label="Слайд ${e} із ${J.length}">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${p}about-us/desktop/slide-p${e}-desk.webp 1x, ${p}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${p}about-us/tablet/slide-p${e}-tab.webp 1x, ${p}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${p}about-us/mobile/slide-p${e}-mob.webp 1x, ${p}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${p}about-us/mobile/slide-p${e}-mob.webp"
              alt="Ілюстрація до історії притулку ${e}" loading="lazy" decoding="async"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${s}</p>
          </div>
        </div>`).join("");o.aboutSwiperWrapper.innerHTML=He;const h=new Q(".about-mySwiper",{modules:[ee,ue,te],speed:1e3,loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function re(){window.innerWidth<768?(o.aboutPaginationElem.classList.remove("center"),o.aboutPaginationElem.classList.add("left")):(o.aboutPaginationElem.classList.remove("left"),o.aboutPaginationElem.classList.add("center"))}re();window.addEventListener("resize",re);const le=()=>{h.isEnd?o.aboutBtnForward.classList.add("about-btn-disabled"):o.aboutBtnForward.classList.remove("about-btn-disabled"),h.isBeginning?o.aboutBtnBack.classList.add("about-btn-disabled"):o.aboutBtnBack.classList.remove("about-btn-disabled")};h.on("slideChange",le);le();const ce=o.aboutSection;h.on("slideChangeTransitionStart",()=>{ce&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});h.on("slideChangeTransitionEnd",()=>{const e=h.slides[h.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const Re=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=h.slides[h.activeIndex],n=t.querySelector(".about-id"),i=t.querySelector(".about-overlay");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show")),i&&(i.classList.remove("fade-out"),i.offsetWidth,i.classList.add("fade-out"))}})},{threshold:.7});Re.observe(ce);const _e=[{q:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",blocks:[{type:"p",text:"Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:"},{type:"ol",items:["Оберіть друга: Придивіться до наших хвостиків у розділі «Знайди друга».","Залиште заявку: Коли відчуєте, що це «ваша» тваринка, натискайте кнопку «Взяти додому» та заповніть коротку анкету.","Поговоріть з куратором: Наш волонтер зателефонує вам, щоб познайомитись ближче, розповісти про характер тваринки та відповісти на всі ваші питання.","Приїжджайте знайомитись: Якщо ви ідеально підходите одне одному, ми домовимось про зустріч у притулку.","Дорога додому: Після знайомства та підписання договору про відповідальне утримання, ваш новий друг поїде з вами у своє нове, щасливе життя!"]}]},{q:"Як мені найкраще підготувати свій дім та родину до появи хвостика?",blocks:[{type:"p",text:"Чудове питання, яке показує вашу турботу! Переїзд — це завжди невеликий стрес для тваринки, але правильна підготовка зробить цей процес легким і радісним. Ось кілька порад:"},{type:"ul",items:["Безпечний простір: Переконайтесь, що на вікнах є сітки, а дроти та побутова хімія сховані.","Особисті речі: Підготуйте для хвостика дві мисочки (для їжі та води), лежанку чи будиночок, лоток з наповнювачем для котика або повідець і нашийник для собачки.","Сімейна розмова: Обговоріть з рідними майбутні обов'язки. Важливо, щоб усі були готові до появи нового мешканця.","Терпіння та любов: Дайте тваринці час, щоб звикнути. Не квапте її, будьте поруч, розмовляйте лагідним голосом — і ваша любов творитиме дива!"]}]},{q:"Чи можу я бути впевненим, що тваринка здорова? Розкажіть про щеплення.",blocks:[{type:"p",text:"Так, звісно. Здоров'я наших підопічних — наш головний пріоритет. Кожна тваринка, яка потрапляє до нас, проходить повний огляд у ветеринара. Ми гарантуємо, що:"},{type:"ul",items:["Усі хвостики оброблені від бліх та глистів.","Усі вакциновані комплексною вакциною за віком.","Дорослі тварини (зазвичай від 6-8 місяців) стерилізовані/кастровані."]},{type:"p",text:"Разом із тваринкою ви обов'язково отримаєте її ветеринарний паспорт з усіма відмітками. Якщо у когось є особливі потреби у догляді чи харчуванні, ми чесно і детально про це розповімо."}]},{q:"Я дуже хочу допомогти, але поки не готовий до адопції. Чим я можу підтримати «Хатинку лапок»?",blocks:[{type:"p",text:"Дякуємо вам за велике серце та бажання допомогти! Кожна допомога для нас безцінна. Навіть якщо ви не можете взяти тваринку, ви можете стати її янголом-охоронцем. Ось як:"},{type:"ul",items:["Допомогти фінансово: Ваша пожертва піде на корм, ліки, оплату комунальних послуг та зарплату персоналу.","Стати волонтером: Нам завжди потрібні люблячі руки для прогулянок з собачками, прибирання та, найголовніше, для спілкування з тваринками.","Подарувати необхідне: Ми завжди раді кормам, лікам, наповнювачам для лотків, іграшкам, теплим ковдрам.","Допомогти інформаційно: Найпростіший, але дуже дієвий спосіб — розповідати про нас у соцмережах. Можливо, саме ваш репост допоможе комусь знайти свою долю!"]}]},{q:"Мені сподобалась одна з ваших тваринок на сайті. Чи можу я приїхати, щоб познайомитися з нею особисто?",blocks:[{type:"ul",items:["Авжеж! Ми віримо, що справжня магія стається лише при особистій зустрічі. Щоб знайомство було комфортним і для вас, і для тваринки, ми просимо вас спочатку заповнити онлайн-заявку на нашому сайті.","Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!"]}]}],Ve=e=>{if(e.type==="p")return`<p>${e.text}</p>`;if(e.type==="ol"||e.type==="ul"){const t=(e.items??[]).map(n=>`<li>${n}</li>`).join("");return`<${e.type}>${t}</${e.type}>`}return""},Ue=({q:e,blocks:s=[]})=>`
  <li class="ac">
    <h3 class="ac-header">
      <button class="ac-trigger" type="button" aria-label="Питання">
        <span class="faq-question">${e}</span>
        <span class="faq-icon">
          <svg aria-hidden="true" width="24" height="24">
            <use href="${p}sprite.svg#icon-add"></use>
          </svg>
        </span>
      </button>
    </h3>

    <div class="ac-panel" role="region" aria-labelledby="Питання">
      <div class="faq-content">
        ${s.map(Ve).join("")}
      </div>
    </div>
  </li>
`;o.faqListEl.innerHTML=_e.map(Ue).join("");new me(".accordion-container",{duration:1e3,showMultiple:!1,collapse:!0,ariaEnabled:!0});const Ke=document.querySelector(".faq-ajax-loader"),Y=20;for(let e=0;e<Y;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(Y-e)*.25+5}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw1"),t.appendChild(n),s.appendChild(t),Ke.appendChild(s)}F.defaults.baseURL="https://paw-hut.b.goit.study";const Je=async()=>(await F.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",Ye);async function Ye(){try{let c=function(l){t.forEach(b=>b.classList.remove("active","near","far")),t[l].classList.add("active"),t[l-1]&&t[l-1].classList.add("near"),t[l+1]&&t[l+1].classList.add("near"),t[l-2]&&t[l-2].classList.add("far"),t[l+2]&&t[l+2].classList.add("far");const u=r-i;let S=l-2;S=Math.max(0,Math.min(S,u)),o.successPagination.style.transform=`translateX(${-S*n}px)`};const e=await Je();Ze(e.feedbacks),document.querySelectorAll(".rating").forEach(l=>{const u=l.dataset.score;new pe(l,{score:u,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${p}icons/filled.svg`,starOff:`${p}icons/outline.svg`,starHalf:`${p}icons/half.svg`}).init()});const s=new Q(".success-swiper",{modules:[ee,te,be],speed:1e3,spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2}}}),t=[],n=16,i=6;let r=s.slides.length;for(let l=0;l<r;l++){const u=document.createElement("span");u.classList.add("success-bullet"),u.dataset.index=l,u.addEventListener("click",()=>{s.slideTo(l)}),o.successPagination.appendChild(u),t.push(u)}s.on("slideChange",()=>{c(s.activeIndex)}),c(0),s.on("slideChange",()=>{s.isEnd?o.successBtnForward.classList.add("success-btn-disabled"):o.successBtnForward.classList.remove("success-btn-disabled")}),s.on("slideChange",()=>{s.isBeginning?o.successBtnBack.classList.add("success-btn-disabled"):o.successBtnBack.classList.remove("success-btn-disabled")})}catch{G.error({title:"",message:"Шось воно не робе!",position:"topRight",iconUrl:`${p}public/error.svg`,messageColor:"#fafafb",messageSize:"16",titleWeight:"700",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3,maxWidth:432,theme:"dark",close:!0,class:"my-toast"})}}const Ze=e=>{const s=e.map(t=>`<li class="swiper-slide success-item" role="listitem" aria-label="Історія">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}" aria-label="Оцінка"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");o.successList.innerHTML=s},Ge=o.successAnimation,Z=15;for(let e=0;e<Z;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(Z-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(n),s.appendChild(t),Ge.appendChild(s)}
//# sourceMappingURL=index.js.map

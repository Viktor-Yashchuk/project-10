import{S as f,N as v,P as w,K as g,A as y}from"./assets/vendor-j88HRNkL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const L=document.querySelector(".burger-btn"),d=document.querySelector(".mobile-menu"),h=document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const S=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),b=e=>{e.key==="Escape"&&a()},E=()=>{d.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",b)},a=()=>{d.classList.remove("is-open"),document.body.style.overflow="",document.removeEventListener("keydown",b)},x=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||a()};L.addEventListener("click",E);h.addEventListener("click",a);d.addEventListener("click",x);S.forEach(e=>{e.addEventListener("click",a)});const l=document.querySelector(".about-swiper-button-next"),u=document.querySelector(".about-swiper-button-prev"),q=[{id:1,imageURL:"/img/about-us/mobile/slide-p1-mob.webp",description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageURL:"/img/about-us/mobile/slide-p2-mob.webp",description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageURL:"/img/about-us/mobile/slide-p3-mob.webp",description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageURL:"/img/about-us/mobile/slide-p4-mob.webp",description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageURL:"/img/about-us/mobile/slide-p5-mob.webp",description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],k=q.map(({id:e,description:o,imageURL:s})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="/img/about-us/desktop/slide-p${e}-desk.webp 1x,
                /img/about-us/desktop/slide-p${e}-desk@2x.webp 2x
              "
            />
            <source
              media="(min-width: 768px)"
              srcset="/img/about-us/tablet/slide-p${e}-tab.webp   1x,
                /img/about-us/tablet/slide-p${e}-tab@2x.webp 2x
              "
            />
            <source
              media="(max-width: 767px)"
              srcset="/img/about-us/mobile/slide-p${e}-mob.webp    1x,
              /img/about-us/mobile/slide-p${e}-mob@2x.webp 2x
              "
            />
            <img 
              class="about-picture"
              src="${s}"
              alt="slide"
            />
          </picture>
          <div class="about-overlay">
          <p class="about-id">${o}</p>
          </div>
        </div>`);document.querySelector(".swiper-wrapper").innerHTML=k.join("");const n=new f(".about-mySwiper",{modules:[v,w,g],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function m(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}m();window.addEventListener("resize",m);const p=()=>{n.isEnd?l.classList.add("about-btn-disabled"):l.classList.remove("about-btn-disabled"),n.isBeginning?u.classList.add("about-btn-disabled"):u.classList.remove("about-btn-disabled")};n.on("slideChange",p);p();n.on("slideChangeTransitionStart",()=>{document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out"))});n.on("slideChangeTransitionEnd",()=>{const e=n.slides[n.activeIndex],o=e.querySelector(".about-id");o&&o.classList.add("show");const s=e.querySelector(".about-overlay");s&&s.classList.add("fade-out")});const P=document.querySelector(".about"),M=new IntersectionObserver(e=>{e.forEach(o=>{if(o.isIntersecting){const s=n.slides[n.activeIndex],r=s.querySelector(".about-id"),t=s.querySelector(".about-overlay");r&&(r.classList.remove("show"),r.offsetWidth,r.classList.add("show")),t&&(t.classList.remove("fade-out"),t.offsetWidth,t.classList.add("fade-out"))}})},{threshold:.7});M.observe(P);document.addEventListener("DOMContentLoaded",()=>{new y(".accordion-container",{duration:400,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const o=e.target.closest(".ac-trigger");o&&setTimeout(()=>{window.innerWidth<768&&o.scrollIntoView({behavior:"smooth",block:"start"})},450)});
//# sourceMappingURL=index.js.map

import Swiper from 'swiper';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BASE } from './config';
import { refs } from './refs';

const data = [
  {
    id: 1,
    description:
      'Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили.',
  },
  {
    id: 2,
    description:
      'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.',
  },
  {
    id: 3,
    description:
      '"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.',
  },
  {
    id: 4,
    description:
      'Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках.',
  },
  {
    id: 5,
    description:
      'Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин.',
  },
];

const aboutRender = data
  .map(({ id, description }) => {
    return `<div class="swiper-slide about-slide" role="group" aria-label="Слайд ${id} із ${data.length}">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${BASE}about-us/desktop/slide-p${id}-desk.webp 1x, ${BASE}about-us/desktop/slide-p${id}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${BASE}about-us/tablet/slide-p${id}-tab.webp 1x, ${BASE}about-us/tablet/slide-p${id}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${BASE}about-us/mobile/slide-p${id}-mob.webp 1x, ${BASE}about-us/mobile/slide-p${id}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${BASE}about-us/mobile/slide-p${id}-mob.webp"
              alt="Ілюстрація до історії притулку ${id}" loading="lazy" decoding="async"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${description}</p>
          </div>
        </div>`;
  })
  .join('');

refs.aboutSwiperWrapper.innerHTML = aboutRender;

const swiper = new Swiper('.about-mySwiper', {
  modules: [Navigation, Pagination, Keyboard],
  speed: 1000,
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: '.about .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.about-swiper-button-next',
    prevEl: '.about-swiper-button-prev',
  },
});

function updatePaginationPosition() {
  if (window.innerWidth < 768) {
    refs.aboutPaginationElem.classList.remove('center');
    refs.aboutPaginationElem.classList.add('left');
  } else {
    refs.aboutPaginationElem.classList.remove('left');
    refs.aboutPaginationElem.classList.add('center');
  }
}

updatePaginationPosition();
window.addEventListener('resize', updatePaginationPosition);

const updateNavigationState = () => {
  if (swiper.isEnd) {
    refs.aboutBtnForward.classList.add('about-btn-disabled');
  } else {
    refs.aboutBtnForward.classList.remove('about-btn-disabled');
  }
  if (swiper.isBeginning) {
    refs.aboutBtnBack.classList.add('about-btn-disabled');
  } else {
    refs.aboutBtnBack.classList.remove('about-btn-disabled');
  }
};
swiper.on('slideChange', updateNavigationState);
updateNavigationState();

const aboutSection = refs.aboutSection;

swiper.on('slideChangeTransitionStart', () => {
  if (!aboutSection) return;
  document
    .querySelectorAll('.about-id')
    .forEach(el => el.classList.remove('show'));
  document
    .querySelectorAll('.about-overlay')
    .forEach(el => el.classList.remove('fade-out'));
});

swiper.on('slideChangeTransitionEnd', () => {
  const activeSlide = swiper.slides[swiper.activeIndex];

  const text = activeSlide.querySelector('.about-id');
  if (text) text.classList.add('show');

  const overlay = activeSlide.querySelector('.about-overlay');
  if (overlay) overlay.classList.add('fade-out');
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const text = activeSlide.querySelector('.about-id');
        const overlay = activeSlide.querySelector('.about-overlay');

        if (text) {
          text.classList.remove('show');
          void text.offsetWidth;
          text.classList.add('show');
        }

        if (overlay) {
          overlay.classList.remove('fade-out');
          void overlay.offsetWidth;
          overlay.classList.add('fade-out');
        }
      }
    });
  },
  { threshold: 0.7 }
);

observer.observe(aboutSection);

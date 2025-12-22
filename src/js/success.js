import axios from 'axios';
import { refs } from './refs';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Raty from 'raty-js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { BASE } from './config';

axios.defaults.baseURL = 'https://paw-hut.b.goit.study';

const fetchFeedbacks = async () => {
  const feedback = await axios.get('/api/feedbacks', {
    params: {
      limit: 25,
      page: 18,
    },
  });

  return feedback.data;
};

document.addEventListener('DOMContentLoaded', loadedSuccessSection);

async function loadedSuccessSection() {
  try {
    const getFeedback = await fetchFeedbacks();

    renderFeedback(getFeedback.feedbacks);

    document.querySelectorAll('.rating').forEach(el => {
      const score = el.dataset.score;

      const raty = new Raty(el, {
        score: score,
        number: 5,
        readOnly: true,
        half: true,
        starType: 'img',
        starOn: `${BASE}icons/filled.svg`,
        starOff: `${BASE}icons/outline.svg`,
        starHalf: `${BASE}icons/half.svg`,
      });
      raty.init();
    });

    const successSwiper = new Swiper('.success-swiper', {
      modules: [Navigation, Keyboard, Mousewheel],
      speed: 1000,
      spaceBetween: 32,
      slidesPerView: 1,
      loop: false,
      wrapperClass: 'success-list',
      slideClass: 'success-item',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        enabled: true,
      },
      navigation: {
        nextEl: '.success-button-forward',
        prevEl: '.success-button-back',
        disabledClass: '.success-btn-disabled',
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
      },
    });

    const bullets = [];
    const bulletStep = 8 + 8;
    const bulletCount = 6;
    let totalBullets = successSwiper.slides.length;

    for (let i = 0; i < totalBullets; i++) {
      const bullet = document.createElement('span');
      bullet.classList.add('success-bullet');
      bullet.dataset.index = i;

      bullet.addEventListener('click', () => {
        successSwiper.slideTo(i);
      });

      refs.successPagination.appendChild(bullet);
      bullets.push(bullet);
    }

    function dynamicPagination(index) {
      bullets.forEach(b => b.classList.remove('active', 'near', 'far'));

      bullets[index].classList.add('active');

      if (bullets[index - 1]) bullets[index - 1].classList.add('near');
      if (bullets[index + 1]) bullets[index + 1].classList.add('near');
      if (bullets[index - 2]) bullets[index - 2].classList.add('far');
      if (bullets[index + 2]) bullets[index + 2].classList.add('far');

      const maxShift = totalBullets - bulletCount;

      let shiftIndex = index - 2;
      shiftIndex = Math.max(0, Math.min(shiftIndex, maxShift));

      refs.successPagination.style.transform = `translateX(${
        -shiftIndex * bulletStep
      }px)`;
    }

    successSwiper.on('slideChange', () => {
      dynamicPagination(successSwiper.activeIndex);
    });

    dynamicPagination(0);

    successSwiper.on('slideChange', () => {
      if (successSwiper.isEnd) {
        refs.successBtnForward.classList.add('success-btn-disabled');
      } else {
        refs.successBtnForward.classList.remove('success-btn-disabled');
      }
    });

    successSwiper.on('slideChange', () => {
      if (successSwiper.isBeginning) {
        refs.successBtnBack.classList.add('success-btn-disabled');
      } else {
        refs.successBtnBack.classList.remove('success-btn-disabled');
      }
    });
  } catch (err) {
    iziToast.error({
      title: '',
      message: 'Шось воно не робе!',
      position: 'topRight',
      iconUrl: `${BASE}public/error.svg`,
      messageColor: '#fafafb',
      messageSize: '16',
      titleWeight: '700',
      backgroundColor: '#ef4040',
      progressBarColor: '#b51b1b',
      timeout: 3000,
      maxWidth: 432,
      theme: 'dark',
      close: true,
      class: 'my-toast',
    });
  }
}

const renderFeedback = feedbacks => {
  const markup = feedbacks
    .map(
      feedback =>
        `<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${feedback.rate}"></div>
                <p class="success-item-desc">${feedback.description}</p>
            </div>
            <p class="success-item-author">${feedback.author}</p>
        </li>`
    )
    .join('');

  refs.successList.innerHTML = markup;
};

const successAnim = refs.successAnimation;
const total = 15;

for (let i = 0; i < total; i++) {
  const paw = document.createElement('div');
  paw.classList.add('paw');

  paw.style.animationDelay = `${(total - i) * 0.25}s`;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('icon');

  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#paw');

  svg.appendChild(use);
  paw.appendChild(svg);
  successAnim.appendChild(paw);
}

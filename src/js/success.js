import axios from 'axios';
import { refs } from './refs';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  } catch (err) {
    iziToast.error({
      message: 'Error',
      position: 'center',
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

const swiper = new Swiper('.success-swiper', {
  modules: [Navigation, Pagination, Keyboard, Mousewheel],
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
  pagination: {
    el: '.success-swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
  navigation: {
    nextEl: '.success-button-forward',
    prevEl: '.success-button-back',
    disabledClass: '.success-btn-disabled',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      pagination: {
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
    },
  },
});

swiper.on('slideChange', () => {
  if (swiper.isEnd) {
    refs.successBtnForward.classList.add('success-btn-disabled');
  } else {
    refs.successBtnForward.classList.remove('success-btn-disabled');
  }
});

swiper.on('slideChange', () => {
  if (swiper.isBeginning) {
    refs.successBtnBack.classList.add('success-btn-disabled');
  } else {
    refs.successBtnBack.classList.remove('success-btn-disabled');
  }
});

const successAnim = refs.successAnimation;
const total = 30;

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

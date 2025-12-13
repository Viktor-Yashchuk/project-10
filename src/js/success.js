import axios from 'axios';
import { refs } from './refs';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

axios.defaults.baseURL = 'https://paw-hut.b.goit.study';

const fetchFeedbacks = async () => {
    const feedback = await axios.get('/api/feedbacks', {
        params: {
            limit: 5,
            page: 5,
        },
    });

    return feedback.data;
};

document.addEventListener('DOMContentLoaded', loadedSuccessSection);

async function loadedSuccessSection() {
    try {
        const getFeedback = await fetchFeedbacks();
        console.log(getFeedback);

        renderFeedback(getFeedback.feedbacks);
    } catch (err) {}
}

const renderFeedback = feedbacks => {
    const markup = feedbacks
        .map(
            feedback =>
                `<li class="swiper-slide success-item">
            <div class="success-rate-star-box" data-raty>${feedback.rate}</div>
            <p class="success-item-desc">${feedback.description}</p>
            <p class="success-item-author">${feedback.author}</p>
        </li>`
        )
        .join('');

    refs.successList.innerHTML = markup;
};

const swiper = new Swiper('.success-swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 32,
    slidesPerView: 1,
    loop: false,
    wrapperClass: 'success-list',
    slideClass: 'success-item',
    watchOverflow: true,
    pagination: {
        el: '.success-swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.success-button-forward',
        prevEl: '.success-button-back',
        disabledClass: '.success-btn-disabled',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            pagination: {
                dynamicBullets: true,
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

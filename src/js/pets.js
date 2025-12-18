import axios from 'axios';
import { refs } from './refs.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//user device width check

const checkWidth = () => {
  if (window.innerWidth < 768) return 'mobile';
  else if (window.innerWidth < 1440) return 'tablet';
  else return 'desktop';
};

const setLimit = () =>
  userDevice === 'mobile' || userDevice === 'tablet' ? 8 : 9;

//constants

let currentCtg;
let currentPage = 1;
let totalItems;

let userDevice = checkWidth();

let limit = setLimit();

const isMobile = () => {
  return userDevice === 'mobile';
};

//toast
const toastError = mess =>
  iziToast.show({
    message: `Error: ${mess}`,
    position: 'topRight',
    color: 'red',
    close: false,
  });

//pagination

function renderPagination() {
  const totalPages = Math.ceil(totalItems / limit);
  if (totalPages <= 1) return;

  let markup = '';

  markup += `<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${
        currentPage === 1 ? 'disabled' : ''
      }><svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`;

  if (currentPage === 1) {
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      markup += pageButton(i);
    }
    if (totalPages > 3) {
      markup += `<li class="dots">…</li>`;
      markup += pageButton(totalPages);
    }
  } else if (currentPage === totalPages) {
    markup += pageButton(1);
    if (totalPages > 3) {
      markup += `<li class="dots">…</li>`;
    }
    for (let i = totalPages - 2; i <= totalPages; i++) {
      if (i > 1) {
        markup += pageButton(i);
      }
    }
  } else {
    markup += pageButton(1);

    if (currentPage > 3) {
      markup += `<li class="dots">…</li>`;
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
      if (i > 1 && i < totalPages) {
        markup += pageButton(i);
      }
    }

    if (currentPage < totalPages - 2) {
      markup += `<li class="dots">…</li>`;
    }

    if (totalPages > 1) {
      markup += pageButton(totalPages);
    }
  }

  markup += `<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${
        currentPage === totalPages ? 'disabled' : ''
      }> <svg class="arrow-icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`;

  refs.petsPagination.style.display = 'flex';
  refs.petsPagination.innerHTML = markup;
}

function pageButton(pageNumber) {
  return `
    <li>
      <button
        class="pagination-btn ${currentPage === pageNumber ? 'active' : ''}"
        aria-label="Сторінка ${pageNumber}"
        data-page="${pageNumber}">
        ${pageNumber}
      </button>
    </li>
  `;
}

//pagination click

const onPaginationClick = async e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  const totalPages = Math.ceil(totalItems / limit);

  if (btn.dataset.action === 'prev' && currentPage > 1) {
    currentPage -= 1;
  }

  if (btn.dataset.action === 'next' && currentPage < totalPages) {
    currentPage += 1;
  }

  if (btn.dataset.page) {
    currentPage = +btn.dataset.page;
  }

  clearPets();
  hidePagination();
  await initPets(currentPage, currentCtg);
  renderPagination();
};

refs.petsPagination.addEventListener('click', onPaginationClick);

//get categories
const getCtgs = async () =>
  await axios('https://paw-hut.b.goit.study/api/categories');

//render categories
const renderCtgs = arr => {
  arr.unshift({ name: 'Всі' });

  const order = [
    'Всі',
    'Собаки',
    'Коти',
    'Кролики',
    'Гризуни',
    'Птахи',
    'Тварини з особливими потребами',
    'Терміново шукають дім',
  ];

  arr.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  return arr
    .map(
      el =>
        `<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${el._id}" type="button">${el.name}</button></li>`
    )
    .join('');
};

//init categories

const initCtgs = async () => {
  try {
    const ctgs = await getCtgs();
    refs.ctgsList.innerHTML = renderCtgs(ctgs.data);
    const firstBtn = document.querySelector('.pets-ctgs-btn');
    firstBtn.classList.add('active');
    firstBtn.dataset.id = 'all';
    firstBtn.setAttribute('aria-pressed', 'true');
  } catch (err) {
    toastError(err.message);
  }
};

//get pets
const getPets = async (page, categoryId) => {
  const params = { page: page, limit: limit };
  if (categoryId) params.categoryId = categoryId;

  return await axios('https://paw-hut.b.goit.study/api/animals', {
    params: params,
  });
};

//render pets
const renderPets = arr =>
  arr
    .map(
      el => `<li class="pets-item" role="listitem">
    <img class="pets-img" src="${el.image}" alt="${el.species}">
    <p class="pets-species">${el.species}</p>
    <h3 class="pets-name">${el.name}</h3>
    <ul class="pets-own-ctgs-list">${el.categories
      .map(el => `<li class="pets-own-ctgs-item"><p>${el.name}</p></li>`)
      .join('')}</ul>
    <ul class="pets-info">
    <li><p>${el.age}</p></li>
    <li><p>${el.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${el.shortDescription}</p>
    <button class="pets-modal-btn" type="submit">Дізнатись більше</button>
</li>`
    )
    .join('');

//init pets

const initPets = async (page, categoryId) => {
  try {
    showLoader();
    const pets = await getPets(page, categoryId);
    hideLoader();

    if (isMobile()) {
      refs.petsList.insertAdjacentHTML(
        'beforeend',
        renderPets(pets.data.animals)
      );
    } else refs.petsList.innerHTML = renderPets(pets.data.animals);

    totalItems = pets.data.totalItems;
  } catch (err) {
    toastError(err.message);
  }
};

//clear pets

const clearPets = () => (refs.petsList.innerHTML = '');

//change active category css

const changeActiveCtg = btn => {
  const allBtns = document.querySelectorAll('.pets-ctgs-btn');
  allBtns.forEach(el => {
    el.classList.remove('active');
    el.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
};

//category switch

const onClickCategory = async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  hideMoreBtn();
  hidePagination();

  changeActiveCtg(e.target);
  currentCtg = e.target.dataset.id === 'all' ? undefined : e.target.dataset.id;
  currentPage = 1;

  clearPets();
  await initPets(currentPage, currentCtg);

  if (isMobile() && totalItems > limit) showMoreBtn();
  else if (!isMobile()) renderPagination();
};

refs.ctgsList.addEventListener('click', onClickCategory);

//load more btn

const onClickLoad = async () => {
  currentPage++;
  await initPets(currentPage, currentCtg);

  if (currentPage * limit >= totalItems) hideMoreBtn();
};

refs.petsLoadBtn.addEventListener('click', onClickLoad);

//hide load more btn

const hideMoreBtn = () => {
  refs.petsLoadBtn.style.display = 'none';
};

//show load more btn

const showMoreBtn = () => {
  refs.petsLoadBtn.style.display = 'block';
};

//hide loader

const hideLoader = () => {
  refs.petsLoader.style.display = 'none';
};

//show loader

const showLoader = () => {
  refs.petsLoader.style.display = 'block';
};

const hidePagination = () => {
  refs.petsPagination.style.display = 'none';
};

//re render after resize page

const onResizePage = () => {
  const device = checkWidth();
  if (device === userDevice) return;

  clearPets();
  hideMoreBtn();
  hidePagination();

  userDevice = device;
  limit = setLimit();
  currentPage = 1;
  initPets(currentPage, currentCtg);

  if (device === 'mobile' && currentPage * limit < totalItems) showMoreBtn();
  else if (device !== 'mobile') renderPagination();
};

window.addEventListener('resize', onResizePage);

//load start page

await initCtgs();
await initPets(currentPage);

if (isMobile() && totalItems > limit) showMoreBtn();
else if (!isMobile()) renderPagination();

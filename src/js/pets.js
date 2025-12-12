import axios from 'axios';

const refs = {
  ctgsList: document.querySelector('.pets-ctgs-list'),
  petsList: document.querySelector('.pets-list'),
};

//get categories
let ctgs = await axios('https://paw-hut.b.goit.study/api/categories');

//render categories
const renderBtns = arr => {
  arr.unshift({ name: 'Всі' });
  return arr
    .map(
      el => `<button class="pets-ctgs-item" type="button">${el.name}</button>`
    )
    .join('');
};

refs.ctgsList.innerHTML = renderBtns(ctgs.data);

const firstBtn = document.querySelector('.pets-ctgs-item');
firstBtn.classList.add('active');

//get pets
let pets = await axios(
  'https://paw-hut.b.goit.study/api/animals?page=1&limit=10'
);

//render pets
const renderPets = arr =>
  arr
    .map(
      el => `<li class="pets-item">
    <img class="pets-img" src="${el.image}" alt="${el.species}">
    <p class="pets-class">${el.species}</p>
    <h3 class="pets-name">${el.name}</h3>
    <ul class="pets-own-ctgs-list>${el.categories
      .map(el => `<p class="pets-own-ctgs-item">${el.name}</p>`)
      .join('')}</ul>
    <div class="pets-info>
    <p class="pets-age>${el.age}</p>
    <p class="pets-gender>${el.gender}</p>
    </div>
    <p class="pets-behavior">${el.behavior}</p>
    <button class="pets-modal-open" type="submit">Дізнатись більше</button>
</li>`
    )
    .join('');

refs.petsList.innerHTML = renderPets(pets.data.animals);

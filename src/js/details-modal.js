import { BASE } from './config.js';
import { refs } from './refs.js';
import { openOrderModal } from './order-modal.js';


function createPetModalMarkup(pet) {
  return `
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${BASE}sprite.svg#icon-close2"></use></svg></button>
        <div class="details-modal-body">
          <div class="details-modal-left">
            <img class="details-modal-img" src="${pet.image}" alt="${pet.species}" />
          </div>
          <div class="details-modal-right">
            <p class="details-modal-species">${pet.species}</p>
            <h3 id="details-modal-title" class="details-modal-name">${pet.name}</h3>
            <div class="details-modal-info">
              <p>${pet.age}</p>
              <p>${pet.gender}</p>
            </div>

            <h4 class="details-modal-subtitle">Опис:</h4>
            <p id="details-modal-description" class="details-modal-description">${pet.description || '—'}</p>

            <h4 class="details-modal-subtitle">Здоровʼя:</h4>
            <p class="details-modal-health">${pet.health || '—'}</p>

            <h4 class="details-modal-subtitle">Поведінка:</h4>
            <p class="details-modal-behavior">${pet.behavior || '—'}</p>

            <button class="details-modal-adopt-btn" type="button" data-details-modal-adopt>Взяти додому</button>
          </div>
        </div>
      </div>
    </div>`;
}

function openPetModal(pet) {
  const markup = createPetModalMarkup(pet);
  document.body.insertAdjacentHTML('beforeend', markup);

  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.classList.add('body-lock');

  const backdrop = document.querySelector('[data-details-modal-backdrop]');
  const closeBtn = backdrop.querySelector('[data-details-modal-close]');
  const adoptBtn = backdrop.querySelector('[data-details-modal-adopt]');

  closeBtn.addEventListener('click', () => closePetModal(backdrop));

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closePetModal(backdrop);
  });
    
    function onEscClose(e) {
        if (e.key === 'Escape') {
            closePetModal(backdrop);
            window.removeEventListener('keydown', onEscClose);
        }
    }
    window.addEventListener('keydown', onEscClose);

  adoptBtn.addEventListener('click', () => {
    closePetModal(backdrop);
    openOrderModal(pet.id);
  });
}

function closePetModal(backdrop) {
  backdrop.remove();
  document.body.classList.remove('body-lock');
}

refs.petsList.addEventListener('click', e => {
  const btn = e.target.closest('.pets-modal-btn');
  if (!btn) return;

  const card = btn.closest('.pets-item');
  const pet = {
    id: card.dataset.id,
    image: card.querySelector('.pets-img')?.src || '',
    species: card.querySelector('.pets-species')?.textContent || '',
    name: card.querySelector('.pets-name')?.textContent || '',
    age: card.querySelector('.pets-info p:nth-child(1)')?.textContent || '',
    gender: card.querySelector('.pets-info p:nth-child(2)')?.textContent || '',
    description: card.dataset.description || '',   
    health: card.dataset.health || '',             
    behavior: card.dataset.behavior || '',
  };

  openPetModal(pet);
});

refs.petsList.addEventListener('keydown', e => {
    const btn = e.target.closest('.pets-modal-btn');
    if (!btn) return;

    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
    const card = btn.closest('.pets-item');
    const pet = {
    id: card.dataset.id,
    image: card.querySelector('.pets-img')?.src || '',
    species: card.querySelector('.pets-species')?.textContent || '',
    name: card.querySelector('.pets-name')?.textContent || '',
    age: card.querySelector('.pets-info p:nth-child(1)')?.textContent || '',
    gender: card.querySelector('.pets-info p:nth-child(2)')?.textContent || '',
    description: card.dataset.description || '',
    health: card.dataset.health || '',
    behavior: card.dataset.behavior || '',
    };
        
    openPetModal(pet);
    }
});

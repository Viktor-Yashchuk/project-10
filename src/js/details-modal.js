import { BASE } from './config.js';
import { refs } from './refs.js';
import { openOrderModal } from './order-modal.js';

function createPetModalMarkup(pet) {
  return `
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description" aria-label="Деталі про тваринку">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${BASE}sprite.svg#icon-close2"></use></svg></button>
        <div class="details-modal-body">
          <div class="details-modal-left">
            <img class="details-modal-img" src="${pet.image}" alt="Фото ${
    pet.species
  } на ім'я ${pet.name}" />
          </div>
          <div class="details-modal-right">
            <p class="details-modal-species">${pet.species}</p>
            <h3 id="details-modal-title" class="details-modal-name">${
              pet.name
            }</h3>
            <div class="details-modal-info">
              <p>${pet.age}</p>
              <p>${pet.gender}</p>
            </div>

            <h4 id="details-description-title" class="details-modal-subtitle">Опис:</h4>
            <p id="details-modal-description" class="details-modal-description"  aria-labelledby="details-description-title">${
              pet.description || '—'
            }</p>

            <h4 id="details-health-title" class="details-modal-subtitle">Здоровʼя:</h4>
            <p class="details-modal-health" aria-labelledby="details-health-title">${pet.health || '—'}</p>

            <h4 id="details-behavior-title" class="details-modal-subtitle">Поведінка:</h4>
            <p class="details-modal-behavior" aria-labelledby="details-behavior-title">${pet.behavior || '—'}</p>

            <button class="details-modal-adopt-btn" type="button" data-details-modal-adopt aria-label="Взяти тваринку додому">Взяти додому</button>
          </div>
        </div>
      </div>
    </div>`;
}

function trapFocus(modal) {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];
  const focusableElements = modal.querySelectorAll(focusableSelectors.join(','));
  if (focusableElements.length === 0) return;

  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  modal.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {

        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
 
    if (e.key === ' ' && document.activeElement === modal) {
      e.preventDefault();
    }
  });
}

function openPetModal(pet) {
  const markup = createPetModalMarkup(pet);
  document.body.insertAdjacentHTML('beforeend', markup);

  document.body.classList.add('body-lock');

  const backdrop = document.querySelector('[data-details-modal-backdrop]');
  const modal = backdrop.querySelector('.details-modal');
  const closeBtn = backdrop.querySelector('[data-details-modal-close]');
  const adoptBtn = backdrop.querySelector('[data-details-modal-adopt]');

  modal.setAttribute('tabindex', '-1');
  modal.focus();
  trapFocus(modal);

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

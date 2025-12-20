import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { BASE } from './config';

function createOrderModalMarkup() {
  return `
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal container" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button class="order-modal-close-btn" type="button" aria-label="Закрити" data-order-modal-close>
          <svg class="icon-close" width="14" height="14">
            <use href="${BASE}sprite.svg#icon-close2"></use>
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
              placeholder="Андрій"
              required
              autocomplete="off"
            />
          </label>

          <label class="order-modal-label" for="phone">
            Телефон*
            <input
              class="order-modal-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (095) 555 99 22"
              required
              autocomplete="off"
            />
          </label>

          <label class="order-modal-label" for="message">
            Коментар
            <textarea
              class="order-modal-input-textarea"
              name="message"
              id="message"
              placeholder="Напишіть ваш коментар"
              autocomplete="off"
            ></textarea>
          </label>

          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`;
}

export function openOrderModal(animalId) {
  const markup = createOrderModalMarkup();
  document.body.insertAdjacentHTML('beforeend', markup);
  document.body.classList.add('body-lock'); // блокуємо скрол

  const backdrop = document.querySelector('[data-order-modal-backdrop]');
  const closeBtn = backdrop.querySelector('[data-order-modal-close]');
  const form = backdrop.querySelector('[data-order-modal-form]');


  closeBtn.addEventListener('click', () => closeOrderModal(backdrop));
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeOrderModal(backdrop);
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeOrderModal(backdrop);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('username'),
      phone: formData.get('phone'),
      comment: formData.get('message'),
      animalId: animalId, 
    };

    try {
      const response = await fetch('https://paw-hut.b.goit.study/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Помилка відправки заявки');

      Swal.fire({
        icon: 'success',
        title: 'Заявку надіслано!',
        text: 'Ми скоро з вами зв’яжемося.',
      });

      form.reset();
      closeOrderModal(backdrop);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: err.message,
      });
    }
  });
}


function closeOrderModal(backdrop) {
  backdrop.remove();
  document.body.classList.remove('body-lock'); 
}



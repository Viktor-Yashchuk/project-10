import Swal from 'sweetalert2';
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
              placeholder="Ваше Ім'я"
              required
              minlength="2"
              maxlength="30"
              autocomplete="off"
              aria-describedby="username-error"
            />
            <span id="username-error" class="error-message">Ім’я має містити лише літери, пробіли, апострофи та дефіси.</span>
          </label>

          <label class="order-modal-label" for="phone">
            Телефон*
            <input
              class="order-modal-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (0XX) XXX XX XX"
              required
              maxlength="19"
              inputmode="numeric"
              autocomplete="off"
              aria-describedby="phone-error"
            />
            <span id="phone-error" class="error-message">Формат: +38 (0XX) XXX XX XX</span>
          </label>

          <label class="order-modal-label" for="message">
            Коментар
            <textarea
              class="order-modal-input-textarea"
              name="message"
              id="message"
              placeholder="Напишіть ваш коментар"
              maxlength="300"
              autocomplete="off"
              aria-describedby="comment-error comment-counter"
            ></textarea>
            <span id="comment-error" class="error-message"></span>
            <span id="comment-counter" class="counter"></span>
          </label>
          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`;
}

export function openOrderModal(animalId) {
  const markup = createOrderModalMarkup();
  document.body.insertAdjacentHTML('beforeend', markup);
  document.body.classList.add('body-lock');

  const backdrop = document.querySelector('[data-order-modal-backdrop]');
  const closeBtn = backdrop.querySelector('[data-order-modal-close]');
  const form = backdrop.querySelector('[data-order-modal-form]');

  const nameInput = backdrop.querySelector('#username');
  const ALLOWED_CHARS = /[^a-zA-Z\u0400-\u04FF\s'’`-]/g;

  function sanitizeName(value) {
    return value
      .replace(ALLOWED_CHARS, '')
      .replace(/\s+/g, ' ')
      .replace(/-+/g, '-')
      .trim();
  }

  nameInput.addEventListener('input', e => {
    const el = e.target;
    const oldValue = el.value;
    const oldPos = el.selectionStart;

    const newValue = sanitizeName(oldValue);
    if (newValue === oldValue) return;

    el.value = newValue;
    const diff = oldValue.length - newValue.length;
    const newPos = Math.max(0, oldPos - diff);
    el.setSelectionRange(newPos, newPos);
  });

  nameInput.addEventListener('paste', e => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text');
    const clean = sanitizeName(text);

    const el = e.target;
    const start = el.selectionStart;
    const end = el.selectionEnd;

    const before = el.value.slice(0, start);
    const after = el.value.slice(end);

    el.value = sanitizeName(before + clean + after);

    const caret = (before + clean).length;
    el.setSelectionRange(caret, caret);
  });

  nameInput.addEventListener('blur', e => {
    e.target.value = sanitizeName(e.target.value);
  });

  const phoneInput = backdrop.querySelector('#phone');

  phoneInput.addEventListener('focus', () => {
    if (phoneInput.value.trim() === '') {
      phoneInput.value = '+38 (0';
    }
  });

  phoneInput.addEventListener('input', () => {
    let digits = phoneInput.value.replace(/\D/g, '');

    if (digits.startsWith('380')) {
    } else if (digits.startsWith('0')) {
      digits = '380' + digits.slice(1);
    } else if (digits.startsWith('3')) {
      digits = digits;
    } else if (digits.length > 0) {
      digits = '380' + digits;
    }

    let formatted = '+38 (0';
    if (digits.length > 3) formatted += digits.substring(3, 5);
    if (digits.length > 5) formatted += ') ' + digits.substring(5, 8);
    if (digits.length > 8) formatted += ' ' + digits.substring(8, 10);
    if (digits.length > 10) formatted += ' ' + digits.substring(10, 12);

    phoneInput.value = formatted;
  });

  function normalizePhone(value) {
    const digits = value.replace(/\D/g, '');
    return digits.slice(0, 12);
  }

  const commentInput = backdrop.querySelector('#message');
  const commentError = backdrop.querySelector('#comment-error');
  const commentCounter = backdrop.querySelector('#comment-counter');

  function validateComment() {
    const length = commentInput.value.trim().length;
    commentCounter.textContent = `${length}/300`;

    if (length === 0) {
      commentError.textContent = '';
      commentInput.classList.remove('invalid');
    } else if (length < 5) {
      commentError.textContent = 'Коментар має бути не менше 5 символів';
      commentInput.classList.add('invalid');
    } else if (length > 300) {
      commentError.textContent = 'Коментар має бути не більше 300 символів';
      commentInput.classList.add('invalid');
    } else {
      commentError.textContent = '';
      commentInput.classList.remove('invalid');
    }
  }

  commentInput.addEventListener('input', validateComment);
  commentInput.addEventListener('blur', validateComment);

  const inputs = backdrop.querySelectorAll(
    '.order-modal-input, .order-modal-input-textarea'
  );
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.trim();
      if (
        input.validity.valueMissing ||
        input.validity.patternMismatch ||
        input.validity.tooShort ||
        input.validity.tooLong
      ) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });

    input.addEventListener('blur', () => {
      if (
        input.validity.valueMissing ||
        input.validity.patternMismatch ||
        input.validity.tooShort ||
        input.validity.tooLong
      ) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });
  });

  closeBtn.addEventListener('click', () => closeOrderModal(backdrop));
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeOrderModal(backdrop);
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeOrderModal(backdrop);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    inputs.forEach(input => input.dispatchEvent(new Event('blur')));

    const cleanName = sanitizeName(nameInput.value);
    const hasAtLeastTwoLetters =
      (cleanName.match(/[a-zA-Z\u0400-\u04FF]/g) || []).length >= 2;
    if (!cleanName || !hasAtLeastTwoLetters) {
      Swal.fire({
        icon: 'warning',
        title: 'Перевірте ім’я',
        text: 'Ім’я має містити щонайменше 2 літери.',
        background: 'var(--color-scheme-1-foreground)',
        confirmButtonColor: 'var(--color-mariner-dark)',
      });
      nameInput.focus();
      return;
    }

    const normalizedPhone = normalizePhone(phoneInput.value);
    if (!/^380\d{9}$/.test(normalizedPhone)) {
      Swal.fire({
        icon: 'warning',
        title: 'Перевірте телефон',
        text: 'Формат телефону має бути 380XXXXXXXXX',
        background: 'var(--color-scheme-1-foreground)',
        confirmButtonColor: 'var(--color-mariner-dark)',
      });
      phoneInput.focus();
      return;
    }

    const comment = commentInput.value.trim();
    validateComment();
    if (commentInput.classList.contains('invalid')) {
      commentInput.focus();
      return;
    }

    if (!form.checkValidity()) {
      Swal.fire({
        icon: 'warning',
        title: 'Перевірте форму',
        text: 'Будь ласка, заповніть усі поля правильно.',
        background: 'var(--color-scheme-1-foreground)',
        confirmButtonColor: 'var(--color-mariner-dark)',
      });
      return;
    }

    const formData = new FormData(form);

    const cleanCommentRaw = formData.get('message');
    const cleanComment = (cleanCommentRaw || '').trim();

    const data = {
      name: cleanName,
      phone: normalizedPhone,
      animalId: animalId,
    };

    if (cleanComment !== '') {
      data.comment = cleanComment;
    }

    try {
      const response = await fetch('https://paw-hut.b.goit.study/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok)
        throw new Error(result?.message || 'Помилка відправки заявки');

      Swal.fire({
        icon: 'success',
        title: `Вітаємо, ${cleanName}! Заявку надіслано!😻Ваш пухнастик буде скоро з вами.`,
        html: `
    <div class="dog-container">
      <div class="dog">
        <div class="dog-head">
          <div class="dog-ears ears-left"></div>
          <div class="dog-ears ears-right"></div>
          <div class="dog-eyes"></div>
          <div class="dog-mouth">
            <div class="dog-nose"></div>
            <div class="dog-tongue"></div>
          </div>
        </div>
        <div class="dog-tail"></div>
        <div class="dog-body">
          <div class="dog-foot"></div>
        </div>
        <a href="https://github.com/Viktor-Yashchuk/project-10" 
                target="_blank"
                rel="noopener noreferrer"
                class="ball" 
                style="cursor: pointer; text-decoration: none;">
            No Bugs Just Pugs</a>
		   </div>
      </div> `,
        background: 'var(--color-scheme-1-foreground)',
        confirmButtonColor: 'var(--color-mariner-dark)',
        showClass: {
          popup: 'animate__animated animate__bounceIn',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });

      closeOrderModal(backdrop);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: err.message,
        background: 'var(--color-scheme-1-foreground)',
        confirmButtonColor: 'var(--color-mariner-dark)',
      });
    }
  });
}

function closeOrderModal(backdrop) {
  const form = backdrop.querySelector('[data-order-modal-form]');
  if (form) form.reset();
  backdrop.remove();
  document.body.classList.remove('body-lock');
}

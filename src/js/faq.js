import Accordion from 'accordion-js';

const openAccordion = element => {
  element.classList.add('open');
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 250,
    showMultiple: false,
    collapse: true,
    ariaEnabled: true,
  });
});

document.addEventListener('click', e => {
  const trigger = e.target.closest('.ac-trigger');
  if (trigger) {
    setTimeout(() => {
      if (window.innerWidth < 375) {
        trigger.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 450);
  }
});

const faqAnim = document.querySelector('.faq-ajax-loader');
const total = 30;

for (let i = 0; i < total; i++) {
  const paw = document.createElement('div');
  paw.classList.add('paw');

  paw.style.animationDelay = `${(total - i) * 0.25 + 5}s`;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('icon');

  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#paw');

  svg.appendChild(use);
  paw.appendChild(svg);
  faqAnim.appendChild(paw);
}

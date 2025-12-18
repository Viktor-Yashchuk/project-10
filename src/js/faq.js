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
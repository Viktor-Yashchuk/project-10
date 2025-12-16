const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileLinks = document.querySelectorAll(
  '.mobile-menu-nav-link, .mobile-menu-button'
);
const onEscPress = event => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

const openMobileMenu = () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscPress);
};

const onBackdropClick = event => {
  const isInteractive = event.target.closest(
    '.mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button'
  );

  if (isInteractive) return;

  closeMobileMenu();
};

burgerBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
mobileMenu.addEventListener('click', onBackdropClick);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

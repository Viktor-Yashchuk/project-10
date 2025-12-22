import { refs } from './refs';

const onEscPress = event => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

const burgerMenuAnim = () => {
  refs.headerBurgerTopLine.classList.toggle('top-line');
  refs.headerBurgerMidLine.classList.toggle('mid-line');
  refs.headerBurgerBotLine.classList.toggle('bot-line');
};

const closeBurgerMenuAnim = () => {
  refs.headerBurgerTopLine.classList.remove('top-line');
  refs.headerBurgerMidLine.classList.remove('mid-line');
  refs.headerBurgerBotLine.classList.remove('bot-line');
};

const openMobileMenu = () => {
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);

  refs.headerMobileMenu.classList.toggle('is-open');
  if (refs.headerMobileMenu.className !== 'mobile-menu is-open')
    document.body.style.overflow = '';

  burgerMenuAnim();
};

const closeMobileMenu = () => {
  document.body.style.overflow = '';
  refs.headerMobileMenu.classList.remove('is-open');
  document.removeEventListener('keydown', onEscPress);

  closeBurgerMenuAnim();
};

const onBackdropClick = event => {
  const isInteractive = event.target.closest(
    '.mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button'
  );

  if (isInteractive) return;

  closeMobileMenu();
};

const onHeaderClick = event => {
  const isInteractive = event.target.closest('.header-logo, .burger-btn');

  if (isInteractive) return;

  closeMobileMenu();
};

refs.headerBurgerBtn.addEventListener('click', openMobileMenu);
refs.header.addEventListener('click', onHeaderClick);
refs.headerMobileMenu.addEventListener('click', onBackdropClick);

refs.headerMobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('resize', () => {
  if (innerWidth >= 1440) {
    document.body.style.overflow = '';
    refs.headerMobileMenu.classList.remove('is-open');
    closeMobileMenu();
  }
});

const headerLinks = document.querySelectorAll('.header-nav-link');
const footerLinks = document.querySelectorAll('.footer-nav-list a');
const sections = document.querySelectorAll('section[id]');

let activeLink = null;
let isScrollingByClick = false;

const resetLinks = () => {
  headerLinks.forEach(link => {
    link.classList.remove('is-active', 'is-inactive');
  });
  activeLink = null;
};

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    resetLinks();
    isScrollingByClick = false;
  }
});

const activateLink = link => {
  resetLinks();
  activeLink = link;
  link.classList.add('is-active');
};

const handleClickLink = link => {
  isScrollingByClick = true;

  const targetId = link.getAttribute('href').slice(1);
  const headerLink = document.querySelector(`.header-nav-link[href="#${targetId}"]`);

  if (headerLink) {
    activateLink(headerLink);

    headerLinks.forEach(l => {
      if (l !== headerLink) l.classList.add('is-inactive');
    });
  }

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
};

headerLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    handleClickLink(link);
  });
});

footerLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    handleClickLink(link);
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      const link = document.querySelector(`.header-nav-link[href="#${id}"]`);

      
      if (!link) {
        resetLinks();
        isScrollingByClick = false;
        return;
      }

      if (!isScrollingByClick) {
        activateLink(link);
        return;
      }

      if (link === activeLink) {
        headerLinks.forEach(l => l.classList.remove('is-inactive'));
        isScrollingByClick = false;
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => observer.observe(section));
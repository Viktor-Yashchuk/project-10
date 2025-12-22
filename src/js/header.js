const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileLinks = document.querySelectorAll(
  '.mobile-menu-nav-link, .mobile-menu-button'
);
const burgerTopLine = document.querySelector('.mobile-burger-menu-top-line');
const burgerMidLine = document.querySelector('.mobile-burger-menu-mid-line');
const burgerBotLine = document.querySelector('.mobile-burger-menu-bot-line');
const header = document.querySelector('.header');

const onEscPress = event => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

const burgerMenuAnim = () => {
  burgerTopLine.classList.toggle('top-line');
  burgerMidLine.classList.toggle('mid-line');
  burgerBotLine.classList.toggle('bot-line');
};

const closeBurgerMenuAnim = () => {
  burgerTopLine.classList.remove('top-line');
  burgerMidLine.classList.remove('mid-line');
  burgerBotLine.classList.remove('bot-line');
};

const openBurgerMenuAnim = () => {
  burgerTopLine.classList.add('top-line');
  burgerMidLine.classList.add('mid-line');
  burgerBotLine.classList.add('bot-line');
};

const openMobileMenu = () => {
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);

  mobileMenu.classList.toggle('is-open');
  if (mobileMenu.className !== 'mobile-menu is-open')
    document.body.style.overflow = '';

  burgerMenuAnim();
};

const closeMobileMenu = () => {
  document.body.style.overflow = '';
  mobileMenu.classList.remove('is-open');
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

burgerBtn.addEventListener('click', openMobileMenu);
header.addEventListener('click', onHeaderClick);
mobileMenu.addEventListener('click', onBackdropClick);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('resize', () => {
  if (innerWidth >= 1440) {
    document.body.style.overflow = '';
    mobileMenu.classList.remove('is-open');
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
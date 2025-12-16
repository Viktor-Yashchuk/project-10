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
    document.addEventListener('keydown', onEscPress);

    mobileMenu.classList.toggle('is-open');
    burgerMenuAnim();
};

const closeMobileMenu = () => {
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
    closeBurgerMenuAnim();
};

const onHeaderClick = event => {
    const isInteractive = event.target.closest('.header-logo, .burger-btn');

    if (isInteractive) return;

    closeMobileMenu();
    closeBurgerMenuAnim();
};

burgerBtn.addEventListener('click', openMobileMenu);
header.addEventListener('click', onHeaderClick);
mobileMenu.addEventListener('click', onBackdropClick);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

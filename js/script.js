const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const theme = document.querySelector('.theme');
const themeSelector = document.querySelector('.theme-selector');
const mobileNav = document.querySelector('.mobile-nav');

openBtn.addEventListener('click', (event) => {
  openNav();
});

closeBtn.addEventListener('click', (event) => {
  closeNav();
});

function openNav() {
  mobileNav.style.display = 'flex';
}
function closeNav() {
  mobileNav.style.display = 'none';
}

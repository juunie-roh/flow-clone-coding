const sideMenu = document.getElementById('sideMenu');
const lnbMenu = document.getElementById('lnbMenu');
const header = document.querySelector('header');

sideMenu.addEventListener('click', function() {
  sideMenu.classList.toggle('active');
  lnbMenu.classList.toggle('on');
  header.classList.toggle('on');
});

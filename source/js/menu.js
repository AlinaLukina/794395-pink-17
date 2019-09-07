var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
navToggle.classList.remove('page-header__toggle--opened');
navToggle.classList.add('page-header__toggle--closed');
pageHeader.classList.remove('page-header--opened');
pageHeader.classList.add('page-header--closed');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__toggle--closed');
    pageHeader.classList.remove('page-header--opened');
    pageHeader.classList.add('page-header--closed');
  }
});

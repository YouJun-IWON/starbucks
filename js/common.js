const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// The code that is focused immediately when the 'search icon' is pressed
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// Declare a new class when focused
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

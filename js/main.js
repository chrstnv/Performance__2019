'use strict';

const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');

const arrowLeftDevs = document.querySelector('.devices__paginator .paginator__arrow_left');
const arrowRightDevs = document.querySelector('.devices__paginator .paginator__arrow_right');
const panelCountDevs = document.querySelectorAll('.devices__panel').length;
const devices = document.querySelector('.devices');
const pagiantorDevs = document.querySelector('.devices__paginator');
let currentPageDevs = 1;

var waterContainer = document.querySelector('.card.card_size_s:last-child');

waterContainer.innerHTML =
  '<div class="card-heading">' +
  '<div class="card-icon-wrap">' +
  '<img class="card-icon" src="img/kettle.svg">' +
  '</div>' +
  '<h3 class="card-title">Вода вскипела</h3>' +
  ' </div>' +
  '<div class="card-specs">' +
  '<p class="card-source">Чайник</p>' +
  '<p class="card-time card-time_block">16:20, Сегодня</p>' +
  '</div>';

const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const panelCountScens = document.querySelectorAll('.scenarios__panel').length;
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
const pagiantorScens = document.querySelector('.scenarios__paginator');
let currentPage = 1;

const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');

let widths = '';
window.addEventListener('scroll', function() {
  widths += document.querySelectorAll('body')[0].offsetWidth;
});

const buttonsContainer = document.querySelector('.buttons-wrap');

buttonsContainer.innerHTML =
  '<button class="button button_yellow" type="button">Да</button>' +
  '<button class="button">Нет</button>';

console.log('buttonsContainer doc', buttonsContainer);
const fridgeInfoContainer = document.querySelector('.card_size_m:nth-child(8) .card-description');
const confirmPurchaseButton = document.querySelector('.buttons-wrap .button_yellow');

console.log('confirmPurchaseButton doc', confirmPurchaseButton);

const purchaseListContainer = document.createElement('div');
const purchaseListTitle = document.createElement('p');
const purchaseList = document.createElement('ol');
const purchaseListItemOne = document.createElement('li');
const purchaseListItemTwo = document.createElement('li');

purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
purchaseListTitle.setAttribute(
  'class',
  'card-description card-description_big description_critical'
);
purchaseListTitle.textContent = 'Список покупок:';
purchaseList.setAttribute('class', 'purchase-list');
purchaseListItemOne.setAttribute('class', 'purchase-list__item');
purchaseListItemOne.textContent = 'Хлеб';
purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
purchaseListItemTwo.textContent = 'Молоко';

purchaseListContainer.appendChild(purchaseListTitle);
purchaseListContainer.appendChild(purchaseList);
purchaseList.appendChild(purchaseListItemOne);
purchaseList.appendChild(purchaseListItemTwo);

confirmPurchaseButton.onclick = () => {
  fridgeInfoContainer.replaceWith(purchaseListContainer);
  buttonsContainer.style.display = 'none';
};

document.getElementsByClassName('header-menu__switcher')[0].addEventListener('click', function() {
  document.getElementsByClassName('header-menu')[0].classList.toggle('header-menu_active');
});

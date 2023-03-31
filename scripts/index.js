import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, validateOptions } from './constans.js';
import { openPopup, closePopup } from './utils.js';

// ------------------------------ Переменные 

const aboutButton = document.querySelector('.profile__button-edit');
const profilePopup = document.querySelector('#popup__profile_add');
const formElementProfile = document.querySelector('#form-popup_profile');
const nameInput = document.querySelector('.form-popup__form-field_type_name');
const jobInput = document.querySelector('.form-popup__form-field_type_about');
const nameSend = document.querySelector('.profile__name');
const jobSend = document.querySelector('.profile__about');
const addButton = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('#popup__card_add');
const formElementCard = document.querySelector('#form-popup_card');
const card = document.querySelector('.form-popup__form-field_card');
const url = document.querySelector('.form-popup__form-field_url');
const popups = document.querySelectorAll('.popup');
const cardContainer = document.querySelector('.elements__grid');

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.renderCard();
  cardContainer.append(cardElement);
});

function createCard() {        //функция создания карточки
  const cardData = {
    name: card.value,
    link: url.value
  }
  const cardNew = new Card(cardData, '.card-template');
  return cardNew.renderCard();
};

const handleFormCardSubmit = (evt) => {
  evt.preventDefault();

  cardContainer.prepend(createCard());

  evt.target.reset();
  closePopup(popupCard);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  nameSend.textContent = `${nameInput.value}`;
  jobSend.textContent = `${jobInput.value}`;

  closePopup(profilePopup);
};

const addCardValidate = new FormValidator(validateOptions, popupCard);
addCardValidate.enableValidation();
const editProfileValidate = new FormValidator(validateOptions, profilePopup);
editProfileValidate.enableValidation();

popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(item)
    }
  })
});

aboutButton.addEventListener('click', () => {
  nameInput.value = `${nameSend.textContent}`;
  jobInput.value = `${jobSend.textContent}`;
  openPopup(profilePopup)
});

addButton.addEventListener('click', () => {
  card.value = '';
  url.value = '';
  openPopup(popupCard)
});

formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formElementCard.addEventListener('submit', handleFormCardSubmit);
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'

  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validateOptions = {
  formSelector: '.form-popup',
  inputSelector: '.form-popup__form-field',
  submitButtonSelector: '.form-popup__button-submit',
  inputSectionSelector: '.form-popup__section',
  inputErrorClass: 'form-popup__form-field-error',
  inactiveButtonClass: 'form-popup__button-submit_inactive',
  errorClass: 'form-popup__form-field-error_active',
  formErrorClass: 'form-popup__form-field_error',
  submitButtonSelector: '.form-popup__button-submit',
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose)
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose)
}

const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.renderCard();
  document.querySelector('.elements__grid').append(cardElement);
});

const handleFormCardSubmit = (evt) => {
  evt.preventDefault();

  const obj = {
    name: card.value,
    link: url.value
  }
  const cardNew = new Card(obj, '.card-template');
  const cardElement = cardNew.renderCard();
  document.querySelector('.elements__grid').prepend(cardElement);

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
addButton.addEventListener('click', () => openPopup(popupCard));

formElementProfile.addEventListener('submit', handleProfileFormSubmit);
formElementCard.addEventListener('submit', handleFormCardSubmit);

export { openPopup };
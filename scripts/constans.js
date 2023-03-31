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

export { initialCards, validateOptions }
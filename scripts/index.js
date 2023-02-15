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

// ------------------------------ Переменные

const aboutButton = document.querySelector('.profile__button-edit');
const profilePopup = document.querySelector('#popup__profile_add');
const closeButtonProfile = document.querySelector('#popup__close_button-profile');
const formElementProfile = document.querySelector('#form-popup_profile');
const nameInput = document.querySelector('.form-popup__form-field_type_name');
const jobInput = document.querySelector('.form-popup__form-field_type_about');
const nameSend = document.querySelector('.profile__name');
const jobSend = document.querySelector('.profile__about');
const addButton = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('#popup__card_add');
const closeButtonCard = document.querySelector('#popup__close_button-card');
const formElementCard = document.querySelector('#form-popup_card');
const cardList = document.querySelector('.elements__grid');
const imagePopup = document.querySelector('#popup__card_image');
const closeButtonImage = document.querySelector('#popup__close_button-image');
const card = document.querySelector('.form-popup__form-field_card');
const url = document.querySelector('.form-popup__form-field_url');
const cardTemplate = document.querySelector('.card-template').content;

// ------------------------------ Ф-ции попапа профиля 

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

// ------------------------------ Создание карточки

const createCard = (nameValue, urlValue) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card-item__title').textContent = nameValue;
  cardElement.querySelector('.card-item__photo').src = urlValue;
  cardElement.querySelector('.card-item__photo').alt = nameValue;

  // ------------------------------ Лайк, удаление, открытия карточки

  cardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  cardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });

  const openImages = () => {
    const popupOpenImage = document.querySelector('#popup__card_image');
    popupOpenImage.querySelector('.popup__name').textContent = nameValue;
    popupOpenImage.querySelector('.popup__image').src = urlValue;
    popupOpenImage.querySelector('.popup__image').alt = nameValue;
    openPopup(imagePopup);
  }
  cardElement.querySelector('.card-item__photo').addEventListener('click', openImages);

  return cardElement
}

// ------------------------------ Наполнение карточек

initialCards.forEach((element) => {
  cardList.append(createCard(element.name, element.link))
})

// ----------------------------- Ф-ции форм

const handleFormCardSubmit = (evt) => {
  evt.preventDefault();

  cardList.prepend(createCard(card.value, url.value))

  evt.target.reset()
  closePopup(popupCard)
};


const handleFormSubmit = (evt) => {
  evt.preventDefault();

  if (nameInput.value != "") {
    nameSend.textContent = `${nameInput.value}`;
  } else {
    nameSend.textContent = `${nameInput.placeholder}`;
  };

  if (jobInput.value != "") {
    jobSend.textContent = `${jobInput.value}`;
  } else {
    jobSend.textContent = `${jobInput.placeholder}`;
  };

  closePopup(profilePopup);
}

// ------------------------------ Слушатели

aboutButton.addEventListener('click', function () {
  nameInput.value = `${nameSend.textContent}`;
  jobInput.value = `${jobSend.textContent}`;
  openPopup(profilePopup)
});
addButton.addEventListener('click', () => openPopup(popupCard));

closeButtonProfile.addEventListener('click', () => closePopup(profilePopup));
closeButtonCard.addEventListener('click', () => closePopup(popupCard));
closeButtonImage.addEventListener('click', () => closePopup(imagePopup));

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handleFormCardSubmit);

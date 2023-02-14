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
const CardContainer = document.querySelector('.elements');
const formElementCard = document.querySelector('#form-popup_card');
const cardList = document.querySelector('.elements__grid');
const imagePopup = document.querySelector('#popup__card_image');
const closeButtonImage = document.querySelector('#popup__close_button-image');
const card = document.querySelector('.form-popup__form-field_card');
const URL = document.querySelector('.form-popup__form-field_url');


// ------------------------------ Ф-ции попапа профиля 

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

// ------------------------------ Ф-ция открытия попапа рассмотра карточек

const toggleOpenPopupImage = () => {
  imagePopup.classList.toggle('popup_opened')
}

// ------------------------------ Наполнение карточек

initialCards.forEach((element) => {
  const CardTemplate = document.querySelector('.card-template').content;
  const cardElement = CardTemplate.cloneNode(true);

  cardElement.querySelector('.card-item__title').textContent = element.name;
  cardElement.querySelector('.card-item__photo').src = element.link;
  cardElement.querySelector('.card-item__photo').alt = element.name;

  // ------------------------------ Лайк, удаление, открытия карточки

  cardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  cardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });

  const OpenImages = () => {
    const popupOpenImage = document.querySelector('#popup__card_image');
    popupOpenImage.querySelector('.popup__name').textContent = element.name;
    popupOpenImage.querySelector('.popup__image').src = element.link;
    popupOpenImage.querySelector('.popup__image').alt = element.name;
    toggleOpenPopupImage();
  }

  cardElement.querySelector('.card-item__photo').addEventListener('click', OpenImages);

  cardList.append(cardElement)
})

// ------------------------------ Ф-ция добавления карточек

function addCard(NameValue, URLValue) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.card-item').cloneNode(true);

  cardElement.querySelector('.card-item__title').textContent = NameValue;
  cardElement.querySelector('.card-item__photo').src = URLValue;
  cardElement.querySelector('.card-item__photo').alt = NameValue;

  cardList.prepend(cardElement)

  // ------------------------------ Лайк, удаление, открытия карточки

  cardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  cardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });

  const OpenImages = () => {
    const popupOpenImage = document.querySelector('#popup__card_image');

    popupOpenImage.querySelector('.popup__name').textContent = NameValue;
    popupOpenImage.querySelector('.popup__image').src = URLValue;
    popupOpenImage.querySelector('.popup__image').alt = NameValue;
    toggleOpenPopupImage();
  }

  cardElement.querySelector('.card-item__photo').addEventListener('click', OpenImages);
}
// ----------------------------- Ф-ции форм

function handleFormCardSubmit(evt) {
  evt.preventDefault();



  addCard(card.value, URL.value);

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
closeButtonImage.addEventListener('click', toggleOpenPopupImage);

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handleFormCardSubmit);

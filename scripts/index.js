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
const popup = document.querySelector('#popup__profile_add');
const closeButtonProfile = document.querySelector('#popup__close_button-profile');
const formElement = document.querySelector('.form-popup');
const nameInput = document.querySelector('.form-popup__form-field_type_name');
const jobInput = document.querySelector('.form-popup__form-field_type_about');
const nameSend = document.querySelector('.profile__name');
const jobSend = document.querySelector('.profile__about');
const addButton = document.querySelector('.profile__button-add')
const popupCard = document.querySelector('#popup__card_add')
const closeButtonCard = document.querySelector('#popup__close_button-card')
const CardContainer = document.querySelector('.elements')
const formElementCard = document.querySelector('#form-popup_card')
const imagePopup = document.querySelector('#popup__card_image')
const imagePopupClose = document.querySelector('#popup__close_button-image')

// ------------------------------ Ф-ции попапа профиля 

const toggleOpenPopup = () => {
  if (popup.classList.contains('popup_opened')) {
    nameInput.value = `${nameSend.textContent}`;
    jobInput.value = `${jobSend.textContent}`;
  }
  popup.classList.toggle('popup_opened')
};

const handleAboutButtonClick = () => {
  toggleOpenPopup();
};

const handleCloseButtonClick = () => {
  toggleOpenPopup();
};

// ------------------------------ Ф-ции попапа добавления карточек

const toggleOpenPopupCard = () => {
  popupCard.classList.toggle('popup_opened')
}

const handleAboutButtonAddClick = () => {
  toggleOpenPopupCard();
};

const handleCloseButtonAddClick = () => {
  toggleOpenPopupCard()
};

// ------------------------------ Ф-ция открытия попапа рассмотра карточек

const toggleOpenPopupImage = () => {
  imagePopup.classList.toggle('popup_opened')
}

// ------------------------------ Наполнение карточек

initialCards.forEach((element) => {
  const CardList = document.querySelector('.elements__grid');
  const CardTemplate = document.querySelector('.card-template').content;
  const CardElement = CardTemplate.cloneNode(true);

  CardElement.querySelector('.card-item__title').textContent = element.name;
  CardElement.querySelector('.card-item__photo').src = element.link;
  CardElement.querySelector('.card-item__photo').alt = element.name;

  // ------------------------------ Лайк, удаление, открытия карточки

  CardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  CardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });

  const OpenImages = () => {
    const popupOpenImage = document.querySelector('#popup__card_image');
    popupOpenImage.querySelector('.popup__name').textContent = element.name;
    popupOpenImage.querySelector('.popup__image').src = element.link;
    popupOpenImage.querySelector('.popup__image').alt = element.name;
    toggleOpenPopupImage();
  }

  CardElement.querySelector('.card-item__photo').addEventListener('click', OpenImages);
  document.querySelector('#popup__close_button-image').addEventListener('click', toggleOpenPopupImage);

  CardList.append(CardElement)
})

// ------------------------------ Ф-ция добавления карточек

function addCard(NameValue, URLValue) {
  const CardContainer = document.querySelector('.elements__grid')
  const CardTemplate = document.querySelector('.card-template').content;
  const CardElement = CardTemplate.querySelector('.card-item').cloneNode(true);

  CardElement.querySelector('.card-item__title').textContent = NameValue;
  CardElement.querySelector('.card-item__photo').src = URLValue;
  CardElement.querySelector('.card-item__photo').alt = NameValue;

  CardContainer.prepend(CardElement)

  // ------------------------------ Лайк, удаление, открытия карточки

  CardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  CardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });

  const OpenImages = () => {
    const popupOpenImage = document.querySelector('#popup__card_image');

    popupOpenImage.querySelector('.popup__name').textContent = NameValue;
    popupOpenImage.querySelector('.popup__image').src = URLValue;
    popupOpenImage.querySelector('.popup__image').alt = NameValue;
    toggleOpenPopupImage();
  }

  CardElement.querySelector('.card-item__photo').addEventListener('click', OpenImages);
  document.querySelector('#popup__close_button-image').addEventListener('click', toggleOpenPopupImage);
}

// ------------------------------ Ф-ции форм

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const card = document.querySelector('.form-popup__form-field_card');
  const URL = document.querySelector('.form-popup__form-field_url');


  addCard(card.value, URL.value);

  card.value = '';
  URL.value = '';
  toggleOpenPopupCard()
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

  toggleOpenPopup();
}

// ------------------------------ Слушатели

aboutButton.addEventListener('click', handleAboutButtonClick);
closeButtonProfile.addEventListener('click', handleCloseButtonClick);
addButton.addEventListener('click', handleAboutButtonAddClick);
closeButtonCard.addEventListener('click', handleCloseButtonAddClick);
formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit', handleFormCardSubmit);
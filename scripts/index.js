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
const formElementCard = document.querySelector('#formPopupCard')

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

const toggleOpenPopupCard = () => {
  popupCard.classList.toggle('popup_opened')
}

const handleAboutButtonAddClick = () => {
  toggleOpenPopupCard();
};

const handleCloseButtonAddClick = () => {
  toggleOpenPopupCard()
};

// ----------------------------------------------------------------------- Массив карточек-------------------------------------------------------------------------------------\\

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

initialCards.forEach((element) => {
  const CardList = document.querySelector('.elements__grid');
  const CardTemplate = document.querySelector('.card-template').content;
  const CardElement = CardTemplate.cloneNode(true);

  CardElement.querySelector('.card-item__title').textContent = element.name;
  CardElement.querySelector('.card-item__photo').src = element.link;
  CardElement.querySelector('.card-item__photo').alt = element.name;

  CardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  CardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });

  CardList.append(CardElement)
})

function addCard(NameValue, URLValue) {
  const CardContainer = document.querySelector('.elements__grid')
  const CardTemplate = document.querySelector('.card-template').content;
  const CardElement = CardTemplate.querySelector('.card-item').cloneNode(true);

  CardElement.querySelector('.card-item__title').textContent = NameValue;
  CardElement.querySelector('.card-item__photo').src = URLValue;
  CardElement.querySelector('.card-item__photo').alt = NameValue;

  CardElement.querySelector('.card-item__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card-item__button-like_active');
  });

  CardContainer.prepend(CardElement)

  CardElement.querySelector('.card-item__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card-item').remove();
  });
}


function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const card = document.querySelector('.form-popup__form-field_card');
  const URL = document.querySelector('.form-popup__form-field_url');


  addCard(card.value, URL.value);

  card.value = '';
  URL.value = '';
  toggleOpenPopupCard()
};


formElement.addEventListener('submit', handleFormSubmit);
aboutButton.addEventListener('click', handleAboutButtonClick);
closeButtonProfile.addEventListener('click', handleCloseButtonClick);
addButton.addEventListener('click', handleAboutButtonAddClick);
closeButtonCard.addEventListener('click', handleCloseButtonAddClick);
formElementCard.addEventListener('submit', handleFormCardSubmit);
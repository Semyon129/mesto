let aboutButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.form-popup');
let nameInput = document.querySelector('.form-popup__form-field_type_name');
let jobInput = document.querySelector('.form-popup__form-field_type_about');
let nameSend = document.querySelector('.profile__name');
let jobSend = document.querySelector('.profile__about');

function toggleOpenPopup() {
  if (popup.classList.contains('popup_opened')) {
    nameInput.value = `${nameSend.textContent}`;
    jobInput.value = `${jobSend.textContent}`;
  }
  popup.classList.toggle('popup_opened')
};

function handleAboutButtonClick() {
  toggleOpenPopup();
};

function handleCloseButtonClick() {
  toggleOpenPopup();
};


function handleFormSubmit(evt) {
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

formElement.addEventListener('submit', handleFormSubmit);
aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);

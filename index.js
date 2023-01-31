let aboutButton = document.querySelector('.profile__button_type_about');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-field_type_name');
let jobInput = document.querySelector('.popup__form-field_type_about');
let nameSend = document.querySelector('.profile__name');
let jobSend = document.querySelector('.profile__about');
let saveButton = document.querySelector('.popup__button-submit_save_about');

nameInput.value = `${nameSend.textContent}`;
jobInput.value = `${jobSend.textContent}`;

function toggleOpenPopup() {
  popup.classList.toggle('popup_opened')
};

function handleAboutButtonClick() {
  toggleOpenPopup();
};

function handleCloseButtonClick() {
  toggleOpenPopup();
};

function handleSaveButtonClick() {
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
}

formElement.addEventListener('submit', handleFormSubmit);
aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
saveButton.addEventListener('click', handleSaveButtonClick);
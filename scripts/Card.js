import { openPopup } from './index.js';

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card-item')
      .cloneNode(true);
    return cardElement;
  };

  renderCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector('.card-item__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.card-item__photo')

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }

  _setEventListener() {
    this._buttonLike = this._element.querySelector('.card-item__button-like');
    this._buttonDelete = this._element.querySelector('.card-item__button-delete');

    this._popupCardImage = document.querySelector('#popup__card_image');
    this._popupImageUrl = this._popupCardImage.querySelector('.popup__image');
    this._popupImgeName = this._popupCardImage.querySelector('.popup__name');

    this._buttonLikeListener();
    this._buttonDeleteListener();
    this._openImageListener();
  }

  _handleDeleteCard() {
    this._buttonDelete.closest('.card-item').remove();
  }

  _buttonDeleteListener() {
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteCard();
    });
  }

  _handleLikeCard() {
    this._buttonLike.classList.toggle('card-item__button-like_active');
  };

  _buttonLikeListener() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeCard();
    });
  }

  _openImageListener() {
    this._element.querySelector('.card-item__photo').addEventListener('click', () => {
      this._openImage();
    });
  }

  _openImage() {
    openPopup(this._popupCardImage);
    this._popupImageUrl.src = this._link;
    this._popupImgeName.textContent = this._name;
    this._popupImageUrl.alt = this._name;
  }
}

export { Card };
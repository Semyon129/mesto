class FormValidator {
  constructor(validateOptions, formElement) {
    this._validateOptions = validateOptions;
    this._formElement = formElement;

    this._submitButton = this._formElement.querySelector(this._validateOptions.submitButtonSelector);
    this._inputs = Array.from(this._formElement.querySelectorAll(this._validateOptions.inputSelector));
    this._formElementCard = document.querySelector('#form-popup_card');
  }

  _hiddenError = (inputItem) => {
    const errorItem = this._formElement.querySelector(`.${inputItem.id}-error`)
    errorItem.classList.remove(this._validateOptions.errorClass);
    inputItem.classList.remove(this._validateOptions.formErrorClass);
    errorItem.textContent = '';
  };

  _showError = (inputItem) => {
    const errorItem = this._formElement.querySelector(`.${inputItem.id}-error`)
    errorItem.classList.add(this._validateOptions.errorClass);
    inputItem.classList.add(this._validateOptions.formErrorClass);
    errorItem.textContent = inputItem.validationMessage;
  };

  _enableButton = () => {
    this._submitButton.classList.remove(this._validateOptions.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  };

  _disableButton = () => {
    this._submitButton.setAttribute('disabled', 'true');
    this._submitButton.classList.add(this._validateOptions.inactiveButtonClass);
  };

  _toggleInputState = (inputItem) => {
    if (inputItem.validity.valid === false) {
      this._showError(inputItem);
    } else {
      this._hiddenError(inputItem);
    };
  };

  _hasInvalidInput() {
    return this._inputs.some((inputItem) => {
      return !inputItem.validity.valid;
    });
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputs.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        this._toggleInputState(inputItem);
        this._toggleButtonState();
      });
    });

    this._formElementCard.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });
  };

  removeValidationErrors = (form, options) => {
    _inputs = Array.from(form.queryselectorAll(" form text"));
    inputs.forEach((input) => {
      this._errorText = form.querySelector(`.${inputItem.id}-error`);

      if (form
        .querySelector(' .${input. idf-error')
        .classList.contains(options.inputErrorClass)
      ) {
        hideError(errorText, input, options);
      }

    })
  }



  enableValidation = () => {
    this._setEventListeners();
  };
}

export { FormValidator };

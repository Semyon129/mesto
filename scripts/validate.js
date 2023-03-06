const hiddenError = (errorElement, errorClass, inputElement, formErrorClass) => {
  errorElement.innerText = '';
  errorElement.classList.remove(errorClass)
  inputElement.classList.remove(formErrorClass)
};

const showError = (errorElement, message, errorClass, inputElement, formErrorClass) => {
  errorElement.innerText = message;
  errorElement.classList.add(errorClass)
  inputElement.classList.add(formErrorClass)
};

const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(inactiveButtonClass);
};

const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute('disabled', 'true');
  buttonElement.classList.add(inactiveButtonClass);
};

const findInputErrorElement = (inputElement, validateOptions) => {
  const { inputSectionSelector, inputErrorClass } = validateOptions;
  const inputSectionElement = inputElement.closest(inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(inputErrorClass);
  return errorElement
};

const toggleInputState = (inputElement, validateOptions) => {
  const isValid = inputElement.validity.valid;
  const errorElement = findInputErrorElement(inputElement, validateOptions)

  if (isValid) {
    hiddenError(errorElement, validateOptions.errorClass, inputElement, validateOptions.formErrorClass);
  } else {
    showError(errorElement, inputElement.validationMessage, validateOptions.errorClass, inputElement, validateOptions.formErrorClass);
  };
};

const hiddenErrorForInput = (inputElement, validateOptions) => {
  const errorElement = findInputErrorElement(inputElement, validateOptions)
  hiddenError(errorElement, validateOptions.errorClass, inputElement, validateOptions.formErrorClass);
};

const toggleButtonState = (inputs, buttonElement, inactiveButtonClass) => {
  const formIsValid = inputs.every((inputElement) => {
    return inputElement.validity.valid;
  });

  if (formIsValid) {
    enableButton(buttonElement, inactiveButtonClass)
  } else {
    disableButton(buttonElement, inactiveButtonClass)
  }
};

const setEventListener = (form, validateOptions) => {
  const buttonElement = form.querySelector(validateOptions.submitButtonSelector);
  const inputs = Array.from(form.querySelectorAll(validateOptions.inputSelector));

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, validateOptions)
      toggleButtonState(inputs, buttonElement, validateOptions.inactiveButtonClass)
    });
  });

  toggleButtonState(inputs, buttonElement, validateOptions.inactiveButtonClass);
};

const enableValidation = (validateOptions) => {
  const forms = Array.from(document.querySelectorAll(validateOptions.formSelector));
  forms.forEach(form => {
    setEventListener(form, validateOptions)
  });
};

const validateOptions = {
  formSelector: '.form-popup',
  inputSelector: '.form-popup__form-field',
  submitButtonSelector: '.form-popup__button-submit',
  inputSectionSelector: '.form-popup__section',
  inputErrorClass: '.form-popup__form-field-error',
  inactiveButtonClass: 'form-popup__button-submit_inactive',
  errorClass: 'form-popup__form-field-error_active',
  formErrorClass: 'form-popup__form-field_error',
}

enableValidation(validateOptions);
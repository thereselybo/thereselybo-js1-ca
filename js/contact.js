const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameValue = firstName.value;
  const firstNameError = document.querySelectorAll(".form-error")[0];

  if (checkLength(firstNameValue)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  const lastName = document.querySelector("#lastName");
  const lastNameValue = lastName.value;
  const lastNameError = document.querySelectorAll(".form-error")[1];

  if (checkLength(lastNameValue)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailValue = email.value;
  const emailError = document.querySelectorAll(".form-error")[2];
  const invalidEmail = document.querySelectorAll(".form-error")[3];

  if (checkLength(emailValue)) {
    emailError.style.display = "none";
    if (validateEmail(emailValue)) {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "block";
    }
  } else {
    emailError.style.display = "block";
  }

  const message = document.querySelector("#message");
  const messageValue = message.value;
  const messageError = document.querySelectorAll(".form-error")[4];

  if (messageValue.length > 10) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  const formValidated = document.querySelector(".form-validated");

  if (
    firstNameError.style.display === "none" &&
    lastNameError.style.display === "none" &&
    emailError.style.display === "none" &&
    messageError.style.display === "none"
  ) {
    formValidated.style.display = "block";
  } else {
    formValidated.style.display = "none";
  }
}

function checkLength(value) {
  const trimmed = value.trim();
  if (trimmed.length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

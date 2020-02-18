const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameValue = firstName.value;
  const firstNameError = document.querySelector("#firstNameError");

  function firstNameValidation() {
    if (checkLength(firstNameValue)) {
      firstNameError.style.display = "none";
      return true;
    } else {
      firstNameError.style.display = "block";
    }
  }

  const lastName = document.querySelector("#lastName");
  const lastNameValue = lastName.value;
  const lastNameError = document.querySelector("#lastNameError");
  
  function lastNameValidation() {
    if (checkLength(lastNameValue)) {
      lastNameError.style.display = "none";
      return true;
    } else {
      lastNameError.style.display = "block";
    }
  }

  const email = document.querySelector("#email");
  const emailValue = email.value;
  const emailError = document.querySelector("#emailError");
  const invalidEmail = document.querySelector("#invalidEmailError");

  function emailValidation() {
    if (checkLength(emailValue)) {
      emailError.style.display = "none";
      if (validateEmail(emailValue)) {
        invalidEmail.style.display = "none";
        return true;
      } else {
        invalidEmail.style.display = "block";
      }
      return true;
    } else {
      emailError.style.display = "block";
    }
  }

  const message = document.querySelector("#message");
  const messageValue = message.value;
  const messageError = document.querySelector("#messageError");

  function messageValidation() {  
    if (messageValue.length > 10) {
      messageError.style.display = "none";
      return true;
    } else {
      messageError.style.display = "block";
    }

  }

  const formValidated = document.querySelector(".form-validated");

  if(firstNameValidation && lastNameValidation && emailValidation && messageValidation) {
    formValidated.style.display = "block";
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



// const form = document.querySelector("#contactForm");

// form.addEventListener("submit", validateForm);

// function validateForm(event) {
//   event.preventDefault();

//   const firstName = document.querySelector("#firstName");
//   const firstNameValue = firstName.value;
//   const firstNameError = document.querySelector("#firstNameError");

//   if (checkLength(firstNameValue)) {
//     firstNameError.style.display = "none";
//   } else {
//     firstNameError.style.display = "block";
//   }

//   const lastName = document.querySelector("#lastName");
//   const lastNameValue = lastName.value;
//   const lastNameError = document.querySelector("#lastNameError");

//   if (checkLength(lastNameValue)) {
//     lastNameError.style.display = "none";
//   } else {
//     lastNameError.style.display = "block";
//   }

//   const email = document.querySelector("#email");
//   const emailValue = email.value;
//   const emailError = document.querySelector("#emailError");
//   const invalidEmail = document.querySelector("#invalidEmailError");

//   if (checkLength(emailValue)) {
//     emailError.style.display = "none";
//     if (validateEmail(emailValue)) {
//       invalidEmail.style.display = "none";
//     } else {
//       invalidEmail.style.display = "block";
//     }
//   } else {
//     emailError.style.display = "block";
//   }

//   const message = document.querySelector("#message");
//   const messageValue = message.value;
//   const messageError = document.querySelector("#messageError");

//   if (messageValue.length > 10) {
//     messageError.style.display = "none";
//   } else {
//     messageError.style.display = "block";
//   }
// }

// function checkLength(value) {
//   const trimmed = value.trim();
//   if (trimmed.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   return regEx.test(email);
// }

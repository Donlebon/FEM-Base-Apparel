// Button

let form = document.querySelector(".emailForm")

let submit = window.getComputedStyle(form, "::after")

let submitButton = document.querySelector(".arrowSubmit")

// Error Message

let errorMessage = document.querySelector(".emailError")


// Warning Exclamation Error

let emailError = document.querySelector(".error")

// User Input


let testing = function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

var testEmail = document.getElementById("text");

submitButton.addEventListener("click", validEmail)

let online = 0;
function validEmail(){
  if(!testing(testEmail.value) && (online === 0)){
    emailError.classList.add("reveal")
    errorMessage.classList.add("reveal")
    testEmail.classList.add("red")
    online = 1
  } else if (!testing(testEmail.value) && (online === 1)){
    emailError.classList.remove("reveal")
    errorMessage.classList.remove("reveal")
    setTimeout(() => {
      emailError.classList.add("reveal")
      errorMessage.classList.add("reveal")
    }, 0.1)
    online = 0;
  } else{
    alert("Thank you for subscribing!!!")
  }
}




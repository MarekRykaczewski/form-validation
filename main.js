const form = document.querySelector("form")
const email = document.getElementById("email")
const emailError = document.querySelector("#email + span.error")
const zipcode = document.getElementById("zipcode")
const zipcodeError = document.querySelector("#zipcode + span.error")

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address"
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`
    }

    emailError.className = "error active"
}

function showZipcodeError() {
    if (zipcode.validity.valueMissing) {
        zipcodeError.textContent = "You need to enter a zipcode"
    } else if (zipcode.validity.patternMismatch) {
        zipcodeError.textContent = "Code must confirm to US pattern e.g. 12345 or 12345-1234"
    }

    zipcodeError.className = "error active"
}

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error"
    } else {
        showEmailError()
    }
})

zipcode.addEventListener("input", (event) => {
    if (zipcode.validity.valid) {
        zipcodeError.textContent = ""
        zipcodeError.className = "error"
    } else {
        showZipcodeError()
    }
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault(); // Prevents form from being sent
    }
    if (!zipcode.validity.valid) {
        showZipcodeError();
        event.preventDefault();
    }
})
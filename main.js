const form = document.querySelector("form")
const email = document.getElementById("email")
const emailError = document.querySelector("#email + span.error")

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address"
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`
    }

    emailError.className = "error active"
}

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault(); // Prevents form from being sent
    }
})

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error"
    } else {
        showError()
    }
})


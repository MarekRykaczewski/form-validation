const form = document.querySelector("form")
const email = document.getElementById("email")
const emailError = document.querySelector("#email + span.error")

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email adress!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
})
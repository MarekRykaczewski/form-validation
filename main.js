const email = document.getElementById("email")

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email adress!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
})
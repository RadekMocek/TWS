// Elementy
const emailValidationText = document.getElementById("email-valid");
const submitButton = document.getElementById("submit-button");
const formImage = document.getElementById("form-image");

// Validace e-mailové adresy
const validateEmail = (inputText) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        emailValidationText.textContent = "\u00A0\u2714";
        submitButton.disabled = false;
    }
    else {
        emailValidationText.textContent = "\u00A0\u2716";
        submitButton.disabled = true;
    }
}

// Změna obrázku ve formuláři podle slideru
const outputReaction = (sliderValue) => {
    formImage.setAttribute("src", "./img/form/" + sliderValue + ".png");
}

// Zavolat funkce po načtení stránky (inicializace)
validateEmail(document.form.email);
outputReaction(document.form.happiness.value);

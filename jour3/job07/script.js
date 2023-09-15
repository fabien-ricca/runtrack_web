
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('simpleForm');
    const textField = document.getElementById('textField');
    const savedValueDiv = document.getElementById('savedValue');

    const savedValue = localStorage.getItem('savedText');
    if (savedValue) {
        savedValueDiv.textContent = "Valeur sauvegardée : " + savedValue;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputValue = textField.value;
        if (inputValue === '') {
            alert('Veuillez entrer une valeur.');
            return;
        }

        localStorage.setItem('savedText', inputValue);

        savedValueDiv.textContent = "Valeur sauvegardée : " + inputValue;
    });

    console.log(localStorage)
});

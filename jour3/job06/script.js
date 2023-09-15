document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById('changeColorButton');

    button.addEventListener('click', function() {

        document.body.style.backgroundColor = 'blue';
    });
});
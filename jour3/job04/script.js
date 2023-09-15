
function somme(a, b){
    return ((Number.isInteger(a) && Number.isInteger(b))) ? a + b : "Merci de ne saisir que des nombres.";
}

function strLen(str){
    return (typeof str === "string") ? str.length : "Merci de ne saisir qu'une phrase.";
}

console.log(somme(3, 5));

console.log(strLen("Bonjour"));

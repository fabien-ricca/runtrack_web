
function somme(a, b){
    return ((Number.isInteger(a) && Number.isInteger(b))) ? a + b : "Merci de ne saisir que des nombres.";
}

func3 = (str) => {
    if(typeof str === "string"){
        return str.length;
    }
    else{
        return "Merci de ne saisir qu'une phrase.";
    }
};

console.log(somme(3, 5));

console.log(func3("toto"));


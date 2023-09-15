
function inputNumber(){
    const nb1 = Number(prompt("Saisissez un premier nombre : "));
    const nb2 = Number(prompt("Saisissez un second nombre : "));

    if(Number.isInteger(nb1) && Number.isInteger(nb2)){
        console.log(`${nb1} + ${nb2} = ${nb1 + nb2}`);
        console.log(`${nb1} - ${nb2} = ${nb1 - nb2}`);
        console.log(`${nb1} * ${nb2} = ${nb1 * nb2}`);
        console.log(`${nb1} / ${nb2} = ${nb1 / nb2}`);
    }
    else{
        console.log("Vous n'avez pas saisi de nombre.");
    }
}

function inputString(){
    const str1 = prompt("Saisissez une première chaine : ");
    const str2 = prompt("Saisissez une seconde chaine : ");

    if((str1 != null) && (str2 != null)){
        console.log(str1+str2);
    }
}

inputNumber();

setTimeout(() => {
    inputString();
}, 3000);



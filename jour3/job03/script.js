
const array = Array.of(1, 2, 3, 4, 5, 6, 7, 122, 851, 314);

for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

console.log();

array.forEach((elem, index) => console.log(elem));
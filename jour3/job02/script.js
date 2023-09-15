// Tableau original
const array = Array.of(1, 2, 3, 4, 5);

// Nouveau tableau avec ajout au debut et à la fin
const arr1 = [0, ...array, 6];

// Nouveau tableau en supprimant le premier element
const arr2 = arr1.slice(1);

// On affiche le dernier élément
const index = arr2.length-1;
console.log(arr2[index]);
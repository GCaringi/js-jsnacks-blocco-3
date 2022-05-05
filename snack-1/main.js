// let newArray = [];
// let sum = 0;
// let num;

// do{
//     do{
//         num = Number(prompt("Inserisci un numero"));
//     }while (isNaN(num));
//     sum += num;
//     newArray.push(num);
// }while (sum < 50);

// console.log(sum);
// console.log(newArray);


// Soluzione dove non eccede la somma di 50;

let newArray = [];
let sum = 0;
let num;


do{
    num = Number(prompt("Inserisci un numero"));
}while (isNaN(num));
sum += num;

while(sum < 50){
    newArray.push(num);
    do{
        num = Number(prompt("Inserisci un numero"));
    }while (isNaN(num));
    sum += num;
}

console.log(sum);
console.log(newArray);
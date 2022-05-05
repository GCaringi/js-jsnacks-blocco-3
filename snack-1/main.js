let newArray = [];
let sum = 0;
let num;

do{
    do{
        num = Number(prompt("Inserisci un numero"));
    }while (isNaN(num));
    sum += num;
    newArray.push(num);
}while (sum < 50);

console.log(sum);
console.log(newArray);
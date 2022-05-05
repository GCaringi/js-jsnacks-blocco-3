let numOfArray;

do{
    numOfArray = Number(prompt("Inserisci un numero"));
}while (isNaN(numOfArray));

for (let i = 0; i < numOfArray; i++){
    let newArray = [];
    for (let y = 0; y < 10; y++){
        newArray.push(Math.floor((Math.random()*100)+1));
    }
    console.log(newArray);
}
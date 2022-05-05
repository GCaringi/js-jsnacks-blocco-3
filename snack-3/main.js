const numArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const divRed = document.getElementById("red");
divRed.style.color = "red";
divRed.style.fontSize = "36px";
const divGreen = document.getElementById("green");
divGreen.style.color = "green";
divGreen.style.fontSize = "36px";


for (let i = 0; i < numArr.length; i++){
    if (numArr[i] % 2 === 0){
        divGreen.innerText += `${numArr[i]}\u00A0`;
    }else{
        divRed.innerText += `${numArr[i]}\u00A0`;
    }
}
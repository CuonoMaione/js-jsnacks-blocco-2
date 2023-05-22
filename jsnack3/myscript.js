



let i = 1;

let sum = 0;

let media = 0;


for (let i = 0; i < 10; i++) {
    
    userNumber = parseInt(prompt("insert number"));

    sum += userNumber;
    
    media = (sum / 10) ;

    console.log(userNumber);
}



console.log("la somma è " + sum);
console.log("la media è " + media);
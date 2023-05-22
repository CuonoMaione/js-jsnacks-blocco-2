const randomNumber = Math.floor(Math.random() *100 );


let userNumber = parseInt(prompt("insert number"))

let i = 1;

while (randomNumber != userNumber) {
     
  if (userNumber > randomNumber) {

    console.log("il numero è troppo alto")
    
  } else if (userNumber < randomNumber) {

    console.log("il numero è troppo basso")
    
  }

  userNumber = prompt("insert number");
  
  i++

}

console.log("il numero di tentativo è = " + i);

console.log("hai vinto")

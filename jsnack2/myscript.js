const randomNumber = Math.floor(Math.random() *100 );
console.log(randomNumber);

let userNumber = parseInt(prompt("insert number"))

while (randomNumber != userNumber) {
   
  userNumber = prompt("insert number");

  
  if (userNumber > randomNumber) {

    console.log("Il numero che hai inserito è maggiore del numero da indovinare")
    
  } else if (userNumber < randomNumber) {

    console.log("Il numero che hai inserito è minore del numero da indovinare")
    
  }
  
}

console.log("hai vinto")

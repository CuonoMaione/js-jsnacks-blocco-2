
const Numbers = []

let sum = 0 ;


while (sum<50) {

   
    const n = parseInt(prompt("Insert a number"))

    Numbers.push(n)

    sum +=(n); 
}

console.log(Numbers)
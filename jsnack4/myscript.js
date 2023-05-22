

const parolaUno = prompt("Insert first word");
const parolaDue = prompt("Insert second word");

console.log(parolaUno);
console.log(parolaDue);

checklength(parolaUno , parolaDue)


function checklength (FirstWord , SecondWord) {

if (FirstWord.length === SecondWord.length) {
    console.log("Le parole hanno la stessa lunghezza.")
    return true;
    
} else if (FirstWord.length > SecondWord.length) {
    console.log("La prima parola è più lunga della seconda")
    return false;    
} else {
    console.log ("La seconda parola è più lunga della prima")
    return false;
}
}

let x = checklength;

console.log(checklength)


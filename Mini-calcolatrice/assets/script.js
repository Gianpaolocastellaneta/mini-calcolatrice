/*dati due numeri e un comando (A|S|M|D) creare una calcolatrice che restituisca il risultato esatto a seconda del tipo di comando 
inserito dall'utente. Ripetere il prompt se l'utente specifica un comando diverso dai 4 indicati */

let primoNumero = undefined;
let secondoNumero = undefined;
let comando = undefined;
let risultato = undefined;



do {
    primoNumero = parseInt(prompt("Inserisci il primo numero"))
}
while (isNaN(primoNumero))

do {
    secondoNumero = parseInt(prompt("Inserisci il secondo numero"))
} while (isNaN(secondoNumero))

do {
    comando = prompt("Scegli tra A|S|M|D")
} while (comando !== "A" && comando !== "S" && comando !== "M" && comando !== "D")

switch (comando) {
    case "A":
        risultato = primoNumero + secondoNumero;
        break;
    case "S":
        risultato = primoNumero - secondoNumero;
        break;
    case "M":
        risultato = primoNumero * secondoNumero;
        break;

    case "D":
        risultato = primoNumero / secondoNumero;
        break;

}


console.log("Risultato operazione: ", risultato)
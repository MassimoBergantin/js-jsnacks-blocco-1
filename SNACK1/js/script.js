
// js-snack-1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var firstNumber = parseInt(prompt("inserisci un numero"));
var secondNumber = parseInt(prompt("inserisci un altro numero"));

if (firstNumber > secondNumber) {
    document.getElementById("output").innerHTML = "il primo numero inserito è il maggiore";

} else if (firstNumber < secondNumber) {
    document.getElementById("output").innerHTML = "il secondo numero è maggiore";
} else if  (firstNumber = secondNumber) {
    document.getElementById("output").innerHTML = "entrambi i numeri hanno lo stesso valore"; 
}

     











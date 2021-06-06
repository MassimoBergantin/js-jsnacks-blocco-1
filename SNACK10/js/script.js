// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// ---------------------FOR------------------------

// var result = 0;

// for (var x = 1; x <= 5; x++) {
//     var num = parseInt(prompt('Inserisci un numero'));
//     result += num;
// }

// document.getElementById('output').innerHTML = result;

// ----------------------WHILE---------------------

// result = 0

// while (x <= 5) {
//     var num = parseInt(prompt('Inserisci un numero'));
//     result += num;
// }


// -----------------------CORREZIONE WHILE-------------------

var sum = 0;

var x = 1;

while (x <= 5) {
    var num = parseInt(prompt('Inserisci un numero'));
    sum += num;
    x++;
     
}








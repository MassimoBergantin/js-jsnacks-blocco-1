// js-snack-3
// il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var result = 0;
 
for (var i = 1; i <= 10; i++) {
    var num = parseInt(prompt("Dimmi un munero"));
    result += num;
}
document.getElementById("output").innerHTML = result;
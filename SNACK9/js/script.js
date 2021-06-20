// snack-9
// Calcola la somma e la media dei primi 10 numeri.
var result = 0;
var max = 10;
for (var i = 1; i <= 10; i++) {
    result += i;
}
document.getElementById("output").innerHTML =  "la somma è " + result ;

document.getElementById("max").innerHTML = "la media è " + (result/max);














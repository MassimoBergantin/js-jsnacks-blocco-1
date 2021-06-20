// js-snack-2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


var firstWord = prompt("inserisci la prima parola");
var secondWord = prompt("inserisci la seconda parola");

if(firstWord.length > secondWord.length){
    document.getElementById("output").innerHTML = secondWord + "--" + firstWord;
} else if(firstWord.length < secondWord.length){
    document.getElementById("output").innerHTML = firstWord + "--" + secondWord;
} else if(secondWord.length = firstWord.length){
    document.getElementById("output").innerHTML = "entrambe le parole hanno la stessa lunghezza";
}

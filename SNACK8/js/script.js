
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
// (bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)

// var num = prompt("Dimmi un munero");

// while (num.length > [4]) { 
// }


// alert('Occhio, devi inserire 4 cifre!');

// document.getElementById("output").innerHTML = num;


// --------CORREZIONE CON OTTAVIO----------


var userNumber = prompt('Inserisci un numero di 4 cifre');

var inputLen = userNumber.length;


if (inputLen !==4) {

    alert('Devi inserire un numero di 4 cifre');

}  else if (isNaN(userNumber)) {

    alert("Devi inserire un numero! Mi raccomando");

}  else {

    var result = 0;

    for (var i = 0; i < inputLen; i++) {

        result += parseInt(userNumber[i])

    }  
     
}


console.log(result);
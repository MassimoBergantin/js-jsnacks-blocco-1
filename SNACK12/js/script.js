
// snack-12
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// --------------------SVOLTO CON ALFREDO------------------------


var listaNomi = ["Ottavio", "Davide", "Alfredo","Luca","Lucia","Viola"];
var listaCognomi = ["Fogliata","Voza", "Guida", "Pettini","Rinaldi","Peppniello"];
var listaInvitati = []


for(var i = 0; i < 3; i++) {
    var nameRandom = listaNomi[Math.floor(Math.random() * listaNomi.length)];
    var cognomiRandom = listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

    var invitato = nameRandom + " " + cognomiRandom;

    if (!listaInvitati.includes(invitato)) {
        listaInvitati.push(invitato)
    }

    document.getElementById("output").innerHTML += "<li>" + invitato + "</li>";


}


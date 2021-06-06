



// js-snack-4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



var utente = prompt('il nome della prenotazione');
var invitatiFesta = ['ottavio','filippo','roberto'];

var check = false;

for (var x = 0; x < invitatiFesta.length; x++) {
    if (invitatiFesta[x] === utente)
    check = true;
}

if (check) {
    document.getElementById('invitati').innerHTML = 'Benvenuto!';

} else {
    document.getElementById('invitati').innerHTML = 'Non sei stato invitato!';
}






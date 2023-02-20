'use strict';

//Richiesta nome
const firstName = prompt('Inserisci il tuo nome');
//Richiesta cognome
const lastName = prompt('Inserisci il tuo cognome');
//Richiesta età
const age = prompt('Inserisci la tua età');
//Richiesta colore preferito
let favColor = prompt('Inserisci il tuo colore preferito');
//impostazione variabile da inserire in html
let classe = 89;
//Inserimento dati utente in html
document.getElementById('quest').innerHTML = `${firstName} ${lastName} ${age} ${favColor}`;
//Inseritmento numero in html
document.getElementById('go').innerHTML = classe;
//Stampa in console
console.log(`ciao ${firstName} ${lastName} di ${age} anni, il tuo colore preferito è il ${favColor}`);
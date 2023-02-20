'use strict';

//Richiesta nome
const firstName = prompt('Inserisci il tuo nome');

//Richiesta cognome
const lastName = prompt('Inserisci il tuo cognome');

//Richiesta età
const age = prompt('Inserisci la tua età');

//Richiesta colore preferito
const favColor = prompt('Inserisci il tuo colore preferito');

//impostazione variabile da inserire in html
let classe = 89;

//Assegnazione finale
const username = `Ciao ${firstName} ${lastName} di ${age} anni, il tuo colore preferito è il ${favColor}!!`;

//Inserimento dati utente in html
document.getElementById('quest').innerHTML = username;

//Inseritmento numero in html
document.getElementById('go').innerHTML = classe;

//Stampa in console
console.log(username);
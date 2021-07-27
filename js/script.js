// 1. Create an object
var student = {
  name : 'Giovanni',
  lastname : 'Rossi',
  age : 33
};
// 2. Printing with dot notation
console.log(student.name);
// Printing with square brackets
console.log(student['lastname']);
// 3. Printing with for in all properties
for ( var key in student ) {
  console.log(student[key]);
}
//-------------------------------------------------

/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti
e stampare per ognuno nome e cognome */

// 1. Creo un array di oggetti di Studenti
var arrayStudenti = [

  {
    nome : 'Andrea',
    cognome : 'Vai',
    eta : 33,
    lavoro: 'idraulico'
  },

  {
    nome : 'Luca',
    cognome : 'Bianchi',
    eta : 18,
    lavoro: 'studente'
  },

  {
    nome : 'Mario',
    cognome : 'Verdi',
    eta : 21,
    lavoro: 'sviluppatore'
  },

  {
    nome : 'Luigi',
    cognome : 'Buongiorno',
    eta : 25,
    lavoro: 'imbianchino'
  }

];

/* 2. Per ciclare su tutti gli studenti, cioè ciclare l'array,
devo utilizzare un ciclo for */
for ( var i = 0 ; i < arrayStudenti.length; i++) {

  // Stampo per ognuno nome e cognome
  console.log(arrayStudenti[i].nome + ' ' + arrayStudenti[i]['cognome']);

}

//--------------------------------------------------------------------------

/* Dare la possibilità all’utente,
attraverso 3 prompt, di aggiungere
un nuovo oggetto studente inserendo nell’ordine:
nome, cognome e età */

// 1. Mi creo un oggetto vuoto
var nuovoStudente = {

}

// 2. Prompt uno: nome
var nomeUtente = prompt('Inserisci un nome');
// Vado ad aggiungere il valore dato dall'utente per la chiave nome
nuovoStudente.nome = nomeUtente;

// 3. Prompt due: cognome
var cognomeUtente = prompt('Inserisci un cognome');
// Vado ad aggiungere il valore dato dall'utente per la chiave cognome
nuovoStudente.cognome = cognomeUtente;

// 4. Prompt tre: eta
var etaUtente = prompt('Inserisci eta');
// Aggiungo il valore dato dall'utente per la chiave età
nuovoStudente.eta = etaUtente

// 5. Stampo il nuovo oggetto
console.log(nuovoStudente);

// 6. Aggiungo l'oggetto compilato dall'utente nel mio array di oggetti
arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);

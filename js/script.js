/* Creare un oggetto che descriva uno studente
con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà */

// 1. Creo un oggetto
var studenteAlfa = {

  nome : 'Giovanni',

  cognome : 'Rossi',

  eta : 33

};

// 2. Stampo il valore della chiave nome utilizzanzo la dot notation
console.log(studenteAlfa.nome);
// Stampo il valore della chiave cognome utilizzanzo le parentesi quadre
console.log(studenteAlfa['cognome']);

// 3. Stampare attraverso il for in tutte le proprietà
for ( var key in studenteAlfa ) {

  console.log(studenteAlfa[key]);

}


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

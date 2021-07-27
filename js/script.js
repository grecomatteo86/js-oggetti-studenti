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
// 1. Create an array of objects
var studentsArray = [
  {
    name : 'Andrea',
    lastname : 'Vai',
    age : 33,
    job: 'idraulico'
  },
  {
    name : 'Luca',
    lastname : 'Bianchi',
    age : 18,
    job: 'studente'
  },
  {
    name : 'Mario',
    lastname : 'Verdi',
    age : 21,
    job: 'sviluppatore'
  },
  {
    name : 'Luigi',
    lastname : 'Buongiorno',
    age : 25,
    job: 'imbianchino'
  }
];
// 2. Printing name and lastname
for ( var i = 0 ; i < studentsArray.length; i++) {
  console.log(studentsArray[i].name + ' ' + studentsArray[i]['lastname']);
}
//--------------------------------------------------------------------------
// 1. Mi creo un oggetto vuoto
var nuovoStudente = {

}

// 2. Prompt uno: nome
var nomeUtente = prompt('Inserisci un nome');
// Vado ad aggiungere il valore dato dall'utente per la chiave nome
nuovoStudente.name = nomeUtente;

// 3. Prompt due: cognome
var cognomeUtente = prompt('Inserisci un cognome');
// Vado ad aggiungere il valore dato dall'utente per la chiave cognome
nuovoStudente.lastname = cognomeUtente;

// 4. Prompt tre: eta
var etaUtente = prompt('Inserisci eta');
// Aggiungo il valore dato dall'utente per la chiave età
nuovoStudente.age = etaUtente

// 5. Stampo il nuovo oggetto
console.log(nuovoStudente);

// 6. Aggiungo l'oggetto compilato dall'utente nel mio array di oggetti
studentsArray.push(nuovoStudente);
console.log(studentsArray);

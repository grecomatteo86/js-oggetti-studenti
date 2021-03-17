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

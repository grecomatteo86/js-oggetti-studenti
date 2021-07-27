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
// 1. Create empty object
var newStudent = {
}
var userName = prompt('Insert the name');
while (!isNaN(userName)) {
  userName = prompt('Insert the name');
}
// Add the value
newStudent.name = userName;
var userLastname = prompt('Insert the lastname');
while (!isNaN(userLastname)) {
  userLastname = prompt('Insert the lastname');
}
newStudent.lastname = userLastname;
var userAge = prompt('Insert the age');
while (isNaN(userAge) || userAge == '') {
  userAge = prompt('Insert the age');
}
newStudent.age = userAge
console.log(newStudent);
studentsArray.push(newStudent);
console.log(studentsArray);

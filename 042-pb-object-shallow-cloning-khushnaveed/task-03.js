const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  let copy = {...person};
  let fullName = person.firstName + ' ' + person.lastName;
  copy.fullName = fullName;
  return copy;
 
};

console.log(addFullName(person));
console.log(person);

const person1 = {
  name: "John",
  surname: "Doe",
  age: 25,
  mail: "john@gmail.com"
};
const person2 = {
  name: "Bella",
  surname: "Watson",
  age: 23,
  mail: "bella@gmail.com"
};

const getFullName = person => `${person.name} ${person.surname}`;

console.log(person1);
console.log(person2);
console.log(getFullName(person1));

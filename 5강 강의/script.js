// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((arr) => arr * 2);
// console.log(newArr);

// const people = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 24 },
//   { name: "Carol", age: 23 },
// ];

// const newPeople = people.map((people) => people.name);
// console.log(newPeople);

// const users = [
//   { name: "Alice", age: 30, city: "Seoul" },
//   { name: "Bob", age: 25, city: "New York" },
//   { name: "Charlie", age: 35, city: "London" },
// ];

// const nameAndCity = users.map((user) => {
//   return { name: user.name, city: user.city };
// });
// console.log(nameAndCity);

// arr = [3, 7, 11, 9, 12, 13];
// const answer = arr.find((arr) => {
//   return arr > 10;
// });
// console.log(answer);

// const arr = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];

// const alice = arr.find((arr) => {
//   return arr.name === "Alice";
// });
// console.log(alice);

// const find3 = arr.find((arr) => {
//   return arr.age === 30;
// });
// console.log(find3);

// const number = [1, 2, 3, 4, 5, 6];
// const answer = number.filter((a) => {
//   return a % 2 === 0;
// });
// console.log(answer);

// const arr = [
//   { name: "Laptop", price: 1000 },
//   { name: "Smartphone", price: 500 },
//   { name: "Tablet", price: 250 },
// ];
// const answer = arr.filter((item) => {
//   return item.price >= 500;
// });
// console.log(answer);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const newArr = [...arr1, ...arr2, ...arr3];
// console.log(newArr);

// const obj1 = { name: "Alice", age: 30 };
// const obj2 = { job: "Software Engineer", city: "Seoul" };

// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);

// const person = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Engineer",
// };

// const { name, age, occupation } = person;
// console.log(name, age, occupation);

// const user = {
//   name: "Jane Doe",
//   age: 25,
//   occupation: "Web Developer",
//   address: {
//     city: "Seoul",
//     country: "South Korea",
//   },
// };

// const {
//   address: { city },
// } = user;
// console.log(city);

// const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

const name = localStorage.setItem("name", "james");
const age = localStorage.setItem("age", 20);
console.log(`이름: ${name}, 나이: ${age}`);

const person = {
  name: "Bard",
  age: 3,
  occupation: "Language Model",
};
const p1 = localStorage.setItem("person", JSON.stringify(person));
const user = JSON.parse(localStorage.getItem(person));
console.log();

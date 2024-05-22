// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four, five = 5] = arr;

// console.log(one, two, three, four, five);
// 1 2 3 undefined

// 2. 객체의 구조 분해 할당
let person = {
  name: 'koo',
  age: 27,
  hobby: '수영',
};

let { name, age: myAge, hobby } = person;
console.log(name, myAge, hobby);

const func = (person) => {};

func(person);

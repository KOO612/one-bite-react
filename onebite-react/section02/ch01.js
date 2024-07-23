// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n;

if (!f1) {
  console.log('falsy');
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들을 제외한 나머지 모든 값

// 3. 활용 사례
function printName(person) {
  // if (person === undefined || person === null) {
  if (!person) {
    console.log('person 값 없음');
    return;
  }
  console.log(person.name);
}

// let person = { name: 'koo' };
// let person;
let person = null;
printName(person);

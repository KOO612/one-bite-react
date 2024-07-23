// 1. 상수 객체
const animal = {
  type: 'aaa',
  name: 'bbb',
  color: 'red',
};

// 새로운 값 할당 불가능
// animal = { a: 1 };
// animal = 3;

// 상수 객체에 변경은 가능
animal.age = 2; // 추가
animal.name = 'ccc'; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: 'koo',
  // 메서드
  // sayHi: () => {
  //   console.log("hello");
  // },

  // 메서드 선언
  sayHi() {
    console.log('hello');
  },
};

// 점표기법
person.sayHi();
person['sayHi']();

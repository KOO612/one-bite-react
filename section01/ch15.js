// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: 'koo',
  age: 28,
  hobby: '수영',
  'like cat': true, // 띄어 쓰는 경우 ""로 감쌈
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법
let name = person.name;

// 괄호표기법
// 변수에 접근하고자 하는 키 값을 담아서 프로퍼티를 꺼내올 수 있음
// 동적으로 프로퍼티를 변화시키면서 꺼내올때 사용하는것이 유용
let age = person['age'];

let property = 'hobby';
let hobby = person[property];

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = 'be dev';
person['food'] = '떡볶이';

// 3.3 프로퍼티 수정
person.job = 'job';
person['food'] = '라면';

// 3.4 프포퍼티 삭제
delete person.job;
delete person['food'];

// 3.5 프로퍼티의 존재 유무 확인 방법(in 연산자)
let result1 = 'name' in person;
console.log(result1);

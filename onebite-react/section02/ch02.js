function returnFalse() {
  console.log('False');
  return false;
}

function returnTrue() {
  console.log('True');
  return true;
}

// console.log(returnFalse() && returnTrue());
// False false 출력
// 단락평가 => 첫번째 피연산자에서 결과를 추론 가능하다면 앞에만 실행

// console.log(returnTrue() && returnFalse());
// True False false 출력
// 단락평가 동작 x

function printName(person) {
  const name = person && person.name;
  console.log(name || 'person 값 없음');
}

printName();
printName({ name: 'koo' });

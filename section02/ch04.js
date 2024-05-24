// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

for (let i in arr2) {
  console.log(i);
}

function func1(p1, p2, p3) {
  console.log(p1, p2, p3);
}

func1(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수

function func2(one, ...rest) {
  console.log(rest);
}
func2(...arr1);

// 1. 배열 생성
let arr1 = new Array(); // 배열 생성자
let arr2 = []; // 배열 리터럴

let arr3 = [1, 2, 3, true, 'hello', null, undefined, () => {}, {}, []];

// 배열 요소 접근 인덱스를 이용해 접근 [index]
let item1 = arr3[0];

arr3[0] = 'hello'; // 변경 가능

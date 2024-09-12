// 1. 배열 생성
let arrA = new Array(); // 첫번째 방법. 배열 생성자 이용
let arrB = []; // 두번째 방법. 배열 리터럴 (대부분 사용) 이용하기

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, []]; // 어떤 값이든 담을 수 있다.
// console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];    // arr[인덱스] => 몇 번째 원소를 가져오고 싶은지 의미하는 숫자를 "인덱스"라고 함.
let item2 = arrC[1];

console.log(item1, item2);  // 0번부터 시작임! (0번이 첫번째)

arrC[0] = "hello";  // 배열 요소 바꾸기
console.log(arrC);
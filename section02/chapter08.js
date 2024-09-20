// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude1 = arr2.includes(3);
let isInclude2 = arr2.includes(10);

// console.log(isInclude1); // true 반환
// console.log(isInclude2); // false 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 객체 값의 위치는 찾을 수는 없다. 그래서 이럴 떄는 findIndex를 쓴다. (indexOf는 얕은 비교를 하기 때문이다.)
// findIndex는 객체의 프로퍼티 값을 비교하여 찾을 수 있다. (예: objectArr.findIndex((item) => item.name === "이정환"))
let arr3 = [1, 2, 3];
let index1 = arr3.indexOf(2);
// console.log(index1);    // 1 출력

let arr4 = [2, 2, 2];
let index2 = arr4.indexOf(2);
// console.log(index2);    // 맨 앞의 Index인 0 출력

let index3 = arr4.indexOf(10);
// console.log(index3);    // 배열에 없는 숫자를 찾을 때는 -1을 반환한다.

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드이다. 콜백함수를 만족한다는 것은 true를 반환하는 요소를 말함.
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 객체의 특정 프로퍼티 값을 기준으로 비교하여 찾을 수 있다. 즉, 복잡한 객체 값도 조건식만 잘 만들어주면 쉽게 찾아낼 수 있다.
let arr5 = [1, 2, 3];

const findedIndex = arr5.findIndex((item) => {
  if (item === 2) return true;
});

const findedIndex2 = arr5.findIndex((item) => item === 2); // 44번 째 줄과 같은 코드이다. 간략하게 수정함

// console.log(findedIndex); // 참이기 때문에 요소 2의 인덱스 값인 1을 반환
// 콜백함수를 만족하는 가장 앞쪽의 요소의 인덱스 값을 반환한다.
// 조건에 만족하는 배열의 요소가 존재하지 않을 경우에는 '-1'을 반환한다.

// 단순한 원시 타입의 값을 찾을 때는 => indexOf
// 복잡한 객체 타입의 값을 찾을 때는 => findIndex

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 만족하는 요소를 그대로 반환한다.

let arr6 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr6.find((item) => item.name === "이정환");
console.log(finded);    // 이정환 출력

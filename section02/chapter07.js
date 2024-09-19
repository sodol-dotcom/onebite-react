// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// push 메서드는 요소를 추가하고 난 다음에 변환된 배열의 길이를 반환한다 -> 7번째 줄 참고
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
// console.log(arr1);
// console.log(newLength); // 7 반환

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환까지 해주는 역할
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 맨 뒤의 요소 제거 후 반환
// console.log(poppedItem);    // 맨 뒤의 제한 요소 반환
// console.log(arr2);

// 3. shift
// 배열에서 맨 앞의 요소 하나를 제거하고 반환함
const arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3); // 제거된 아이템인 '1', 제거된 이후의 배열에 남은 요소 '2, 3' 반환

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 변경된 길이의 배열도 반환한다.
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4);

// push와 pop은 배열 끝에서 작업해 인덱스 이동이 필요 없어 빠르고,
// shift와 unshift는 배열 시작에서 작업해 모든 원소를 이동시켜야 하기 떄문에 push, pop보다 비교적 느리다.
// 그래서 되도록이면 push나 pop을 통해서 해결하는 게 좋다.

// 6. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);    // 끝까지 자를꺼라 end 인덱스 생략. 38번째 줄과 같은 결과 값이 반환됨.
// array.slice(start, end);
// start: 추출을 시작할 인덱스 (포함)
// end: 추출을 끝낼 인덱스 (미포함), 배열의 끝까지 자를꺼면 end는 생략하고 start만 써도 됨.
// console.log(sliced);
// console.log(sliced2);
// console.log(arr6); // 단 원본 배열이 바뀌진 않는다. 즉, 여기서 [1, 2, 3, 4, 5] 그대로 출력됨

let sliced3 = arr5.slice(-1)    // 뒤에서 부터 자르기. 뒤에서 부터 1개 자름.
let sliced4 = arr5.slice(-3)    // 뒤에서 부터 3개 자름.
// console.log(sliced3);
// console.log(sliced4);


// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
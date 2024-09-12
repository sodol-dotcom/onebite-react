// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
// console.log(obj2);

// Spread 연산자 활용
function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지 -> 나머지 매개변수
// rest는 항상 맨뒤에 와야함! Rest 뒤에 뭔가 삽입되면 안됨
function funcB(...rest) {
  console.log(rest);
}
funcB(...arr1);

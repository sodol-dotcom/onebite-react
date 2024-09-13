// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문 => 배열에만 쓸 수 있다.
// 오직 배열을 순회하기 위해서 쓰는 반복문
for (let item of arr) {
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용 (내장 함수)
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // (1) for문을 이용해 객체의 키 값들을 순회하도록 함
  //   console.log(keys[i]);
}

for (let key of keys) {
  // (2) for of 반복문을 이용해 객체의 키 값들을 순회하도록 함
  //   console.log(key);
}

// 추가적으로 객체의 밸류값도 동시에 순회하려고 할때는
for (let key of keys) {
  // 괄호 표기법을 사용하면 된다.
  //   console.log(key, person[key]);
}
// 조금 더 깔끔하게 작성하면
for (let key of keys) {
  const value = person[key]; // value를 선언해줌
  //   console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values)

for (let value of values) {
//   console.log(value);
}

// 2.3 for in => 객체에만 쓸 수 있다.
// -> 객체만을 위한 특수한 반복문
for(let key in person) {
    const value = person[key];
    console.log(key, value);
}
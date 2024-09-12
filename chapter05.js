// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);  // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
// console.log(1 * "hello");
// -> NaN 출력


// 2. String Type
let myName = "이정환"; // 따옴표가 없으면 이정환을 변수명으로 인식한다.
let myLocation = "목동";
let introduce = myName + myLocation; // string 타입도 덧셈 연산을 지원한다.
// console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;  // 백틱으로 문자열 만들면 변수의 값을 동적으로 넣을 수 있다.
// console.log(introduceText);
// -> 템플릿 리터럴 문법


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none)
// undefined -> 변수를 할당하지 않았을때 자동으로 들어가는 값, 
// Null -> 일부러 넣어준 값(개발자 재량)
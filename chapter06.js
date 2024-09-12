// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
// console.log(result);
// // 1020이 출력된다. num이 묵시적으로 string 타입으로 변경되었기 때문

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시하는 것
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
// console.log(strToNum2);
// // 숫자포함 '다른 형'도 포함되어 있는 문자열의 변환은 parseInt로 변환하면 숫자로 변환 가능하다.
// // 단 숫자로 시작해야한다. 다른 형태로 시작하면 parseInt를 사용할 수 없다.

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.") // numToStr1이 문자형으로 잘 변환되었기 때문에 "20입니다."로 잘 출력될 수 있다.


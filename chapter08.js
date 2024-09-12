// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// console.log(var4)
let var5 = var1 ?? var3;
// console.log(var5);
let var6 = var2 ?? var3;    // 모두 null이나 undefined가 아니면 맨 앞의 값이 저장됨
// console.log(var6);

// 회원관리 시스템 만들때 많이 씀
// 예:
let userName;
let userNickName = "winterlood";

let displayName = userName ?? userNickName;
// console.log(displayName); // -> userNickName인 "winterlood"가 출력됨

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = true;

let t1 = typeof var7;
// console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서, 참 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// 변수 = (조건식) ? true(참)일때 반환 값 : false(거짓)일때 반환 값
// console.log(res);
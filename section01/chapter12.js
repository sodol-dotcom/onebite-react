function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 1~3줄 출력 => funcA() {console.log("funcA");}
varA(); // funcA 출력

// 이런 식으로 변수에 함수를 바로 담을 수 있음
// 단 funcB는 선언식이 아님. 중요! 그래서 16번째 줄을 보면 오류가 발생함.
let varB = function funcB() {
  console.log("funcB");
};

varB(); // funcB 출력
// funcB(); //오류 발생

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));

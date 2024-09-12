// 1. if 조건문 (if문)
let num = 9;

// if (num >= 10) {
//     console.log("num은 10 이상입니다.");
//     console.log("조건이 참 입니다!");
// } else if(num >= 5) {
//     console.log("num은 5이상 입니다.")
// } else {
//     console.log("조건이 거짓 입니다!")
// }

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직과넞ㄱ이다.
let animal = "owl";

switch (animal) {
  case "cat":{
    console.log("고양이")
    break;          // break;가 있어야 해당되는 코드 다음 코드들이 실행이 되지 않음
  }
  case "dog":{
    console.log("강아지")
    break;
  }
  case "bear": {
    console.log("곰")
    break;
  }
  case "snake": {
    console.log("뱀")
    break;
  }
  case "tiger": {
    console.log("호랑이")
    break;
  }
  default: {        // 어디에도 해댱되지 않을 떄 출력될 것은 default에 설정
    console.log("그런 동물은 전 모릅니다")
  }
}

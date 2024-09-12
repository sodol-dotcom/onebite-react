// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수는 새로운 값을 할당하지 못하는 변수를 말하지만,
// 아예 새로운 값을 할당하지 못하는 것이지
// 저장되어 있는 객체 값의 프로퍼티를 수정하는것 문제가 되지 않는다.
animal.age = 2; // 프로퍼티 추가 가능
animal.name = "까망이"; //프로퍼티 수정 가능
delete animal.color; // 프로퍼티 삭제 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
// 객체의 동작을 정의할때 사용함 (프로퍼티들은 메서드로써 객체의 동작을 정의한다.)

const person = {
    name : "이정환",
    sayHi() {                   // 메서드 선언 형태로도 사용 가능
        console.log("안녕");
    },
};

// 점 표기법, 괄호 표기법 모두로 호출 가능
person.sayHi();
person["sayHi"]();
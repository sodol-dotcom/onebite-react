// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자를 사용해서 객체 생성
let obj2 = {}; // 객체 리터럴 방법: 빈 중괄호 하나 열어서 객체 생성해주는 방법 -> 앞으로 이 방식 이용

// 2. 객체 프로퍼티 (객체 속성) -> "key : valye"
let person = {
  name: "이정환", // -> name 프로퍼티
  age: 27, // -> age 프로퍼티
  hobby: "테니스", // -> hobby 프로퍼티로 부름
  "Like cat": true, // -> 띄어쓰기 있으면 따옴표로 감싸서 하나로 만들어야함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 이정환 출력

let name2 = person.name2;
console.log(name2); // undefined 출력(존재하지 않는 프로퍼티에 접근하려고 할땐 undefiend로 출력됨)

let age = person["age"]; // 대괄호와 문자열로 접근하고자 하는 프로퍼티에 접근할때는 프로퍼티의 키에 꼭 쌍따옴표와 함께 작성 필수!! 안하면 age(키)를 변수로 인식해서 오류 발생함
console.log(age);

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티 존재 유뮤 확인하는 방법 (in 연산자)
let result1 = "name" in person; // "name"이라는 프로퍼티가 person이라는 객체 안에 있는지 물어보는 로직 -> true
let result2 = "cat" in person; // -> false
console.log(result1);
console.log(result2);

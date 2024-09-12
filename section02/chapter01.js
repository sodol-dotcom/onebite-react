// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let F6 = "";
let f7 = 0n;

if (!f1) {
    console.log("falsy");
};

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "helly";
let t2 = 12;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
    console.log("Truthy");
};
``
// 3. 활용 사례
// 실무에서 종종 값이 입력되지 않아 undefined 처리가 되는 경우가 많은데
// 이럴 떄는 아래 처럼 person의 값이 없으면 콘솔로그에 "person의 값이 없음"과 같이 출력되어 알 수 있게하여 오류를 방지
// 그러나 "person === undefined"만 넣으면 null일때는 오류가 발생하기 떄문에 null도 꼭 포함시켜야함
// 하지만 바로 아래 조건문은 복잡하고, 반복적으로 적어줘야하기 때문에 다음 3-1. 처럼 하면 좋다.
function printName(person) {
    if (person === undefined === null) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);

// 3-1.
function printName(person2) {
    if (!person2) {          // 이 부분이 간결하게 수정되었음
        console.log("perso2n의 값이 없음");
        return;
    }
    console.log(person.name);
} 

let person2;
printName(person2);

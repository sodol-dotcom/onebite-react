// 함수선언

// function greeting () {
//     console.log("안녕하세요");  // 함수가 실행해야될 코드 넣어주면 됨
// }

// console.log("호출 전");
// greeting(); // 이런 식으로 함수를 호출해야 실행됨. 이거 안하면 4번째 줄 코드 실행 안되서 아무것도 안나옴, 소괄호 꼭 써야함
// console.log("호출 후");

function getArea(width, height) {
  // 여기서의 width, height -> 매개변수
  let area = width * height;
  return area; // 반환값을 만드는 return 문 아래 콘솔로그처럼 활용할 수 있게 한다. 리턴문은 이 코드 밑에 다른 코드가 있어도 수행되지 않음
}

let area1 = getArea(10, 20); // 여기서의 10, 20 -> 인수
console.log(area1); // area1에 200이 담김

getArea(30, 20);
getArea(120, 200);
// 1. 콜백함수
// 콜백함수는 메인함수가 원하는 타이밍에 실행시킬수도 있다.
function main(value) {
  // console.log(1);
  // console.log(2);
  value();
  // console.log("end");
}

main(function sub() {
  // console.log("i am sub");
});

// 2. 콜백함수의 활용

function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(repeat);
  }
}

repeat(5);


function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function(idx){console.log(idx)});
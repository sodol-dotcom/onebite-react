function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// // then 메서드 -> promise를 이용하는 비동기 작업의 결과값을 이용할 수 있음, promise를 다시 반환한다.
// // then: 그 후에
// // promise가 reject됐을땐 then이 아닌 catch를 씀
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     // promise 체이닝(then, catch 모두 promise를 반환하기 때문에 연결해서 씀)
//     console.log(error);
//   });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

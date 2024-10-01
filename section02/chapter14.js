// async
// (동기적으로 작동하는)어떤 함수를 비동기 함수로 만들어주는 키워드
// = 함수가 프로미스를 반환하도록 변환해주는 키워드
// 애초에 promise를 반환하는 비동기 함수에 async를 붙이면 promise를 그대로 반환한다.
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// getData 함수의 객체를 직접 반환하는게 아니라, 객체를 결과값으로 갖는 새로운 Promise를 반환한다.
// 즉, getData()를 호출하면 실제 객체를 반환하는 것이 아니라, 이 객체를 resolve하는 Promise가 생성된다.
// 그래서 console.log(getData)로는 함수의 참조를 출력하게 되고, console.log(getData())로 호출했을 때 Promise가 반환된다는 점을 주의해야함
// console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  const data = await getData(); // await는 async가 붙지 않은 함수에서 사용하면 오류가 일어남.
  console.log(data);
}

printData();

import "./main.css"; // css파일은 import 뒤에 바로 경로만 붙여주면 된다.

// JSX 문법의 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (한 줄로 표현할 수 있는 것들. for/if 문 같은거 X)
// 2. 숫자, 문자열, 배열의 값만 렌더링 된다. (Boolean, undefined, null은 렌더링 되지 않음)
// 3. 객체는 점표기법으로 사용해야함
// 4. 모든 태그는 닫혀있어야 한다.   <Main /> 이거는 셀프 클로징이라고 함
// 5. 최상위 태그는 반드시 하나여야만 한다.
// 5-1. (빈 태그로만 묶어줘도 됨. 빈 태그 일경우에는 개발자도구의 콘솔창에 표시 안되고 하위 태그들이 흩뿌려져있게 됨)

const Main = () => {
  const user = {
    이름: "이정환",
    isLogin: true,
  };

  // if문으로
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
    // JSX에서는 자바스크립트와 HTML을 함께 쓰고 있기 때문에
    // 자바스크립트의 예약어인 class를 쓸 수 없다. 그래서 className으로 설정해야한다.
  } else {
    return <div>로그인</div>;
  }

  // // 삼항연산자로
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;

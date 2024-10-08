// 부모 컴포넌트에서 자식 컴포넌트에 props를 전달해줄 때,
// 자식 컴포넌트에게 전달하도록 설정한 props의 값이 객체 형태로 담겨서 자식 컴포넌트에게 전달된다.
// 자식 컴포넌트에서 props라는 매개변수로 객체가 제공되고, 전달한 props의 값들이 프로퍼티로 하나씩 들어있다.(console.log로 확인)

const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// 버튼에 color값이 없을 경우를 대비해, 자동으로 설정될 기본 값을 정해주어서 오류를 예방함.
// 버튼 컴포넌트에 defaultProps에 컬러 props의 기본 값으로 블랙을 설정해준다.
// 이렇게 해주면 컬러라는 props에 아무런 값이 전달되지 않았을 때에도 자동으로 디폴트 props 설정에 의해 블랙이라는 값을 설정해준다.
// 예) toUpperCase를 추가적으로 호출해도 에러가 발생하지 않는다.
// 디폴트 설정을 해주지 않으면 toUpperCase 같은 메서드를 추가적으로 호출할 경우 color라는 props의 값이 "default"이기 때문에 오류가 발생한다.
Button.defaultProps = {
  color: "black",
};

export default Button;

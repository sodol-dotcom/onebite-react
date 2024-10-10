import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeName = (e) => {
    setInput({
      ...input, // 관련없는 값은 그대로 유지하도록
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input, // 관련없는 값은 그대로 유지하도록
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input, // 관련없는 값은 그대로 유지하도록
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input, // 관련없는 값은 그대로 유지하도록
      bio: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        ></input>
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;

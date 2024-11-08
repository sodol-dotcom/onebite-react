import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Nonfound from "./pages/Notfound";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "diary": 일기를 상세히 조회하는 Diary 페이지
const App = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      {/* Routes 안에는 Route 컴포넌만 들어갈 수 있고 
       Routes 밖에 배치된 요소들은 페이지 라우팅과 관련없이 모든 페이지에 동일하게 렌더링된다.(Notfound에서도!) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Nonfound />} />
      </Routes>
    </>
  );
};
export default App;

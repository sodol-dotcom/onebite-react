import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createdData: new Date().getTime,
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdData: new Date().getTime,
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  return state;
}

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "diary": 일기를 상세히 조회하는 Diary 페이지
const App = () => {
  const [data, dispatch] = useReducer(reducer, [mockData]);
  return (
    <>
      {/* Routes 안에는 Route 컴포넌만 들어갈 수 있고 
       Routes 밖에 배치된 요소들은 페이지 라우팅과 관련없이 모든 페이지에 동일하게 렌더링된다.(Notfound에서도!) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
export default App;

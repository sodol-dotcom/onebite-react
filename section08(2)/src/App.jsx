import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockDate = [
  {
    id: 0,
    isdDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isdDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isdDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;

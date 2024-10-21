import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="List">
      <h1>Todo List 🌱</h1>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;

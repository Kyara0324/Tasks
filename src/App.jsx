import { useState } from "react";
import "./App.css";
import TodoCard from "./components/todos/TodoCard";
import "./reset.css";

function App() {
  // working, done으로 구분.
  const [todos, setTodos] = useState({
    working: [],
    done: [],
  });

  // 제목과 내용 입력 상태관리.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 제목 입력값과 내용 입력값 변경하는 핸들러
  const inputTitleChangeHandler = ({ target }) => {
    setTitle(target.value);
  };

  const inputContentChangeHandler = ({ target }) => {
    setContent(target.value);
  };

  // 새로운 Todo을 추가하는 기능
  const addTodo = (newTodo) => {
    setTodos((prev) => ({
      ...prev,
      working: [...prev.working, newTodo],
    }));
  };

  // Todo 완료 상태로 변경하는 기능
  const markAsDone = (todoIndex) => {
    const updatedTodo = todos.working[todoIndex];
    setTodos((prev) => ({
      working: prev.working.filter((_, idx) => idx !== todoIndex),
      done: [...prev.done, updatedTodo],
    }));
  };

  // 완료된 Todo를 취소하는 기능
  const cancelMarkAsDone = (todoIndex) => {
    const updatedTodo = todos.done[todoIndex];
    // done프로퍼티에서 prev.done에 필터함수로 idx 검증
    setTodos((prev) => ({
      done: prev.done.filter((_, idx) => idx !== todoIndex),
      working: [...prev.working, updatedTodo],
    }));
    console.log(todos);
  };

  // Todo를 삭제하는 기능
  const deleteTodo = (todoIndex, type) => {
    setTodos((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, idx) => idx !== todoIndex),
      // type자리는 working, done을 의미한다.
    }));
  };

  // Todo 추가하는 폼을 submit하는 기능
  const todoFormSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: title,
      content: content,
    };

    // 제목과 내용이 빈 값이 아닌 경우만 추가
    if (title.trim().length > 0 && content.trim().length > 0) {
      addTodo(newTodo);
      setTitle("");
      setContent("");
    } else {
      alert("빈 칸을 모두 입력해주세요.");
    }
  };

  return (
    <div className="todo__wrapper">
      <form onSubmit={todoFormSubmitHandler} className="todo__top__wrapper">
        <div className="todo__write__wrapper">
          <div className="todo__write__info">
            <span>제목</span>
            <input
              value={title}
              onChange={inputTitleChangeHandler}
              placeholder="제목을 입력해주세요."
              type="text"
            />
          </div>

          <div className="todo__write__info">
            <span>내용</span>
            <input
              value={content}
              onChange={inputContentChangeHandler}
              placeholder="내용을 입력해주세요."
              type="text"
            />
          </div>
        </div>

        <button className="write__btn--add" type="submit">
          추가하기
        </button>
      </form>

      <div className="main">
        <div className="todo__list__wrapper">
          <div className="list__card__wrapper">
            <h1 className="list__title">Working...</h1>
            <div className="list__item__wrapper">
              {todos.working.map((todo, idx) => (
                <TodoCard
                  todo={todo}
                  key={idx}
                  markAsDone={() => markAsDone(idx)}
                  deleteTodo={() => deleteTodo(idx, "working")}
                  isDone={false} // 완료되지 않은 Todo에는 isDone props를 false로 전달
                />
              ))}
            </div>
            <h1 className="list__title">Done...</h1>
            <div className="list__item__wrapper">
              {todos.done.map((todo, idx) => (
                <TodoCard
                  todo={todo}
                  key={idx}
                  markAsDone={() => cancelMarkAsDone(idx)}
                  deleteTodo={() => deleteTodo(idx, "done")}
                  isDone={true} // 완료되지 않은 Todo에는 isDone props를 false로 전달
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

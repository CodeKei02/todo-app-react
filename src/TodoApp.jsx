import { useEffect, useReducer, useState } from "react";
import { TodoAdd } from "./components/TodoAdd";
import { todoReducer } from "./components/todoReducer";
import { TodoList } from "./components/TodoList";
import { useDarkMode } from "./hooks/useDarkMode";
import { TodoFooter } from "./components/TodoFooter";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [isDarkMode, toggleDarkModo] = useDarkMode();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const handleRemoveCompleted = () => {
    dispatch({
      type: "[TODO] Remove Completed Todos",
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return todo;
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
  });

  return (
    <>
      <div
        className={`${
          isDarkMode ? "todo-header todo-header-dark-mode" : "todo-header"
        } `}
      >
        <div className="todo-header-content">
          <h1>Todo</h1>
          <button
            className={`${
              isDarkMode ? "btn-mode btn-sun" : "btn-mode btn-moon"
            } `}
            onClick={toggleDarkModo}
          ></button>
        </div>
      </div>
      <div className="todo-container">
        <TodoAdd
          className={`${isDarkMode ? "form form-dark-mode" : "form"}`}
          classNameInput={`${isDarkMode ? "input input-dark-mode" : "input"}`}
          onNewTodo={handleNewTodo}
        />

        <TodoList
          className={`${
            isDarkMode ? "todo-list todo-list-dark-mode" : "todo-list"
          }`}
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          filteredTodos={filteredTodos}
          clearCompletedTodos={handleRemoveCompleted}
        />
        <TodoFooter
          className={`${
            isDarkMode ? "todo-footer todo-footer-dark-mode" : "todo-footer"
          }`}
          allTodos={() => setFilter("all")}
          activeTodos={() => setFilter("active")}
          completedTodos={() => setFilter("completed")}
          filter={filter}
        />

        <div className="todo-dragAndDrop">Drag and drop to reorder list</div>
      </div>
    </>
  );
};

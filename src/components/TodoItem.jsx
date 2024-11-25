export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li>
      <div className="todo-item-completed">
        {/* Toggle task */}
        <button
          onClick={() => onToggleTodo(todo.id)}
          className={`${
            !todo.done ? "toggle-btn" : "toggle-btn toggle-btn-completed"
          }`}
        ></button>

        {/* Description task: input value*/}
        <span className={`${!todo.done ? "" : "completed"}`}>
          {todo.description}
        </span>
      </div>

      {/*  remove TASK */}
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="delete-btn"
      ></button>
    </li>
  );
};

import { TodoItem } from "./TodoItem";
export const TodoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
  filteredTodos,
  className,
  clearCompletedTodos,
}) => {
  return (
    <ul className={className}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
      <li>
        <span>{todos.length} items left</span>
        <button className="cta-clear-completed" onClick={clearCompletedTodos}>
          Clear Completed
        </button>
      </li>
    </ul>
  );
};

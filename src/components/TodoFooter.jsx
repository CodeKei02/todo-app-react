export const TodoFooter = ({ className, filter, allTodos, activeTodos, completedTodos }) => {

  return (
    <div className={className}>
      <a href="#all"
        onClick={allTodos}
        className={filter === 'all' ? 'filter-todo' : ''}
      >
        All</a>
      
      <a href="#active" 
        onClick={activeTodos}
        className={filter === 'active' ? 'filter-todo' : ''}
      >Active</a>
      
      <a href="#completed"
        onClick={completedTodos}
        className={filter === 'completed' ? 'filter-todo' : ''}
      >Completed</a>
    </div>
  );
};

import { useForm } from "../hooks/useForm";
import { useTodoCounter } from "../hooks/useTodoCounter";

export const TodoAdd = ({onNewTodo, className, classNameInput}) => {
  
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const {todoCounter, increment} = useTodoCounter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim().length <= 1) return;


    const newTodo = {
      id: todoCounter,
      done: false,
      description
    }

    onNewTodo(newTodo);
    increment();
    onResetForm();
  }
  
  
  return (
    <form 
      className={className}
      onSubmit={handleSubmit}
      >
        <button
          type="submit"
        ></button>
        <input 
            className={classNameInput}
            type="text" 
            placeholder="Create a new todo..."
            name="description"
            value={description}
            onChange={onInputChange}
        />
    </form>
  )
}

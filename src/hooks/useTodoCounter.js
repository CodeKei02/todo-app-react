import { useState } from "react"

export const useTodoCounter = (initialValue = 0) => {
  const [todoCounter, setTodoCounter] = useState(initialValue)
  
  const increment = () => {
    setTodoCounter(todoCounter + 1);
  }

  return {todoCounter, increment}
}

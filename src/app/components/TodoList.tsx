import React from "react";
import { Todo } from "../types";
import { TodoLi } from "./Todo";

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoLi key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;
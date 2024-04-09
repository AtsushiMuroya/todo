import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3001/tasks", { cache: "no-store" });
  const todos = res.json();

  return todos;
}

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  });
  const newTodos = res.json();

  return newTodos;
}

export const editTodo = async (id: string, newText: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: newText })
  });
  const updateTodos = res.json();

  return updateTodos;
}

export const deleteTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const deketeTodos = res.json();

  return deketeTodos;
}
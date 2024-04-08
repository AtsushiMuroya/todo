// クライアント側でログが見たい場合にはクライアントを指定すれば良い
// "use client"


import Image from "next/image";
import TodoList from "./components/TodoList";
import AppTask from "./components/AppTask";
import { getAllTodos } from "./api";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700">NextJs 13 Todo App</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AppTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}

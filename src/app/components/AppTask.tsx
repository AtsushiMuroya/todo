"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../types";
import { addTodo } from "../api";
import { v4 as uuidv4 } from "uuid"

const AppTask = () => {
  const [taskTitle, setTaskTitle] = useState("")
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodo({ id: uuidv4(), text: taskTitle });
    setTaskTitle("");
  }
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input type="text" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)} value={taskTitle}></input>
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">AddTask</button>
    </form>
  )
}

export default AppTask;
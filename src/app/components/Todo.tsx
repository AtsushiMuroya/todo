import { Button } from "@/stories/Button"
import { Todo } from "../types"

interface TodoProps {
  todo: Todo
}

export const TodoLi = ({ todo }: TodoProps) => {
  return (
    <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      <span>{todo.text}</span>
      <div>
        <button className="text-green-500 mr-3">edit</button>
        <button className="text-red-500">delete</button>
        <Button variant="destructive" label="Destructive" size="default"></Button>
      </div>
    </li>
  )
}
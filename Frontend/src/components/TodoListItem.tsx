import type { Todo } from "./types/todo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const TodoListItem = ({
  todo,
  updateTodo,
  deleteTodo,
}: {
  todo: Todo;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  const [title, setTitle] = useState(todo.title);
  return (
    <div>
      <div className="flex gap-2">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button onClick={() => updateTodo(todo.id, title)}>Edit</Button>
        <Button onClick={() => deleteTodo(todo.id)}>Done</Button>
      </div>
    </div>
  );
};

export default TodoListItem;

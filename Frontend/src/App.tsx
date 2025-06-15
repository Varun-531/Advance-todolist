import type { Todo } from "./components/types/todo";
import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import TodoListItem from "./components/TodoListItem";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const addTodo = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), title, completed: false }]);
    setTitle("");
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, title };
        return todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: true };
        return todo;
      })
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Todo List</h1>
        <div className="w-[300px] flex gap-2">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Button onClick={() => addTodo(title)}>Add</Button>
        </div>
        {todos.map((todo, key) => {
          return (
            <TodoListItem
              key={key}
              todo={todo}
              updateTodo={updateTodo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

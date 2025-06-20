import type { Todo } from "./components/types/todo";
import { useEffect, useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import TodoListItem from "./components/TodoListItem";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    AllTodos();
  }, []);

  const AllTodos = async () => {
    const response = await axios.get("http://localhost:3000/todos");
    console.log(response.data);
    setTodos(response.data);
  };

  const addTodo = async (title: string) => {
    try {
      const response = await axios.post("http://localhost:3000/todo", {
        title,
      });
      console.log(response.data);
      setTodos(response.data);
      setTitle("");
    } catch (e) {
      console.log("error", e);
    }
  };

  const updateTodo = async (id: string, title: string) => {
    try {
      const response = await axios.put(`http://localhost:3000/todo/${id}`, {
        title,
      });
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/todo/${id}`);
      setTodos(response.data);
      console.log(response.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Todo List</h1>
        <div className="w-[300px] flex gap-2">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Button onClick={() => addTodo(title)}>Add</Button>
        </div>
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

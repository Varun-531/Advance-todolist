const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/add-todo", (req, res) => {
  const { title } = req.body;
  const id = crypto.randomUUID();
  const completed = false;
  const newTodo = { id, title, completed };
  todos.push(newTodo);
  res.json(todos);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);
  res.json(todos);
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
  res.json(todos);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

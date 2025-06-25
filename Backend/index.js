const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World123");
});

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todo", (req, res) => {
  const id = crypto.randomUUID();
  const title = req.body.title;
  const completed = false;

  const todo = { id, title, completed };
  todos.push(todo);
  res.json(todos);
});

app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);
  res.json(todos);
});

app.put("/todo/:id", (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return res.status(404).json("No record found");
  todo.title = title;
  res.json(todos);
});

app.listen(3000, () => {
  console.log("app running at 3000");
});

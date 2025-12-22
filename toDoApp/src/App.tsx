import { useEffect, useState } from "react";
import { ToDoProvider } from "./context";
import { type Todo } from "./context/ToDoContext";
import { TodoForm, TodoItem } from "./components";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDo = (todo: string) => {
    setTodos([{ id: Date.now(), todo, completed: false }, ...todos]);
  }

  const updateToDo = (id: number, todo: string) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? { ...prevToDo, todo: todo } : prevToDo)));
  }

  const deleteToDo = (id: number) => {
    setTodos((prev) => prev.filter((prevToDo) => prevToDo.id !== id));
  }

  const toggleComplete = (id: number) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? { ...prevToDo, completed: !prevToDo.completed } : prevToDo)));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <ToDoProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} key={todo.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ToDoProvider>
    </>
  )
}

export default App

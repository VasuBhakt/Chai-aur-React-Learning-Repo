import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">MyTodo App</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App

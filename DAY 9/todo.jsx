//works in day 8 src folder. created here for daily task tracker.
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((t,i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
export default App;
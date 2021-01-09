import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo.js';
import db from './firebase.js';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc)=> doc.data().title))
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // setTodos([...todos, input])
    db.collection('todos').add({
      'title':input,
      'description': ""
    })
    setInput("")
  }

  return (
    <div className="App">
        <h1>Todo list</h1>
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)} />
          <button type="submit" disabled={!input} onClick={handleSubmit} >Add</button>
        </form>
        {todos.map((item, i) => <Todo key={i} title={item}/>)}
    </div>
  );
}

export default App;

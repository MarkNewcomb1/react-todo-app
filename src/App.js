import React, { useState } from 'react'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Laundry',
        completed: false
      }
    ])
  
  // Toggle Complete
  const markComplete = (id) => {
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }))
  }

  const delTodo = (id) => {
      setTodos([...todos.filter(todo => todo.id !== id)])
}

  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
      setTodos([...todos, newTodo])
  }

    return (
      <div className="App">
          <div className="container">
            <Header />
            <AddTodo 
            addTodo={addTodo}
            />
            <Todos 
            todos={todos} 
            markComplete={markComplete}
            delTodo={delTodo}
            />
        </div>
      </div>
    )
}

export default App;

import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'dfiljlsjd',
        day: '2402-34',
        reminder: true
    },
    {
        id: 2,
        text: 'dfiljkfgjllsjd',
        day: '2402-34',
        reminder: true
    },
    {
        id: 3,
        text: 'dfiljlsjd',
        day: '2402-34',
        reminder: true
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id
    ))
  }

  // Toggle reminder
  const togglereminder = (id) => {
    setTasks(
      tasks.map(
        (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      {/* <Header title={1} /> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? <Tasks tasks={ tasks } onDelete={ deleteTask } onDoubleClick= { togglereminder } /> : "No tasks to show."}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>
//   }
// }

export default App;

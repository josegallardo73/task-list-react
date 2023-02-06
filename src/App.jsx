import { useState } from 'react'
import   { TodoList } from './components/TodoList/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import data from './data/data.json';
import s from './styles.module.css';

function App() {
  
  const [tasks, setTasks] = useState(data);

  const onComplete = (id) => {
    
    const completed = tasks.map((task) => {
      return task.id === Number(id) ? {...task, completed: !task.completed} : {...task};
    })
    setTasks(completed);
  }

  const onDelete = (id) => {
    const deleted = tasks.filter((task) => {
      return task.id !== Number(id);
    })
    setTasks(deleted);
  }

  const onCreate = (textTask) => {
    let newTask = {
      id: +new Date(),
      task: textTask,
      completed: false,
    } 
    setTasks([...tasks, newTask]);
  }

  return (
    <div className={ s.container }>
      <TodoForm onCreate = {onCreate}/>
      <TodoList tasks={tasks} onComplete = {onComplete} onDelete = {onDelete}/>
    </div>
  )
}

export default App

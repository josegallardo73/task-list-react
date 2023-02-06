import React from 'react'
import s from './styles.module.css';

const TodoItem = ({task, onComplete, onDelete}) => {

  const getStyle = () => {
      return {
        textDecoration: task.completed ? 'line-through' : 'none',
        margin: '20px',
        border: '1px solid #ffffff',
        backgroundColor: '#CCF7E3',
      }
  }

  return (
    <div style = {getStyle()}>
      <input type='checkbox' checked = {task.completed} onChange = {() => onComplete(task.id)}/>
      {task.task}
      <button className={s.addBtn} onClick = {() => onDelete(task.id)}>X</button>
    </div>
  )
}

export { TodoItem }

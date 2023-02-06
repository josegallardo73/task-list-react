import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem';

function TodoList({tasks, onComplete, onDelete}) {
  
  return (
    <div>
        {
            tasks.map((task, index) => (
                <TodoItem key = {`todo-${index}`} task = {task} onComplete = {onComplete} onDelete = {onDelete}/>
            ))
        }
    </div>
  )
}

export { TodoList };

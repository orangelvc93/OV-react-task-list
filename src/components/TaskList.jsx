import React from 'react'
import { Task } from './Task'

export const TaskList = ({tasks, handleDeleteTask, handleCompleteTask, handleUpdateTask}) => {
  return (
    <ul>
        {tasks.map(task =>(
            < Task
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleUpdateTask={handleUpdateTask}
        />
        ))}
        
    </ul>
  )
}

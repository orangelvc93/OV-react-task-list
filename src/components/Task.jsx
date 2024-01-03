import React from 'react';
import { FaTrash } from "react-icons/fa";
import { TaskUpdate } from './TaskUpdate';

export const Task = ({
        key,
        task,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask,
    }) => {
  return (
    <li>
        <span onClick={() => handleCompleteTask(task.id)}>
            <label className={`container_done ${task.done ? 'active' : ''}`}></label>
        </span>
        <TaskUpdate task={task} handleUpdateTask={handleUpdateTask}/>
        <button className='btn_delete' onClick={() => handleDeleteTask(task.id)}>
            <FaTrash/>
        </button>
    </li>
      
  )
}

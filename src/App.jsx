import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TaskAdd } from './components/TaskAdd'
import { TaskList } from './components/TaskList'
import { taskUse } from './hooks/taskUse'

function App() {
  const {
        tasks,
        taskCount,
        tasksPending,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask,
  } = taskUse();

  return (
    <>

    <div className="card_task">
      <Header 
        taskCount={taskCount} 
        tasksPending={tasksPending} 
      /> 

      <div className='add_task'>
        <h3>Agregar Tarea</h3>
        <TaskAdd handleNewTask={handleNewTask}/>
      </div>

      <TaskList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
        handleUpdateTask={handleUpdateTask}
      />
    </div>


    </>
  )
}

export default App

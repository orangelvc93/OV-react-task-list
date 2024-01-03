import React from 'react'


export const Header = ({taskCount, tasksPending}) => {
    
  return (
    <>
        <h1>Lista de tareas</h1>
        <div className='counter_tasks'>
          <h3>N° Tareas: {taskCount}</h3>
          <h3>Pendientes: {tasksPending}</h3>
        </div>
    
    </>
    
  )
}

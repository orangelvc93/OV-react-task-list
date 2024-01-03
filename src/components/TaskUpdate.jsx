import React, { useRef, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { taskForm } from '../hooks/taskForm';

export const TaskUpdate = ({task, handleUpdateTask}) => {

    const {updateDescription, onInputChange} = taskForm({
        updateDescription: task.description,
    }) 

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = task.id;
        const description = task.description;

        handleUpdateTask(id, description )

        setDisabled(!disabled)
        focusInputRef.current.focus()
    }
    
  return (
    <form onSubmit={onSubmitUpdate}>
        <input
            type="text" 
             className={`input_update ${task?.done ? 'text_decoration_dashed' : ""}`}  
            name='updateDescription' 
            value={updateDescription}
            onChange={onInputChange}
            placeholder='¿Que hay que hacer?'
            readOnly={disabled}
            ref={focusInputRef}
        />

        <button className='btn_edit' type='submit'>
            <FaEdit/>
        </button>
    </form>
  )
}

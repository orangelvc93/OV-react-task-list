import React from 'react'
import { taskForm } from '../hooks/useForm';

export const TaskAdd = ({handleNewTask}) => {

    const {description, onInputChange, onResetForm} = taskForm({
        description: '',
    })

    const onFormSubmit = e =>{
        e.preventDefault();
        if (description.length <= 1) return;
        
        let newTask = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        handleNewTask(newTask);
        onResetForm();
    }
  return (
    <form className='form_add_task' onSubmit={onFormSubmit}>
        <input
            type="text" 
            className='input_add' 
            name={'description' }
            value={description}
            onChange={onInputChange}
            placeholder='¿Que hay que hacer?'
        />

        <button className='btn_add' type='submit'>
            Agregar
        </button>
    </form>
  )
}

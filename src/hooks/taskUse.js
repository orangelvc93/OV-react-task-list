import { useEffect, useReducer } from "react";
import { taskReducer } from "../taskReducer";

export const taskUse = () => {
    const initialState = [];

    //Convertimos los elementos JSON del localStorage en código
    const init = () => {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    const [tasks, dispatch] = useReducer(taskReducer, initialState, init) //Ruta, Estado inicial, Configuramos local Storage

    //Contador de tareas
    const taskCount = tasks.length;
    //Contador de tareas pendientes
    const tasksPending = tasks.filter(task => !task.done).length;


    //Guardar en local Storage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    // Seleccionamos las opciones a realizar
    const handleNewTask = task => {
        const action = {
            type: "Add Task",
            payload: task,
        }
        dispatch(action)
    }

    const handleDeleteTask = id => {
        const action = {
            type: "Delete Task",
            payload: id,
        }
        dispatch(action);
    };

    const handleCompleteTask = id => {
        const action = {
            type: "Complete Task",
            payload: id,
        }
        dispatch(action);
    }

    const handleUpdateTask = (id, description) => {
        const action = {
            type: "Update Task",
            payload: { id, description }
        }
        dispatch(action)
    }

    return {
        tasks,
        taskCount,
        tasksPending,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask,
    }

}
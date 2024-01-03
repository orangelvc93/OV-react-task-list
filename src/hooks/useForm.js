import { useState } from "react";

export const taskForm = (initalForm = {}) => {
    const [formState, setFormState] = useState(initalForm);

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initalForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}
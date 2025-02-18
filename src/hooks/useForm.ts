import {ChangeEvent, useState} from 'react'


export const useForm = <T>(initialState: T ) => {

    const [form, setForm] =  useState(initialState)
    const reset = () => {
        setForm(initialState)
    }
    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target
        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        reset,
        handleInputChange,
        form,
    }

}
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerName } from '../../store/slices/trainerName.slice'

const FormNameUser = () => {

const { trainerName } = useSelector(state => state)

const inputName = useRef()

const dispatch = useDispatch()

    const submit = e =>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
    }

return (
    <form onSubmit={submit}>
    <input ref={inputName} type='text'/>
    <button>Star</button>
    </form>
  )
}

export default FormNameUser
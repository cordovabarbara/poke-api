import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'

const FormNameUser = () => {

const { trainerName } = useSelector(state => state)

const inputName = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()

    const submit = e =>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

return (
    <form onSubmit={submit}>
    <input ref={inputName} type='text'/>
    <button>Start</button>
    </form>
  )
}

export default FormNameUser
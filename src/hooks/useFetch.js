import axios from "axios"
import { useState } from "react"


const useFetch = url => {

    const[state, setState] = useState()

    const getData = () => {
        axios.get(url)
        .then(res => setState(res.data))
        .catch(error =>console.log(error))

    }

    return [state, getData]
}
export default useFetch
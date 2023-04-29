
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'

function App() {


  return (
      <div className='app'> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route>
          <Route path='/pokedex' element={<Pokedex/>} />
        </Route>
      </Routes>
      </div>
  )
}

export default App

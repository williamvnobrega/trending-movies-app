
import useAxios from 'axios-hooks'
import './App.css'
import Home from '../src/pages/home/Home'
import Conta from './pages/conta/Conta'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalhes from './pages/detalhes/Detalhes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Conta/>}/>
          <Route path='/movie/:id' element={<Detalhes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

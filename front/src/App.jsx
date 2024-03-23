import { useState } from 'react'
// import './App.css'
import { Home } from './views/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MisTurnos } from './views/MisTurnos'
import { TodosTurnos } from './views/TodosTurnos'
import { LoginRegister } from './views/Login_Register'
import { RegisterTest } from './components/Register_test'
import { Route, Routes } from 'react-router-dom'
import { DetailsTurno } from './views/DetailsTurno'
import { NewAppointment } from './views/NewAppointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RegisterTest/> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/misturnos' element={<MisTurnos/>} />
        <Route path='/nuevoturno' element={<NewAppointment/>} />
        <Route path='/turnos' element={<TodosTurnos/>} />
        <Route path='/login' element={<LoginRegister/>} />
        <Route path='/turno/:id' element={<DetailsTurno/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

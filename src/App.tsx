
import { useState } from 'react'
import './App.css'
import Listmilitarymissions from './componnens/listmilitarymissions'
import Form from './componnens/form'

function App() {
  const [listmilitarymissions,setListmilitarymissions] = useState("")

  return (
    <div className='app'>
      <h1>military missions</h1>
      <Form/>
      <div className='lebel'> missions</div>
      <Listmilitarymissions/>
    </div>
  )
}

export default App

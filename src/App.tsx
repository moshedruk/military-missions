
import { useEffect, useState } from 'react'
import './App.css'
import Listmilitarymissions from './componnens/listmilitarymissions'
import Form from './componnens/form'
import { IMissions } from './interface/mission'

function App() {
  const [listmilitarymissions,setListmilitarymissions] = useState<IMissions[]>([])
  const [prosess,setProsess] = useState("")
  const getAllMission = async() => {    
    const response =await fetch(`https://reactexambackend.onrender.com/missions/8438746`)
    const data = await response.json()    
    setListmilitarymissions(data)
    console.log(listmilitarymissions)
  }
  useEffect(() => {    
    getAllMission()
    console.log("dddddddd")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prosess])

  return (
    <div className='app'>
      <h1>military missions</h1>
      <Form setProsess = {setProsess}/>
      <div className='lebel'> missions</div>
      <Listmilitarymissions setProsess ={setProsess} listmilitarymissions = {listmilitarymissions}/>
    </div>
  )
}

export default App

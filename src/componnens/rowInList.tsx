import React, { useState } from 'react'
import '../css/card.css'
import { IMissionscard } from '../interface/mission'
export default function RowInList({setProsess, mission }: IMissionscard) {
  //const arrColor = ["red", "green", "yellow"]
  const [color,setColor] = useState("red")
  const [complite,setComplite] = useState("red")
  const myStyle = {    
    backgroundColor: color}
  const delete_ = async (id: string) => {  
    console.log(id + " missionnnnnnnnnnnnn")  
    setProsess( prosess => prosess + 1)
    
    const response = await fetch(`https://reactexambackend.onrender.com/missions/8438746/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      alert('Mission deleted successfully')
      setProsess( prosess => prosess + 1)
    } else {
      alert('Error deleting mission')
    }
  }
  const edit_ = async (id: string) => {
    try {
      const response = await fetch(`https://reactexambackend.onrender.com/missions/8438746/progress/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        alert('Mission updated successfully')
        setColor((color) => {
          if (color === "green") {
            
            return "null";}
          if (color === "red") return "brown";
          if (color === "brown"){
            setComplite("")
            return "green";
          } ;
          return "null"; 
        });
        console.log(id + " mission")
        setProsess(prosess => prosess+ 1)
      } else {
        alert('Error updating mission')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error updating mission')
    }
  }
  return (
    <div className='mission-card' style={myStyle}>
      <div className='card'>
        <h4>Name: {mission.name}</h4>
        <p>status: {mission.status}</p>
        <p>priority: ({mission.priority})</p>
        <p>description: {mission.description}</p>
      </div>
      <div className='btnes'>
        <button onClick={() => delete_(mission._id)}>Delete</button>
        {complite &&  <button onClick={() => {edit_(mission._id)}}>prosess</button>}                
      </div>
      </div>

  )
}

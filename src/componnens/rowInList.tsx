import React, { useState } from 'react'
import '../css/card.css'
import { IMissionscard } from '../interface/mission'
export default function RowInList({setProsess, mission }: IMissionscard) {
  //const arrColor = ["red", "green", "yellow"]
  const [color,setColor] = useState("red")
  const myStyle = {    
    backgroundColor: color}
  const delete_ = async (id: string) => {    
    setProsess("prosess" + {id})
    const response = await fetch(`https://reactexambackend.onrender.com/missions/8438746/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      alert('Mission deleted successfully')
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
        setColor("green " + {id})
        setProsess("prosess" + {id})
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
        <button onClick={() => {edit_(mission._id)}}>prosess</button>
      </div>
      </div>

  )
}

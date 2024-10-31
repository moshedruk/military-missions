import React from 'react'
import '../css/Listmilitarymissions.css'
import { IMissionsList } from '../interface/mission'
import RowInList from './rowInList'
export default function Listmilitarymissions({setProsess, listmilitarymissions }: IMissionsList) {
  
  return (
    <div className='main-list'>      
        {listmilitarymissions.map((mission) => (          
            <RowInList setProsess = {setProsess} mission = {mission}/>      
        ))}

    </div>
  )
}

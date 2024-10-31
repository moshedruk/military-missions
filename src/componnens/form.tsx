import React, { useRef, useState } from 'react'
import '../css/form.css'
import { Estatus } from '../enum/stutus'
import { Epriority } from '../enum/priority'
export default function Form() {
    const [valuestatus, setValuestatus] = useState("");
    const [valuepriority, setValuepriority] = useState("");

    const handleChangestatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValuestatus(e.target.value);
    };
    const handleChangedepriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValuepriority(e.target.value);
        console.log(valuepriority)
    };
    const nameInput = useRef<HTMLInputElement | null>(null)
    const descriptionInput = useRef(null)
    const postNewMission = async () => {
        const res = await fetch(`https://reactexambackend.onrender.com/missions/8438746`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameInput,
                status:valuestatus,
                priority: valuepriority,
                description: descriptionInput,
            }),
        })
        const mission = await res.json()
        console.log('New mission added:', mission)
    }
    return (
        <div className='main-form'>
            <div className='div-form'>
                <input type='text' ref={nameInput} placeholder='Enter your name' />
                <select name="cars" id="cars" onChange={handleChangestatus} >
                    <option value={Estatus.Pending}>{Estatus.Pending}</option>
                    <option value={Estatus.InProgress}>{Estatus.InProgress}</option>
                    <option value={Estatus.Completed}>{Estatus.Completed}</option>
                </select>
                <select name="cars" id="cars" onChange={handleChangedepriority}>
                    <option value={Epriority.higt}>{Epriority.higt}</option>
                    <option value={Epriority.low}>{Epriority.low}</option>
                </select>
                <input type='text' ref={descriptionInput} placeholder='Enter your descrption' />
            </div>
            <button className='btn-add' onClick={() =postNewMission}>Add-mission</button>
        </div>
    )
}

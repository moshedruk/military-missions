import React, { useRef, useState } from 'react'
import '../css/form.css'
import { Estatus } from '../enum/stutus'
import { Epriority } from '../enum/priority'
import { Iform } from '../interface/mission';
export default function Form({setProsess}:Iform) {
    const [valuestatus, setValuestatus] = useState("");
    const [valuepriority, setValuepriority] = useState("");

    const handleChangestatus = async(e: React.ChangeEvent<HTMLSelectElement>) => {
        await setValuestatus(e.target.value);
        console.log(valuestatus)
    };
    const handleChangedepriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValuepriority(e.target.value);
        console.log(valuepriority)
    };
    const nameInput = useRef<HTMLInputElement>(null)
    const descriptionInput = useRef<HTMLInputElement>(null)
    const postNewMission = async () => {
        try {
            const res = await fetch(`https://reactexambackend.onrender.com/missions/8438746`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameInput.current?.value,
                    status: valuestatus,
                    priority: valuepriority,
                    description: descriptionInput.current?.value
                }),
            })
            console.log("jhjhjhjhhj")
            setProsess( prosess => prosess+ 1)
            if (!res.ok) {
                console.log(`HTTP error: ${res}`, await res.json())

                throw new Error(`HTTP error! status: ${res.status}`)
            }
            const mission = await res.json()
            console.log('New mission added:', mission)
        } catch (error) {
            console.error('Error:', {error})
            alert('Error adding mission')
        }
    }
    return (
        <div className='main-form'>
            <div className='div-form'>
                <input type='text' ref={nameInput} placeholder='Enter your name' />
                <select name="cars" id="cars" onChange={handleChangestatus} >
                <option >-</option>
                    <option value={Estatus.Pending}>{Estatus.Pending}</option>
                    <option value={Estatus.In_Progress}>{Estatus.In_Progress}</option>
                    <option value={Estatus.Completed}>{Estatus.Completed}</option>
                </select>
                <select name="cars" id="cars" onChange={handleChangedepriority}>
                <option >-</option>
                    <option value={Epriority.High}>{Epriority.High}</option>
                    <option value={Epriority.Low}>{Epriority.Low}</option>
                    <option value={Epriority.Medium}>{Epriority.Medium}</option>
                </select>
                <input type='text' ref={descriptionInput} placeholder='Enter your descrption' />
            </div>
            <button className='btn-add' onClick={postNewMission}>Add-mission</button>
        </div>
    )
}

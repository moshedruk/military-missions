import React from 'react'
import '../css/form.css'
export default function Form() {
    return (
        <div className='main-form'>
            <div className='div-form'>
                <input type='text' placeholder='Enter your name' />
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <input type='text' placeholder='Enter your name' />
            </div>
                <button className='btn-add'>Add-mission</button>
        </div>
    )
}

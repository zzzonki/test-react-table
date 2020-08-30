import React from 'react'
import './style.css'

export default function RowInfo({rowToSee}){
    return(
    <div id="rowInfo">
        <div className="rowInfo_inside {class}">
        <p>Выбран пользователь: <b>{rowToSee.firstName + " " + rowToSee.lastName}</b></p>
        <p>Описание:</p>
        <textarea>
        {rowToSee.description}
        </textarea>
        <p>Адрес проживания: <b>{rowToSee.address.streetAddress}</b></p>
        <p>Город: <b>{rowToSee.address.city}</b></p>
        <p>Провинция/штат: <b>{rowToSee.address.state}</b></p>
        <p>Индекс: <b>{rowToSee.address.zip}</b></p>
        </div>
    </div>
    )
}
import './tarif.scss';
import React, { useState } from 'react';

function Tarif(props) {
    
    let [isSelected, setisSelected] = useState(false);
    const handleSelected = () => {
        setisSelected(!isSelected);
    }


    return (
        <div className={isSelected ? `tarifContainer + selected` : "tarifContainer"}>
            <div className="tarif_titleContainer"><h1 className="tarif_title">{props.title}</h1></div>
            <div className="tarifPrice"><span>руб {props.price} /мес</span></div>
            <div className="tarifSpeed"><p> до {props.speed} Мбит/сек</p></div>
            <div className="tarifTraffic"><p>{props.traffic}</p></div>
            <div><button className="tarif_button" onClick={handleSelected}>Выбрать</button></div>

        </div>
    );
}

export default Tarif;
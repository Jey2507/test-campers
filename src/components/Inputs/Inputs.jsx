import { useState } from 'react';
import { icons as sprite } from '../../assets/index.js';
import css from "../Inputs/Inputs.module.css"

export default function Inputs({data}) {
    const {type, value, svg, text} = data;
    const [inputValue, setInputValue] = useState(value);
    
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <label>
                <input className={css.input} type={type} value={inputValue} onChange={handleChange} name={data.name}/>
                <div className={css.inputBox}>
                    <div className={css.inputDiv}>
                        <svg className={css.icons}>
                            <use xlinkHref={`${sprite}#${svg}`} />
                        </svg>
                        <p className={css.inputsText}>{text}</p>
                    </div>
                </div>
            </label>
        </>
    )
}
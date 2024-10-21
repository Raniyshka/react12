import s from '../Accordeon.module.css'
import { useState } from 'react';

export function AccordeonItem({title,content}){
    const [isActive, setIsActive] = useState(false);
    return(
        <div className={s.item}>
            <div onClick={()=>setIsActive(!isActive)} className={s.title}>
                <p>{title}</p>
                <div className={s.arrow}>
                    {
                        isActive ? '-' : '+'
                    }
                </div>
            </div>
            {
                isActive &&
                <div className={s.text}>
                    {content}
                </div>
            }
        </div>
    )
}
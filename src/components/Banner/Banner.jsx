import { Header } from '../Header/Header'
import s from './Banner.module.css'

export function Banner(){
    return(
        <div className={s.banner}>
            <div className="container">
                <Header/>
                <div className={s.about}>О компании <span>АвтоТорг</span></div>
            </div>
            
        </div>
    )
}
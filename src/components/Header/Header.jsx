import { NavLink } from "react-router-dom"
import s from './Header.module.css'

export function Header(){
    return(
        <header className={s.header}>
                <div className={s.header__inner}>
                    <nav className={s.nav}>
                        <NavLink className={s.active} to="/">О нас</NavLink>
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/users">Пользователи</NavLink>
                        <NavLink to="/location">Где нас найти</NavLink>
                    </nav>
                    <div className={s.logo}></div>

                    <div className={s.buttons}>
                        <a className="reg-btn" href="#">Регистрация</a>
                        <button className="vhod-btn">Вход</button>
                    </div>
            </div>
        </header>
    )
}


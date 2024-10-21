import s from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'

export function Accordeon(){
    return(
        <div className={s.accordeon}>
            <AccordeonItem title='Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина' content='1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
            <AccordeonItem title='product 2' content='2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '/>
            <AccordeonItem title='product 3' content='3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '/>
            <AccordeonItem title='product 4' content='wjherb aeedfj siru'/>
        </div>
    )
}
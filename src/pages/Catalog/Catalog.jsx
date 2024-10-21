import { Card } from '../../components/Card/Card'
import s from './Catalog.module.css'
import { products } from '../../data/data'
import { NavLink } from 'react-router-dom'
import { Search } from '../../components/Search/Search'
import { useState } from 'react'
export function Catalog(){
    const [query, setQuery] = useState('')
    function handleChange(e){
        setQuery(e.target.value)
    }
    const filteredProducts = products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    return(
        <section>
            <div className={s.catalog}>
                <h1>Каталог товаров</h1>
                <div className={s.categories}>
                    <h3>Категории:</h3>
                    <nav>
                        <NavLink className={s.active} to="#">Все товары</NavLink>
                        <NavLink to="#">Шины/колеса</NavLink>
                        <NavLink to="#">Масла</NavLink>
                       <NavLink to="#">Ароматизаторы</NavLink>
                     </nav>
                </div>
                <Search handleChange={handleChange}/>
                <div className={s.cards}>
                    {
                        filteredProducts.length ?
                        filteredProducts.map((product)=>{
                        return(
                            <Card {...product}/>
                        )
                    })
                    :
                    <p className={s.error}>Ничего не найдено по запросу "{query}"</p>
                    }
                    
                </div>
                <div className={s.more}>
                  <a href="#">Загрузить еще товары</a>
                </div>
            </div>
        </section>
    )
}
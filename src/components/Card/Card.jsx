import { useState } from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'
import { OrderModal } from '../OrderModal/OrderModal';

export function Card({id, image='https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7029624787.jpg', name='Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина', price='335', count='2'}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal(){
        setModalIsOpen(true);
    }
    return(
        <>
            <div className={s.card}>
                <div className={s.cardImg}>
                   <img src={image} alt="" />
                </div>
                <h3>{name}</h3>
                <div className={s.cardBottom}>
                  <div className={s.price}>{price} ₽</div>
                  {
                    count>0 ?
                    // <a href="#">Добавить в корзину</a>
                    <Link className={s.btn} to={`${id}`}>Добавить в корзину</Link>
                    :
                    <button onClick={showModal} className={s.btn}>Заказать</button>
                  }
                  
                </div>
             </div>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </>
    )
}
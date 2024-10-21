import { useParams } from 'react-router-dom'
import s from './Product.module.css'
import { products } from '../../data/data';
import {Header} from '../../components/Header/Header'

export function Product(){
    const {id} = useParams();
    const product = products.find(product=>product.id == id);
    return(
        <section className='container'>
            <Header/>
            <div className={s.toGlav}>
                <a href="/"> ↞   На главную</a>
            </div>
            <div className={s.product}>
            <div className={s.productImg}>
                <img src={product.image} alt="" />
            </div>
            <div className={s.productAbout}>
                <h1 className={s.productName}>
                    {product.name}
                </h1>
                <h3 className={s.productDesc}>
                    {product.desc}
                </h3>
                <div className={s.cardBottom}>
                    <h1 className={s.productPrice}>
                      {product.price} ₽
                    </h1>
                    <a href="#">Добавить в корзину</a>
                </div>
                
            </div>
            </div>
        </section>
        
    )
}
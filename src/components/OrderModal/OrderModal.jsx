import s from './OrderModal.module.css'
import Modal from 'react-modal'
export function OrderModal({modalIsOpen, setModalIsOpen}){
    function closeModal(){
        setModalIsOpen(false);
    }
    return(
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <h3>Оформление заказа</h3>
                <form action="">
                    <input type="text" name='email' placeholder='введите почту'/>
                    <input type="text" name='tovar' placeholder='введите товар для заказа'/>
                    <input type="submit" value="Отправить" />
                </form>
                <button onClick={closeModal} className={s.btn}>Закрыть</button>
            </Modal>
        </>
    )
}
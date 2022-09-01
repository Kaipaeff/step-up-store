import React from 'react';
import axios from 'axios';

import Info from '../Info';
import {useCart} from '../../hooks/useCart';

import styles from './Drawer.module.scss';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened}) {
  
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart/' + item.id);
        await delay(1000);
      }

    } catch (error) {
      alert('Не удалось создать заказ :(');
    }
    setIsLoading(false);
  };

  return (
    <div className={ `${styles.overlay} ${opened ? styles.overlayVisible : ''}` } >
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className={styles.removeBtnOne} src="/img/icons/remove-btn.svg" alt="Close" />
        </h2>

        {items.length ? (
          <><div className={styles.items}>
            {items.map((el) => (
              <div key={el.id} className={styles.cartItem}>
                <img width={70} height={70} className="mr-20" src={el.imageUrl} alt="Sneakers" />
                <div className="mr-20">
                  <p className="mb-5">{el.name}</p>
                  <b>{el.price} руб.</b>
                </div>
                <img onClick={() => onRemove(el.id)} className={styles.removeBtn} src="/img/icons/remove-btn.svg"
                  alt="Remove" />
              </div>
            ))}
          </div><div className='cartTotalBlock'>
              <ul className={styles.cartTotalBlock}>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
              </ul>

              <button disabled={isLoading} onClick={onClickOrder} className={styles.greenButton}>
                Оформить заказ <img width={13} height={12} src="/img/icons/arrow.svg" alt="Arrow" />
              </button>
            </div></>

        ) : (

          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} принят к обработке`
                : `Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.`
            }
            image={isOrderComplete ? "img/icons/complete-order.jpg" : "img/icons/empty-cart.jpg"}
          />
        )}
      </div>
    </div >
  );
}


export default Drawer;

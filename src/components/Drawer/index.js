import styles from './Drawer.module.scss'

function Drawer({ onClose, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">Корзина
          <img onClick={onClose} className={styles.removeBtn}
            src="/img/icons/remove-btn.svg" alt="Close" /></h2>

        <div className={styles.items}>

          {items.map((el) => (
            <div className={styles.cartItem}>
              <img width={70} height={70} className="mr-20" src={el.imageUrl} alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">{el.name}</p>
                <b>{el.price}</b>
              </div>
              <img className={styles.removeBtn} src="/img/icons/remove-btn.svg" alt="Remove" />
            </div>
          ))}
        </div>

        <ul className={styles.cartTotalBlock}>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 400 руб.</b>
          </li>
        </ul>
        <button className={styles.greenButton}>Оформить заказ <img width={13} height={12} src="/img/icons/arrow.svg" alt="Arrow" /></button>

      </div>
    </div>
  )
}


export default Drawer;

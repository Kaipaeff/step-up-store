import styles from './Drawer.module.scss'

function Drawer() {
  return (
    <div style={{ display: 'none' }} className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">Корзина <img className={styles.removeBtn} src="/img/icons/remove-btn.svg" alt="Remove" /></h2>

        <div className={styles.items}>
          <div className={styles.cartItem}>
            <img width={70} height={70} className="mr-20" src="/img/sneakers/1.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>7 800 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/icons/remove-btn.svg" alt="Remove" />
          </div>

          <div className={styles.cartItem}>
            <img width={70} height={70} className="mr-20" src="/img/sneakers/5.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Max 200</p>
              <b>7 500 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/icons/remove-btn.svg" alt="Remove" />
          </div>

          <div className={styles.cartItem}>
            <img width={70} height={70} className="mr-20" src="/img/sneakers/4.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Женские Кроссовки Nike Air Pro 3000</p>
              <b>6 100 руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/icons/remove-btn.svg" alt="Remove" />
          </div>

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

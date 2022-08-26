import styles from './Header.module.scss'

function Header(props) {
  return (
    <header className="d-flex justify-between	align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="logo" className={styles.logo} />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5" >Магазин фирменных кросовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/icons/cart.svg" alt="card"></img>
          <span>1200 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/icons/user.svg" alt="user"></img>
        </li>
      </ul>

    </header>
  )
}

export default Header;

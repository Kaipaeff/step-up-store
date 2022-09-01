import styles from './Header.module.scss';
import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from '../../hooks/useCart';


function Header(props) {

  const { totalPrice } = useCart();


  return (
    <header className="d-flex justify-between	align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={90} height={90} src="img/myLogo.svg" alt="logo" className={styles.logo} />
          <div>
            <h3>StepUP</h3>
            <p className="opacity-5" >Магазин фирменных кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/icons/cart.svg" alt="Card"></img>
          <span>{totalPrice} руб.</span>
        </li>

        <li className="mr-20 cu-p">
          <Link to="/favourite">
            <img width={18} height={18} src="img/icons/favourite.svg" alt="Favourite"></img>
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/icons/user.svg" alt="User"></img>
          </Link>
        </li>
      </ul>

    </header>
  )
}

export default Header;

import styles from './Card.module.scss'
import React from 'react';

function Card({ name, imageUrl, price, onFavourite, onPlus }) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({name, imageUrl, price})
    setIsAdded(!isAdded)
  }


  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onFavourite}>
        <img src="/img/icons/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center mb-10">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <div>
          <img className={styles.cardBtn}
            onClick={onClickPlus}
            src={isAdded ? "/img/icons/btn-checked.svg" : "/img/icons/cardBtn.svg"}
            alt="card button"></img>
        </div>
      </div>
    </div>
  )
}



export default Card;

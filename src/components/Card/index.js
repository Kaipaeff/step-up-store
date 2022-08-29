import styles from './Card.module.scss'
import React from 'react';

function Card({ id, name, imageUrl, price, onFavourite, onPlus, favourited = false }) {

  const [isAdded, setIsAdded] = React.useState(false);

  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ name, imageUrl, price })
    setIsAdded(!isAdded);
  }

  const onClickFavourite = () => {
    onFavourite({id, name, imageUrl, price})
    setIsFavourite(!isFavourite);
  }


  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickFavourite}>
        <img src={isFavourite ? "/img/icons/liked.svg" : "/img/icons/unliked.svg"} alt="unliked" />
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

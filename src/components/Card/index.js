import styles from './Card.module.scss'


function Card(props) {

  const onClickButton = () => {
    alert('Нажали на кнопку Add')
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/icons/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers"></img>
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center mb-10">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.cardBtn} onClick={onClickButton}>
          <img width={32} height={32} src="/img/icons/cardBtn.svg" alt="card button"></img>
        </button>
      </div>
    </div>
  )
}


export default Card;

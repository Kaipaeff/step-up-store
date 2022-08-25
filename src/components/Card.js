function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/icons/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"></img>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center mb-10">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>7 800 руб.</b>
        </div>
        <button className="cardBtn">
          <img width={32} height={32} src="/img/icons/cardBtn.svg" alt="card button"></img>
        </button>
      </div>
    </div>
  )
}


export default Card;

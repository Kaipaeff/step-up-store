function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn cu-p" src="/img/icons/remove-btn.svg" alt="Remove" /></h2>

          <div className="items">
            <div className="cartItem d-flex align-center">
              <img width={70} height={70} className="mr-20" src="/img/sneakers/1.jpg" alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>7 800 руб.</b>
              </div>
              <img className="removeBtn" src="/img/icons/remove-btn.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center">
              <img width={70} height={70} className="mr-20" src="/img/sneakers/5.jpg" alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Max 200</p>
                <b>7 500 руб.</b>
              </div>
              <img className="removeBtn" src="/img/icons/remove-btn.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center">
              <img width={70} height={70} className="mr-20" src="/img/sneakers/4.jpg" alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">Женские Кроссовки Nike Air Pro 3000</p>
                <b>6 100 руб.</b>
              </div>
              <img className="removeBtn" src="/img/icons/remove-btn.svg" alt="Remove" />
            </div>

          </div>

          <ul className="cartTotalBlock">
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 400 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img width={13} height={12} src="/img/icons/arrow.svg" alt="Arrow" /></button>

        </div>
      </div>


      <header className="d-flex justify-between	align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" className="logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5" >Магазин фирменных кросовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/icons/cart.svg" alt="card"></img>
            <span>1200 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/icons/user.svg" alt="user"></img>
          </li>
        </ul>

      </header>

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex justify-start align-center">
            <img width={20} height={20} src="/img/icons/search.jpg" alt="search icon"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mb-10">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7 400 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={32} height={32} src="/img/icons/cardBtn.svg" alt="card button"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mb-10">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 900 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={32} height={32} src="/img/icons/cardBtn.svg" alt="card button"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mb-10">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>6 100 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={32} height={32} src="/img/icons/cardBtn.svg" alt="card button"></img>
              </button>
            </div>
          </div>
        </div>




      </div>

    </div>
  );
}

export default App;

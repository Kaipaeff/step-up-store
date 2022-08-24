function App() {
  return (
    <div className="wrapper clear">
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
            <img width={18} height={18} src="/img/icons/card.svg" alt="card"></img>
            <span>1200 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/icons/user.svg" alt="user"></img>
          </li>
        </ul>

      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
        <div className="card">
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
              <b>7 800 руб.</b>
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
              <b>7 800 руб.</b>
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
              <b>7 800 руб.</b>
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

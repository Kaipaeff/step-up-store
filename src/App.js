import React from 'react';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6308c6a4722029d9ddd82e8a.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">

      {cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} />}

      <Header onClickCart={() => setCardOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex justify-start align-center">
            <img width={20} height={20} src="/img/icons/search.jpg" alt="search icon"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-between p-20">

          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavourite={() => console.log('добавили закладки')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;


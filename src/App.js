import React from 'react';
import axios from 'axios';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cardOpened, setCardOpened] = React.useState(false);

  // React.useEffect(() => {
  //   fetch('https://6308c6a4722029d9ddd82e8a.mockapi.io/items')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(json => {
  //       setItems(json);
  //     });
  // }, []);

  React.useEffect(() => {

    axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/items').then(res => {
      setItems(res.data);
    })

  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} />}

      <Header onClickCart={() => setCardOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex justify-start align-center">
            <img width={20} height={20} src="/img/icons/search.jpg" alt="search icon"></img>
            {searchValue && <img onClick={() => { setSearchValue('') }} className="clear cu-p" src="/img/icons/clearSearch-btn.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-between p-20">

          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, id) => (
              <Card
                key={id}
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


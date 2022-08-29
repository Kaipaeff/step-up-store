import React from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from './pages/Home';
import Favourite from './pages/Favourite';


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

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
    async function fetchData() {
      const cartRes = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart');
      const favouritesRes = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites');
      const itemsRes = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartRes.data);
      setFavourites(favouritesRes.data);
      setItems(itemsRes.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://6308c6a4722029d9ddd82e8a.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter((el) => Number(el.id) !== Number(obj.id)))
      } else {
        axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    }
    catch (error) {
      alert('Не удалось добавить в корзину')
    }
  };


  const onRemoveItem = (id) => {
    axios.delete(`https://6308c6a4722029d9ddd82e8a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites/${obj.id}`);
        setFavourites(prev => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites', obj);
        setFavourites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper clear">

      {cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCardOpened(true)} />

      <Routes>
        <Route path="/" element={
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavourite={onAddToFavourite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />}
        />
      </Routes>

      <Routes>
        <Route path="/favourite" element={<Favourite items={favourites} onAddToFavourite={onAddToFavourite} />} />
      </Routes>


    </div>
  );
}

export default App;


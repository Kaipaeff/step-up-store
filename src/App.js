import React from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import AppContext from './context';

import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Orders from './pages/Orders';


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
      try {
        const cartRes = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart');
        const favouritesRes = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites');
        const itemsRes = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/items');

        setIsLoading(false);
        setCartItems(cartRes.data);
        setFavourites(favouritesRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        alert('Ошибка запроса данных')
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter((el) => Number(el.parentId) !== Number(obj.id)))
        await axios.delete(`https://6308c6a4722029d9ddd82e8a.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const {data} = await axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item, 
              id: data.id
            }; 
          }
          return item;
         }));
        
      }
    }
    catch (error) {
      alert('Не удалось добавить в корзину')
    }
  };


  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://6308c6a4722029d9ddd82e8a.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Не удалось удалить из корзины')
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        await axios.delete(`https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites/${obj.id}`);
        setFavourites(prev => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites', obj);
        setFavourites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favourites,
        isItemAdded,
        onAddToFavourite,
        onAddToCart,
        setCardOpened,
        setCartItems
      }}>

      <div className="wrapper clear">

        <Drawer
          items={cartItems}
          onClose={() => setCardOpened(false)}
          onRemove={onRemoveItem}
          opened={cardOpened}
        />

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
          <Route path="favourite" element={<Favourite />} />
        </Routes>

        <Routes>
          <Route path="orders" element={<Orders />} />
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;


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
  // eslint-disable-next-line no-unused-vars
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
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
    });

    axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });

    axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites').then(res => {
      setFavourites(res.data);
    });

  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
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
        const {data} = await axios.post('https://6308c6a4722029d9ddd82e8a.mockapi.io/favourites', obj);
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
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavourite={onAddToFavourite}
            onAddToCart={onAddToCart}
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


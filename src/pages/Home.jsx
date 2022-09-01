import React from "react";

import Card from "../components/Card";

function Home({
  items,
  searchValue, 
  setSearchValue, 
  onChangeSearchInput, 
  onAddToFavourite, 
  onAddToCart,
  isLoading
}) {


const renderItems = () => {
  const filteredItems = items.filter((item) => 
  item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    isLoading ? [...Array(8)] : filteredItems).map((item, id) => (
      <Card
        key={id}
        onFavourite={(obj) => onAddToFavourite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ))
}

  return(

      <><div className="d-flex align-center justify-between contentHeader">
      <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
      <div className="search-block d-flex justify-start align-center">
        <img width={20} height={20} src="/img/icons/search.jpg" alt="search icon"></img>
        {searchValue && <img onClick={() => { setSearchValue(''); } } className="clear cu-p" src="/img/icons/clearSearch-btn.svg" alt="Clear" />}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
      </div>
      
    </div><div className="content">




        <div className="d-flex flex-wrap justify-between contentBlock">
          {renderItems()}
        </div>
      </div></>
  )
}

export default Home;

import React from 'react';
import Card from "../components/Card";
import AppContext from '../context';

function Favourite() {

  const {favourites, onAddToFavourite} = React.useContext(AppContext);

  return(
      <><div className="d-flex align-center justify-between contentHeader">
      <h1>Избранное</h1>
    </div>
    
    <div className="content">


        <div className="d-flex flex-wrap justify-between contentBlock">
          {favourites.map((item, id) => (
            <Card
              key={id}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item} />
          ))}
        </div>

      </div></>
  )
}

export default Favourite;

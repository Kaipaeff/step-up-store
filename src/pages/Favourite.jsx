import React from 'react';
import Card from "../components/Card";
import AppContext from '../context';

function Favourite() {

  const {favourites, onAddToFavourite} = React.useContext(AppContext);

  return(
    <div className="content p-40">

      <div className="d-flex align-center mb-40 justify-between">
        <h1>Избранное</h1>
      </div>

      <div className="d-flex flex-wrap justify-between p-20 contentBlock">
      {favourites.map((item, id) => (
            <Card
              key={id}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item}
            />
          ))}
      </div>

    </div>
  )
}

export default Favourite;

import React from 'react';
import axios from 'axios';
import Card from "../components/Card";


function Orders() {

  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://6308c6a4722029d9ddd82e8a.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка запроса заказов');
      }
    })()
  }, []);


  return(
    <div className="content p-40">

      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap justify-between p-20 contentBlock">

      {(isLoading ? [...Array(8)] : orders).map((item, id) => (
            <Card 
              key={id}
              loading={isLoading}
              {...item}
            />
          ))}
      </div>

    </div>
  )
}

export default Orders;

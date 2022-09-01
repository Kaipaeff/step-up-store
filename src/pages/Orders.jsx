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
    <><div className="d-flex align-center justify-between contentHeader">
      <h1>Мои заказы</h1>
    </div>
    
    <div className="content">


        <div className="d-flex flex-wrap justify-between contentBlock">

          {(isLoading ? [...Array(8)] : orders).map((item, id) => (
            <Card
              key={id}
              loading={isLoading}
              {...item} />
          ))}
        </div>

      </div></>
  )
}

export default Orders;

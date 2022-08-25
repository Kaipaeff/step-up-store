import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { name: 'Nike Blazer Mid Suede', price: 9000, imageUrl: '/img/sneakers/1.jpg' },
  { name: 'Nike Air Max 270', price: 8700, imageUrl: '/img/sneakers/2.jpg' },
  { name: 'Nike Blazer Mid Suede', price: 9500, imageUrl: '/img/sneakers/3.jpg' },
  { name: 'Puma X Aka Boku Future Rider', price: 7900, imageUrl: '/img/sneakers/4.jpg' },
]

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex justify-start align-center">
            <img width={20} height={20} src="/img/icons/search.jpg" alt="search icon"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">

          {arr.map((el) => (
            <Card
              name={el.name}
              price={el.price}
              imageUrl={el.imageUrl} />
          ))}


        </div>
      </div>
    </div>
  );
}

export default App;


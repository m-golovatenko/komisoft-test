import Card from '../card';
interface Card {
  name: string;
  price: string;
  img: string;
  id: string;
}
interface CardList {
  products: Array<Card>;
}

function CardList({ products }: CardList) {
  return (
    <ul className="grid grid-cols-4 gap-4 mb-6">
      {products.map(item => (
        <Card title={item.name} price={item.price} img={item.img} key={item.id} />
      ))}
    </ul>
  );
}

export default CardList;

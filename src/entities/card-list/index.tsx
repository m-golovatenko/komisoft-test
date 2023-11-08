import IProduct from 'entities/types/product.interface';
import Card from '../card';

interface CardList {
  products: Array<IProduct>;
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

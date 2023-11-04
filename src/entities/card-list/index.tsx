import Card from '../card';
import Image from './ui/Photo.jpg';

const products = [
  {
    id: 0,
    name: 'Ноутбук Apple MacBook Air 13 M1/8/256 Space Gray',
    price: '98 399 ₽',
    category: 'Ноутбуки',
    img: Image
  },
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 M1/8/256 Silver',
    price: '98 399 ₽',
    category: 'Ноутбуки',
    img: Image
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 M1/8/256 Gold',
    price: '98 399 ₽',
    category: 'Ноутбуки',
    img: Image
  },
  {
    id: 3,
    name: 'Ноутбук Apple MacBook Air 13.6 M2 8/256GB Starlight',
    price: '133 499 ₽',
    category: 'Ноутбуки',
    img: Image
  },

  {
    id: 4,
    name: 'Ноутбук Apple MacBook Pro 14 M2 Pro 10/16 core/16/512 Silver',
    price: '275 690 ₽',
    category: 'Ноутбуки',
    img: Image
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Pro 14 M2 Pro 10/16 core/16/512 Silver',
    price: '275 690 ₽',
    category: 'Ноутбуки',
    img: Image
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Pro 14 M2 Pro 10/16core/16/512 Space Gray',
    price: '275 690 ₽',
    category: 'Ноутбуки',
    img: Image
  },
  {
    id: 7,
    name: 'Apple MacBook Pro 13 M2 8/256GB Space Gray',
    price: '176 590 ₽',
    category: 'Ноутбуки',
    img: Image
  }
];

function CardList() {
  return (
    <ul className="grid grid-cols-4 gap-4 mb-6">
      {products.map(item => (
        <Card title={item.name} price={item.price} img={item.img} key={item.id} />
      ))}
    </ul>
  );
}

export default CardList;

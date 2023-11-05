import { h2Styles } from './ui';

function Card({ title, price, img }: { title: string; price: string; img: string }) {
  return (
    <li className="list-none p-2 bg-light rounded-xl hover:opacity-70 hover:cursor-pointer flex flex-col gap-4 w-64">
      <img src={img} alt={title} className="w-full h-60 object-contain" />
      <div className="flex flex-col px-2 pb-4 gap-3">
        <h2 className="text-base h-12" style={h2Styles}>
          {title}
        </h2>
        <p className="text-xl font-medium">{price} ₽</p>
      </div>
    </li>
  );
}

export default Card;

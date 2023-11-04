import Category from '../category';

const categories = [
  {
    id: 0,
    value: 'Все категории'
  },
  {
    id: 1,
    value: 'Смартфоны'
  },
  {
    id: 2,
    value: 'Ноутбуки'
  },
  {
    id: 3,
    value: 'Телевизоры'
  },
  {
    id: 4,
    value: 'Планшеты'
  }
];

function CategoriesList() {
  return (
    <ul className="flex flex-col gap-2">
      {categories.map(category => (
        <Category key={category.id} title={category.value} />
      ))}
    </ul>
  );
}

export default CategoriesList;

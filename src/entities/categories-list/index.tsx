import useCategoriesStore from '../../shared/storages/categories';
import ICategory from '../types/category.interface';

function CategoriesList() {
  const { categories, setCategory, activeCategoryId } = useCategoriesStore();

  return (
    <ul className="flex flex-col gap-2">
      {/*<li
        className={
          category === 'Все товары'
            ? 'list-none p-3 bg-blue rounded-lg w-48 text-white text-base hover:opacity-70 hover:cursor-pointer'
            : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
        }
        onClick={() => setCategory('Все товары')}
      >
        Все товары
      </li>
      <li
        className={
          category === 'Смартфоны'
            ? 'list-none p-3 bg-blue rounded-lg w-48 text-white text-base hover:opacity-70 hover:cursor-pointer'
            : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
        }
        onClick={() => setCategory('Смартфоны')}
      >
        Смартфоны
      </li>
      <li
        className={
          category === 'Ноутбуки'
            ? 'list-none p-3 bg-blue rounded-lg w-48 text-white text-base hover:opacity-70 hover:cursor-pointer'
            : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
        }
        onClick={() => setCategory('Ноутбуки')}
      >
        Ноутбуки
      </li>
      <li
        className={
          category === 'Телевизоры'
            ? 'list-none p-3 bg-blue rounded-lg w-48 text-white text-base hover:opacity-70 hover:cursor-pointer'
            : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
        }
        onClick={() => setCategory('Телевизоры')}
      >
        Телевизоры
      </li>
      <li
        className={
          category === 'Планшеты'
            ? 'list-none p-3 bg-blue rounded-lg w-48 text-white text-base hover:opacity-70 hover:cursor-pointer'
            : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
        }
        onClick={() => setCategory('Планшеты')}
      >
        Планшеты
      </li>*/}
      {categories.map((category: ICategory) => (
        <li
          key={category.id}
          className={
            activeCategoryId === category.id
              ? 'list-none p-3 bg-blue rounded-lg w-48 text-white text-base hover:opacity-70 hover:cursor-pointer'
              : 'list-none p-3 bg-light rounded-lg w-48 text-base hover:opacity-70 hover:cursor-pointer'
          }
          onClick={() => setCategory(category)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;

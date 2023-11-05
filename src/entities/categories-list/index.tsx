import Category from '../category';
import useCategoriesStore from '../../shared/storages/categories';
import { Dispatch, SetStateAction, useState } from 'react';

function CategoriesList({
  setCurrentItems,
  products
}: {
  setCurrentItems: Dispatch<SetStateAction<any>>;
  products: Array<object>;
}) {
  const categories = useCategoriesStore(store => store.categories);
  const [active, setActive] = useState('1');

  function chooseCategory(category: string, id: string) {
    if (category === 'Все товары') {
      setCurrentItems(products);
      setActive(id);
      return;
    }

    setCurrentItems(products.filter((el: object) => el.category === category));
    setActive(id);
  }
  return (
    <ul className="flex flex-col gap-2">
      {categories.map(category => (
        <Category
          key={category.id}
          id={category.id}
          title={category.value}
          handleClick={() => chooseCategory(category.value, category.id)}
          active={active}
        />
      ))}
    </ul>
  );
}

export default CategoriesList;

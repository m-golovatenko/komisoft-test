import Category from '../category';
import useCategoriesStore from '../../shared/storages/categories';
import { Dispatch, SetStateAction } from 'react';

function CategoriesList({
  setCurrentItems,
  products
}: {
  setCurrentItems: Dispatch<SetStateAction<object[]>>;
  products: Array<object>;
}) {
  const categories = useCategoriesStore(store => store.categories);

  function chooseCategory(category: string) {
    if (category === 'Все товары') {
      setCurrentItems(products);
      return;
    }

    setCurrentItems(products.filter((el: object) => el.category === category));
  }
  return (
    <ul className="flex flex-col gap-2">
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.value}
          handleClick={() => chooseCategory(category.value)}
        />
      ))}
    </ul>
  );
}

export default CategoriesList;

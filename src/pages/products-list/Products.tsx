import AddNew from '../../features/addNew';
import CardList from '../../entities/card-list';
import CategoriesList from '../../entities/categories-list';
import { useState } from 'react';
import Modal from '../../entities/modal';
import useProductsStore from '../../shared/storages/products';
import useCategoriesStore from '../../shared/storages/categories';
import ProductTypes from '../../shared/types/productTypes';

function Products() {
  const [isModalOpen, setModalOpen] = useState(false);

  const category = useCategoriesStore((store: any) => store.category);

  const products = useProductsStore((store: any) => {
    switch (category) {
      case 'Смартфоны':
        return store.products.filter((product: ProductTypes) => product.category === 'Смартфоны');
      case 'Ноутбуки':
        return store.products.filter((product: ProductTypes) => product.category === 'Ноутбуки');
      case 'Телевизоры':
        return store.products.filter((product: ProductTypes) => product.category === 'Телевизоры');
      case 'Планшеты':
        return store.products.filter((product: ProductTypes) => product.category === 'Планшеты');
      default:
        return store.products;
    }
  });

  return (
    <section className="container max-w-screen-xl box-border py-[24px] px-[80px] flex flex-col gap-5 min-h-[calc(100vh-184px)] ">
      <h1 className="text-2xl font-medium">Электроника</h1>
      <div className="flex gap-4">
        <CategoriesList />
        <div className="flex flex-col">
          <CardList products={products} />
          <AddNew handleOpen={() => setModalOpen(true)} />
        </div>
      </div>
      {isModalOpen && <Modal setModalOpen={setModalOpen} />}
    </section>
  );
}

export default Products;

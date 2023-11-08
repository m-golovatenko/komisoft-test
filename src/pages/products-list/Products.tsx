import AddNew from '../../features/addNew';
import CardList from '../../entities/card-list';
import CategoriesList from '../../entities/categories-list';
import { useState } from 'react';
import Modal from '../../entities/modal';
import useProductsStore, { IProductState } from '../../shared/storages/products';
import useCategoriesStore, { ICategoryState } from '../../shared/storages/categories';
import IProduct from '../../entities/types/product.interface';

function Products() {
  const [isModalOpen, setModalOpen] = useState(false);

  const category = useCategoriesStore((store: ICategoryState) =>
    store.computed.getActiveCategory()
  );

  const products = useProductsStore((store: IProductState) => {
    if (!category || category.name === 'Все товары') {
      return store.products;
    }
    return store.products.filter((product: IProduct) => product.category === category?.name);
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

import AddNew from '../../features/addNew';
import CardList from '../../entities/card-list';
import CategoriesList from '../../entities/categories-list';
import { useState } from 'react';
import Modal from '../../entities/modal';
import useProductsStore from '../../shared/storages/products';

function Products() {
  const [isModalOpen, setModalOpen] = useState(false);

  const products = useProductsStore((store: any) => store.products);

  const [currentItems, setCurrentItems] = useState(products);

  return (
    <section className="container max-w-screen-xl box-border py-[24px] px-[80px] flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Электроника</h1>
      <div className="flex gap-4">
        <CategoriesList products={products} setCurrentItems={setCurrentItems} />
        <div className="flex flex-col">
          <CardList products={currentItems} />
          <AddNew handleOpen={() => setModalOpen(true)} />
        </div>
      </div>
      {isModalOpen && <Modal setModalOpen={setModalOpen} />}
    </section>
  );
}

export default Products;

import CardList from '../../entities/card-list';
import CategoriesList from '../../entities/categories-list';

function Products() {
  return (
    <section className="container py-[24px] px-[80px] flex flex-col gap-5 ">
      <h1 className="text-2xl font-medium">Электроника</h1>
      <div className="flex gap-4">
        <CategoriesList />
        <CardList />
      </div>
    </section>
  );
}

export default Products;

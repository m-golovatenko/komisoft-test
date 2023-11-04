import AddNew from '../../features/addNew';
import CardList from '../../entities/card-list';
import CategoriesList from '../../entities/categories-list';

function Products() {
  return (
    <section className="container max-w-screen-xl box-border py-[24px] px-[80px] flex flex-col gap-5 ">
      <h1 className="text-2xl font-medium">Электроника</h1>
      <div className="flex gap-4">
        <CategoriesList />
        <div className="flex flex-col">
          <CardList />
          <AddNew />
        </div>
      </div>
    </section>
  );
}

export default Products;

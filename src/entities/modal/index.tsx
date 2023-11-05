import CloseIcon from './ui/close.svg';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useProductsStore from '../../shared/storages/products';
import { schema } from '../../shared/schema/schema';
import ProductTypes from '../../shared/types/productTypes';

function Modal({ setModalOpen }: { setModalOpen: Dispatch<SetStateAction<boolean>> }) {
  const addProduct = useProductsStore(store => store.addProduct);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleCloseModal() {
    setModalOpen(false);
  }
  const createProductSubmitHandler: SubmitHandler<ProductTypes> = data => {
    addProduct(data.id, data.title, data.price, data.category, data.img);
    console.log(data);
    handleCloseModal();
  };

  return (
    <div className="fixed top-0 left-0 bg-black/50 z-10 w-screen h-screen overflow-y-auto overflow-x-hidden outline-none">
      <form
        onSubmit={handleSubmit(createProductSubmitHandler)}
        noValidate
        className="py-8 px-10 bg-white rounded-3xl flex flex-col w-[440px] gap-6 absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center relative"
      >
        <button className="absolute right-6 top-6" onClick={handleCloseModal} type="button">
          <img src={CloseIcon} alt="Иконка закрытия формы." />
        </button>
        <h2 className="text-2xl font-bold">Добавить новый продукт</h2>
        <ul className="flex flex-col gap-3 w-full">
          <li className="flex flex-col gap-1 w-full focus:outline-blue ">
            <label className="text-sm">Фотография товара</label>
            <div className="flex flex-col w-full">
              <input
                type="text"
                className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
                placeholder="Ссылка на фотографию"
                {...register('img')}
              />
              <p className="text-sm text-red-600">{errors.img?.message}</p>
            </div>
          </li>
          <li className="flex flex-col gap-1 w-full ">
            <label className="text-sm">Название</label>
            <div className="flex flex-col w-full">
              <input
                type="text"
                className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
                placeholder="Apple MacBook Air"
                {...register('title')}
              />
              <p className="text-sm text-red-600">{errors.title?.message}</p>
            </div>
          </li>
          <li className="flex flex-col gap-1 w-full">
            <label className="text-sm">Цена</label>
            <div className="flex flex-col w-full">
              <input
                type="text"
                className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
                placeholder="99 999 ₽"
                {...register('price')}
              />
              <p className="text-sm text-red-600">{errors.price?.message}</p>
            </div>
          </li>

          <li className="flex flex-col gap-1 w-full">
            <label className="text-sm">Категория</label>
            <div className="flex flex-col w-full">
              <select
                id="category"
                autoComplete="category-name"
                className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
                {...register('category')}
              >
                <option>Смартфоны</option>
                <option>Ноутбуки</option>
                <option>Телевизоры</option>
                <option>Планшеты</option>
              </select>
              <p className="text-sm text-red-600">{errors.category?.message}</p>
            </div>
          </li>
        </ul>
        <button
          className="py-3 px-6 bg-blue rounded-lg text-white text-base hover:cursor-pointer transition duration-150 ease-in-out w-full"
          type="submit"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

export default Modal;

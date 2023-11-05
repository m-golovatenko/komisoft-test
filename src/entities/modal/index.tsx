import CloseIcon from './ui/close.svg';
import { MouseEventHandler } from 'react';
import FileIcon from './ui/fileIcon.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Modal({ handleCloseModal }: { handleCloseModal: MouseEventHandler }) {
  const schema = yup
    .object({
      fileUpload: yup.string().required(),
      title: yup.string().required(),
      price: yup.string().required(),
      category: yup.string().required()
    })
    .required();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: object) => console.log(data);

  return (
    <div className="fixed top-0 left-0 bg-black/50 z-10 w-screen h-screen overflow-y-auto overflow-x-hidden outline-none">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-8 px-10 bg-white rounded-3xl flex flex-col w-[440px] gap-6 absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center relative"
      >
        <button className="absolute right-6 top-6" onClick={handleCloseModal}>
          <img src={CloseIcon} alt="Иконка закрытия формы." />
        </button>
        <h2 className="text-2xl font-bold">Добавить новый продукт</h2>
        <ul className="flex flex-col gap-3 w-full">
          <li className="flex flex-col gap-1 w-full ">
            <label htmlFor="fileUpload" className="text-sm">
              Фотография товара
            </label>
            <label
              className="flex flex-col items-center justify-center gap-3 border border-grey rounded-lg box-border outline-blue py-3 px-4"
              htmlFor="fileUpload"
            >
              <input id="fileUpload" type="file" className="sr-only " {...register('fileUpload')} />
              <img src={FileIcon} alt="Иконка загрузки файла." className="w-10 h-10" />
              <span className="text-xs text-grey">
                Нажмите на кнопку или перетащите файл в эту область
              </span>
            </label>
          </li>
          <li className="flex flex-col gap-1 w-full ">
            <label className="text-sm">Название</label>
            <input
              type="text"
              className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
              placeholder="Apple MacBook Air"
              {...register('title')}
            />
          </li>
          <li className="flex flex-col gap-1 w-full">
            <label className="text-sm">Цена</label>
            <input
              type="text"
              className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
              placeholder="99 999₽"
              {...register('price')}
            />
          </li>
          <li className="flex flex-col gap-1 w-full">
            <label className="text-sm">Категория</label>
            <select
              id="category"
              autoComplete="category-name"
              className="py-3 px-4 border rounded-lg border-grey text-sm box-border outline-blue"
              {...register('category')}
            >
              <option>Ноутбуки</option>
              <option>Смартфоны</option>
              <option>Планшеты</option>
              <option>Планшеты</option>
            </select>
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

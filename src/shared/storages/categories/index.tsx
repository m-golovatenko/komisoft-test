import { create } from 'zustand';

const useCategoriesStore = create(() => ({
  categories: [
    { id: '1', value: 'Все товары' },
    { id: '2', value: 'Смартфоны' },
    { id: '3', value: 'Ноутбуки' },
    { id: '4', value: 'Телевизоры' },
    { id: '5', value: 'Планшеты' }
  ]
}));

export default useCategoriesStore;

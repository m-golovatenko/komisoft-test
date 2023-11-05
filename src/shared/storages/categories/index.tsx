import { create } from 'zustand';

const useCategoriesStore = create(set => ({
  category: 'Все товары',
  setCategory: (value: string) => set({ category: value })
}));

export default useCategoriesStore;

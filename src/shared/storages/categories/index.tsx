import ICategory from 'entities/types/category.interface';
import { create } from 'zustand';
export interface ICategoryState {
  categories: ICategory[];
  activeCategoryId: number;
  setCategory: (category: ICategory) => void;
  computed: {
    getActiveCategory: () => ICategory | undefined;
  };
}

const useCategoriesStore = create<ICategoryState>((set, get) => ({
  categories: [
    { id: 1, name: 'Все товары' },
    { id: 2, name: 'Смартфоны' },
    { id: 3, name: 'Ноутбуки' },
    { id: 4, name: 'Телевизоры' },
    { id: 5, name: 'Планшеты' }
  ],
  activeCategoryId: 1,
  setCategory: category => set({ activeCategoryId: category.id }),
  computed: {
    getActiveCategory: () =>
      get().categories.find(category => get().activeCategoryId === category.id)
  }
}));

export default useCategoriesStore;

import { create } from 'zustand';

interface ProductState {
  id: number;
  name: string;
  price: string;
  category: string;
  img: string;
}

interface ProductsList {
  products: Array<ProductState>;
}

const useProductsStore = create<ProductsList>(() => ({
  products: [
    {
      id: 1,
      name: 'Ноутбук Apple MacBook Air 13 M1/8/256 Space Gray',
      price: '98 399 ₽',
      category: 'Ноутбуки',
      img: 'https://avatars.mds.yandex.net/get-mpic/5258494/img_id8024084943893703521.jpeg/orig'
    },
    {
      id: 2,
      name: '"Ноутбук Apple MacBook Air 13.6 M2 8/256GB Starlight',
      price: '133 499 ₽',
      category: 'Ноутбуки',
      img: 'https://avatars.mds.yandex.net/get-mpic/5258494/img_id8024084943893703521.jpeg/orig'
    },
    {
      id: 3,
      name: 'Ноутбук Apple MacBook Pro 14 M2 Pro 10/16 core/16/512 Silver',
      price: '275 690 ₽',
      category: 'Ноутбуки',
      img: 'https://avatars.mds.yandex.net/get-mpic/5258494/img_id8024084943893703521.jpeg/orig'
    },
    {
      id: 4,
      name: 'Apple MacBook Pro 13 M2 8/256GB Space Gray',
      price: '176 590 ₽',
      category: 'Ноутбуки',
      img: 'https://avatars.mds.yandex.net/get-mpic/5258494/img_id8024084943893703521.jpeg/orig'
    },
    {
      id: 5,
      name: 'Смартфон Apple iPhone 15 128 ГБ, Dual nano SIM, черный',
      price: '101 800 ₽',
      category: 'Смартфоны',
      img: 'https://avatars.mds.yandex.net/get-mpic/11778691/img_id5382897849489177965.jpeg/600x800'
    },
    {
      id: 6,
      name: 'Смартфон Xiaomi Redmi 12C 4/128Gb Фиолетово-лавандовый RU',
      price: '12 690 ₽',
      category: 'Смартфоны',
      img: 'https://avatars.mds.yandex.net/get-mpic/4509881/img_id6372078233276806972.jpeg/600x800'
    },
    {
      id: 7,
      name: 'Телевизор Xiaomi Mi TV A2, 50 Smart TV 4K',
      price: '38 537 ₽',
      category: 'Телевизоры',
      img: 'https://avatars.mds.yandex.net/get-mpic/1589815/img_id3028055268637306860.jpeg/600x800'
    },
    {
      id: 8,
      name: ' Планшет Xiaomi Redmi Pad, CN, 4/128 ГБ, Wi-Fi, Android 12, графитовый серый',
      price: '33 990 ₽',
      category: 'Планшеты',
      img: 'https://avatars.mds.yandex.net/get-mpic/5297001/img_id5004368894591462751.png/600x800'
    },
    {
      id: 9,
      name: 'Планшет Apple iPad Pro 11 (2021), 16/2 ТБ, Wi-Fi + Cellular, iPadOS, серебристый',
      price: '143 990 ₽',
      category: 'Планшеты',
      img: 'https://avatars.mds.yandex.net/get-mpic/5252617/img_id4236874559679475681.jpeg/600x800'
    },
    {
      id: 10,
      name: 'Телевизор Samsung QE85QN900CU 2023 Neo QLED, HDR, QLED, LED, черный титан',
      price: '1 122 750 ₽',
      category: 'Телевизоры',
      img: 'https://avatars.mds.yandex.net/get-mpic/1866068/img_id2653770526606671499.png/600x800'
    }
  ]
}));

export default useProductsStore;

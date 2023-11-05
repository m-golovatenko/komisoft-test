import * as yup from 'yup';

export const schema = yup.object({
  img: yup.string().required('Необходимо заполнить поле.'),
  title: yup
    .string()
    .min(2, 'Название должно содержать минимум 2 символа.')
    .required('Необходимо заполнить поле.'),
  price: yup
    .string()
    .min(2, 'Цена должна содержать минимум 2 символа.')
    .required('Необходимо заполнить поле.'),
  category: yup.string().required('Необходимо выбрать категорию.')
});

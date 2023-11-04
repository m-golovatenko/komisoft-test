import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Products = lazy(() => import('./products-list/Products.tsx'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

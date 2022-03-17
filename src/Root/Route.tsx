import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from 'Scenes/products/ProductList';
import AddProduct from 'Scenes/products/Product';

const MainRoute = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="add-product" element={<AddProduct />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoute;

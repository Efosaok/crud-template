import { Button } from '@mui/material';
import ProductsTable from 'Components/product-table';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/styles.scss';

const Header = () => (
  <div className="list-header">
    <div>
      <h3>Products</h3>
    </div>
    <div>
      <Link to="add-product"><Button variant="outlined" color="secondary">Add Product</Button></Link>
    </div>
  </div>
);

const ProductList = () => (
  <div className="product-list">
    <Header />
    <ProductsTable />
  </div>
);

export default ProductList;

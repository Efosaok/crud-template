import { Button, TextField } from '@mui/material';
import React, { ReactElement } from 'react';

import './styles/styles.scss';

const AddProduct = (): ReactElement => {
  return (
    <div className="add-product">
      <div className="header_sec">
        <h3>Add Product</h3>
      </div>
      <div className="input_block">
        <TextField id="outlined-basic" label="Title" variant="outlined" />
      </div>
      <div className="input_block">
        <TextField id="outlined-basic" label="Category" variant="outlined" />
      </div>
      <div className="input_block">
        <TextField id="outlined-basic" label="Manufacturer" variant="outlined" />
      </div>
      <div className="submit_btn_block">
        <Button variant="contained">SUBMIT</Button>
      </div>
    </div>
  );
}

export default AddProduct;

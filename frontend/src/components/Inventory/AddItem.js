import { FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Forms.css';
import InventoryHeader from "./InventoryMainHeader";
import Swal from 'sweetalert2';

//setting inputs for the fields
const AddItem = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    itemCode: '',
    itemName: '',
    itemCategory: '',
    unitPrice: '',
    quantity: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'unitPrice') {
      const unitPriceValue = value.replace(' LKR', '');
      setInputs((prevState) => ({
        ...prevState,
        [name]: unitPriceValue,
      }));
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  
  
  //append unit price with modifications
  const handleUnitPriceBlur = (e) => {
    const { value } = e.target;
    let unitPriceValue = value.trim();
    
    if (unitPriceValue !== '') {
      const decimalIndex = unitPriceValue.indexOf('.');
      
      if (decimalIndex === -1) {
        unitPriceValue += '.00';
      } else if (decimalIndex === unitPriceValue.length - 2) {
        unitPriceValue += '0';
      }
      unitPriceValue += ' LKR';
    }
    
    setInputs((prevState) => ({
      ...prevState,
      unitPrice: unitPriceValue,
    }));
  };


  //setting the button onclick actions
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    //checking for duplicate itemcodes in the database
    try {
      const res = await axios.get(
        `http://localhost:5000/items?itemCode=${inputs.itemCode}`
      );
      if (res.data.length > 0) {
        setInputs((prevState) => ({
          ...prevState,
          itemCode: '',
        }));
        return;
      }
      await axios.post('http://localhost:5000/items', {
        itemCode: String(inputs.itemCode),
        itemName: String(inputs.itemName),
        itemCategory: String(inputs.itemCategory),
        unitPrice: String(inputs.unitPrice),
        quantity: Number(inputs.quantity),
        remarks: String(inputs.remarks),
      });
      Swal.fire({
        icon: 'success',
        title: 'Added Successfully',
      });

      setInputs((prevState) => ({
        ...prevState,
        itemCode: '',
      }));
      history('/ViewAllItems');
    } catch (error) {
      setInputs((prevState) => ({
        ...prevState,
        itemCode: '',
      }));
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Item Already Exists!',
      });
    }
  };
  
  //implementing add form
  return (
    <div>
      <InventoryHeader />
      <h2 className='in-heading'>Add Equipment</h2>
      <form className='in-form-all' onSubmit={handleSubmit} autoComplete="off">
        <div className='in-form'>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            maxWidth={700}
            alignContent={'center'}
            marginLeft={'auto'}
            marginRight={'auto'}
            marginTop={5}
          >
            <FormLabel style={{ paddingRight: 610 }}>Item Code :</FormLabel>
            <TextField
              value={inputs.itemCode}
              onChange={handleChange}
              margin='normal'
              fullWidth
              variant='outlined'
              name='itemCode'
              required='true'
              placeholder='Enter item code here'
            />
            <br />
  
            <FormLabel style={{ paddingRight: 605 }}>Item Name :</FormLabel>
            <TextField
              value={inputs.itemName}
              onChange={handleChange}
              margin='normal'
              fullWidth
              variant='outlined'
              name='itemName'
              required='true'
              placeholder='Enter item name here'
            />
            <br />
  
            <FormLabel style={{ paddingRight: 580 }}>Item Category :</FormLabel>
            <br />
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={inputs.itemCategory}
              onChange={handleChange}
              name='itemCategory'
              required='true'
              sx={{ mb: 3, width: 700 }}
              displayEmpty>
              <MenuItem value='' disabled>Select item category</MenuItem>
              <MenuItem value='General'>General Items</MenuItem>
              <MenuItem value='Surgical'>Surgical Items</MenuItem>
              <MenuItem value='Consumables'>Consumables</MenuItem>
            </Select>
  
            <FormLabel style={{ paddingRight: 612 }}>Unit Price :</FormLabel>
            <TextField
              value={inputs.unitPrice}
              onChange={handleChange}
              onBlur={handleUnitPriceBlur}
              margin='normal'
              fullWidth
              variant='outlined'
              name='unitPrice'
              required='true'
              placeholder='Enter price of item in LKR'
            />
            <br />
  
            <FormLabel style={{ paddingRight: 625 }}>Quantity :</FormLabel>
            <TextField
              type='number'
              value={inputs.quantity}
              onChange={handleChange}
              margin='normal'
              fullWidth
              variant='outlined'
              name='quantity'
              required='true'
              placeholder='Enter item quantity'
            />
            <br />
  
            <FormLabel style={{ paddingRight: 618 }}>Remarks :</FormLabel>
            <TextField
              value={inputs.remarks}
              onChange={handleChange}
              margin='normal'
              fullWidth
              variant='outlined'
              name='remarks'
              placeholder='Enter remarks if any'
            />
            <br />
  
            <div className='dadd-b'>
              <button className='dadd-button-24'>Add Equipment</button>
            </div>
            <br />
          </Box>
        </div>
      </form>
    </div>
  );
  
}

export default AddItem
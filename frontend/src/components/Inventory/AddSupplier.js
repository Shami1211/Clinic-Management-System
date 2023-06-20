import { FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Forms.css';
import InventoryHeader from "./InventoryMainHeader";
import Swal from 'sweetalert2';

//setting inputs for the fields
const AddSupplier = () => {
  const history = useNavigate();
  const[inputs,setInputs] = useState({
        supplierID:'',
        supplierName:'',
        company:'',
        stockCategory:'',
        email:'',
        contactNumber:''
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

   //setting the button onclick actions
  const handleSubmit = async (e) => {
    e.preventDefault();
    //setting validation for the contact number
    if (inputs.contactNumber.length !== 10) {
      Swal.fire({
        icon: 'error',
        title: 'Contact Number Invalid !',
      });
      return;
    }
    //setting validation for the email
    if (!inputs.email.endsWith("@gmail.com")) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email !',
      });
      return;
    }
    console.log(inputs);
    //checking for duplicate supplier IDs in the database
    try {
      const res = await axios.get(
        `http://localhost:5000/suppliers?supplierID=${inputs.supplierID}`
      );
      if (res.data.length > 0) {
        setInputs((prevState) => ({
          ...prevState,
          supplierID: '',
        }));
        return;
      }
      await axios.post('http://localhost:5000/suppliers', {
        supplierID: String(inputs.supplierID),
        supplierName:String(inputs.supplierName),
        company:String(inputs.company),
        stockCategory:String(inputs.stockCategory),
        email:String(inputs.email),
        contactNumber:String(inputs.contactNumber)
      });
      Swal.fire({
        icon: 'success',
        title: 'Added Successfully',
      });

      setInputs((prevState) => ({
        ...prevState,
        itemCode: '',
      }));
      history('/ViewSuppliers');
    } catch (error) {
      setInputs((prevState) => ({
        ...prevState,
        supplierID: '',
      }));
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Supplier Already Exists!',
      });
    }
  };
  
//implementing add form
  return (
    <div>
      <InventoryHeader/>
      <h2 className='in-heading'>Add Supplier</h2>
      <form className='in-form-all' onSubmit={handleSubmit} autoComplete="off">
      <div className='in-form'>
      <Box 
          display={"flex"}
          flexDirection = {"column"}
          justifyContent={"center"} 
          maxWidth={700} 
          alignContent={"center"} 
          marginLeft={"auto"}
          marginRight={"auto"} 
          marginTop={5}>
        
        <FormLabel style={{paddingRight: 610}}>Supplier ID :</FormLabel>
        <TextField value={inputs.supplierID} onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="supplierID" required="true" placeholder="Enter supplier ID here"/><br/>

        <FormLabel style={{paddingRight: 580}}>Supplier Name :</FormLabel>
        <TextField value={inputs.supplierName} onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="supplierName" required="true" placeholder="Enter supplier name here"/><br/>

        <FormLabel style={{paddingRight: 615}}>Company :</FormLabel>
        <TextField value={inputs.company} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="company" required="true" placeholder="Enter supplier company here"/><br/>

        <FormLabel style={{paddingRight: 570}}>Stock Category :</FormLabel><br/>
          <Select 
            labelId="demo-simple-select-label" 
            id="demo-simple-select"  
            value={inputs.stockCategory} 
            onChange={handleChange} 
            name="stockCategory"
            required="true"
            sx={{mb: 3, width: 700}}
            displayEmpty>
            <MenuItem value='' disabled>Select stock category</MenuItem>
            <MenuItem value="General">General Items</MenuItem>
            <MenuItem value="Surgical">Surgical Items</MenuItem>
            <MenuItem value="Consumables">Consumables</MenuItem>
          </Select>

        <FormLabel style={{paddingRight: 640}}>Email :</FormLabel>
        <TextField value={inputs.email} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="email" required="true" placeholder="example@gmail.com"/><br/>

        <FormLabel style={{paddingRight: 565}}>Contact Number :</FormLabel>
        <TextField value={inputs.contactNumber} onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="contactNumber" required="true" placeholder="Enter contact number here"/><br/>

        <div className='dadd-b'>
          <button className='dadd-button-24' >Add Supplier</button>
        </div><br/>

      </Box>
      </div>
    </form>
    </div>
  )
}

export default AddSupplier
import axios from 'axios';
import { FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Forms.css';
import InventoryHeader from "./InventoryMainHeader";
import Swal from 'sweetalert2';

const ItemDetails = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
const history = useNavigate();

    useEffect(() => {
        const fetchHandler = async() => {
            await axios
                .get(`http://localhost:5000/items/${id}`)
                .then((res) => res.data).then(data=>setInputs(data.item));
    };
    fetchHandler()
  },[id]);
     
    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/items/${id}`,{
            itemCode: String(inputs.itemCode),
            itemName: String(inputs.itemName),
            itemCategory: String(inputs.itemCategory),
            unitPrice: String(inputs.unitPrice),
            quantity: Number(inputs.quantity),
            remarks: String(inputs.remarks),
        }).then(res=>res.data)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
          }).then(() => history('/ViewAllItems'));
        });
      };
      
   const handleChange = (e) => {
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
   };
   return (
    <div>
        <InventoryHeader/>
        <h2 className='in-heading'>Edit Equipment Details</h2>

        {inputs && (
            <form className="in-form-all" onSubmit={handleSubmit} autoComplete="off">
                <div className="in-form">
                <Box 
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"} 
                    maxWidth={700} 
                    alignContent={"center"}
                    marginLeft={"auto"} 
                    marginRight={"auto"}
                    marginTop={5}>

                    <FormLabel style={{paddingRight: 610}}>Item Code :</FormLabel>
                    <TextField
                        value={inputs.itemCode}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        name="itemCode"
                        required='true'
                        placeholder='Enter item code here'/><br/>
                    <FormLabel style={{paddingRight: 605}}>Item Name :</FormLabel>
                    <TextField
                        value={inputs.itemName}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        name="itemName"
                        required='true'
                        placeholder='Enter item name here'/><br/>
                    <FormLabel style={{paddingRight: 580}}>Item Category :</FormLabel><br/>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputs.itemCategory}
                        onChange={handleChange}
                        name="itemCategory"
                        required='true'
                        sx={{mb: 3, width: 700}}
                        displayEmpty>
                        <MenuItem value='' disabled>Select item category</MenuItem>
                        <MenuItem value="General">General Items</MenuItem>
                        <MenuItem value="Surgical">Surgical Items</MenuItem>
                        <MenuItem value="Consumables">Consumables</MenuItem>
                        </Select>
                    <FormLabel style={{paddingRight: 612}}>Unit Price :</FormLabel>
                    <TextField
                        value={inputs.unitPrice}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        name="unitPrice"
                        required='true'
                        placeholder='Enter price of item in LKR'/><br/>

                    <FormLabel style={{paddingRight: 625}}>Quantity :</FormLabel>
                    <TextField
                        type="number"
                        value={inputs.quantity}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        name="quantity"
                        required='true'
                        placeholder='Enter item quantity'/><br/>
                    <FormLabel style={{paddingRight: 618}}>Remarks :</FormLabel>
                    <TextField
                        value={inputs.remarks}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        name="remarks"
                        placeholder='Enter remarks if any'/><br/>
                        
                        <div className='dadd-b'>
                            <button className='dadd-button-24' >Update Equipment</button>
                        </div><br/>
                </Box>
                </div>
            </form>
        )}
    </div>
  )
}

export default ItemDetails;
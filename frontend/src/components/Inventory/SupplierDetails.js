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

const SupplierDetails = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
const history = useNavigate();

    useEffect(() => {
        const fetchHandler = async() => {
            await axios
                .get(`http://localhost:5000/suppliers/${id}`)
                .then((res) => res.data).then(data=>setInputs(data.supplier));
    };
    fetchHandler()
  },[id]);
     
    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/suppliers/${id}`,{
            supplierID: String(inputs.supplierID),
            supplierName: String(inputs.supplierName),
            company: String(inputs.company),
            stockCategory: String(inputs.stockCategory),
            email: String(inputs.email),
            contactNumber: String(inputs.contactNumber),
        }).then(res=>res.data)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
          }).then(() => history('/ViewSuppliers'));
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
        <h2 className='in-heading'>Edit Supplier Details</h2>

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

                    <FormLabel style={{paddingRight: 610}}>Supplier ID :</FormLabel>
                    <TextField
                        value={inputs.supplierID}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="supplierID"
                        placeholder="Enter supplier ID here"
                        required="true"
                        inputProps={{ style: { width: "675px" } }}/><br/>
                    <FormLabel style={{paddingRight: 580}}>Supplier Name :</FormLabel>
                    <TextField
                        value={inputs.supplierName}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="supplierName"
                        placeholder="Enter supplier name here"
                        required="true"
                        inputProps={{ style: { width: "675px" } }}/><br/>
                    <FormLabel style={{paddingRight: 615}}>Company :</FormLabel>
                    <TextField
                        value={inputs.company}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="company"
                        placeholder="Enter supplier company here"
                        required="true"
                        inputProps={{ style: { width: "675px" } }}/><br/>
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
                    <TextField
                        value={inputs.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="email"
                        required="true"
                        placeholder="example@gmail.com"
                        inputProps={{ style: { width: "675px" } }}/><br/>
                    <FormLabel style={{paddingRight: 565}}>Contact Number :</FormLabel>
                    <TextField
                        value={inputs.contactNumber}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="contactNumber"
                        required="true"
                        placeholder="Enter contact number here"
                        inputProps={{ style: { width: "675px" } }}/><br/>
                        
                        <div className='dadd-b'>
                            <button className='dadd-button-24' >Update Supplier</button>
                        </div><br/>
                </Box>
                </div>
            </form>
        )}
    </div>
  )
}

export default SupplierDetails;
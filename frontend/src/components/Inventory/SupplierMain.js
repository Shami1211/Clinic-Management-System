import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import "./ViewItems.css";
import Swal from 'sweetalert2';


const SupplierMain = (props) => {
  const history = useNavigate();
  const{_id, supplierID, supplierName, company, stockCategory, email, contactNumber} = props.supplier;

  //implementing delete function
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/suppliers/${_id}`)
      .then((res) => res.data)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Deleted Successfully',
        }).then((result) => {
          if (result.isConfirmed) {
            history('/ViewSuppliers');
            window.location.reload();
          }
        });
      });
  };
  


  return (
    <tr>
      <td className='hem-table-td'>{supplierID}</td>
      <td className='hem-table-td'>{supplierName}</td>
      <td className='hem-table-td'>{company}</td>
      <td className='hem-table-td'>{stockCategory}</td>
      <td className='hem-table-td'>{email}</td>
      <td className='hem-table-td'>{contactNumber}</td>

      <td className='hem-table-td'><Button LinkComponent={Link} to={`/suppliers/${_id}`} sx={{mt:'auto'}} startIcon={<EditIcon />}>Update</Button></td>
      <td className='hem-table-td'><Button onClick={deleteHandler} sx={{mt:'auto', color: 'red'}} startIcon={<DeleteIcon />}>Delete</Button></td>
    </tr>
  )
}

export default SupplierMain;
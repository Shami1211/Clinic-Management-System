import React from 'react';
import "./ViewAllItem.css";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import Swal from 'sweetalert2';

const ViewAllItem = (props) => {
    const history = useNavigate();
    const {_id, itemCode, itemName, itemCategory, unitPrice, quantity, remarks} = props.item;

    //implementing delete function
    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/items/${_id}`)
          .then((res) => res.data)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted Successfully',
            }).then((result) => {
              if (result.isConfirmed) {
                history('/ViewAllItems');
                window.location.reload();
              }
            });
          });
      };
      

    //creating card to display details
    return (
        <div className='hem-card'>
            <div className='hem-card-header'>
                <h4 className='hem-card-title'>{itemName}</h4>
            </div>
            <div className='hem-card-body'>
                <p className='hem-card-text'>Item Code: {itemCode}</p>
                <p className='hem-card-text'>Item Category: {itemCategory}</p>
                <p className='hem-card-text'>Unit Price: {unitPrice}</p>
                <p className='hem-card-text'>Quantity: {quantity}</p>
                <p className='hem-card-text'>Remarks: {remarks}</p>

                <Button LinkComponent={Link} to={`/items/${_id}`} variant="contained"
                    sx={{
                        mt: '1rem',
                        marginRight: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#007bff',
                        '&:hover': { backgroundColor: '#006FE6' },
                    }}
                startIcon={<EditIcon />}>Update</Button>

                <Button onClick={deleteHandler} variant="contained"
                    sx={{
                        mt: '1rem',
                        borderRadius: '8px',
                        backgroundColor: '#FF5252',
                        '&:hover': { backgroundColor: '#FF3939' }
                    }}
                startIcon={<DeleteIcon />}>Delete</Button>
            </div>
        </div>
    )
};

export default ViewAllItem;
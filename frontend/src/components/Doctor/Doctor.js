//view doctors
import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import "./ViewDoctor.css";
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';

const Doctor = (props) => {
    const history = useNavigate();
    const{_id,name,dob,age,mobileNo,email,clinic,unit,specialization} = props.doctor;

    //implementation of delete function
    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/doctors/${_id}`)
          .then((res) => res.data)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted Successfully',
            }).then((result) => {
              if (result.isConfirmed) {
                history('/ViewDoctors');
                window.location.reload();
              }
            });
          });
      };
  return (

    <tr>
        <td className='ama-table-td-1'>{name}</td>
        <td className='ama-table-td-1'>{dob}</td>
        <td className='ama-table-td-1'>{age}</td>
        <td className='ama-table-td-1'>{mobileNo}</td>
        <td className='ama-table-td-1'>{email}</td>
        <td className='ama-table-td-1'>{clinic}</td>
        <td className='ama-table-td-1'>{unit}</td>
        <td className='ama-table-td-1'>{specialization}</td>
        
        <td className='ama-table-td'><Button style={{fontFamily:"Oswald"}} LinkComponent={Link} to={`/doctors/${_id}`} sx={{mt:'auto'}} startIcon={<EditIcon />}>Update</Button></td>
      <td className='ama-table-td'><Button style={{fontFamily:"Oswald"}} onClick={deleteHandler} sx={{mt:'auto', color: 'red'}} startIcon={<DeleteIcon /> }>Delete</Button></td>
        </tr> 
       
  );



};

export default Doctor;


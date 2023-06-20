//viewMembers update delete button.
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import "./ViewMembers.css"

const Member = (props) => {
  const history = useNavigate();
  const{_id, name, dob, nic, phonenumber, address, position} = props.member;
  const deleteHandler = async() =>{
    await axios
      .delete(`http://localhost:5000/members/deleteMember/${_id}`)
      .then(res => res.data)
      .then(() => history("/ViewMembers"))
      .then(alert("Deleted Succesfully"));
      window.location.reload();
  }

  return (
    <tr>
      <td className='table-td'>{name}</td>
      <td className='table-td'>{dob}</td>
      <td className='table-td'>{nic}</td>
      <td className='table-td'>{phonenumber}</td>
      <td className='table-td'>{address}</td>
      <td className='table-td'>{position}</td>

      <td className='table-td'><Button LinkComponent={Link} to={`/members/${_id}`} sx={{mt:'auto'}} startIcon={<EditIcon />}>Update</Button></td>
      <td className='table-td'><Button onClick={deleteHandler} sx={{mt:'auto', color: 'red'}} startIcon={<DeleteIcon />}>Delete</Button></td>
    </tr>
  )
}

export default Member;
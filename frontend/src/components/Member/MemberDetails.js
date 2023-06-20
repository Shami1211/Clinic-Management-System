//update form

import axios from 'axios';
//import { Button, FormLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import { Box } from "@mui/system";
import '../Member/MemberDetails.css'
import MemberHeader from '../Member/Nav01'


const MemberDetails = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
const history = useNavigate();

useEffect(() => {
    const fetchHandler = async() => {
        await axios
            .get(`http://localhost:5000/members/getById/${id}`)
            .then((res) => res.data).then(data=>setInputs(data.member));
};
fetchHandler()
},[id]);

    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/members/updateMember/${id}`,{
            name: String(inputs.name),
            dob: String(inputs.dob),
            nic: String(inputs.nic),
            phonenumber: String(inputs.phonenumber),
            address: String(inputs.address),
            position: String(inputs.position),
        }).then(res=>res.data)
};

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/ViewMembers"))
    };

    const handleChange = (e) => {
        setInputs((prevState) =>({
         ...prevState, 
         [e.target.name] : e.target.value 
        }));
    }

    return (
    <div>
        
        <MemberHeader/><br/><br/><br/>

        {inputs && (
            
<form onSubmit={handleSubmit}>
            <div className='form-ball'>
                <div className='form-Main-nwr'>
                <div className="Aform-row1r">
                            <div className='form-fullboxr'>
                                <br/>
                            <h2 className='form-h22r'>Staff Details Updating Form</h2>
                                <div className='form-fromrr' >
                                    <div className='form-fr'>
                                       
                                         
                                                <h3 className='form-h3r'>Name:</h3>
                                                <div className='form-inr'>
                                                    <input className='add-put-bnr' value={inputs.name} onChange={handleChange} placeholder="Enter details" type={Text} name="name"  required></input>
                                                </div>

                                                <br/>


                                                <tr>
                                                    <td>
                                                        <h3 className='form-h3r'>Date of Birth</h3>
                                                        <div className='form-inr'>
                                                            <input  className='add-put-dtrtd'  value={inputs.dob} onChange={handleChange}  name="dob" required/>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <h3 className='form-h3r'>NIC Number</h3>
                                                        <div className='form-inr'>
                                                            <input className='add-put-dtrtd'  value={inputs.nic} onChange={handleChange} name="nic"/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <br/>
                                                <tr>
                                                    <td>
                                                        <h3 className='form-h3r'>Phone Number</h3>
                                                        <div className='form-inr'>
                                                            <input className='add-put-dtrtd'  value={inputs.phonenumber} onChange={handleChange}  name="phonenumber"/>
                                                        </div>
                                                    </td>

                                                    <tr>
                                                    <h3 className='form-h3r'>Position</h3>
                                                    <div className='form-inr'>
                                                        <input className='add-put-dtrtd' value={inputs.position} onChange={handleChange} name="position"/>
                                                    </div>
                                                </tr>


                                                </tr>
                                                    <br/>
                                                <tr>
                                                    <td>
                                                        <h3 className='form-h3r'>Username</h3>
                                                        <div className='form-inr'>
                                                            <input className='add-put-dtrtd' value={inputs.username} onChange={handleChange} name="username" required readOnly/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h3 className='form-h3r'>Password</h3>
                                                        <div className='form-inr'>
                                                            <input className='add-put-dtrtd' value={inputs.password} onChange={handleChange} name="password" required readOnly/>
                                                        </div>
                                                    </td>
                                                </tr>
                                                    <br></br>
                                                    <td>
                                                        <h3 className='form-h3r'>Address</h3>
                                                        <div className='form-inr'>
                                                            <input  className='add-put-bnr' value={inputs.address} onChange={handleChange} name="address" />
                                                        </div>
                                                    </td>


                                         

<div className='dadd-br'>
                            <button className='dadd-button-24rt' >Add Member</button>
                          </div>
                                       
                                    </div>
                                </div>
<br></br>
                        </div>
                    </div>
                </div>
            </div>

            </form>
        )}
    </div>
  )
}

export default MemberDetails;



/*

<form className="form-all" onSubmit={handleSubmit}>
                <div className="form">
                <Box 
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"} 
                    maxWidth={700} 
                    alignContent={"center"}
                    marginLeft={"auto"} 
                    marginRight={"auto"}
                    marginTop={5}>

                    <FormLabel>Name :</FormLabel>
                    <TextField
                        value={inputs.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="name"/><br/>
                    <FormLabel>Date of Birth :</FormLabel>
                    <TextField
                        value={inputs.dob}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="dob"/><br/>
                    <FormLabel>NIC :</FormLabel>
                    <TextField
                        value={inputs.nic}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="nic"/><br/>
                    <FormLabel>Phone Number :</FormLabel>
                    <TextField
                        value={inputs.phonenumber}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="phonenumber"/><br/>
                    <FormLabel>Address :</FormLabel>
                    <TextField
                        value={inputs.address}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="address"/><br/>
                    <FormLabel>Position :</FormLabel>
                    <TextField
                        value={inputs.position}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="position"/><br/>
                    <FormLabel>Username :</FormLabel>
                    <TextField
                        value={inputs.username}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="username"/><br/>
                    <FormLabel>Password :</FormLabel>
                    <TextField
                        value={inputs.password}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        name="password"/><br/>
                        
                    <Button variant= "contained" type="update" sx={{backgroundColor:"#0FB88F"}}> Update Details </Button><br/>
                </Box>
                </div>
            </form>



            */
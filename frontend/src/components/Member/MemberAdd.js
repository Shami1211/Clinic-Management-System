//Add form

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Member/MemberAdd.css";
import MemberHeader from '../Member/Nav01'


const MemberAdd = () =>{
    const history = useNavigate();
    const [inputs, setInputs] = useState ({
        name:'',
        dob:'',
        nic:'',
        phonenumber:'',
        address:'',
        position:'',
        username:'',
        password:'',
    });
    const handleChange = (e) => {
        setInputs((prevState) =>({
         ...prevState, 
         [e.target.name] : e.target.value 
        }));
    }

    const sendRequest = async() => {
        await axios.post("http://localhost:5000/members/addMember", {
            name: String(inputs.name),
            dob: String(inputs.dob),
            nic: String(inputs.nic),
            phonenumber: String(inputs.phonenumber),
            address: String(inputs.address),
            position: String(inputs.position),
            username: String(inputs.username),
            password: String(inputs.password)

        }).then(res=>res.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/ViewMembers'))
    };

    return(
        
        <div>

            <MemberHeader/><br/><br/><br/>

            <form onSubmit={handleSubmit}>

                <div className='form-ball'>
                    <div className='form-Main-nwr'>
                        <div className="Aform-row1r">
                            <div className='form-fullboxr'>
                                <br/>
                                <h1 className='form-h22r'>Staff Registration Form</h1>
                                
                                <div className='form-fromrr'>
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
                                                    <input  className='add-put-dtrtd'  value={inputs.dob} type={'date'} onChange={handleChange}  name="dob" required/>
                                                </div>
                                            </td>

                                            <td>
                                                <h3 className='form-h3r'>NIC Number</h3>
                                                <div className='form-inr'>
                                                    <input className='add-put-dtrtd'  value={inputs.nic} onChange={handleChange} pattern='[0-9A-Z]{12}' maxLength={12}  placeholder="xxxxxxxxxxxx / xxxxxxxxxV" type={Text} name="nic" required/>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>
                                                <h3 className='form-h3r'>Phone Number</h3>
                                                <div className='form-inr'>
                                                    <input className='add-put-dtrtd'  value={inputs.phonenumber} onChange={handleChange} pattern='[0-9]{10}' maxLength={10} placeholder="07XXXXXXXX" type={Text} name="phonenumber" required/>
                                                </div>
                                            </td>

                                            <tr>
                                            <h3 className='form-h3r'>Position</h3>
                                            <div className='form-inr'>
                                                <input className='add-put-dtrtd' value={inputs.position} onChange={handleChange} placeholder="Enter details" type={Text} name="position" required/>
                                            </div>
                                        </tr>

                                        </tr>
                                            <br/>
                                        <tr>
                                            <td>
                                                <h3 className='form-h3r'>Username</h3>
                                                <div className='form-inr'>
                                                    <input className='add-put-dtrtd' value={inputs.username} onChange={handleChange}  placeholder="Enter Your User Name" type={'email'} name="username" required/>
                                                </div>
                                            </td>
                                            <td>
                                                <h3 className='form-h3r'>Password</h3>
                                                <div className='form-inr'>
                                                    <input className='add-put-dtrtd' value={inputs.password} onChange={handleChange} placeholder="Enter  Password" type={'password'} name="password" required/>
                                                </div>
                                            </td>
                                        </tr>
                                            <br></br>


                                            <td>
                                                <h3 className='form-h3r'>Address</h3>
                                                <div className='form-inr'>
                                                    <input  className='add-put-bnr' value={inputs.address} onChange={handleChange} placeholder="Enter details"  name="address" required/>
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

        </div>

    );
};
    
   

export default MemberAdd;


/*

<div>
            <MemberHeader />
        <form onSubmit={handleSubmit}>
        <div className=' form-ball'>
                  
                  <div className='form-Main'>
                            
                    <div class="Aform-row1">
                        
                      <div className='form-fullbox'>
                          <br></br>
                        <h1 className='form-h22'>Enter Details</h1>
                        <br></br>
                          <div className='form-from'>
                                                    
                            <div className='form-f'>
        
        <h3 className='form-h3'> Full Name </h3>
        <div className='form-in'>
        <input className='add-put' value={inputs.name} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="name"/>
        </div>
        <br></br>

        <h3 className='form-h3'>Date of Birth</h3>
        <div className='form-in'>
        <input  className='add-put'  value={inputs.dob} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="dob"/>
        </div>
        <br></br>

        <h3 className='form-h3'>NIC Number</h3>
        <div className='form-in'>
        <input className='add-put'  value={inputs.nic} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="nic"/>
        </div>
        <br></br>

        <h3 className='form-h3'>Phone Number</h3>
        <div className='form-in'>
        <input className='add-put'  value={inputs.phonenumber} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="phonenumber"/>
        </div>
        <br></br>

        <h3 className='form-h3'>Address</h3>
        <div className='form-in'>
        <input  className='add-put' value={inputs.address} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="address"/>
        </div>
        <br></br>

        <h3 className='form-h3'>Position</h3>
        <div className='form-in'>
        <input className='add-put' value={inputs.position} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="position"/>
        </div>
        <br></br>

        <h3 className='form-h3'>Username</h3>
        <div className='form-in'>
        <input className='add-put' value={inputs.username} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="username"/>
        </div>
        <br></br>

        <h3 className='form-h3'>Password</h3>
        <div className='form-in'>
        <input className='add-put' value={inputs.password} onChange={handleChange} margin="normal" fullwidth variant="outlined" name="password"/>
        </div>

    <br></br>
        <div className='dadd-b'>
            <button className='dadd-button-24' type="submit">Add Member</button>
        </div>

</div>
</div>
</div>
</div>
</div>
</div>

   

    </form>
    </div>*/
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PNav from "../Phamacy/Phamacy_Home_02/PNav";
import './AddDrugs.css';
import {
  MenuItem,
  Select
} from "@mui/material";

function AddDrugs() {
  const history = useNavigate();

 /*INPUT DETAILS ASSING VERIABLE NAME*/
  const [inputs, setInputs] = useState({
    drugsName: "",
    drugsExpiredDate: "",
    drugsCetagory: "",
    drugsMadeDate: "",
    drugsQuantity: "",
    drugsDescription: "",
  });


  const handleChange =(e) =>{
    setInputs((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    sendRequest()
    .then(alert("Drugs Added Successfully"))
    .then(()=>history("/AddNewDrugs"))

  }
/*INPUT DETAILS SEND DATA BASE*/
const sendRequest = async () =>{
 await axios.post("http://localhost:5000/drugs/" ,{
    drugsName: String(inputs.drugsName),
    drugsExpiredDate: String(inputs.drugsExpiredDate),
    drugsCetagory: String(inputs.drugsCetagory),
    drugsMadeDate: String(inputs.drugsMadeDate),
    drugsQuantity: String(inputs.drugsQuantity),
    drugsDescription: String(inputs.drugsDescription),
  }).then(res => res.data);
}

return (
    <div>

      <PNav></PNav>

        <br></br><br></br><br></br><br></br>
        
        <form onSubmit={handleSubmit}> 

          <div className=' form-ball'>
                  
            <div className='form-Main-nwr'>
                      
              <div class="Aform-row1r">
                  
                <div className='form-fullboxr'>
                    <br></br>
                  <h1 className='form-h22r'>Enter Details</h1>
                    
                    <div className='form-fromrr'>
                                              
                      <div className='form-fr'>
        
                          <h3 className='form-h3r'>Name </h3>
                          <div className='form-inr'>
                            <input className='add-put-bnr'  value={inputs.drugsName} onChange={handleChange} placeholder="Enter Name" type={Text} name="drugsName" required ></input>
                          </div>
                              
                          <tr>
                            <td><h3 className='form-h3r'>Manufacturer Date</h3> </td>
                            <td><h3 className='form-h3r'>Expired Date</h3></td>
                          </tr>

                          <tr>
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtd' value={inputs.drugsMadeDate} onChange={handleChange} type={'date'}  name="drugsMadeDate" required ></input>
                              </div>
                            </td>
                        
                          
                            <td>
                              <div className='form-inr'>
                                <input className='add-put-dtrtd'  value={inputs.drugsExpiredDate} onChange={handleChange} type={'date'}  name="drugsExpiredDate"  required></input>
                              </div>
                            </td>
                          </tr>
                      
                          <tr>
                            <td> <h3 className='form-h3r'>Category</h3> </td>
                            <td><h3 className='form-h3r'>Quantity</h3></td>
                          </tr>

                          <tr>
                            <td>
                              <div className='form-inr'>
                                <Select className="form-in-3r" value={inputs.drugsCetagory} onChange={handleChange} name="drugsCetagory" sx={{mb: 3}}>
                                  <MenuItem value="Tablets">Tablets</MenuItem>
                                  <MenuItem value="Liquids">Liquids</MenuItem>
                                </Select>
                              </div>
                            </td>

                            <td>
                              <div className='form-inr'>
                                <input className='form-in-3r'value={inputs.drugsQuantity} onChange={handleChange} placeholder="Enter Quantity" type={Text} name="drugsQuantity"required ></input>
                              </div>
                            </td>
                          </tr>
                                               
                          <div className='disup'>
                            <h3 className='form-h3r'>Description</h3>
                            <div className='form-inr'>
                              <textarea  className='add-put-desr' value={inputs.drugsDescription} onChange={handleChange} placeholder="Enter Description" type={Text} name="drugsDescription" required></textarea>
                            </div>
                          </div>

                          <div className='dadd-br'>
                            <button className='dadd-button-24rt' >Add Drugs</button>
                          </div>

                      </div>
                        
                    </div>

                          <br></br>
                </div>
                        
              </div>

            </div>
        
          </div>

        </form> 

        <br></br><br></br>

    </div>
  )
}

export default AddDrugs;
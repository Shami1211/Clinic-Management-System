import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PNav from "../Phamacy/Phamacy_Home_02/PNav";
import './UpdateDrugs.css';

const UpdateDrugs = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

    useEffect (() => {
        const fetchHandler = async()=> {
            await axios.get(`http://localhost:5000/drugs/${id}`)
            .then((res)=>  res.data).then(data => setInputs(data.drug));
        };

      fetchHandler();
          
    },[id])

    //get details in db
    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/drugs/${id}`,{
            _id: String(inputs._id),
            drugsName: String(inputs.drugsName),
            drugsExpiredDate: String(inputs.drugsExpiredDate),
            drugsCetagory: String(inputs.drugsCetagory),
            drugsMadeDate: String(inputs.drugsMadeDate),
            drugsQuantity: String(inputs.drugsQuantity),
            drugsDescription: String(inputs.drugsDescription),
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
        .then(alert("Drugs Update Successfully"))
        .then(()=>history("/UpdateDrugs"));  
    }

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
    }

  return (
    <div>

      <PNav></PNav>

      <br></br><br></br><br></br><br></br>

        {inputs && ( <form  onSubmit={handleSubmit}>

            <div className=' form-ball'>
                
                <div className='form-Main-nwr'>
                    
                    <div class="Aform-row1r">
                
                        <div className='form-fullboxr'>

                            <h1 className='form-h22r'>Update Drug Details</h1>
                                    
                                    <div className='form-fromrr'>
                                            
                                        <div className='form-fr'>
                                   
                                            
                                            <h3 className='form-h3r'>Drugs ID </h3>
                                            <div className='form-inr'>
                                                <input className='add-put-bnr' readOnly value={inputs._id} onChange={handleChange} placeholder="Enter details" type={Text} name="drugsName" ></input>
                                            </div>

                                            <h3 className='form-h3r'>Drugs Name </h3>
                                            <div className='form-inr'>
                                                <input className='add-put-bnr' value={inputs.drugsName} onChange={handleChange} placeholder="Enter details" type={Text} name="drugsName" ></input>
                                            </div>

                                            <tr>
                                              <td><h3 className='form-h3r'>Manufacturer Date</h3> </td>
                                              <td><h3 className='form-h3r'>Expired Date</h3></td>
                                            </tr>

                                            <tr>
                                              <td>
                                                <div className='form-inr'>
                                                  <input className='add-put-dtrtd' value={inputs.drugsMadeDate} onChange={handleChange} type={Date}  name="drugsMadeDate" ></input>
                                                </div>
                                              </td>
                                          
                                              <td>
                                                <div className='form-inr'>
                                                  <input className='add-put-dtrtd'  value={inputs.drugsExpiredDate} onChange={handleChange} type={Date} name="drugsExpiredDate" ></input>
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
                                               
                                                <input className='form-in-3r' value={inputs.drugsCetagory} readOnly onChange={handleChange} type={Text} name="drugsCetagory" ></input>

                                                </div>
                                              </td>
                                        
                                              <td>
                                                <div className='form-inr'>
                                                  <input className='form-in-3r' value={inputs.drugsQuantity} onChange={handleChange} placeholder="Enter Quantity" type={Text} name="drugsQuantity" ></input>
                                                </div>
                                              </td>
                                            </tr>



                                            <h3 className='form-h3r'> Description</h3>
                                            <div className='form-inr'>
                                            <textarea  className='add-put-desr' value={inputs.drugsDescription} onChange={handleChange} placeholder="Enter Description" type={Text} name="drugsDescription" ></textarea>
                                            </div>

                                        
                                            <div className='dadd-br'>
                                                <button className='dadd-button-24rt' >Update</button>
                                            </div>
                                        
                                        </div>

                                    </div>
                                
                        </div>

                        <br></br> 

                    </div>
                        
                </div>
                                
            </div>

        </form>) }

        <br></br><br></br>
        
    </div>

  )

}

export default UpdateDrugs;
/*2.17 idn*/
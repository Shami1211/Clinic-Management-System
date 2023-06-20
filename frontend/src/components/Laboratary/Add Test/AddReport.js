import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import '../CSS/AddReport.css';
import Header from '../Header';

const AddReport = () => {

  //getting current date
  const current = new Date();
  const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;
  const history = useNavigate();
  const [elements,setElements] = useState({});
  const id = useParams().id;

  //fetching data related to the patient id
  useEffect(() => {
    const fetchHandler = async() =>{
      await axios
      .get(`http://localhost:5000/patients/viewPatient/${id}`)
      .then((res)=>res.data)
      .then(alert("Report Added Successfully"))
      .then(data=>setElements(data.patient));
    };
    fetchHandler();
  },[id])

  const[inputs, setInputs] = useState({
    patientID:'',
    patientName:'',
    testName:'',
    description:'',
    result:'',
    other:''
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/reports", {
        
        patientID:String(id),
        patientName: String(elements.patientName),
        testName: String(inputs.testName),
        description: String(inputs.description),
        result: String(inputs.result),
        other: String(inputs.other)
      })
      .then((res) => res.data);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
    .then(alert("Test Added Successfully"))
    .then(() => history(`/labreports`));
  };

  return (
    <div>

      <Header/><br/><br/><br/>

      <form onSubmit={handleSubmit}>

        <div className='form-ball'>

          <div className='form-Main-nwr'>

            <div class="Aform-row1rlb">

            <div className="form-fullboxr">

          
                <h2 className='form-h22r'>Enter Details</h2>
        
                  <div className='form-fromrr'>
                  
                    <div className='form-fr'>
                   
                      <tr>
                        <td>
                          <h3 className='form-h3r'>Patient Reg Number:</h3 >
                          <div className='form-inr'>
                            <input className="add-put-dtrtd" value={id} placeholder="Enter Name" onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="patientID" />
                          </div>
                        </td>

                        <td>
                          <h3 className='form-h3r'>Test Name:</h3 >
                          <div className='form-inr'>
                            <input className="add-put-dtrtd" value={inputs.testName} placeholder="Enter Test Name" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="testName" />
                          </div>
                        </td>
                      </tr>

                        
                      <tr>    
                        <td>
                          <h3  className='form-h3r'>Result</h3 >
                          <div className='form-inr'>
                            <input className="add-put-dtrtd" value={inputs.result} placeholder="Enter Result" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="result" required />
                          </div>
                        </td>
                    
                        <td>
                          <h3 className='form-h3r'>Date</h3 >
                          <div className='form-inr'>
                            <input className="add-put-dtrtd" type={'date'} value={inputs.other} placeholder="Others" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="other" required />
                          </div>
                        </td>
                      </tr>
                          
               

                      <h3  className='form-h3r'>Description</h3 >
                      <div className='form-inr'>
                        <textarea className="add-put-desr"  value={inputs.description} placeholder="Tiltle,Time,Venue"  onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="description" required />
                      </div>

                      
                      <div className='dadd-br'>
                        <button className='dadd-button-24rt' type="submit">Submit</button>
                      </div>
                    
                    </div>

                  </div>

              </div>
            
             </div>
          
          </div>
          </div>
       

      </form>

    </div>
  );
};

export default AddReport;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../CSS/AddReport.css';
import Header from '../Header';

//get report details
const ReportDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/reports/viewByRef/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.reports));
    };
    fetchHandler();
  }, [id]);

  //send request in data base
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/reports/${id}`, {
        patientName: String(inputs.patientName),
        testName: String(inputs.testName),
        description: String(inputs.description),
        result: String(inputs.result),
        other: String(inputs.other)
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/reports"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
    <Header/><br/><br/><br/>
    <div className='form-ball'>
      
      <div className='form-Main-lab-up'>

        <div class="Aform-row1-lab">

        <div className='form-fullbox'>
         
          <h2 className='form-h22'>Update The Test</h2>

            {inputs && (
                  
                  <div className='form-from-lab'>
                
              <form  onSubmit={handleSubmit}>
                        
              <div className='form-f'>
                        
                            <tr>
                              <td>
                                <h3 className='form-h3'>Patient Name</h3 >
                                <div className='form-in'>
                                  <input className="form-in-3" readOnly value={inputs.patientName} placeholder="Enter Name" onChange={handleChange} margin = "normal" fullWidth variant="outlined" name="patientName" />
                                </div>
                              </td>

                              <td>
                                <h3 className='form-h3'>Test Name</h3 >
                                <div className='form-in'>
                                  <input className="form-in-3" readOnly value={inputs.testName} placeholder="Enter Test Name" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="testName" />
                                </div>
                              </td>
                            </tr>

                              
                            <tr>    
                              <td>
                                <h3  className='form-h3'>Result</h3 >
                                <div className='form-in'>
                                  <input className="form-in-3" value={inputs.result} placeholder="Enter Result" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="result" />
                                </div>
                              </td>
                          
                              <td>
                                <h3 className='form-h3'>Date</h3 >
                                <div className='form-in'>
                                  <input className="form-in-3" type={'date'} value={inputs.other} placeholder="Others" onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="other" />
                                </div>
                              </td>
                            </tr>
                                
                    

                            <h3  className='form-h3'>Description</h3 >
                            <div className='form-in'>
                              <textarea className="form-description-lab"  value={inputs.description} placeholder="Tiltle,Time,Venue"  onChange={handleChange}  margin = "normal" fullWidth variant="outlined" name="description" />
                            </div>

                            <br></br><br></br><br></br><br></br><br></br>

                            <div className='dadd-b-lab'>
                              <button className='dadd-button-24' type="submit">Submit</button>
                            </div>
                          
                      </div>

                </form>
                
                </div>
              
            )}

        </div>

        </div>

      </div>


      </div>

    </div>
  );
};

export default ReportDetail;
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import'../Styles/AddPrescription.css';

import DoctorHeader from '../../Doctor/DoctorHeader';



const AddPrescription = () =>{

  //getting current date
  const current = new Date();
  const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`;
    
    const [elements,setElements] = useState({});
    const id = useParams().id;

    //fetching data related to the patient id
    useEffect(() => {
        const fetchHandler = async() =>{
          await axios
          .get(`http://localhost:5000/patients/viewPatient/${id}`)
          .then((res)=>res.data)
          .then(data=>setElements(data.patient));
        };
        fetchHandler();
      },[id])


    const history = useNavigate();

    //setting inputs which we got by the form
    const[inputs,setInputs] = useState({
        patientRegNo:"",
        aptDate:"",
        drg1Name:"",
        drg1Dosage:"",
        drg2Name:"",
        drg2Dosage:"",
        drg3Name:"",
        drg3Dosage:"",
        drg4Name:"",
        drg4Dosage:"",
        drg5Name:"",
        drg5Dosage:"",
        drg6Name:"",
        drg6Dosage:"",
        drg7Name:"",
        drg7Dosage:"",
        drg8Name:"",
        drg8Dosage:"",
        duration:"",
        lab1:"",
        lab2:"",
        lab3:"",
        lab4:"",
        lab5:"",
        remarks:"",
        nextApt:""
    });

    const handleChange = (event) =>{
        setInputs((prevState) =>({

            ...prevState,
            [event.target.name] : event.target.value

        }));
    };


    //sending request to the database to store collected
    const sendRequest = async() =>{
        await axios.post(`http://localhost:5000/Prescriptions/addPrescriptions`,{
            patientRegNo:String(id),
            aptDate:String(date),
            drg1Name:String(inputs.drg1Name),
            drg1Dosage:String(inputs.drg1Dosage),
            drg2Name:String(inputs.drg2Name),
            drg2Dosage:String(inputs.drg2Dosage),
            drg3Name:String(inputs.drg3Name),
            drg3Dosage:String(inputs.drg3Dosage),
            drg4Name:String(inputs.drg4Name),
            drg4Dosage:String(inputs.drg4Dosage),
            drg5Name:String(inputs.drg5Name),
            drg5Dosage:String(inputs.drg5Dosage),
            drg6Name:String(inputs.drg6Name),
            drg6Dosage:String(inputs.drg6Dosage),
            drg7Name:String(inputs.drg7Name),
            drg7Dosage:String(inputs.drg7Dosage),
            drg8Name:String(inputs.drg8Name),
            drg8Dosage:String(inputs.drg8Dosage),
            duration:Number(inputs.duration),
            lab1:String(inputs.lab1),
            lab2:String(inputs.lab2),
            lab3:String(inputs.lab3),
            lab4:String(inputs.lab4),
            lab5:String(inputs.lab5),
            remarks:String(inputs.remarks),
            nextApt:String(inputs.nextApt)
        }).then(res => res.data);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest()
        .then(alert("Prescription Added Successfully!"))
        .then(()=>history(`/viewPatientProfileForDoc/${id}`))
        .then(()=>(`/viewPrescriptions/${id}`))
         // indicates the page which will show after submitting the Pcription

    }



    return(
        <div>
          <DoctorHeader/>
          <br></br><br></br><br></br><br></br>
        <div className='form-ball'>

            <div className='form-Main-nwr'>

                <div class="Aform-row1r">

                    <div className='form-fullboxr'>

                        <h2 className='form-h22r'>Create New Prescription</h2>
                       
                           
                           
                            <form className='form-fromr' onSubmit={handleSubmit}>
                                <div className='form-fr'>
                                        {/*<h3 className='form-h3r'>Patient Registration Number: </h3>
                                                <div className='form-in'>
                                                        <input className='add-put' value={elements._id} onChange={handleChange} type={Text} name="patientRegNo" ></input>
                                                </div> */}                                   
                                        
                                                
                              <tr>
                                <td >
                                  <h3 className='form-h3r'>Drug 1:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg1Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg1Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>
                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg1Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg1Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 2:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg2Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg2Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>

                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg2Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg2Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 3:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg3Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg3Name"  ></input>
                                  </div>
                                  </td>

                                      <br/>

                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg3Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg3Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 4:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg4Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg4Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>
                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg4Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg4Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>





                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 5:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg5Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg5Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>
                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg5Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg5Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>

            


                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 6:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg6Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg6Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>
                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg6Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg6Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>


                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 7:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg7Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg7Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>
                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg7Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg7Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Drug 8:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg8Name} onChange={handleChange} placeholder="Metformin" type={Text} name="drg8Name"  ></input>
                                  </div>
                                  </td>
                                      <br/>
                                    <td>
                                  <h3 className='form-h3r'>Dosage:</h3>
                                  <div className='form-in'>
                                    <input className='add-put-dtrtd' value={inputs.drg8Dosage} onChange={handleChange} placeholder="50mg Nocte" type={Text} name="drg8Dosage"  ></input>
                                  </div>
                                  </td>
                                  </tr>


                                  <br></br>
              
                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>For:</h3>
                                  </td>
                                      <br/>
                                    <td>
                            
                                  <div className='form-in'>
                                    <input className='add-patii' value={inputs.duration} onChange={handleChange} placeholder="30" type={Text} name="duration"  required></input>
                                  </div>

                                  </td>
                                  <td>
                                  <h3 className='form-h3r'>Days</h3>

                                  </td>
                                  </tr>

          

                                  <tr>
                                  <td >
                                  <h3 className='form-h3r'>Next Appointment After: </h3>
                                  </td>
                                      <br/>
                                    <td>
                            
                                  <div className='form-in'>
                                    <input className='add-patii' value={inputs.nextApt} onChange={handleChange} placeholder="1" type={Text} name="nextApt"  required></input>
                                  </div>

                                  </td>
                                  <td>
                                  <h3 className='form-h3r'>Month/s </h3>

                                  </td>
                                  </tr>
                        
                                    <h3 className='form-h3r'>Remarks: </h3>
                                    <div className='form-in'>
                                            <input className='add-put-bnr' value={inputs.remarks} onChange={handleChange} placeholder="Enter details" type={'text'} name="remarks" ></input>
                                    </div>
                              

                                    <h3 className='form-h3r'>Test 1: </h3>
                                    <div className='form-in'>
                                            <input className='add-put-bnr' value={inputs.lab1} onChange={handleChange} placeholder="FBC" type={Text} name="lab1" ></input>
                                    </div>
                             

                                    <h3 className='form-h3r'>Test 2: </h3>
                                    <div className='form-in'>
                                            <input className='add-put-bnr' value={inputs.lab2} onChange={handleChange} placeholder="FBC" type={Text} name="lab2" ></input>
                                    </div>
                            

                                    <h3 className='form-h3r'>Test 3: </h3>
                                    <div className='form-in'>
                                            <input className='add-put-bnr' value={inputs.lab3} onChange={handleChange} placeholder="FBC" type={Text} name="lab3" ></input>
                                    </div>
                              

                                    <h3 className='form-h3r'>Test 4: </h3>
                                    <div className='form-in'>
                                            <input className='add-put-bnr' value={inputs.lab4} onChange={handleChange} placeholder="FBC" type={Text} name="lab4" ></input>
                                    </div>
                               

                                    <h3 className='form-h3r'>Test 5: </h3>
                                    <div className='form-in'>
                                            <input className='add-put-bnr' value={inputs.lab5} onChange={handleChange} placeholder="FBC" type={Text} name="lab5" ></input>
                                    </div>
                                    <br></br>

                                    <div className='form-b-patin'>
                                      <button className='form-button-24' type="submit"> Submit</button>
                                    </div>

                                    <br/><br/>
                                </div>
            
                
                
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}


export default AddPrescription;
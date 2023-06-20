import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Prescription from './Prescription';
import { useParams } from 'react-router-dom';
import '../Styles/Prescription.css';
import ReceptionHeader from '../ReceptionHeader';

//code block to to fetch prescriptions according to the patient id


const ViewPrescriptions = () =>{

    
    const[prescriptions, setPrescriptions] = useState();
    const id = useParams().id;
    

    //fetches prescriptions according to a certain patient ID
    useEffect(()=>{

        const fetchHandler = async() =>{
            
            await axios.get(`http://localhost:5000/prescriptions/viewByPatientID/${id}`)  //add id before running
            .then((res => res.data))
            .then(data=>setPrescriptions(data.prescriptions));
        };
        fetchHandler();
    },[id]);

    return( 
        <div>
                <ReceptionHeader/>
        <div  className='b'>
            <br></br>
                <div className='g'>
                    {prescriptions && 
                        prescriptions.map((prescription,i) =>(
                        <div key={i}>
                            <Prescription prescription = {prescription}/>
                        </div>
                    ))}
                </div>
            
        </div>
        </div>
    
    )
}

export default ViewPrescriptions;
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import LabPrescription from './LabPrescription';
import { useParams } from 'react-router-dom';
import Header from '../Header';

//code block to to fetch prescriptions according to the patient id


const ViewLabPrescriptions = () =>{

    
    const[prescriptions, setPrescriptions] = useState();
    const id = useParams().id;
    
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
                <Header/>
        <div  className='b'>
            <br></br>
                <div className='g'>
                    {prescriptions && 
                        prescriptions.map((prescription,i) =>(
                        <div key={i}>
                            <LabPrescription prescription = {prescription}/>
                        </div>
                    ))}
                </div>
            
        </div>
        </div>
    
    )
}

export default ViewLabPrescriptions;
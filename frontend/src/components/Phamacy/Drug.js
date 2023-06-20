import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './drugs.css';


const Drug = (props) => {

  const history = useNavigate();

  const {_id,drugsName,drugsExpiredDate,drugsCetagory,drugsMadeDate,drugsQuantity,drugsDescription } =props.drug;
  
  /*DETAIS DELETE IN DATABASE*/
  const deleteHandler = async () => {
    await axios
    .delete(`http://localhost:5000/drugs/${_id}`)
    .then((res)=> res.data)
    .then(alert("Drugs Delete Successfully"))
    .then(() => history("/"))
    .then(()=> history("/DeleteDrug"));
  }

  return (
    <div className='b'>

      <div className=' Dform-ball'>
                
        <div className='Dform-Min'>
                    
          <div class="Dform-rowdr">
                
              <div className='Dform-from'>
                                            
                <div className='Dform-f'>

                    <br></br>

                  <h3 className='Dform-h3'>Drug ID</h3>
                  <h3 className='Dform-in'>{_id}</h3>

               
                  <h3 className='Dform-h3'>Drug Name</h3>
                  <h3 className='Dform-in'>{drugsName}</h3>

                 

                  <h3 className='Dform-h3'>Drug ExpiredDate</h3>
                  <h3 className='Dform-in'>{drugsExpiredDate}</h3>

               

                  <h3 className='Dform-h3'>Drug Cetagory</h3>
                  <h3 className='Dform-in'>{drugsCetagory}</h3>

                 

                  <h3 className='Dform-h3'>Drug MadeDate</h3>
                  <h3 className='Dform-in'>{drugsMadeDate}</h3>


                  <h3 className='Dform-h3'>Drug Quantity</h3>
                  <h3 className='Dform-in'>{drugsQuantity}</h3>

                  

                  <h3 className='Dform-h3'>Drug Description</h3>
                  <h3 className='Dform-in'>{drugsDescription}</h3>

                  <br></br>
                  <table className='Dform-b'>
                  <tr>
                  <th><Link to={`/Drugs/${_id}`}class="form-button-4">Update</Link></th>
                  <th className='wdrt'></th>
                  <th><button className='form-button-2' onClick={deleteHandler}>Delete</button></th> 
                  </tr>
                  </table>
                  <br></br>



                </div>

              </div>

            </div>

          </div>

        </div>
      
        <br></br><br></br>
        
    </div>
  )
}; 

export default Drug;

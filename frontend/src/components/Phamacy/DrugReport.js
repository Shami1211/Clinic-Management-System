import React from 'react';
import './DrugReport.css';

const Drug = (props) => {

  const {drugsName,drugsQuantity,drugsCetagory} =props.drug; //GET NAME AND QUANTITY DETAILS IN REPORT
  
  return (
    <div >
      <div>
          <div className='report-tb' >
            <td className='report-terd'><h3 className='report-h3ry'>{drugsName}</h3></td>
            <td className='report-terd'><h3 className='report-h3ry' >{drugsQuantity}</h3></td>
            <td className='report-terd'><h3 className='report-h3ry' >{drugsCetagory}</h3></td>
          </div>
      </div>
    </div>
 
  )
}; 

export default Drug;

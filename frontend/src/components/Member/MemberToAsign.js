import React, { useState } from 'react';
import "./ViewMembers.css"
//import Select from 'react-select';
/*import {
  MenuItem,
  Select
} from "@mui/material";*/

import Select from 'react-select';




const MemberToAssign = (props) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const{_id, name, nic,position } = props.member;

  const options = [
    { value: ' Surgical', label: 'Surgical' },
    { value: ' Medical', label: 'Medical' },
    { value: 'Gynecology', label: 'Gynecology' },
    { value: ' Maternity', label: ' Maternity' },
    { value: 'Pediatrics', label: 'Pediatrics' },
    { value: 'Suwa Daru', label: 'Suwa Daru' },
    { value: 'Cardiology', label: 'Cardiology' },
    { value: 'ENT', label: 'ENT' },
    { value: 'Non', label: 'Non' },

  ];


  return (
    <tr>
      <td className='table-td'>{name}</td>
      <td className='table-td'>{nic}</td>
      <td className='table-td'>{position}</td>

       {/*<Select options={options} onChange={setSelectedOption} value={selectedOption}/>
       <MenuItem value = 'Suwa Daru'>Suwa Daru</MenuItem>  */}
  
      

      <Select options={options} onChange={setSelectedOption} value={selectedOption} />
<br></br>

    </tr>
    
    
  )
}

export default MemberToAssign;
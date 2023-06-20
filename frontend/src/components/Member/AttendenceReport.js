
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleAttendenceMember from './SingleAttendenceMember';
import { useReactToPrint } from 'react-to-print'
import { useNavigate } from 'react-router-dom'
import MemberHeader from '../Member/Nav01'

const URL = "http://localhost:5000/memberattendence/";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const MemberAttendence = () => {
  const [memberAttendence, setmemberAttendence] = useState();
  useEffect(() => {


    fetchHandler().then(data=>setmemberAttendence(data.memberAttendence))
    
  },[]);
  console.log(memberAttendence)

  const history = useNavigate();

  const componentRef = useState();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'members-attendence-report',
    onAfterPrint: ()=> alert('Print Success')
  });

  const deleteHandler = ()=>{
    axios.delete('http://localhost:5000/memberattendence/deletememberattendence')
    .then(res=>res.data)
    .then(()=> history("/report"))
  }

  return (
    <div>
      <MemberHeader /><br></br><br></br><br></br>
    <div ref={componentRef}>
      <ul>
       {memberAttendence && 
        memberAttendence.map((attendence, i) => (
          <div key={i}>
              <SingleAttendenceMember attendence={attendence}/>
          </div>
       ))}
       </ul>

       
       
    </div>

    <div className='labbtnn'>
        <tr className='detl' >
            <td className="td-btn">
        <button class="form-button-4078" onClick={handlePrint}>Print Report</button>
      </td>
      <td className='labrf'></td>
      <td className="td-btn" >
        <button class="form-button-40v" onClick={deleteHandler}>Delete Report</button>
      </td>
    </tr>
    </div>
    </div>
  )
}

export default MemberAttendence



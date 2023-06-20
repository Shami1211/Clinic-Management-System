
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberHeader from '../Member/Nav01'
import MemberToAssign from "./MemberToAsign";
import { useReactToPrint } from 'react-to-print'
import "./ViewMembers.css"
import { Button } from 'react-bootstrap'


const URL = 'http://localhost:5000/members/viewAllMembers';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const MemberAssign = () => {

  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const componentRef = useState();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'members-attendence-report',
    onAfterPrint: ()=> alert('Print Success')
  });

  const handleSearch = () => {
    fetchHandler().then(data => {
      const filteredMembers = data.members.filter(member =>
        Object.values(member).some(field =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setMembers(filteredMembers);
      setNoResults(filteredMembers.length === 0);
    });
  };

  useEffect(() => {
    fetchHandler().then(data => setMembers(data.members));
  }, []);

  console.log(members);
  return (
    <div>
      <MemberHeader />

      <br></br><br></br><br></br><br></br>
      <div className="topic">
      <h2 style={{ fontSize:32 }}>
        <center className='drughed'>Member Details</center>
      </h2>
      </div>
      <br></br>
      <div class="form-search" >
            <input className='serinpt' onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" placeholder="Search Drug Details.."></input>
            <button onClick={handleSearch} className="searchbutton">
            <i class="fa fa-search"></i>
            </button>   
            </div>
            <br></br>


      {noResults ? (
        <div className="no-results-container">
          <p className="no-results-text">No Results Found</p>
        </div>) : (
          <div ref={componentRef}>
<div className="view-tabler">
    
        <div className='bhu' >
          <table className="table" cellPadding={0} border="1px">
            <thead>
              <tr className="header-row">
                <td className="table-td"><b>Name</b></td>
                <td className="table-td"><b>NIC</b></td>
                <td className="table-td"><b>Position</b></td>
                <td className="table-td"><b>Assign</b></td>     
                
         
              </tr>
            </thead>
            <tbody>
              {members.map((member, i) => (
                <MemberToAssign key={i} member={member} />
              ))}
            </tbody>

            
          </table>

        </div>
        </div>
        </div>
        
        
      )}
                                    <br></br>

<div className='report-b'>
  <button className='report-button-24' onClick={handlePrint} >Download Report</button>
</div>

    </div>
  );
}

export default MemberAssign;
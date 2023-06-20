//Member table

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberHeader from '../Member/Nav01'
import Member from "./Member";
import "./ViewMembers.css"

const URL = 'http://localhost:5000/members/viewAllMembers';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

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
<br></br><br></br><br></br>


      <h1 className='drughed'>Staff Details</h1>

      <div class="form-search" >
            <input className='serinpt' onChange={(e) => setSearchQuery(e.target.value)} type="text" name="search" placeholder="Search Member Details.."></input>
            <button onClick={handleSearch} className="searchbutton">
            <i class="fa fa-search"></i>
            </button>   
            </div>
            <br></br> <br></br>

      {noResults ? (
        <div className="no-results-container">
          <p className="no-results-text">No Results Found</p>
        </div>) : (
        <div className="view-table">
          <table className="table" cellPadding={0} border="1px">
            <thead>
              <tr className="header-row">
                <td className="table-td"><b>Name</b></td>
                <td className="table-td"><b>Date of Birth</b></td>
                <td className="table-td"><b>NIC</b></td>
                <td className="table-td"><b>Phone Number</b></td>
                <td className="table-td"><b>Address</b></td>
                <td className="table-td"><b>Position</b></td>
                <td className="table-td" colSpan={2}><b>Actions</b></td>
              </tr>
            </thead>
            <tbody>
              {members.map((member, i) => (
                <Member key={i} member={member} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Members;